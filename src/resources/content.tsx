import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Md. Mehedi Hasan",
  lastName: "Soumik",
  name: `Md. Mehedi Hasan Soumik`,
  role: "SQA Engineer",
  avatar: "/images/projects/Mehedi_Hasan.jpg",
  email: "mehedihasan.mehedi607@gmail.com",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bangla"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Software Quality Assurance, sharing insights on the intersection of creativity, precision, and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mehedi-hasan-soumik",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mehedi-soumik/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/MehediHasan.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between requirements and quality</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Aquality Selenium</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
       I'm Mehedi, a SQA engineer at <strong>a1qa</strong>, where I craft intuitive
       <br />
       user experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a dedicated Software Quality Assurance (SQA) Engineer with expertise in manual testing, API testing, performance testing, and automation testing. I have hands-on experience using tools like Postman, JMeter, Selenium, TestNG, and Aquality Services to ensure software quality and reliability.

        I am skilled in requirement analysis, test planning, test case design, execution, and reporting, and I actively apply BDD (Behavior-Driven Development) practices to bridge the gap between technical and business requirements. I thrive in agile environments and am committed to continuous learning and professional growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Join Venture AI",
        timeframe: "2025 - Present",
        role: "SQA Engineer",
        achievements: [
          <>
              Designed and executed automated test suites using Selenium and TestNG, improving test coverage and reducing regression issues by 40%.
            </>,
            <>
              Implemented API testing workflows with Postman and Newman, ensuring robust and reliable backend services.
            </>,
            <>
              Applied BDD practices to create clear and maintainable test scenarios, bridging communication between QA and development teams.
            </>,
            <>
              Conducted performance testing with JMeter, identifying bottlenecks and optimizing application response times by 25%.
            </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/header_jmeter.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
     company: "A1qa.",
     timeframe: "2025 - Present(Part Time)",
     role: "QA Automation Engineer",
     achievements: [
       <>
         Designed and implemented automated test suites using Selenium and TestNG, improving regression testing efficiency by 35%.
       </>,
       <>
         Conducted API testing with Postman and Newman, validating backend functionality and generating detailed reports for stakeholders.
       </>,
       <>
         Applied BDD practices to create readable and maintainable test scenarios, bridging communication between QA and development teams.
       </>,
       <>
         Performed performance and load testing using JMeter, identifying bottlenecks and optimizing application speed by 20%.
       </>,
     ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Daffodil International University",
        description: <>Computer Science and Engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Focused on enhancing software quality through manual, API, and automated testing using modern QA practices.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
              {
                title: "Manual Testing",
                description: (
                  <>Requirement Analysis, Test Planning, Test Case Design and Review,
                    Test Execution, Evaluation, Root Cause Analysis, Bug Reporting, Knowledge on Agile and
                    Scrum methodologies.
                    <br />
                    <strong>Concepts:</strong> SDLC, STLC, Bug Life Cycle.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/Manual1.png", alt: "Project image", width: 16, height: 9 },
                  { src: "/images/projects/project-01/Manual2.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "Automation with Selenium",
                description: (
                  <>Experienced in building reliable test automation scripts using Selenium, TestNG, and Aquality Services to ensure software quality and efficiency.</>
                ),
                images: [
                  { src: "/images/projects/project-01/selenium-automation.jpg", alt: "Project image", width: 16, height: 9 },
                  { src: "/images/projects/project-01/software-testing.jpg", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "Automation with BDD",
                description: (
                  <>Skilled in implementing Behavior Driven Development (BDD) frameworks using Cucumber, Gherkin, and Selenium.
                    Experienced in writing feature files with clear scenarios, step definitions, and integrating with TestNG for
                    seamless automation. Focused on improving collaboration between developers, testers, and stakeholders
                    through living documentation.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/cucumber.png", alt: "Project image", width: 16, height: 9 },
                  { src: "/images/projects/project-01/cucumber2.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "API Testing using Postman & Newman",
                description: (
                  <>Skilled in testing and validating APIs using Postman, creating automated test scripts, and generating detailed reports with Newman.</>
                ),
                images: [
                  { src: "/images/projects/project-01/postman-api.jpg", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "Performance Testing",
                description: (
                  <>Proficient in using <strong>JMeter</strong> for load, stress, and performance testing.
                    Skilled in creating and executing test plans to analyze system behavior, measure response
                    times, and identify bottlenecks to ensure scalability and reliability.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/JMeter.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "Source & Version Control",
                description: (
                  <>Experienced in using <strong>Git</strong> for version control and <strong>GitHub</strong> for
                    collaboration, code review, and repository management. Skilled in branching strategies,
                    pull requests, and resolving merge conflicts to maintain clean and efficient codebases.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/GIT.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "CI/CD Pipelines",
                description: (
                  <>Experienced in configuring and managing <strong>Jenkins</strong> pipelines for continuous integration
                    and continuous delivery. Skilled in automating build, test, and deployment processes to ensure faster,
                    reliable, and efficient software delivery.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/CICD.png", alt: "Project image", width: 18, height: 9 },
                  { src: "/images/projects/project-01/Jenkins.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                title: "Bug Tracking & Project Management",
                description: (
                  <>Proficient in using <strong>Jira</strong> for bug tracking, task management, and sprint planning.
                    Experienced in Agile workflows, creating user stories, managing backlogs, and collaborating with
                    cross-functional teams to ensure smooth project delivery.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/Jira.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
              {
                  title: "Cross-Browser Testing",
               description: (
                 <>
                   Experienced in using <strong>BrowserStack</strong> to perform cross-browser and cross-device testing.
                   Skilled in verifying website and application functionality across multiple browsers, OS versions,
                   and screen sizes to ensure consistent user experience.

                        </>
                          ),
                          images: [
                            { src: "/images/projects/project-01/BrowserStack.png", alt: "Project image", width: 18, height: 9 },
                          ],
                        },
                     {
                         title: "Containerization with Docker",
                         description: (
                           <>
                             Experienced in using <strong>Docker</strong> to create, manage, and deploy containerized applications.
                             Skilled in building Docker images, writing Dockerfiles, and orchestrating containers to ensure
                             consistent and scalable development and testing environments.
                           </>
                                              ),
                                              images: [
                                                { src: "/images/projects/project-01/Docker.png", alt: "Project image", width: 16, height: 10 },
                                              ],
                                            },
              {
                title: "Programming Languages",
                description: (
                  <>Skilled in <strong>Java</strong> for test automation, object-oriented programming, and backend logic,
                    as well as <strong>JavaScript</strong> for dynamic web development, front-end interactivity, and
                    automation scripting.
                  </>
                ),
                images: [
                  { src: "/images/projects/project-01/Java.png", alt: "Project image", width: 16, height: 9 },
                  { src: "/images/projects/project-01/JavaScript.png", alt: "Project image", width: 16, height: 9 },
                ],
              },
            ]

  },
};

const blog: Blog = {
  path: "/projects",
  label: "Project",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/received_1342310803144180.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158923862436333148_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_20250827_135604_923~2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158923862436333149_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/avatar.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/photo_6158730391339517560_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158730391339517557_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158730391339517558_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158730391339517559_y.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo_6158730391339517556_y.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
