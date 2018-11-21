const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	accessToken: String,
	refreshToken: String,
	profile: Object,
	created: { type: Date, default: Date.now },
});

mongoose.model("users", userSchema);
