import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";

const router = express.Router(); // Capital R

// GET http://localhost:4000/api/____
router.get("/____", async (request: Request, response: Response, next: NextFunction) => {
    try {
        
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
