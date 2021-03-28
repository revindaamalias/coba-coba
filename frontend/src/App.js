import { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Keranjang from "./Keranjang";
import Product from "./Product";
import Navigation from "./Navigation";

// function App() {
//   useEffect(() => {

//   }, []);

//   return <div className='App'>My App</div>;
// }

class App extends Component {
  render() {
    return (
      <div>
        Page
        {/* <Navigation /> */}
        <br />
        <Link to="/product">Product</Link>
        <br />
        <Link to="/keranjang">Keranjang</Link>
        <br />
        <br />
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/keranjang">
            <Keranjang />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
