import About from "./components/About"
import Home from "./components/Home"
import Service from "./components/Service"
import Contact from "./components/Contact"
import {Switch ,Route ,Redirect} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
<>
<Navbar/>
<Switch>
<Route exact  path="/" component ={Home}/>
<Route exact path ="/About" component={About}/>
<Route exact path ="/Service" component ={Service}/>
<Route exact path ="/Contact" component ={Contact}/>

<Redirect to="/"/>
<Home/>
</Switch>
<Footer/>
</>
  );
}

export default App;
