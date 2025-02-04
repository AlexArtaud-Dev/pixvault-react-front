// src/router/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { ProtectedRoute } from '@/components/custom/routes/protected-route';

const AppRouter = () => {
    return (
	    <Router>
		  <Routes>
			{routes.map((route, index) => {
			    // Wrap protected routes in the ProtectedRoute component.
			    if (route.protected) {
				  return (
					  <Route
						  key={index}
						  element={<ProtectedRoute allowedRoles={route.allowedRoles} />}
					  >
						<Route path={route.path} element={route.element} />
					  </Route>
				  );
			    }
			    // Render public routes normally.
			    return <Route key={index} path={route.path} element={route.element} />;
			})}
			{/* Catch-all for unknown routes: redirect to "/not-found" */}
			<Route path="*" element={<Navigate to="/not-found" replace />} />
		  </Routes>
	    </Router>
    );
};

export default AppRouter;
