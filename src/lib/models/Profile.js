import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: String,
  gender: String,

  age: Number,
  height: Number,
  weight: Number,
  
  sports: [{
    type: String
  }],
  team: String,
  interests: [{
    type: String
  }],
  imgUrl: String
})


export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema );
