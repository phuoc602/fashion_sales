import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditAddress.scss";

const fakeAddressData = {
  1: {
    name: "Lê Hữu Phước",
    phone: "(+84) 38495623",
    detail:
      "36/15, Đường số 1, khu phố Tân Hòa, phường Đông Hòa, Dĩ An, Bình Dương",
  },
  2: {
    name: "Lê Hữu Phước",
    phone: "(+84) 38495623",
    detail: `Số 91, Quốc Lộ 55, Thôn 4 sơn mỹ\nXã Thắng Hải, Huyện Hàm Tân, Bình Thuận`,
  },
};

const EditAddress = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    if (id && fakeAddressData[id]) {
      setName(fakeAddressData[id].name);
      setPhone(fakeAddressData[id].phone);
      setDetail(fakeAddressData[id].detail);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đã cập nhật địa chỉ:\n" + JSON.stringify({ name, phone, detail }, null, 2));
    navigate("/profile/address");
  };

  return (
    <div className="edit-address-page">
      <main className="address-content">
        {/* Nút quay lại */}
        <div className="back-button" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Quay lại
        </div>

        <div className="address-header">
          <h1>Cập nhật địa chỉ</h1>
        </div>

        <form onSubmit={handleSubmit} className="address-form">
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
              Lưu thay đổi
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

export default EditAddress;
