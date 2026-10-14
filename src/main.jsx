import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const people = [
  {
    name: "Akinboye",
    role: "Senior DevOps Engineer",
    kind: "Instructor",
    initials: "AK",
    color: "blue",
    bio: "Your guide through the Azure ecosystem. Akinboye brings a real-world DevOps perspective to cloud foundations, turning core services into practical, production-minded skills.",
    focus: ["Cloud architecture", "Automation & IaC", "DevOps in Azure"],
    goal: "Help every learner connect Azure concepts to the work they want to do next.",
  },
  {
    name: "Adekunle",
    role: "Foreman",
    kind: "Learner",
    initials: "AD",
    color: "orange",
    bio: "A hands-on team leader bringing practical planning and coordination experience to the cloud. Ready to understand how Azure can support safer, smarter, more connected operations.",
    focus: ["Azure IoT basics", "Cloud collaboration", "Security essentials"],
    goal: "Discover how cloud tools can support teams and operations on the ground.",
  },
  {
    name: "Shuaibu",
    role: "Computer Science Graduate",
    kind: "Learner",
    initials: "SH",
    color: "purple",
    bio: "A computer science graduate with a strong technical foundation and a curiosity for building on the cloud. Ready to connect familiar computing concepts with Azure services.",
    focus: ["Azure compute", "Networking", "Cloud-native apps"],
    goal: "Build confidence choosing and using the right Azure services.",
  },
  {
    name: "Alero",
    role: "Nurse",
    kind: "Learner",
    initials: "AL",
    color: "green",
    bio: "A healthcare professional bringing a people-first perspective to the classroom. Interested in how reliable, secure cloud platforms can help power modern services.",
    focus: ["Privacy & governance", "Cloud reliability", "Data fundamentals"],
    goal: "Understand the cloud foundations behind secure, dependable digital services.",
  },
  {
    name: "Okafor",
    role: "Electrical Engineer",
    kind: "Learner",
    initials: "OK",
    color: "pink",
    bio: "An electrical engineer who understands complex systems and is ready to explore their cloud counterparts. Bringing analytical thinking to Azure architecture and connected infrastructure.",
    focus: ["Azure infrastructure", "IoT & edge", "Resilient design"],
    goal: "Map engineering systems thinking to scalable Azure solutions.",
  },
];

const modules = [
  {
    number: "01",
    title: "Cloud concepts",
    tag: "Start here",
    description:
      "Build a shared foundation: what cloud computing is, why organizations use it, and how Azure makes it available.",
    topics: ["IaaS, PaaS & SaaS", "Public, private & hybrid cloud", "Consumption-based pricing"],
    icon: "cloud",
  },
  {
    number: "02",
    title: "Azure architecture & services",
    tag: "Explore",
    description:
      "Get to know Azure's global infrastructure and the building blocks used to create cloud solutions.",
    topics: ["Regions & availability zones", "Compute, networking & storage", "Subscriptions & resource groups"],
    icon: "grid",
  },
  {
    number: "03",
    title: "Security & governance",
    tag: "Protect",
    description:
      "Learn how to manage access, protect workloads, and keep cloud environments compliant and well governed.",
    topics: ["Microsoft Entra ID & RBAC", "Zero Trust & defense in depth", "Azure Policy & resource locks"],
    icon: "shield",
  },
  {
    number: "04",
    title: "Management & cost",
    tag: "Operate",
    description:
      "Understand the tools that help teams monitor health, manage resources, and make informed cost decisions.",
    topics: ["Azure portal, CLI & Cloud Shell", "Azure Monitor & Service Health", "Pricing Calculator & Cost Management"],
    icon: "chart",
  },
];

