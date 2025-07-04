import { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import type { Recipe } from '../types/Recipe';


export const useRecipes = () => {
  const context = useContext(RecipeContext);

  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }

  const { recetas } = context as { recetas: Recipe[] };

  const [difficultyFilter, setDifficultyFilter] = useState<string>('');

  const filterByDifficulty = (difficulty: string): Recipe[] => {
  return recetas.filter((recipe: Recipe) => recipe.dificultad === difficulty);
  };

  return {
    ...context,
    difficultyFilter,
    setDifficultyFilter,
    filterByDifficulty,
  };
}; 