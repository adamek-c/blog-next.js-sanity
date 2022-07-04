import { useEffect, useState } from "react";

export const useScroll = (): number => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const position = () => setScroll(window.pageYOffset);

		window.addEventListener("scroll", position);

		position();

		return () => window.removeEventListener("scroll", position);
	}, []);

	return scroll;
};
