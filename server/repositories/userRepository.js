const mongoose = require("mongoose");
const User = mongoose.model("users");

exports.GetOrCreate = async googleId => {
	let user = await User.findOne({ googleId: googleId });

	if (user === null) {
		user = new User({ googleId: googleId });
		await user.save();
	}

	return user;
};
