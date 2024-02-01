/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/curvy/Components/Curve.js":
/*!**********************************************!*\
  !*** ./src/blocks/curvy/Components/Curve.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Curve: () => (/* binding */ Curve)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Curve = ({
  isBottom,
  height,
  width,
  flipX,
  flipY,
  color
}) => {
  const normalPath = "M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";
  const invertedPath = "M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "curve",
    style: {
      position: "absolute",
      left: 0,
      top: !isBottom ? 0 : 'initial',
      bottom: isBottom ? 0 : 'initial',
      overflow: "hidden",
      width: "100%",
      height: height,
      transform: `scaleX(${flipX ? -1 : 1}) scaleY(${isBottom ? -1 : 1}) rotate(${flipY ? 180 : 0}deg)`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: `${width}%`,
      height: height
    },
    viewBox: "0 0 1440 320"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    style: {
      fill: color || 'white'
    },
    "fill-opacity": "1",
    d: `${flipY ? invertedPath : normalPath}`
  })));
};

/***/ }),

/***/ "./src/blocks/curvy/Components/bottomCurveSettings.js":
/*!************************************************************!*\
  !*** ./src/blocks/curvy/Components/bottomCurveSettings.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomCurveSettings: () => (/* binding */ BottomCurveSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./src/blocks/curvy/block.json");





const BottomCurveSettings = ({
  setAttributes,
  bottomHeight,
  bottomWidth,
  bottomFlipX,
  bottomFlipY,
  bottomColor
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: bottomHeight,
    onChange: bottomHeight => setAttributes({
      bottomHeight: parseInt(bottomHeight)
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Height", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: bottomWidth,
    onChange: bottomWidth => setAttributes({
      bottomWidth: parseInt(bottomWidth)
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Width", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Flip Bottom Horizontal",
    checked: bottomFlipX,
    onChange: flip => setAttributes({
      bottomFlipX: flip
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Flip Bottom Vertical",
    checked: bottomFlipY,
    onChange: flip => setAttributes({
      bottomFlipY: flip
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: bottomColor,
    onChange: bottomColor => setAttributes({
      bottomColor: bottomColor
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain)
  }));
};

/***/ }),

/***/ "./src/blocks/curvy/Components/topCurveSettings.js":
/*!*********************************************************!*\
  !*** ./src/blocks/curvy/Components/topCurveSettings.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopCurveSettings: () => (/* binding */ TopCurveSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./src/blocks/curvy/block.json");





const TopCurveSettings = ({
  setAttributes,
  topHeight,
  topWidth,
  topFlipX,
  topFlipY,
  topColor
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: topHeight,
    onChange: topHeight => setAttributes({
      topHeight: parseInt(topHeight)
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Height", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: topWidth,
    onChange: topWidth => setAttributes({
      topWidth: parseInt(topWidth)
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Width", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Flip Horizontal",
    checked: topFlipX,
    onChange: flip => setAttributes({
      topFlipX: flip
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Flip Vertical",
    checked: topFlipY,
    onChange: flip => setAttributes({
      topFlipY: flip
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette
  // disableCustomColors
  // colors={[{
  // 	name: "Yello",
  // 	"color": "#ffff00",
  // 	"default": true
  // }]}
  , {
    value: topColor,
    onChange: topColor => setAttributes({
      topColor: topColor
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", _block_json__WEBPACK_IMPORTED_MODULE_4__.textdomain)
  }));
};

/***/ }),

/***/ "./src/blocks/curvy/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/curvy/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Curve */ "./src/blocks/curvy/Components/Curve.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/curvy/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/curvy/block.json");
/* harmony import */ var _Components_topCurveSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/topCurveSettings */ "./src/blocks/curvy/Components/topCurveSettings.js");
/* harmony import */ var _Components_bottomCurveSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/bottomCurveSettings */ "./src/blocks/curvy/Components/bottomCurveSettings.js");









function Edit({
  attributes: {
    enableTopCurved,
    topHeight,
    topWidth,
    topFlipX,
    topFlipY,
    bottomFlipX,
    bottomFlipY,
    topColor,
    enableBottomCurved,
    bottomHeight,
    bottomWidth,
    bottomColor
  },
  setAttributes
}) {
  const {
    className,
    ...blockProps
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    style: {
      position: "relative"
    },
    className: `${className} alignfull`,
    ...blockProps
  }, enableTopCurved && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Curve__WEBPACK_IMPORTED_MODULE_2__.Curve, {
    color: topColor,
    flipX: topFlipX,
    flipY: topFlipY,
    height: topHeight,
    width: topWidth
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, null)), enableBottomCurved && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Curve__WEBPACK_IMPORTED_MODULE_2__.Curve, {
    isBottom: true,
    color: bottomColor,
    flipX: bottomFlipX,
    flipY: bottomFlipY,
    height: bottomHeight,
    width: bottomWidth
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    header: "Curvy Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top Curved Settings", _block_json__WEBPACK_IMPORTED_MODULE_6__.textdomain)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Enable Top Curved",
    checked: enableTopCurved,
    onChange: toggleControl => setAttributes({
      enableTopCurved: toggleControl
    })
  })), enableTopCurved && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_topCurveSettings__WEBPACK_IMPORTED_MODULE_7__.TopCurveSettings, {
    setAttributes: setAttributes,
    topColor: topColor,
    bottomColor: bottomColor,
    topFlipX: topFlipX,
    topFlipY: topFlipY,
    topHeight: topHeight,
    topWidth: topWidth
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom Curved Settings", _block_json__WEBPACK_IMPORTED_MODULE_6__.textdomain)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Enable Bottom Curved",
    checked: enableBottomCurved,
    onChange: toggleControl => setAttributes({
      enableBottomCurved: toggleControl
    })
  })), enableBottomCurved && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_bottomCurveSettings__WEBPACK_IMPORTED_MODULE_8__.BottomCurveSettings, {
    setAttributes: setAttributes,
    topColor: topColor,
    bottomColor: bottomColor,
    bottomFlipX: bottomFlipX,
    bottomFlipY: bottomFlipY,
    bottomHeight: bottomHeight,
    bottomWidth: bottomWidth
  })))));
}

