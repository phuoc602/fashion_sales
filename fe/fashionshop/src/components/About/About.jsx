import React from 'react';
import './About.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="about-container">
            <Header/>
      <img
        src="image/image2.png"
        alt="Top banner image with colored pencils and black and white doodle graphics surrounding text 'Ultimate Creator's Guide Doodle Graphics'"
        className="top-image"
      />

      {/* Title and paragraph */}
      <div className="about-title">
        <h2>S&A – Thời Trang Bền Vững Kết Hợp Nghệ Thuật</h2>
        <p>
          Tại S&A, chúng tôi tin rằng thời trang không chỉ là trang phục, mà còn
          là một tuyên ngôn cá nhân. Chúng tôi tạo ra những thiết kế tối giản,
          tinh tế, kết hợp với nghệ thuật sáng tạo để mang đến sự độc đáo cho từng
          sản phẩm.
        </p>
      </div>

      {/* Section: Left text, right image */}
      <div className="section left-text">
        <div className="text">
          <h3>Thiết kế để trường tồn.</h3>
          <p>
            Tại S&A, Chúng tôi không chạy theo xu hướng nhất thời. Chúng tôi muốn bạn có thể mặc những thiết kế này trong nhiều năm, 
            thậm chí nhiều thập kỷ. Đó là lí do chúng tôi chọn những chất liệu cao cấp nhất và hợp tác với các xưởng sản xuất uy tín để tạo 
            nên những sản phẩm bền vững - từ vãi cotton hữu cơ đến các chất liệu tái chế thân thiện với môi trường. 
          </p>
        </div>
        <div className="image">
          <img
            src="image/image3.png"
            alt="Person with head made of black and white doodle graphics"
          />
        </div>
      </div>

      {/* Full width image with text overlay */}
      <div className="section full-image">
        <img
          src="image/image4.png"
          alt="Close-up of natural materials like wood and fabric"
        />
        <div className="overlay-text">
          Chúng tôi tin rằng mỗi người đều có thể tạo nên sự khác biệt.
        </div>
      </div>

      {/* Section: Left image, right text */}
      <div className="section right-text">
        <div className="image">
          <img
            src="image/image5.png"
            alt="Black and white Vietnam doodle art wall"
          />
        </div>
        <div className="text-box">
          <h3>Nhà máy sản xuất của chúng tôi</h3>
          <p>
           Chúng tôi dành nhiều tháng để tìm kiếm các nhà máy sản xuất tốt nhất trên thế giới - những
           nơi cũng sản xuất cho các thương hiệu cao cấp mà bạn yêu thích. Chúng tôi thường xuyên đến thăm 
           và xây dựng mỗi quan hệ bền chặt với các chủ nhà máy.
          </p>
        </div>
      </div>

      {/* Bottom section with heading and 3 images */}
      <div className="explore-section">
        <h4>Khám phá thêm</h4>
        <div className="explore-images">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="Art and Chill logo doodle style black and white"
          />
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80c"
            alt="White t-shirt with black doodle graphic design"
          />
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="White t-shirt with colorful doodle graphic design"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
