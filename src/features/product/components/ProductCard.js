

import { AsyncImage } from 'loadable-image'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Blur, } from 'transitions-kit'
import DeleteModal from '../../../sharedComponents/DeleteModal';
import { apiDeleteProduct } from '../actions/product.actions';

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
      <AsyncImage src={product.image[0]} alt={product.desc} style={{height:"250px", width:"250px"}} className="card-img-top" Transition={Blur} error={<div style={{ background: '#222' }} />} loading='lazy'  onClick={() => {naviagate(`/product/${product._id}`)}}/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.desc}</p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          {
            user?.role === "admin" &&
            <>
              <button type="button" class="btn btn-outline-success" onClick={onEdit}>Edit</button>
              <button type="button" class="btn btn-outline-danger" onClick={() => {setShowDeleteModal(true)}}>DELETE</button>
            </>
          }
        <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} onDelete={onDelete}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductCard;