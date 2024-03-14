import React, { useState } from 'react';
import AddProduct from '../components/AddProduct';
import ProductDisplay from '../components/ProductDispaly';



interface Product {
    productName: string,
    price: number,
    quantity: number
}


const Home: React.FC = () => {

    const [products, setProducts] = useState<Array<Product>>([]);

    const addProduct = (product: Product) => {
        setProducts(products => [...products, product]);
    }

  return (
    <div className='py-4 min-h-screen'>
        <h1 className='text-2xl py-4 text-center'>Your products</h1>
        <div className=''>
            { (products.length !== 0) ?
                <div className='flex justify-between items-center py-4 px-2 mx-auto my-2 shadow-2xl bg-pink-50 rounded w-11/12'>
                    <p>Product Name</p>
                    <p>Product Quantity</p>
                    <p>Product Price</p>
                    <p>Product Total</p>
                </div> : <div className='py-4 pl-2 mx-auto my-2 shadow-2xl bg-pink-50 rounded w-11/12'>No products to show</div> 
            }
            { 
            products?.map((product) => { 
                return <ProductDisplay product={product} />
            })
            }
        </div>
        
        <AddProduct addProduct={addProduct} />
    </div>
  );
};

export default Home;
