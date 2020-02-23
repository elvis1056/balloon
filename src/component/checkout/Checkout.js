import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Label, FormGroup, Input, Button } from 'reactstrap';
import './Checkout.css';

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      sum: 0,
    }
  }

  submitHandler = (e) => {
    // e.preventDefault();
    e.persist()
    let { name, phone, email, address } = this.state
    let detail = {name, phone, email, address}
    if ( name && phone && email && address) {
      this.props.addOrderReducer(detail)
      this.props.history.push("/payment")
    } else {
      console.log('something error')
    }
    
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let sum = this.props.cartReducer.cart.reduce((acc, item) => (acc += Number(item.NTdollar)), 0)
    return (
      <div className="container">
        <section className="padding-top-20">
          <div className="checkoutstep-wrap">
            <div className="step active">
              <span className="num">1</span>
              <div className="steptext">輸入訂單資料</div>
            </div>
            <div className="step">
              <span className="num">2</span>
              <div className="steptext">金流付款</div>
            </div>
            <div className="step step-hide">
              <span className="num">3</span>
              <div className="steptext">完成</div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-lg-8 col-md-7 mb-4">
            <AvForm onSubmit={this.submitHandler}>

              <div className="row">
                <AvGroup className="col-md-6 mb-3">
                  <Label for="name">姓名</Label>
                  <AvInput type="text" name="name" id="name" onChange={this.inputChange} className="form-control" required />
                  <AvFeedback>請填入姓名</AvFeedback>
                </AvGroup>
                <AvGroup className="col-md-6 mb-3">
                  <Label htmlFor="phone">電話</Label>
                  <AvInput type="text" name="phone" id="phone" onChange={this.inputChange} className="form-control" required />
                  <AvFeedback>請填入電話</AvFeedback>
                </AvGroup>
              </div>

              <div className="row">
                <AvGroup className="col-md-12">
                  <Label htmlFor="email">郵箱</Label>
                  <AvInput name="email" type="email" id="email" onChange={this.inputChange} className="form-control" required />
                  <AvFeedback>email 不能留空。</AvFeedback>
                </AvGroup>
              </div>

              <div className="row">
                <AvGroup className="col-md-12">
                  <Label htmlFor="address">收件地址</Label>
                  <AvInput type="text" name="address" id="address" onChange={this.inputChange} className="form-control" required />
                  <AvFeedback>請填入地址</AvFeedback>
                </AvGroup>
              </div>

              <div className="row">
                <FormGroup className="col-md-12">
                  <Label htmlFor="memo">備註<small className="text-info">（選填）</small></Label >
                  <Input type="textarea" rows="5" name="memo" id="memo" className="form-control" />
                </FormGroup>
              </div>

              <div className="row margin-top-10">
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary btn-block">結帳去 <i className="fas fa-caret-right"></i></button>
                </div>
              </div>

            </AvForm>
          </div>

          <div className="col-lg-4 col-md-5 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="check-title">購物清單</span>
              <span className="badge badge-secondary badge-pill text-white">4</span>
            </h4>
            <ul className="cart-item-ul">

              {/* <li className="cart-item-li cart-item">
                <div>圖片</div>
                <div>價格</div>
                <div>數量</div>
                <div>×</div>
              </li> */}

              {this.props.cartReducer.cart.map(({ id, src, title, description, NTdollar, quantity }) =>
                <div className="row col-12 cart-item-li cart-item margin-top-5" key={id}>
                  {/* <li className="col-4">{title}</li> */}
                  <div className="col-3">
                    <img style={{ width: "100%" }} src={src} alt=""></img>
                  </div>
                  <div className="col-4 text-align-start">
                    <div className="">{title}</div>
                    <div className="">共 {quantity} 組</div>
                  </div>
                  <div className="col-3">
                    {NTdollar}
                  </div>
                  <div className="col-1"
                      onClick={() => {
                        this.props.removeCartReducer({
                          id,
                          title,
                          description,
                          NTdollar
                        })
                      }}
                      style={{ cursor: "pointer" }}
                    >×</div>
                </div>
              )}

            <div className="cart-sum col-12 margin-top-10 h5">
              <span>總額</span>
              <span className="text-success">NT${sum}</span>
            </div>

            </ul>

            <Link className="float-right" to="/Categories">
              <Button outline color="primary">
                繼續購物
              </Button>
            </Link>

          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
