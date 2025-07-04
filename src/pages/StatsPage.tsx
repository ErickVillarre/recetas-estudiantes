import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Card } from "react-bootstrap";

const StatsPage = () => {
  const { recetas } = useContext(RecipeContext)!;

  const totalRecetas = recetas.length;

  const recetasPorCategoria = recetas.reduce((acc: Record<string, number>, receta) => {
    acc[receta.categoria] = (acc[receta.categoria] || 0) + 1;
    return acc;
  }, {});

  const recetaMasValorada = recetas.length > 0
    ? recetas.reduce((max, receta) =>
        receta.valoracion > max.valoracion ? receta : max,
        recetas[0]
      )
    : null;

  return (
    <div className="container mt-4">
      <h2>📊 Estadísticas</h2>

      <Card className="mb-3">
        <Card.Body>
          <strong>Total de Recetas:</strong> {totalRecetas}
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h5>Recetas por Categoría</h5>
          <ul>
            {Object.entries(recetasPorCategoria).map(([categoria, count]) => (
              <li key={categoria}>
                <strong>{categoria}:</strong> {count}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      {recetaMasValorada && (
        <Card>
          <Card.Body>
            <h5>Receta Más Valorada</h5>
            <p>
              {recetaMasValorada.nombre} ({recetaMasValorada.valoracion} estrellas)
            </p>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default StatsPage;
