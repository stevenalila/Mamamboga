// Database
import Database from "../../../classes/Database_Mamamboga_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Customers
      */
    const customersSchema = new mongoose.Schema({
      Address: {
        type: "String", 
        required : true
      },
      Email: {
        type: "String", 
        required : true
      },
      Name: {
        type: "String", 
        required : true
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Customers", customersSchema));
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS




};

export default generatedModel;
