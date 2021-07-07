import React from 'react'

function Tbody(props) {
    console.log(props,'myprops2')
    return (

            <th key={props.item.id}>
                
                <tr>{props.item.employee_name}</tr>
                <td>{props.item.employee_salary}</td>
                <td>{props.item.employee_age}</td>
            </th>
    )
}

export default Tbody
