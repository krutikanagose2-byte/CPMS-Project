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
          applyUrl: 'https://careers.cognizant.com/emea-en/jobs/00070761971/adas-autosar-software-engineer-davinci-configurator/',
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
          applyUrl: 'https://careers.cognizant.com/apj-en/jobs/00070356131/devops/',
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
          applyUrl: 'https://careers.cognizant.com/ca-en/jobs/00070646671/programmable-logic-design-engineer-merge-of-fpga-and-mbse/',
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
          applyUrl: 'https://careers.cognizant.com/us-en/jobs/00070646321/programmable-logic-design-engineer-merge-of-fpga-and-mbse/',
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
          applyUrl: 'https://careers.cognizant.com/uki-en/jobs/00070763721/adas-systems-engineer/',
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
          applyUrl: 'https://careers.cognizant.com/us-en/jobs/00070703271/senior-consulting-manager-ai-architecture-engineering/',
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
          applyUrl: 'https://careers.cognizant.com/india-en/jobs/00070703111/consulting-principal-ai-architecture-and-engineering-lead/',
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
          applyUrl: 'https://careers.cognizant.com/us-en/jobs/00070657983/sr-embeddedcplusplus-computer-vision-engineer-hybrid/',
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
          applyUrl: 'https://careers.cognizant.com/global-en/jobs/00067194203/mainframe-infrastructure-solution-architect/',
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
          applyUrl: 'https://careers.cognizant.com/ca-fr/offres-demploi/00067194204/mainframe-infrastructure-solution-architect/',
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

    if (company?.name && company.name.toLowerCase().includes('infosys')) {
      const officialInfosysRoles = [
        {
          role: 'Jr. IT PMS Developer — Systems Engineer',
          desc: 'Develop, maintain and test IT Portfolio Management System (PMS) applications. Configure system modules, optimize database queries, and support enterprise IT operations.',
          skills: ['IT PMS', 'Java', 'SQL', 'Systems Engineering'],
          package: '₹4.5 - 7.5 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 30,
          location: 'Bengaluru / Pune / Hyderabad, India',
          applyUrl: 'https://digitalcareers.infosys.com/global-careers/company-job/description/reqid/152200BR',
          whoCanApply: [
            'Bachelor degree in Computer Science, IT, or Electronics Engineering',
            'Strong foundation in Object Oriented Programming (Java/C++) and SQL databases',
            'Familiarity with IT service management (ITSM) concepts and SDLC practices',
            'Good analytical and problem-solving capabilities'
          ],
          additionalInfo: 'Job Req ID: 152200BR. Part of Infosys Global Digital Careers Program.'
        },
        {
          role: 'Cloud / AI Developer — Java, GCP',
          desc: 'Architect cloud-native microservices and AI solutions using Java and Google Cloud Platform (GCP). Integrate AI APIs, manage BigQuery pipelines, and deploy Kubernetes clusters.',
          skills: ['Java', 'GCP', 'Cloud AI', 'Microservices'],
          package: '₹8.0 - 13.0 LPA',
          branch: 'BE/BTech - CS, IT, AI, Data Science',
          cgpa: 6.5,
          openings: 20,
          location: 'Bengaluru / Remote, India',
          applyUrl: 'https://digitalcareers.infosys.com/global-careers/company-job/description/reqid/152575BR',
          whoCanApply: [
            'BE/BTech in CS, IT, Artificial Intelligence, or Data Science',
            'Hands-on expertise in Java microservices, GCP Cloud Functions, BigQuery, and Docker',
            'Experience integrating machine learning APIs and vector databases',
            'Knowledge of DevOps CI/CD pipelines on GCP'
          ],
          additionalInfo: 'Job Req ID: 152575BR. High-impact enterprise Cloud & AI engineering unit.'
        },
        {
          role: 'Java Full Stack Developer',
          desc: 'Build end-to-end web applications with Java Spring Boot backend and Angular/React frontend. Implement RESTful APIs, unit test coverage, and database persistence layers.',
          skills: ['Java', 'Spring Boot', 'React/Angular', 'REST APIs'],
          package: '₹6.5 - 11.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 35,
          location: 'Pune / Hyderabad / Mysuru, India',
          applyUrl: 'https://digitalcareers.infosys.com/global-careers/company-job/description/reqid/153514BR',
          whoCanApply: [
            'Graduate degree in Computer Science, IT, or related engineering branch',
            'Proficiency in Java 11/17, Spring Boot, Hibernate, and Angular/React',
            'Hands-on experience with SQL databases and Git version control',
            'Strong understanding of web application security and REST principles'
          ],
          additionalInfo: 'Job Req ID: 153514BR. Infosys Digital Experience Practice.'
        },
        {
          role: 'Java Full Stack Developer',
          desc: 'Deliver high-volume enterprise web applications. Focus on reactive Java backend architectures, microservices security, and responsive UI components.',
          skills: ['Java 17', 'Spring Boot', 'Microservices', 'JavaScript'],
          package: '₹7.0 - 11.5 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 25,
          location: 'Bengaluru / Chennai, India',
          applyUrl: 'https://digitalcareers.infosys.com/global-careers/company-job/description/reqid/154241BR',
          whoCanApply: [
            'BE/BTech degree in Computer Science or Information Technology',
            'Experience building microservices architecture with Spring Cloud and Kafka',
            'Proficiency in frontend development (ReactJS / TypeScript / HTML5 / CSS3)',
            'Knowledge of Docker, Kubernetes, and automated testing frameworks'
          ],
          additionalInfo: 'Job Req ID: 154241BR. Hybrid engagement across top tier financial projects.'
        },
        {
          role: 'ReactJS Developer',
          desc: 'Develop interactive user interface components using ReactJS, Redux Toolkit, and modern CSS frameworks. Ensure web accessibility, cross-browser compatibility, and fast rendering.',
          skills: ['ReactJS', 'Redux', 'JavaScript ES6+', 'HTML5/CSS3'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'BE/BTech - CS, IT, MCA',
          cgpa: 6.0,
          openings: 20,
          location: 'Pune / Trivandrum, India',
          applyUrl: 'https://digitalcareers.infosys.com/global-careers/company-job/description/reqid/149672BR',
          whoCanApply: [
            'Degree in Computer Science, IT, or MCA',
            'Solid grasp of JavaScript (ES6+), React state management (Redux/Zustand), and Hooks',
            'Experience consuming REST/GraphQL APIs and optimizing web performance',
            'Familiarity with Jest/RTL unit testing and Webpack build tools'
          ],
          additionalInfo: 'Job Req ID: 149672BR. Core Frontend Engineering Team.'
        },
        {
          role: 'Java Kotlin Developer',
          desc: 'Design cross-platform backend services and mobile applications leveraging Java and Kotlin. Implement asynchronous coroutines, RESTful web services, and automated CI/CD builds.',
          skills: ['Kotlin', 'Java', 'Android SDK', 'Spring Framework'],
          package: '₹7.5 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 15,
          location: 'Bengaluru / Chandigarh, India',
          applyUrl: 'https://digitalcareers.infosys.com/global-careers/company-job/description/reqid/150920BR',
          whoCanApply: [
            'Engineering degree in CS, IT, or Electronics',
            'Deep expertise in Kotlin language features, Java interoperability, and Android SDK',
            'Experience with Kotlin Coroutines, Jetpack Compose, and Spring Boot',
            'Understanding of mobile design patterns (MVVM/MVI) and SQLite/Room DB'
          ],
          additionalInfo: 'Job Req ID: 150920BR. Mobile & Modern Application Development practice.'
        }
      ];

      return officialInfosysRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 3 ? 'Open' : (index > 4 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('capgemini')) {
      const officialCapgeminiRoles = [
        {
          role: 'Software Engineer — Mumbai',
          desc: 'Design, write clean code, and execute unit tests for enterprise banking and digital commerce projects. Collaborate with global Agile teams to deliver software modules.',
          skills: ['C++', 'Java', 'SQL', 'Software Engineering'],
          package: '₹5.5 - 8.5 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 25,
          location: 'Mumbai, Maharashtra, India',
          applyUrl: 'https://careers.capgemini.com/job/Mumbai-Software-Engineer/1204734401/',
          whoCanApply: [
            'Bachelor degree in Computer Science, IT, or Electronics Engineering',
            'Knowledge of core C++/Java programming and relational database concepts',
            'Understanding of Agile software development practices',
            'Good problem solving and debugging skills'
          ],
          additionalInfo: 'Ref. Code: 142559. Capgemini Financial Services business unit.'
        },
        {
          role: 'Software Engineer — Mumbai',
          desc: 'Develop scalable backend web services, optimize SQL database queries, and integrate third-party RESTful APIs for financial technology clients.',
          skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
          package: '₹6.0 - 9.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 20,
          location: 'Mumbai (Airoli / Vikhroli), India',
          applyUrl: 'https://careers.capgemini.com/job/Mumbai-%28ex-Bombay%29-Software-Engineer/1423804433/',
          whoCanApply: [
            'BE/BTech in CS, IT, or related engineering discipline',
            'Experience with Java 8+, Spring Boot, Hibernate, and REST API development',
            'Proficiency writing SQL queries and stored procedures',
            'Familiarity with Maven, Git, and automated testing'
          ],
          additionalInfo: 'Ref. Code: 516851. Capgemini Mumbai Technology Center.'
        },
        {
          role: 'Software Engineer — Bangalore',
          desc: 'Implement frontend and backend software components for cloud enterprise applications. Maintain CI/CD pipelines, containerized deployments, and code quality benchmarks.',
          skills: ['JavaScript', 'Node.js', 'React', 'Docker'],
          package: '₹6.5 - 9.5 LPA',
          branch: 'BE/BTech - CS, IT, MCA',
          cgpa: 6.0,
          openings: 30,
          location: 'Bangalore, Karnataka, India',
          applyUrl: 'https://careers.capgemini.com/job/Bangalore-Software-Engineer/1371383133/',
          whoCanApply: [
            'Degree in Computer Science, IT, or MCA',
            'Hands-on expertise in Node.js, Express, ReactJS, and asynchronous programming',
            'Experience with Docker, microservices deployment, and CI/CD pipelines',
            'Strong communication and collaborative development skills'
          ],
          additionalInfo: 'Ref. Code: 432179. Capgemini Digital Engineering COE.'
        },
        {
          role: 'Software Engineer — Hyderabad',
          desc: 'Contribute to cloud migration and software development for telecommunication and retail platforms. Optimize database schemas and automate testing routines.',
          skills: ['Java', 'Python', 'AWS', 'SQL'],
          package: '₹6.0 - 9.0 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 22,
          location: 'Hyderabad, Telangana, India',
          applyUrl: 'https://careers.capgemini.com/job/Hyderabad-Software-Engineer/1433224233/',
          whoCanApply: [
            'Engineering graduate in CS, IT, or Electronics',
            'Proficiency in Java or Python development and AWS core services (EC2, S3, RDS)',
            'Knowledge of database normalization and query tuning',
            'Familiarity with Agile tools (Jira, Confluence)'
          ],
          additionalInfo: 'Ref. Code: 543335. Capgemini GDC Hyderabad Campus.'
        },
        {
          role: 'Senior Software Engineer — Noida',
          desc: 'Lead technical implementation of microservices architecture, conduct peer code reviews, and optimize system performance for automotive and industrial IoT clients.',
          skills: ['Java 11+', 'Spring Boot', 'Microservices', 'Kafka'],
          package: '₹9.0 - 13.5 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 15,
          location: 'Noida, Uttar Pradesh, India',
          applyUrl: 'https://careers.capgemini.com/job/Noida-Senior-Software-Engineer/1431405833/',
          whoCanApply: [
            'BE/BTech in CS or IT with hands-on software development experience',
            'Deep expertise in Java, Spring Boot microservices, Kafka event streaming, and Docker',
            'Demonstrated capability in system design, unit testing, and code optimization',
            'Strong team leadership and client engagement skills'
          ],
          additionalInfo: 'Ref. Code: 306339. Industrial & Automotive Practice Unit.'
        },
        {
          role: 'Lead Software Engineer — Mumbai',
          desc: 'Lead software engineering delivery, architect scalable multi-tenant web platforms, and mentor junior developers in agile development methodologies.',
          skills: ['Software Architecture', 'Full Stack Java', 'Cloud', 'Team Leadership'],
          package: '₹12.0 - 16.5 LPA',
          branch: 'BE/BTech / MTech - CS, IT',
          cgpa: 6.5,
          openings: 10,
          location: 'Mumbai, Maharashtra, India',
          applyUrl: 'https://careers.capgemini.com/job/Mumbai-Lead-Software-Engineer/1211275501/',
          whoCanApply: [
            'Senior technical background with expertise in Enterprise Software Architecture',
            'Proven track record leading multi-disciplinary engineering teams',
            'Mastery of cloud-native patterns, DevOps, and microservices security',
            'Excellent client communication and technical leadership skills'
          ],
          additionalInfo: 'Req ID: 1211275501. High-visibility engineering leadership role.'
        }
      ];

      return officialCapgeminiRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 3 ? 'Open' : (index > 4 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('wipro')) {
      const officialWiproRoles = [
        {
          role: 'Java Backend + AIML',
          desc: 'Develop robust Java Spring Boot backend microservices integrated with Artificial Intelligence and Machine Learning models. Build automated data ingestion pipelines and ML APIs.',
          skills: ['Java', 'Spring Boot', 'Python', 'AI/ML'],
          package: '₹7.5 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT, AI',
          cgpa: 6.5,
          openings: 25,
          location: 'Bengaluru / Hyderabad, India',
          applyUrl: 'https://careers.wipro.com/job/Java-Backend-%2B-AIML/191451-en_US/',
          whoCanApply: [
            'BE/BTech in CS, IT, or Artificial Intelligence',
            'Experience developing Java Spring Boot microservices and RESTful endpoints',
            'Familiarity with Python AI/ML libraries (scikit-learn, TensorFlow, PyTorch)',
            'Knowledge of SQL, NoSQL databases, and cloud deployment'
          ],
          additionalInfo: 'Job ID: 191451. Wipro AI & Data Practice.'
        },
        {
          role: 'Spring Boot — Java + BPM',
          desc: 'Design business process management (BPM) workflows and integrate Java Spring Boot microservices. Optimize enterprise process automation for healthcare and insurance domains.',
          skills: ['Java', 'Spring Boot', 'Camunda BPM', 'REST APIs'],
          package: '₹7.0 - 11.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 20,
          location: 'Pune, Maharashtra, India',
          applyUrl: 'https://careers.wipro.com/job/Pune-Spring-Boot-%28-Java-%20-BPM%29-IND-411005/200710-en_US/',
          whoCanApply: [
            'Bachelor degree in Computer Science, IT, or Electronics',
            'Strong knowledge of Java 8+, Spring Boot, Hibernate, and BPM engines (Camunda/jBPM)',
            'Experience creating BPMN process diagrams and automated task workflows',
            'Good understanding of relational databases and microservices integration'
          ],
          additionalInfo: 'Job ID: 200710. Wipro Digital Business Process Practice.'
        },
        {
          role: 'Application Architect L1',
          desc: 'Define technical vision and solution architecture for cloud enterprise applications. Lead non-functional requirement assessments, design patterns, and security frameworks.',
          skills: ['Application Architecture', 'Cloud Solutions', 'Java/C#', 'Microservices'],
          package: '₹13.0 - 18.0 LPA',
          branch: 'BE/BTech / MTech - CS, IT',
          cgpa: 7.0,
          openings: 8,
          location: 'Pune, Maharashtra, India',
          applyUrl: 'https://careers.wipro.com/job/Pune-APPLICATION-ARCHITECT-L1-IND-411005/198967-en_US/',
          whoCanApply: [
            'BE/BTech or MTech in Computer Science or IT',
            'Proven experience in Enterprise Solution Architecture and Cloud (AWS/Azure)',
            'Mastery of microservices, design patterns, security standards, and scalability',
            'Strong leadership, proposal defense, and client consulting capabilities'
          ],
          additionalInfo: 'Job ID: 198967. Executive Architecture & Solution Delivery.'
        },
        {
          role: 'Lead Administrator L1 — Java Application Support',
          desc: 'Oversee production support, JVM performance tuning, log diagnostics, and environment administration for mission-critical Java enterprise applications.',
          skills: ['Java App Support', 'Linux Administration', 'JVM Tuning', 'Shell Scripting'],
          package: '₹8.0 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 15,
          location: 'Pune, Maharashtra, India',
          applyUrl: 'https://careers.wipro.com/job/Pune-LEAD-ADMINISTRATOR-L1-IND-411005/196578-en_US/',
          whoCanApply: [
            'BE/BTech in CS, IT, or related engineering discipline',
            'Expertise in Linux/Unix system administration, WebLogic/Tomcat server management',
            'Hands-on experience diagnosing JVM heap dumps, thread contention, and GC logs',
            'Knowledge of ITIL incident management processes and monitoring tools (AppDynamics/Splunk)'
          ],
          additionalInfo: 'Job ID: 196578. Wipro Enterprise Application Management Services.'
        },
        {
          role: 'Java Developer',
          desc: 'Build enterprise-grade software applications in Java. Implement clean object-oriented code, write unit test cases, and participate in Agile sprints.',
          skills: ['Java', 'Spring Boot', 'SQL', 'Hibernate'],
          package: '₹5.5 - 9.0 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 30,
          location: 'Chennai / Bengaluru, India',
          applyUrl: 'https://careers.wipro.com/search-jobs/',
          whoCanApply: [
            'Degree in Computer Science, IT, or Electronics Engineering',
            'Strong foundation in Core Java, collections, multi-threading, and object-oriented design',
            'Hands-on experience with Spring Boot, SQL databases, and Maven/Gradle',
            'Good verbal and written communication skills'
          ],
          additionalInfo: 'Wipro Global Software Engineering Unit.'
        },
        {
          role: 'Software Engineer',
          desc: 'Participate in the full software development lifecycle (SDLC), including requirements analysis, coding, bug fixing, and automated deployment.',
          skills: ['Software Engineering', 'Java/C++', 'Web Technologies', 'Git'],
          package: '₹5.0 - 8.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 40,
          location: 'Hyderabad / Gurgaon, India',
          applyUrl: 'https://careers.wipro.com/search-jobs/',
          whoCanApply: [
            'Graduate degree in Computer Science, IT, or related field',
            'Proficiency in programming languages such as Java, C++, or JavaScript',
            'Understanding of software design principles, algorithms, and data structures',
            'Ability to work effectively in cross-functional agile teams'
          ],
          additionalInfo: 'Wipro Talent Transformation & Global Delivery Center.'
        }
      ];

      return officialWiproRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 3 ? 'Open' : (index > 4 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('google')) {
      const officialGoogleRoles = [
        {
          role: 'Software Engineer',
          desc: 'Design, develop, test, deploy, maintain, and enhance large-scale software solutions. Solve complex algorithmic challenges across distributed systems, search, and cloud computing.',
          skills: ['Data Structures', 'Algorithms', 'C++', 'Java/Python', 'Distributed Systems'],
          package: '₹28.0 - 45.0 LPA',
          branch: 'BE/BTech / MTech - CS, IT, ECE',
          cgpa: 7.5,
          openings: 15,
          location: 'Bengaluru / Hyderabad, India',
          applyUrl: 'https://www.google.com/about/careers/applications/jobs/results/?q=Software+Engineer&location=India',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, related technical field, or equivalent practical experience',
            'Strong proficiency in C++, Java, Python, or Go',
            'Solid foundation in data structures, algorithms, and software design',
            'Experience with distributed systems and scalable architecture'
          ],
          additionalInfo: 'Official Google India Engineering Requisition.'
        },
        {
          role: 'Software Engineer, University Graduate',
          desc: 'Join Google as a university graduate software engineer. Contribute to core products used by billions, working on systems design, machine learning, and high-performance computing.',
          skills: ['C++', 'Python', 'Algorithms', 'System Design'],
          package: '₹22.0 - 35.0 LPA',
          branch: 'BE/BTech - CS, IT, AI',
          cgpa: 7.5,
          openings: 20,
          location: 'Bengaluru / Hyderabad / Pune, India',
          applyUrl: 'https://www.google.com/about/careers/applications/jobs/results/?q=Software+Engineer&location=India',
          whoCanApply: [
            'Graduating with a degree in Computer Science or related engineering discipline',
            'Experience in software development in one or more general purpose programming languages',
            'Competitive programming or open-source contribution track record preferred',
            'Passionate about solving real-world challenges at massive global scale'
          ],
          additionalInfo: 'Campus & Early Career University Graduate Opening.'
        },
        {
          role: 'Software Engineer, Cloud',
          desc: 'Build next-generation Google Cloud Platform (GCP) services, enterprise cloud storage, Kubernetes engines, and zero-trust infrastructure.',
          skills: ['GCP', 'Kubernetes', 'Go', 'Java', 'Cloud Computing'],
          package: '₹26.0 - 42.0 LPA',
          branch: 'BE/BTech / MTech - CS, IT, Cloud Computing',
          cgpa: 7.0,
          openings: 12,
          location: 'Bengaluru / Hyderabad, India',
          applyUrl: 'https://www.google.com/about/careers/applications/jobs/results/?q=Cloud+Software+Engineer&location=India',
          whoCanApply: [
            'Degree in Computer Science or equivalent practical experience',
            'Experience with cloud platforms, virtualization, and distributed storage systems',
            'Knowledge of Linux networking, containerization, and site reliability engineering',
            'Proficiency in systems languages such as Go, C++, or Java'
          ],
          additionalInfo: 'Google Cloud Platform (GCP) Infrastructure Practice.'
        },
        {
          role: 'Software Engineer, Full Stack',
          desc: 'Engineer responsive web platforms and robust backend APIs for Google products. Optimize frontend performance and develop scalable web service architectures.',
          skills: ['TypeScript', 'Angular/React', 'Java', 'gRPC', 'Web Performance'],
          package: '₹25.0 - 40.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 10,
          location: 'Hyderabad / Bengaluru, India',
          applyUrl: 'https://www.google.com/about/careers/applications/jobs/results/?q=Full+Stack&location=India',
          whoCanApply: [
            'Degree in Computer Science or Information Technology',
            'Experience designing web UIs and client-server distributed architectures',
            'Expertise in TypeScript, modern JavaScript frameworks, and high-throughput backend APIs',
            'Demonstrated understanding of web security, latency optimization, and accessibility'
          ],
          additionalInfo: 'High-visibility user-facing product engineering.'
        }
      ];

      return officialGoogleRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 2 ? 'Open' : (index > 2 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('microsoft')) {
      const officialMicrosoftRoles = [
        {
          role: 'Software Engineer',
          desc: 'Build innovative software features and experiences across Microsoft core platforms. Write production-grade code, participate in design reviews, and optimize system efficiency.',
          skills: ['C#', 'C++', 'Data Structures', 'Algorithms', 'System Design'],
          package: '₹24.0 - 40.0 LPA',
          branch: 'BE/BTech / MTech - CS, IT, ECE',
          cgpa: 7.0,
          openings: 25,
          location: 'Hyderabad / Bengaluru / Noida, India',
          applyUrl: 'https://jobs.careers.microsoft.com/global/en/search?q=Software+Engineer&lc=India',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, Engineering, or related field',
            'Demonstrated coding proficiency in C#, C++, Java, or Python',
            'Strong foundation in data structures, algorithms, and object-oriented design',
            'Ability to troubleshoot complex system behaviors and collaborate across teams'
          ],
          additionalInfo: 'Microsoft India Development Center (IDC).'
        },
        {
          role: 'Software Engineer – Azure',
          desc: 'Design and operate hyper-scale distributed services powering Microsoft Azure. Implement fault-tolerant microservices, cloud monitoring, and automated resilience mechanisms.',
          skills: ['Azure', 'C#', '.NET Core', 'Microservices', 'Distributed Systems'],
          package: '₹25.0 - 42.0 LPA',
          branch: 'BE/BTech - CS, IT, Cloud',
          cgpa: 7.0,
          openings: 20,
          location: 'Hyderabad / Bengaluru, India',
          applyUrl: 'https://jobs.careers.microsoft.com/global/en/search?q=Azure+Software+Engineer&lc=India',
          whoCanApply: [
            'Degree in Computer Science, IT, or related engineering discipline',
            'Hands-on experience in cloud microservices and distributed storage architectures',
            'Expertise in C#, .NET, Docker, and telemetry monitoring frameworks',
            'Understanding of high-availability, scalability, and disaster recovery patterns'
          ],
          additionalInfo: 'Microsoft Azure Cloud Infrastructure Team.'
        },
        {
          role: 'Software Engineer – Cloud',
          desc: 'Architect enterprise cloud infrastructure and security for hybrid environments. Automate provisioning, implement CI/CD, and scale cloud networking.',
          skills: ['Cloud Computing', 'Azure', 'Kubernetes', 'PowerShell/Bash', 'Terraform'],
          package: '₹22.0 - 38.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 7.0,
          openings: 18,
          location: 'Bengaluru / Noida, India',
          applyUrl: 'https://jobs.careers.microsoft.com/global/en/search?q=Cloud+Engineer&lc=India',
          whoCanApply: [
            'Degree in Computer Science or Electrical/Electronics Engineering',
            'Experience with Linux and Windows systems administration and cloud networking',
            'Proficiency in Infrastructure as Code (IaC) using Terraform or ARM templates',
            'Strong understanding of cloud identity, zero-trust security, and CI/CD'
          ],
          additionalInfo: 'Core Enterprise Cloud Engineering Unit.'
        },
        {
          role: 'Software Engineer – AI',
          desc: 'Integrate OpenAI models and Microsoft Copilot features into enterprise applications. Build fine-tuning pipelines, RAG frameworks, and high-throughput inferencing services.',
          skills: ['Python', 'Azure AI', 'Generative AI', 'PyTorch', 'LLMs'],
          package: '₹28.0 - 46.0 LPA',
          branch: 'BE/BTech / MTech - CS, AI, Data Science',
          cgpa: 7.5,
          openings: 15,
          location: 'Hyderabad / Bengaluru, India',
          applyUrl: 'https://jobs.careers.microsoft.com/global/en/search?q=AI+Software+Engineer&lc=India',
          whoCanApply: [
            'BE/BTech or MTech in Computer Science, AI, or Machine Learning',
            'Deep expertise in modern Generative AI, transformer models, and prompt engineering',
            'Experience optimizing large language model inference using Python, PyTorch, and ONNX',
            'Familiarity with vector databases, embeddings, and cognitive search architectures'
          ],
          additionalInfo: 'Microsoft Copilot & Strategic AI Innovation Group.'
        }
      ];

      return officialMicrosoftRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 2 ? 'Open' : (index > 2 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('sap')) {
      const officialSAPRoles = [
        {
          role: 'HR Project Associate (f/m/d) - 6 months limited contract',
          desc: 'Coordinate and execute HR digital transformation initiatives and project management workstreams. Support internal HR process optimization and cross-functional HR communications.',
          skills: ['HR Project Management', 'Accounting/Auditing', 'Process Optimization', 'HR Operations'],
          package: '€48,000 - 62,000 / year',
          branch: 'MBA / BBA / Any Graduate',
          cgpa: 6.5,
          openings: 5,
          location: 'Walldorf, Germany (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153324379/hr-project-associate-fmd-6-months-limited-contract/',
          whoCanApply: [
            'Degree in Human Resources, Business Administration, or related field',
            'Strong organizational, project coordination, and communication skills',
            'Proficiency in MS Office Suite and enterprise HR management tools',
            'Fluency in English; German language proficiency is an advantage'
          ],
          additionalInfo: 'Teams: Accounting/Auditing. Contract Type: Full-time (6 months limited).'
        },
        {
          role: 'SAP iXp Intern - Solution Adoption Campaign Coordinator',
          desc: 'Drive customer solution adoption campaigns, coordinate digital marketing deliverables, and track customer engagement metrics across SAP cloud portfolios.',
          skills: ['Solution Adoption', 'Digital Marketing', 'Campaign Management', 'Data Analytics'],
          package: '$30 - 38 / hr (Stipend)',
          branch: 'BE/BTech / BBA / MBA (Any)',
          cgpa: 6.5,
          openings: 8,
          location: 'Vancouver, Canada (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153279309/sap-ixp-intern-solution-adoption-campaign-coordinator/',
          whoCanApply: [
            'Currently enrolled in an undergraduate or master degree program',
            'Passion for enterprise cloud software adoption and digital campaign execution',
            'Strong interpersonal communication, data tracking, and multitasking skills',
            'Self-motivated learner with proactive team-working mindset'
          ],
          additionalInfo: 'SAP Innovation Experience (iXp) Internship. Contract Type: Full-time.'
        },
        {
          role: 'SAP iXp Intern - Solution Adoption Campaign Coordinator',
          desc: 'Coordinate enterprise customer enablement programs, execute communication campaigns, and measure product adoption for SAP North America accounts.',
          skills: ['Campaign Strategy', 'Customer Enablement', 'SAP Cloud', 'Communication'],
          package: '$30 - 38 / hr (Stipend)',
          branch: 'BE/BTech / BBA / MBA (Any)',
          cgpa: 6.5,
          openings: 8,
          location: 'Toronto, Canada (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153279239/sap-ixp-intern-solution-adoption-campaign-coordinator/',
          whoCanApply: [
            'Active university student in Business, Engineering, or Marketing discipline',
            'Experience creating presentations, project roadmaps, and campaign collateral',
            'Interest in customer success metrics and software lifecycle adoption',
            'Excellent verbal and written English communication skills'
          ],
          additionalInfo: 'SAP Innovation Experience (iXp) Internship. Contract Type: Full-time.'
        },
        {
          role: 'SAP iXp Intern - Marketing and Communications Coordinator',
          desc: 'Create compelling internal and external corporate communications, manage social media campaigns, and organize global employee engagement events.',
          skills: ['Marketing Strategy', 'Content Writing', 'Corporate Communications', 'Social Media'],
          package: '$32 - 40 / hr (Stipend)',
          branch: 'Mass Media / Communications / BBA / Any Graduate',
          cgpa: 6.5,
          openings: 6,
          location: 'New York, United States (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153269589/sap-ixp-intern-marketing-and-communications-coordinator/',
          whoCanApply: [
            'Enrolled in University degree in Marketing, Public Relations, or Communications',
            'Strong copywriting, storytelling, and digital content creation abilities',
            'Familiarity with digital media analytics and social publishing platforms',
            'Ability to operate in high-energy global corporate environments'
          ],
          additionalInfo: 'SAP iXp Intern Program. Location: Hudson Yards, New York. Contract: Full-time.'
        },
        {
          role: 'SAP iXp Intern - Marketing and Communications Coordinator',
          desc: 'Support marketing strategy execution, content authoring, and brand communication across SAP executive briefing centers and product divisions.',
          skills: ['Marketing Operations', 'Brand Communications', 'Event Management', 'Public Relations'],
          package: '$30 - 38 / hr (Stipend)',
          branch: 'Communications / BBA / BE / Any Graduate',
          cgpa: 6.5,
          openings: 6,
          location: 'Newtown Square, United States (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153268167/sap-ixp-intern-marketing-and-communications-coordinator/',
          whoCanApply: [
            'University student in Communications, Journalism, or Business Administration',
            'Demonstrated ability in executive event coordination and stakeholder alignment',
            'Proficiency in graphic design tools (Canva/Adobe) and office productivity suites',
            'Eagerness to contribute to world-class brand campaigns'
          ],
          additionalInfo: 'SAP North America HQ (Newtown Square). Contract Type: Full-time.'
        },
        {
          role: 'SAP iXp Intern – Experience Center | SAP Labs Latin America',
          desc: 'Facilitate technology demos, assist client visits at SAP Labs Latin America Experience Center, and explore emerging SAP enterprise prototypes.',
          skills: ['Technology Demos', 'Customer Experience', 'SAP Ecosystem', 'Innovation Labs'],
          package: 'Regional Stipend + Benefits',
          branch: 'BE/BTech - CS, IT, ECE / Business',
          cgpa: 6.0,
          openings: 5,
          location: 'São Leopoldo, Brazil (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153248139/sap-ixp-intern-experience-center-sap-labs-latin-america/',
          whoCanApply: [
            'Student in Computer Science, Information Systems, or Engineering',
            'Interest in showcasing enterprise technology and innovative customer demos',
            'Good communication skills in Portuguese and English',
            'Proactive personality with interest in hands-on innovation labs'
          ],
          additionalInfo: 'SAP Labs Latin America. Contract Type: Part-time.'
        },
        {
          role: 'Working Student - SAP Business AI Adoption & Activation',
          desc: 'Support adoption of generative AI and machine learning features across SAP product portfolios. Create enablement assets, conduct AI use-case analysis, and engage pilot users.',
          skills: ['Business AI', 'Generative AI', 'Product Activation', 'Python / Analytics'],
          package: '€18 - 24 / hr (Stipend)',
          branch: 'BE/BTech / Master in CS, AI, Data Science, Business',
          cgpa: 7.0,
          openings: 10,
          location: 'Walldorf, Germany (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153240558/working-student-sap-business-ai-adoption-activation/',
          whoCanApply: [
            'Enrolled Master or Bachelor student in AI, Computer Science, or Business Informatics',
            'Strong interest in LLMs, Generative AI, and enterprise automation trends',
            'Analytical thinking with ability to translate complex AI features into business value',
            'Fluent in English; German language capability is a plus'
          ],
          additionalInfo: 'SAP Business AI Unit. Contract Type: Part-time (Working Student).'
        },
        {
          role: '(Junior) Data Engineer - Integration & AI',
          desc: 'Build enterprise data integration pipelines, train AI/ML models, and develop automated data transformation services across cloud platforms.',
          skills: ['Python', 'SQL', 'Data Engineering', 'Machine Learning', 'Cloud Integration'],
          package: '₹14.0 - 20.0 LPA equivalent',
          branch: 'BE/BTech - CS, IT, Data Science, AI',
          cgpa: 6.5,
          openings: 12,
          location: 'Prague, Czechia (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153237348/junior-data-engineer-integration-ai/',
          whoCanApply: [
            'Graduate degree in Computer Science, Data Science, or Software Engineering',
            'Hands-on experience with Python, SQL, and data transformation libraries',
            'Familiarity with cloud data pipelines and machine learning algorithms',
            'Collaborative mindset with passion for data-driven architectures'
          ],
          additionalInfo: 'Integration & AI Global Team. Contract Type: Full-time.'
        },
        {
          role: 'Platform Engineer',
          desc: 'Design, build, and maintain cloud infrastructure platforms, automated CI/CD pipelines, and Kubernetes container clusters supporting SAP cloud solutions.',
          skills: ['Kubernetes', 'Docker', 'AWS/GCP/Azure', 'Terraform', 'CI/CD'],
          package: '$130,000 - 165,000 / year',
          branch: 'BE/BTech / MTech - CS, IT, Cloud',
          cgpa: 7.0,
          openings: 8,
          location: 'Newport Beach, United States (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153220909/platform-engineer/',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, Cloud Computing, or related field',
            'Experience administering Kubernetes, Docker containers, and cloud infrastructure (AWS/Azure/GCP)',
            'Proficiency in Infrastructure as Code (Terraform) and automated CI/CD tools',
            'Deep understanding of platform reliability, monitoring, and high availability'
          ],
          additionalInfo: 'Teams: Consulting & Platform Infrastructure. Contract Type: Full-time.'
        },
        {
          role: 'Director of Government Affairs - UKI',
          desc: 'Lead government relations, public policy advocacy, and digital economy engagement with UK and Ireland public sector officials and industry bodies.',
          skills: ['Government Affairs', 'Public Policy', 'Digital Strategy', 'Stakeholder Management'],
          package: '£120,000 - 150,000 / year',
          branch: 'Master / LLB / MBA / Any Graduate',
          cgpa: 7.0,
          openings: 2,
          location: 'London / Feltham, United Kingdom (Hybrid)',
          applyUrl: 'https://jobs.sap.com/en/jobs/744000153212904/director-of-government-affairs-uki/',
          whoCanApply: [
            'Extensive experience in government relations, public affairs, or regulatory policy',
            'Proven track record influencing technology and digital economy policies in the UK and Ireland',
            'Outstanding executive communication, negotiation, and strategic advisory skills',
            'Deep understanding of public sector technology procurement and enterprise software'
          ],
          additionalInfo: 'Executive Government Relations Leadership. Contract Type: Full-time.'
        }
      ];

      return officialSAPRoles.map((r, index) => ({
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

    if (company?.name && company.name.toLowerCase().includes('accenture')) {
      const officialAccentureRoles = [
        {
          role: 'Custom Software Engineer – Python',
          desc: 'Build scalable Python backend services, automate data pipelines, and develop RESTful APIs for global enterprise transformation initiatives.',
          skills: ['Python', 'Django/Flask', 'SQL', 'REST APIs', 'Git'],
          package: '₹6.5 - 11.0 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 30,
          location: 'Bengaluru / Hyderabad / Pune, India',
          applyUrl: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5383591-S1962526_en',
          whoCanApply: [
            'BE/BTech in Computer Science, Information Technology, or Electronics',
            'Solid programming skills in Python with knowledge of web frameworks (Django/Flask)',
            'Experience writing relational SQL queries and database schemas',
            'Understanding of version control (Git) and Agile methodologies'
          ],
          additionalInfo: 'Job No.: ATCI-5383591-S1962526. Advanced Technology Centers in India (ATCI).'
        },
        {
          role: 'Custom Software Engineer – SAP ABAP Cloud',
          desc: 'Develop modern SAP ABAP Cloud extensions, CDS views, and RESTful Application Programming (RAP) models on SAP S/4HANA.',
          skills: ['SAP ABAP', 'ABAP Cloud', 'CDS Views', 'RAP', 'SAP S/4HANA'],
          package: '₹7.0 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 25,
          location: 'Bengaluru / Mumbai / Kolkata, India',
          applyUrl: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5393398-S1961816_en',
          whoCanApply: [
            'Bachelor degree in Computer Science, IT, or related engineering discipline',
            'Knowledge of ABAP development, object-oriented ABAP, and modern SAP extension patterns',
            'Familiarity with SAP BTP and S/4HANA cloud architecture',
            'Good analytical and client consulting skills'
          ],
          additionalInfo: 'Job No.: ATCI-5393398-S1961816. SAP Enterprise Solutions Practice.'
        },
        {
          role: 'Custom Software Engineer – Python / Node.js / AWS',
          desc: 'Develop serverless applications and cloud microservices on AWS using Python and Node.js. Build event-driven architectures with AWS Lambda, DynamoDB, and API Gateway.',
          skills: ['Python', 'Node.js', 'AWS Lambda', 'DynamoDB', 'Serverless'],
          package: '₹8.0 - 13.5 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 20,
          location: 'Hyderabad / Chennai / Pune, India',
          applyUrl: 'https://www.accenture.com/in-en/careers/jobdetails?id=14768816_en',
          whoCanApply: [
            'Degree in Computer Science or Information Technology',
            'Demonstrated ability in Python or Node.js backend development',
            'Hands-on experience deploying AWS serverless resources (Lambda, S3, API Gateway)',
            'Knowledge of NoSQL databases and asynchronous architecture'
          ],
          additionalInfo: 'Job No.: 14768816. Cloud First Innovations Group.'
        },
        {
          role: 'Custom Software Engineer – Java Full Stack',
          desc: 'Develop end-to-end web applications utilizing Java Spring Boot microservices and Angular/React user interfaces. Ensure code quality, security, and continuous delivery.',
          skills: ['Java', 'Spring Boot', 'Angular/React', 'Microservices', 'Docker'],
          package: '₹7.5 - 12.5 LPA',
          branch: 'BE/BTech - CS, IT, MCA',
          cgpa: 6.0,
          openings: 35,
          location: 'Bengaluru / Pune / Gurgaon, India',
          applyUrl: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5396363-S1961717_en',
          whoCanApply: [
            'Graduation in Computer Science, IT, or Computer Applications (MCA)',
            'Proficiency in Java (8/11/17), Spring Boot, and modern frontend frameworks',
            'Understanding of RESTful services, database transactions, and Docker containerization',
            'Strong problem-solving attitude and verbal communication'
          ],
          additionalInfo: 'Job No.: ATCI-5396363-S1961717. Digital Engineering & Quality Services.'
        },
        {
          role: 'Custom Software Engineer – Spring Boot',
          desc: 'Design and implement robust enterprise backend microservices using Java and Spring Boot. Optimize high-concurrency database transactions and Kafka message queues.',
          skills: ['Spring Boot', 'Java 17', 'Kafka', 'Hibernate', 'PostgreSQL'],
          package: '₹7.0 - 11.5 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.0,
          openings: 25,
          location: 'Mumbai / Bengaluru / Hyderabad, India',
          applyUrl: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5416193-S1985276_en',
          whoCanApply: [
            'BE/BTech degree in Computer Science or Information Technology',
            'Deep expertise in Spring Boot, Spring Security, and JPA/Hibernate',
            'Experience with event streaming platforms like Apache Kafka or RabbitMQ',
            'Knowledge of unit testing with JUnit and Mockito'
          ],
          additionalInfo: 'Job No.: ATCI-5416193-S1985276. Enterprise Architecture & Integration.'
        },
        {
          role: 'Custom Software Engineer – Python',
          desc: 'Engineer advanced Python automation workflows, web scraping frameworks, and data integration services. Support client cloud infrastructure and API integrations.',
          skills: ['Python', 'FastAPI', 'Pandas', 'Docker', 'CI/CD'],
          package: '₹6.5 - 10.5 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.0,
          openings: 20,
          location: 'Chennai / Pune / Bengaluru, India',
          applyUrl: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5146641-S1900016_en',
          whoCanApply: [
            'Bachelor in Computer Science, IT, or related engineering branch',
            'Experience in Python scripting, API development using FastAPI/Flask',
            'Understanding of data manipulation using Pandas and automated testing',
            'Ability to work in fast-paced collaborative agile squads'
          ],
          additionalInfo: 'Job No.: ATCI-5146641-S1900016. Technology Delivery Center.'
        }
      ];

      return officialAccentureRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 3 ? 'Open' : (index > 4 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('deloitte')) {
      const officialDeloitteRoles = [
        {
          role: 'Software Engineer',
          desc: 'Develop enterprise software systems and cloud-enabled digital solutions. Collaborate with consulting teams to solve critical client business challenges.',
          skills: ['Java/C#', 'SQL', 'Object Oriented Programming', 'Agile'],
          package: '₹8.0 - 13.0 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.5,
          openings: 30,
          location: 'Hyderabad / Bengaluru / Mumbai, India',
          applyUrl: 'https://apply.deloitte.com/careers/SearchJobs/',
          whoCanApply: [
            'Degree in Computer Science, IT, or related engineering discipline',
            'Strong foundation in core programming (Java, C#, or Python) and relational databases',
            'Understanding of software design principles and development methodologies',
            'Excellent client advisory and problem-solving skills'
          ],
          additionalInfo: 'Deloitte Consulting & Systems Engineering Practice.'
        },
        {
          role: 'Technology Analyst',
          desc: 'Analyze enterprise IT architectures, assess digital transformation requirements, and design technology roadmaps for global Fortune 500 clients.',
          skills: ['Business Analysis', 'IT Strategy', 'SQL', 'Tableau/PowerBI', 'SDLC'],
          package: '₹7.5 - 11.5 LPA',
          branch: 'BE/BTech / MBA - CS, IT, Any',
          cgpa: 6.5,
          openings: 25,
          location: 'Gurgaon / Bengaluru / Hyderabad, India',
          applyUrl: 'https://apply.deloitte.com/careers/SearchJobs/',
          whoCanApply: [
            'Bachelor or Master degree in Engineering or Business Administration',
            'Strong business comprehension and data visualization capabilities',
            'Familiarity with requirements gathering, process mapping, and user stories',
            'Outstanding presentation and stakeholder management abilities'
          ],
          additionalInfo: 'Deloitte Advisory & Technology Transformation.'
        },
        {
          role: 'Full Stack Developer',
          desc: 'Build comprehensive web platforms using modern frontend frameworks and scalable microservices backends. Implement automated testing and CI/CD pipelines.',
          skills: ['React/Angular', 'Node.js', 'Spring Boot', 'REST APIs', 'Git'],
          package: '₹8.5 - 14.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 20,
          location: 'Hyderabad / Pune / Bengaluru, India',
          applyUrl: 'https://apply.deloitte.com/careers/SearchJobs/',
          whoCanApply: [
            'BE/BTech in Computer Science or Information Technology',
            'Hands-on expertise across frontend (React/Angular) and backend (Node.js/Java)',
            'Experience building and consuming RESTful microservices',
            'Knowledge of continuous integration and continuous deployment tools'
          ],
          additionalInfo: 'Deloitte Digital Innovation Hub.'
        },
        {
          role: 'Cloud Engineer',
          desc: 'Architect and deploy enterprise workloads across AWS, Azure, and GCP. Implement infrastructure as code, containerization, and cloud security governance.',
          skills: ['AWS/Azure', 'Terraform', 'Docker', 'Kubernetes', 'DevOps'],
          package: '₹9.0 - 15.0 LPA',
          branch: 'BE/BTech - CS, IT, Cloud',
          cgpa: 6.5,
          openings: 18,
          location: 'Bengaluru / Hyderabad, India',
          applyUrl: 'https://apply.deloitte.com/careers/SearchJobs/',
          whoCanApply: [
            'Degree in Computer Science, IT, or Cloud Computing specialization',
            'Certifications or hands-on proficiency in AWS or Microsoft Azure',
            'Experience with Terraform, Docker containers, and CI/CD pipelines',
            'Understanding of cloud security benchmarks and networking'
          ],
          additionalInfo: 'Deloitte Cloud & DevOps Practice.'
        }
      ];

      return officialDeloitteRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 2 ? 'Open' : (index > 2 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('kpmg')) {
      const officialKPMGRoles = [
        {
          role: 'Manager - Tax Tech & Transformation',
          desc: 'Lead digital tax transformation engagements, implementing automation and enterprise tax technology solutions. Oversee Direct and Indirect Tax technology architecture and compliance workflows.',
          skills: ['Tax Technology', 'Direct Tax', 'Indirect Tax', 'Digital Transformation', 'ERP Tax Integration'],
          package: '₹18.0 - 26.0 LPA',
          branch: 'CA / MBA / BE/BTech (CS/IT/Finance)',
          cgpa: 6.5,
          openings: 6,
          location: 'Gurgaon, Haryana (Work From Office)',
          applyUrl: 'https://kpmgindia.talentrecruit.com/career-page/apply/U2FsdGVkX1%252FfJ49qj4r9SUTZBk5VtSojAJbdbnuq26Q%253D?viewJD=true',
          whoCanApply: [
            'CA, MBA in Finance, or Bachelor degree in Computer Science/IT/Finance',
            '6 to 13 years of relevant experience in Tax Technology, Direct Tax, or Indirect Tax',
            'Strong expertise in ERP tax modules (SAP/Oracle) and tax automation tools',
            'Proven project management and client engagement capabilities'
          ],
          additionalInfo: 'Job ID: 1917. Job Type: Permanent, Full Time. Experience: 6.00 to 13.00 years.'
        },
        {
          role: 'Senior - Operations',
          desc: 'Oversee corporate operations, business process excellence, and service delivery workflows. Implement operational metrics, quality controls, and productivity tracking.',
          skills: ['Operations Management', 'Process Excellence', 'Quality Control', 'Data Reporting'],
          package: '₹10.0 - 15.0 LPA',
          branch: 'Any Graduate / BE/BTech / MBA',
          cgpa: 6.0,
          openings: 10,
          location: 'Bangalore, Karnataka (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=3464',
          whoCanApply: [
            'Graduate or Post Graduate in any discipline with strong operations background',
            '4 to 7 years of experience in enterprise business operations or shared services',
            'Proficiency in MIS reporting, process optimization, and stakeholder management',
            'Excellent problem-solving and organizational abilities'
          ],
          additionalInfo: 'Job ID: 3464. Job Type: Permanent, Full Time. Experience: 4.00 to 7.00 years.'
        },
        {
          role: 'Executive - Operations',
          desc: 'Execute day-to-day business operations, administrative workflows, and client engagement operations. Maintain databases, operational dashboards, and process documentation.',
          skills: ['Business Operations', 'MIS Reporting', 'Process Documentation', 'MS Excel'],
          package: '₹6.5 - 9.5 LPA',
          branch: 'Any Graduate / BCom / BBA / BE',
          cgpa: 6.0,
          openings: 15,
          location: 'Bangalore, Karnataka (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=3454',
          whoCanApply: [
            'Bachelor degree in Business, Commerce, Engineering, or related stream',
            '2 to 4 years of operational workflow or service operations experience',
            'Strong expertise in Advanced Excel, data reporting, and operational coordination',
            'Good interpersonal and written communication skills'
          ],
          additionalInfo: 'Job ID: 3454. Job Type: Permanent, Full Time. Experience: 2.00 to 4.00 years.'
        },
        {
          role: 'Senior - Taxation',
          desc: 'Provide strategic direct tax advisory, tax planning, and corporate compliance services. Support mergers & acquisitions tax structuring, tax due diligence, and regulatory assessments.',
          skills: ['Tax Advisory', 'Mergers & Acquisitions', 'Direct Tax', 'Tax Due Diligence'],
          package: '₹9.0 - 14.0 LPA',
          branch: 'CA / LLB / MBA Finance / BCom',
          cgpa: 6.5,
          openings: 12,
          location: 'Mumbai, Maharashtra (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=1623',
          whoCanApply: [
            'Chartered Accountant (CA) or Bachelor/Master in Law/Commerce/Finance',
            '0 to 2 years of experience in Direct Tax or M&A Tax Advisory (Freshers eligible)',
            'Sound knowledge of the Indian Income Tax Act and international tax conventions',
            'Strong analytical mindset and research capabilities'
          ],
          additionalInfo: 'Job ID: 1623. Job Type: Permanent, Full Time. Experience: 0.00 to 2.00 years.'
        },
        {
          role: 'Senior - Internal Audit',
          desc: 'Lead risk-based internal audits, Sarbanes-Oxley (SOX) compliance reviews, and operational control testing for enterprise clients across diverse industry sectors.',
          skills: ['Internal Audit', 'Risk Assessment', 'SOX Compliance', 'Internal Financial Controls'],
          package: '₹11.0 - 16.0 LPA',
          branch: 'CA / CIA / MBA Finance / BE',
          cgpa: 6.5,
          openings: 8,
          location: 'Mumbai, Maharashtra (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=3406',
          whoCanApply: [
            'Qualified CA, CIA, or MBA in Finance with audit background',
            '4 to 7 years of experience in internal audit, enterprise risk assessment, or SOX testing',
            'Strong knowledge of internal controls and standard auditing methodologies',
            'Ability to draft comprehensive audit reports and present to audit committees'
          ],
          additionalInfo: 'Job ID: 3406. Job Type: Permanent, Full Time. Experience: 4.00 to 7.00 years.'
        },
        {
          role: 'Assistant Manager - Internal Audit',
          desc: 'Manage enterprise internal audit engagements, define audit scoping, and oversee engagement team deliverables. Provide strategic governance and risk mitigation insights to C-suite clients.',
          skills: ['Internal Audit Leadership', 'Risk Governance', 'SOX 404', 'Process Audits'],
          package: '₹14.0 - 20.0 LPA',
          branch: 'CA / CIA / MBA Finance',
          cgpa: 6.5,
          openings: 6,
          location: 'Chennai, Tamil Nadu (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=4309',
          whoCanApply: [
            'Chartered Accountant (CA) or Certified Internal Auditor (CIA) qualification',
            '7 to 9 years of extensive internal audit and risk consulting experience',
            'Proven track record leading audit teams and managing client relationships',
            'Exceptional executive presentation and verbal negotiation skills'
          ],
          additionalInfo: 'Job ID: 4309. Job Type: Permanent, Full Time. Experience: 7.00 to 9.00 years.'
        },
        {
          role: 'Senior - Internal Audit',
          desc: 'Conduct comprehensive internal audit reviews, evaluate control deficiencies, and test key operational processes to strengthen internal financial controls and risk management.',
          skills: ['Internal Audit', 'Enterprise Risk', 'SOX Testing', 'Compliance Review'],
          package: '₹10.5 - 15.5 LPA',
          branch: 'CA / MBA Finance / BE/BTech',
          cgpa: 6.5,
          openings: 10,
          location: 'Gurgaon, Haryana (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=4526',
          whoCanApply: [
            'Qualified CA, CIA, or Post Graduate in Finance/Engineering',
            '4 to 7 years of internal audit, risk advisory, or compliance testing experience',
            'Familiarity with process walk-throughs, risk control matrices (RCM), and audit testing',
            'Strong written communication and analytical documentation skills'
          ],
          additionalInfo: 'Job ID: 4526. Job Type: Permanent, Full Time. Experience: 4.00 to 7.00 years.'
        },
        {
          role: 'Executive - Finance Advisory',
          desc: 'Support corporate finance advisory, financial modeling, accounting restructuring, and commercial valuation projects for high-growth and multinational enterprises.',
          skills: ['Financial Advisory', 'Corporate Finance', 'Accounting Advisory', 'Financial Modeling'],
          package: '₹7.0 - 11.0 LPA',
          branch: 'CA Inter / MBA Finance / CFA / BCom',
          cgpa: 6.5,
          openings: 12,
          location: 'Gurgaon, Haryana (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=4398',
          whoCanApply: [
            'MBA in Finance, CA Inter, CFA Level 1/2, or Bachelor in Finance/Commerce',
            '2 to 4 years of experience in corporate finance, advisory, or valuation services',
            'Strong financial modeling skills in Microsoft Excel and presentation crafting',
            'Deep comprehension of Indian GAAP / Ind AS / IFRS accounting standards'
          ],
          additionalInfo: 'Job ID: 4398. Job Type: Permanent, Full Time. Experience: 2.00 to 4.00 years.'
        },
        {
          role: 'Executive - IT Audit',
          desc: 'Execute IT General Controls (ITGC) testing, IT application controls reviews, and cybersecurity compliance assessments across complex enterprise IT architectures.',
          skills: ['IT Audit', 'IT General Controls (ITGC)', 'Cybersecurity', 'Risk Compliance', 'COBIT'],
          package: '₹7.5 - 11.5 LPA',
          branch: 'BE/BTech - CS, IT, ECE / BCA / MCA',
          cgpa: 6.5,
          openings: 14,
          location: 'Bangalore, Karnataka (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=4355',
          whoCanApply: [
            'BE/BTech in CS, IT, Electronics, or BCA/MCA/CISA aspirer',
            '2 to 4 years of experience in ITGC audits, access management, and change management testing',
            'Familiarity with ISO 27001, COBIT, SOX IT controls, and cloud security frameworks',
            'Strong logical analysis and technical audit reporting skills'
          ],
          additionalInfo: 'Job ID: 4355. Job Type: Permanent, Full Time. Experience: 2.00 to 4.00 years.'
        },
        {
          role: 'Manager - Tax M&A',
          desc: 'Lead mergers and acquisitions (M&A) tax advisory, deal tax structuring, vendor/buy-side due diligence, and post-merger corporate reorganization projects.',
          skills: ['Tax M&A', 'Due Diligence', 'Corporate Restructuring', 'Deal Structuring'],
          package: '₹16.0 - 24.0 LPA',
          branch: 'CA / LLB / MBA Finance',
          cgpa: 6.5,
          openings: 5,
          location: 'Mumbai, Maharashtra (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=1634',
          whoCanApply: [
            'Qualified Chartered Accountant (CA) or Master in Law/Finance',
            '4 to 6 years of specialized experience in M&A Tax and deal advisory',
            'Deep knowledge of corporate reorganizations, stamp duty, and cross-border tax implications',
            'Demonstrated leadership in client pitch defenses and deal execution'
          ],
          additionalInfo: 'Job ID: 1634. Job Type: Permanent, Full Time. Experience: 4.00 to 6.00 years.'
        }
      ];

      return officialKPMGRoles.map((r, index) => ({
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

    if (company?.name && (company.name.toLowerCase().includes('pwc') || company.name.toLowerCase().includes('pricewaterhouse'))) {
      const officialPwCRoles = [
        {
          role: 'Technology Consultant',
          desc: 'Guide clients through complex technological transformations, ERP implementations, and cyber resilience strategies. Drive business outcomes through technology.',
          skills: ['Technology Consulting', 'ERP', 'Cloud Strategy', 'Business Analysis'],
          package: '₹8.5 - 14.0 LPA',
          branch: 'BE/BTech / MBA - CS, IT',
          cgpa: 6.5,
          openings: 25,
          location: 'Bengaluru / Kolkata / Mumbai, India',
          applyUrl: 'https://www.pwc.in/careers.html',
          whoCanApply: [
            'Bachelor or Master degree in Engineering or Business Administration',
            'Strong understanding of enterprise IT strategy, business processes, and ERP',
            'Excellent client-facing consulting and stakeholder communication abilities',
            'Analytical approach towards evaluating technology investments and risks'
          ],
          additionalInfo: 'PwC India Technology Transformation Practice.'
        },
        {
          role: 'Software Developer',
          desc: 'Develop secure and reliable enterprise applications. Work across backend architectures, database schemas, and microservices integrations for PwC digital platforms.',
          skills: ['Java', 'Spring Boot', 'SQL', 'Microservices', 'Git'],
          package: '₹7.5 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.5,
          openings: 22,
          location: 'Bengaluru / Hyderabad / Gurgaon, India',
          applyUrl: 'https://www.pwc.in/careers.html',
          whoCanApply: [
            'Degree in Computer Science, Information Technology, or Electronics',
            'Proficiency in Java or C# backend application development',
            'Experience with REST API creation, authentication, and SQL databases',
            'Good understanding of agile software engineering practices'
          ],
          additionalInfo: 'PwC Acceleration Center (AC).'
        },
        {
          role: 'Data Engineer',
          desc: 'Architect robust data lakes and big data pipelines. Transform raw client data into structured analytical repositories supporting business intelligence and AI models.',
          skills: ['Python', 'SQL', 'ETL', 'Snowflake', 'Big Data'],
          package: '₹8.0 - 13.5 LPA',
          branch: 'BE/BTech - CS, IT, AI, Stats',
          cgpa: 6.5,
          openings: 18,
          location: 'Kolkata / Bengaluru, India',
          applyUrl: 'https://www.pwc.in/careers.html',
          whoCanApply: [
            'BE/BTech in CS, IT, Data Science, or related field',
            'Strong skills in SQL data wrangling and Python data processing libraries',
            'Experience working with cloud data warehouses (Snowflake/Redshift)',
            'Knowledge of ETL tools, data quality checks, and pipeline scheduling'
          ],
          additionalInfo: 'PwC Data & Analytics Center of Excellence.'
        },
        {
          role: 'Cloud Engineer',
          desc: 'Implement enterprise cloud architectures and migration strategies on AWS and Azure. Optimize cloud costs, manage Kubernetes clusters, and automate security audits.',
          skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'DevOps'],
          package: '₹8.5 - 14.0 LPA',
          branch: 'BE/BTech - CS, IT, Cloud',
          cgpa: 6.5,
          openings: 15,
          location: 'Mumbai / Bengaluru / Hyderabad, India',
          applyUrl: 'https://www.pwc.in/careers.html',
          whoCanApply: [
            'Engineering degree in Computer Science, IT, or related specialization',
            'Hands-on experience deploying and securing cloud environments on AWS or Azure',
            'Familiarity with container management using Kubernetes and Docker',
            'Understanding of automated CI/CD and cloud compliance standards'
          ],
          additionalInfo: 'PwC Cloud & Digital Architecture Group.'
        }
      ];

      return officialPwCRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 2 ? 'Open' : (index > 2 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && (company.name.toLowerCase().includes('l&t') || company.name.toLowerCase().includes('larsen'))) {
      const officialLTRoles = [
        {
          role: 'Software Engineer',
          desc: 'Develop enterprise digital solutions and industrial software applications supporting heavy engineering, infrastructure, and smart manufacturing systems.',
          skills: ['C++', 'Java', 'SQL', 'Software Engineering', 'System Integration'],
          package: '₹6.5 - 10.0 LPA',
          branch: 'BE/BTech - CS, IT, ECE',
          cgpa: 6.5,
          openings: 35,
          location: 'Mumbai / Chennai / Bengaluru, India',
          applyUrl: 'https://www.larsentoubro.com/corporate/careers/',
          whoCanApply: [
            'BE/BTech in Computer Science, Information Technology, or Electronics',
            'Strong foundation in Object-Oriented Programming (Java/C++) and SQL databases',
            'Understanding of software engineering lifecycle and system integration',
            'Good analytical and problem-solving abilities'
          ],
          additionalInfo: 'L&T Corporate Technology & Digital Transformation.'
        },
        {
          role: 'Graduate Engineer Trainee – IT',
          desc: 'Comprehensive technical training and real-world deployment across L&T corporate IT, smart city solutions, IoT systems, and enterprise data operations.',
          skills: ['Data Structures', 'Python/Java', 'Database Concepts', 'Analytical Skills'],
          package: '₹6.0 - 9.0 LPA',
          branch: 'BE/BTech - CS, IT, EnTC, EE',
          cgpa: 6.5,
          openings: 50,
          location: 'Mumbai / Vadodara / Pune, India',
          applyUrl: 'https://www.larsentoubro.com/corporate/careers/',
          whoCanApply: [
            'Fresh engineering graduate in CS, IT, Electronics, or Electrical Engineering',
            'Consistent academic record with 60% or 6.5+ CGPA throughout graduation',
            'Strong verbal and written communication skills with leadership aptitude',
            'Willingness to work across diverse corporate locations and industrial projects'
          ],
          additionalInfo: 'L&T Premier Graduate Engineer Trainee (GET) Program.'
        },
        {
          role: 'Software Developer',
          desc: 'Design and build responsive web applications and backend services for engineering project tracking, supply chain, and asset management platforms.',
          skills: ['Java', 'Spring Boot', 'React', 'REST APIs', 'PostgreSQL'],
          package: '₹7.0 - 11.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 25,
          location: 'Chennai / Mumbai, India',
          applyUrl: 'https://www.larsentoubro.com/corporate/careers/',
          whoCanApply: [
            'Degree in Computer Science or Information Technology',
            'Experience in Java Spring Boot backend development and React web interfaces',
            'Knowledge of relational database queries and performance optimization',
            'Familiarity with Agile ceremonies and version control'
          ],
          additionalInfo: 'L&T Digital Systems & Web Engineering Practice.'
        },
        {
          role: 'Embedded Software Engineer',
          desc: 'Develop firmware, device drivers, and real-time embedded software for industrial automation, smart meters, defense electronics, and IoT sensor nodes.',
          skills: ['Embedded C/C++', 'RTOS', 'Microcontrollers', 'CAN/SPI/I2C', 'Hardware Debugging'],
          package: '₹7.5 - 12.0 LPA',
          branch: 'BE/BTech - ECE, EnTC, EE, Instrumentation',
          cgpa: 6.5,
          openings: 20,
          location: 'Mysuru / Bengaluru / Mumbai, India',
          applyUrl: 'https://www.larsentoubro.com/corporate/careers/',
          whoCanApply: [
            'Degree in Electronics & Communication, Electrical, or Instrumentation Engineering',
            'Proficiency in Embedded C/C++ programming for ARM Cortex/microcontrollers',
            'Hands-on experience with RTOS, communication protocols (CAN, SPI, UART, I2C)',
            'Familiarity with hardware oscilloscopes, logic analyzers, and circuit schematics'
          ],
          additionalInfo: 'L&T Heavy Engineering, Defense & Embedded Systems Division.'
        },
        {
          role: 'Cloud / DevOps Engineer',
          desc: 'Build automated CI/CD pipelines, containerized microservices deployments, and manage hybrid cloud infrastructure for industrial engineering applications.',
          skills: ['Docker', 'Kubernetes', 'Jenkins', 'Linux', 'AWS/Azure'],
          package: '₹7.5 - 12.5 LPA',
          branch: 'BE/BTech - CS, IT, EnTC',
          cgpa: 6.5,
          openings: 20,
          location: 'Mumbai / Chennai, India',
          applyUrl: 'https://www.larsentoubro.com/corporate/careers/',
          whoCanApply: [
            'BE/BTech in Computer Science, IT, or related engineering branch',
            'Experience with Linux system administration, Docker containerization, and Kubernetes',
            'Knowledge of CI/CD pipeline automation with Jenkins or GitLab',
            'Understanding of cloud infrastructure management on AWS or Azure'
          ],
          additionalInfo: 'L&T Cloud Infrastructure & Digital Operations.'
        }
      ];

      return officialLTRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 3 ? 'Open' : (index > 3 ? 'Closing Soon' : 'Open'),
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

    switch (category) {
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
                <tr><td colSpan="7" style={{ textAlign: 'center', padding: '40px' }}>Loading offers...</td></tr>
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
                          <span>{job.requiredSkills ? job.requiredSkills.slice(0, 2).join(', ') : 'Tech'}</span>
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
