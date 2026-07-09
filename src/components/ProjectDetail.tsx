import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Briefcase, Wrench, ExternalLink } from 'lucide-react';
import './ProjectDetail.css';

// Import images
import digitalImg from '../assets/digital.png';
import journeysImg from '../assets/journeys.png';
import photographyImg from '../assets/photography.png';
import portraitsImg from '../assets/portraits.png';
import natureImg from '../assets/nature.png';
import curiosityImg from '../assets/curiosity.png';
import brandImg from '../assets/brand.png';
import campaignImg from '../assets/campaign.png';
import interfaceImg from '../assets/interface.png';

export interface ProjectDetailData {
  id: string;
  projectNumber: string;
  category: string;
  image: string;
  title: string;
  role: string;
  timeline: string;
  tools: string[];
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  link?: string;
}

export const projectDetailsMap: Record<string, Omit<ProjectDetailData, 'id' | 'projectNumber' | 'category' | 'image' | 'title'>> = {
  'proj-1': {
    role: 'Lead Product Designer',
    timeline: '3 Months (2025)',
    tools: ['Figma', 'React', 'Framer Motion', 'Lottie'],
    description: 'A experimental layout and micro-interaction study for Klarna, focusing on promoting slow and conscious shopping habits with premium UX.',
    challenge: 'E-commerce conversion rates are typically optimized for impulsive buying behavior. Designing an interface that intentionally slows the user down while keeping the experience delightful and satisfying was the core conflict.',
    approach: 'We introduced smooth physics-based gesture controls, minimalist layouts with large aesthetic cards, and animated checkout thresholds that prompt the user to reflect on their purchases. High-contrast typography and subtle glassmorphic styling create a luxury catalog feel.',
    outcome: 'Resulted in a 35% increase in user retention score and high engagement on educational interactive tips, proving that conscious shopping can be gamified and made visually premium.',
    link: 'https://klarna.com'
  },
  'proj-2': {
    role: 'Visual & UX Designer',
    timeline: '2 Months (2025)',
    tools: ['Photoshop', 'Vite', 'Three.js', 'CSS Grid'],
    description: 'A breathtaking scenery website exploring interactive landscapes, nature tourism routes, and immersive travel diaries.',
    challenge: 'Standard travel platforms present destinations in rigid grid structures. We wanted to design a digital space that evokes the wanderlust and emotional serenity of nature itself.',
    approach: 'We designed a continuous canvas layout integrated with Three.js webgl effects, allowing users to scroll horizontally and drag through immersive panoramic viewpoints. Curated pastel backgrounds shift dynamically to represent time of day.',
    outcome: 'Voted Site of the Day on multiple CSS inspiration sites, attracting over 50,000 unique visitors in the launch week with average session durations exceeding 4 minutes.',
    link: 'https://journeys-scenery.web.app'
  },
  'proj-3': {
    role: 'Creative Director',
    timeline: '4 Months (2025)',
    tools: ['iOS Camera', 'Lightroom Mobile', 'Figma', 'Next.js'],
    description: 'An interactive showcase demonstrating the capability of professional photography shot entirely on mobile devices with curated galleries and settings.',
    challenge: 'Overcoming the stigma that mobile photography is inferior to DSLR/Mirrorless cameras by building a detailed visual breakdown of shot metrics (aperture, ISO, speed) in real time.',
    approach: 'Designed a dark-room style interface with deep blacks, stark white borders, and custom slider cards. Users can toggle camera settings overlays to see how each photograph was captured and graded.',
    outcome: 'Successfully launched as a community-driven digital gallery, inspiring thousands of amateur photographers to capture professional-grade art using only their smartphone.',
    link: 'https://iphone-photography.net'
  },
  'proj-4': {
    role: 'Lead UI/UX Engineer',
    timeline: '5 Months (2025)',
    tools: ['React', 'TypeScript', 'TailwindCSS', 'Recharts'],
    description: 'A comprehensive, high-security dashboard for administration review teams to monitor, tag, and approve community-submitted visual media.',
    challenge: 'Moderators face screen fatigue and information overload. The UI needed to facilitate rapid decision making without sacrificing security or verification accuracy.',
    approach: 'Created an ultra-ergonomic workspace with customizable grid split panels, dark-room image inspection lenses, customizable hotkey layouts, and integrated AI recommendation tags.',
    outcome: 'Moderator workflow throughput improved by 42% while reducing verification error rates by half, enhancing overall team satisfaction scores.',
  },
  'proj-5': {
    role: 'Interaction Designer',
    timeline: '3 Months (2025)',
    tools: ['Three.js', 'WebGL', 'React Three Fiber', 'GSAP'],
    description: 'A highly interactive global visualization representing live user traffic nodes, city connectivity, and system health status.',
    challenge: 'Presenting large geospatial data feeds in a way that feels organic, responsive, and visually mesmerizing rather than standard table lists.',
    approach: 'Developed an interactive SVG and WebGL globe that dynamically rotates. Custom shaders draw smooth glowing arches between active cities, responding with subtle ripples when hovered.',
    outcome: 'Adopted as the primary lobby screen visualization for our enterprise headquarters, providing visitors with a live, stunning window into global operations.',
  },
  'proj-6': {
    role: 'Brand Specialist & Illustrator',
    timeline: '2 Months (2026)',
    tools: ['Adobe Illustrator', 'Procreate', 'Figma', 'CSS Animations'],
    description: 'Complete brand identity, packaging design, and visual styling for Bella Bielle, an organic raw honey craft studio.',
    challenge: 'Carving out a premium, artisanal shelf presence in a saturated honey market, conveying both pure organic freshness and luxurious craftsmanship.',
    approach: 'Created a hand-drawn emblem depicting the golden queen bee, paired with a custom warm honey-yellow color scheme. Design mockups include textured paper labels and custom-shaped glass jars.',
    outcome: 'Helped Bella Bielle raise 150% of their crowdfunding goal, establishing their presence across 20+ boutique organic markets nationwide.',
  },
  'proj-7': {
    role: 'Graphic Designer',
    timeline: '1 Month (2026)',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    description: 'A vibrant, spicy street poster advertising campaign featuring custom typography and sensory-focused layout arrangements.',
    challenge: 'Creating a high-impact poster concept that grabs attention immediately in busy urban corridors using visual texture and bold typography.',
    approach: 'Used high-contrast saturation, textured poster overlays, and custom typography to highlight raw culinary ingredients. The layouts simulate physical paper wrinkles for a tactile look.',
    outcome: 'Distributed across downtown retail locations, generating high social media traction and drive-to-store campaign participation.',
  },
  'proj-8': {
    role: 'Mobile UI Designer',
    timeline: '2 Months (2026)',
    tools: ['Figma', 'Framer', 'Illustrator'],
    description: 'A neon-infused lime green mobile UI dashboard empowering the next generation of creative entrepreneurs with capital trackers.',
    challenge: 'Financial apps are often seen as sterile. The challenge was to deliver complex funding metrics with an energetic, visual design language that inspires confidence.',
    approach: 'Adopted a vibrant lime green accent color against a dark graphite canvas, utilizing bold typography hierarchy, pill-shaped action buttons, and oversized cards.',
    outcome: 'Increased client app onboarding completion rate by 28% and received feature coverage in top mobile UI galleries.',
  },
  'proj-9': {
    role: 'Visual Designer',
    timeline: '1.5 Months (2026)',
    tools: ['Figma', 'CSS Canvas', 'React Spring'],
    description: 'An elegant interactive carousel component built to showcase academic opportunities and student university selections.',
    challenge: 'Designing a card carousel that handles multiple media sizes and types while maintaining smooth frame rates and intuitive gestures.',
    approach: 'Implemented swipe gestures, visual depth layers, and custom spring physics so cards resize smoothly as they cycle into the center focus.',
    outcome: 'Deployed as the primary landing page widget for a major educational platform, increasing clicks to detail pages by 50%.',
  }
};

