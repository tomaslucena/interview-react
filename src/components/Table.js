import React, {Component} from 'react';

import axios from '../axios-req';
import Aux from './Auxillary';
import Row from './Row';


class DisplayTable extends Component {

    state = {
        customerRows: [],
        request: true
    }

    sendRequest = () => {
        let customers = []
        axios.get()
        .then((response) => {
            // console.log(response)
            customers = response.data.data
            this.setState({
                customerRows: customers,
                request: false
            })
        })
        .catch(error => {
            console.log("Failed")
        })
    }

    render() {
        if(this.state.request){
            this.sendRequest();
        }
        let style = {
            "fontWeight":"bold"
        }
        return (
            <Aux>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={style}>ID</th>
                            <th scope="col" style={style}>Date</th>
                            <th scope="col" style={style}>Name</th>
                            <th scope="col" style={style}>Status</th>
                            <th scope="col" style={style}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customerRows.map(customer => {
                            return customer.status.includes(this.props.filter.toUpperCase()) &&
                            <Row key={customer.id} customer={customer}/>
                        })}
                    </tbody>
                </table>
            </Aux>
        );
    }
}

export default DisplayTable;