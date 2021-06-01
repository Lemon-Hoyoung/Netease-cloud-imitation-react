import styled from 'styled-components';
import FooterPicture from '@/assets/img/foot_enter_new.png';
import FooterPicture2 from '@/assets/img/foot_enter_tt.png'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 172px;
    border-top: 1px solid #d3d3d3;
    background-color: #f2f2f2;
    margin-bottom: 53px;
    .footer-content {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

`;

export const FooterLeftWrapper = styled.div`
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    font-size: 12px;

    .line {
        margin: 0 8px 0 10px;
        color: #999;
    }

    .jumpLink > a{
        color: #999;
    }

    .footer-company,
    .footer-alert,
    .footer-manage-system {
        margin-right: 10px;
    }
`;

export const FooterRightWrapper = styled.ul`
    display: flex;
    width: 420px;
    margin-top: 33px;

    .item {
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        .link {
            display: block;
            width: 47px;
            height: 45px;
            background-image: url(${FooterPicture});
            background-size: 110px 552px;
        }

        :nth-child(1) .link {
            background-position: -63px -456.5px;
        }

        :nth-child(2) .link {
            background-position: -63px -101px;
        }

        :nth-child(3) .link {
            background-position: 0 0;
        }

        :nth-child(4) .link {
            background-position: -63px -50px;
        }

        :nth-child(5) .link {
            background-position: 0 -101px;
        }

        .title {
            margin-top: 5px;
            display: block;
            width: 72px;
            height: 14px;
            background-image: url(${FooterPicture2});
            background-size: 180px 139px;
        }

        :nth-child(1) .title {
            background-position: 0 -108px;
            margin-top: 6px;
            margin-left: -10px
        }

        :nth-child(2) .title {
            background-position: -1px -91px;
            margin-top: 7px;
        }

        :nth-child(3) .title {
            background-position: 0 0;
            margin-top: 6px;
        }

        :nth-child(4) .title {
            background-position: 0 -54px;
            margin-top: 6px;
            margin-left: -2px
        }

        :nth-child(5) .title {
            background-position: -1px -72px;
            margin-top:6px;
        }
    }
`;