import React from 'react';
import './Database.css';
import {firestore} from './server';
import Dbcard from './Dbcard';
import add from './add.png';
import {Link,Router} from 'react-router-dom';
class Database extends React.Component
{
	constructor(props){
		super (props);
		this.state={
          users:[]
		}
	}
    f1 = async () => {
    const snapShot = await firestore.collection('Users').get();
    const docsArray = snapShot.docs;
    const docsArrayData = docsArray.map(doc => doc.data());
    return docsArrayData;
  }
  functionFirebase = async () => {
            const array = await this.f1();
            this.setState(Object.assign(this.state.users,{users:array}))
  }
  componentDidMount()
  {
    this.functionFirebase();
    console.log(this.state);
  }
	render(){
		return (
			<div className='r'>
    <div className="cl">
    {
      this.state.users.map((x,i)=>
        <Dbcard name={x.name}
              email={x.email}
              address={x.address}
              phNo={x.phNo}
              image={x.image}
              time={x.time}
        />
        )
    }
    <Link to='/form'><img className="addimg" src={add}/></Link>
    </div>
	</div>
			)
	}
}
export default Database;