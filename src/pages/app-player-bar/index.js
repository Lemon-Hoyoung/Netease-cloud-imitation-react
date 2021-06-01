import React, { memo, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PlayerWrapper } from './style';
import { CSSTransition } from 'react-transition-group'

import { useDebounce, useThrottle, useLocalStorage, useRefCallback } from '@/utils/self-hooks.js';

import { getSizeImage, formatMinuteSecond, getPlayUrl } from '@/utils/format-utils';

import { addClassName } from '@/utils/dom-operate';

import HYDragSlider from '@/components/drag-slider';
import HYFloatControl from '@/components/float-control';

import HYPlayList from './c-cpns/play-list';

import { addAllSongs, setSongIndex, skipSong, getLyric, setLyricIndex } from './store/actionCreators';

export default memo(function HYPlayer() {
    const [show, setShow] = useState(true);
    const [lockState, setLockState] = useState(false);
    const [width, setWidth] = useState(0);
    const [playStatus, setPlay] = useState(false);
    const [sliderStatus, setSlider] = useState(false);
    const [volIsSetting, setVolIsSetting] = useState(false);
    const [volume, setVolume] = useState(100);
    const [playListOpen, setPlayListOpen] = useState(false);
    const [order, setOrder] = useState(-1);
    const [songCache, setSongCache] = useState([]);
    const [indexCache, setIndex] = useState(-1);
    
    const contain = useRef();
    const audioRef = useRef();
    const orderRef = useRef();
    const orderStateRef = useRef();
    const tipRef = useRef();
    const lyricRef = useRef();
    const distanceSum = useRef(0);
    const orderTimerRef = useRef();
    const tipTimerRef = useRef();
    const dispatch = useDispatch();

    const { songList, currentSong, currentIndex, currentLyric, currentLyricIndex, songNumberIncrement } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        songList: state.getIn(["player", "songList"]),
        currentIndex: state.getIn(["player", "currentIndex"]),
        currentLyric: state.getIn(["player", "currentLyric"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        songNumberIncrement: state.getIn(["player", "songNumberIncrement"])
    }), shallowEqual);

    const song = useMemo(() => {
        return currentSong[0] || {name:"", ar:[{name:""}], al:{picUrl:"http://s4.music.126.net/style/web2/img/default/default_album.jpg"}, dt: 0};
    }, [currentSong])

    const playMusic = useCallback(() => {
        setPlay(!playStatus);
        playStatus ? audioRef.current.pause() : audioRef.current.play().catch(err => {
            setPlay(false);
        })
    }, [audioRef, playStatus]);

    const setSongCacheState = useLocalStorage("songCache", (getv) => {return JSON.parse(getv)}, setSongCache, setSongCache);

    const setIndexState = useLocalStorage("curIndex", (getv) => {return Number(getv)}, setIndex, setIndex);

    useEffect(() => {
        if (currentIndex > -1) {
            setIndexState(currentIndex);
        }
    }, [currentIndex, setIndexState]);

    useEffect(() => {
        setTimeout(() => setShow(false), 3000);
        //dispatch(getSong(wuYa));
    }, [dispatch]);

    useEffect(() => {
        audioRef.current.src = song.id ? getPlayUrl(song.id) : "";
        song.id ? setPlay(true) : setPlay(false);
    }, [song]);

    useEffect(() => {
        if (songNumberIncrement) {
            //立即显示（去除hidden样式）
            clearTimeout(tipTimerRef.current);
            addClassName(tipRef, false, "tipsHidden", 0).then(() => {
                //显示完成后延迟3000ms隐藏（添加hidden样式）
                return addClassName(tipRef, true, "tipsHidden", 3000)
            }).then(res => {
                tipTimerRef.current = res;
            });
        }
    }, [songList, songNumberIncrement])

    useEffect(() => {
        if (song && song.id) {
            dispatch(setSongIndex(song.id));
            dispatch(getLyric(song.id));

            if (songList.length > 0) {
                const currentSongOffset = document.getElementById(song.id.toString()) ? document.getElementById(song.id.toString()).offsetTop : 0;
                const playListDom = document.getElementsByClassName("currentPlayList")[0];
                if (currentSongOffset < playListDom.scrollTop || currentSongOffset >= playListDom.scrollTop + 252) {
                    if (songList.length > 9) {
                        if (playListDom.scrollTo) {
                            playListDom.scrollTo(0, currentSongOffset - 112);
                        } else {
                            playListDom.scrollTop = currentSongOffset - 112;
                        }
                    } else {
                        if (playListDom.scrollTo) {
                            playListDom.scrollTo(0, 0)
                        } else  {
                            playListDom.scrollTop = 0;
                        }
                    }
                }
            }
        }
    }, [song, songList, dispatch])

    useEffect(() => {
        song.id && setSongCacheState(songList)
    }, [song, songList, setSongCacheState]);

    useEffect(() => {
        if (songCache[0] !== undefined && indexCache !== -1 && songList.length === 0) {
            dispatch(addAllSongs(songCache, indexCache));
        }
    }, [dispatch, songCache, indexCache]);

    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);

    useEffect(() => {
            let initClassname = "sequencePlay";
            let oldClassname = order === -1 ? "songCircle" : order === 0 ? "sequencePlay" : "randomPlay";
            let classname = order === -1 ? "sequencePlay" : order === 0 ? "randomPlay" : "songCircle";
            addClassName(orderRef, false, initClassname, 0);
            addClassName(orderRef, false, oldClassname, 0);
            addClassName(orderRef, true, classname, 0);
    }, [order]);

    useEffect(() => {
        const lyHeight = document.getElementsByClassName("ly")[0].offsetHeight;
        if (currentLyricIndex >= 0) {
            distanceSum.current = document.getElementsByClassName("z-sel")[0] ? document.getElementsByClassName("z-sel")[0].offsetTop : 0;
        }

        if (currentLyricIndex === 0) {
            if (lyricRef.current.scrollTo) {
                lyricRef.current.scrollTo(0, 0)
            } else  {
                lyricRef.current.scrollTop = 0;
            }
        }

        if (distanceSum.current > 96 && distanceSum.current < lyHeight - 96) {
            if (lyricRef.current.scrollTo) {
                lyricRef.current.scrollTo({top: distanceSum.current - 96 > 0 ? distanceSum.current - 96 : distanceSum.current, behavior: "smooth"});
            } else {
                lyricRef.current.scrollTop = distanceSum.current - 96 > 0 ? distanceSum.current - 96 : distanceSum.current;
            }
        }
    }, [currentLyricIndex, currentLyric])

    const sliderChangeCallback = useRefCallback(() => {
        if (song.id) {
            audioRef.current.currentTime = (width * song.dt / 100000);
            if (!playStatus) {
                setPlay(true);
                audioRef.current.play();
            }
        }
    }, [width, playStatus, song]);

    const timeUpdate = useCallback((e) => {
        !sliderStatus && setWidth(e.target.currentTime * 100000 / song.dt);
        const currentTime = audioRef.current.currentTime;

        if (typeof currentLyric !== "undefined") {
            let i = 0;
            for (; i < currentLyric.length; i++) {
                if (currentTime < currentLyric[i].timeStamp)
                break;
            }
    
            if (currentLyricIndex !== i - 1) {
                dispatch(setLyricIndex(i - 1));
            }
        }

    }, [setWidth, song.dt, sliderStatus, currentLyric, currentLyricIndex, dispatch]);

    const timeEnded = useCallback(() => {
        setPlay(false);
        switch(order) {
            case -1:
                if (currentIndex < songList.length - 1) {
                    dispatch(skipSong(songList[currentIndex + 1].id));
                } else {
                    if (currentIndex === 0) {
                        setWidth(0);
                        audioRef.current.play();
                        setPlay(true);
                    } else {
                        dispatch(skipSong(songList[0].id));
                    }
                }
                break;
            case 0:
                const randomIndex = Math.floor(Math.random() * songList.length);
                if (currentIndex === randomIndex) {
                    setWidth(0);
                    audioRef.current.play();
                    setPlay(true);
                } else {
                    dispatch(skipSong(songList[randomIndex].id));
                }
                break;
            case 1:
                setWidth(0);
                audioRef.current.play();
                setPlay(true);
                break;
            default:
                return;
        }
    }, [dispatch, songList, currentIndex, order]);

    const prevChangeSong = useCallback(() => {
        if (order !== 0) {
            if (currentIndex > 0) {
                dispatch(skipSong(songList[currentIndex - 1].id));
            } else {
                if (songList.length === 1) {
                    audioRef.current.currentTime = 0;
                } else {
                    dispatch(skipSong(songList[songList.length - 1].id));
                }
            }
        } else {
            const randomIndex = Math.floor(Math.random() * songList.length);
            if (currentIndex === randomIndex) {
                setWidth(0);
                audioRef.current.play();
                setPlay(true);
            } else {
                dispatch(skipSong(songList[randomIndex].id));
            }
        }
    }, [songList, currentIndex, dispatch, order]);

    const nextChangeSong = useCallback(() => {
        if (order !== 0) {
            if (currentIndex < songList.length - 1) {
                dispatch(skipSong(songList[currentIndex + 1].id));
            } else {
                if (currentIndex === 0) {
                    audioRef.current.currentTime = 0;
                } else {
                    dispatch(skipSong(songList[0].id));
                }
            }
        } else {
            const randomIndex = Math.floor(Math.random() * songList.length);
            if (currentIndex === randomIndex) {
                setWidth(0);
                audioRef.current.play();
                setPlay(true);
            } else {
                dispatch(skipSong(songList[randomIndex].id));
            }
        }
    }, [songList, dispatch, currentIndex, order]);

    const volControl = useCallback(() => {
        setVolIsSetting(!volIsSetting);
    }, [volIsSetting]);

    const playListControl = useCallback(() => {
        setPlayListOpen(!playListOpen);
    }, [playListOpen]);

    const leaveHandle = useDebounce(() => {
        setShow(lockState);
    }, 1000);

    const enterHandle = useThrottle(() => {
        setShow(true);
    }, 1500, () => { clearTimeout(leaveHandle.timer) });

    const changeLock = useLocalStorage("lockState", (getv) => {return getv === "true"}, setLockState, setLockState);
    const changeLockState = useCallback(() => {
        changeLock(!lockState);
    }, [changeLock, lockState])

    const changeOrder = useLocalStorage("order", (getv) => {return Number(getv)}, setOrder, setOrder);
    const changeOrderState = useCallback(() => {
        if (order > 0) {
            changeOrder(-1);
        } else {
            changeOrder(order + 1);
        }
        //立即显示（去除hidden样式）
        clearTimeout(orderTimerRef.current);
        addClassName(orderStateRef, false, "orderHidden", 0).then(() => {
            //显示完成后延迟3000ms隐藏（添加hidden样式）
            return addClassName(orderStateRef, true, "orderHidden", 3000)
        }).then(res => {
            orderTimerRef.current = res;
        });
    }, [order, changeOrder]);

    const setVolumeState = useLocalStorage("volume", (getv) => {return Number(getv)}, setVolume, setVolume);

    return (
        <PlayerWrapper lock={lockState} playStatus={playStatus} volume={volume}>
            <CSSTransition 
                in={show}
                timeout={3000}
                classNames={lockState ? "lock-player": "player"}
                appear={true}
            >
                <div id="dragZone" className="trans" onMouseLeave={leaveHandle} onMouseEnter={enterHandle} ref={contain}>
                    <div className="playBar sprite_player">
                        <div className="controlBar w980">
                            <div className="btn">
                                <button className="prev sprite_player" onClick={prevChangeSong}></button>
                                <button className="play sprite_player" onClick={e => playMusic()}></button>
                                <button className="next sprite_player" onClick={nextChangeSong}></button>
                            </div>
                            <div className="flag">
                                <img src={getSizeImage(song.al.picUrl, 34)} alt="header"></img>
                                <span className="mask sprite_player forgeA"> </span>
                            </div>
                            <div className="progressBar">
                                <div className="songInfo">
                                    <span className="songName over forgeA">{song.name}</span>
                                    <span className="master over">
                                        <span className="forgeA singerName">{song.ar[0].name}</span>
                                    </span>
                                </div>
                                <div className="m-bar">
                                    <HYDragSlider barClass="barbg progress_bar" curClass="cur progress_bar" handleClass="timeHandle sprite_icon" defaultWidth={width} setWidth={setWidth} 
                                     sliderChanged={sliderChangeCallback} sliderSet={setSlider} directionX={true} dragRangeId="dragZone" />
                                    <span className="time"><em>{formatMinuteSecond(width / 100 * song.dt)}</em> / {formatMinuteSecond(song.dt)}</span>
                                </div>
                            </div>
                            <div className="operate">
                                <span className="collect sprite_player block forgeA"> </span>
                                <span className="share sprite_player block forgeA"> </span>
                            </div>
                            <div className="control sprite_player">
                                <HYFloatControl className="m-vol sprite_player" ProperId="dragZone" visual={volIsSetting} setVisual={setVolIsSetting} domExist={false}>
                                    <HYDragSlider barClass="vol_bar" curClass="current_vol sprite_player" handleClass="volHandle sprite_icon" defaultHeight={volume} setWidth={setVolumeState} directionX={false} dragRangeId="dragZone"/>
                                </HYFloatControl>
                                <button className="volBtn sprite_player block" onClick={volControl} ></button>
                                <button className="shuffleBtn sprite_player block" onClick={changeOrderState} ref={orderRef}> </button>
                                <span className="play-list">
                                    <span className="tips sprite_player" ref={tipRef}>已添加到播放列表</span>
                                    <span className="listBtn sprite_player forgeA" onClick={playListControl}>{songList.length}</span>
                                </span>
                                <span className="orderState sprite_player orderHidden" ref={orderStateRef}>
                                    {order === -1 ? "循环": order === 0 ? "随机":"单曲循环"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lockWrap sprite_player">
                        <button className="lock sprite_player" onClick={changeLockState}></button>
                    </div>
                    <div className="rightFill sprite_player"></div>
                    <div className="handleBar"></div>
                    <HYFloatControl ProperId="dragZone" visual={playListOpen} setVisual={setPlayListOpen} domExist={true}>
                        <HYPlayList lyricRef={lyricRef} audioRef={audioRef} close={setPlayListOpen}/>
                    </HYFloatControl>
                    <audio autoPlay ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded}/>
                </div>
            </CSSTransition>
        </PlayerWrapper>
    )
})
