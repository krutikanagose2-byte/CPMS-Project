import { useState } from 'react';
import './Companies.css';
import CompanyDetails from './CompanyDetails';

import tcsLogo from '../assets/tcs.jpeg';
import infosysLogo from '../assets/infosys.jpeg';
import accentureLogo from '../assets/accenture.jpeg';
import capgeminiLogo from '../assets/capgemini.jpeg';
import wiproLogo from '../assets/wipro.jpeg';
import cognizantLogo from '../assets/Cognizant.jpeg';
import googleLogo from '../assets/google.jpeg';
import sapLogo from '../assets/sap.jpeg';

const officeImagesPlaceholder = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80'
];

export const COMPANIES = [
  // IT & Software
  { id: 1, name: 'TCS', fullName: 'Tata Consultancy Services', category: 'it', sector: 'IT & Software', location: 'Mumbai, Maharashtra', logo: tcsLogo, website: 'https://www.tcs.com', startedFrom: '1968', founder: 'J. R. D. Tata & F. C. Kohli', employees: '614,000+', workCulture: 'Innovation, Integrity, Excellence', studentsPlaced: '1200+ (Approx.)', description: 'TCS is an Indian multinational information technology services and consulting company.', moreInfo: `Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company headquartered in Mumbai, Maharashtra. Founded in 1968 by the Tata Group, TCS operates in 150 locations across 46 countries, making it one of the largest IT service brands worldwide.\n\nThe company provides a wide range of services including application development, enterprise software, consulting, and business process outsourcing. TCS is well-known for its massive scale, robust innovation ecosystems, and strong commitment to technological advancements across multiple industries.`, officeImages: officeImagesPlaceholder },
  { id: 2, name: 'Infosys', fullName: 'Infosys Limited', category: 'it', sector: 'IT & Software', location: 'Bengaluru, Karnataka', logo: infosysLogo, website: 'https://www.infosys.com', startedFrom: '1981', founder: 'N.R. Narayana Murthy', employees: '322,000+', workCulture: 'Continuous Learning, Respect, Integrity', studentsPlaced: '800+ (Approx.)', description: 'Infosys is a global leader in next-generation digital services and consulting.', moreInfo: 'Infosys Limited is a leading Indian multinational company that provides information technology (IT), consulting, outsourcing, and digital transformation services. Founded in 1981 and headquartered in Bengaluru, Karnataka, the company has grown into one of the world\'s largest IT service providers. Infosys offers a wide range of services, including software development, cloud computing, artificial intelligence (AI), data analytics, cybersecurity, enterprise application development, and business process management. It serves clients across industries such as banking, healthcare, manufacturing, retail, telecommunications, energy, and insurance, helping organizations improve efficiency and adopt modern digital technologies.\n\nInfosys has a global presence with offices and development centers in more than 50 countries, serving clients worldwide. The company is recognized for its focus on innovation, sustainability, employee training, and high-quality service delivery. Through platforms like Infosys Topaz (AI-powered solutions) and its digital transformation services, the company enables businesses to automate processes, enhance customer experiences, and make data-driven decisions. Infosys is also known for its strong corporate governance, commitment to environmental sustainability, and continuous investment in research, development, and workforce upskilling, making it one of the most respected IT companies globally.', officeImages: officeImagesPlaceholder },
  { id: 3, name: 'Capgemini', fullName: 'Capgemini SE', category: 'it', sector: 'IT & Software', location: 'Paris, France', logo: capgeminiLogo, website: 'https://www.capgemini.com', startedFrom: '1967', founder: 'Serge Kampf', employees: '340,000+', workCulture: 'Boldness, Trust, Freedom', studentsPlaced: '950+ (Approx.)', description: 'Capgemini is a global leader in partnering with companies to transform and manage their business by harnessing the power of technology.', moreInfo: `Capgemini SE is a French multinational information technology services and consulting company headquartered in Paris, France. Founded in 1967 by Serge Kampf, it has grown organically and through acquisitions to become a global leader in partnering with companies to transform and manage their business.\n\nGuided by its purpose of unleashing human energy through technology, Capgemini offers deep industry expertise combined with command of the rapidly evolving fields of cloud, data, AI, software, computing, and platforms.`, officeImages: officeImagesPlaceholder },
  { id: 4, name: 'Wipro', fullName: 'Wipro Limited', category: 'it', sector: 'IT & Software', location: 'Bengaluru, Karnataka', logo: wiproLogo, website: 'https://www.wipro.com', startedFrom: '1945', founder: 'M.H. Hasham Premji', employees: '240,000+', workCulture: 'Inclusion, Empathy, Customer First', studentsPlaced: '700+ (Approx.)', description: 'Wipro is a leading technology services and consulting company focused on building innovative solutions.', moreInfo: `Wipro Limited is a leading Indian multinational corporation that provides information technology, consulting and business process services. Founded in 1945 by M.H. Hasham Premji, the company pivoted from vegetable oils to the IT industry in the 1980s, becoming a pioneer in India's tech boom.\n\nToday, Wipro leverages its holistic portfolio of capabilities in consulting, design, engineering, and operations to help clients realize their boldest ambitions. The company is widely recognized for its comprehensive portfolio of services, strong commitment to sustainability, and active corporate citizenship.`, officeImages: officeImagesPlaceholder },
  { id: 5, name: 'Cognizant', fullName: 'Cognizant Technology Solutions', category: 'it', sector: 'IT & Software', location: 'Teaneck, USA', logo: cognizantLogo, website: 'https://www.cognizant.com', startedFrom: '1994', founder: 'Kumar Mahadeva', employees: '350,000+', workCulture: 'Collaboration, Transparency, Empowerment', studentsPlaced: '850+ (Approx.)', description: 'Cognizant engineers modern businesses to improve everyday life.', moreInfo: `Cognizant Technology Solutions is an American multinational information technology services and consulting company headquartered in Teaneck, New Jersey. Founded in 1994, Cognizant Engineers modern businesses to improve everyday life.\n\nThe company helps clients modernize technology, reimagine processes, and transform experiences so they can stay ahead in a fast-changing world. Ranked amongst the most admired companies globally, Cognizant delivers deep industry expertise and robust technology solutions.`, officeImages: officeImagesPlaceholder },
  { id: 6, name: 'Google', fullName: 'Google LLC', category: 'it', sector: 'IT & Software', location: 'Mountain View, USA', logo: googleLogo, website: 'https://about.google', startedFrom: '1998', founder: 'Larry Page & Sergey Brin', employees: '180,000+', workCulture: 'Creativity, Openness, Innovation', studentsPlaced: '50+ (Premium)', description: 'Google specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.', moreInfo: `Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, e-commerce, electronics, and artificial intelligence. It was founded in 1998 by Larry Page and Sergey Brin.\n\nGoogle's mission is to organize the world's information and make it universally accessible and useful. Known for its innovative work culture, global scale, and vast technological infrastructure, it remains one of the most powerful technology companies in the world.`, officeImages: officeImagesPlaceholder },
  { id: 7, name: 'Microsoft', fullName: 'Microsoft Corporation', category: 'it', sector: 'IT & Software', location: 'Redmond, USA', logo: 'https://logo.clearbit.com/microsoft.com', website: 'https://www.microsoft.com', startedFrom: '1975', founder: 'Bill Gates & Paul Allen', employees: '220,000+', workCulture: 'Growth Mindset, Diversity, Inclusion', studentsPlaced: '60+ (Premium)', description: 'Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge.', moreInfo: `Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Established by Bill Gates and Paul Allen in 1975, it is best known for its Windows operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.\n\nMicrosoft's mission is to empower every person and every organization on the planet to achieve more. The company has aggressively expanded into cloud computing with Microsoft Azure, artificial intelligence, and enterprise software solutions.`, officeImages: officeImagesPlaceholder },
  { id: 8, name: 'SAP', fullName: 'SAP SE', category: 'it', sector: 'IT & Software', location: 'Walldorf, Germany', logo: sapLogo, website: 'https://www.sap.com', startedFrom: '1972', founder: 'Dietmar Hopp', employees: '105,000+', workCulture: 'Customer Focus, Quality, Integrity', studentsPlaced: '120+ (Approx.)', description: 'SAP is a market leader in enterprise application software, helping companies of all sizes run at their best.', moreInfo: `SAP SE is a German multinational software company based in Walldorf, Baden-Württemberg. It develops enterprise software to manage business operations and customer relations, famously creating the enterprise resource planning (ERP) standard.\n\nFounded in 1972, SAP helps companies of all sizes run at their best. Their machine learning, Internet of Things (IoT), and advanced analytics technologies seamlessly turn customers' businesses into highly intelligent operations.`, officeImages: officeImagesPlaceholder },

  // Consulting
  { id: 9, name: 'Accenture', fullName: 'Accenture plc', category: 'consulting', sector: 'Consulting', location: 'Dublin, Ireland', logo: accentureLogo, website: 'https://www.accenture.com', startedFrom: '1989', founder: 'Clarence DeLany', employees: '730,000+', workCulture: 'Client Value Creation, Respect', studentsPlaced: '1500+ (Approx.)', description: 'Accenture is a global professional services company with leading capabilities in digital, cloud and security.', moreInfo: `Accenture plc is a Dublin-based multinational professional services company specializing in information technology services and consulting. Founded as the business and technology consulting division of Arthur Andersen, it became independent in 1989.\n\nAccenture offers Strategy and Consulting, Technology, and Operations services, combining unmatched experience and specialized skills across more than 40 diverse industries to deliver client value on a global scale.`, officeImages: officeImagesPlaceholder },
  { id: 10, name: 'Deloitte', fullName: 'Deloitte Touche Tohmatsu Limited', category: 'consulting', sector: 'Consulting', location: 'London, UK', logo: 'https://logo.clearbit.com/deloitte.com', website: 'https://www.deloitte.com', startedFrom: '1845', founder: 'William Welch Deloitte', employees: '415,000+', workCulture: 'Leadership, Collaboration, Quality', studentsPlaced: '400+ (Approx.)', description: 'Deloitte provides audit, consulting, financial advisory, risk advisory, tax and related services to select clients.', moreInfo: `Deloitte Touche Tohmatsu Limited, commonly referred to as Deloitte, is an international professional services network headquartered in London, UK. Recognized as one of the Big Four accounting organizations, it offers audit, consulting, financial advisory, risk advisory, and tax services.\n\nDeloitte comprises thousands of dedicated professionals who collaborate to provide exceptional value to clients, combining extensive industry knowledge with deep technical expertise to drive corporate success.`, officeImages: officeImagesPlaceholder },
  { id: 11, name: 'KPMG', fullName: 'KPMG International Limited', category: 'consulting', sector: 'Consulting', location: 'Amstelveen, Netherlands', logo: 'https://logo.clearbit.com/kpmg.com', website: 'https://home.kpmg', startedFrom: '1987', founder: 'Piet Klijnveld', employees: '265,000+', workCulture: 'Integrity, Excellence, Courage', studentsPlaced: '250+ (Approx.)', description: 'KPMG is a global network of professional firms providing Audit, Tax and Advisory services.', moreInfo: `KPMG International Limited is one of the Big Four accounting organizations, headquartered in Amstelveen, Netherlands. Founded in 1987 through the merger of Peat Marwick International and Klynveld Main Goerdeler, it offers Audit, Tax, and Advisory services.\n\nKPMG operates in over 140 countries, leveraging a robust network of member firms to offer globally coordinated, industry-specific solutions. The firm prioritizes integrity, quality, and technological adoption.`, officeImages: officeImagesPlaceholder },
  { id: 12, name: 'PwC', fullName: 'PricewaterhouseCoopers', category: 'consulting', sector: 'Consulting', location: 'London, UK', logo: 'https://logo.clearbit.com/pwc.com', website: 'https://www.pwc.com', startedFrom: '1998', founder: 'Samuel Lowell Price', employees: '328,000+', workCulture: 'Care, Teamwork, Challenge', studentsPlaced: '300+ (Approx.)', description: 'PwC is a multinational professional services network, ranking as the second-largest professional services network in the world.', moreInfo: `PricewaterhouseCoopers (PwC) is a multinational professional services network, and currently ranks as the second-largest professional services network in the world. It provides audit and assurance, tax, and consulting services to a vast global clientele.\n\nPwC's core purpose is to build trust in society and effectively solve important problems. Their expansive footprint allows them to offer diverse expertise to help corporate clients navigate complex global challenges.`, officeImages: officeImagesPlaceholder },

  // Core Engineering
  { id: 13, name: 'L&T', fullName: 'Larsen & Toubro', category: 'core', sector: 'Core Engineering', location: 'Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/larsentoubro.com', website: 'https://www.larsentoubro.com', startedFrom: '1938', founder: 'Henning Holck-Larsen', employees: '337,000+', workCulture: 'Discipline, Safety, Quality', studentsPlaced: '150+ (Approx.)', description: 'L&T is an Indian multinational conglomerate company, with business interests in engineering, construction, manufacturing, technology.', moreInfo: `Larsen & Toubro Ltd (L&T) is an Indian multinational conglomerate with principal business interests in engineering, construction, manufacturing, technology, and financial services. Founded in 1938 by two Danish engineers, it is deeply integrated into India's infrastructure backbone.\n\nA strong, customer-focused approach and constant quest for top-class quality have enabled L&T to attain and sustain leadership. The company is actively involved in complex, large-scale engineering and construction projects worldwide.`, officeImages: officeImagesPlaceholder },
  { id: 14, name: 'Tata Motors', fullName: 'Tata Motors Limited', category: 'core', sector: 'Core Engineering', location: 'Pune, Maharashtra', logo: 'https://logo.clearbit.com/tatamotors.com', website: 'https://www.tatamotors.com', startedFrom: '1945', founder: 'J. R. D. Tata', employees: '78,000+', workCulture: 'Pioneering, Responsibility', studentsPlaced: '80+ (Approx.)', description: 'Tata Motors Limited is a leading global automobile manufacturer, a part of the Tata Group.', moreInfo: `Tata Motors Limited is a leading global automobile manufacturer and a part of the illustrious Tata Group. Founded in 1945, the company produces a diverse portfolio of cars, sports utility vehicles, trucks, buses, and defense vehicles.\n\nThey connect aspirations by offering innovative mobility solutions. Tata Motors has expanded aggressively into electric vehicle commercialization and maintains a massive international presence through subsidiaries like Jaguar Land Rover.`, officeImages: officeImagesPlaceholder },
  { id: 15, name: 'Siemens', fullName: 'Siemens India', category: 'core', sector: 'Core Engineering', location: 'Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/siemens.com', website: 'https://www.siemens.com', startedFrom: '1847', founder: 'Werner von Siemens', employees: '311,000+', workCulture: 'Responsible, Excellent, Innovative', studentsPlaced: '90+ (Approx.)', description: 'Siemens is a technology company focused on industry, infrastructure, transport, and healthcare.', moreInfo: `Siemens is a German multinational conglomerate corporation and the largest industrial manufacturing company in Europe. Headquartered in Munich, Siemens operates globally across industry, infrastructure, transport, and healthcare divisions.\n\nBy continually combining the real and digital worlds, Siemens empowers customers to transform their respective markets. The company holds a massive portfolio of advanced automation, electrical, and digital engineering technologies.`, officeImages: officeImagesPlaceholder },
  { id: 16, name: 'Bosch', fullName: 'Bosch India', category: 'core', sector: 'Core Engineering', location: 'Bengaluru, Karnataka', logo: 'https://logo.clearbit.com/bosch.in', website: 'https://www.bosch.in', startedFrom: '1886', founder: 'Robert Bosch', employees: '421,000+', workCulture: 'Fairness, Reliability, Agility', studentsPlaced: '110+ (Approx.)', description: 'Bosch represents a worldwide network of products and services spanning mobility, consumer goods, industry.', moreInfo: `Robert Bosch GmbH, commonly known as Bosch, is a German multinational engineering and technology company. Headquartered in Gerlingen, it is a leading global supplier of technology and services, spanning mobility solutions, industrial technology, and consumer goods.\n\nThe company's strategic objective is to deliver solutions for a connected life, significantly improving global quality of life with deeply innovative and widely accessible products and smart technologies.`, officeImages: officeImagesPlaceholder },

  // Finance
  { id: 17, name: 'HDFC Bank', fullName: 'HDFC Bank Limited', category: 'finance', sector: 'Finance', location: 'Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/hdfcbank.com', website: 'https://www.hdfcbank.com', startedFrom: '1994', founder: 'Hasmukhbhai Parekh', employees: '177,000+', workCulture: 'Trust, Transparency, Customer Focus', studentsPlaced: '300+ (Approx.)', description: 'HDFC Bank is India’s leading private sector bank offering a wide range of financial products and services.', moreInfo: `HDFC Bank Limited is an Indian banking and financial services company headquartered in Mumbai. Incorporated in 1994, it stands as India's largest private sector bank by assets and serves millions of customers across the nation.\n\nHDFC is committed to maintaining the highest standards of professional integrity, corporate governance, and regulatory compliance. They offer a comprehensive suite of banking products, including retail, corporate, and digital financial solutions.`, officeImages: officeImagesPlaceholder },
  { id: 18, name: 'ICICI Bank', fullName: 'ICICI Bank Limited', category: 'finance', sector: 'Finance', location: 'Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/icicibank.com', website: 'https://www.icicibank.com', startedFrom: '1994', founder: 'Industrial Credit and Investment Corporation', employees: '130,000+', workCulture: 'Customer First, Agility, Passion', studentsPlaced: '280+ (Approx.)', description: 'ICICI Bank is an Indian multinational bank and financial services company.', moreInfo: `ICICI Bank Limited is a leading Indian multinational bank and financial services institution headquartered in Mumbai. Originating as a government-backed institution for industrial finance, it has grown to offer expansive services across retail and corporate divisions.\n\nOperating across 15 countries, ICICI Bank provides comprehensive financial services and has aggressively championed digital banking innovations, customer-centric digital platforms, and robust enterprise financial frameworks.`, officeImages: officeImagesPlaceholder },
  { id: 19, name: 'Goldman Sachs', fullName: 'Goldman Sachs Group', category: 'finance', sector: 'Finance', location: 'New York, USA', logo: 'https://logo.clearbit.com/goldmansachs.com', website: 'https://www.goldmansachs.com', startedFrom: '1869', founder: 'Marcus Goldman', employees: '45,000+', workCulture: 'Excellence, Teamwork, Diversity', studentsPlaced: '40+ (Premium)', description: 'Goldman Sachs is a leading global investment banking, securities and investment management firm.', moreInfo: `The Goldman Sachs Group, Inc. is a leading global investment banking, securities, and investment management firm headquartered in New York. Founded in 1869, it provides an array of financial services to a substantial and diversified client base.\n\nThe firm navigates complex global markets to manage vast portfolios for corporations, financial institutions, governments, and individuals. It maintains a powerful presence in elite financial centers worldwide.`, officeImages: officeImagesPlaceholder },
  { id: 20, name: 'Morgan Stanley', fullName: 'Morgan Stanley', category: 'finance', sector: 'Finance', location: 'New York, USA', logo: 'https://logo.clearbit.com/morganstanley.com', website: 'https://www.morganstanley.com', startedFrom: '1935', founder: 'Henry Sturgis Morgan', employees: '82,000+', workCulture: 'Integrity, Community Role', studentsPlaced: '30+ (Premium)', description: 'Morgan Stanley is an American multinational investment bank and financial services company.', moreInfo: `Morgan Stanley is an American multinational investment bank and financial services company based in New York City. Operating in more than 41 countries, it actively provides investment banking, securities, wealth management, and investment management services.\n\nMorgan Stanley consistently mobilizes capital to help governments, corporations, institutions, and individuals achieve their financial complexities, standing as a critical pillar in global financial markets and macro-economic structuring.`, officeImages: officeImagesPlaceholder },

  // Analytics
  { id: 21, name: 'Mu Sigma', fullName: 'Mu Sigma', category: 'analytics', sector: 'Analytics', location: 'Chicago, USA', logo: 'https://logo.clearbit.com/mu-sigma.com', website: 'https://www.mu-sigma.com', startedFrom: '2004', founder: 'Dhiraj Rajaram', employees: '3,500+', workCulture: 'Curiosity, Impact, Learning', studentsPlaced: '50+ (Approx.)', description: 'Mu Sigma is a prominent decision sciences and big data analytics firm.', moreInfo: `Mu Sigma is a prominent decision sciences and big data analytics firm headquartered in Chicago, Illinois. Founded in 2004, the firm enables global enterprises to institutionalize data-driven decision making and transform organizational ecosystems.\n\nThey actively assist business leaders in combining mathematics, business, and technology to unpack complex data insights. Mu Sigma works extensively with Fortune 500 companies to deploy scalable analytical solutions.`, officeImages: officeImagesPlaceholder },
  { id: 22, name: 'Fractal Analytics', fullName: 'Fractal Analytics', category: 'analytics', sector: 'Analytics', location: 'Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/fractal.ai', website: 'https://fractal.ai', startedFrom: '2000', founder: 'Srikanth Velamakanni', employees: '4,000+', workCulture: 'Care, Integrity, Fun', studentsPlaced: '70+ (Approx.)', description: 'Fractal is one of the most prominent players in the Artificial Intelligence space.', moreInfo: `Fractal Analytics is a multinational artificial intelligence and advanced analytics company with operations globally and headquarters in Mumbai and New York. Founded in 2000, Fractal is one of the most prominent players in the AI space.\n\nTheir overarching mission is to power every human decision in the enterprise by bringing deep AI, engineering, and design to life. They deploy cutting-edge algorithms to solve vast operational challenges for Fortune 500 corporations.`, officeImages: officeImagesPlaceholder },
  { id: 23, name: 'LatentView', fullName: 'LatentView Analytics', category: 'analytics', sector: 'Analytics', location: 'Chennai, Tamil Nadu', logo: 'https://logo.clearbit.com/latentview.com', website: 'https://www.latentview.com', startedFrom: '2006', founder: 'Venkat Viswanathan', employees: '1,000+', workCulture: 'Innovation, Empowerment', studentsPlaced: '40+ (Approx.)', description: 'LatentView provides digital analytics and data engineering to Fortune 500 companies.', moreInfo: `LatentView Analytics is a global digital analytics capability firm that provides data engineering and actionable insights to Fortune 500 companies. Founded in 2006, they specialize in predictive modeling, business analytics, and big data technologies.\n\nLatentView actively helps clients realize their digital transformation vision by leveraging comprehensive data streams to drive better, more intuitive business decisions across diverse verticals like retail, CPG, and financial services.`, officeImages: officeImagesPlaceholder },

  // Telecom
  { id: 24, name: 'Jio', fullName: 'Reliance Jio', category: 'telecom', sector: 'Telecom', location: 'Navi Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/jio.com', website: 'https://www.jio.com', startedFrom: '2007', founder: 'Mukesh Ambani', employees: '80,000+', workCulture: 'Speed, Agility, Customer Focus', studentsPlaced: '400+ (Approx.)', description: 'Jio is an Indian telecommunications company and a subsidiary of Jio Platforms.', moreInfo: `Reliance Jio Infocomm Limited, commonly known as Jio, is an Indian telecommunications company and subsidiary of Jio Platforms. Headquartered in Navi Mumbai, it operates a national LTE network with coverage across all 22 telecom circles.\n\nJio radically transformed the Indian telecom landscape by offering high-speed 4G data and free voice calling at unprecedented, disruptive rates, effectively bringing high-speed internet to hundreds of millions and driving India's digital revolution.`, officeImages: officeImagesPlaceholder },
  { id: 25, name: 'Airtel', fullName: 'Bharti Airtel', category: 'telecom', sector: 'Telecom', location: 'New Delhi, Delhi', logo: 'https://logo.clearbit.com/airtel.in', website: 'https://www.airtel.in', startedFrom: '1995', founder: 'Sunil Bharti Mittal', employees: '17,000+', workCulture: 'Alive, Inclusive, Respectful', studentsPlaced: '150+ (Approx.)', description: 'Airtel is a leading global telecommunications company with operations in 18 countries across Asia and Africa.', moreInfo: `Bharti Airtel Limited, commonly known as Airtel, is an Indian global telecommunications company headquartered in New Delhi. It operates across 18 countries spanning South Asia and Africa, maintaining a massive global footprint.\n\nRanked consistently among the top mobile service providers world-wide, Airtel delivers dynamic 4G/5G services and high-speed broadband. The company remains highly focused on providing accessible telecom infrastructure.`, officeImages: officeImagesPlaceholder },

  // Others
  { id: 26, name: 'Jaro Education', fullName: 'Jaro Education', category: 'others', sector: 'Others', location: 'Mumbai, Maharashtra', logo: 'https://logo.clearbit.com/jaroeducation.com', website: 'https://www.jaroeducation.com', startedFrom: '2009', founder: 'Sanjay Salunkhe', employees: '800+', workCulture: 'Dynamic, Growth-oriented', studentsPlaced: '120+ (Approx.)', description: 'Jaro Education is India’s most trusted online higher education company.', moreInfo: `Jaro Education is India's most trusted online higher education company, fundamentally bridging the large gap between academia and modern industry requirements. Founded in 2009, it specializes in premium executive education programs.\n\nBy partnering with leading universities globally, Jaro equips working professionals and aspiring leaders with highly curated, top-tier management and technical skills, vastly accelerating their corporate trajectories in competitive markets.`, officeImages: officeImagesPlaceholder },
  { id: 27, name: 'Byju\'s', fullName: 'Think and Learn Pvt Ltd', category: 'others', sector: 'Others', location: 'Bengaluru, Karnataka', logo: 'https://logo.clearbit.com/byjus.com', website: 'https://www.byjus.com', startedFrom: '2011', founder: 'Byju Raveendran', employees: '10,000+', workCulture: 'Fast-paced, Impactful', studentsPlaced: '200+ (Approx.)', description: 'Byju\'s is a global ed-tech company, providing highly adaptive, engaging and effective learning programs.', moreInfo: `Think and Learn Pvt Ltd, operating as Byju's, is a global ed-tech company providing adaptive, engaging, and highly effective learning programs. Founded in 2011, it skyrocketed to become one of the most prominent online learning platforms.\n\nCreating vastly personalized educational programs using deep interactive animations, Byju's systematically breaks down complex concepts for students, radically transforming modern learning ecosystems.`, officeImages: officeImagesPlaceholder },
  { id: 28, name: 'Amazon', fullName: 'Amazon.com, Inc.', category: 'it', sector: 'IT & Software', location: 'Seattle, USA', logo: 'https://logo.clearbit.com/amazon.com', website: 'https://www.amazon.in', startedFrom: '1994', founder: 'Jeff Bezos', employees: '1,500,000+', workCulture: 'Customer Obsession, Innovation, Bias for Action', studentsPlaced: '80+ (Approx.)', description: 'Amazon is a globally reputed e-commerce, cloud computing, and AI multinational technology company.', moreInfo: `Amazon.com, Inc. is a globally reputed American multinational technology company heavily focused on e-commerce, cloud computing, digital streaming, and artificial intelligence. Founded in 1994 by Jeff Bezos, it is a juggernaut of the modern tech era.\n\nAmazon adheres to four pivotal principles: extreme customer obsession, deep passion for invention, unwavering commitment to operational excellence, and visionary long-term thinking. It operates an unparalled global logistics and cloud infrastructure network.`, officeImages: officeImagesPlaceholder },
];

