export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/umariqbal131' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/Umariqbal777' },
  { name: 'Behance', icon: 'behance', href: 'https://www.behance.net/umariqbal12a1' },
  { name: 'LeetCode', icon: 'leetcode', href: 'https://leetcode.com/u/umariqbal/' },
]

export const aboutLinks = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/umariqbal131' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/Umariqbal777' },
  { name: 'Behance', icon: 'behance', href: 'https://www.behance.net/umariqbal12a1' },
  { name: 'Dribbble', icon: 'dribbble', href: 'https://dribbble.com/iqbalumar131' },
]

export const stats = [
  ['2+', 'Years of Experience'],
  ['6+', 'Certifications'],
  ['10+', 'Projects Built'],
  ['15+', 'Skills Mastered'],
]

export const focus = ['Machine Learning', 'Deep Learning', 'Generative AI', 'UI/UX Design', 'Python']

const vz = (p) => `https://www.vectorlogo.zone/logos/${p}`
export const skills = [
  ['HTML', vz('w3_html5/w3_html5-icon.svg')],
  ['CSS', vz('w3_css/w3_css-icon.svg')],
  ['JavaScript', vz('javascript/javascript-icon.svg')],
  ['Python', vz('python/python-icon.svg')],
  ['Pandas', 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg'],
  ['Matplotlib', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/120px-Created_with_Matplotlib-logo.svg.png'],
  ['Scikit-learn', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'],
  ['NumPy', vz('numpy/numpy-icon.svg')],
  ['TensorFlow', vz('tensorflow/tensorflow-icon.svg')],
  ['PyTorch', vz('pytorch/pytorch-icon.svg')],
  ['Figma', vz('figma/figma-icon.svg')],
  ['Canva', vz('canva/canva-icon.svg')],
  ['Git', vz('git-scm/git-scm-icon.svg')],
  ['GitHub', vz('github/github-icon.svg')],
  ['C++', 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'],
]

export const experience = [
  {
    meta: 'Jun 2025 — Aug 2025 · 3 months · Remote',
    role: 'AI/ML Engineer',
    org: 'SmartInternz (Internship)',
    desc: 'Completed a virtual internship program focused on Machine Learning applications and practical problem-solving using real-world datasets.',
  },
  {
    meta: 'Jul 2024 — Oct 2024 · 4 months · Remote',
    role: 'UI Designer',
    org: 'Grootz (Internship)',
    desc: 'Designed the complete website for the project, including user-friendly layouts, wireframes, and visual designs. Focused on seamless and engaging user experiences.',
  },
]

export const education = [
  {
    meta: '2022 — 2026',
    role: 'Bachelor of Technology — Artificial Intelligence',
    org: 'ABESIT',
    desc: 'Relevant coursework in Data Structures & Algorithms, AI, Machine Learning, Database Management Systems, and Software Engineering.',
  },
  {
    meta: 'Apr 2020 — Apr 2021',
    role: 'Higher Secondary (12th)',
    org: 'Shah Faiz Public School · Grade: 84.4%',
    desc: 'Completed higher secondary education with strong academic performance in science and mathematics.',
  },
  {
    meta: 'Apr 2018 — Apr 2019',
    role: 'High School (10th)',
    org: 'Shah Faiz Public School · Grade: 81.6%',
    desc: 'Completed secondary education with a focus on science, mathematics, and computer fundamentals.',
  },
]

// files live in /public/certificates
export const certs = [
  { file: 'infosys-deep-learning.pdf', logo: 'INFOSYS', name: 'Introduction to Deep Learning', issuer: 'Infosys Springboard' },
  { file: 'ibm-getting-started-ai.pdf', logo: 'IBM', name: 'Getting Started with Artificial Intelligence', issuer: 'IBM' },
  { file: 'ibm-prompting.pdf', logo: 'IBM', name: 'Mastering the Art of Prompting', issuer: 'IBM' },
  { file: 'abesit-react.jpeg', logo: 'ABESIT', name: 'Web Development using React', issuer: 'ABESIT' },
  { file: 'ibm-intro-to-ai.pdf', logo: 'IBM', name: 'Introduction to Artificial Intelligence', issuer: 'IBM SkillsBuild' },
  { file: 'accenture-bootcamp.jpeg', logo: 'ACN', name: 'Accenture Hack2Skill Bootcamp', issuer: 'Accenture in India' },
]

// the 3 cards on the home page
export const featured = [
  {
    title: 'Portfolio Website',
    thumb: 'PORTFOLIO',
    tags: ['React', 'Vite', 'CSS'],
    short: 'Personal portfolio showcasing projects, skills, and experience with a clean, modern design.',
    desc: "The Portfolio project involved a deep-dive into creating a responsive and elegant personal website. The goal was to showcase skills in UI/UX design and front-end development, ensuring a seamless experience across all devices.\n\nThis project utilizes React, Vite and hand-tuned CSS to achieve its clean, modern look and smooth scrolling.\n\nFor more, you can go to the 'View all' section to read the full description.",
  },
  {
    title: 'Anemia Detection',
    thumb: 'ANEMIA ML',
    tags: ['Python', 'ML', 'Scikit-learn'],
    short: 'ML system comparing 6 algorithms to detect anemia from patient health parameters with high accuracy.',
    desc: "A machine learning-based system that predicts the likelihood of anemia based on patient health parameters.\n\nThe project compares multiple models — Logistic Regression, Decision Tree, Random Forest, SVM, Naive Bayes, and Gradient Boosting — and deploys the best-performing model (Gradient Boosting Classifier) for accurate predictions.\n\nFor more, you can go to the 'View all' section to read the full description.",
  },
  {
    title: 'Internship Aggregator',
    thumb: 'AGGREGATOR',
    tags: ['Python', 'Scraping', 'Automation'],
    short: 'Automated tool that scrapes and filters internship listings from multiple platforms with keyword filtering.',
    desc: "An automated job-hunting tool that scrapes, parses, and aggregates internship postings from multiple online sources.\n\nIt filters opportunities based on user-defined keywords (like 'Software Engineer' or 'Remote'), saving hours of manual searching and ensuring no new listing is missed.\n\nFor more, you can go to the 'View all' section to read the full description.",
  },
]
