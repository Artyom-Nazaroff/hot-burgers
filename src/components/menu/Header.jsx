import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";

const Header = ({title}) => {

    const navigate = useNavigate();

    return (
        <header className={'top'}>
            <div className={'wrap'}>
                <div className={'header-content'}>
                    <div className={'header-rating'}>
                        <div className={'header-rating_tag'}>Рейтинг</div>
                        <div className={'header-rating_icon'}>★★★★★</div>
                    </div>
                    <div className={'header-divider'}></div>
                    <h1 className={'font-effect-fire-animation'}>{title}</h1>
                    <h3>
                    <span>
                        Быстрая доставка горячих
                        <span className={'sub-header'}> #бургеров</span>
                    </span>
                    </h3>
                    <button
                        className={'header-button'}
                        onClick={() => navigate('hot-burgers/')}
                    >
                        Покинуть ресторан
                    </button>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;