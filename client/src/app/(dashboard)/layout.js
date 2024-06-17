"use client";
import { useState, useEffect } from "react";
import "./dashboard_layout.css";
import { MODULEADDRESS } from "../constants";
import { Sidebar, RightSidebar, CreatePost } from "@/components";
import { redirect } from "next/navigation";
import Link from "next/link";

import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();

export default function UserInfoLayout({ children }) {

  const { account, signAndSubmitTransaction } = useWallet();
  const [isLoading, setLoading] = useState(true);
  const [isClicked, setClicked] = useState(false);
  const [isSidebar, setSidebar] = useState(false);
  const [address, setAddress] = useState("");
  const [accountHasProfile, setAccountHasProfile] = useState(false);
  const [userProfile, setUserProfile] = useState({
    owner: "",
    name: "",
    username: "",
    bio: "",
    image_cid: "",
    profile_object_id: "",
    following: [],
  });

  
  const fetchUserProfile = async () => {
    
    if (!account) return [];
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
        profile_object_id : ProfileResource.profile_id,
        following : ProfileResource.followings,
      });
      setAccountHasProfile(true);
      console.log("ProfileResource", ProfileResource);
    } catch (e) {
      setAccountHasProfile(false);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    if (account) {
      setAddress(account.address);
      fetchUserProfile();
    }
  }, [account]);


  return (
    <>
      <div>
        {accountHasProfile == false ? (
          <>
            {isLoading ? (
              <div className="flex jus justify-center h-[100vh] width-[100vw] align-middle  lg:hidden">
                <h1 className=" m-auto p-6 text-center">Loading...</h1>
              </div>
            ) : (
              <>
                <div className="flex jus flex-col  justify-center h-[100vh] width-[100vw] align-middle ">
                  <div className="flex jus flex-col  justify-center align-middle ">
                  <h3 className=" m-auto p-6 text-center">
                    Create an account or log in to continue to Wizz.
                  </h3>
                  <Link
                    className="bg-[#7501E9] py-3 w-48 text-center text text-white border-none m-auto rounded-xl "
                    href="/"
                  >
                    Register | Login
                  </Link>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className={`w-full h-full flex bg-[#14161b] lg:justify-between pt-4 md:pt-0  min-h-screen ${
              isClicked == 1 || isClicked == 2 ? "bg-[#212121]  opacity-80" : ""
            }`}
          >
            {!isSidebar ? (
              <div className="md:hidden absolute left-4 top-4 ">
                <button onClick={() => setSidebar(true)}>
                  <svg
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.625 0H25.375V2.75H0.625V0ZM0.625 9.625H17.125V12.375H0.625V9.625ZM0.625 19.25H25.375V22H0.625V19.25Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            ) : null}

            <div className="lg:w-[24%] md:w-[35%] hidden  md:block bg-[#14161b] ">
              <Sidebar setClicked={setClicked} userProfile={userProfile} />
            </div>
            <div className="lg:w-[55%] md:w-[65%] w-full  h-full flex flex-col  items-center  align-middle bg-[#14161b]">
              {isClicked == 1 ? ( 
                <CreatePost setClicked={setClicked} userProfile={userProfile} />
              ) : null}

              {isSidebar ? (
                <div className=" block md:hidden w-full">
                  {" "}
                  <Sidebar
                    setClicked={setClicked}
                    setSidebar={setSidebar}
                    isSidebar={isSidebar}
                    userProfile={userProfile}
                  />{" "}
                </div>
              ) : null}
              {children}
            </div>

            <div className="w-[30%] lg:flex hidden bg-[#14161b] mr-4 0">
              <div className="fixed w-[30%] right-2">
                <RightSidebar userProfile={userProfile} />
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
