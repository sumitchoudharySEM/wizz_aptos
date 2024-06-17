import React from 'react'

const Comments = () => {
  return (
    <div className="  flex w-full space-x-4 align-middle justify-between ">
    <div className="flex space-x-4 align-middle w-full">
      <div className="">
        <img
          className="rounded-full h-14 w-14"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className='bg-[#1F212D] p-4 pt-2 rounded-xl '>

    
      <div className="flex  text-white  space-x-2">
        <div className="text-lg font-semibold text-[#F3F3F3] justify-center flex flex-col text-opacity-90">
          Name
        </div>
        <div className="text-sm text-[#D9D9D9] justify-center flex flex-col">
          @UserName
        </div>
      </div>  
      <div className='text-sm text-[#F3F3F3] text-opacity-90'>
      Reason why I am shifted from linkdin to wizz  :)
      </div>
      
      </div>
    </div>
  </div>
  )
}

export default Comments