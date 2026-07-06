/* ===========================
   Athulkrishna T S - Portfolio JS
   =========================== */

// ===========================
// Theme Toggle
// ===========================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===========================
// Mobile Menu Toggle
// ===========================
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typing Effect removed.

// ===========================
// Active Nav Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===========================
// Scroll Reveal Animations
// ===========================
const revealElements = document.querySelectorAll(
    '.timeline-item, .skill-category-card, .project-card, .edu-card, .cert-card, .stat-card, .about-details-card, .contact-info-block, .contact-form'
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animations
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ===========================
// Project Filter
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.4s ease both';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===========================
// Project Modal
// ===========================
const projectData = {
    'lms-chatbot': {
        year: '2026',
        title: 'LMS AI Chatbot',
        tags: ['Python', 'FastAPI', 'ChromaDB', 'RAG', 'Text-to-SQL', 'PostgreSQL', 'OCR', 'LLMs'],
        content: `
            <h4>Overview</h4>
            <p>Built an AI-powered chatbot for a Loan Management System (LMS) that uses Retrieval-Augmented Generation (RAG) and Text-to-SQL architectures to automate customer queries, loan data retrieval, and KYC document processing.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li>Increased chatbot response accuracy by <strong>20%+</strong> across structured databases and unstructured business documents.</li>
                <li>Designed Text-to-SQL pipelines for automated retrieval of loan, customer, and branch-level information from enterprise databases.</li>
                <li>Automated KYC document processing through OCR-based extraction and validation workflows.</li>
                <li>Optimized prompt engineering and retrieval mechanisms for business-specific queries.</li>
                <li>Integrated PostgreSQL, vector databases, and LLM APIs for scalable knowledge retrieval.</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Backend:</strong> FastAPI for high-performance RESTful APIs.</li>
                <li><strong>Vector Store:</strong> ChromaDB for semantic search and document retrieval.</li>
                <li><strong>NLP Engine:</strong> LLMs with optimized prompt engineering for contextual responses.</li>
                <li><strong>Database:</strong> PostgreSQL for structured enterprise data management.</li>
                <li><strong>OCR Pipeline:</strong> Automated extraction and validation of KYC documents.</li>
            </ul>

            <h4>Impact</h4>
            <p>Reduced manual data handling efforts significantly, while enabling non-technical banking staff to query complex databases using natural language.</p>
        `
    },
    'project-management': {
        year: '2025',
        title: 'AI-Powered Project Management Platform',
        tags: ['Python', 'Django', 'MySQL', 'AI APIs', 'JavaScript', 'HTML/CSS'],
        content: `
            <h4>Overview</h4>
            <p>Developed a centralized project management platform with integrated AI features including video summarization, intelligent task management, and team collaboration tools.</p>

            <h4>Key Features</h4>
            <ul>
                <li>Centralized project tracking with comprehensive task management and milestone tracking.</li>
                <li>AI-powered video summarization for meeting recordings and presentations.</li>
                <li>Team collaboration features with role-based access control.</li>
                <li>Real-time project dashboards with progress visualization.</li>
                <li>Integrated notification system for task assignments and updates.</li>
            </ul>

            <h4>Technical Stack</h4>
            <ul>
                <li><strong>Backend:</strong> Django with Python for robust server-side logic.</li>
                <li><strong>Database:</strong> MySQL for structured data management.</li>
                <li><strong>AI Integration:</strong> AI APIs for video summarization and intelligent insights.</li>
                <li><strong>Frontend:</strong> Responsive web interface with HTML, CSS, and JavaScript.</li>
            </ul>

            <h4>Impact</h4>
            <p>Streamlined project workflows and improved team collaboration efficiency through intelligent automation.</p>
        `
    },
    'rainfall': {
        year: '2025',
        title: 'Rainfall Data Analysis – IMD Research',
        tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Geospatial Analysis'],
        content: `
            <h4>Overview</h4>
            <p>Investigated large-scale historical rainfall datasets from the India Meteorological Department (IMD) to identify long-term climate patterns, seasonal anomalies, and regional trends across the Indian subcontinent.</p>

            <h4>Key Findings</h4>
            <ul>
                <li>Identified significant rainfall trend anomalies across multiple Indian states over decades.</li>
                <li>Generated spatial rainfall maps using Python geospatial tools for enhanced geographic visualization.</li>
                <li>Reduced data preparation time by <strong>40%</strong> through optimized preprocessing pipelines.</li>
                <li>Processed noisy and incomplete climate datasets using advanced cleaning techniques.</li>
                <li>Delivered actionable insights through comprehensive technical reports.</li>
            </ul>

            <h4>Methodology</h4>
            <ul>
                <li><strong>Data Processing:</strong> Pandas and NumPy for efficient large-scale data wrangling.</li>
                <li><strong>Visualization:</strong> Matplotlib, Seaborn, and geospatial mapping tools.</li>
                <li><strong>Analysis:</strong> Statistical methods for trend detection and anomaly identification.</li>
                <li><strong>Machine Learning:</strong> Scikit-learn for predictive modeling.</li>
            </ul>

            <h4>Impact</h4>
            <p>Research findings supported meteorological decision-making processes and contributed to understanding climate change patterns in the Indian subcontinent.</p>
        `
    },
    'house-price': {
        year: '2025',
        title: 'House Price Prediction Model',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'Regression', 'EDA', 'Feature Engineering'],
        content: `
            <h4>Overview</h4>
            <p>Constructed and evaluated multiple regression models for predictive house price estimation based on structural and regional features, achieving high accuracy through extensive feature engineering and EDA.</p>

            <h4>Key Components</h4>
            <ul>
                <li>Performed comprehensive Exploratory Data Analysis (EDA) to understand feature distributions and correlations.</li>
                <li>Applied extensive feature engineering including encoding, transformation, and selection techniques.</li>
                <li>Trained and compared multiple regression models to identify the best-performing approach.</li>
                <li>Implemented cross-validation and hyperparameter tuning for model optimization.</li>
            </ul>

            <h4>Models Used</h4>
            <ul>
                <li><strong>Linear Regression:</strong> Baseline model for performance benchmarking.</li>
                <li><strong>Decision Tree Regression:</strong> Non-linear pattern detection.</li>
                <li><strong>Random Forest Regression:</strong> Ensemble approach for improved accuracy.</li>
                <li><strong>Gradient Boosting:</strong> Advanced boosting for maximum predictive power.</li>
            </ul>

            <h4>Impact</h4>
            <p>Achieved strong predictive accuracy, demonstrating expertise in end-to-end ML pipeline design from data preparation to model deployment.</p>
        `
    }
};

