import React from 'react';


/*
const App = (props) => {
    return <h1>Hello, {props.name}!</h1>;
}
*/

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {text: 'Have a great Day!', hasLoaded: false};
    }

    
    handleClick = () => {
        this.setState({hasLoaded: !this.state.hasLoaded});
    }

    componentDidMount = () => {
        this.setState({hasLoaded: true});
    }

    render() {

        if (this.state.hasLoaded === true) {
        return (
            
        <React.Fragment>
             <h1> Hello, {this.props.name}. {this.state.text}!</h1>
            <input 
                placeholder={this.state.text}
                value={this.state.text}
                onChange={ (event) => { this.handleEvent({text: event.target.value})}} />
                <button 
                    value={this.state.hasLoaded}
                    onClick={this.handleClick}>Refresh</button>
               
                </React.Fragment>
        );
        } else {
            return (
                <React.Fragment>
                <h1> Loading...</h1>
                   <button 
                   value={this.state.hasLoaded}
                   onClick={this.handleClick}>Click to load</button>
                  
                   </React.Fragment>
            )
        }
        
        
                
    
                
       
    }
    
}



export default App;


/*
Add a button beneath that input. When clicked, the button should invoke a method defined on the class to toggle 
a "hasLoaded" state property, which has a default value of false.
 */




