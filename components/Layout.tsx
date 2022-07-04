import { FC, ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProp {
	children: ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
		</>
	);
};

export default Layout;
