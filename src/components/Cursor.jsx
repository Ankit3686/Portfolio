import { useEffect } from "react";

function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return <div className="cursor"></div>;
}

export default Cursor;