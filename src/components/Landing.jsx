import React, {useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const Landing = ({restaurants, setCurrentRestaurant}) => {
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const navigate = useNavigate();

    const displayList = (e) => {
        e.stopPropagation();
        setDisplay(!display);
    };

    const getTitle = ({title, url}) => {
        setDisplay(false);
        setTitle(title);
        setUrl(url);
    };

    const goToRestaurant = (title, url) => {
        setCurrentRestaurant(title, url);
        navigate(`/restaurant/${url}`);
    };

    if (display) window.addEventListener('click', () => setDisplay(false));

    return (
        <div className={'restaurant_select-background'}>
            <div className={'restaurant_select'}>
                <div className={'restaurant_select_top'}>
                    <div
                        className={'restaurant_select_top-header font-effect-outline'}
                        onClick={(e) => displayList(e)}
                    >
                        {title
                            ? title
                            : 'Выбери ресторан'
                        }
                    </div>
                </div>
                {display
                    ?
                    <div
                        className={'restaurant_select_bottom'}
                        onClick={e => e.stopPropagation()}
                    >
                        <ul>
                            {restaurants.map(restaurant =>
                                <li key={restaurant.id}>
                                <span onClick={() => getTitle(restaurant)}>
                                    {restaurant.title}
                                </span>
                                </li>)
                            }
                        </ul>
                    </div>
                    :
                    null
                }
                {title && !display
                    ? <button onClick={() => goToRestaurant(title, url)}>Перейти в ресторан</button>
                    : null
                }
            </div>
        </div>
    );
};

Landing.propTypes = {
    restaurants: PropTypes.array,
    setCurrentRestaurant: PropTypes.func,
};

export default Landing;