import React from 'react'
import TableRow from './TableRow'

const Table = ({data}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Event Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => <TableRow key={index} {...row} />)}
            </tbody>
        </table>
    )
}

export default Table