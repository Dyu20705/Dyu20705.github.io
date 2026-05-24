---
title: 'Observability không phải phần cộng thêm'
description: 'Vì sao log, metrics và tracing nên được nghĩ cùng lúc với design thay vì thêm vào sau.'
pubDate: 'May 14 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

Rất nhiều hệ thống chỉ bắt đầu thêm monitoring khi đã có lỗi thật. Cách đó làm team luôn phản ứng chậm vì đến lúc cần dữ liệu thì cấu trúc log, metrics và trace đều chưa đủ dùng.

Tôi xem observability là một phần của thiết kế hệ thống. Một endpoint quan trọng nên có log đủ ngữ cảnh, metrics phản ánh trạng thái thật và trace giúp nhìn ra nút thắt giữa các service.

Khi nhìn hệ thống theo cách này, việc vận hành bớt cảm tính hơn. Team có thể rollback nhanh, khoanh vùng lỗi tốt hơn và đưa ra quyết định dựa trên tín hiệu thay vì phỏng đoán.
