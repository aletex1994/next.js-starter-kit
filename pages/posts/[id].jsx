import Layout from "../../components/layout";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/PostPage.module.css";

const MyPost = ({ post }) => {
 return (
  <Layout>
   <h3 className={styles.postpage__title}>{post.title}</h3>
   <Link href="/posts/static-page" className={styles.postpage__menulink}>
    ← Back
   </Link>
   <p className={styles.postpage__text}>{post.body}</p>
  </Layout>
 );
};

export default MyPost;

export const getStaticPaths = async () => {
 const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
 const postsData = await res.data;
 const paths = postsData.map((post) => ({
  params: { id: post.id.toString() },
 }));
 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps = async ({ params }) => {
 const res = await axios.get(
  `https://jsonplaceholder.typicode.com/posts/${params.id}`
 );
 const post = await res.data;
 return {
  props: {
   post,
  },
 };
};
