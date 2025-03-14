import { Routes, Route } from "react-router-dom";
import Logs from "./components/Logs";
import ActivityLogForm from "./components/activityComponents/ActivityLogForm";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Logs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new" element={<ActivityLogForm />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