const ITEMS_PER_PAGE = 10;
const SECTORS = ['All Sectors', 'IT & Software', 'Core Engineering', 'Consulting', 'Finance', 'Analytics', 'Telecom', 'Others'];

export default function Companies({ onBack, onOpenPlacements }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sector, setSector] = useState('All Sectors');
  const [page, setPage] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const activeCompany = selectedCompany ? COMPANIES.find(c => c.id === selectedCompany.id) : null;
  const totalPages = 10;

  const filtered = COMPANIES.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.sector.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  const handleNavClick = (e, path, action) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    if (action) action();
  };

  return (
    <div className="companies-page">

      {/* NAV */}
      <nav className="co-nav">
        <div className="co-nav-left">
          <div className="co-brand">
            <div className="co-brand-logo">🎓</div>
            <div>
              <div className="co-brand-name">PRMIT&R, Badnera</div>
              <div className="co-brand-sub">College Placement Management System</div>
            </div>
          </div>
          <div className="co-nav-links">
            <a href="/Home" onClick={(e) => handleNavClick(e, '/Home', onBack)}>Home</a>
            <a href="/Companies" className="active" onClick={(e) => handleNavClick(e, '/Companies')}>Companies</a>
            <a href="/Placements" onClick={(e) => handleNavClick(e, '/Placements', onOpenPlacements)}>Placements</a>
            <a href="/Notice-Board" onClick={(e) => handleNavClick(e, '/Notice-Board')}>Notice Board</a>
            <a href="/Contact" onClick={(e) => handleNavClick(e, '/Contact')}>Contact</a>
          </div>
        </div>
        <div className="co-nav-right">
        </div>
      </nav>

      <div className="co-body">

        {activeCompany ? (
          <CompanyDetails company={activeCompany} onBack={() => setSelectedCompany(null)} />
        ) : (
          <main className="co-main">

            {/* Header row */}
            <div className="co-header">
              <div>
                <h1 className="co-title">Recruiters</h1>
                <p className="co-subtitle">Explore our top recruiting companies and discover opportunities that match your career goals.</p>
              </div>
              <div className="co-controls">
                <div className="co-search">
                  <span className="co-search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Search Company..."
                    value={search}
                    onChange={e => { setSearch(e.target.value); setPage(1); }}
                  />
                </div>
                <select
                  className="co-sector-select"
                  value={sector}
                  onChange={e => setSector(e.target.value)}
                >
                  {SECTORS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Company grid */}
            <div className="co-grid">
              {filtered.map(company => (
                <div key={company.id} className="co-card">
                  <div className="co-logo-box">
                    <img src={company.logo} alt={`${company.name} logo`} className="co-company-logo" />
                  </div>
                  <div className="co-card-body">
                    <div className="co-card-name">{company.name}</div>
                    <div className="co-card-sector">{company.sector}</div>
                    <div className="co-card-location">📍 {company.location}</div>
                    <button className="co-view-btn" onClick={() => setSelectedCompany(company)}>View Details →</button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="co-empty">No companies found matching your search.</div>
              )}
            </div>

            {/* Pagination */}
            <div className="co-pagination">
              <button className="co-pg-btn" onClick={() => setPage(p => Math.max(1, p - 1))}>«</button>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  className={`co-pg-btn${page === n ? ' active' : ''}`}
                  onClick={() => setPage(n)}
                >{n}</button>
              ))}
              <span className="co-pg-dots">…</span>
              <button className={`co-pg-btn${page === 10 ? ' active' : ''}`} onClick={() => setPage(10)}>10</button>
              <button className="co-pg-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))}>»</button>
            </div>

          </main>
        )}
      </div>


      {/* Footer */}
      <footer className="co-footer">
        <span>© 2025 PRMIT&R, Badnera. All rights reserved.</span>
        <span>Placement Management System →</span>
      </footer>
    </div>
  );
}
