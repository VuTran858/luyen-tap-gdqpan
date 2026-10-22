# 🎖️ Hệ Thống Ôn Thi Trắc Nghiệm GDQP-AN (Học Phần 1) - 386 Câu

> **Website trắc nghiệm trực tuyến** môn Giáo dục quốc phòng và an ninh: **Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam** (Chuẩn đề cương Bộ Giáo dục & Đào tạo / ĐHĐN).  
> **100% Client-side (Static Web App)** — Chạy mượt mà trực tiếp trên máy tính, điện thoại hoặc triển khai miễn phí vĩnh viễn trên **GitHub Pages**.

---

## ✨ Tính Năng Nổi Bật

1. **Chuẩn hóa trọn bộ 386 câu hỏi trắc nghiệm**:
   - Bao quát toàn bộ **11 bài học** theo đề cương giáo trình.
   - Mỗi câu gồm đúng **3 lựa chọn (A, B, C)**: 01 đáp án chính xác và 02 đáp án gây nhiễu logic.
   - Vị trí đáp án được đảo đều ngẫu nhiên (~35% A, ~32% B, ~33% C).

2. **Các chế độ học tập đa dạng**:
   - ⏱️ **Thi thử tính giờ (Exam Mode)**: Bốc ngẫu nhiên đề 30 câu (25 phút), 40 câu (30 phút), hoặc 60 câu (45 phút). Tự động đếm ngược, thu bài và chấm điểm theo thang điểm 10 kèm nhận xét.
   - 📖 **Luyện tập theo từng bài**: Tùy chọn 1 hoặc nhiều bài học cụ thể để ôn sâu.
   - 🚀 **Marathon 386 câu**: Luyện tập liên tục toàn bộ ngân hàng câu hỏi.
   - 🎯 **Ôn luyện câu làm sai (Smart Review)**: Tự động lưu các câu bạn từng trả lời sai vào bộ nhớ máy (`localStorage`) để rà soát lỗ hổng kiến thức trước ngày thi.
   - 📚 **Tra cứu & Ngân hàng câu hỏi**: Tìm kiếm từ khóa tức thì trong tích tắc, lọc theo bài và hiển thị đáp án đúng để học thuộc.

3. **Trải nghiệm học tập hiện đại**:
   - 📋 **Bảng câu hỏi (Question Palette)**: Nhảy nhanh tới bất kỳ câu nào, theo dõi tiến độ câu đã làm, chưa làm và gắn cờ (⭐).
   - ⌨️ **Hỗ trợ phím tắt**: Bấm `A, B, C` hoặc `1, 2, 3` để chọn đáp án; `← / →` để chuyển câu cực nhanh trên laptop/PC.
   - 🌙 **Giao diện Sáng / Tối (Dark Mode)**: Tự động nhớ tùy chọn của người dùng, bảo vệ mắt khi ôn bài ban đêm.
   - 📱 **Tương thích 100% Mobile & PC**: Giao diện co giãn (responsive) hoàn hảo trên mọi điện thoại Android, iPhone, iPad, Laptop.

---

## 🚀 Hướng Dẫn Chạy Trên Máy Tính (Offline)

Bạn **không cần cài đặt bất kỳ phần mềm nào** (không cần Node.js, Python, hay Web server):
1. Mở thư mục dự án `trac-nghiem-gdqpan`.
2. Nhấp đúp chuột vào file **`index.html`**.
3. Trang web sẽ mở ra ngay lập tức trên trình duyệt của bạn (Chrome, Edge, Safari, Firefox, Cốc Cốc...) và hoạt động đầy đủ 100% tính năng.

---

## 🌐 Hướng Dẫn Đưa Lên GitHub Pages (Miễn Phí Vĩnh Viễn)

Chỉ mất **2 phút** để bạn đưa trang web này lên mạng để bạn bè hoặc chính bạn có thể truy cập ôn thi trên điện thoại từ bất kỳ đâu:

### Cách 1: Tải trực tiếp qua giao diện web GitHub (Đơn giản nhất, không cần cài Git)

