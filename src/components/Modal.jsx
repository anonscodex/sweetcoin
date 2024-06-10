// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white fixed bottom-0 left-0 right-0 p-6 rounded shadow-lg text-center">
        <h2 className="text-xl text-black mb-4">Confirm Action🚀</h2>
        <p className="mb-6 text-black">Are you sure you want to use this booster?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-700"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-gray-700"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
