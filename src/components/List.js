import React from 'react';
import { Link } from 'react-router-dom';

const RECIPES = {
  'dsaasd': {
    title: 'Борщ'
  },
  'jkdshfgjksd34': {
    title: 'Пельмени'
  },
  'dsjfdshk43': {
    title: 'Торт Наполеон'
  },
  '3dsfd': {
    title: 'Картофельное пюре'
  }
};

console.log(Object.entries(RECIPES));

const List = () => {
  return (
    <ul>
      {
        Object.entries(RECIPES).map(([rId, recipe]) => (
          <li key={rId}>
            <Link to={`/recipe/${rId}`}>
              {recipe.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default List;
