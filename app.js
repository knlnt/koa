var koa = require("koa");
var app = new koa();

app.use(function* (next){
    this.body = "Hellow world";
});



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<password>@cluster0.nfa6u.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });



app.listen(3000, function() {
    console.log("run in http://localhost:3000");
});