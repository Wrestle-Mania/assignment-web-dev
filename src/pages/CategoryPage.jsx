import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryPage() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();
            setCategories(data.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={fetchCategories}>View Meal Categories</button>
                </div>
            </div>
            <div>
                <div>
                    {categories.map((category) => (
                        <div key={category.idCategory} className="row my-4 shadow-sm bg-white py-3">
                            <div className="col-3 margin-bottom-10">
                                <img src={category.strCategoryThumb} className={"w-100"}
                                    alt={category.strCategory} />
                            </div>
                            <div className="col-9 p-2">
                                <h2> {category.strCategory} </h2>
                                <p>{category.strCategoryDescription}</p>

                                <Link className={"bi-arrow-right-circle text-decoration-none"}
                                    to={`/meals/${category.strCategory}`}> View Foods</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
