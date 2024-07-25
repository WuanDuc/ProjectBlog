import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './UserInfo.css';
import { host } from '../../configs/constants';
const UserInfo = () => {
  const location = useLocation();
  const { name, email, password } = location.state || {};
  
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: name || '',
    email: email || '',
    password: password || '',
    avatar: '',
    backgroundImage: '',
    birthPlace: '',
    phoneNumber: '',
    birthDate: '',
  });

  const handleYes = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = async => {
    setShowModal(false);
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    fetch(`${host}api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="user-info-page">
      {!showForm ? (
        <div className={`ask-section ${showForm ? 'hide' : ''}`}>
          <p>Would you like to provide more information?</p>
          <button onClick={handleYes}>Yes</button>
        </div>
      ) : (
        <div className="form-section">
          <form className={`info-form ${showForm ? 'show' : ''}`} onSubmit={handleSubmit}>
            <h2>Additional Information</h2>
            <div className="form-group">
              <label>Avatar:</label>
              <input type="file" accept="image/*" name="avatar" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Background Image:</label>
              <input type="file" accept="image/*" name="backgroundImage" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Birth Place:</label>
              <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Birth Date:</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure all information is complete? Some information might be missing.</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCancel}>No</button>
              <button className="confirm-button" onClick={handleConfirm}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
