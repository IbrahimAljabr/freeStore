import Home from "./component/home/home";
import NavBar from "./component/navBar/navBar";
import ProductDetails from "./component/productDetails/productDetails";
import Products from "./component/products/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/item/:id'>
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
