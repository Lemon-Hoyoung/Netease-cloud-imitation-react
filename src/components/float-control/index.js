import React, { memo, useEffect, useCallback, useRef } from 'react';

import {
    FloatControlWrapper
} from './style';

export default memo(function HYFloatControl(props) {
    const { ProperId, visual, id, className = "", setVisual, domExist = true } = props;
    let clickLocation = useRef(false);

    const mouseDownCb = useCallback((e) => {
        const rangeDom = document.getElementById(ProperId);
        if (visual) {
            clickLocation.current = true;
        }
        rangeDom.removeEventListener('mousedown', mouseDownCb);
    }, [visual, ProperId]);

    const AllMouseDownCb = useCallback(() => {
        window.removeEventListener('mousedown', AllMouseDownCb);
    }, []);

    const mouseUpCb = useCallback(() => {
        const rangeDom = document.getElementById(ProperId);
        rangeDom.removeEventListener('mouseup', mouseUpCb)
    }, [ProperId])

    const AllMouseUpCb = useCallback((e) => {
        const rangeDom = document.getElementById(ProperId);
        if (visual) {
            !clickLocation.current && setVisual(false);
            clickLocation.current = false;
        }
        window.addEventListener('mousedown', AllMouseDownCb);
        rangeDom.addEventListener('mousedown', mouseDownCb);
        rangeDom.addEventListener('mouseup', mouseUpCb);
    }, [visual, setVisual, ProperId, AllMouseDownCb, mouseDownCb, mouseUpCb])

    useEffect(() => {
        const rangeDom = document.getElementById(ProperId);
        window.addEventListener('mousedown', AllMouseDownCb);
        window.addEventListener('mouseup', AllMouseUpCb);
        rangeDom.addEventListener('mousedown', mouseDownCb);
        rangeDom.addEventListener('mouseup', mouseUpCb);
        return () => {
            window.removeEventListener('mousedown', AllMouseDownCb);
            window.removeEventListener('mouseup', AllMouseUpCb);
            rangeDom.removeEventListener('mousedown', mouseDownCb);
            rangeDom.removeEventListener('mouseup', mouseUpCb)
        }
    }, [mouseDownCb, AllMouseDownCb, mouseUpCb, AllMouseUpCb, ProperId]);

    return (
        <FloatControlWrapper visual={visual} className={className} id={id} domExist={domExist}>
            {props.children}
        </FloatControlWrapper>
    )
})