import { AsyncImage } from 'loadable-image';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Blur } from 'transitions-kit';

function SpecificProduct({product}) {
    // console.log("product is : ", product)
  return (
    <>

    {
        product ?  
            <Card style={{ width: '70rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>


                <AsyncImage src={product.image} alt={product?.desc} style={{height:"350px", width:"350px"}} Transition={Blur} loading='lazy'/>
                <Card.Body>
                    <Card.Title>{product?.name}</Card.Title>
                    <Card.Text>
                    {product?.desc}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price : {product.price}</ListGroup.Item>
                    <ListGroup.Item>Add to Cart</ListGroup.Item>
                    {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </div>
            </Card> 
            : <div> loading...</div>
    }
    </>
  );
}

export default SpecificProduct;