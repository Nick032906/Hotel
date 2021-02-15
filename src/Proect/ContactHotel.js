import React, {Component} from 'react';
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";

class ContactHotel extends Component {
    render() {
        return (
            <div>
                <main>
                    <section id='section5'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className='my-3'><span className='color-warning'>Contact</span> Us</h2>
                                    <h6 className='my-3'>Please fill out form below to contact us</h6>

                                    <div>

                                        <AvForm>

                                            <AvField className='border-dark rounded-0' name="Name" type="text"
                                                     label="Name"/>
                                            <AvField className='border-dark rounded-0' name="Email" type="email"
                                                     label="Email"/>
                                            <AvField className='border-dark rounded-0 p-3' name="Massage"
                                                     type="textarea" label="Massage"/>

                                                     <button type='submit' className='btn rounded-0 text-white mb-5'>Sumbit</button>
                                        </AvForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='section6'>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 hover p-4 py-5 text-center text-white">
                                    <span className='icon icon-location mb-2 bg-white'></span>
                                    <h5>Great Location</h5>
                                    <p className='mt-5'>50 Main st, Boston MA</p>
                                </div>
                                <div className="col-md-4 col-12 p-4 py-5 text-center text-white">
                                    <span className='icon icon-meals bg-white mb-2'></span>
                                    <h5>Free Meals</h5>
                                    <p className='mt-5'>50 Main st, Boston MA</p>
                                </div>
                                <div className="col-md-4 hover p-4 py-5 text-center text-white">
                                    <span className='icon icon-room bg-white mb-2'></span>
                                    <h5>Fitness Room</h5>
                                    <p className='mt-5'>50 Main st, Boston MA</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default ContactHotel;