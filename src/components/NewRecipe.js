import React from 'react';

const NewRecipe = () => (
  <form>
    <div>
      <input type="text" name="recipeName" />
    </div>
    <div>
      <textarea name="recipeDescription" />
    </div>
  </form>
)

export default NewRecipe;
