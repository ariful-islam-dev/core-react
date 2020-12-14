import React, { Component } from 'react';
import classes from './app.module.css';
import SingupForm from './singup-form';
// import ControlledForm from './form/controlled-form';
// import SplitForm from './split-form'
// import UncontrolledForm from './form/uncontrolled-form';
// import Inputs from './inputs/index'



class App extends Component {
    state = {
        users: []
    }
    createUser = user => {
        user.id = new Date().getTime().toString
        this.setState({
            users:[...this.state.users, user]
        })
    }

    render() {

        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Working with Forms in React</h1>
                <hr />
                {/* <Inputs/> */}
                {/* <UncontrolledForm/> */}
                {/* <ControlledForm/> */}
                {/* <SplitForm/> */}
                <SingupForm createUser={this.createUser} />
                <div>
                    <h3 className="my-5">All Register Users</h3>
                    <ul className="list-group">
                        {this.state.users.map(user => <li key={user.id} className="list-group-item">
                            {user.name} ---> {user.email}
                        </li>)}
                    </ul>
                </div>
            </div>

        );
    }
}

export default App;
// 8.11 Done

