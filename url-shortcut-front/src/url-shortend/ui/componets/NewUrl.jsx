import React from 'react'

const NewUrl = ({currentUrl,copyUrl,copied}) => {
  return (
    <div>
      <div className="mt-10 mb-10 flex flex-col gap-2">
  <h1 className="text-xl font-semibold">New Urls ({currentUrl.length})</h1>

  {currentUrl.map((url, index) => (
    <div 
      key={index}
      className="border flex justify-between  w-[500px] gap-4 px-4 py-2 rounded border-gray-400"
    >
        
      <p className="truncate">{url}</p>

      <button onClick={()=>copyUrl(url ,index)} className={` ${copied === index ? "bg-gray-200": "bg-orange-500"} transition px-2 py-1 rounded-lg text-white  `}>
        {copied === index ? "✔" : "copy"}
      </button>
    </div>
  ))}
</div>
    </div>
  )
}

export default NewUrl
