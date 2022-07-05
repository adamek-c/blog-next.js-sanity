import { FC } from "react";

interface Banner {
	title?: string;
	bg?: string;
}

const Banner: FC<Banner> = ({ title, bg }) => {
	console.log(bg);

	return (
		<div className=" mt-[155px] max-w-screen-xl mx-auto px-6 xl:p-0">
			<div
				className=" w-full bg-cover bg-no-repeat bg-fixed h-96 relative bg-center"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<h1 className="flex justify-center items-center h-full text-white text-4xl px-3 lg:text-5xl font-bold font-openSans">
					{title}
				</h1>
			</div>
		</div>
	);
};

export default Banner;
