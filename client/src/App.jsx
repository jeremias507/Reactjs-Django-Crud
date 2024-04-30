import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksFormPage } from "./pages/TasksFormPage";
import { TasksPages } from "./pages/TasksPages";
import { Navigation } from "./components/Navigation";
import {Toaster} from 'react-hot-toast'

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/tasks" element={<TasksPages />} />
        <Route path="/tasks-create" element={<TasksFormPage />} />
        <Route path="/tasks/:id" element={<TasksFormPage />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
};
