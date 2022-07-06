import { GetStaticProps } from "next";

import { sanityClient } from "../../sanity";
import { Post } from "../../type";

export const getStaticPaths = async () => {
	const query = `*[_type == "post"]{
  _id,
  slug {
    current
    }
	}`;

	const posts = await sanityClient.fetch(query);

	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}));
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `*[_type == "post" && slug.current == $slug][0]{
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

	const post = await sanityClient.fetch(query, {
		slug: params?.slug,
	});

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post,
		},
	};
};

interface Props {
	post: Post;
}

const slug = ({ post }: Props) => {
	console.log(post);

	return <div></div>;
};

export default slug;
