import React from 'react';
import image1 from '../Assets/web-g51b93b658_1920.jpg';
import image2 from '../Assets/towfiqu-barbhuiya-FnA5pAzqhMM-unsplash.jpg';
import image3 from '../Assets/wolfgang-hasselmann-bR_-gllg7Bs-unsplash.jpg';
import image4 from '../Assets/food-photographer-jennifer-pallian-8pUjhBm4cLw-unsplash.jpg';
import image5 from '../Assets/alvan-nee-1VgfQdCuX-4-unsplash.jpg';
import '../styles/style.css'; // Import your style.css file

const Work = () => {
    const images = [image1, image2, image3, image4, image5];
    const imageLinks = [
        'https://eanthonycarranza.github.io/Challenge01/',
        'https://eanthonycarranza.github.io/Challenge03/',
        'https://eanthonycarranza.github.io/Weather-Dashboard/',
        'https://joshua-rowan.github.io/ingredient-recipe-fetcher/',
        'https://companion-connect-2872c986be71.herokuapp.com/dashboard'
    ];

    const descriptions = [
        'Accessibility',
        'Password Generator',
        'Weather application',
        'Recipe Maker',
        'Companion Connect'
    ];

    return (
        <section id="work"> 
        <div className="work-container">
            {images.map((image, index) => (
                <div key={index} className="card custom-card">
                    <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={descriptions[index]} className="card-image"/>
                    </a>
                    <div className="card-description">
                        {descriptions[index]}
                    </div>
                </div>
            ))}
        </div>
        </section> 
    );    
};

export default Work;