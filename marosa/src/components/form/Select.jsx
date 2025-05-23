import style from './Select.module.css';

function Select({text, name, id, handlerChange, options}) {
    return(
        <div className={style.select_container}>
            <p>{text}</p>
            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione uma categoria</option>
               {
                options.map((option)=>(
                    <option value={option.id} key ={option.id} id={option.id}>{option.nome}</option>
                ))
               }
            </select>
        </div>
    )
}

export default Select;