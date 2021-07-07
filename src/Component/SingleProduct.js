import React from 'react'

function SingleProduct(props) {
    console.log(props)
    const { item } = props
    return (
        <div className="singleproduct">
            <div className="wrappname">
                <img src='/assets/img/cherry.JPG' />
                <div className="active">
                </div>
                <button className="addbutton" onClick={() => props.addtolist({
                    'id': item.id,
                    'employee_name': item.employee_name,
                    'employee_salary': item.employee_salary,
                    'employee_age': item.employee_age,
                })}>
                    COMPARE
                </button>
            </div>
            <div className="griddetail">
                <p className="employee_name"> {item.employee_name}</p>
                <p className="salary">${item.employee_salary} </p>
                <p className="age"> {item.employee_age}</p>
            </div>
        </div>
    )
}

export default SingleProduct
