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