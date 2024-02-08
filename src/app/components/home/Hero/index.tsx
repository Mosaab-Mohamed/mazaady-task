import Image from "next/image";
import profileImg from "@/shared/assets/imgs/profile-img.png";
import {
	userTickIcon,
	profile2userIcon,
	starIcon,
} from "@/shared/assets/icons";

export default function Hero() {
	return (
		<div className="bg-white rounded-2xl p-5 mb-5">
			<Image src={profileImg} alt="profile-img" className="mb-3" />
			<p className="text-xl font-semibold mb-1">Hala Ahmed</p>
			<p className="text-xs font-light mb-5">
				I am Hala Ahmed, I am the owner of the local brand called Beauty
				which is for Mackeup and Skin Care.
			</p>
			<div className="flex gap-2 mb-5">
				<div className="flex items-center gap-2 flex-1 bg-orange-50 rounded-2xl p-2 py-3">
					<Image src={userTickIcon} alt="icon-user" />
					<div>
						<p className="text-sm font-semibold">5</p>
						<p className="text-xs text-orange-400">Following</p>
					</div>
				</div>
				<div className="flex items-center gap-2 flex-1 bg-orange-50 rounded-2xl p-2 py-3">
					<Image src={profile2userIcon} alt="icon-user" />
					<div>
						<p className="text-sm font-semibold">20</p>
						<p className="text-xs text-orange-400">Followers</p>
					</div>
				</div>
				<div className="flex items-center gap-2 flex-1 bg-orange-50 rounded-2xl p-2 py-3">
					<Image src={starIcon} alt="icon-user" />
					<div>
						<p className="text-sm font-semibold">
							4.2{" "}
							<span className="text-xs font-light text-slate-500">
								( 15 )
							</span>
						</p>
						<p className="text-xs text-orange-400">Rate</p>
					</div>
				</div>
			</div>
			<button className="gradient-button w-full p-3 py-2.5 rounded-xl">
				Follow
			</button>
		</div>
	);
}
