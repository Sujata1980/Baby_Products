import React from 'react'
import './ConfirmModel.css';

const ConfirmModel = ({message,onConfirm,onCancel}) => {
  return (
    <div className="modal-overlay">
        <div className="modal-box">
        <p>{message}</p>
        <div className="modal-buttons">
            <button className="confirm-btn" onClick={onConfirm}>Yes</button>
            <button className="cancel-btn" onClick={onCancel}>No</button>
        </div>
        </div>      
    </div>
  )
}

export default ConfirmModel;
