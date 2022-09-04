import React, {useState, useContext} from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'


const Cart = () => {
    const {products} = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("")

    const datosComprador = {
        nombre: 'Felipe',
        apellido: 'Olguin',
        email: 'Felipeolguin@gmail.com',
      }

      const finalizarCompra = ({product}) => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
          datosComprador,
          item: [ product.title, product.id ],
          date: serverTimestamp(),
          total: 500
        })
        .then((result) =>{
          setIdVenta(result.id)
        })
    
        const updateCollection = doc(db, "productos",product.idVenta);
        updateDoc(updateCollection,[product.stock-product.qty])
      }

  return (
    <>
      {products.lenght === 0
        ?
        <h1>No hay productos en el carro, busca <Link to='/'>aca</Link></h1>
        : <>{products.map(product => <h1 key={product.id}>{product.title}</h1>)}
        <button onClick={finalizarCompra}>Finalizar Compra</button>
          </>
      }
    </>
  )
}

export default Cart