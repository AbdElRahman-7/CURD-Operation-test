import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "../features/products/pages/EmpListing";
import EmpDetails from "../features/products/pages/EmpDetails";
import EmpEdit from "../features/products/pages/EmpEdit";
import EmpCreate from "../features/products/pages/EmpCreate";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpListing />}></Route>
        <Route path="/employee/create" element={<EmpCreate />}></Route>

        <Route path="/employee/detail/:empid" element={<EmpDetails />}></Route>
        <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;