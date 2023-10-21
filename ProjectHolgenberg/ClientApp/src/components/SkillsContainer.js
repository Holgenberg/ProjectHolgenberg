import React from 'react';
import './SkillsContainer.css';

const SkillsContainer = ({ title, skills }) => {

    return (
        <div>
            <div className="topRegionStyle" />
            <div className="skillsContainer">
                <div className="textContainer">
                    <h2>{title}</h2>
                    <ul className="centered-bullets">
                        {skills.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SkillsContainer;