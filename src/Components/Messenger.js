import React,{Component} from 'react';
import { Scrollbars  } from 'react-custom-scrollbars';
import '../CSS/Messenger.css';
import {Header,Image,Divider} from 'semantic-ui-react'

//import areas

import Chat from './Chat';


class Messenger extends Component{

    render(){
        document.body.style.background = '#1e1e1e';
        return(
            <div className='body' >

                <div className='ChatList' >
                    <div className='header' > 
                        <Header>
                            <Image circular src={require('../img/Profile.png')} />
                            {'  '}Patrick
                        </Header>
                    </div>
                    <Divider />
                    <div className='list' >
                        <Scrollbars style={{height:"100%"}} >

                        </Scrollbars>
                    </div>
                </div>

                <div className='Chat' >
                    <Chat />
                </div>

            </div>
        );
    }
}

export default Messenger;