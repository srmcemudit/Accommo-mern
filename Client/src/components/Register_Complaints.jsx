
function Register_Complaints({complaint,openModal}) {
    const handleClick = () => {
      openModal(complaint);
    };
  return (
    <div className='px-4 py-2 hover:outline cursor-pointer' onClick={handleClick}>
        <p>{complaint}</p>
    </div>
  )
}

export default Register_Complaints;