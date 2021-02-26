import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
    this.state = {
      contacts: [{
        firstName: "Gemma",
        lastName: "Guirl",
        email: "lollololololoololl@gmail.com",
        phone: "(864) 555-5555",
      }, {
        firstName: "Wolf",
        lastName: "Guirl",
        email: "llolodsgapsdgkopdsgkopakopgrseaagerop@gmail.com",
        phone: "(864) 555-0999",
      }]
    };
  }

  addContact(contact) {
    const contacts = [...this.state.contacts]
    contacts.push(contact);
    this.setState({ contacts })
    console.log(contact);
  }

  render() {
    return (
      <React.Fragment>
        <Form addContact={this.addContact}/>
        <List contacts={this.state.contacts}/>
      </React.Fragment>
    )
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First name: </label>
        <input type="text" value={this.state.firstName} onChange={this.handleInput} name="firstName" required />
        <label htmlFor="lastName">Last name: </label>
        <input type="text" value={this.state.lastName} onChange={this.handleInput} name="lastName" required/ >
        <label htmlFor="email">Email: </label>
        <input type="email" value={this.state.email} onChange={this.handleInput} name="email" required />
        <label htmlFor="phone">Phone #: </label>
        <input type="tel" value={this.state.phone} onChange={this.handleInput} name="phone" required />
        <button type="sumbit"> ADD AS CONTACT IN YOUR LIST </button>
      </form>
    )
  }
}

class List extends Component {
  render() {
    const contacts = this.props.contacts.map((contact, index) => (
      <div key={index}>
        <h1>{contact.firstName} {contact.lastName}</h1>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
    ))

    return (
      <ul>{ contacts }</ul>
    )
  }
}

export default App;
