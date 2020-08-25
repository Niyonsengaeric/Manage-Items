import React from 'react';

class Textbox extends React.Component {
  state = {
    value: '',
    items: [],
  };
  
  render () {
  
  return (
      <div>
          
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
    </div>
  )
    
  }

}

export default Textbox;