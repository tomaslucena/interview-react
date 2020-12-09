import React, {Component} from 'react';

import DisplayTable from './Table';
import Form from './Form';
import Aux from './Auxillary';
import Nav from './Navbar'


class Wrapper extends Component{

    state = {
        orders: [],
        filter: ""
    }

    handleChange = (value) => {
        this.setState({
            filter: value
        })
    }

    render(){
        return(
            <Aux>
                <div className="container">
                    <Nav />
                    <Form handleChange={this.handleChange}/>
                    <DisplayTable filter={this.state.filter}/>
                </div>
            </Aux>
        );
    }
}

export default Wrapper;