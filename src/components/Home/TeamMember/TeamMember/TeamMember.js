import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';


const TeamMember = () => {
    return (
        <section >
        <div className="container">
            <h4 className="text-center  text-primary mb-5">Our Members</h4>
            <div className="row">
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
            </div>
        </div>
    </section>
    );
};

export default TeamMember;