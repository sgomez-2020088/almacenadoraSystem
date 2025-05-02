import { Router } from "express"
import { validateJwt,isAdmin } from "../../middlewares/validate.jwt.js"
import { addRegistry, getAllReports, getEntryReports, getExitReports, getOneReport } from "./report.controller.js"
import { addReportValidator } from "../../helpers/validators.js"

import { Router } from "express";
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { addRegistry, getAllReports, getByDate, getEntryReports, getExitReports, getOneReport } from "./report.controller.js";


const api = Router()

api.post('/',[validateJwt,isAdmin,addReportValidator], addRegistry)

api.get('/all',[validateJwt,isAdmin], getAllReports)
api.get('/entry',[validateJwt,isAdmin], getEntryReports)
api.get('/exit',[validateJwt,isAdmin], getExitReports)
api.get('/:id',[validateJwt,isAdmin], getOneReport)
api.get('/all',[validateJwt], getAllReports)
api.get('/entry',[validateJwt], getEntryReports)
api.get('/exit',[validateJwt], getExitReports)
api.get('/date',[validateJwt], getByDate)
api.get('/:id',[validateJwt], getOneReport)

export default api