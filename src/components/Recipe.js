import React, { useEffect, useState } from 'react';
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

const loadData = async (id) => {
  const recipeData = await new Promise((resolve) => {
    const recipe = RECIPES[id];
    resolve(recipe);
  })

  return recipeData;
}

const Recipe = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipe, setRecipe] = useState({});
  const { rId } = useParams();

  useEffect(async () => {
    const data = await loadData(rId);

    setRecipe(data);
  }, []);

  useEffect(async () => {
    const data = await loadData(rId);

    setRecipe(data);
  }, [rId]);

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