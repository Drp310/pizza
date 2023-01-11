import React from 'react';

import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items"></div>
            <PizzaBlock title="перерони" price="111" />
            <PizzaBlock title="маргарита" price="222" />
            <PizzaBlock title="хуйкорыто" price="333" />

            <PizzaBlock title="незабыта" price="444" />

            <PizzaBlock title="перерони" price="555" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
