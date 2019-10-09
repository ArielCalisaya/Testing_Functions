import React from 'react';
import './message.css'
import Message from '../message/message'

class MessageList extends React.Component{
  constructor(){
    super()

  }


  render(){

    return(
      <div>
        {this.props.messages.map(msg => {
          return(
            <Message
            key={msg.id}
            text={msg.text}
            picture={msg.picture}
            displayName={msg.displayName}
            username={msg.username}
            date={msg.Date}
            numRetweets={msg.retweets}
            numFavorites={msg.favorites}
            onRetweet= {() => this.props.onRetweets(msg.id)}
            onFavorite={() => this.props.onFavorites(msg.id)}
            />

          )
        })}
      </div>
    )
  }
}
export default MessageList;

// la key no puede funcionar si esta dentro de un HIJO
// por lo tanto eliminamos <div>
// o movemos key al div padre
