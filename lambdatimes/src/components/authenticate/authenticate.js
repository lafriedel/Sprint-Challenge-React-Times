import React from 'react';


const authenticate = Content => LoginPage =>
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
            return this.state.loggedIn ? <Content /> : <LoginPage />;
        }
    }

export default authenticate;