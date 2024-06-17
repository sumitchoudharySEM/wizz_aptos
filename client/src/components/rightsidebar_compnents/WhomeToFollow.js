"use client";
import React, { use } from "react";
import ShortProfile from "./ShortProfile";
import { MODULEADDRESS } from "../../app/constants";
import { useState, useEffect } from "react";

import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();

const WhomeToFollow = ({ userProfile }) => {
  const [allProfilesAddress, setAllProfilesAddress] = useState([]);

  //get all profiles
  const fetchAllUserAddress = async () => {
    try {
      const AllUserAddress = await aptos.getAccountResource({
        accountAddress: MODULEADDRESS,
        resourceType: `${MODULEADDRESS}::wizz::ProfileTable`,
      });
      setAllProfilesAddress(
        AllUserAddress.profile_addresses
          .filter((item) => item !== userProfile.owner)
          .slice(0, 3)
      );
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchAllUserAddress();
  }, []);

  useEffect(() => {
    console.log("allProfilesAddress", allProfilesAddress);
  }, [allProfilesAddress]);

  return (
    <div>
      <div className="text-[#A4A4A4]  text-opacity-90 ">Whome to Follow</div>
      <div className="mb-4">
        {allProfilesAddress.map((item, index) => (
          <div key={index}>
            <ShortProfile data={item} userProfile={userProfile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhomeToFollow;
