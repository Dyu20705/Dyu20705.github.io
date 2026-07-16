---
title: Arcaea Viewer
slug: arcaea-viewer
featured: true
priority: 2
status: prototype
statusLabel:
  vi: Research-grade prototype
  en: Research-grade prototype
domain:
  vi: Rust · WebAssembly · Deterministic systems
  en: Rust · WebAssembly · Deterministic systems
value:
  vi: Vertical slice Rust–WASM biến dữ liệu chart AFF hợp lệ thành timing context, scene trung gian và SVG preview xác định được, qua đó chứng minh parser, correctness boundary và build pipeline đa ngôn ngữ.
  en: A Rust-to-WASM vertical slice that turns legal AFF chart fixtures into timing context, an intermediate scene, and deterministic SVG previews, demonstrating parsing, correctness boundaries, and a cross-language build pipeline.
problem:
  vi: Logic chart, timing và rendering dễ bị phân tán giữa frontend và backend, làm tăng nguy cơ sai khác hành vi và khó kiểm thử một cách tái lập.
  en: Chart, timing, and rendering logic can become duplicated across frontend and backend layers, increasing behavioral drift and making reproducible validation harder.
context:
  vi: Đây là prototype nghiên cứu và proof of integration, không phải viewer hoàn chỉnh hay bản sao chính thức của game. Core tests chỉ dùng fixture tự viết và không yêu cầu asset có bản quyền.
  en: This is a research prototype and proof of integration, not a finished viewer or an official game replica. Core tests use hand-written fixtures and require no copyrighted game assets.
constraints:
  - vi: Parser chỉ hỗ trợ subset AFF được tài liệu hóa; unsupported input phải trả diagnostics có cấu trúc.
    en: The parser supports only a documented AFF subset; unsupported input must return structured diagnostics.
  - vi: Domain, timing và renderer logic phải nằm trong Rust thay vì được viết lại trong TypeScript.
    en: Domain, timing, and renderer logic must remain in Rust rather than being reimplemented in TypeScript.
  - vi: Browser boundary dùng contract JSON có version để giảm coupling và làm lỗi tích hợp dễ quan sát.
    en: The browser boundary uses a versioned JSON contract to reduce coupling and make integration failures observable.
role:
  vi: Thiết kế workspace Rust, domain model, parser subset, timing map, renderer scene, WASM DTO boundary và browser vertical slice.
  en: Designed the Rust workspace, domain model, AFF-subset parser, timing map, renderer scene, WASM DTO boundary, and browser vertical slice.
architecture:
  - vi: crates/core định nghĩa chart domain types độc lập với browser.
    en: crates/core defines browser-independent chart domain types.
  - vi: crates/parser tạo chart hoặc structured diagnostics từ AFF fixture.
    en: crates/parser produces a chart or structured diagnostics from AFF fixtures.
  - vi: crates/timing xây timing context và playback snapshot; crates/renderer tạo scene IR và deterministic SVG.
    en: crates/timing builds timing context and playback snapshots; crates/renderer creates a scene IR and deterministic SVG.
  - vi: crates/wasm xuất versioned JSON envelope cho apps/web gọi từ React/Vite.
    en: crates/wasm exposes a versioned JSON envelope consumed by the React/Vite app in apps/web.
decisions:
  - vi: Không viết lại parser/timing/renderer trong TypeScript để giữ một nguồn sự thật cho correctness.
    en: Do not duplicate parser, timing, or renderer logic in TypeScript, preserving one correctness source of truth.
  - vi: Dùng SVG debug preview xác định được trước khi tối ưu visual fidelity hoặc animation.
    en: Use a deterministic SVG debug preview before optimizing visual fidelity or animation.
  - vi: Dùng legal fixtures tự viết để tách nghiên cứu kỹ thuật khỏi dữ liệu game có bản quyền.
    en: Use hand-written legal fixtures to separate engineering research from copyrighted game data.
validation:
  - vi: cargo test --workspace kiểm tra các Rust crates.
    en: cargo test --workspace validates the Rust crates.
  - vi: pnpm check chạy format, clippy, Rust tests, WASM build, frontend type check, unit tests và production build.
    en: pnpm check runs formatting, clippy, Rust tests, the WASM build, frontend type checks, unit tests, and the production build.
  - vi: CI thực thi Rust fmt/clippy/tests, WASM package build, frontend tests và production build trên clean runner.
    en: CI executes Rust fmt/clippy/tests, the WASM package build, frontend tests, and a production build on a clean runner.
observability:
  - vi: Browser hiển thị structured diagnostics và primitive counts để kiểm tra kết quả parser/renderer thay vì chỉ trả màn hình trống.
    en: The browser exposes structured diagnostics and primitive counts so parser and renderer results are inspectable instead of failing as a blank screen.
security:
  - vi: Core fixtures không chứa chart hoặc asset được trích xuất từ game; browser prototype không có account, backend hoặc dữ liệu người dùng.
    en: Core fixtures contain no extracted game charts or assets; the browser prototype has no account system, backend, or user data.
failureModes:
  - vi: AFF ngoài subset, malformed input, WASM contract mismatch hoặc frontend build không tương thích.
    en: Unsupported AFF syntax, malformed input, WASM contract mismatch, or incompatible frontend builds.
  - vi: SVG hiện là debug renderer và không đại diện cho official scroll physics.
    en: The current SVG is a debug renderer and does not represent official scroll physics.
results:
  - vi: Vertical slice hiện có thể load fixture hợp lệ, parse bằng WASM, trả diagnostics, chọn playback time, dựng Rust scene và render SVG cùng các primitive counts.
    en: The vertical slice can load a legal fixture, parse through WASM, return diagnostics, select playback time, build a Rust scene, and render SVG with primitive counts.
  - vi: Chưa công bố benchmark performance, replay, audio sync, analytics UI hay offline cache.
    en: No performance benchmark, replay, audio sync, analytics UI, or offline cache is published.
learned:
  - vi: Contract có version và deterministic fixtures giúp tách lỗi parser, timing, rendering và browser integration rõ hơn.
    en: Versioned contracts and deterministic fixtures make parser, timing, rendering, and browser-integration failures easier to isolate.
next:
  - vi: Cải thiện ergonomics cho fixture selection, malformed examples và render controls trước khi mở rộng analytics hoặc replay.
    en: Improve fixture selection, malformed examples, and render controls before expanding into analytics or replay.
stack:
  - Rust
  - WebAssembly
  - React
  - Vite
  - SVG
  - pnpm
repoUrl: https://github.com/Dyu20705/arcaea-viewer
evidence:
  - label:
      vi: README và vertical-slice contract
      en: README and vertical-slice contract
    href: https://github.com/Dyu20705/arcaea-viewer/blob/main/README.md
  - label:
      vi: CI đa toolchain Rust, WASM và frontend
      en: Rust, WASM, and frontend multi-toolchain CI
    href: https://github.com/Dyu20705/arcaea-viewer/blob/main/.github/workflows/ci.yml
  - label:
      vi: Source workspace và implementation history
      en: Source workspace and implementation history
    href: https://github.com/Dyu20705/arcaea-viewer
updated: 2026-07-16
---

This case study includes the project as systems and deployment evidence, not as a direct MLOps product.