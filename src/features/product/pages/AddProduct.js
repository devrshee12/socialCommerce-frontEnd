import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
import { useDispatch } from "react-redux";
import { apiAddProduct } from "../actions/product.actions";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name:"",
    desc: "",
    quantity: 1,
    price: 0,
    image: []
  })


  const handleInput = (e) => {
    setFormData((prevState) => ({
          ...prevState,
          [e.target.name]:e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data: ", formData);
    dispatch(apiAddProduct(formData, navigate));
  }

  return (
    <div style={{width:"100vw",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <form style={{ width:"50%"}}>
       

          <legend style={{fontWeight:"bold"}}>Add Product</legend>
          



        <div style={{display:"flex", justifyContent:"space-between"}}>

          <div class="form-group" style={{width:"45%"}}>
            <label for="exampleInputEmail1" class="form-label mt-4">
              Name of Product
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name of product"
              value={formData?.name}
              onChange={handleInput}
            />
          </div>
          <div class="form-group" style={{ width:"50%"}}>
            <label for="exampleTextarea" class="form-label mt-4">
              Description of Product
            </label>
            <textarea
              class="form-control"
              id="exampleTextarea"
              name="desc"
              rows="3"
              spellcheck="false"
              placeholder="Enter Description of product"
              value={formData?.desc}
              onChange={handleInput}
            ></textarea>
          </div>

        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div class="form-group" style={{width:"45%"}}>
            <label for="exampleInputEmail1" class="form-label mt-4">
              Quantity
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              name="quantity"
              aria-describedby="emailHelp"
              placeholder="Enter quantity"
              value={formData?.quantity}
              onChange={handleInput}
            />
            
          </div>
          <div class="form-group" style={{width: "50%"}}>
            <label for="exampleInputEmail1" class="form-label mt-4">
              Price
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="price"
              aria-describedby="emailHelp"
              placeholder="Enter price"
              value={formData?.price}
              onChange={handleInput}
            />
            
          </div>


        </div>

        <div class="form-group">
          {/* <label for="formFile" class="form-label mt-4">Add Photos of Product</label>
          <input class="form-control" type="file" id="formFile"/> */}
          <div>
            <ImageUpload setFormData={setFormData} title={"Add product photos"}/>
            {
              formData.image.length > 0 && (
              
                formData.image.map((el) => {
                  return <AsyncImage src={el} style={{height:"100px", width:"100px"}} Transition={Blur}/>
  
                })
              )

            }
          </div>
            
            
          
        </div>
        <div style={{display:"flex",  justifyContent:"space-between", marginTop:"15px"}}>
          
          <button type="submit" class="btn btn-outline-primary" style={{height:"40px"}} onClick={handleSubmit}>Submit</button>
          <button type="submit" class="btn btn-outline-danger" style={{height:"40px"}} onClick={() => {navigate("/")}}>Close</button>


        </div>
      </form>
    </div>
  );
};

export default AddProduct;
