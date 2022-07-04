import Link from "next/link";
import Image from "next/image";
import { useScroll } from "../hooks/useScroll";

const classNames = (...classes: any) => {
	return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
	const scrollPosition = useScroll();

	return (
		<header>
			<nav
				className={classNames(
					scrollPosition > 0 ? "shadow" : "shadow-none",
					" w-full py-8  fixed top-0 left-0 right-0  px-6 bg-white transition-shadow"
				)}
			>
				<div className="max-w-screen-xl mx-auto flex justify-between items-center">
					<div>
						<Image
							src="/logo.png"
							alt="Logo Food blog"
							width={271}
							height={35}
						/>
					</div>
					<div className="space-x-10 text-lg text-zinc-700 font-openSans hidden md:flex">
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/contact">Contact</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