1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Bấm vào nút **New Repository** (hoặc truy cập `https://github.com/new`).
3. Đặt tên repository, ví dụ: `trac-nghiem-gdqpan`, chọn chế độ **Public** -> bấm **Create repository**.
4. Ở trang vừa tạo, bấm vào liên kết **uploading an existing file**.
5. Kéo thả toàn bộ các file trong thư mục này vào:
   - `index.html`
   - `app.js`
   - `questions.js`
   - `style.css`
   - `README.md`
6. Bấm nút **Commit changes** màu xanh ở dưới cùng.
7. Vào mục **Settings** của repository -> Chọn **Pages** (ở cột menu bên trái).
8. Tại phần **Build and deployment**:
   - **Branch**: Chọn `main` (hoặc `master`).
   - Thư mục giữ nguyên `/ (root)`.
   - Bấm **Save**.
9. Chờ khoảng 1-2 phút, GitHub sẽ cấp cho bạn một đường link website trực tuyến miễn phí có dạng:
   👉 `https://<ten-tai-khoan-cua-ban>.github.io/trac-nghiem-gdqpan/`

---

### Cách 2: Sử dụng dòng lệnh Git (Dành cho lập trình viên)

Mở terminal tại thư mục dự án và chạy các lệnh sau:

```bash
# 1. Khởi tạo kho git và commit mã nguồn
git init
git add .
git commit -m "Khoi tao website trac nghiem GDQPAN 386 cau"

# 2. Đổi tên nhánh chính thành main
git branch -M main

# 3. Liên kết với kho GitHub vừa tạo
git remote add origin https://github.com/<ten-tai-khoan>/trac-nghiem-gdqpan.git

# 4. Đẩy mã nguồn lên GitHub
git push -u origin main
```

Sau khi đẩy xong, vào **Settings -> Pages** trên GitHub và kích hoạt GitHub Pages như hướng dẫn ở trên.

---

## 📁 Cấu Trúc Mã Nguồn

```text
trac-nghiem-gdqpan/
├── index.html        # Giao diện chính (Single Page Application)
├── style.css         # Thiết kế CSS hiện đại, biến màu, Dark mode, Animation
├── questions.js      # Toàn bộ cơ sở dữ liệu 386 câu hỏi trắc nghiệm (11 bài)
├── app.js            # Logic xử lý bài thi, đếm giờ, lưu điểm, phím tắt
└── README.md         # Tài liệu hướng dẫn sử dụng và triển khai
```

---

## 📚 Danh Mục 11 Bài Học GDQP-AN Học Phần 1 Có Trong Đề:

1. **Bài 1**: Đối tượng, nhiệm vụ và phương pháp nghiên cứu môn học GDQP&AN *(25 câu)*
2. **Bài 2**: Quan điểm của CN Mác - Lênin, tư tưởng Hồ Chí Minh về chiến tranh, quân đội và BVTQ *(45 câu)*
3. **Bài 3**: Xây dựng nền quốc phòng toàn dân, an ninh nhân dân bảo vệ Tổ quốc *(32 câu)*
4. **Bài 4**: Chiến tranh nhân dân bảo vệ Tổ quốc Việt Nam XHCN *(41 câu)*
5. **Bài 5**: Xây dựng lực lượng vũ trang nhân dân Việt Nam *(31 câu)*
6. **Bài 6**: Kết hợp phát triển KT-XH với tăng cường quốc phòng, an ninh và đối ngoại *(39 câu)*
7. **Bài 7**: Những vấn đề cơ bản về lịch sử nghệ thuật quân sự Việt Nam *(37 câu)*
8. **Bài 8**: Xây dựng và bảo vệ chủ quyền biển, đảo, biên giới quốc gia trong tình hình mới *(34 câu)*
9. **Bài 9**: Xây dựng lực lượng Dân quân tự vệ, Dự bị động viên và Động viên quốc phòng *(36 câu)*
10. **Bài 10**: Xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc *(31 câu)*
11. **Bài 11**: Những vấn đề cơ bản về bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội *(35 câu)*

**Chúc bạn ôn tập thật tốt và đạt điểm số tối đa trong kỳ thi GDQP-AN! 🎓**
