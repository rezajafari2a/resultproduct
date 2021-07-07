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
    const [listid, setlistid] = useState([])

    const addTocomparelist = (newrecord) => {
        if (listid.indexOf(newrecord.id) === -1) {
            setlistid([...listid, newrecord.id])
            setcompareList([...compareList, newrecord])
            alert("done")
        }
        else {
            alert("it's been Added")
        }
    }
    const removeFromList = (id) => {
        const mylist = listid.indexOf(id);
        if (mylist > -1) {
            const newdata=listid.splice(mylist, 1);
            setlistid([newdata])
        }
    }

    return (
        <div>
            <div className="productsgrid">
                {
                    !loading ?
                        !error ?

                            listproduct.length > 0 && listproduct.map(singleitem =>
                                <SingleProduct key={singleitem.id}
                                    item={singleitem} addtolist={addTocomparelist}
                                    active={listid.indexOf(singleitem.id)}
                                    removeFromList={removeFromList}
                                />
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
