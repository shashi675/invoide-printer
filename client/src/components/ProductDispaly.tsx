import React, { useState } from 'react';


interface ProductForm {
  productName: string,
  price: number,
  quantity: number
}

type deleteProduct = (product: ProductForm) => void;

interface ProductComponentProps {
  product: ProductForm,
  deleteProduct: deleteProduct
}

const ProductDisplay: React.FC<ProductComponentProps> = ({ product, deleteProduct }) => {

  return (
    <div className='flex justify-between items-center py-4 px-2 mx-auto my-2 shadow-2xl bg-pink-50 rounded w-11/12'>
        <div>
          <p>Product Name : {product.productName}</p>
          <p>Product Quantity : {product.price}</p>
          <p>Product Price : {product.quantity}</p>
        </div>
        <button onClick={() => deleteProduct(product)} className='bg-red-500 text-white py-2 px-4 rounded-md'>Delete Product</button>
    </div>
  );
};

export default ProductDisplay;
