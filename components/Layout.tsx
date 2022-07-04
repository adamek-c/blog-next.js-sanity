import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProp {
	children: ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
