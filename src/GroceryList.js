import {Component} from 'react';
import check from './bullet.jpg';

export class GroceryList extends Component {
  state = {
    userInput: '',
    groceryList: []
  }

  onChangeEvent(e) {
    this.setState({userInput: e})
  }

  addItem(input) {
    if (input === '') alert("Please enter an item!")
    else {
      let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''});
    }
  }

  crossedOut(e) {
    const li = e.target;
    li.classList.toggle('crossed');
  }

  deleteAll() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray});
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitForm}>
          <div className='container'>
            <input onChange={(e) => {this.onChangeEvent(e.target.value)}}
                  type='text'
                  placeholder='What do you need to buy?'
                  value={this.state.userInput} />
          </div>
          <div className='container'>
            <button className='btn add' onClick={() => {this.addItem(this.state.userInput)}}>Add</button>
          </div>
          <div className='container'>
            <ul>
              {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedOut} key={index}>
                  <img src={check} alt='checkmark' />&nbsp;
                  {item}&nbsp;</li>
              ))}
            </ul>
            </div>
          <div className='container'>
            <button className='btn delete' onClick={() => {this.deleteAll()}}>Delete</button>
          </div>
        </form>
      </div>
    )
  }
}