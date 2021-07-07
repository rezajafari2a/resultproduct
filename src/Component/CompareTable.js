import React from 'react'
import Tbody from './Tbody'
function CompareTable(props) {
    console.log(props,'myprops')
    return (
        <div className="gridCompare">
            <table>
                <thead>
                    <tr>
                        <th>Employee name</th>
                        <th>Employee age</th>
                        <th>Employee salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.comparelist && props.comparelist.map((item,index)=>
                            <Tbody key={index} item={item}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CompareTable
