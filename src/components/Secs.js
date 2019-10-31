// @flow

import React from "react";

function Secs({moves, matched}: {moves: number, matched: Array<string>}) {
    const [secs, setSecs] = React.useState(0);
    const id = React.useRef(null);

    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setSecs(secs => secs + 1);
        }, 1000);
        return () => window.clearInterval(id.current);
    }, []);

    React.useEffect(() => {
        if (matched.length === 8) {
            window.clearInterval(id.current);
        }
    }, [matched]);

    return <span> Secs {String(secs).padStart(3, "0")}</span>;
}

export default Secs;
