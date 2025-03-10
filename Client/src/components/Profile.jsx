import { useSelector } from "react-redux"
function Profile() {
  const User = useSelector((state)=> (state.user.user));
  console.log(User);
  
  return (
    <div className='text-white px-4 py-2 text-lg flex flex-col justify-center bg-slate-800 rounded-lg shadow-lg '>
        <p className="font-semibold text-xl p-4 " >Hostel Student Profile</p>
        <hr />
        <p className="px-4 py-2 ">name: {User.name}</p>
        <p className="px-4 py-2 ">hostel name: jgjg</p>
        <p className="px-4 py-2 ">room no: jgjg</p>
        <p className="px-4 py-2 ">email: {User.email}</p>
        <p className="px-4 py-2 ">number: jgjg</p>
    </div>
  )
}

export default Profile