import React, { memo, useRef, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SearchWrapper } from './style';
import { NavLink } from 'react-router-dom';

import { getSearchResult } from './store/actionCreators';

import { typeToNote } from '@/utils/format-utils';

import HYSearchSong from './c-cpns/search-song';

import qs from "querystring";

export default memo(function HYSearch(props) {
    const tabLi = useRef([1, 100, 10, 1014, 1006, 1000, 1009, 1002]);
    const tabName = useRef(["单曲", "歌手", "专辑", "视频", "歌词", "歌单", "声音主播", "用户"])
    const [searchKeyWord, setSearchKey] = useState("");
    const inputRef = useRef();
    const dispatch = useDispatch();

    const { search } = props.location;
    const { keywords, type } = qs.parse(search.slice(1));

    const { searchSong } = useSelector(state => ({
        searchSong: state.getIn(["search", "searchSong"]),
        searchSinger: state.getIn(["search", "searchSinger"])
    }), shallowEqual);

    useEffect(() => {
        dispatch(getSearchResult(keywords, Number(type)))
        setSearchKey(keywords);
    }, [dispatch, keywords, type]);

    const history = useHistory();

    const searchOperate = useCallback((e) => {
        if (e.keyCode === 13 && e.target.value !== "") {
            history.push('/search/?keywords=' + e.target.value + "&type=1");
        }
    }, [history]);

    const searchClick = useCallback(() => {
        if (inputRef.current && inputRef.current.value !== "") {
            history.push('/search/?keywords=' + inputRef.current.value+ "&type=1");
        }
    }, [history]);

    return (
        <SearchWrapper className="w980">
            <div className="search_main">
                <div className="search_input sprite_download">
                    <input ref={inputRef} className="contentInput" type="text" onKeyDown={e => searchOperate(e)} defaultValue={searchKeyWord} />
                    <span className="searchOperate sprite_download forgeA" onClick={searchClick}></span>
                </div>
                <div className="searchContent">
                    <div className="note">
                        搜索"{keywords}"，找到
                            <em className="num"> {
                                Number(type) === 1 && Number(searchSong.length)
                            } </em>
                            {typeToNote(Number(type))}
                    </div>
                    <ul className="tab_search m-tab">
                        {
                            tabLi.current.map((item, index) => {
                                return (
                                    <li className="btn_search m-tab" key={item}>
                                        <NavLink className={item === Number(type) ? "z-slt type m-tab" : "type m-tab"} to={"/search?keywords="+keywords+"&type="+item}><em className="name m-tab">{tabName.current[index]}</em></NavLink>
                                    </li>)
                            })
                        }
                    </ul>
                    {
                        Number(type) === 1 && <HYSearchSong searchSong={searchSong} keywords={keywords} />
                    }
                </div>
            </div>
        </SearchWrapper>
    )
})
