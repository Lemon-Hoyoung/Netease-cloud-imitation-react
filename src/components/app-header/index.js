import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
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
        return <NavLink exact key={item.title} to={item.link} className="select-item" activeClassName="link-active">{item.title}<i className="icon"></i></NavLink>
    } else {
        return <a href={item.link} key={item.title} className="select-item">{item.title}</a>
    }
}

export default memo(function HYAppHeader() {
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
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
                    <button className="center">创作者中心</button>
                    <div><a href="#">登录</a></div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
