import express, { Request, Response }  from "express";
import db from '../Storage/config';
import app from "../app";

db.authenticate().then(() => {
  console.log('connect to DB');
});

const port = 9000;

app.listen(port);
