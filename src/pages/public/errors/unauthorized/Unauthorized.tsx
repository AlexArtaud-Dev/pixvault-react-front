import { Unauthorized as UnauthorizedMessage } from "@/components/custom/errors/unauthorized/unauthorized.tsx";

function Unauthorized() {
    return (
	    <div className="w-full h-full flex flex-row items-center justify-center">
		  <UnauthorizedMessage />
	    </div>
    );
}

export default Unauthorized;
