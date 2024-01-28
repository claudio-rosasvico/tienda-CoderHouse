import styles from './app.module.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenido'}/>
    </>
  )
}

export default App;


/* <h1 className={styles.title}> Hola Mundo </h1>
    <h2 className={`fs-4 ${styles.title}`} >Hola</h2>  Uso bootstrap y module.css combinados 
    <p className='text-secundary fs-4'>Hola {nombre}</p>  Utilizo clases de bootstrap  */