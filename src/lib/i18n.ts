export type Lang = "id" | "en";

export const LINKS = {
  email: "rizqymaulanahakim774@gmail.com",
  github: "https://github.com/riki-rg",
  linkedin:
    "https://www.linkedin.com/in/rizqy-maulana-hakim-502a80373",
  instagram: "https://www.instagram.com/rizqyhakim_",
};

export const dictionaries = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Skill",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, saya",
      name: "Rizqy Maulana Hakim",
      nickname: " biasa dipanggil Rizz atau Mbappe 👋",
      roles: [
        "Mahasiswa Sistem Informasi",
        "Full Stack Enthusiast",
        "Jaringan Komputer Enthusiast",
        "Data Analyst",
        "UI/UX Enthusiast",
      ],
      description:
        "Mahasiswa S1 Sistem Informasi UMKU yang gemar mengeksplorasi pengembangan web full stack, jaringan komputer, dan analisis data.",
      cta: "Lihat Proyek",
      contact: "Hubungi Saya",
    },
    about: {
      title: "Tentang Saya",
      p1: "Saya Rizqy Maulana Hakim, mahasiswa S1 Sistem Informasi di Universitas Muhammadiyah Kudus (UMKU). Minat saya ke pemrograman sudah muncul sejak SMP — bahasa pertama yang saya pelajari adalah Pawn karena tertarik dengan game SA-MP, dan dari situlah perjalanan saya di dunia coding dimulai.",
      p2: "Sejak itu saya terus mempelajari banyak bahasa pemrograman: Python, C++, JavaScript, PHP, dan lainnya. Fokus saya sekarang adalah Full Stack Web Development, jaringan komputer, dan analisis data — kombinasi yang saya percaya bisa menciptakan solusi digital untuk banyak masalah di dunia.",
    },
    skills: {
      title: "Skill & Teknologi",
      subtitle: "Tools yang saya gunakan dan sedang saya pelajari",
      items: [
        { name: "HTML", level: 60 },
        { name: "Python", level: 60 },
        { name: "Pawn (SA-MP Scripting)", level: 65 },
        { name: "PHP", level: 40 },
        { name: "CSS", level: 35 },
        { name: "JavaScript", level: 30 },
        { name: "C++", level: 5 },
        { name: "React & Next.js", level: 5 },
        { name: "Laravel", level: 5 },
      ],
    },
    projects: {
      title: "Proyek",
      subtitle: "Beberapa proyek yang pernah saya kerjakan",
      view: "Lihat Proyek",
      items: [
        {
          title: "Portfolio Website",
          description:
            "Website portofolio pribadi dengan desain bento grid, dark mode, dan berbagai animasi interaktif. Di-upgrade ke Next.js dengan multi-bahasa.",
          tags: ["HTML", "CSS", "JavaScript", "GSAP"],
          link: "https://riki-rg.github.io/Portofolio",
        },
        {
          title: "PC IPM",
          description:
            "Website organisasi PC IPM dengan frontend dan API terpisah — mengelola data anggota dan kegiatan organisasi.",
          tags: ["PHP", "JavaScript", "REST API"],
          link: "https://github.com/riki-rg/pc-ipm-api",
        },
        {
          title: "Project Bakery",
          description:
            "Aplikasi web toko bakery berbasis Laravel dengan dashboard admin dan manajemen produk.",
          tags: ["Laravel", "PHP", "Blade", "MySQL"],
          link: "https://github.com/riki-rg/Project-Bakery",
        },
        {
          title: "Bot Music Discord",
          description:
            "Bot Discord untuk memutar musik di voice channel, dibuat dengan Python.",
          tags: ["Python", "Discord API"],
          link: "https://github.com/riki-rg/bot-music-discord",
        },
        {
          title: "Web HIMSI",
          description:
            "Website untuk Himpunan Mahasiswa Sistem Informasi (HIMSI) yang sedang dikembangkan.",
          tags: ["PHP", "Web"],
          link: "https://github.com/riki-rg/himasi",
        },
        {
          title: "Todo API",
          description:
            "REST API untuk aplikasi todo list yang dibangun dengan bahasa Go, hasil eksplorasi backend.",
          tags: ["Go", "REST API", "Backend"],
          link: "https://github.com/riki-rg/todo-api",
        },
      ],
    },
    contact: {
      title: "Hubungi Saya",
      subtitle: "Jangan ragu untuk menghubungi saya",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      sendEmail: "Kirim Email",
    },
    footer: {
      madeWith: "Dibuat dengan",
      by: "oleh Rizqy Maulana Hakim",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Rizqy Maulana Hakim",
      nickname: " — usually called Rizz or Mbappe 👋",
      roles: [
        "Information Systems Student",
        "Full Stack Enthusiast",
        "Computer Network Enthusiast",
        "Data Analyst",
        "UI/UX Enthusiast",
      ],
      description:
        "An Information Systems student at UMKU who loves exploring full stack web development, computer networking, and data analysis.",
      cta: "View Projects",
      contact: "Contact Me",
    },
    about: {
      title: "About Me",
      p1: "I'm Rizqy Maulana Hakim, an Information Systems undergraduate at Universitas Muhammadiyah Kudus (UMKU). My interest in programming started in junior high — the first language I learned was Pawn because I was curious about the SA-MP game, and that's where my coding journey began.",
      p2: "Since then I've kept learning many languages: Python, C++, JavaScript, PHP, and more. My current focus is Full Stack Web Development, computer networking, and data analysis — a combination I believe can create digital solutions for many real-world problems.",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Tools I use and currently learning",
      items: [
        { name: "HTML", level: 60 },
        { name: "Python", level: 60 },
        { name: "Pawn (SA-MP Scripting)", level: 65 },
        { name: "PHP", level: 40 },
        { name: "CSS", level: 35 },
        { name: "JavaScript", level: 30 },
        { name: "C++", level: 5 },
        { name: "React & Next.js", level: 5 },
        { name: "Laravel", level: 5 },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Some projects I've worked on",
      view: "View Project",
      items: [
        {
          title: "Portfolio Website",
          description:
            "Personal portfolio website with a bento grid design, dark mode, and interactive animations. Upgraded to Next.js with multi-language support.",
          tags: ["HTML", "CSS", "JavaScript", "GSAP"],
          link: "https://riki-rg.github.io/Portofolio",
        },
        {
          title: "PC IPM",
          description:
            "Organization website for PC IPM with separate frontend and API — managing member and organizational activity data.",
          tags: ["PHP", "JavaScript", "REST API"],
          link: "https://github.com/riki-rg/pc-ipm-api",
        },
        {
          title: "Project Bakery",
          description:
            "Bakery shop web application built with Laravel featuring an admin dashboard and product management.",
          tags: ["Laravel", "PHP", "Blade", "MySQL"],
          link: "https://github.com/riki-rg/Project-Bakery",
        },
        {
          title: "Discord Music Bot",
          description:
            "A Discord bot for playing music in voice channels, built with Python.",
          tags: ["Python", "Discord API"],
          link: "https://github.com/riki-rg/bot-music-discord",
        },
        {
          title: "HIMSI Web",
          description:
            "Website for the Information Systems Student Association (HIMSI), currently in development.",
          tags: ["PHP", "Web"],
          link: "https://github.com/riki-rg/himasi",
        },
        {
          title: "Todo API",
          description:
            "REST API for a todo list application built with Go — a backend exploration project.",
          tags: ["Go", "REST API", "Backend"],
          link: "https://github.com/riki-rg/todo-api",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Feel free to reach out to me",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      sendEmail: "Send Email",
    },
    footer: {
      madeWith: "Made with",
      by: "by Rizqy Maulana Hakim",
    },
  },
} as const;

export type Dict = (typeof dictionaries)["id"];
