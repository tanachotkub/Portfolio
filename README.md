# Personal Portfolio Website

เว็บ Portfolio ส่วนตัว สร้างด้วย Next.js + Tailwind CSS ดึงข้อมูลจาก GitHub API อัตโนมัติ

## Getting Started

```bash
npm install
npm run dev
```

เปิดที่ http://localhost:3000

## การตั้งค่า

แก้ไขไฟล์ `.env.local`:
```
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-token  # optional, เพิ่ม rate limit
```

## Deploy บน Vercel

1. Push ขึ้น GitHub
2. ไปที่ vercel.com → Import Repo
3. เพิ่ม Environment Variables
4. Deploy!

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data**: GitHub REST API
- **Deploy**: Vercel
