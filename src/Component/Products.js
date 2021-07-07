import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import CompareTable from './CompareTable'
import { fetchItems } from '../redux/'
import { useSelector, useDispatch } from 'react-redux'
function Products() {

    const listproduct = useSelector(state => state.product.data)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    const [compareList, setcompareList] = useState([])

    const addTocomparelist = (newrecord) => {
        setcompareList([...compareList, newrecord])
        console.log(compareList, 'rj')
        console.log(newrecord, 'newrecord')
    }

    return (
        <div>
            <div className="productsgrid">
                {
                    !loading ?
                        !error ?

                            listproduct.length > 0 && listproduct.map(singleitem =>
                                <SingleProduct key={singleitem.id} item={singleitem} addtolist={addTocomparelist} />
                            ) : error : "Loading..."
                }
            </div>
            <div>
                <CompareTable comparelist={compareList} />
            </div>
        </div>
    )
}

export default Products
