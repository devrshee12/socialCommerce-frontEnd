import { AsyncImage } from 'loadable-image';
import { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Blur } from 'transitions-kit';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { apiAddProductCart } from '../../cart/actions/cart.actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SpecificProduct({product}) {
    useEffect(() => {
        // console.log("here in specific product loda image array ", product.image);
        console.log("SPECIFIC PRODUCT CALLED : ", product);

    },[])
    // console.log("product is : ", product)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);
    const {cart} = useSelector((state) => state.cart);
    const [quantity, setQuantity] = useState(1);
    const addToCart = () => {
        // console.log("add to cart ",  product._id, user._id);
        dispatch(apiAddProductCart({productId: product._id, userId: user._id, quantity}))
    }

    const onDescrease = () => {
        if(quantity - 1 > 0){
            setQuantity(quantity - 1)
        }
        
    }

    const onIncrease = () => {
        if(quantity + 1 <= product.quantity){
            setQuantity(quantity + 1)
        }
        else{
            toast.error("Dont have more quantity")
        }
    }
  return (
    <>

    {
        product?.image ?  
            <Card style={{ width: '70rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <div style={{display:"flex", justifyContent:"space-between", height:"500px"}}>

            <div style={{width:"500px"}}>

                <Carousel>

                {
                    product?.image.map((img) => {
                        return (
                            <Carousel.Item>
                                <AsyncImage src={img} alt={product.desc} style={{height:"500px", width:"500px"}} Transition={Blur} error={<div style={{ background: '#222' }} />} loading='lazy'  />
                            </Carousel.Item>
                        )
                    })
                }
                </Carousel>

            </div>
                
            <div style={{marginRight:"200px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
            
                <div>
                <Card.Body>
                    <Card.Title>{product?.name}</Card.Title>
                    <Card.Text>
                    {product?.desc}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{fontWeight:"bold"}}>&#8377; {product.price}</ListGroup.Item>
                    <div style={{display:"flex", width:"150px", justifyContent:"space-between", alignItems:"center"}}>
                    <button type="button" class="btn btn-light" onClick={onDescrease}>-</button>
                    <p style={{marginTop:"10px"}}>{quantity}</p>
                    <button type="button" class="btn btn-light" onClick={onIncrease}>+</button>

                    </div>
                    {
                        cart?.products?.some((el) => {
                            return el.product === product._id
                        }) ? <button type="button" class="btn btn-primary" style={{width:"250px", marginLeft:"10px", marginTop:"30px"}} disabled>Already Added to Cart</button>:
                    <button type="button" class="btn btn-outline-primary" style={{width:"250px", marginLeft:"10px", marginTop:"30px"}} onClick={addToCart}>Add to Cart</button>
                    }
                    {/* <ListGroup.Item>Add to Cart</ListGroup.Item> */}
                    {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}

                </div>

            </div>
                {/* <AsyncImage src={product.image} alt={product?.desc} style={{height:"350px", width:"350px"}} Transition={Blur} loading='lazy'/> */}
            </div>
            </Card> 
            : <div> loading...</div>
    }
    </>
  );
}

export default SpecificProduct;