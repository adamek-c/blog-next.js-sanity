import type { NextPage } from "next";
import Head from "next/head";
import { sanityClient } from ".././sanity";

export const getServerSideProps = async () => {
	const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
  name
},
mainImage,
description,
publishedAt
}`;

	const posts = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};

const Home: NextPage = ({ props }) => {
	return (
		<div>
			<Head>
				<title>BlogFood</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className=" mt-[155px] max-w-screen-xl mx-auto px-6 xl:p-0">
				<h1>Home</h1>
			</div>
		</div>
	);
};

export default Home;
