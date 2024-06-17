import React from 'react'
import Link from "next/link";
import { NEXT_PUBLIC_GATEWAY_URL } from "../../app/constants";


const Topbar = ({profile}) => {
  return (
    <div className="text-white  flex flex-col ">
    <div>
      <img 
        className="w-full h-36 rounded-xl"
        src="https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxiYW5uZXJ8ZW58MHx8MHx8fDA%3D"  alt=""
      />
    </div>
    <div className="px-4">
    <div>
      <div className=" py-2 -mt-16 flex space-x-4  justify-between align-baseline ">
        <div className="flex space-x-4 align-end">
          <img
            className="rounded-full h-28 w-28"
            src={`${NEXT_PUBLIC_GATEWAY_URL}/ipfs/${profile.image_cid}`} alt=""
          />
        </div>
        <div className="flex flex-col  justify-end align-bottom">
          <button className="py-1 px-10 flex-col align-bottom justify-end text-white border-while border-2  rounded-lg cursor-not-allowed">
            Edit
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col text-white justify-center">
      <div className="text-3xl font-semibold">{profile.name}</div>
      <div className=" text-[#A4A4A4]">@{profile.username}</div>
    </div>
    <div className=" my-2">
      {profile.bio}
    </div>
    <div className="flex space-x-4">
      <div className="flex space-x-2 align-middle">
        <div className="text-lg font-semibold ">{profile.following? profile.following.length : 0}</div>
        <div className="flex flex-col  justify-center text-[#FBFBFB] text-opacity-90">Followings</div>
      </div>
      {/* <div className="flex space-x-2 align-middle">
        <div className="text-lg font-semibold ">137</div>
        <div className="flex flex-col  justify-center text-[#FBFBFB] text-opacity-90">Followers</div>
      </div> */}
    </div>
  </div>
  </div>
  )
}

export default Topbar