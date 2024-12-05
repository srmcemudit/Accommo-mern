
function Settings() {
  const options = [
    { name: "Profile", icon: "👤" },
    { name: "Change Password", icon: "🔒" },
    { name: "Notifications", icon: "🔔" },
  ];

  return (
    <div className="max-w-sm mx-auto p-6 bg-transparent shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-white text-center">Settings</h3>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center p-3 rounded-md shadow-sm hover:bg-slate-950 cursor-pointer transition-colors"
          >
            <span className="text-2xl mr-4">{option.icon}</span>
            <span className="text-lg text-white">{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Settings;