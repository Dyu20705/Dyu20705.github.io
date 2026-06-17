import profilePhoto from '../assets/selfie/toi.png';
import sharedCoverImage from '../assets/img/Gixa6GybEAEPw8E.png';
import gallery01 from '../assets/img/IMG_20240927_082039_070.jpg';
import gallery02 from '../assets/img/IMG_20241111_143050_109.jpg';
import gallery03 from '../assets/img/IMG_20241123_142808_598.jpg';
import gallery04 from '../assets/img/IMG_20241203_090358_092.jpg';
import gallery05 from '../assets/img/IMG_20241203_093918_015.jpg';
import gallery06 from '../assets/img/IMG_20241203_103715_582.jpg';

export const profile = {
	name: 'Nguyễn Văn Duy',
	role: 'MLOps Engineer',
	email: 'nguyenvanduy20072005@gmail.com',
	phone: '0869630908',
	birthday: '20/07/2005',
	location: 'Hà Nội, Việt Nam',
	photo: profilePhoto,
};

export const navItems = [
	{ id: 'about', href: '/about', vi: 'Về tôi', en: 'About Me' },
	{ id: 'resume', href: '/resume', vi: 'Hồ sơ', en: 'Resume' },
	{ id: 'portfolio', href: '/portfolio', vi: 'Dự án', en: 'Portfolio' },
	{ id: 'blog', href: '/blog', vi: 'Blog', en: 'Blog' },
	{ id: 'contact', href: '/contact', vi: 'Liên hệ', en: 'Contact' },
	{ id: 'gallery', href: '/gallery', vi: 'Thư viện', en: 'Gallery' },
	{ id: 'cv', href: '/cv', vi: 'CV', en: 'CV' },
];

