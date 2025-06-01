import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileAddress.scss";
import Sidebar from "./Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ProfileAddress = () => {
  const navigate = useNavigate();

  const addresses = [
    {
      id: 1,
      name: "Lê Hữu Phước",
      phone: "(+84) 38495623",
      detail: "36/15, Đường số 1, khu phố Tân Hòa, phường Đông Hòa, Dĩ An, Bình Dương",
    },
    {
      id: 2,
      name: "Lê Hữu Phước",
      phone: "(+84) 38495623",
      detail: `Số 91, Quốc Lộ 55, Thôn 4 sơn mỹ\nXã Thắng Hải, Huyện Hàm Tân, Bình Thuận`,
    },
  ];

  return (
    <>
      <Header />

      <div className="profile-address-page">
        <Sidebar />
        <main className="address-content">
          <div className="address-header">
            <h1>Địa chỉ của tôi</h1>
            <button
              className="add-address-btn"
              onClick={() => navigate("/profile/address/add")}
            >
              + Thêm địa chỉ mới
            </button>
          </div>

          {addresses.map((addr) => (
            <section key={addr.id} className="address-item">
              <p className="address-name">
                <strong>{addr.name}</strong>
                <span> | {addr.phone}</span>
              </p>
              <p className="address-detail" style={{ whiteSpace: "pre-line" }}>
                {addr.detail}
              </p>
              <div className="address-actions">
                <button
                  className="update-btn"
                  onClick={() => navigate(`/profile/address/edit/${addr.id}`)}
                >
                  Cập nhật
                </button>
                <button className="delete-btn">Xóa</button>
                <button className="default-btn">Thiết lập mặc định</button>
              </div>
            </section>
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ProfileAddress;
