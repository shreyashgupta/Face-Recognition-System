import React from 'react';
import {Link,Router} from 'react-router-dom';
import { storage } from './server';
import { firestore } from './server';
import FormInput from './Formip';
import './form.scss';
class Form extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phNo: '',
            email: '',
            address:'',
            file: null,
            image: ''
        }
    }

    handleSubmit = async (event) => {
        const { name, phNo, email, image, address, file } = this.state;
        console.log(this.state);
        if (!file) {
            alert("Upload image first");
        }
        else if (image.length === 0) {
            alert("You've chose the image but not uploaded it");
        }
        else if (!(name.length > 0 && phNo.length > 0 && email.length > 0)) {
            alert("Enter all the details");
        }
        else {
            const userRef = firestore.doc(`Users/${name}`);
            const snapShot = await firestore.collection('Users').get();
            
            const registeredUser = {name, phNo, email, image, address};

            try {
                await userRef.set(registeredUser);
                this.setState({
	            name: '',
	            phNo: '',
	            email: '',
	            address:'',
	            file: null,
	            image: ''
                })
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        }
    }



    handleFileUpload = (event) => {
        const { file } = this.state;
        if (!file) {
            alert("Upload image and then click on upload button");
        } else {

            const uploadTask = storage.ref(`${file.name}`).put(file);

            uploadTask.on('state_changed',
                (snapShot) => { alert("uploading in progress") },
                (error) => { console.log(error) },
                () => {
                    storage
                        .ref('')
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            alert("Image_uploaded");
                            console.log("image uploaded");
                            this.setState({image: url }, () => console.log(this.state));
                        })
                });
        }
    }



    handleFileChange = (event) => {
        if (event.target.files[0]) {
            this.setState({ file: event.target.files[0] });
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
        }

    render() {

        return (
            <center>
                <div className='registration'>
                    <h1>Add User</h1>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='name'
                            type='text'
                            handleChange={this.handleChange}
                            value={this.state.name}
                            label='Full Name'
                            required
                        />
                        <FormInput
                            name='phNo'
                            type='text'
                            handleChange={this.handleChange}
                            value={this.state.phNo}
                            label='Mobile Number'
                            required
                        />
                        <FormInput
                            name='email'
                            type='email'
                            handleChange={this.handleChange}
                            value={this.state.email}
                            label='Email'
                            required
                        />
                       <FormInput
                            name='address'
                            type='text'
                            handleChange={this.handleChange}
                            value={this.state.address}
                            label='Address'
                            required
                        />
                        <input type='file' onChange={this.handleFileChange} />
                        <button type='button' onClick={this.handleFileUpload}> Upload </button><br /><br />
                        <button type='button' onClick={this.handleSubmit}> Register </button>
                    </form>
                </div>
            </center>
        )
    }
}
export default Form;