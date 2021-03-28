import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import mesin from "../assets/mesin_.jpg";
import Background from "./assets/hello.jpg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  withRouter,
} from "react-router-dom";

class Keranjang extends Component {
  state = {
    listKeranjang: [],
  };

  componentDidMount() {
    fetch("http://localhost:3002/keranjang")
      .then((response) => response.json())
      .then((listKeranjang) => {
        this.setState({ listKeranjang });
      })
      .catch(() => {
        alert("Gagal Ambil Keranjang");
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-4">Cart</h1>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Total
                    </th>
                    <th scope="col" className="text-right">
                      Total Price
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listKeranjang.map((Keranjang) => (
                    <div>
                      <h5>{Keranjang.nama}</h5>
                      <div>{Keranjang.harga}</div>
                      <div>qty {Keranjang.qyt}</div>
                      <div>{Keranjang.total}</div>
                      <br />
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Keranjang;
