import React from 'react'
import TableRow from './TableRow'

const Table = ({data}) => {
  return (
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => <TableRow key={row.id} {...row} />)}
        </tbody>
    </table>
  )
}

export default Table