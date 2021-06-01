import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  background-position: -225px -156px;
  width: 670px;
  margin-left: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    padding-bottom: 6px;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
      color: #333;
    }

    .keyword {
      display: flex;
      color: #666;
      margin-top: 9px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    color: #666;

    .count {
        color: #C20C0C;
        font-weight: bold;
    }
  }
`