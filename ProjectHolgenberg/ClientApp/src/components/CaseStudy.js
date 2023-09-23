import React from 'react';
import Image from 'react-bootstrap/Image';

const CaseStudy = ({ caseStudyImage }) => {
    const topRegionStyle = {
        height: '5vh', // Adjust this value for the desired height of the top region
        backgroundColor: 'transparent', // No background color for the top region
    };

    const caseStudyStyle = {
        height: '37.5vh', // Each case study item occupies 50% of the viewport height
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black with 80% opacity for the case study item
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
    };

    return (
        <div>
            <div style={topRegionStyle}></div> {/* Top region */}
            <div style={caseStudyStyle}>
                <Image src={caseStudyImage} style={imageStyle} />
            </div>
        </div>
    );
};

export default CaseStudy;
