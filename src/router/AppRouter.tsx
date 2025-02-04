import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes.tsx';
import { ProtectedRoute } from '@/components/custom/routes/protected-route';
import Login from "@/pages/public/login/Login.tsx";
import Home from "@/pages/public/home/Home.tsx";
import About from "@/pages/public/about/About.tsx";
import Contact from "@/pages/public/contact/Contact.tsx";
import AdminPanel from "@/pages/private/admin/dashboard/Dashboard.tsx";

const AppRouter = () => {
    return (
	    <Router>
		  <Routes>
			{/* Public route */}
			<Route path={routes.login.path} element={<Login />} />

			{/* Protected routes (requires login) */}
			<Route element={<ProtectedRoute />}>
			    <Route path={routes.home.path} element={<Home />} />
			    <Route path={routes.about.path} element={<About />} />
			    <Route path={routes.contact.path} element={<Contact />} />
			</Route>

			{/* Protected route that requires the 'admin' role */}
			<Route element={<ProtectedRoute allowedRoles={['admin']} />}>
			    <Route path={routes.admin.path} element={<AdminPanel />} />
			</Route>

			{/* Catch-all for unknown routes */}
			<Route path="*" element={<div>Page Not Found</div>} />
		  </Routes>
	    </Router>
    );
};

export default AppRouter;
