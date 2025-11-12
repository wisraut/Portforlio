// src/data/portfolio.ts
export type SkillLevel = { label: string; percent: number };

export const PORTFOLIO = {
  name: "Folk",
  role: "Computer Engineering Student",
  bio: "สนใจ Frontend, Systems, Database Design โฟกัส React + TypeScript + Tailwind + Radix UI",
  location: "Bangkok, Thailand",
  email: "wisrutyaemprayur@gmail.com",
  website: "https://www.instagram.com/ur4avf0lk/",
  github: "https://github.com/yourname",

  highlights: [
    { label: "React + TS", value: "3+ yrs" },
    { label: "PostgreSQL", value: "Labs & Projects" },
    { label: "Docker/GNS3", value: "Daily" },
  ],

  skills: ["React", "TypeScript", "Tailwind", "Radix UI", "Node", "PostgreSQL", "Docker"],

  skillLevels: [
    { label: "HTML/CSS", percent: 95 },
    { label: "TypeScript", percent: 80 },
    { label: "Node.js", percent: 80 },
    { label: "PostgreSQL", percent: 50 },
  ] as SkillLevel[],

  projects: [
    {
      title: "Ticket Booking App",
      period: "2025",
      summary: "ระบบจองตั๋ว data-driven ด้วย React + TS + Tailwind + Router",
      tech: ["React", "TypeScript", "Tailwind"],
      demo: "https://github.com/wisraut/BaitongTicketMajor",
      source: "https://www.facebook.com/wisarut.yamprayoon.7/",
      cover: "/Screenshot 2025-11-12 215752.png",
    },
  ],
};
