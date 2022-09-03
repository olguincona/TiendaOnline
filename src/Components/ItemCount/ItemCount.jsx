import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {

    const [cuenta, setCuenta] = useState(initial)

    

    const sumar = () => {
        if (cuenta < stock) {
            setCuenta(cuenta + 1)
        } if (cuenta >= stock) {
            alert("Haz llegado al limite de stock")
        }
    }

    const restar = () => {
        if (cuenta > initial) {
            //setCuenta(cuenta - 1)
            setCuenta(Math.max(cuenta - 1, 0))
        }
    }

    const onAdd = () => {
        alert(`Gracias compraste ${cuenta} productos`)
    }
    


  return (
    <>
        <div className='flex gap-6 py-6 px-10'>
            <button className='text-xl' onClick={restar}>-</button>
            <p className='text-xl font-bold'>{cuenta}</p>
            <button className='text-xl' onClick={sumar}>+</button>
        </div>
        <button className='bg-black p-3 text-white mx-3' onClick={onAdd}>Añadir a la Cesta</button>
    </>
  )
}

export default ItemCount