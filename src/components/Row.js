import React,{Component} from 'react';


class Row extends Component {
    

    render () {
        // console.log("HEREE",typeof this.props.customer.created_at)
    
        return (
        <tr>
            <td>{this.props.customer.id}</td>
            <td>{this.props.customer.created_at.substring(0,10)}</td>
            <td>{this.props.customer.customer}</td>
            <td>{this.props.customer.status}</td>
            <td>{this.props.customer.total}</td>
        </tr>
        );
    }
    
}

export default Row;