import React from 'react';
import img from '../../../../images/callum.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './TeamMemberCard.css'
const TeamMemberCard = () => {
    return (
        <div className="col-md-4 text-center">
        <img className="img-fluid mb-3 img-member"  src={img} alt=""/>
        <h4 className="text-warning">Abidal</h4>
        <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>01722233344</p>
    </div>
    );
};

export default TeamMemberCard;