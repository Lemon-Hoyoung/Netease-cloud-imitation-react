import React, { memo, Fragment } from 'react'

import {
    FooterWrapper,
    FooterLeftWrapper,
    FooterRightWrapper
} from "./style";
import { FooterLinks, FooterImages } from "@/common/local-data"

export default memo(function HYAppFooter() {

    const FooterLeft = () => {
        return (
            <FooterLeftWrapper>
                <p className="jumpLink">
                    {FooterLinks.map((item, index) => {
                        return (
                            <Fragment key={item.title}>
                                <a href={item.link}>{item.title}</a>
                                <span className="line">|</span>
                            </Fragment>
                        )
                    })}
                </p>
                <p>
                    <span className="footer-company">网易公司版权所有©1997-2020</span>
                    <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
                </p>
                <p>
                    <span className="footer-alert">
                        违法和不良信息举报电话：0571-89853516
                    </span>
                    <span>举报邮箱：ncm5990@163.com</span>
                </p>
                <p>
                    <span>粤B2-20090191-18</span>
                    <span className="footer-manage-system">
                        工业和信息化部备案管理系统网站
                    </span>
                    <span>浙公网安备 33010902002564号</span>
                </p>
            </FooterLeftWrapper>
        )
    }

    const FooterRight = () => {
        return (
            <FooterRightWrapper>
                {FooterImages.map((item, index) => {
                    return (
                        <li key={item.title} className="item">
                            <a href={item.link}> </a>
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </FooterRightWrapper>
        )
    }
    return (
        <FooterWrapper>
            <div className="footer-content w980">
                <FooterLeft/>
                <FooterRight/>
            </div>
        </FooterWrapper>
    )
})
