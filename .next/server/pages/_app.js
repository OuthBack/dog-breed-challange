"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/enum/typograph.enum.ts
var typograph_enum = __webpack_require__(8597);
// EXTERNAL MODULE: ./src/hooks/useNotification/index.tsx
var useNotification = __webpack_require__(9146);
// EXTERNAL MODULE: ./src/atomic/atoms/Label/index.tsx + 1 modules
var Label = __webpack_require__(7458);
// EXTERNAL MODULE: ./src/atomic/atoms/Title/index.tsx + 1 modules
var Title = __webpack_require__(2675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/atomic/organisms/NotificationCard/styles.ts

const Card = (external_styled_components_default()).div`
  ${({ theme , color , show  })=>external_styled_components_.css`
    position: fixed;
    transition: 1s ease-in-out;
    transform: translateX(${show ? "0" : "1000px"});
    right: 0;
    top: 0;
    width: 240px;
    padding: ${theme.spacing.sm};
    background-color: ${theme.notification[color]};
    border-radius: ${theme.borderRadius};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.button_text};
  `}
`;

;// CONCATENATED MODULE: ./src/atomic/organisms/NotificationCard/index.tsx






const NotificationCardOrganism = ()=>{
    const { message , showNotification , title , type  } = (0,useNotification/* useNotification */.lm)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        color: type,
        show: showNotification,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* TitleAtom */.o, {
                text: title,
                type: typograph_enum/* TitleEnum.large */.MN.large
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Label/* LabelAtom */.J, {
                text: message,
                type: typograph_enum/* LabelEnum.small */.rZ.small
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/styles/theme/fonts.ts
const font = {
    style: {
        regular: "400",
        medium: "500",
        bold: "bold"
    },
    letterspace: {
        regular: "0",
        large: "0.015em",
        xLarge: "0.023em",
        xxLarge: "0.083em",
        xxxLarge: "0.11em"
    },
    lineheight: {
        small: "1.2",
        default: "1.125",
        regular: "1.4",
        large: "1.6"
    },
    size: {
        "scale-8": "40px",
        "scale-7": "32px",
        "scale-6": "26px",
        "scale-5": "22px",
        "scale-4": "20px",
        "scale-3": "18px",
        "scale-2": "16px",
        "scale-1": "14px",
        "scale-0": "12px"
    }
};

;// CONCATENATED MODULE: ./src/styles/theme/spacing.ts
const spacing = {
    xSmall: "4px",
    small: "8px",
    regular: "16px",
    large: "24px",
    xLarge: "32px",
    xxLarge: "64px"
};

;// CONCATENATED MODULE: ./src/styles/theme/default.ts


const light = {
    title: "light",
    colors: {
        background: "#E7E8FF",
        title: "#1F0322",
        text: "#1F0322",
        background_item: "#F9F9F9",
        border_color: "#1F0322",
        button_text: "#F9F9F9",
        button_Background: "#7d80da"
    },
    spacing: {
        sm: spacing.small,
        md: spacing.regular,
        lg: spacing.large,
        xlg: spacing.xLarge,
        xxlg: spacing.xxLarge
    },
    borderRadius: "24px",
    notification: {
        alert: "#dc3545",
        warning: "#ffc107",
        success: "#28a745"
    },
    transition: {
        veryShort: "500ms",
        short: "0.3s"
    },
    typography: {
        label: {
            small: {
                weight: font.style.medium,
                lineheight: font.lineheight["default"],
                letterspace: font.letterspace.large,
                fontSize: font.size["scale-1"]
            },
            regular: {
                weight: font.style.medium,
                lineheight: font.lineheight["default"],
                letterspace: font.letterspace.large,
                fontSize: font.size["scale-2"]
            },
            large: {
                weight: font.style.medium,
                lineheight: font.lineheight["default"],
                letterspace: font.letterspace.large,
                fontSize: font.size["scale-3"]
            }
        }
    }
};
/* harmony default export */ const theme_default = (light);

;// CONCATENATED MODULE: ./src/hooks/index.tsx




const AppContext = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(useNotification/* NotificationProvider */.JB, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
                theme: theme_default,
                children: children
            })
        })
    });
/* harmony default export */ const hooks = (AppContext);

;// CONCATENATED MODULE: ./src/styles/globals.ts

/* harmony default export */ const globals = (external_styled_components_.createGlobalStyle`
${({ theme  })=>external_styled_components_.css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }
  body,
  input,
  button {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    transition: color ${theme.transition.veryShort} ease-out;
    :hover {
      color: ${(props)=>props.theme.colors.text};
      opacity: 0.8;
    }
  }
`}`);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hooks, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(globals, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(NotificationCardOrganism, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [758,458], () => (__webpack_exec__(7056)));
module.exports = __webpack_exports__;

})();