
const productsList = [
  { id: 1, nombre: "iPhone 13", marca: "Apple", precio: 200000, categoria: "celulares", stock: 50, detalle: "Nuevo modelo con pantalla OLED y cámara mejorada.", imagen: "iphone13.png" },
  { id: 2, nombre: "Samsung Galaxy S21", marca: "Samsung", precio: 180000, categoria: "celulares", stock: 40, detalle: "Potente dispositivo con cámara de alta resolución.", imagen: "samsungs21.png" },
  { id: 3, nombre: "Xiaomi Redmi Note 10", marca: "Xiaomi", precio: 90000, categoria: "celulares", stock: 30, detalle: "Excelente relación calidad-precio con pantalla AMOLED.", imagen: "redminote10.png" },
  { id: 4, nombre: "MacBook Pro 2021", marca: "Apple", precio: 350000, categoria: "notebooks", stock: 20, detalle: "Potente laptop con procesador M1 y pantalla retina.", imagen: "macbookpro2021.png" },
  { id: 5, nombre: "Dell XPS 15", marca: "Dell", precio: 300000, categoria: "notebooks", stock: 25, detalle: "Portátil premium con pantalla táctil y diseño elegante.", imagen: "dellxps15.png" },
  { id: 6, nombre: "Lenovo ThinkPad X1 Carbon", marca: "Lenovo", precio: 280000, categoria: "notebooks", stock: 15, detalle: "Laptop empresarial ultraligera y resistente.", imagen: "thinkpadx1carbon.png" },
  { id: 7, nombre: "Teclado mecánico RGB", marca: "Razer", precio: 15000, categoria: "accesoriosPC", stock: 100, detalle: "Teclado mecánico con retroiluminación RGB personalizable.", imagen: "tecladorgb.png" },
  { id: 8, nombre: "Logitech G502 HERO", marca: "Logitech", precio: 12000, categoria: "accesoriosPC", stock: 80, detalle: "Mouse gaming con sensor óptico de alta precisión.", imagen: "logitechg502.png" },
  { id: 9, nombre: "Monitor LG UltraGear", marca: "LG", precio: 80000, categoria: "accesoriosPC", stock: 35, detalle: "Monitor gaming de alta velocidad de actualización.", imagen: "lgultragear.png" },
  { id: 10, nombre: "Motorola G14", marca: "Motorola", precio: 280000, categoria: "celulares", stock: 20, detalle: "Almacenamiento de 128 GB. Memoria RAM de 4 GB. Pantalla de 6.497″. Bateria: 5000 mAh", imagen: "motorolaG14.png" },
  { id: 11, nombre: "Samsung Galaxy Buds Pro", marca: "Samsung", precio: 25000, categoria: "accesoriosPC", stock: 50, detalle: "Auriculares inalámbricos con cancelación de ruido.", imagen: "galaxybudspro.png" },
  { id: 12, nombre: "Notebook HP 15-fc0024la", marca: "HP", precio: 25000, categoria: "notebooks", stock: 10, detalle: "AMD Ryzen™ 5 7520U. 8 GB de RAM LPDDR5-5500. Windows 11. Pantalla FHD.", imagen: "NotebookHP15.png" }
];

// ;) ;) 
export const getProducts = () => {

  return new Promise((resolve, reject) => {

    if (productsList.length > 0) {

      setTimeout(() => {
        resolve(productsList);
      }, 2000)
    } else {
      reject("No hay productos");
    }

  })
}

export const getProduct = (id) => {

  return new Promise((resolve, reject) => {

    if (productsList.length > 0) {
      console.log('id:' + id);
      const product = productsList.find((p) => p.id == id);
  
        if (!product) {
          reject(`No se encuentra el producto con el id ${id}`);
        } else {
          resolve(product);
        }
      
    } else {
      reject(`No existe el producto con id ${id}`);
    }

  })
}