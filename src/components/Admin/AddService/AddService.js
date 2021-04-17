import React from 'react';
import { Col, Form } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddService.css'

const AddService = () => {
    return (
        <div className="row" >
            <AdminSideBar />
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between">
                    <h5>Add Service</h5>
                    <h5>Email</h5>
                </div>
                <div>
                    <Form className='product-input'>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter title" />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Cost</Form.Label>
                                <Form.Control name="cost" type="text" placeholder="Enter Cost" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="number" name="duration" placeholder="duration" />
                            </Form.Group>

                            <Form.Group as={Col} className="mt-1 mx-3">
                                <Form.File id="exampleFormControlFile1" label="Add Photo" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="price" placeholder="Write Something" />
                            </Form.Group>
                        </Form.Row>

                        <div className=" d-flex justify-content-end">
                            <button className="btn btn-success " type="submit">
                                Save
                             </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddService;