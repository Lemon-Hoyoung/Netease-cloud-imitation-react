import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import routes from '@/router'

import { store } from './store/index'
import { Provider } from 'react-redux'

import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import HYBackTop from '@/components/back-top'
import HYPlayer from '@/pages/app-player-bar'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <HashRouter>
            <Provider store = { store }>
                <HYAppHeader/>
                <Suspense fallback={<Spin indicator={antIcon} />}>
                    {renderRoutes(routes)}
                </Suspense>
                <HYAppFooter/>
                <HYBackTop/>
                <HYPlayer/>
            </Provider>
        </HashRouter>
    )
})
