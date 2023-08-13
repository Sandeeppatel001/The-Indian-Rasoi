const mongoose = require("mongoose");

const mongoURI =
    "mongodb+srv://sandeep:sandeep123@cluster0.7uep2hf.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected!");
        const fetched_data = mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray();

        const foodCategory = mongoose.connection.db.collection("foodCategory");
        let catData = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = catData;
    } catch (error) {
        console.log("err: ", error);
    }
};

module.exports = mongoDB;
