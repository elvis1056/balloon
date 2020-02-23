import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Modal, ModalHeader,
  ModalFooter, Alert,
  CustomInput
} from 'reactstrap';

const axios = require('axios');

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
      nickname: '',
      gender: '',
      birthday: '',
      successMessage: false,
      errorMessage: false,
    }
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeDate = (e) => {
    this.setState({
      birthday: e.target.value,
    })
  }

  changeRadio = (e) => {
    this.setState({
      gender: e.target.id
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    const { username, password, nickname, email, gender, birthday } = this.state
    const userObject = {
      username,
      password,
      nickname,
      email,
      gender,
      birthday,
    }
    axios.post('http://localhost:5002/addUser', userObject)
      .then((results) => {
        console.log('resultsdioufilads',results)
        if (results.data.message === 'success') {
            this.setState({
                successMessage: true,
            })
            if (this.state.successMessage === true) {
                setTimeout((()=>{
                  this.props.history.push('/')
                  this.props.closeRegister()
                  this.clearState()
                }), 3000)
            }
        }
      }).catch((error) => {
        this.setState({
            errorMessage: true,
        })
      })
  }

  clearState = () => {
    this.setState({
      successMessage: false,
      errorMessage: false,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.loginmodal !== prevProps.loginmodal) {
      this.setState({
        username: '',
        password: '',
        email: '',
        nickname: '',
        gender: '',
        successMessage: false,
        errorMessage: false,
      })
    }
  }

  render() {
    const { successMessage, errorMessage } = this.state
    const { registermodal, registerToggle } = this.props
    return (
      <Modal isOpen={registermodal} toggle={registerToggle}>
        <Container>
          <Form className="form" onSubmit={this.submitForm}>
            <ModalHeader toggle={registerToggle}>註冊</ModalHeader>
            <br />
            <Col>
              <FormGroup>
                <Label for="exampleUsername">帳號</Label>
                <Input
                  type="text"
                  name="username"
                  id="exampleUsername"
                  placeholder="username"
                  onChange={this.changeInput}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exPassword">密碼</Label>
                <Input
                  type="password"
                  name="password"
                  id="exPassword"
                  placeholder="********"
                  onChange={this.changeInput}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleUsername">暱稱</Label>
                <Input
                  type="text"
                  name="nickname"
                  id="exampleNickname"
                  placeholder="nickname"
                  onChange={this.changeInput}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                  onChange={this.changeInput}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
              <Label for="exampleCheckbox">性別</Label>
                <div>
                  <CustomInput onChange={this.changeRadio} type="radio" id="male" name="customRadio" label="男" />
                  <CustomInput onChange={this.changeRadio} type="radio" id="female" name="customRadio" label="女" />
                </div>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleDate">生日</Label>
                <Input
                  onChange={this.changeDate}
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
            </Col>
            <ModalFooter>
              {/* <Button color="secondary" >Submit</Button> */}
              <Input type="submit" value="送出表單" />
            </ModalFooter>
            <Alert color="success" isOpen={successMessage}>
                註冊成功，稍候即將進行跳轉
            </Alert>
            <Alert color="danger" isOpen={errorMessage}>
                註冊失敗，請檢查欄位是否填寫完整
            </Alert>
          </Form>
        </Container>
      </Modal>
    );
  }
}

export default Register;
