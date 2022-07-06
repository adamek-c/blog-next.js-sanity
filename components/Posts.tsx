import Link from "next/link";
import { FC } from "react";
import { Props } from "../pages";
import { urlFor } from "../sanity";
import moment from "moment";

const Posts: FC<Props> = ({ posts }) => {
	return (
		<article className="my-40">
			<div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-4 grow auto-rows-fr">
				{posts.map((post) => {
					return (
						<Link href={`/post/${post.slug.current}`} key={post._id}>
							<div className="group border border-slate-300 rounded overflow-hidden cursor-pointer">
								<header>
									<img
										src={urlFor(post.mainImage).url()!}
										alt={post.title}
										className="h-60 w-full object-cover group-hover:scale-105 transition"
									/>
								</header>
								<footer>
									<div className="m-4 px-2">
										<p className="text-xl font-semibold">{post.title}</p>
										<div className="flex justify-between w-full items-center">
											<p>
												Made by <strong>{post.author.name}</strong>
											</p>
											<img
												src={urlFor(post.author.image).url()!}
												alt={post.author.name}
												className="w-11 h-11 rounded-full object-cover"
											/>
										</div>
										<p>
											Published at{" "}
											<strong>
												{moment(post.publishedAt).format("MMM Do YY")}
											</strong>
										</p>
									</div>
								</footer>
							</div>
						</Link>
					);
				})}
			</div>
		</article>
	);
};

export default Posts;
