import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faThList,faComment} from '@fortawesome/free-solid-svg-icons';
import {  Link } from "react-router-dom";
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/booking/book" className="text-white">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>book</span> 
                </Link>
            </li>
            <li>
                <Link to="/booking/bookinglist" className="text-white">
                    <FontAwesomeIcon icon={faThList} /> <span>bookinglist</span> 
                </Link>
            </li>
            <li>
                <Link to="/booking/review" className="text-white">
                    <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                </Link>
            </li>  
        </ul>
       
    </div>
    );
};

export default SideBar;