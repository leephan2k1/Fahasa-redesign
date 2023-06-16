import Logo from './logo';

export default function Footer() {
  return (
    <footer className="w-full relative">
      <div className="absolute top-0 left-16">
        <Logo className="text-5xl" />
      </div>

      <div className="flex justify-center space-x-28 absolute top-0 right-20">
        <div className="flex flex-col space-y-4">
          <h4>DỊCH VỤ</h4>
          <p>Điều khoản sử dụng</p>
          <p>Chính sách bảo mật thông tin cá nhân</p>
          <p>Chính sách bảo mật thanh toán</p>
          <p>Giới thiệu Fahaha</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4>HỖ TRỢ</h4>
          <p>Chính sách đổi - trả - hoàn tiền</p>
          <p>Chính sách bảo hành - bồi hoàn</p>
          <p>Chính sách vận chuyển</p>
          <p>Chính sách khách sỉ</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4>LIÊN HỆ</h4>
          <p>60-62 Lê Lợi, Q.1, TP. HCM</p>
          <p>cskh@fahaha.com.vn</p>
          <p>012345678</p>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ef4444"
          fillOpacity="1"
          d="M0,192L80,186.7C160,181,320,171,480,192C640,213,800,267,960,282.7C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
}
