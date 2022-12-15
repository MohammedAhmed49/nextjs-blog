import { Fragment } from "react";
import FeaturedPosts from "../components/home/featured-posts/FeaturedPosts";
import Hero from "../components/home/hero/Hero";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
