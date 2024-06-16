"use client";

import {
  PACKAGE_ID,
  PROFILE_TABLE_ID,
  PINATA_JWT,
  NEXT_PUBLIC_GATEWAY_URL,
  USERNAME_TABLE,
} from "./constants";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();


// import { useSignAndExecuteTransactionBlock } from "@mysten/dapp-kit";
// import { TransactionBlock } from "@mysten/sui.js/transactions";
// import {
//   ConnectButton,
//   useCurrentAccount,
//   useSuiClientQuery,
// } from "@mysten/dapp-kit";


export default function Home() {


  const { account, signAndSubmitTransaction } = useWallet();
  const moduleAddress = "0x7526d5a6bd74a678f27d302f71301c3cdea37f7d1149aae607b35e5d683cea94";
  // const { mutate: execCreateProf } = useSignAndExecuteTransactionBlock();
  const [address, setAddress] = useState("");
  const [accountHasProfile, setAccountHasProfile] = useState(false);
  const [profileObjectId, setProfileObjectId] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setbio] = useState("");
  const [selectedFile, setSelectedFile]: any = useState();
  const [preview, setPreview]: any = useState();
  const [imageCID, setImageCID] = useState("");

  function changeHandler(e: any) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setSelectedFile(e.target.files[0]);
  }

  ////////////////////////////////////////////////////////////////////// 
  // GET PROFILE OBJECT ID
  const fetchList = async () => {
    if (!account) return [];
    try {
      const todoListResource = await aptos.getAccountResource({
        accountAddress: account?.address,
        resourceType: `${moduleAddress}::wizz::Profile`,
      });
      setAccountHasProfile(true);
      console.log("todoListResource", todoListResource);
    } catch (e: any) {
      setAccountHasProfile(false);
    }
  };


  // const handleSubmission = async () => {
  //   try {
  //     console.log(selectedFile);
  //     const formData = new FormData();
  //     formData.append("file", selectedFile);
  //     const metadata = JSON.stringify({
  //       name: "File name",
  //     });
  //     formData.append("pinataMetadata", metadata);

  //     const options = JSON.stringify({
  //       cidVersion: 0,
  //     });
  //     formData.append("pinataOptions", options);

  //     const res = await fetch(
  //       "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${PINATA_JWT}`,
  //         },
  //         body: formData,
  //       }
  //     );
  //     const resData = await res.json();
  //     setImageCID(resData.IpfsHash); // Update state
  //     console.log("image response", resData.IpfsHash);
  //     return resData.IpfsHash; // Return the CID
  //   } catch (error) {
  //     console.log(error);
  //     throw error; // Ensure errors are thrown to be caught by the caller
  //   }
  // };

  // const { data, isLoading, isError, error, refetch } = useSuiClientQuery(
  //   "getOwnedObjects",
  //   {
  //     owner: address,
  //     limit: 1,
  //     filter: {
  //       MatchAll: [
  //         {
  //           StructType: `${PACKAGE_ID}::profilecontract::Profile`,
  //         },
  //         {
  //           AddressOwner: address,
  //         },
  //       ],
  //     },
  //     options: {
  //       showOwner: true,
  //       showType: true,
  //       showContent: true,
  //     },
  //   },
  //   { queryKey: ["Profile"] }
  // );

  // console.log("error hai", isError);
  // console.log(
  //   "content profile:",
  //   data && data.data && data.data.length > 0
  //     ? data.data[0].data?.content?.fields.full_name
  //     : null
  // );

  // useEffect(() => {
  //   if (account) {
  //     setAddress(account.address);
  //     data && data.data && data.data.length > 0 && data.data[0].data
  //       ? setProfileObjectId(data.data[0].data?.objectId)
  //       : setProfileObjectId("");
  //   } else {
  //     setAddress("");
  //   }
  // }, [account, data]);

  // useEffect(() => {
  //   console.log("profileObjectId", profileObjectId);
  //   if (account && account.address) {
  //     if (profileObjectId !== "") {
  //       redirect("/feeds");
  //     }
  //   }
  // }, [profileObjectId, account]);

  useEffect(() => {
    fetchList();
  }, [account?.address]);

  return (
    <>
      <div className="flex jus justify-center h-[100vh] width-[100vw] align-middle  lg:hidden">
        <h1 className=" m-auto p-6 text-center">Currently, Wizz UI works only with large screen devices.</h1>
      </div>
      <div className="hidden  h-[80%] sm:hidden md:hidden lg:flex">
        <div className="w-full h-[100vh] flex-[0.7]  flex flex-col justify-center  align-middle p-32">
          <div className="flex justify-between w-full ">
            <div className="m-4">
              <div className="text-white text-3xl font-bold">
                Create your account | Login
              </div>
              <div className="text-white">get started with wizz</div>
            </div>
            <div>
              <div className="w-48">
                <div className="space-y-6  py-4 bottom-0 flex flex-col ">
                <WalletSelector />
                </div>
              </div>
            </div>
          </div>
          {/* {account && account.address && profileObjectId == "" ? (
            <>
              <div className="flex md:flex-row flex-col">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Display Name"
                />
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Username"
                />
              </div>
              <div className="flex">
                <input
                  onChange={(e) => setbio(e.target.value)}
                  className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write a crazy bio"
                />
              </div>
              <div className="flex md:flex-row flex-col">
                <input
                  type="file"
                  onChange={changeHandler}
                  className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Choose Profile Image"
                />
              </div>
              <div className="w-[30%] m-4">
                <div className="space-y-6 py-4 bottom-0 flex flex-col ">
                  <button
                    onClick={async () => {
                      try {
                        const cid = await handleSubmission();
                        console.log("CID", cid);

                        const txb = new TransactionBlock();
                        const [prof] = txb.moveCall({
                          target: `${PACKAGE_ID}::profilecontract::create_profile`,
                          arguments: [
                            txb.object(PROFILE_TABLE_ID),
                            txb.object(USERNAME_TABLE),
                            txb.pure.string(username),
                            txb.pure.string(name),
                            txb.pure.string(bio),
                            txb.pure.string(cid),
                          ],
                        });
                        execCreateProf(
                          {
                            transactionBlock: txb,
                          },
                          {
                            onError: (err) => {
                              toast.error(err.message);
                            },
                            onSuccess: (result) => {
                              toast.success(`Digest: ${result.digest}`);
                              console.log("result of transaction:", result);
                              console.log("prof:", [prof]);
                              setTimeout(() => {
                                window.location.reload();
                              } , 1000)
                            },
                          }
                        );
                      } catch (error) {
                        console.error("Error during submission:", error);
                      }
                    }}
                    className="bg-[#7501E9] py-3  w-[90%] text text-white border-none  rounded-xl"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )} */}
        </div>
        <div className="flex-[0.5] h-[100vh] ">
          <div className="  bg-[url(https://w0.peakpx.com/wallpaper/914/142/HD-wallpaper-cool-blue-purple-abstract-dark-glow-loveurhunny-pink.jpg)] top-[6rem] right-[16rem] flex flex-col justify-between h-[100vh] bg-cover pl-20">
            <div className="h-36 w-36 mt-60">
              {account &&
              account.address &&
              preview &&
              preview !== null &&
              preview !== "" &&
              preview !== "null" &&
              preview !== undefined ? (
                <img
                  className="rounded-full h-36 w-36 object-cover"
                  src={preview}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="text-white pb-20">
              <div className="font-medium text-lg text-opacity-60">
                Welcome to
              </div>
              <div className="font-bold text-2xl text-opacity-90">Wizz</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="connectwalletbtn">
        <ConnectButton />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Hello There</h1>
        <p className="text-lg">
          Your account: {account ? account.address : <>No Wallet Connected</>}
        </p>
        <p className="text-lg">Package Id: {PACKAGE_ID}</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
      {profileObjectId == "" ? <>
        <h1 className="text-3xl font-bold">Create Your Profile</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        {account ? (
          <button
            onClick={() => {
              const txb = new TransactionBlock();
              const [prof] = txb.moveCall({
                target: `${PACKAGE_ID}::profilecontract::create_profile`,
                arguments: [
                  txb.object(PROFILE_TABLE_ID),
                  txb.pure.string(username),
                  txb.pure.string(name),
                ],
              });
              execCreateProf(
                {
                  transactionBlock: txb,
                },
                {
                  onError: (err) => {
                    toast.error(err.message);
                  },
                  onSuccess: (result) => {
                    toast.success(`Digest: ${result.digest}`);
                    console.log("result of transaction:", result);
                    console.log("prof:", [prof]);
                  },
                }
              );
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Profile
          </button>
        ) : (
          <>No Wallet Connected</>
        )} </>
         : <>
          <h1 className="text-3xl font-bold">Profile Created Just Move on</h1>
         <p>Profile ObjectId : {profileObjectId}</p>
         </>
        }
        
      </div> */}
    </>
  );
}
