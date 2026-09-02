import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Knowledge Accumulated',
    image: '/img/knowledge.svg',
    description: (
      <>
        Something about the good-ness of accumulating information, this and that, you get it. Eventually this will be your ultimate guide to PC periphery
      </>
    ),
  },
  {
    title: 'Community Effort',
    image: '/img/communityeffort.svg',
    description: (
      <>
        Any of your additions to The Vault are more than welcome. Soon there will be a how-to-contribute page
      </>
    ),
  },
  {
    title: 'Open Source',
    image: '/img/opensource.svg',
    description: (
      <>
        I try to make my projects as open suorce as possible. Even this website is open source
      </>
    ),
  },
];

function Feature({Svg, image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {image && <img src={image} className={styles.featureSvg} alt={title} />}
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
