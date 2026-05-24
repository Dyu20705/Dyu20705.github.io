---
title: 'Checklist bảo mật cơ bản trước khi public service'
description: 'Một checklist ngắn để rà lại ingress, secret, logging và quyền truy cập trước khi đưa service lên internet.'
pubDate: 'May 24 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

Trước khi public một service, tôi thường đi qua một checklist rất ngắn nhưng hiệu quả. Mục tiêu không phải là đạt “an toàn tuyệt đối” mà là loại bỏ những lỗi cơ bản dễ bị bỏ sót.

## 1. Kiểm tra ingress và port mở

Chỉ mở đúng port cần thiết, kiểm tra reverse proxy có đang chặn directory listing, và xác nhận route nội bộ không bị public nhầm.

## 2. Soát secret và biến môi trường

Không để token, khóa API hoặc thông tin kết nối xuất hiện trong log, file backup hay repo cũ. Nếu secret từng bị commit, cần xem như đã lộ và rotate.

## 3. Xem lại quyền truy cập

Tài khoản service nên có quyền tối thiểu cần thiết. Không dùng một credential duy nhất cho toàn bộ thành phần nếu có thể tách nhỏ.

## 4. Kiểm tra logging

Log cần đủ để debug nhưng không được chứa dữ liệu nhạy cảm. Những gì ghi ra file hay gửi về hệ thống tập trung đều cần xem như có khả năng bị truy cập bởi nhiều người hơn dự kiến.

## 5. Chuẩn bị đường lui

Mỗi lần public service nên đi cùng rollback plan cơ bản: biết tắt ở đâu, chặn ở đâu và xác minh lại trạng thái như thế nào nếu cần rút nhanh khỏi internet.
