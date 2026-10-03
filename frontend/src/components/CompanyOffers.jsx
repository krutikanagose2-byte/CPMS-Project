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
      const officialCognizantRoles = [
        {
          role: 'ADAS AUTOSAR Software Engineer- DaVinci Configurator.',
          desc: 'Supporting Driver Assist Technologies (DAT) through embedded software development using AUTOSAR. Configure Vector DaVinci RTE components, integrate Classic AUTOSAR SWCs, validate inter-connections, and collaborate with SIL/HIL testing teams.',
          skills: ['AUTOSAR', 'DaVinci Configurator', 'C/C++', 'Embedded Systems'],
          package: '₹8.5 - 12.0 LPA',
          branch: 'BE/BTech - CS, EE, ECE, Auto',
          cgpa: 6.5,
          openings: 15,
          location: 'Dearborn, Michigan, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=ADAS+AUTOSAR+Software+Engineer',
          whoCanApply: [
            'Bachelor degree in Computer Science, Electrical Engineering, or Computer Engineering',
            'Experience with Vector DaVinci tools, RTE generation, and Classic AUTOSAR components',
            'Strong background in C/C++ embedded software development and MISRA standards',
            'Familiarity with HIL/SIL testing, Git, Jira, and Agile methodologies'
          ],
          additionalInfo: 'Focuses on next-generation Driver Assist Technologies (DAT) and vehicle safety systems.'
        },
        {
          role: 'Devops',
          desc: 'Design, implement, and automate cloud-native continuous integration and deployment (CI/CD) pipelines. Manage Docker containerization, Kubernetes orchestration, and network security compliance.',
          skills: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
          package: '₹7.5 - 11.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 25,
          location: 'Singapore, SG, Singapore',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Devops',
          whoCanApply: [
            'Graduate degree in Computer Science, IT, or related engineering discipline',
            'Hands-on expertise with Jenkins, GitLab CI, Docker, Kubernetes, and Terraform',
            'Experience with Linux system administration, shell scripting, and cloud platforms',
            'Understanding of site reliability engineering (SRE) and infrastructure as code'
          ],
          additionalInfo: 'Singapore digital engineering center placement with global enterprise project exposure.'
        },
        {
          role: 'Programmable Logic Design Engineer (merge of FPGA and MBSE)',
          desc: 'Architect digital programmable logic systems merging FPGA development with Model-Based Systems Engineering (MBSE). Perform RTL coding in VHDL/Verilog, FPGA synthesis, and hardware verification.',
          skills: ['FPGA', 'MBSE', 'VHDL/Verilog', 'Digital Design'],
          package: '₹9.0 - 13.0 LPA',
          branch: 'BE/BTech - ECE, EnTC, EE',
          cgpa: 6.5,
          openings: 10,
          location: 'W Palm Beach, FL, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Programmable+Logic+Design+Engineer',
          whoCanApply: [
            'Degree in Electrical Engineering, Electronics & Communication, or Computer Engineering',
            'Proficiency in FPGA design flow (Xilinx Vivado/Intel Quartus) and Model-Based Systems Engineering',
            'Experience with SystemVerilog, VHDL, logic simulation, and timing closure',
            'Solid understanding of hardware-software co-design and hardware testbench validation'
          ],
          additionalInfo: 'Advanced Digital hardware engineering unit working on cutting-edge aerospace and medical devices.'
        },
        {
          role: 'Programmable Logic Design Engineer (merge of FPGA and MBSE)',
          desc: 'Lead digital hardware design, FPGA IP integration, and MBSE modeling for industrial digital projects. Validate system architecture and conduct high-speed board-level testing.',
          skills: ['FPGA', 'SystemVerilog', 'MBSE', 'Digital Systems'],
          package: '₹9.5 - 14.0 LPA',
          branch: 'BE/BTech - ECE, EnTC, CS',
          cgpa: 6.5,
          openings: 12,
          location: 'Bridgewater, New Jersey, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Programmable+Logic+Design+Engineer',
          whoCanApply: [
            'Degree in Electronics, Computer Engineering, or Electrical Engineering',
            'In-depth knowledge of MBSE tools (Cameo/Enterprise Architect) and FPGA prototyping',
            'Hands-on experience with high-speed digital design and embedded signal processing',
            'Strong problem-solving skills and hardware verification methodology'
          ],
          additionalInfo: 'New Jersey innovation hub engagement with high-performance embedded systems.'
        },
        {
          role: 'ADAS Systems Engineer',
          desc: 'Define system architecture and functional safety requirements (ISO 26262) for Advanced Driver Assistance Systems (ADAS). Perform sensor fusion integration (Radar, Camera, LiDAR) and ECU validation.',
          skills: ['ADAS', 'ISO 26262', 'System Engineering', 'CAN/LIN'],
          package: '₹8.0 - 12.5 LPA',
          branch: 'BE/BTech - Auto, EE, ECE, CS',
          cgpa: 6.0,
          openings: 18,
          location: 'Dearborn, Michigan, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=ADAS+Systems+Engineer',
          whoCanApply: [
            'Bachelor or Master degree in Automotive, Electrical, or Computer Engineering',
            'Knowledge of ADAS systems, CAN/CAN-FD/Ethernet communication protocols, and ISO 26262',
            'Experience writing system specifications, use cases, and hazard analysis (HARA)',
            'Familiarity with Vector CANoe, MATLAB/Simulink, and automotive diagnostic tools'
          ],
          additionalInfo: 'Automotive COE unit driving next-gen autonomous driving assistance solutions.'
        },
        {
          role: 'Senior Consulting Manager - AI Architecture & Engineering',
          desc: 'Lead strategic AI consulting engagements, architect enterprise Generative AI and LLM solutions, and advise executive stakeholders on artificial intelligence adoption and governance.',
          skills: ['AI Architecture', 'Generative AI', 'LLM', 'Consulting Strategy'],
          package: '₹14.0 - 18.0 LPA',
          branch: 'BE/BTech / MBA - CS, AI, Data Science',
          cgpa: 7.0,
          openings: 8,
          location: 'Atlanta, GA, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Senior+Consulting+Manager+AI+Architecture',
          whoCanApply: [
            'BE/BTech or MBA with deep expertise in Artificial Intelligence and Enterprise Architecture',
            'Proven track record designing scalable GenAI, RAG, and machine learning infrastructure',
            'Strong client consulting, proposal development, and executive communication capabilities',
            'Ability to lead cross-functional data science and software engineering teams'
          ],
          additionalInfo: 'Executive advisory role within Cognizant AI & Analytics global practice.'
        },
        {
          role: 'Consulting Principal - AI Architecture and Engineering Lead',
          desc: 'Serve as Principal AI Architect for Fortune 500 digital transformation programs. Define AI solution patterns, cloud MLOps pipelines, ethical AI guidelines, and enterprise data platforms.',
          skills: ['AI/ML Lead', 'Enterprise Architecture', 'Cloud AI', 'Strategic Leadership'],
          package: '₹15.0 - 20.0 LPA',
          branch: 'BE/BTech / MTech / MBA',
          cgpa: 7.0,
          openings: 5,
          location: 'Atlanta, Georgia, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Consulting+Principal+AI+Architecture',
          whoCanApply: [
            'Senior technical background with expertise in MLOps, PyTorch/TensorFlow, and Cloud AI (AWS/Azure/GCP)',
            'Demonstrated experience leading multi-million dollar AI engineering delivery',
            'Mastery of microservices, vector databases, and enterprise AI system design',
            'Outstanding thought leadership and strategic business development skills'
          ],
          additionalInfo: 'High-visibility leadership position with global travel and executive bonuses.'
        },
        {
          role: 'Sr. Embedded/C++ Computer Vision Engineer - Hybrid',
          desc: 'Develop high-performance C++ computer vision algorithms and deep learning inferencing models for embedded edge devices. Optimize OpenCV, TensorRT, and real-time video processing pipelines.',
          skills: ['C++', 'OpenCV', 'Embedded Systems', 'Computer Vision'],
          package: '₹10.0 - 15.0 LPA',
          branch: 'BE/BTech / MTech - CS, ECE, AI',
          cgpa: 6.5,
          openings: 14,
          location: 'Irving, Texas, United States',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Embedded+Computer+Vision+Engineer',
          whoCanApply: [
            'Degree in Computer Science, Electrical Engineering, or Computer Vision specialization',
            'Expertise in Modern C++ (C++14/17/20), OpenCV, CUDA, and embedded Linux platforms',
            'Experience optimizing deep learning models for edge accelerators (NVIDIA Jetson / ARM)',
            'Familiarity with multi-threading, memory optimization, and camera sensor integration'
          ],
          additionalInfo: 'Hybrid work model based out of Irving, Texas Cognizant Digital Lab.'
        },
        {
          role: 'Mainframe Infrastructure Solution Architect',
          desc: 'Provide technical leadership and strategic architecture during presales and solution delivery for mainframe modernization, z/OS infrastructure framework, and mainframe-to-cloud integrations.',
          skills: ['Mainframe', 'z/OS', 'Cloud Migration', 'Solution Architecture'],
          package: '₹12.0 - 16.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 20,
          location: 'Chennai, Tamil Nadu, India',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Mainframe+Infrastructure+Solution+Architect',
          whoCanApply: [
            'BE/BTech degree in Computer Science, IT, or related engineering discipline',
            'Hands-on expertise with IBM Z Mainframe infrastructure, z/OS, JCL, CICS, and DB2',
            'Experience with mainframe modernization patterns (rehosting, refactoring, microservices API integration)',
            'Familiarity with cloud platforms (AWS/Azure) and hybrid cloud integration tools (Zowe, Wazi)'
          ],
          additionalInfo: 'Presales technical leadership role supporting global banking and financial services clients.'
        },
        {
          role: 'Mainframe Infrastructure Solution Architect',
          desc: 'Lead enterprise mainframe solution architecture, proposal development, and technical risk assessments. Architect modern z/OS infrastructure frameworks and hybrid cloud integrations.',
          skills: ['Mainframe Modernization', 'Presales Architecture', 'JCL/COBOL', 'IBM Z'],
          package: '₹12.5 - 17.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 15,
          location: 'Chennai, Tamil Nadu, India',
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/?keyword=Mainframe+Infrastructure+Solution+Architect',
          whoCanApply: [
            'BE/BTech degree with deep technical knowledge of IBM Mainframe systems and z/OS',
            'Track record in presales architecture, client bid defense, and enterprise IT estimation',
            'Strong understanding of DevOps for Mainframe, automated deployment, and security controls',
            'Exceptional written and oral communication skills for C-level client presentations'
          ],
          additionalInfo: 'Based in Cognizant Chennai campus with hybrid work flexibility and certifications.'
        }
      ];

      return officialCognizantRoles.map((r, index) => ({
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
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
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

  const handleApply = (job) => {
    const targetJob = job || selectedJob;
    let careersUrl = targetJob?.applyUrl || (company?.website ? `${company.website}/careers` : 'https://careers.cognizant.com/uki-en/jobs/');
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
                      <td className="job-role-cell">
                        <div className="job-role-icon">💻</div>
                        <div className="job-role-text">
                          <strong>{job.role}</strong>
                          <span>{job.requiredSkills ? job.requiredSkills.slice(0,2).join(', ') : 'Tech'}</span>
                        </div>
                      </td>
                      <td className="font-medium">{job.package}</td>
                      <td className="location-cell">{job.location?.split('\n').join(' / ')}</td>
                      <td className="eligibility-cell">
                        <span className="req-badge">{job.criteria?.minCgpa} CGPA</span>
                        <span className="req-badge">{job.criteria?.allowedBranches?.[0]}</span>
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
              <button className="co-modal-apply-btn" onClick={() => handleApply(selectedJob)}>
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
