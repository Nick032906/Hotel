
import "./main.css"

import CardItem from "./components/CardItem"
import NavigationBar from "./components/NavigationBar";
import Quti from "./components/Quti";
import CardFooter from "reactstrap/es/CardFooter";





function App() {
  return (
    <div>
    <NavigationBar/>
     <h3 className="text">Lorem ipsum dolor.</h3>

        <Quti/>

      <img src="logo192.png" alt=""/>

      <div className="container">
          <div className="row">
              <div className="col-4">
                  <CardItem/>
              </div>
              <div className="col-4">
                  <CardItem/>
              </div>
              <div className="col-4">
                  <CardItem/>
              </div>

          </div>
      </div>


      <CardItem/>



    </div>
  );
}

export default App;

