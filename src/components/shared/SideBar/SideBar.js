import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faThList,faComment,faPlus} from '@fortawesome/free-solid-svg-icons';
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

              <li>
                <Link to="/admin/orderlist" className="text-white">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order List</span> 
                </Link>
            </li>
            <li>
                <Link to="/admin/addService" className="text-white">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                </Link>
            </li>
            <li>
                <Link to="/admin/makeAdmin" className="text-white">
                    <FontAwesomeIcon icon={faComment} /> <span>Make Admin</span>
                </Link>
            </li> 
            <li>
                <Link to="/admin/manage" className="text-white">
                    <FontAwesomeIcon icon={faComment} /> <span>Manage Service</span>
                </Link>
            </li>  
        </ul>
       
    </div>
    );
};

export default SideBar;