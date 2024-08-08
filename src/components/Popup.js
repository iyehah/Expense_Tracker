import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup = ({ children, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Popup;
