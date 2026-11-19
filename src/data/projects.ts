export type ProjectStatus = "live" | "academic";

export type Project = {
  title: string;
  summary: string;
  status: ProjectStatus;
  tags: string[];
  link?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Aethr",
    summary:
      "A full-stack financial management platform for small and medium businesses, with invoice generation, receipt OCR, multi-currency support and a role-based admin system with fraud detection.",
    status: "live",
    tags: ["React", "Node.js", "Express", "MongoDB Atlas"],
    link: "https://aethr-001.netlify.app",
  },
  {
    title: "Nosli Task Manager",
    summary:
      "A task tool for organizing, tracking and prioritizing personal or team work.",
    status: "live",
    tags: ["React", "Team project"],
    link: "https://symphonious-pudding-1679f0.netlify.app/",
    note: "Built in collaboration.",
  },
  {
    title: "KISUL Shopping",
    summary:
      "An e-commerce site with dynamic product listings, cart management and transaction workflows.",
    status: "live",
    tags: ["React", "State management", "Responsive UI"],
    link: "https://vocal-cuchufli-24b1df.netlify.app",
  },
  {
    title: "Library Rental App",
    summary:
      "An Android app for borrowing and returning books, user accounts and inventory tracking, with UML documentation.",
    status: "academic",
    tags: ["Android Studio", "UML"],
    note: "Group project.",
  },
];