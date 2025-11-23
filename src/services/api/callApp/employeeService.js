const BASE_URL = "http://localhost:3001/employee";

//  Get all employees
export const getEmployees = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch employees");
  return response.json();
};

//  Get single employee by ID
export const getEmployeeById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch employee");
  return response.json();
};

// Create employee
export const createEmployee = async (empdata) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empdata),
  });
  if (!response.ok) throw new Error("Failed to create employee");
  return response.json();
};

//  Update employee
export const updateEmployee = async (id, empdata) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empdata),
  });
  if (!response.ok) throw new Error("Failed to update employee");
  return response.json();
};

// Delete employee
export const deleteEmployee = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete employee");
  return true;
};