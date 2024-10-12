import { Component } from 'react';
import InputForm from './InputForm';
import Search from './Search';
import Contacts from './Contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 1, name: 'Hermione Kline', number: '443-89-12' },
      { id: 2, name: 'Eden Clements', number: '645-17-79' },
      { id: 3, name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:''
  };
  handleSubmit = (data) => {
    const id = this.state.contacts.length > 0 ? this.state.contacts.length : 0
    const contactToAdd = {
      id:id,
      name:data.name,
      number:data.number
    }
    this.setState((prevState)=>{
      return{
        contacts: [ ...prevState.contacts, contactToAdd]
      }
    })
    
  };
  render() {
    const {contacts} = this.state
    return (
      <>
        <Search />
        <InputForm contacts={contacts} onFormSubmit={this.handleSubmit}/>
        <Contacts contacts={contacts}/>
      </>
    );
  }
}
