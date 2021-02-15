import React, {Component} from 'react';

class HomeHotel extends Component {
    render() {
        return (
            <div>
                <header id='header1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className='text-white f-size-60'><span className='color-warning'>Enjoy</span> Your
                                    Stay</h1>
                                <p className='text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ab accusantium aperiam
                                    dolore ea earum et impedit laudantium, magni ratione sed tempore voluptatibus! Autem
                                    error eum labore nesciunt praesentium reiciendis ullam.</p>
                                <button type='button' className='btn py-2 px-3'>About us</button>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section id='section1'>
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 col-12">

                                </div>
                                <div className="col-md-6 text-center pb-5">
                                    <h2 className='text-white mt-3 mt-sm-5'><span
                                        className='color-warning'>The History</span> Of our hotel</h2>
                                    <p className='text-white mt-sm-5 mt-3'>Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ab animi asperiores
                                        atque autem delectus deserunt dolore dolores doloribus ea esse ex excepturi
                                        facilis fugiat fugit hic illo in ipsum iure magnam maiores obcaecati pariatur,
                                        placeat quam quas quisquam quod, rerum sed tempore velit voluptas? Aperiam
                                        dolor, ipsam. Aliquam, maiores, odio.</p>
                                    <button type='button' className='btn py-2 px-3'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='section2'>
                        <div className="row">
                            <div className="col-md-4 hover p-4 py-5 text-center bg-white">
                                <span className='icon icon-location'></span>
                                <h5>Great Location</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at blanditiis
                                    libero magnam. Adipisci asperiores expedita impedit nesciunt quibusdam!</p>
                            </div>
                            <div className="col-md-4 col-12 p-4 py-5 text-center bg-warning2">
                                <span className='icon icon-meals'></span>
                                <h5>Free Meals</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at blanditiis
                                    libero magnam. Adipisci asperiores expedita impedit nesciunt quibusdam!</p>
                            </div>
                            <div className="col-md-4 hover p-4 py-5 text-center bg-white">
                                <span className='icon icon-room'></span>
                                <h5>Fitness Room</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at blanditiis
                                    libero magnam. Adipisci asperiores expedita impedit nesciunt quibusdam!</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default HomeHotel;

