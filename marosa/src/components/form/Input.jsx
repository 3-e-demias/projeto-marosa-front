import style from './Input.module.css';

function Input({text, type, name, id, placeholder, value, handlerChange}) {
    return(
        <div className={style.input_container}>
            <p>{text}</p>
            <input 
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={handlerChange} />
        </div>
    )
}

export default Input