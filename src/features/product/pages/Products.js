import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProducts } from "../actions/product.actions";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("main useeffect called......")
    dispatch(apiGetAllProducts());
  }, []);

  

  return (
    <div>
      <div
        style={{
          width: "81vw",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ marginTop: "20px", marginLeft: "10px" }}>Products</h4>
        {
          user?.role === "admin" && 
          <>
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{ height: "50px", marginTop: "10px" }}
              onClick={()=>{navigate("/add-product")}}
            >
              + Add Product
            </button>
          </>
        }
      </div>
      <div
        className="row row-cols-1 row-cols-md-3"
        style={{ marginLeft: "70px" }}
      >
        {products.map((product, id) => {
          return <ProductCard product={product} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