function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modal-year').textContent = data.year;
    document.getElementById('modal-title').textContent = data.title;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

    document.getElementById('modal-body-content').innerHTML = data.content;

    const modal = document.getElementById('project-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
});

// Make functions globally available
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// ===========================
// Terminal Simulator
// ===========================
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

if (terminalInput && terminalOutput) {
    const terminalCommands = {
        help: `<div class="terminal-line"><span class="term-highlight">Available Commands:</span></div>
               <div class="terminal-line">  <span class="term-command">skills</span>    → List technical skills</div>
               <div class="terminal-line">  <span class="term-command">experience</span> → Show work experience</div>
               <div class="terminal-line">  <span class="term-command">projects</span>  → List key projects</div>
               <div class="terminal-line">  <span class="term-command">contact</span>   → Display contact info</div>
               <div class="terminal-line">  <span class="term-command">education</span> → Show education</div>
               <div class="terminal-line">  <span class="term-command">about</span>     → About me</div>
               <div class="terminal-line">  <span class="term-command">clear</span>     → Clear terminal</div>`,

        skills: `<div class="terminal-line"><span class="term-highlight">⚡ Core Skills:</span></div>
                 <div class="terminal-line">  AI/NLP     → LLMs, RAG, OCR, Prompt Engineering, Text-to-SQL</div>
                 <div class="terminal-line">  ML         → Regression, Classification, Clustering, Scikit-learn</div>
                 <div class="terminal-line">  Data       → Pandas, NumPy, Matplotlib, Seaborn, EDA</div>
                 <div class="terminal-line">  Languages  → Python (Expert), SQL (Expert), R</div>
                 <div class="terminal-line">  Backend    → FastAPI, Django, PostgreSQL, ChromaDB</div>`,

        experience: `<div class="terminal-line"><span class="term-highlight">💼 Work Experience:</span></div>
                     <div class="terminal-line">  <span class="term-command">[Jan-May 2026]</span> Data Science Intern @ VOPAIS</div>
                     <div class="terminal-line">    → RAG chatbot, Text-to-SQL, OCR automation</div>
                     <div class="terminal-line">  <span class="term-command">[Aug 2025-Apr 2026]</span> Research Intern @ IMD Pune</div>
                     <div class="terminal-line">    → Climate data analysis, spatial rainfall mapping</div>`,

        projects: `<div class="terminal-line"><span class="term-highlight">🚀 Key Projects:</span></div>
                   <div class="terminal-line">  1. LMS AI Chatbot (RAG + Text-to-SQL)</div>
                   <div class="terminal-line">  2. AI Project Management Platform (Django)</div>
                   <div class="terminal-line">  3. Rainfall Data Analysis (IMD Research)</div>
                   <div class="terminal-line">  4. House Price Prediction (ML Models)</div>`,

        contact: `<div class="terminal-line"><span class="term-highlight">📫 Contact:</span></div>
                  <div class="terminal-line">  Email    → athul2003ts@gmail.com</div>
                  <div class="terminal-line">  Phone    → +91 8078721112</div>
                  <div class="terminal-line">  LinkedIn → linkedin.com/in/athulkrishnats</div>
                  <div class="terminal-line">  GitHub   → github.com/Athul2817</div>
                  <div class="terminal-line">  Location → Thrissur, Kerala, India</div>`,

        education: `<div class="terminal-line"><span class="term-highlight">🎓 Education:</span></div>
                    <div class="terminal-line">  <span class="term-command">[2024-2026]</span> M.Sc. Data Science - CHRIST University, Pune</div>
                    <div class="terminal-line">  <span class="term-command">[2021-2024]</span> B.Voc Data Science - St. Thomas College, Thrissur</div>`,

        about: `<div class="terminal-line"><span class="term-highlight">👋 About Athulkrishna T S:</span></div>
                <div class="terminal-line">  Data Science postgraduate passionate about engineering</div>
                <div class="terminal-line">  intelligent AI systems. Specializing in RAG pipelines,</div>
                <div class="terminal-line">  Text-to-SQL agents, and scalable ML solutions.</div>
                <div class="terminal-line">  Currently seeking full-time opportunities in AI/ML/DS.</div>`
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.value.trim().toLowerCase();
            terminalInput.value = '';

            if (!cmd) return;

            // Show command that was typed
            const cmdLine = document.createElement('div');
            cmdLine.className = 'terminal-line';
            cmdLine.innerHTML = `<span class="term-prompt">athul@ai-agent:~$</span> <span class="term-command">${cmd}</span>`;
            terminalOutput.appendChild(cmdLine);

            if (cmd === 'clear') {
                terminalOutput.innerHTML = '';
            } else if (terminalCommands[cmd]) {
                const outputEl = document.createElement('div');
                outputEl.innerHTML = terminalCommands[cmd];
                terminalOutput.appendChild(outputEl);
            } else {
                const errorLine = document.createElement('div');
                errorLine.className = 'terminal-line';
                errorLine.innerHTML = `<span style="color: var(--code-red);">Error:</span> Command '${cmd}' not found. Type <span class="term-command">'help'</span> for available commands.`;
                terminalOutput.appendChild(errorLine);
            }

            // Scroll to bottom
            const termBody = document.getElementById('terminal-body');
            termBody.scrollTop = termBody.scrollHeight;
        }
    });
}

// Contact Form Handler removed since form was replaced by direct Gmail links.

// ===========================
// Smooth Section Scroll for CTAs
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
