import React from 'react';
import './profilebar.css';

class ProfileBar extends React.Component{

render(){
  return(

      <div className='profile-root'>
          <figure>
            <img className='avatar-profile' src={this.props.picture} alt="otakoProfile"/>
          </figure>
          <span className="username-profile">Hola @{this.props.username.split('@')[0]}!</span>
          <button onClick={this.props.onOpenText} className="button-profile">
            <span className="fa fa-lg fa-edit"/> Tweet!
          </button>
    </div>
  )
}
}

export default ProfileBar;
