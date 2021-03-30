import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */

        this.state = {
            name: "",
            URL:""

        }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = (event) => {
        /*
            TODO - Logic for changing state based on form changes
        */
       //console.log("hello")
       if(event.target.name === "name"){
        this.setState({name: event.target.value});
       } else {
        this.setState({URL: event.target.value});
       }
       
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log(this.props.favLinks)
       this.props.addLink(this.state)
       this.setState({name: "", URL: ""})

    }

    render() {
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

        return(
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    URL:
                    <input type="text" name="URL" value={this.state.URL} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
                
            </form>
        )
    
    }
}

export default Form;
