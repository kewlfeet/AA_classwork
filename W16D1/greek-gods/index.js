const express = require("express");

const app = require("./server/server");

const port = process.env.PORT || 5000;

require("./god");
require("./abode");
require("./emblem");

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



// mongorestore --host Cluster0 - shard - 0 / cluster0 - shard - 00 - 00 - fjg8i.mongodb.net: 27017, cluster0 - shard - 00 - 01 - fjg8i.mongodb.net: 27017, cluster0 - shard - 00 - 02 - fjg8i.mongodb.net: 27017 --ssl--username klu - dev--password dt5emuRABFsBqUzV --authenticationDatabase admin --db klu-dev