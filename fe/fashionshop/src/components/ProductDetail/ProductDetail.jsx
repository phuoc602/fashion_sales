import React from "react";
import "./ProductDetail.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

function StarRating() {
  return (
    <div className="star-rating">
      {"★★★★★".split("").map((star, i) => (
        <span key={i} className="star">
          {star}
        </span>
      ))}
    </div>
  );
}

function Icon({ name, className = "" }) {
  return (
    <span className={`icon ${name} ${className}`} aria-hidden="true"></span>
  );
}

function CheckIcon() {
  return (
    <span className="check-icon" aria-hidden="true">
      ✔
    </span>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  console.log("Product ID:", id);

  const relatedProducts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      alt: "Man wearing black t-shirt with white graphic design side view",
      title: "Áo thun nam trơn họa tiết 001",
      price: "206.000₫",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      alt: "Man wearing black t-shirt with white graphic design side view",
      title: "Áo thun nam trơn họa tiết 001",
      price: "206.000₫",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      alt: "Man wearing black t-shirt with white graphic design side view",
      title: "Áo thun nam trơn họa tiết 001",
      price: "206.000₫",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      alt: "Man wearing black t-shirt with white graphic design side view",
      title: "Áo thun nam trơn họa tiết 001",
      price: "206.000₫",
    },
  ];

  return (
    <div className="product-page">
      <Header />
      <div className="product-container">
        <div className="product-images">
          {[
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
          ].map((src, idx) => (
            <img key={idx} src={src} alt="product" />
          ))}
        </div>

        <div className="product-info">
          <div className="breadcrumb">Áo / Áo thun / Áo thun nam</div>
          <h1 className="product-title">Áo thun nam trơn họa tiết 001</h1>

          <div className="product-price">
            <span className="current">206.000₫</span>
            <span className="original">395.000₫</span>
          </div>

          <div className="product-rating">
            <StarRating />
            <span className="review-count">(0 đánh giá)</span>
          </div>

          <div className="product-color">
            <div className="label">Màu sắc</div>
            <div className="options">
              <label>
                <input type="radio" name="color" defaultChecked />
                <span className="swatch white" />
                <span>Trắng / Bền</span>
              </label>
              <label>
                <input type="radio" name="color" />
                <span className="swatch black" />
                <span>Đen</span>
              </label>
            </div>
          </div>

          <div className="product-size">
            <div className="label">Kích thước</div>
            <div className="sizes">
              {["S", "M", "L", "XL"].map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
          </div>

          <button className="add-to-cart">Thêm vào giỏ hàng</button>

          <div className="product-services">
            <div>
              <Icon name="truck" /> <strong>Miễn Phí Vận Chuyển:</strong> áp
              dụng cho đơn trên 500.000₫
            </div>
            <div>
              <Icon name="sync" /> <strong>Đổi Trả Dễ Dàng:</strong> hỗ trợ đổi
              trả trong 7 ngày
            </div>
            <div>
              <Icon name="gift" /> <strong>Quà Quý Tặng:</strong> tặng kèm
              sticker
            </div>
          </div>

          <div className="product-description">
            <p>Áo thun trơn họa tiết – Phong cách tối giản, cá tính độc đáo</p>
            <p>Chiếc áo thun nam thể thao phong cách bằng tay...</p>
            <p>
              Đặc điểm nổi bật:
              <br />✔ Cotton thoáng mát, co giãn tốt
              <br />✔ Kiểu dáng Unisex
              <br />✔ In họa tiết chất lượng cao
              <br />✔ Form vừa GOLF form lửng
            </p>
          </div>

          <div className="product-model">
            <div className="label">Model</div>
            <p>Mẫu mặc: Cao 1m70, mặc size L</p>
            <p>
              <CheckIcon /> Chất liệu thân thiện môi trường
            </p>
            <p>
              <CheckIcon /> Công nghệ in an toàn
            </p>
          </div>
        </div>
      </div>

      <div className="related-products">
        <div className="label">Sản phẩm gợi ý</div>
        <div className="list">
          {relatedProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="item">
              <img src={product.img} alt={product.alt} />
              <div className="title">{product.title}</div>
              <div className="price">{product.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="review-container">
        <h2 className="review-title">Đánh giá</h2>

        <div className="summary-box">
          <div className="summary-overall">
            <div>
              Đánh giá tổng thể: <span className="bold">5.0</span>
            </div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star" />
              ))}
            </div>
          </div>

          <div className="summary-rating-breakdown">
            {[
              { width: 90, count: 9 },
              { width: 60, count: 6 },
              { width: 30, count: 3 },
              { width: 10, count: 1 },
            ].map((item, i) => (
              <div key={i} className="rating-row">
                <i className="fas fa-star" />
                <div className="star-bg">
                  <div
                    className="star-fill"
                    style={{ width: `${item.width}%` }}
                  ></div>
                </div>
                <div className="rating-count">{item.count}</div>
              </div>
            ))}
          </div>

          <div className="summary-size-fit">
            <div className="bold">Từ nhỏ đến lớn</div>
            <div className="fit-line">
              <span>Nhỏ</span>
              <div className="star-bg flex-grow">
                <div className="star-fill" style={{ width: "40%" }}></div>
              </div>
              <span>Lớn</span>
            </div>
          </div>
        </div>

        <div className="filter-bar">
          <button className="filter-button">
            Bộ lọc <i className="fas fa-bars" />
          </button>
          <div className="sort-select">
            <select>
              <option>Sắp xếp theo:</option>
              <option>Từ cao đến thấp</option>
              <option>Từ thấp đến cao</option>
            </select>
          </div>
        </div>

        {[
          {
            name: "Hoàng Huy Tín",
            details: [
              "Chiều cao: 1m65 - 1m70",
              "Cân nặng: 55 - 60 kg",
              "Dáng người: Tiêu chuẩn",
              "Size đã mua: L",
              "Size thường mặc: L",
            ],
            rating: 5,
            title: "Thoáng mát",
            comment: "Vừa vặn, thoáng mát.",
            time: "14 days ago",
          },
          {
            name: "Huỳnh Thị Cẩm Tiên",
            details: [
              "Chiều cao: 1m55 - 1m65",
              "Cân nặng: 50 - 55 kg",
              "Dáng người: Nhỏ nhắn",
              "Size đã mua: M",
              "Size thường mặc: M",
            ],
            rating: 5,
            title: "Siêu thoải mái",
            comment:
              "Chất lượng tuyệt vời, ấm áp và cực kỳ thoải mái. Mình chọn size M vì có phần lưng rộng và áo vừa vặn hoàn hảo. Form áo hơi rộng một chút, nhưng điều đó lại rất tốt!",
            time: "14 days ago",
          },
        ].map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-info">
              <div className="review-name bold">{review.name}</div>
              <div className="verified">
                <i className="fas fa-check-circle" /> Đã Nhận
              </div>
              {review.details.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
            <div className="review-content">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <div className="bold">{review.title}</div>
              <div>{review.comment}</div>
            </div>
            <div className="review-time">{review.time}</div>
          </div>
        ))}

        <div className="price-title">Giá cả minh bạch</div>
        <div className="price-note">
          Chúng tôi công khai chi phí sản xuất từng sản phẩm để bạn hiểu rõ hơn
          về giá trị thực sự. Một số chi phí khác như thiết kế, thử nghiệm, kiểm
          tra chất lượng, thuê văn phòng và cửa hàng không được liệt kê đầy đủ,
          nhưng chúng tôi tin rằng bạn xứng đáng được biết những gì tạo nên sản
          phẩm mà bạn yêu thích.
        </div>

        <div className="cost-breakdown">
          {[
            { label: "Nguyên liệu", value: "62.3%", icon: "box-open" },
            { label: "Phụ kiện", value: "7.5%", icon: "puzzle-piece" },
            { label: "Nhân công", value: "17.4%", icon: "user-cog" },
            {
              label: "Thuế & phí phát",
              value: "10.5%",
              icon: "file-invoice-dollar",
            },
            { label: "Vận chuyển", value: "2.0%", icon: "truck" },
          ].map((item, i) => (
            <div key={i} className="cost-item">
              <i className={`fas fa-${item.icon} fa-2x`} aria-hidden="true"></i>
              <div>{item.label}</div>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
