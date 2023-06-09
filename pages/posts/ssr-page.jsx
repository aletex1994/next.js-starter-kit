import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import axios from "axios";
import styles from "../../styles/PostsPage.module.css";
import MailForm from "../../components/mailForm";
const SsrPage = ({ postsData }) => {
 // or props
 // const {postsData} = props

 return (
  <Layout>
   <Head>
    <title>SSR Post Page</title>
   </Head>
   <h3 className={styles.postspage__title}>SSR Page</h3>
   <br />
   <Link className={styles.postspage__menulink} href="/">
    ← Home
   </Link>
   <MailForm />
   <div className={styles.postspage__postscontainer}>
    {postsData.map((post, index) => (
     <div
      key={`${post.id}_${index}`}
      className={`${styles["postspage__postscontainer-post"]}`}
     >
      <h3 className={`${styles["postspage__postscontainer-post__title"]}`}>
       {post.title}
      </h3>
      <p className={`${styles["postspage__postscontainer-post__text"]}`}>
       {post.body}
      </p>
      <div className={`${styles["postspage__postscontainer-post__link"]}`}>
       <Link href={`/posts/${post.id}`}>Read full post 👓 </Link>
      </div>
      <hr />
     </div>
    ))}
   </div>
  </Layout>
 );
};
export default SsrPage;

export async function getServerSideProps() {
 const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
 const postsData = await res.data;
 //important : return{props:{...}}
 return {
  props: {
   postsData,
  },
 };
}
