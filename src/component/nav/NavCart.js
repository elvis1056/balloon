import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NavCart extends Component {
  render() {
    let { toggle, modal } = this.props;
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>購物車</ModalHeader>
          <ModalBody>
              這裡要購買物品
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>品項</th>
                    <th>價格</th>
                    <th>數量</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cartReducer.cart.map(({id, title, description, NTdollar, quantity})=>
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{title}</td>
                      <td>{NTdollar}</td>
                      <td>{quantity}</td>
                      <td 
                        onClick={()=>{this.props.removeCartReducer({
                          id, 
                          title, 
                          description, 
                          NTdollar})
                        }}
                        style={{cursor: "pointer"}}
                      >×</td>
                    </tr>
                  )}
                </tbody>
              </Table>
          </ModalBody>
          <ModalFooter>
            <Link to="/checkout">
              <Button outline color="primary" onClick={toggle}>
              結帳
              </Button>
            </Link>{' '}
            <Button outline color="secondary" onClick={toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NavCart;
