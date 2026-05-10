import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";
import MainLayout from "./layouts/main-layout";
import SignUp from "./pages/sign-up";
import HomePage from "./pages/home";
import { useStatusBar } from "./hooks/use-status-bar";
import { useEffect } from "react";

export default function App() {
  const { updateStatusBar } = useStatusBar();

  useEffect(() => {
    updateStatusBar({ color: '#1E3A8A', style: 'DARK' });
  }, [updateStatusBar]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
