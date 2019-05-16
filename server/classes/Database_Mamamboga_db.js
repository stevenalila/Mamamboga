// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import CartsModel from "../models/Mamamboga_db/CartsModel";
import CustomersModel from "../models/Mamamboga_db/CustomersModel";
import OrdersModel from "../models/Mamamboga_db/OrdersModel";
import ProductsModel from "../models/Mamamboga_db/ProductsModel";
import UserModel from "../models/Mamamboga_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Mamamboga_db_dbUrl);

    // Start Init Models

		CartsModel.init();
		CustomersModel.init();
		OrdersModel.init();
		ProductsModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Mamamboga_db = await mongoose.connect(
        "mongodb://" + properties.Mamamboga_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Mamamboga_db;
  }
}

export default new Database();
