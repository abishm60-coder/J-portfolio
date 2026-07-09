import React, { useEffect } from 'react';
import './PlaygroundDetail.css';

// 30 Curated high-fidelity design & art mockups from Unsplash to match the mockup grid
const playgroundImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", // Abstract 3D
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400&auto=format&fit=crop", // Colorful abstract
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", // Nature landscape
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop", // Art paint
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop", // Pastel gradient
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", // Black white typography
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop", // Architecture
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop", // Web design mockup
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop", // UX UI wireframe
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop", // Geometric art
  "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?q=80&w=400&auto=format&fit=crop", // Glassmorphism shape
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=400&auto=format&fit=crop", // Design sketching
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=400&auto=format&fit=crop", // Poster design
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop", // Creative app screen
  "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=400&auto=format&fit=crop", // Office analytics board
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=400&auto=format&fit=crop", // Fashion mockup
  "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=400&auto=format&fit=crop", // Minimal brochure mockup
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop", // 3D printed model
  "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=400&auto=format&fit=crop", // Branding business card
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop", // Typography layout
  "https://images.unsplash.com/photo-1634973357973-f2ed255753e1?q=80&w=400&auto=format&fit=crop", // 3D metal shape
  "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=400&auto=format&fit=crop", // Studio workspace
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=400&auto=format&fit=crop", // Iconography
  "https://images.unsplash.com/photo-1541462608141-2ff586cc1422?q=80&w=400&auto=format&fit=crop", // Graphic layout editor
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400&auto=format&fit=crop", // Abstract frame
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop", // Watercolor textures
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", // 3D design shape
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop", // Digital experience nodes
  "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=400&auto=format&fit=crop", // 3D colorful torus
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop"  // Mobile UI screens
];

export const PlaygroundDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="playground-detail-page">
      <div className="playground-detail-container">
        
        <div className="playground-detail-header">
          <h1 className="playground-detail-title">CREATIVE PLAYGROUND</h1>
          <p className="playground-detail-subtitle">
            a visual archive of design experiments, daily renders, and raw ideas.
          </p>
        </div>

        {/* 6-Column Responsive Grid */}
        <div className="playground-matrix-grid">
          {playgroundImages.map((src, index) => (
            <div key={index} className="playground-matrix-item">
              <img 
                src={src} 
                alt={`Playground experiment ${index + 1}`} 
                className="playground-matrix-image" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
