import React from 'react';
import profilePic from '../Assets/IMG_0007.jpeg';
import bgImage from '../Assets/dale-honeycutt-Vqco2uwrXq8-unsplash.jpg';

function About() {
    return (
        <section id="about" className="mt-5"> {/* Add margin-top to create space */}
            <div className="about-content d-flex flex-column align-items-center"> {/* Flex column for vertical stacking, center items */}
                <div className="about-img">
                    <img src={bgImage} alt="Background" className="background-image" />
                    <img src={profilePic} alt="Eduardo Carranza" className="profile-pic" />
                </div>
                <div className="card mt-4 card mx-auto rounded-lg about-card">
                    <div className="card-body">
                        <h1 className="card-title">About Me</h1>
                        <p className="card-text about-description">
                            Hello! My name is <strong>Eduardo Carranza</strong> and I'm born and raised in San Antonio, TX.
                            I've always had an interest in computer programming from a younger age to now!
                            I've worked primarily for four years in a family business that focuses on residential home restoration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
