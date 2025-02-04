// src/routes/routes.ts
import React, { lazy } from 'react';
import { SidebarItemGroup } from "@/types/components/sidebar/type.ts";
import {
    ClockArrowUpIcon,
    EyeIcon,
    LayoutDashboardIcon,
    OctagonAlertIcon,
    RepeatIcon,
    TrendingUpIcon,
    TrophyIcon,
    UsersIcon,
} from "lucide-react";

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
const Login = lazy(() => import('@/pages/public/login/Login'));
const Unauthorized = lazy(() => import('@/pages/public/unauthorized/Unauthorized'));
const Dashboard = lazy(() => import('@/pages/private/admin/dashboard/Dashboard.tsx'));
const GlobalRanking = lazy(() => import('@/pages/public/galleries/global/GlobalRanking.tsx'));
const ViewedRanking = lazy(() => import('@/pages/public/galleries/viewed/ViewedRanking.tsx'));
const UpvotedRanking = lazy(() => import('@/pages/public/galleries/upvoted/UpvotedRanking.tsx'));
const ExtendedRanking = lazy(() => import('@/pages/public/galleries/extended/ExtendedRanking.tsx'));
const RecentRanking = lazy(() => import('@/pages/public/galleries/recent/RecentRanking.tsx'));
const Users = lazy(() => import('@/pages/private/admin/users/Users.tsx'));
const Reports = lazy(() => import('@/pages/private/admin/reports/Reports.tsx'));

export const routes: AppRoute[] = [
    {
	  path: '/',
	  name: 'Home',
	  element: <Home/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/top',
	  name: 'Global Ranking',
	  element: <GlobalRanking/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/top/view',
	  name: 'Most Viewed',
	  element: <ViewedRanking/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/top/upvote',
	  name: 'Most Upvoted',
	  element: <UpvotedRanking/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/top/extend',
	  name: 'Most Extended',
	  element: <ExtendedRanking/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/top/recent',
	  name: 'Most Recent',
	  element: <RecentRanking/>,
	  protected: false,
	  allowedRoles: [],
    },
    {
	  path: '/admin/dashboard',
	  name: 'Dashboard',
	  element: <Dashboard/>,
	  protected: true,
	  allowedRoles: ["admin"],
    },
    {
	  path: '/admin/users',
	  name: 'Users',
	  element: <Users/>,
	  protected: true,
	  allowedRoles: ["admin"],
    },
    {
	  path: '/admin/reports',
	  name: 'Reports',
	  element: <Reports/>,
	  protected: true,
	  allowedRoles: ["admin"],
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
	  label: "Galleries",
	  collapsible: true,
	  defaultOpen: true,
	  items: [
		{title: "Global Ranking", url: "/top", icon: TrophyIcon,},
		{title: "Most Viewed", url: "/top/view", icon: EyeIcon,},
		{title: "Most Upvoted", url: "/top/upvote", icon: TrendingUpIcon,},
		{title: "Most Extended", url: "/top/extend", icon: RepeatIcon,},
		{title: "Most Recent", url: "/top/recent", icon: ClockArrowUpIcon,},
	  ]
    },
    {
	  label: "Administration",
	  collapsible: true,
	  defaultOpen: false,
	  items: [
		{title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboardIcon,},
		{title: "Users", url: "/admin/users", icon: UsersIcon,},
		{title: "Reports", url: "/admin/reports", icon: OctagonAlertIcon,},
	  ],
	  allowedRoles: ['admin'],
    }
];
