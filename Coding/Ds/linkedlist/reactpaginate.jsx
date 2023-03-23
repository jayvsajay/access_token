import React from 'react'
import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
function App() {

    const [currentPage, setCurrentPage] = useState
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Data.slice(firstIndex,lastIndex);
    const npage=Math.ceil(Data.length/recordsPerPage)
    const numbers=[...Array(npage+1).keys()].slice(1)
return (
<div>
<table className='table'>
<thead>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</thead>
<tbody>
{Data.map((d,i) => (
<tr key={i}>
<td>{d.Id}/</td>
<td>{d.email}/</td>
<td>{d.Id}/</td>
</tr>
))}
</tbody>
</table>
<nav>
                <ul className='pagination'>
                    <li className='page-item'>
                <a href='#' className='page-link'
                    onClick={prePage}>Prev</a>
            </li>

            {
                numbers.map((n, i) => (

                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                          <a href='#' className='page-item'onClick={changeCPage} >{n}</a>
                     </li>
                    ))
                }

                      <li className='page-item'>

                          <a href='#' className='page-link' onClick={nextPage}>Next</a>

                      </li>

                    </ul> 
                 </nav>
</div>
)
}
export default App;