import React, { memo, Fragment, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { HeaderCateglory, CategloryWrapper } from './style';
import { FindMusicLinks } from '@/common/local-data';

export default memo(function HYDiscover(props) {

    useEffect(() => {
        
    }, [])

    const { route } = props;
    return (
        <Fragment>
            <HeaderCateglory>
                <CategloryWrapper>
                    <ul className="wrap">
                        { FindMusicLinks.map((item, index) => {
                            return (
                                <li className="link" key={item.title}>
                                    <NavLink exact to={item.link} activeClassName="menu-active">{item.title}</NavLink>
                                </li>
                            )
                        }) }
                    </ul>
                </CategloryWrapper>
            </HeaderCateglory>
            {renderRoutes(route.routes)}
        </Fragment>
    )
})
