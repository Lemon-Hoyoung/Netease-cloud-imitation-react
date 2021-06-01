import React, { memo, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';
import { HeaderLinks } from "@/common/local-data"

const showSelectItem = (item, index) => {
    if (index < 3) {
        return <NavLink key={item.title} to={item.link} className="select-item" activeClassName="link-active">{item.title}<i className="icon"></i></NavLink>
    } else {
        return <a target="_blank" rel="noreferrer" href={item.link} key={item.title} className="select-item">{item.title}</a>
    }
}

export default memo(function HYAppHeader() {
    const history = useHistory();

    const searchOperate = useCallback((e) => {
        history.push('/search/?keywords=' + e.target.value + "&type=1");
    }, [history]);

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                <a href="#/" className="logo sprite_01">{}</a>
                    <div className="select-list">
                        {
                            HeaderLinks.map((item, index) => {
                                return (
                                    showSelectItem(item, index)
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" onPressEnter={e => searchOperate(e)} prefix={<SearchOutlined />}/>
                    <button className="center">创作者中心</button>
                    <div><span className="forgeA">登录</span></div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
