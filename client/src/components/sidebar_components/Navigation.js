"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = ({userProfile}) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const pathname = usePathname();
  // return <p>Current pathname: {pathname}</p>
  
  useEffect(() => {
    console.log("pathname", pathname);
    let cutpathname = pathname.split("/")

    console.log("cutpathname", cutpathname);
    if (cutpathname[1] === "feeds") {
      setActiveBtn(1);
    } 
    else if (cutpathname[1] === "followers") {
      setActiveBtn(2);
    } else if (cutpathname[1] === "following") {
      setActiveBtn(3);
    } else if (cutpathname[1] === "allprofiles") {
      setActiveBtn(4);
    } else if (cutpathname[1] == "profile") {
      setActiveBtn(5);
    } else if (cutpathname[1] == "profile") {
      setActiveBtn(6);
    }
  }, [pathname]);

  const activ =
    "bg-[#7501E9] w-[89%] text-[#D1D1D1] text-opacity-90   px-2   text-lg  border-none  rounded-lg text-left";
  const inactiv =
    "px-2 w-full text-lg  text-[#D1D1D1] text-opacity-90  border-none  rounded-xl text-left";
  return (
    <div className="flex flex-col space-y-2 ">
      <Link href="/feeds">
        <div className={`${activeBtn == 1 ? activ : inactiv} `}>
          <div className="flex space-x-3 p-2 px-3  font-medium ">
            <div className="flex flex-col justify-center">
              {" "}
              <svg
                width="19"
                height="22"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.9 0.5C0.661305 0.5 0.432387 0.594821 0.263604 0.763604C0.0948212 0.932387 0 1.16131 0 1.4V15.594C0 15.8327 0.0948212 16.0616 0.263604 16.2304C0.432387 16.3992 0.661305 16.494 0.9 16.494H5.016V19.524C5.01638 19.6622 5.05765 19.7971 5.13459 19.9119C5.21153 20.0266 5.32071 20.1161 5.44838 20.1689C5.57605 20.2217 5.7165 20.2356 5.85203 20.2087C5.98756 20.1819 6.11211 20.1155 6.21 20.018L9.735 16.494H14.378C14.6166 16.4938 14.8454 16.3988 15.014 16.23L17.736 13.508C17.9048 13.3394 17.9998 13.1106 18 12.872V1.4C18 1.16131 17.9052 0.932387 17.7364 0.763604C17.5676 0.594821 17.3387 0.5 17.1 0.5H0.9ZM8.219 5.7C8.219 5.50109 8.13998 5.31032 7.99933 5.16967C7.85868 5.02902 7.66791 4.95 7.469 4.95C7.27009 4.95 7.07932 5.02902 6.93867 5.16967C6.79802 5.31032 6.719 5.50109 6.719 5.7V9.972C6.719 10.1709 6.79802 10.3617 6.93867 10.5023C7.07932 10.643 7.27009 10.722 7.469 10.722C7.66791 10.722 7.85868 10.643 7.99933 10.5023C8.13998 10.3617 8.219 10.1709 8.219 9.972V5.7ZM13.235 5.7C13.235 5.50109 13.156 5.31032 13.0153 5.16967C12.8747 5.02902 12.6839 4.95 12.485 4.95C12.2861 4.95 12.0953 5.02902 11.9547 5.16967C11.814 5.31032 11.735 5.50109 11.735 5.7V9.972C11.735 10.1709 11.814 10.3617 11.9547 10.5023C12.0953 10.643 12.2861 10.722 12.485 10.722C12.6839 10.722 12.8747 10.643 13.0153 10.5023C13.156 10.3617 13.235 10.1709 13.235 9.972V5.7Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-medium">Feeds</div>
          </div>
        </div>
      </Link>
      {/* <Link href="/followers">
        <div className={`${activeBtn == 2 ? activ : inactiv} `}>
          <div className="flex space-x-3 p-2 px-3  font-medium ">
            <div className="flex flex-col justify-center">
              {" "}
              <svg
                width="22"
                height="17"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 7.3125C10.2225 7.3125 11.3025 7.735 12.18 8.2875C12.99 8.8075 13.5 9.9775 13.5 11.245V13H4.5V11.2558C4.5 9.9775 5.01 8.8075 5.82 8.29833C6.6975 7.735 7.7775 7.3125 9 7.3125ZM3 7.58333C3.825 7.58333 4.5 6.60833 4.5 5.41667C4.5 4.225 3.825 3.25 3 3.25C2.175 3.25 1.5 4.225 1.5 5.41667C1.5 6.60833 2.175 7.58333 3 7.58333ZM3.8475 8.775C3.57 8.71 3.2925 8.66667 3 8.66667C2.2575 8.66667 1.5525 8.89417 0.915001 9.295C0.643284 9.46276 0.411693 9.74217 0.249014 10.0985C0.0863345 10.4548 -0.000257765 10.8723 5.7637e-07 11.2992V13H3.375V11.2558C3.375 10.3567 3.5475 9.51167 3.8475 8.775ZM15 7.58333C15.825 7.58333 16.5 6.60833 16.5 5.41667C16.5 4.225 15.825 3.25 15 3.25C14.175 3.25 13.5 4.225 13.5 5.41667C13.5 6.60833 14.175 7.58333 15 7.58333ZM18 11.2992C18 10.4217 17.64 9.64167 17.085 9.295C16.4273 8.8805 15.7175 8.66659 15 8.66667C14.7075 8.66667 14.43 8.71 14.1525 8.775C14.4525 9.51167 14.625 10.3567 14.625 11.2558V13H18V11.2992ZM9 0C10.245 0 11.25 1.45167 11.25 3.25C11.25 5.04833 10.245 6.5 9 6.5C7.755 6.5 6.75 5.04833 6.75 3.25C6.75 1.45167 7.755 0 9 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-medium">Followes</div>
          </div>
        </div>
      </Link>{" "} */}
      <Link href="/following">
        <div className={`${activeBtn == 3 ? activ : inactiv} `}>
          <div className="flex space-x-3 p-2 px-3  font-medium ">
            <div className="flex flex-col justify-center">
              {" "}
              <svg
                width="22"
                height="17"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 7.3125C10.2225 7.3125 11.3025 7.735 12.18 8.2875C12.99 8.8075 13.5 9.9775 13.5 11.245V13H4.5V11.2558C4.5 9.9775 5.01 8.8075 5.82 8.29833C6.6975 7.735 7.7775 7.3125 9 7.3125ZM3 7.58333C3.825 7.58333 4.5 6.60833 4.5 5.41667C4.5 4.225 3.825 3.25 3 3.25C2.175 3.25 1.5 4.225 1.5 5.41667C1.5 6.60833 2.175 7.58333 3 7.58333ZM3.8475 8.775C3.57 8.71 3.2925 8.66667 3 8.66667C2.2575 8.66667 1.5525 8.89417 0.915001 9.295C0.643284 9.46276 0.411693 9.74217 0.249014 10.0985C0.0863345 10.4548 -0.000257765 10.8723 5.7637e-07 11.2992V13H3.375V11.2558C3.375 10.3567 3.5475 9.51167 3.8475 8.775ZM15 7.58333C15.825 7.58333 16.5 6.60833 16.5 5.41667C16.5 4.225 15.825 3.25 15 3.25C14.175 3.25 13.5 4.225 13.5 5.41667C13.5 6.60833 14.175 7.58333 15 7.58333ZM18 11.2992C18 10.4217 17.64 9.64167 17.085 9.295C16.4273 8.8805 15.7175 8.66659 15 8.66667C14.7075 8.66667 14.43 8.71 14.1525 8.775C14.4525 9.51167 14.625 10.3567 14.625 11.2558V13H18V11.2992ZM9 0C10.245 0 11.25 1.45167 11.25 3.25C11.25 5.04833 10.245 6.5 9 6.5C7.755 6.5 6.75 5.04833 6.75 3.25C6.75 1.45167 7.755 0 9 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-medium">Following</div>
          </div>
        </div>
      </Link>{" "}
      <Link href="/allprofiles">
        <div className={`${activeBtn == 4 ? activ : inactiv} `}>
          <div className="flex space-x-3 p-2 px-3  font-medium ">
            <div className="flex flex-col justify-center">
              {" "}
              <svg
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 10C6.25 11.105 5.355 12 4.25 12C3.145 12 2.25 11.105 2.25 10C2.25 8.895 3.145 8 4.25 8C5.355 8 6.25 8.895 6.25 10Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.25 11C4.51522 11 4.76957 10.8946 4.95711 10.7071C5.14464 10.5196 5.25 10.2652 5.25 10C5.25 9.73478 5.14464 9.48043 4.95711 9.29289C4.76957 9.10536 4.51522 9 4.25 9C3.98478 9 3.73043 9.10536 3.54289 9.29289C3.35536 9.48043 3.25 9.73478 3.25 10C3.25 10.2652 3.35536 10.5196 3.54289 10.7071C3.73043 10.8946 3.98478 11 4.25 11ZM4.25 12C5.355 12 6.25 11.105 6.25 10C6.25 8.895 5.355 8 4.25 8C3.145 8 2.25 8.895 2.25 10C2.25 11.105 3.145 12 4.25 12Z"
                  fill="white"
                />
                <path
                  d="M0 15.273C0 13.761 2.8315 13 4.25 13C5.6685 13 8.5 13.7615 8.5 15.2725V18H0V15.273Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.167 14.9915C1.009 15.1475 1 15.237 1 15.273V17H7.5V15.2725C7.5 15.2375 7.491 15.1475 7.333 14.9915C7.166 14.827 6.8905 14.6505 6.513 14.489C5.753 14.1635 4.825 14 4.25 14C3.675 14 2.7465 14.1635 1.987 14.489C1.6095 14.6505 1.334 14.827 1.167 14.9915ZM4.25 13C2.8315 13 0 13.7615 0 15.2725V18H8.5V15.2725C8.5 13.762 5.6685 13 4.25 13Z"
                  fill="white"
                />
                <path
                  d="M15.75 10C15.75 11.105 14.855 12 13.75 12C12.645 12 11.75 11.105 11.75 10C11.75 8.895 12.645 8 13.75 8C14.855 8 15.75 8.895 15.75 10Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.75 11C14.0152 11 14.2696 10.8946 14.4571 10.7071C14.6446 10.5196 14.75 10.2652 14.75 10C14.75 9.73478 14.6446 9.48043 14.4571 9.29289C14.2696 9.10536 14.0152 9 13.75 9C13.4848 9 13.2304 9.10536 13.0429 9.29289C12.8554 9.48043 12.75 9.73478 12.75 10C12.75 10.2652 12.8554 10.5196 13.0429 10.7071C13.2304 10.8946 13.4848 11 13.75 11ZM13.75 12C14.855 12 15.75 11.105 15.75 10C15.75 8.895 14.855 8 13.75 8C12.645 8 11.75 8.895 11.75 10C11.75 11.105 12.645 12 13.75 12Z"
                  fill="white"
                />
                <path
                  d="M11 9C11 10.105 10.105 11 9 11C7.895 11 7 10.105 7 9C7 7.895 7.895 7 9 7C10.105 7 11 7.895 11 9Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 10C9.26522 10 9.51957 9.89464 9.70711 9.70711C9.89464 9.51957 10 9.26522 10 9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10ZM9 11C10.105 11 11 10.105 11 9C11 7.895 10.105 7 9 7C7.895 7 7 7.895 7 9C7 10.105 7.895 11 9 11Z"
                  fill="white"
                />
                <path
                  d="M8.50012 3.4165C8.50012 2.7756 8.24552 2.16096 7.79234 1.70778C7.33916 1.25459 6.72451 1 6.08362 1H4.49912C3.84348 0.998945 3.2137 1.25559 2.74554 1.7146C2.27739 2.17361 2.00838 2.79821 1.9965 3.45374C1.98463 4.10927 2.23085 4.7432 2.68207 5.21887C3.13329 5.69453 3.75337 5.97381 4.40862 5.9965L4.50012 6V7C4.50012 7 8.50012 6.4165 8.50012 3.4165ZM10.0001 2.618C10.0001 1.92366 10.2759 1.25776 10.7669 0.766794C11.2579 0.275824 11.9238 0 12.6181 0H15.5001C16.1632 0 16.799 0.263392 17.2679 0.732233C17.7367 1.20107 18.0001 1.83696 18.0001 2.5C18.0001 3.16304 17.7367 3.79893 17.2679 4.26777C16.799 4.73661 16.1632 5 15.5001 5H14.5001V6.5C14.5001 6.5 10.0001 5.868 10.0001 2.618ZM9.50012 15.273C9.50012 13.761 12.3316 13 13.7501 13C15.1686 13 18.0001 13.7615 18.0001 15.2725V18H9.50012V15.273Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6671 14.9915C10.5091 15.1475 10.5001 15.237 10.5001 15.273V17H17.0001V15.2725C17.0001 15.2375 16.9911 15.1475 16.8331 14.9915C16.6661 14.827 16.3906 14.6505 16.0131 14.489C15.2531 14.1635 14.3251 14 13.7501 14C13.1751 14 12.2466 14.1635 11.4871 14.489C11.1096 14.6505 10.8341 14.827 10.6671 14.9915ZM13.7501 13C12.3316 13 9.50006 13.7615 9.50006 15.2725V18H18.0001V15.2725C18.0001 13.762 15.1686 13 13.7501 13ZM9.00006 14.2725C9.00006 13.434 8.07656 12.826 6.99756 12.451C7.62368 12.155 8.30748 12.001 9.00006 12C9.69263 12.001 10.3764 12.155 11.0026 12.451C9.92356 12.826 9.00006 13.434 9.00006 14.2725Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.00006 14.2725C9.00006 13.826 9.26206 13.4445 9.67006 13.129L9.74056 13.0765C10.0891 12.8235 10.5306 12.615 11.0026 12.4515C10.5342 12.2307 10.0329 12.088 9.51856 12.029C9.17397 11.9903 8.82614 11.9903 8.48156 12.029C7.9672 12.0879 7.46592 12.2304 6.99756 12.451C7.46906 12.615 7.91106 12.8235 8.25906 13.076C8.28306 13.0933 8.30656 13.111 8.32956 13.129C8.73806 13.444 9.00006 13.826 9.00006 14.2725Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-medium">Discover Users</div>
          </div>
        </div>
      </Link>{" "}
      <Link href={`/profile/${userProfile.profile_object_id}`}>
        <div className={`${activeBtn == 5 ? activ : inactiv} `}>
          <div className="flex space-x-3 p-2 px-3  font-medium ">
            <div className="flex flex-col justify-center">
              {" "}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.4C10.3209 2.39969 8.67111 2.83978 7.21526 3.67635C5.75942 4.51292 4.54845 5.7167 3.70323 7.16754C2.85801 8.61838 2.4081 10.2655 2.39841 11.9446C2.38872 13.6236 2.81959 15.2759 3.64801 16.7364C4.20794 16.0087 4.92772 15.4195 5.75171 15.0144C6.5757 14.6092 7.48181 14.399 8.4 14.4H15.6C16.5182 14.399 17.4243 14.6092 18.2483 15.0144C19.0723 15.4195 19.7921 16.0087 20.352 16.7364C21.1804 15.2759 21.6113 13.6236 21.6016 11.9446C21.5919 10.2655 21.142 8.61838 20.2968 7.16754C19.4516 5.7167 18.2406 4.51292 16.7847 3.67635C15.3289 2.83978 13.6791 2.39969 12 2.4ZM21.5316 19.2912C23.136 17.1995 24.0039 14.6361 24 12C24 5.37239 18.6276 0 12 0C5.37241 0 1.35039e-05 5.37239 1.35039e-05 12C-0.00394822 14.6361 0.863899 17.1996 2.46841 19.2912L2.46241 19.3128L2.88841 19.8084C4.01387 21.1242 5.41127 22.1803 6.98428 22.9039C8.5573 23.6276 10.2685 24.0015 12 24C14.4328 24.0045 16.8089 23.2655 18.81 21.882C19.6631 21.2925 20.4367 20.5956 21.1116 19.8084L21.5376 19.3128L21.5316 19.2912ZM12 4.79999C11.0452 4.79999 10.1295 5.17928 9.45442 5.85441C8.77929 6.52954 8.4 7.44521 8.4 8.39999C8.4 9.35477 8.77929 10.2704 9.45442 10.9456C10.1295 11.6207 11.0452 12 12 12C12.9548 12 13.8705 11.6207 14.5456 10.9456C15.2207 10.2704 15.6 9.35477 15.6 8.39999C15.6 7.44521 15.2207 6.52954 14.5456 5.85441C13.8705 5.17928 12.9548 4.79999 12 4.79999Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-medium">My Profile</div>
          </div>
        </div>
      </Link>
      <Link href={`/profile/${userProfile.profile_object_id}`}>
        <div className={`${activeBtn == 6 ? activ : inactiv} `}>
          <div className="flex space-x-3 p-2 px-3 lg:hidden  font-medium ">
            <div className="flex flex-col justify-center">
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.4C10.3209 2.39969 8.67111 2.83978 7.21526 3.67635C5.75942 4.51292 4.54845 5.7167 3.70323 7.16754C2.85801 8.61838 2.4081 10.2655 2.39841 11.9446C2.38872 13.6236 2.81959 15.2759 3.64801 16.7364C4.20794 16.0087 4.92772 15.4195 5.75171 15.0144C6.5757 14.6092 7.48181 14.399 8.4 14.4H15.6C16.5182 14.399 17.4243 14.6092 18.2483 15.0144C19.0723 15.4195 19.7921 16.0087 20.352 16.7364C21.1804 15.2759 21.6113 13.6236 21.6016 11.9446C21.5919 10.2655 21.142 8.61838 20.2968 7.16754C19.4516 5.7167 18.2406 4.51292 16.7847 3.67635C15.3289 2.83978 13.6791 2.39969 12 2.4ZM21.5316 19.2912C23.136 17.1995 24.0039 14.6361 24 12C24 5.37239 18.6276 0 12 0C5.37241 0 1.35039e-05 5.37239 1.35039e-05 12C-0.00394822 14.6361 0.863899 17.1996 2.46841 19.2912L2.46241 19.3128L2.88841 19.8084C4.01387 21.1242 5.41127 22.1803 6.98428 22.9039C8.5573 23.6276 10.2685 24.0015 12 24C14.4328 24.0045 16.8089 23.2655 18.81 21.882C19.6631 21.2925 20.4367 20.5956 21.1116 19.8084L21.5376 19.3128L21.5316 19.2912ZM12 4.79999C11.0452 4.79999 10.1295 5.17928 9.45442 5.85441C8.77929 6.52954 8.4 7.44521 8.4 8.39999C8.4 9.35477 8.77929 10.2704 9.45442 10.9456C10.1295 11.6207 11.0452 12 12 12C12.9548 12 13.8705 11.6207 14.5456 10.9456C15.2207 10.2704 15.6 9.35477 15.6 8.39999C15.6 7.44521 15.2207 6.52954 14.5456 5.85441C13.8705 5.17928 12.9548 4.79999 12 4.79999Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" font-medium">My Profile</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
