import React, {Component } from 'react';
import './App.css';
import ImageCircleC from './components/ImageCircleC';
import CustomButton from './components/CustomButton';
import axios from 'axios';
import User from './components/User';
import ProductListHooks from './components/hooks/ProductListHooks';
class App extends Component {

  state = {
    nUsers: [],
    users : {
      user : {
        name : "AVODAGBE",
        lastName : "Godwin",
        age : 45,
        description : "Il est toujours joyeux :) !!!!!!!!",
        image : "https://cdn.pixabay.com/photo/2020/05/25/19/58/fox-5220328__480.jpg"
      },
      user1 : {
          name : "Ekoura",
          lastName : "Dev",
          age : 12,
          description : "C'est l'équipe de DEV",
          image : "https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522__480.jpg"
      },
      user2 : {
          name : "Ekoura",
          lastName : "Manager",
          description : "C'est le manager général",
          age : 50,
          image : "https://cdn.pixabay.com/photo/2020/07/18/11/46/old-man-5416999__480.jpg"
      },
      user3 : {
          name : "Ekoura",
          lastName : "Commercial",
          description : "C'est le responsable commmercial",
          age : 35,
          image : "https://cdn.pixabay.com/photo/2020/07/23/10/38/dog-5430987__480.jpg"
      }
    },
    selectedUser : {
      name : "",
      lastName : "",
      description : "",
      age : 0,
      image : ""
    },
    buttonName : 'Enregistrer'
  }

  componentDidUpdate(){
    
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response=>{
            
            this.setState({ nUsers : response.data.map(user => {
              return {
                ...user, 
                children: 'Nathalie'
              }
            })})
          })
          .then(()=> {
          })
    /*
    axios.post('/users', {
                                                                id : 12,
                                                                name: "Godwin",
                                                                phone: "024-648-3804",
                                                                username: "Ekoura",
                                                                website: "ekoura.com"
                                                              })
          .catch(error => console.log(error))*/
  }

  
  
  handleOnChange = event => {
    // save State data
    const {user} = this.state
    user.description = event.target.value
    this.setState({user : user})

  }

  handleSelectUser = user =>{
    this.setState({selectedUser : user})
  }

  handleLastName = event =>{
    const {selectedUser } = this.state
    selectedUser.lastName = event.target.value
    this.setState({selectedUser})
  }

  handleName = event => {
    const {selectedUser } = this.state
    selectedUser.name = event.target.value
    this.setState({selectedUser})
  }

  handleImageUrl = event => {
    const {selectedUser } = this.state
    selectedUser.image = event.target.value
    this.setState({selectedUser})
  }

  handleDescription = event =>{
    const {selectedUser } = this.state
    selectedUser.description = event.target.value
    this.setState({selectedUser})
  }

  createNewUser = ()=>{

    const {users} = this.state
    users[`user-${Date.now()}`] = this.state.selectedUser
    this.setState({users})

  }

  deleteUser = ref => {
    const {users } =this.state
    delete this.state.users[ref]
    this.setState({users})
  }

  render() {

    const listUsers = Object.keys(this.state.users)
                            .map((keyValue, index) => (
                              <ImageCircleC key={"tetetetet" + index} name={this.state.users[keyValue].name}
                                              lastName={this.state.users[keyValue].lastName}
                                              age={this.state.users[keyValue].age}
                                              description={this.state.users[keyValue].description}
                                              imageUrl={this.state.users[keyValue].image}
                                              buttonName={this.state.buttonName}
                                              onClick={()=> this.handleSelectUser(this.state.users[keyValue])}
                                              deleteUserHandler={()=>this.deleteUser(keyValue)}
                                              
                                              />
                            ))
    const nUsers = this.state.nUsers.map( user => (
      <User key={user.id} user={user} />
    ))


    return (
      <>
        {/* 
          <input 
            className="form-control"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.users.user.description}
          />
        */}
        <div className="d-flex flex-row justify-content-center">
          {listUsers}
        </div>
        
        <div className="container" style={{ paddingTop : '30px'}}>
            <input 
              placeholder="User image"
              className="form-control"
              type="text"
              onChange={this.handleImageUrl}
              value={this.state.selectedUser.image}
                
            />
            <input 
              placeholder="name"
              className="form-control"
              type="text"
              onChange={this.handleLastName}
              value={this.state.selectedUser.lastName}
                
            />
            <input 
              placeholder="prenom"
              className="form-control"
              type="text"
              onChange={this.handleName}
              value={this.state.selectedUser.name}
            />
            <textarea  
              placeholder="description"
              className="form-control"
              value={this.state.selectedUser.description}
              onChange={this.handleDescription}
            />

            <CustomButton buttonName="Create new user " onClickHandler={this.createNewUser} />
            <h1>Users jsonPlacerHolder</h1>
            <div className="d-flex flex-row justify-content-center flex-wrap">
              {nUsers}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
      </>
    )
  }

}

export default App;
