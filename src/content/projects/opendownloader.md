---
{
  "title": "openDownloader",
  "slug": "opendownloader",
  "priority": 2,
  "featured": true,
  "year": 2026,
  "status": {
    "vi": "Đã có release công khai",
    "en": "Public releases available"
  },
  "domain": {
    "vi": "Desktop · Rust · Tauri",
    "en": "Desktop · Rust · Tauri"
  },
  "summary": {
    "vi": "Ứng dụng desktop kiểm tra URL media, xem kế hoạch tải và chạy các công cụ media qua backend Rust. Có package release công khai.",
    "en": "A desktop application for inspecting media URLs, reviewing download plans and running media tools through a Rust backend. Public release packages are available."
  },
  "stack": [
    "Rust",
    "Tauri",
    "React",
    "SQLite"
  ],
  "repoUrl": "https://github.com/Dyu20705/openDownloader",
  "revision": "1759301",
  "verifiedOn": "2026-10-05",
  "sections": [
    {
      "heading": {
        "vi": "Ứng dụng",
        "en": "Application"
      },
      "paragraphs": [
        {
          "vi": "openDownloader hỗ trợ kiểm tra một URL và tải một video, audio track, clip/chapter, thumbnail hoặc một ngôn ngữ phụ đề cho mỗi job. Frontend React giao tiếp với backend Tauri/Rust; yt-dlp, FFmpeg và MediaInfo được quản lý riêng.",
          "en": "openDownloader supports inspecting a URL and downloading a single video, audio track, clip/chapter, thumbnail or one subtitle language per job. A React frontend communicates with a Tauri/Rust backend; yt-dlp, FFmpeg and MediaInfo are managed separately."
        }
      ]
    },
    {
      "heading": {
        "vi": "Kiến trúc và runtime",
        "en": "Architecture and runtime"
      },
      "paragraphs": [
        {
          "vi": "Backend lập kế hoạch acquisition và kiểm tra trạng thái job. Media tools chạy dưới dạng child process qua các đối số được cấu trúc, không qua shell interpolation. Lịch sử job được lưu cục bộ bằng SQLite.",
          "en": "The backend resolves acquisition plans and validates job-state transitions. Media tools run as child processes with structured arguments, without shell interpolation. Job history is stored locally in SQLite."
        },
        {
          "vi": "Managed tool downloads được kiểm tra SHA-256 trước khi cài. Diagnostics giới hạn dữ liệu giữ lại; URL nhạy cảm được lọc khỏi diagnostics và lịch sử. SQLite history không được mã hóa.",
          "en": "Managed tool downloads are checked against SHA-256 values before installation. Diagnostics bound retained data, and sensitive URL details are filtered from diagnostics and history. SQLite history is not encrypted."
        }
      ]
    },
    {
      "heading": {
        "vi": "Kiểm tra và đóng gói",
        "en": "Checks and packaging"
      },
      "paragraphs": [
        {
          "vi": "Repo có frontend tests, Rust tests, kiểm tra boundary, typecheck, lint và workflow security/release. Workflow Contract checks và Scheduled security analysis tại revision được kiểm tra có kết quả success. Các test này được đọc và đối chiếu CI; không được chạy lại trong repo portfolio.",
          "en": "The repository contains frontend tests, Rust tests, boundary checks, type checking, linting and security/release workflows. Contract checks and Scheduled security analysis succeeded at the inspected revision. These tests were inspected and cross-checked against CI, not rerun inside this portfolio."
        },
        {
          "vi": "GitHub có release v1.0.0 và v1.0.1 với asset công khai. Một lần chạy Signed desktop release gần đây thất bại; nhánh hiện tại và package version không được xem như bản release mới đã xác minh.",
          "en": "GitHub contains v1.0.0 and v1.0.1 releases with public assets. A recent Signed desktop release run failed; the current branch and package version are not presented as a newly verified release."
        }
      ]
    },
    {
      "heading": {
        "vi": "Giới hạn và hướng tiếp theo",
        "en": "Limitations and next direction"
      },
      "paragraphs": [
        {
          "vi": "Production package workflow hiện hướng tới Debian package trên Linux x86_64. Windows và Intel macOS có unsigned packaging checks nhưng chưa được xem là production distribution targets. Không cam kết hỗ trợ đa nền tảng đầy đủ.",
          "en": "The production package workflow currently targets a Debian package on Linux x86_64. Windows and Intel macOS have unsigned packaging checks but are not established production distribution targets. Full cross-platform support is not claimed."
        },
        {
          "vi": "Tải toàn bộ playlist, custom output profiles và metadata-patch requests chưa được hỗ trợ. README hiện thông báo kế hoạch kết thúc feature development sau release đã xác minh tiếp theo, với khả năng archive repo; không cam kết maintenance hoặc security response dài hạn.",
          "en": "Whole-playlist downloading, custom output profiles and metadata-patch requests are unsupported. The current README describes ending feature development after the next verified release, with possible repository archival; it offers no ongoing maintenance or security-response commitment."
        }
      ]
    }
  ],
  "evidence": [
    {
      "label": {
        "vi": "Mã nguồn được kiểm tra",
        "en": "Inspected source"
      },
      "href": "https://github.com/Dyu20705/openDownloader/tree/1759301"
    },
    {
      "label": {
        "vi": "Release công khai",
        "en": "Public releases"
      },
      "href": "https://github.com/Dyu20705/openDownloader/releases"
    },
    {
      "label": {
        "vi": "Kiến trúc",
        "en": "Architecture"
      },
      "href": "https://github.com/Dyu20705/openDownloader/blob/1759301/docs/architecture.md"
    },
    {
      "label": {
        "vi": "Packaging và giới hạn",
        "en": "Packaging and limitations"
      },
      "href": "https://github.com/Dyu20705/openDownloader/blob/1759301/docs/packaging.md"
    },
    {
      "label": {
        "vi": "Workflow checks",
        "en": "Workflow checks"
      },
      "href": "https://github.com/Dyu20705/openDownloader/actions"
    },
    {
      "label": {
        "vi": "Security boundaries",
        "en": "Security boundaries"
      },
      "href": "https://github.com/Dyu20705/openDownloader/blob/1759301/docs/security.md"
    }
  ]
}
---
