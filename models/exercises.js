const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true,
        required : "Enter the exercise name: "
      },
      type : {
        type: String,
        trim : true,
        required : "Enter the exercise type: "
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Enter the exercise duration: "
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});


const Workout = mongoose.model("workout", WorkoutSchema);


module.exports = Workout;