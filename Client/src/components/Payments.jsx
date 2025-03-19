function Payments() {
    // Sample data (Replace with actual API data)
    const pendingPayments = [
      { id: 1, name: "John Doe", room: 101, amount: "$500", dueDate: "25 Mar 2025" },
      { id: 2, name: "Jane Smith", room: 202, amount: "$450", dueDate: "28 Mar 2025" },
    ];
  
    const receivedPayments = [
      { id: 3, name: "Mike Johnson", room: 303, amount: "$600", datePaid: "15 Mar 2025" },
      { id: 4, name: "Emily Davis", room: 404, amount: "$550", datePaid: "18 Mar 2025" },
    ];
  
    // Function to handle payment reminders
    const sendReminder = (name) => {
      alert(`Payment reminder sent to ${name}`);
      // You can replace this with an API call to send an actual notification
    };
  
    return (
      <div className="flex justify-between p-4 gap-6">
        {/* Pending Payments Section */}
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-yellow-400 mb-3">Pending Payments</h2>
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Room</th>
                <th className="border border-gray-600 px-4 py-2">Amount</th>
                <th className="border border-gray-600 px-4 py-2">Due Date</th>
                <th className="border border-gray-600 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingPayments.map((payment) => (
                <tr key={payment.id} className="text-center text-white">
                  <td className="border border-gray-600 px-4 py-2">{payment.name}</td>
                  <td className="border border-gray-600 px-4 py-2">{payment.room}</td>
                  <td className="border border-gray-600 px-4 py-2 text-red-400">{payment.amount}</td>
                  <td className="border border-gray-600 px-4 py-2">{payment.dueDate}</td>
                  <td className="border border-gray-600 px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() => sendReminder(payment.name)}
                    >
                      Send Reminder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Received Payments Section */}
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-green-400 mb-3">Received Payments</h2>
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Room</th>
                <th className="border border-gray-600 px-4 py-2">Amount</th>
                <th className="border border-gray-600 px-4 py-2">Date Paid</th>
              </tr>
            </thead>
            <tbody>
              {receivedPayments.map((payment) => (
                <tr key={payment.id} className="text-center text-white">
                  <td className="border border-gray-600 px-4 py-2">{payment.name}</td>
                  <td className="border border-gray-600 px-4 py-2">{payment.room}</td>
                  <td className="border border-gray-600 px-4 py-2 text-green-400">{payment.amount}</td>
                  <td className="border border-gray-600 px-4 py-2">{payment.datePaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Payments;
  