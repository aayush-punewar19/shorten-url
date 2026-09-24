import React from 'react'
import useUrlHook from '../../hooks/useUrlHook'
import NewUrl from '../componets/NewUrl'


const HomePage = () => {

    const { data, iscopied, isPending,deleteUrl ,copyUrl , currentUrl, setInput,shortendUrl,input} = useUrlHook()

    if(isPending) return <h1>loading</h1>
    let urldata = data.data.data.allUrls
    // console.log(iscopied)



  return (
    <div className="w-full p-10  mt-8">
      {/* Search */}
      <div className="flex gap-3 mb-6">
        <input
         value={input}
         onChange={(e)=>setInput(e.target.value)}
          type="text"
          placeholder="Paste Long Link & make it Short"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500"
        />

        <button
        onClick={shortendUrl}
          className="bg-black text-white px-6 rounded-xl hover:bg-gray-800"
        >
          Shortend
        </button>
      </div >

      <NewUrl currentUrl={currentUrl} copyUrl={copyUrl} copied={iscopied} />
   
        
        
    
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">
        Your links 
        ({urldata?.length})
      </h2>

      {/* Links */}
      <div className="border  border-gray-300 rounded-xl overflow-hidden">
        {urldata?.map((val,index) => {
          return (
            <div
              key={val?._id}
              className="flex items-center gap-5 px-5 py-4 border-b border-gray-200 last:border-b-0"
            >
              {/* Short code */}
              <div className="w-32 text-orange-600 font-mono">
                <a
                  href={`http://localhost:3000/${val?.ShortCode} `}
                  target="_blank"
                >
                  {val?.ShortCode}
                </a>
              </div>

              {/* Original URL */}
              <div className="flex-1 truncate text-gray-600">
                {val.originalUri}
              </div>

              {/* Clicks */}
              <div className="w-24 text-right font-mono">
                {val?.clicks} 
                clicks
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                {/* <button  onClick={()=>copyUrl(val.originalUri)} className="border border-gray-300 bg-orange-500 hover:text-black text-white rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
                 
                </button> */}

                <button
                 onClick={()=>deleteUrl(val._id)}
                  className="border cursor-pointer border-gray-300 bg-orange-500  hover:text-black text-white rounded-lg px-3 py-2 text-sm hover:bg-orange-200"
                >
                  Delete 🗑
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default HomePage
