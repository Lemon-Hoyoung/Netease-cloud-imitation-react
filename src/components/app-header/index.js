import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';
import { HeaderLinks } from "@/common/local-data"

const showSelectItem = (item, index) => {
    if (index < 3) {
        return <NavLink exact to={item.link} className="select-item" activeClassName="link-active">{item.title}<i className="icon"></i></NavLink>
    } else {
        return <a href={item.link} className="select-item">{item.title}</a>
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
                <HeaderRight></HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
