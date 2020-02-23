import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Modal, ModalHeader,
  ModalFooter
} from 'reactstrap';

const axios = require('axios');


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    const userObject = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:5002/handlelogin', userObject,{ withCredentials: true })
      .then((res) => {
        this.props.setTokenReducer(res.data)
        this.props.isLoginReducer()
        this.props.loginToggle()
        localStorage.setItem('Token', res.data);
      }).catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.loginmodal !== prevProps.loginmodal) {
      this.setState({
        email: '',
        password: '',
      })
    }
  }

  render() {
    const { loginmodal, loginToggle } = this.props
    return (
      <Modal isOpen={loginmodal} toggle={loginToggle}>
        <Container>
          <Form className="form" onSubmit={this.submitForm}>
            <ModalHeader toggle={loginToggle}>登入</ModalHeader>
            <br />
            <Col>
              <FormGroup>
                <Label for="exampleEmail">信箱</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="email"
                  onChange={this.changeInput}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="loginPassword">密碼</Label>
                <Input
                  type="password"
                  name="password"
                  id="loginPassword"
                  placeholder="********"
                  onChange={this.changeInput}
                />
              </FormGroup>
            </Col>
            <ModalFooter>
              <Input type="submit" value="送出表單" />
            </ModalFooter>
          </Form>
        </Container>
      </Modal>
    );
  }
}

export default Login;
