    var express = require("express");  
    var contacts = require("./contact");  
    var app = express();
    app.configure(function () {  
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.static(__dirname + '/public'));
    });
    app.get('/contacts', contacts.index);  
    app.get('/contacts/:id', contacts.findById);  
    app.post('/contacts', contacts.addContact); 
    app.put('/contacts/:id', contacts.updateContact);  
    app.delete('/contacts/:id', contacts.deleteContact);  

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.listen(3001, "127.0.0.1"); 
