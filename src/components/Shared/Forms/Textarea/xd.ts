import { styled } from "@mui/material";

const defaultColor = "rgba(34, 51, 84, 0.7)";
const borderColor = "rgba(0, 0, 0, 0.23)";

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
        -webkit-transform: translate(14px, -9px) scale(0.75);
        -moz-transform: translate(14px, -9px) scale(0.75);
        -ms-transform: translate(14px, -9px) scale(0.75);
        transform: translate(14px, -9px) scale(0.75);
        -webkit-transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          -webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        z-index: 1;
        pointer-events: none;
      }
      & .input-controls {
        & textarea {
          padding: 2.5px 4px 2.5px 6px;
          width: 100%;
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
          border-radius: inherit;
          border-style: solid;
          border-width: 1px;
          overflow: hidden;
          min-width: 0%;
          border-color: rgba(0, 0, 0, 0.23);
          & legend {
            display: block;
            padding-inline-start: 2px;
            padding-inline-end: 2px;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;
            box-sizing: border-box;
            color: inherit;
            display: table;
            max-width: 100%;
            padding: 0;
            white-space: normal;
            float: unset;
            display: block;
            width: auto;
            padding: 0;
            height: 11px;
            font-size: 0.75em;
            visibility: hidden;
            max-width: 100%;
            -webkit-transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
            transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
            white-space: nowrap;
            & span {
              padding-left: 5px;
              padding-right: 5px;
              display: inline-block;
              /* font-size: 1.15em; */
            }
          }
        }
      }
    }
  }
  .input-container {
    position: relative;
    fieldset {
      position: absolute;
      top: -5px;
      left: -2px;
      right: -3px;
      bottom: 0;
      overflow: hidden;
      border-style: solid;
      border-width: 1px;
      border-color: ${borderColor};
      pointer-events: none;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid ${borderColor};
    }
    .input-controls {
      display: block;
      z-index: 1;
      width: 100%;
      border-radius: 5px;
      position: relative;
      padding-top: 7px;
      &.open {
        box-shadow: none;
        &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 9px;
          right: 9px;
          border-bottom: 1px solid ${defaultColor};
        }
      }
      .form-control-container {
        display: block;
        width: 100%;
      }
      textarea {
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
      }
    }
  }
`;
