import { styled } from "@mui/material";

export const InputContainer = styled("div")`
  & .input-container {
    display: block;
    width: 100%;
    & .input-content {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      position: relative;
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
      vertical-align: top;
      width: 100%;
      & label {
        color: rgba(34, 51, 84, 0.7);
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4375em;
        padding: 0;
        position: relative;
        display: block;
        transform-origin: top left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: calc(133% - 24px);
        position: absolute;
        left: 0;
        top: 0;
        -webkit-transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          -webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        z-index: 1;
        pointer-events: none;
        transform: translate(14px, 9px) scale(1);
      }
      & .input-controls {
        & textarea {
          padding: 2.5px 4px 2.5px 6px;
          width: 100%;
          width: calc(100% - 28px);
          min-width: calc(100% - 1px);
          max-width: calc(100% - 1px);
          height: 100%;
          min-height: 38px;
          border: 0px;
          padding: 9.5px;
          outline: none;
          border-radius: 5px;
          padding-left: 15px;
          background-color: transparent;
          font-family: inherit;
          font-size: inherit;
          font-size: 14px;
          color: ${({ theme }) => theme.palette.common.black};
        }
        & fieldset {
          text-align: left;
          position: absolute;
          bottom: 0;
          right: 0;
          top: -5px;
          left: 0;
          margin: 0;
          padding: 0 8px;
          pointer-events: none;
          border-radius: 5px;
          border-style: solid;
          border-width: 1px;
          overflow: hidden;
          min-width: 0%;
          border-color: rgba(0, 0, 0, 0.23);
          & legend {
            float: unset;
            display: block;
            width: auto;
            padding: 0;
            height: 11px;
            font-size: 0.65em;
            visibility: hidden;
            max-width: 0.01px;
            -webkit-transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            white-space: nowrap;

            & span {
              padding-left: 5px;
              padding-right: 5px;
              display: inline-block;
            }
          }
        }
      }
    }

    &.focus {
      & label {
        color: ${({ theme }) => theme.palette.primary.main} !important;
        -webkit-transform: translate(14px, -9px) scale(0.75);
        -moz-transform: translate(14px, -9px) scale(0.75);
        -ms-transform: translate(14px, -9px) scale(0.75);
        transform: translate(14px, -9px) scale(0.75);
      }
      & fieldset {
        border: 2px solid ${({ theme }) => theme.palette.primary.main} !important;
        & legend {
          max-width: 100% !important;
          & span {
            max-width: 100% !important;
          }
        }
      }
    }
  }
`;
