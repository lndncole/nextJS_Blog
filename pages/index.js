import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, and welcome to my website!</p>
        <br/>
        <p>
          This is the first entry of my website - I'm learning about this via the
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}