const milestones = [
  { step: "01", title: "Get oriented", detail: "Cloud concepts & shared vocabulary", time: "Week 1" },
  { step: "02", title: "Explore Azure", detail: "Core services & global infrastructure", time: "Weeks 2–3" },
  { step: "03", title: "Build with confidence", detail: "Security, governance & cost", time: "Weeks 4–5" },
  { step: "04", title: "Put it together", detail: "Hands-on review & AZ-900 prep", time: "Week 6" },
];

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const paths = {
    cloud: <><path d="M20 16.2A4.8 4.8 0 0 0 18 7h-1.3A7 7 0 1 0 4 17.2" /><path d="M8 16a4 4 0 1 0 0 8h8a4 4 0 1 0 0-8H8Z" transform="translate(0 -2)" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-5 5" /></>,
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function PersonCard({ person }) {
  return (
    <article className="person-card">
      <div className={`avatar avatar-${person.color}`}>{person.initials}</div>
      <div className="person-heading">
        <div>
          <h3>{person.name}</h3>
          <p className="person-role">{person.role}</p>
        </div>
        <span className={`role-badge ${person.kind === "Instructor" ? "badge-instructor" : ""}`}>
          {person.kind}
        </span>
      </div>
      <p className="person-bio">{person.bio}</p>
      <div className="focus-label">LEARNING FOCUS</div>
      <div className="focus-list">
        {person.focus.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="person-goal"><Icon name="arrow" size={15} /><span>{person.goal}</span></div>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Azure Fundamentals home">
          <span className="brand-mark"><Icon name="cloud" size={21} /></span>
          <span>cloud<span className="brand-light">class</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#curriculum">Curriculum</a>
          <a href="#journey">Your journey</a>
          <a href="#community">Community</a>
        </nav>
        <a className="header-cta" href="#curriculum">Explore the program <Icon name="arrow" size={15} /></a>
      </header>

      <main>
        <section className="hero page-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A learning community for cloud curious minds</div>
            <h1>Cloud skills for<br />what comes <span>next.</span></h1>
            <p className="hero-description">
              A practical, people-first introduction to Microsoft Azure. Learn the foundations, explore real-world cloud concepts, and grow your confidence—together.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#curriculum">Explore the curriculum <Icon name="arrow" size={17} /></a>
              <a className="button-text" href="#community"><span className="play-icon"><Icon name="play" size={16} /></span> Meet your community</a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                {people.slice(0, 4).map((person) => <span className={`mini-avatar avatar-${person.color}`} key={person.initials}>{person.initials}</span>)}
              </div>
              <p><strong>5 curious minds.</strong> One shared cloud journey.</p>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of connected Azure cloud services">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cloud">
              <div className="cloud-glow" />
              <Icon name="cloud" size={88} />
              <span>AZURE</span>
            </div>
            <div className="orbit-node node-compute"><span className="node-icon"><Icon name="grid" size={19} /></span><span>Compute</span></div>
            <div className="orbit-node node-secure"><span className="node-icon"><Icon name="shield" size={19} /></span><span>Security</span></div>
            <div className="orbit-node node-data"><span className="node-icon"><Icon name="chart" size={19} /></span><span>Data</span></div>
            <div className="art-caption"><span className="caption-spark">✳</span> Your cloud journey starts here</div>
          </div>
          <div className="hero-bottom-line">
            <span>NO EXPERIENCE REQUIRED</span><i /><span>BUILT FOR THE AZ-900 FOUNDATIONS</span><i /><span>LEARN BY DOING</span>
          </div>
        </section>

        <section className="curriculum-section section-pad" id="curriculum">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker">THE LEARNING PATH</div>
                <h2>Azure, made <span>understandable.</span></h2>
                <p>Four clear modules take you from cloud basics to a confident understanding of the Azure platform.</p>
              </div>
              <a className="text-link" href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" target="_blank" rel="noreferrer">
                Explore the AZ-900 certification <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="module-grid">
              {modules.map((module) => (
                <article className="module-card" key={module.number}>
                  <div className="module-topline"><span className="module-number">{module.number}</span><span className="module-tag">{module.tag}</span></div>
                  <div className={`module-icon icon-${module.icon}`}><Icon name={module.icon} size={21} /></div>
                  <h3>{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                  <ul>{module.topics.map((topic) => <li key={topic}><Icon name="check" size={14} />{topic}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="outcome-strip">
              <div className="outcome-icon"><Icon name="book" size={22} /></div>
              <div><strong>By the end, you'll be able to...</strong><p>Describe core cloud concepts, identify Azure services, explain security and governance, and find the right tools to manage and monitor resources.</p></div>
              <span className="outcome-pill">AZ-900 ALIGNED</span>
            </div>
          </div>
        </section>

        <section className="journey-section section-pad" id="journey">
          <div className="page-shell journey-layout">
            <div className="journey-intro">
              <div className="section-kicker">A SIMPLE, STEADY RHYTHM</div>
              <h2>Small steps.<br /><span>Real momentum.</span></h2>
              <p>Learn at a sustainable pace with a clear path from first concepts to practical understanding. Explore, ask questions, and connect the dots as a group.</p>
              <div className="journey-note"><span>✳</span> Curiosity is the only prerequisite.</div>
            </div>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div className="timeline-item" key={milestone.step}>
                  <div className={`timeline-marker ${index === 0 ? "marker-current" : ""}`}>{index === 0 ? <Icon name="play" size={13} /> : milestone.step}</div>
                  <div className="timeline-content"><div><h3>{milestone.title}</h3><p>{milestone.detail}</p></div><span>{milestone.time}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="community-section section-pad" id="community">
          <div className="page-shell">
            <div className="community-heading">
              <div>
                <div className="section-kicker">MEET THE PEOPLE BEHIND THE PROGRESS</div>
                <h2>Different paths.<br className="mobile-break" /> <span>One cloud community.</span></h2>
              </div>
              <p>Different backgrounds make us stronger. Everyone brings a fresh perspective—and everyone belongs here.</p>
            </div>
            <div className="people-grid">{people.map((person) => <PersonCard key={person.name} person={person} />)}</div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-inner page-shell">
            <div className="closing-mark"><Icon name="cloud" size={23} /></div>
            <div><div className="closing-kicker">YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to think in the cloud?</h2><p>Start with the fundamentals. Build knowledge that travels with you.</p></div>
            <a className="closing-button" href="#curriculum">Start exploring <Icon name="arrow" size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Icon name="cloud" size={19} /></span><span>cloud<span className="brand-light">class</span></span></a>
        <p>Built on curiosity. Growing together in Azure.</p>
        <span>AZURE FUNDAMENTALS · LEARN TOGETHER</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
