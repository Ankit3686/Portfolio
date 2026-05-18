import { useEffect, useState } from "react";

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 2 sec loader

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="loader">
            <div className="loader-circle"></div>
            <h2>Loading...</h2>
        </div>
    );
}

export default Loader;