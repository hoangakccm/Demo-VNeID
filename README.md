# VNeID Demo (web app / PWA)

Bản **demo giao diện** lấy cảm hứng từ VNeID, chạy trên web và cài được lên màn hình chính iPhone để mở toàn màn hình.
Đây **không phải ứng dụng chính thức** và **không có giá trị pháp lý**: không dùng logo/huy hiệu chính thức, không hiển thị giấy tờ tuỳ thân hay mã QR thật, đăng nhập chỉ là mô phỏng (mật khẩu không được lưu hay gửi đi đâu).

## Cấu trúc
- `index.html` – khung trang, meta cho iOS chạy toàn màn hình
- `styles.css` – giao diện
- `app.js` – các màn hình: Đăng nhập, Trang chủ, Ví giấy tờ, Thông báo, Cài đặt
- `config.js` – tên / số điện thoại hiển thị (sửa ở đây)
- `manifest.webmanifest`, `sw.js`, `icons/` – PWA (biểu tượng, chạy offline)

## Chạy thử trên máy
```bash
python3 -m http.server 8000
# mở http://localhost:8000
```

## Cài lên iPhone
Safari chỉ cho cài PWA từ trang **HTTPS**. Cách nhanh nhất: bật GitHub Pages
(Settings → Pages → Deploy from a branch → chọn nhánh, thư mục `/root`), sau đó:
1. Mở link GitHub Pages bằng **Safari**
2. Nhấn nút **Chia sẻ** → **Thêm vào Màn hình chính**
3. Mở từ biểu tượng trên màn hình chính → chạy toàn màn hình, không có thanh địa chỉ
