import style from './NavBar.module.css'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () =>{
    return(
        <>
        <nav className={style.navbar}>
            <ul className={style.list}>
                
                <Link to='/'>
                <li className={style.item}><img src='../../../public/marosa_header.png'/></li>
                </Link>

                <Link to='/'>
                <li className={style.item}>HOME</li>
                </Link>

                <Link to='/createNewProduct'>
                <li className={style.item}>CADASTRAR PRODUTOS</li>
                </Link>

                <Link to='/listProduct'>
                <li className={style.item}>LISTAR PRODUTOS</li>
                </Link>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

export default NavBar