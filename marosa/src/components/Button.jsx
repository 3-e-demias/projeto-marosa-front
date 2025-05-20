import style from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({text,router,cod_prod}) => {
    return(
        <div className={style.button_container}>
            <Link to={`${router}${cod_prod}`}>
                <button>{text}</button>
            </Link>
        </div>
    )
}

export default Button