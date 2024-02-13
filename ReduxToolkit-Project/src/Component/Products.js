import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import {add} from '../store/cartSlice'
import { getProduct } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.products)
    console.log(data);
    // console.log("getProduct",getProduct);
    // const [products, getProducts] = useState([]);
    useEffect(() => {
        // dispatch an action for fetchProducts
            dispatch(getProduct());
        //api 
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, [])
    // console.log(data,"products");



    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product));

    }

    
    // const cards = data?.map(function(product) {
    //     return (
    //         <div className='col-md-3' style={{ marginBottom: '10px'}} key={product.id}>
    //             <Card className='h-100'>
    //                 <div className='text-center'>
    //                     <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
    //                 </div>
    //                 <Card.Body>
    //                     <Card.Title>{product.Title}</Card.Title>
    //                     <Card.Text>
    //                         INR: {product.price}
    //                     </Card.Text>
    //                 </Card.Body>
    //                 <Card.Footer style={{ background: 'white' }}>
    //                     <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
    //                 </Card.Footer>
    //             </Card>
    //         </div>
    //     );
    // });

    
    return (
        <div>
            <h1>Product DashBoard</h1>
            <div className='row'>
                {
                    data?.map(function(product) {
                        return (
                            <div className='col-md-3' style={{ marginBottom: '10px'}} key={product.id}>
                                <Card className='h-100'>
                                    <div className='text-center'>
                                        <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{product.Title}</Card.Title>
                                        <Card.Text>
                                            INR: {product.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ background: 'white' }}>
                                        <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                                    </Card.Footer>
                                </Card>
                            </div>
                        );
                    })
                }
            </div>
        </div>  
    )
}
export default  Products
