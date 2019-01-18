import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: ""
    }
  }

  storeInState = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  storeUsername = () => {
    localStorage.setItem("username", JSON.stringify(this.state.username));
  };

  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Log In</ModalHeader>
          <form onSubmit={this.storeUsername}>
            <ModalBody>
              <input type="text" name="username" placeholder="username" onChange={this.storeInState}/>
              <input type="text" placeholder="password" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Log In
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginPage;
