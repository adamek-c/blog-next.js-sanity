import Head from "next/head";
import { sanityClient } from ".././sanity";
import Banner from "../components/Banner";
import { Post } from "../type";

interface Props {
	posts: Post[];
}

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

const Home = ({ posts }: Props) => {
	return (
		<main>
			<Head>
				<title>BlogFood</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<Banner title="Find you're dish and try to make!!!" bg="/bg.png" />
			</section>
		</main>
	);
};

export default Home;
