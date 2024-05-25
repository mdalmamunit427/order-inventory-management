
import config from "./app/config";
import app from "./app";
import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })
    } catch (error) {
        console.error(`Server error: ${error}`)
    }
  
  }

main().then(()=> console.log("Mongodb connected successfully!"));
