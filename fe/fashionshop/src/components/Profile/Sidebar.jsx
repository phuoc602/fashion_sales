import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ avatarSrc, username = "abcd" }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleChoosePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Xử lý file ảnh (upload, preview...)
      console.log("Chọn file ảnh:", file);
    }
  };

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">
          {avatarSrc ? (
            <img src={avatarSrc} alt="User avatar" />
          ) : (
            <i className="fas fa-user"></i>
          )}
        </div>
        <div className="name">{username}</div>
        <button
          className="edit-btn"
          onClick={() => navigate("/profile/edit-profile")}
        >
          <i className="fas fa-pen"></i>
          <span>Sửa hồ sơ</span>
        </button>
        <button className="choose-btn" onClick={handleChoosePhotoClick}>
          Chọn ảnh
        </button>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <nav>
        <ul className="nav-list">
          <li
            className="nav-item"
            onClick={() => navigate("/profile/notification")}
          >
            <i className="fas fa-bell"></i>
            <span>Thông báo</span>
          </li>
          <li className="nav-item">
            <i className="fas fa-user"></i>
            <span>Tài khoản của tôi</span>
          </li>
          <li className="sub-item active">Hồ sơ</li>
          <li className="sub-item">Địa chỉ</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
