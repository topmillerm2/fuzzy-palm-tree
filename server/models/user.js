let mongoose= require('mongoose');
var Schema = mongoose.Schema;


let UserSchema = mongoose.Schema({
    Name: {type: String, required:true},
    polls: [{ type: Schema.Types.ObjectId, ref: "Poll"}],
}, {timestamps: true});

let PollSchema = mongoose.Schema({
    question: {type: String, required:true,},
    optionOne: {type: String, required:true},
    countOne: {type: Number, default: 0},
    optionTwo: {type: String, required:true},
    countTwo: {type: Number, default: 0},
    optionThree: {type: String, required:true},
    countThree: {type: Number, default: 0},
    optionFour: {type: String, required:true},
    countFour: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: "User"},
}, {timestamps: true});

mongoose.model('User', UserSchema);
mongoose.model('Poll', PollSchema);