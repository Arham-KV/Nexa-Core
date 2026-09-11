import { ServiceItem, TeamMember, TestimonialItem, ValuePillar, StatItem, ProcessStep, ElementorSectionSpec } from '../types';

export const BUSINESS_INFO = {
  name: 'NexaCore Solutions',
  tagline: 'Modern Business IT & Strategic Digital Services',
  phone: '(555) 839-2041',
  email: 'contact@nexacore-solutions.com',
  address: '482 Innovation Way, Suite 300, Austin, TX 78701',
  hours: 'Monday – Friday: 8:00 AM – 6:00 PM CST',
  emergency: '24/7 Priority Emergency Support Available for Contract Clients',
};

export const HOME_STATS: StatItem[] = [
  { label: 'Client Retention Rate', value: '99.4%', subtext: 'Across 5+ consecutive years' },
  { label: 'Completed Migrations', value: '150+', subtext: 'Zero data-loss track record' },
  { label: 'Average Support Response', value: '< 8 min', subtext: '24/7 dedicated local desk' },
  { label: 'Client Cost Optimization', value: '34%', subtext: 'Average annual IT savings' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Infrastructure Modernization',
    shortDesc: 'Transition your legacy workloads to resilient AWS, Azure, or hybrid environments with zero business downtime.',
    fullDesc: 'We re-architect on-premise hardware and legacy servers into high-availability cloud foundations. Our engineers orchestrate automated backups, auto-scaling clusters, and multi-region disaster recovery protocols tailored specifically for growing enterprises.',
    icon: 'Cloud',
    badge: 'Popular',
    timeline: '3 - 8 weeks',
    deliverables: [
      'Comprehensive Cloud Readiness Audit & Cost Modeling',
      'Zero-Downtime Database & Application Migration Strategy',
      'Infrastructure as Code (Terraform / CloudFormation)',
      'Real-Time Cloud Cost Governance & Auto-Scaling Rules',
      '24/7 Disaster Recovery & Automated Snapshot Vaults'
    ]
  },
  {
    id: 'managed-it',
    title: 'Managed IT Support & Endpoint Fleet Operations',
    shortDesc: 'Proactive 24/7 systems monitoring, rapid helpdesk dispatch, hardware provisioning, and workplace tech management.',
    fullDesc: 'Eliminate technical friction and recurring computer bottlenecks. We act as your turnkey internal IT department or augment your existing engineers with 24/7 endpoint telemetry, automated security patching, and proactive ticketing.',
    icon: 'ShieldCheck',
    badge: 'Core Service',
    timeline: 'Ongoing / Retainer',
    deliverables: [
      'Guaranteed Sub-15 Minute Ticket SLA Response',
      'Automated OS & Third-Party Vulnerability Patching',
      'Remote Mobile Device & Laptop Fleet Management (MDM)',
      'Quarterly Executive Technology Reviews & Budget Forecasting',
      'Onboarding / Offboarding User Automation'
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation & Custom System APIs',
    shortDesc: 'Eliminate repetitive manual data entry by connecting your ERP, CRM, billing, and communication tools.',
    fullDesc: 'Connect disjointed software ecosystems into synchronous pipelines. From custom webhooks and REST integrations to automated client onboarding sequences, we save your team hundreds of manual hours each month.',
    icon: 'Cpu',
    timeline: '2 - 6 weeks',
    deliverables: [
      'Operational Friction & Repetitive Task Process Mapping',
      'Custom API Middleware & Bi-Directional Webhooks',
      'CRM (Salesforce / HubSpot) & ERP Integration Pipelines',
      'Automated Invoicing, Payment Sync & Document Generation',
      'Exception Alerting & Failure Recovery Gateways'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity, Threat Defense & Compliance',
    shortDesc: 'Multi-layer defense architectures, dark web credential monitoring, phishing simulations, and SOC2/HIPAA readiness.',
    fullDesc: 'Defend your critical company assets against sophisticated ransomware, phishing infiltrations, and insider threats. We implement zero-trust access controls, multi-factor enforcement, and compliance audit frameworks.',
    icon: 'Lock',
    badge: 'High Demand',
    timeline: '4 - 10 weeks',
    deliverables: [
      'Vulnerability Scanning & Penetration Assessment Reports',
      'Zero-Trust Network Access (ZTNA) & Mandatory MFA Protocols',
      'Managed Detection & Response (MDR) 24/7 SIEM Monitoring',
      'Employee Phishing Simulation & Security Awareness Modules',
      'Compliance Roadmap for SOC2 Type II, HIPAA, and ISO 27001'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Strategic Digital Transformation Consulting',
    shortDesc: 'Fractional CTO advisory guiding technology roadmaps, vendor evaluations, and high-impact digital initiatives.',
    fullDesc: 'Align your technology investments directly with measurable bottom-line revenue goals. We provide executive-level guidance to help businesses evaluate software vendors, modernize customer-facing portals, and optimize expenditures.',
    icon: 'Briefcase',
    timeline: 'Quarterly Advisory',
    deliverables: [
      '3-Year Enterprise Technology Architecture Roadmap',
      'Vendor Contract Negotiation & Technical Due Diligence',
      'Legacy Modernization vs. Replacement ROI Financial Analysis',
      'Board-Level Strategic IT Presentations & Budget Planning',
      'Architecture Governance & Security Policy Creation'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Executive Intelligence Dashboards',
    shortDesc: 'Transform fragmented spreadsheets and transactional data into live executive dashboards and predictive intelligence.',
    fullDesc: 'Harness the true power of your business numbers. We centralize fragmented database siloes into modern data warehouses, delivering clean, actionable metrics that inform crucial executive hiring and operational decisions.',
    icon: 'BarChart3',
    timeline: '3 - 7 weeks',
    deliverables: [
      'Centralized Data Warehouse Setup (Snowflake / BigQuery)',
      'Automated ETL Data Ingestion Pipelines',
      'Interactive Power BI / Looker Executive Dashboards',
      'Key Performance Indicator (KPI) Tracking & Alert Triggers',
      'Predictive Churn & Revenue Forecasting Models'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Deep-Dive Discovery & IT Audit',
    description: 'We perform a comprehensive 360-degree assessment of your network, cloud resources, software licensing, and operational bottlenecks.',
    timeframe: 'Days 1 – 7'
  },
  {
    step: '02',
    title: 'Architectural Blueprint & Roadmap',
    description: 'You receive a detailed technical roadmap with milestone timelines, clear pricing tiers, risk mitigations, and expected ROI impact.',
    timeframe: 'Days 8 – 14'
  },
  {
    step: '03',
    title: 'Frictionless Phased Implementation',
    description: 'Our certified engineers deploy upgrades, migrate data, and configure zero-trust policies with strict zero-downtime maintenance windows.',
    timeframe: 'Weeks 3 – 6'
  },
  {
    step: '04',
    title: 'Continuous Optimization & 24/7 Desk',
    description: 'Your systems are locked into our 24/7 monitoring grid with proactive issue resolution, monthly executive reporting, and ongoing enhancements.',
    timeframe: 'Continuous'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Proactive Prevention, Not Break-Fix',
    desc: 'Traditional IT waits until your server crashes. NexaCore continuously monitors telemetry to resolve bottlenecks before your staff even notices.'
  },
  {
    title: 'Guaranteed 8-Minute Support SLA',
    desc: 'When an urgent issue arises, you get direct access to Level-3 local senior engineers — no offshore phone tag or endless ticket queues.'
  },
  {
    title: 'Predictable Fixed-Monthly Pricing',
    desc: 'Enjoy crystal-clear budgeting with no surprise hourly overages, hidden travel fees, or sudden emergency surcharge multipliers.'
  },
  {
    title: 'Enterprise-Grade Security Standards',
    desc: 'Every client environment is protected with mandatory Zero-Trust access, encrypted automated snapshots, and SOC2 audit trails.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'NexaCore seamlessly migrated our entire 85-workstation office to AWS without a single second of downtime during trading hours. Their team handles our IT so cleanly that we haven’t had an operational disruption in two years.',
    author: 'David Henderson',
    role: 'Chief Operating Officer',
    company: 'Apex Logistics Group',
    rating: 5,
    metric: '40% reduction in annual IT overhead'
  },
  {
    quote: 'Before NexaCore, our engineers were constantly distracted by recurring workstation bugs and cloud outages. NexaCore stepped in, overhauled our security protocols, and gave us the peace of mind we needed to scale our client base.',
    author: 'Elena Rodriguez',
    role: 'Managing Director',
    company: 'Beacon Financial Partners',
    rating: 5,
    metric: '99.99% server availability maintained'
  },
  {
    quote: 'Their workflow automation pipeline eliminated 18 hours of manual data entry every single week for our legal staff. The ROI paid for itself within the first 60 days of deployment.',
    author: 'Marcus Vance',
    role: 'Partner & Practice Lead',
    company: 'Vance & Sterling Corporate Law',
    rating: 5,
    metric: '18 hours/week saved across departments'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sarah Lin, CISSP',
    role: 'Founder & Chief Technology Officer',
    experience: 'Ex-Dell Enterprise Systems Architect, 16+ years in cloud infrastructure and cybersecurity.',
    bio: 'Sarah founded NexaCore with a single mission: delivering enterprise-level IT discipline and high-touch engineering to ambitious regional companies.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Marcus Sterling',
    role: 'VP of Managed Infrastructure & SLA',
    experience: 'Former Director of IT Operations at Austin Cloud Systems, 12+ years in multi-cloud operations.',
    bio: 'Marcus oversees our 24/7/365 network operations center (NOC) and ensures that client support inquiries are solved with an average response time under 8 minutes.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Priya Patel',
    role: 'Director of Automation & Systems Engineering',
    experience: 'Lead Integration Architect, specialist in REST APIs, enterprise data pipelines, and ERP systems.',
    bio: 'Priya leads our custom automation division, helping clients eliminate manual labor by connecting proprietary business software with modern cloud workflows.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Julian Hayes',
    role: 'Senior Cyber Risk & Compliance Strategist',
    experience: 'Certified Ethical Hacker (CEH), SOC2 & HIPAA compliance lead for mid-market firms.',
    bio: 'Julian designs multi-layered zero-trust perimeters, leads incident response exercises, and protects our clients against modern ransomware campaigns.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  }
];

export const CORE_VALUES: ValuePillar[] = [
  {
    title: 'Integrity & Radical Transparency',
    desc: 'We never hide behind confusing tech jargon or obscure billing models. We explain every recommendation in terms of practical business outcomes.',
    icon: 'CheckCircle'
  },
  {
    title: 'Proactive Resilience',
    desc: 'We prevent fires rather than rushing to extinguish them. Our systems proactively detect degradation before it impacts your end users.',
    icon: 'Shield'
  },
  {
    title: 'Speed with Precision',
    desc: 'When critical issues occur, minutes matter. Our average response time of under 8 minutes ensures your operations stay in motion.',
    icon: 'Zap'
  },
  {
    title: 'Tailored Business Alignment',
    desc: 'No cookie-cutter packages. Every cloud strategy and security architecture is engineered around your specific organizational workflows.',
    icon: 'Target'
  },
  {
    title: 'Continuous Security Evolution',
    desc: 'Cyber threats change every single week. We continuously update our security postures, firewall definitions, and employee training scripts.',
    icon: 'Lock'
  },
  {
    title: 'Ownership Mentality',
    desc: 'We treat your company data and network uptime with the same fierce protective dedication as if it were our very own business.',
    icon: 'HeartHandshake'
  }
];

export const FAQS = [
  {
    q: 'How fast can NexaCore onboard our company and take over IT management?',
    a: 'Our structured onboarding process typically takes between 5 to 10 business days. During this period, we silently audit network assets, install encrypted telemetry agents, and document your infrastructure with zero disruption to your daily operations.'
  },
  {
    q: 'Are your support technicians local or outsourced offshore?',
    a: '100% of our helpdesk engineers and systems architects are locally based in our Austin, Texas operations hub. When you call our desk, you speak with a certified tier-2 or tier-3 engineer immediately.'
  },
  {
    q: 'Do you require long-term restrictive multi-year lock-in contracts?',
    a: 'No. While we offer discounted annual commitments, our standard service retainers operate on flexible 12-month agreements with standard 30-day satisfaction exit terms. We believe in earning your business every month through service excellence.'
  },
  {
    q: 'Can you work alongside our existing internal IT team?',
    a: 'Yes, this is known as Co-Managed IT. We regularly partner with internal IT managers to handle off-hours monitoring, heavy cloud migrations, or specialized cybersecurity compliance tasks, allowing internal staff to focus on strategic company priorities.'
  }
];

export const ELEMENTOR_SPECS: ElementorSectionSpec[] = [
  {
    page: 'Global',
    sectionName: 'Theme Builder Header (Sticky)',
    containerStructure: 'Single Container (Row / Space Between / Align Center / Full Width with 1240px Boxed Inner Content)',
    widgets: ['Site Logo / Heading Widget (Link: Home)', 'Nav Menu Widget (Layout: Horizontal)', 'Button Widget (Primary CTA: Free Consultation)'],
    spacing: { paddingDesktop: '18px 24px', paddingMobile: '14px 16px', gap: '20px' },
    typography: 'Nav Items: Inter 15px Semi-Bold (Color: #334155, Hover: #2563EB)',
    colors: 'Background: rgba(255, 255, 255, 0.95), Border Bottom: #E2E8F0',
    responsiveNotes: 'Mobile: Hide Nav Menu & Desktop Button; show mobile Off-Canvas Menu Toggle with full-height slide-in drawer.',
    animation: 'Custom CSS sticky shrink transition with soft drop-shadow.'
  },
  {
    page: 'Home',
    sectionName: 'Hero Section with Dual CTAs',
    containerStructure: 'Parent Container (Row / Space Between / Min-Height: 680px). Child A (55% Width, Column), Child B (45% Width, Column)',
    widgets: ['Pill Badge (HTML / Text)', 'Heading (H1, 52px Plus Jakarta Sans)', 'Text Editor (Body 18px)', 'Child Container (Row of 2 Buttons: Primary & Secondary)', 'Right Container: Image / Interactive Metric Card'],
    spacing: { paddingDesktop: '80px 24px 60px', paddingMobile: '48px 16px 36px', gap: '32px' },
    typography: 'H1: 52px (Desktop) / 34px (Mobile), Line Height: 1.15, Weight: 800',
    colors: 'Primary Heading: #0F172A, Primary CTA: #2563EB, Secondary CTA: Transparent with #CBD5E1 Border',
    responsiveNotes: 'On tablet & mobile, containers switch direction to Column; Child A (content) renders first, followed by Child B.',
    animation: 'Fade In Up on Child A (Delay 150ms), Scale In on Child B (Delay 300ms).'
  },
  {
    page: 'Home',
    sectionName: 'Trust & Key Performance Metrics Bar',
    containerStructure: 'Boxed Container (Row / 4 Columns / Center Aligned), White Background with Elevation Shadow',
    widgets: ['4x Counter Widgets or Icon Box Widgets with custom CSS class "nc-stat-counter"'],
    spacing: { paddingDesktop: '36px 48px', paddingMobile: '24px 20px', gap: '24px' },
    typography: 'Stat Numbers: 42px Bold Plus Jakarta Sans (#0F172A), Labels: 14px Medium (#64748B)',
    colors: 'Card Background: #FFFFFF, Border: 1px solid #E2E8F0, Radius: 16px',
    responsiveNotes: 'Desktop: 4 columns in 1 row. Tablet: 2x2 grid. Mobile: 1 column stacked with 16px gap.',
    animation: 'Number count-up triggered upon scrolling into view via IntersectionObserver.'
  },
  {
    page: 'Home',
    sectionName: 'Core Services Overview (4 Pillars)',
    containerStructure: 'Parent Container (Column, Center Aligned). Sub-Container (Grid: 2 Columns on Desktop or 4 Columns Flex Wrap)',
    widgets: ['Section Subheading Pill', 'Section Heading (H2)', 'Section Lead Paragraph', '4x Custom Card Containers (Icon Box + Features + Button)'],
    spacing: { paddingDesktop: '90px 24px', paddingMobile: '50px 16px', gap: '30px' },
    typography: 'H2: 38px Bold (#0F172A), Service Titles: 20px Bold (#0F172A), Body: 15px (#475569)',
    colors: 'Card: #FFFFFF, Accent Icon Fills: #2563EB / #38BDF8, Hover Border: #2563EB',
    responsiveNotes: 'Cards stack neatly into 1 column on devices under 768px with full width tap targets.',
    animation: 'Elementor Entrance: Fade In Up with staggered 100ms intervals.'
  },
  {
    page: 'Home',
    sectionName: 'Why Choose Us (Comparison & Value Proposition)',
    containerStructure: '2-Column Container (50% / 50% Row Split on Desktop, Column on Mobile)',
    widgets: ['Left: Heading (H2) + 4x Icon List / Feature Boxes with checkmarks', 'Right: Styled Metric Card with SLA guarantee banner'],
    spacing: { paddingDesktop: '80px 24px', paddingMobile: '48px 16px', gap: '40px' },
    typography: 'Feature Titles: 18px Semi-Bold (#0F172A), Descriptions: 15px (#475569)',
    colors: 'Background: #F1F5F9, Icon Circles: rgba(37, 99, 235, 0.1)',
    responsiveNotes: 'Right visual card stacks below feature list on mobile.',
    animation: 'Left: Slide In Left; Right: Slide In Right.'
  },
  {
    page: 'Home',
    sectionName: 'Client Testimonials & Verified Case Studies',
    containerStructure: 'Parent Container with 3-Column Grid or Elementor Testimonial Carousel',
    widgets: ['3x Testimonial Card Containers with 5-star rating icons, blockquote text, author avatar, name & company'],
    spacing: { paddingDesktop: '90px 24px', paddingMobile: '50px 16px', gap: '28px' },
    typography: 'Quote: 16px Italic (#334155), Author: 16px Bold (#0F172A), Role: 13px (#64748B)',
    colors: 'Card Background: #FFFFFF, Star Icons: #F59E0B (Amber)',
    responsiveNotes: 'Desktop: 3 items in row; Mobile: single card carousel with swipe touch support.',
    animation: 'Fade In Up (Delay 200ms).'
  },
  {
    page: 'About',
    sectionName: 'Executive Team & Company Values',
    containerStructure: 'Grid Container: 4 Columns (Desktop) / 2 Columns (Tablet) / 1 Column (Mobile)',
    widgets: ['4x Team Member Cards (Photo with aspect ratio 1:1, Name H3, Role Subheading, Short Bio, LinkedIn Icon)'],
    spacing: { paddingDesktop: '80px 24px', paddingMobile: '48px 16px', gap: '28px' },
    typography: 'Name: 20px Bold, Role: 14px Medium (#2563EB), Bio: 14px (#64748B)',
    colors: 'Cards: #FFFFFF, Image Border Radius: 12px',
    responsiveNotes: 'Images auto-fit to 100% card width with subtle grayscale-to-color hover effect.',
    animation: 'Fade In with 80ms stagger.'
  },
  {
    page: 'Contact',
    sectionName: 'Interactive Contact Form & Business Directory',
    containerStructure: '2-Column Container (60% Form / 40% Directory Info). Direction: Row Desktop, Column Mobile',
    widgets: ['Elementor Pro Form Widget (Fields: Name, Email, Phone, Service Select, Scope Textarea)', 'Icon List Widget (Address, Phone, Email, Hours)', 'Google Maps Widget / Embed'],
    spacing: { paddingDesktop: '80px 24px', paddingMobile: '44px 16px', gap: '48px' },
    typography: 'Field Labels: 14px Semi-Bold (#334155), Inputs: 15px (#0F172A)',
    colors: 'Input Background: #FFFFFF, Input Border: #CBD5E1, Focus Border: #2563EB',
    responsiveNotes: 'On mobile, form inputs scale to 100% width; Directory info stacks neatly below with direct click-to-call links.',
    animation: 'Subtle Fade In.'
  }
];
