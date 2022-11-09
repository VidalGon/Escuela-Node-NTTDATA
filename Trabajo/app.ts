import "dotenw/config";
import express from "express";
import cors from "cors";
import { router } from "./routers/items";

const PORT = process.env.PORT || 3000;
const app = express();