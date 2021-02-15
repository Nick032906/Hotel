import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import NavbarHotel from "./NavbarHotel";
import HomeHotel from "./HomeHotel";
import Footer from "./Footer";

class AboutHotel extends Component {
    render() {
        return (
            <div>
                <main>
                    <section id='section3'>
                        <div className="container">
                            <div className="row py-4">
                                <div className="col-md-6">
                                    <h2 className='m-0 p-0 my-3'><span className='color-warning'>About</span> Hotel BT
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa
                                        dignissimos, harum, impedit, libero minus modi nisi quos recusandae
                                        reprehenderit sequi sit vitae. Assumenda consequuntur doloremque mollitia
                                        obcaecati pariatur rem saepe voluptatem! Nam, placeat suscipit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur
                                        commodi consequuntur cupiditate ea est eum exercitationem fugiat impedit
                                        laborum, maiores nostrum odio, qui sint.</p>
                                </div>
                                <div className="col-md-4 offset-1 rounded-circle">

                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='section4'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center mt-5">
                                    <h2 className='text-white'>What our Guests</h2>
                                </div>
                                <div className="col-12 mt-4 col12 d-flex align-items-center justify-content-between py-3 px-4">
                                    <div className="rounded-circle circle bg-dark w-25">
                                        <img src="images4/2.jpg" className='w-100' alt=""/>
                                    </div>
                                    <div>
                                        <div className="text-white w-100 ml-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis
                                            cupiditate dolorem nulla omnis reprehenderit sunt vel vero voluptatibus!
                                            Asperiores culpa dolorem eius fugit in natus quaerat tempore ut
                                            voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Architecto debitis dicta ex expedita fugiat hic impedit ipsam nam provident
                                            qui.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4 mb-6 col12 d-flex align-items-center justify-content-between py-3 px-4">
                                    <div className="rounded-circle circle bg-dark w-25">
                                        <img src="images4/1.jpg" className='w-100' alt=""/>
                                    </div>
                                    <div>
                                        <div className="text-white w-100 ml-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis
                                            cupiditate dolorem nulla omnis reprehenderit sunt vel vero voluptatibus!
                                            Asperiores culpa dolorem eius fugit in natus quaerat tempore ut
                                            voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Architecto debitis dicta ex expedita fugiat hic impedit ipsam nam provident
                                            qui.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default AboutHotel;
