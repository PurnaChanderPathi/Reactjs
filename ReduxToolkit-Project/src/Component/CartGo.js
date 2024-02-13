import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Button, Card } from 'react-bootstrap';


const Cart=()=>{

    const dispatch=useDispatch()
   

    const products=useSelector(state=>state.Cart)


    const removeFromCart=(id)=>{
      dispatch(remove(id))
    }


    const cards = products?.map(product => {
      return (
          <div className='col-md-3' style={{ marginBottom: '10px'}} key={product.id}>
              <Card className='h-100'>
                  <div className='text-center'>
                      <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                  </div>
                  <Card.Body>
                      <Card.Title>{product.title}</Card.Title> 
                      <Card.Text>
                          INR: {product.price} 
                      </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ background: 'white' }}>
                      <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove From Cart</Button> 
                  </Card.Footer>
              </Card>
          </div>
      );
  });
  
    return(
        <div className='row'>
        {cards}
      </div>
    )
}
export default Cart