/***/ }),

/***/ "./src/blocks/curvy/index.js":
/*!***********************************!*\
  !*** ./src/blocks/curvy/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/curvy/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/curvy/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/curvy/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/curvy/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/curvy/save.js":
/*!**********************************!*\
  !*** ./src/blocks/curvy/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

function save() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  const {
    children
  } = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps.save(blockProps);
  return children;
}

/***/ }),

/***/ "./src/blocks/curvy/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/curvy/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/curvy/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/curvy/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/curvy/block.json":
/*!*************************************!*\
  !*** ./src/blocks/curvy/block.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/curvy","version":"0.1.0","title":"Curvy Block","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"color":{"background":true,"text":true,"link":true},"spacing":{"padding":true}},"attributes":{"style":{"type":"object","default":{"color":{"background":"#ec4899"},"spacing":{"padding":{"top":"140px","bottom":"140px","left":"0px","right":"0px"}}}},"enableTopCurved":{"type":"boolean"},"topWidth":{"type":"number","default":100},"topHeight":{"type":"number","default":100},"topFlipX":{"type":"boolean","default":false},"topFlipY":{"type":"boolean","default":false},"topColor":{"type":"string","default":"#dddddd"},"bottomFlipX":{"type":"boolean","default":false},"bottomFlipY":{"type":"boolean","default":false},"enableBottomCurved":{"type":"boolean"},"bottomWidth":{"type":"number","default":100},"bottomHeight":{"type":"number","default":100},"bottomColor":{"type":"string","default":"#ec4899"},"isBottom":{"type":"boolean","default":true}},"textdomain":"curvy","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/curvy/index": 0,
/******/ 			"blocks/curvy/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcurvy"] = globalThis["webpackChunkcurvy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/curvy/style-index"], () => (__webpack_require__("./src/blocks/curvy/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map