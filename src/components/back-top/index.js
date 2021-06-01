import React, { memo, useEffect, useState } from 'react';

import {
    BackTopWrapper
} from './style';

export default memo(function HYBackTop() {
    const [pos, setPos] = useState(0);
    const getPosY = () => {
        setPos(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", getPosY);
        return () => {
            window.removeEventListener("scroll", getPosY);
        }
    }, [])

    return (
        <BackTopWrapper pos={pos}>
            <button className="backtop" onClick={e => window.scrollTo(0,0)}></button>
        </BackTopWrapper>
    )
})