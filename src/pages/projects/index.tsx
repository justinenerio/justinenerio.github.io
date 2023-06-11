import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faFile,
  faGamepad,
  faLink,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";
import {
  Project,
  ProjectList,
} from '../../data/_projects';

function CategoryIcon({ category }) {
  let faIcon;
  switch (category) {
    case "Project":
      faIcon = faFile;
      break;
    case "Open Source Tool":
      faIcon = faTools;
      break;
    case "Website":
      faIcon = faChrome;
      break;
    case "Game":
      faIcon = faGamepad;
      break;
    default:
      faIcon = faFile;
  }

  return <FontAwesomeIcon title={category} icon={faIcon} size="1x" />;
}

export function ProjectListings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-4">
      {ProjectList.map((project) => (
        <div
          id={project.title}
          key={project.title + "-card"}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <Link
            to={useBaseUrl(project.slug)}
            className="block h-full no-underline hover:no-underline"
          >
            {project.imageUrl ? (
              <div className="overflow-hidden h-40 w-full md:h-48">
                <img src={useBaseUrl(project.imageUrl)} alt={project.title} />
              </div>
            ) : (
              <div
                className={"overflow-hidden bg-orange h-40 md:h-48"}
              >
                <h2 className="m-3 inline-block">{project.title}</h2>
              </div>
            )}
            <div className="pt-4 px-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.period}</p>
              <p className="text-gray-600">{project.subtitle}</p>
              {project.tech.length > 0 && (
                <div className="flex flex-wrap mt-2">
                  {project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-gray-200 text-gray-800 text-sm rounded-full px-3 py-1 mr-2 mb-2 border border-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-primary-default font-bold">Read more</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export function ProjectListing(props) {
  const projectItem: Project = props.projectItem;
  return (
    <div className={clsx("text--center margin-bottom--xl px-4", styles.projectItem)}>
      <Link to={useBaseUrl("/projects")}>
        <button className="border-0 rounded py-2 px-4 mb-2  text-lg cursor-pointer">
          Back
        </button>
      </Link>
      <h1>{projectItem.title}</h1>
      <h2>{projectItem.subtitle}</h2>
      {projectItem.imageUrl && (
        <img src={useBaseUrl(projectItem.imageUrl)} alt={projectItem.title} />
      )}
      <div>
        <ul>
          <li>
            <CategoryIcon category={projectItem.category} />{" "}
            {projectItem.category}
          </li>
          <li>
            <FontAwesomeIcon title="Calendar" icon={faCalendar} />{" "}
            {projectItem.period}
          </li>
          <li>
            <FontAwesomeIcon title="Code" icon={faCode} /> {projectItem.tech.join(", ")}
          </li>
        </ul>
        <b>Description</b>
        <div>{projectItem.description}</div>
        {projectItem.links && (
          <>
            <b>Links</b>
            <ul>
              {projectItem.links.map((link, i) => (
                <li key={i}>
                  <a href={link.link} target="_blank">
                    <FontAwesomeIcon title="Link" icon={faLink} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to={useBaseUrl("/projects")}>
        <button className="border-0 rounded py-2 px-4 text-lg cursor-pointer">
          More projects
        </button>
      </Link>
    </div>
  );
}

export default function Projects() {
  const context = useDocusaurusContext();

  const [loaded, setLoaded] = useState(false);
  const [showProjectItem, setShowProjectItem] = useState(false);
  const [projectItem, setProjectItem] = useState(ProjectList[0]);
  const slug = useLocation();

  useEffect(() => {
    function handleTransition() {
      let foundProject;
      if (slug.hash) {
        foundProject = ProjectList.find((project) => project.slug == slug.hash);
      }

      if (foundProject) {
        setProjectItem(foundProject);
        setShowProjectItem(true);
        window.scrollTo(0, 0);
      } else {
        setShowProjectItem(false);
      }

      setLoaded(true);
    }

    handleTransition();
  });

  return (
    <Layout title="Projects" description="Software Developer, Flutter Developer">
      <header className={styles.projectPageHeader}>
        <h2 className="text-3xl border-0 border-b-4 py-8">
          Projects
        </h2>
      </header>
      {loaded && (
        <main>
          <div className="py-6 md:py-12">
            <div className="my-0 mx-auto max-w-7xl">
              {!showProjectItem && <ProjectListings />}
              {showProjectItem && <ProjectListing projectItem={projectItem} />}
            </div>
          </div>
        </main>
      )}
    </Layout>
  );
}
