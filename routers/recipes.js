const express = require("express");
const db = require('../models/recipe')
const router = express.Router()

  router.get("/api/recipes", (req, res)=>{
     db.getRecipes().then(recipes=>{
         res.status(200).json(recipes);
     })
 });

  router.get("/api/recipes/:id/shoppingList", (req, res)=>{
     db.getShoppingList(req.params.id).then(ingredients=>{
         res.status(200).json(ingredients)
     }).catch(err=>{
         console.log(err);
         res.send(err);
     })
 });

  router.get("/api/recipes/:id/instructions", (req, res)=>{
     db.getInstructions(req.params.id).then(instructions=>{
         res.status(200).json(instructions);
     }).catch(err=>{
         console.log(err);
     });
 })

module.exports = router