import axios from "axios"

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "your-username"

export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  topics: string[]
  fork: boolean
  archived: boolean
  updated_at: string
}

export const getRepos = async (): Promise<Repo[]> => {
  try {
    const res = await axios.get<Repo[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`,
      { headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {} }
    )
    return res.data.filter(r => !r.fork && !r.archived)
  } catch {
    // Return mock data if API fails
    return MOCK_REPOS
  }
}

export const MOCK_REPOS: Repo[] = [
  { id:1, name:"inventory-system", description:"ระบบคลังสินค้าสำหรับบริษัท รองรับการเพิ่ม-ลด-ค้นหาสินค้า พร้อม Dashboard แสดงสถิติ", html_url:"https://github.com/your-username/inventory-system", homepage:"https://demo.example.com", stargazers_count:12, language:"TypeScript", topics:["nextjs","golang","mysql"], fork:false, archived:false, updated_at:"2024-06-01" },
  { id:2, name:"auth-crud-system", description:"ระบบสมัครสมาชิก Login พร้อม JWT Authentication และ Role-based Access Control", html_url:"https://github.com/your-username/auth-crud", homepage:null, stargazers_count:8, language:"Go", topics:["golang","fiber","jwt","react"], fork:false, archived:false, updated_at:"2024-05-20" },
  { id:3, name:"data-dashboard", description:"Dashboard แสดงข้อมูลเชิงสถิติ พร้อม Chart, Filter, และ Export ข้อมูล CSV", html_url:"https://github.com/your-username/dashboard", homepage:"https://dashboard.example.com", stargazers_count:15, language:"TypeScript", topics:["nextjs","chartjs","typescript"], fork:false, archived:false, updated_at:"2024-05-10" },
  { id:4, name:"recon-tool", description:"เครื่องมือ Reconnaissance สำหรับตรวจสอบข้อมูล Domain, IP, และ Open Ports อัตโนมัติ", html_url:"https://github.com/your-username/recon-tool", homepage:null, stargazers_count:6, language:"Go", topics:["golang","security","networking","cli"], fork:false, archived:false, updated_at:"2024-04-30" },
  { id:5, name:"ecommerce-shop", description:"ระบบร้านค้าออนไลน์ รองรับ Cart, Payment Gateway, และ Order Management", html_url:"https://github.com/your-username/shop", homepage:"https://shop.example.com", stargazers_count:20, language:"TypeScript", topics:["nextjs","stripe","mysql","tailwindcss"], fork:false, archived:false, updated_at:"2024-04-15" },
  { id:6, name:"portfolio-website", description:"เว็บ Portfolio ส่วนตัว แสดงผลงานและทักษะ ดึงข้อมูลจาก GitHub API อัตโนมัติ", html_url:"https://github.com/your-username/portfolio", homepage:"https://yourname.vercel.app", stargazers_count:30, language:"TypeScript", topics:["nextjs","tailwindcss","typescript"], fork:false, archived:false, updated_at:"2024-06-10" },
]
