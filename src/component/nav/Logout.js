import React, { Component } from 'react';
import {
  Form, Input,
  Button,
  ModalHeader,
  ModalFooter
} from 'reactstrap';
import axios from 'axios';


class Logout extends Component {

  submitForm = (e) => {
    e.preventDefault()
    axios.defaults.withCredentials = true;
    axios('http://localhost:5002/handlelogout', {
          method: 'GET',
          withCredentials: true
        })
      .then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Form className="form" onSubmit={this.submitForm}>
        <ModalHeader>登出</ModalHeader>
        <ModalFooter>
          <Button className="secondary">Submit</Button>
          <Input type="submit" value="送出表單" />
        </ModalFooter>
      </Form>
    );
  }
}

export default Logout;
