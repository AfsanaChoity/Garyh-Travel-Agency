import React from 'react'

export default function Box({text}) {
  // const [loading, setLoading] = useState("")
  return (
    <div className='border border-[#468F9D] rounded-xl  w-[47px] h-[49px] font-[Inter] text-[20px] flex justify-center items-center'>{text}</div>
  )
}
