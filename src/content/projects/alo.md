---
title: ALO — Artifact Lineage Observatory
slug: alo
featured: true
priority: 4
status: work-in-progress
statusLabel:
  vi: Concept · repository initialized
  en: Concept · repository initialized
domain:
  vi: Artifact lineage · Supply-chain security · MLOps metadata
  en: Artifact lineage · Supply-chain security · MLOps metadata
value:
  vi: Hướng dự án nhằm truy vết một artifact từ source commit qua build, dependency, SBOM và provenance tới bước verification, nhưng hiện mới ở giai đoạn khởi tạo repository và xác định outcome.
  en: A project direction for tracing an artifact from source commit through build, dependencies, SBOM, provenance, and verification; it is currently limited to repository initialization and outcome definition.
problem:
  vi: Khi artifact được build và chuyển qua nhiều bước, việc trả lời “artifact này đến từ source nào, được tạo bằng toolchain nào và đã qua kiểm tra gì?” thường thiếu một lineage record thống nhất.
  en: As artifacts move through build and delivery stages, answering “which source produced this, with which toolchain, and under which checks?” often lacks a unified lineage record.
context:
  vi: ALO được chọn vì tiềm năng trở thành flagship trực tiếp cho MLOps/DevSecOps. Tuy nhiên repository public hiện chỉ có commit khởi tạo; chưa có schema, CLI, pipeline, SBOM generator hay verification result để trình bày như implementation.
  en: ALO is selected for its potential as a direct MLOps/DevSecOps flagship. The public repository currently contains only its initialization commit; no schema, CLI, pipeline, SBOM generator, or verification result exists yet.
constraints:
  - vi: Không đưa ALO thành “working platform” cho tới khi có executable slice và evidence được sinh tự động.
    en: Do not present ALO as a working platform until an executable slice and automatically generated evidence exist.
  - vi: Lineage record phải gắn với exact commit, toolchain, checksum và validation source; missing data phải là unknown chứ không được suy đoán.
    en: Lineage records must reference exact commits, toolchains, checksums, and validation sources; missing data must remain unknown rather than inferred.
  - vi: MVP phải local-first, mã nguồn mở và không phụ thuộc dịch vụ trả phí.
    en: The MVP must be local-first, open source, and independent of paid services.
role:
  vi: Đề xuất bài toán, định vị Artifact Lineage Observatory và xác định hướng MVP evidence-first; implementation vẫn chưa bắt đầu.
  en: Proposed the problem, positioned the Artifact Lineage Observatory, and defined an evidence-first MVP direction; implementation has not started.
architecture:
  - vi: Planned source adapter đọc repository, exact commit và build context.
    en: A planned source adapter reads repository, exact commit, and build context.
  - vi: Planned manifest layer liên kết artifact checksum với dependency/SBOM, toolchain và quality checks.
    en: A planned manifest layer links artifact checksums to dependencies/SBOM, toolchain data, and quality checks.
  - vi: Planned verifier kiểm tra schema, checksum và provenance rồi xuất static evidence report.
    en: A planned verifier validates schema, checksums, and provenance before exporting a static evidence report.
decisions:
  - vi: Bắt đầu bằng một artifact type và một local build pipeline thay vì cố hỗ trợ mọi ecosystem.
    en: Start with one artifact type and one local build pipeline instead of attempting every ecosystem.
  - vi: Machine-readable manifest là nguồn sự thật; UI chỉ là projection có thể tái tạo.
    en: The machine-readable manifest is the source of truth; the UI is a reproducible projection.
  - vi: Trạng thái unknown, stale và unverifiable là output hợp lệ.
    en: Unknown, stale, and unverifiable are valid output states.
validation:
  - vi: Hiện chỉ xác minh được repository public và commit khởi tạo; chưa có automated validation.
    en: Only the public repository and initialization commit can currently be verified; no automated validation exists.
  - vi: Planned MVP gate gồm schema validation, checksum verification, fixture tests và reproducible clean build.
    en: Planned MVP gates include schema validation, checksum verification, fixture tests, and a reproducible clean build.
observability:
  - vi: Planned report sẽ ghi source commit, generated timestamp, toolchain, checks, artifact hash và freshness state.
    en: The planned report records source commit, generation timestamp, toolchain, checks, artifact hash, and freshness state.
security:
  - vi: Manifest phải có visibility classification và không được xuất secret, private repository metadata hoặc raw scanner findings.
    en: Manifests require visibility classification and must not publish secrets, private-repository metadata, or raw scanner findings.
failureModes:
  - vi: Manifest thiếu source, checksum không khớp, build không tái lập hoặc provenance không thể xác minh.
    en: Missing source metadata, checksum mismatch, non-reproducible builds, or unverifiable provenance.
results:
  - vi: Repository ALO đã được khởi tạo với tên Artifact Lineage Observatory; chưa có executable prototype hoặc metric.
    en: The ALO repository has been initialized as Artifact Lineage Observatory; no executable prototype or metric exists.
learned:
  - vi: Tiềm năng nghề nghiệp không thể thay thế implementation evidence; portfolio phải hiển thị rõ khoảng cách này.
    en: Career relevance cannot substitute for implementation evidence; the portfolio must make that gap explicit.
next:
  - vi: Viết ADR cho MVP scope, định nghĩa manifest schema v0.1 và tạo một vertical slice source commit → build → checksum → verification report.
    en: Write an MVP-scope ADR, define manifest schema v0.1, and build a source commit → build → checksum → verification-report vertical slice.
stack:
  - Python
  - JSON Schema
  - SBOM
  - Provenance
  - GitHub Actions
  - Static reports
repoUrl: https://github.com/Dyu20705/alo
evidence:
  - label:
      vi: Commit khởi tạo repository
      en: Repository initialization commit
    href: https://github.com/Dyu20705/alo/commit/56ee6b3fe0a341c42291287756b561ff2bee5701
  - label:
      vi: Implementation evidence chưa tồn tại
      en: Implementation evidence is not available yet
updated: 2026-07-16
---

This page deliberately separates project potential from current implementation evidence.