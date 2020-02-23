import React, { Component } from 'react';
import { Table, Button, } from 'reactstrap';
import './Payment.css';

class Payment extends Component {
  constructor() {
    super()
    this.state = {
      done: false,
      isLoading: false,
    }
  }

  completeAll = (e) => {
    this.setState({
      done: true,
      isLoading: true,
    })
    setTimeout((()=>{
      this.setState({
        isLoading: false,
      })
    }), 3000)
  }

  toggleLoading = () => {
    this.setState({
      isLoading: false,
    })
  }

  render() {
    const { isLoading, done } = this.state
    let sum = this.props.cartReducer.cart.reduce((acc, item) => (acc += Number(item.NTdollar)), 0)
    return (
      <div>
      <div className={`selectMask-box ${isLoading ? "mask" : ""} `} ></div>
      {/* <Modal isOpen={isLoading} toggle={this.toggleLoading}>恭喜完成訂單，即將前往完成！</Modal> */}
      <div className="container">
        <section className=" margin-top-20 padding-top-20">
          <div className="checkoutstep-wrap">
            <div className="step">
              <span className="num">1</span>
              <div className="steptext">輸入訂單資料</div>
            </div>
            <div className={`step ${done ? "": "active"}`}>
              <span className="num">2</span>
              <div className="steptext">金流付款</div>
            </div>
            <div className={`step step-hide ${done ? "active": ""}`}>
              <span className="num">3</span>
              <div className="steptext">完成</div>
            </div>
          </div>
        </section>

        <div className="row margin-top-10">
          <div className="payment-title"><span className="icon margin-right-10"><i className="file-icon"></i></span>購買清單</div>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>商品圖</th>
                  <th>商品名稱</th>
                  <th>商品價格</th>
                  <th>商品數量</th>
                </tr>
              </thead>
              <tbody>
              {this.props.cartReducer.cart.map(({ id, src, title, description, NTdollar, quantity }) => 
                <tr>
                  <th scope="row">{id}</th>
                  <td style={{width: "100px"}}>
                    <img style={{width: "100%"}} src={src} alt="" />
                  </td>
                  <td>{title}</td>
                  <td>{quantity}</td>
                  <td>{NTdollar}</td>
                </tr>
              )}
              </tbody>
            </Table>
        </div>

        <div className="row payment-sum margin-top-10 h5">
          <span>總額</span>
          <span className="text-success">NT${sum}</span>
        </div>

        <div className="row margin-top-10">
          <div className="payment-title"><span className="icon margin-right-10"><i className="file-icon"></i></span>個人資訊</div>
            <Table striped>
              <thead>
                <tr>
                  <th className="width-30per">訂單資訊</th>
                  <th className="width-70per"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="width-30per">姓名</th>
                  <td className="width-70per">{this.props.ordererReducer.orderer.name}</td>
                </tr>
                <tr>
                  <th className="width-30per">電話</th>
                  <td className="width-70per">{this.props.ordererReducer.orderer.phone}</td>
                </tr>
                <tr>
                  <th className="width-30per">Email</th>
                  <td className="width-70per">{this.props.ordererReducer.orderer.email}</td>
                </tr>
                <tr>
                  <th className="width-30per">地址</th>
                  <td className="width-70per">{this.props.ordererReducer.orderer.address}</td>
                </tr>
                <tr>
                  <th className="width-30per">付款狀態</th>
                  <td className="width-70per">{done ? "付款完成": "尚未付款"}</td>
                </tr>
              </tbody>
            </Table>
        </div>
        <div className="float-right" onClick={()=>this.completeAll()}>
          <Button outline color="primary">
            確認完成訂單
          </Button>
        </div>
      </div>
      </div>
    );
  }
}

export default Payment;
