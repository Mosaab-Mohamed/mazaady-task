import Image from "next/image";
import Product, { ProductProps } from "./components/home/Product";
import { addIcon } from "@/shared/assets/icons";
import QRCode from "./components/home/QRCode";
import Hero from "./components/home/Hero";

const mockData: ProductProps[] = [
	{
		name: "Six-piece clothing set (blouse - pants - hat and ...",
		price: 1000,
		image: "/imgs/product1.png",
		isFavorite: false,
		saleType: "Hot Sale",
	},
	{
		name: "Jeep Car, new, used for only one time",
		price: 1000,
		image: "/imgs/product2.png",
		isFavorite: false,
		saleType: "Live Auction",
	},
	{
		name: "Six-piece clothing set (blouse - pants - hat and ...",
		price: 500,
		image: "/imgs/product3.png",
		isFavorite: true,
		saleType: "Live Auction",
	},
	{
		name: "Jeep Car, new, used for only one time",
		price: 1000,
		image: "/imgs/product4.png",
		isFavorite: true,
		saleType: "Live Auction",
	},
];

export default async function Home() {
	return (
		<main>
			<div className="grid grid-cols-3 gap-7">
				<div className="col-span-3 lg:col-span-1">
					<Hero />
					<QRCode />
				</div>
				<div className="col-span-3 lg:col-span-2">
					<div className="bg-white rounded-2xl p-5">
						<div className="flex justify-between mb-5">
							<div className="flex gap-3 flex-1">
								<button className="py-1.5 px-5 border border-orange-400 rounded-2xl text-sm bg-orange-50 text-orange-500 grow lg:grow-0">
									Products
								</button>
								<button className="py-1.5 px-5 border border-gray-200 rounded-2xl text-sm  text-gray-500 grow lg:grow-0">
									Articles
								</button>
								<button className="py-1.5 px-5 border border-gray-200 rounded-2xl text-sm  text-gray-500 grow lg:grow-0">
									Reviews
								</button>
							</div>
							<button className="gradient-button flex items-center gap-1 py-2.5 px-4 rounded-xl text-xs fixed bottom-10 right-10 lg:static">
								<Image src={addIcon} alt="add-icon" width={18} />
								<span>Add Review</span>
							</button>
						</div>
						<div className="flex items-center gap-1 mb-3">
							<h1 className="text-2xl font-bold text-slate-800">
								Products
							</h1>
							<span className="text-xs text-slate-600">( 12 )</span>
						</div>
						<div>
							{mockData.map((product, index) => (
								<Product
									key={index}
									name={product.name}
									price={product.price}
									image={product.image}
									isFavorite={product.isFavorite}
									saleType={product.saleType}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
