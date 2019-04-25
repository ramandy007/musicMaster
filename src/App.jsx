import React,{Component} from 'react';
import {Form,FormControl,Button,Container, InputGroup}from 'react-bootstrap';
import "./App.css";

class App extends Component{
    render(){
        return(
            <Container >
            <div className='App'>
                <div className="App-title">Music master </div>
                <div>
               <Form>
                    <Form.Group>
                      <InputGroup > < Form.Control type="email" placeholder ="Search for an  Artist...." />
                      <InputGroup.Append>
                      <Button  variant="outline-secondary">Search</Button>  
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