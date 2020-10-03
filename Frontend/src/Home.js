import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './server' 
import {firestore} from './server'
import Card from './Card.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import unk from './unk.jpg';
class Home extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          visitors:[],
          users:[],
          user_info:{}
        }
    }
    f1 = async () => {
    const snapShot = await firestore.collection('User').get();
    const docsArray = snapShot.docs;
    const docsArrayData = docsArray.map(doc => doc.data());
    return docsArrayData;
  }
  functionFirebase = async () => {
            const array = await this.f1();
            this.setState(Object.assign(this.state.users,{users:array}))
          let temp={};
    for(let i=0;i<this.state.users.length ;i++)
      {
        temp[this.state.users[i].name]=i;
      }

    this.setState(Object.assign(this.state.user_info,{user_info:temp}))
  }
  componentDidMount()
  {
    this.functionFirebase();
    var db=firebase.database();
    var ref=db.ref('facerec-437f1/visitor');
    ref.on('value',(x)=>{
      var temp=x.val();
      var keys=Object.keys(temp);
      console.log(keys)
      var data=[];
      for(let i=keys.length-1;i>=0;i--)
        {
          var k=keys[i]
          var  init=temp[k].name;
          var tim=temp[k].time;
          data.push({
            name:init,
            time:tim
          })
        }
      this.setState(Object.assign(this.state.visitors,{visitors:data}))
    });
    console.log(this.state);
  }

  render(){
    return(
    <div className="App">
    <div className="cardlist">
    {
      this.state.visitors.length==0?"nothing":
      this.state.visitors.map((x,i)=>
        
        x.name in this.state.user_info?
        <Card name={this.state.users[this.state.user_info[x.name]].name}
              email={"testing"}
              address={this.state.users[this.state.user_info[x.name]].address}
              phNo={this.state.users[this.state.user_info[x.name]].phNo}
              image={this.state.users[this.state.user_info[x.name]].image}
              time={x.time}
        />
        // <div>
        // <img src={this.state.users[this.state.user_info[x.name]].image}  style={{width:50+'px'}}/>
        // <h1>{this.state.users[this.state.user_info[x.name]].name}</h1>
        // <h1>{this.state.users[this.state.user_info[x.name]].address}</h1>
        // <h1>{this.state.users[this.state.user_info[x.name]].phNo}</h1>  
        // </div>
        :
            <Card name={x.name}
              email={"UNKNOWN"}
              address={"UNKNOWN"}
              phNo={"UNKNOWN"}
              image={unk}
              time={x.time}
        />
    

        )
    }
    </div>
    </div>
    );
}
}

export default Home;