const projectsList = [
  { id: 'proj-1', projectNumber: 'PROJECT 01', category: 'PRODUCT DESIGN', image: digitalImg, title: 'Take it slow - Klarna Layout' },
  { id: 'proj-2', projectNumber: 'PROJECT 02', category: 'PRODUCT DESIGN', image: journeysImg, title: 'Journeys Scenery Webpage' },
  { id: 'proj-3', projectNumber: 'PROJECT 03', category: 'PRODUCT DESIGN', image: photographyImg, title: 'iPhone Photography Showcase' },
  { id: 'proj-4', projectNumber: 'PROJECT 04', category: 'UI DESIGN', image: portraitsImg, title: 'Admin Content Reviewer Dashboard' },
  { id: 'proj-5', projectNumber: 'PROJECT 05', category: 'UI DESIGN', image: natureImg, title: 'Interactive Globe and City Nodes' },
  { id: 'proj-6', projectNumber: 'PROJECT 06', category: 'BRANDING', image: curiosityImg, title: 'Bella Bielle Raw Honey Branding' },
  { id: 'proj-7', projectNumber: 'PROJECT 07', category: 'BRANDING', image: brandImg, title: 'Spicy Posters on Wall Mockup' },
  { id: 'proj-8', projectNumber: 'PROJECT 08', category: 'BRANDING', image: campaignImg, title: 'Entrepreneurs Lime Green Phone UI' },
  { id: 'proj-9', projectNumber: 'PROJECT 09', category: 'BRANDING', image: interfaceImg, title: 'Mobile App Mockup Carousel' }
];

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const baseProject = projectsList.find(p => p.id === projectId);
  const detailedInfo = projectDetailsMap[projectId] || {
    role: 'Visual Designer',
    timeline: '2026',
    tools: ['Figma', 'Photoshop'],
    description: 'Creative visual solution focusing on modern interfaces and layouts.',
    challenge: 'Defining a cohesive visual design standard to elevate the digital presence of the brand.',
    approach: 'Conducted user research, designed detailed prototypes, and iterated on client feedback to deliver high fidelity components.',
    outcome: 'Successfully established design systems that streamlined visual consistency across all touchpoints.'
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [projectId]);

  if (!baseProject) {
    return (
      <div className="project-detail-error">
        <h2>Project not found</h2>
        <button onClick={onBack} className="back-btn-simple">
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  const project: ProjectDetailData = {
    ...baseProject,
    ...detailedInfo
  };

  return (
    <article className="project-detail-view">
      {/* Top Banner and Navigation */}
      <div className="project-detail-header-bar">
        <button onClick={onBack} className="back-button">
          <ArrowLeft size={18} />
          <span>BACK TO CREATIONS</span>
        </button>
        <span className="project-serial">{project.projectNumber}</span>
      </div>

      <div className="project-detail-container">
        {/* Title and Category */}
        <header className="project-detail-title-section">
          <span className="project-tag">{project.category}</span>
          <h1 className="project-title-heading">{project.title}</h1>
        </header>

        {/* Hero Image Section */}
        <div className="project-hero-image-container">
          <img src={project.image} alt={project.title} className="project-hero-image" />
        </div>

        {/* Project Meta Info Panel */}
        <div className="project-detail-grid">
          <div className="project-sidebar-meta">
            <div className="meta-card">
              <div className="meta-card-item">
                <Briefcase size={18} className="meta-icon" />
                <div>
                  <h4>ROLE</h4>
                  <p>{project.role}</p>
                </div>
              </div>
              <div className="meta-card-item">
                <Calendar size={18} className="meta-icon" />
                <div>
                  <h4>TIMELINE</h4>
                  <p>{project.timeline}</p>
                </div>
              </div>
              <div className="meta-card-item">
                <Wrench size={18} className="meta-icon" />
                <div>
                  <h4>TOOLS</h4>
                  <div className="tools-tags">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="tool-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-visit-link">
                  <span>Visit Website</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Project Detailed Text Content */}
          <div className="project-main-content">
            <section className="content-block">
              <h3>OVERVIEW</h3>
              <p className="description-lead">{project.description}</p>
            </section>

            <section className="content-block">
              <h3>THE CHALLENGE</h3>
              <p>{project.challenge}</p>
            </section>

            <section className="content-block">
              <h3>OUR APPROACH</h3>
              <p>{project.approach}</p>
            </section>

            <section className="content-block">
              <h3>THE OUTCOME</h3>
              <p>{project.outcome}</p>
            </section>
          </div>
        </div>

        {/* Bottom Nav / Next Project */}
        <footer className="project-detail-footer">
          <button onClick={onBack} className="footer-back-button">
            <ArrowLeft size={16} />
            <span>Back to creations grid</span>
          </button>
        </footer>
      </div>
    </article>
  );
};
