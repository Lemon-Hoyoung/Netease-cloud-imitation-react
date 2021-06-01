import React, { memo } from 'react';

import { HYFriendWrapper } from './style';

export default memo(function HYFriend() {
    return (
        <HYFriendWrapper className="w980">
            <div className="content not-login">
                <div className="textTips">
                    你可以关注明星和好友品味他们的私房歌单<br/>
                    通过他们的动态发现更多精彩音乐
                </div>
                <span className="forgeA loginBtn not-login"></span>
            </div>
        </HYFriendWrapper>
    )
})
