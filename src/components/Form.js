import React, {Component} from 'react';

class Form extends Component{

    state = {
        value: ""
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
        this.props.handleChange(e.target.value);
    }


    render(){
        return (
            <form>
                <div className="form-group">
                    <label>
                    <strong>Search for Status here:</strong>
                    </label>
                    <input type="text"  className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter search text" value={this.state.value} onChange={this.handleChange}/>
                    {/* <input type="submit" value="Submit" /> */}
                </div>
            </form>
        );
    }
}

export default Form;