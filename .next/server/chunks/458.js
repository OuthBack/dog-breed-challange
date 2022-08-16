"use strict";
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 7458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ LabelAtom)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/enum/typograph.enum.ts
var typograph_enum = __webpack_require__(8597);
;// CONCATENATED MODULE: ./src/atomic/atoms/Label/styles.ts


const sizes = {
    [typograph_enum/* LabelEnum.large */.rZ.large]: {
        fontSize: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.fontSize}
    `,
        lineHeight: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.lineheight}
    `,
        letterSpace: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.letterspace}
    `
    },
    [typograph_enum/* LabelEnum.regular */.rZ.regular]: {
        fontSize: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.fontSize}
    `,
        lineHeight: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.lineheight}
    `,
        letterSpace: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.letterspace}
    `
    },
    [typograph_enum/* LabelEnum.small */.rZ.small]: {
        fontSize: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.fontSize}
    `,
        lineHeight: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.lineheight}
    `,
        letterSpace: external_styled_components_.css`
      ${({ theme  })=>theme.typography.label.large.letterspace}
    `
    }
};
const Label = (external_styled_components_default()).label`
  ${({ type  })=>external_styled_components_.css`
    font-size: ${sizes[type].fontSize};
    line-height: ${sizes[type].lineHeight};
    letter-spacing: ${sizes[type].letterSpace};
  `}
`;

;// CONCATENATED MODULE: ./src/atomic/atoms/Label/index.tsx


const LabelAtom = ({ text , type , href  })=>{
    return href ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Label, {
            type: type,
            children: text
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx(Label, {
        type: type,
        children: text
    });
};


/***/ })

};
;