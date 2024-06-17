"use client";
import React from "react";
// import { PostCard } from ".";
import { MODULEADDRESS, } from "../app/constants";
import { useState, useEffect } from "react";

import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();

const Featured = () => {
  const [allPosts, setAllPosts] = useState();

  // const fetchPostList = async () => {
  //   try {

  //     const PostListResource = await aptos.getAccountResource({
  //       accountAddress: MODULEADDRESS,
  //       resourceType: `${MODULEADDRESS}::wizz::PostTable`,
  //     });

  //     const tableHandle = (PostListResource ).posts.handle;
  //     const taskCounter = (PostListResource).post_counter;

  //     let Posts = [];
  //     let counter = 1;
  //     while (counter <= taskCounter) {
  //       const PostItem = {
  //         key_type: "u64",
  //         value_type: `${MODULEADDRESS}::wizz::Post`,
  //         key: `${counter}`,
  //       };
  //       const post = await aptos.getTableItem({
  //         handle: tableHandle,
  //         data: PostItem,
  //       });
  //       Posts.push(post);
  //       counter++;
  //     }
  //     // set tasks in local state
  //     // setTasks(tasks);
  //     console.log(Posts)
  //     setAllPosts(Posts);
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };

  // useEffect(() => {
  //   fetchPostList();
  // }, []);

  // useEffect(() => {
  //   console.log("allPosts", allPosts);
  // } , [allPosts]);

  // useEffect(() => {
  //   if (data) {
  //     console.log("All Post Data", data.data.content.fields.post_addresses);
  //     setAllPosts(data.data.content.fields.post_addresses.reverse());
  //   }
  // }, [data, error]);

  return (
    <>
    hii
      {/* topbar */}
      {/* <div className="lg:w-[65%] md:w-[80%] w-[85%] flex flex-col align-middle my-3 h-full ">
        <div className="sticky md:top-0 top-0 bg-[#14161b] backdrop-blur-md my-3 bg-blend-saturation ">
          <div className="text-[#A4A4A4] text-opacity-90 font-bold  border-b-[#393C49] mt-3 pb-2  border-b-2    flex justify-between w-full">
            <button >For You</button> <button  className="cursor-not-allowed">Following</button>{" "}
            <button className="cursor-not-allowed">Tranding</button> <button className="cursor-not-allowed">Channels</button>
          </div>{" "}
        </div>
        <div className="flex flex-col space-y-7">
          {allPosts.map((item, index) => (
            <div key={index}>
              <PostCard setClicked={setClicked} postid={item} />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Featured;
