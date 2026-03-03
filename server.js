// โหลดไลบรารีที่จำเป็น
const express = require('express');
const path = require('path');

// สร้างแอป Express
const app = express();
// กำหนดพอร์ตจาก environment หรือใช้ 3000
const PORT = process.env.PORT || 3000;

// อนุญาตให้รับ JSON ใน body
app.use(express.json());

// เพิ่มเส้นทาง /status เพื่อตรวจสอบสถานะเซิร์ฟเวอร์
app.get('/status', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

// Serve the static site (index.html, css, js, image/, music/)
// ให้บริการไฟล์สแตติกทั้งหมดจากโฟลเดอร์โปรเจกต์
app.use(express.static(path.join(__dirname)));

// เริ่มเซิร์ฟเวอร์ที่พอร์ตกำหนด
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
