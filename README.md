# VNeID Demo (web app / PWA)

Bản **demo giao diện** lấy cảm hứng từ VNeID, chạy trên web và cài được lên màn hình chính iPhone để mở toàn màn hình.
Đây **không phải ứng dụng chính thức** và **không có giá trị pháp lý**: không dùng logo/huy hiệu chính thức, không hiển thị giấy tờ tuỳ thân hay mã QR thật, đăng nhập chỉ là mô phỏng (mật khẩu không được lưu hay gửi đi đâu).

## Cấu trúc
- `index.html` – khung trang, meta cho iOS chạy toàn màn hình
- `styles.css` – giao diện
- `app.js` – các màn hình: Đăng nhập, Trang chủ, Ví giấy tờ, Thông báo, Cài đặt
- `config.js` – tên / số điện thoại hiển thị (sửa ở đây)
- `manifest.webmanifest`, `sw.js`, `icons/` – PWA (biểu tượng, chạy offline)
- `mockup/` – công cụ tạo mockup banner (xem bên dưới)

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

## Công cụ Mockup Banner (`mockup/`)
Mở `mockup/index.html` (qua máy chủ web hoặc GitHub Pages, ví dụ `http://localhost:8000/mockup/`).
1. Chọn / kéo thả / dán (Ctrl+V) một hoặc nhiều ảnh banner
2. Banner được tự động ghép vào vị trí banner trên ảnh màn hình Trang chủ mẫu (`mockup/template-home.png`)
3. Tải về PNG từng ảnh hoặc **Tải tất cả**

Tuỳ chọn:
- **Giữ tỉ lệ ảnh**: banner rộng hết khung, giữ nguyên tỉ lệ; nội dung bên dưới tự dịch như trong ứng dụng
- **Lấp đầy khung**: cắt banner cho vừa đúng khung cũ (≈ 2,22 : 1, tức 1146 × 516 px @3x)
- **Ảnh gốc** (mặc định): giữ nguyên ảnh chụp màn hình mẫu 1242 × 2688, chỉ thay vùng banner; tuỳ chọn **Thêm khung máy** nếu cần
- **Đổi ảnh mẫu**: dùng ảnh chụp Trang chủ khác cùng bố cục

Mọi xử lý chạy trong trình duyệt, ảnh không được gửi đi đâu.
