import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faPlus,faComment} from '@fortawesome/free-solid-svg-icons';
import {  Link } from "react-router-dom";
import './AdminSideBar.css'

const AdminSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
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

export default AdminSideBar;