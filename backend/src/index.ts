const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("HELLO POSTGRE + NODEJS!!!");
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
