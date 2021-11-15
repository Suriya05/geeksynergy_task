import React from 'react'
import axios from 'axios'
class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      category: '',
      language: '',
      genre: '',
      sort: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('https://hoblist.com/api/movieList', this.state)
      .then(response =>{
        alert("Post request successfull "+ response)
       
      })
      .catch(error => {
       alert(error)
      })
  }

  render() {
    const {category, language, genre, sort} = this.state
    return (
      <div className="container">
         <form className="m-5" onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label>Category</label>
                    <input name="category" type="text" className="form-control" onChange={this.changeHandler} placeholder="movies"  />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <input name="language" type="text" className="form-control" onChange={this.changeHandler}  placeholder="kannada"  />
                </div>


                <div className="form-group">
                    <label>Genre</label>
                    <input name="genre" type="text" className="form-control" onChange={this.changeHandler}  placeholder="all"  />
                </div>

                <div className="form-group">
                    <label>Sort</label>
                    <input name="sort" type="text" className="form-control" onChange={this.changeHandler}  placeholder="voting"  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg m-2">Post</button>
            </form>
      </div>
    )
  }
}

export default Home;
