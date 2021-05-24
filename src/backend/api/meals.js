const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {

    
    if('maxPrice' in request.query){
      const maxPrice = Number(request.query.maxPrice);
      const highPriceMeals = await knex ('meal').where ('price', '<=', maxPrice);
      response.send(highPriceMeals);
      return;
    }
    if('availableReservations' in request.query){
      const availableReservations = (request.query.availableReservations == 'true');
      const numberOfReservations = await knex.from('meal').join('reservations','meal.id', '=', 'reservations.id')
      .select('meal.title')
      .where(('max_reservations' - 'reservations.number_of_guests', true), availableReservations)
      response.send(numberOfReservations);
      return;
    }
    if('title' in request.query){
      const title = request.query.title;
      const mealsTitle = await knex('meal').where('title', 'like', '%' + title + '%');
      response.send(mealsTitle);
      return;
    }
    if('createdAfter' in request.query){
      const createdAfter = Date.parse(request.query.createdAfter);
      const dateCreatedAfter = await knex('meal').where('created_date', '>=',createdAfter);
      response.send(dateCreatedAfter);
    }
    if('limit' in request.query){
       const limit = request.query.limit;
       const mealsLimit = await knex('meal').limit(limit);
       response.send(mealsLimit);
       return;
    }
  
  const meal = await knex("meal");
    response.send(meal);
  } catch (error) {
    throw error;
  }
});
    
 /*  // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});*/

router.get('/:id', async (req,res) =>{
  try {
    const mealId = req.params.id;
    const requestedMeal = await knex('meal').where ('id',mealId);
    res.send(requestedMeal);
  }catch (error){
    throw error;
  }
})

router.post("/", async (req, res) => {
  try {
    const meals = await knex('meal').insert(req.body);
    res.json(meals);
  } catch (error) {
    throw error;
  }
})

router.put('/:id', async(req,res) => {
  try{
    const mealId = req.params.id;
    const requestedMeal = await knex('meal').where('id',mealId).update(request.body);
    res.json(requestedMeal);
  }catch (error){
      throw error;
      }
});

router.delete("/:id", async (req, res) => {
  try {
    const mealId = req.params.id;
    const requestedMeal = await knex('meal').where("id", mealId).del();
    res.json(requestedMeal);
  } catch (error) {
    throw error;
  }
});


module.exports = router; 
