import React from 'react';
import doneImg from '../../images/done.png';
import orderStyles from './order-details.module.css';
import { placeOrder } from '../../utils/api-requests';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

function OrderDetails({ ingredients }) {
  const [orderNumber, setOrderNumber] = React.useState('');

  React.useEffect(() => {
    placeOrder(ingredients.map(item=>item._id))
      .then(data => setOrderNumber(data.order.number))
      .catch(err => alert(`Ошибка обращения к серверу: ${err}`))
  }, [])

  return (
    <div className={orderStyles.order}>
      {orderNumber ?
        <>
          <p className={`${orderStyles.glow} text text_type_digits-large mt-30 mb-8`}>
            {orderNumber}
          </p>
          <h2 className='text text_type_main-medium'>идентификатор заказа</h2>
          <img className='mt-15 mb-15' src={doneImg} alt='изображение подтверждения заказа'/>
          <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
          <p className='text text_type_main-default text_color_inactive mb-30'>Дождитесь готовности на орбитальной станции</p>
        </> :
        <p className={`${orderStyles.glow} text text_type_main-medium mt-30 mb-30`}>
          Формируем заказ...
        </p>
      }

    </div>
  )
}

OrderDetails.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default OrderDetails

