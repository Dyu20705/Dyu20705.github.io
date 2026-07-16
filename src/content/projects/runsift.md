---
title: RunSift
slug: runsift
featured: true
priority: 1
status: prototype
statusLabel:
  vi: Prototype đang phát triển
  en: Prototype in development
domain:
  vi: CI/CD · Developer tooling · Reliability
  en: CI/CD · Developer tooling · Reliability
value:
  vi: Công cụ phân loại lỗi GitHub Actions theo hướng evidence-first, giúp rút ngắn bước đọc log và tránh kết luận thiếu căn cứ.
  en: An evidence-first GitHub Actions failure triage tool that reduces log-reading friction without hiding uncertainty.
problem:
  vi: Log CI thường dài, nhiều nhiễu và làm chậm việc tìm failed step, thông báo lỗi gốc và bối cảnh workflow.
  en: CI logs are often long and noisy, slowing down the search for the failed step, primary error, and workflow context.
context:
  vi: Dự án được xây như một developer tool nhỏ cho workflow cá nhân; chưa được trình bày như dịch vụ production hay hệ thống có quy mô lớn.
  en: The project is being built as a small developer tool for personal workflows; it is not presented as a production service or a large-scale system.
constraints:
  - vi: Kết quả phải gắn với đoạn log hoặc metadata có thể kiểm tra lại.
    en: Every conclusion should remain attached to inspectable log evidence or metadata.
  - vi: Unknown và confidence thấp là đầu ra hợp lệ, không được đoán để trông thông minh hơn.
    en: Unknown and low-confidence outcomes are valid; the tool must not guess to appear more capable.
  - vi: Ưu tiên CLI và báo cáo tĩnh để chạy local, dễ kiểm thử và phù hợp GitHub Pages.
    en: Prefer a local CLI and static reports for testability and GitHub Pages compatibility.
role:
  vi: Xác định bài toán, thiết kế luồng triage, cấu trúc bằng chứng và backlog kiểm thử.
  en: Defined the problem, designed the triage flow, evidence structure, and validation backlog.
architecture:
  - vi: Ingest workflow metadata, failed jobs, failed steps và phần log liên quan.
    en: Ingest workflow metadata, failed jobs, failed steps, and relevant log excerpts.
  - vi: Chuẩn hóa evidence thành các record nhỏ có nguồn, vị trí và loại tín hiệu.
    en: Normalize evidence into small records with source, location, and signal type.
  - vi: Phân loại failure category và tạo báo cáo có confidence, unknowns và đường dẫn bằng chứng.
    en: Classify the failure category and produce a report with confidence, unknowns, and evidence links.
decisions:
  - vi: Evidence-first thay vì chỉ sinh một bản tóm tắt tự tin nhưng khó kiểm chứng.
    en: Evidence-first output instead of a confident summary that cannot be verified.
  - vi: Static report trước dashboard động để giảm runtime, hosting và maintenance.
    en: Static reports before a live dashboard to reduce runtime, hosting, and maintenance costs.
  - vi: Tách parser, classifier và renderer để từng phần có thể kiểm thử độc lập.
    en: Separate parser, classifier, and renderer so each part can be validated independently.
validation:
  - vi: Bộ fixture cho các failure class phổ biến và trường hợp log thiếu dữ liệu.
    en: Fixture-based tests for common failure classes and incomplete-log scenarios.
  - vi: Kiểm tra báo cáo luôn giữ source reference và không tạo claim ngoài evidence.
    en: Verify reports retain source references and do not create claims beyond the available evidence.
observability:
  - vi: Structured diagnostic events cho các bước ingest, normalize, classify và render.
    en: Structured diagnostic events for ingest, normalize, classify, and render stages.
security:
  - vi: Không đưa secret hoặc toàn bộ log nhạy cảm vào báo cáo public; cần redaction trước khi publish.
    en: Do not expose secrets or complete sensitive logs in public reports; redact before publishing.
failureModes:
  - vi: Log bị truncate, format thay đổi hoặc step không có output đủ rõ.
    en: Truncated logs, format changes, or failed steps without sufficient output.
  - vi: Classifier có thể nhầm nguyên nhân gần với root cause; báo cáo phải thể hiện uncertainty.
    en: The classifier may confuse a nearby symptom with the root cause; uncertainty must remain visible.
results:
  - vi: Chưa công bố benchmark; giá trị hiện tại là architecture, evidence model và prototype workflow.
    en: No benchmark is published yet; current evidence is the architecture, evidence model, and prototype workflow.
learned:
  - vi: Công cụ triage đáng tin cậy cần biết từ chối kết luận khi evidence không đủ.
    en: A trustworthy triage tool must abstain when evidence is insufficient.
next:
  - vi: Hoàn thiện parser fixture, report schema và một demo report được redaction.
    en: Complete parser fixtures, report schema, and one redacted demonstration report.
stack:
  - Python
  - GitHub Actions
  - CLI
  - Static reports
repoUrl: https://github.com/Dyu20705/RunSift
evidence:
  - label:
      vi: Repository và lịch sử triển khai
      en: Repository and implementation history
    href: https://github.com/Dyu20705/RunSift
updated: 2026-07-16
---

Case-study data is intentionally stored as validated frontmatter so the portfolio can distinguish current evidence from planned work.
