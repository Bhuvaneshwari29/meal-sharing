const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get('/',async (req,res) => {
    try{
        const reservation = await knex('reservation');
        res.send(reservation);
    }catch(error){
        throw error
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reservationId = req.params.id;
        const requestedMeal = await knex("reservation").where("id", reservationId);
        res.send(requestedMeal[0]);
    } catch (error) {
        throw error;
    }
});

router.post('/',async (req,res) => {
    try{
        const newReservation = await knex('reservation').insert(req.body);
        res.json(newReservation);
    }catch (error){
        throw error;
    }
});


router.put("/:id", async (req,res) => {
    try {
        const reservationId = req.params.id;
        const updateReservation = await knex("reservation").where("id", reservationId).update(req.body);
        res.json(updateReservation);
    } catch (error) {
        throw error
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const reservationId = req.params.id;
        const deletedReservation = await knex("reservation").where("id", reservationId).del();
        res.json(deletedReservation);
    } catch (error) {
        error
    }
})

module.exports = router; 