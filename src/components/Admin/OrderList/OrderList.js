import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const OrderList = () => {
    return (
        <div className="row" >
            <AdminSideBar/>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between">
                    <h5>OrderList</h5>
                    <h5>Email</h5>
                </div>
            </div>
        </div>
    );
};

export default OrderList;