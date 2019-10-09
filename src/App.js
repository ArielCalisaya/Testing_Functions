import React from 'react';
import Main from './components/mainUser/main'
import Header from './components/header/header'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user: {
        photoURL:'https://i.ytimg.com/vi/fk5qecafK9g/maxresdefault.jpg',
        email:'mommonkha@gmail.com',
        displayName:'MommonKha'
      }
      }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App;

// para heredar estado llamatos al componente y enviamos
// el estado hijo 'este estado' para poder reutilizar desde
// otro componente
// ASI PASAMOS PROPIENDADES ENTRE COMPOENNTES
