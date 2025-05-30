// NotificationProfile.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./NotificationProfile.scss";

const orders = [
  {
    id: "215412NJDN",
    date: "08:32 26-03-2025",
    deadline: "25-04-2025",
    img: "https://storage.googleapis.com/a1aa/image/89112f0a-7b90-4e6f-045a-7eade138b872.jpg",
    alt: "Man wearing white t-shirt with black print, front view",
  },
  {
    id: "215412NJDN",
    date: "08:32 26-03-2025",
    deadline: "25-04-2025",
    img: "https://storage.googleapis.com/a1aa/image/950a92ec-3b58-47c8-609d-3b00d4e70f20.jpg",
    alt: "Man wearing black t-shirt and cap, side view",
  },
  {
    id: "215412NJDN",
    date: "08:32 26-03-2025",
    deadline: "25-04-2025",
    img: "https://storage.googleapis.com/a1aa/image/eb7810a2-291c-4b80-92c9-8b47a3ac2772.jpg",
    alt: "Man wearing white t-shirt with black print, side view",
  },
];

export default function NotificationProfile() {
  return (
    <div className="notification-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main">
          <div className="order-list">
            {orders.map((order, idx) => (
              <article key={idx} className="order-item">
                <img
                  className="order-img"
                  src={order.img}
                  alt={order.alt}
                  width={64}
                  height={64}
                />
                <div className="order-content">
                  <h3 className="order-title">Đơn hàng đã hoàn tất</h3>
                  <p className="order-desc">
                    Đơn hàng {order.id} đã hoàn thành. Bạn hãy đánh giá sản phẩm
                    trước ngày {order.deadline} để giúp người khác hiểu hơn về
                    sản phẩm
                  </p>
                  <p className="order-date">{order.date}</p>
                  <button className="rate-btn">Đánh giá sản phẩm</button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
