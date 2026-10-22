// Dữ liệu 386 câu hỏi trắc nghiệm GDQP-AN Học phần 1
const QUIZ_DATA = [
  {
    "lesson_id": 1,
    "lesson_title": "BÀI 1: ĐỐI TƯỢNG, NHIỆM VỤ VÀ PHƯƠNG PHÁP NGHIÊN CỨU MÔN HỌC GIÁO DỤC QUỐC PHÒNG VÀ AN NINH",
    "question_count": 25,
    "questions": [
      {
        "global_id": 1,
        "lesson_id": 1,
        "id": 1,
        "q": "Hãy cho biết đối tượng nghiên cứu môn học Giáo dục quốc phòng và an ninh là gì?",
        "options": {
          "A": "Chỉ nghiên cứu về lịch sử nghệ thuật quân sự và các trận đánh lớn của Quân đội nhân dân Việt Nam",
          "B": "Chỉ huấn luyện kỹ năng bắn súng, điều lệnh đội ngũ và thể lực chuyên môn quân sự",
          "C": "Đường lối QPAN của Đảng; Công tác QPAN; Quân sự chung; Kỹ thuật chiến đấu bộ binh và chiến thuật"
        },
        "key": "C"
      },
      {
        "global_id": 2,
        "lesson_id": 1,
        "id": 2,
        "q": "Phương pháp luận chung nhất của việc nghiên cứu giáo dục quốc phòng và an ninh dựa trên cơ sở nào?",
        "options": {
          "A": "Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh",
          "B": "Học thuyết quân sự hiện đại của các nước phát triển trên thế giới",
          "C": "Kinh nghiệm thực tiễn tác chiến trong hai cuộc kháng chiến chống Pháp và chống Mỹ"
        },
        "key": "A"
      },
      {
        "global_id": 3,
        "lesson_id": 1,
        "id": 3,
        "q": "Quá trình nghiên cứu môn học giáo dục quốc phòng và an ninh phải nắm vững và vận dụng đúng đắn các quan điểm nào sau đây?",
        "options": {
          "A": "Quan điểm hệ thống, quan điểm lịch sử - lôgic, và quan điểm thực tiễn",
          "B": "Quan điểm duy tâm khách quan, quan điểm siêu hình và quan điểm kinh nghiệm",
          "C": "Quan điểm thực dụng, quan điểm trừu tượng và quan điểm cá biệt"
        },
        "key": "A"
      },
      {
        "global_id": 4,
        "lesson_id": 1,
        "id": 4,
        "q": "Các phương pháp nghiên cứu môn học Giáo dục quốc phòng và an ninh?",
        "options": {
          "A": "Phương pháp phỏng đoán cảm tính kết hợp mô phỏng tự do trên thiết bị công nghệ",
          "B": "Phương pháp nghiên cứu lý luận kết hợp tổng kết thực tiễn, phương pháp phân tích, tổng hợp, so sánh",
          "C": "Chỉ sử dụng phương pháp diễn thuyết một chiều và ghi nhớ thụ động kiến thức"
        },
        "key": "B"
      },
      {
        "global_id": 5,
        "lesson_id": 1,
        "id": 5,
        "q": "Theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, chương trình môn học Giáo dục quốc phòng và an ninh trong trường trung cấp sư phạm, cao đẳng sư phạm và cơ sở giáo dục đại học bao gồm mấy học phần?",
        "options": {
          "A": "4 học phần",
          "B": "5 học phần",
          "C": "3 học phần"
        },
        "key": "A"
      },
      {
        "global_id": 6,
        "lesson_id": 1,
        "id": 6,
        "q": "Theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, chương trình môn học Giáo dục quốc phòng và an ninh trong trường trung cấp sư phạm, cao đẳng sư phạm và cơ sở giáo dục đại học, tổng thời lượng bao nhiêu tiết?",
        "options": {
          "A": "150 tiết",
          "B": "165 tiết",
          "C": "180 tiết"
        },
        "key": "B"
      },
      {
        "global_id": 7,
        "lesson_id": 1,
        "id": 7,
        "q": "Theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 1 - Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam là bao nhiêu tiết?",
        "options": {
          "A": "30 tiết",
          "B": "60 tiết",
          "C": "45 tiết"
        },
        "key": "C"
      },
      {
        "global_id": 8,
        "lesson_id": 1,
        "id": 8,
        "q": "Theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 2 – Công tác quốc phòng và an ninh là bao nhiêu tiết?",
        "options": {
          "A": "30 tiết",
          "B": "45 tiết",
          "C": "60 tiết"
        },
        "key": "A"
      },
      {
        "global_id": 9,
        "lesson_id": 1,
        "id": 9,
        "q": "Theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 3 – Quân sự chung là bao nhiêu tiết?",
        "options": {
          "A": "45 tiết",
          "B": "60 tiết",
          "C": "30 tiết"
        },
        "key": "C"
      },
      {
        "global_id": 10,
        "lesson_id": 1,
        "id": 10,
        "q": "Theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 4 – Kỹ thuật chiến đấu bộ binh và chiến thuật là bao nhiêu tiết?",
        "options": {
          "A": "45 tiết",
          "B": "60 tiết",
          "C": "30 tiết"
        },
        "key": "B"
      },
      {
        "global_id": 11,
        "lesson_id": 1,
        "id": 11,
        "q": "Tên của học phần 1 chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo là?",
        "options": {
          "A": "Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam",
          "B": "Lịch sử nghệ thuật quân sự và chiến lược quốc phòng Việt Nam",
          "C": "Công tác quốc phòng, an ninh và phòng thủ dân sự"
        },
        "key": "A"
      },
      {
        "global_id": 12,
        "lesson_id": 1,
        "id": 12,
        "q": "Tên của học phần 2 chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo là?",
        "options": {
          "A": "Chiến thuật bộ binh và phòng thủ khu vực",
          "B": "Công tác quốc phòng và an ninh",
          "C": "Xây dựng lực lượng vũ trang nhân dân Việt Nam"
        },
        "key": "B"
      },
      {
        "global_id": 13,
        "lesson_id": 1,
        "id": 13,
        "q": "Tên của học phần 3 chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo là?",
        "options": {
          "A": "Quân sự chung",
          "B": "Kỹ thuật chiến đấu bộ binh hiện đại",
          "C": "Kỹ thuật bắn súng và chất nổ quân sự"
        },
        "key": "A"
      },
      {
        "global_id": 14,
        "lesson_id": 1,
        "id": 14,
        "q": "Tên của học phần 4 chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo là?",
        "options": {
          "A": "Điều lệnh quân sự và hậu cần chiến dịch",
          "B": "Kỹ thuật chiến đấu bộ binh và chiến thuật",
          "C": "Phòng chống chiến lược diễn biến hòa bình của địch"
        },
        "key": "B"
      },
      {
        "global_id": 15,
        "lesson_id": 1,
        "id": 15,
        "q": "Chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 1 gồm bao nhiêu bài?",
        "options": {
          "A": "12 bài",
          "B": "9 bài",
          "C": "11 bài"
        },
        "key": "C"
      },
      {
        "global_id": 16,
        "lesson_id": 1,
        "id": 16,
        "q": "Chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 2 gồm bao nhiêu bài?",
        "options": {
          "A": "5 bài",
          "B": "7 bài",
          "C": "6 bài"
        },
        "key": "A"
      },
      {
        "global_id": 17,
        "lesson_id": 1,
        "id": 17,
        "q": "Chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 3 gồm bao nhiêu bài?",
        "options": {
          "A": "5 bài",
          "B": "6 bài",
          "C": "4 bài"
        },
        "key": "A"
      },
      {
        "global_id": 18,
        "lesson_id": 1,
        "id": 18,
        "q": "Chương trình giáo dục quốc phòng và an ninh theo Thông tư số 05/2020/TT-BGDĐT ngày 18 tháng 3 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo, học phần 4 gồm bao nhiêu bài?",
        "options": {
          "A": "4 bài",
          "B": "5 bài",
          "C": "3 bài"
        },
        "key": "A"
      },
      {
        "global_id": 19,
        "lesson_id": 1,
        "id": 19,
        "q": "Điều kiện để sinh viên được dự thi kết thúc học phần lần thứ nhất là gì?",
        "options": {
          "A": "Chỉ cần đăng ký đúng hạn và có mặt tại phòng thi kết thúc học phần",
          "B": "Tham gia tối thiểu 50% số tiết học và nộp đủ bài tập cá nhân",
          "C": "Tham gia học tập từ 80% thời gian quy định trở lên và có điểm kiểm tra thường xuyên đạt từ 5 điểm trở lên"
        },
        "key": "C"
      },
      {
        "global_id": 20,
        "lesson_id": 1,
        "id": 20,
        "q": "Điều kiện đủ để sinh viên được cấp chứng chỉ Giáo dục quốc phòng và an ninh là?",
        "options": {
          "A": "Điểm trung bình chung các học phần đạt 7.0 trở lên và không vắng quá 3 buổi học",
          "B": "Chỉ cần hoàn thành bài kiểm tra bắn đạn thật và điều lệnh đội ngũ",
          "C": "Tích lũy đủ các học phần của chương trình và điểm mỗi học phần đạt từ 5.0 trở lên (thang điểm 10)"
        },
        "key": "C"
      },
      {
        "global_id": 21,
        "lesson_id": 1,
        "id": 21,
        "q": "Theo thông tư số 17/2021/TT-BGDĐT ngày 22/6/2021 của Bộ trưởng Bộ Giáo dục và Đào tạo quy định về chuẩn chương trình đào tạo; xây dựng, thẩm định và ban hành chương trình đào tạo các trình độ của giáo dục đại học, quy đổi số tín chỉ Học phần 1 - Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam (45 tiết) sang bao nhiêu tín chỉ?",
        "options": {
          "A": "2 tín chỉ",
          "B": "3 tín chỉ",
          "C": "4 tín chỉ"
        },
        "key": "B"
      },
      {
        "global_id": 22,
        "lesson_id": 1,
        "id": 22,
        "q": "Theo thông tư số 17/2021/TT-BGDĐT ngày 22/6/2021 của Bộ trưởng Bộ Giáo dục và Đào tạo quy định về chuẩn chương trình đào tạo; xây dựng, thẩm định và ban hành chương trình đào tạo các trình độ của giáo dục đại học, quy đổi số tín chỉ Học phần 2 – Công tác quốc phòng và an ninh (30 tiết) sang bao nhiêu tín chỉ?",
        "options": {
          "A": "3 tín chỉ",
          "B": "1 tín chỉ",
          "C": "2 tín chỉ"
        },
        "key": "C"
      },
      {
        "global_id": 23,
        "lesson_id": 1,
        "id": 23,
        "q": "Theo thông tư số 17/2021/TT-BGDĐT ngày 22/6/2021 của Bộ trưởng Bộ Giáo dục và Đào tạo quy định về chuẩn chương trình đào tạo; xây dựng, thẩm định và ban hành chương trình đào tạo các trình độ của giáo dục đại học, quy đổi số tín chỉ Học phần 3 – Quân sự chung (30 tiết) sang bao nhiêu tín chỉ?",
        "options": {
          "A": "2 tín chỉ",
          "B": "3 tín chỉ",
          "C": "1 tín chỉ"
        },
        "key": "A"
      },
      {
        "global_id": 24,
        "lesson_id": 1,
        "id": 24,
        "q": "Theo thông tư số 17/2021/TT-BGDĐT ngày 22/6/2021 của Bộ trưởng Bộ Giáo dục và Đào tạo quy định về chuẩn chương trình đào tạo; xây dựng, thẩm định và ban hành chương trình đào tạo các trình độ của giáo dục đại học, quy đổi số tín chỉ Học phần 4 – Kỹ thuật chiến đấu bộ binh và chiến thuật (60 tiết) sang bao nhiêu tín chỉ?",
        "options": {
          "A": "3 tín chỉ",
          "B": "1 tín chỉ",
          "C": "2 tín chỉ"
        },
        "key": "C"
      },
      {
        "global_id": 25,
        "lesson_id": 1,
        "id": 25,
        "q": "Môn học Giáo dục quốc phòng và an ninh là:",
        "options": {
          "A": "Môn học ngoại khóa tự nguyện dành cho sinh viên có nguyện vọng phục vụ quân đội",
          "B": "Chuyên đề bồi dưỡng kỹ năng tự vệ cá nhân không tính điểm vào hệ số tốt nghiệp",
          "C": "Môn học chính khóa, bắt buộc thuộc chương trình đào tạo đại học, cao đẳng theo quy định pháp luật"
        },
        "key": "C"
      }
    ]
  },
  {
    "lesson_id": 2,
    "lesson_title": "BÀI 2: QUAN ĐIỂM CƠ BẢN CỦA CHỦ NGHĨA MÁC - LÊNIN, TƯ TƯỞNG HỒ CHÍ MINH VỀ CHIẾN TRANH, QUÂN ĐỘI VÀ BẢO VỆ TỔ QUỐC",
    "question_count": 45,
    "questions": [
      {
        "global_id": 26,
        "lesson_id": 2,
        "id": 1,
        "q": "Theo quan điểm của chủ nghĩa Mác-Lênin nguồn gốc của chiến tranh là:",
        "options": {
          "A": "Do bản tính hung hãn, hiếu chiến tự nhiên và xung đột tâm lý của con người",
          "B": "Nguồn gốc kinh tế (chế độ tư hữu) và nguồn gốc xã hội (sự phân chia xã hội thành các giai cấp đối kháng)",
          "C": "Do sự tranh chấp tự phát về tài nguyên thiên nhiên và không gian sinh tồn của các bộ tộc"
        },
        "key": "B"
      },
      {
        "global_id": 27,
        "lesson_id": 2,
        "id": 2,
        "q": "Một trong những nguyên lý cơ bản của chủ nghĩa Mác – Lênin về bảo vệ Tổ quốc XHCN?",
        "options": {
          "A": "Chỉ dựa vào sự viện trợ vũ khí và liên minh quân sự với các cường quốc",
          "B": "Bảo vệ Tổ quốc XHCN là một tất yếu khách quan, mang tính quy luật của cách mạng XHCN",
          "C": "Chỉ cần xây dựng nền kinh tế giàu mạnh mà không cần duy trì lực lượng vũ trang thường trực"
        },
        "key": "B"
      },
      {
        "global_id": 28,
        "lesson_id": 2,
        "id": 3,
        "q": "Chủ tịch Hồ Chí Minh đã chỉ rõ cuộc chiến tranh của dân ta chống thực dân Pháp xâm lược là nhằm mục đích gì?",
        "options": {
          "A": "Mở rộng tầm ảnh hưởng và uy thế chính trị trong khu vực Đông Nam Á",
          "B": "Trừng phạt các thế lực thực dân và phân chia lại ranh giới thuộc địa",
          "C": "Bảo vệ độc lập, chủ quyền, thống nhất lãnh thổ của Tổ quốc và tự do, hạnh phúc cho nhân dân"
        },
        "key": "C"
      },
      {
        "global_id": 29,
        "lesson_id": 2,
        "id": 4,
        "q": "Vì sao Chủ tịch Hồ Chí Minh khẳng định phải dùng bạo lực cách mạng để giành lấy chính quyền và bảo vệ chính quyền?",
        "options": {
          "A": "Vì bạo lực là phương thức duy nhất để giải quyết mọi tranh chấp xã hội trong lịch sử",
          "B": "Vì giai cấp thống trị phản động không bao giờ tự nguyện từ bỏ địa vị và quyền lợi áp bức của chúng",
          "C": "Vì bạo lực vũ trang giúp nhanh chóng xây dựng tiềm lực công nghiệp quốc phòng"
        },
        "key": "B"
      },
      {
        "global_id": 30,
        "lesson_id": 2,
        "id": 5,
        "q": "Chủ tịch Hồ Chí Minh khẳng định sự ra đời của quân đội ta là thế nào?",
        "options": {
          "A": "Là lực lượng được thành lập theo yêu cầu hỗ trợ quốc tế của khối Đồng minh",
          "B": "Là một tất yếu lịch sử trong sự nghiệp giải phóng dân tộc và bảo vệ Tổ quốc của nhân dân ta",
          "C": "Là sản phẩm ngẫu nhiên do hoàn cảnh chiến tranh thế giới thứ hai tạo ra"
        },
        "key": "B"
      },
      {
        "global_id": 31,
        "lesson_id": 2,
        "id": 6,
        "q": "Chủ tịch Hồ Chí Minh khẳng định hai nhiệm vụ chính của quân đội nhân dân Việt Nam là gì?",
        "options": {
          "A": "Chiến đấu bảo vệ Tổ quốc và tham gia lao động sản xuất, xây dựng đất nước",
          "B": "Canh gác biên giới và phát triển thương mại quốc phòng đối ngoại",
          "C": "Tham gia cứu hộ cứu nạn và quản lý trật tự giao thông đô thị"
        },
        "key": "A"
      },
      {
        "global_id": 32,
        "lesson_id": 2,
        "id": 7,
        "q": "Theo quan điểm chủ nghĩa Mác-Lênin để bảo vệ tổ quốc XHCN ta cần phải làm gì?",
        "options": {
          "A": "Chỉ tập trung vào công tác đàm phán ngoại giao và nhượng bộ có điều kiện",
          "B": "Giải thể dần các lực lượng vũ trang để ưu tiên tối đa vốn cho ngân sách kinh tế",
          "C": "Tăng cường tiềm lực quốc phòng toàn diện, xây dựng quân đội kiểu mới và phát huy sức mạnh toàn dân"
        },
        "key": "C"
      },
      {
        "global_id": 33,
        "lesson_id": 2,
        "id": 8,
        "q": "Theo quan điểm chủ nghĩa Mác-Lênin bảo vệ tổ quốc XHCN là nghĩa vụ, trách nhiệm của ai?",
        "options": {
          "A": "Chỉ thuộc về đội ngũ cán bộ, đảng viên và thanh niên trong độ tuổi nghĩa vụ",
          "B": "Riêng của lực lượng quân đội và công an thường trực",
          "C": "Của toàn thể nhân dân lao động, dưới sự lãnh đạo của Đảng Cộng sản"
        },
        "key": "C"
      },
      {
        "global_id": 34,
        "lesson_id": 2,
        "id": 9,
        "q": "Vai trò của Đảng Cộng sản Việt Nam trong sự nghiệp bảo vệ Tổ quốc XHCN Việt Nam là gì?",
        "options": {
          "A": "Phối hợp giám sát ngang hàng cùng các tổ chức xã hội dân sự",
          "B": "Lãnh đạo tuyệt đối, trực tiếp về mọi mặt",
          "C": "Chỉ định hướng chính sách đối ngoại mà không can thiệp vào chỉ huy quân sự"
        },
        "key": "B"
      },
      {
        "global_id": 35,
        "lesson_id": 2,
        "id": 10,
        "q": "Theo quan điểm chủ nghĩa Mác-Lênin bảo vệ tổ quốc XHCN là một tất yếu khách quan là vì?",
        "options": {
          "A": "Nhằm mục đích răn đe và phô trương sức mạnh quân sự với các nước láng giềng",
          "B": "Do quy định bắt buộc của luật pháp và điều lệ các tổ chức quốc tế",
          "C": "Xuất phát từ bản chất hiếu chiến, âm mưu chống phá của chủ nghĩa đế quốc và các thế lực thù địch"
        },
        "key": "C"
      },
      {
        "global_id": 36,
        "lesson_id": 2,
        "id": 11,
        "q": "Theo quan điểm chủ nghĩa Mác-Lênin bảo vệ tổ quốc XHCN là một tất yếu khách quan là vì?",
        "options": {
          "A": "Để đảm bảo ổn định chính trị cho việc phân chia lợi ích nội bộ giai cấp",
          "B": "Xuất phát từ yêu cầu bảo vệ thành quả cách mạng và sự nghiệp xây dựng CNXH của nhân dân",
          "C": "Để thỏa mãn nhu cầu hiện đại hóa vũ khí trang bị của quân đội"
        },
        "key": "B"
      },
      {
        "global_id": 37,
        "lesson_id": 2,
        "id": 12,
        "q": "Theo quan điểm chủ nghĩa Mác-Lênin bảo vệ tổ quốc XHCN là một tất yếu khách quan là vì?",
        "options": {
          "A": "Sự xuất hiện của vũ khí hủy diệt hàng loạt đòi hỏi phải bảo vệ các công trình trọng điểm",
          "B": "Giai cấp vô sản cần duy trì chiến tranh liên tục để củng cố quyền lực nhà nước",
          "C": "Quy luật xây dựng CNXH luôn phải đi đôi với bảo vệ vững chắc Tổ quốc XHCN"
        },
        "key": "C"
      },
      {
        "global_id": 38,
        "lesson_id": 2,
        "id": 13,
        "q": "Theo tư tưởng Hồ Chí Minh, để thực hiện thắng lợi nhiệm vụ cách mạng trong giai đoạn mới, chúng ta cần:",
        "options": {
          "A": "Chỉ dựa vào sự viện trợ kỹ thuật và công nghệ hiện đại từ các cường quốc",
          "B": "Tăng cường sự lãnh đạo của Đảng và phát huy sức mạnh khối đại đoàn kết toàn dân tộc",
          "C": "Tập trung tuyệt đối vào phát triển kinh tế thị trường, xem nhẹ yếu tố quân sự"
        },
        "key": "B"
      },
      {
        "global_id": 39,
        "lesson_id": 2,
        "id": 14,
        "q": "Theo tư tưởng Hồ Chí Minh, để thực hiện thắng lợi nhiệm vụ cách mạng trong giai đoạn mới, chúng ta cần:",
        "options": {
          "A": "Kết hợp chặt chẽ giữa hai nhiệm vụ chiến lược: Xây dựng CNXH và Bảo vệ Tổ quốc XHCN",
          "B": "Chờ đợi thời cơ hòa hoãn hoàn toàn trên trường quốc tế mới tiến hành củng cố quốc phòng",
          "C": "Ưu tiên xây dựng căn cứ phòng thủ biệt lập tách rời đời sống dân sinh"
        },
        "key": "A"
      },
      {
        "global_id": 40,
        "lesson_id": 2,
        "id": 15,
        "q": "Quan điểm nào về chiến tranh theo quan điểm của chủ nghĩa Mác–Lênin là đúng đắn nhất?",
        "options": {
          "A": "Chiến tranh là hiện tượng sinh học tự nhiên, vĩnh viễn tồn tại cùng lịch sử loài người",
          "B": "Chiến tranh là sự tiếp tục của chính trị bằng các biện pháp bạo lực",
          "C": "Chiến tranh bắt nguồn từ sự định đoạt của các đấng tối cao và xung đột văn hóa"
        },
        "key": "B"
      },
      {
        "global_id": 41,
        "lesson_id": 2,
        "id": 16,
        "q": "Theo quan điểm chủ nghĩa Mác–Lênin nguồn gốc sâu xa dẫn đến sự xuất hiện, tồn tại của chiến tranh là gì?",
        "options": {
          "A": "Sự xuất hiện của chế độ tư hữu về tư liệu sản xuất",
          "B": "Sự xung đột tâm lý dân tộc và định kiến tôn giáo kéo dài",
          "C": "Sự phát triển không đều về dân số và nhu cầu tranh đoạt đất đai"
        },
        "key": "A"
      },
      {
        "global_id": 42,
        "lesson_id": 2,
        "id": 17,
        "q": "Theo quan điểm của chủ nghĩa Mác–Lênin, chính trị là sự phản ánh tập trung của:",
        "options": {
          "A": "Đạo đức",
          "B": "Tôn giáo",
          "C": "Kinh tế"
        },
        "key": "C"
      },
      {
        "global_id": 43,
        "lesson_id": 2,
        "id": 18,
        "q": "Theo quan điểm của chủ nghĩa Mác-Lênin về quan hệ giữa chiến tranh với chính trị:",
        "options": {
          "A": "Chiến tranh chi phối và điều khiển hoàn toàn chính trị",
          "B": "Chính trị quyết định toàn bộ quá trình phát sinh, phát triển và kết thúc của chiến tranh",
          "C": "Chiến tranh và chính trị là hai hiện tượng xã hội độc lập, không liên quan đến nhau"
        },
        "key": "B"
      },
      {
        "global_id": 44,
        "lesson_id": 2,
        "id": 19,
        "q": "Theo Chủ tịch Hồ Chí Minh cội nguồn của sức mạnh để giành thắng lợi trong chiến tranh ở nước ta là gì?",
        "options": {
          "A": "Số lượng quân đội đông đảo và ưu thế về vũ khí hiện đại",
          "B": "Địa hình hiểm trở và vị trí địa lý thuận lợi của đất nước",
          "C": "Sức mạnh của khối đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng"
        },
        "key": "C"
      },
      {
        "global_id": 45,
        "lesson_id": 2,
        "id": 20,
        "q": "Chủ tịch Hồ Chí Minh khẳng định mục đích cuộc chiến tranh của nhân dân ta chống thực dân Pháp là?",
        "options": {
          "A": "Để phân định lại biên giới lãnh thổ và tranh giành các hải cảng biển",
          "B": "Chiến tranh chính nghĩa, tự vệ, vì độc lập dân tộc và thống nhất Tổ quốc",
          "C": "Nhằm triệt hạ uy tín của khối đế quốc phương Tây tại châu Á"
        },
        "key": "B"
      },
      {
        "global_id": 46,
        "lesson_id": 2,
        "id": 21,
        "q": "Tư tưởng Hồ Chí Minh xác định thái độ đối với chiến tranh là?",
        "options": {
          "A": "Ủng hộ chiến tranh chính nghĩa chống xâm lược, phản đối và lên án chiến tranh phi nghĩa",
          "B": "Chủ trương hòa bình tuyệt đối, phản đối việc sử dụng vũ lực dưới mọi hình thức",
          "C": "Ủng hộ mọi cuộc chiến tranh xảy ra để đẩy nhanh sự suy tàn của chủ nghĩa đế quốc"
        },
        "key": "A"
      },
      {
        "global_id": 47,
        "lesson_id": 2,
        "id": 22,
        "q": "Trong tác phẩm Bản án chế độ Thực dân Pháp, Chủ tịch Hồ Chí Minh đã sử dụng hình ảnh gì để khái quát bản chất bóc lột của chủ nghĩa tư bản?",
        "options": {
          "A": "Hình ảnh con đỉa hai vòi",
          "B": "Hình ảnh con bạch tuộc",
          "C": "Hình ảnh con quái vật hai đầu"
        },
        "key": "A"
      },
      {
        "global_id": 48,
        "lesson_id": 2,
        "id": 23,
        "q": "Theo tư tưởng Hồ Chí Minh, đánh giặc phải bằng sức mạnh của toàn dân, trong đó phải có lực lượng nào làm nòng cốt?",
        "options": {
          "A": "Lực lượng vũ trang nhân dân",
          "B": "Tầng lớp trí thức và học sinh, sinh viên",
          "C": "Giai cấp công nhân công nghiệp nặng"
        },
        "key": "A"
      },
      {
        "global_id": 49,
        "lesson_id": 2,
        "id": 24,
        "q": "Quan điểm về nguồn gốc của quân đội nào là đúng đắn nhất?",
        "options": {
          "A": "Quân đội xuất hiện do nhu cầu bảo vệ lãnh thổ tự nhiên trước thiên tai dã thú",
          "B": "Quân đội ra đời khi xã hội phân chia giai cấp đối kháng và xuất hiện nhà nước",
          "C": "Quân đội ra đời cùng với sự xuất hiện của xã hội loài người trong thời kỳ thị tộc"
        },
        "key": "B"
      },
      {
        "global_id": 50,
        "lesson_id": 2,
        "id": 25,
        "q": "Quân đội là công cụ bạo lực vũ trang của lực lượng nào?",
        "options": {
          "A": "Của chung mọi giai cấp và tầng lớp trong xã hội không phân biệt",
          "B": "Của một giai cấp, một nhà nước nhất định nhằm phục vụ mục đích chính trị của giai cấp đó",
          "C": "Của các tổ chức quân sự tư nhân quốc tế độc lập"
        },
        "key": "B"
      },
      {
        "global_id": 51,
        "lesson_id": 2,
        "id": 26,
        "q": "Bản chất giai cấp quyết định nội dung nào của quân đội?",
        "options": {
          "A": "Chỉ quyết định số lượng quân số tuyển chọn hàng năm",
          "B": "Chỉ quyết định quy cách trang phục và cấp hàm sĩ quan",
          "C": "Quyết định mục tiêu chiến đấu, chức năng nhiệm vụ, cơ cấu tổ chức và phương thức tác chiến của quân đội"
        },
        "key": "C"
      },
      {
        "global_id": 52,
        "lesson_id": 2,
        "id": 27,
        "q": "Theo tư tưởng Hồ Chí Minh nội dung nào là cơ sở, nền tảng để xây dựng quân đội vững mạnh toàn diện?",
        "options": {
          "A": "Mở rộng tối đa quy mô quân số thường trực trong thời bình",
          "B": "Hiện đại hóa vũ khí, khí tài và trang bị công nghệ cao",
          "C": "Xây dựng quân đội vững mạnh về chính trị"
        },
        "key": "C"
      },
      {
        "global_id": 53,
        "lesson_id": 2,
        "id": 28,
        "q": "Theo tư tưởng Hồ Chí Minh nhân tố quyết định sự hình thành và phát triển bản chất giai cấp công nhân của quân đội ta là?",
        "options": {
          "A": "Trình độ học vấn cao của các tướng lĩnh trong quân đội",
          "B": "Sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam",
          "C": "Nguồn gốc xuất thân nông dân của đa số cán bộ, chiến sĩ"
        },
        "key": "B"
      },
      {
        "global_id": 54,
        "lesson_id": 2,
        "id": 29,
        "q": "“Mạnh được yếu thua” là thể hiện vấn đề gì trong tư tưởng Hồ Chí Minh về chiến tranh?",
        "options": {
          "A": "Quy luật tất yếu của chiến tranh; muốn chiến thắng kẻ thù phải xây dựng lực lượng ta mạnh hơn địch về mọi mặt",
          "B": "Tư tưởng phó mặc cho số phận và may rủi trên chiến trường",
          "C": "Chủ trương tránh né đối đầu trực tiếp khi quân số ít hơn"
        },
        "key": "A"
      },
      {
        "global_id": 55,
        "lesson_id": 2,
        "id": 30,
        "q": "Nội dung nào được xác định là tư tưởng chủ đạo trong toàn bộ di sản lý luận Hồ Chí Minh?",
        "options": {
          "A": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
          "B": "Hòa giải vô điều kiện với mọi thế lực đế quốc xâm lược",
          "C": "Công nghiệp hóa bằng mọi giá trong thời gian ngắn nhất"
        },
        "key": "A"
      },
      {
        "global_id": 56,
        "lesson_id": 2,
        "id": 31,
        "q": "Theo quan điểm Chủ nghĩa Mác–Lênin, bản chất giai cấp của quân đội thể hiện trên những mặt cơ bản nào?",
        "options": {
          "A": "Chỉ thể hiện ở mức độ tinh nhuệ của trang thiết bị tác chiến",
          "B": "Thể hiện ở mục tiêu chiến đấu, sự phục vụ lợi ích giai cấp và sự lãnh đạo của chính đảng của giai cấp đó",
          "C": "Thể hiện ở sự đồng đều về nguồn gốc sắc tộc của binh lính"
        },
        "key": "B"
      },
      {
        "global_id": 57,
        "lesson_id": 2,
        "id": 32,
        "q": "Theo quan điểm của Lênin, bảo vệ Tổ quốc xã hội chủ nghĩa là nghĩa vụ, trách nhiệm của ai?",
        "options": {
          "A": "Của các tổ chức công đoàn độc lập ngoài nhà nước",
          "B": "Chỉ của riêng lực lượng an ninh bảo vệ biên giới",
          "C": "Giai cấp công nhân và toàn thể nhân dân lao động"
        },
        "key": "C"
      },
      {
        "global_id": 58,
        "lesson_id": 2,
        "id": 33,
        "q": "Theo quan điểm Lênin, trong những điều kiện xác định, yếu tố nào giữ vai trò quyết định đến sức mạnh chiến đấu của quân đội?",
        "options": {
          "A": "Mật độ căn cứ quân sự trên địa bàn tác chiến",
          "B": "Yếu tố chính trị - tinh thần của cán bộ, chiến sĩ và nhân dân",
          "C": "Vũ khí và phương tiện kỹ thuật quân sự"
        },
        "key": "B"
      },
      {
        "global_id": 59,
        "lesson_id": 2,
        "id": 34,
        "q": "Theo tư tưởng Hồ Chí Minh, Quân đội nhân dân Việt Nam mang bản chất của giai cấp nào?",
        "options": {
          "A": "Mang bản chất siêu giai cấp, đứng ngoài mọi xung đột chính trị",
          "B": "Bản chất thuần túy của giai cấp nông dân Việt Nam",
          "C": "Bản chất giai cấp công nhân, có tính nhân dân và tính dân tộc sâu sắc"
        },
        "key": "C"
      },
      {
        "global_id": 60,
        "lesson_id": 2,
        "id": 35,
        "q": "Tư duy mới của Đảng ta về bảo vệ Tổ quốc thể hiện ở nội dung nào sau đây?",
        "options": {
          "A": "Xây dựng phòng tuyến kiên cố khép kín, tuyệt đối không mở rộng giao lưu kinh tế",
          "B": "Bảo vệ Tổ quốc từ sớm, từ xa, giữ nước từ khi nước chưa nguy",
          "C": "Chỉ chuẩn bị đối phó khi chiến tranh xâm lược đã bùng nổ trên thực tế"
        },
        "key": "B"
      },
      {
        "global_id": 61,
        "lesson_id": 2,
        "id": 36,
        "q": "Đối sách mềm dẻo, linh hoạt, sáng tạo của Đảng ta về bảo vệ Tổ quốc trong tình hình mới thể hiện nội dung nào?",
        "options": {
          "A": "Tham gia vào một liên minh quân sự đa phương để nhờ bảo hộ an ninh",
          "B": "Sẵn sàng từ bỏ chủ quyền lãnh thổ nếu gặp áp lực quân sự lớn",
          "C": "Thực hiện phương châm “Dĩ bất biến, ứng vạn biến”, kiên định mục tiêu độc lập chủ quyền, linh hoạt về sách lược"
        },
        "key": "C"
      },
      {
        "global_id": 62,
        "lesson_id": 2,
        "id": 37,
        "q": "Theo tư tưởng Hồ Chí Minh, Quân đội nhân dân Việt Nam có những chức năng?",
        "options": {
          "A": "Đội quân tuần tra, đội quân tuyên truyền quốc tế và đội quân đối ngoại độc lập",
          "B": "Đội quân chiến đấu, đội quân công tác, đội quân lao động sản xuất",
          "C": "Chỉ duy nhất một chức năng chiến đấu tiêu diệt địch ngoài mặt trận"
        },
        "key": "B"
      },
      {
        "global_id": 63,
        "lesson_id": 2,
        "id": 38,
        "q": "Sức mạnh bảo vệ Tổ quốc XHCN theo tư tưởng Hồ Chí Minh?",
        "options": {
          "A": "Dựa hoàn toàn vào các hiệp định viện trợ quốc tế không hoàn lại",
          "B": "Chỉ dựa vào sức mạnh hỏa lực pháo binh và xe tăng bọc thép",
          "C": "Sức mạnh tổng hợp của khối đại đoàn kết toàn dân, kết hợp sức mạnh dân tộc với sức mạnh thời đại"
        },
        "key": "C"
      },
      {
        "global_id": 64,
        "lesson_id": 2,
        "id": 39,
        "q": "Chủ tịch Hồ Chí Minh xác định nghĩa vụ, trách nhiệm của công dân về bảo vệ Tổ quốc?",
        "options": {
          "A": "Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của mọi công dân",
          "B": "Bảo vệ Tổ quốc là nghĩa vụ tự nguyện chỉ dành riêng cho nam thanh niên nông thôn",
          "C": "Là công việc được trả thù lao theo thỏa thuận hợp đồng lao động ngắn hạn"
        },
        "key": "A"
      },
      {
        "global_id": 65,
        "lesson_id": 2,
        "id": 40,
        "q": "Khẳng định phương án nào sau đây SAI?",
        "options": {
          "A": "Quân đội là một lực lượng trung lập, phi giai cấp, đứng ngoài mọi mâu thuẫn chính trị",
          "B": "Chiến tranh là hiện tượng lịch sử xã hội mang tính chất giai cấp sâu sắc",
          "C": "Quân đội mang bản chất giai cấp của nhà nước đã tổ chức ra nó"
        },
        "key": "A"
      },
      {
        "global_id": 66,
        "lesson_id": 2,
        "id": 41,
        "q": "Trường hợp nào sau đây chỉ luận điểm phản động?",
        "options": {
          "A": "Chủ trương xây dựng quân đội cách mạng, chính quy, tinh nhuệ, từng bước hiện đại",
          "B": "Khẳng định sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng đối với quân đội",
          "C": "Luận điệu đòi “phi chính trị hóa” quân đội, tách quân đội khỏi sự lãnh đạo của Đảng Cộng sản"
        },
        "key": "C"
      },
      {
        "global_id": 67,
        "lesson_id": 2,
        "id": 42,
        "q": "Mục đích của luận điệu phi chính trị hóa quân đội là gì ?",
        "options": {
          "A": "Tạo điều kiện để sĩ quan quân đội được tham gia tự do vào các hoạt động thương mại quốc tế",
          "B": "Làm cho quân đội mất phương hướng chính trị, tước bỏ sự lãnh đạo của Đảng đối với quân đội, tiến tới xóa bỏ vai trò lãnh đạo của Đảng",
          "C": "Nhằm nâng cao tính chuyên nghiệp và hiện đại hóa trang thiết bị kỹ thuật quân sự"
        },
        "key": "B"
      },
      {
        "global_id": 68,
        "lesson_id": 2,
        "id": 43,
        "q": "Theo tư tưởng Hồ Chí Minh sử dụng bạo lực cách mạng là để ?",
        "options": {
          "A": "Thực hiện các cuộc chinh phạt mở rộng không gian bờ cõi",
          "B": "Giành chính quyền, giữ vững chính quyền và bảo vệ nền độc lập tự do của Tổ quốc",
          "C": "Phô diễn sức mạnh vũ khí và áp chế các quốc gia nhỏ trong khu vực"
        },
        "key": "B"
      },
      {
        "global_id": 69,
        "lesson_id": 2,
        "id": 44,
        "q": "Theo quan điểm chủ nghĩa Mác-Lê nin Quân đội ra đời khi?",
        "options": {
          "A": "Sau cuộc cách mạng công nghiệp cận đại ở Tây Âu",
          "B": "Ngay từ thời kỳ công xã nguyên thủy khi con người phải chống chọi thú dữ",
          "C": "Xã hội phân chia thành các giai cấp đối kháng và nhà nước ra đời"
        },
        "key": "C"
      },
      {
        "global_id": 70,
        "lesson_id": 2,
        "id": 45,
        "q": "Khẳng định nào sau đây ĐÚNG?",
        "options": {
          "A": "Quân đội nhân dân Việt Nam là đội quân chuyên nghiệp không tham gia lao động sản xuất",
          "B": "Bảo vệ Tổ quốc Việt Nam XHCN là trách nhiệm riêng của lực lượng vũ trang nhân dân",
          "C": "Đảng Cộng sản Việt Nam lãnh đạo tuyệt đối, trực tiếp về mọi mặt đối với Quân đội nhân dân Việt Nam"
        },
        "key": "C"
      }
    ]
  },
  {
    "lesson_id": 3,
    "lesson_title": "BÀI 3: XÂY DỰNG NỀN QUỐC PHÒNG TOÀN DÂN, AN NINH NHÂN DÂN BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "question_count": 32,
    "questions": [
      {
        "global_id": 71,
        "lesson_id": 3,
        "id": 1,
        "q": "Tiềm lực quốc phòng, an ninh là gì?",
        "options": {
          "A": "Khả năng về nhân lực, vật lực, tài chính có thể huy động để thực hiện nhiệm vụ quốc phòng, an ninh",
          "B": "Tổng số vốn đầu tư trực tiếp nước ngoài (FDI) cam kết viện trợ cho quốc phòng",
          "C": "Toàn bộ số lượng súng đạn hiện có lưu trữ tại các kho quân sự bí mật"
        },
        "key": "A"
      },
      {
        "global_id": 72,
        "lesson_id": 3,
        "id": 2,
        "q": "Xây dựng nền quốc phòng toàn dân – an ninh nhân dân gồm những nội dung nào?",
        "options": {
          "A": "Tập trung xây dựng các rào cản phòng thủ biên giới biệt lập với quy hoạch phát triển kinh tế",
          "B": "Chỉ bao gồm mua sắm trang thiết bị quân sự và tuyển chọn nghĩa vụ quân sự",
          "C": "Xây dựng tiềm lực quốc phòng, an ninh và xây dựng thế trận quốc phòng toàn dân gắn với thế trận an ninh nhân dân"
        },
        "key": "C"
      },
      {
        "global_id": 73,
        "lesson_id": 3,
        "id": 3,
        "q": "Trong củng cố xây dựng nền quốc phòng, an ninh nhân dân, lực lượng nào là nòng cốt?",
        "options": {
          "A": "Lực lượng vũ trang nhân dân (gồm Quân đội nhân dân, Công an nhân dân, Dân quân tự vệ)",
          "B": "Lực lượng đoàn viên thanh niên và sinh viên các trường đại học",
          "C": "Đội ngũ cán bộ quản lý hành chính nhà nước cấp xã phường"
        },
        "key": "A"
      },
      {
        "global_id": 74,
        "lesson_id": 3,
        "id": 4,
        "q": "Nội dung xây dựng tiềm lực kinh tế của nền quốc phòng toàn dân là gì?",
        "options": {
          "A": "Phát triển kinh tế gắn với quốc phòng, kết hợp công nghiệp dân dụng với công nghiệp quốc phòng, bảo đảm tính cơ động khi có chiến tranh",
          "B": "Tập trung khai thác cạn kiệt tài nguyên thiên nhiên để tích trữ ngân sách quân sự",
          "C": "Chuyển toàn bộ các nhà máy sản xuất hàng tiêu dùng sang sản xuất súng đạn trong thời bình"
        },
        "key": "A"
      },
      {
        "global_id": 75,
        "lesson_id": 3,
        "id": 5,
        "q": "Xây dựng tiềm lực kinh tế của nền quốc phòng toàn dân, an ninh nhân dân cần đặc biệt quan tâm nội dung nào?",
        "options": {
          "A": "Bảo đảm cung ứng độc quyền xuất khẩu khoáng sản thô sang thị trường các nước lân cận",
          "B": "Công nghiệp hóa, hiện đại hóa đất nước gắn với xây dựng hạ tầng kỹ thuật lưỡng dụng (vừa phục vụ dân sinh vừa phục vụ QPAN)",
          "C": "Cắt giảm ngân sách an sinh xã hội để dồn 100% nguồn lực mua vũ khí từ nước ngoài"
        },
        "key": "B"
      },
      {
        "global_id": 76,
        "lesson_id": 3,
        "id": 6,
        "q": "Tiềm lực kinh tế của nền quốc phòng toàn dân, an ninh nhân dân là gì?",
        "options": {
          "A": "Tổng lượng ngoại tệ dự trữ và vàng thỏi lưu giữ trong hệ thống ngân hàng thương mại",
          "B": "Khả năng về kinh tế của đất nước có thể khai thác, huy động nhằm phục vụ cho quốc phòng, an ninh",
          "C": "Toàn bộ bất động sản thuộc quyền quản lý trực tiếp của các doanh nghiệp quân đội"
        },
        "key": "B"
      },
      {
        "global_id": 77,
        "lesson_id": 3,
        "id": 7,
        "q": "Xây dựng tiềm lực khoa học công nghệ của nền quốc phòng toàn dân, an ninh nhân dân là tạo nên khả năng gì?",
        "options": {
          "A": "Khả năng tự chủ trong nghiên cứu, chế tạo, cải tiến, làm chủ và ứng dụng vũ khí trang bị hiện đại phục vụ quốc phòng, an ninh",
          "B": "Khả năng sao chép không phép mọi phần mềm bản quyền quân sự quốc tế",
          "C": "Chỉ tạo khả năng lắp ráp các linh kiện thông tin liên lạc thông thường"
        },
        "key": "A"
      },
      {
        "global_id": 78,
        "lesson_id": 3,
        "id": 8,
        "q": "Tiềm lực chính trị, tinh thần của nền QPTD, ANND là gì?",
        "options": {
          "A": "Khả năng về chính trị, tinh thần có thể huy động tạo nên sức mạnh để thực hiện nhiệm vụ quốc phòng, an ninh",
          "B": "Tỷ lệ tham gia các hội thao thể dục thể thao định kỳ của người dân",
          "C": "Số lượng các khẩu hiệu cổ động trực quan được treo tại các khu dân cư"
        },
        "key": "A"
      },
      {
        "global_id": 79,
        "lesson_id": 3,
        "id": 9,
        "q": "Một trong các nội dung xây dựng thực lực nền quốc phòng toàn dân, an ninh nhân dân là gì?",
        "options": {
          "A": "Xây dựng tiềm lực chính trị, tinh thần; tiềm lực kinh tế; tiềm lực khoa học công nghệ và tiềm lực quân sự, an ninh",
          "B": "Giải thể dần lực lượng dân quân tự vệ để tập trung cho quân đội cơ động",
          "C": "Chỉ chú trọng xây dựng hàng rào điện tử và mua sắm tên lửa tầm xa"
        },
        "key": "A"
      },
      {
        "global_id": 80,
        "lesson_id": 3,
        "id": 10,
        "q": "Một trong những nội dung xây dựng tiềm lực quân sự, an ninh là gì?",
        "options": {
          "A": "Xây dựng lực lượng vũ trang vững mạnh, nâng cao trình độ sẵn sàng chiến đấu, hoàn thiện hệ thống phòng thủ đất nước",
          "B": "Tập trung xây dựng quân số thường trực đông hàng triệu người mà không cần đào tạo chuyên sâu",
          "C": "Khai thác tối đa súng đạn cũ lưu kho từ thời chiến tranh mà không cần bảo dưỡng cải tiến"
        },
        "key": "A"
      },
      {
        "global_id": 81,
        "lesson_id": 3,
        "id": 11,
        "q": "Một trong những nội dung xây dựng thế trận quốc phòng, an ninh nhân dân là gì?",
        "options": {
          "A": "Xây dựng các công sự cố định dàn đều trên tất cả các tuyến đường liên tỉnh",
          "B": "Bố trí toàn bộ lực lượng chủ lực tập trung ở các thành phố lớn ven biển",
          "C": "Phân chia không gian chiến lược, xây dựng các khu vực phòng thủ tỉnh, huyện vững chắc, kết hợp chặt chẽ thế trận QPTD với thế trận ANND"
        },
        "key": "C"
      },
      {
        "global_id": 82,
        "lesson_id": 3,
        "id": 12,
        "q": "Một trong các biện pháp xây dựng nền quốc phòng toàn dân, an ninh nhân dân là?",
        "options": {
          "A": "Tách rời hoạt động phát triển kinh tế với quy hoạch bố trí lực lượng quốc phòng",
          "B": "Tăng cường công tác giáo dục quốc phòng và an ninh cho toàn dân, nâng cao nhận thức, trách nhiệm của hệ thống chính trị",
          "C": "Áp dụng thiết quân luật thường xuyên tại các khu đô thị trọng điểm"
        },
        "key": "B"
      },
      {
        "global_id": 83,
        "lesson_id": 3,
        "id": 13,
        "q": "Theo Khoản 1 Điều 2 Luật Quốc phòng năm 2019 thì quốc phòng là gì?",
        "options": {
          "A": "Quốc phòng là công cuộc giữ nước bằng sức mạnh tổng hợp của toàn dân tộc, trong đó sức mạnh quân sự là đặc trưng, LLVTND làm nòng cốt",
          "B": "Quốc phòng là việc tổ chức các cuộc duyệt binh và diễn tập quy mô lớn hàng năm",
          "C": "Quốc phòng là việc trang bị vũ khí sát thương cho toàn bộ người dân trưởng thành"
        },
        "key": "A"
      },
      {
        "global_id": 84,
        "lesson_id": 3,
        "id": 14,
        "q": "Đảng ta khẳng định vị trí của nền quốc phòng toàn dân, an ninh nhân dân:",
        "options": {
          "A": "Chỉ là giải pháp tình thế tạm thời trong giai đoạn có nguy cơ chiến tranh",
          "B": "Là nhiệm vụ thứ yếu xếp sau mục tiêu tăng trưởng GDP ngắn hạn",
          "C": "Có vị trí chiến lược trọng yếu trong sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam XHCN"
        },
        "key": "C"
      },
      {
        "global_id": 85,
        "lesson_id": 3,
        "id": 15,
        "q": "Nền quốc phòng toàn dân là sức mạnh quốc phòng của đất nước, được xây dựng trên nền tảng nào?",
        "options": {
          "A": "Nền tảng chính trị, tinh thần, nhân lực, vật lực, tài chính mang tính toàn dân, toàn diện, độc lập, tự chủ, tự lực, tự cường",
          "B": "Nền tảng các hợp đồng mua bán trang thiết bị quốc phòng quốc tế",
          "C": "Dựa chủ yếu vào lực lượng đánh thuê chuyên nghiệp nước ngoài"
        },
        "key": "A"
      },
      {
        "global_id": 86,
        "lesson_id": 3,
        "id": 16,
        "q": "Nền quốc phòng toàn dân ở ta hiện nay mang tính chất?",
        "options": {
          "A": "Mang tính chất hòa bình, tự vệ, vì dân, của dân và do toàn thể nhân dân tiến hành",
          "B": "Mang tính chất phiêu lưu, hiếu chiến và răn đe quân sự phủ đầu",
          "C": "Mang tính chất tập đoàn cục bộ bảo vệ lợi ích của một nhóm thiểu số"
        },
        "key": "A"
      },
      {
        "global_id": 87,
        "lesson_id": 3,
        "id": 17,
        "q": "Đặc trưng nào thể hiện sự khác nhau về bản chất trong xây dựng nền quốc phòng, an ninh của nước ta với các nước khác?",
        "options": {
          "A": "Nền quốc phòng, an ninh của ta là nền quốc phòng toàn dân, an ninh nhân dân, vì mục đích hòa bình, tự vệ chính nghĩa",
          "B": "Nước ta có quy mô quân đội đông nhất trong khu vực châu Á",
          "C": "Nước ta hoàn toàn không chế tạo vũ khí mà chỉ nhập khẩu vũ khí hiện đại"
        },
        "key": "A"
      },
      {
        "global_id": 88,
        "lesson_id": 3,
        "id": 18,
        "q": "Đặc trưng nào mang tính truyền thống của nền quốc phòng toàn dân, an ninh nhân dân?",
        "options": {
          "A": "Truyền thống sử dụng lực lượng lính đánh thuê trong các cuộc chiến",
          "B": "Truyền thống toàn dân đánh giặc, kết hợp dựng nước đi đôi với giữ nước của dân tộc ta",
          "C": "Truyền thống đóng cửa biên giới và cấm giao thương với quốc gia bên ngoài"
        },
        "key": "B"
      },
      {
        "global_id": 89,
        "lesson_id": 3,
        "id": 19,
        "q": "Mục đích xây dựng nền quốc phòng toàn dân, an ninh nhân dân là:",
        "options": {
          "A": "Tạo ra sức mạnh tổng hợp để ngăn ngừa, răn đe, đánh bại mọi âm mưu và hành động xâm lược, bảo vệ vững chắc Tổ quốc",
          "B": "Tạo cớ để kiểm soát và hạn chế các quyền tự do dân chủ hợp pháp của công dân",
          "C": "Nhằm chuẩn bị đưa quân đội sang can thiệp vào các xung đột nội bộ của nước khác"
        },
        "key": "A"
      },
      {
        "global_id": 90,
        "lesson_id": 3,
        "id": 20,
        "q": "Tiềm lực quốc phòng ở nước ta hiện nay được hiểu như thế nào?",
        "options": {
          "A": "Là khả năng về nhân lực, vật lực, tài lực của đất nước có thể huy động để phục vụ cho quốc phòng",
          "B": "Là tổng số lượng thanh niên nhập ngũ mỗi năm",
          "C": "Chỉ là số lượng xe tăng, máy bay tiêm kích và tàu ngầm của hải quân"
        },
        "key": "A"
      },
      {
        "global_id": 91,
        "lesson_id": 3,
        "id": 21,
        "q": "Theo luật quốc phòng ở ta hiện nay thì mục đích xây dựng thế trận quốc phòng toàn dân để làm gì?",
        "options": {
          "A": "Để kiểm soát chặt chẽ tuyến giao thông vận tải đường bộ phục vụ thu thuế",
          "B": "Để tạo ra thế bố trí chiến lược chủ động, liên hoàn, vững chắc, sẵn sàng đánh thắng mọi hình thức chiến tranh xâm lược",
          "C": "Để cô lập hoàn toàn các trung tâm kinh tế đô thị khỏi vùng nông thôn"
        },
        "key": "B"
      },
      {
        "global_id": 92,
        "lesson_id": 3,
        "id": 22,
        "q": "Theo luật quốc phòng ở ta hiện nay thì đâu là nguyên tắc hoạt động quốc phòng?",
        "options": {
          "A": "Ưu tiên tuân thủ theo quyết định của các liên minh quân sự khu vực",
          "B": "Đặt dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam, sự quản lý tập trung thống nhất của Nhà nước",
          "C": "Tự quản theo mô hình dân sự độc lập không chịu sự chỉ đạo của các cơ quan chính quyền"
        },
        "key": "B"
      },
      {
        "global_id": 93,
        "lesson_id": 3,
        "id": 23,
        "q": "Đảng ta xác định tầm quan trọng của nhiệm vụ củng cố, tăng cường quốc phòng hiện nay như thế nào?",
        "options": {
          "A": "Là nhiệm vụ trọng yếu, thường xuyên của toàn Đảng, toàn dân, toàn quân và của cả hệ thống chính trị",
          "B": "Là nhiệm vụ phụ chỉ cần thực hiện vào các năm có diễn tập quân sự",
          "C": "Là công việc tạm thời khi xảy ra tranh chấp ở khu vực biên giới"
        },
        "key": "A"
      },
      {
        "global_id": 94,
        "lesson_id": 3,
        "id": 24,
        "q": "Hai nhiệm vụ chiến lược của cách mạng Việt Nam hiện nay là:",
        "options": {
          "A": "Phát triển công nghiệp nặng và xuất khẩu khoáng sản thô",
          "B": "Mở rộng đô thị hóa và hiện đại hóa hệ thống ngân hàng",
          "C": "Xây dựng chủ nghĩa xã hội và Bảo vệ vững chắc Tổ quốc Việt Nam XHCN"
        },
        "key": "C"
      },
      {
        "global_id": 95,
        "lesson_id": 3,
        "id": 25,
        "q": "Một trong những nội dung trong chính sách của Nhà nước ta về quốc phòng là?",
        "options": {
          "A": "Sử dụng vũ lực trước để giải quyết các bất đồng quốc tế",
          "B": "Gia nhập các liên minh quân sự để lập căn cứ đóng quân ở nước ngoài",
          "C": "Xây dựng nền quốc phòng toàn dân, lực lượng vũ trang nhân dân vững mạnh; thực hiện chính sách quốc phòng hòa bình, tự vệ"
        },
        "key": "C"
      },
      {
        "global_id": 96,
        "lesson_id": 3,
        "id": 26,
        "q": "Chính sách của Nhà nước về quốc phòng là?",
        "options": {
          "A": "Chủ trương phát triển vũ khí hạt nhân để khẳng định vị thế cường quốc",
          "B": "Thực hiện chính sách “4 không”: Không tham gia liên minh quân sự; Không liên kết nước này chống nước kia; Không cho đặt căn cứ quân sự; Không dùng vũ lực",
          "C": "Cho phép các thế lực bên ngoài đặt căn cứ quân sự nếu trả phí thuê cao"
        },
        "key": "B"
      },
      {
        "global_id": 97,
        "lesson_id": 3,
        "id": 27,
        "q": "Quan điểm chính sách của Đảng và Nhà nước ta về thực hiện đối ngoại quốc phòng là?",
        "options": {
          "A": "Ủy quyền an ninh quốc gia cho một tổ chức phòng thủ tập thể đa quốc gia",
          "B": "Đóng cửa khép kín tuyệt đối, không tiếp xúc trao đổi quân sự với bất kỳ nước nào",
          "C": "Chủ động, tích cực hội nhập quốc tế về quốc phòng; mở rộng hợp tác song phương và đa phương trên cơ sở tôn trọng độc lập chủ quyền"
        },
        "key": "C"
      },
      {
        "global_id": 98,
        "lesson_id": 3,
        "id": 28,
        "q": "Quan điểm chính sách của Đảng và Nhà nước ta về thực hiện đối ngoại quốc phòng là?",
        "options": {
          "A": "Tìm kiếm cơ hội kích động xung đột giữa các cường quốc để hưởng lợi kinh tế",
          "B": "Tạo thế đan xen lợi ích chiến lược, củng cố lòng tin chiến lược, giữ vững môi trường hòa bình để phát triển đất nước",
          "C": "Chấp nhận nhượng bộ một phần chủ quyền lãnh thổ để đổi lấy cam kết an ninh"
        },
        "key": "B"
      },
      {
        "global_id": 99,
        "lesson_id": 3,
        "id": 29,
        "q": "Đảng ta khẳng định vị trí của nền quốc phòng toàn dân, an ninh nhân dân?",
        "options": {
          "A": "Chỉ có tác dụng đối phó với các tệ nạn xã hội và trộm cắp thông thường",
          "B": "Là nền tảng vững chắc để bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ và chế độ XHCN",
          "C": "Có vị trí biệt lập, không gắn kết với quy hoạch phát triển vùng kinh tế trọng điểm"
        },
        "key": "B"
      },
      {
        "global_id": 100,
        "lesson_id": 3,
        "id": 30,
        "q": "Một trong những nội dung xây dựng thế trận quốc phòng toàn dân, an ninh nhân dân là?",
        "options": {
          "A": "Sơ tán toàn bộ cơ quan hành chính vào các hang đá vùng sâu vùng xa",
          "B": "Xây dựng hệ thống tường thành bao quanh tất cả các địa giới hành chính xã",
          "C": "Xây dựng “thế trận lòng dân” vững chắc làm nền tảng cho thế trận QPTD và thế trận ANND"
        },
        "key": "C"
      },
      {
        "global_id": 101,
        "lesson_id": 3,
        "id": 31,
        "q": "Trong nội dung xây dựng tiềm lực QP - AN thì tiềm lực kinh tế có vị trí?",
        "options": {
          "A": "Là cơ sở vật chất, kỹ thuật của nền quốc phòng toàn dân và an ninh nhân dân",
          "B": "Chỉ là yếu tố phụ trợ tạm thời sau các cuộc vận động cứu trợ quốc tế",
          "C": "Không có ý nghĩa quyết định đối với khả năng duy trì chiến tranh"
        },
        "key": "A"
      },
      {
        "global_id": 102,
        "lesson_id": 3,
        "id": 32,
        "q": "Chọn phương án đúng điền vào chỗ … trong câu sau? “Trong khi đặt trọng tâm vào nhiệm vụ xây dựng chủ nghĩa xã hội, chúng ta không một chút lơi lỏng nhiệm vụ bảo vệ Tổ quốc, luôn luôn coi trọng quốc phòng, an ninh, coi đó là … gắn bó chặt chẽ”.",
        "options": {
          "A": "hai mục tiêu ngắn hạn",
          "B": "hai chương trình mục tiêu quốc gia",
          "C": "hai nhiệm vụ chiến lược"
        },
        "key": "C"
      }
    ]
  },
  {
    "lesson_id": 4,
    "lesson_title": "BÀI 4: CHIẾN TRANH NHÂN DÂN BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "question_count": 41,
    "questions": [
      {
        "global_id": 103,
        "lesson_id": 4,
        "id": 1,
        "q": "Một trong những âm mưu, thủ đoạn của kẻ thù khi xâm lược nước ta là:",
        "options": {
          "A": "Chỉ sử dụng các biện pháp trừng phạt tài chính thông qua các tổ chức thương mại quốc tế",
          "B": "Tiến hành đánh nhanh thắng nhanh, kết hợp tiến công quân sự từ bên ngoài với bạo loạn lật đổ từ bên trong",
          "C": "Chủ động trường kỳ phong tỏa kinh tế và chờ đợi ta tự động giải giáp vũ khí"
        },
        "key": "B"
      },
      {
        "global_id": 104,
        "lesson_id": 4,
        "id": 2,
        "q": "Tiến hành chiến tranh xâm lược nước ta, khó khăn cơ bản nhất của địch là:",
        "options": {
          "A": "Tiến hành cuộc chiến tranh phi nghĩa, bị nhân dân tiến bộ thế giới lên án và phải đối đầu với toàn thể dân tộc Việt Nam đoàn kết",
          "B": "Vũ khí trang bị lạc hậu và thiếu phương tiện cơ giới",
          "C": "Không tìm được người dẫn đường thông thạo ngôn ngữ bản địa"
        },
        "key": "A"
      },
      {
        "global_id": 105,
        "lesson_id": 4,
        "id": 3,
        "q": "Một trong những đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc là:",
        "options": {
          "A": "Là cuộc chiến tranh ủy nhiệm phục vụ lợi ích của các khối quân sự toàn cầu",
          "B": "Chiến tranh chính nghĩa, tự vệ cách mạng nhằm bảo vệ độc lập, tự do và chủ quyền lãnh thổ",
          "C": "Cuộc chiến tranh nhằm mục tiêu bành trướng lãnh thổ và xác lập vùng ảnh hưởng bên ngoài"
        },
        "key": "B"
      },
      {
        "global_id": 106,
        "lesson_id": 4,
        "id": 4,
        "q": "Điểm mạnh cơ bản của địch khi tiến hành chiến tranh xâm lược nước ta là:",
        "options": {
          "A": "Quân số đông, vũ khí trang bị kỹ thuật công nghệ cao, hiện đại và tiềm lực kinh tế quân sự mạnh",
          "B": "Thông thạo địa hình rừng núi và nghệ thuật tác chiến du kích",
          "C": "Có ưu thế tuyệt đối về chính trị - tinh thần và sự ủng hộ của nhân dân ta"
        },
        "key": "A"
      },
      {
        "global_id": 107,
        "lesson_id": 4,
        "id": 5,
        "q": "Chiến tranh nhân dân bảo vệ Tổ quốc “là cuộc chiến tranh chính nghĩa, tự vệ cách mạng, nhằm bảo vệ độc lập tự do của dân tộc, bảo vệ độc lập chủ quyền, thống nhất toàn vẹn lãnh thổ của đất nước, bảo vệ Đảng, bảo vệ chế độ, bảo vệ nhân dân” là một nội dung của:",
        "options": {
          "A": "Phương châm tác chiến cấp chiến thuật",
          "B": "Tính chất của chiến tranh nhân dân",
          "C": "Quy chế huấn luyện dự bị động viên"
        },
        "key": "B"
      },
      {
        "global_id": 108,
        "lesson_id": 4,
        "id": 6,
        "q": "Một trong những nội dung chủ yếu của chiến tranh nhân dân là:",
        "options": {
          "A": "Chỉ tập trung quân phòng thủ cố định tại các căn cứ bờ biển",
          "B": "Tổ chức thế trận chiến tranh nhân dân liên hoàn, vững chắc trên cả nước",
          "C": "Di chuyển toàn bộ lực lượng về vùng đồng bằng để quyết chiến"
        },
        "key": "B"
      },
      {
        "global_id": 109,
        "lesson_id": 4,
        "id": 7,
        "q": "Một trong những quan điểm của Đảng ta về chiến tranh nhân dân bảo vệ tổ quốc là:",
        "options": {
          "A": "Chỉ dựa vào tác chiến của bộ đội chủ lực thường trực",
          "B": "Ủy thác quyền phòng thủ cho các lực lượng gìn giữ hòa bình quốc tế",
          "C": "Tiến hành chiến tranh toàn dân, lấy lực lượng vũ trang nhân dân làm nòng cốt"
        },
        "key": "C"
      },
      {
        "global_id": 110,
        "lesson_id": 4,
        "id": 8,
        "q": "Chiến tranh nhân dân bảo vệ tổ quốc là cuộc chiến tranh mang tính chất:",
        "options": {
          "A": "Chiến tranh cục bộ thuần túy về quân sự giữa hai quân đội chính quy",
          "B": "Toàn dân, toàn diện, lấy lực lượng vũ trang nhân dân làm nòng cốt, dưới sự lãnh đạo của Đảng",
          "C": "Chiến tranh ủy nhiệm nhằm tranh giành vùng ảnh hưởng kinh tế"
        },
        "key": "B"
      },
      {
        "global_id": 111,
        "lesson_id": 4,
        "id": 9,
        "q": "Một trong những đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc là:",
        "options": {
          "A": "Hoàn toàn không có sự phân biệt giữa tiền tuyến và hậu phương",
          "B": "Chiến tranh diễn ra trong bối cảnh quốc tế và khu vực có nhiều diễn biến phức tạp, khó lường",
          "C": "Chỉ sử dụng vũ khí thô sơ tự tạo mà không áp dụng công nghệ thông tin"
        },
        "key": "B"
      },
      {
        "global_id": 112,
        "lesson_id": 4,
        "id": 10,
        "q": "“Kết hợp sức mạnh dân tộc với sức mạnh thời đại, phát huy tinh thần tự lực tự cường, tranh thủ sự giúp đỡ quốc tế, sự đồng tình, ủng hộ của nhân dân tiến bộ thế giới” là một trong những nội dung của:",
        "options": {
          "A": "Quy định trong hợp tác kinh tế đối ngoại song phương",
          "B": "Quan điểm của Đảng trong chiến tranh nhân dân bảo vệ Tổ quốc",
          "C": "Kế hoạch diễn tập thực binh cấp chiến dịch"
        },
        "key": "B"
      },
      {
        "global_id": 113,
        "lesson_id": 4,
        "id": 11,
        "q": "Một trong những quan điểm của Đảng trong chiến tranh nhân dân bảo vệ tổ quốc là:",
        "options": {
          "A": "Tuyệt đối không sử dụng biện pháp đấu tranh ngoại giao khi đang có chiến sự",
          "B": "Chỉ sử dụng duy nhất mặt trận quân sự ngoài thực địa",
          "C": "Tiến hành chiến tranh toàn diện, kết hợp chặt chẽ giữa đấu tranh quân sự, chính trị, ngoại giao, kinh tế, văn hóa và tư tưởng"
        },
        "key": "C"
      },
      {
        "global_id": 114,
        "lesson_id": 4,
        "id": 12,
        "q": "Tính hiện đại trong chiến tranh nhân dân bảo vệ tổ quốc ở Việt Nam là:",
        "options": {
          "A": "Thay thế hoàn toàn con người bằng rô bốt chiến đấu tự động trên chiến trường",
          "B": "Phải có 100% vũ khí dẫn đường vệ tinh và tên lửa siêu thanh",
          "C": "Sử dụng vũ khí trang bị hiện đại kết hợp với vũ khí tương đối hiện đại và thô sơ; phát huy nghệ thuật quân sự độc đáo của dân tộc"
        },
        "key": "C"
      },
      {
        "global_id": 115,
        "lesson_id": 4,
        "id": 13,
        "q": "Quan điểm thực hiện toàn dân đánh giặc trong chiến tranh nhân dân bảo vệ tổ quốc có ý nghĩa:",
        "options": {
          "A": "Nhằm giảm bớt gánh nặng chi tiêu tài chính quân sự của ngân sách nhà nước",
          "B": "Huy động tối đa sức mạnh của toàn dân tộc tạo nên sức mạnh tổng hợp to lớn để đánh thắng kẻ thù xâm lược",
          "C": "Để bù đắp cho sự thiếu hụt trang thiết bị thông tin quân sự"
        },
        "key": "B"
      },
      {
        "global_id": 116,
        "lesson_id": 4,
        "id": 14,
        "q": "Trong chiến tranh nhân dân bảo vệ Tổ quốc, phải kết hợp kháng chiến với xây dựng, vừa chiến đấu vừa sản xuất, vì:",
        "options": {
          "A": "Để duy trì tiềm lực kinh tế, bảo đảm nguồn nhân lực vật lực nuôi dưỡng chiến tranh lâu dài và ổn định đời sống nhân dân",
          "B": "Nhằm xuất khẩu nông sản để kiếm ngoại tệ mua vũ khí khẩn cấp",
          "C": "Vì đối phương không bao giờ đánh phá các cơ sở sản xuất kinh tế"
        },
        "key": "A"
      },
      {
        "global_id": 117,
        "lesson_id": 4,
        "id": 15,
        "q": "Trong chiến tranh nhân dân bảo vệ Tổ quốc, phải kết hợp đấu tranh quân sự với bảo đảm an ninh chính trị, giữ gìn trật tự an toàn xã hội, trấn áp kịp thời mọi âm mưu và hành động phá hoại gây bạo loạn lật đổ, vì:",
        "options": {
          "A": "Địch thường kết hợp tiến công quân sự từ bên ngoài với hoạt động gián điệp, phá hoại gây rối loạn từ bên trong",
          "B": "Để tạo cớ cho các cơ quan kiểm tra xử phạt hành chính",
          "C": "Để hạn chế tối đa việc người dân di chuyển tự do trong thời chiến"
        },
        "key": "A"
      },
      {
        "global_id": 118,
        "lesson_id": 4,
        "id": 16,
        "q": "Kết hợp sức mạnh dân tộc với sức mạnh thời đại nhằm:",
        "options": {
          "A": "Nhận viện trợ vô điều kiện mà không cần chú trọng đến tự lực tự cường",
          "B": "Nhờ quân đội nước ngoài vào trực tiếp chiến đấu thay thế cho lực lượng ta",
          "C": "Tạo ra sức mạnh tổng hợp to lớn hơn kẻ thù, tranh thủ sự ủng hộ quốc tế, cô lập kẻ thù xâm lược"
        },
        "key": "C"
      },
      {
        "global_id": 119,
        "lesson_id": 4,
        "id": 17,
        "q": "Thế trận chiến tranh nhân dân là:",
        "options": {
          "A": "Sự tổ chức, bố trí lực lượng, tiềm lực mọi mặt của đất nước và của toàn dân trên địa bàn chiến lược nhằm đánh thắng kẻ thù",
          "B": "Bản đồ phân chia các khu vực sơ tán dân cư trong đô thị",
          "C": "Danh sách các trận địa pháo và bãi mìn được bố trí dọc đường quốc lộ"
        },
        "key": "A"
      },
      {
        "global_id": 120,
        "lesson_id": 4,
        "id": 18,
        "q": "Trong chiến tranh nhân dân bảo vệ tổ quốc, thế trận của chiến tranh được triển khai:",
        "options": {
          "A": "Chỉ bố trí dọc dải ven biển và hải đảo tiền tiêu",
          "B": "Rộng khắp trên cả nước, kết hợp chặt chẽ giữa các khu vực phòng thủ tỉnh, thành phố với thế trận chung của cả nước",
          "C": "Chỉ giới hạn tập trung trong phạm vi bán kính 50km xung quanh thủ đô"
        },
        "key": "B"
      },
      {
        "global_id": 121,
        "lesson_id": 4,
        "id": 19,
        "q": "Lực lượng trong chiến tranh nhân dân bảo vệ Tổ quốc gồm:",
        "options": {
          "A": "Toàn thể nhân dân tham gia đánh giặc, trong đó lực lượng vũ trang nhân dân (gồm 3 thứ quân) làm nòng cốt",
          "B": "Lực lượng cựu chiến binh và công nhân các nhà máy quốc phòng",
          "C": "Chỉ bao gồm quân đội chính quy và cảnh sát cơ động thường trực"
        },
        "key": "A"
      },
      {
        "global_id": 122,
        "lesson_id": 4,
        "id": 20,
        "q": "Trong chiến tranh nhân dân bảo vệ Tổ quốc, chúng ta phải chuẩn bị mọi mặt trên cả nước cũng như từng khu vực để đủ sức đánh được lâu dài, vì:",
        "options": {
          "A": "Vì vũ khí của ta sản xuất ra chưa kịp phân phát đến các đơn vị tuyến trước",
          "B": "Để chờ các tổ chức quốc tế can thiệp giải quyết giúp",
          "C": "Địch có ưu thế về kinh tế, quân sự và muốn đánh nhanh thắng nhanh; ta phải đánh lâu dài để chuyển hóa so sánh lực lượng có lợi cho ta"
        },
        "key": "C"
      },
      {
        "global_id": 123,
        "lesson_id": 4,
        "id": 21,
        "q": "Trong tổ chức lực lượng chiến tranh nhân dân bảo vệ Tổ quốc, lực lượng vũ trang phải được xây dựng:",
        "options": {
          "A": "Thu gọn tối đa và chuyển thành lực lượng dân sự hóa",
          "B": "Ưu tiên số lượng quân số ồ ạt hơn là chất lượng đào tạo huấn luyện",
          "C": "Cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, có chất lượng tổng hợp và sức chiến đấu cao"
        },
        "key": "C"
      },
      {
        "global_id": 124,
        "lesson_id": 4,
        "id": 22,
        "q": "“Chiến tranh nhân dân bảo vệ Tổ quốc sẽ diễn ra hết sức gay go, quyết liệt và phức tạp, đan xen nhau ngay từ đầu cũng như suốt quá trình chiến tranh”, là một trong những nội dung của:",
        "options": {
          "A": "Quy chế bảo mật thông tin nội bộ đơn vị",
          "B": "Đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc",
          "C": "Nghị quyết đại hội hội phụ nữ các cấp"
        },
        "key": "B"
      },
      {
        "global_id": 125,
        "lesson_id": 4,
        "id": 23,
        "q": "Mục tiêu trước mắt của chiến tranh nhân dân bảo vệ Tổ quốc ở nước ta hiện nay là:",
        "options": {
          "A": "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc, bảo vệ Đảng, Nhà nước, nhân dân và chế độ XHCN",
          "B": "Thâu tóm các mỏ dầu ngoài khơi để gia tăng tài sản quốc gia",
          "C": "Tiêu diệt hoàn toàn tiềm lực kinh tế công nghiệp của các quốc gia láng giềng"
        },
        "key": "A"
      },
      {
        "global_id": 126,
        "lesson_id": 4,
        "id": 24,
        "q": "Quan điểm thực hiện toàn dân đánh giặc trong chiến tranh nhân dân bảo vệ Tổ quốc khẳng định:",
        "options": {
          "A": "Chỉ phù hợp áp dụng đối với các thời kỳ phong kiến xa xưa",
          "B": "Đây là truyền thống quý báu và là cội nguồn sức mạnh vô địch để đánh thắng mọi kẻ thù xâm lược của dân tộc Việt Nam",
          "C": "Là biện pháp ứng phó bất đắc dĩ khi quân đội chủ lực đã bị tổn thất nặng nề"
        },
        "key": "B"
      },
      {
        "global_id": 127,
        "lesson_id": 4,
        "id": 25,
        "q": "Yếu tố quyết định thắng lợi của chiến tranh nhân dân bảo vệ Tổ quốc?",
        "options": {
          "A": "Số lượng xe tăng bọc thép và máy bay chiến đấu trên chiến trường",
          "B": "Viện trợ tài chính không hoàn lại từ các tổ chức quốc tế",
          "C": "Sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam"
        },
        "key": "C"
      },
      {
        "global_id": 128,
        "lesson_id": 4,
        "id": 26,
        "q": "Quan điểm nào được xác định là cơ bản xuyên suốt, thể hiện tính nhân dân sâu sắc trong Chiến tranh Nhân dân Việt Nam bảo vệ Tổ quốc xã hội chủ nghĩa?",
        "options": {
          "A": "Dựa hoàn toàn vào các liên minh phòng thủ quân sự song phương",
          "B": "Tiến công trước bằng vũ khí công nghệ cao để áp chế đối phương",
          "C": "Tiến hành chiến tranh toàn dân, lấy lực lượng vũ trang nhân dân làm nòng cốt"
        },
        "key": "C"
      },
      {
        "global_id": 129,
        "lesson_id": 4,
        "id": 27,
        "q": "Tính độc đáo trong tác chiến của ta so với tác chiến của quân đội các nước khác ở chỗ nào?",
        "options": {
          "A": "Luôn chủ động đối đầu dàn trận công khai trên địa hình bằng phẳng",
          "B": "Ưu tiên hủy diệt mục tiêu đô thị bằng các đòn không kích ồ ạt",
          "C": "Lấy nhỏ thắng lớn, lấy ít địch nhiều, kết hợp tác chiến của các binh đoàn chủ lực với tác chiến du kích rộng khắp của toàn dân"
        },
        "key": "C"
      },
      {
        "global_id": 130,
        "lesson_id": 4,
        "id": 28,
        "q": "Yếu tố nào giữ vai trò quyết định để giành thắng lợi trong chiến tranh nhân dân ở nước ta?",
        "options": {
          "A": "Con người và nhân tố chính trị - tinh thần của toàn dân và toàn quân",
          "B": "Hệ thống vũ khí công nghệ tự động hóa tối tân",
          "C": "Mạng lưới đường hầm và công sự bê tông kiên cố"
        },
        "key": "A"
      },
      {
        "global_id": 131,
        "lesson_id": 4,
        "id": 29,
        "q": "Yếu tố nào là yếu tố chủ yếu để giành thắng lợi trong chiến tranh nhân dân ở ta?",
        "options": {
          "A": "Sức mạnh khối đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng",
          "B": "Sự hỗ trợ của các chuyên gia quân sự nước ngoài",
          "C": "Khối lượng bom đạn dự trữ tại các kho chiến lược"
        },
        "key": "A"
      },
      {
        "global_id": 132,
        "lesson_id": 4,
        "id": 30,
        "q": "Trong chiến tranh nhân dân ở ta lực lượng nào xác định là lực lượng nòng cốt?",
        "options": {
          "A": "Đội ngũ kỹ sư công nghệ thông tin và truyền thông",
          "B": "Lực lượng vũ trang nhân dân (Bộ đội chủ lực, Bộ đội địa phương, Dân quân tự vệ)",
          "C": "Lực lượng sinh viên tình nguyện tại các địa phương"
        },
        "key": "B"
      },
      {
        "global_id": 133,
        "lesson_id": 4,
        "id": 31,
        "q": "Đối tượng của chiến tranh nhân dân bảo vệ Tổ quốc?",
        "options": {
          "A": "Chủ nghĩa đế quốc và các thế lực thù địch có hành vi xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của nước ta",
          "B": "Tất cả các nước có chế độ chính trị khác biệt với nước ta",
          "C": "Các công ty xuyên quốc gia đang đầu tư sản xuất tại Việt Nam"
        },
        "key": "A"
      },
      {
        "global_id": 134,
        "lesson_id": 4,
        "id": 32,
        "q": "Quan điểm thực hiện toàn dân đánh giặc trong chiến tranh nhân dân bảo vệ Tổ quốc có ý nghĩa?",
        "options": {
          "A": "Giúp giảm thiểu việc huấn luyện kỹ chiến thuật quân sự chuyên nghiệp",
          "B": "Làm cho kẻ thù lâm vào thế trận sa lầy, bị bao vây tiêu hao, tiêu diệt ở khắp mọi nơi, không có hậu phương an toàn",
          "C": "Tạo điều kiện để người dân tự do trang bị súng ống cá nhân ngoài vòng kiểm soát"
        },
        "key": "B"
      },
      {
        "global_id": 135,
        "lesson_id": 4,
        "id": 33,
        "q": "Trong 4 mặt trận sau, mặt trận nào có ý nghĩa quyết định trong chiến tranh?",
        "options": {
          "A": "Mặt trận quân sự",
          "B": "Mặt trận ngoại giao",
          "C": "Mặt trận kinh tế"
        },
        "key": "A"
      },
      {
        "global_id": 136,
        "lesson_id": 4,
        "id": 34,
        "q": "Lực lượng trong chiến tranh nhân dân bảo vệ Tổ quốc gồm?",
        "options": {
          "A": "Chỉ gồm lực lượng an ninh trật tự cơ sở",
          "B": "Lực lượng toàn dân và Lực lượng vũ trang nhân dân",
          "C": "Chỉ có sĩ quan chỉ huy và hạ sĩ quan chuyên nghiệp"
        },
        "key": "B"
      },
      {
        "global_id": 137,
        "lesson_id": 4,
        "id": 35,
        "q": "Tiến hành chiến tranh toàn diện nhưng phải lấy mặt trận nào là chủ yếu, quyết định?",
        "options": {
          "A": "Mặt trận thương mại tự do",
          "B": "Mặt trận quân sự",
          "C": "Mặt trận văn hóa nghệ thuật"
        },
        "key": "B"
      },
      {
        "global_id": 138,
        "lesson_id": 4,
        "id": 36,
        "q": "Trong chiến tranh nhân dân phải ra sức thu hẹp không gian, rút ngắn thời gian nhằm mục đích gì?",
        "options": {
          "A": "Để sớm kết thúc chiến tranh và tiến hành chia lại ruộng đất",
          "B": "Để tránh việc ký kết các điều ước quốc tế ràng buộc",
          "C": "Đánh bại âm mưu đánh nhanh thắng nhanh của địch, bảo toàn lực lượng ta, chuyển hóa so sánh lực lượng để giành thắng lợi quyết định"
        },
        "key": "C"
      },
      {
        "global_id": 139,
        "lesson_id": 4,
        "id": 37,
        "q": "Trong chiến tranh ta càng đánh càng mạnh vì sao?",
        "options": {
          "A": "Vì tính chất chính nghĩa của cuộc chiến, được nhân dân ủng hộ, lực lượng ta vừa đánh vừa củng cố, phát triển cả về số lượng và chất lượng",
          "B": "Vì đối phương liên tục chủ động trao trả vũ khí hạng nặng cho ta",
          "C": "Vì số lượng viện trợ từ các nước tư bản ngày càng gia tăng"
        },
        "key": "A"
      },
      {
        "global_id": 140,
        "lesson_id": 4,
        "id": 38,
        "q": "Quan điểm kết hợp đấu tranh quân sự với bảo đảm an ninh chính trị, giữ gìn trật tự an toàn xã hội … có nghĩa là?",
        "options": {
          "A": "Vừa đánh địch ngoài mặt trận, vừa giữ vững hậu phương ổn định, đập tan âm mưu bạo loạn lật đổ và phá hoại nội bộ của địch",
          "B": "Cho phép lực lượng an ninh độc lập tác chiến không phối hợp cùng quân đội",
          "C": "Chỉ quan tâm xử lý tội phạm trộm cắp tài sản trong thời chiến"
        },
        "key": "A"
      },
      {
        "global_id": 141,
        "lesson_id": 4,
        "id": 39,
        "q": "“...Tranh thủ sự giúp đỡ quốc tế, sự đồng tình ủng hộ của nhân dân tiến bộ trên thế giới” thể hiện tinh thần quan điểm nào của Đảng trong chiến tranh nhân dân?",
        "options": {
          "A": "Tự cô lập mình khỏi các tiến bộ khoa học kỹ thuật quân sự",
          "B": "Dựa dẫm ỷ lại hoàn toàn vào lực lượng bên ngoài",
          "C": "Kết hợp sức mạnh dân tộc với sức mạnh thời đại"
        },
        "key": "C"
      },
      {
        "global_id": 142,
        "lesson_id": 4,
        "id": 40,
        "q": "Những câu trích dưới đây, câu nào không phản ánh tinh thần chiến tranh nhân dân?",
        "options": {
          "A": "“Mỗi người dân là một chiến sĩ, mỗi làng xóm là một pháo đài”",
          "B": "“Toàn dân đánh giặc, cả nước chung sức”",
          "C": "“Chiến tranh là công việc riêng của quân đội, dân chúng chỉ cần lo việc đóng thuế”"
        },
        "key": "C"
      },
      {
        "global_id": 143,
        "lesson_id": 4,
        "id": 41,
        "q": "Nhận định nào sau đây đúng?",
        "options": {
          "A": "Chiến tranh nhân dân Việt Nam là cuộc chiến tranh chính nghĩa, mang tính nhân dân sâu sắc, lấy LLVTND làm nòng cốt dưới sự lãnh đạo của Đảng",
          "B": "Chiến tranh nhân dân ở nước ta chỉ có thể diễn ra ở vùng rừng núi hiểm trở",
          "C": "Chiến tranh nhân dân chỉ dựa vào lực lượng dân quân tự vệ mà không cần bộ đội chủ lực"
        },
        "key": "A"
      }
    ]
  },
  {
    "lesson_id": 5,
    "lesson_title": "BÀI 5: XÂY DỰNG LỰC LƯỢNG VŨ TRANG NHÂN DÂN VIỆT NAM",
    "question_count": 31,
    "questions": [
      {
        "global_id": 144,
        "lesson_id": 5,
        "id": 1,
        "q": "Lực lượng vũ trang nhân dân Việt Nam gồm:",
        "options": {
          "A": "Quân đội nhân dân, Công an nhân dân và Dân quân tự vệ",
          "B": "Quân đội thường trực và các đội an ninh dân phòng đô thị",
          "C": "Bộ đội biên phòng và các đoàn viên thanh niên xung phong"
        },
        "key": "A"
      },
      {
        "global_id": 145,
        "lesson_id": 5,
        "id": 2,
        "q": "Quân đội nhân dân Việt Nam thành lập ngày, tháng, năm nào?",
        "options": {
          "A": "22/12/1944",
          "B": "19/8/1945",
          "C": "28/3/1935"
        },
        "key": "A"
      },
      {
        "global_id": 146,
        "lesson_id": 5,
        "id": 3,
        "q": "Một trong những đặc điểm thuận lợi trong xây dựng lực lượng vũ trang nhân dân là :",
        "options": {
          "A": "Được các liên minh quân sự nước ngoài cam kết viện trợ trọn gói",
          "B": "Nguồn kinh phí trang bị quân sự dồi dào hàng đầu thế giới",
          "C": "Sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng và sự tin yêu, ủng hộ hết lòng của nhân dân"
        },
        "key": "C"
      },
      {
        "global_id": 147,
        "lesson_id": 5,
        "id": 4,
        "q": "Lực lượng vũ trang nhân dân trong bảo vệ Tổ quốc có vị trí là lực lượng:",
        "options": {
          "A": "Nòng cốt của toàn dân trong thực hiện nhiệm vụ quốc phòng, an ninh và bảo vệ Tổ quốc",
          "B": "Hậu cần thuần túy hỗ trợ công tác cứu trợ thiên tai",
          "C": "Dự bị đứng ngoài cuộc chiến trừ trường hợp tổng động viên"
        },
        "key": "A"
      },
      {
        "global_id": 148,
        "lesson_id": 5,
        "id": 5,
        "q": "Dân quân tự vệ Việt Nam thành lập ngày, tháng, năm nào?",
        "options": {
          "A": "22/12/1944",
          "B": "19/8/1945",
          "C": "28/3/1935"
        },
        "key": "C"
      },
      {
        "global_id": 149,
        "lesson_id": 5,
        "id": 6,
        "q": "Một trong những biện pháp chủ yếu trong xây dựng lực lượng vũ trang là:",
        "options": {
          "A": "Phi chính trị hóa để quân đội tự do liên kết với các tập đoàn kinh tế tư nhân",
          "B": "Tập trung mua sắm trang thiết bị từ một quốc gia duy nhất",
          "C": "Giữ vững và tăng cường sự lãnh đạo của Đảng Cộng sản Việt Nam đối với lực lượng vũ trang nhân dân"
        },
        "key": "C"
      },
      {
        "global_id": 150,
        "lesson_id": 5,
        "id": 7,
        "q": "Công an nhân dân Việt Nam thành lập ngày, tháng, năm nào?",
        "options": {
          "A": "02/9/1945",
          "B": "22/12/1944",
          "C": "19/8/1945"
        },
        "key": "C"
      },
      {
        "global_id": 151,
        "lesson_id": 5,
        "id": 8,
        "q": "Thách thức lớn đối với chúng ta trong xây dựng lực lượng vũ trang nhân dân là:",
        "options": {
          "A": "Tình trạng thừa mứa vũ khí hiện đại không có người vận hành",
          "B": "Sự thiếu hụt nguồn tuyển thanh niên đến tuổi thực hiện nghĩa vụ quân sự",
          "C": "Âm mưu, thủ đoạn “Diễn biến hòa bình”, bạo loạn lật đổ và đòi “phi chính trị hóa” lực lượng vũ trang của các thế lực thù địch"
        },
        "key": "C"
      },
      {
        "global_id": 152,
        "lesson_id": 5,
        "id": 9,
        "q": "Đối với sự tác động của bên ngoài thì khó khăn lớn cho ta trong xây dựng lực lượng vũ trang nhân dân là:",
        "options": {
          "A": "Tình hình tranh chấp chủ quyền biển đảo phức tạp, cạnh tranh chiến lược giữa các nước lớn và sự chống phá quyết liệt của các thế lực phản động",
          "B": "Sự phát triển của thương mại điện tử làm giảm nhu cầu phòng thủ quân sự",
          "C": "Các công ước quốc tế cấm triệt để việc nghiên cứu phát triển vũ khí thông thường"
        },
        "key": "A"
      },
      {
        "global_id": 153,
        "lesson_id": 5,
        "id": 10,
        "q": "Để đảm bảo sự lãnh đạo của Đảng đối với lực lượng vũ trang nhân dân, phải xây dựng các tổ chức Đảng:",
        "options": {
          "A": "Tách rời khỏi cơ quan chỉ huy tham mưu của đơn vị quân đội",
          "B": "Trong sạch, vững mạnh, có năng lực lãnh đạo toàn diện và sức chiến đấu cao trong mọi đơn vị",
          "C": "Hoạt động theo mô hình câu lạc bộ sinh hoạt văn hóa định kỳ"
        },
        "key": "B"
      },
      {
        "global_id": 154,
        "lesson_id": 5,
        "id": 11,
        "q": "“Bảo đảm lực lượng vũ trang nhân dân luôn trong tư thế sẵn sàng chiến đấu và chiến đấu thắng lợi” là một quan điểm, nguyên tắc xây dựng lực lượng vũ trang nhân dân của Đảng ta, quan điểm nguyên tắc này phản ánh:",
        "options": {
          "A": "Chủ trương kích động chiến tranh đối với các nước láng giềng",
          "B": "Bản chất cách mạng, quy luật tồn tại và phát triển của LLVTND, bảo đảm không bị bất ngờ trước mọi tình huống",
          "C": "Nhu cầu phô trương sức mạnh vũ khí trang bị trong thời bình"
        },
        "key": "B"
      },
      {
        "global_id": 155,
        "lesson_id": 5,
        "id": 12,
        "q": "Đảng Cộng sản Việt Nam lãnh đạo “tuyệt đối” lực lượng vũ trang nhân dân Việt Nam được thể hiện:",
        "options": {
          "A": "Đảng giao toàn bộ quyền chỉ huy tối cao cho một cá nhân ngoài quân đội",
          "B": "Đảng chỉ định hướng lý thuyết mà không đưa ra các nghị quyết lãnh đạo cụ thể",
          "C": "Đảng không chia sẻ quyền lãnh đạo LLVTND cho bất kỳ giai cấp, lực lượng chính trị hay tổ chức nào khác"
        },
        "key": "C"
      },
      {
        "global_id": 156,
        "lesson_id": 5,
        "id": 13,
        "q": "Mâu thuẫn chủ yếu hiện nay và những năm tới trong xây dựng lực lượng vũ trang là:",
        "options": {
          "A": "Yêu cầu bảo vệ Tổ quốc ngày càng cao, hiện đại trong khi khả năng kinh tế, ngân sách đất nước còn có những hạn chế nhất định",
          "B": "Mâu thuẫn về trang phục dã chiến giữa các quân chủng",
          "C": "Mâu thuẫn giữa số lượng tướng lĩnh và số lượng binh sĩ"
        },
        "key": "A"
      },
      {
        "global_id": 157,
        "lesson_id": 5,
        "id": 14,
        "q": "Trận đánh đầu tiên của Quân đội nhân dân Việt Nam sau khi được thành lập là:",
        "options": {
          "A": "Trận Đông Khê (Chiến dịch Biên giới 1950)",
          "B": "Trận Điện Biên Phủ (1954)",
          "C": "Trận Phai Khắt và Nà Ngần (ngày 25 và 26/12/1944)"
        },
        "key": "C"
      },
      {
        "global_id": 158,
        "lesson_id": 5,
        "id": 15,
        "q": "Trong những biện pháp chủ yếu xây dựng lực lượng vũ trang nhân dân, việc chấn chỉnh tổ chức biên chế đối với các đơn vị bộ đội chủ lực là:",
        "options": {
          "A": "Xây dựng lực lượng tinh, gọn, mạnh, cơ động, linh hoạt, có sức chiến đấu cao",
          "B": "Xóa bỏ các quân chủng kỹ thuật để dồn cho bộ binh thông thường",
          "C": "Mở rộng tối đa số lượng quân số hành chính tại các văn phòng ban ngành"
        },
        "key": "A"
      },
      {
        "global_id": 159,
        "lesson_id": 5,
        "id": 16,
        "q": "Luật Dân quân tự vệ được ban hành năm:",
        "options": {
          "A": "Năm 2012",
          "B": "Năm 2019 (Luật Dân quân tự vệ số 48/2019/QH14)",
          "C": "Năm 2005"
        },
        "key": "B"
      },
      {
        "global_id": 160,
        "lesson_id": 5,
        "id": 17,
        "q": "Kế sách \"Ngụ binh ư nông\" của ông cha ta được vận dụng hiện nay trong xây dựng lực lượng nào?",
        "options": {
          "A": "Lực lượng dự bị động viên và Dân quân tự vệ",
          "B": "Lực lượng cảnh vệ bảo vệ các nguyên thủ quốc gia",
          "C": "Lực lượng phi công quân sự chuyên nghiệp"
        },
        "key": "A"
      },
      {
        "global_id": 161,
        "lesson_id": 5,
        "id": 18,
        "q": "Quá trình hiện đại hóa quân đội phải gắn với quá trình nào?",
        "options": {
          "A": "Quá trình tự do hóa hoàn toàn thị trường mua bán vũ khí cá nhân",
          "B": "Quá trình giải thể các cơ sở sản xuất công nghiệp quốc doanh",
          "C": "Quá trình công nghiệp hóa, hiện đại hóa đất nước và phát triển công nghiệp quốc phòng"
        },
        "key": "C"
      },
      {
        "global_id": 162,
        "lesson_id": 5,
        "id": 19,
        "q": "Lực lượng thường trực của Quân đội nhân dân Việt Nam bao gồm các lực lượng nào?",
        "options": {
          "A": "Dân quân tự vệ và lực lượng an ninh thôn xóm",
          "B": "Đội viên thanh niên xung phong và hội cựu chiến binh",
          "C": "Bộ đội chủ lực và Bộ đội địa phương"
        },
        "key": "C"
      },
      {
        "global_id": 163,
        "lesson_id": 5,
        "id": 20,
        "q": "Lãnh đạo và quản lý lực lượng vũ trang nhân dân Việt Nam là tổ chức nào?",
        "options": {
          "A": "Đảng Cộng sản Việt Nam lãnh đạo tuyệt đối, trực tiếp về mọi mặt; Nhà nước quản lý tập trung, thống nhất",
          "B": "Ủy ban quốc tế về giám sát giải trừ vũ khí khu vực",
          "C": "Tổ chức công đoàn độc lập hiệp thương cùng các hiệp hội cựu quân nhân"
        },
        "key": "A"
      },
      {
        "global_id": 164,
        "lesson_id": 5,
        "id": 21,
        "q": "Xây dựng lực lượng hùng hậu, được huấn luyện và quản lí tốt, bảo đảm khi cần thiết có thể động viên nhanh theo kế hoạch, là phương hướng đề ra trong xây dựng lực lượng nào?",
        "options": {
          "A": "Lực lượng dự bị động viên",
          "B": "Lực lượng kiểm lâm bảo vệ rừng",
          "C": "Lực lượng bảo vệ dân phố nội thành"
        },
        "key": "A"
      },
      {
        "global_id": 165,
        "lesson_id": 5,
        "id": 22,
        "q": "Luật Quốc phòng xác định nguyên tắc hoạt động của LLVTND trên cơ sở",
        "options": {
          "A": "Hành động theo quyết định độc lập của người chỉ huy không cần báo cáo cấp ủy",
          "B": "Tuyệt đối trung thành với Tổ quốc, Nhân dân, Đảng và Nhà nước; tuân thủ Hiến pháp và pháp luật",
          "C": "Ưu tiên phục vụ hoạt động thương mại sinh lợi của đơn vị"
        },
        "key": "B"
      },
      {
        "global_id": 166,
        "lesson_id": 5,
        "id": 23,
        "q": "Luật Quốc phòng xác định nhiệm vụ cơ bản quyết định của lực lượng vũ trang nhân dân là gì?",
        "options": {
          "A": "Sẵn sàng chiến đấu, chiến đấu bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc, an ninh quốc gia và trật tự an toàn xã hội",
          "B": "Chỉ làm nhiệm vụ sản xuất hàng tiêu dùng dân dụng trong thời bình",
          "C": "Tham gia đấu thầu các dự án xây dựng hạ tầng thương mại quốc tế"
        },
        "key": "A"
      },
      {
        "global_id": 167,
        "lesson_id": 5,
        "id": 24,
        "q": "Đại hội XIV dự báo khó khăn thách thức bao trùm đối với chúng ta trong xây dựng lực lượng vũ trang nhân dân là:",
        "options": {
          "A": "Sự cạnh tranh chiến lược gay gắt giữa các nước lớn, diễn biến phức tạp của tình hình an ninh truyền thống và phi truyền thống",
          "B": "Sự chấm dứt hoàn toàn của các tranh chấp biên giới biển đảo",
          "C": "Sự cạn kiệt nguồn nhân lực thanh niên trong độ tuổi lao động"
        },
        "key": "A"
      },
      {
        "global_id": 168,
        "lesson_id": 5,
        "id": 25,
        "q": "Văn kiện Đại hội XIV xác định khó khăn thách thức tác động trực tiếp xây dựng lực lượng vũ trang trong thời gian tới trong là:",
        "options": {
          "A": "Chi phí may mặc quân trang tăng cao đột biến",
          "B": "Âm mưu chống phá tinh vi của các thế lực thù địch trên không gian mạng và chiến tranh công nghệ cao",
          "C": "Sự thay đổi khí hậu làm hạn chế các buổi huấn luyện ngoài trời"
        },
        "key": "B"
      },
      {
        "global_id": 169,
        "lesson_id": 5,
        "id": 26,
        "q": "Quan điểm, nguyên tắc cơ bản nhất trong xây dựng lực lượng vũ trang nhân dân hiện nay là gì?",
        "options": {
          "A": "Tách quân đội khỏi sự quản lý của các cơ quan chính quyền nhà nước",
          "B": "Giữ vững và tăng cường sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam",
          "C": "Kêu gọi vốn đầu tư nước ngoài vào các tập đoàn công nghiệp vũ trang"
        },
        "key": "B"
      },
      {
        "global_id": 170,
        "lesson_id": 5,
        "id": 27,
        "q": "Xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại, nguyên tắc tự lực cường được Đại hội XIV quan tâm nhất là:",
        "options": {
          "A": "Giải tán các viện nghiên cứu quân sự trong nước để tiết kiệm chi phí",
          "B": "Dành 100% ngân sách nhập khẩu trang thiết bị ngoại nhập",
          "C": "Phát huy nội lực, chủ động làm chủ nghiên cứu, sản xuất vũ khí trang bị kỹ thuật hiện đại của công nghiệp quốc phòng"
        },
        "key": "C"
      },
      {
        "global_id": 171,
        "lesson_id": 5,
        "id": 28,
        "q": "Phương hướng xây dựng lực lượng vũ trang nhân dân trong giai đoạn mới là:",
        "options": {
          "A": "Chuyển toàn bộ lực lượng vũ trang sang cơ chế tư nhân hóa",
          "B": "Thu hẹp quy mô quân đội và chỉ duy trì lực lượng cảnh sát giao thông",
          "C": "Xây dựng Quân đội nhân dân, Công an nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại; Dân quân tự vệ vững mạnh, rộng khắp"
        },
        "key": "C"
      },
      {
        "global_id": 172,
        "lesson_id": 5,
        "id": 29,
        "q": "Nội dung quan trọng nhất trong xây dựng lực lượng vũ trang về chính trị là?",
        "options": {
          "A": "Tăng cường tỷ lệ sĩ quan có bằng cấp ngoại ngữ quốc tế",
          "B": "Huấn luyện khả năng diễn thuyết tuyên truyền trước công chúng",
          "C": "Bảo đảm LLVT luôn tuyệt đối trung thành với Đảng, Tổ quốc, Nhà nước và Nhân dân, kiên định mục tiêu độc lập dân tộc và CNXH"
        },
        "key": "C"
      },
      {
        "global_id": 173,
        "lesson_id": 5,
        "id": 30,
        "q": "Ai là người thống lĩnh lực lượng vũ trang nhân dân Việt Nam?",
        "options": {
          "A": "Chủ tịch Quốc hội",
          "B": "Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam",
          "C": "Bộ trưởng Bộ Quốc phòng"
        },
        "key": "B"
      },
      {
        "global_id": 174,
        "lesson_id": 5,
        "id": 31,
        "q": "Vị trí của lực lượng vũ trang nhân dân Việt Nam được xác định là công cụ bạo lực của Đảng và Nhà nước, làm nòng cốt cho toàn dân đánh giặc BVTQ?",
        "options": {
          "A": "Đúng, đây là công cụ bạo lực vũ trang sắc bén bảo vệ Đảng, Nhà nước và Nhân dân",
          "B": "Sai, LLVT chỉ là tổ chức xã hội dân sự tự quản thông thường",
          "C": "Sai, LLVT là cơ quan kinh tế hành chính công ích"
        },
        "key": "A"
      }
    ]
  },
  {
    "lesson_id": 6,
    "lesson_title": "BÀI 6: KẾT HỢP PHÁT TRIỂN KINH TẾ - XÃ HỘI VỚI TĂNG CƯỜNG QUỐC PHÒNG, AN NINH VÀ ĐỐI NGOẠI",
    "question_count": 39,
    "questions": [
      {
        "global_id": 175,
        "lesson_id": 6,
        "id": 1,
        "q": "Quốc phòng là công việc giữ nước của một quốc gia, nhằm mục đích:",
        "options": {
          "A": "Tập trung khai thác lợi ích thương mại quân sự xuyên quốc gia",
          "B": "Bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ và cuộc sống bình yên của nhân dân",
          "C": "Áp đặt ảnh hưởng quân sự sang các nước lân cận"
        },
        "key": "B"
      },
      {
        "global_id": 176,
        "lesson_id": 6,
        "id": 2,
        "q": "Hoạt động an ninh của một quốc gia là để bảo đảm:",
        "options": {
          "A": "Chỉ bảo vệ an toàn cho các trụ sở đại sứ quán nước ngoài",
          "B": "Giám sát độc quyền mọi hoạt động giao thương trên thị trường chứng khoán",
          "C": "Sự ổn định, an toàn chính trị, trật tự xã hội và sự tồn tại vững chắc của chế độ"
        },
        "key": "C"
      },
      {
        "global_id": 177,
        "lesson_id": 6,
        "id": 3,
        "q": "Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh ở nước ta hiện nay là:",
        "options": {
          "A": "Hoạt động tích cực, chủ động gắn kết hai nhiệm vụ chiến lược trong mọi quy hoạch, kế hoạch phát triển của quốc gia",
          "B": "Tách biệt hoàn toàn hai lĩnh vực kinh tế và quân sự để chuyên môn hóa",
          "C": "Việc chuyển đổi cơ cấu kinh tế tạm thời chỉ diễn ra trong thời chiến"
        },
        "key": "A"
      },
      {
        "global_id": 178,
        "lesson_id": 6,
        "id": 4,
        "q": "Tác động tích cực của quốc phòng, an ninh đối với kinh tế là:",
        "options": {
          "A": "Tạo môi trường hòa bình, ổn định chính trị vững chắc để kinh tế phát triển an toàn, thuận lợi",
          "B": "Tiêu tốn nguồn vốn ngân sách làm giảm sức cạnh tranh của doanh nghiệp",
          "C": "Áp đặt hạn ngạch kiểm soát gắt gao làm chậm lưu thông hàng hóa"
        },
        "key": "A"
      },
      {
        "global_id": 179,
        "lesson_id": 6,
        "id": 5,
        "q": "Đối với một quốc gia, hoạt động kinh tế là:",
        "options": {
          "A": "Yếu tố phụ thuộc thụ động vào các thỏa ước viện trợ bên ngoài",
          "B": "Lĩnh vực hoàn toàn độc lập không chịu tác động bởi an ninh chính trị",
          "C": "Cơ sở nền tảng vật chất quyết định sự tồn tại và phát triển của xã hội, tạo nguồn lực cho quốc phòng - an ninh"
        },
        "key": "C"
      },
      {
        "global_id": 180,
        "lesson_id": 6,
        "id": 6,
        "q": "“Tăng cường sự lãnh đạo của Đảng và hiệu lực quản lý của nhà nước, của chính quyền các cấp trong thực hiện kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh” là một trong những nội dung của:",
        "options": {
          "A": "Tiêu chuẩn đánh giá thi đua công tác phụ nữ",
          "B": "Kế hoạch phân bổ vốn đầu tư công của Bộ Tài chính",
          "C": "Giải pháp chủ yếu thực hiện kết hợp kinh tế - xã hội với quốc phòng - an ninh"
        },
        "key": "C"
      },
      {
        "global_id": 181,
        "lesson_id": 6,
        "id": 7,
        "q": "Một trong những văn bản quy phạm pháp luật là cơ sở để thực hiện kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh là:",
        "options": {
          "A": "Hiến pháp nước CHXHCN Việt Nam, Luật Quốc phòng, Luật An ninh quốc gia",
          "B": "Quy chế nội bộ của các hiệp hội xuất nhập khẩu hàng dệt may",
          "C": "Bộ luật Hàng hải quốc tế ban hành tại Geneva"
        },
        "key": "A"
      },
      {
        "global_id": 182,
        "lesson_id": 6,
        "id": 8,
        "q": "Kinh tế, quốc phòng, an ninh có mối quan hệ, tác động qua lại lẫn nhau, trong đó:",
        "options": {
          "A": "Hai lĩnh vực vận động song song không bao giờ tác động đến nhau",
          "B": "Quốc phòng an ninh quyết định hoàn toàn bản chất và quy luật của nền kinh tế",
          "C": "Kinh tế quyết định quốc phòng, an ninh; đồng thời quốc phòng, an ninh tác động trở lại mạnh mẽ đối với kinh tế"
        },
        "key": "C"
      },
      {
        "global_id": 183,
        "lesson_id": 6,
        "id": 9,
        "q": "Kinh tế quyết định đến quốc phòng, an ninh, trong đó có quyết định đến việc:",
        "options": {
          "A": "Quyết định toàn bộ chiến thuật tác chiến của từng phân đội ngoài chiến trường",
          "B": "Cung cấp nhân lực, vật lực, tài chính, trang bị vũ khí kỹ thuật cho quốc phòng - an ninh",
          "C": "Chỉ định danh sách nhân sự lãnh đạo các quân khu"
        },
        "key": "B"
      },
      {
        "global_id": 184,
        "lesson_id": 6,
        "id": 10,
        "q": "Kinh tế, quốc phòng, an ninh mỗi lĩnh vực đều có quy luật phát triển đặc thù, do đó việc kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh phải thực hiện:",
        "options": {
          "A": "Ưu tiên phát triển kinh tế tự phát không cần tính đến yếu tố phòng thủ",
          "B": "Một cách khoa học, hài hòa, đồng bộ, có trọng tâm trọng điểm, không coi nhẹ lĩnh vực nào",
          "C": "Bằng cách xóa bỏ quy luật kinh tế để phục vụ 100% mục tiêu quân sự"
        },
        "key": "B"
      },
      {
        "global_id": 185,
        "lesson_id": 6,
        "id": 11,
        "q": "Một trong những kế sách của ông cha ta đã thể hiện kết hợp kinh tế với quốc phòng:",
        "options": {
          "A": "Kế sách bán tài nguyên để mua vũ khí nước ngoài",
          "B": "Kế sách “Ngụ binh ư nông” (gửi binh ở nhà nông) và “Động vi binh, tĩnh vi dân”",
          "C": "Kế sách “Bế quan tỏa cảng” cấm thuyền bè nước ngoài qua lại"
        },
        "key": "B"
      },
      {
        "global_id": 186,
        "lesson_id": 6,
        "id": 12,
        "q": "Một trong những nội dung kinh tế quyết định đến quốc phòng, an ninh là:",
        "options": {
          "A": "Giá cả hàng tiêu dùng trên thị trường quyết định cấp bậc hàm sĩ quan",
          "B": "Trình độ phát triển kinh tế quyết định quy mô, tổ chức, trang bị và tính chất hiện đại của quân đội và công an",
          "C": "Tỷ giá hối đoái quyết định điều lệnh quản lý bộ đội"
        },
        "key": "B"
      },
      {
        "global_id": 187,
        "lesson_id": 6,
        "id": 13,
        "q": "Một trong những nội dung của một số giải pháp thực hiện kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh là:",
        "options": {
          "A": "Thả nổi cho các doanh nghiệp tự quyết định khu vực phòng thủ quân sự",
          "B": "Hoàn thiện hệ thống văn bản pháp luật, cơ chế chính sách về kết hợp phát triển KT-XH với tăng cường củng cố QPAN",
          "C": "Đình chỉ mọi hoạt động thương mại tại các địa bàn biên giới"
        },
        "key": "B"
      },
      {
        "global_id": 188,
        "lesson_id": 6,
        "id": 14,
        "q": "Ông cha ta xưa kia đã thực hiện kế sách “Động vi binh, tĩnh vi dân” nghĩa là:",
        "options": {
          "A": "Ban ngày làm dân cày ruộng, ban đêm đi làm nhiệm vụ bí mật",
          "B": "Khi có chiến tranh là người lính cầm súng đánh giặc, khi đất nước hòa bình là người dân lao động sản xuất",
          "C": "Người ở thành thị thì nhập ngũ, người ở nông thôn thì chỉ làm ruộng"
        },
        "key": "B"
      },
      {
        "global_id": 189,
        "lesson_id": 6,
        "id": 15,
        "q": "Kinh tế quyết định đến quốc phòng – an ninh, trong đó có nội dung:",
        "options": {
          "A": "Kinh tế quyết định trực tiếp góc bắn của pháo binh",
          "B": "Cơ cấu kinh tế và sự phân bố lực lượng sản xuất quyết định việc bố trí thế trận quốc phòng toàn dân và an ninh nhân dân",
          "C": "Doanh thu xuất khẩu quyết định mật khẩu liên lạc vô tuyến"
        },
        "key": "B"
      },
      {
        "global_id": 190,
        "lesson_id": 6,
        "id": 16,
        "q": "Chủ trương của Đảng ta đã từng thực hiện trong kháng chiến chống Pháp về kết hợp kinh tế với quốc phòng, an ninh là:",
        "options": {
          "A": "Đình chỉ toàn bộ việc cày cấy để tập trung 100% quân số ra trận tuyến",
          "B": "“Vừa kháng chiến, vừa kiến quốc”, thực hiện “kinh tế tự túc” và xây dựng hậu phương vững mạnh",
          "C": "Nhờ các tổ chức thương mại quốc tế cung cấp lương thực thực phẩm"
        },
        "key": "B"
      },
      {
        "global_id": 191,
        "lesson_id": 6,
        "id": 17,
        "q": "Một trong những nội dung kết hợp phát triển kinh tế xã hội với tăng cường củng cố quốc phòng an ninh là:",
        "options": {
          "A": "Kết hợp trong chiến lược, quy hoạch, kế hoạch phát triển kinh tế - xã hội của cả nước cũng như từng vùng lãnh thổ, từng ngành",
          "B": "Tùy tiện thay đổi quy hoạch đô thị theo cảm tính cá nhân",
          "C": "Chỉ thực hiện kết hợp đối với các doanh nghiệp sản xuất sắt thép"
        },
        "key": "A"
      },
      {
        "global_id": 192,
        "lesson_id": 6,
        "id": 18,
        "q": "Đối với các vùng kinh tế trọng điểm, việc kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh, trong xây dựng, phát triển kinh tế phải nhằm:",
        "options": {
          "A": "Phát triển kinh tế nhanh, bền vững, tạo động lực phát triển cho cả nước gắn liền với việc xây dựng khu vực phòng thủ vững chắc, sẵn sàng chuyển sang thời chiến",
          "B": "Biến toàn bộ vùng kinh tế trọng điểm thành khu quân sự cấm dân sự qua lại",
          "C": "Khai thác tối đa lợi nhuận ngắn hạn mà không cần xây dựng công trình lưỡng dụng"
        },
        "key": "A"
      },
      {
        "global_id": 193,
        "lesson_id": 6,
        "id": 19,
        "q": "Trong kháng chiến chống Mỹ, Đảng đã đề ra chủ trương: “Trong xây dựng kinh tế, phải thấu suốt nhiệm vụ phục vụ quốc phòng, cũng như trong củng cố quốc phòng phải khéo sắp xếp cho ăn khớp với công cuộc xây dựng kinh tế”, chủ trương đó được triển khai thực hiện:",
        "options": {
          "A": "Chỉ thực hiện sau khi Hiệp định Paris 1973 được ký kết",
          "B": "Chỉ áp dụng thử nghiệm tại một số nông trường vùng ven biên giới phía Bắc",
          "C": "Ở miền Bắc XHCN, vừa xây dựng CNXH vừa đóng vai trò hậu phương lớn chi viện sức người sức của cho tiền tuyến miền Nam"
        },
        "key": "C"
      },
      {
        "global_id": 194,
        "lesson_id": 6,
        "id": 20,
        "q": "Kết hợp phát triển kinh tế xã hội với tăng cường củng cố quốc phòng – an ninh đối với vùng núi biên giới là cực kỳ quan trọng, vì vùng núi biên giới là:",
        "options": {
          "A": "Vùng hoàn toàn không có tiềm năng phát triển lâm nghiệp và thủy điện",
          "B": "Khu vực không có dân cư sinh sống ổn định",
          "C": "Địa bàn chiến lược trọng yếu, phên dậu bảo vệ Tổ quốc, nơi đời sống nhân dân còn nhiều khó khăn và các thế lực thù địch dễ lợi dụng chống phá"
        },
        "key": "C"
      },
      {
        "global_id": 195,
        "lesson_id": 6,
        "id": 21,
        "q": "Một trong những nội dung cần tập trung kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh ở vùng biển, đảo là:",
        "options": {
          "A": "Phát triển mạnh kinh tế biển (khai thác dầu khí, đánh bắt hải sản, du lịch biển, vận tải biển) gắn chặt với xây dựng thế trận quốc phòng toàn dân và an ninh nhân dân trên biển",
          "B": "Cấm triệt để ngư dân ra khơi đánh bắt xa bờ để tránh va chạm quân sự",
          "C": "Chuyển giao quyền khai thác cảng biển chiến lược cho các tập đoàn nước ngoài quản lý"
        },
        "key": "A"
      },
      {
        "global_id": 196,
        "lesson_id": 6,
        "id": 22,
        "q": "Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh trong công nghiệp sẽ làm cơ sở cho:",
        "options": {
          "A": "Xây dựng và phát triển nền công nghiệp quốc phòng tự chủ, hiện đại, lưỡng dụng, đáp ứng yêu cầu phòng thủ bảo vệ Tổ quốc",
          "B": "Đóng cửa tất cả các nhà máy đóng tàu quân sự trong nước",
          "C": "Nhập khẩu hoàn toàn phụ tùng linh kiện máy bay từ thị trường tự do"
        },
        "key": "A"
      },
      {
        "global_id": 197,
        "lesson_id": 6,
        "id": 23,
        "q": "Một trong những nội dung kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh trong công nghiệp là:",
        "options": {
          "A": "Quy hoạch và phát triển các cơ sở công nghiệp dân dụng có khả năng sẵn sàng chuyển đổi, động viên sang sản xuất phục vụ quốc phòng khi cần thiết",
          "B": "Không đầu tư vào nghiên cứu khoa học vật liệu mới",
          "C": "Bố trí tất cả các nhà máy luyện kim tập trung sát mép biển"
        },
        "key": "A"
      },
      {
        "global_id": 198,
        "lesson_id": 6,
        "id": 24,
        "q": "Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh trong phát triển các vùng lãnh thổ cần phải quan tâm chỉ đạo:",
        "options": {
          "A": "Phát triển kinh tế đơn lẻ tự do, địa phương nào có thế mạnh kinh tế thì tự bảo đảm an ninh riêng",
          "B": "Tập trung đầu tư 100% ngân sách vào các đô thị lớn, bỏ trống các vùng biên giới",
          "C": "Gắn quy hoạch phát triển kinh tế của từng vùng, từng địa phương với xây dựng thế trận khu vực phòng thủ vững chắc"
        },
        "key": "C"
      },
      {
        "global_id": 199,
        "lesson_id": 6,
        "id": 25,
        "q": "Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng an ninh trong giao thông vận tải cần phải:",
        "options": {
          "A": "Tuyệt đối không xây dựng cầu có tải trọng cho xe quân sự qua lại",
          "B": "Xây dựng hệ thống giao thông vận tải đồng bộ, lưỡng dụng (đường bộ, đường sắt, đường thủy, đường hàng không), bảo đảm cơ động lực lượng nhanh chóng trong thời chiến",
          "C": "Chỉ xây dựng các tuyến đường phục vụ cho xe chở khách du lịch"
        },
        "key": "B"
      },
      {
        "global_id": 200,
        "lesson_id": 6,
        "id": 26,
        "q": "Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh trong bưu chính viễn thông cần phải:",
        "options": {
          "A": "Không thiết lập hệ thống cáp quang dự phòng khi có chiến tranh",
          "B": "Xây dựng mạng lưới bưu chính viễn thông hiện đại, bảo mật cao, kết hợp mạng viễn thông dân sự và mạng thông tin quân sự, sẵn sàng bảo đảm chỉ huy thông suốt",
          "C": "Để mạng lưới thông tin liên lạc quốc gia phụ thuộc hoàn toàn vào vệ tinh và máy chủ của nước ngoài"
        },
        "key": "B"
      },
      {
        "global_id": 201,
        "lesson_id": 6,
        "id": 27,
        "q": "Kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh trong bưu chính viễn thông cần phải:",
        "options": {
          "A": "Cho phép mở khóa toàn bộ dữ liệu quản lý dân cư cho các công ty thương mại",
          "B": "Bảo đảm an toàn, an ninh thông tin, chủ quyền không gian mạng quốc gia và duy trì thông tin liên lạc liên tục trong mọi tình huống chiến tranh",
          "C": "Giải tán các trung tâm tác chiến không gian mạng của quân đội và công an"
        },
        "key": "B"
      },
      {
        "global_id": 202,
        "lesson_id": 6,
        "id": 28,
        "q": "Trong xây dựng cơ bản, việc kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh cần phải thực hiện được yêu cầu:",
        "options": {
          "A": "Chỉ quan tâm đến giá thành rẻ nhất mà không tính đến độ bền kết cấu chống bom đạn",
          "B": "Các công trình trọng điểm, khu công nghiệp, đô thị, công trình ngầm phải có tính lưỡng dụng, bảo đảm phòng tránh, sơ tán và che chắn khi có xung đột",
          "C": "Không cấp phép xây dựng các công trình hầm ngầm dân sinh"
        },
        "key": "B"
      },
      {
        "global_id": 203,
        "lesson_id": 6,
        "id": 29,
        "q": "Kết hợp phát triển kinh tế xã – hội với tăng cường củng cố quốc phòng – an ninh trong khoa học, công nghệ và giáo dục cần phải:",
        "options": {
          "A": "Loại bỏ hoàn toàn môn học Giáo dục quốc phòng an ninh khỏi trường đại học",
          "B": "Chỉ tập trung đào tạo các ngành nghề kinh doanh tài chính ngắn hạn",
          "C": "Nâng cao chất lượng giáo dục đào tạo nhân lực, đẩy mạnh nghiên cứu ứng dụng công nghệ hiện đại phục vụ đồng thời cho cả kinh tế và quốc phòng"
        },
        "key": "C"
      },
      {
        "global_id": 204,
        "lesson_id": 6,
        "id": 30,
        "q": "Trong lĩnh vực y tế, việc kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng – an ninh cần thực hiện:",
        "options": {
          "A": "Tập trung viện trợ toàn bộ thuốc dự phòng ra thị trường thương mại tự do",
          "B": "Tách rời hoàn toàn các bệnh viện dân y và bệnh viện quân y, không hỗ trợ lẫn nhau",
          "C": "Xây dựng mạng lưới y tế toàn dân gắn với mạng lưới quân y, sẵn sàng cấp cứu, điều trị thương binh, bệnh binh và nhân dân khi xảy ra chiến tranh, thảm họa"
        },
        "key": "C"
      },
      {
        "global_id": 205,
        "lesson_id": 6,
        "id": 31,
        "q": "Sự phối hợp giữa hoạt động đối ngoại với kinh tế, quốc phòng, an ninh là:",
        "options": {
          "A": "Sự gắn kết chặt chẽ nhằm bảo vệ lợi ích quốc gia - dân tộc, giữ vững môi trường hòa bình, ổn định để phát triển kinh tế và nâng cao vị thế đất nước",
          "B": "Hoạt động giao dịch lễ tân ngoại giao thuần túy không ảnh hưởng đến quốc phòng",
          "C": "Việc thỏa hiệp nhượng bộ các nguyên tắc chủ quyền để đổi lấy ký kết thương mại"
        },
        "key": "A"
      },
      {
        "global_id": 206,
        "lesson_id": 6,
        "id": 32,
        "q": "Mục tiêu cốt lõi của sự kết hợp kinh tế với quốc phòng an ninh và hoạt động đối ngoại nhằm mục đích?",
        "options": {
          "A": "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ; giữ vững môi trường hòa bình để phát triển đất nước giàu mạnh",
          "B": "Áp đặt rào cản cấm vận kinh tế đối với các đối tác thương mại",
          "C": "Xâm chiếm thị trường nguyên liệu của các quốc gia khác"
        },
        "key": "A"
      },
      {
        "global_id": 207,
        "lesson_id": 6,
        "id": 33,
        "q": "Kết hợp kinh tế, quốc phòng, an ninh và đối ngoại là yếu tố quan trọng trong thời kỳ đẩy mạnh hợp tác quốc tế?",
        "options": {
          "A": "Đúng, giúp vừa hội nhập sâu rộng, phát triển kinh tế, vừa giữ vững an ninh quốc gia, ngăn ngừa các nguy cơ chệch hướng và phụ thuộc",
          "B": "Sai, quốc phòng đối ngoại sẽ cản trở các luồng vốn đầu tư quốc tế",
          "C": "Sai, hội nhập quốc tế chỉ cần quan tâm đến thương mại mở cửa, không cần quốc phòng"
        },
        "key": "A"
      },
      {
        "global_id": 208,
        "lesson_id": 6,
        "id": 34,
        "q": "Đối với các vùng kinh tế trọng điểm, việc kết hợp phát triển kinh tế - xã hội với tăng cường củng cố quốc phòng - an ninh nội dung nào là quan trọng nhất?",
        "options": {
          "A": "Miễn thuế vô thời hạn cho các doanh nghiệp bất động sản",
          "B": "Loại bỏ hoàn toàn các khu vực diễn tập quân sự khỏi quy hoạch đất đai",
          "C": "Xây dựng các vùng kinh tế trọng điểm trở thành những khu vực phòng thủ vững chắc về mọi mặt, bảo đảm nguồn lực lớn cho quốc phòng"
        },
        "key": "C"
      },
      {
        "global_id": 209,
        "lesson_id": 6,
        "id": 35,
        "q": "Thực hiện giải pháp nào để tạo hành lang pháp lý cho việc quản lý, điều hành kết hợp kinh tế, quốc phòng, an ninh và đối ngoại?",
        "options": {
          "A": "Áp dụng tùy tiện các tiền lệ không qua phê duyệt của Quốc hội",
          "B": "Chỉ dựa vào các thỏa thuận miệng không thành văn giữa các doanh nghiệp",
          "C": "Ban hành và hoàn thiện đồng bộ hệ thống văn bản quy phạm pháp luật, nghị định, quy chế phối hợp giữa các bộ, ngành, địa phương"
        },
        "key": "C"
      },
      {
        "global_id": 210,
        "lesson_id": 6,
        "id": 36,
        "q": "Trong mối quan hệ giữa kinh tế và quốc phòng thì cách diễn đạt nào sau đây đúng nhất?",
        "options": {
          "A": "Kinh tế và quốc phòng triệt tiêu lẫn nhau, một bên phát triển thì bên kia phải suy giảm",
          "B": "Kinh tế quyết định quốc phòng, nhưng quốc phòng bảo vệ và tạo điều kiện cho kinh tế phát triển bền vững",
          "C": "Quốc phòng sinh ra kinh tế và điều khiển mọi quy luật sản xuất xã hội"
        },
        "key": "B"
      },
      {
        "global_id": 211,
        "lesson_id": 6,
        "id": 37,
        "q": "Kế sách nào sau đây không phải sự kết hợp kinh tế với quốc phòng?",
        "options": {
          "A": "Chính sách “Bế quan tỏa cảng”, cấm người dân giao lưu buôn bán và sản xuất",
          "B": "Chính sách “Động vi binh, tĩnh vi dân”",
          "C": "Chính sách “Ngụ binh ư nông” thời phong kiến Việt Nam"
        },
        "key": "A"
      },
      {
        "global_id": 212,
        "lesson_id": 6,
        "id": 38,
        "q": "Phong trào nào sau đây không phải là kết hợp kinh tế với QP?",
        "options": {
          "A": "Phong trào “Hũ gạo kháng chiến” ủng hộ nuôi quân đánh giặc thời kháng chiến",
          "B": "Phong trào tăng gia sản xuất tự túc rau xanh, thực phẩm trong doanh trại bộ đội",
          "C": "Phong trào đầu cơ tích trữ nhu yếu phẩm để bán giá cao kiếm lời trong mùa mưa bão"
        },
        "key": "C"
      },
      {
        "global_id": 213,
        "lesson_id": 6,
        "id": 39,
        "q": "Trường hợp nào sau đây là khó khăn trong việc thực hiện kết hợp kinh tế với quốc phòng?",
        "options": {
          "A": "Một số cấp ủy, chính quyền hoặc doanh nghiệp chỉ chú trọng lợi ích kinh tế trước mắt, xem nhẹ hoặc buông lỏng yêu cầu quốc phòng - an ninh",
          "B": "Sự chỉ đạo tập trung, thống nhất của các cơ quan quản lý nhà nước",
          "C": "Ý thức cảnh giác cách mạng cao của đông đảo quần chúng nhân dân"
        },
        "key": "A"
      }
    ]
  },
  {
    "lesson_id": 7,
    "lesson_title": "BÀI 7: NHỮNG VẤN ĐỀ CƠ BẢN VỀ LỊCH SỬ NGHỆ THUẬT QUÂN SỰ VIỆT NAM",
    "question_count": 37,
    "questions": [
      {
        "global_id": 214,
        "lesson_id": 7,
        "id": 1,
        "q": "Trong lịch sử, dân tộc Việt Nam luôn bị các thế lực ngoại xâm nhòm ngó, xâm lược vì:",
        "options": {
          "A": "Việt Nam từ chối tham gia các tổ chức liên minh phòng thủ cổ đại",
          "B": "Việt Nam thường xuyên chủ động phát động chiến tranh sang các nước lân cận",
          "C": "Việt Nam có vị trí địa - chính trị, địa - quân sự chiến lược quan trọng ở Đông Nam Á và nguồn tài nguyên phong phú"
        },
        "key": "C"
      },
      {
        "global_id": 215,
        "lesson_id": 7,
        "id": 2,
        "q": "Một trong những cơ sở hình thành nghệ thuật quân sự Việt Nam là:",
        "options": {
          "A": "Các bản dịch binh thư từ châu Âu thời cận đại",
          "B": "Vị trí địa lý, điều kiện tự nhiên, kinh tế, chính trị, văn hóa - xã hội và truyền thống dựng nước đi đôi với giữ nước của dân tộc",
          "C": "Sự hướng dẫn của các tướng lĩnh đánh thuê nước ngoài"
        },
        "key": "B"
      },
      {
        "global_id": 216,
        "lesson_id": 7,
        "id": 3,
        "q": "Đảng ta đã chỉ đạo tiến hành chiến tranh với tinh thần:",
        "options": {
          "A": "Đánh nhanh thắng nhanh bằng mọi giá trong vòng một tháng",
          "B": "Tự lực cánh sinh, đánh lâu dài, dựa vào sức mình là chính kết hợp với tranh thủ sự giúp đỡ quốc tế",
          "C": "Chờ đợi sự viện trợ của bên ngoài mới tiến hành tác chiến"
        },
        "key": "B"
      },
      {
        "global_id": 217,
        "lesson_id": 7,
        "id": 4,
        "q": "Khởi nghĩa của Hai Bà Trưng diễn ra vào:",
        "options": {
          "A": "Năm 248 sau Công nguyên",
          "B": "Năm 938 sau Công nguyên",
          "C": "Năm 40 sau Công nguyên"
        },
        "key": "C"
      },
      {
        "global_id": 218,
        "lesson_id": 7,
        "id": 5,
        "q": "Một trong những bài học kinh nghiệm về nghệ thuật quân sự được vận dụng vào sự nghiệp bảo vệ Tổ quốc trong thời kỳ mới là:",
        "options": {
          "A": "Nắm vững tư tưởng tích cực tiến công, kết hợp chặt chẽ quân sự với chính trị, ngoại giao, kinh tế, văn hóa",
          "B": "Giải tán các lực lượng vũ trang địa phương để tránh xung đột",
          "C": "Chỉ tập trung phòng ngự thụ động tại các căn cứ bê tông"
        },
        "key": "A"
      },
      {
        "global_id": 219,
        "lesson_id": 7,
        "id": 6,
        "q": "Cuộc kháng chiến chống quân Minh do nhà Hồ lãnh đạo thất bại là do :",
        "options": {
          "A": "Do quân Minh sử dụng hoàn toàn lính thủy đánh bộ áp đảo",
          "B": "Không tập hợp và phát huy được sức mạnh của toàn dân (như Nguyễn Trãi nhận xét: “Quân thần phụ tử bất hòa, lòng dân oán hận”)",
          "C": "Vũ khí và thành quách súng thần cơ của nhà Hồ quá thô sơ"
        },
        "key": "B"
      },
      {
        "global_id": 220,
        "lesson_id": 7,
        "id": 7,
        "q": "Trong nghệ thuật kết hợp đấu tranh giữa các mặt trận thì mặt trận chính trị được xác định:",
        "options": {
          "A": "Là cơ sở, nền tảng để tạo ra sức mạnh to lớn cho mặt trận quân sự và các mặt trận khác",
          "B": "Chỉ là giải pháp phụ trợ trong thời kỳ đàm phán ngừng bắn",
          "C": "Không có ý nghĩa đối với thắng bại trên chiến trường"
        },
        "key": "A"
      },
      {
        "global_id": 221,
        "lesson_id": 7,
        "id": 8,
        "q": "Trong nghệ thuật kết hợp đấu tranh giữa các mặt trận thì mặt trận quân sự được xác định:",
        "options": {
          "A": "Là mặt trận có tính quyết định trực tiếp đến thắng lợi của chiến tranh, tiêu hao tiêu diệt sinh lực địch, làm thay đổi cục diện chiến trường",
          "B": "Chỉ mang tính chất nghi thức phô trương lực lượng",
          "C": "Là mặt trận thứ yếu sau mặt trận văn hóa nghệ thuật"
        },
        "key": "A"
      },
      {
        "global_id": 222,
        "lesson_id": 7,
        "id": 9,
        "q": "Một trong những nội dung chủ yếu của chiến lược quân sự Việt Nam là:",
        "options": {
          "A": "Xác định đúng kẻ thù, đối tượng tác chiến, phương châm chiến lược và phương thức tiến hành chiến tranh nhân dân",
          "B": "Mua sắm vũ khí đắt tiền từ các nước tư bản phát triển",
          "C": "Sao chép nguyên bản học thuyết chiến tranh chớp nhoáng của phương Tây"
        },
        "key": "A"
      },
      {
        "global_id": 223,
        "lesson_id": 7,
        "id": 10,
        "q": "Quy luật của chiến tranh là mạnh được, yếu thua, nhưng ông cha ta đã sớm xác định đúng về sức mạnh chiến tranh, đó là:",
        "options": {
          "A": "Dựa hoàn toàn vào các bùa chú và yếu tố tâm linh huyền bí",
          "B": "Chỉ cần quân số đông gấp đôi đối phương là chắc chắn chiến thắng",
          "C": "Sức mạnh chiến tranh không chỉ thuần túy là quân số và vũ khí, mà quan trọng là sức mạnh chính nghĩa, lòng dân và tài thao lược"
        },
        "key": "C"
      },
      {
        "global_id": 224,
        "lesson_id": 7,
        "id": 11,
        "q": "Trong phương thức tiến hành chiến tranh, Đảng ta đã chỉ đạo:",
        "options": {
          "A": "Tránh giao chiến trên bộ và chỉ sử dụng tác chiến trên biển",
          "B": "Tiến hành chiến tranh toàn dân, toàn diện; kết hợp tác chiến của các binh đoàn chủ lực với chiến tranh du kích rộng khắp; kết hợp tiến công và nổi dậy",
          "C": "Chỉ sử dụng hình thức tác chiến hầm hào cố định như Chiến tranh thế giới thứ nhất"
        },
        "key": "B"
      },
      {
        "global_id": 225,
        "lesson_id": 7,
        "id": 12,
        "q": "Chiến thuật thường vận dụng trong thời kỳ đầu của hai cuộc kháng chiến chống Pháp, chống Mỹ là:",
        "options": {
          "A": "Dàn trận đối đầu trực diện trên bãi biển bằng phẳng",
          "B": "Tập kích, phục kích, đánh tỉa, tác chiến du kích phân tán nhỏ lẻ tiêu hao sinh lực địch",
          "C": "Đánh trận địa chính quy quy mô lớn với nhiều sư đoàn hợp đồng binh chủng"
        },
        "key": "B"
      },
      {
        "global_id": 226,
        "lesson_id": 7,
        "id": 13,
        "q": "Trong chiến lược quân sự, Đảng ta đã chỉ đạo phương thức tiến hành chiến tranh là:",
        "options": {
          "A": "Tấn công phủ đầu sang lãnh thổ của đối phương bằng mọi giá",
          "B": "Chờ đợi đối phương tự nguyện rút quân theo các thỏa thuận thương mại",
          "C": "Kết hợp khởi nghĩa vũ trang với chiến tranh cách mạng; kết hợp đấu tranh quân sự, chính trị với binh vận"
        },
        "key": "C"
      },
      {
        "global_id": 227,
        "lesson_id": 7,
        "id": 14,
        "q": "Cuộc kháng chiến chống quân xâm lược của Triệu Đà do An Dương Vương lãnh đạo thất bại vào những năm:",
        "options": {
          "A": "Năm 938",
          "B": "Năm 40",
          "C": "Năm 179 trước Công nguyên"
        },
        "key": "C"
      },
      {
        "global_id": 228,
        "lesson_id": 7,
        "id": 15,
        "q": "Khởi nghĩa Tây Sơn và các cuộc kháng chiến chống quân Xiêm, quân xâm lược Mãn Thanh vào những năm:",
        "options": {
          "A": "Đầu thế kỷ X (năm 938)",
          "B": "Giữa thế kỷ XIII (năm 1258 - 1288)",
          "C": "Cuối thế kỷ XVIII (Rạch Gầm - Xoài Mút năm 1785; Ngọc Hồi - Đống Đa năm 1789)"
        },
        "key": "C"
      },
      {
        "global_id": 229,
        "lesson_id": 7,
        "id": 16,
        "q": "Quốc hiệu đầu tiên của nước ta là gì?",
        "options": {
          "A": "Âu Lạc",
          "B": "Đại Cồ Việt",
          "C": "Văn Lang"
        },
        "key": "C"
      },
      {
        "global_id": 230,
        "lesson_id": 7,
        "id": 17,
        "q": "Trong quá trình dựng nước và giữ nước, dân tộc ta đã sớm xây dựng được nền văn hóa truyền thống như thế nào?",
        "options": {
          "A": "Yêu nước nồng nàn, đoàn kết cộng đồng, kiên cường bất khuất, nhân ái, khoan dung và coi trọng truyền thống lịch sử",
          "B": "Văn hóa khép kín và phân chia đẳng cấp phong kiến khắt khe",
          "C": "Sao chép nguyên vẹn lối sống du mục từ bên ngoài"
        },
        "key": "A"
      },
      {
        "global_id": 231,
        "lesson_id": 7,
        "id": 18,
        "q": "Cuộc kháng chiến chống quân xâm lược nào? Do ai lãnh đạo đã bị thất bại dẫn đến đất nước ta bị phong kiến phương Bắc đô hộ hơn 1000 năm ?",
        "options": {
          "A": "Kháng chiến chống quân Tống do Lý Thường Kiệt lãnh đạo",
          "B": "Kháng chiến chống quân Triệu Đà do An Dương Vương lãnh đạo (năm 179 TCN)",
          "C": "Kháng chiến chống quân Nguyên Mông do Trần Hưng Đạo lãnh đạo"
        },
        "key": "B"
      },
      {
        "global_id": 232,
        "lesson_id": 7,
        "id": 19,
        "q": "Chiến thắng nào giúp nước ta thoát khỏi thời kỳ hơn 1000 năm bị phong kiến phương Bắc đô hộ?",
        "options": {
          "A": "Chiến thắng Ngọc Hồi - Đống Đa năm 1789 do Quang Trung lãnh đạo",
          "B": "Chiến thắng Chi Lăng - Xương Giang năm 1427 do Lê Lợi lãnh đạo",
          "C": "Chiến thắng Bạch Đằng năm 938 do Ngô Quyền lãnh đạo"
        },
        "key": "C"
      },
      {
        "global_id": 233,
        "lesson_id": 7,
        "id": 20,
        "q": "Ai là người thực hiện kế sách “Tiên phát chế nhân” trong lịch sử đấu tranh chống ngoại xâm của dân tộc ta?",
        "options": {
          "A": "Trần Hưng Đạo",
          "B": "Nguyễn Trãi",
          "C": "Lý Thường Kiệt (trong cuộc kháng chiến chống quân Tống năm 1075)"
        },
        "key": "C"
      },
      {
        "global_id": 234,
        "lesson_id": 7,
        "id": 21,
        "q": "Trước sức mạnh của quân Nguyên Mông triều đình nhà Trần đã thực hiện kế sách gì?",
        "options": {
          "A": "Kế sách “Vườn không nhà trống”, tránh chỗ mạnh đánh chỗ yếu, chủ động rút lui bảo toàn lực lượng rồi phản công quyết định",
          "B": "Cầu hòa và cắt đất biên ải dâng nộp cho giặc",
          "C": "Dàn quân trên đồng trống quyết chiến giáp lá cà ngay từ cửa ải đầu tiên"
        },
        "key": "A"
      },
      {
        "global_id": 235,
        "lesson_id": 7,
        "id": 22,
        "q": "Triều đại nào tổ chức Hội nghị Diên Hồng tại kinh đô Thăng Long nhằm hiệu triệu tinh thần chống giặc ngoại xâm của Nhân dân ta?",
        "options": {
          "A": "Triều đại nhà Hậu Lê",
          "B": "Triều đại nhà Lý",
          "C": "Triều đại nhà Trần (năm 1284 dưới thời vua Trần Nhân Tông)"
        },
        "key": "C"
      },
      {
        "global_id": 236,
        "lesson_id": 7,
        "id": 23,
        "q": "Nguyễn Huệ đã đập tan ý đồ bán nước của Nguyễn Ánh và âm mưu xâm lược của quân Xiêm trong trận quyết chiến chiến lược nào?",
        "options": {
          "A": "Trận Rạch Gầm - Xoài Mút (đầu năm 1785)",
          "B": "Trận Ngọc Hồi - Đống Đa (năm 1789)",
          "C": "Trận Bạch Đằng (năm 938)"
        },
        "key": "A"
      },
      {
        "global_id": 237,
        "lesson_id": 7,
        "id": 24,
        "q": "Những yếu tố nào đã tác động đến việc hình thành nghệ thuật đánh giặc của ông cha ta?",
        "options": {
          "A": "Quy luật lấy nhỏ thắng lớn, lấy ít địch nhiều; điều kiện tự nhiên rừng núi sông ngòi và tinh thần đoàn kết toàn dân",
          "B": "Sự viện trợ vũ khí của các vương triều phương Tây",
          "C": "Ưu thế vượt trội về số lượng kỵ binh thiện chiến"
        },
        "key": "A"
      },
      {
        "global_id": 238,
        "lesson_id": 7,
        "id": 25,
        "q": "Đâu là nét đặc sắc và tất yếu trong nghệ thuật quân sự của ông cha ta?",
        "options": {
          "A": "Nghệ thuật xây thành quách kiên cố cố thủ thụ động chờ giặc tự rút lui",
          "B": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít địch nhiều, lấy đoản binh thắng trường trận",
          "C": "Nghệ thuật thuê lính đánh mướn từ các hòn đảo lân cận"
        },
        "key": "B"
      },
      {
        "global_id": 239,
        "lesson_id": 7,
        "id": 26,
        "q": "Đâu là nét độc đáo trong nghệ thuật quân sự của ông cha ta, được thể hiện cả trong khởi nghĩa và chiến tranh giải phóng?",
        "options": {
          "A": "Kết hợp khởi nghĩa của quần chúng với chiến tranh cách mạng; kết hợp đánh du kích với đánh tập trung",
          "B": "Chỉ trông cậy vào vũ khí tự tạo mà từ chối vũ khí thu được của địch",
          "C": "Không cho phép phụ nữ tham gia tiếp tế và trinh sát chiến trường"
        },
        "key": "A"
      },
      {
        "global_id": 240,
        "lesson_id": 7,
        "id": 27,
        "q": "Tư tưởng chỉ đạo tác chiến nào được ông cha ta coi như một quy luật để giành thắng lợi trong suốt quá trình chuẩn bị và thực hành chiến tranh?",
        "options": {
          "A": "Tư tưởng nhượng bộ từng bước để tránh đổ máu",
          "B": "Tư tưởng tích cực tiến công, chủ động tạo thời cơ và chớp thời cơ tiêu diệt địch",
          "C": "Tư tưởng án binh bất động chờ đối phương suy yếu do dịch bệnh"
        },
        "key": "B"
      },
      {
        "global_id": 241,
        "lesson_id": 7,
        "id": 28,
        "q": "Trong nghệ thuật đánh giặc của ông cha ta dùng “mưu” để đánh giặc được hiểu như thế nào?",
        "options": {
          "A": "Dùng mưu trí, lừa địch, điều địch vào thế bất lợi, phân hóa làm suy yếu địch trước khi dùng lực lượng tiêu diệt",
          "B": "Dùng tiền bạc mua chuộc các tướng lĩnh của đối phương để mở cổng thành",
          "C": "Tạo ra các tin đồn thất thiệt trên thị trường buôn bán"
        },
        "key": "A"
      },
      {
        "global_id": 242,
        "lesson_id": 7,
        "id": 29,
        "q": "Trong nghệ thuật đánh giặc của ông cha ta dùng “kế” để đánh giặc được hiểu như thế nào?",
        "options": {
          "A": "Là phương pháp, cách thức cụ thể để thực hiện mưu đồ, biến thế bất lợi của ta thành thế có lợi, đẩy địch vào cạm bẫy",
          "B": "Biểu mẫu phân chia quân nhu theo định mức hàng tháng",
          "C": "Kế hoạch chi tiêu tài chính của bộ máy hậu cần"
        },
        "key": "A"
      },
      {
        "global_id": 243,
        "lesson_id": 7,
        "id": 30,
        "q": "Trong nghệ thuật kết hợp đấu tranh giữa các Mặt trận quân sự, chính trị, ngoại giao và binh vận thì Mặt trận nào là cơ sở để tạo ra sức mạnh quân sự ?",
        "options": {
          "A": "Mặt trận thương mại",
          "B": "Mặt trận binh vận",
          "C": "Mặt trận chính trị"
        },
        "key": "C"
      },
      {
        "global_id": 244,
        "lesson_id": 7,
        "id": 31,
        "q": "Lý Thường Kiệt sử dụng biện pháp “tiên phát chế nhân” nghĩa là?",
        "options": {
          "A": "Đầu hàng trước để bảo tồn lực lượng quân sĩ",
          "B": "Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn tiến công của giặc (chủ động tiến công trước để tự vệ)",
          "C": "Chờ đợi đối phương tiến sâu vào nội địa rồi mới bắt đầu phản kích"
        },
        "key": "B"
      },
      {
        "global_id": 245,
        "lesson_id": 7,
        "id": 32,
        "q": "Chiến dịch nào sau đây là chiến dịch phản công?",
        "options": {
          "A": "Chiến dịch Hồ Chí Minh 1975",
          "B": "Chiến dịch Việt Bắc Thu - Đông 1947",
          "C": "Chiến dịch Điện Biên Phủ 1954"
        },
        "key": "B"
      },
      {
        "global_id": 246,
        "lesson_id": 7,
        "id": 33,
        "q": "Một trong những nội dung nghệ thuật đánh giặc của ông cha ta là kết hợp đấu tranh giữa các mặt trận?",
        "options": {
          "A": "Chỉ sử dụng duy nhất mặt trận quân sự trên chiến trường",
          "B": "Tách rời công tác binh vận khỏi hoạt động tác chiến thực địa",
          "C": "Kết hợp đấu tranh quân sự với đấu tranh chính trị, ngoại giao, binh vận và kinh tế"
        },
        "key": "C"
      },
      {
        "global_id": 247,
        "lesson_id": 7,
        "id": 34,
        "q": "Một trong những cơ sở hình thành nghệ thuật quân sự Việt Nam là gì?",
        "options": {
          "A": "Lịch sử chống giặc ngoại xâm lâu dài, kiên cường, xây dựng nên kho tàng kinh nghiệm tác chiến phong phú của dân tộc",
          "B": "Vũ khí nhập khẩu hiện đại từ các vương triều bên ngoài",
          "C": "Sự sao chép nguyên mẫu học thuyết kỵ binh của người Mông Cổ"
        },
        "key": "A"
      },
      {
        "global_id": 248,
        "lesson_id": 7,
        "id": 35,
        "q": "Khi đế quốc Mỹ tiến hành chiến tranh xâm lược Việt Nam, Đảng ta nhận định?",
        "options": {
          "A": "Mỹ giàu nhưng không mạnh, sức mạnh quân sự Mỹ có giới hạn, ta nhất định thắng, Mỹ nhất định thua",
          "B": "Mỹ có vũ khí nguyên tử nên ta không thể giành thắng lợi bằng quân sự",
          "C": "Cần phải đầu hàng vô điều kiện để tránh tàn phá cơ sở hạ tầng"
        },
        "key": "A"
      },
      {
        "global_id": 249,
        "lesson_id": 7,
        "id": 36,
        "q": "Trong chiến dịch Điện Biên Phủ, chúng ta đã thay đổi?",
        "options": {
          "A": "Thay đổi phương châm tác chiến từ “Đánh nhanh, thắng nhanh” sang “Đánh chắc, tiến chắc”",
          "B": "Thay đổi mục tiêu tiêu diệt cứ điểm sang bao vây kinh tế",
          "C": "Thay đổi từ tác chiến tiến công sang phòng ngự thụ động"
        },
        "key": "A"
      },
      {
        "global_id": 250,
        "lesson_id": 7,
        "id": 37,
        "q": "Mặt trận binh vận có ý nghĩa là?",
        "options": {
          "A": "Huấn luyện điều lệnh đội ngũ trong doanh trại quân đội",
          "B": "Vận chuyển lương thực súng đạn từ hậu phương ra tiền tuyến",
          "C": "Khoét sâu mâu thuẫn nội bộ địch, làm tan rã tinh thần, giác ngộ và lôi kéo binh lính đối phương quay về với nhân dân"
        },
        "key": "C"
      }
    ]
  },
  {
    "lesson_id": 8,
    "lesson_title": "BÀI 8: XÂY DỰNG VÀ BẢO VỆ CHỦ QUYỀN BIỂN, ĐẢO, BIÊN GIỚI QUỐC GIA TRONG TÌNH HÌNH MỚI",
    "question_count": 34,
    "questions": [
      {
        "global_id": 251,
        "lesson_id": 8,
        "id": 1,
        "q": "Lãnh thổ quốc gia là:",
        "options": {
          "A": "Phần không gian xác định trên trái đất thuộc chủ quyền hoàn toàn và riêng biệt của một quốc gia độc lập",
          "B": "Bất kỳ vùng đất nào do công dân của quốc gia đó mua được ở nước ngoài",
          "C": "Vùng đất không có người sinh sống nằm ngoài phạm vi các điều ước quốc tế"
        },
        "key": "A"
      },
      {
        "global_id": 252,
        "lesson_id": 8,
        "id": 2,
        "q": "Lãnh hải của Việt Nam là:",
        "options": {
          "A": "Vùng biển có chiều rộng 24 hải lý tính từ đất liền",
          "B": "Vùng biển có chiều rộng 12 hải lý tính từ đường cơ sở ra phía ngoài",
          "C": "Vùng biển có chiều rộng 200 hải lý tính từ đường bờ biển"
        },
        "key": "B"
      },
      {
        "global_id": 253,
        "lesson_id": 8,
        "id": 3,
        "q": "Nội thủy của lãnh thổ quốc gia là:",
        "options": {
          "A": "Vùng biển nằm ngoài phạm vi 12 hải lý lãnh hải",
          "B": "Toàn bộ các ao hồ tự nhiên nằm sâu trong đất liền",
          "C": "Vùng nước nằm ở phía trong của đường cơ sở dùng để tính chiều rộng lãnh hải"
        },
        "key": "C"
      },
      {
        "global_id": 254,
        "lesson_id": 8,
        "id": 4,
        "q": "Xây dựng và bảo vệ biên giới quốc gia là một nội dung của:",
        "options": {
          "A": "Chương trình xuất nhập khẩu nông sản đường biên",
          "B": "Sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam XHCN",
          "C": "Chính sách quản lý du lịch lữ hành quốc tế"
        },
        "key": "B"
      },
      {
        "global_id": 255,
        "lesson_id": 8,
        "id": 5,
        "q": "Biên giới quốc gia Việt Nam trên đất liền là đường phân định:",
        "options": {
          "A": "Ranh giới tạm thời theo mùa khô và mùa mưa dọc các con suối",
          "B": "Khu vực đất canh tác nông nghiệp giữa các bản làng vùng cao",
          "C": "Lãnh thổ trên đất liền của Việt Nam với các nước láng giềng (Trung Quốc, Lào, Campuchia) được xác định bằng các điều ước quốc tế và cắm mốc trên thực địa"
        },
        "key": "C"
      },
      {
        "global_id": 256,
        "lesson_id": 8,
        "id": 6,
        "q": "Vùng đặc quyền kinh tế của Việt Nam trong vùng biển có chiều rộng:",
        "options": {
          "A": "12 hải lý tính từ đường cơ sở",
          "B": "200 hải lý tính từ đường cơ sở",
          "C": "350 hải lý tính từ bờ biển"
        },
        "key": "B"
      },
      {
        "global_id": 257,
        "lesson_id": 8,
        "id": 7,
        "q": "Chủ quyền quốc gia là:",
        "options": {
          "A": "Khả năng chi phối tài chính lên các tập đoàn kinh tế nước ngoài",
          "B": "Quyền làm chủ tối cao của một quốc gia độc lập trong phạm vi lãnh thổ của mình và trong quan hệ quốc tế",
          "C": "Quyền áp đặt luật pháp của một nước lên các vùng biển quốc tế"
        },
        "key": "B"
      },
      {
        "global_id": 258,
        "lesson_id": 8,
        "id": 8,
        "q": "Chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Quyền cho phép quân đội nước ngoài tự do tuần tra không cần xin phép",
          "B": "Quyền tối cao, tuyệt đối, hoàn toàn và riêng biệt của quốc gia đối với lãnh thổ và mọi người, mọi vật nằm trên lãnh thổ đó",
          "C": "Quyền chuyển nhượng đất đai biên giới cho công ty nước ngoài thuê vĩnh viễn"
        },
        "key": "B"
      },
      {
        "global_id": 259,
        "lesson_id": 8,
        "id": 9,
        "q": "Biên giới quốc gia trên biển của Việt Nam là:",
        "options": {
          "A": "Ranh giới ngoài của vùng tiếp giáp lãnh hải 24 hải lý",
          "B": "Ranh giới ngoài của lãnh hải của đất liền, của đảo và quần đảo của Việt Nam",
          "C": "Đường phân định thềm lục địa 350 hải lý"
        },
        "key": "B"
      },
      {
        "global_id": 260,
        "lesson_id": 8,
        "id": 10,
        "q": "Một trong những quan điểm của đảng về xây dựng và bảo vệ chủ quyền lãnh thổ, biên giới quốc gia là:",
        "options": {
          "A": "Biên giới quốc gia có thể linh hoạt thay đổi tùy theo quy mô đầu tư kinh tế",
          "B": "Giao quyền kiểm soát biên giới cho các lực lượng bán quân sự tự phát",
          "C": "Chủ quyền lãnh thổ, biên giới quốc gia là thiêng liêng, bất khả xâm phạm của dân tộc Việt Nam"
        },
        "key": "C"
      },
      {
        "global_id": 261,
        "lesson_id": 8,
        "id": 11,
        "q": "Xây dựng và bảo vệ chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Nhiệm vụ riêng của lực lượng kiểm lâm bảo vệ rừng phòng hộ",
          "B": "Nhiệm vụ trọng yếu, thường xuyên của toàn Đảng, toàn dân, toàn quân và của cả hệ thống chính trị",
          "C": "Công việc thời vụ chỉ diễn ra khi có khiếu nại tranh chấp cắm mốc"
        },
        "key": "B"
      },
      {
        "global_id": 262,
        "lesson_id": 8,
        "id": 12,
        "q": "Nội dung nào sau đây là một trong những nội dung xây dựng và bảo vệ chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Chấp nhận tình trạng chia cắt lãnh thổ theo yêu cầu của các nước lớn",
          "B": "Mở rộng diện tích lãnh thổ bằng các biện pháp lấn chiếm vũ trang",
          "C": "Bảo vệ toàn vẹn vùng đất, vùng trời, vùng biển, hải đảo và lòng đất thuộc chủ quyền quốc gia"
        },
        "key": "C"
      },
      {
        "global_id": 263,
        "lesson_id": 8,
        "id": 13,
        "q": "Bảo vệ chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Xây tường bê tông ngăn cách toàn bộ các dòng sông chảy qua biên giới",
          "B": "Chỉ dựa vào các công văn khiếu nại gửi lên các tổ chức phi chính phủ",
          "C": "Sử dụng tổng hợp các biện pháp chính trị, pháp lý, ngoại giao, kinh tế, quân sự để giữ gìn toàn vẹn độc lập chủ quyền đất nước"
        },
        "key": "C"
      },
      {
        "global_id": 264,
        "lesson_id": 8,
        "id": 14,
        "q": "Một trong những nội dung xây dựng và bảo vệ chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Giữ gìn sự toàn vẹn lãnh thổ, không để bị chia cắt, xâm lấn, chuyển nhượng hoặc làm suy giảm chủ quyền dưới mọi hình thức",
          "B": "Thả nổi cho các tàu cá nước ngoài tự do đánh bắt trong nội thủy",
          "C": "Ký kết chuyển nhượng các đảo tiền tiêu để trừ nợ quốc gia"
        },
        "key": "A"
      },
      {
        "global_id": 265,
        "lesson_id": 8,
        "id": 15,
        "q": "Nội dung nào sau đây là một trong những nội dung xây dựng và bảo vệ chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Tự động rút lui các đồn biên phòng về tuyến sau 20km",
          "B": "Không cho người dân địa phương tham gia bảo vệ mốc giới",
          "C": "Đấu tranh làm thất bại mọi âm mưu, hành động xâm phạm chủ quyền lãnh thổ, biên giới quốc gia của các thế lực thù địch"
        },
        "key": "C"
      },
      {
        "global_id": 266,
        "lesson_id": 8,
        "id": 16,
        "q": "Làm tốt nhiệm vụ xây dựng và bảo vệ chủ quyền lãnh thổ quốc gia là:",
        "options": {
          "A": "Làm gia tăng căng thẳng và đối đầu vũ trang với các quốc gia láng giềng",
          "B": "Góp phần giữ vững môi trường hòa bình, ổn định để phát triển đất nước, bảo đảm an ninh trật tự khu vực biên giới",
          "C": "Gây cản trở các hoạt động giao lưu văn hóa quốc tế lành mạnh"
        },
        "key": "B"
      },
      {
        "global_id": 267,
        "lesson_id": 8,
        "id": 17,
        "q": "Biên giới quốc gia của Việt Nam là:",
        "options": {
          "A": "Khoảng cách tính từ bờ biển đến mép rạn san hô ngoài khơi",
          "B": "Đường và mặt thẳng đứng theo đường đó để xác định giới hạn lãnh thổ đất liền, các đảo, các quần đảo, vùng biển, lòng đất, vùng trời của Việt Nam",
          "C": "Chỉ là các hàng rào thép gai ngăn cách hai quốc gia trên bộ"
        },
        "key": "B"
      },
      {
        "global_id": 268,
        "lesson_id": 8,
        "id": 18,
        "q": "Theo Luật Biên giới quốc gia của nước Cộng hòa xã hội chủ nghĩa Việt Nam thì “xây dựng, quản lý, bảo vệ biên giới quốc gia, khu vực biên giới” là:",
        "options": {
          "A": "Nhiệm vụ riêng của các công ty bảo vệ tư nhân",
          "B": "Công việc của các hiệp hội thương mại và lâm nghiệp vùng biên",
          "C": "Sự nghiệp của toàn dân do Nhà nước thống nhất quản lý; LLVTND làm nòng cốt, Bộ đội Biên phòng là lực lượng chuyên trách"
        },
        "key": "C"
      },
      {
        "global_id": 269,
        "lesson_id": 8,
        "id": 19,
        "q": "Một trong những nội dung xây dựng và bảo vệ biên giới quốc gia là:",
        "options": {
          "A": "Xây dựng khu vực biên giới vững mạnh toàn diện về chính trị, kinh tế - xã hội, quốc phòng, an ninh và đối ngoại",
          "B": "Không đầu tư hệ thống điện, đường, trường, trạm tại vùng giáp biên",
          "C": "Di dời toàn bộ cư dân bản địa khỏi vành đai biên giới để lập vùng trắng"
        },
        "key": "A"
      },
      {
        "global_id": 270,
        "lesson_id": 8,
        "id": 20,
        "q": "Một trong những nội dung xây dựng và bảo vệ biên giới quốc gia là:",
        "options": {
          "A": "Cho phép doanh nghiệp khai thác khoáng sản làm xói mòn đường phân thủy mốc giới",
          "B": "Tháo dỡ các cột mốc cũ để mở rộng lối mòn tự phát",
          "C": "Bảo vệ mốc quốc giới, đường biên giới và công trình phòng thủ khu vực biên giới"
        },
        "key": "C"
      },
      {
        "global_id": 271,
        "lesson_id": 8,
        "id": 21,
        "q": "Một trong những nội dung xây dựng và bảo vệ biên giới quốc gia là:",
        "options": {
          "A": "Tuần tra, kiểm soát, duy trì thực thi pháp luật và hiệp định về quy chế biên giới mà Việt Nam đã ký kết",
          "B": "Đơn phương thay đổi vị trí cột mốc mà không bàn bạc hiệp thương",
          "C": "Thả nổi hoạt động xuất nhập cảnh và buôn lậu qua biên giới"
        },
        "key": "A"
      },
      {
        "global_id": 272,
        "lesson_id": 8,
        "id": 22,
        "q": "“Xây dựng, quản lý, bảo vệ biên giới quốc gia, khu vực biên giới là sự nghiệp của toàn dân do Nhà nước thống nhất quản lý” được quy định trong bộ luật nào của nước ta?",
        "options": {
          "A": "Luật Hàng không dân dụng",
          "B": "Luật Đất đai năm 2013",
          "C": "Luật Biên giới quốc gia năm 2003"
        },
        "key": "C"
      },
      {
        "global_id": 273,
        "lesson_id": 8,
        "id": 23,
        "q": "Theo luật pháp quốc tế, việc Trung Quốc chiếm giữ quần đảo Hoàng Sa của Việt Nam là vi phạm về:",
        "options": {
          "A": "Chỉ là tranh chấp đánh bắt hải sản thông thường giữa các tàu cá",
          "B": "Đúng theo thông lệ quốc tế về quyền chiếm hữu đất vô chủ",
          "C": "Vi phạm nghiêm trọng nguyên tắc cấm sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế của Hiến chương Liên Hợp Quốc"
        },
        "key": "C"
      },
      {
        "global_id": 274,
        "lesson_id": 8,
        "id": 24,
        "q": "Quan điểm xây dựng biên giới hòa bình hữu nghị, ổn định là:",
        "options": {
          "A": "Chủ trương nhất quán của Đảng và Nhà nước ta nhằm tạo điều kiện thuận lợi cho phát triển kinh tế và bảo vệ vững chắc biên cương Tổ quốc",
          "B": "Nhượng bộ chủ quyền vô điều kiện để tránh các tranh cãi ngoại giao",
          "C": "Giải pháp tạm thời để chờ cơ hội tiến hành chiến tranh xâm lấn"
        },
        "key": "A"
      },
      {
        "global_id": 275,
        "lesson_id": 8,
        "id": 25,
        "q": "Quan điểm của Đảng và Nhà nước ta trong giải quyết các vấn đề tranh chấp lãnh thổ, biên giới là:",
        "options": {
          "A": "Từ chối mọi diễn đàn đối thoại đa phương và song phương",
          "B": "Sẵn sàng phát động chiến tranh xâm lược trước để giành ưu thế địa bàn",
          "C": "Kiên quyết, kiên trì giải quyết bằng biện pháp hòa bình trên cơ sở luật pháp quốc tế, trong đó có UNCLOS 1982"
        },
        "key": "C"
      },
      {
        "global_id": 276,
        "lesson_id": 8,
        "id": 26,
        "q": "Theo luật pháp Quốc tế hiện đại, tất cả các quốc gia bình đẳng về?",
        "options": {
          "A": "Bình đẳng về giá trị tổng sản phẩm quốc nội (GDP)",
          "B": "Bình đẳng về chủ quyền quốc gia, không phân biệt quy mô diện tích, dân số hay chế độ chính trị",
          "C": "Bình đẳng về số lượng đầu đạn hạt nhân sở hữu"
        },
        "key": "B"
      },
      {
        "global_id": 277,
        "lesson_id": 8,
        "id": 27,
        "q": "Quốc gia Việt Nam là thực thể pháp lý bao gồm những yếu tố nào cấu thành?",
        "options": {
          "A": "Lãnh thổ xác định, Dân cư thường xuyên và Chính phủ (Nhà nước) có chủ quyền",
          "B": "Chỉ gồm các tài sản tài chính lưu trữ ở nước ngoài",
          "C": "Hệ thống các công ty cổ phần niêm yết trên sàn chứng khoán"
        },
        "key": "A"
      },
      {
        "global_id": 278,
        "lesson_id": 8,
        "id": 28,
        "q": "Xây dựng và bảo vệ chủ quyền lãnh thổ biên giới quốc gia là sự nghiệp của ai?",
        "options": {
          "A": "Chỉ của cán bộ chiến sĩ bộ đội biên phòng đóng quân tại đồn",
          "B": "Sự nghiệp của toàn thể nhân dân Việt Nam, dưới sự lãnh đạo của Đảng và quản lý của Nhà nước",
          "C": "Chỉ của đồng bào các dân tộc thiểu số sinh sống sát cột mốc"
        },
        "key": "B"
      },
      {
        "global_id": 279,
        "lesson_id": 8,
        "id": 29,
        "q": "Việt Nam có bờ biển dài khoảng bao nhiêu km?",
        "options": {
          "A": "Khoảng 1.500 km",
          "B": "Khoảng 3.260 km (không kể bờ các đảo)",
          "C": "Khoảng 5.000 km"
        },
        "key": "B"
      },
      {
        "global_id": 280,
        "lesson_id": 8,
        "id": 30,
        "q": "Theo về nguyên tắc tổ chức sắp xếp lại đơn vị hành chính cấp xã, chuyển các huyện đảo, thành phố đảo hiện nay thành đơn vị hành chính cấp xã có tên gọi là gì",
        "options": {
          "A": "Vùng lãnh thổ tự trị không chịu sự quản lý của cấp tỉnh",
          "B": "Xã đảo hoặc thị trấn đảo (hoặc phường đảo theo quy định phân loại đơn vị hành chính đô thị)",
          "C": "Đặc khu thuộc địa hải ngoại"
        },
        "key": "B"
      },
      {
        "global_id": 281,
        "lesson_id": 8,
        "id": 31,
        "q": "Theo quy ước quốc tế, 1 hải lý bằng bao nhiêu mét?",
        "options": {
          "A": "1.852 mét",
          "B": "1.000 mét",
          "C": "2.000 mét"
        },
        "key": "A"
      },
      {
        "global_id": 282,
        "lesson_id": 8,
        "id": 32,
        "q": "Thềm lục địa của Việt Nam là vùng đáy biển và lòng đất dưới đáy biển, tiếp liền và nằm ngoài lãnh hải Việt Nam, trên toàn bộ phần kéo dài tự nhiên của lãnh thổ đất liền, các đảo và quần đảo của Việt Nam cho đến:",
        "options": {
          "A": "Mép ngoài của vùng lãnh hải 12 hải lý",
          "B": "Cách bờ biển đúng 50 km",
          "C": "Mép ngoài của bờ lục địa, hoặc đến khoảng cách 200 hải lý (trong một số trường hợp mở rộng tối đa đến 350 hải lý theo UNCLOS 1982)"
        },
        "key": "C"
      },
      {
        "global_id": 283,
        "lesson_id": 8,
        "id": 33,
        "q": "Quốc gia nào chưa ký kết tham gia Công ước Liên Hợp Quốc về Luật biển 1982 (UNCLOS 1982)?",
        "options": {
          "A": "Nước Cộng hòa xã hội chủ nghĩa Việt Nam",
          "B": "Hợp chúng quốc Hoa Kỳ (Mỹ)",
          "C": "Cộng hòa Nhân dân Trung Hoa"
        },
        "key": "B"
      },
      {
        "global_id": 284,
        "lesson_id": 8,
        "id": 34,
        "q": "Một trong những quan điểm của Đảng và Nhà nước ta về biên giới và quản lý, bảo vệ biên giới quốc gia là:",
        "options": {
          "A": "Kết hợp chặt chẽ giữa quản lý, bảo vệ biên giới với phát triển kinh tế - xã hội, củng cố quốc phòng, an ninh và mở rộng đối ngoại",
          "B": "Để biên giới tự do hoàn toàn không cần sự kiểm soát của nhà nước",
          "C": "Cắt giảm ngân sách đầu tư cho các đồn biên phòng hải đảo"
        },
        "key": "A"
      }
    ]
  },
  {
    "lesson_id": 9,
    "lesson_title": "BÀI 9: XÂY DỰNG LỰC LƯỢNG DÂN QUÂN TỰ VỆ, LỰC LƯỢNG DỰ BỊ ĐỘNG VIÊN VÀ ĐỘNG VIÊN QUỐC PHÒNG",
    "question_count": 36,
    "questions": [
      {
        "global_id": 285,
        "lesson_id": 9,
        "id": 1,
        "q": "Là lực lượng vũ trang quần chúng không thoát ly sản xuất, công tác, được tổ chức ở đâu gọi là dân quân?",
        "options": {
          "A": "Được tổ chức tại các doanh trại quân đội chính quy",
          "B": "Được tổ chức ở các cơ quan nhà nước, tổ chức kinh tế",
          "C": "Được tổ chức ở xã, phường, thị trấn (gọi chung là cấp xã)"
        },
        "key": "C"
      },
      {
        "global_id": 286,
        "lesson_id": 9,
        "id": 2,
        "q": "Là lực lượng vũ trang quần chúng không thoát ly sản xuất, công tác, được tổ chức ở đâu gọi là tự vệ?",
        "options": {
          "A": "Được tổ chức ở cơ quan nhà nước, tổ chức chính trị, tổ chức chính trị - xã hội, đơn vị sự nghiệp, tổ chức kinh tế",
          "B": "Được tổ chức tại các trạm biên phòng cửa khẩu",
          "C": "Được tổ chức ở thôn xóm, bản làng vùng nông thôn"
        },
        "key": "A"
      },
      {
        "global_id": 287,
        "lesson_id": 9,
        "id": 3,
        "q": "Điều 6 Luật Dân quân tự vệ 2019 qui định có mấy thành phần?",
        "options": {
          "A": "Gồm 2 thành phần: Dân quân nông thôn và Tự vệ thành phố",
          "B": "Gồm 5 thành phần: Dân quân tự vệ tại chỗ; Cơ động; Thường trực; Biển; Phòng không, pháo binh, trinh sát, thông tin, công binh, phòng hóa, y tế",
          "C": "Gồm 3 thành phần: Lục quân, Hải quân và Phòng không"
        },
        "key": "B"
      },
      {
        "global_id": 288,
        "lesson_id": 9,
        "id": 4,
        "q": "Dân quân tự vệ tại chỗ là gì?",
        "options": {
          "A": "Là lực lượng làm nhiệm vụ ở thôn, ấp, bản, làng, buôn, phum, sóc, tổ dân phố và ở cơ quan, tổ chức",
          "B": "Là lực lượng chỉ làm nhiệm vụ canh gác tại các kho quân lương",
          "C": "Là lực lượng cơ động chiến đấu trên phạm vi toàn quốc"
        },
        "key": "A"
      },
      {
        "global_id": 289,
        "lesson_id": 9,
        "id": 5,
        "q": "Dân quân tự vệ cơ động là gì?",
        "options": {
          "A": "Là lực lượng làm nhiệm vụ cơ động trên địa bàn theo quyết định của cấp có thẩm quyền",
          "B": "Là lực lượng lính dù chuyên nghiệp của quân đội",
          "C": "Là lực lượng gắn chặt với một cơ quan duy nhất không được di chuyển"
        },
        "key": "A"
      },
      {
        "global_id": 290,
        "lesson_id": 9,
        "id": 6,
        "q": "Dân quân thường trực là gì?",
        "options": {
          "A": "Là lực lượng bảo vệ ban đêm tại các chợ đầu mối",
          "B": "Là lực lượng tình nguyện viên bán thời gian không hưởng phụ cấp",
          "C": "Là lực lượng dân quân làm nhiệm vụ thường trực sẵn sàng chiến đấu tại các địa bàn trọng điểm về quốc phòng"
        },
        "key": "C"
      },
      {
        "global_id": 291,
        "lesson_id": 9,
        "id": 7,
        "q": "Dân quân tự vệ biển là gì?",
        "options": {
          "A": "Là thủy thủ đoàn trên các tàu buôn quốc tế tư nhân",
          "B": "Là lực lượng làm nhiệm vụ trên các vùng biển, đảo của nước Cộng hòa xã hội chủ nghĩa Việt Nam",
          "C": "Là lực lượng cứu hộ bãi tắm tại các khu du lịch ven biển"
        },
        "key": "B"
      },
      {
        "global_id": 292,
        "lesson_id": 9,
        "id": 8,
        "q": "Vị trí, chức năng của Dân quân tự vệ được qui định như thế nào?",
        "options": {
          "A": "Là một thành phần của LLVTND; là lực lượng bảo vệ Đảng, chính quyền, tính mạng tài sản của Nhân dân và Nhà nước tại cơ sở",
          "B": "Là tổ chức kinh tế độc lập có thu chi tự hạch toán",
          "C": "Là cơ quan hành pháp giải quyết các khiếu nại đất đai"
        },
        "key": "A"
      },
      {
        "global_id": 293,
        "lesson_id": 9,
        "id": 9,
        "q": "Điều 5 Luật Dân quân tự vệ 2019 qui định DQTV có mấy nhiệm vụ?",
        "options": {
          "A": "Có 10 nhiệm vụ",
          "B": "Có 7 nhiệm vụ",
          "C": "Có 4 nhiệm vụ"
        },
        "key": "B"
      },
      {
        "global_id": 294,
        "lesson_id": 9,
        "id": 10,
        "q": "Một trong những vị trí vai trò của dân quân tự vệ là:",
        "options": {
          "A": "Thay thế hoàn toàn bộ đội chủ lực trong mọi chiến dịch phản công lớn",
          "B": "Độc lập tiến hành các cuộc đàm phán ngoại giao quân sự",
          "C": "Là lực lượng nòng cốt cùng toàn dân đánh giặc ở địa phương, cơ sở khi có chiến tranh"
        },
        "key": "C"
      },
      {
        "global_id": 295,
        "lesson_id": 9,
        "id": 11,
        "q": "Một trong những vị trí vai trò của dân quân tự vệ là:",
        "options": {
          "A": "Góp phần quan trọng giữ gìn an ninh chính trị, trật tự an toàn xã hội, phòng chống thiên tai, dịch bệnh ở cơ sở",
          "B": "Trực tiếp quyết định chính sách thuế và lệ phí cấp xã",
          "C": "Quản lý hệ thống nhà tù và trại giam của nhà nước"
        },
        "key": "A"
      },
      {
        "global_id": 296,
        "lesson_id": 9,
        "id": 12,
        "q": "Nội dung nào sau đây là một trong những nội dung của phương châm xây dựng dân quân tự vệ hiện nay?",
        "options": {
          "A": "Xây dựng theo phương châm “Vững mạnh, rộng khắp, coi trọng chất lượng là chính”",
          "B": "Chỉ phát triển lực lượng tự vệ trong các doanh nghiệp có vốn đầu tư nước ngoài",
          "C": "Tập trung mở rộng số lượng ồ ạt không cần thẩm tra lý lịch chính trị"
        },
        "key": "A"
      },
      {
        "global_id": 297,
        "lesson_id": 9,
        "id": 13,
        "q": "Quân nhân dự bị động viên được đăng ký, quản lý tại:",
        "options": {
          "A": "Ban Chỉ huy quân sự cấp huyện (và Ban Chỉ huy quân sự cấp xã nơi cư trú hoặc nơi làm việc)",
          "B": "Trụ sở cảnh sát giao thông khu vực",
          "C": "Văn phòng hiệp hội việc làm và tuyển dụng tư nhân"
        },
        "key": "A"
      },
      {
        "global_id": 298,
        "lesson_id": 9,
        "id": 14,
        "q": "Xây dựng lực lượng dự bị động viên là nhiệm vụ của:",
        "options": {
          "A": "Toàn Đảng, toàn dân, của cả hệ thống chính trị và toàn quân; trong đó cơ quan quân sự các cấp làm tham mưu",
          "B": "Của các tổ chức tài chính tín dụng",
          "C": "Riêng của các cơ sở dạy nghề tư thục"
        },
        "key": "A"
      },
      {
        "global_id": 299,
        "lesson_id": 9,
        "id": 15,
        "q": "Nội dung nào sau đây là một trong những biện pháp xây dựng lực lượng dân quân tự vệ?",
        "options": {
          "A": "Thả nổi cho các thôn xóm tự trang bị vũ khí tùy ý",
          "B": "Tăng cường sự lãnh đạo của cấp ủy Đảng, sự quản lý điều hành của chính quyền các cấp đối với lực lượng DQTV",
          "C": "Xóa bỏ phụ cấp trách nhiệm của cán bộ chỉ huy thôn đội"
        },
        "key": "B"
      },
      {
        "global_id": 300,
        "lesson_id": 9,
        "id": 16,
        "q": "Một trong những biện pháp xây dựng lực lượng dân quân tự vệ hiện nay là:",
        "options": {
          "A": "Tổ chức huấn luyện tập trung dài hạn quanh năm thoát ly sản xuất",
          "B": "Đổi mới nội dung, phương pháp giáo dục chính trị, huấn luyện quân sự sát với thực tế địa bàn cơ sở",
          "C": "Chỉ huấn luyện lý thuyết qua tranh ảnh mà không tổ chức thực hành"
        },
        "key": "B"
      },
      {
        "global_id": 301,
        "lesson_id": 9,
        "id": 17,
        "q": "Ngày nào hằng năm được lấy là ngày truyền thống của Dân quân tự vệ?",
        "options": {
          "A": "Ngày 22 tháng 12 hàng năm",
          "B": "Ngày 28 tháng 3 hàng năm (28/3/1935)",
          "C": "Ngày 19 tháng 8 hàng năm"
        },
        "key": "B"
      },
      {
        "global_id": 302,
        "lesson_id": 9,
        "id": 18,
        "q": "Độ tuổi tham gia Dân quân tự vệ được qui định như thế nào?",
        "options": {
          "A": "Nam từ đủ 18 tuổi đến hết 45 tuổi; Nữ từ đủ 18 tuổi đến hết 40 tuổi",
          "B": "Nam từ 20 đến 60 tuổi; Nữ từ 20 đến 55 tuổi",
          "C": "Nam từ 16 đến 30 tuổi; Nữ từ 16 đến 25 tuổi"
        },
        "key": "A"
      },
      {
        "global_id": 303,
        "lesson_id": 9,
        "id": 19,
        "q": "Nếu tình nguyện tham gia Dân quân tự vệ thì độ tuổi có thể kéo dài đến bao nhiêu?",
        "options": {
          "A": "Không giới hạn độ tuổi tối đa",
          "B": "Có thể kéo dài đến hết 50 tuổi đối với nam, đến hết 45 tuổi đối với nữ",
          "C": "Có thể kéo dài đến hết 65 tuổi đối với cả nam và nữ"
        },
        "key": "B"
      },
      {
        "global_id": 304,
        "lesson_id": 9,
        "id": 20,
        "q": "“Bảo đảm số lượng đủ, chất lượng cao, xây dựng toàn diện nhưng có trọng tâm, trọng điểm” là một trong những nội dung của:",
        "options": {
          "A": "Quan điểm, nguyên tắc xây dựng lực lượng dự bị động viên",
          "B": "Quy chế chi tiêu ngân sách công đoàn cơ sở",
          "C": "Kế hoạch cải cách thủ tục hành chính tư pháp"
        },
        "key": "A"
      },
      {
        "global_id": 305,
        "lesson_id": 9,
        "id": 21,
        "q": "Một trong những nguyên tắc sắp xếp quân nhân dự bị vào các đơn vị dự bị động viên là:",
        "options": {
          "A": "Bố trí ngẫu nhiên không cần tính đến nghề nghiệp chuyên môn trước khi xuất ngũ",
          "B": "Ưu tiên phân bổ quân nhân dự bị đến các địa bàn xa nhất để thử thách",
          "C": "Xếp đúng chuyên nghiệp quân sự, đúng chức vụ; quân nhân dự bị cư trú gần đơn vị động viên"
        },
        "key": "C"
      },
      {
        "global_id": 306,
        "lesson_id": 9,
        "id": 22,
        "q": "Việc bảo đảm vật chất, kinh phí xây dựng lực lượng dự bị động viên hàng năm do:",
        "options": {
          "A": "Các nguồn vốn vay thương mại từ ngân hàng tư nhân",
          "B": "Bản thân quân nhân dự bị tự đóng góp 100%",
          "C": "Ngân sách nhà nước (ngân sách trung ương và ngân sách địa phương) bảo đảm theo quy định của pháp luật"
        },
        "key": "C"
      },
      {
        "global_id": 307,
        "lesson_id": 9,
        "id": 23,
        "q": "Một trong những nội dung xây dựng lực lượng dự bị động viên là:",
        "options": {
          "A": "Giải tán các đầu mối trung đoàn khung dự bị động viên trong thời bình",
          "B": "Đăng ký, quản lý, huấn luyện quân nhân dự bị và phương tiện kỹ thuật dự bị; xây dựng và hoàn chỉnh các kế hoạch động viên",
          "C": "Cho phép quân nhân dự bị tự ý hủy bỏ hồ sơ quân vụ khi đi làm xa"
        },
        "key": "B"
      },
      {
        "global_id": 308,
        "lesson_id": 9,
        "id": 24,
        "q": "Phương tiện kỹ thuật của lực lượng dự bị động viên thường gồm:",
        "options": {
          "A": "Chỉ bao gồm xe máy cá nhân của người dân",
          "B": "Chỉ gồm các phương tiện đánh bắt thủy sản ven bờ",
          "C": "Phương tiện giao thông vận tải, thông tin liên lạc, cầu đường, công binh, y tế và trang bị chuyên dùng khác được đăng ký, quản lý"
        },
        "key": "C"
      },
      {
        "global_id": 309,
        "lesson_id": 9,
        "id": 25,
        "q": "Nguyên tắc lãnh đạo của Đảng đối với lực lượng dự bị động viên nhằm mục đích:",
        "options": {
          "A": "Tạo điều kiện để lực lượng dự bị tham gia tranh cử tự do",
          "B": "Tách rời hoạt động huấn luyện dự bị khỏi kế hoạch phòng thủ tỉnh thành",
          "C": "Giữ vững bản chất cách mạng, bảo đảm lực lượng DBĐV tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân, sẵn sàng động viên chiến đấu"
        },
        "key": "C"
      },
      {
        "global_id": 310,
        "lesson_id": 9,
        "id": 26,
        "q": "Cấp xã có thể tổ chức đơn vị Dân quân Cơ động cao nhất đến:",
        "options": {
          "A": "Cấp Trung đội dân quân cơ động",
          "B": "Cấp Lữ đoàn pháo binh",
          "C": "Cấp Tiểu đoàn bộ binh cơ giới"
        },
        "key": "A"
      },
      {
        "global_id": 311,
        "lesson_id": 9,
        "id": 27,
        "q": "Quân nhân dự bị gồm:",
        "options": {
          "A": "Sĩ quan dự bị, quân nhân chuyên nghiệp dự bị và hạ sĩ quan, binh sĩ dự bị",
          "B": "Toàn bộ nam công dân từ 18 tuổi trở lên chưa từng tham gia quân đội",
          "C": "Chỉ có sĩ quan đã nghỉ hưu hưởng chế độ bảo hiểm"
        },
        "key": "A"
      },
      {
        "global_id": 312,
        "lesson_id": 9,
        "id": 28,
        "q": "Tạo nguồn lực lượng dự bị động viên:",
        "options": {
          "A": "Từ hạ sĩ quan, binh sĩ xuất ngũ; sinh viên tốt nghiệp các trường đại học đã qua đào tạo sĩ quan dự bị; cán bộ, công chức, viên chức và công dân đủ điều kiện",
          "B": "Nhập khẩu nhân lực từ các lực lượng an ninh tư nhân nước ngoài",
          "C": "Chỉ tuyển chọn từ những người thất nghiệp tại các vùng sâu vùng xa"
        },
        "key": "A"
      },
      {
        "global_id": 313,
        "lesson_id": 9,
        "id": 29,
        "q": "Xây dựng dân quân tự vệ vững mạnh, rộng khắp, có số lượng phù hợp, Đảng ta xác định coi trọng lực lượng nào sau đây?",
        "options": {
          "A": "Coi trọng chất lượng là chính, trước hết là chất lượng chính trị",
          "B": "Coi trọng việc mua sắm trang phục biểu diễn lễ hội",
          "C": "Coi trọng mở rộng quân số đông hàng chục triệu người"
        },
        "key": "A"
      },
      {
        "global_id": 314,
        "lesson_id": 9,
        "id": 30,
        "q": "Thời hạn thực hiện nghĩa vụ tham gia Dân quân thường trực là mấy năm?",
        "options": {
          "A": "Là 02 năm (có thể kéo dài không quá 01 năm theo quyết định của cấp có thẩm quyền)",
          "B": "Là 06 tháng",
          "C": "Là 05 năm liên tục"
        },
        "key": "A"
      },
      {
        "global_id": 315,
        "lesson_id": 9,
        "id": 31,
        "q": "Lực lượng dự bị động viên gồm những thành phần nào?",
        "options": {
          "A": "Quân nhân dự bị và Phương tiện kỹ thuật dự bị đã được đăng ký, quản lý và sắp xếp vào đơn vị dự bị động viên",
          "B": "Chỉ bao gồm kho tàng vũ khí đạn dược niêm cất",
          "C": "Toàn bộ các phương tiện vận tải đường bộ của doanh nghiệp tư nhân"
        },
        "key": "A"
      },
      {
        "global_id": 316,
        "lesson_id": 9,
        "id": 32,
        "q": "Lực lượng dự bị động viên thuộc thành phần nào của Lực lượng vũ trang nhân dân?",
        "options": {
          "A": "Là một bộ phận cấu thành của Quân đội nhân dân Việt Nam",
          "B": "Thuộc lực lượng thanh niên xung kích tình nguyện dân sự",
          "C": "Thuộc các câu lạc bộ thể thao quốc phòng ngoài công lập"
        },
        "key": "A"
      },
      {
        "global_id": 317,
        "lesson_id": 9,
        "id": 33,
        "q": "“Ngụ binh ư nông” dùng để chỉ lực lượng nào?",
        "options": {
          "A": "Lực lượng vệ binh danh dự cơ quan trung ương",
          "B": "Lực lượng Dân quân tự vệ và Lực lượng Dự bị động viên",
          "C": "Lực lượng đặc nhiệm thường trực của Bộ Quốc phòng"
        },
        "key": "B"
      },
      {
        "global_id": 318,
        "lesson_id": 9,
        "id": 34,
        "q": "Đâu là một trong những quan điểm nguyên tắc xây dựng lực lượng Dự bị động viên?",
        "options": {
          "A": "Giao khoán việc quản lý quân nhân dự bị cho các công ty môi giới lao động",
          "B": "Không cần tổ chức diễn tập thực binh báo động động viên định kỳ",
          "C": "Đặt dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng; phát huy sức mạnh tổng hợp của cả hệ thống chính trị và toàn dân"
        },
        "key": "C"
      },
      {
        "global_id": 319,
        "lesson_id": 9,
        "id": 35,
        "q": "Lực lượng dự bị động viên gồm những thành phần nào sau đây là đúng nhất?",
        "options": {
          "A": "Chỉ gồm cán bộ kiểm lâm và quản lý thị trường",
          "B": "Gồm quân nhân dự bị và phương tiện kỹ thuật của nền kinh tế quốc dân được chuẩn bị sẵn sàng bổ sung cho lực lượng thường trực của quân đội",
          "C": "Chỉ gồm các cựu chiến binh cao tuổi tình nguyện"
        },
        "key": "B"
      },
      {
        "global_id": 320,
        "lesson_id": 9,
        "id": 36,
        "q": "“Thường xuyên củng cố kiện toàn, bồi dưỡng cơ quan và đội ngũ cán bộ làm công tác xây dựng lực lượng ĐBĐV” là?",
        "options": {
          "A": "Một trong những biện pháp chủ yếu trong xây dựng lực lượng dự bị động viên",
          "B": "Khẩu hiệu thi đua của ngành giao thông vận tải",
          "C": "Quy định kiểm tra an toàn vệ sinh lao động"
        },
        "key": "A"
      }
    ]
  },
  {
    "lesson_id": 10,
    "lesson_title": "BÀI 10: XÂY DỰNG PHONG TRÀO TOÀN DÂN BẢO VỆ AN NINH TỔ QUỐC",
    "question_count": 31,
    "questions": [
      {
        "global_id": 321,
        "lesson_id": 10,
        "id": 1,
        "q": "Là hình thức hoạt động tự giác, có tổ chức của đông đảo quần chúng nhân dân tham gia xây dựng, quản lý nền an ninh, trật tự, chủ động phòng ngừa, phát hiện, ngăn chặn, đấu tranh chống âm mưu, hoạt động của các thế lực thù địch, phản động và tội phạm nhằm bảo vệ an ninh quốc gia, bảo đảm trật tự an toàn xã hội. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Điều lệ hội sinh vật cảnh địa phương",
          "B": "Khái niệm Phong trào toàn dân bảo vệ an ninh Tổ quốc",
          "C": "Quy chế hoạt động của các đội văn nghệ quần chúng"
        },
        "key": "B"
      },
      {
        "global_id": 322,
        "lesson_id": 10,
        "id": 2,
        "q": "Mục đích xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc?",
        "options": {
          "A": "Phục vụ cho các chiến dịch quảng bá du lịch và thu hút vốn đầu tư ngắn hạn",
          "B": "Huy động sức mạnh to lớn của quần chúng nhân dân vào sự nghiệp bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội, xây dựng thế trận an ninh nhân dân vững chắc",
          "C": "Thay thế hoàn toàn lực lượng công an chính quy trong công tác điều tra phá án"
        },
        "key": "B"
      },
      {
        "global_id": 323,
        "lesson_id": 10,
        "id": 3,
        "q": "Phong trào toàn dân bảo vệ an ninh Tổ quốc thu hút đông đảo quần chúng nhân dân tự giác tham gia công tác bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Kế hoạch phân bổ kinh phí phòng cháy chữa cháy",
          "B": "Quy định xử phạt vi phạm hành chính trong lĩnh vực môi trường",
          "C": "Vị trí, tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc"
        },
        "key": "C"
      },
      {
        "global_id": 324,
        "lesson_id": 10,
        "id": 4,
        "q": "Phong trào toàn dân bảo vệ an ninh Tổ quốc góp phần huy động, tập hợp sức mạnh từ quần chúng nhân dân phục vụ sự nghiệp bảo vệ an ninh Tổ quốc. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Ý nghĩa, vai trò của phong trào toàn dân bảo vệ an ninh Tổ quốc",
          "B": "Hướng dẫn thực hiện bảo hiểm y tế hộ gia đình",
          "C": "Chương trình xóa đói giảm nghèo bền vững"
        },
        "key": "A"
      },
      {
        "global_id": 325,
        "lesson_id": 10,
        "id": 5,
        "q": "Nghị định của Chính phủ về phối hợp giữa Bộ Công an và Bộ Quốc phòng trong thực hiện nhiệm vụ bảo vệ an ninh quốc gia, bảo đảm trật tự an toàn xã hội, đấu tranh phòng, chống tội phạm và nhiệm vụ quốc phòng. Thuộc nghị định nào sau đây?",
        "options": {
          "A": "Nghị định số 03/2019/NĐ-CP của Chính phủ",
          "B": "Nghị định số 100/2019/NĐ-CP của Chính phủ",
          "C": "Nghị định số 15/2020/NĐ-CP của Chính phủ"
        },
        "key": "A"
      },
      {
        "global_id": 326,
        "lesson_id": 10,
        "id": 6,
        "q": "Phong trào toàn dân bảo vệ ANTQ do cơ quan nào tổ chức ?",
        "options": {
          "A": "Do các hiệp hội doanh nghiệp tư nhân tự phát phát động",
          "B": "Do cơ quan thanh tra bưu chính viễn thông điều hành",
          "C": "Do lực lượng Công an nhân dân chủ trì tham mưu, tổ chức và hướng dẫn dưới sự lãnh đạo của cấp ủy Đảng và quản lý của chính quyền các cấp"
        },
        "key": "C"
      },
      {
        "global_id": 327,
        "lesson_id": 10,
        "id": 7,
        "q": "Ngày Hội toàn dân bảo vệ ANTQ là ngày tháng nào?",
        "options": {
          "A": "Ngày 19 tháng 8 hàng năm (Quyết định số 521/QĐ-TTg của Thủ tướng Chính phủ)",
          "B": "Ngày 28 tháng 3 hàng năm",
          "C": "Ngày 22 tháng 12 hàng năm"
        },
        "key": "A"
      },
      {
        "global_id": 328,
        "lesson_id": 10,
        "id": 8,
        "q": "Quán triệt quan điểm \"lấy dân làm gốc\" trong xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Nội dung huấn luyện võ thuật công an nhân dân",
          "B": "Quy chế chi tiêu ngân sách công an xã",
          "C": "Quan điểm, nguyên tắc chỉ đạo xây dựng phong trào toàn dân bảo vệ ANTQ"
        },
        "key": "C"
      },
      {
        "global_id": 329,
        "lesson_id": 10,
        "id": 9,
        "q": "Xây dựng, phát triển phong trào toàn dân bảo vệ an ninh Tổ quốc là nhiệm vụ của toàn Đảng, toàn dân, của cả hệ thống chính trị, đặt dưới sự lãnh đạo trực tiếp, tuyệt đối về mọi mặt của Đảng, sự quản lý, điều hành của nhà nước, sự tham gia, phối hợp của Mặt trận Tổ quốc và các tổ chức đoàn thể, tính tích cực của quần chúng nhân dân. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Kế hoạch thanh tra chuyên đề tài chính",
          "B": "Quan điểm chỉ đạo của Đảng về xây dựng phong trào toàn dân bảo vệ ANTQ",
          "C": "Báo cáo sơ kết công tác đoàn thanh niên"
        },
        "key": "B"
      },
      {
        "global_id": 330,
        "lesson_id": 10,
        "id": 10,
        "q": "Vận động xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc có bao nhiêu nội dung?",
        "options": {
          "A": "Có 5 nội dung cơ bản",
          "B": "Có 2 nội dung",
          "C": "Có 10 nội dung"
        },
        "key": "A"
      },
      {
        "global_id": 331,
        "lesson_id": 10,
        "id": 11,
        "q": "Vận động quần chúng nhận thức đúng, tự giác chấp hành nghiêm túc mọi chủ trương, đường lối của Đảng, pháp luật của Nhà nước. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Nội quy phòng họp của ủy ban nhân dân xã",
          "B": "Kế hoạch tuần tra ban đêm của cảnh sát khu vực",
          "C": "Nội dung giáo dục, vận động quần chúng trong phong trào toàn dân bảo vệ ANTQ"
        },
        "key": "C"
      },
      {
        "global_id": 332,
        "lesson_id": 10,
        "id": 12,
        "q": "Nắm tình hình xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc có bao nhiêu nội dung?",
        "options": {
          "A": "Gồm các nội dung: Nắm tình hình an ninh trật tự, tình hình nhân dân, tình hình địa bàn và hoạt động của các loại đối tượng",
          "B": "Chỉ nắm số lượng học sinh bỏ học cấp tiểu học",
          "C": "Chỉ nắm tình hình giá cả nông sản trên thị trường"
        },
        "key": "A"
      },
      {
        "global_id": 333,
        "lesson_id": 10,
        "id": 13,
        "q": "Phương pháp nắm tình hình xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc có bao nhiêu bước?",
        "options": {
          "A": "Gồm 3 bước cơ bản: Thu thập thông tin; Phân tích, đánh giá, dự báo tình hình; Đề xuất chủ trương, giải pháp xử lý",
          "B": "Gồm 10 bước kiểm tra hành chính định kỳ",
          "C": "Chỉ có 1 bước duy nhất là sao chép báo cáo của cấp dưới"
        },
        "key": "A"
      },
      {
        "global_id": 334,
        "lesson_id": 10,
        "id": 14,
        "q": "Triệt để khai thác sử dụng phương tiện thông tin đại chúng và các loại hình văn hóa, giáo dục, nghệ thuật, áp phích khẩu hiệu, biểu ngữ… để tuyên truyền giáo dục quần chúng nhân dân đạt hiệu quả. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Kế hoạch giải tỏa trật tự vỉa hè đô thị",
          "B": "Hình thức, phương pháp tuyên truyền vận động quần chúng bảo vệ ANTQ",
          "C": "Biện pháp nghiệp vụ trinh sát ngoại tuyến bí mật"
        },
        "key": "B"
      },
      {
        "global_id": 335,
        "lesson_id": 10,
        "id": 15,
        "q": "Những tổ chức nào là tổ chức nòng cốt trong phong trào toàn dân bảo vệ ANTQ?",
        "options": {
          "A": "Các câu lạc bộ khiêu vũ và thể dục dưỡng sinh",
          "B": "Hội đồng quản trị các công ty bất động sản",
          "C": "Lực lượng Công an nhân dân, lực lượng Bảo vệ an ninh trật tự ở cơ sở (dân phòng, bảo vệ dân phố, công an xã bán chuyên trách)"
        },
        "key": "C"
      },
      {
        "global_id": 336,
        "lesson_id": 10,
        "id": 16,
        "q": "Xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc gắn liền với tấn công, trấn áp tội phạm, kết hợp tính tích cực của quần chúng với các biện pháp nghiệp vụ của cơ quan chuyên môn. Thuộc nội dung nào sau đây?",
        "options": {
          "A": "Phương pháp và nguyên tắc chỉ đạo phong trào toàn dân bảo vệ ANTQ",
          "B": "Tiêu chuẩn xét tặng danh hiệu thôn văn hóa",
          "C": "Quy trình đăng ký tạm trú tạm vắng online"
        },
        "key": "A"
      },
      {
        "global_id": 337,
        "lesson_id": 10,
        "id": 17,
        "q": "Phong trào toàn dân bảo vệ an ninh Tổ quốc có bao nhiêu đặc điểm chính?",
        "options": {
          "A": "Gồm các đặc điểm: Tính xã hội sâu sắc; Tính quần chúng rộng rãi; Gắn liền với các phong trào thi đua yêu nước khác; Đặt dưới sự lãnh đạo toàn diện của Đảng",
          "B": "Chỉ có đặc điểm bí mật tuyệt đối ngoài dân chúng",
          "C": "Mang tính chất kinh doanh thương mại có thu phí"
        },
        "key": "A"
      },
      {
        "global_id": 338,
        "lesson_id": 10,
        "id": 18,
        "q": "Một trong những vị trí, tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Giúp các cơ quan hành chính giảm bớt giờ làm việc ban ngày",
          "B": "Tạo nền tảng vững chắc để xây dựng thế trận an ninh nhân dân gắn với thế trận quốc phòng toàn dân bảo vệ vững chắc Tổ quốc",
          "C": "Tạo nguồn thu phụ phí từ tiền nộp phạt giao thông"
        },
        "key": "B"
      },
      {
        "global_id": 339,
        "lesson_id": 10,
        "id": 19,
        "q": "Mục đích của phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Phát huy quyền làm chủ của nhân dân trên lĩnh vực bảo vệ an ninh, trật tự, chủ động phòng ngừa, phát hiện, đấu tranh ngăn chặn mọi âm mưu phá hoại và tội phạm",
          "B": "Phân chia hạn mức xuất khẩu nông sản cho từng hộ gia đình",
          "C": "Tập hợp dân cư để tổ chức các chuyến tham quan du lịch tập thể"
        },
        "key": "A"
      },
      {
        "global_id": 340,
        "lesson_id": 10,
        "id": 20,
        "q": "“Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm” là một trong những nội dung cơ bản của:",
        "options": {
          "A": "Chính sách bảo hiểm xã hội tự nguyện cho người lao động",
          "B": "Nội dung công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
          "C": "Kế hoạch nâng cấp lưới điện hạ thế nông thôn"
        },
        "key": "B"
      },
      {
        "global_id": 341,
        "lesson_id": 10,
        "id": 21,
        "q": "Một trong những nội dung cơ bản của công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Vận động nhân dân tham gia phòng ngừa, phát hiện, tố giác tội phạm, cảm hóa giáo dục người lầm lỗi tại cộng đồng dân cư",
          "B": "Khuyến khích người dân lập các tòa án tư nhân tự xử lý mâu thuẫn",
          "C": "Tổ chức mua bán trái phép các thiết bị ghi âm giấu kín"
        },
        "key": "A"
      },
      {
        "global_id": 342,
        "lesson_id": 10,
        "id": 22,
        "q": "“Tham gia xây dựng tổ chức Đảng, chính quyền, đoàn thể quần chúng tại cơ sở vững mạnh” là một trong những nội dung cơ bản của:",
        "options": {
          "A": "Nội dung phong trào toàn dân bảo vệ an ninh Tổ quốc",
          "B": "Quy định về lập báo cáo tài chính cuối năm của doanh nghiệp",
          "C": "Tiêu chí thẩm định dự án giao thông công cộng"
        },
        "key": "A"
      },
      {
        "global_id": 343,
        "lesson_id": 10,
        "id": 23,
        "q": "Một trong những vị trí, tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Là biện pháp ứng phó tình thế chỉ áp dụng khi tội phạm gia tăng đột biến",
          "B": "Là biện pháp cơ bản, chiến lược lâu dài để bảo đảm trật tự an toàn xã hội và an ninh quốc gia từ gốc, từ cơ sở",
          "C": "Chỉ có tác dụng đối với các khu vực dân tộc thiểu số vùng cao"
        },
        "key": "B"
      },
      {
        "global_id": 344,
        "lesson_id": 10,
        "id": 24,
        "q": "Một trong những nội dung cơ bản của công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Tháo dỡ hệ thống đèn chiếu sáng ban đêm ở các ngõ xóm",
          "B": "Cho phép các băng nhóm giang hồ tự đứng ra dàn xếp tranh chấp",
          "C": "Xây dựng và nhân rộng các mô hình, điển hình tiên tiến tự quản về an ninh trật tự (như tổ tự quản, dòng họ tự quản, camera an ninh)"
        },
        "key": "C"
      },
      {
        "global_id": 345,
        "lesson_id": 10,
        "id": 25,
        "q": "Một trong những nội dung cơ bản của công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Đóng cửa tất cả các cơ quan tiếp công dân tại trụ sở xã",
          "B": "Vận động nhân dân thực hiện tốt phong trào bảo vệ bí mật nhà nước, bảo vệ an ninh kinh tế, an ninh văn hóa tư tưởng và an ninh thông tin",
          "C": "Tự do chia sẻ thông tin mật của cơ quan lên các mạng xã hội nước ngoài"
        },
        "key": "B"
      },
      {
        "global_id": 346,
        "lesson_id": 10,
        "id": 26,
        "q": "Đội Cờ đỏ là tổ chức quần chúng nòng cốt làm nhiệm vụ an ninh trật tự trong nhà trường là một tổ chức quần chúng có chức năng:",
        "options": {
          "A": "Có quyền bắt giữ và xét xử giam giữ người như cơ quan tư pháp",
          "B": "Hỗ trợ nhà trường duy trì nề nếp, kỷ cương, nắm bắt tình hình và phòng ngừa các hành vi vi phạm nội quy, tệ nạn xã hội trong học sinh, sinh viên",
          "C": "Thay mặt ban giám hiệu thu học phí và các khoản quỹ của lớp"
        },
        "key": "B"
      },
      {
        "global_id": 347,
        "lesson_id": 10,
        "id": 27,
        "q": "Bảo vệ bí mật nhà nước là nội dung của:",
        "options": {
          "A": "Hướng dẫn bảo quản hồ sơ thư viện công cộng",
          "B": "Quy chế bảo hành thiết bị văn phòng",
          "C": "Bảo vệ an ninh quốc gia và phong trào toàn dân bảo vệ an ninh Tổ quốc"
        },
        "key": "C"
      },
      {
        "global_id": 348,
        "lesson_id": 10,
        "id": 28,
        "q": "Nội dung bảo vệ an ninh Lãnh thổ:",
        "options": {
          "A": "Phân chia ranh giới đất ở giữa các hộ gia đình liền kề",
          "B": "Bảo vệ toàn vẹn chủ quyền lãnh thổ, biên giới, vùng trời, vùng biển, hải đảo và lợi ích quốc gia của đất nước",
          "C": "Chỉ quan tâm kiểm soát giao thông đường thủy nội địa"
        },
        "key": "B"
      },
      {
        "global_id": 349,
        "lesson_id": 10,
        "id": 29,
        "q": "Một trong những đặc điểm của cuộc đấu tranh bảo vệ an ninh Tổ quốc là:",
        "options": {
          "A": "Hoàn toàn không có nguy cơ thương vong đối với lực lượng tham gia",
          "B": "Chỉ giới hạn bằng các cuộc tuần tra công khai ban ngày",
          "C": "Diễn ra gay go, quyết liệt, phức tạp, lâu dài, đan xen giữa đối tượng và đối tác, trên tất cả các lĩnh vực đời sống xã hội"
        },
        "key": "C"
      },
      {
        "global_id": 350,
        "lesson_id": 10,
        "id": 30,
        "q": "Phong trào “Ngũ gia liên bảo” là phong trào hành động cách mạng của nhân dân trong thời kì nào?",
        "options": {
          "A": "Thời kỳ kháng chiến chống thực dân Pháp (nhằm bảo vệ bí mật cơ sở kháng chiến và bảo đảm trị an thôn xóm)",
          "B": "Thời kỳ phong kiến triều nhà Đinh thế kỷ X",
          "C": "Thời kỳ sau năm 2000 trong phong trào đô thị thông minh"
        },
        "key": "A"
      },
      {
        "global_id": 351,
        "lesson_id": 10,
        "id": 31,
        "q": "Mục đích của phong trào toàn dân bảo vệ an ninh, trật tự là gì?",
        "options": {
          "A": "Thu hút tài trợ thương mại cho các sự kiện giải trí đường phố",
          "B": "Giữ vững bình yên cuộc sống cho nhân dân, bảo vệ Đảng, Nhà nước, bảo vệ chế độ và thành quả cách mạng của đất nước",
          "C": "Tạo điều kiện để người dân thành lập các lực lượng vũ trang tư nhân tự phát"
        },
        "key": "B"
      }
    ]
  },
  {
    "lesson_id": 11,
    "lesson_title": "BÀI 11: NHỮNG VẤN ĐỀ CƠ BẢN VỀ BẢO VỆ AN NINH QUỐC GIA VÀ BẢO ĐẢM TRẬT TỰ AN TOÀN XÃ HỘI",
    "question_count": 35,
    "questions": [
      {
        "global_id": 352,
        "lesson_id": 11,
        "id": 1,
        "q": "An ninh quốc gia là?",
        "options": {
          "A": "Tình trạng không có người vi phạm luật giao thông đường bộ trên toàn quốc",
          "B": "Khả năng thanh toán nợ công đúng hạn của ngân sách nhà nước",
          "C": "Sự ổn định, phát triển bền vững của chế độ xã hội chủ nghĩa và Nhà nước Cộng hòa XHCN Việt Nam, sự bất khả xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc"
        },
        "key": "C"
      },
      {
        "global_id": 353,
        "lesson_id": 11,
        "id": 2,
        "q": "Bảo vệ an ninh quốc gia là?",
        "options": {
          "A": "Phòng ngừa, phát hiện, ngăn chặn, đấu tranh làm thất bại các hoạt động xâm phạm an ninh quốc gia",
          "B": "Khóa hoàn toàn các cổng thông tin kết nối internet quốc tế",
          "C": "Việc cấm đoán mọi người nước ngoài đến thăm viếng du lịch tại Việt Nam"
        },
        "key": "A"
      },
      {
        "global_id": 354,
        "lesson_id": 11,
        "id": 3,
        "q": "Hoạt động xâm phạm an ninh quốc gia là?",
        "options": {
          "A": "Tranh chấp dân sự về quyền thừa kế tài sản giữa các cá nhân",
          "B": "Hành vi xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc, chế độ xã hội chủ nghĩa và Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam",
          "C": "Hành vi chậm nộp thuế giá trị gia tăng của doanh nghiệp tư nhân"
        },
        "key": "B"
      },
      {
        "global_id": 355,
        "lesson_id": 11,
        "id": 4,
        "q": "Nguy cơ đe dọa an ninh quốc gia là?",
        "options": {
          "A": "Sự gia tăng số lượng sinh viên tốt nghiệp các trường đại học mỗi năm",
          "B": "Những nhân tố bên trong hoặc bên ngoài có thể gây phương hại đến an ninh quốc gia nếu không có biện pháp phòng ngừa, ngăn chặn kịp thời",
          "C": "Việc mở thêm các đường bay quốc tế thương mại mới"
        },
        "key": "B"
      },
      {
        "global_id": 356,
        "lesson_id": 11,
        "id": 5,
        "q": "Trách nhiệm, nghĩa vụ bảo vệ an ninh quốc gia?",
        "options": {
          "A": "Chỉ thuộc về trách nhiệm của các thẩm phán tòa án nhân dân tối cao",
          "B": "Bảo vệ an ninh quốc gia là sự nghiệp của toàn dân; cơ quan, tổ chức, công dân có trách nhiệm, nghĩa vụ bảo vệ an ninh quốc gia theo quy định của pháp luật",
          "C": "Là công việc tự nguyện không bắt buộc đối với công dân trưởng thành"
        },
        "key": "B"
      },
      {
        "global_id": 357,
        "lesson_id": 11,
        "id": 6,
        "q": "Bảo vệ an ninh chính trị nội bộ được Đảng ta xác định thế nào?",
        "options": {
          "A": "Là nội dung cốt lõi, trọng yếu hàng đầu trong công tác bảo vệ an ninh quốc gia, bảo đảm sự trong sạch, vững mạnh của tổ chức Đảng và bộ máy nhà nước",
          "B": "Nhiệm vụ thứ yếu sau công tác tuần tra giao thông công cộng",
          "C": "Chỉ là nhiệm vụ định kỳ vào các năm tổ chức bầu cử đại biểu Quốc hội"
        },
        "key": "A"
      },
      {
        "global_id": 358,
        "lesson_id": 11,
        "id": 7,
        "q": "Bảo vệ an ninh dân tộc là bảo vệ gì?",
        "options": {
          "A": "Tách rời các buôn làng vùng cao khỏi sự quản lý của chính quyền địa phương",
          "B": "Bảo vệ quyền bình đẳng, đoàn kết giữa các dân tộc; giữ vững ổn định chính trị, xã hội vùng đồng bào dân tộc thiểu số, đập tan âm mưu chia rẽ khối đại đoàn kết toàn dân tộc",
          "C": "Bảo vệ độc quyền ngôn ngữ của một nhóm sắc tộc thiểu số duy nhất"
        },
        "key": "B"
      },
      {
        "global_id": 359,
        "lesson_id": 11,
        "id": 8,
        "q": "Bảo vệ an ninh tôn giáo là bảo vệ gì?",
        "options": {
          "A": "Ưu tiên cấp đặc quyền tài chính riêng cho một tôn giáo được chọn",
          "B": "Bảo đảm quyền tự do tín ngưỡng, tôn giáo của nhân dân theo pháp luật; chủ động phòng ngừa, đấu tranh chống âm mưu lợi dụng tôn giáo để xâm phạm an ninh quốc gia",
          "C": "Cấm đoán triệt để mọi hoạt động thờ cúng và lễ nghi tín ngưỡng lành mạnh"
        },
        "key": "B"
      },
      {
        "global_id": 360,
        "lesson_id": 11,
        "id": 9,
        "q": "Bảo vệ an ninh văn hóa, tư tưởng ở ta là bảo vệ gì?",
        "options": {
          "A": "Ngăn cấm việc học tập và sử dụng các ngoại ngữ phổ biến trên thế giới",
          "B": "Kiểm duyệt xóa bỏ toàn bộ các công trình văn học cổ điển phương Tây",
          "C": "Bảo vệ nền tảng tư tưởng của Đảng (Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh), giữ gìn bản sắc văn hóa dân tộc, chống sự xâm lăng và suy đồi văn hóa"
        },
        "key": "C"
      },
      {
        "global_id": 361,
        "lesson_id": 11,
        "id": 10,
        "q": "Bảo vệ an ninh biên giới là ở ta là bảo vệ gì?",
        "options": {
          "A": "Bảo vệ chủ quyền lãnh thổ, mốc quốc giới, an ninh trật tự khu vực biên giới trên đất liền, trên biển và trên không",
          "B": "Xây tường ngăn cách dòng chảy các con sông tự nhiên qua biên giới",
          "C": "Chỉ quan tâm thu thuế hàng hóa qua các cửa khẩu chính thức"
        },
        "key": "A"
      },
      {
        "global_id": 362,
        "lesson_id": 11,
        "id": 12,
        "q": "Đối tác của Việt Nam trong tình hình mới được Đảng ta xác định thế nào?",
        "options": {
          "A": "Chỉ gồm các quốc gia có chung đường biên giới trên đất liền với nước ta",
          "B": "Tất cả các tổ chức sẵn sàng cung cấp viện trợ quân sự miễn phí",
          "C": "Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác bình đẳng, cùng có lợi với Việt Nam đều là đối tác của chúng ta"
        },
        "key": "C"
      },
      {
        "global_id": 363,
        "lesson_id": 11,
        "id": 13,
        "q": "Đối tượng của Việt Nam trong tình hình mới được Đảng ta xác định thế nào?",
        "options": {
          "A": "Những quốc gia không đồng tình với biểu quyết của ta tại các hội nghị quốc tế",
          "B": "Tất cả các doanh nghiệp nước ngoài đang đầu tư kinh doanh tại Việt Nam",
          "C": "Bất kỳ thế lực nào có âm mưu và hành động chống phá mục tiêu của nước ta trong sự nghiệp xây dựng và bảo vệ Tổ quốc đều là đối tượng đấu tranh của chúng ta"
        },
        "key": "C"
      },
      {
        "global_id": 364,
        "lesson_id": 11,
        "id": 14,
        "q": "Đối tượng bảo vệ của công tác bảo vệ an ninh chính trị gồm nội dung nào sau đây?",
        "options": {
          "A": "Chỉ bảo vệ các khu vực danh lam thắng cảnh được UNESCO công nhận",
          "B": "Bảo vệ tài sản riêng của các cổ đông công ty chứng khoán tư nhân",
          "C": "Bảo vệ chế độ chính trị, Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam, các cơ quan ban ngành và cán bộ, đảng viên"
        },
        "key": "C"
      },
      {
        "global_id": 365,
        "lesson_id": 11,
        "id": 15,
        "q": "Mục đích của công tác bảo vệ an ninh chính trị nội bộ là bảo vệ gì?",
        "options": {
          "A": "Bảo vệ sự trong sạch, vững mạnh về chính trị, tư tưởng và tổ chức của Đảng, bảo vệ bí mật nội bộ, ngăn chặn sự suy thoái, tự diễn biến, tự chuyển hóa",
          "B": "Ngăn cấm cán bộ cơ quan nhà nước tham gia các hoạt động thể thao",
          "C": "Bảo vệ quyền lợi kinh doanh độc quyền của các tập đoàn kinh tế nhà nước"
        },
        "key": "A"
      },
      {
        "global_id": 366,
        "lesson_id": 11,
        "id": 16,
        "q": "Bảo vệ an ninh chính trị, kinh tế, văn hóa tư tưởng; lực lượng nào xác định là lực lượng nòng cốt?",
        "options": {
          "A": "Hiệp hội các nhà báo và xuất bản sách tư nhân",
          "B": "Lực lượng bảo vệ các tòa nhà chung cư thương mại",
          "C": "Lực lượng Công an nhân dân (dưới sự lãnh đạo của Đảng và quản lý của Nhà nước)"
        },
        "key": "C"
      },
      {
        "global_id": 367,
        "lesson_id": 11,
        "id": 17,
        "q": "Chủ thể trực tiếp, lực lượng nòng cốt trong bảo vệ an ninh, trật tự là lực lượng nào?",
        "options": {
          "A": "Công an nhân dân",
          "B": "Hội đồng hòa giải cấp thôn xóm",
          "C": "Đội tuần tra phòng cháy chữa cháy tình nguyện"
        },
        "key": "A"
      },
      {
        "global_id": 368,
        "lesson_id": 11,
        "id": 18,
        "q": "Trật tự, an toàn xã hội là?",
        "options": {
          "A": "Việc giải tỏa trắng toàn bộ các khu chợ truyền thống ven sông",
          "B": "Trạng thái xã hội có trật tự, kỷ cương trong đó mọi người đều tuân thủ các quy tắc đạo đức, chuẩn mực pháp luật và nếp sống văn minh",
          "C": "Tình trạng giới nghiêm không ai được phép ra đường sau 22 giờ đêm"
        },
        "key": "B"
      },
      {
        "global_id": 369,
        "lesson_id": 11,
        "id": 19,
        "q": "Bảo đảm Trật tự an toàn xã hội là?",
        "options": {
          "A": "Chỉ thực hiện công tác dọn dẹp vệ sinh môi trường sau các ngày lễ tết",
          "B": "Thu phí dịch vụ giữ xe tại các điểm công cộng",
          "C": "Hoạt động phòng ngừa, phát hiện, đấu tranh ngăn chặn và xử lý các hành vi vi phạm pháp luật về trật tự an toàn xã hội, các loại tội phạm và tệ nạn xã hội"
        },
        "key": "C"
      },
      {
        "global_id": 370,
        "lesson_id": 11,
        "id": 20,
        "q": "Trong các lĩnh vực an ninh quốc gia sau đây, lĩnh vực nào được xác định là cốt lõi, xuyên suốt nhất?",
        "options": {
          "A": "An ninh chính trị (đặc biệt là an ninh chính trị nội bộ)",
          "B": "An ninh mạng xã hội giải trí",
          "C": "An ninh thị trường bán lẻ hàng tiêu dùng"
        },
        "key": "A"
      },
      {
        "global_id": 371,
        "lesson_id": 11,
        "id": 21,
        "q": "Lực lượng nào chuyên trách bảo vệ an ninh trên biển của nước ta hiện nay?",
        "options": {
          "A": "Đội cứu hộ các khu nghỉ dưỡng sinh thái ven biển",
          "B": "Cảnh sát biển Việt Nam, Hải quân nhân dân và Bộ đội Biên phòng (trong phạm vi địa bàn phụ trách)",
          "C": "Các hợp tác xã nuôi trồng thủy sản ven bờ"
        },
        "key": "B"
      },
      {
        "global_id": 372,
        "lesson_id": 11,
        "id": 22,
        "q": "“Bảo vệ môi trường” là một trong những nội dung của công tác:",
        "options": {
          "A": "Nội quy sát hạch cấp giấy phép lái xe ô tô",
          "B": "Tiêu chuẩn đánh giá kỹ thuật hàn kim loại công nghiệp",
          "C": "Bảo đảm an ninh phi truyền thống và trật tự, an toàn xã hội"
        },
        "key": "C"
      },
      {
        "global_id": 373,
        "lesson_id": 11,
        "id": 23,
        "q": "Để bảo đảm thắng lợi hoàn toàn và triệt để trong cuộc đấu tranh bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội, lực lượng công an phải:",
        "options": {
          "A": "Ủy quyền điều tra cho các văn phòng thám tử tư nhân",
          "B": "Hoạt động hoàn toàn độc lập, khép kín, tuyệt đối không cho quần chúng nhân dân tham gia",
          "C": "Dựa vào nhân dân, phát huy sức mạnh tổng hợp của toàn dân tộc và cả hệ thống chính trị, tuyệt đối trung thành với Đảng và Tổ quốc"
        },
        "key": "C"
      },
      {
        "global_id": 374,
        "lesson_id": 11,
        "id": 24,
        "q": "Một trong những quan điểm của Đảng, Nhà nước trong công tác bảo vệ an ninh quốc gia, trật tự, an toàn xã hội là:",
        "options": {
          "A": "Ưu tiên giải quyết xung đột bằng biện pháp bạo lực vũ trang ngoài tầm kiểm soát của luật pháp",
          "B": "Cắt giảm tối đa ngân sách mua sắm phương tiện nghiệp vụ của lực lượng an ninh",
          "C": "Phát huy sức mạnh của khối đại đoàn kết toàn dân tộc; kết hợp chặt chẽ an ninh với quốc phòng và đối ngoại"
        },
        "key": "C"
      },
      {
        "global_id": 375,
        "lesson_id": 11,
        "id": 25,
        "q": "Mối quan hệ giữa bảo vệ an ninh quốc gia và giữ gìn trật tự, an toàn xã hội là:",
        "options": {
          "A": "Mối quan hệ gắn bó mật thiết, tác động qua lại lẫn nhau; an ninh quốc gia vững chắc là điều kiện để ổn định trật tự xã hội và ngược lại",
          "B": "Hai nhiệm vụ đối lập triệt tiêu nhau trong quản lý hành chính",
          "C": "Hai lĩnh vực hoàn toàn riêng biệt do các quốc gia khác nhau quản lý"
        },
        "key": "A"
      },
      {
        "global_id": 376,
        "lesson_id": 11,
        "id": 26,
        "q": "Nội dung nào thể hiện quan điểm của Đảng, Nhà nước ta trong bảo vệ an ninh quốc gia, trật tự, an toàn xã hội?",
        "options": {
          "A": "Thả nổi không gian mạng để cộng đồng mạng tự điều chỉnh",
          "B": "Chờ đợi đối tượng phạm tội hoàn thành hành vi nguy hiểm mới tiến hành răn đe",
          "C": "Chủ động phòng ngừa, kiên quyết đấu tranh; giữ vững bên trong là chính, kết hợp chặt chẽ giữa phòng ngừa xã hội với phòng ngừa nghiệp vụ"
        },
        "key": "C"
      },
      {
        "global_id": 377,
        "lesson_id": 11,
        "id": 27,
        "q": "Một trong những nội dung giữ gìn trật tự an toàn xã hội là :",
        "options": {
          "A": "Kiểm tra chất lượng may mặc tại các cửa hàng thời trang cao cấp",
          "B": "Đấu tranh phòng, chống các loại tội phạm và bài trừ các tệ nạn xã hội (ma túy, cờ bạc, mại dâm...)",
          "C": "Bảo đảm cung cấp nguồn nước ngọt miễn phí cho các khu nghỉ dưỡng"
        },
        "key": "B"
      },
      {
        "global_id": 378,
        "lesson_id": 11,
        "id": 28,
        "q": "Nội dung nào thể hiện quan điểm của Đảng, Nhà nước ta trong bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội?",
        "options": {
          "A": "Đình chỉ mọi hoạt động xuất nhập khẩu hàng hóa để bảo đảm an ninh tuyệt đối",
          "B": "Chỉ tập trung bảo vệ an ninh tại các cơ quan ngoại giao nước ngoài",
          "C": "Kết hợp chặt chẽ giữa bảo vệ an ninh quốc gia với xây dựng và phát triển kinh tế, văn hóa, xã hội và thực hiện chính sách đối ngoại"
        },
        "key": "C"
      },
      {
        "global_id": 379,
        "lesson_id": 11,
        "id": 29,
        "q": "“Đảng lãnh đạo trực tiếp về mọi mặt là nhân tố quyết định thắng lợi của cuộc đấu tranh bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội” là một trong những nội dung thể hiện:",
        "options": {
          "A": "Tiêu chuẩn kiểm định xe cơ giới cơ bản",
          "B": "Kế hoạch luân chuyển công tác cán bộ hải quan",
          "C": "Nguyên tắc cơ bản nhất trong sự nghiệp bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội"
        },
        "key": "C"
      },
      {
        "global_id": 380,
        "lesson_id": 11,
        "id": 30,
        "q": "“Bảo vệ sự ổn định, phát triển vững mạnh của nền kinh tế thị trường nhiều thành phần theo định hướng xã hội chủ nghĩa” là một nội dung của:",
        "options": {
          "A": "Quy chế tổ chức hội chợ xúc tiến thương mại quốc tế",
          "B": "Nhiệm vụ bảo vệ an ninh kinh tế trong công tác bảo vệ an ninh quốc gia",
          "C": "Điều lệ hoạt động của liên minh các hợp tác xã bán buôn"
        },
        "key": "B"
      },
      {
        "global_id": 381,
        "lesson_id": 11,
        "id": 31,
        "q": "“Phòng ngừa tai nạn lao động, phòng chống thiên tai, dịch bệnh” là một trong những nội dung của:",
        "options": {
          "A": "Công tác bảo đảm trật tự, an toàn xã hội và phòng thủ dân sự",
          "B": "Hồ sơ đề nghị cấp phép xuất bản tạp chí văn nghệ",
          "C": "Chương trình huấn luyện sĩ quan pháo binh phản lực"
        },
        "key": "A"
      },
      {
        "global_id": 382,
        "lesson_id": 11,
        "id": 32,
        "q": "Đối tượng xâm phạm đến an ninh quốc gia trong tình hình hiện nay là:",
        "options": {
          "A": "Các thế lực thù địch, phản động, gián điệp, tình báo nước ngoài và các phần tử cơ hội chính trị chống phá sự nghiệp cách mạng nước ta",
          "B": "Những người dân tham gia đóng góp ý kiến xây dựng luật pháp",
          "C": "Các chuyên gia nước ngoài đang giảng dạy ngôn ngữ tại các trường đại học"
        },
        "key": "A"
      },
      {
        "global_id": 383,
        "lesson_id": 11,
        "id": 33,
        "q": "Đâu là lực lượng phản động?",
        "options": {
          "A": "Những người lao động kiến nghị về chế độ bảo hiểm y tế cơ sở",
          "B": "Các tổ chức từ thiện tham gia cứu trợ bão lũ thiên tai",
          "C": "Những cá nhân, tổ chức có hành vi chống đối lại Nhà nước Cộng hòa XHCN Việt Nam, âm mưu lật đổ chính quyền nhân dân"
        },
        "key": "C"
      },
      {
        "global_id": 384,
        "lesson_id": 11,
        "id": 34,
        "q": "Đâu không phải là đối tượng xâm phạm về trật tự an toàn xã hội?",
        "options": {
          "A": "Tội phạm cướp giật tài sản, trộm cắp và cưỡng đoạt tài sản",
          "B": "Tội phạm buôn bán, tàng trữ và sử dụng trái phép chất ma túy",
          "C": "Người dân tự giác chấp hành tốt luật giao thông và tham gia tổ bảo vệ an ninh thôn xóm"
        },
        "key": "C"
      },
      {
        "global_id": 385,
        "lesson_id": 11,
        "id": 35,
        "q": "Đâu không phải nội dung bảo đảm trật tự an toàn xã hội?",
        "options": {
          "A": "Phòng cháy, chữa cháy, cứu nạn, cứu hộ và bảo vệ môi trường",
          "B": "Bảo đảm trật tự an toàn giao thông đường bộ, đường sắt và đường thủy",
          "C": "Tuyên truyền kích động người dân biểu tình trái phép gây rối an ninh trật tự công cộng"
        },
        "key": "C"
      },
      {
        "global_id": 386,
        "lesson_id": 11,
        "id": 36,
        "q": "Hiến pháp 2013 của nước Cộng hòa xã hội chủ nghĩa Việt Nam khẳng định bảo vệ Tổ quốc là?",
        "options": {
          "A": "Trách nhiệm riêng biệt của cán bộ công chức cơ quan hành chính",
          "B": "Công việc tình nguyện tùy ý theo sở thích cá nhân",
          "C": "Nghĩa vụ thiêng liêng và quyền cao quý của công dân"
        },
        "key": "C"
      }
    ]
  }
];
