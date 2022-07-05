import { FC } from "react";

interface Banner {
	title: string;
	bg: string;
}

const Banner: FC<Banner> = ({ title, bg }) => {
	return (
		<div className=" mt-[155px] ">
			<div
				className="w-full bg-cover bg-no-repeat bg-fixed h-96 relative bg-center"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<h2 className="flex justify-center items-center h-full text-white text-4xl px-3 lg:text-5xl font-bold font-openSans">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default Banner;
