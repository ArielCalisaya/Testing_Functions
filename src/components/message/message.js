import React from 'react';
import './avatar.css';
let moment = require('moment');


class Message extends React.Component{
  constructor(){
    super();

      this.state={
        pressFavorites: false,
        pressRetweets: false
      }

    this.onPressRetweets = this.onPressRetweets.bind(this)
    this.onPressFavorites = this.onPressFavorites.bind(this)
  }

  onPressFavorites(){
    this.props.onFavorites()
    this.setState({
      pressFavorites: true
    })
  }
  onPressRetweets(){
    this.props.onRetweets()
    this.setState({
      pressRetweets: true
    })

  }

  render(){

    let dateFormat = moment(this.props.date).fromNow()

    return(
      <div className="root-user">
          <div className="user">
              <figure>
                <img className="avatar" src={this.props.picture} alt="otakopicture"/>
              </figure>
              <span className="displayName">{this.props.displayName}</span>
              <span className="username"> @{this.props.username.split('@')[0]}</span>
              <span className='date'>{dateFormat}</span>

          </div>
          <h3 className="comment-user">{this.props.text}</h3>
          <div className="buttons">
            <div className='icon'><span className='fa fa-reply' /></div>

            <div
            onClick={this.props.onRetweets}
            className={(this.props.onPressRetweets) ? "icon-retweet" : ''}>
            <span className='fa fa-retweet' />
              <span className="num">{this.props.numRetweets}</span>
            </div>

            <div
            onClick={this.props.onFavorites}
            className={(this.props.onPressFavorites) ? "icon-favorite": ''}>
            <span className='fa fa-star' />
              <span className="num">{this.props.numFavorites}</span>
            </div>
          </div>
      </div>
    )
  }
}
export default Message;
