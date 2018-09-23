import React, { Component } from 'react'
import Results from './Results'
import axios from 'axios'

export default class Search extends Component {
  state = {
    searchText: '',
    apiURL: `https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation`,
    busses: []
  }

  onTextChange = (event) => {
    this.setState({[event.target.name]: event.target.value}, () => {
      axios.get(`${this.state.apiURL}?stopid=${this.state.searchText}&format=json`)
      .then(res => this.setState({ busses: res.data.results }))
      .catch(err => console.log(err.code))
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <input style={{margin: '32px 0', backgroundColor: '#F8FAF9'}} className="form-control" name="searchText" value={this.state.searchText} onChange={this.onTextChange} type="text" placeholder="Enter Stop Number" />
        </div>
        { this.state.busses.length !== 0 ? (<Results busses={this.state.busses} />) : <div className="container"><div className="alert alert-warning" role="alert">No Stops Found. Please Try Again.</div></div> }
      </React.Fragment>
    )
  }
}