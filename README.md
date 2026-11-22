# Portfolio — Le Phan Hai Long

Trang portfolio cá nhân của **Lê Phan Hải Long (Full-Stack Developer)** được xây dựng dựa trên CV bằng **React**, **Vite**, **TypeScript** và **Tailwind CSS v4**.

## Tính năng chính

- **Song ngữ EN / VI**: Chuyển đổi nhanh giữa tiếng Anh và tiếng Việt ngay trên thanh điều hướng.
- **Light / Dark Mode**: Hỗ trợ giao diện Sáng/Tối, tự động lưu lựa chọn vào `localStorage` (`portfolio-theme`).
- **Nội dung đầy đủ theo CV**:
  - **About / Hero**: Giới thiệu tổng quan, trạng thái sẵn sàng công việc, sao chép nhanh email và liên kết GitHub.
  - **Experience**: Kinh nghiệm thực tập tại FPT Software và phần mở rộng hạ tầng AWS với Terraform.
  - **Projects**: Chi tiết kiến trúc và các liên kết GitHub, Live Demo, Video Demo cho các dự án (*AI-Powered TOEIC Learning Platform*, *Social-Integrated Online Bookstore*).
  - **Skills**: Nhóm kỹ năng Languages, Backend, Frontend, Database & DevOps.
  - **Education & Awards**: Thông tin học vấn tại VKU, chứng chỉ và giải thưởng.
  - **Contact**: Sao chép nhanh email, số điện thoại và thông tin liên hệ.

## Công nghệ sử dụng

- **Core**: React 19, TypeScript, Vite
- **Styling & Icons**: Tailwind CSS v4 (`@tailwindcss/vite`), Lucide React

## Cấu trúc thư mục

```text
portfolio/
├── assets/                     # File nguồn ban đầu (CV PDF, ảnh thẻ gốc)
├── public/
│   └── Le-Phan-Hai-Long.pdf    # File CV phục vụ tải trực tiếp
├── src/
│   ├── assets/
│   │   └── portrait.jpg        # Ảnh thẻ sử dụng trong Hero
│   ├── components/             # Các component UI (Navbar, Hero, Experience, Projects, ...)
│   ├── data/
│   │   └── portfolioData.ts    # Dữ liệu song ngữ EN / VI và thông tin liên hệ
│   ├── types/
│   │   └── portfolio.ts        # Định nghĩa kiểu TypeScript cho dữ liệu portfolio
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Cài đặt và chạy dự án

Yêu cầu: Node.js và npm.

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy môi trường phát triển (dev server)
npm run dev

# 3. Kiểm tra kiểu TypeScript
npm run typecheck

# 4. Build bản production
npm run build

# 5. Xem trước bản build production
npm run preview
```

## Tùy chỉnh nội dung

- Cập nhật thông tin cá nhân, kinh nghiệm, dự án, kỹ năng và bản dịch EN/VI tại `src/data/portfolioData.ts`.
- Thay ảnh chân dung tại `src/assets/portrait.jpg`.
- Thay file CV tải về tại `public/Le-Phan-Hai-Long.pdf`.

