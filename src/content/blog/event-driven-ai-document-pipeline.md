---
title: 'Event-driven AI document pipeline / Event-driven AI Document Pipeline'
description: 'Một cách thiết kế pipeline xử lý tài liệu AI bằng event, queue, worker và monitoring.'
pubDate: '2026-06-17'
---

## VI

Một pipeline xử lý tài liệu AI thường có nhiều bước: upload file, kiểm tra định dạng, trích xuất text, chạy model, lưu kết quả và thông báo trạng thái. Nếu tất cả nằm trong một request đồng bộ, hệ thống dễ timeout và khó retry từng bước.

Kiến trúc event-driven tách các bước bằng event hoặc queue. Khi file được upload, hệ thống phát event `document.uploaded`. Worker trích xuất text xử lý event đó và phát tiếp `document.text_extracted`. Worker inference nhận event mới, chạy model và lưu output.

```text
Upload -> Queue -> Extract worker -> Queue -> Inference worker -> Result store
```

Cách này giúp mỗi worker có trách nhiệm nhỏ hơn, retry dễ hơn và monitoring rõ hơn. Ta có thể đo thời gian từng bước, số job lỗi, số job đang chờ và loại tài liệu gây lỗi nhiều nhất.

Đối với portfolio MLOps, thiết kế như vậy là bài tập tốt vì nó kết nối backend, queue, artifact, model serving và observability. Dù chưa gọi là sản phẩm hoàn thiện, nó thể hiện tư duy biến AI workflow thành hệ thống vận hành được.

## EN

An AI document-processing pipeline often has many steps: file upload, format validation, text extraction, model inference, result storage, and status notification. If everything stays inside one synchronous request, the system can time out and each step becomes harder to retry.

An event-driven architecture separates steps through events or queues. When a file is uploaded, the system emits `document.uploaded`. A text-extraction worker handles that event and emits `document.text_extracted`. An inference worker receives the next event, runs the model, and stores the output.

This design gives each worker a smaller responsibility, makes retries easier, and improves monitoring. We can measure step latency, failed jobs, queued jobs, and which document types fail most often.

For an MLOps portfolio, this is a valuable design exercise because it connects backend work, queues, artifacts, model serving, and observability. Even if it is not a finished product, it shows how an AI workflow can become an operable system.
