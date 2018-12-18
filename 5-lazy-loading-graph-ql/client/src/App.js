import React, { Component } from 'react';
import API from './api'
import './App.css';
import ListItem from './ListItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users:[]

    }
  }

  fetchUsers(last){
    API.post('/',
        {
            query:`{
      users(lastId:${last},numItems:10){
        id
        name
        email
        address
        image
      }
    }`
  }).then(usersResponse => {
    console.log(usersResponse.data.data.users)
      this.setState({
        users:this.state.users.concat(usersResponse.data.data.users)
      })
    }).catch(err => {
      console.log(err.response)
    })
  }
  componentWillMount() {
    this.fetchUsers(-1)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
        this.state.users.length
    ) {
      this.fetchUsers(this.state.users.slice(-1)[0].id)
    }
  }

  renderList(users){
    return users.map(data => {
      return <ListItem key={data.id} user={data}/>
    })
  }
  render() {
    return (
        <div>
          <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Graph QL Lazy</a>
          </nav>

      <div className="container" style={{marginTop:'80px' ,width:'400px'}}>

        {this.renderList(this.state.users)}
      </div>
        </div>
    );
  }
}

export default App;
