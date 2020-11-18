import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function CheckRoute() {
  const [route, setRoute] = useState('')
  const history = useHistory()
  const location = useLocation()

  function handleGo() {
    history.push(route)
  }

  return (
    <div className="card" style={{ position: 'absolute', maxWidth: '200px', bottom: '10px', left: '10px' }}>
      <div className="card-body">
        <div>
          path:
          { location.pathname }
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="check-route">Route</label>
            <input className="form-control" type="text" id="check-route" onChange={(e) => setRoute(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleGo}>Go</button>
        </form>
      </div>
    </div>
  )
}

export default CheckRoute
