import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './NavbarStyle.scss'

import NavbarHotel from "./NavbarHotel";
import HomeHotel from "./HomeHotel";
import Footer from "./Footer";
import AboutHotel from "./AboutHotel";
import ContactHotel from "./ContactHotel";

class Hotel extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <NavbarHotel/>
                    <Switch>
                        <Route exact path='/' component={HomeHotel}/>
                        <Route exact path='/about' component={AboutHotel}/>
                        <Route exact path='/contact' component={ContactHotel}/>

                    </Switch>
                    <Footer/>
                </BrowserRouter>

            </div>
        );
    }
}

export default Hotel;