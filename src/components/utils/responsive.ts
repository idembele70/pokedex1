import { css, CSSObject } from "styled-components";

export const XS = (props: CSSObject) =>
  css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
