import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        } if (count >= stock) {
            alert("Haz llegado al limite de stock")
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(Math.max(count - 1, 0))
        }
    }

    const añadir = () => {
        onAdd(count)
        alert(`Gracias añadiste ${count} productos a tu carro`)
    }
    


  return (
        <div style={styles.container}>
            <div style={styles.containerButtons}>
                <button style={styles.button} onClick={() => restar()}>-</button>
                <h2>{count}</h2>
                <button style={styles.button} onClick={() => sumar()}>+</button>
            </div>
            <button style={styles.buttonAdd} onClick={() => añadir()}>Agregar al carrito</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px'
    },
    button: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px",
    },
    containerButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonAdd: {
        width: "30%",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "grey",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
    }

}

export default ItemCount