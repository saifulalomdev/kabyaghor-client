import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home";
// import { useStatusBar } from "./hooks/use-status-bar";
// import { useEffect } from "react";
import WritePage from "./pages/write";
import StorePage from "./pages/store";
import SavedPage from "./pages/saved";
import SearchPage from "./pages/search";
import SettingsPage from "./pages/settings";
import NotificationsPage from "./pages/notifications";
import { Toaster } from "sonner";
import LogInPage from "./pages/log-in";
// import { ProtectedRoute } from "./ui/protected-route";

export default function App() {
  // const { updateStatusBar } = useStatusBar();

  // useEffect(() => {
  //   updateStatusBar({ color: '#1E3A8A', style: 'DARK' });
  // }, [updateStatusBar]);

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />

          {/* Protected routes */}
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/write" element={<WritePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          {/* </Route> */}
        </Route>
        {/* Protected Feature Blocks */}

        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  )
}
