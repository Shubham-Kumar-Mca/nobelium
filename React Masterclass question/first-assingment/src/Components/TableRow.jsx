import React from 'react'

const TableRow = ({ id, value }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{value}</td>
        </tr>
    )
}

export default TableRow