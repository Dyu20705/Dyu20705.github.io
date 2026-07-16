---
title: Data Pipeline
slug: data-pipeline
featured: true
priority: 2
status: work-in-progress
statusLabel:
  vi: Work in progress · private repository
  en: Work in progress · private repository
domain:
  vi: Data engineering · MLOps foundations
  en: Data engineering · MLOps foundations
value:
  vi: Một data lake local-first theo luồng bronze–silver–gold để thực hành ingestion có thể chạy lại, data quality và lineage trước khi thêm lớp ML.
  en: A local-first bronze–silver–gold data lake for practicing replayable ingestion, data quality, and lineage before adding ML workloads.
problem:
  vi: Pipeline demo thường chỉ chứng minh happy path; chúng ít thể hiện replay, quarantine, schema drift và khả năng điều tra khi dữ liệu sai.
  en: Pipeline demos often prove only the happy path and omit replay, quarantine, schema drift, and investigation when data is wrong.
context:
  vi: Đây là dự án đang xây dựng. Repository hiện để private và chưa có benchmark hoặc production deployment để công bố.
  en: This project is under active development. Its repository is currently private and there is no published benchmark or production deployment.
constraints:
  - vi: Chạy local trên laptop 16 GB RAM, không phụ thuộc cloud trả phí.
    en: Run locally on a 16 GB RAM laptop without paid cloud dependencies.
  - vi: Bronze phải bất biến và có ingestion metadata để replay.
    en: Bronze data must remain immutable and carry ingestion metadata for replay.
  - vi: Record lỗi phải đi vào quarantine thay vì bị bỏ qua âm thầm.
    en: Invalid records must enter quarantine instead of being silently dropped.
role:
  vi: Thiết kế repository, data zones, ingestion contracts, validation flow và kế hoạch quan sát pipeline.
  en: Designed the repository, data zones, ingestion contracts, validation flow, and pipeline observability plan.
architecture:
  - vi: Sources gồm PostgreSQL, API, clickstream, logs và partner files đi vào bronze immutable.
    en: PostgreSQL, API, clickstream, logs, and partner files enter immutable bronze storage.
  - vi: Silver chuẩn hóa schema, type, deduplication và tách record lỗi sang quarantine.
    en: Silver normalizes schemas and types, removes duplicates, and separates invalid records into quarantine.
  - vi: Gold tạo các bảng phục vụ sales, customer, inventory và campaign analysis.
    en: Gold produces tables for sales, customer, inventory, and campaign analysis.
decisions:
  - vi: Dùng Parquet và object-store layout rõ trước khi cân nhắc orchestration phức tạp.
    en: Use Parquet and an explicit object-store layout before adopting complex orchestration.
  - vi: Ưu tiên idempotency, checkpoints và reproducible seed data hơn số lượng connector.
    en: Prioritize idempotency, checkpoints, and reproducible seed data over connector count.
  - vi: Chưa gọi là MLOps platform cho đến khi có workload ML và evidence vòng đời model.
    en: Do not call it an MLOps platform until an ML workload and model-lifecycle evidence exist.
validation:
  - vi: Planned validation gồm schema checks, row-count reconciliation, duplicate detection và deterministic fixtures.
    en: Planned validation includes schema checks, row-count reconciliation, duplicate detection, and deterministic fixtures.
  - vi: Clean checkout phải có một lệnh tạo seed data và chạy pipeline end to end.
    en: A clean checkout should provide one command to generate seed data and run the pipeline end to end.
observability:
  - vi: Planned metrics gồm records read/written/rejected, stage duration và checkpoint state.
    en: Planned metrics include records read/written/rejected, stage duration, and checkpoint state.
security:
  - vi: Dùng dữ liệu tổng hợp; secret chỉ đi qua environment và không commit vào repository.
    en: Use synthetic data; secrets belong in the environment and must not be committed.
failureModes:
  - vi: Source unavailable, schema drift, partial write, duplicate ingestion và corrupt partner file.
    en: Source unavailability, schema drift, partial writes, duplicate ingestion, and corrupt partner files.
results:
  - vi: Chưa có metric được công bố. Portfolio chỉ trình bày scope, architecture và tiêu chí validation hiện tại.
    en: No metrics are published. The portfolio currently presents the scope, architecture, and validation criteria only.
learned:
  - vi: Tính vận hành của pipeline bắt đầu từ metadata, replay và failure handling, không phải từ dashboard.
    en: Pipeline operability starts with metadata, replay, and failure handling—not with a dashboard.
next:
  - vi: Public hóa một MVP có seed data, Docker Compose, data-quality report và architecture diagram.
    en: Publish an MVP with seed data, Docker Compose, a data-quality report, and an architecture diagram.
stack:
  - Python
  - PostgreSQL
  - MinIO
  - Parquet
  - Docker Compose
evidence:
  - label:
      vi: Architecture và validation backlog đang được triển khai
      en: Architecture and validation backlog in progress
updated: 2026-07-16
---

This case study deliberately separates implemented evidence from planned validation.
