---
title: RunSift
slug: runsift
featured: true
priority: 1
status: work-in-progress
statusLabel:
  vi: Work in progress · roadmap defined
  en: Work in progress · roadmap defined
domain:
  vi: CI/CD · Developer tooling · Reliability
  en: CI/CD · Developer tooling · Reliability
value:
  vi: Công cụ CLI evidence-first được thiết kế để thu thập và rút gọn bằng chứng từ GitHub Actions failure, nhưng implementation analyzer hiện chưa được công bố.
  en: An evidence-first CLI designed to collect and reduce GitHub Actions failure evidence, although the analyzer implementation is not yet published.
problem:
  vi: Log CI thường dài, nhiều nhiễu và làm chậm việc tìm failed step, thông báo lỗi gốc và bối cảnh workflow.
  en: CI logs are often long and noisy, slowing down the search for the failed step, primary error, and workflow context.
context:
  vi: Repository hiện có roadmap và issue decomposition chi tiết cho CLI, GitHub data collection, parser, classifier, report, fixtures và CI. Chưa có executable triage workflow hoặc benchmark để coi là prototype hoàn chỉnh.
  en: The repository currently contains a detailed roadmap and issue decomposition for the CLI, GitHub data collection, parser, classifier, reports, fixtures, and CI. It does not yet contain an executable triage workflow or benchmark that would justify calling it a complete prototype.
constraints:
  - vi: Kết quả phải gắn với đoạn log hoặc metadata có thể kiểm tra lại.
    en: Every conclusion must remain attached to inspectable log evidence or metadata.
  - vi: Unknown và confidence thấp là đầu ra hợp lệ; classifier không được đoán để trông thông minh hơn.
    en: Unknown and low-confidence outcomes are valid; the classifier must not guess to appear more capable.
  - vi: Ưu tiên CLI, offline fixtures và static report để dễ chạy local, kiểm thử và publish trên GitHub Pages.
    en: Prefer a CLI, offline fixtures, and static reports for local execution, testability, and GitHub Pages publishing.
role:
  vi: Xác định bài toán, thiết kế evidence-first triage flow, chia roadmap thành epics/issues và xây script setup GitHub Project không phụ thuộc jq ngoài.
  en: Defined the problem, designed the evidence-first triage flow, decomposed the roadmap into epics/issues, and built a GitHub Project setup script without an external jq dependency.
architecture:
  - vi: Planned collector lấy workflow metadata, failed jobs, failed steps và log qua GitHub API hoặc offline fixture.
    en: A planned collector obtains workflow metadata, failed jobs, failed steps, and logs through the GitHub API or offline fixtures.
  - vi: Planned parser chuẩn hóa evidence thành record có source, job/step context, offsets, failed command và signal type.
    en: A planned parser normalizes evidence into records with source, job/step context, offsets, failed commands, and signal types.
  - vi: Planned classifier tạo category, confidence và unknown fallback; renderer xuất CLI/Markdown report có evidence links.
    en: A planned classifier produces categories, confidence, and an unknown fallback; a renderer outputs CLI/Markdown reports with evidence links.
decisions:
  - vi: Evidence-first thay vì sinh một bản tóm tắt tự tin nhưng khó kiểm chứng.
    en: Evidence-first output instead of a confident summary that cannot be verified.
  - vi: Offline fixtures trước live API dependency để parser và classifier có thể chạy lặp lại trong CI.
    en: Offline fixtures precede live API dependency so parsers and classifiers can run repeatedly in CI.
  - vi: Static reports trước dashboard động để giảm runtime, hosting và maintenance.
    en: Static reports before a live dashboard to reduce runtime, hosting, and maintenance costs.
validation:
  - vi: Hiện có thể kiểm tra roadmap issues, repository history và script setup GitHub Project; chưa có parser/classifier tests.
    en: The current evidence covers roadmap issues, repository history, and the GitHub Project setup script; parser/classifier tests do not exist yet.
  - vi: Planned validation gồm sanitized fixtures, parser/classifier unit tests, report snapshots, CLI integration tests và GitHub API mocks.
    en: Planned validation includes sanitized fixtures, parser/classifier unit tests, report snapshots, CLI integration tests, and GitHub API mocks.
observability:
  - vi: Planned diagnostic events cho collect, normalize, classify và render cùng confidence/unknown reason trong report.
    en: Planned diagnostic events cover collect, normalize, classify, and render stages, including confidence and unknown reasons in reports.
security:
  - vi: Log fixture và report public phải được redact; token chỉ lấy từ environment và dùng permission tối thiểu.
    en: Public log fixtures and reports must be redacted; tokens come only from the environment and use minimum permissions.
failureModes:
  - vi: Log bị truncate, API rate limit, format log thay đổi, secret trong output hoặc classifier nhầm symptom với root cause.
    en: Truncated logs, API rate limits, log-format changes, secrets in output, or classifiers confusing a symptom with the root cause.
results:
  - vi: Roadmap đã chia rõ foundation, collection, parsing, classification, reporting, testing, CI và portfolio demo; repository chưa có analyzer chạy được.
    en: The roadmap clearly separates foundation, collection, parsing, classification, reporting, testing, CI, and portfolio-demo work; the repository does not yet contain a working analyzer.
  - vi: Script thiết lập GitHub Project đã loại bỏ dependency jq ngoài bằng khả năng --jq tích hợp của GitHub CLI.
    en: The GitHub Project setup script removed its external jq dependency by using GitHub CLI's built-in --jq support.
learned:
  - vi: Một backlog chi tiết giúp giảm mơ hồ nhưng không được trình bày như implementation evidence.
    en: A detailed backlog reduces ambiguity but must not be presented as implementation evidence.
next:
  - vi: "Hoàn thành foundation contract, fixture format và vertical slice đầu tiên: fixture log → evidence extraction → Markdown report."
    en: "Complete the foundation contract, fixture format, and first vertical slice: fixture log → evidence extraction → Markdown report."
stack:
  - Python
  - GitHub API
  - GitHub Actions
  - CLI
  - Static reports
repoUrl: https://github.com/Dyu20705/RunSift
evidence:
  - label:
      vi: Roadmap issues và acceptance criteria
      en: Roadmap issues and acceptance criteria
    href: https://github.com/Dyu20705/RunSift/issues
  - label:
      vi: Commit loại bỏ external jq dependency
      en: Commit removing the external jq dependency
    href: https://github.com/Dyu20705/RunSift/commit/88d7d186c8dc90afdba3e0ffce37fe4dd2f37bfe
  - label:
      vi: Executable analyzer chưa tồn tại
      en: Executable analyzer is not available yet
updated: 2026-07-16
---

This case study treats the roadmap as planning evidence and does not present it as a working analyzer.