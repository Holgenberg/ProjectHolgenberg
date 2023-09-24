import React from 'react';
import Image from 'react-bootstrap/Image';
import './CaseStudy.css';

const CaseStudy = ({ caseStudyImage }) => {
   
    return (
        <div>
            <div className="topRegionStyle" />
            <div className="caseStudyStyle">
                <Image src={caseStudyImage} className="imageStyle" />
            </div>
        </div>
    );
};

export default CaseStudy;
