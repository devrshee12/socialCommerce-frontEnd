

import { AsyncImage } from 'loadable-image'
import { useNavigate } from 'react-router-dom';
import { Blur, } from 'transitions-kit'

function ProductCard({product}) {
  const naviagate = useNavigate();
  return (
    <div className="col mb-4" style={{width:"350px", cursor:"pointer"}} onClick={() => {naviagate(`/product/${product._id}`)}}>
    <div className="card" style={{ width: "300px"}}>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      {/* <LazyLoadImage effect="blur" src={image?.src?.original} alt={image?.alt} height={250} width={250} className="card-img-top"  onLoad={() => {setLoading(true)}} placeholderSrc={`/logo512.png`}/> */}
      <AsyncImage src={product.image[0]} alt={product.desc} style={{height:"250px", width:"250px"}} className="card-img-top" Transition={Blur} error={<div style={{ background: '#222' }} />} loading='lazy'/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.desc}</p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button type="button" class="btn btn-outline-success">Edit</button>
            <button type="button" class="btn btn-outline-danger">DELETE</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductCard;