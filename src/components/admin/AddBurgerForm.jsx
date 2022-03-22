import React, {useState} from 'react';
import PropTypes from "prop-types";

const AddBurgerForm = ({createNewBurger}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);
    const [status, setStatus] = useState('available');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const newBurger = {
        name,
        image,
        desc,
        price: +price,
        status,
    };

    return (
        <div>
            <h3 className={'burger-add-title'}>Добавить новый бургер</h3>
            <div className={'burger-edit burger-add'}>
                <input type="text" name={'name'} placeholder={'Name'} autoComplete={'off'}
                       value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" name={'price'} placeholder={'Price'} autoComplete={'off'}
                       value={price} onChange={e => setPrice(e.target.value)}/>
                <select name={'status'} className={'status'}
                        value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="available">Доступно</option>
                    <option value="unavailable">Убрать из меню</option>
                </select>
                <textarea name={'desc'} placeholder={'Description'}
                          value={desc} onChange={e => setDesc(e.target.value)}/>
                <input type="text" name={'image'} placeholder={'Image'} autoComplete={'off'}
                       value={image} onChange={e => setImage(e.target.value)}/>
                <button onClick={() => createNewBurger(newBurger)}>Добавить в меню</button>
            </div>
        </div>

    );
}

AddBurgerForm.propTypes = {
    createNewBurger: PropTypes.func,
}

export default AddBurgerForm;