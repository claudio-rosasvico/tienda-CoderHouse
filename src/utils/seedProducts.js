import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const productsList = [
    { nombre: "iPhone 13", marca: "Apple", precio: 200000, categoria: "celulares", stock: 50, detalle: "Nuevo modelo con pantalla OLED y cámara mejorada.", imagen: "iphone13.png" },
    { nombre: "Samsung Galaxy S21", marca: "Samsung", precio: 180000, categoria: "celulares", stock: 40, detalle: "Potente dispositivo con cámara de alta resolución.", imagen: "samsungs21.png" },
    { nombre: "Xiaomi Redmi Note 10", marca: "Xiaomi", precio: 90000, categoria: "celulares", stock: 30, detalle: "Excelente relación calidad-precio con pantalla AMOLED.", imagen: "redminote10.png" },
    { nombre: "MacBook Pro 2021", marca: "Apple", precio: 350000, categoria: "notebooks", stock: 20, detalle: "Potente laptop con procesador M1 y pantalla retina.", imagen: "macbookpro2021.png" },
    { nombre: "Dell XPS 15", marca: "Dell", precio: 300000, categoria: "notebooks", stock: 25, detalle: "Portátil premium con pantalla táctil y diseño elegante.", imagen: "dellxps15.png" },
    { nombre: "Lenovo ThinkPad X1 Carbon", marca: "Lenovo", precio: 280000, categoria: "notebooks", stock: 15, detalle: "Laptop empresarial ultraligera y resistente.", imagen: "thinkpadx1carbon.png" },
    { nombre: "Teclado mecánico RGB", marca: "Razer", precio: 15000, categoria: "accesoriosPC", stock: 100, detalle: "Teclado mecánico con retroiluminación RGB personalizable.", imagen: "tecladorgb.png" },
    { nombre: "Logitech G502 HERO", marca: "Logitech", precio: 12000, categoria: "accesoriosPC", stock: 80, detalle: "Mouse gaming con sensor óptico de alta precisión.", imagen: "logitechg502.png" },
    { nombre: "Monitor LG UltraGear", marca: "LG", precio: 80000, categoria: "accesoriosPC", stock: 35, detalle: "Monitor gaming de alta velocidad de actualización.", imagen: "lgultragear.png" },
    { nombre: "Motorola G14", marca: "Motorola", precio: 280000, categoria: "celulares", stock: 20, detalle: "Almacenamiento de 128 GB. Memoria RAM de 4 GB. Pantalla de 6.497″. Bateria: 5000 mAh", imagen: "motorolaG14.png" },
    { nombre: "Samsung Galaxy Buds Pro", marca: "Samsung", precio: 25000, categoria: "accesoriosPC", stock: 50, detalle: "Auriculares inalámbricos con cancelación de ruido.", imagen: "galaxybudspro.png" },
    { nombre: "Notebook HP 15-fc0024la", marca: "HP", precio: 25000, categoria: "notebooks", stock: 10, detalle: "AMD Ryzen™ 5 7520U. 8 GB de RAM LPDDR5-5500. Windows 11. Pantalla FHD.", imagen: "NotebookHP15.png" }
  ];

  export const seedproducts = () => {
    productsList.forEach( product => {
        addDoc( collection( db, 'products'), product) // método de firebase
    })
  }