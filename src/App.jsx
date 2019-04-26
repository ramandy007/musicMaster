import React,{Component} from 'react';
import {Form,FormControl,Button,Container, InputGroup}from 'react-bootstrap';
import "./App.css";

class App extends Component{
    constructor(props){
        super(props);
        const params = this.getHashParams();
        this.state={query:"",
        loggedIn: params.access_token ? true : false,


                    }
    }

    search(){
        console.log("query",this.state.query);
        console.log(this.getHashParams().access_token);
        const BASE_URL=" https://api.spotify.com/v1/search?";
        const FETCH_URL = BASE_URL + 'q=' + this.state.query+'&type=artist&limit=1';
        console.log('FETCH_URL',FETCH_URL);
        fetch(FETCH_URL,{
            method:'post',
            headers: new Headers({
                
                'access_token':'BQBQkibfajsURfDD7Su_EYG8SGssIhPNXpPb-3UgV3sS6zzEPEUhSk7aMTsTdgzCjEUIB2ETpnlMAde8jNJt6wlHFzgnhDe5ddvsx4jlh3T2VpH1ENnQgmvAgZqjCYsXhwaty7S6RoSWhPRKBhQCveftrTzSsEeU5XdBhmDG8MvyNfyPvI6vIMXkbH7Xpg',
                'refresh_token':'AQAMqemG5JF3zN7P1teI6_XOvqI0HhIGykYmp_XwxHGQ_oWNHQz-ndd9kb4u_AweIHOhCA7ygeeBj0ZxA9LSBdr9zspAmVplXn5-_5_HIFsQXrMCMMMfFeLItN__qOx1YKXjYg'
            })

        })
        .then((response)=>response.json())
        .then((response)=>console.log(response))

    }
       getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e === r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }
    render(){
        return(
            <Container >
            <div className='App'>
                <div className="App-title">Music master </div>
                <div>
               <Form>
                    <Form.Group>
                      <InputGroup > < Form.Control type="text" value={this.state.query} placeholder ="Search for an  Artist...." onChange={(event)=>{this.setState({query:event.target.value})}}
                    

                      onKeyDown={
                         (e) => {
                           
                            if (e.key === 'Enter') {
                            e.preventDefault();
                            this.search();
                                                
                            }
                        
                        }
                        }             
                  
                        />
                        {/*  onKeyPress={(event)=>{console.log('event.key',event.key)}}*/} 
                        <InputGroup.Append>
                        <Button onClick={()=>{this.search()}}
                        variant="outline-secondary">Search</Button>  
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
                 <a href="http://localhost:8888"><Button>login spotify</Button></a>

            </div>
            </Container>

        );
    };
}
 export default App;
    
                        

              