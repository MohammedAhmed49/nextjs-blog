import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home/featured-posts/FeaturedPosts";
import Hero from "../components/home/hero/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Mo's Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log(featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
