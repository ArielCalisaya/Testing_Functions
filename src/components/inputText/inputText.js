import React from 'react';
import './inputText.css'
class InputText extends React.Component{
  constructor(){
    super()
}

render(){
  return(
    <form className='form-input' onSubmit={this.props.onSendText}>
      <textarea className='text-input' name="text"></textarea>
        <div className='buttons-input'>
          <button className='close-input' onClick={this.props.onCloseText}> Cerrar </button>
          <button className='send-input' type="submit">Enviar</button>
        </div>
    </form>
  )
}
}

export default InputText;
