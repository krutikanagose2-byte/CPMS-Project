const fs = require('fs');

const path = 'C:\\Users\\hp\\Desktop\\Clone\\CPMS-Project\\frontend\\src\\components\\CompanyOffers.jsx';
let content = fs.readFileSync(path, 'utf8');

// Bosch array replacements
content = content.replace(/(role: 'C \/ C\+\+ Communication Gateway – Software Engineer',[\s\S]*?package: )'Not disclosed'/, "$1'₹8.0 - 12.0 LPA'");
content = content.replace(/(role: 'AWS Serverless Web-Based Developer',[\s\S]*?package: )'Not disclosed'/, "$1'₹9.0 - 14.0 LPA'");
content = content.replace(/(role: 'Senior Software Engineer – Python \/ Automation & Developer Platforms',[\s\S]*?package: )'Not disclosed'/, "$1'₹12.0 - 18.0 LPA'");
content = content.replace(/(role: 'Software Developer – AUTOSAR \/ Embedded C',[\s\S]*?package: )'Not disclosed'/, "$1'₹7.0 - 11.0 LPA'");
content = content.replace(/(role: '2026 Java \/ Eclipse Development',\s+desc: 'Java development using Eclipse RCP and related frameworks for Bosch specific tools.',[\s\S]*?package: )'2–10 years Exp'/, "$1'₹5.0 - 15.0 LPA'");
content = content.replace(/(role: '2026 Java \/ Eclipse Development',\s+desc: 'Java development using Eclipse RCP and related frameworks for Bosch specific tools in Coimbatore location.',[\s\S]*?package: )'2–10 years Exp'/, "$1'₹5.0 - 12.0 LPA'");
content = content.replace(/(role: 'Embedded Application Software Developer – Brake Systems',[\s\S]*?package: )'Not disclosed'/, "$1'₹6.5 - 10.0 LPA'");
content = content.replace(/(role: 'Full Stack Software Developer with AI Expertise',[\s\S]*?package: )'Not disclosed'/, "$1'₹10.0 - 16.0 LPA'");
content = content.replace(/(role: 'Software Engineer – Cloud \/ Data Engineering \/ DevOps',[\s\S]*?package: )'Not disclosed'/, "$1'₹9.0 - 15.0 LPA'");
content = content.replace(/(role: 'MES Application Engineer',[\s\S]*?package: )'Not disclosed'/, "$1'₹6.0 - 10.0 LPA'");

// TCS array replacements
content = content.replace(/(role: 'Google Cloud DevOps Architect',[\s\S]*?package: )'7 - 12 Years Exp'/, "$1'₹15.0 - 24.0 LPA'");
content = content.replace(/(role: 'Java Full Stack Developer',[\s\S]*?package: )'3 - 6 Years Exp'/, "$1'₹6.5 - 11.0 LPA'");
content = content.replace(/(role: 'Hadoop Developer',\s+desc: 'Design and develop Big Data solutions[\s\S]*?package: )'4 - 8 Years Exp'/, "$1'₹8.0 - 13.0 LPA'");
content = content.replace(/(role: 'Java Backend Developer',[\s\S]*?package: )'4 - 12 Years Exp'/, "$1'₹7.0 - 12.0 LPA'");
content = content.replace(/(role: 'React Developer',[\s\S]*?package: )'4 - 8 Years Exp'/, "$1'₹6.0 - 10.0 LPA'");
content = content.replace(/(role: 'AWS Data Engineer',[\s\S]*?package: )'4 - 10 Years Exp'/, "$1'₹8.0 - 14.0 LPA'");
content = content.replace(/(role: 'Hadoop Developer',\s+desc: 'Greetings from TCS[\s\S]*?package: )'4 - 8 Years Exp'/, "$1'₹8.0 - 13.0 LPA'");
content = content.replace(/(role: 'AWS Terraform Engineer',[\s\S]*?package: )'5 - 10 Years Exp'/, "$1'₹10.0 - 16.0 LPA'");

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated packages!');
