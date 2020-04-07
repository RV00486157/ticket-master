const express = require('express')
const routes = express.Router()
const customerController = require('../controllers/customerController')
const departmentController = require('../controllers/departmentController')
const employeeController = require('../controllers/employeeController')
const ticketController = require('../controllers/ticketController')
const userController = require('../controllers/userController')
const authenticateUser = require('../middlewares/authenticate')

routes.post('/users/register', userController.register)
routes.post('/users/login', userController.login)
routes.get('/users/account', authenticateUser, userController.account)
routes.get('/users/logout', authenticateUser, userController.logout)

routes.get('/customers',authenticateUser ,customerController.list)
routes.post('/customers',authenticateUser, customerController.create)
routes.get('/customers/:id',authenticateUser, customerController.show)
routes.put('/customers/:id',authenticateUser, customerController.update)
routes.delete('/customers/:id',authenticateUser, customerController.delete)

routes.get('/departments',authenticateUser, departmentController.list)
routes.post('/departments',authenticateUser, departmentController.create)
routes.get('/departments/:id',authenticateUser, departmentController.show)
routes.put('/departments/:id',authenticateUser, departmentController.update)
routes.delete('/departments/:id',authenticateUser, departmentController.delete)

routes.get('/employees',authenticateUser, employeeController.list)
routes.post('/employees',authenticateUser, employeeController.create)
routes.get('/employees/:id',authenticateUser, employeeController.show)
routes.put('/employees/:id',authenticateUser, employeeController.update)
routes.delete('/employees/:id',authenticateUser, employeeController.delete)

routes.get('/tickets',authenticateUser, ticketController.list)
routes.post('/tickets',authenticateUser, ticketController.create)
routes.get('/tickets/:id',authenticateUser, ticketController.show)
routes.put('/tickets/:id',authenticateUser, ticketController.update)
routes.delete('/tickets/:id',authenticateUser, ticketController.delete)

module.exports = routes