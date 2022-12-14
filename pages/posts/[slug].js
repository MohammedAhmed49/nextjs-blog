import Head from "next/head";
import React, { Fragment } from "react";
import PostContent from "../../components/posts/post-details/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const SinglePostPage = (props) => {
  console.log(props.post);
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default SinglePostPage;
