import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
 
class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        )
    }
}
export default Main;

//exact = khusus halaman utama