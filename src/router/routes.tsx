// src/routes/routes.ts
import React from 'react';
import {lazy} from 'react';
import {SidebarItemGroup} from "@/types/components/sidebar/type.ts";
import {ContactIcon, HomeIcon, InfoIcon, ShieldIcon} from "lucide-react";
import AdminPanel from "@/pages/private/admin/AdminPanel.tsx";

export interface AppRoute {
    path: string;
    name: string;
    element: React.ReactNode;
    // When set to true the route requires authentication.
    protected?: boolean;
    // Optionally, list the roles that are allowed to access this route.
    allowedRoles?: string[];
}

// Use lazy-loading for code splitting. Adjust the import paths as needed.
const Home = lazy(() => import('@/pages/public/home/Home.tsx'));
const About = lazy(() => import('@/pages/public/about/About'));
const Contact = lazy(() => import('@/pages/public/contact/Contact'));
const Login = lazy(() => import('@/pages/public/login/Login'));
const Unauthorized = lazy(() => import('@/pages/public/unauthorized/Unauthorized'));

export const routes: AppRoute[] = [
    {
	  path: '/',
	  name: 'Home',
	  element: <Home/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/about',
	  name: 'About',
	  element: <About/>,
	  protected: true,
	  allowedRoles: ['user', 'admin'],
    },
    {
	  path: '/contact',
	  name: 'Contact',
	  element: <Contact/>,
	  protected: true,
	  allowedRoles: ['user', 'admin'],
    },
    {
	  path: '/admin',
	  name: 'Admin',
	  element: <AdminPanel/>,
    },
    {
	  path: '/login',
	  name: 'Login',
	  element: <Login/>,
    },
    {
	  path: '/unauthorized',
	  name: 'Unauthorized',
	  element: <Unauthorized/>,
    },
];

export const sidebarItemGroups: SidebarItemGroup[] = [
    {
	  label: "Application",
	  collapsible: true,
	  defaultOpen: true,
	  items: [
		{title: "Home", url: "/", icon: HomeIcon,},
		{title: "About", url: "/about", icon: InfoIcon,},
		{title: "Contact", url: "/contact", icon: ContactIcon,},
	  ]
    },
    {
	  label: "Administration",
	  collapsible: true,
	  defaultOpen: false,
	  items: [
		{title: "Administration page", url: "/admin", icon: ShieldIcon,},
	  ],
	  allowedRoles: ['admin'],
    }
];
