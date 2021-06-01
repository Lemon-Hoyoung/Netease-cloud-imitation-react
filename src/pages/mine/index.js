import React, { memo } from 'react';

import { HYMineWrapper } from './style';

export default memo(function HYMine() {
    return (
        <HYMineWrapper className="w980">
            <div className="content my_music">
                <div className="pic">
                    <h2>登录网易云音乐</h2>
                    <span className="forgeA my_music loginBtn"></span>
                </div>
            </div>
        </HYMineWrapper>
    )
})
