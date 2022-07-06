import Head from "next/head";
import { useState } from "react";
import { sanityClient } from ".././sanity";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import { Post } from "../type";

export interface Props {
	posts: Post[];
}

export const getServerSideProps = async () => {
	const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
  name,
	image
	},
	mainImage,
	description,
	publishedAt,
	categories
	}`;

	const posts = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};

const Home = ({ posts }: Props) => {
	return (
		<div>
			<Head>
				<title>BlogFood</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<Banner title="Find you're dish and try to make!!!" bg="/bg.png" />
			</section>
			<section>
				<Posts posts={posts} />
			</section>
		</div>
	);
};

export default Home;
