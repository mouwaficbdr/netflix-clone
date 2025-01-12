/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './styles/carousel.css'; // Ajoute les styles CSS externes

export default function Carousel({
  items,
  renderCard,
  containerClass = '',
  itemClass = '',
}) {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = carousel.offsetWidth; // Définit la largeur visible comme distance à scroller
      const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

      if (direction === 'left') {
        carousel.scrollBy({
          left: Math.max(-scrollAmount, -carousel.scrollLeft),
          behavior: 'smooth',
        });
      } else if (direction === 'right') {
        carousel.scrollBy({
          left: Math.min(scrollAmount, maxScrollLeft - carousel.scrollLeft),
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className={`carousel ${containerClass}`}>
      {/* Bouton gauche */}
      <button
        className="carousel-button left"
        onClick={() => handleScroll('left')}
        aria-label="Scroll Left"
      >
        <img src="/images/icons/chevron-card-left.png" alt="Left arrow" />
      </button>

      {/* Conteneur des items */}
      <div className="carousel-container" ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${itemClass}`}>
            {renderCard(item)} {/* Rendu personnalisé des items */}
          </div>
        ))}
      </div>

      {/* Bouton droit */}
      <button
        className="carousel-button right"
        onClick={() => handleScroll('right')}
        aria-label="Scroll Right"
      >
        <img src="/images/icons/chevron-card-right.png" alt="Right arrow" />
      </button>
    </div>
  );
}
