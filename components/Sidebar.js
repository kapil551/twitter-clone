import Image from "next/image";
// import SidebarLink component
import SidebarLink from "./SidebarLink";

// import icons from HeroIcons
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
    return (

        /*
        Every responsive design in tailwind css is mobile first.
        */
        <div className="border-2 border-blue-500 hidden sm:flex flex-col items-center xl:items-start xl:w-[21.25rem] p-2 
                        fixed h-full">

            {/* logo image */}
            {/* creating my own custom class named "hoverAnimation" */}
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">

                <Image 
                    src="https://rb.gy/ogau5a" 
                    width={30} 
                    height={30}
                />

            </div>

            {/* sidebar links */}
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ClipboardListIcon} />
                <SidebarLink text="Profile" Icon={UserIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />

            </div>

            {/* tweet button */}
            <button className="text-white hidden xl:inline bg-[#1d9bf0] rounded-full
                                w-56 h-[3.25rem] text-lg font-bold shadow-md hover:bg-[#1a8cd8] ml-auto">
                Tweet
            </button>

            {/* user profile */}
            {/* creating my own custom class named "hoverAnimation" */}
            <div className="border-2 border-green-500 text-[#d9d9d9] flex items-center justify-center
                            xl:ml-auto xl:-mr-5 mt-auto hoverAnimation">

                {/* profile image */}
                <img 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    alt="profile-pic"
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                />

                {/* user description */}
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold"> user name </h4>
                    <p className="text-[#6e767d]"> @user tag </p>
                </div>

                <DotsCircleHorizontalIcon className="h-5 hidden xl:inline ml-10"/>

            </div>



        </div>
    )
}

export default Sidebar;
