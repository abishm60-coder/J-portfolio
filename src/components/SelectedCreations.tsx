import React from 'react';
import './SelectedCreations.css';

// Import the project images
import digitalImg from '../assets/digital.png';
import journeysImg from '../assets/journeys.png';
import photographyImg from '../assets/photography.png';
import portraitsImg from '../assets/portraits.png';
import natureImg from '../assets/nature.png';
import curiosityImg from '../assets/curiosity.png';
import brandImg from '../assets/brand.png';
import campaignImg from '../assets/campaign.png';
import interfaceImg from '../assets/interface.png';

interface Project {
  id: string;
  projectNumber: string;
  category: string;
  image: string;
  title: string;
  highlighted?: boolean;
}

const projects: Project[] = [
  {
    id: 'proj-1',
    projectNumber: 'PROJECT 01',
    category: 'PRODUCT DESIGN',
    image: digitalImg,
    title: 'Take it slow - Klarna Layout',
    highlighted: true,
  },
  {
    id: 'proj-2',
    projectNumber: 'PROJECT 02',
    category: 'PRODUCT DESIGN',
    image: journeysImg,
    title: 'Journeys Scenery Webpage',
  },
  {
    id: 'proj-3',
    projectNumber: 'PROJECT 03',
    category: 'PRODUCT DESIGN',
    image: photographyImg,
    title: 'iPhone Photography Showcase',
  },
  {
    id: 'proj-4',
    projectNumber: 'PROJECT 04',
    category: 'UI DESIGN',
    image: portraitsImg,
    title: 'Admin Content Reviewer Dashboard',
  },
  {
    id: 'proj-5',
    projectNumber: 'PROJECT 05',
    category: 'UI DESIGN',
    image: natureImg,
    title: 'Interactive Globe and City Nodes',
  },
  {
    id: 'proj-6',
    projectNumber: 'PROJECT 06',
    category: 'BRANDING',
    image: curiosityImg,
    title: 'Bella Bielle Raw Honey Branding',
  },
  {
    id: 'proj-7',
    projectNumber: 'PROJECT 06',
    category: 'BRANDING',
    image: brandImg,
    title: 'Spicy Posters on Wall Mockup',
  },
  {
    id: 'proj-8',
    projectNumber: 'PROJECT 06',
    category: 'BRANDING',
    image: campaignImg,
    title: 'Entrepreneurs Lime Green Phone UI',
  },
  {
    id: 'proj-9',
    projectNumber: 'PROJECT 06',
    category: 'BRANDING',
    image: interfaceImg,
    title: 'Mobile App Mockup Carousel',
  },
];

export const SelectedCreations: React.FC = () => {
  return (
    <section id="work" className="creations-section">
      <div className="creations-container">
        
        <div className="creations-header-center">
          <h2 className="creations-title-main">SELECTED CREATIONS</h2>
          <p className="creations-subtitle-handwriting">
            a collection of products, brands, and visual experiences I've crafted over the years
          </p>
        </div>

        <div className="creations-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`creation-grid-item ${project.highlighted ? 'highlighted' : ''}`}
            >
              <div className="creation-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="creation-image" 
                />
              </div>
              <div className="creation-meta">
                <span className="meta-number">{project.projectNumber}</span>
                <span className="meta-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
