import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../shared/SideBar/SideBar'

const OrderList = () => {
    const [loggedInUser] = useContext(UserContext)
    const { photoURL} = loggedInUser
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://limitless-castle-39279.herokuapp.com/getOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [loggedInUser.email ])
    return (
        <div className="row" >
            <SideBar />
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between">
                    <h5>OrderList</h5>
                    <img className="sign-in-image" src={photoURL} alt="" />
                </div>
                <table className="table table-borderless">
                    <thead>
                        <tr className="text-center">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Destination</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(data => <tr className="text-center">
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.destination}</td>
                                <td>{data.payment.card.brand} {data.payment.type}</td>
                                <td>
                                    <select >
                                        <option className="bg-warning text-secondary">Pending</option>
                                        <option className="bg-success text-secondary">Approved</option>
                                        <option className="bg-danger text-secondary">Rejected</option>
                                    </select>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>



            </div>
        </div>
    );
};

export default OrderList;