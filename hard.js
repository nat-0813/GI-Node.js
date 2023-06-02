// Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

const express = require('express');
const app = express();
const port = 9000;
//all employee data
const employeesData = require('./employees.json');

//Endpoint to get all employees
        app.get("/employees", (req,res)=>{
            res.json(employeesData.employees);
        });
//Endpoint to get a specific employee by ID
        app.get('/employees/:employeeID',(req,res)=>{
const employeeID = req.params.employeeID;
const employee = employeesData.employees.find(emp => emp.employeeID === employeeID);

if (employee){
    res.json(employee);
} else {
    res.status(404).json({ error: 'Employee not found'});

}
        });

      //Start the server
      app.listen(9000, () => {
        console.log(`server is running on port ${port}`);
      });  
// Get 'http://localhost:9000/employees to retrieve all employee data
//GET http://localhost:9000/employees/<employeeID> to retrieve data for a specific employee by their ID
//<> when testing in browser for getting specific employeeID do not add arrows but only put /with number of id
    