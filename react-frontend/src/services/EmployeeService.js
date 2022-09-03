import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post("http://localhost:8080/api/v1/Addemployees", employee);
       
    }

    getEmployeeById(employeeId){
        return axios.get("http://localhost:8080/api/v1/employees" + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put("http://localhost:8080/api/v1/employees/update" + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete("http://localhost:8080/api/v1/employees/delete" + '/' + employeeId);
    }
}

export default new EmployeeService()