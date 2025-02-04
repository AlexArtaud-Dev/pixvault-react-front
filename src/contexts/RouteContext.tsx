import React, { createContext, useContext } from 'react';
import { routes, AppRoute } from '@/router/routes.tsx';

type RouteContextType = {
    routes: AppRoute[];
};

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const RouteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
	    <RouteContext.Provider value={{ routes }}>
		  {children}
	    </RouteContext.Provider>
    );
};

export const useRoutes = (): RouteContextType => {
    const context = useContext(RouteContext);
    if (!context) {
	  throw new Error('useRoutes must be used within a RouteProvider');
    }
    return context;
};
