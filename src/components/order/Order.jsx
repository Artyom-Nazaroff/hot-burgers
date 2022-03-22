import React from 'react';
import Shipment from "./Shipment";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PropTypes from "prop-types";

const Order = ({burgers, order, deleteFromOrder}) => {

    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, item) => {
        const count = order[item];
        if (burgers[item] && burgers[item].status === 'available') {
            return prevTotal + burgers[item].price * count;
        }
        return prevTotal;
    }, 0)

    return (
        <div className={'order-wrap'}>
            <h2>Ваш заказ</h2>
            <TransitionGroup
                component={'ul'}
                className={'order'}
            >
                {orderIds.map(item =>
                    burgers[item] && burgers[item].status === 'available'
                        ?
                        <CSSTransition
                            classNames={'order'}
                            key={item}
                            timeout={{enter: 500, exit: 500}}
                        >
                            <li key={item}>
                                <span>
                                    <TransitionGroup
                                        component={'span'}
                                        className={'count'}
                                    >
                                        <CSSTransition
                                            classNames={'count'}
                                            key={order[item]}
                                            timeout={{enter: 500, exit: 500}}
                                        >
                                            <span>{order[item]}</span>
                                        </CSSTransition>
                                    </TransitionGroup>
                                    шт. {burgers[item].name}
                                    <span> {order[item] * burgers[item].price} ₽</span>
                                    <button
                                        className={'cancelItem'}
                                        onClick={() => deleteFromOrder(item)}
                                    >&times;</button>
                                </span>
                            </li>
                        </CSSTransition>
                        :
                        burgers[item]
                            ?
                            <CSSTransition
                                classNames={'order'}
                                key={item}
                                timeout={{enter: 500, exit: 500}}
                            >
                                <li className={'unavailable'} key={item}>
                                    Извините, {burgers[item] ? burgers[item].name : 'этот бургер'} временно
                                    недоступен
                                </li>
                            </CSSTransition>
                            : null
                )}
            </TransitionGroup>
            {total > 0
                ? <Shipment total={total}/>
                : <div className={'nothingSelected'}>Выберете блюдо и добавьте к заказу</div>
            }
        </div>
    );
}

Order.propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func,
}

export default Order;