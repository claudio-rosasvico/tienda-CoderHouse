import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// Context
export const CartContext = createContext(null);

//Provider
export const CartContextProvider = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);
  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const addItem = (item, quantity) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex(product => product.id == item.id);
    // Tener en cuenta que si no encuentra findIndex coincidencia, devuelve -1
    if (index != -1) {
    // el producto esta en el carrito
        cartCopy[index].quantity = cartCopy[index].quantity + quantity;
        cartCopy[index].subtotal = cartCopy[index].precio * cartCopy[index].quantity;
        setCart(cartCopy);

    } else {
    // el producto NO esta en el carrito
        const newItem = {
        ...item,
        quantity,
        subtotal: item.precio * quantity,
      };

      setCart([ ...cart, newItem ]);
    }

  };

  const toastAdd = () => { 
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito"
    });
  }
  
  const toastRemove = () => { 
    Toast.fire({
      icon: "info",
      title: "Carrito vacio"
    });
   }

  const removeItem = (id) => {
    const cartCopy = cart.filter(product => product.id != id);
    setCart(cartCopy);

    Toast.fire({
      icon: "info",
      title: "Producto eliminado del carrito"
    });
  };

  const cleanCart = () => {
    setCart([]);
  };

  const totalItem = () => {
    const newTotalProducts = cart.reduce( (acum, product) => acum + product.quantity, 0 );
    setTotalProducts(newTotalProducts);
  }
  
  const totalPrecioCart = () => {
    const newTotalPrecioCart = cart.reduce( (acum, product) => acum + product.subtotal, 0 );
    setTotalPrecio(newTotalPrecioCart);
  }

  const objectValues = {
    cart,
    totalProducts,
    totalPrecio,
    addItem,
    removeItem,
    cleanCart,
    toastAdd, 
    toastRemove
  };

  useEffect(() => {
    totalItem();
    totalPrecioCart();
    localStorage.setItem('cart', JSON.stringify(cart));
    return () => {
      
    }
  }, [cart])
  
  return (
    <CartContext.Provider value={objectValues}>
      {children}
    </CartContext.Provider>
  );
};
