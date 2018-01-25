import React,{Component} from 'react';
import '../CSS/Login.css';
import BackgroundSlideshow from 'react-background-slideshow'
import { Dimmer,Form,Button,Icon } from 'semantic-ui-react';

import image1 from '../img/Bg-login1.jpeg'; 
import image2 from '../img/Bg-login2.jpeg'
import image3 from '../img/Bg-login3.jpeg'
import image4 from '../img/Bg-login4.jpeg'

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    }


    render(){
        return(
            <div className='login-body' >
                <BackgroundSlideshow images={[ image1, image2, image3, image4 ]} />
                >
                    <Dimmer active={true} page  >
                        <div className='box' >
                            <Form>
                                <Form.Field>
                                  <h1 style={{position:'relative' ,right: 185}} >Email</h1>
                                  <input placeholder='example@mail.com' />
                                </Form.Field>
                                <Form.Field  >
                                  <h1 style={{position:'relative' ,right: 160}} >Password</h1>
                                  <input placeholder='Password' />
                                </Form.Field>
                                <Button type='submit' color='google plus' style={{marginTop: 20}} >
                                    <Icon name='google plus' />Google Plus
                                </Button>
                                <Button type='submit' color='blue' style={{marginTop: 20,marginLeft: 6}} >Submit</Button>
                            </Form> 
                        </div>
                    </Dimmer>
            </div>
        );
    }
}

export default Login;