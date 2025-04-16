import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import "../App.scss";
import { postCreateUser } from "../services/UserService";
import toast from "react-hot-toast";
const ModalAddNew = (props) => {
  const { show, handleClose, addNewUser } = props;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  const handleSaveUser = async () => {
    try {
      console.log("Creating user with:", { name, company, status });

      const response = await postCreateUser(name, company, status);

      if (response && response.status === 201) {
        const userData = response.data;
        console.log("User created successfully:", userData);

        // Thêm user mới vào đầu danh sách
        if (addNewUser) {
          addNewUser(userData);
        }

        handleClose();

        setName("");
        setCompany("");
        setStatus("");

        toast.success("User created successfully!");
        return;
      }

      if (response && response.data) {
        const userData = response.data;
        console.log("User may have been created:", userData);

        // Thêm user mới vào đầu danh sách
        if (addNewUser) {
          addNewUser(userData);
        }

        handleClose();

        setName("");
        setCompany("");
        setStatus("");

        toast.success("Operation completed!");
        return;
      }

      console.error("Unexpected response format:", response);
      toast.warning("Operation completed but with unexpected response format.");
    } catch (error) {
      console.error("Error creating user:", error);

      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      toast.error(`Failed to create user: ${errorMessage}`);
    }
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0backdrop-blur-sm z-[9998] animate-fadeIn"
        onClick={handleClose}
      />
      {/* Modal container for perfect centering */}
      <div className="modal-container">
        {/* Custom Modal with slide-down animation */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md animate-slideDown">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-medium">Add new user</h3>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-500 h-5 w-5 flex items-center justify-center cursor-pointer"
            >
              X
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter Company"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Status
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter Status"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-2 p-4 border-t">
            <Button
              variant="outlined"
              color="gray"
              onClick={handleClose}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              <span>Close</span>
            </Button>
            <Button
              variant="filled"
              color="blue"
              onClick={() => handleSaveUser()}
              className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white"
            >
              <span>Save Changes</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddNew;