export const socialLinks = [
	{ id: 'github', label: 'GitHub', href: 'https://github.com/Dyu20705' },
	{ id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/duynguyenvan05/' },
	{ id: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/Qiskit2030/' },
];

export const aboutHighlights = [
	'Biến kiến thức ML thành pipeline có thể chạy lại, kiểm tra và cải tiến.',
	'Kết nối nền tảng software, cloud và automation với vận hành mô hình.',
	'Ưu tiên hệ thống rõ ràng, quan sát được và dễ bảo trì khi bài toán lớn dần.',
];

export const serviceCards = [
	{
		icon: 'pipeline',
		title: 'Pipeline ML có thể tái lập',
		body: 'Tổ chức dữ liệu, training và evaluation thành workflow rõ ràng để kết quả dễ kiểm tra và chạy lại.',
	},
	{
		icon: 'deploy',
		title: 'CI/CD và automation cho ML',
		body: 'Áp dụng Git, script, container và quy trình build để giảm thao tác thủ công khi thử nghiệm hoặc triển khai.',
	},
	{
		icon: 'observe',
		title: 'Monitoring và độ tin cậy',
		body: 'Tập trung vào log, metric, lỗi dữ liệu, latency và khả năng điều tra khi model hoặc pipeline hoạt động không như kỳ vọng.',
	},
	{
		icon: 'infra',
		title: 'Cloud-native deployment',
		body: 'Rèn luyện nền tảng Linux, Docker, backend và cloud để đóng gói, phục vụ và vận hành hệ thống ML gọn gàng hơn.',
	},
	{
		icon: 'research',
		title: 'Research-oriented AI systems',
		body: 'Quan tâm tới continual learning, document intelligence và distributed AI như các bài toán để học cách thiết kế hệ thống ML có chiều sâu.',
	},
];

export const education = [
	{
		title: 'Đại học Giao thông Vận tải',
		time: '2023 - 2027 (dự kiến)',
		body: 'Ngành Công nghệ thông tin, xây nền tảng về lập trình, backend, hệ thống và cách biến ý tưởng kỹ thuật thành sản phẩm chạy được.',
	},
	{
		title: 'Tự học Machine Learning Systems và MLOps',
		time: '2024 - hiện tại',
		body: 'Thực hành qua dự án cá nhân về automation, pipeline, container, cloud, backend và các chủ đề ML như training workflow, evaluation và continual learning.',
	},
];

export const experience = [
	{
		title: 'MLOps Engineer in development',
		time: '2024 - hiện tại',
		body: 'Xây dựng nền tảng từ software engineering, Linux, Docker, CI/CD và cloud để tiến dần tới pipeline ML có thể tái lập, triển khai và quan sát được.',
	},
	{
		title: 'Personal ML, automation and platform projects',
		time: '2024 - hiện tại',
		body: 'Dùng các dự án cá nhân để thực hành đóng gói ứng dụng, xử lý workflow, thiết kế backend, mô phỏng hệ thống và viết tài liệu kỹ thuật trung thực.',
	},
];

export const skills = [
	{ icon: 'python', title: 'Machine Learning Engineering', note: 'Python, data processing, training workflow, evaluation và experimentation ở mức dự án cá nhân' },
	{ icon: 'ci', title: 'MLOps and Platform Engineering', note: 'CI/CD, Docker, reproducibility, artifact thinking, automation và hướng tới model serving/monitoring' },
	{ icon: 'cloud', title: 'Cloud and Infrastructure', note: 'Linux, cloud fundamentals, networking, deployment, logging và observability' },
	{ icon: 'code', title: 'Software Engineering', note: 'TypeScript, backend/API thinking, Git, testing mindset và clean project structure' },
	{ icon: 'docker', title: 'Containers and Runtime', note: 'Chuẩn hóa môi trường chạy, đóng gói ứng dụng và giảm khác biệt giữa máy local và môi trường deploy' },
	{ icon: 'shield', title: 'Reliability and Security Basics', note: 'Secret hygiene, access boundaries, failure visibility và cấu hình an toàn từ đầu' },
];

export const portfolioProjects = [
	{
		title: 'Personal-Internet-Simulator',
		category: 'systems',
		label: 'Systems',
		description: 'Mô phỏng hành vi mạng và các thành phần internet để thử nghiệm cách hệ thống giao tiếp, định tuyến và chịu thay đổi.',
		problem: 'Giúp quan sát luồng mạng ở quy mô nhỏ trước khi áp dụng vào bài toán backend hoặc distributed systems.',
		role: 'Thiết kế mô phỏng, cấu trúc logic và tài liệu dự án.',
		stack: ['Simulation', 'Networking', 'Systems'],
		status: 'Experimental',
		url: 'https://github.com/Dyu20705/Personal-Internet-Simulator',
		image: sharedCoverImage,
	},
	{
		title: 'SmartSpender',
		category: 'app',
		label: 'App',
		description: 'Ứng dụng quản lý chi tiêu cá nhân, phù hợp để thực hành backend, luồng dữ liệu người dùng và giao diện dễ dùng.',
		problem: 'Theo dõi dòng tiền cá nhân theo cách đơn giản, có cấu trúc và dễ mở rộng.',
		role: 'Xây dựng logic ứng dụng, trải nghiệm nhập liệu và tổ chức dữ liệu.',
		stack: ['App', 'Data Flow', 'UX'],
		status: 'MVP',
		url: 'https://github.com/Dyu20705/SmartSpender',
		image: sharedCoverImage,
	},
	{
		title: 'myNote',
		category: 'tools',
		label: 'Tools',
		description: 'Công cụ ghi chú cá nhân tập trung vào tốc độ truy cập, quản lý nội dung và thói quen làm việc có thể lặp lại.',
		problem: 'Tạo một không gian ghi chú nhẹ để lưu tri thức kỹ thuật và giảm ma sát khi học.',
		role: 'Thiết kế workflow ghi chú, cấu trúc nội dung và trải nghiệm sử dụng.',
		stack: ['Productivity', 'Content Workflow', 'Tooling'],
		status: 'In development',
		url: 'https://github.com/Dyu20705/myNote',
		image: sharedCoverImage,
	},
	{
		title: 'dotfiles',
		category: 'tools',
		label: 'Tools',
		description: 'Bộ cấu hình shell, terminal và workflow cá nhân để đồng bộ môi trường làm việc.',
		problem: 'Giữ môi trường phát triển nhất quán khi chuyển máy hoặc thử nghiệm công cụ mới.',
		role: 'Tổ chức cấu hình, script và quy ước workflow cá nhân.',
		stack: ['Shell', 'Developer Experience', 'Automation'],
		status: 'Maintained',
		url: 'https://github.com/Dyu20705/dotfiles',
		image: sharedCoverImage,
	},
	{
		title: 'color-wars',
		category: 'app',
		label: 'App',
		description: 'Game chiến thuật theo lượt có tích hợp bot và cơ chế xử lý trạng thái ván chơi.',
		problem: 'Thực hành state management, bot logic và cách kiểm soát luật chơi có nhiều nhánh.',
		role: 'Xây dựng logic trạng thái, tương tác người chơi và bot ở mức dự án cá nhân.',
		stack: ['Game Logic', 'State Management', 'Bot'],
		status: 'Experimental',
		url: 'https://github.com/Dyu20705/color-wars',
		image: sharedCoverImage,
	},
	{
		title: 'SQUAREXO',
		category: 'app',
		label: 'App',
		description: 'Dự án game với logic thi đấu gọn, rõ ràng và có thể tiếp tục mở rộng thêm luật chơi.',
		problem: 'Rèn luyện cách biểu diễn luật, trạng thái và phản hồi tương tác trong một ứng dụng nhỏ.',
		role: 'Xây dựng gameplay loop và cấu trúc logic thi đấu.',
		stack: ['Game', 'Frontend', 'Interaction'],
		status: 'Completed prototype',
		url: 'https://github.com/Dyu20705/SQUAREXO',
		image: sharedCoverImage,
	},
];

export const galleryItems = [
	{ title: 'Khoảnh khắc 01', caption: 'Event', image: gallery01 },
	{ title: 'Khoảnh khắc 02', caption: 'Event', image: gallery02 },
	{ title: 'Khoảnh khắc 03', caption: 'Event', image: gallery03 },
	{ title: 'Khoảnh khắc 04', caption: 'Event', image: gallery04 },
	{ title: 'Khoảnh khắc 05', caption: 'Event', image: gallery05 },
	{ title: 'Khoảnh khắc 06', caption: 'Event', image: gallery06 },
];

export const sharedCover = sharedCoverImage;

export const blogCardMeta: Record<string, { tag: string; readTime: string }> = {
	'mlops-la-gi': { tag: 'MLOps', readTime: '6 phút' },
	'notebook-den-pipeline': { tag: 'Pipeline', readTime: '7 phút' },
	'versioning-va-experiment-tracking': { tag: 'Reproducibility', readTime: '6 phút' },
	'cicd-cho-machine-learning': { tag: 'CI/CD', readTime: '6 phút' },
	'monitoring-model-sau-deployment': { tag: 'Monitoring', readTime: '6 phút' },
	'event-driven-ai-document-pipeline': { tag: 'AI Systems', readTime: '7 phút' },
};
