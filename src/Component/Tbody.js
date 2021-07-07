import React from 'react'

function Tbody(props) {
    console.log(props,'myprops2')
    return (
       
            <tr key={props.item.id}>
                Hello
                <td>{props.item.employee_name}</td>
                <td>{props.item.employee_salary}</td>
                <td>{props.item.employee_age}</td>
            </tr>
    )
}

export default Tbody
