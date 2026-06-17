---
title: 'Versioning và experiment tracking / Versioning and Experiment Tracking'
description: 'Data versioning, model versioning và experiment tracking giúp ML workflow bớt mơ hồ như thế nào.'
pubDate: '2026-06-17'
---

## VI

Trong phần mềm truyền thống, Git giúp ta biết dòng code nào tạo ra một phiên bản. Với machine learning, code chỉ là một phần. Kết quả còn phụ thuộc vào dữ liệu, tham số, seed, môi trường chạy và cách đánh giá.

Vì vậy, một experiment nên lưu tối thiểu: commit hash, config, dataset version, metric, artifact path và ghi chú ngắn về mục tiêu thử nghiệm. Khi kết quả tốt hơn hoặc tệ hơn, ta có đủ thông tin để giải thích thay vì đoán.

Model versioning cũng không nên chỉ là tên file như `model_final_final.pkl`. Một artifact cần gắn với metadata: được train từ dữ liệu nào, metric nào được dùng, có hạn chế gì và có phù hợp để deploy hay chỉ để nghiên cứu.

Ở mức portfolio, tôi ưu tiên thói quen trước công cụ: đặt tên run rõ ràng, lưu config, ghi lại quyết định và mô tả trạng thái dự án trung thực. Khi dự án lớn hơn, các thói quen đó có thể nối tiếp sang MLflow, DVC hoặc registry chuyên dụng.

## EN

In traditional software, Git tells us which code produced a version. In machine learning, code is only one part. Results also depend on data, parameters, seeds, runtime environment, and evaluation logic.

An experiment should at least record the commit hash, config, dataset version, metrics, artifact path, and a short note about the experiment goal. When a result improves or regresses, we have enough context to reason instead of guessing.

Model versioning should not be a filename like `model_final_final.pkl`. An artifact needs metadata: which data trained it, which metrics were used, what limitations it has, and whether it is suitable for deployment or only research.

At portfolio scale, I prioritize habits before tools: clear run names, saved configs, documented decisions, and honest project status. As projects grow, those habits can connect to MLflow, DVC, or a dedicated registry.
