import React, {useState} from 'react';
import PropTypes from "prop-types";

const EditBurgerForm = ({burger: {image, name, price, desc, status}, index, updateBurger, deleteBurger}) => {
    const [burgerName, setBurgerName] = useState(name);
    const [burgerPrice, setBurgerPrice] = useState(price);
    const [burgerStatus, setBurgerStatus] = useState(status);
    const [burgerDescription, setBurgerDescription] = useState(desc);
    const [burgerImage, setBurgerImage] = useState(image);

    const updatedBurger = {
        name: burgerName,
        image: burgerImage,
        desc: burgerDescription,
        price: +burgerPrice || 0,
        status: burgerStatus,
    };


    return (
        <div className={'burger-edit'}>
            <input onChange={e => setBurgerName(e.target.value)} name={'name'} type={'text'} value={burgerName}/>
            <input onChange={e => setBurgerPrice(e.target.value)} name={'price'} type={'text'} value={burgerPrice}/>
            <select onChange={e => setBurgerStatus(e.target.value)} name={'status'} className={'status'} value={burgerStatus}>
                <option value="available">
                    Доступно
                </option>
                <option value="unavailable">
                    Не доступно
                </option>
            </select>
            <textarea onChange={e => setBurgerDescription(e.target.value)} name={'desc'} value={burgerDescription}/>
            <input onChange={e => setBurgerImage(e.target.value)} name={'image'} type={'text'} value={burgerImage}/>
            <button
                style={{borderBottom: '1px solid black'}}
                onClick={() => deleteBurger(index)}
            >
                Удалить из меню
            </button>
            <button onClick={() => updateBurger(index, updatedBurger)}>
                Применить изменения
            </button>
        </div>
    );
}

EditBurgerForm.propTypes = {
    burger: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        desc: PropTypes.string,
        status: PropTypes.string,
    }),
    index: PropTypes.string,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func,
}

export default EditBurgerForm;