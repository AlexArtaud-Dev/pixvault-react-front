import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';
import {useAuth} from "@/contexts/AuthContext.tsx";

export function SubSidebarFooter() {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
	  return (
		  <div className="p-4">
			<Link to="/login">
			    <Button variant="outline" className="w-full">
				  Login
			    </Button>
			</Link>
		  </div>
	  );
    }

    // If logged in, display user info and maybe a logout button.
    return (
	    <div className="p-4">
		  <p className="text-sm">Logged in as {user?.name}</p>
		  {/* Optionally add a logout button */}
	    </div>
    );
}
