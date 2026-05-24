---
title: 'Thiết kế từ failure mode trước khi scale'
description: 'Cách tôi nhìn hệ thống từ điểm lỗi, giới hạn tài nguyên và hành vi khi dependency không ổn định.'
pubDate: 'May 08 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

Khi một hệ thống bắt đầu phục vụ người dùng thật, phần quan trọng không còn là giao diện đẹp hay không mà là nó hỏng như thế nào khi chịu tải hoặc khi dependency bên dưới gặp sự cố.

Tôi thường bắt đầu từ một số câu hỏi rất cơ bản: request chậm thì timeout ra sao, service chết một phần thì người dùng còn làm được gì, dữ liệu nào có thể cache an toàn, và chỗ nào cần degrade thay vì fail cứng.

Khi boundary của hệ thống được vẽ rõ, mọi thứ phía sau dễ quản hơn: rollout an toàn hơn, debug nhanh hơn và mỗi lần thay đổi không biến thành một đợt tăng rủi ro.
