import React, { useState } from 'react';


interface ProductForm {
  productName: string,
  price: number,
  quantity: number
}

interface ProductComponentProps {
  product: ProductForm,
}

const ProductDisplay: React.FC<ProductComponentProps> = ({ product }) => {

  return (
    <div className='justify-between items-center py-2 px-2 mx-auto bg-pink-50 w-11/12'>
        <div className='flex justify-between'>
          <p className='items-start'>{product.productName}</p>
          <p className='self-start'>{product.price}</p>
          <p className='self-start'>{product.quantity}</p>
          <p className='self-start'>{product.price * product.quantity}</p>
        </div>
    </div>
  );
};

export default ProductDisplay;
