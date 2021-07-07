import React from 'react'
import Tbody from './Tbody'
function CompareTable(props) {
    console.log(props, 'myprops')
    return (
        <div className="gridCompare">
            {/* <table>
                <thead>
                    {
                        props.comparelist && props.comparelist.map((item, index) =>
                            <Tbody key={index} item={item} />
                        )
                    }
                </thead>
                <tbody>
                    <tr>
                        <th>Employee name</th>
                        <th>Employee age</th>
                        <th>Employee salary</th>
                    </tr>
                </tbody>
            </table> */}
            <table>
                <tr>
                    <th style={{ width: "50%" }}>Features</th>
                    {
                        props.comparelist && props.comparelist.map((item, index) =>
                            <th>{item.employee_name}</th>
                        )
                    }
                </tr>
                {
                    props.comparelist && props.comparelist.map((item, index) =>
                        <tr>
                            <td>{item.employee_age}</td>
                            <td>{item.employee_salary}</td>
                        </tr>
                    )}
            </table>

        </div>
    )
}

export default CompareTable
