import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './styles.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const jsonData = JSON.stringify({
      ...formData,
      access_key: '2bc7fa67-c61c-4b25-b1e7-28a52df7be41'
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: jsonData
      });

      const json = await response.json();
      if (response.status === 200) {
        // Trigger SweetAlert on successful form submission
        Swal.fire({
          title: "Let's Connect!",
          text: "Submited successfully",
          icon: "success"
        });

        // Reset the form and form state
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: json.message,
          icon: "error"
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Something went wrong!",
        text: "There was an issue with the submission.",
        icon: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 my-5 d-flex justify-content-center align-items-center">
          <img src="images/p1.png" alt="Form-Image" className="img-fluid animated-img" />
        </div>

        {/* Form Section */}
        <div className="col-md-6 my-5">
          <form onSubmit={handleSubmit} id="form" className="custom-form">
            <input type="hidden" name="access_key" value="2bc7fa67-c61c-4b25-b1e7-28a52df7be41" />

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name" 
                className="form-control custom-input" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                name="email" 
                className="form-control custom-input" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control custom-input" 
                name="message" 
                id="message" 
                rows="3" 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline-danger mt-3 fw-bold" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
