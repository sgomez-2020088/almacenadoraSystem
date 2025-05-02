import { Router } from "express";
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { addRegistry, getAllReports, getByDate, getEntryReports, getExitReports, getOneReport } from "./report.controller.js";

const api = Router()

api.post('/',[validateJwt], addRegistry)

api.get('/all',[validateJwt], getAllReports)
api.get('/entry',[validateJwt], getEntryReports)
api.get('/exit',[validateJwt], getExitReports)
api.get('/date',[validateJwt], getByDate)
api.get('/:id',[validateJwt], getOneReport)

export default api