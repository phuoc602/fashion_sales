import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditAddress.scss";

const AddAddress = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu đến API ở đây nếu cần
    alert("Đã thêm địa chỉ mới:\n" + JSON.stringify({ name, phone, detail }, null, 2));
    navigate("/profile/address");
  };

  return (
    <div className="edit-address-page">
      <main className="address-content">
        <div className="back-button" onClick={() => navigate("/profile/address")}>
          <i className="fas fa-arrow-left"></i> Quay lại
        </div>

        <div className="address-header">
          <h1>Thêm địa chỉ mới</h1>
        </div>

        <form className="address-form" onSubmit={handleSubmit}>
          <label>
            Họ và tên:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Số điện thoại:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>

          <label>
            Địa chỉ chi tiết:
            <textarea
              rows={4}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              required
            />
          </label>

          <div className="form-actions">
            <button type="submit" className="default-btn">
              Lưu địa chỉ
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => navigate("/profile/address")}
            >
              Hủy
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddAddress;
