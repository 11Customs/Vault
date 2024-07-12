import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Knowledge Accumulated',
    Svg: require('@site/static/img/vault_main_page.svg').default,
    description: (
      <>
        The preservation of knowledge is an important task that we as humans face, therefore this website. 
        You can read more about the project here.
      </>
    ),
  },
  {
    title: 'Community Effort',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        We welcome any of your additions to The Vault. For the upload requirements visit this page.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        As usual most of our software and hardware prjects are opensourced.
        You can find the code for the Vault <a href="https://github.com/11Customs/Vault">here</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
