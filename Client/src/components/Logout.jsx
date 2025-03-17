import { Link } from "react-router-dom";
function Logout() {
  return (
    <>
      <div className="flex px-4 py-6 justify-center text-center">
        <p>you are successfully logout ✅</p>
      </div>
      <div className="flex px-4 py-6 justify-center text-center">
        <span className="flex px-2 text-center"> you can </span>
        <Link to="/" className="text-blue-800 hover:text-blue-950">
          {" "}
          Login again{" "}
        </Link>
        <span className="flex px-2 text-center"> from here</span>
      </div>
    </>
  );
}

export default Logout;
