const express = require("express");
const buttons = express.Router();

const {
    getAllButtons,
    getButton,
    createButton,
    deleteButton,
    updateButton
} = require("../queries/buttons");


buttons.get("/", async (req,res) => {
    const allButtons = await getAllButtons();
    if(allButtons[0]){
        res.status(200).json(allButtons)
    } else {
        res.status(500).json({ error: "server error" })
    }
})

buttons.get("/:id", async (req, res) => {
    const { id } = req.params;
    const button = await getButton(id);
    if(button.id){
        res.status(200).json(button);
    } else {
        res.status(404).json({ error: "not found" })
    }
})


buttons.post("/", async (req, res) => {
    try {
      const button = await createButton(req.body);
      res.json(button)
    } catch (error) {
      return error;
    }
  });


  buttons.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const deletedButton = await deleteButton(id);
    if(deletedButton.id){
        res.status(200).json(deletedButton)
    } else {
        res.status(404).json("Button not found")
    }
})

buttons.put("/:id", async (req,res) => {
    const { id } = req.params;
    const updatedButton = await updateButton(req.body, id);
    if(updatedButton.id) {
        res.status(200).json(updatedButton)
    } else {
        res.status(422).json({ error: "Button not updated"})
    }
})


module.exports =  buttons;