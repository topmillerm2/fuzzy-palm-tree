var mongoose = require('mongoose');
var User = mongoose.model('User')
var Poll = mongoose.model('Poll')


module.exports = {
    
        add: (req, res)=>{
            console.log("hit add");
            // console.log(req.body.Email)
            User.find({_id: req.body._id}, (err, gotUser)=>{
                if (gotUser.length >0) {
                    console.log("user already exists")
                    req.session.userId = gotUser[0]._id;
                    res.json(gotUser[0]);
                }else{
                    var newUser = new User(req.body);
                    newUser.save((err, savedUser)=>{
                        if(err){
                            console.log("something went wrong")
                            res.json(err)
                        }else{
                            console.log("user created")
                            req.session.userId = savedUser._id
                            console.log(req.session.userId)
                            res.json(savedUser)
                        }
                    }) 
                }
            })     
        },

        create: (req, res)=>{
            console.log("hit create");
            // console.log(req.session.userId)
            User.findOne({_id: req.session.userId}, (err, gotUser)=>{
                if (err) {
                    console.log("couldn't find user")
                    res.json(err);
                }else{
                    console.log("found user")
                    console.log(gotUser)
                    console.log(req.body)
                    var newPoll = new Poll(req.body);
                    newPoll._user = req.session.userId;
                    newPoll.save((err)=>{
                        if(err){
                            console.log("couldn't create poll")
                            res.json(err)
                        }else{
                            console.log("saved poll, adding it to user")
                            gotUser.polls.push(newPoll);
                            gotUser.save((err)=>{
                                if (err){
                                    console.log("didn't work")
                                    res.json(err);
                                }else{
                                    console.log("We made it");
                                    console.log(gotUser)
                                    res.json(newPoll)
                                }
                            })
                        }
                    }) 
                }
            })     
        },

        get: (req, res)=>{
            console.log("hit get");
            // console.log(req.session.userId)
            Poll.find({}).populate('_user').exec((err, gotPolls)=>{
                if (err) {
                    console.log("couldn't find polls")
                    res.json(err);
                }else{
                    console.log("got polls")
                    res.json(gotPolls)
                }
            })
        },

        find: (req, res)=>{
            console.log("hit retrieve");
            // console.log(req.session.userId)
            User.findOne({_id: req.session.userId}, (err, gotUser)=>{
                if (err) {
                    console.log("couldn't find user")
                    res.json(err);
                }else{
                    console.log("found user")
                    console.log(gotUser)
                    res.json(gotUser)
                }
            })
        },

        delete: (req,res)=>{
            console.log("hit delete")
            Poll.remove({_id: req.body.number}, (err, gotPoll)=>{
                if (err) {
                    console.log("couldn't find poll")
                    res.json(err);
                }else{
                    console.log("found poll")
                    console.log(gotPoll)
                    res.json({})
                }
            })
        },

        retrieve: (req,res)=>{
            console.log("hit retrieve")
            Poll.findOne({_id: req.body.number}, (err, gotPoll)=>{
                if (err) {
                    console.log("couldn't find poll")
                    res.json(err);
                }else{
                    console.log("found poll")
                    console.log(gotPoll)
                    res.json(gotPoll)
                }
            })
        },

        count: (req,res)=>{
            console.log("hit count")
            Poll.findOne({_id: req.body.number}, (err, gotPoll)=>{
                if (err) {
                    console.log("couldn't find poll")
                    res.json(err);
                }else{
                    console.log("found poll")
                    console.log(gotPoll)
                    console.log(req.body.index)
                    if (req.body.index == 0){
                        console.log('index is zero')
                        gotPoll.countOne += 1
                    }
                    if (req.body.index == 1){
                        console.log('index is one')
                        gotPoll.countTwo += 1
                    }
                    if (req.body.index == 2){
                        console.log('index is two')
                        gotPoll.countThree += 1
                    }
                    if (req.body.index == 3){
                        console.log('index is three')
                        gotPoll.countFour += 1
                    }
                    gotPoll.save((err)=>{
                        if (err){
                            console.log("didn't work")
                            res.json(err);
                        }else{
                            console.log("We made it");
                            console.log(gotPoll)
                            res.json(gotPoll)
                        }
                    })
                }
            })
        },

    }