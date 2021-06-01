import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const HYDiscover = lazy(() => import("@/pages/discover"));
const HYFriend = lazy(() => import('@/pages/friend'));
const HYMine = lazy(() => import('@/pages/mine'));
const HYRecommend = lazy(() => import('@/pages/discover/child-pages/recommend'));
const HYRanking = lazy(() => import('@/pages/discover/child-pages/ranking'));
const HYSongSheet = lazy(() => import('@/pages/discover/child-pages/songSheet'));
const HYRadio = lazy(() => import('@/pages/discover/child-pages/radio'));
const HYSinger = lazy(() => import('@/pages/discover/child-pages/singer'));
const HYDisc = lazy(() => import('@/pages/discover/child-pages/disc'));
const HYSearch = lazy(() => import('@/pages/search'));

// import HYDiscover from '@/pages/discover';
// import HYFriend from '@/pages/friend';
// import HYMine from '@/pages/mine';
// import HYRecommend from '@/pages/discover/child-pages/recommend';
// import HYRanking from '@/pages/discover/child-pages/ranking';
// import HYSongSheet from '@/pages/discover/child-pages/songSheet';
// import HYRadio from '@/pages/discover/child-pages/radio';
// import HYSinger from '@/pages/discover/child-pages/singer';
// import HYDisc from '@/pages/discover/child-pages/disc';
// import HYSearch from '@/pages/search'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/discover"/>
    },
    {
        path: '/discover',
        component: HYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                component: HYRecommend
            },
            {
                path: '/discover/ranking',
                component: HYRanking
            },
            {
                path: '/discover/songSheet',
                component: HYSongSheet
            },
            {
                path: '/discover/radio',
                component: HYRadio
            },
            {
                path: '/discover/singer',
                component: HYSinger
            },
            {
                path: '/discover/disc',
                component: HYDisc
            }
        ]
    },
    {
        path: '/mine',
        component: HYMine
    },
    {
        path: '/friend',
        component: HYFriend
    },
    {
        path: '/search',
        component: HYSearch
    }
];

export default routes;