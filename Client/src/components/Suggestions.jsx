import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SERVER_URL = import.meta.env.VITE_SERVER;
axios.defaults.withCredentials = true;
function Suggestions() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = useSelector((state) => state.user.user);
  const userId = user._id;

  const success = () => toast.success("Suggestion submitted successfully!");
  const failed = (message) => toast.error(message || "Failed to submit suggestion");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      failed("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    const suggestion = { title, description, userId };

    try {
      const response = await axios.post(
        `${SERVER_URL}/suggestion/suggestionRegister`,
        suggestion,
        { withCredentials: true }
      );
      if(response.status==200){
        success();
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      console.error(error);
      failed(error.response?.data?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-teal-600 p-6">
          <h1 className="text-2xl font-bold text-white">
            Share Your Suggestions
          </h1>
          <p className="text-teal-100 mt-1">
            We value your feedback to improve our services
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Suggestion Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Brief title for your suggestion"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Detailed Description
            </label>
            <textarea
              id="description"
              placeholder="Please describe your suggestion in detail..."
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${isSubmitting ? 'bg-teal-400' : 'bg-teal-600 hover:bg-teal-700'} transition-all flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Submit Suggestion'}
            </button>
          </div>
        </form>
      </div>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{ backgroundColor: '#0d9488' }}
      />
    </div>
  );
}

export default Suggestions;