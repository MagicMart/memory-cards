// @flow

import React from "react";

function Secs({gameOver}) {
    const [secs, setSecs] = React.useState(0);
    const id = React.useRef(null);

    React.useEffect(() => {
        id.current = window.setTimeout(() => {
            setSecs(secs => secs + 1);
        }, 1000);
        return () => window.clearTimeout(id.current);
    }, [secs]);

    React.useEffect(() => {
        if (gameOver) {
            window.clearTimeout(id.current);
        }
    }, [gameOver]);

    return (
        <span>
            {" "}
            Secs <span className="number">{String(secs).padStart(3, "0")}</span>
        </span>
    );
}

type Props = {
    gameOver: boolean
};

export default React.memo<Props>(Secs);
