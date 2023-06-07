import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';

import styles from './index/index.module.css';
import SocialLinks from "./index/_components/_SocialLinks";

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
  }, []);
  return (
    <Layout
      title={`Home`}
      description="Software Developer, Flutter Developer"
    >

      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
        >
          <p>Hi, my name is</p>
          <h1 className="text-success">Justin Enerio</h1>
          <p>
            I am a <span className="text-warning">Software Engineer</span> focused on 
            <span className="text-danger"> Flutter Development</span>, passionate about
            solving meaningful problems.
          </p>
          <SocialLinks />
        </div>
      </header>
    </Layout>
  );
}

export default Home;