export type TimelineItem = { title: string; org: string; period: string; desc: string };

export type Profile = {
  name: string;
  title: string;
  avatarUrl?: string;
  location?: string;
  email?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  summary?: string;
  highlights: { label: string; value: string }[];
  skills: string[];
  timeline: TimelineItem[];
  hobbies: string[];          
};

export const PROFILE: Profile = {
  name: "Folk",
  title: "Computer Engineering Student",
  avatarUrl: "/560787931_1906758349889224_1123794685514649335_n.jpg",
  location: "Bangkok, Thailand",
  email: "wisrutyaemprayur@gmail.com",
  website: "https://www.instagram.com/ur4avf0lk",
  github: "https://github.com/wisraut",
  summary:
    "สนใจ Frontend, Systems, และ Database Design โฟกัส React + TypeScript + Tailwind และ Radix UI",
  highlights: [
    { label: "React + TS", value: "1+ yrs" },
    { label: "PostgreSQL", value: "Labs & Projects" },
    { label: "Docker/GNS3", value: "Daily" },
  ],
  skills: ["React", "TypeScript", "Tailwind", "Radix UI", "Node", "PostgreSQL"],
  timeline: [
    { title: "Ticket Booking App", org: "Personal Project", period: "2025", desc: "แอปจองตั๋ว data-driven แยก component/route ชัด" },
  ],
  hobbies: ["Coding", "Music", "Gaming", "Football"],
};
