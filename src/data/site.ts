import profilePhoto from '../assets/selfie/IMG_20240828_123241_307.jpg';
import sharedCoverImage from '../assets/img/Gixa6GybEAEPw8E.png';
import gallery01 from '../assets/img/IMG_20240927_082039_070.jpg';
import gallery02 from '../assets/img/IMG_20241111_143050_109.jpg';
import gallery03 from '../assets/img/IMG_20241123_142808_598.jpg';
import gallery04 from '../assets/img/IMG_20241203_090358_092.jpg';
import gallery05 from '../assets/img/IMG_20241203_093918_015.jpg';
import gallery06 from '../assets/img/IMG_20241203_103715_582.jpg';

export const profile = {
	name: 'Nguyễn Văn Duy',
	role: 'System & Infrastructure Engineer',
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
	'Thiết kế hệ thống dễ bảo trì ngay từ cấu trúc đầu tiên.',
	'Ưu tiên độ tin cậy, khả năng khôi phục và quan sát vận hành.',
	'Xem bảo mật và khả năng mở rộng là tiêu chuẩn nền, không phải phần thêm sau.',
];

export const serviceCards = [
	{
		icon: 'infra',
		title: 'Thiết kế hạ tầng',
		body: 'Xây dựng kiến trúc cloud, Linux và networking theo hướng rõ ràng, kiểm soát được và dễ mở rộng.',
	},
	{
		icon: 'deploy',
		title: 'Triển khai và tự động hóa',
		body: 'Tổ chức CI/CD, container và quy trình release để việc triển khai ổn định, lặp lại được và ít rủi ro.',
	},
	{
		icon: 'security',
		title: 'Bảo mật hệ thống',
		body: 'Giảm bề mặt tấn công bằng default an toàn, quản lý secret tốt hơn và phân quyền rõ ràng.',
	},
	{
		icon: 'observe',
		title: 'Vận hành và quan sát',
		body: 'Theo dõi log, metrics và trace để phát hiện vấn đề sớm và hỗ trợ điều tra sự cố nhanh hơn.',
	},
];

export const education = [
	{
		title: 'Đại học Giao thông Vận tải',
		time: '2023 - 2027 (dự kiến)',
		body: 'Ngành Công nghệ thông tin, tập trung vào backend, hệ thống và tư duy triển khai thực tế.',
	},
	{
		title: 'Tự học Cloud, Linux và System Operations',
		time: '2024 - hiện tại',
		body: 'Thực hành qua các dự án cá nhân, tự thiết kế môi trường chạy, đóng gói, monitor và tối ưu quy trình vận hành.',
	},
];

export const experience = [
	{
		title: 'System & Infrastructure Engineer',
		time: '2024 - hiện tại',
		body: 'Xây dựng backend, công cụ automation và các thành phần hạ tầng nhỏ gọn nhưng có khả năng vận hành ổn định.',
	},
	{
		title: 'Systems Automation & Deployment Projects',
		time: '2024 - hiện tại',
		body: 'Tập trung vào container, deploy pipeline, monitoring, observability và cách giảm rủi ro khi thay đổi hệ thống.',
	},
];

export const skills = [
	{ icon: 'linux', title: 'Linux', note: 'Môi trường vận hành và tooling hằng ngày' },
	{ icon: 'docker', title: 'Docker', note: 'Đóng gói ứng dụng và chuẩn hóa môi trường chạy' },
	{ icon: 'cloud', title: 'Cloud', note: 'Tư duy hạ tầng, dịch vụ và khả năng mở rộng' },
	{ icon: 'nginx', title: 'Nginx', note: 'Reverse proxy, routing và phục vụ ứng dụng' },
	{ icon: 'code', title: 'TypeScript', note: 'Ứng dụng web, backend và automation script' },
	{ icon: 'python', title: 'Python', note: 'Tooling, script hệ thống và xử lý tác vụ' },
	{ icon: 'ci', title: 'CI/CD', note: 'Quy trình build, test và release lặp lại được' },
	{ icon: 'shield', title: 'Security', note: 'Default an toàn, secret và phân quyền' },
];

export const portfolioProjects = [
	{
		title: 'dotfiles',
		category: 'tools',
		label: 'Tools',
		description: 'Bộ cấu hình shell, terminal và workflow cá nhân để đồng bộ môi trường làm việc.',
		url: 'https://github.com/Dyu20705/dotfiles',
		image: sharedCoverImage,
	},
	{
		title: 'Personal-Internet-Simulator',
		category: 'other',
		label: 'Other',
		description: 'Mô phỏng hành vi mạng và các thành phần internet để thử nghiệm ý tưởng hệ thống.',
		url: 'https://github.com/Dyu20705/Personal-Internet-Simulator',
		image: sharedCoverImage,
	},
	{
		title: 'myNote',
		category: 'tools',
		label: 'Tools',
		description: 'Công cụ ghi chú cá nhân tập trung vào tốc độ truy cập, quản lý nội dung và thói quen làm việc.',
		url: 'https://github.com/Dyu20705/myNote',
		image: sharedCoverImage,
	},
	{
		title: 'SQUAREXO',
		category: 'app',
		label: 'App',
		description: 'Dự án game với logic thi đấu gọn, rõ ràng và có thể tiếp tục mở rộng thêm luật chơi.',
		url: 'https://github.com/Dyu20705/SQUAREXO',
		image: sharedCoverImage,
	},
	{
		title: 'SmartSpender',
		category: 'app',
		label: 'App',
		description: 'Ứng dụng quản lý chi tiêu cá nhân với mục tiêu theo dõi dòng tiền đơn giản và dễ dùng.',
		url: 'https://github.com/Dyu20705/SmartSpender',
		image: sharedCoverImage,
	},
	{
		title: 'color-wars',
		category: 'app',
		label: 'App',
		description: 'Game chiến thuật theo lượt có tích hợp bot và cơ chế xử lý trạng thái ván chơi.',
		url: 'https://github.com/Dyu20705/color-wars',
		image: sharedCoverImage,
	},
];

export const galleryItems = [
	{ title: 'Khoảnh khắc 01', caption: 'Ảnh chân dung cá nhân', image: gallery01 },
	{ title: 'Khoảnh khắc 02', caption: 'Góc nhìn đời sống thường ngày', image: gallery02 },
	{ title: 'Khoảnh khắc 03', caption: 'Một khung hình ngẫu nhiên', image: gallery03 },
	{ title: 'Khoảnh khắc 04', caption: 'Không gian và ánh sáng', image: gallery04 },
	{ title: 'Khoảnh khắc 05', caption: 'Nhịp sinh hoạt cá nhân', image: gallery05 },
	{ title: 'Khoảnh khắc 06', caption: 'Một chi tiết đáng nhớ', image: gallery06 },
];

export const sharedCover = sharedCoverImage;

export const blogCardMeta: Record<string, { tag: string; readTime: string }> = {
	'first-post': { tag: 'Architecture', readTime: '4 phút' },
	'second-post': { tag: 'Observability', readTime: '4 phút' },
	'third-post': { tag: 'Security', readTime: '3 phút' },
	'using-mdx': { tag: 'Secrets', readTime: '3 phút' },
	'markdown-style-guide': { tag: 'Checklist', readTime: '3 phút' },
};
