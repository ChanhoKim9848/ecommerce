import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";


// Admin Panel to add item
const Add = () => {

  const url="http://localhost:4000";


  // Image variable to store in the database
  const [image, setImage] = useState(false);

  // Data state variable
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  // Update state variable
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // whenever new data is uploaded
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);


  // API call
  const onSubmitHandler = async (event) => {
    // after submitting data, this code make sure the page does not reload
    event.preventDefault();

    // creating API
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    // upload formData and save into the database
    // and image will be saved into backend folder
    const response = await axios.post(`${url}/api/item/add`, formData)
    if(response.data.success){
      setData({
        // name: "",
        // description: "",
        // price: "",
        // category: ""
      })
      setImage(false)
      console.log("success");
    }
    else{
      console.log("err");
    }
  };

  return (
    <div className="add">
      <form className="flex-col"onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col" >
          {/* image upload function */}
          <p>Upload Image</p>
          <label htmlFor="image">
            {/* image upload preview */}
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>

          {/* image upload */}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* product name setting */}
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          {/* description setting */}
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            {/* item category setting */}
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">js</option>
            </select>
          </div>
          <div className="add-price flex-col">
            {/* item price setting */}
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="£"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
