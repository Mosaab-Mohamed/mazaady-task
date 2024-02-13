import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { heartIcon, filledHeartIcon } from "@/shared/assets/icons";

export type ProductProps = {
	name: string;
	price: number;
	image: string | StaticImport;
	isFavorite: boolean;
	saleType: "Live Auction" | "Hot Sale";
};

export default function Product(props: ProductProps) {
	return (
		<div className="flex gap-2 mb-7 ">
			<div className="relative overflow-hidden rounded-3xl w-32 lg:w-36 h-28 lg:h-36">
				<Image src={props.image} alt="product" fill={true} />
				<div
					className={`absolute right-0 bottom-0 ${
						props.saleType === "Hot Sale"
							? "bg-orange-500"
							: "bg-rose-700"
					} p-2 w-4/5 lg:w-4/6 rounded-tl-3xl text-xs text-center text-white`}
				>
					{props.saleType}
				</div>
				<div className="lg:hidden absolute top-3 left-3 bg-white p-1 rounded-full w-6">
					<Image
						src={props.isFavorite ? filledHeartIcon : heartIcon}
						alt="heart-icon"
						className="cursor-pointer"
					/>
				</div>
			</div>
			<div className="lg:flex-1 text-xs lg:text-base">
				<p className="mb-2 font-light text-wrap">
					Six-piece clothing set (blouse - pants - hat and ...
				</p>
				<p className="text-slate-500 lg:text-sm mb-3">
					Starting Price{" "}
					<span className="lg:text-xl text-slate-800 font-bold">
						{props.price} EGP
					</span>
				</p>
				<div className="lg:flex items-center gap-2">
					<p className="text-slate-500 lg:text-sm">Lots Starts in</p>
					<div className="flex items-center gap-2">
						<div className="bg-orange-50 rounded-3xl py-2 lg:py-1.5 px-1 lg:px-5 text-orange-400 font-semibold text-xs lg:text-base grow sm:grow-0 text-center sm:text-start">
							2 <span className="text-xs">Days</span>
						</div>
						<div className="bg-orange-50 rounded-3xl py-2 lg:py-1.5 px-1 lg:px-5 text-orange-400 font-semibold grow text-xs lg:text-base sm:grow-0 text-center sm:text-start">
							10 <span className="text-xs">Hours</span>
						</div>
						<div className="bg-orange-50 rounded-3xl py-2 lg:py-1.5 px-1 lg:px-5 text-orange-400 font-semibold grow text-xs lg:text-base sm:grow-0 text-center sm:text-start">
							50 <span className="text-xs">Minutes</span>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block ">
				<Image
					src={props.isFavorite ? filledHeartIcon : heartIcon}
					alt="heart-icon"
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
}
