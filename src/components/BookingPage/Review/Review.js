import React from 'react';
import SideBar from '../SideBar/SideBar';

const Review = () => {
    return (
        <div className="row" >
        <SideBar/>
        <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
           <div className="d-flex justify-content-around">
               <h5>review</h5>
               <h5>Email</h5>
           </div>
        </div>
    </div>
    );
};

export default Review;