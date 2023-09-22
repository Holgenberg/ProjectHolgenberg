import React, { Component } from 'react'
import './SocialFollow.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faGithub,
    faLinkedin,
    faFacebook
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div className="Social-follow-content">
            <a
                href="https://www.instagram.com/alexeiholgate1/"
                className="instagram social social-link"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
            </a>
            <a
                href="https://uk.linkedin.com/in/alexei-holgate-588a27b2"
                className="linkedin social social-link"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="green" />
            </a>
            <a
                href="https://github.com/Holgenberg"
                className="github social social-link"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" color="blue" />
            </a>
            <a
                href="https://en-gb.facebook.com/alexei.holgate"
                className="facebook social social-link"
            >
                <FontAwesomeIcon icon={faFacebook} size="2x" color="yellow" />
            </a>
        </div>
    );
}