import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // server: {
    server: {
      allowedHosts: ['dc577366eff4.ngrok-free.app']
    }
    // host: "192.168.1.37", // เปิดให้เข้าถึงจากที่อยู่ IP อื่น ๆ
    // host: "10.42.199.121", // เปิดให้เข้าถึงจากที่อยู่ IP อื่น ๆ
    // port: 3000, // หรือเลือกพอร์ตที่ต้องการ
  // },
})