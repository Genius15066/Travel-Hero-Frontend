import React from 'react';
import SideBar from '../SideBar/SideBar';
import Payment from '../Payment/Payment';

const Booking = () => {
    return (
        <div className="row" >
            <SideBar />
            <div className="col-md-10 p-4 mt-3" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between mb-5">
                    <h5 className="mx-3" >Book</h5>
                    <h5 className="mx-5">Email</h5>
                </div>

                <div className="col-md-6">
                 <Payment/>
                </div>

            </div>
        </div>
    );
};

export default Booking;