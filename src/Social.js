import React, { Component } from 'react';
import { Container, Row, Col} from 'mdbreact';
import {Timeline} from 'react-twitter-widgets';
import InstagramEmbed from 'react-instagram-embed';

class Social extends Component {
  render() {
    return(
      <Container style={{maxWidth: '80%'}}>
      <Row>
        <Col>
            <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'ohyesnoyes'
            }}
            options={{
              username: 'ohyesnoyes',
              height: '600'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </Col>
        <Col>
          <InstagramEmbed
            url='https://www.instagram.com/p/BlejvAZAjAB'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
        
        </Col>
      </Row> 
        
      </Container>
    );
  }
}

export default Social;