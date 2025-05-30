import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Profile = () => {
  const navigate = useNavigate();

  // State lưu URL ảnh hiện tại
  const [avatarSrc, setAvatarSrc] = useState(
    "https://storage.googleapis.com/a1aa/image/d9b9dc12-f1a6-49f6-994f-da75c9acd92b.jpg"
  );

  // Ref tới input file ẩn
  const fileInputRef = useRef(null);

  // Hàm mở dialog chọn file
  const handleChoosePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Hàm xử lý khi chọn ảnh mới
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Tạo URL tạm cho ảnh để preview
      const imageUrl = URL.createObjectURL(file);
      setAvatarSrc(imageUrl);
    }
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main className="profile-page">
        <div className="profile-container">
          <div className="sidebar">
            <div className="user-info">
              <img src={avatarSrc} alt="User avatar" className="avatar" />
              <div className="username">abcd</div>
              <button
                className="edit-btn"
                onClick={() => navigate("/profile/edit-profile")}
              >
                <i className="fas fa-pen"></i> Sửa hồ sơ
              </button>
              <button className="choose-photo-btn" onClick={handleChoosePhotoClick}>
                Chọn ảnh
              </button>
              {/* input file ẩn */}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>

            <nav className="menu">
              <div className="menu-item">
                <img
                  src="https://storage.googleapis.com/a1aa/image/68e0928c-3dcc-4979-9c36-18d6decc71ff.jpg"
                  alt="Notification"
                  className="icon"
                />
                <span>Thông báo</span>
              </div>
              <div className="menu-item">
                <i className="fas fa-user"></i>
                <span>Tài khoản của tôi</span>
              </div>
              <div className="menu-item active">
                <span>Hồ sơ</span>
              </div>
              <div className="menu-item">
                <span>Địa chỉ</span>
              </div>
            </nav>
          </div>

          <div className="profile-content">
            <h2>Hồ sơ của tôi</h2>
            <p>Quản lý thông tin hồ sơ</p>
            <hr />
            <form className="profile-form">
              <div className="form-row">
                <label htmlFor="username">Tên đăng nhập</label>
                <div id="username">abcd</div>
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <div id="email">abcd******@gmail.com</div>
              </div>
              <div className="form-row">
                <label htmlFor="phone">Số điện thoại</label>
                <div id="phone">***********23</div>
              </div>
              <div className="form-row">
                <label htmlFor="gender">Giới tính</label>
                <div className="gender-options">
                  <label>
                    <input type="radio" name="gender" value="Nam" disabled /> Nam
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Nữ" disabled /> Nữ
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Khác" disabled /> Khác
                  </label>
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="dob">Ngày sinh</label>
                <div id="dob">**/**/2002</div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
