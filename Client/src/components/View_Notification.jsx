
function View_Notification({title,desc}) {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-md space-y-2">
      <h2 className="text-xl font-bold text-yellow-400">{title}</h2>
      <p className="text-gray-300">{desc}</p>
    </div>
  )
}

export default View_Notification