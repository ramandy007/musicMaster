import React,{Component} from 'react';
import {Form,FormControl,Button,Container, InputGroup}from 'react-bootstrap';
import "./App.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state={query:" "}
    }

    search(){
        console.log("query",this.state.query);
    }
    render(){
        return(
            <Container >
            <div className='App'>
                <div className="App-title">Music master </div>
                <div>
               <Form>
                    <Form.Group>
                      <InputGroup > < Form.Control type="text" query={this.state.query} placeholder ="Search for an  Artist...." onChange={(event)=>{this.setState({query:event.target.value})}} />
                      <InputGroup.Append>
                      <Button onClick={()=>{this.search()}} variant="outline-secondary">Search</Button>  
                      </InputGroup.Append>
                      </InputGroup> 
                    </Form.Group>

               </Form>
              
                </div>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>

                </div>
                 <div className="Gallery">Gallery</div>

            </div>
            </Container>

        );
    };
}
 export default App;