import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'


const Add = ({url}) => {

    const [image,setImage] = useState(false);
    const [data,setData] = useState({
      name:"",
      description:"",
      price:"",
      category:"HTML5"
    })

      const onChangeHandler = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setData(data=>({...data,[name]:value}))
      }

      // After click submit button, data will be sent to database
      const onSubmitHander = async(event) => {
          event.preventDefault(); // after submit, page does not refresh
          const formData = new FormData();
          formData.append("name",data.name)
          formData.append("description",data.description)
          formData.append("price",Number(data.price))
          formData.append("category",data.category)
          formData.append("image",image)

          const response = await axios.post(`${url}/api/item/add`, formData);
          if(response.data.success){
              setData({
                name:"",
                description:"",
                price:"",
                category:"HTML5"
              })
              setImage(false)
              toast.success(response.data.message)
          }
          else{
              toast.error(response.data.message)
          }
      }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHander}>
        <div className='add-img-upload flex-col' >
          <p>Upload Image</p>
          <label htmlFor="image">
            {/* Image shows after upload */}
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">

          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">

          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="html">HTML5</option>
              <option value="css">CSS3</option>
              <option value="js">JavaScript</option>
            </select>
          </div>
          <div className="add-price flex-col">

            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='£'/>
          </div>
        </div>
        <button type="submit" className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
