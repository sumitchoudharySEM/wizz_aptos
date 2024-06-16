import React, { useState } from "react";
import Comments from "./Comments";

const AddComment = ({ setClicked }) => {
    const arr = [1, 2, 3, 4, 5];
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="w-[65%] flex flex-col align-middle my-3 h-full  ">
      <div className="fixed bottom-0 bg-black rounded-t-3xl w-[33%] p-6 z-40">
        <div className="flex sticky top-0 flex-row-reverse items-end">
          <button
            onClick={() => {
              setClicked(false);
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6588 1.98696C17.7669 1.87901 17.8526 1.75083 17.9112 1.60974C17.9697 1.46864 17.9999 1.3174 18 1.16465C18.0001 1.01189 17.9701 0.860613 17.9117 0.719449C17.8534 0.578285 17.7678 0.45 17.6598 0.341919C17.5519 0.233838 17.4237 0.148077 17.2826 0.0895332C17.1415 0.0309894 16.9903 0.000808877 16.8375 0.000714989C16.6847 0.000621101 16.5335 0.0306156 16.3923 0.088986C16.2511 0.147356 16.1228 0.232959 16.0148 0.340908L8.99985 7.35583L1.98696 0.340908C1.76868 0.122628 1.47263 -2.29995e-09 1.16393 0C0.855238 2.29995e-09 0.559187 0.122628 0.340908 0.340908C0.122628 0.559187 2.29995e-09 0.855238 0 1.16393C-2.29995e-09 1.47263 0.122628 1.76868 0.340908 1.98696L7.35582 8.99985L0.340908 16.0127C0.232827 16.1208 0.147092 16.2491 0.0885989 16.3904C0.0301058 16.5316 0 16.6829 0 16.8358C0 16.9886 0.0301058 17.14 0.0885989 17.2812C0.147092 17.4224 0.232827 17.5507 0.340908 17.6588C0.559187 17.8771 0.855238 17.9997 1.16393 17.9997C1.31678 17.9997 1.46813 17.9696 1.60935 17.9111C1.75056 17.8526 1.87888 17.7669 1.98696 17.6588L8.99985 10.6439L16.0148 17.6588C16.233 17.8768 16.529 17.9992 16.8375 17.999C17.146 17.9988 17.4418 17.8761 17.6598 17.6578C17.8778 17.4395 18.0002 17.1436 18 16.8351C17.9998 16.5266 17.8771 16.2308 17.6588 16.0127L10.6439 8.99985L17.6588 1.98696Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-3 p-4 ">
          <div className=" sticky top-0 my-2 flex space-x-4 align-middle   ">
            <div className="flex space-x-4 align-middle">
              <div className="">
                <img
                  className="rounded-full h-14 w-14"
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-full  justify-end">
              <textarea
                name=""
                id=""
                placeholder="| Add your Comments"
                className="p-3 -mr-24 rounded-xl bg-[#1F212D] w-full  text-white"
              ></textarea>
              <div className=" my-2">
                {isFollowing ? (
                  <button
                    onClick={toggleFollow}
                    className=" border-[1px] py-2 border-white px-7 w-full text-sm text-white  rounded-xl font-semibold"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={toggleFollow}
                    className="bg-[#7501E9] py-2 px-7 w-full text-sm text-white border-none rounded-xl font-semibold"
                  >
                    Post
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            {arr.map((item, index) => 
            

            (
                <Comments key={index}/>
            ))
                }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddComment;
