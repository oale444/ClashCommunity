import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Profile extends Component {
    state = {
        name: "",
        character: ""
      };


render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What's your name?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name"
              />
              <Input
                value={this.state.character}
                onChange={this.handleInputChange}
                name="character"
                placeholder="character"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.character)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Profile;
