import {FlickeringGrid} from "@/components/ui/flickering-grid.tsx";
import {HyperText} from "@/components/ui/hyper-text.tsx";

export function Unauthorized() {
    return (
	    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-lg bg-background">
		  <FlickeringGrid
			  className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]	"
			  squareSize={4}
			  gridGap={6}
			  color="#DC2626"
			  maxOpacity={0.5}
			  flickerChance={0.1}
			  height={800}
		  />
		  <HyperText className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-8xl text-destructive">Unauthorized</HyperText>;
	    </div>
    );
}
