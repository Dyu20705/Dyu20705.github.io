---
title: Personal Internet Simulator
slug: personal-internet-simulator
featured: true
priority: 3
status: research
statusLabel:
  vi: Research prototype
  en: Research prototype
domain:
  vi: Distributed systems · Reliability lab
  en: Distributed systems · Reliability lab
value:
  vi: Môi trường mô phỏng nhỏ để quan sát latency, routing và failure propagation trước khi áp dụng tư duy reliability vào hệ thống thật.
  en: A small simulation environment for observing latency, routing, and failure propagation before applying reliability thinking to real systems.
problem:
  vi: Nhiều khái niệm mạng và distributed systems khó hiểu nếu chỉ đọc lý thuyết hoặc chỉ nhìn trạng thái cuối.
  en: Networking and distributed-systems concepts are difficult to understand from theory or final-state screenshots alone.
context:
  vi: Dự án là learning/research lab, không mô phỏng đầy đủ Internet và không được dùng để khẳng định production scale.
  en: This is a learning and research lab; it does not model the full Internet and is not evidence of production scale.
constraints:
  - vi: Mô hình phải đủ nhỏ để chạy local, inspect từng event và tái lập scenario.
    en: The model must remain small enough to run locally, inspect each event, and replay scenarios.
  - vi: Failure injection phải deterministic khi dùng cùng seed và configuration.
    en: Failure injection should be deterministic for the same seed and configuration.
  - vi: Visual chỉ hỗ trợ hiểu event flow; correctness nằm ở state transition và test.
    en: Visuals support event-flow understanding; correctness belongs in state transitions and tests.
role:
  vi: Thiết kế model node/link/packet, scenario format, failure injection và hướng quan sát event.
  en: Designed the node/link/packet model, scenario format, failure injection, and event-observation approach.
architecture:
  - vi: Scenario khai báo nodes, links, latency, capacity và failure events.
    en: Scenarios define nodes, links, latency, capacity, and failure events.
  - vi: Event loop xử lý packet movement và state transition theo discrete time.
    en: An event loop processes packet movement and state transitions in discrete time.
  - vi: Event log và snapshot cung cấp evidence cho routing decision và failure propagation.
    en: Event logs and snapshots provide evidence for routing decisions and failure propagation.
decisions:
  - vi: Discrete-event simulation thay vì real sockets để giữ tính deterministic và dễ kiểm thử.
    en: Use discrete-event simulation instead of real sockets to preserve determinism and testability.
  - vi: Scenario-as-data để cùng một case có thể chạy lại và so sánh.
    en: Treat scenarios as data so the same case can be replayed and compared.
  - vi: Tập trung reliability lab thay vì cố làm một bản sao Internet có phạm vi quá rộng.
    en: Focus on a reliability lab rather than attempting an over-broad replica of the Internet.
validation:
  - vi: Kiểm tra invariant như packet không xuất hiện ở hai node cùng lúc và event time không đi lùi.
    en: Validate invariants such as a packet never existing at two nodes simultaneously and event time never moving backward.
  - vi: Golden scenarios cho normal routing, link failure và recovery.
    en: Golden scenarios for normal routing, link failure, and recovery.
observability:
  - vi: Event log có timestamp, actor, transition, cause và correlation identifier.
    en: Event logs include timestamp, actor, transition, cause, and correlation identifier.
security:
  - vi: Simulator không gửi traffic thật và không cần quyền mạng đặc biệt.
    en: The simulator sends no real traffic and requires no special network privileges.
failureModes:
  - vi: Event queue tăng quá lớn, scenario không hợp lệ hoặc routing loop trong model.
    en: Event-queue growth, invalid scenarios, or routing loops in the model.
results:
  - vi: Evidence hiện tại là repository prototype và design direction; chưa có benchmark hiệu năng được công bố.
    en: Current evidence is the prototype repository and design direction; no performance benchmark is published.
learned:
  - vi: Failure propagation dễ hiểu hơn khi hệ thống lưu được causal event thay vì chỉ log text rời rạc.
    en: Failure propagation becomes easier to reason about when the system records causal events rather than disconnected text logs.
next:
  - vi: Thêm scenario fixture, invariant tests và một visualization tĩnh cho failure timeline.
    en: Add scenario fixtures, invariant tests, and a static visualization for a failure timeline.
stack:
  - Simulation
  - Networking
  - Event log
  - Reliability testing
repoUrl: https://github.com/Dyu20705/Personal-Internet-Simulator
evidence:
  - label:
      vi: Repository prototype
      en: Prototype repository
    href: https://github.com/Dyu20705/Personal-Internet-Simulator
updated: 2026-07-16
---

The portfolio positions this project as supporting systems evidence, not as a production network platform.
