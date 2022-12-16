import { Fragment } from "react";
import FeaturedPosts from "../components/home/featured-posts/FeaturedPosts";
import Hero from "../components/home/hero/Hero";

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
