import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function About(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Projects`}
        description="Software Developer, Flutter Developer">
      </Layout>
    );
  }
  