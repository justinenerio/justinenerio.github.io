import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useSpring, animated } from 'react-spring';

import styles from './index.module.css';

const AboutMe = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fade} className="flex flex-col items-center justify-center py-8 md:py-16">
      <h2 className="text-3xl font-bold mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-4xl px-8">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0" style={{ flex: 3 }}>
          <p className="mb-4">
          Welcome! I'm Justin Enerio, a dedicated Flutter Developer specializing in frontend work. 
          With a keen eye for design and a passion for creating seamless user experiences, I bring 
          ideas to life through intuitive interfaces and clean code. I stay at the forefront of 
          emerging technologies, constantly learning and adapting to deliver innovative solutions.
          </p>
          <p className="mb-4">
            When I'm not coding, I love to travel, run, and experiment with coffee brewing 
            techniques. These hobbies bring balance to my life and inspire fresh perspectives.
          </p>
          <p className="mb-4">
            I'm always looking for new challenges and opportunities to learn and grow 
            as a developer. If you have a project you'd like to collaborate on, 
            feel free to reach out to me!
          </p>
        </div>
        <div className="w-48 h-48 rounded-full overflow-hidden hover:border-2 hover:border-blue-500 hover:scale-110 transition-all duration-300" style={{ flex: 1 }}>
          <img src="https://github.com/justinenerio.png" alt="Profile Picture" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </animated.div>
  );
};

export default function About(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`About`}
        description="Software Developer, Flutter Developer">
          <AboutMe />
      </Layout>
    );
  }
  