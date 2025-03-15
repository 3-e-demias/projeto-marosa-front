<<<<<<< HEAD
import style from './NavBar.module.css'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () =>{
    return(
        <>
        <nav className={style.navbar}>
            <ul className={style.list}>
                
                <Link to='/'>
                <li className={style.item}><a href="">HOME</a></li>
                </Link>

                <Link to='/createNewProduct'>
                <li className={style.item}><a href="">CADASTRAR PRODUTOS</a></li>
                </Link>

                <Link to='/listProduct'>
                <li className={style.item}><a href="">LISTAR PRODUTOS</a></li>
                </Link>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

=======
import style from './NavBar.module.css'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () =>{
    return(
        <>
        <nav className={style.navbar}>
            <ul className={style.list}>
                
                <Link to='/'>
                <li className={style.item}><a href="">HOME</a></li>
                </Link>

                <Link to='/createNewProduct'>
                <li className={style.item}><a href="">CADASTRAR PRODUTOS</a></li>
                </Link>

                <Link to='/listProduct'>
                <li className={style.item}><a href="">LISTAR PRODUTOS</a></li>
                </Link>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

>>>>>>> 02a98e1e9dd76243f44061ec2eb198928cc43bfa
export default NavBar