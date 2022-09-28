import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import NewRecipe from './components/NewRecipe';
import List from './components/List';

import './App.css';
import Recipe from './components/Recipe';

const Auth = ({ children }) => {
  const isLogged = true;

  if (!isLogged) return (
    <div>Логинься</div>
  )

  return <>{children}</>
}


const App = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  
  return (
    <>
      <div>
        <NavLink to="/">Главная</NavLink>
        {' | '}
        <NavLink to="/recipe/new">Новый рецепт</NavLink>
      </div>
      <br /><br />
      <Routes>
        <Route path='/recipe/new' element={<NewRecipe />} />
        <Route path='/recipe/:rId' element={<Recipe />} />

        <Route path='/' element={<Auth><List /></Auth>} />

        <Route path='*' element={<div>404</div>} />


        <Route path="recipe.php" element={
          <>
            <Navigate to={`/recipe/${id}`} replace />
          </>
          }
        />
      </Routes>
    </>
  )
};

export default App;
