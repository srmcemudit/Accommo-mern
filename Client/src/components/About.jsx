function AboutHotel() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-violet-900 to-gray-900 text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-violet-400">About Our Hotel Management System</h1>
          <p className="text-gray-300 text-lg mt-4">
            A smart, efficient, and modern solution for managing hotels of all sizes, designed to streamline operations and enhance guest satisfaction.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-violet-800 bg-opacity-60 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-violet-300 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-200">
              <li>Efficient Room Booking and Management</li>
              <li>Real-time Availability Tracking</li>
              <li>Streamlined Maintenance and Housekeeping Requests</li>
              <li>Automated Check-In and Check-Out Processes</li>
              <li>Comprehensive Dashboard for Hotel Managers</li>
              <li>Easy-to-Use Interface for Guests</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-violet-800 bg-opacity-60 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-violet-300 mb-4">Our Objective</h2>
            <p className="text-gray-300 mb-6">
              Our mission is to provide an advanced, intuitive platform that enhances operational efficiency, improves guest experiences, and optimizes resource management for hotels.
            </p>
            <h2 className="text-3xl font-semibold text-violet-300 mb-4">Features</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-200">
              <li>Focuses on the themes of sustainability, innovation, and client connection, ensuring the message resonates with a modern audience.</li>
              <li>Highlights the company's passion and vision, inviting trust and engagement from potential clients.</li>
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            "Elevating hotel management to the next level with cutting-edge technology and an emphasis on user-centric design."
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHotel;
