import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Axios from 'axios';
import UserList from './components/UserList';

class App extends React.Component {
  constructor() {
    super();
    this.state = []
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    Axios.get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log('getUser res: ', res)
        this.setState(res.data)
      })
      .catch(err => {
        console.log('getUser err: ', err)
      })
  };

  render() {
    return (
      <div className="App">
        <h1>Create a login to access our secret recipes:</h1>
        <LoginForm />
        <UserList props={this.state} />
      </div>
    );
  }
}

export default App;
