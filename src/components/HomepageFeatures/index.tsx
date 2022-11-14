import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Project',
    Svg: require('@site/static/img/undraw_scrum_board_re_wk7v.svg').default,
    description: (
      <>
        As a project manager, I would like to share my experience in project procedures, tools, templates,etc.
      </>
    ),
  },
  {
    title: 'Technology',
    Svg: require('@site/static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        As a technical geek, I want to record the technical content I have learned and provide it to you for reference or look forward to your guidance .
      </>
    ),
  },
  {
    title: 'Life',
    Svg: require('@site/static/img/undraw_in_real_life_v8fk.svg').default,
    description: (
      <>
        In addition to the project and technology, I also want to share my other bits and pieces.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
