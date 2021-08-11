import Main from '../../components/main/main';
import React from 'react';
import OrdersList from '../../components/orders-list/orders-list';
import Statistics from '../../components/statistics/statistics';

function FeedPage() {
  return (
    <Main name='Лента заказов'>
      <OrdersList />
      <Statistics />
    </Main>
  )
}

export default FeedPage;
