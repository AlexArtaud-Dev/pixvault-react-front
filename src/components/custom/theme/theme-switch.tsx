import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Une fois le composant monté, active la gestion du thème côté client
    useEffect(() => {
	  setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
	    <div
		    id="theme-toggle"
		    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		    className="flex items-center justify-center w-5 h-5 cursor-pointer"
	    >
		  {theme === "dark" ? <SunIcon/> : <MoonIcon/>}
	    </div>
    )
}