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
      building production systems. Proficient in Go, PHP, JavaScript, TypeScript, C#, and Lua.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/nyamops?v=4",
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
              Built product from zero to production in 6 months, architecting entire
              system and tech stack
            </li>
            <li>
              Scaled team from 2 to 6 engineers (backend, frontend, mobile, QA, DevOps)
              with zero turnover
            </li>
            <li>
              Migrated infrastructure from bare metal to cloud, reducing costs and
              improving scalability
            </li>
            <li>
              Decomposed monolith into microservices, improving maintainability and
              deployment speed
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
              Led delivery of company's first production microservice, making the team
              first to release in new architecture
            </li>
            <li>
              Co-led microservice development in partner team, transferring Symfony
              expertise and best practices
            </li>
            <li>
              Drove company-wide transition from PHP to Go through training programs
              and practical adoption
            </li>
            <li>
              Mentored team members on microservices architecture and modern development
              practices
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
              Designed and implemented chatbot for employee interactions, improving
              accessibility and reducing support workload
            </li>
            <li>
              Optimized notification and communication systems for reliable message
              delivery to thousands of employees
            </li>
            <li>
              Enhanced code quality through systematic refactoring, reviews, and
              architectural improvements
            </li>
            <li>
              Collaborated with team lead, QA, and cross-functional teams to deliver
              reliable solutions
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
              Successfully contributed to migration from Drupal to Symfony, improving
              flexibility and scalability
            </li>
            <li>
              Optimized performance of critical backend services, reducing response
              time and server load
            </li>
            <li>
              Mentored newcomers and reduced team's bus factor through knowledge
              sharing
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