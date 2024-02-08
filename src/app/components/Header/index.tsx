"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/shared/assets/imgs/logo.png";
import {
	searchIcon,
	notificationIcon,
	globalIcon,
	addIcon,
	menuIcon,
} from "@/shared/assets/icons";

import profileImg from "@/shared/assets/imgs/profile-img.png";
import classes from "./style.module.scss";

export default function Header() {
	const pathname = usePathname();
	return (
		<div className={`bg-white ${classes.header}`}>
			<div className="container mx-auto h-16 px-2 lg:px-10 flex items-center gap-2">
				<Image src={logo} alt="logo" className="order-2 lg:order-1" />

				{/*  In this list, I applied the styled using custom classes */}
				<ul className="h-full flex-1 items-center gap-10 px-8 bg-sky nav-list hidden lg:flex order-2">
					<li className={`list-item ${pathname === "/" ? "active" : ""}`}>
						<Link href="/">Home</Link>
					</li>
					<li
						className={`list-item ${
							pathname === "/blog" ? "active" : ""
						}`}
					>
						<Link href="/blog">Blog</Link>
					</li>
					<li
						className={`list-item ${
							pathname === "/gifts" ? "active" : ""
						}`}
					>
						<Link href="/gifts">Gifts</Link>
					</li>
					<li
						className={`list-item ${
							pathname === "/categories" ? "active" : ""
						}`}
					>
						<Link href="/categories">Categories</Link>
					</li>
				</ul>
				<div className="lg:hidden order-1 p-1 flex items-center rounded-md hover:bg-gray-100 cursor-pointer">
					<Image src={menuIcon} alt="menu-icon" />
				</div>

				{/* In the this list, I applied all the sytle using Tailwind CSS classes */}
				<ul className="flex items-center justify-end gap-2 h-3/5 order-3 grow lg:grow-0">
					<li className="h-full px-3 flex items-center rounded-md hover:bg-gray-100 cursor-pointer">
						<Image src={searchIcon} alt="search-icon" width={20} />
					</li>
					<hr className="h-full w-px bg-red-100 hidden lg:block" />
					<li className="h-full px-3 flex items-center rounded-md hover:bg-gray-100 cursor-pointer">
						<Image
							src={notificationIcon}
							alt="notification-icon"
							width={20}
						/>
					</li>
					<hr className="h-full w-px bg-red-100 hidden lg:block" />
					<li className="h-full px-3 flex items-center cursor-pointer">
						<Image
							src={profileImg}
							alt="profile-img"
							width={30}
							className="rounded-full"
						/>
					</li>
					<li className="h-full px-3 flex items-center hidden lg:block">
						<button className="gradient-button flex items-center gap-1 py-2.5 px-4 rounded-xl text-xs">
							<Image src={addIcon} alt="add-icon" width={18} />
							<span>Add New Product</span>
						</button>
					</li>
					<li className="h-full flex items-center gap-1 hidden lg:flex">
						<div className="p-1 flex items-center rounded-md hover:bg-gray-100 cursor-pointer">
							<Image src={globalIcon} alt="language-icon" width={20} />
						</div>
						<hr className="h-3/5 w-px bg-gray-300" />
						<div className="p-1 flex items-center rounded-md hover:bg-gray-100 cursor-pointer">
							<span>EN</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
