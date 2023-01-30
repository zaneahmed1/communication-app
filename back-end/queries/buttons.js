const db = require("../db/dbConfig.js");

const getAllButtons = async () => {
    try {
        const allButtons = await db.any("SELECT * FROM buttons");
        return allButtons;
    } catch (err) {
        return err;
    }
}

const getButton = async (id) => {
    try {
        const oneButton = await db.one("SELECT * FROM buttons WHERE id=$1", id);
        return oneButton;
    } catch (err) {
        return err;
    }
}

const createButton = async (button) => {
    const {button_category, button_label, button_message, button_image} = button;
    let newButtonData;

    if(!image) {
        newButtonData = await db.one(
            "INSERT INTO buttons (button_category, button_label, button_message, button_image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [button_category, button_label, button_message, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"]
        );
    } else {
        newButtonData = await db.one(
            "INSERT INTO cats (button_category, button_label, button_message, button_image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [button_category, button_label, button_message, button_image]
        );
    }
    
    try {
        const newButton = newButtonData
        return newButton;
    } catch (err) {
        return err
    }
}

const deleteButton = async (id) => {
    try {
        const deletedButton = await db.one("DELETE FROM buttons WHERE id=$1 RETURNING *", id);
        return deletedButton
    } catch (err) {
        return err
    }
}

const updateButton = async (button, id) => {
    const {button_category, button_label, button_message, button_image} = button;
    try {
        const updatedButton = await db.one("UPDATE buttons SET button_category=$1, button_label=$2, button_message=$3, button_image=$4 WHERE id=$5 RETURNING *", [button_category, button_label, button_message, button_image, id]);
        return updatedButton
    } catch (err) {
        return err
    }
}




module.exports = {
    getAllButtons,
    getButton,
    createButton,
    deleteButton,
    updateButton
};
