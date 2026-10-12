require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");
const connectDB = require("./config/db");

const seedJobs = async () => {
    await connectDB();
    
    // Clear existing jobs to prevent duplicates during testing
    await Job.deleteMany({});
    console.log("Cleared existing jobs");

    const tcsJobs = [
        {
            companyName: "TCS",
            role: "Software Engineer",
            package: "₹7.0 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["Java", "React", "SQL"],
            description: "Develop and maintain software applications.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
        },
        {
            companyName: "TCS",
            role: "Systems Engineer",
            package: "₹6.0 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["Python", "Linux", "Networking"],
            description: "System administration and troubleshooting.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
        },
        {
            companyName: "TCS",
            role: "Data Analyst",
            package: "₹5.5 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["SQL", "Excel", "PowerBI"],
            description: "Analyze large datasets and create reports.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now()) // Today
        },
        {
            companyName: "TCS",
            role: "Associate Consultant",
            package: "₹8.0 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["Consulting", "Communication", "Agile"],
            description: "Consult with clients on IT transformations.",
            criteria: {
                minCgpa: 7.0,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now() + 26 * 24 * 60 * 60 * 1000) // 26 days from now
        }
    ];

    const muSigmaJobs = [
        {
            companyName: "Mu Sigma",
            role: "Trainee Decision Scientist",
            package: "₹6.5 - 9.0 LPA",
            location: "Bengaluru / Pune\nHybrid",
            requiredSkills: ["Aptitude", "Excel", "SQL", "Python", "Communication"],
            description: "Analyze data, solve business problems, use statistics and communicate insights. Best target role for fresh engineering graduates.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech (All Branches)"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
            openings: 25,
            whoCanApply: [
                "Best fresher target: Engineering graduates with strong analytical & problem-solving aptitude",
                "Strong foundation in statistics, mathematical reasoning, and data curiosity",
                "Excellent business communication and presentation abilities",
                "Comfortable working with Python, Excel, and SQL for decision sciences"
            ],
            additionalInfo: "Official application information: Direct recruitment drive for Decision Scientists via Mu Sigma Careers.",
            applyUrl: "https://www.mu-sigma.com/career/",
            status: "Open"
        },
        {
            companyName: "Mu Sigma",
            role: "Data Engineer",
            package: "₹7.0 - 10.5 LPA",
            location: "Pune / Bengaluru\nHybrid",
            requiredSkills: ["Python", "SQL", "ETL", "Databases"],
            description: "Build data pipelines, clean data and manage databases.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT, AI&DS"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
            openings: 12,
            whoCanApply: [
                "Engineering graduates skilled in database schema design, pipeline architecture, and ETL tools",
                "Strong SQL query writing, optimization, and Python data handling",
                "Interest in large-scale data transformation workflows"
            ],
            additionalInfo: "Third-party listing (myinternships.in); please verify details with Mu Sigma before applying.",
            applyUrl: "https://myinternships.in/jobs/mu-sigma-data-engineer-jobs-pune-6dc4e0",
            status: "Open"
        },
        {
            companyName: "Mu Sigma",
            role: "Data Analyst",
            package: "₹6.0 - 8.5 LPA",
            location: "Bengaluru / Pune\nHybrid",
            requiredSkills: ["SQL", "Excel", "Statistics", "Power BI/Tableau"],
            description: "Analyze datasets, identify trends and prepare reports.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech (All Branches)", "MCA"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000),
            openings: 15,
            whoCanApply: [
                "Candidates with strong analytical abilities and data interpretation skills",
                "Proficiency in SQL, Microsoft Excel, and statistical reasoning",
                "Ability to visualize findings in Power BI or Tableau dashboards"
            ],
            additionalInfo: "Search active Mu Sigma openings on LinkedIn.",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Data%20Analyst",
            status: "Open"
        },
        {
            companyName: "Mu Sigma",
            role: "Analytics Engineer",
            package: "₹7.5 - 11.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["SQL", "Python", "Data Modelling"],
            description: "Transform raw data into reliable datasets for analytics.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT, AI&DS"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000),
            openings: 10,
            whoCanApply: [
                "Graduates experienced in data modeling techniques (dimensional/star schema)",
                "Skilled in SQL data transformations and Python data manipulation",
                "Passionate about creating clean data products for analytical consumption"
            ],
            additionalInfo: "Search openings on LinkedIn.",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Analytics%20Engineer",
            status: "Open"
        },
        {
            companyName: "Mu Sigma",
            role: "Software Engineer",
            package: "₹7.0 - 10.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["JavaScript", "Python/Java", "DSA", "APIs"],
            description: "Develop and maintain software applications and APIs.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT, ECE", "MCA"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            openings: 18,
            whoCanApply: [
                "Strong grasp of Data Structures, Algorithms, and Object-Oriented Programming",
                "Experience in full-stack web technologies (JavaScript, React/Node) and backend APIs (Python/Java)",
                "Solid debugging, unit testing, and version control (Git) habits"
            ],
            additionalInfo: "Search openings on LinkedIn.",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Software%20Engineer",
            status: "Open"
        },
        {
            companyName: "Mu Sigma",
            role: "Machine Learning Engineer",
            package: "₹8.0 - 12.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["Python", "Statistics", "Machine Learning"],
            description: "Develop predictive models and data-driven solutions.",
            criteria: {
                minCgpa: 7.0,
                allowedBranches: ["BE/BTech / MTech - CS, AI&DS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
            openings: 8,
            whoCanApply: [
                "Deep understanding of machine learning algorithms, model evaluation, and regression/classification",
                "Proficiency with Python ML toolkits (NumPy, Pandas, Scikit-learn)",
                "Enthusiasm for building end-to-end predictive systems that drive business decisions"
            ],
            additionalInfo: "Search openings on LinkedIn.",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Machine%20Learning%20Engineer",
            status: "Open"
        },
        {
            companyName: "Mu Sigma",
            role: "BI Developer",
            package: "₹6.5 - 9.5 LPA",
            location: "Bengaluru / Pune\nHybrid",
            requiredSkills: ["SQL", "Power BI/Tableau", "Data Visualization"],
            description: "Build dashboards and reporting solutions for business teams.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech (Any Branch)", "MCA"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            openings: 10,
            whoCanApply: [
                "Hands-on experience developing business intelligence dashboards in Power BI or Tableau",
                "Solid SQL query writing for aggregating and filtering complex metrics",
                "Strong aesthetic sense for clear, impactful chart and KPI presentation"
            ],
            additionalInfo: "Search openings on LinkedIn.",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20BI%20Developer",
            status: "Closing Soon"
        }
    ];

    const jaroJobs = [
        {
            companyName: "Jaro Education",
            role: "Software Developer",
            package: "₹4.5 - 7.0 LPA",
            location: "Mumbai\nOn-site",
            requiredSkills: ["JavaScript", "React", "Node.js", "SQL"],
            description: "Develop and maintain software applications for ed-tech platforms.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT", "MCA"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
            openings: 10,
            whoCanApply: [
                "Freshers or experienced graduates with strong JavaScript & React fundamentals",
                "Understanding of REST APIs and relational databases",
                "Good analytical and debugging capabilities"
            ],
            additionalInfo: "Official careers: https://www.jaroeducation.com/careers | https://www.jaroeducation.com/job-openings",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Software%20Developer%20Jaro%20Education",
            status: "Open"
        },
        {
            companyName: "Jaro Education",
            role: "Web Developer",
            package: "₹3.5 - 6.0 LPA",
            location: "Mumbai\nOn-site",
            requiredSkills: ["HTML", "CSS", "JavaScript", "WordPress"],
            description: "Build and maintain websites using HTML, CSS and JavaScript.",
            criteria: {
                minCgpa: 5.5,
                allowedBranches: ["BE/BTech (Any Branch)", "BCA", "MCA"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000),
            openings: 8,
            whoCanApply: [
                "Proficiency in responsive web development (HTML5, CSS3, ES6+)",
                "Experience building cross-browser web interfaces",
                "Familiarity with CMS platforms and web performance optimization"
            ],
            additionalInfo: "Official careers: https://www.jaroeducation.com/careers",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Web%20Developer%20Jaro%20Education",
            status: "Open"
        },
        {
            companyName: "Jaro Education",
            role: "Frontend Developer",
            package: "₹4.0 - 7.0 LPA",
            location: "Mumbai\nOn-site",
            requiredSkills: ["React", "JavaScript", "CSS", "UI/UX"],
            description: "Create responsive interfaces using React and JavaScript.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000),
            openings: 6,
            whoCanApply: [
                "Hands-on proficiency with React components, hooks, and state management",
                "Ability to turn Figma / UI mockups into pixel-perfect code",
                "Passion for clean design and smooth user experience"
            ],
            additionalInfo: "Official careers: https://www.jaroeducation.com/job-openings",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Frontend%20Developer%20Jaro%20Education",
            status: "Open"
        },
        {
            companyName: "Jaro Education",
            role: "QA Engineer",
            package: "₹3.5 - 5.5 LPA",
            location: "Mumbai\nOn-site",
            requiredSkills: ["Manual Testing", "Selenium", "Test Cases", "Bug Tracking"],
            description: "Test applications, report bugs and verify fixes.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT, ECE"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            openings: 6,
            whoCanApply: [
                "Knowledge of STLC, defect lifecycles, and test scenario creation",
                "Experience with manual and basic automated testing tools",
                "Strong attention to detail and clear communication"
            ],
            additionalInfo: "Official careers: https://www.jaroeducation.com/careers",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=QA%20Engineer%20Jaro%20Education",
            status: "Open"
        },
        {
            companyName: "Jaro Education",
            role: "IT Support Engineer",
            package: "₹3.0 - 5.0 LPA",
            location: "Mumbai\nOn-site",
            requiredSkills: ["IT Support", "Networking", "Troubleshooting", "OS Administration"],
            description: "Troubleshoot software, hardware and technical issues.",
            criteria: {
                minCgpa: 5.5,
                allowedBranches: ["BE/BTech (All Branches)", "Diploma"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
            openings: 12,
            whoCanApply: [
                "Good understanding of networking basics, Windows/Linux OS, and hardware maintenance",
                "Strong problem-solving attitude and customer service mindset",
                "Willingness to handle multi-shift support tasks"
            ],
            additionalInfo: "Official careers: https://www.jaroeducation.com/careers",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=IT%20Support%20Engineer%20Jaro%20Education",
            status: "Closing Soon"
        }
    ];

    const byjusJobs = [
        {
            companyName: "Byju's",
            role: "Software Engineer",
            package: "₹6.0 - 10.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["Java", "Python", "DSA", "Microservices"],
            description: "Develop, debug and maintain software products for educational platforms.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000),
            openings: 15,
            whoCanApply: [
                "Solid knowledge of Data Structures, Algorithms, and System Architecture",
                "Hands-on experience in Java or Python development",
                "Enthusiasm for scalable ed-tech software architecture"
            ],
            additionalInfo: "Official careers: https://byjus.com/careers-at-byjus/ | Verify live vacancies on official page.",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Software%20Engineer%20BYJU%27S",
            status: "Open"
        },
        {
            companyName: "Byju's",
            role: "Frontend Developer",
            package: "₹5.5 - 9.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["React", "HTML", "CSS", "JavaScript", "TypeScript"],
            description: "Develop user interfaces using React, HTML, CSS and JavaScript.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
            openings: 10,
            whoCanApply: [
                "Deep expertise in React, modern JavaScript, and component-driven UI",
                "Understanding of responsive design, animation, and UI performance",
                "Familiarity with Redux or modern state containers"
            ],
            additionalInfo: "Official careers: https://byjus.com/careers-at-byjus/",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Frontend%20Developer%20BYJU%27S",
            status: "Open"
        },
        {
            companyName: "Byju's",
            role: "Backend Developer",
            package: "₹6.0 - 10.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["Node.js", "Express", "MongoDB", "REST APIs"],
            description: "Build APIs, server-side logic and database integrations.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT", "MCA"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000),
            openings: 12,
            whoCanApply: [
                "Proficiency in server-side JavaScript (Node.js, Express) or Python",
                "Strong database schema design (MongoDB, PostgreSQL)",
                "Experience creating secure, high-traffic RESTful web services"
            ],
            additionalInfo: "Official careers: https://byjus.com/careers-at-byjus/",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Backend%20Developer%20BYJU%27S",
            status: "Open"
        },
        {
            companyName: "Byju's",
            role: "Full Stack Developer",
            package: "₹7.0 - 12.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["React", "Node.js", "MongoDB", "Express", "System Design"],
            description: "Work on frontend, backend and database features end-to-end.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            openings: 8,
            whoCanApply: [
                "Full-stack development experience from database modeling to client UI",
                "Knowledge of cloud services, caching, and CI/CD pipelines",
                "Strong problem-solving and full-cycle product development skills"
            ],
            additionalInfo: "Official careers: https://byjus.com/careers-at-byjus/",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Full%20Stack%20Developer%20BYJU%27S",
            status: "Open"
        },
        {
            companyName: "Byju's",
            role: "QA Engineer",
            package: "₹4.5 - 7.0 LPA",
            location: "Bengaluru\nHybrid",
            requiredSkills: ["Manual Testing", "Automation", "Selenium", "API Testing"],
            description: "Test educational applications and identify software defects.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT, ECE"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
            openings: 10,
            whoCanApply: [
                "Experience creating test suites, automation scripts, and regression packs",
                "Hands-on familiarity with Postman for API testing and Selenium for web",
                "Detailed-oriented mind with focus on seamless end-user learning experience"
            ],
            additionalInfo: "Official careers: https://byjus.com/careers-at-byjus/",
            applyUrl: "https://www.linkedin.com/jobs/search/?keywords=QA%20Engineer%20BYJU%27S",
            status: "Closing Soon"
        }
    ];

    const ibmJobs = [
        {
            companyName: "IBM",
            role: "Software Developer – Entry Level",
            package: "₹6.0 - 10.0 LPA",
            location: "Bengaluru / Pune\nHybrid",
            requiredSkills: ["Java", "Python", "SQL", "Git", "Agile"],
            description: "Write, test and maintain software code as part of IBM engineering teams.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT, ECE"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
            openings: 20,
            whoCanApply: [
                "Fresh engineering graduates with solid programming foundation (Java/Python/C++)",
                "Understanding of software design principles, version control, and data structures",
                "Strong team-collaboration skills in Agile environments"
            ],
            additionalInfo: "Official careers: https://www.ibm.com/in-en/careers/software-engineering | Search entry-level India roles.",
            applyUrl: "https://www.ibm.com/in-en/careers/search?field_keyword_18%5B0%5D=Entry%20Level&field_keyword_05%5B0%5D=India",
            status: "Open"
        },
        {
            companyName: "IBM",
            role: "Full Stack Developer",
            package: "₹7.0 - 12.0 LPA",
            location: "Bengaluru / Hyderabad\nHybrid",
            requiredSkills: ["React", "Node.js", "Java", "Cloud", "REST APIs"],
            description: "Build frontend and backend applications and APIs for enterprise IBM platforms.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000),
            openings: 15,
            whoCanApply: [
                "Full stack web application development expertise",
                "Proficiency in frontend technologies and enterprise backend stacks (Java/Spring Boot, Node)",
                "Experience deploying microservices in hybrid-cloud setups"
            ],
            additionalInfo: "Official careers: https://www.ibm.com/in-en/careers/software-engineering",
            applyUrl: "https://www.ibm.com/in-en/careers/software-engineering",
            status: "Open"
        },
        {
            companyName: "IBM",
            role: "Frontend Developer",
            package: "₹6.0 - 10.0 LPA",
            location: "Bengaluru / Kochi\nHybrid",
            requiredSkills: ["React", "TypeScript", "HTML/CSS", "Carbon Design System"],
            description: "Develop web interfaces using modern web technologies and Carbon Design System.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
            openings: 12,
            whoCanApply: [
                "Proficiency in React, TypeScript, and modern responsive CSS standards",
                "Understanding of accessible design (WCAG), user journeys, and component systems",
                "Ability to build modular, maintainable web applications"
            ],
            additionalInfo: "Official careers: https://www.ibm.com/in-en/careers/software-engineering",
            applyUrl: "https://www.ibm.com/in-en/careers/software-engineering",
            status: "Open"
        },
        {
            companyName: "IBM",
            role: "DevOps Engineer",
            package: "₹7.0 - 12.0 LPA",
            location: "Bengaluru / Pune\nHybrid",
            requiredSkills: ["Docker", "Kubernetes", "CI/CD", "Linux", "Jenkins"],
            description: "Automate software deployment, cloud infrastructure and CI/CD pipelines.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech - CS, IT"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000),
            openings: 10,
            whoCanApply: [
                "Knowledge of containerization (Docker, Kubernetes) and infrastructure as code",
                "Hands-on experience with Jenkins, GitHub Actions, or GitLab CI pipelines",
                "Linux systems administration and cloud platform fundamentals"
            ],
            additionalInfo: "Official careers: https://www.ibm.com/in-en/careers/software-engineering",
            applyUrl: "https://www.ibm.com/in-en/careers/software-engineering",
            status: "Open"
        },
        {
            companyName: "IBM",
            role: "Test Engineer",
            package: "₹5.5 - 9.0 LPA",
            location: "Bengaluru / Ahmedabad\nHybrid",
            requiredSkills: ["Selenium", "JUnit", "Test Automation", "API Testing"],
            description: "Create test cases, automate testing and ensure enterprise software quality.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech - CS, IT, Electronics"],
                targetGradYear: 2026
            },
            deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            openings: 14,
            whoCanApply: [
                "Expertise in automated testing frameworks (JUnit, TestNG, Selenium)",
                "API validation and integration testing capabilities",
                "Quality mindset with focus on test coverage, regression automation, and performance metrics"
            ],
            additionalInfo: "Official careers: https://www.ibm.com/in-en/careers/software-engineering",
            applyUrl: "https://www.ibm.com/in-en/careers/software-engineering",
            status: "Closing Soon"
        }
    ];

    await Job.insertMany([...tcsJobs, ...muSigmaJobs, ...jaroJobs, ...byjusJobs, ...ibmJobs]);
    console.log("Jobs seeded successfully!");
    process.exit();
};

seedJobs();
