import style from './Button.module.css';

const Button = ({text}) => {
    return(
        <div className={style.button_container}>
            <button>{text}</button>
        </div>
    )
}

export default Button