import { NotFound as NotFoundMessage } from "@/components/custom/errors/notFound/not-found.tsx";

function NotFound() {
    return (
	    <div className="w-full h-full flex flex-row items-center justify-center">
		  <NotFoundMessage />
	    </div>
    );
}

export default NotFound;
