import React from 'react'
import {
  Link,
  // useLocation,
  // useHistory
} from 'react-router-dom'

function Pagination(props) {
  const { total, perPage } = props
  // const location = useLocation()
  // const history = useHistory()
  const totalPage = Math.ceil(total / perPage)
  const pages = Array.from(Array(totalPage).keys())

  return (
    <div className="card m-3">
      <div className="card-body">
        <nav>
          <ul className="pagination">
            {
              (pages.map((page) => (
                <li key={page} className="page-item">
                  <Link
                    to={`/paginated-posts/${page + 1}`}
                    className="page-link"
                  >
                    {page + 1}
                  </Link>
                </li>
              )))
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
