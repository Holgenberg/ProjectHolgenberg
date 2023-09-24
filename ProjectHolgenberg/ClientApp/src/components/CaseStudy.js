import React from 'react';
import Image from 'react-bootstrap/Image';
import './CaseStudy.css';

const CaseStudy = ({ caseStudyImage, title, brief}) => {
   
    return (
        <div>
            <div className="topRegionStyle" />
            <div className="caseStudyContainer">
                <div className="imageContainer">
                    <Image src={caseStudyImage} className="imageStyle" />
                </div>
                <div className="textContainer">
                    <h2>{title}</h2>
                    <p>{brief}</p>
                    <ul>
                        <li>Bullet point 1</li>
                        <li>Bullet point 2</li>
                        <li>Bullet point 3</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default CaseStudy;
