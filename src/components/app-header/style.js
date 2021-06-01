import styled from 'styled-components';
import SpiritPicture from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;

    .content {
        height: 70px;

        display: flex;
        justify-content: space-between
    }

    .divider {
        height: 5px;
        background-color: #C20C0C
    }
`;

export const HeaderLeft = styled.div`
    display: flex;

    .logo {
        display: inline-block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
    }

    .select-list {
        display: flex;
        color: #ccc;
        font-size: 14px;

        .select-item {
            position: relative;
            padding: 0 19px;
            height: 70px;
            text-align: center;
            line-height: 70px;
            text-decoration: none;
            color:#ccc;

            &:hover {
                /*text-decoration: none;*/
                background-color: #000;
                color: #fff;
            }

            /* hot图标 */
            :last-of-type {
                position: relative;
                ::after {
                    position: absolute;
                    content: '';
                    width: 28px;
                    height: 19px;
                    background-image: url(${SpiritPicture});
                    background-position: -192px 0;
                    top: 20px;
                    right: -20px;
                }
            }
        }

        /* NavLink活跃状态 */
        .link-active {
        color: #fff;
        background-color: #000;
            /* 下面的小三角 */
            .icon {
                position: absolute;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%, 0);
                background-image: url(${SpiritPicture});
                background-position: 254px 0;
            }
        }

    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;

    .search {
        width: 160px;
        height: 32px;
        border-radius: 16px;

        font-size: 12px;
        font-family: '微软雅黑';

        .ant-input {
            font-size: 12px;
        }

        input {
            &::placeholder {
                font-size: 12px;
            }
        }
    }

    .center {
        width: 80px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
        color: #ccc;

        &:hover {
            cursor: pointer;
            border-color: #fff;
            color: #fff;
        }
    }
`;
