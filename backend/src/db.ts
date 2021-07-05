const Pool = require("pg").Pool;
const poll = new Pool({
    user: "postgres",
    password: "Zaebars13",
    host: "localhost",
    port: 5432,
    database: ""
});
