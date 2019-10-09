import React from 'react';
import uuid from 'uuid'
import MessageList from '../MessageList/message'
import InputText from '../inputText/inputText'
import ProfileBar from '../profileBar/profilebar'

class Main extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        user: Object.assign({}, this.props.user, { retweets:[]}, {favorites:[]}),
        openText: false,
        messages: [{
          id: uuid.v4(),
          text:"mensage de prueba",
          picture:'https://i.ytimg.com/vi/fk5qecafK9g/maxresdefault.jpg',
          displayName: this.props.user.displayName,
          username: this.props.user.email,
          date: Date.now(),
          retweets: 0,
          favorites:0,
        },
        {
          id: uuid.v4(),
          text:"otro mensage de prueba",
          picture:'https://i.ytimg.com/vi/fk5qecafK9g/maxresdefault.jpg',
          displayName: this.props.user.displayName,
          username: this.props.user.email,
          date: Date.now(),
          retweets: 0,
          favorites:0,
        }

      ]
      }

      this.handleOpenText = this.handleOpenText.bind(this)
      this.handleOnSendText = this.handleOnSendText.bind(this)
      this.handleOnCloseText = this.handleOnCloseText.bind(this)
      this.handleFavorite = this.handleFavorite.bind(this)
      this.handleRetweet = this.handleRetweet.bind(this)
  }

handleOnSendText(e){
  e.preventDefault()
  let newMessage = {
    id: uuid.v4(),
    username: this.props.user.email,
    displayName: this.props.user.displayName,
    picture: this.props.user.photoURL,
    date: Date.now(),
    text: e.target.text.value
  }
  this.setState({
    messages: this.state.messages.concat([newMessage])
  })
}

handleOnCloseText(e){
  e.preventDefault()
  this.setState({ openText: false})
}

handleOpenText(e){
  e.preventDefault()
  this.setState({openText: true})
}
renderOpenText(){
  if (this.state.openText ===true){
    return(
    <InputText
      onSendText={this.handleOnSendText}
      onCloseText={this.handleOnCloseText}
    />
  )
  }
}
handleRetweet(msgId){
  let alreadyRetweetd = this.state.user.retweets.filter(rt => rt === msgId)

  if (alreadyRetweetd.lenght ===0){
    let messages= this.state.messages.map(msg => {
      if(msg.id ===msgId){
        msg.retweets++
      }
      return msg
    })

    let user = Object.assign({}, this.state.user)
    user.retweets.push(msgId)

    this.setState({
      messages: messages,
      user: user
    })
  }
}
handleFavorite(msgId){
  let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

  if(alreadyFavorited.lenght === 0){
    let messages = this.state.messages.map(msg => {
      if (msg.id === msgId){
        msg.favorites ++
      }
      return msg
    })

    let user = Object.assign({}, this.state.user)
    user.favorites.push(msgId)

    this.setState({
      messages: messages,
      user: user
    })
  }
}

  render(){
    return(
      <div className="Main">
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <
        MessageList messages={this.state.messages}
        onRetweet={this.handleRetweet}
        onFavorite={this.handleFavorite}
         />
      </div>
    )
  }
}
export default Main;
// HEREDA DEL HIJO A PROFILEBAL
