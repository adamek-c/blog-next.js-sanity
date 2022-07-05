import Link from "next/link";
import { FC } from "react";
import { Props } from "../pages";
import { urlFor } from "../sanity";

const Posts: FC<Props> = ({ posts }) => {
	console.log(posts);

	return (
		<article className="my-40">
			<div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-4 grow auto-rows-fr">
				{posts.map((post) => {
					return (
						<div key={post._id}>
							<div className="group border border-slate-300 rounded overflow-hidden">
								<header>
									<img
										src={urlFor(post.mainImage).url()!}
										alt={post.title}
										className="h-60 w-full object-cover group-hover:scale-105 transition"
									/>
								</header>
							</div>
						</div>
					);
				})}
			</div>
		</article>
	);
};

export default Posts;
