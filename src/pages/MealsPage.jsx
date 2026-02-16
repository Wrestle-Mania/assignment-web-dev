import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MealsPage() {
    const { categoryName } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
                const data = await response.json();
                setMeals(data.meals);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        };

        if (categoryName) {
            fetchMeals();
        }
    }, [categoryName]);

    return (
        <div className="container">
            <h2 className="my-4 text-center">Meals in {categoryName}</h2>
            <div className="row">
                {meals && meals.map((meal) => (
                    <div key={meal.idMeal} className="col-md-3 mb-4">
                        <div className="card shadow-sm h-100">
                            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{meal.strMeal}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MealsPage;
