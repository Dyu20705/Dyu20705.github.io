---
title: Personal Internet Simulator
slug: personal-internet-simulator
featured: true
priority: 3
status: research
statusLabel:
  vi: Research · documented-first
  en: Research · documented-first
domain:
  vi: Distributed systems · Networking · Reliability lab
  en: Distributed systems · Networking · Reliability lab
value:
  vi: Thiết kế một infrastructure lab xác định được để quan sát packet routing, latency propagation và failure scenarios; implementation simulator hiện chưa được đưa vào repository.
  en: A design for a deterministic infrastructure lab that makes packet routing, latency propagation, and failure scenarios observable; the simulator implementation has not yet landed in the repository.
problem:
  vi: Networking và distributed-systems failures khó hiểu nếu chỉ đọc lý thuyết hoặc chỉ nhìn trạng thái cuối mà không theo dõi causal event flow.
  en: Networking and distributed-systems failures are difficult to understand from theory or final-state snapshots without following causal event flow.
context:
  vi: Repository hiện ở trạng thái documented-first với vision, architecture, invariants, protocol và roadmap. README cũng ghi rõ workflow chạy chỉ là expected workflow khi implementation được bổ sung.
  en: The repository is currently documented-first, with vision, architecture, invariants, protocol, and roadmap documents. Its README explicitly marks the run workflow as an expected workflow for when implementation lands.
constraints:
  - vi: Mô hình phải đủ nhỏ để chạy local, inspect từng event và replay bằng cùng seed/configuration.
    en: The model must remain small enough to run locally, inspect each event, and replay from the same seed/configuration.
  - vi: Renderer chỉ là projection; correctness phải nằm ở state transition, scheduler và invariant tests.
    en: The renderer is only a projection; correctness must live in state transitions, the scheduler, and invariant tests.
  - vi: Không gửi traffic thật, không mô phỏng Internet đầy đủ và không trình bày như production network platform.
    en: Send no real traffic, do not model the full Internet, and do not present the project as a production network platform.
role:
  vi: Xác định vision, kiến trúc actor/event-driven, invariants, protocol, roadmap và failure-first engineering principles; simulator code vẫn là planned work.
  en: Defined the vision, actor/event-driven architecture, invariants, protocol, roadmap, and failure-first engineering principles; simulator code remains planned work.
architecture:
  - vi: Planned scheduler cung cấp central clock và deterministic event ordering.
    en: A planned scheduler provides a central clock and deterministic event ordering.
  - vi: Planned actors gồm client, router, DNS, CDN, firewall và monitor; topology/scenario được khai báo bằng configuration.
    en: Planned actors include client, router, DNS, CDN, firewall, and monitor; topology/scenarios are configuration-driven.
  - vi: Planned metrics/event log ghi packet flow, routing decision, latency, node state và failure/recovery events.
    en: Planned metrics/event logs record packet flow, routing decisions, latency, node state, and failure/recovery events.
decisions:
  - vi: Discrete-event simulation thay vì real sockets để giữ tính deterministic và dễ kiểm thử.
    en: Use discrete-event simulation instead of real sockets to preserve determinism and testability.
  - vi: Immutable packet structures và config-driven scenarios để giảm hidden state và hỗ trợ replay.
    en: Use immutable packet structures and config-driven scenarios to reduce hidden state and support replay.
  - vi: Failure handling và observability được thiết kế trước visualization polish.
    en: Design failure handling and observability before visualization polish.
validation:
  - vi: Hiện có thể review documentation contract và roadmap; chưa có build, test hoặc executable simulation result.
    en: The current evidence is limited to reviewable documentation contracts and a roadmap; no build, test, or executable simulation result exists.
  - vi: Planned validation gồm deterministic replay, scheduler ordering, packet-location invariant, routing-loop detection và golden failure scenarios.
    en: Planned validation includes deterministic replay, scheduler ordering, packet-location invariants, routing-loop detection, and golden failure scenarios.
observability:
  - vi: Planned packet traces, routing logs, latency histograms, node metrics và replay sessions.
    en: Planned packet traces, routing logs, latency histograms, node metrics, and replay sessions.
security:
  - vi: Config input phải được validate và resource limits phải ngăn scenario làm event queue tăng không kiểm soát.
    en: Configuration input must be validated, and resource limits must prevent scenarios from growing the event queue without bounds.
failureModes:
  - vi: Invalid scenario, routing loop, event queue runaway, deterministic replay mismatch hoặc node failure làm hỏng global state.
    en: Invalid scenarios, routing loops, runaway event queues, deterministic-replay mismatches, or node failures corrupting global state.
results:
  - vi: Đã có README, vision, architecture, invariants, protocol và roadmap public; chưa có simulator implementation, visual demo hoặc benchmark.
    en: A public README, vision, architecture, invariants, protocol, and roadmap exist; no simulator implementation, visual demo, or benchmark exists yet.
learned:
  - vi: Design document có thể làm rõ boundary và invariant, nhưng chỉ code/test chạy được mới chứng minh behavior.
    en: Design documents can clarify boundaries and invariants, but only running code and tests prove behavior.
next:
  - vi: Tạo vertical slice Zig tối thiểu gồm scheduler, packet model, hai node, deterministic seed và một link-failure test.
    en: Build a minimal Zig vertical slice with a scheduler, packet model, two nodes, a deterministic seed, and one link-failure test.
stack:
  - Zig
  - Discrete-event simulation
  - Networking
  - Deterministic replay
  - Reliability testing
repoUrl: https://github.com/Dyu20705/Personal-Internet-Simulator
evidence:
  - label:
      vi: README documented-first
      en: Documented-first README
    href: https://github.com/Dyu20705/Personal-Internet-Simulator/blob/main/README.md
  - label:
      vi: Architecture, invariants và roadmap
      en: Architecture, invariants, and roadmap
    href: https://github.com/Dyu20705/Personal-Internet-Simulator/tree/main/docs
  - label:
      vi: Executable simulation chưa tồn tại
      en: Executable simulation is not available yet
updated: 2026-07-16
---

The portfolio presents this as a high-potential reliability research project, not as implemented infrastructure.