import React from 'react';

class Register extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
        name: '',
        email: '',
        password: '',
        phone: '',
        profession: ''
    }
}


 // Form Events
 handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}

// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('user',JSON.stringify(this.state));
}
componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));
 
    if (localStorage.getItem('user')) {
        this.setState({
            name: this.userData.name,
            email: this.userData.email,
            password: this.userData.password,
            phone: this.userData.phone,
            profession: this.userData.profession
    })
} else {
    this.setState({
        name: '',
        email: '',
        password: '',
        phone: '',
        profession: ''
    })
}
}

  render() {
    return (
        <div className="container p-3">
            <h2 className="text-center">Register</h2>
        <form  onSubmit={this.handleFormSubmit}>
            <div className="form-group m-2">
                <label>Name</label>
                <input name="name" type="text"  onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group m-2">
                <label>Password</label>
                <input name="password" type="password"  onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group m-2">
                <label>Email</label>
                <input name="email" type="mail"  onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group m-2">
                <label>Phone Number</label>
                <input name="phone" type="text"  onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group m-2">
            <label>Profession</label>
            <select name="profession"  onChange={this.handleChange} className="form-control" id="FormControlSelect1">
                <option>Developer</option>
                <option>Tester</option>
                <option>HR</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block m-2">Sign Up</button>
        </form>
    </div>
    )
  }
}

export default Register;
