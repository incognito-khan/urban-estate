"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLead } from "@/redux/slices/leadSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.lead);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(addLead(formData));
    if (res?.payload?.id) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="php-email-form">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-group">
              <div className="input-with-icon">
                <i className="bi bi-person" />
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <div className="input-with-icon">
                <i className="bi bi-envelope" />
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="input-with-icon">
                <i className="bi bi-text-left" />
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="input-with-icon">
                <i className="bi bi-chat-dots message-icon" />
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Message..."
                  style={{ height: 180 }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            {loading && <div className="loading">Loading</div>}
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
