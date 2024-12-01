
function Complaints() {
  return (
    <div className='text-black flex flex-col justify-center items-center '>
      <div className=" ">
      <p className="text-white" >register your complaint here ....</p>
      </div>
      <div className='p-2 space-y-4 '>
      <input type="text" placeholder="complaint title" className="block p-2 " />
        <textarea placeholder="description" className="p-2 "></textarea>
      </div>
        <button className="bg-blue-400 p-2 border-none rounded-md " >submit</button>
    </div>
  )
}

export default Complaints