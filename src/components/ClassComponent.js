import { Alert } from "react-bootstrap";
import React from "react";

class ClassComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          name: "Pavlin"
        };
        }

    componentDidMount() {
      console.log('component is rendered on the screen');
    }

    componentWillUnmount() {
      console.log('component will be destroyed'); 
    }
    render() {
        return <Alert variant="info">
            My name is {this.state.name}
            </Alert>
            }
}

export default ClassComponent;