"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 2675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ TitleAtom)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/enum/typograph.enum.ts
var typograph_enum = __webpack_require__(8597);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/atomic/atoms/Title/styles.ts

const Title = (external_styled_components_default()).div`
  ${({ theme  })=>external_styled_components_.css``}
`;

;// CONCATENATED MODULE: ./src/atomic/atoms/Title/index.tsx



const TitleAtom = ({ type , text  })=>{
    const types = {
        [typograph_enum/* TitleEnum.display */.MN.display]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: text
            }),
        [typograph_enum/* TitleEnum.xLarge */.MN.xLarge]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: text
            }),
        [typograph_enum/* TitleEnum.large */.MN.large]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: text
            }),
        [typograph_enum/* TitleEnum.regular */.MN.regular]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: text
            }),
        [typograph_enum/* TitleEnum.small */.MN.small]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: text
            }),
        [typograph_enum/* TitleEnum.xSmall */.MN.xSmall]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h6", {
                children: text
            }),
        [typograph_enum/* TitleEnum.overline */.MN.overline]: ()=>/*#__PURE__*/ jsx_runtime_.jsx("h6", {
                children: text
            })
    };
    const Text = types[type];
    return /*#__PURE__*/ jsx_runtime_.jsx(Title, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {})
    });
};


/***/ }),

/***/ 8597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MN": () => (/* binding */ TitleEnum),
/* harmony export */   "rZ": () => (/* binding */ LabelEnum)
/* harmony export */ });
/* unused harmony exports TextEnum, CaptionEnum */
var TextEnum;
(function(TextEnum) {
    TextEnum[TextEnum["xLargeExtended"] = 0] = "xLargeExtended";
    TextEnum[TextEnum["xLarge"] = 1] = "xLarge";
    TextEnum[TextEnum["largeExtended"] = 2] = "largeExtended";
    TextEnum[TextEnum["large"] = 3] = "large";
    TextEnum[TextEnum["regularExtended"] = 4] = "regularExtended";
    TextEnum[TextEnum["regular"] = 5] = "regular";
    TextEnum[TextEnum["smallExtended"] = 6] = "smallExtended";
    TextEnum[TextEnum["small"] = 7] = "small";
    TextEnum[TextEnum["xSmallExtended"] = 8] = "xSmallExtended";
    TextEnum[TextEnum["xSmall"] = 9] = "xSmall";
})(TextEnum || (TextEnum = {}));
var TitleEnum;
(function(TitleEnum) {
    TitleEnum[TitleEnum["display"] = 0] = "display";
    TitleEnum[TitleEnum["xLarge"] = 1] = "xLarge";
    TitleEnum[TitleEnum["large"] = 2] = "large";
    TitleEnum[TitleEnum["regular"] = 3] = "regular";
    TitleEnum[TitleEnum["small"] = 4] = "small";
    TitleEnum[TitleEnum["xSmall"] = 5] = "xSmall";
    TitleEnum[TitleEnum["overline"] = 6] = "overline";
})(TitleEnum || (TitleEnum = {}));
var CaptionEnum;
(function(CaptionEnum) {
    CaptionEnum[CaptionEnum["small"] = 0] = "small";
    CaptionEnum[CaptionEnum["regular"] = 1] = "regular";
    CaptionEnum[CaptionEnum["large"] = 2] = "large";
})(CaptionEnum || (CaptionEnum = {}));
var LabelEnum;
(function(LabelEnum) {
    LabelEnum[LabelEnum["small"] = 0] = "small";
    LabelEnum[LabelEnum["regular"] = 1] = "regular";
    LabelEnum[LabelEnum["large"] = 2] = "large";
})(LabelEnum || (LabelEnum = {}));


/***/ }),

/***/ 9146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JB": () => (/* binding */ NotificationProvider),
/* harmony export */   "lm": () => (/* binding */ useNotification)
/* harmony export */ });
/* unused harmony export NotificationContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const NotificationProvider = ({ children  })=>{
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Error");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success");
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success");
    const { 0: showNotification , 1: setShowNotification  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleNotification = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({ title , message , type  })=>{
        if (showNotification) {
            return;
        }
        setTitle(title);
        setMessage(message);
        setType(type);
        setShowNotification(true);
        setTimeout(()=>{
            setShowNotification(false);
        }, 2000);
    }, [
        setTitle,
        setMessage,
        setType,
        setShowNotification,
        showNotification
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationContext.Provider, {
        value: {
            handleNotification,
            title,
            message,
            type,
            showNotification
        },
        children: children
    });
};
function useNotification() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within an NotificationProvider ");
    }
    return context;
}


/***/ })

};
;