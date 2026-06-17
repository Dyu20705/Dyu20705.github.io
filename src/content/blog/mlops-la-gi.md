---
title: 'MLOps là gì? / What MLOps Means'
description: 'Vì sao một model tốt chưa đủ nếu thiếu pipeline, triển khai, giám sát và khả năng bảo trì.'
pubDate: '2026-06-17'
---

## VI

Một model có metric tốt trong notebook mới chỉ chứng minh rằng ý tưởng có tín hiệu. Để model đó hữu ích trong một sản phẩm hoặc quy trình thật, ta cần biết dữ liệu đến từ đâu, cách training được chạy lại, artifact được lưu thế nào, model được triển khai ra sao và ai sẽ phát hiện khi chất lượng giảm.

MLOps nằm ở giao điểm giữa machine learning, software engineering và operations. Với tôi, MLOps không phải là một danh sách công cụ; nó là cách biến thử nghiệm ML thành một hệ thống có vòng đời rõ ràng. Pipeline cần đủ dễ hiểu để người khác tái chạy. Deployment cần đủ nhất quán để không phụ thuộc vào máy cá nhân. Monitoring cần đủ sớm để phát hiện drift, latency hoặc lỗi dữ liệu.

Trong portfolio cá nhân, tôi đang xây nền từ những phần nhỏ: Git workflow, Docker, CI/CD, backend, logging và cách mô tả dự án trung thực. Những nền tảng này giúp tôi tiến dần từ “model chạy được” đến “hệ thống ML có thể kiểm chứng”.

## EN

A model with strong notebook metrics only proves that the idea has signal. To make it useful in a real product or workflow, we need to know where the data comes from, how training can be rerun, how artifacts are stored, how the model is deployed, and how people will notice when quality drops.

MLOps sits between machine learning, software engineering, and operations. To me, it is not just a list of tools; it is a way to turn ML experiments into systems with a clear lifecycle. Pipelines should be understandable enough to rerun. Deployments should be consistent enough to avoid depending on one local machine. Monitoring should surface drift, latency, and data issues early.

In my portfolio, I am building the foundation through smaller pieces: Git workflows, Docker, CI/CD, backend work, logging, and honest project documentation. These foundations help me move from “the model runs” toward “the ML system can be verified.”
