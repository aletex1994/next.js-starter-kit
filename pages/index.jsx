import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import VercelLogo from "../public/vercel.svg";
import Image from "next/image";

export default function Home() {
 return (
  <div className={styles.home}>
   <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <main>
    <h1 className={styles.home__title}>Next.js App</h1>
    <div className={styles.home__subtitle}>
     <a
      className={styles.home__link}
      href="https://vercel.com/dashboard?utm_source=next-site&utm_medium=learnpages&utm_campaign=next-website"
     >
      Deploy your Next.js app on
     </a>
     <a
      className={styles.home__link}
      href="https://vercel.com/dashboard?utm_source=next-site&utm_medium=learnpages&utm_campaign=next-website"
     >
      <Image
       className={styles.home__link}
       src={VercelLogo}
       alt="Vercel Logo"
       height={15}
      />
     </a>
    </div>
    <div className={styles.home__grid}>
     <div className={styles.home__card}>
      <h3>
       {" "}
       <Link
        className={`${styles["home__card-title"]}`}
        href="/posts/static-page"
       >
        Static page &rarr;
       </Link>
      </h3>
      <p className={`${styles["home__card-text"]}`}>
       Pre-rendering method that generates the HTML at build time. The
       pre-rendered HTML is then reused on each request.
      </p>
     </div>
     <div className={`${styles.home__card}`}>
      <h3>
       {" "}
       <Link className={`${styles["home__card-title"]}`} href="/posts/ssr-page">
        SSR page &rarr;
       </Link>
      </h3>
      <p className={`${styles["home__card-text"]}`}>
       Pre-rendering method that generates the HTML on each request.
      </p>
     </div>
    </div>
   </main>
  </div>
 );
}
