import React from 'react'

const TableRow = ({time, eventName}) => {
    return (
        <tr>
            <td>{time}</td>
            <td>{eventName}</td>
        </tr>
    )
}

export default TableRow