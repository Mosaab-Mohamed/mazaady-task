"use client";
import { useState } from "react";
import Image from "next/image";
import {
	eyeIcon,
	shareIcon,
	documentIcon,
	orangeDocumentIcon,
	arrow,
} from "@/shared/assets/icons";
import QRCodeImg from "@/shared/assets/imgs/QRCode.png";
import logo from "@/shared/assets/imgs/logo.png";

export default function QRCode() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="bg-white rounded-2xl p-5">
			<div className={`flex justify-between mb-${isOpen ? "3" : "0"}`}>
				<p className="text-xl font-semibold">QR Code</p>
				<ul className="flex items-center gap-2">
					<li className="cursor-pointer rounded-lg hover:bg-gray-100 p-1">
						<Image src={eyeIcon} alt="eye-icon" />
					</li>
					<li className="cursor-pointer rounded-md hover:bg-gray-100 p-1">
						<Image src={shareIcon} alt="share-icon" />
					</li>
					<li className="cursor-pointer rounded-md hover:bg-gray-100 p-1">
						<Image src={documentIcon} alt="document-icon" />
					</li>
					<li
						className={`lg:hidden cursor-pointer rounded-full  w-6 h-6 flex items-center justify-center ${
							!isOpen ? "bg-gray-100" : "bg-orange-100 rotate-180"
						}`}
						onClick={() => setIsOpen(!isOpen)}
					>
						<Image src={arrow} alt="arrow-icon" />
					</li>
				</ul>
			</div>
			{isOpen && (
				<div>
					<div className="flex items-center gap-2 bg-orange-50 rounded-2xl p-3 mb-4">
						<Image src={orangeDocumentIcon} alt="document-icon" />
						<p className="text-xs">
							Download the QR code or share it with your friends.
						</p>
					</div>
					<div className="primary-bg-gradient rounded-2xl p-5 ">
						<div className="bg-white rounded-2xl p-4 flex flex-col items-center">
							<Image src={logo} alt="logo" className="mb-2" />
							<p className="text-xl font-semibold">Hala Ahmed</p>
							<Image src={QRCodeImg} alt="QRCode" />
							<p className="text-sm">Follow Us On Mazady</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
