import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Results extends Component {
  render() {
    let stopListResults
    const { busses } = this.props

    if (busses) {
      stopListResults = (
        <div className="container">
          <ul className="list-group">
            {busses.map(bus => (
              <li key={bus.departuredatetime} className="list-group-item" style={{padding: '16px 0 0 16px',border: 'none', backgroundColor: '#F2F1F0', margin: '0 0 2px 0'}}>
                <p style={{fontWeight: 700, backgroundColor:'#2D2C2A', color: '#FFAF25', padding:'4px 8px', borderRadius: '5px', width: 'max-content'}}>{bus.route}</p>
                {bus.duetime === 'Due' ? (<p>{bus.duetime}</p>) : (<p style={{color:'#443823'}}>{bus.duetime} <span style={{color: '#98948D'}}>mins</span></p>)}
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      stopListResults = null
    }
    return (
      <div className="container" style={{padding: '0'}}>
        {stopListResults}
      </div>
    )
  }
}

Results.propTypes = {
  busses: PropTypes.array.isRequired
}

export default Results