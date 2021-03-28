import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mesin from "./assets/mesin.jpg";
import Background from "./assets/hello.jpg";

class Product extends Component {
  state = {
    listProduct: [],
  };

  componentDidMount() {
    this._getProduct();
  }

  _getProduct = () => {
    fetch("http://localhost:3001/product")
      .then((response) => response.json())
      .then((listProduct) => {
        this.setState({ listProduct });
      })
      .catch(() => {
        alert("Gagal Ambil Product");
      });
  };

  _onClickBeliProduct = (product) => {
    if (product.stock === 0) {
      alert("Stok Kosong");
      return;
    }

    // update product stock
    fetch(`http://localhost:3001/product/${product.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stock: product.stock - 1,
      }),
    }).then(() => {
      // saat sukses update product stock
      // check product di keranjang
      // saat product ada di keranjang akan masuk ke then
      // saat product tidak ada di keranjang akan masuk ke catch
      fetch(`http://localhost:3002/keranjang/${product.id}`)
        .then((response) => response.json())
        .then((lastKeranjang) => {
          // saat product ada di keranjang
          // update jumlah dan harga di keranjang
          fetch(`http://localhost:3002/keranjang/${product.id}`, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              qyt: lastKeranjang.qyt + 1,
              total: product.harga * (lastKeranjang.qyt + 1),
            }),
          }).then(() => {
            // saat sukses update jumlah dan harga di keranjang
            alert("Berhasil Menambah Keranjang");
            this._getProduct();
          });
        })
        .catch(() => {
          const productKeranjang = {
            id: product.id,
            nama: product.nama,
            harga: product.harga,
            qyt: 1,
            total: product.harga * 1,
          };

          // saat sukses update jumlah dan harga di keranjang
          fetch("http://localhost:3002/keranjang", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productKeranjang),
          }).then(() => {
            alert("Berhasil Menambah Keranjang");
            this._getProduct();
          });
        });
    });
  };

  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <div className="card-body">
            {this.state.listProduct.map((product) => (
              <div>
                {/* <a>{product.img}</a> */}
                <h4 className="card-title">
                  <a>{product.nama}</a>
                </h4>
                <h5>Rp {product.harga}</h5>
                <p className="card-text">
                  {product.stock} - {product.category}
                </p>
                <button
                  onClick={() => {
                    this._onClickBeliProduct(product);
                  }}
                >
                  Buy
                </button>
                <br />
              </div>
            ))}
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
