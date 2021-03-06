import styled from "styled-components";

export const HotRadioWrapper = styled.div`
  padding: 20px;

  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        font-size: 12px;
        .name {
          color: #000;
          margin-top: 3px;
        }

        .position {
          color: #666;
        }
      }
    }
  }
`
