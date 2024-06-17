"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { Topbar } from "@/components"; 

import {
  MODULEADDRESS,
} from "../../../../app/constants";

import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();

const Profile = () => {
  const { username } = useParams();
  console.log(username);

  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
    image_cid: "",
    address: "",
    following: [],
  });

  const fetchUserProfile = async () => {
    try {
      const ProfileResource = await aptos.getAccountResource({
        accountAddress: username,
        resourceType: `${MODULEADDRESS}::wizz::Profile`,
      });
      console.log("ProfileResource hai ye to", ProfileResource);
      setProfile({
        name: ProfileResource.full_name,
        username: ProfileResource.username,
        bio: ProfileResource.bio,
        image_cid: ProfileResource.profile_image_ref,
        address: ProfileResource.owner,
        following: ProfileResource.followings,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="lg:w-[65%] md:w-[80%] w-[85%] flex flex-col align-middle my-3 h-full min-h-screen p-t-20 ">
        <Topbar profile={profile}/>
      </div>
  )
}

export default Profile