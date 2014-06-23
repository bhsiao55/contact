    var mongoose = require('mongoose');  
    mongoose.connect('mongodb://contact:contact@localhost/contact',function(err){
        if(err){
            console.log('error connecting');
        }
    });  
    var ContactSchema = mongoose.Schema({
        name: { type: String, required: true },
        phone: { type: Number },
    });
    var ContactModel = mongoose.model('Contact', ContactSchema);  

    //begin exports of functions
    exports.index = function (req, res){  
        ContactModel.find(function (err, contacts) {
            if (!err) {
                res.json(contacts);
            } else {
                console.log(err);
            }
        });
    }
    exports.findById = function (req, res) {  
        ContactModel.findById(req.params.id, function (err, contact) {
            if (!err) {
                res.json(contact);
            } else {
                console.log(err);
            }
        });
    }
    exports.addContact = function (req, res) {  
        var contact;
        contact = new ContactModel({
            name: req.body.name,
            phone: req.body.phone,
        });
        contact.save(function (err) {
            if (!err) {
                console.log("created");
            } else {
                console.log(err);
            }
        });

    res.send(contact);
    }
    exports.updateContact = function (req, res) {  
        ContactModel.findById(req.params.id, function (err, contact) {
        if(!contact){
            console.log('not found');
            //res.send(err);
        }
        else{
            contact.name = req.body.name;
            contact.phone = req.body.phone;
            contact.save(function (err) {
                if (!err) {
                    console.log("updated");
                } else {
                    console.log(err);
                }
                res.send(contact);
            });
        }
        });
    }
    exports.deleteContact = function (req, res){  
        ContactModel.findById(req.params.id, function (err, contact) {
            if(!contact){
                console.log('not found');
                //res.send(err);
            } 
            else{
                contact.remove(function (err) {
                if (!err) {
                    console.log("removed");
                    res.send('');
                } else {
                    console.log(err);
                }
                });
            }
        });
    }
