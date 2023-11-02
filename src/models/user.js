import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('Person', userSchema);

export default User;
