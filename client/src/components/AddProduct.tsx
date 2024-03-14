import React, { useState } from 'react';


interface ProductForm {
  productName: string,
  price: number,
  quantity: number;
}

type addProduct = (product: ProductForm) => void;

interface AddProductProps {
  addProduct: addProduct;
}

const AddProduct: React.FC<AddProductProps> = ({ addProduct }) => {

  const [formData, setFormData] = useState<ProductForm>({
    productName: '',
    price: 0,
    quantity: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(formData);
  };

  return (
    <div className='flex flex-col py-4 pl-2 mx-auto my-2 shadow-2xl bg-pink-50 rounded w-11/12'>
        <h1 className='text-2xl text-center'>Add products</h1>
        <form onSubmit={handleSubmit}>
          <div className='pr-3 my-2'>
            <label>Product Name:</label>
            <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
          </div>
          <div className='pr-3 my-2'>
            <label>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1'/>
          </div>
          <div className='pr-3 my-2'>
            <label>Quantity:</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1'/>
          </div>
          <button type="submit" className='bg-blue-700 text-white py-2 px-4 mt-4 rounded-md text-center mx-auto self-start'>Add product</button>
        </form>
    </div>
  );
};

export default AddProduct;
