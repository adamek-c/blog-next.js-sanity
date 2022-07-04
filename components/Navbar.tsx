import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<header>
			<nav className="flex justify-between max-w-screen-xl mx-auto pt-8 fixed top-0 left-0 right-0 items-center px-6 ">
				<div>
					<Image src="/logo.png" alt="Logo Food blog" width={271} height={35} />
				</div>
				<div className="space-x-10 text-xl font-normal font-openSans hidden md:flex">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
