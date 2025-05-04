import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-awesome-modal";
import { GoBell } from "react-icons/go";
import View_Notification from "./View_Notification";
const SERVER_URL = import.meta.env.VITE_SERVER;
function Notification() {
  const [Notification, setNotification] = useState([]);
  const [ModalData, setModalData] = useState("");
  const [visible, setVisible] = useState(false);
  const fetch = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/notification/allnotification`
      );
      setNotification(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const openModal = (data) => {
    setModalData(data);
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="text-white bg-slate-800 rounded-lg shadow-lg ">
        <p className="flex p-8 text-center items-center font-semibold text-xl gap-2 ">
          Notifications <GoBell />
        </p>
        <div className=" w-full ">
          {Notification.length > 0 ? (
            Notification.map((notification) => (
              <ul
                key={notification._id}
                className="p-2 bg-gray-800 text-white rounded-md shadow"
              >
                <li
                  className="text-center hover:bg-slate-900 hover:shadow-lg rounded-md font-semibold cursor-pointer"
                  onClick={() =>
                    openModal(<View_Notification title= {notification.Title} desc = {notification.Description} />)
                  }
                >
                  {notification.Title}
                </li>
              </ul>
            ))
          ) : (
            <p>no notification</p>
          )}
        </div>
      </div>
      <Modal
        visible={visible}
        width="400"
        height="200"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="text-center bg-gray-900 text-white p-8 rounded-md flex flex-col justify-between items-center">
          {ModalData}
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md mt-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Notification;
