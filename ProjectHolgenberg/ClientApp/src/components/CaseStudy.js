import React from 'react';
import Image from 'react-bootstrap/Image'

const CaseStudy = ({ row, column, caseStudyImage }) => {
    
    return (
        <div className="case-study grid-item">
            <Image src={caseStudyImage} />
        </div>
    );
};

export default CaseStudy;
