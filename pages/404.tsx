import Link from "next/link";

const PageNotFound = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<h2 className="font-bold text-8xl font-playfairDisplay">404</h2>
			<h4 className="mt-10 font-bold text-2xl font-openSans">
				Uh Oh! You're lost.
			</h4>
			<p className="mt-4 px-4 max-w-lg font-openSans">
				The page you are looking for does not exist. How you got here is a
				mystery. But you can click the button below to go back to the homepage.
			</p>
			<div className="mt-10">
				<Link href="/" className="">
					<a className="font-playfairDisplay font-medium text-xl border-2 py-3 px-6">
						Sweet Home
					</a>
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
