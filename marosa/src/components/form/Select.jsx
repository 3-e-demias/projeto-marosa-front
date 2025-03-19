import style from './Select.module.css';

function Select({text, name, id, handlerChange}) {
    return(
        <div className={style.select_container}>
            <p>{text}</p>
            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione uma categoria</option>
                <option value="">Limpeza</option>
                <option value="">Decoração</option>
                <option value="">Organização</option>
            </select>
        </div>
    )
}

export default Select;