const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const userRepository = require("../repositories/userRepository");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	userRepository.GetById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientId,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		(accessToken, refreshToken, profile, done) => {
			userRepository.GetOrCreate(profile.id).then(user => done(null, user));
		},
	),
);
