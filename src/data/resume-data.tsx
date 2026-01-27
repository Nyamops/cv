import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Danila Shvets",
  initials: "DS",
  location: "Moscow, Russia",
  locationLink: "https://www.google.com/maps/place/Moscow",
  about: "Software Engineer with 7+ years of experience building scalable systems.",
  summary: (
    <>
      Software engineer based in Moscow, Russia with 7+ years of experience
      building scalable systems. Proficient in Go, PHP, JavaScript, TypeScript, C#, and Lua.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/33228355?v=4",
  personalWebsiteUrl: "https://github.com/nyamops",
  contact: {
    email: "danila.schvets@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nyamops",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/danila-shvets",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Saratov State Technical University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Likvi",
      link: "https://likvi.com/",
      badges: ["Go", "PHP", "Microservices", "PostgreSQL"],
      title: "Team Lead · CTO",
      start: "2023",
      end: "2025",
      description: (
        <>
          Led technical development of worldwide car search aggregator from scratch
          to 70,000 MAU.
          <ul className="list-inside list-disc">
            <li>
              Built the product from scratch and led architecture and technical
              decisions from MVP to production
            </li>
            <li>
              Delivered the first MVP in ~6 months starting from zero codebase,
              infrastructure, or processes
            </li>
            <li>
              Scaled the team from 2 to 6 people (backend, frontend, mobile, QA, DevOps),
              with no turnover over 3 years and clear growth paths for engineers
            </li>
            <li>
              Migrated infrastructure from bare metal to cloud, reduced downtime,
              set up CI/CD, and split a monolith into microservices to improve
              reliability and feature delivery
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Eapteka",
      link: "https://eapteka.ru/",
      badges: ["Go", "PHP", "Microservices", "PostgreSQL"],
      title: "Senior Software Engineer · Technical Lead",
      start: "2022",
      end: "2023",
      description: (
        <>
          Technical lead during company's transition from monolith to microservices.
          <ul className="list-inside list-disc">
            <li>
              Delivered the team’s first production microservice during
              the company’s early transition from a monolith
            </li>
            <li>
              Took responsibility for backend design decisions within
              the team and ensured technical quality through reviews and discussions
            </li>
            <li>
              Improved knowledge sharing and technical alignment by organizing
              meetups and encouraging participation in external engineering events
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Skyeng",
      link: "https://skyeng.ru/",
      badges: ["PHP", "PostgreSQL"],
      title: "Senior Software Engineer",
      start: "2021",
      end: "2022",
      description: (
        <>
          Leading developer for internal HRM system serving thousands of employees.
          <ul className="list-inside list-disc">
            <li>
              Took ownership of several key features in the internal HRM system,
              from design to production
            </li>
            <li>
              Built a system for employee interactions, including notifications
              and internal communication tools, used by thousands of employees,
              improving accessibility and reducing manual support
            </li>
            <li>
              Raised overall code quality and maintainability through refactoring,
              code reviews, and close collaboration with QA and other teams
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Tendertech",
      link: "https://tendertech.ru/",
      badges: ["PHP", "PostgreSQL"],
      title: "Middle Software Engineer",
      start: "2019",
      end: "2020",
      description: (
        <>
          Contributed to fintech platform for bank guarantees, loans, and insurance.
          Grew from Junior to Middle Developer.
          <ul className="list-inside list-disc">
            <li>
              Contributed to the migration of the core product from Drupal to Symfony,
              improving maintainability and performance of critical financial services
            </li>
            <li>
              Supported team development by mentoring junior engineers and sharing
              knowledge across the team.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Go",
    "PHP",
    "Lua",
    "Design Systems",
    "System Architecture",
    "Remote Team Leadership",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "Vertica",
    "Cassandra",
    "ClickHouse",
    "Memcached",
    "Redis",
    "Apache Kafka",
    "RabbitMQ",
    "Docker",
    "OpenTelemetry",
    "Elasticsearch",
    "Grafana",
  ],
  projects: [],
} as const;
