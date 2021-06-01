import React, { memo, useRef, useCallback } from 'react'

import { BarWrapper, CurWrapper } from './style';

import { useThrottle } from '@/utils/self-hooks';

export default memo(function HYDragSlider(props) {
    const { barClass, curClass, handleClass, defaultWidth = 0, defaultHeight = 0, setWidth, dragRangeId = "bar", sliderSet, sliderIsChanging, sliderChanged, directionX = true } = props;
    const targetRef = useRef();
    const wrapperRef = useRef();
    const width = directionX ? defaultWidth : defaultHeight;

    const move = useThrottle(function (distance, f) {
        const total = directionX ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
        const newWidth = width + distance * 100 / total > 100 ? 100 : width + distance * 100 / total < 0 ? 0 : width + distance * 100 / total;
        setWidth(newWidth);
        f.Sum = 0;
        clearTimeout(move.timer2);
        move.args && (function() {move.args[0] = 0})();
    }, 20, null, true);

    const moves = useCallback((distance) => {
        const total = directionX ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
        const newWidth = width + distance * 100 / total > 100 ? 100 : width + distance * 100 / total < 0 ? 0 : width + distance * 100 / total;
        setWidth(newWidth);
    }, [directionX, width, setWidth]);

    const setProgress = useCallback((e) => {
        const node = e.target;
        if (node.id !== "handle") { // 触发点击流程
            typeof sliderSet === 'function' && sliderSet(false);
            typeof sliderChanged === 'function' && sliderChanged();
        }
    }, [sliderSet, sliderChanged]);

    const mouseDown = useCallback((e) => {
        const node = e.target;
        let { offsetX, offsetY } = e.nativeEvent;
        const total = directionX ? wrapperRef.current.offsetWidth : wrapperRef.current.offsetHeight;
        offsetY = node.id === "bar" ? (total - offsetY) : (node.id === "cur" ? (targetRef.current.offsetHeight - offsetY) : offsetY);
        if (node.id !== "handle") { // 触发下键流程
            setWidth(directionX ? offsetX * 100 / total : offsetY * 100 / total);
            typeof sliderSet === 'function' && sliderSet(true);
            typeof sliderIsChanging === 'function' && sliderIsChanging();
        }
    }, [sliderSet, sliderIsChanging, directionX, setWidth])

    //拖动条被按下触发
    const setDrag = useCallback((event) => {
        const rangeDom = document.getElementById(dragRangeId);
        setDrag.X = directionX ? (event.clientX) : (event.clientY);
        setDrag.Sum = 0;
        typeof sliderSet === 'function' && sliderSet(true);
        typeof sliderIsChanging === 'function' && sliderIsChanging();

        rangeDom.addEventListener("mouseleave", leaveCb);
        rangeDom.addEventListener("mousemove", moveCb);
        rangeDom.addEventListener("mouseup", innerUpCb);

        //鼠标离开拖动区域触发
        function leaveCb(e) {
            rangeDom.removeEventListener("mouseleave", leaveCb);
            rangeDom.addEventListener("mouseenter", enterCb);
            window.addEventListener("mouseup", outerUpCb);
        }

        //鼠标进入拖动区域触发
        function enterCb(e) {
            rangeDom.addEventListener("mouseleave", leaveCb);
            rangeDom.removeEventListener("mouseenter", enterCb);
            window.removeEventListener("mouseup", outerUpCb);
        }

        //鼠标移动时触发
        function moveCb(e) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            let currentLoc = directionX ? e.clientX : e.clientY;
            setDrag.Sum += directionX ? (currentLoc - setDrag.X) : (setDrag.X - currentLoc);
            move(setDrag.Sum, setDrag);
            //moves(setDrag.Sum);
            setDrag.X = currentLoc;
        }

        //鼠标在拖动区域内部弹起时触发
        function innerUpCb(e) {
            rangeDom.removeEventListener("mousemove", moveCb);
            rangeDom.removeEventListener("mouseup", innerUpCb);
            rangeDom.removeEventListener("mouseleave", leaveCb);
            typeof sliderChanged === 'function' && sliderChanged();
            typeof sliderSet === 'function' && sliderSet(false);
        }

        //鼠标在拖动区域外部弹起时触发
        function outerUpCb(e) {
            rangeDom.removeEventListener("mousemove", moveCb);
            rangeDom.removeEventListener("mouseup", innerUpCb);
            rangeDom.removeEventListener("mouseenter", enterCb);
            window.removeEventListener("mouseup", outerUpCb);
            typeof sliderChanged === 'function' && sliderChanged();
            typeof sliderSet === 'function' && sliderSet(false);
        }
    }, [dragRangeId, sliderSet, sliderChanged, directionX, move, sliderIsChanging])
    
    return (
        <BarWrapper id="bar" className={barClass} onClick={setProgress} onMouseDown={mouseDown} ref={ wrapperRef }>
            <CurWrapper id="cur" className={curClass} ref={ targetRef } width={directionX ? width + "%" : "100%"} height={directionX ? "100%" : width + "%"} top={directionX ? "0%": ((100-width)+"%")}>
                <span id="handle" className={handleClass} onMouseDown={setDrag}>
                    <i></i>
                </span>
            </CurWrapper>
        </BarWrapper>
    )
})
