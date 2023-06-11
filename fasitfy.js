const fastify = require("fastify")();
//Get route and JSON/object reply
fastify.get("/cit", (request, reply) => {
    console.log("query object:", request.query.first)
    
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({test :"This is a test!!!" });
    });
    // Start server and listen to requests using Fastify
    const listenIP = 'localhost';
    const listenPort = 8082;
    fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
    });