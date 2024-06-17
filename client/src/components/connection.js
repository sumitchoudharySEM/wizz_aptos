"use client";
import { useState, useEffect } from "react";
import { MODULEADDRESS } from "../app/constants";
import ShortProfile from "./rightsidebar_compnents/ShortProfile";

import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();

const Connection = () => {
  const { account } = useWallet();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true); 
  // const [allProfilesAddress, setAllProfilesAddress] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: "",
    username: "",
    bio: "",
    image_cid: "",
    owner: "",
    following: [],
  });

  const fetchUserProfile = async () => {
    
    setLoading(true);
    try {
      const ProfileResource = await aptos.getAccountResource({
        accountAddress: account?.address,
        resourceType: `${MODULEADDRESS}::wizz::Profile`,
      });
      
      setUserProfile({
        owner : ProfileResource.owner,
        name : ProfileResource.full_name,
        username : ProfileResource.username,
        bio : ProfileResource.bio,
        image_cid : ProfileResource.profile_image_ref,
        following : ProfileResource.followings,
      });
      console.log("ProfileResource", ProfileResource);
    } catch (e) {
      console.log("error", e);
    } 
  };

  useEffect(() => {
    if (account) {
      setAddress(account.address);
      fetchUserProfile();
    }
  }, [account]);


  useEffect(() => {
    if (userProfile && userProfile.following) {
      setLoading(false);
    }
  }, [userProfile, userProfile.following, ]);

  if (loading) {
    return( <div className="flex justify-center h-[100vh] width-[100vw] align-middle ">
    <h1 className=" m-auto p-6 text-center">Loading....</h1>
  </div>); 
  }

  return (
    <div className="ld:w-3/4   md:w-[80%] w-[85%] flex flex-col   p-4 pt-28">
      {/* top */}
      {/* <Profile /> */}
      {/* list */}
      <h2 className='mb-6'>You Are Following</h2>
      <div className="flex flex-col ">
      {userProfile && userProfile.following ? userProfile.following.map((item, index) => (
          <div key={index}>
            <ShortProfile data={item} userProfile={userProfile} setbio={true}/>
          </div>
        )): <></>}
      </div>
    </div>
  );
};

export default Connection;
