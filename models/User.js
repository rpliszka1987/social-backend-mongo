// Import mongoose
const { Schema, model } = require("mongoose");
// Import helper for data format
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true, // removes extra spaces.
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/], // Validates email format.
    },
    // Add thoughts with Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // Add friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Add virtuals to model
    toJSON: {
      virtuals: true,
    },
  }
);

// Get total count of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length();
});

// Create the User model using the UserSchema
const User = model("User", UserSchema);

// Export model
module.exports = User;
