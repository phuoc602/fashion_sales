import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "abcd",
    email: "abcd******@gmail.com",
    phone: "***********23",
    gender: "Nam",
    dob: "2002-01-01",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lưu thông tin:", formData);
    alert("Hồ sơ đã được lưu.");
    navigate("/profile");
  };

  return (
    <div className="edit-profile-page">
      <Header />
      <div className="edit-profile-container">
        <div className="back-button" onClick={() => navigate("/profile")}>
          <i className="fas fa-arrow-left"></i> Quay lại
        </div>
        <h2>Chỉnh sửa hồ sơ</h2>
        <p>Cập nhật thông tin cá nhân</p>
        <hr />
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>Giới tính</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={formData.gender === "Nam"}
                  onChange={handleChange}
                />
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={formData.gender === "Nữ"}
                  onChange={handleChange}
                />
                Nữ
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Khác"
                  checked={formData.gender === "Khác"}
                  onChange={handleChange}
                />
                Khác
              </label>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="dob">Ngày sinh</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit">Lưu</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
