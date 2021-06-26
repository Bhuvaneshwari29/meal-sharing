import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormMeal from "./FormMeal";

const GetMeals = () => {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState(true);

  const fetchData = () => {
    fetch(`/api/meals?title=${searchValue}`)
      .then((response) => response.json())
      .then((meal) => {
        setMeals(meal);
        setIsLoading(false);
      });
  };

  const fetchReviewsData = () => {
    fetch("/api/reviews/")
      .then((response) => response.json())
      .then((review) => setReviews(review));
  };

  const reviewsAndMeals = (meal_id) => {
    const starRatings = reviews
      .filter((review) => {
        return review.meal_id === meal_id;
      })
      .map((star) => star.stars);

    const totalRatings = starRatings.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    const averageRatings = Math.ceil(totalRatings / starRatings.length);
    return averageRatings;
  };

  useEffect(() => {
    fetchData();
    fetchReviewsData();
  }, [searchValue]);

  const onChangeSearchHandle = (event) => {
    setSearchValue(event.target.value);
    setDisplay(true);
  };

  const onClickSearchHandle = (title) => {
    setSearchValue(title);
    setDisplay(false);
  };

  let recipeImages = [
    "https://dinnerthendessert.com/wp-content/uploads/2018/03/Vegetable-Biryani--688x1032.jpg",
    "https://myfoodstory.com/wp-content/uploads/2018/09/The-Best-Chicken-Biryani-Recipe-2.jpg?fit=1200,9999",
    "https://previews.123rf.com/images/cokemomo/cokemomo1508/cokemomo150800003/43676636-south-indian-meals-on-banana-leaf.jpg",
    "https://hebbarskitchen.com/wp-content/uploads/2019/11/ghee-roast-dosa-recipe-dosa-ghee-roast-ney-roast-dosa-recipe-15-683x1024.jpeg",
  ];

  let randomImage = "https://static.toiimg.com/photo/52467119.cms";

  return (
    <>
      <div>
        <div className="search-bar-meals">
          <div>
            <input
              type="text"
              placeholder="Search for meals..."
              value={searchValue}
              onChange={onChangeSearchHandle}
            ></input>
            <img
              className="search-icon-meals"
              src="https://img.icons8.com/fluent-systems-regular/24/000000/google-web-search.png"
            />
          </div>

          <div>
            {display &&
              searchValue !== "" &&
              meals.map((meal) => {
                return (
                  <div
                    key={meal.id}
                    onClick={() => {
                      onClickSearchHandle(meal.title);
                    }}
                    className="meal-title-auto"
                  >
                    <h3>{meal.title}</h3>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="card-holder">
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : meals.length ? (
            meals.map((meal, index) => {
              return (
                <div key={meal.id} className="card">
                  <div className="image">
                    <img
                      src={
                        recipeImages[meal.id - 1]
                          ? recipeImages[meal.id - 1]
                          : randomImage
                      }
                      alt="Recipe picture"
                    ></img>
                  </div>
                  <div>
                    <h3>{meal.title}</h3>
                  </div>
                  <hr />
                  <div>
                    <p>{meal.price}DKK</p>
                  </div>
                  <hr />
                  <div>
                    <p>{meal.location}</p>
                  </div>
                  <hr />
                  {reviewsAndMeals(meal.id) ? (
                    <div className="ratings-star">
                      <span
                        className={
                          reviewsAndMeals(meal.id) >= 1 ? "highlighted" : ""
                        }
                      >
                        ★
                      </span>
                      <span
                        className={
                          reviewsAndMeals(meal.id) >= 2 ? "highlighted" : ""
                        }
                      >
                        ★
                      </span>
                      <span
                        className={
                          reviewsAndMeals(meal.id) >= 3 ? "highlighted" : ""
                        }
                      >
                        ★
                      </span>
                      <span
                        className={
                          reviewsAndMeals(meal.id) >= 4 ? "highlighted" : ""
                        }
                      >
                        ★
                      </span>
                      <span
                        className={
                          reviewsAndMeals(meal.id) >= 5 ? "highlighted" : ""
                        }
                      >
                        ★
                      </span>
                    </div>
                  ) : (
                    <div>
                      <p>No reviews</p>
                    </div>
                  )}
                  <hr />
                  <div>
                    <Link to={`/meals/${meal.id}`}>
                      <button>More Details</button>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h2 className="no-results-meals">"No meals found"</h2>
            </div>
          )}
        </div>

        <div>
          <FormMeal />
        </div>
      </div>
    </>
  );
};

export default GetMeals;
