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

const projectsList: Project[] = [
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

interface PolaroidCard {
  id: string;
  image: string;
  label: string;
}

const polaroidCards: PolaroidCard[] = [
  {
    id: 'proj-1',
    image: digitalImg,
    label: 'digital experience',
  },
  {
    id: 'proj-7',
    image: brandImg,
    label: 'campaign design',
  },
  {
    id: 'proj-6',
    image: curiosityImg,
    label: 'brand identity',
  },
  {
    id: 'proj-8',
    image: campaignImg,
    label: 'interface design',
  },
];

interface SelectedCreationsProps {
  variant?: 'home' | 'work';
  onProjectSelect?: (projectId: string) => void;
}

export const SelectedCreations: React.FC<SelectedCreationsProps> = ({ 
  variant = 'work', 
  onProjectSelect 
}) => {
  if (variant === 'home') {
    return (
      <section id="work" className="creations-section creations-home-variant">
        <div className="creations-container">
          
          <div className="creations-header-center">
            <h2 className="creations-title-main">SELECTED CREATIONS</h2>
            <p className="creations-subtitle-lowercase">
              a collection of products, brands, and visual experiences I've crafted over the years.
            </p>
          </div>

          <div className="polaroids-wrapper">
            {polaroidCards.map((card, index) => {
              const positionClass = index % 2 === 0 ? 'offset-down' : 'offset-up';
              return (
                <div 
                  key={card.id} 
                  className={`polaroid-card ${positionClass}`}
                  onClick={() => onProjectSelect?.(card.id)}
                >
                  {index === 0 && (
                    <div className="torn-paper-accent"></div>
                  )}
                  
                  {index === 2 && (
                    <div className="toast-sticker-overlay">🥪</div>
                  )}

                  <div className="polaroid-image-container">
                    <img 
                      src={card.image} 
                      alt={card.label} 
                      className="polaroid-image" 
                    />
                  </div>
                  
                  <div className="polaroid-caption">
                    {card.label}
                  </div>
                </div>
              );
            })}

            <div className="pixel-j-sticker">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <circle cx="50" cy="50" r="44" fill="#ff5500" />
                <path 
                  d="M 40,32 H 68 V 40 H 60 V 64 H 44 V 56 H 52 V 40 H 40 Z" 
                  fill="#000000" 
                />
              </svg>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // Work page variant (3x3 grid)
  return (
    <section id="work" className="creations-section creations-work-variant">
      <div className="creations-container">
        
        <div className="creations-header-center">
          <h2 className="creations-title-main">SELECTED CREATIONS</h2>
          <p className="creations-subtitle-lowercase">
            a collection of products, brands, and visual experiences I've crafted over the years.
          </p>
        </div>

        <div className="creations-grid">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className={`creation-grid-item ${project.highlighted ? 'highlighted' : ''}`}
              onClick={() => onProjectSelect?.(project.id)}
              style={{ cursor: 'pointer' }}
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
