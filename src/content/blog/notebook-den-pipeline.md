---
title: 'Từ notebook đến pipeline ML / From Notebook to ML Pipeline'
description: 'Cách tách thử nghiệm ML thành dữ liệu, training, evaluation và artifact để kết quả dễ tái lập hơn.'
pubDate: '2026-06-17'
---

## VI

Notebook rất tốt cho khám phá nhanh, nhưng dễ trở thành nơi mọi thứ trộn lẫn: đọc dữ liệu, xử lý, training, evaluation và ghi chú kết quả. Khi một thử nghiệm cần được chạy lại, việc phụ thuộc vào thứ tự cell hoặc trạng thái ẩn khiến kết quả khó tin cậy.

Một pipeline ML tối thiểu nên tách rõ các bước: chuẩn bị dữ liệu, biến đổi dữ liệu, training, evaluation và lưu artifact. Ngay cả khi chưa dùng orchestration phức tạp, một cấu trúc thư mục rõ, script có tham số và file cấu hình đã giúp giảm nhiều rủi ro.

Ví dụ một workflow nhỏ có thể bắt đầu như sau:

```bash
python scripts/prepare_data.py --config configs/local.yaml
python scripts/train.py --config configs/local.yaml
python scripts/evaluate.py --run-id latest
```

Điểm quan trọng không phải là dùng công cụ lớn ngay lập tức. Điểm quan trọng là mỗi bước có input, output và trách nhiệm riêng. Khi đó, ta dễ debug hơn, dễ so sánh experiment hơn và dễ đưa pipeline vào CI/CD hơn.

## EN

Notebooks are excellent for quick exploration, but they can easily mix everything together: data loading, preprocessing, training, evaluation, and notes. When an experiment needs to be rerun, hidden state and cell order make the result harder to trust.

A minimal ML pipeline should separate data preparation, transformation, training, evaluation, and artifact storage. Even without advanced orchestration, a clear folder structure, parameterized scripts, and configuration files already reduce risk.

The goal is not to adopt a large platform too early. The goal is to give each step its own inputs, outputs, and responsibility. That makes debugging easier, experiment comparison cleaner, and future CI/CD integration more practical.
