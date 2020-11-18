import React, { useState } from 'react'
import Axios from 'axios'

function CheckRoute() {
  const [url, setUrl] = useState('')

  function handleGo() {
    Axios.get(url)
  }

  return (
    <div className="card" style={{ position: 'absolute', maxWidth: '200px', bottom: '10px', left: '10px' }}>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="check-route">Route</label>
            <input className="form-control" type="text" id="check-route" onChange={(e) => setUrl(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleGo}>Go</button>
        </form>
      </div>
    </div>
  )
}

export default CheckRoute
