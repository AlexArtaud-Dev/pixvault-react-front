// src/main.tsx
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import './index.css';
import {AuthProvider} from "@/contexts/AuthContext.tsx";
import {routes} from "@/router/routes.tsx";
import {ProtectedRoute} from "@/components/custom/routes/protected-route.tsx";

createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <Router>
              <AuthProvider>
                  <Layout>
                      <Suspense fallback={<div>Loading...</div>}>
                          <Routes>
                              {routes.map((route, index) => {
                                  if (route.protected) {
                                      // Wrap the protected route with the ProtectedRoute element
                                      return (
                                            <Route
                                                  key={index}
                                                  element={<ProtectedRoute allowedRoles={route.allowedRoles} />}
                                            >
                                                <Route path={route.path} element={route.element} />
                                            </Route>
                                      );
                                  }
                                  return <Route key={index} path={route.path} element={route.element} />;
                              })}
                          </Routes>
                      </Suspense>
                  </Layout>
              </AuthProvider>
          </Router>
      </StrictMode>,
);
