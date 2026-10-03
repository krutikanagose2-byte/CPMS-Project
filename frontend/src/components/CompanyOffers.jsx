import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './CompanyOffers.css';

const CompanyOffers = ({ company, onBack, user, onOpenLogin, onOpenHome, onOpenCompanies, onOpenPlacements, onOpenNoticeBoard, onOpenProfile }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  
  useEffect(() => {
    if (!company) return;
    
    // Fetch real-time data from backend
    fetch(`http://localhost:5000/api/jobs/company/${company.name}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, [company]);

  // Use fetched jobs or fallback to dummy data if DB is empty to match the design requested
  const getFallbackJobs = (company) => {
    const category = company?.category || 'it';
    const companyScore = company?.name ? company.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
    
    if (company?.name && company.name.toLowerCase().includes('cognizant')) {
      const cognizantRoles = [
        { 
          role: 'Programmer Analyst Trainee (GenC)', 
          desc: 'Cognizant GenC onboarding role designed for engineering freshers. Focuses on foundational software development, database querying, full-stack application lifecycle, maintenance, and automated testing across enterprise projects.', 
          skills: ['Java', 'Python', 'SQL', 'Data Structures'],
          package: '₹4.0 - 5.5 LPA',
          branch: 'BE/BTech - CS, IT, EnTC, ECE, EEE',
          cgpa: 6.0,
          openings: 45,
          location: 'Chennai / Pune / Bengaluru',
          whoCanApply: [
            'Are freshers or entry-level graduates from BE/BTech (CS, IT, EnTC, ECE, EEE)',
            'Possess strong foundational skills in Java or Python programming and SQL database querying',
            'Maintain a minimum of 60% or 6.0 CGPA throughout 10th, 12th, and graduation without active backlogs',
            'Are willing to relocate to any Cognizant India facility (Chennai, Pune, Bengaluru, Hyderabad, Coimbatore)'
          ],
          additionalInfo: 'Includes 3-month comprehensive Cognizant Academy training, global certification vouchers (AWS/Azure/Java), health insurance coverage, and night shift allowance where applicable.'
        },
        { 
          role: 'Programmer Analyst (GenC Next)', 
          desc: 'Advanced digital engineering track at Cognizant targeting high-performing developers. Work on cloud-native microservices architecture, modern web development, React/Node.js stacks, and distributed systems.', 
          skills: ['React', 'Node.js', 'Spring Boot', 'Microservices'],
          package: '₹6.7 - 8.5 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 25,
          location: 'Bengaluru / Hybrid',
          whoCanApply: [
            'Have strong algorithmic problem-solving skills and hands-on expertise in React, Node.js, Spring Boot, or Python',
            'Graduated with BE/BTech (CS/IT/Circuit branches) with 65% or 6.5 CGPA and above',
            'Demonstrate experience with Git version control, RESTful API design, and modern web frameworks',
            'Are available for full-time deployment in Cognizant Digital Engineering business units'
          ],
          additionalInfo: 'Fast-track career growth model, higher entry package, specialized mentorship under Lead Architects, and certification incentive programs.'
        },
        { 
          role: 'Full Stack Software Engineer', 
          desc: 'Drive end-to-end software delivery across modern web and enterprise platforms. Build responsive frontend applications using Angular/React and scalable backend microservices powered by Java & Node.js.', 
          skills: ['Java', 'Angular', 'Node.js', 'REST APIs'],
          package: '₹7.5 - 10.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 30,
          location: 'Pune / Remote',
          whoCanApply: [
            'Proficient in frontend frameworks (Angular/React) and backend technologies (Java Spring Boot or Node.js)',
            'BE/BTech degree in Computer Science, Information Technology, or Software Engineering',
            'Understand SQL/NoSQL databases, state management, security protocols, and CI/CD integrations',
            'Capable of working in Agile Scrum teams delivering sprint iterations'
          ],
          additionalInfo: 'Hybrid working options, quarterly innovation hackathons, comprehensive medical coverage for family, and performance-linked annual bonuses.'
        },
        { 
          role: 'Quality Engineering & Assurance Specialist (QE&A)', 
          desc: 'Join Cognizant QE&A practice to design automated testing frameworks, execute continuous integration testing, API test automation, performance validation, and security compliance checking.', 
          skills: ['Selenium', 'Automation Testing', 'Java', 'CI/CD'],
          package: '₹5.5 - 7.5 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 20,
          location: 'Chennai / Hybrid',
          whoCanApply: [
            'Hands-on experience or coursework in Selenium WebDriver, Java/Python scripting, TestNG, and Postman',
            'BE/BTech degree in CS, IT, ECE, or related engineering discipline',
            'Understanding of Agile testing methodologies, defect tracking (Jira), and test-driven development (TDD)',
            'Strong analytical mindset with attention to detail and quality compliance standards'
          ],
          additionalInfo: 'Specialized ISTQB certification funding, client-facing QA projects across US/UK banking clients, and continuous skill upgrades.'
        },
        { 
          role: 'Cloud & Infrastructure Engineer', 
          desc: 'Design, deploy, and manage enterprise multi-cloud environments across AWS and Azure. Automate infrastructure provisioning with Terraform, manage Kubernetes clusters, and optimize CI/CD pipelines.', 
          skills: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
          package: '₹8.0 - 11.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 18,
          location: 'Bengaluru / Remote',
          whoCanApply: [
            'Hands-on knowledge of AWS or Azure cloud architectures, Docker containerization, and Linux administration',
            'BE/BTech in CS, IT, Electronics & Telecommunication, or Electrical Engineering',
            'Familiarity with Shell/Python scripting, Ansible, and DevOps deployment tools (Jenkins, GitHub Actions)',
            'Certifications such as AWS Certified Solutions Architect or Azure Administrator (preferred)'
          ],
          additionalInfo: 'Direct cloud lab access, 100% reimbursement for Cloud associate/professional certification exams, and flexible remote work options.'
        },
        { 
          role: 'Data Engineering & Analytics Specialist', 
          desc: 'Build enterprise data pipelines, real-time data streaming architectures, and data warehouses using PySpark, SQL, Azure Data Factory, and Snowflake for AI/ML and business intelligence applications.', 
          skills: ['PySpark', 'SQL', 'Azure Data Factory', 'Snowflake'],
          package: '₹7.0 - 9.5 LPA',
          branch: 'BE/BTech - CS, IT, Data Science',
          cgpa: 6.5,
          openings: 15,
          location: 'Hyderabad / Hybrid',
          whoCanApply: [
            'Strong proficiency in SQL query optimization, Python data processing (Pandas/PySpark), and database management',
            'BE/BTech in CS, IT, Data Science, AI, or Mathematics/Statistics background',
            'Knowledge of ETL/ELT pipelines, data warehousing concepts (Snowflake/Redshift), and cloud data services',
            'Strong quantitative reasoning and data visualization skills (PowerBI/Tableau)'
          ],
          additionalInfo: 'Exposure to enterprise GenAI data engineering projects, client analytics consulting, and competitive performance incentives.'
        },
        { 
          role: 'Digital Marketing Specialist', 
          desc: 'Develop and execute digital marketing campaigns, performance marketing, search engine optimization (SEO), social media marketing, and data-driven customer acquisition strategies for global brands.', 
          skills: ['SEO', 'SEM', 'Google Analytics', 'Digital Campaigns'],
          package: '₹5.0 - 7.0 LPA',
          branch: 'MBA / BBA / Graduate (Any)',
          cgpa: 6.0,
          openings: 12,
          location: 'Kolkata / Hybrid',
          whoCanApply: [
            'Degree in MBA Marketing, BBA, Mass Communication, or relevant business disciplines',
            'Proficiency with Google Analytics, Google Ads, SEO tools (Semrush/Ahrefs), and social media ad managers',
            'Strong written and verbal communication skills with creative copywriting abilities',
            'Ability to analyze campaign metrics (CTR, CPA, ROAS) and optimize ROI'
          ],
          additionalInfo: 'Google/HubSpot certification sponsorships, creative agency environment, and performance bonuses based on campaign targets.'
        },
        { 
          role: 'Services Marketing Manager', 
          desc: 'Lead strategic positioning, content strategy, brand storytelling, and demand generation for Cognizant business units. Partner with sales and technical leadership to produce high-impact marketing collateral.', 
          skills: ['Content Strategy', 'Brand Positioning', 'Demand Generation'],
          package: '₹9.0 - 13.0 LPA',
          branch: 'MBA - Marketing / Communications',
          cgpa: 6.5,
          openings: 8,
          location: 'Gurugram / On-site',
          whoCanApply: [
            'MBA in Marketing, Strategic Communications, or Brand Management from a recognized institute',
            'Proven track record in B2B marketing, tech services positioning, whitepaper strategy, and lead funnels',
            'Excellent executive presentation skills and stakeholder management capabilities',
            'Understanding of global enterprise technology trends (AI, Cloud, Digital Transformation)'
          ],
          additionalInfo: 'Global client marketing exposure, leadership development programs, flexible hybrid work model, and executive bonuses.'
        },
        { 
          role: 'Client Relationship & Sales Associate', 
          desc: 'Manage strategic enterprise client accounts, drive business development, coordinate solution pitch presentations, and expand consulting partnerships across technology and business accounts.', 
          skills: ['Account Management', 'Client Partnering', 'Solution Sales'],
          package: '₹6.5 - 9.0 LPA',
          branch: 'MBA / Graduate (Any)',
          cgpa: 6.0,
          openings: 10,
          location: 'Mumbai / Hybrid',
          whoCanApply: [
            'MBA or Post Graduate Degree in Business Management, Sales, or International Business',
            'Exceptional negotiation, interpersonal, relationship building, and consultative selling skills',
            'Ability to understand complex IT services offerings and map them to enterprise client business goals',
            'Willingness to travel for client meetings and account reviews as required'
          ],
          additionalInfo: 'Uncapped commission structure, global mobility opportunities, direct mentorship under Client Partners, and executive perks.'
        },
        { 
          role: 'Senior Product Engineering Manager', 
          desc: 'Cross-functional leadership role bridging product strategy, engineering delivery, and customer enablement. Drive product roadmap execution leveraging GenAI, machine learning, and cloud architecture.', 
          skills: ['Product Engineering', 'AI/ML', 'Agile Architecture'],
          package: '₹12.0 - 16.0 LPA',
          branch: 'BE/BTech / MTech - CS, IT',
          cgpa: 7.0,
          openings: 6,
          location: 'Bengaluru / On-site',
          whoCanApply: [
            'BE/BTech or MTech in CS/IT combined with product management or tech leadership experience',
            'Deep understanding of Agile product engineering, system design, microservices, and AI integration',
            'Proven ability to lead multi-disciplinary engineering teams and align technical outcomes with business goals',
            'Strong strategic thinking, roadmap prioritization, and senior leadership communication'
          ],
          additionalInfo: 'Senior leadership band benefits, stock option grant eligibility, executive health program, and global tech conference sponsorships.'
        }
      ];

      return cognizantRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 4 ? 'Open' : (index > 7 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo
      }));
    }

    let roles = [];
    let branchText = 'BE/BTech - CS, IT';

    switch(category) {
      case 'core':
        branchText = 'BE/BTech - Mech, Civil, Auto, EE';
        roles = [
          { role: 'Mechanical Engineer', desc: 'Design, analyze, and manufacture mechanical systems. Ensure all designs meet safety and efficiency standards.', skills: ['AutoCAD', 'SolidWorks', 'Thermodynamics'] },
          { role: 'Manufacturing Trainee', desc: 'Oversee production processes, ensure quality control, and optimize manufacturing workflows.', skills: ['Lean Six Sigma', 'Quality Assurance'] },
          { role: 'Process Engineer', desc: 'Develop, configure and optimize industrial processes from inception through to start up and certification.', skills: ['Process Control', 'Six Sigma'] },
          { role: 'Quality Control Inspector', desc: 'Read blueprints and instructions to comprehend the quality expectations for the product and supplies.', skills: ['Inspection', 'ISO 9001'] },
          { role: 'Maintenance Engineer', desc: 'Checking, repairing and servicing machinery, equipment, systems and infrastructures.', skills: ['Preventive Maintenance', 'Troubleshooting'] },
          { role: 'Supply Chain Analyst', desc: 'Collect and analyze supply chain data, recommend improvements to boost performance and reduce costs.', skills: ['Logistics', 'Data Analysis'] },
          { role: 'Industrial Engineer', desc: 'Review production schedules, engineering specifications, process flows, and other information to understand methods and activities in manufacturing and services.', skills: ['Process Optimization', 'CAD'] },
          { role: 'Production Supervisor', desc: 'Organize workflow by assigning responsibilities and preparing schedules. Oversee and coach employees.', skills: ['Leadership', 'Operations Management'] },
          { role: 'Design Engineer', desc: 'Study, research and develop ideas for new products and the systems used to make them.', skills: ['Product Design', 'SolidWorks'] },
          { role: 'Operations Trainee', desc: 'Assist in daily operations, track performance, and help improve efficiency across the plant.', skills: ['Operations', 'Project Management'] }
        ];
        break;
      case 'finance':
        branchText = 'MBA / BCom / BE (Any)';
        roles = [
          { role: 'Financial Analyst', desc: 'Analyze financial data, identify trends, and create predictive models to inform strategic decisions.', skills: ['Excel', 'Financial Modeling', 'Accounting'] },
          { role: 'Investment Banking Analyst', desc: 'Assist in M&A execution, capital raising, and comprehensive portfolio management strategies.', skills: ['Valuation', 'Corporate Finance'] },
          { role: 'Risk Management Consultant', desc: 'Identify and assess threats, put plans in place for if things go wrong and decide how to avoid, reduce or transfer risks.', skills: ['Risk Assessment', 'Compliance'] },
          { role: 'Quantitative Analyst', desc: 'Apply mathematical and statistical methods to financial and risk management problems.', skills: ['Python', 'Statistics', 'R'] },
          { role: 'Credit Analyst', desc: 'Analyze credit data and financial statements to determine the degree of risk involved in extending credit or lending money.', skills: ['Credit Risk', 'Financial Analysis'] },
          { role: 'Wealth Management Trainee', desc: 'Assist wealth managers with client portfolios, research investment opportunities, and prepare financial plans.', skills: ['Wealth Management', 'Communication'] },
          { role: 'Actuarial Analyst', desc: 'Analyze statistical data, such as mortality, accident, sickness, disability, and retirement rates and construct probability tables.', skills: ['Actuarial Science', 'Statistics'] },
          { role: 'Equity Research Associate', desc: 'Provide research and analysis of financial data to assist portfolio managers in making investment decisions.', skills: ['Equity Research', 'Valuation'] },
          { role: 'Treasury Analyst', desc: 'Manage corporate liquidity, investments, and risk management related to the company\'s financial activities.', skills: ['Treasury', 'Cash Management'] },
          { role: 'Portfolio Manager', desc: 'Make investment decisions and carry out investment activities on behalf of vested clients.', skills: ['Portfolio Management', 'Asset Allocation'] }
        ];
        break;
      case 'consulting':
        branchText = 'MBA / BE/BTech (Any)';
        roles = [
          { role: 'Business Analyst', desc: 'Analyze business needs, document requirements, and recommend effective technology solutions.', skills: ['Agile', 'Requirements Gathering', 'SQL'] },
          { role: 'Strategy Consultant', desc: 'Advise senior leadership on corporate strategy, operational improvements, and market entry.', skills: ['Problem Solving', 'Data Analysis', 'Presentation'] },
          { role: 'Management Consultant', desc: 'Help organizations to solve issues, create value, maximize growth and improve business performance.', skills: ['Management', 'Strategy'] },
          { role: 'Technology Consultant', desc: 'Advise clients on how best to use information technology to meet their business objectives.', skills: ['IT Strategy', 'Cloud Computing'] },
          { role: 'Operations Consultant', desc: 'Help clients improve the efficiency of their value chain. Focus on supply chain, procurement, and manufacturing.', skills: ['Operations', 'Supply Chain'] },
          { role: 'HR Consultant', desc: 'Advise management on the administration of human resources policies and procedures.', skills: ['Human Resources', 'Change Management'] },
          { role: 'Risk Advisory Associate', desc: 'Help organizations manage risk and uncertainty, from the boardroom to the network.', skills: ['Risk Management', 'Audit'] },
          { role: 'Financial Advisory Associate', desc: 'Provide financial advice to clients, including M&A, restructuring, and forensic accounting.', skills: ['Financial Analysis', 'Due Diligence'] },
          { role: 'Change Management Consultant', desc: 'Support organizations in managing the people side of change to achieve the required business outcome.', skills: ['Change Management', 'Communication'] },
          { role: 'Innovation Strategist', desc: 'Help companies develop and implement innovation strategies to stay competitive in the market.', skills: ['Innovation', 'Design Thinking'] }
        ];
        break;
      case 'telecom':
        branchText = 'BE/BTech - EnTC, EE, CS';
        roles = [
          { role: 'Network Engineer', desc: 'Design, implement, and maintain large-scale telecommunication networks to ensure high availability.', skills: ['Networking', 'Cisco', 'TCP/IP'] },
          { role: 'RF Engineer', desc: 'Optimize radio frequency networks for better coverage, capacity, and overall signal quality.', skills: ['RF Optimization', 'Wireless Communications'] },
          { role: 'Telecommunications Specialist', desc: 'Design and install equipment used for transmitting wired phone, cellular, cable and broadband data.', skills: ['Telecommunications', 'Hardware Installation'] },
          { role: 'Transmission Engineer', desc: 'Design and manage transmission networks, ensuring data is transmitted securely and efficiently.', skills: ['Transmission', 'Fiber Optics'] },
          { role: 'VoIP Engineer', desc: 'Set up, troubleshoot, and maintain VoIP networks and telephony systems.', skills: ['VoIP', 'SIP', 'Networking'] },
          { role: 'Fiber Optic Technician', desc: 'Install and repair fiber optic cables. Conduct tests to ensure cables are working correctly.', skills: ['Fiber Optics', 'Splicing'] },
          { role: 'NOC Engineer', desc: 'Monitor network performance and troubleshoot issues in the Network Operations Center.', skills: ['Network Monitoring', 'Troubleshooting'] },
          { role: 'Wireless Communications Engineer', desc: 'Develop wireless communication systems and ensure their optimal performance.', skills: ['Wireless', 'LTE', '5G'] },
          { role: 'Solutions Architect - Telecom', desc: 'Design complex telecommunications solutions to meet specific client needs.', skills: ['Solution Architecture', 'Pre-sales'] },
          { role: 'Telecom Project Manager', desc: 'Manage telecommunications projects from planning to execution, ensuring they are completed on time and within budget.', skills: ['Project Management', 'Telecom'] }
        ];
        break;
      case 'edtech':
        branchText = 'Any Graduate / PG';
        roles = [
          { role: 'Subject Matter Expert', desc: 'Develop high-quality curriculum, educational content, and assessments for online learning platforms.', skills: ['Content Creation', 'Teaching', 'Subject Knowledge'] },
          { role: 'Instructional Designer', desc: 'Design engaging, interactive learning experiences and comprehensive multimedia materials.', skills: ['E-learning', 'Storyboarding'] },
          { role: 'Curriculum Developer', desc: 'Create and update educational programs and materials. Ensure content aligns with educational standards.', skills: ['Curriculum Design', 'Education'] },
          { role: 'E-Learning Developer', desc: 'Develop digital learning materials using authoring tools. Focus on user experience and interactivity.', skills: ['Articulate Storyline', 'Multimedia'] },
          { role: 'Educational Content Writer', desc: 'Write clear, engaging, and accurate content for educational courses and materials.', skills: ['Writing', 'Editing'] },
          { role: 'Academic Counselor', desc: 'Guide students in choosing the right courses and programs to achieve their academic and career goals.', skills: ['Counseling', 'Communication'] },
          { role: 'Student Success Manager', desc: 'Ensure students have the support they need to succeed in their courses. Monitor student progress.', skills: ['Customer Success', 'Empathy'] },
          { role: 'Video Editor - Educational Content', desc: 'Edit educational videos, adding graphics and animations to enhance the learning experience.', skills: ['Video Editing', 'Premiere Pro'] },
          { role: 'Pedagogy Researcher', desc: 'Conduct research on effective teaching methods and apply findings to improve educational products.', skills: ['Research', 'Pedagogy'] },
          { role: 'LMS Administrator', desc: 'Manage and maintain the Learning Management System. Provide technical support to users.', skills: ['LMS', 'Technical Support'] }
        ];
        break;
      case 'analytics':
      case 'data':
        branchText = 'BE/BTech - CS, IT, Math/Stats';
        roles = [
          { role: 'Data Scientist', desc: 'Build advanced predictive models and machine learning algorithms to solve complex business problems.', skills: ['Python', 'Machine Learning', 'Statistics'] },
          { role: 'Data Analyst', desc: 'Interpret complex datasets, analyze results using statistical techniques, and provide actionable insights.', skills: ['SQL', 'Tableau', 'PowerBI'] },
          { role: 'Data Engineer', desc: 'Design, build, and manage data pipelines and infrastructure to ensure data availability and quality.', skills: ['Data Warehousing', 'ETL', 'Spark'] },
          { role: 'Machine Learning Engineer', desc: 'Deploy machine learning models into production and build scalable ML systems.', skills: ['MLOps', 'Python', 'TensorFlow'] },
          { role: 'Business Intelligence Analyst', desc: 'Create dashboards and reports to help business leaders make data-driven decisions.', skills: ['BI Tools', 'Data Visualization'] },
          { role: 'Big Data Developer', desc: 'Develop applications using big data technologies like Hadoop and Spark to process massive datasets.', skills: ['Hadoop', 'Big Data'] },
          { role: 'Data Architect', desc: 'Design the overall data architecture of the organization, ensuring data is stored and accessed efficiently.', skills: ['Data Architecture', 'Database Design'] },
          { role: 'Statistical Analyst', desc: 'Apply statistical methods to collect, organize, interpret, and summarize data.', skills: ['Statistics', 'SAS', 'R'] },
          { role: 'Quantitative Researcher', desc: 'Conduct rigorous quantitative research to develop trading strategies or financial models.', skills: ['Quantitative Research', 'Mathematics'] },
          { role: 'AI Specialist', desc: 'Develop artificial intelligence solutions to automate processes and improve products.', skills: ['Artificial Intelligence', 'Deep Learning'] }
        ];
        break;
      case 'product':
        branchText = 'BE/BTech - CS, IT';
        roles = [
          { role: 'Product Manager', desc: 'Drive product vision, strategy, and execution. Work closely with engineering and design teams.', skills: ['Product Strategy', 'Agile', 'Market Research'] },
          { role: 'UX Designer', desc: 'Design intuitive, user-friendly interfaces and engaging experiences based on deep user research.', skills: ['Figma', 'User Research', 'Prototyping'] },
          { role: 'UI Designer', desc: 'Create visually appealing user interfaces, focusing on layout, typography, and color.', skills: ['UI Design', 'Adobe XD'] },
          { role: 'Product Marketing Manager', desc: 'Develop marketing strategies for products, position them in the market, and drive user acquisition.', skills: ['Product Marketing', 'Go-to-Market Strategy'] },
          { role: 'Growth Hacker', desc: 'Identify and experiment with innovative ways to grow the user base and increase engagement.', skills: ['Growth Strategy', 'Data Analysis'] },
          { role: 'User Researcher', desc: 'Conduct qualitative and quantitative research to understand user needs and behaviors.', skills: ['User Research', 'Usability Testing'] },
          { role: 'Scrum Master', desc: 'Facilitate agile ceremonies and ensure the team follows agile principles and practices.', skills: ['Agile', 'Scrum'] },
          { role: 'Technical Product Manager', desc: 'Manage technically complex products, acting as a bridge between engineering and business.', skills: ['Technical Background', 'Product Management'] },
          { role: 'Product Owner', desc: 'Define product backlog items, prioritize them, and ensure the team delivers value.', skills: ['Product Ownership', 'Agile'] },
          { role: 'Customer Success Manager', desc: 'Ensure customers achieve their desired outcomes while using the product, driving retention.', skills: ['Customer Success', 'Relationship Management'] }
        ];
        break;
      case 'it':
      default:
        branchText = 'BE/BTech - CS, IT, EnTC';
        roles = [
          { role: 'Software Development Engineer (SDE)', desc: 'Design, develop, and test high-quality software applications. Work across the full stack to deliver robust solutions.', skills: ['Java', 'C++', 'Data Structures'] },
          { role: 'Frontend Engineer', desc: 'Build responsive and accessible user interfaces using modern web technologies.', skills: ['React', 'JavaScript', 'CSS'] },
          { role: 'Backend Engineer', desc: 'Develop scalable server-side logic, APIs, and manage databases.', skills: ['Node.js', 'Python', 'SQL'] },
          { role: 'Full Stack Developer', desc: 'Work on both frontend and backend development, delivering complete web applications.', skills: ['MERN Stack', 'REST APIs'] },
          { role: 'Cloud Solutions Architect', desc: 'Design and manage cloud infrastructure to ensure high availability and security.', skills: ['AWS', 'Azure', 'Cloud Architecture'] },
          { role: 'DevOps Engineer', desc: 'Automate software delivery processes, manage CI/CD pipelines, and maintain infrastructure as code.', skills: ['Docker', 'Kubernetes', 'Jenkins'] },
          { role: 'QA Automation Engineer', desc: 'Develop automated test scripts to ensure software quality and reliability.', skills: ['Selenium', 'Testing', 'Python'] },
          { role: 'Mobile App Developer', desc: 'Design and build advanced applications for the iOS or Android platforms.', skills: ['Swift', 'Kotlin', 'React Native'] },
          { role: 'Database Administrator', desc: 'Install, configure, and maintain database systems, ensuring optimal performance and security.', skills: ['Oracle', 'MySQL', 'Database Tuning'] },
          { role: 'Cybersecurity Analyst', desc: 'Protect IT infrastructure from threats, monitor networks for security breaches, and respond to incidents.', skills: ['Security', 'Ethical Hacking', 'Network Security'] },
          { role: 'Site Reliability Engineer (SRE)', desc: 'Ensure that internal and external services meet reliability and uptime SLAs.', skills: ['Linux', 'Monitoring', 'Incident Response'] },
          { role: 'Blockchain Developer', desc: 'Design and implement decentralized applications and smart contracts.', skills: ['Solidity', 'Web3', 'Cryptography'] }
        ];
        break;
    }

    // Deterministic shuffle based on company name
    roles = roles.sort((a, b) => {
      const valA = (a.role.charCodeAt(0) + companyScore) % 7;
      const valB = (b.role.charCodeAt(0) + companyScore) % 7;
      return valA - valB;
    });

    return roles.map((r, index) => ({
      _id: (index + 1).toString(),
      role: r.role,
      package: index < 3 ? '₹12.0 - 15.0 LPA' : (index < 7 ? '₹7.0 - 10.0 LPA' : '₹4.5 - 6.0 LPA'),
      location: index % 3 === 0 ? 'Bengaluru / Remote' : (index % 2 === 0 ? 'Pune / Hybrid' : 'Mumbai / On-site'),
      criteria: { minCgpa: index < 4 ? 7.0 : 6.0, allowedBranches: [branchText] },
      deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
      status: index < 3 ? 'Open' : (index > 8 ? 'Closing Soon' : 'Open'),
      description: r.desc,
      requiredSkills: r.skills,
      openings: ((index + companyScore) % 15) + 5,
      whoCanApply: [
        'are available for a full-time role',
        'can join immediately or within 30 days',
        'have excellent communication skills',
        'meet the minimum CGPA requirement'
      ],
      additionalInfo: 'Comprehensive health insurance, flexible working hours, and performance bonuses included.'
    }));
  };

  const baseJobs = jobs.length > 0 ? jobs : getFallbackJobs(company);

  const getJobLocation = (job) => (job.location || '').split('\n').join(' / ');
  
  const COMMON_ROLE_CATEGORIES = [
    'Engineer', 'Developer', 'Analyst', 'Tester', 'Administrator',
    'Manager', 'Consultant', 'Specialist', 'Architect', 'Researcher',
    'Designer', 'Scientist', 'Trainee', 'Inspector'
  ];

  const uniqueRoles = COMMON_ROLE_CATEGORIES.filter(category => 
    baseJobs.some(job => job.role && job.role.toLowerCase().includes(category.toLowerCase()))
  );
  
  const uniqueLocations = [...new Set(baseJobs.map(getJobLocation))].filter(Boolean);

  const displayJobs = baseJobs.filter(job => {
    const roleMatch = selectedRole === 'All Roles' || (job.role && job.role.toLowerCase().includes(selectedRole.toLowerCase()));
    const locMatch = selectedLocation === 'All Locations' || getJobLocation(job) === selectedLocation;
    const jobStatus = job.status || 'Open';
    const statusMatch = selectedStatus === 'All Status' || jobStatus === selectedStatus;
    
    const searchMatch = !searchQuery || 
      (job.role && job.role.toLowerCase().includes(searchQuery.toLowerCase())) || 
      (job.requiredSkills && job.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));

    return roleMatch && locMatch && statusMatch && searchMatch;
  });

  const handleApply = () => {
    let careersUrl = company?.website ? `${company.website}/careers` : 'https://www.google.com/search?q=' + encodeURIComponent((company?.name || 'Company') + ' careers');
    window.open(careersUrl, '_blank');
  };

  return (
    <div className="company-offers-page">
      <Navbar
        activePage="companies"
        onOpenLogin={onOpenLogin}
        onOpenHome={onOpenHome}
        onOpenCompanies={onOpenCompanies}
        onOpenPlacements={onOpenPlacements}
        onOpenNoticeBoard={onOpenNoticeBoard}
        onOpenProfile={onOpenProfile}
        user={user}
        useEmojiLogo={true}
        customLeft={
          <button className="co-back-btn" onClick={onBack}>
            ← Back to {company?.name || 'Companies'}
          </button>
        }
        customCenter={
          <div className="co-filters">
            <div className="co-search-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search by role, skill..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <select className="co-select" value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
              <option value="All Roles">All Roles</option>
              {uniqueRoles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select className="co-select" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
              <option value="All Locations">All Locations</option>
              {uniqueLocations.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <select className="co-select" value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
              <option value="All Status">All Status</option>
              <option value="Open">Open</option>
              <option value="Closing Soon">Closing Soon</option>
            </select>
          </div>
        }
      />

      <div className="co-content-wrapper">
        {/* Company Header Detail Card */}
        <div className="co-detail-header-card">
          <div className="co-detail-logo-wrapper">
            <img src={company?.logo} alt={company?.name} />
          </div>
          <div className="co-detail-info">
            <h2>{company?.name} Placement Drive 2024</h2>
            <p className="co-detail-location">📍 {company?.location}</p>
          </div>
          <div className="co-detail-meta">
            <div className="meta-item">
              <span className="meta-label">Active Offers</span>
              <span className="meta-value">{displayJobs.length}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Overall Package</span>
              <span className="meta-value">₹5.0 - 8.0 LPA</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Application Deadline</span>
              <span className="meta-value">25 Oct, 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-badge open">Open</span>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="co-jobs-list">
          <table className="co-jobs-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Job Role</th>
                <th style={{ width: '12%' }}>Package</th>
                <th style={{ width: '15%' }}>Location</th>
                <th style={{ width: '15%' }}>Eligibility</th>
                <th style={{ width: '10%' }}>Deadline</th>
                <th style={{ width: '8%' }}>Status</th>
                <th style={{ width: '10%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="7" style={{textAlign: 'center', padding: '40px'}}>Loading offers...</td></tr>
              ) : (
                displayJobs.map(job => {
                  const jobStatus = job.status || 'Open';
                  const isClosing = jobStatus === 'Closing Soon';
                  
                  return (
                    <tr key={job._id}>
                      <td>
                        <div className="job-role-cell">
                          <div className="job-role-icon">💻</div>
                          <div className="job-role-text">
                            <strong>{job.role}</strong>
                            <span>{job.requiredSkills ? job.requiredSkills.slice(0,2).join(', ') : 'Tech'}</span>
                          </div>
                        </div>
                      </td>
                      <td className="font-medium">{job.package}</td>
                      <td className="location-cell">{job.location?.split('\n').join(' / ')}</td>
                      <td>
                        <div className="eligibility-cell">
                          <span className="req-badge">{job.criteria?.minCgpa} CGPA</span>
                          <span className="req-badge">{job.criteria?.allowedBranches?.[0]}</span>
                        </div>
                      </td>
                      <td className={isClosing ? "deadline-closing" : ""}>
                        {new Date(job.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td>
                        <span className={`status-badge ${isClosing ? 'warning' : 'success'}`}>
                          {jobStatus}
                        </span>
                      </td>
                      <td>
                        <button className="view-details-btn" onClick={() => setSelectedJob(job)}>View Details</button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="co-modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="co-modal-content" onClick={e => e.stopPropagation()}>
            <button className="co-modal-close" onClick={() => setSelectedJob(null)}>×</button>
            <div className="co-modal-header">
              <h2>{selectedJob.role}</h2>
              <span className="co-modal-company">{company?.name}</span>
            </div>
            
            <div className="co-modal-body">
              <div className="co-modal-section">
                <h3>About the Role</h3>
                <p>{selectedJob.description || 'No description available for this role.'}</p>
              </div>

              <div className="co-modal-section">
                <h3>Skills Required</h3>
                <div className="co-modal-skills">
                  {(selectedJob.requiredSkills || ['Communication', 'Teamwork', 'Problem Solving']).map((skill, idx) => (
                    <span key={idx} className="co-modal-skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="co-modal-section">
                <h3>Who can apply?</h3>
                <p>Only those candidates can apply who:</p>
                <ul className="co-modal-list">
                  {(selectedJob.whoCanApply || [
                    'are available for the work from home job/internship',
                    "can start the work from home job/internship between 11th Aug'26 and 15th Sep'26",
                    'are available for duration of 3 months',
                    'have relevant skills and interests',
                    'Women wanting to start/restart their career can also apply.'
                  ]).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="co-modal-grid">
                <div className="co-modal-section">
                  <h3>Number of Openings</h3>
                  <p>{selectedJob.openings || 'Not specified'}</p>
                </div>
                
                <div className="co-modal-section">
                  <h3>Package / Stipend</h3>
                  <p>{selectedJob.package}</p>
                </div>
              </div>

              {selectedJob.additionalInfo && (
                <div className="co-modal-section">
                  <h3>Additional Information</h3>
                  <p>{selectedJob.additionalInfo}</p>
                </div>
              )}
            </div>

            <div className="co-modal-footer">
              <button className="co-modal-apply-btn" onClick={handleApply}>
                Apply Now ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyOffers;
