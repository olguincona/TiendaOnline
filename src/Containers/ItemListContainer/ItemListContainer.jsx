import React from 'react'
import { useState, useEffect } from 'react'
import ItemCount from '../../Components/ItemCount/ItemCount'

const ItemListContainer = ({ saludo, numero1, numero2 }) => {
  const[products, setProducts] = useState([]);
  const[error, setError] = useState(false);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    /* fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err)) */

      const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        catch (err) {
            console.log(err);
            setError(true)
        }
        finally {
            setLoading(false)
        }
      }
      getProducts();
  }, []);

  return (
    <>
        <h1 className='text-3xl font-bold'>{saludo}</h1>
        <ItemCount stock={5} initial={0}/>
        {loading ? <p>Loading...</p>:
          error ? <p>Error</p>:
            <ul>{products.map(product => <li key={product.id}>{product.title}</li>)}</ul>}
    </>
  )
}

export default ItemListContainer