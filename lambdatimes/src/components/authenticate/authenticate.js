import React from 'react';


const authenticate = Content => 
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem("username")) {
                this.setState({loggedIn: false});
            } else {
                this.setState({loggedIn: true});
            }
        }

        render() {
            return this.state.loggedIn ? <Content /> : null;
        }
    }

export default authenticate;