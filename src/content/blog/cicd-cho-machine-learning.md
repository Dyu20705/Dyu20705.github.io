---
title: 'CI/CD cho machine learning / CI/CD for Machine Learning'
description: 'CI/CD trong ML cần kiểm tra cả code, dữ liệu, pipeline và artifact chứ không chỉ build ứng dụng.'
pubDate: '2026-06-17'
---

## VI

CI/CD cho phần mềm thường kiểm tra lint, test, build và deploy. Với machine learning, pipeline có thêm nhiều nguồn rủi ro: schema dữ liệu đổi, phân phối dữ liệu lệch, metric giảm, artifact thiếu metadata hoặc môi trường training không giống môi trường serving.

Một workflow nhỏ có thể bắt đầu bằng các kiểm tra nhẹ: format code, unit test cho preprocessing, kiểm tra schema dữ liệu mẫu, chạy training smoke test trên subset nhỏ và xác nhận artifact được tạo đúng nơi. Những bước này không thay thế evaluation đầy đủ, nhưng giúp phát hiện lỗi sớm.

Điểm khác biệt lớn là không phải commit nào cũng nên train model lớn. CI có thể chạy kiểm tra nhanh, còn pipeline training đầy đủ có thể chạy theo lịch, theo tag hoặc khi dữ liệu thay đổi. Điều này giữ feedback nhanh mà vẫn kiểm soát chất lượng model.

Tôi xem CI/CD cho ML là cách tạo kỷ luật cho thử nghiệm: mỗi thay đổi nên để lại dấu vết, có kiểm tra phù hợp và có đường quay lại khi kết quả không ổn.

## EN

Software CI/CD often checks linting, tests, builds, and deployment. Machine learning adds more risk sources: changing data schemas, shifted distributions, lower metrics, missing artifact metadata, or a training environment that differs from serving.

A small workflow can start with lightweight checks: code formatting, preprocessing unit tests, sample data schema validation, a smoke training run on a small subset, and artifact path validation. These steps do not replace full evaluation, but they catch issues earlier.

Not every commit should trigger expensive model training. CI can run fast checks, while full training can run on a schedule, on tags, or when data changes. That keeps feedback fast while still controlling model quality.

I see ML CI/CD as discipline for experimentation: every change should leave a trace, receive suitable checks, and have a path back when the result is not good.
