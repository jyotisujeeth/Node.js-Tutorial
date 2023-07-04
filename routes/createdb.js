exports.create = function (req, res){
    nano.db.create(req.body.dbname, function () {
if(err){
    res.send("error creating database");
    return;
}
res.send("database created successfully");
});
    
};