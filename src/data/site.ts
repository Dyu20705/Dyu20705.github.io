import { publicProfile } from './profile.js';
import profilePhoto from '../assets/selfie/toi.png';
import gallery01 from '../assets/img/IMG_20240927_082039_070.jpg';
import gallery02 from '../assets/img/IMG_20241111_143050_109.jpg';
import gallery03 from '../assets/img/IMG_20241123_142808_598.jpg';
import gallery04 from '../assets/img/IMG_20241203_090358_092.jpg';
import gallery05 from '../assets/img/IMG_20241203_093918_015.jpg';
import gallery06 from '../assets/img/IMG_20241203_103715_582.jpg';

export const profile = {
  ...publicProfile,
  location: { vi: 'Hà Nội, Việt Nam', en: 'Hanoi, Vietnam' }, photo: profilePhoto,
};
export const navItems = [
  { id: 'about', href: '/about', vi: 'Giới thiệu', en: 'About' },
  { id: 'resume', href: '/resume', vi: 'Hồ sơ', en: 'Resume' },
  { id: 'portfolio', href: '/portfolio', vi: 'Dự án', en: 'Portfolio' },
  { id: 'blog', href: '/blog', vi: 'Blog', en: 'Blog' },
  { id: 'contact', href: '/contact', vi: 'Liên hệ', en: 'Contact' },
  { id: 'gallery', href: '/gallery', vi: 'Ảnh', en: 'Gallery' },
  { id: 'cv', href: '/cv', vi: 'CV', en: 'CV' },
];
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Dyu20705' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/duynguyenvan05/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/nguyndi_utc64/' },
];
export const galleryItems = [
  { image: gallery01, alt: { vi: 'Sân khấu hội nghị sinh viên tại Đại học Giao thông Vận tải.', en: 'Student conference stage at the University of Transport and Communications.' } },
  { image: gallery02, alt: { vi: 'Màn hình sự kiện FPT Leader Talk trong hội trường.', en: 'FPT Leader Talk event screen in an auditorium.' } },
  { image: gallery03, alt: { vi: 'Màn hình POKT Vietnam RPC Meetup và người tham dự.', en: 'POKT Vietnam RPC Meetup screen and attendees.' } },
  { image: gallery04, alt: { vi: 'Khách tham quan trước khu trưng bày VTIS.', en: 'Visitors in front of a VTIS exhibition display.' } },
  { image: gallery05, alt: { vi: 'Sân khấu VTIS 2024 nhìn từ hàng ghế hội trường.', en: 'VTIS 2024 stage seen from the auditorium seating.' } },
  { image: gallery06, alt: { vi: 'Màn hình hội thảo về ứng dụng blockchain trong giáo dục.', en: 'Seminar screen about blockchain applications in education.' } },
];
