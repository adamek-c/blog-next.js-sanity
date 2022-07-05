import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProp {
	children: ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
	return (
		<div className="max-w-screen-xl mx-auto px-6 xl:p-0">
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
