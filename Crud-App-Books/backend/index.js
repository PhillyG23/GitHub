import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

// if there is a auth problem
//ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password'; 
//enter the query execution cmd





app.get("/", (req,res)=>{
    res.json("hello this is the backend")

})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  //make root and operations in different folders to be more organized.

  app.post("/books", (req, res) => {
    // the freaking "quotes" are actually backticks for the columns. bruh
    const q = "INSERT INTO books (`title`, `desc`,`price`, `cover`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [values], (err,data) => {
      if (err)  return res.json(err);
      return res.json("Book has been created successfully.");
    });
  });
  


  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?,  `cover` = ?, WHERE id =?";
    
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM books WHERE id = ? ";
  
    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });



  



app.listen(8800, ()=>{
    console.log("Connected to backend!")
})