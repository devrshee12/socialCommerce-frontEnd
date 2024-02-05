

import { AsyncImage } from 'loadable-image'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Blur, } from 'transitions-kit'
import DeleteModal from '../../../sharedComponents/DeleteModal';
import { apiDeleteProduct } from '../actions/product.actions';
import Carousel from 'react-bootstrap/Carousel';


function ProductCard({product}) {
  const naviagate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onEdit = (e) => {
    e.preventDefault();
    console.log("on edit called");
    naviagate(`/edit-product/${product?._id}`)
  }

  const onDelete = () => {
    // write code for delete the product
    dispatch(apiDeleteProduct(product._id));
  }

  return (
    <div className="col mb-4" style={{width:"350px", cursor:"pointer"}}>
    <div className="card" style={{ width: "300px"}}>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      {/* <LazyLoadImage effect="blur" src={image?.src?.original} alt={image?.alt} height={250} width={250} className="card-img-top"  onLoad={() => {setLoading(true)}} placeholderSrc={`/logo512.png`}/> */}
      <Carousel>
        {
          product?.image.map((img) => {
            
            return (
              <Carousel.Item>
                <AsyncImage src={img} alt={product.desc} style={{height:"300px", width:"300px"}} Transition={Blur} error={<div style={{ background: '#222' }} />} loading='lazy'  onClick={() => {naviagate(`/product/${product._id}`)}}/>
              </Carousel.Item>
            )
          })

        }
        
      
    </Carousel>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.desc}</p>
        <h6 className="card-text">&#8377; {product.price}</h6>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          {
            user?.role === "admin" &&
            <>
              <button type="button" class="btn btn-outline-success" onClick={onEdit}>Edit</button>
              <button type="button" class="btn btn-outline-danger" onClick={() => {setShowDeleteModal(true)}}>DELETE</button>
            </>
          }
        <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} onDelete={onDelete} body={`Are you sure you want to DELETE the product ? `}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductCard;