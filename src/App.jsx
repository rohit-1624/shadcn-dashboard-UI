import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "@/components/ui/sidebar-07";
// import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/reports" element={<Reports />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
