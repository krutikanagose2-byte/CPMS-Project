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

    if (company?.name && company.name.toLowerCase().includes('morgan stanley')) {
      const officialMsRoles = [
        {
          role: 'Java Software Engineer – Vice President – Parametric',
          desc: 'Lead the design and development of trading systems for the Parametric division.',
          skills: ['Java', 'Spring Boot', 'Microservices', 'Trading Systems'],
          package: '₹40.0 - 65.0 LPA',
          branch: 'BE/BTech / ME/MTech',
          cgpa: 7.0,
          openings: 1,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/External/job/Mumbai-India/Java-Software-Engineer--Vice-President---Parametric_PT-JR042853-1?utm_source=chatgpt.com',
          whoCanApply: ['Senior candidates with 8+ years experience in software engineering'],
          additionalInfo: 'Job ID: PT-JR042853'
        },
        {
          role: 'Senior Software Engineer – Parametric',
          desc: 'Develop low-latency software solutions and support core trading infrastructure.',
          skills: ['Software Engineering', 'Algorithms', 'Backend Systems'],
          package: '₹25.0 - 38.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 3,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/en-US/External/job/Senior-Software-Engineer---Parametric_PT-JR038722-1?utm_source=chatgpt.com',
          whoCanApply: ['Experienced software engineers'],
          additionalInfo: 'Job ID: PT-JR038722'
        },
        {
          role: 'Client Account Servicing, Associate – Investment Management',
          desc: 'Client-facing operations role managing account servicing in the Investment Management division.',
          skills: ['Client Account Servicing', 'Finance', 'Investment Management'],
          package: '₹14.0 - 20.0 LPA',
          branch: 'MBA / BCom / Finance',
          cgpa: 6.5,
          openings: 4,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/en-US/External/job/Client-Account-Servicing--Associate--Investment-Management_JR042228?utm_source=chatgpt.com',
          whoCanApply: ['Finance graduates with relevant experience'],
          additionalInfo: 'Job ID: JR042228'
        },
        {
          role: 'BDS Content Management Specialist, Senior Associate – Investment Management',
          desc: 'Manage global content strategies for the Business Development Services group.',
          skills: ['Content Management', 'BDS', 'Communications', 'Finance'],
          package: '₹18.0 - 25.0 LPA',
          branch: 'MBA / Post Grad',
          cgpa: 6.5,
          openings: 2,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/en-US/External/job/BDS-Content-Management-Specialist--Senior-Associate--Investment-Management_JR041072?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with content management & strategy experience'],
          additionalInfo: 'Job ID: JR041072'
        },
        {
          role: 'Investment Analyst – Parametric',
          desc: 'Analyze portfolios, generate investment insights, and support portfolio managers.',
          skills: ['Investment Analysis', 'Financial Modeling', 'Excel', 'Data Analytics'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'MBA / Finance / Economics',
          cgpa: 7.0,
          openings: 5,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/en-US/External/job/Investment-Analyst---Parametric_PT-JR038224-1?utm_source=chatgpt.com',
          whoCanApply: ['Finance professionals with analytical skills'],
          additionalInfo: 'Job ID: PT-JR038224'
        },
        {
          role: 'Structured Equity Solutions, Senior Analyst – Global Capital Market',
          desc: 'Provide support for structured equity trading, pricing, and capital market research.',
          skills: ['Equities', 'Derivatives', 'Capital Markets', 'Quantitative Analysis'],
          package: '₹18.0 - 26.0 LPA',
          branch: 'Engineering / Finance',
          cgpa: 7.5,
          openings: 3,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/private/job/Structured-Equity-Solutions--Senior-Analyst--Global-Capital-Market_JR037412?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with strong quantitative and capital markets knowledge'],
          additionalInfo: 'Job ID: JR037412'
        },
        {
          role: 'Fixed Income Division – Senior Associate, Structuring Desk Support',
          desc: 'Support the Fixed Income structuring desk with pricing tools and trade lifecycle management.',
          skills: ['Fixed Income', 'Structuring', 'VBA/Python', 'Trade Support'],
          package: '₹20.0 - 30.0 LPA',
          branch: 'Engineering / Finance',
          cgpa: 7.0,
          openings: 2,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/External/job/Mumbai-India/',
          whoCanApply: ['Professionals with Fixed Income product knowledge'],
          additionalInfo: 'Job ID: JR043926'
        },
        {
          role: 'Java Developer – Vice President – Software Engineering',
          desc: 'VP level engineering role overseeing Java backend architecture for global platforms.',
          skills: ['Java', 'Architecture', 'Leadership', 'Backend Engineering'],
          package: '₹45.0 - 70.0 LPA',
          branch: 'BE/BTech / ME/MTech',
          cgpa: 7.0,
          openings: 1,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/External/job/Mumbai-India/',
          whoCanApply: ['Senior engineers with leadership experience'],
          additionalInfo: 'Job ID: PT-JR042516'
        },
        {
          role: 'Cash Management Product Owner, Platforms – Director, Wealth Management',
          desc: 'Director level role driving product strategy for Wealth Management Cash Platforms.',
          skills: ['Product Management', 'Wealth Management', 'Agile', 'Cash Management'],
          package: '₹50.0 - 80.0 LPA',
          branch: 'MBA / Post Grad',
          cgpa: 7.0,
          openings: 1,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/External/job/Mumbai-India/',
          whoCanApply: ['Senior product managers with Wealth Management domain expertise'],
          additionalInfo: 'Job ID: PT-JR043872'
        },
        {
          role: 'Business Analyst, VRS Insights – ISG & Cross Coverage ORD Support, Director, LCD Data and Analytics',
          desc: 'Lead data and analytics insights for Legal and Compliance Division.',
          skills: ['Business Analysis', 'Data Analytics', 'Compliance/LCD', 'Insights'],
          package: '₹40.0 - 65.0 LPA',
          branch: 'MBA / Engineering',
          cgpa: 7.0,
          openings: 1,
          location: 'Mumbai',
          applyUrl: 'https://ms.wd5.myworkdayjobs.com/External/job/Mumbai-India/',
          whoCanApply: ['Experienced professionals in business analytics and compliance'],
          additionalInfo: 'Job ID: PT-JR040464'
        }
      ];

      return officialMsRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (25 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('jio')) {
      const officialJioRoles = [
        {
          role: 'Associate Product Manager',
          desc: 'Collaborate with cross-functional teams to design, develop, and launch digital products.',
          skills: ['Product Management', 'Agile', 'Market Research', 'Data Analysis'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'MBA / BE / BTech',
          cgpa: 7.0,
          openings: 4,
          location: 'Mumbai',
          applyUrl: 'https://careers.jio.com/frmjobdescription.aspx?JBTITLE=s769D9p94tDfZ6TtrzFEog==&funcCode=aYDQGbQGkVbO8SxVL0ar2yzLBPLYhJhQ&jbID=dCGszPc2DFkG5yK9LDjxdw==&utm_source=chatgpt.com',
          whoCanApply: ['Graduates with Product Management experience'],
          additionalInfo: 'Job ID: 87104330'
        },
        {
          role: 'Product Manager',
          desc: 'Drive the product lifecycle from vision to execution for Jio digital platforms.',
          skills: ['Product Strategy', 'Roadmapping', 'UX/UI', 'Analytics'],
          package: '₹18.0 - 25.0 LPA',
          branch: 'MBA / Post Grad',
          cgpa: 7.0,
          openings: 2,
          location: 'Mumbai',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Experienced product managers'],
          additionalInfo: 'Job ID: 87106791'
        },
        {
          role: 'Manager Platform Design',
          desc: 'Lead the design and architecture of highly scalable digital platforms.',
          skills: ['Platform Design', 'System Architecture', 'Cloud Services', 'API'],
          package: '₹20.0 - 30.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 1,
          location: 'Mumbai',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Senior engineers and architects'],
          additionalInfo: 'Job ID: 87111996'
        },
        {
          role: 'CMP Security Lead',
          desc: 'Lead the security initiatives for Cloud Management Platforms, ensuring robust data protection.',
          skills: ['Cybersecurity', 'Cloud Security', 'VAPT', 'Compliance'],
          package: '₹15.0 - 22.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 1,
          location: 'Patiala',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Cybersecurity professionals'],
          additionalInfo: 'Job ID: 87051839'
        },
        {
          role: 'Enterprise Sales Officer T1',
          desc: 'Manage enterprise accounts and drive B2B sales for Jio enterprise solutions.',
          skills: ['B2B Sales', 'Enterprise Solutions', 'Client Management'],
          package: '₹6.0 - 9.0 LPA',
          branch: 'Any Graduate / MBA',
          cgpa: 6.0,
          openings: 10,
          location: 'Noida',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Candidates with B2B sales experience'],
          additionalInfo: 'Job ID: 87052235'
        },
        {
          role: 'Customer Care Executive – Non Voice',
          desc: 'Handle customer queries via chat and email for Jio digital services.',
          skills: ['Customer Service', 'Communication', 'Problem Solving'],
          package: '₹3.0 - 5.0 LPA',
          branch: 'Any Graduate',
          cgpa: 5.5,
          openings: 50,
          location: 'Nagpur',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Freshers and graduates'],
          additionalInfo: 'Job ID: 87045157'
        },
        {
          role: 'Apprentice Engineer',
          desc: 'Apprenticeship program offering training and hands-on experience in telecom engineering.',
          skills: ['Telecom Basics', 'Networking', 'Field Support'],
          package: '₹3.5 - 5.5 LPA',
          branch: 'Diploma / BE/BTech',
          cgpa: 6.0,
          openings: 20,
          location: 'Mumbai',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Fresh engineering graduates and diploma holders'],
          additionalInfo: 'Job ID: 87009524'
        },
        {
          role: 'JC Field Engineer_DET',
          desc: 'Field engineering role for deployment and maintenance of Jio network infrastructure.',
          skills: ['Field Engineering', 'Telecom Network', 'Fiber Optics'],
          package: '₹4.0 - 6.0 LPA',
          branch: 'Diploma / BE/BTech',
          cgpa: 6.0,
          openings: 15,
          location: 'Mumbai KLDV 2 – Kalyan',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Field engineers with relevant technical background'],
          additionalInfo: 'Job ID: 87065797'
        },
        {
          role: 'Apprentice Engineer',
          desc: 'Apprenticeship program offering training and hands-on experience in telecom engineering.',
          skills: ['Telecom Basics', 'Networking', 'Field Support'],
          package: '₹3.5 - 5.5 LPA',
          branch: 'Diploma / BE/BTech',
          cgpa: 6.0,
          openings: 20,
          location: 'Mumbai',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Fresh engineering graduates and diploma holders'],
          additionalInfo: 'Job ID: 87009629'
        },
        {
          role: 'JC Field Engineer_DET',
          desc: 'Field engineering role for deployment and maintenance of Jio network infrastructure.',
          skills: ['Field Engineering', 'Telecom Network', 'Fiber Optics'],
          package: '₹4.0 - 6.0 LPA',
          branch: 'Diploma / BE/BTech',
          cgpa: 6.0,
          openings: 10,
          location: 'Bargarh',
          applyUrl: 'https://careers.jio.com/',
          whoCanApply: ['Field engineers with relevant technical background'],
          additionalInfo: 'Job ID: 87025997'
        }
      ];

      return officialJioRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (21 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('airtel')) {
      const officialAirtelRoles = [
        {
          role: 'Territory Manager – HDO',
          desc: 'Manage direct sales and territory operations for Home Digital Services.',
          skills: ['Territory Management', 'Sales', 'B2C Sales'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'Any Graduate / MBA',
          cgpa: 6.0,
          openings: 5,
          location: 'Trichy, Tamil Nadu',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/65e61ad0768b5?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with direct sales experience'],
          additionalInfo: 'Job ID: 65e61ad0768b5'
        },
        {
          role: 'Catchment Manager',
          desc: 'Drive revenue growth and manage distribution channels in the designated catchment area.',
          skills: ['Channel Management', 'Distribution', 'Sales'],
          package: '₹8.0 - 12.0 LPA',
          branch: 'MBA / Post Grad',
          cgpa: 6.5,
          openings: 2,
          location: 'Hisar, Haryana + other locations',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a65e9bd6f30f8a?utm_source=chatgpt.com',
          whoCanApply: ['Professionals with 3–5 years experience'],
          additionalInfo: 'Job ID: a65e9bd6f30f8a'
        },
        {
          role: 'Lead – OSP',
          desc: 'Lead the Outside Plant operations for fiber network deployment and maintenance.',
          skills: ['OSP', 'Fiber Optics', 'Network Maintenance', 'Telecom'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech - ECE, EEE',
          cgpa: 6.5,
          openings: 1,
          location: 'Kolkata, West Bengal',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a69831b9b592e4?utm_source=chatgpt.com',
          whoCanApply: ['Telecom engineers with 8–10 years experience'],
          additionalInfo: 'Job ID: a69831b9b592e4'
        },
        {
          role: 'Territory Manager – OWN',
          desc: 'Manage Airtel owned stores and ensure high quality customer experience and sales.',
          skills: ['Retail Management', 'Store Operations', 'Sales'],
          package: '₹5.0 - 8.0 LPA',
          branch: 'Any Graduate / MBA',
          cgpa: 6.0,
          openings: 3,
          location: 'Amritsar, Punjab + other locations',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a547d2221caa?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with 1–2 years retail experience'],
          additionalInfo: 'Job ID: a6a547d2221caa'
        },
        {
          role: 'Territory Manager – HDO',
          desc: 'Oversee Home Broadband operations and sales in the assigned territory.',
          skills: ['Broadband Sales', 'Territory Management', 'Direct Sales'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'Any Graduate / MBA',
          cgpa: 6.0,
          openings: 4,
          location: 'Mandi, Himachal Pradesh + other locations',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a65fc335ddbc8d?utm_source=chatgpt.com',
          whoCanApply: ['Sales professionals with territory management skills'],
          additionalInfo: 'Job ID: a65fc335ddbc8d'
        },
        {
          role: 'Key Account Manager – Gurgaon',
          desc: 'Manage enterprise key accounts for Airtel Business solutions.',
          skills: ['Key Account Management', 'B2B Sales', 'Enterprise Solutions'],
          package: '₹10.0 - 15.0 LPA',
          branch: 'MBA / Engineering',
          cgpa: 7.0,
          openings: 2,
          location: 'Gurgaon, Haryana',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a668ccafd11a65?utm_source=chatgpt.com',
          whoCanApply: ['Professionals with 4–8 years enterprise sales experience'],
          additionalInfo: 'Job ID: a668ccafd11a65'
        },
        {
          role: 'Store Manager – Airtel Core',
          desc: 'Lead store operations, ensure customer satisfaction and drive store profitability.',
          skills: ['Store Management', 'Customer Service', 'Retail Operations'],
          package: '₹4.0 - 7.0 LPA',
          branch: 'Any Graduate',
          cgpa: 6.0,
          openings: 3,
          location: 'Gorakhpur, Uttar Pradesh + other locations',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a2959467e7d4?utm_source=chatgpt.com',
          whoCanApply: ['Retail managers with 2–5 years experience'],
          additionalInfo: 'Job ID: a6a2959467e7d4'
        },
        {
          role: 'Territory Manager – HDO',
          desc: 'Drive direct sales for Airtel Home services in Bhatinda.',
          skills: ['Sales', 'Field Operations', 'B2C'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'Any Graduate / MBA',
          cgpa: 6.0,
          openings: 2,
          location: 'Bhatinda, Punjab + other locations',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a68d063e35e8?utm_source=chatgpt.com',
          whoCanApply: ['Field sales professionals'],
          additionalInfo: 'Job ID: a6a68d063e35e8'
        },
        {
          role: 'SDE-2',
          desc: 'Software Development Engineer II role for building scalable telecom software platforms.',
          skills: ['Java', 'Spring Boot', 'Microservices', 'System Design'],
          package: '₹15.0 - 25.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 3,
          location: 'Gurgaon, Haryana',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6abcb0c147728?utm_source=chatgpt.com',
          whoCanApply: ['Software engineers with solid backend experience'],
          additionalInfo: 'Job ID: a6abcb0c147728'
        },
        {
          role: 'Territory Sales Manager – Rural Mass Retail',
          desc: 'Manage rural mass retail distribution and sales for prepaid products.',
          skills: ['Rural Sales', 'Distribution', 'FMCG/Telecom Sales'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'Any Graduate / MBA',
          cgpa: 6.0,
          openings: 5,
          location: 'Hyderabad + other locations',
          applyUrl: 'https://airtel.darwinbox.in/ms/candidatev2/main/careers/jobDetails/65e1ed88db540?utm_source=chatgpt.com',
          whoCanApply: ['Sales professionals with 2–7 years experience in rural markets'],
          additionalInfo: 'Job ID: 65e1ed88db540'
        }
      ];

      return officialAirtelRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (29 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('amazon')) {
      const officialAmazonRoles = [
        {
          role: 'Software Development Engineer II – Alexa Endpoint Experiences',
          desc: 'Design, develop, and deploy software for Alexa endpoint devices and smart home integration.',
          skills: ['Java/C++', 'Object-Oriented Design', 'Alexa', 'Backend'],
          package: '₹35.0 - 55.0 LPA',
          branch: 'BE/BTech / ME/MTech - CS, IT',
          cgpa: 7.0,
          openings: 5,
          location: 'Pune',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10565737/software-development-engineer-ii-alexa-endpoint-experiences',
          whoCanApply: ['Engineers with 3+ years of experience'],
          additionalInfo: 'Job ID: 10565737'
        },
        {
          role: 'Software Development Engineer – Amazon',
          desc: 'Core software engineering role focusing on large-scale distributed systems.',
          skills: ['Data Structures', 'Algorithms', 'Distributed Systems'],
          package: '₹25.0 - 45.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.5,
          openings: 10,
          location: 'Bengaluru',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10546640/software-development-engineer-amazon?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 3+ years of experience'],
          additionalInfo: 'Job ID: 10546640'
        },
        {
          role: 'Software Development Engineer – AFT-PES',
          desc: 'Build systems for Amazon Fulfillment Technologies (AFT) focusing on supply chain efficiency.',
          skills: ['Java', 'AWS', 'Supply Chain Tech', 'System Design'],
          package: '₹25.0 - 45.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 6,
          location: 'India',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10529944/software-development-engineer-aft-pes?utm_source=chatgpt.com',
          whoCanApply: ['Software engineers with strong backend skills'],
          additionalInfo: 'Job ID: 10529944'
        },
        {
          role: 'SDE II – Amazon Business Operations',
          desc: 'Develop software solutions for B2B e-commerce (Amazon Business).',
          skills: ['Java', 'Microservices', 'AWS', 'B2B E-commerce'],
          package: '₹35.0 - 55.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 4,
          location: 'Hyderabad',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10556331/sde-ii-amazon-business-operations?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 3+ years of experience'],
          additionalInfo: 'Job ID: 10556331'
        },
        {
          role: 'Software Development Engineer II – Timehub Pay Extract',
          desc: 'Develop secure, highly available services for payroll data extraction systems.',
          skills: ['Java', 'AWS', 'Scalability', 'Security'],
          package: '₹35.0 - 55.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 3,
          location: 'Hyderabad',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10562899/software-development-engineer-ii-timehub-pay-extract?utm_source=chatgpt.com',
          whoCanApply: ['Experienced software developers'],
          additionalInfo: 'Job ID: 10562899'
        },
        {
          role: 'Software Development Engineer II – Timehub Pay Extract',
          desc: 'Build architecture for next-gen payroll capabilities globally.',
          skills: ['System Architecture', 'Java', 'Data Processing'],
          package: '₹35.0 - 55.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Hyderabad',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10562897/',
          whoCanApply: ['Experienced software developers'],
          additionalInfo: 'Job ID: 10562897'
        },
        {
          role: 'Software Development Engineer – Amazon Flex',
          desc: 'Develop features and mobile backend systems for the Amazon Flex driver app ecosystem.',
          skills: ['Backend Development', 'Mobile Systems', 'AWS'],
          package: '₹25.0 - 45.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 5,
          location: 'Bengaluru',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10561991/software-development-engineer-amazon-flex?utm_source=chatgpt.com',
          whoCanApply: ['Software engineers'],
          additionalInfo: 'Job ID: 10561991'
        },
        {
          role: 'Software Dev Engineer II – Selection Management',
          desc: 'Design large-scale systems to manage Amazon\'s massive product selection catalogue.',
          skills: ['Distributed Systems', 'Big Data', 'Java/C++'],
          package: '₹35.0 - 55.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.5,
          openings: 3,
          location: 'Bengaluru',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10561987/',
          whoCanApply: ['Senior engineers with distributed systems background'],
          additionalInfo: 'Job ID: 10561987'
        },
        {
          role: 'Software Engineer – Selection Monitoring',
          desc: 'Build intelligent monitoring systems to ensure selection quality and health metrics.',
          skills: ['Software Engineering', 'Monitoring Systems', 'Data Pipelines'],
          package: '₹25.0 - 45.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 4,
          location: 'Bengaluru',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10561925/software-engineer-selection-monitoring-selection-monitoring?utm_source=chatgpt.com',
          whoCanApply: ['Software engineers'],
          additionalInfo: 'Job ID: 10561925'
        },
        {
          role: 'Software Dev Engineer II – Paragon',
          desc: 'Develop high-performance customer service technology platforms (Paragon).',
          skills: ['Full Stack', 'Java', 'React', 'AWS'],
          package: '₹35.0 - 55.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 6,
          location: 'Bengaluru',
          applyUrl: 'https://www.amazon.jobs/en/jobs/10528516/software-dev-engineer-ii-paragon?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 3+ years experience'],
          additionalInfo: 'Job ID: 10528516'
        }
      ];

      return officialAmazonRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (22 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('latentview') || company?.name?.toLowerCase().includes('latent view')) {
      const officialLatentViewRoles = [
        {
          role: 'Assistant Manager - Data Engineering',
          desc: 'Lead data engineering teams to build scalable pipelines and data warehouses.',
          skills: ['Data Engineering', 'Big Data', 'ETL', 'Cloud'],
          package: '₹18.0 - 26.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 2,
          location: 'Chennai',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6ab2a5d887d9d?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 6-9 years of experience'],
          additionalInfo: 'Job ID: a6ab2a5d887d9d'
        },
        {
          role: 'Assistant Manager',
          desc: 'Managerial role overseeing analytics and consulting projects for key clients.',
          skills: ['Analytics', 'Project Management', 'Client Engagement'],
          package: '₹20.0 - 30.0 LPA',
          branch: 'MBA / Post Grad',
          cgpa: 7.0,
          openings: 3,
          location: 'Chennai',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a9eff51e0710?utm_source=chatgpt.com',
          whoCanApply: ['Professionals with 7-12 years experience'],
          additionalInfo: 'Job ID: a6a9eff51e0710'
        },
        {
          role: 'Assistant Manager',
          desc: 'Manage and deliver data-driven business solutions for diverse industry verticals.',
          skills: ['Business Analysis', 'Data Strategy', 'Consulting'],
          package: '₹15.0 - 25.0 LPA',
          branch: 'MBA / Engineering',
          cgpa: 6.5,
          openings: 2,
          location: 'Bengaluru',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a86a6817af45?utm_source=chatgpt.com',
          whoCanApply: ['Consulting professionals with analytics expertise'],
          additionalInfo: 'Job ID: a6a86a6817af45'
        },
        {
          role: 'Assistant Manager',
          desc: 'Lead delivery of analytics solutions and provide actionable business insights.',
          skills: ['Data Analytics', 'Team Management', 'Insights'],
          package: '₹15.0 - 22.0 LPA',
          branch: 'MBA / Analytics',
          cgpa: 6.5,
          openings: 3,
          location: 'Chennai',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a8594fc56d84?utm_source=chatgpt.com',
          whoCanApply: ['Professionals with 5-7 years experience'],
          additionalInfo: 'Job ID: a6a8594fc56d84'
        },
        {
          role: 'Senior Analyst - Data Science',
          desc: 'Develop predictive models and machine learning algorithms for business optimization.',
          skills: ['Data Science', 'Machine Learning', 'Python', 'Statistics'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech / Statistics',
          cgpa: 7.0,
          openings: 5,
          location: 'Chennai + 1',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a17cf7f1b83a?utm_source=chatgpt.com',
          whoCanApply: ['Data Scientists with 4-7 years of experience'],
          additionalInfo: 'Job ID: a6a17cf7f1b83a'
        },
        {
          role: 'Assistant Manager - Data Science',
          desc: 'Lead a team of data scientists to deliver advanced AI/ML solutions.',
          skills: ['Data Science', 'AI/ML', 'Leadership', 'Python'],
          package: '₹18.0 - 26.0 LPA',
          branch: 'MS / BE/BTech - CS, Stats',
          cgpa: 7.0,
          openings: 2,
          location: 'Bengaluru',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a17c508724a4?utm_source=chatgpt.com',
          whoCanApply: ['Data Science leads with 6-9 years experience'],
          additionalInfo: 'Job ID: a6a17c508724a4'
        },
        {
          role: 'Senior Analyst - Data Engineering',
          desc: 'Design and optimize data architecture and ETL pipelines for analytics products.',
          skills: ['Data Engineering', 'SQL', 'ETL', 'Cloud Platforms'],
          package: '₹10.0 - 16.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 4,
          location: 'Remote-TN',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a69cb91cddc31b?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 4-6 years of experience'],
          additionalInfo: 'Job ID: a69cb91cddc31b'
        },
        {
          role: 'Risk Analyst',
          desc: 'Analyze risk factors and develop mitigation strategies using data analytics.',
          skills: ['Risk Analytics', 'Financial Modeling', 'SQL', 'Python'],
          package: '₹70.0 - 95.0 LPA',
          branch: 'MBA / Economics / Finance',
          cgpa: 7.5,
          openings: 1,
          location: 'Mountain View, California',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6a721fdea4e12?utm_source=chatgpt.com',
          whoCanApply: ['Risk analysts with 3-7 years experience'],
          additionalInfo: 'Job ID: a6a721fdea4e12'
        },
        {
          role: 'Senior Databricks Engineer',
          desc: 'Build scalable data processing applications using Databricks and Apache Spark.',
          skills: ['Databricks', 'Spark', 'Data Engineering', 'Python/Scala'],
          package: '₹20.0 - 28.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Bengaluru',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6ab930ea9b75a?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 6-9 years of experience'],
          additionalInfo: 'Job ID: a6ab930ea9b75a'
        },
        {
          role: 'Senior Analyst - Data Engineering',
          desc: 'Develop robust data infrastructure to support advanced analytics use cases.',
          skills: ['Data Infrastructure', 'SQL', 'Cloud', 'Python'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 4,
          location: 'Bengaluru',
          applyUrl: 'https://latentview.darwinbox.in/ms/candidatev2/main/careers/jobDetails/a6ab92ef45ef26?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 5-6 years of experience'],
          additionalInfo: 'Job ID: a6ab92ef45ef26'
        }
      ];

      return officialLatentViewRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (26 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('fractal')) {
      const officialFractalRoles = [
        {
          role: 'Sr. Data Scientist – GenAI & Agentic Systems',
          desc: 'Build advanced generative AI models and autonomous agentic systems for enterprise clients.',
          skills: ['Generative AI', 'Agentic Systems', 'Python', 'LLMs'],
          package: '₹25.0 - 40.0 LPA',
          branch: 'BE/BTech - CS, AI, Data Science',
          cgpa: 7.5,
          openings: 3,
          location: 'Bengaluru',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/en-US/Careers/job/Sr-Data-Scientist---GenAI---Agentic-Systems_SR-42058?utm_source=chatgpt.com',
          whoCanApply: ['Senior data scientists with GenAI expertise'],
          additionalInfo: 'Job ID: SR-42058'
        },
        {
          role: 'Senior AI Engineer – MLOps – 5 to 10 yrs',
          desc: 'Deploy and scale machine learning models using modern MLOps pipelines and cloud infrastructure.',
          skills: ['MLOps', 'AWS/Azure/GCP', 'Docker', 'Kubernetes'],
          package: '₹22.0 - 35.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 5,
          location: 'Bengaluru / India',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/en-US/Careers/job/Bengaluru/Senior-Engineer--MLOPs--5-to-10yrs_SR-31317-1?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with 5-10 years experience in MLOps'],
          additionalInfo: 'Job ID: SR-31317'
        },
        {
          role: 'Lead AI Engineer',
          desc: 'Lead the architecture and development of AI-driven platforms and applications.',
          skills: ['AI Engineering', 'System Architecture', 'Python', 'Deep Learning'],
          package: '₹30.0 - 45.0 LPA',
          branch: 'BE/BTech / ME/MTech',
          cgpa: 7.5,
          openings: 2,
          location: 'Mumbai',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/en-US/Careers/job/Lead-AI-Engineer_SR-41368-1?utm_source=chatgpt.com',
          whoCanApply: ['Experienced tech leads in AI domain'],
          additionalInfo: 'Job ID: SR-41368'
        },
        {
          role: 'Senior Data Scientist – Generative AI',
          desc: 'Research and apply Generative AI techniques to solve complex business problems.',
          skills: ['Generative AI', 'NLP', 'PyTorch/TensorFlow', 'LLMs'],
          package: '₹25.0 - 40.0 LPA',
          branch: 'BE/BTech / MS / PhD',
          cgpa: 7.5,
          openings: 4,
          location: 'Bengaluru / India',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/Careers/job/Bengaluru/Senior-Data-Scientist---Generative-AI_SR-32627?utm_source=chatgpt.com',
          whoCanApply: ['Data Scientists with hands-on GenAI experience'],
          additionalInfo: 'Job ID: SR-32627'
        },
        {
          role: 'Senior Data Scientist – AI & Healthcare Analytics',
          desc: 'Apply machine learning models and analytics to the healthcare sector to improve patient outcomes.',
          skills: ['Healthcare Analytics', 'Machine Learning', 'Python', 'SQL'],
          package: '₹20.0 - 32.0 LPA',
          branch: 'BE/BTech / Data Science',
          cgpa: 7.0,
          openings: 3,
          location: 'Mumbai / Bengaluru / Pune',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/Careers/job/Mumbai/Senior-Data-Scientist----AI---Healthcare-analytics-_SR-39068-1?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with Data Science experience in Healthcare'],
          additionalInfo: 'Job ID: SR-39068'
        },
        {
          role: 'LLMOps Engineer',
          desc: 'Focus on deploying, monitoring, and optimizing Large Language Models in production.',
          skills: ['LLMOps', 'Model Serving', 'Monitoring', 'Python'],
          package: '₹22.0 - 35.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Mumbai',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/en-US/Careers/job/LLmops_SR-39417-1?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with experience scaling LLMs'],
          additionalInfo: 'Job ID: SR-39417'
        },
        {
          role: 'Senior Data Scientist – Market Mix Modelling',
          desc: 'Build predictive models to measure marketing ROI and optimize advertising budgets.',
          skills: ['Market Mix Modelling', 'Statistics', 'R/Python', 'Econometrics'],
          package: '₹18.0 - 30.0 LPA',
          branch: 'Stats / Math / Engineering',
          cgpa: 7.0,
          openings: 3,
          location: 'Bengaluru / India',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/en-US/Careers/job/Bengaluru/Senior-Data-Scientist--Market-Mix-Modelling-_SR-42338?utm_source=chatgpt.com',
          whoCanApply: ['Data scientists with MMM expertise'],
          additionalInfo: 'Job ID: SR-42338'
        },
        {
          role: 'Senior Analytics Consultant – CPG',
          desc: 'Consulting role leveraging analytics to drive strategy for Consumer Packaged Goods clients.',
          skills: ['CPG Analytics', 'Consulting', 'Data Strategy', 'SQL/Python'],
          package: '₹18.0 - 28.0 LPA',
          branch: 'MBA / Engineering',
          cgpa: 7.0,
          openings: 4,
          location: 'Bengaluru / India',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/Careers/job/Bengaluru/Senior-Analytics-Consultant---CPG_SR-41346?utm_source=chatgpt.com',
          whoCanApply: ['Consultants with CPG domain experience'],
          additionalInfo: 'Job ID: SR-41346'
        },
        {
          role: 'Engagement Manager – Route to Market',
          desc: 'Manage analytics engagements focusing on Route to Market strategies and sales optimization.',
          skills: ['Engagement Management', 'Route to Market', 'Analytics Consulting'],
          package: '₹25.0 - 38.0 LPA',
          branch: 'MBA / Post Grad',
          cgpa: 7.0,
          openings: 2,
          location: 'Bengaluru / Pune / Mumbai / Gurgaon / Noida',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/careers/job/Bengaluru/Engagement-Manager---Route-to-Market_SR-40598?utm_source=chatgpt.com',
          whoCanApply: ['Engagement managers with analytics background'],
          additionalInfo: 'Job ID: SR-40598'
        },
        {
          role: 'Data Engineer – Data Engineering',
          desc: 'Design, develop, and maintain robust data pipelines and cloud data warehouses.',
          skills: ['Data Engineering', 'ETL', 'SQL', 'Cloud (AWS/GCP/Azure)'],
          package: '₹12.0 - 22.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 6,
          location: 'Mumbai',
          applyUrl: 'https://fractal.wd1.myworkdayjobs.com/en-US/Careers/job/Data-Engineer-Data-Engineering-Engineer-Engineer-8_SR-40962-1?utm_source=chatgpt.com',
          whoCanApply: ['Engineers with solid data pipeline experience'],
          additionalInfo: 'Job ID: SR-40962'
        }
      ];

      return officialFractalRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (28 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('goldman sachs')) {
      const officialGsRoles = [
        {
          role: 'Internal Audit – Technology Audit – Vice President',
          desc: 'Lead technology audits across various divisions to ensure robust IT risk management and compliance.',
          skills: ['Technology Audit', 'IT Risk', 'Cybersecurity', 'Compliance'],
          package: '₹40.0 - 65.0 LPA',
          branch: 'BE/BTech / ME/MTech - CS, IT',
          cgpa: 7.0,
          openings: 1,
          location: 'Bengaluru',
          applyUrl: 'https://higher.gs.com/roles/183411?utm_source=chatgpt.com',
          whoCanApply: ['Senior candidates with 8+ years experience in tech audit/risk'],
          additionalInfo: 'Job ID: 183411'
        },
        {
          role: 'Software Engineering – Data, Lakehouse & AI Data Platform Engineer – Analyst',
          desc: 'Build scalable data pipelines and AI data platforms using modern lakehouse architectures.',
          skills: ['Data Engineering', 'Big Data', 'AI Platform', 'Python/Java'],
          package: '₹18.0 - 28.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.5,
          openings: 5,
          location: 'Bengaluru',
          applyUrl: 'https://higher.gs.com/roles/169320?utm_source=chatgpt.com',
          whoCanApply: ['Graduates with strong programming and data engineering skills'],
          additionalInfo: 'Job ID: 169320'
        },
        {
          role: 'Asset & Wealth Management – Private Bank Technology – Associate',
          desc: 'Develop technological solutions for the Private Wealth Management business.',
          skills: ['Java', 'Spring Boot', 'Microservices', 'Finance'],
          package: '₹25.0 - 38.0 LPA',
          branch: 'BE/BTech / MCA',
          cgpa: 7.0,
          openings: 3,
          location: 'Hyderabad',
          applyUrl: 'https://higher.gs.com/roles/171196?utm_source=chatgpt.com',
          whoCanApply: ['Software engineers with 3-6 years of experience'],
          additionalInfo: 'Job ID: 171196'
        },
        {
          role: 'Asset & Wealth Management – Margin Engineering – Associate',
          desc: 'Work within Margin Engineering to develop low-latency risk management systems.',
          skills: ['C++', 'Java', 'Low Latency', 'Risk Management Systems'],
          package: '₹25.0 - 38.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Hyderabad',
          applyUrl: 'https://higher.gs.com/roles/167750?utm_source=chatgpt.com',
          whoCanApply: ['Software engineers with background in high-performance systems'],
          additionalInfo: 'Job ID: 167750'
        },
        {
          role: 'Associate Software Engineering (L2)',
          desc: 'Core software engineering role focusing on full-stack development and system scaling.',
          skills: ['Full Stack', 'Java/Python', 'React', 'System Design'],
          package: '₹22.0 - 35.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 8,
          location: 'Bengaluru',
          applyUrl: 'https://higher.gs.com/roles/162216?utm_source=chatgpt.com',
          whoCanApply: ['Experienced software developers (2-5 years)'],
          additionalInfo: 'Job ID: 162216'
        },
        {
          role: '2027 India – Bengaluru/Hyderabad – Engineering – Summer Analyst',
          desc: 'Summer Analyst internship program for pre-final year students to gain hands-on engineering experience.',
          skills: ['Data Structures', 'Algorithms', 'Programming Basics'],
          package: '₹1.0 - 1.5 LPM (Stipend)',
          branch: 'BE/BTech / Dual Degree (Pre-final year)',
          cgpa: 8.0,
          openings: 50,
          location: 'Bengaluru / Hyderabad',
          applyUrl: 'https://higher.gs.com/roles/170476?utm_source=chatgpt.com',
          whoCanApply: ['Pre-final year engineering students'],
          additionalInfo: 'Job ID: 170476'
        },
        {
          role: 'Compliance Engineering – Software Engineering',
          desc: 'Develop engineering solutions for regulatory compliance and risk management models.',
          skills: ['Backend Development', 'Data Processing', 'Regulatory Tech'],
          package: '₹18.0 - 28.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 4,
          location: 'Bengaluru',
          applyUrl: 'https://www.goldmansachs.com/careers?utm_source=chatgpt.com',
          whoCanApply: ['Graduates with interest in FinTech compliance'],
          additionalInfo: 'Job ID: 26832*'
        },
        {
          role: 'Global Banking & Markets – Analytics and Exhibit Group – Analyst',
          desc: 'Analyst role focusing on financial data analytics and automated exhibit generation for global markets.',
          skills: ['Data Analytics', 'Python', 'SQL', 'Financial Modeling'],
          package: '₹16.0 - 25.0 LPA',
          branch: 'BE/BTech / MBA / Economics',
          cgpa: 7.5,
          openings: 5,
          location: 'Bengaluru',
          applyUrl: 'https://www.goldmansachs.com/careers?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with strong analytical and quantitative skills'],
          additionalInfo: 'Job ID: 146897997*'
        },
        {
          role: 'Global Banking & Markets Operations – Documentation – Senior Analyst',
          desc: 'Senior Analyst managing operations documentation and process automation workflows.',
          skills: ['Operations', 'Documentation', 'Process Automation'],
          package: '₹14.0 - 20.0 LPA',
          branch: 'Any Graduate / PG',
          cgpa: 6.5,
          openings: 3,
          location: 'Bengaluru',
          applyUrl: 'https://www.goldmansachs.com/careers?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with relevant banking operations experience'],
          additionalInfo: 'Job ID: 146896889*'
        },
        {
          role: 'Compliance – Compl Surveillance & Models Engineering – Vice President',
          desc: 'VP role leading the engineering of compliance surveillance models and algorithms.',
          skills: ['Engineering Leadership', 'Model Engineering', 'Compliance', 'Machine Learning'],
          package: '₹45.0 - 70.0 LPA',
          branch: 'BE/BTech / ME/MTech',
          cgpa: 7.0,
          openings: 1,
          location: 'Bengaluru',
          applyUrl: 'https://www.goldmansachs.com/careers?utm_source=chatgpt.com',
          whoCanApply: ['Senior engineering leaders with domain expertise'],
          additionalInfo: 'Global Compliance Division'
        }
      ];

      return officialGsRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (30 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('icici')) {
      const officialIcicRoles = [
        {
          role: 'Credit Manager',
          desc: 'Credit Manager role focusing on credit risk assessment, financial analysis, and loan portfolio management.',
          skills: ['Credit Risk', 'Financial Analysis', 'Banking', 'Risk Assessment'],
          package: '₹9.0 - 15.0 LPA',
          branch: 'MBA / BCom / BE (Any)',
          cgpa: 6.5,
          openings: 5,
          location: 'Mumbai / Hybrid',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/job-details/2204493?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with finance and credit risk background'],
          additionalInfo: 'Job ID: 2204493'
        },
        {
          role: 'Relationship Manager – Wholesale Banking',
          desc: 'Relationship Manager for Wholesale Banking, managing corporate clients and large banking portfolios.',
          skills: ['Wholesale Banking', 'Client Management', 'Sales', 'Finance'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'MBA / PGDM / BE',
          cgpa: 6.5,
          openings: 4,
          location: 'Bengaluru / On-site',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/job-details/2201145?utm_source=chatgpt.com',
          whoCanApply: ['Professionals with experience in wholesale banking'],
          additionalInfo: 'Job ID: 2201145'
        },
        {
          role: 'Application Security Manager',
          desc: 'Information Security role focusing on application security, vulnerability assessment, and threat mitigation.',
          skills: ['AppSec', 'VAPT', 'Information Security', 'Cybersecurity'],
          package: '₹15.0 - 22.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Mumbai / Hybrid',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/job-details/2544251?utm_source=chatgpt.com',
          whoCanApply: ['IT professionals with 5-8 years of security experience'],
          additionalInfo: 'Job ID: 2544251'
        },
        {
          role: 'Product Manager – Retail Banking',
          desc: 'Manage and grow retail banking products, focusing on customer experience and digital transformation.',
          skills: ['Product Management', 'Retail Banking', 'Agile', 'Strategy'],
          package: '₹14.0 - 20.0 LPA',
          branch: 'MBA / BE / BTech',
          cgpa: 7.0,
          openings: 3,
          location: 'Mumbai / On-site',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Professionals with product management experience'],
          additionalInfo: 'Job ID: 23080'
        },
        {
          role: 'Technical Manager – Mortgage Valuation Group',
          desc: 'Technical Manager role overseeing the IT infrastructure and software systems for the Mortgage Valuation Group.',
          skills: ['Technical Management', 'IT Infrastructure', 'Banking Systems'],
          package: '₹16.0 - 24.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 2,
          location: 'Pune / Hybrid',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Experienced tech managers'],
          additionalInfo: 'Job ID: 24553'
        },
        {
          role: 'Operations Manager',
          desc: 'Oversee IT operations, ensure system availability, and manage digital operations teams.',
          skills: ['IT Operations', 'Team Management', 'Process Optimization'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech / MBA',
          cgpa: 6.5,
          openings: 3,
          location: 'Bengaluru / On-site',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with strong operations management background'],
          additionalInfo: 'Job ID: 24554'
        },
        {
          role: 'ICICI Bank Probationary Officer Program',
          desc: 'Probationary Officer (PO) Program for young graduates to fast-track their career in banking.',
          skills: ['Banking Operations', 'Finance', 'Customer Service', 'Sales'],
          package: '₹5.0 - 8.0 LPA',
          branch: 'BE/BTech / BCom / BSc (Any)',
          cgpa: 6.0,
          openings: 50,
          location: 'Pan India',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Fresh graduates with 0-2 years of experience'],
          additionalInfo: 'Job ID: 2547189'
        },
        {
          role: 'Apprenticeship Programme',
          desc: 'Apprenticeship program offering hands-on experience in various banking and IT operations.',
          skills: ['Basic IT', 'Banking Basics', 'Communication', 'Operations'],
          package: '₹3.0 - 4.5 LPA',
          branch: 'BE/BTech / Any Graduate',
          cgpa: 5.5,
          openings: 100,
          location: 'Pan India',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Fresh graduates looking for apprenticeship'],
          additionalInfo: 'Job ID: 2550803'
        },
        {
          role: 'Software Engineer – Full Stack',
          desc: 'Develop full stack web applications for ICICI Bank digital banking platforms using modern JavaScript frameworks.',
          skills: ['React', 'Node.js', 'Java', 'Full Stack'],
          package: '₹8.0 - 14.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 10,
          location: 'Mumbai / Hybrid',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Software engineering graduates'],
          additionalInfo: 'Digital Banking Tech Team'
        },
        {
          role: 'Data Scientist / ML Engineer',
          desc: 'Apply machine learning models for risk management, fraud detection, and customer insights in banking.',
          skills: ['Machine Learning', 'Python', 'Data Science', 'SQL'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, IT, AI/ML',
          cgpa: 7.0,
          openings: 5,
          location: 'Bengaluru / On-site',
          applyUrl: 'https://www.icicicareers.com/CareerApplicant/Career/home/?utm_source=chatgpt.com',
          whoCanApply: ['Candidates with background in Data Science and ML'],
          additionalInfo: 'Analytics and Data Science CoE'
        }
      ];

      return officialIcicRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (22 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('hdfc')) {
      const officialHdfcRoles = [
        {
          role: 'Manager – Analytics Support & PLP',
          desc: 'Analytics Support and PLP role (Job ID 71527) focusing on data analytics and process automation in banking.',
          skills: ['Analytics', 'SQL', 'Python', 'Banking'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'MBA / BCom / BE (Any)',
          cgpa: 7.0,
          openings: 3,
          location: 'Mumbai / On-site',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/71527',
          whoCanApply: ['Candidates with strong analytics background'],
          additionalInfo: 'HDFC Bank Corporate Office'
        },
        {
          role: 'Tech & Digital – Sr QA Engineer',
          desc: 'Senior Quality Assurance Engineer (Job ID 69040) responsible for automation and manual testing of digital products.',
          skills: ['QA', 'Automation', 'Selenium', 'Java'],
          package: '₹10.0 - 15.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 5,
          location: 'Bengaluru / Hybrid',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/69040',
          whoCanApply: ['Engineering graduates with testing experience'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'Tech & Digital – Lead Site Reliability Engineer',
          desc: 'Lead SRE (Job ID 68733) to maintain high availability and performance of critical banking platforms.',
          skills: ['SRE', 'AWS/Azure', 'Kubernetes', 'CI/CD'],
          package: '₹18.0 - 25.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Pune / Remote',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/68733',
          whoCanApply: ['Experienced DevOps / SRE professionals'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'Tech & Digital – Lead Site Reliability Engineer',
          desc: 'Lead SRE (Job ID 68297) focusing on scalable cloud infrastructure and continuous deployment pipelines.',
          skills: ['SRE', 'AWS/Azure', 'Kubernetes', 'CI/CD'],
          package: '₹18.0 - 25.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 7.0,
          openings: 2,
          location: 'Bengaluru / Hybrid',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/68297',
          whoCanApply: ['Experienced DevOps / SRE professionals'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'Tech & Digital – Software Engineer – Full Stack',
          desc: 'Full Stack Software Engineer (Job ID 66205) to develop end-to-end features for customer-facing banking portals.',
          skills: ['Full Stack', 'Java', 'React', 'Spring Boot'],
          package: '₹8.0 - 14.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 10,
          location: 'Mumbai / On-site',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/66205',
          whoCanApply: ['Graduates with full stack development skills'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'Tech & Digital – Engineering Manager',
          desc: 'Engineering Manager (Job ID 58657) to lead technical teams, guide architecture, and ensure successful delivery.',
          skills: ['Engineering Management', 'System Design', 'Agile'],
          package: '₹25.0 - 35.0 LPA',
          branch: 'BE/BTech / MCA',
          cgpa: 7.0,
          openings: 1,
          location: 'Bengaluru / Remote',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/58657',
          whoCanApply: ['Senior candidates with technical leadership experience'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'Tech & Digital – Architect – Solutions',
          desc: 'Solutions Architect (Job ID 55050) responsible for designing resilient and secure enterprise microservices architectures.',
          skills: ['Solution Architecture', 'Microservices', 'Cloud'],
          package: '₹28.0 - 40.0 LPA',
          branch: 'BE/BTech / ME/MTech',
          cgpa: 7.0,
          openings: 1,
          location: 'Mumbai / Hybrid',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/55050',
          whoCanApply: ['Experienced architects with deep enterprise software knowledge'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'Tech & Digital – Sr Database Engineer',
          desc: 'Senior Database Engineer (Job ID 51520) managing complex Oracle and NoSQL databases for high-throughput banking systems.',
          skills: ['Database Design', 'SQL', 'Oracle', 'Performance Tuning'],
          package: '₹14.0 - 20.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 3,
          location: 'Pune / On-site',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/51520',
          whoCanApply: ['Candidates with extensive database management experience'],
          additionalInfo: 'Tech & Digital Division'
        },
        {
          role: 'RA – Manager – Digital Lending Solutions & Automation – RBG',
          desc: 'Manager for Digital Lending Solutions & Automation (Job ID 46328). Drive automation initiatives for the retail banking group.',
          skills: ['Digital Lending', 'Automation', 'RPA', 'Banking Solutions'],
          package: '₹15.0 - 22.0 LPA',
          branch: 'MBA / BCom / BE (Any)',
          cgpa: 7.0,
          openings: 2,
          location: 'Mumbai / On-site',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/46328',
          whoCanApply: ['Candidates with blend of tech and finance domain knowledge'],
          additionalInfo: 'Retail Banking Group'
        },
        {
          role: 'Tech & Digital – Software Engineer Backend',
          desc: 'Backend Software Engineer (Job ID 24178) building robust APIs and backend services for digital platforms.',
          skills: ['Backend', 'Java/Node.js', 'API Development'],
          package: '₹7.0 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 15,
          location: 'Bengaluru / Hybrid',
          applyUrl: 'https://hdfcbank.ripplehire.com/candidate/?token=pvB5iAMcmu4ydUh2IW2O&source=CAREERSITE&utm_source=chatgpt.com#detail/job/24178',
          whoCanApply: ['Engineering graduates with backend development skills'],
          additionalInfo: 'Tech & Digital Division'
        }
      ];

      return officialHdfcRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (20 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('bosch')) {
      const officialBoschRoles = [
        {
          role: 'C / C++ Communication Gateway – Software Engineer',
          desc: 'Responsible for software development of C/C++ Communication Gateway for Industrial IoT applications.',
          skills: ['C/C++', 'Linux', 'MQTT', 'Industrial IoT'],
          package: '₹8.0 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 5,
          location: 'Bangalore, India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000141324575-c-c-communication-gateway-software-engineer?utm_source=chatgpt.com',
          whoCanApply: ['Engineering graduates with strong C/C++ background'],
          additionalInfo: 'Bosch Engineering and Business Solutions.'
        },
        {
          role: 'AWS Serverless Web-Based Developer',
          desc: 'Develop serverless web applications using TypeScript, Angular and AWS Cloud services.',
          skills: ['TypeScript', 'Angular', 'AWS', 'CI/CD'],
          package: '₹9.0 - 14.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 5,
          location: 'India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000128205453-aws-serverless-web-based-developer?utm_source=chatgpt.com',
          whoCanApply: ['Engineering graduates with Web & Cloud experience'],
          additionalInfo: 'Focus on highly scalable AWS solutions.'
        },
        {
          role: 'Senior Software Engineer – Python / Automation & Developer Platforms',
          desc: 'Design and develop automation platforms using Python and DevOps methodologies.',
          skills: ['Python', 'CI/CD', 'DevOps'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 3,
          location: 'Bangalore, India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000144693399-senior-software-engineer-python-automation-developer-platforms?utm_source=chatgpt.com',
          whoCanApply: ['Senior candidates with Python and Automation expertise'],
          additionalInfo: 'Developer platforms team.'
        },
        {
          role: 'Software Developer – AUTOSAR / Embedded C',
          desc: 'Develop embedded automotive software complying with AUTOSAR standards. Work on CAN/LIN/FlexRay networks.',
          skills: ['Embedded C', 'AUTOSAR', 'CAN/LIN/FlexRay', 'Python'],
          package: '₹7.0 - 11.0 LPA',
          branch: 'BE/BTech - Electronics, CS',
          cgpa: 7.0,
          openings: 10,
          location: 'Bangalore, India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000152431390?utm_source=chatgpt.com',
          whoCanApply: ['Graduates with Embedded Systems focus'],
          additionalInfo: 'Automotive Electronics.'
        },
        {
          role: '2026 Java / Eclipse Development',
          desc: 'Java development using Eclipse RCP and related frameworks for Bosch specific tools.',
          skills: ['Java', 'Eclipse', 'Software Development'],
          package: '₹5.0 - 15.0 LPA',
          branch: 'BE/BTech/ME/MTech',
          cgpa: 6.5,
          openings: 8,
          location: 'Bangalore, India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000152431877?utm_source=chatgpt.com',
          whoCanApply: ['BE/BTech/ME/MTech graduates with 2-10 years of experience'],
          additionalInfo: 'Multiple openings available.'
        },
        {
          role: '2026 Java / Eclipse Development',
          desc: 'Java development using Eclipse RCP and related frameworks for Bosch specific tools in Coimbatore location.',
          skills: ['Java', 'Eclipse', 'Software Development'],
          package: '₹5.0 - 12.0 LPA',
          branch: 'BE/BTech/ME/MTech',
          cgpa: 6.5,
          openings: 8,
          location: 'Coimbatore, India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000151571648?utm_source=chatgpt.com',
          whoCanApply: ['BE/BTech/ME/MTech graduates with 2-10 years of experience'],
          additionalInfo: 'Multiple openings available in Coimbatore.'
        },
        {
          role: 'Embedded Application Software Developer – Brake Systems',
          desc: 'Develop application software for Brake Systems. Use MATLAB/Simulink and ASCET for model-based design and code generation.',
          skills: ['Embedded C/C++', 'MATLAB/Simulink', 'ASCET', 'AUTOSAR/ASPICE'],
          package: '₹6.5 - 10.0 LPA',
          branch: 'BE/BTech/ME/MTech - Automotive, EC',
          cgpa: 7.0,
          openings: 6,
          location: 'Coimbatore, India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000149849174?utm_source=chatgpt.com',
          whoCanApply: ['Engineering graduates with background in Automotive Software'],
          additionalInfo: 'Active Safety Systems.'
        },
        {
          role: 'Full Stack Software Developer with AI Expertise',
          desc: 'Design and develop AI-powered full stack web applications. Work with React on the frontend and FastAPI/Python on the backend.',
          skills: ['React', 'TypeScript', 'Python', 'REST API', 'FastAPI', 'AI'],
          package: '₹10.0 - 16.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 5,
          location: 'India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000149769988-full-stack-software-developer-with-ai-expertise?utm_source=chatgpt.com',
          whoCanApply: ['Graduates with strong Web and AI integration skills'],
          additionalInfo: 'Innovative AI solutions team.'
        },
        {
          role: 'Software Engineer – Cloud / Data Engineering / DevOps',
          desc: 'Build robust data pipelines in the cloud using Databricks and implement standard DevOps practices.',
          skills: ['Cloud', 'data pipelines', 'Databricks', 'DevOps'],
          package: '₹9.0 - 15.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 5,
          location: 'India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000151592409?utm_source=chatgpt.com',
          whoCanApply: ['Engineering graduates focused on Cloud and Data'],
          additionalInfo: 'Cloud & Data Engineering team.'
        },
        {
          role: 'MES Application Engineer',
          desc: 'Drive the development, standardization, and deployment of Manufacturing Execution System (MES) software interfaces and provide expert consultation.',
          skills: ['OPCON XML', 'Oracle Database', 'C#', 'Bosch Nexeed MES'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'Degree in Engineering (Electronics, Automation, Electrical)',
          cgpa: 6.0,
          openings: 4,
          location: 'India',
          applyUrl: 'https://jobs.smartrecruiters.com/BoschGroup/744000145185264-mes-application-engineer?utm_source=chatgpt.com',
          whoCanApply: ['Engineering graduates in automation/electronics with IT knowledge'],
          additionalInfo: 'Automotive Electronics / Manufacturing IT.'
        }
      ];

      return officialBoschRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('tcs')) {
      const officialTCSRoles = [
        {
          role: 'Google Cloud DevOps Architect',
          desc: 'Design and implement cloud-native architectures on GCP. we are looking for GCP architect with Devops experience... GCP DevOps Engineer, Google Cloud Platform (GCP), Kubernetes, Terraform, CI/CD',
          skills: ['GCP', 'DevOps', 'Kubernetes', 'Terraform', 'CI/CD'],
          package: '₹15.0 - 24.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.5,
          openings: 5,
          location: 'Bengaluru, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/416526J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Strong experience in GCP architecture and DevOps practices',
            'Proficiency with Docker, Kubernetes, and Terraform',
            'Relevant GCP certifications are highly preferred'
          ],
          additionalInfo: 'Experience: 7 - 12 Years. Job Req ID: 416526J.',
          deadline: new Date('2026-10-30T23:59:59.999Z').toISOString()
        },
        {
          role: 'Azure migration expert',
          desc: 'Provide expertise in migrating enterprise workloads to Microsoft Azure. Handle re-hosting, re-platforming, and database migrations using Azure Migrate and ASR.',
          skills: ['Azure', 'Cloud Migration', 'Azure Site Recovery', 'Terraform'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, IT',
          cgpa: 6.5,
          openings: 8,
          location: 'Chennai / Mumbai, India',
          applyUrl: 'Azure migration expert',
          whoCanApply: [
            'Degree in Computer Science or Information Technology',
            'Hands-on experience with Azure migration strategies',
            'Understanding of hybrid cloud environments and network security',
            'Microsoft Azure certifications (AZ-104/AZ-305) preferred'
          ],
          additionalInfo: 'TCS Microsoft Business Unit (MBU).'
        },
        {
          role: 'Workday Integration Developer',
          desc: 'Develop, test, and deploy Workday integrations (EIB, Core Connectors, Document Transformation, and Studio). Ensure smooth data flow between Workday and third-party systems.',
          skills: ['Workday', 'Integration Studio', 'EIB', 'XSLT', 'XML'],
          package: '₹8.0 - 14.0 LPA',
          branch: 'BE/BTech / MCA - CS, IT',
          cgpa: 6.0,
          openings: 12,
          location: 'Pune / Noida, India',
          applyUrl: 'Workday Integration Developer',
          whoCanApply: [
            'Bachelor degree or equivalent in IT / Computer Science',
            'Experience building inbound and outbound integrations in Workday',
            'Proficiency with XML, XSLT, and Web Services (REST/SOAP)',
            'Workday Integration certification is a plus'
          ],
          additionalInfo: 'TCS Enterprise Application Services.'
        },
        {
          role: 'Java Full Stack Developer',
          desc: 'Role: Java Full stack developer. Primary skills: Java, Spring Boot, Microservices, Angular. Build scalable web applications following agile methodologies and CI/CD practices.',
          skills: ['Java', 'Spring Boot', 'Angular', 'Microservices'],
          package: '₹6.5 - 11.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.0,
          openings: 20,
          location: 'Kolkata, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/408818J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Solid experience with Java, Spring Framework, and RESTful APIs',
            'Hands-on experience with Angular',
            'Familiarity with Git and Jenkins'
          ],
          additionalInfo: 'Experience: 3 - 6 Years. Job Req ID: 408818J.',
          deadline: new Date('2026-10-30T23:59:59.999Z').toISOString()
        },
        {
          role: 'Hadoop Developer',
          desc: 'Design and develop Big Data solutions using the Hadoop ecosystem (HDFS, Hive, Spark, Kafka). Optimize data processing pipelines for high volume data ingestion and transformation.',
          skills: ['Hadoop', 'Spark', 'Hive', 'Kafka', 'MapReduce'],
          package: '₹8.0 - 13.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.0,
          openings: 10,
          location: 'Hyderabad, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/406958J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Experience in Big Data ecosystems including Hadoop, Spark, and Hive',
            'Strong programming skills in Python, Scala, or Java',
            'Ability to write complex SQL queries and perform data modeling'
          ],
          additionalInfo: 'Experience: 4 - 8 Years. Job Req ID: 406958J.',
          deadline: new Date('2026-10-30T23:59:59.999Z').toISOString()
        },
        {
          role: 'Java Backend Developer',
          desc: 'Dear Candidate, we are looking for Java Backend Developer. Required Skills: Java Spring Boot, Microservices.',
          skills: ['Java', 'Spring Boot', 'Microservices'],
          package: '₹7.0 - 12.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.0,
          openings: 25,
          location: 'Bengaluru / Chennai / Hyderabad / Mumbai / Pune, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/408821J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Deep understanding of core Java, collections, and concurrency',
            'Experience building RESTful microservices with Spring Boot',
            'Knowledge of relational and NoSQL database management'
          ],
          additionalInfo: 'Experience: 4 - 12 Years. Job Req ID: 408821J.',
          deadline: new Date('2026-10-30T23:59:59.999Z').toISOString()
        },
        {
          role: 'React Developer',
          desc: 'Greetings from TCS. We are Hiring for ReactJS Developer. Should be having very good practical development experience in React JS. Able to design the existing application re-write in React JS. Should have very good communication skills and experience in Agile way of working.',
          skills: ['ReactJS', 'JavaScript', 'Web Performance'],
          package: '₹6.0 - 10.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.0,
          openings: 15,
          location: 'Indore, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/406844J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Proficiency in ReactJS development',
            'Strong foundation in JavaScript and communication skills',
            'Familiarity with Agile methodologies'
          ],
          additionalInfo: 'Experience: 4 - 8 Years. Job Req ID: 406844J.',
          deadline: new Date('2026-10-30T23:59:59.999Z').toISOString()
        },
        {
          role: 'AWS Data Engineer',
          desc: 'Develop and maintain ETL/data ingestion pipelines using PySpark and AWS services. Design and implement Lambda-based event-driven workflows. Optimize Spark jobs for performance, scalability, and cost efficiency.',
          skills: ['AWS', 'Python', 'AWS redshift', 'PySpark', 'ETL'],
          package: '₹8.0 - 14.0 LPA',
          branch: 'BACHELOR OF ENGINEERING / B.Sc / B.Tech / M.E / M.IT',
          cgpa: 6.5,
          openings: 12,
          location: 'Indore, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/420162J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING, BACHELOR OF SCIENCE (B.Sc), BACHELOR OF TECHNOLOGY, MASTER OF ENGINEERING, Master of Information Technology',
            'Hands-on experience with AWS data services (Glue, Athena, Redshift, EMR)',
            'Strong programming skills in Python and PySpark',
            'Understanding of ETL/ELT processes and data warehousing concepts'
          ],
          additionalInfo: 'Experience: 4 - 10 Years. Job Req ID: 420162J.',
          deadline: new Date('2026-10-31T23:59:59.999Z').toISOString()
        },
        {
          role: 'Hadoop Developer',
          desc: 'Greetings from TCS. We are hiring for Hadoop Developer. Extensive experience and hands on implementation experience with Spark, Scala, Impala, Hive, Kafka, SQOOP. Extensive experience with Design and Implementation of Big data solutions.',
          skills: ['Kafka', 'Scala', 'Spark', 'Hive', 'Impala', 'SQOOP'],
          package: '₹8.0 - 13.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.0,
          openings: 8,
          location: 'Chennai, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/406950J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Solid experience with Hadoop ecosystem tools and distributed systems',
            'Working knowledge on Cloudera and Apache tools/utilities',
            'Experience in performance tuning and query optimization'
          ],
          additionalInfo: 'Experience: 4 - 8 Years. Job Req ID: 406950J.',
          deadline: new Date('2026-10-30T23:59:59.999Z').toISOString()
        },
        {
          role: 'AWS Terraform Engineer',
          desc: 'Walkin with TCS for AWS Terraform Engineer role. Should have expertise on AWS services as IAM, EC2, S3, RDS, ELB, EBS, CloudWatch, Cloudtrail, ACM, VPC, Lambda, Dynamodb, SNS. Proficient in infrastructure as Code (Terraform/CloudFormation).',
          skills: ['AWS', 'DevOps', 'Jenkins', 'IAM', 'Terraform', 'CloudFormation'],
          package: '₹10.0 - 16.0 LPA',
          branch: 'BACHELOR OF ENGINEERING',
          cgpa: 6.5,
          openings: 6,
          location: 'Hyderabad, India',
          applyUrl: 'https://ibegin.tcsapps.com/candidate/next/en-IN/jobs/420141J',
          whoCanApply: [
            'BACHELOR OF ENGINEERING',
            'Extensive experience with AWS cloud infrastructure and services',
            'Expertise in writing Terraform modules and managing state files',
            'Hands-on experience on DevOps tools like Jenkins, GIT will be added advantage'
          ],
          additionalInfo: 'Experience: 5 - 10 Years. Job Req ID: 420141J.',
          deadline: new Date('2026-10-31T23:59:59.999Z').toISOString()
        }
      ];

      return officialTCSRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: r.deadline || new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: 'Open',
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

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
          package: '₹48.0 - 0.0 LPA',
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
          package: '₹30.0 - 38.0 LPA',
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
          package: '₹30.0 - 38.0 LPA',
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
          package: '₹32.0 - 40.0 LPA',
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
          package: '₹30.0 - 38.0 LPA',
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
          package: '₹6.0 - 9.0 LPA',
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
          package: '₹18.0 - 24.0 LPA',
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
          package: '₹14.0 - 20.0 LPA',
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
          package: '₹130.0 - 0.0 LPA',
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
          package: '₹120.0 - 0.0 LPA',
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
        },
        {
          role: 'Senior - Data and App Modernization',
          desc: 'Modernize legacy enterprise applications, architectures, and data pipelines. Drive cloud-native application transformation on AWS/Azure, microservices refactoring, and data engineering solutions.',
          skills: ['Data Modernization', 'Application Modernization', 'Cloud Migration', 'Microservices', 'AWS / Azure'],
          package: '₹12.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, IT, Data / MCA',
          cgpa: 6.5,
          openings: 10,
          location: 'Pune, Maharashtra (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=4592',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, IT, Data Science, or related stream',
            '4 to 7 years of hands-on experience in application modernization, cloud engineering, or data architectures',
            'Expertise in containerization, microservices (Spring Boot / Node / .NET Core), and cloud platforms',
            'Strong knowledge of database migration, distributed data pipelines, and CI/CD'
          ],
          additionalInfo: 'Job ID: 4592. Job Type: Permanent, Full Time. Experience: 4.00 to 7.00 years. Posted 10 Days ago.'
        },
        {
          role: 'Executive - TPRM-Advisory Services',
          desc: 'Execute Third-Party Risk Management (TPRM) assessments, vendor security due diligence, supplier governance reviews, and risk remediation monitoring for major enterprise clients.',
          skills: ['TPRM', 'Third Party Risk Management', 'Vendor Risk Assessment', 'Information Security', 'Risk Governance'],
          package: '₹7.0 - 10.5 LPA',
          branch: 'BE/BTech / MBA / BCom / IT',
          cgpa: 6.0,
          openings: 12,
          location: 'Mumbai, Maharashtra (Work From Office)',
          applyUrl: 'https://kpmg.com/in/en/careers.html?q=3440',
          whoCanApply: [
            'Bachelor degree in Engineering, Information Systems, Business Administration, or Commerce',
            '1 to 4 years of experience in TPRM, vendor risk assessment, or IT risk consulting',
            'Familiarity with industry standards (ISO 27001, SOC 2, NIST, GDPR) and vendor questionnaires',
            'Strong analytical, communication, and risk evaluation capabilities'
          ],
          additionalInfo: 'Job ID: 3440. Job Type: Permanent, Full Time. Experience: 1.00 to 4.00 years. Posted 11 Days ago.'
        },
        {
          role: 'Executive - GRC Packaged Product (Archer...)',
          desc: 'Implement, configure, and maintain RSA Archer eGRC platform solutions. Build custom applications, workflows, data feeds, dashboards, and role-based access for enterprise risk and compliance management.',
          skills: ['RSA Archer', 'GRC Packaged Product', 'eGRC', 'Workflow Configuration', 'Risk & Compliance'],
          package: '₹7.5 - 11.5 LPA',
          branch: 'BE/BTech - CS, IT, ECE / MCA / BCA',
          cgpa: 6.5,
          openings: 8,
          location: 'Pune, Maharashtra (Work From Office)',
          applyUrl: 'https://kpmgindia.talentrecruit.com/career-page/apply/U2FsdGVkX1%252B795cQk4gr%252BfPcIWJVv8BaicBqzmxEzqw%253D',
          whoCanApply: [
            'BE/BTech in CS, IT, Electronics, or MCA/BCA with RSA Archer implementation experience',
            '1 to 4 years of hands-on technical experience with RSA Archer eGRC suite',
            'Proficiency in Archer core modules (Enterprise, Policy, Risk, Compliance, Vendor Management)',
            'Strong database querying skills and knowledge of enterprise governance and compliance frameworks'
          ],
          additionalInfo: 'Job ID: 4500. Job Type: Permanent, Full Time. Experience: 1.00 to 4.00 years. Posted 11 Days ago.'
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
          role: '1-10yrs Application for Cyber- Kolkata DN 57 - RDC',
          desc: 'Deliver cybersecurity advisory services, application security evaluations, threat analysis, and risk remediation within the PwC Delivery Center (RDC). Assess vulnerabilities, conduct code reviews, and architect enterprise security controls.',
          skills: ['Cybersecurity', 'Application Security', 'Threat & Vulnerability', 'Advisory', 'Information Security'],
          package: '₹9.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, IT, Cyber Security / MCA / MTech',
          cgpa: 6.5,
          openings: 15,
          location: 'Kolkata, West Bengal (DN 57 - RDC)',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata/XMLNAME-1-10yrs-Application-for-Cyber--Kolkata-DN-57---RDC_288872WD/apply',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, IT, Cyber Security, or related technical field',
            '1 to 10 years of hands-on experience in Cyber Security, AppSec, or vulnerability management',
            'Solid understanding of OWASP Top 10, secure SDLC, penetration testing, and compliance frameworks',
            'Industry certifications such as CEH, CISSP, or CISA are highly valued'
          ],
          additionalInfo: 'Job ID: 288872WD. Line of Service: Advisory. Location: Kolkata DN 57 - RDC.'
        },
        {
          role: '1-10yrs Application for Cyber- Kolkata DN 57 - RDC',
          desc: 'Provide comprehensive cyber defense advisory and security incident response services. Implement modern cyber security architectures, monitor threat landscapes, and support client security operations and compliance audits.',
          skills: ['Cyber Defense', 'Incident Response', 'SOC Operations', 'Advisory', 'Network Security'],
          package: '₹9.5 - 19.0 LPA',
          branch: 'BE/BTech - CS, IT, Cyber Security / MCA',
          cgpa: 6.5,
          openings: 12,
          location: 'Kolkata, West Bengal (DN 57 - RDC)',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata/XMLNAME-1-10yrs-Application-for-Cyber--Kolkata-DN-57---RDC_335325WD-1/apply',
          whoCanApply: [
            'Degree in Engineering or Computer Applications with focus on Cyber Security or Networking',
            '1 to 10 years of professional experience in Cybersecurity defense, SIEM, or SOC operations',
            'Familiarity with cloud security controls (AWS/Azure/GCP) and endpoint security solutions',
            'Strong problem-solving and incident triage capabilities'
          ],
          additionalInfo: 'Job ID: 335325WD. Line of Service: Advisory. Location: Kolkata DN 57 - RDC.'
        },
        {
          role: 'Associate - Advisory (Gurugram Novus Tower)',
          desc: 'Execute client advisory engagements at Gurugram Novus Tower. Conduct business process benchmarking, strategic research, financial modeling, and risk evaluations for industry-leading clients.',
          skills: ['Management Consulting', 'Business Advisory', 'Data Analysis', 'Process Optimization', 'Client Advisory'],
          package: '₹7.5 - 12.0 LPA',
          branch: 'BE/BTech / MBA / CA / BCom / Economics',
          cgpa: 6.5,
          openings: 10,
          location: 'Gurugram Novus Tower, Haryana',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Gurugram-Novus-Tower/Associate_280138WD/apply',
          whoCanApply: [
            'Bachelor or Master degree in Engineering, Business Administration, Commerce, or Economics',
            'Proficiency in quantitative analysis, business presentation drafting, and client communications',
            'Knowledge of operational efficiency frameworks, business strategy, or financial advisory',
            'Excellent problem-solving and stakeholder coordination skills'
          ],
          additionalInfo: 'Job ID: 280138WD. Line of Service: Advisory. Location: Gurugram Novus Tower.'
        },
        {
          role: 'Associate - Advisory (Gurugram 10 C)',
          desc: 'Participate in multidisciplinary advisory projects, supporting commercial due diligence, digital strategy, market studies, and operations restructuring at Gurugram 10 C.',
          skills: ['Strategic Advisory', 'Financial Analysis', 'Risk Consulting', 'Business Transformation'],
          package: '₹7.5 - 12.5 LPA',
          branch: 'BE/BTech / MBA Finance / CA / MCom',
          cgpa: 6.5,
          openings: 8,
          location: 'Gurugram 10 C, Haryana',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Gurugram-10-C/Associate_397094WD-4/apply',
          whoCanApply: [
            'Degree in Engineering, Finance, Business Management, or equivalent professional qualification',
            'Strong analytical acumen and expertise in data synthesis and scenario modeling',
            'Familiarity with corporate transformation methodologies and advisory consulting standards',
            'Ability to collaborate effectively across cross-functional engagement teams'
          ],
          additionalInfo: 'Job ID: 397094WD. Line of Service: Advisory. Location: Gurugram 10 C.'
        },
        {
          role: 'Associate - Advisory (Kolkata DN 57)',
          desc: 'Work on technology and operations advisory engagements at Kolkata DN 57. Deliver quality deliverables across enterprise business solutioning, process optimization, and client analytics.',
          skills: ['Technology Advisory', 'ERP Consulting', 'Business Analytics', 'Digital Transformation'],
          package: '₹7.0 - 11.5 LPA',
          branch: 'BE/BTech - All Branches / MBA / MCA',
          cgpa: 6.0,
          openings: 14,
          location: 'Kolkata DN 57, West Bengal',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata-DN-57/Associate_408577WD-2/apply',
          whoCanApply: [
            'Bachelor or Master degree in Engineering, Technology, or Management',
            'Understanding of enterprise systems, business workflows, and digital tools',
            'Solid analytical thinking with capability to present data-driven consulting findings',
            'Good interpersonal and verbal communication skills'
          ],
          additionalInfo: 'Job ID: 408577WD. Line of Service: Advisory. Location: Kolkata DN 57.'
        },
        {
          role: 'Associate - Advisory (Kolkata DN 57 - Governance)',
          desc: 'Assist in enterprise internal controls reviews, governance advisory, compliance monitoring, and standard operational audits for multinational clients at Kolkata DN 57.',
          skills: ['Internal Controls', 'SOX Testing', 'Governance & Risk', 'Audit Advisory'],
          package: '₹7.0 - 11.5 LPA',
          branch: 'BE/BTech / CA / MBA / BCom',
          cgpa: 6.0,
          openings: 10,
          location: 'Kolkata DN 57, West Bengal',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata-DN-57/Associate_429680WD-3/apply',
          whoCanApply: [
            'Degree in Commerce, Engineering, or Finance with an interest in risk and governance',
            'Comprehension of risk control matrices (RCM), process documentation, and control testing',
            'Ability to draft well-structured audit memorandums and recommendations',
            'Attention to detail and sound documentation standards'
          ],
          additionalInfo: 'Job ID: 429680WD. Line of Service: Advisory. Location: Kolkata DN 57.'
        },
        {
          role: 'Associate - Advisory (Kolkata Y-14)',
          desc: 'Engage with client stakeholders to identify operational bottlenecks and provide structured advisory recommendations and analytical reports from Kolkata Y-14 office.',
          skills: ['Business Consulting', 'Process Mapping', 'Analytics', 'Advisory Solutions'],
          package: '₹7.2 - 11.8 LPA',
          branch: 'BE/BTech / MBA / Stats / Economics',
          cgpa: 6.5,
          openings: 12,
          location: 'Kolkata Y-14, West Bengal',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata-Y-14/Associate_432108WD/apply',
          whoCanApply: [
            'Bachelor or Master degree in any discipline with strong business problem-solving mindset',
            'Hands-on expertise in Microsoft Excel, PowerPoint, and business process modeling tools',
            'Aptitude for qualitative and quantitative analysis of corporate processes',
            'Eagerness to contribute in high-performing advisory environments'
          ],
          additionalInfo: 'Job ID: 432108WD. Line of Service: Advisory. Location: Kolkata Y-14.'
        },
        {
          role: 'Associate - Advisory (Mumbai Shivaji Park)',
          desc: 'Perform transaction advisory, corporate finance support, deal due diligence, and strategic advisory for premier corporations at PwC Mumbai Shivaji Park.',
          skills: ['Financial Advisory', 'Valuations', 'Deal Advisory', 'Corporate Strategy'],
          package: '₹8.0 - 13.0 LPA',
          branch: 'CA / CFA / MBA Finance / BE/BTech',
          cgpa: 6.5,
          openings: 10,
          location: 'Mumbai Shivaji Park, Maharashtra',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Mumbai-Shivaji-Park/Associate_433252WD-2/apply',
          whoCanApply: [
            'CA, CFA level cleared, or MBA in Finance from an accredited institution',
            'Solid comprehension of corporate financial statements, valuation metrics, and deal structures',
            'Experience in financial analysis, market research, or corporate accounting',
            'High level of professional integrity and client-first communication'
          ],
          additionalInfo: 'Job ID: 433252WD. Line of Service: Advisory. Location: Mumbai Shivaji Park.'
        },
        {
          role: 'Associate - Advisory (Mumbai Shivaji Park - Tech & Risk)',
          desc: 'Provide IT and cyber risk advisory, evaluate cloud architectures, test controls, and assist clients in regulatory compliance at Mumbai Shivaji Park.',
          skills: ['IT Risk Advisory', 'Cyber Risk', 'Cloud Governance', 'Enterprise Risk'],
          package: '₹8.0 - 13.0 LPA',
          branch: 'BE/BTech - CS, IT / MCA / MBA Tech',
          cgpa: 6.5,
          openings: 8,
          location: 'Mumbai Shivaji Park, Maharashtra',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Mumbai-Shivaji-Park/Associate_437311WD-2/apply',
          whoCanApply: [
            'Degree in Computer Science, Information Systems, or Engineering with tech-risk interest',
            'Knowledge of IT general controls (ITGC), cloud security posture, and compliance audits',
            'Familiarity with industry frameworks like NIST, ISO 27001, and SOC standards',
            'Strong interpersonal abilities and technical report writing skills'
          ],
          additionalInfo: 'Job ID: 437311WD. Line of Service: Advisory. Location: Mumbai Shivaji Park.'
        },
        {
          role: 'Associate - Advisory (Kolkata DN 57 - Digital Analytics)',
          desc: 'Build enterprise dashboards, data models, and analytical tools supporting decision intelligence and client advisory outcomes at Kolkata DN 57.',
          skills: ['Digital Analytics', 'Power BI / Tableau', 'SQL', 'Data Advisory', 'Business Intelligence'],
          package: '₹7.5 - 12.0 LPA',
          branch: 'BE/BTech - CS, IT, Data / MCA / Stats',
          cgpa: 6.5,
          openings: 12,
          location: 'Kolkata DN 57, West Bengal',
          applyUrl: 'https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata-DN-57/Associate_439388WcD-2/apply',
          whoCanApply: [
            'Engineering or Post Graduate degree in Computer Science, Data, Analytics, or Statistics',
            'Proficiency in SQL, Power BI, Tableau, or Python data visualization packages',
            'Proven ability to translate business requirements into intuitive data dashboards',
            'Strong analytical thinking and teamwork spirit'
          ],
          additionalInfo: 'Job ID: 439388WD. Line of Service: Advisory. Location: Kolkata DN 57.'
        }
      ];

      return officialPwCRoles.map((r, index) => ({
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
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'BE/BTech in Computer Science, Information Technology, or Electronics',
            'Strong foundation in Object-Oriented Programming (Java/C++) and SQL databases',
            'Understanding of software engineering lifecycle and system integration',
            'Good analytical and problem-solving abilities'
          ],
          additionalInfo: 'L&T Corporate Technology & Digital Transformation. Job ID: LNT_SDG_1878543.'
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
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Fresh engineering graduate in CS, IT, Electronics, or Electrical Engineering',
            'Consistent academic record with 60% or 6.5+ CGPA throughout graduation',
            'Strong verbal and written communication skills with leadership aptitude',
            'Willingness to work across diverse corporate locations and industrial projects'
          ],
          additionalInfo: 'L&T Premier Graduate Engineer Trainee (GET) Program. Job ID: LNT_SDG_1878543.'
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
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Degree in Computer Science or Information Technology',
            'Experience in Java Spring Boot backend development and React web interfaces',
            'Knowledge of relational database queries and performance optimization',
            'Familiarity with Agile ceremonies and version control'
          ],
          additionalInfo: 'L&T Digital Systems & Web Engineering Practice. Job ID: LNT_SDG_1878543.'
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
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Degree in Electronics & Communication, Electrical, or Instrumentation Engineering',
            'Proficiency in Embedded C/C++ programming for ARM Cortex/microcontrollers',
            'Hands-on experience with RTOS, communication protocols (CAN, SPI, UART, I2C)',
            'Familiarity with hardware oscilloscopes, logic analyzers, and circuit schematics'
          ],
          additionalInfo: 'L&T Heavy Engineering, Defense & Embedded Systems Division. Job ID: LNT_SDG_1878543.'
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
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'BE/BTech in Computer Science, IT, or related engineering branch',
            'Experience with Linux system administration, Docker containerization, and Kubernetes',
            'Knowledge of CI/CD pipeline automation with Jenkins or GitLab',
            'Understanding of cloud infrastructure management on AWS or Azure'
          ],
          additionalInfo: 'L&T Cloud Infrastructure & Digital Operations. Job ID: LNT_SDG_1878543.'
        },
        {
          role: 'Web AI Software Engineer',
          desc: 'Research, develop, and integrate cutting-edge Web AI solutions, machine learning models, and intelligent browser-based architectures. Drive innovative AI applications for industrial and engineering automation.',
          skills: ['Web AI', 'Machine Learning', 'Full Stack AI', 'Python', 'JavaScript/TypeScript', 'Research & Development'],
          package: '₹14.0 - 24.0 LPA',
          branch: 'BE/BTech - CS, AI, Data Science / MTech / MS',
          cgpa: 7.0,
          openings: 6,
          location: 'Troy, Michigan, United States of America',
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, Artificial Intelligence, or related technical discipline',
            'Experience designing and deploying Web-based AI and deep learning applications',
            'Proficiency in modern JavaScript/TypeScript, Python, WebGL/WebGPU, or ML frameworks (TensorFlow.js/ONNX)',
            'Strong analytical and algorithmic problem-solving capabilities'
          ],
          additionalInfo: 'Job ID: 520400 / LNT_SDG_1878543. Department: Research & Development.'
        },
        {
          role: 'R&D Employee Vision & Web-Technologies (f/m/d)',
          desc: 'Develop state-of-the-art computer vision systems and interactive web technologies for industrial inspection, digital twins, and smart manufacturing research.',
          skills: ['Computer Vision', 'Web Technologies', 'Image Processing', 'R&D', 'C++', 'JavaScript'],
          package: '₹12.0 - 20.0 LPA',
          branch: 'BE/BTech - CS, IT, Electronics / MTech / MS',
          cgpa: 6.5,
          openings: 8,
          location: 'Multiple Locations (Global / Hybrid)',
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Degree in Computer Science, Electrical Engineering, or Applied Mathematics with Computer Vision focus',
            'Hands-on expertise in image processing algorithms, OpenCV, and modern web application frameworks',
            'Solid programming proficiency in C++ and JavaScript/TypeScript',
            'Passion for exploratory research and rapid prototyping of industrial tech solutions'
          ],
          additionalInfo: 'Job ID: 522229 / LNT_SDG_1878543. Department: Research & Development.'
        },
        {
          role: 'R&D Group Leader for Vision & Web-Technologies (f/m/d)',
          desc: 'Lead a multidisciplinary research and development engineering group specializing in industrial computer vision, smart sensing, and next-generation web technologies.',
          skills: ['R&D Leadership', 'Computer Vision', 'Web Architecture', 'Engineering Management', 'Innovation'],
          package: '₹18.0 - 28.0 LPA',
          branch: 'BE/BTech / MTech / PhD - CS, Electronics, AI',
          cgpa: 7.0,
          openings: 4,
          location: 'Multiple Locations (Global / Hybrid)',
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Master or PhD in Computer Science, AI, or Engineering with proven R&D leadership background',
            'Demonstrated track record of delivering complex vision and web technology research projects',
            'Strong team leadership, research grant management, and cross-functional collaboration abilities',
            'Visionary thinking in industrial digitalization and technological advancement'
          ],
          additionalInfo: 'Job ID: 522461 / LNT_SDG_1878543. Department: Research & Development.'
        },
        {
          role: 'Senior Backend Engineer (Research & Development) (m/f/d)',
          desc: 'Architect and build resilient, distributed backend services, high-throughput data processing pipelines, and scalable APIs for advanced industrial IoT platforms.',
          skills: ['Backend Engineering', 'Microservices', 'Distributed Systems', 'Cloud APIs', 'Python / Java / Go'],
          package: '₹13.0 - 22.0 LPA',
          branch: 'BE/BTech - CS, IT / MCA / MTech',
          cgpa: 6.5,
          openings: 10,
          location: 'Amadora, Lisboa, Portugal',
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, Software Engineering, or related field',
            'Extensive backend development experience with Python, Go, or Java/Spring Boot',
            'Strong background in distributed architecture, message brokers (Kafka/RabbitMQ), and database optimization',
            'Experience designing secure cloud-native REST/gRPC microservices'
          ],
          additionalInfo: 'Job ID: 516613 / LNT_SDG_1878543. Department: Research & Development.'
        },
        {
          role: 'Software Developer for NLP Solutions - Product Localization',
          desc: 'Develop and deploy Natural Language Processing (NLP) models, automated translation pipelines, and localization frameworks to adapt global enterprise products for international markets.',
          skills: ['Natural Language Processing (NLP)', 'Product Localization', 'Machine Learning', 'Python', 'LLM Integration'],
          package: '₹11.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, Computational Linguistics, AI / MCA',
          cgpa: 6.5,
          openings: 8,
          location: 'Multiple Locations (Global / Hybrid)',
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Degree in Computer Science, Computational Linguistics, AI, or related technical domain',
            'Experience building NLP pipelines with Python, Hugging Face, spaCy, or Transformer models',
            'Familiarity with localization workflows, multilingual tokenization, and LLM prompting',
            'Strong understanding of software engineering and continuous localization deployment'
          ],
          additionalInfo: 'Job ID: 519745 / LNT_SDG_1878543. Department: Research & Development.'
        },
        {
          role: 'Embedded C/C++ developer (m/f/d)',
          desc: 'Design and implement reliable embedded firmware, real-time control algorithms, and device drivers using C and C++ for mission-critical industrial hardware devices.',
          skills: ['Embedded C/C++', 'RTOS', 'Microcontrollers', 'Device Drivers', 'Hardware Debugging', 'R&D'],
          package: '₹10.5 - 17.5 LPA',
          branch: 'BE/BTech - ECE, EnTC, EE, CS / MTech',
          cgpa: 6.5,
          openings: 12,
          location: 'Brno, Jihomoravský kraj, Czech Republic',
          applyUrl: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543',
          whoCanApply: [
            'Degree in Electrical Engineering, Electronics, Computer Engineering, or related technical stream',
            'Hands-on experience in Embedded C and modern C++ development on microcontrollers or RTOS',
            'Understanding of hardware interfaces (SPI, I2C, UART, CAN, Ethernet) and low-level debugging',
            'Familiarity with Git, automated testing of embedded targets, and CI/CD pipelines'
          ],
          additionalInfo: 'Job ID: 514185 / LNT_SDG_1878543. Department: Research & Development.'
        }
      ];

      return officialLTRoles.map((r, index) => ({
        _id: (index + 1).toString(),
        role: r.role,
        package: r.package,
        location: r.location,
        criteria: { minCgpa: r.cgpa, allowedBranches: [r.branch] },
        deadline: new Date(Date.now() + (15 - index) * 24 * 60 * 60 * 1000).toISOString(),
        status: index < 5 ? 'Open' : (index > 8 ? 'Closing Soon' : 'Open'),
        description: r.desc,
        requiredSkills: r.skills,
        openings: r.openings,
        whoCanApply: r.whoCanApply,
        additionalInfo: r.additionalInfo,
        applyUrl: r.applyUrl
      }));
    }

    if (company?.name && company.name.toLowerCase().includes('siemens')) {
      const officialSiemensRoles = [
        {
          role: 'Web AI Software Engineer',
          desc: 'Research, develop, and integrate cutting-edge Web AI solutions, machine learning models, and intelligent browser-based architectures. Drive innovative AI applications for industrial and engineering automation.',
          skills: ['Web AI', 'Machine Learning', 'Full Stack AI', 'Python', 'JavaScript/TypeScript', 'Research & Development'],
          package: '₹14.0 - 24.0 LPA',
          branch: 'BE/BTech - CS, AI, Data Science / MTech / MS',
          cgpa: 7.0,
          openings: 6,
          location: 'Troy, Michigan, United States of America',
          applyUrl: 'https://jobs.siemens.com/en_US/externaljobs/JobDetail/520400',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, Artificial Intelligence, or related technical discipline',
            'Experience designing and deploying Web-based AI and deep learning applications',
            'Proficiency in modern JavaScript/TypeScript, Python, WebGL/WebGPU, or ML frameworks (TensorFlow.js/ONNX)',
            'Strong analytical and algorithmic problem-solving capabilities'
          ],
          additionalInfo: 'Job ID: 520400. Department: Research & Development. Location: Troy, Michigan, USA.'
        },
        {
          role: 'R&D Employee Vision & Web-Technologies (f/m/d)',
          desc: 'Develop state-of-the-art computer vision systems and interactive web technologies for industrial inspection, digital twins, and smart manufacturing research.',
          skills: ['Computer Vision', 'Web Technologies', 'Image Processing', 'R&D', 'C++', 'JavaScript'],
          package: '₹12.0 - 20.0 LPA',
          branch: 'BE/BTech - CS, IT, Electronics / MTech / MS',
          cgpa: 6.5,
          openings: 8,
          location: 'Multiple Locations (Global / Hybrid)',
          applyUrl: 'https://jobs.siemens.com/en_US/externaljobs/JobDetail/522229',
          whoCanApply: [
            'Degree in Computer Science, Electrical Engineering, or Applied Mathematics with Computer Vision focus',
            'Hands-on expertise in image processing algorithms, OpenCV, and modern web application frameworks',
            'Solid programming proficiency in C++ and JavaScript/TypeScript',
            'Passion for exploratory research and rapid prototyping of industrial tech solutions'
          ],
          additionalInfo: 'Job ID: 522229. Department: Research & Development. Location: Multiple Locations.'
        },
        {
          role: 'R&D Group Leader for Vision & Web-Technologies (f/m/d)',
          desc: 'Lead a multidisciplinary research and development engineering group specializing in industrial computer vision, smart sensing, and next-generation web technologies.',
          skills: ['R&D Leadership', 'Computer Vision', 'Web Architecture', 'Engineering Management', 'Innovation'],
          package: '₹18.0 - 28.0 LPA',
          branch: 'BE/BTech / MTech / PhD - CS, Electronics, AI',
          cgpa: 7.0,
          openings: 4,
          location: 'Multiple Locations (Global / Hybrid)',
          applyUrl: 'https://jobs.siemens.com/en_US/externaljobs/JobDetail/522461',
          whoCanApply: [
            'Master or PhD in Computer Science, AI, or Engineering with proven R&D leadership background',
            'Demonstrated track record of delivering complex vision and web technology research projects',
            'Strong team leadership, research grant management, and cross-functional collaboration abilities',
            'Visionary thinking in industrial digitalization and technological advancement'
          ],
          additionalInfo: 'Job ID: 522461. Department: Research & Development. Location: Multiple Locations.'
        },
        {
          role: 'Senior Backend Engineer (Research & Development) (m/f/d)',
          desc: 'Architect and build resilient, distributed backend services, high-throughput data processing pipelines, and scalable APIs for advanced industrial IoT platforms.',
          skills: ['Backend Engineering', 'Microservices', 'Distributed Systems', 'Cloud APIs', 'Python / Java / Go'],
          package: '₹13.0 - 22.0 LPA',
          branch: 'BE/BTech - CS, IT / MCA / MTech',
          cgpa: 6.5,
          openings: 10,
          location: 'Amadora, Lisboa, Portugal',
          applyUrl: 'https://jobs.siemens.com/en_US/externaljobs/JobDetail/516613',
          whoCanApply: [
            'Bachelor or Master degree in Computer Science, Software Engineering, or related field',
            'Extensive backend development experience with Python, Go, or Java/Spring Boot',
            'Strong background in distributed architecture, message brokers (Kafka/RabbitMQ), and database optimization',
            'Experience designing secure cloud-native REST/gRPC microservices'
          ],
          additionalInfo: 'Job ID: 516613. Department: Research & Development. Location: Amadora, Lisboa, Portugal.'
        },
        {
          role: 'Software Developer for NLP Solutions - Product Localization',
          desc: 'Develop and deploy Natural Language Processing (NLP) models, automated translation pipelines, and localization frameworks to adapt global enterprise products for international markets.',
          skills: ['Natural Language Processing (NLP)', 'Product Localization', 'Machine Learning', 'Python', 'LLM Integration'],
          package: '₹11.0 - 18.0 LPA',
          branch: 'BE/BTech - CS, Computational Linguistics, AI / MCA',
          cgpa: 6.5,
          openings: 8,
          location: 'Multiple Locations (Global / Hybrid)',
          applyUrl: 'https://jobs.siemens.com/en_US/externaljobs/JobDetail/519745',
          whoCanApply: [
            'Degree in Computer Science, Computational Linguistics, AI, or related technical domain',
            'Experience building NLP pipelines with Python, Hugging Face, spaCy, or Transformer models',
            'Familiarity with localization workflows, multilingual tokenization, and LLM prompting',
            'Strong understanding of software engineering and continuous localization deployment'
          ],
          additionalInfo: 'Job ID: 519745. Department: Research & Development. Location: Multiple Locations.'
        },
        {
          role: 'Embedded C/C++ developer (m/f/d)',
          desc: 'Design and implement reliable embedded firmware, real-time control algorithms, and device drivers using C and C++ for mission-critical industrial hardware devices.',
          skills: ['Embedded C/C++', 'RTOS', 'Microcontrollers', 'Device Drivers', 'Hardware Debugging', 'R&D'],
          package: '₹10.5 - 17.5 LPA',
          branch: 'BE/BTech - ECE, EnTC, EE, CS / MTech',
          cgpa: 6.5,
          openings: 12,
          location: 'Brno, Jihomoravský kraj, Czech Republic',
          applyUrl: 'https://jobs.siemens.com/en_US/externaljobs/JobDetail/514185',
          whoCanApply: [
            'Degree in Electrical Engineering, Electronics, Computer Engineering, or related technical stream',
            'Hands-on experience in Embedded C and modern C++ development on microcontrollers or RTOS',
            'Understanding of hardware interfaces (SPI, I2C, UART, CAN, Ethernet) and low-level debugging',
            'Familiarity with Git, automated testing of embedded targets, and CI/CD pipelines'
          ],
          additionalInfo: 'Job ID: 514185. Department: Research & Development. Location: Brno, Czech Republic.'
        }
      ];

      return officialSiemensRoles.map((r, index) => ({
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
    let careersUrl = targetJob?.applyUrl;
    if (!careersUrl) {
      if (company?.name && (company.name.toLowerCase().includes('l&t') || company.name.toLowerCase().includes('larsen'))) {
        careersUrl = 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SDG_1878543';
      } else {
        careersUrl = company?.website ? `${company.website}/careers` : 'https://careers.cognizant.com/uki-en/jobs/';
      }
    }
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
