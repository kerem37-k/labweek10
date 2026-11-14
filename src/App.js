
import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label>Email</label>
            <input name="email" type="email" placeholder="Enter email" onChange={handleChange} />
          </div>
          <div>
            <label>Name</label>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
          </div>
        </div>

        <label>Address</label>
        <input name="address" placeholder="1234 Main St" onChange={handleChange} />

        <label>Address 2</label>
        <input name="address2" placeholder="Apartment, studio, or floor" onChange={handleChange} />

        <div className="row">
          <div>
            <label>City</label>
            <input name="city" onChange={handleChange} />
          </div>

          <div>
            <label>Province</label>
            <select name="province" onChange={handleChange}>
              <option value="">Choose...</option>
              {[
                'Alberta', 'British Columbia', 'Manitoba',
                'New Brunswick', 'Newfoundland and Labrador',
                'Nova Scotia', 'Ontario', 'Prince Edward Island',
                'Quebec', 'Saskatchewan'
              ].map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Postal Code</label>
            <input name="postalCode" onChange={handleChange} />
          </div>
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" required /> Agree Terms & Condition?
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Full Name:</strong> {form.name}</p>
          <p><strong>Address:</strong> {form.address}</p>
          {form.address2 && <p><strong>Address 2:</strong> {form.address2}</p>}
          <p><strong>City:</strong> {form.city}</p>
          <p><strong>Province:</strong> {form.province}</p>
          <p><strong>Postal Code:</strong> {form.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
