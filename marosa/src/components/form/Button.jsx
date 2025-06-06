import style from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({text}) => {
    return(
        <div className={style.button_container}>
            <button>{text}</button>
        </div>
    )
}

export default Button