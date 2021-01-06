import React, {Component} from 'react';
import './Info.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import SocialFollow from './Social';

const containerStyle = {
    position: 'relative',  
    width: '320px',
    height: '220px',
    margin: 'auto'
  }
class Info extends Component{

      
render(){
return(
<div className='info' id='infoSec'>
<p className='visit'>Visit Us!    </p>
<div >
<p className='mike'>TELL EM' MIKE SENT YOU</p>
<Map className='map' containerStyle={containerStyle} google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>

 </InfoWindow>
</Map>
<p className='description'>123 Make Believe St.<br />
Somewhere, NJ 08723<br /><br />
Monday-Friday 8:00AM-11:00PM<br />
Saturday 10:00AM-12:00AM<br /><br />
Phone Number: 123-456-7890<br />
Email: idontknow@ummm.com</p>
</div>
<SocialFollow />
</div>
)}};
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCdaiCoAsQdcK7aEaMRciLpO9HQrifnO4g')
  })(Info)