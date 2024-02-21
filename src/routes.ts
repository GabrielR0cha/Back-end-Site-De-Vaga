import  express  from "express";
import { authController } from "./controllers/auth-controller";
import { candidatesController } from "./controllers/candidate-controller";
import { companiesController } from "./controllers/companies-controller";
import { jobsController } from "./controllers/job-controller";
import { ensureAuth } from "./middleware/auth";

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world! -TESTE' }))



router.post('/auth/register',authController.register)
router.post('/auth/login', authController.login)

// router.get('/candidates',ensureAuth, candidatesController.index) //rota retirada após a inclusão do adminjs, funções do admin. Pode ser utilizada caso não queira usar adminJs
router.get('/candidates/:id',ensureAuth, candidatesController.show)
router.put('/candidates/:id',ensureAuth, candidatesController.update)
router.delete('/candidates/:id',ensureAuth, candidatesController.delete)

router.get('/companies',ensureAuth, companiesController.index)
// router.post('/companies',ensureAuth, companiesController.save) //rota retirada após a inclusão do adminjs, funções do admin. Pode ser utilizada caso não queira usar adminJs
router.get('/companies/:id',ensureAuth, companiesController.show)
// router.put('/companies/:id', ensureAuth,companiesController.update) //rota retirada após a inclusão do adminjs, funções do admin. Pode ser utilizada caso não queira usar adminJs
// router.delete('/companies/:id', ensureAuth,companiesController.delete) //rota retirada após a inclusão do adminjs, funções do admin. Pode ser utilizada caso não queira usar adminJs

router.get('/jobs',ensureAuth, jobsController.index)
// router.post('/jobs',ensureAuth, jobsController.save) //rota retirada após a inclusão do adminjs, funções do admin. Pode ser utilizada caso não queira usar adminJs
router.get('/jobs/:id', ensureAuth,jobsController.show)
// router.put('/jobs/:id', ensureAuth,jobsController.update) //rota retirada após a inclusão do adminjs, funções do admin.Pode ser utilizada caso não queira usar adminJs
// router.delete('/jobs/:id', ensureAuth,jobsController.delete) //rota retirada após a inclusão do adminjs, funções do admin. Pode ser utilizada caso não queira usar adminJs
router.post('/jobs/:id/addCandidate', ensureAuth,jobsController.addCandidate)
router.post('/jobs/:id/removeCandidate', ensureAuth,jobsController.removeCandidate)

export { router }