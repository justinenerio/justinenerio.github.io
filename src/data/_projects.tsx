import React from "react";

const projects : any = [
  {
    category: "Project",
    title: "nodejs-mysql-cloudformation",
    slug: "#nodejs-mysql-cloudformation",
    subtitle:
      "An example for deploying a NodeJS app to Beanstalk using AWS CloudFormation.",
    period: "November 2020",
    tech: "AWS CloudFormation",
    description: (
      <>
        <p>
          An example of how you can perform Infrastructure-As-Code (IaC) using
          AWS CloudFormation and Continuous-Integration/Continuous-Deployment
          (CI/CD) using AWS CodePipeline.
        </p>
        <p>
          This example deploys the NodeJS-ExpressJS-MySQL
          Create-Read-Update-Delete (CRUD) application at{" "}
          <a href="https://github.com/DigiPie/nodejs-mysql-aws-beanstalk">
            DigiPie/nodejs-mysql-aws-beanstalk
          </a>
          , by using the CloudFormation IaC templates in this repository and
          setting up a simple AWS CodePipeline.
        </p>
        <p>
          I worked on this project to learn more about the{" "}
          <a href="https://www.hashicorp.com/resources/getting-started-with-infrastructure-as-code-iac">
            Infrastructure-as-Code
          </a>{" "}
          concept and{" "}
          <a href="https://aws.amazon.com/cloudformation/">
            AWS CloudFormation
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/nodejs-mysql-cloudformation",
      },
    ],
  },
  {
    category: "Website",
    title: "KayaFolio",
    slug: "#kaya-folio",
    // imageUrl: "img/projects/kayafolio.png",
    subtitle:
      "A software engineer portfolio template built with Docusaurus v2 and ReactJS.",
    period: "October 2020 to Present",
    tech: "Docusaurus v2, ReactJS",
    description: (
      <>
        <p>
          I first started this portfolio template project back in October 2020.
          The template has gone through numerous iterations ever since, and is
          still updated presently.
        </p>
        <p>
          I built it using{" "}
          <a href="https://v2.docusaurus.io/" target="_blank">
            Docusaurus v2
          </a>{" "}
          and{" "}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>
          .
        </p>
        <p>
          <a href="https://github.com/DigiPie/kaya-folio/workflows/deploy-docusaurus/badge.svg">
            <img src="https://github.com/DigiPie/kaya-folio/workflows/deploy-docusaurus/badge.svg" />
          </a>{" "}
          <a href="https://camo.githubusercontent.com/5111623fd1442456a5718af6ff9c8e4bf080e3756511b436343eac4971bb518a/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f75726c3d68747470732533412532462532466576616e7461792e636f6d">
            <img src="https://camo.githubusercontent.com/5111623fd1442456a5718af6ff9c8e4bf080e3756511b436343eac4971bb518a/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f75726c3d68747470732533412532462532466576616e7461792e636f6d" />
          </a>
        </p>
        <p>
          I wrote this template for my own use but you are free to use it as
          long as you credit me. Check out the{" "}
          <a href="https://github.com/DigiPie/kaya-folio">GitHub repository</a>{" "}
          for how to do so.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/kaya-folio",
      },
      {
        name: "Website",
        link: "https://evantay.com/",
      },
      {
        name: "Blog post: History of EvanTay.com",
        link: "http://evantay.com/blog/history",
      },
    ],
  },
];

export default projects;
