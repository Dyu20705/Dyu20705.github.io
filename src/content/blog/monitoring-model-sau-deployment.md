---
title: 'Monitoring model sau deployment / Monitoring Models After Deployment'
description: 'Drift, latency, errors và data quality là các tín hiệu cần theo dõi khi model đã rời notebook.'
pubDate: '2026-06-17'
---

## VI

Khi model đã được deploy, câu hỏi không còn là “metric offline có tốt không” mà là “hệ thống đang hoạt động như thế nào trong điều kiện thật”. Monitoring giúp ta nhìn thấy sự khác biệt giữa môi trường thử nghiệm và môi trường sử dụng.

Một vài tín hiệu cơ bản gồm latency, error rate, throughput, tỷ lệ request thiếu dữ liệu, phân phối feature, phân phối prediction và metric nghiệp vụ nếu có nhãn trễ. Với bài toán nhỏ, chỉ cần logging có cấu trúc và dashboard đơn giản cũng đã tốt hơn nhiều so với không quan sát gì.

Drift không luôn có nghĩa model sai ngay lập tức. Nó là tín hiệu để kiểm tra: dữ liệu đầu vào có đổi không, người dùng có hành vi mới không, pipeline preprocessing có lệch không hoặc task ban đầu có còn phù hợp không.

Monitoring tốt cũng cần action rõ ràng. Khi phát hiện lỗi, hệ thống nên có cách rollback, cảnh báo, ghi lại mẫu lỗi và tạo điều kiện cho vòng retraining hoặc đánh giá lại.

## EN

After deployment, the question is no longer only “is the offline metric good?” but “how is the system behaving under real conditions?” Monitoring helps reveal the difference between experimentation and actual usage.

Basic signals include latency, error rate, throughput, missing input fields, feature distributions, prediction distributions, and business metrics when delayed labels exist. For small projects, structured logging and a simple dashboard are already much better than no visibility.

Drift does not always mean the model is immediately wrong. It is a signal to investigate whether input data changed, users behave differently, preprocessing shifted, or the original task is no longer aligned.

Good monitoring also needs clear action. When an issue appears, the system should support rollback, alerting, sample capture, and a path toward retraining or reevaluation.
