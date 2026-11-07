<div align="center">

# 🚀 Rizqy Maulana Hakim — Portfolio

**Website portofolio pribadi berbasis Next.js** dengan dark mode & multi-bahasa (ID/EN)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[![Live Demo](https://img.shields.io/badge/🌐-Live_Demo-blue?style=for-the-badge)](https://riki-rg.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-riki--rg-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/riki-rg)

</div>

---

## 👋 Tentang Saya

Halo! Saya **Rizqy Maulana Hakim** — biasa dipanggil **Rizz** atau **Mbappe** 👋

Mahasiswa S1 Sistem Informasi di **Universitas Muhammadiyah Kudus (UMKU)** yang antusias mengeksplorasi:

- 🔧 **Full Stack Web Development**
- 🌐 **Jaringan Komputer**
- 📊 **Data Analysis**

Perjalanan coding saya dimulai sejak SMP dari bahasa **Pawn** (karena penasaran dengan game SA-MP 😄), dan terus berkembang mempelajari Python, C++, JavaScript, PHP, hingga sekarang eksplorasi Next.js.

## ✨ Fitur Website

| Fitur | Keterangan |
|-------|-----------|
| 🌗 **Dark / Light Mode** | Toggle tema dengan penyimpanan `localStorage` + deteksi preferensi sistem |
| 🌐 **Multi-Bahasa** | Switch Indonesia 🇮🇩 / English 🇬🇧 — semua konten diterjemahkan |
| 📱 **Responsive** | Layout adaptif dari mobile hingga desktop, dengan hamburger menu |
| ⚡ **Animasi** | Typing effect roles, progress bar skill saat scroll, hover effects |
| 🚀 **Static Export** | Prerendered penuh — cepat & SEO friendly |
| ♿ **Aksesibilitas** | Semantic HTML, aria-label, kontras warna baik |

## 📄 Section

- **Hero** — Perkenalan dengan animasi roles berganti otomatis
- **About** — Latar belakang & perjalanan ngoding
- **Skills** — Progress bar animasi (HTML, Python, Pawn, PHP, CSS, JS, dll)
- **Projects** — 6 proyek nyata dengan link ke repository
- **Contact** — Email, GitHub, LinkedIn, Instagram

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/-Next.js-black?logo=nextdotjs)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind-06B6D4?logo=tailwindcss&logoColor=white)

## 🚀 Menjalankan Secara Lokal

```bash
# Clone repository
git clone https://github.com/riki-rg/portfolio-nextjs.git
cd portfolio-nextjs

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

```bash
# Build production
npm run build
npm start
```

## 📁 Struktur Proyek

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css      # Styling & CSS variables (light/dark)
│   │   ├── layout.tsx       # Root layout + metadata
│   │   └── page.tsx         # Halaman utama
│   ├── components/
│   │   ├── providers.tsx    # Context: theme & language state
│   │   ├── navbar.tsx       # Navigasi + toggle theme/bahasa
│   │   ├── hero.tsx         # Hero section + typing animation
│   │   ├── about.tsx        # Tentang saya
│   │   ├── skills.tsx       # Skill progress bars
│   │   ├── projects.tsx     # Grid kartu proyek
│   │   ├── contact.tsx      # Kartu kontak
│   │   ├── footer.tsx       # Footer
│   │   └── use-in-view.tsx  # Hook IntersectionObserver
│   └── lib/
│       └── i18n.ts          # Kamus ID/EN + link eksternal
├── public/
└── package.json
```

## 🌍 Deployment

Website ini siap deploy ke:

- **Vercel** (rekomendasi): [vercel.com/new](https://vercel.com/new) → import repo → deploy
- **Netlify**: build command `npm run build`
- **GitHub Pages**: dengan static export
- **VPS / hosting sendiri**: `npm run build && npm start`

## 📞 Kontak

| Platform | Link |
|----------|------|
| 📧 Email | [rizqymaulanahakim774@gmail.com](mailto:rizqymaulanahakim774@gmail.com) |
| 🐙 GitHub | [github.com/riki-rg](https://github.com/riki-rg) |
| 💼 LinkedIn | [Rizqy Maulana Hakim](https://www.linkedin.com/in/rizqy-maulana-hakim-502a80373) |
| 📸 Instagram | [@rizqyhakim_](https://www.instagram.com/rizqyhakim_) |

---

<div align="center">

**Dibuat dengan ❤️ oleh Rizqy Maulana Hakim**

⭐ Kalau repo ini bermanfaat, kasih star ya!

</div>
