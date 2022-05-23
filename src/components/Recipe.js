import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RECIPES = {
  'dsaasd': {
    title: 'Борщ',
    description: 'Готовим украинский борщ с пампушками'
  },
  'jkdshfgjksd34': {
    title: 'Пельмени',
    description: "Пельмени русские с индейкой и курицей"
  },
  'dsjfdshk43': {
    title: 'Торт Наполеон',
    description: "Почти французкий торт"
  },
  '3dsfd': {
    title: 'Картофельное пюре',
    description: "Хуже чем белорусские драники"
  }
};

const Recipe = () => {
  const { rId } = useParams();

  const recipe = RECIPES[rId];

  if (!recipe) return (
    <div>Не найдено, перейти к <Link to='/'>списку рецептов</Link></div>
  )

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  )
}

export default Recipe;