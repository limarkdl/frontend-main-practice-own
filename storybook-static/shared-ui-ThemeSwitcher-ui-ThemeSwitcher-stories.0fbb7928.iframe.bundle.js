"use strict";(self.webpackChunkfrontend_main_practice=self.webpackChunkfrontend_main_practice||[]).push([[694],{"./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeSwitcherDark:()=>ThemeSwitcherDark,ThemeSwitcherLight:()=>ThemeSwitcherLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ThemeSwitcherLight$p,_ThemeSwitcherLight$p2,_ThemeSwitcherLight$p3,_ThemeSwitcherDark$pa,_ThemeSwitcherDark$pa2,_ThemeSwitcherDark$pa3,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/ThemeSwitcher",component:__webpack_require__("./src/shared/ui/ThemeSwitcher/index.ts").O};var ThemeSwitcherLight={name:"ThemeSwitcher Light"};ThemeSwitcherLight.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.LIGHT)];var ThemeSwitcherDark={name:"ThemeSwitcher Dark"};ThemeSwitcherDark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK)],ThemeSwitcherLight.parameters=_objectSpread(_objectSpread({},ThemeSwitcherLight.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ThemeSwitcherLight$p=ThemeSwitcherLight.parameters)||void 0===_ThemeSwitcherLight$p?void 0:_ThemeSwitcherLight$p.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'ThemeSwitcher Light'\n}"},null===(_ThemeSwitcherLight$p2=ThemeSwitcherLight.parameters)||void 0===_ThemeSwitcherLight$p2||null===(_ThemeSwitcherLight$p3=_ThemeSwitcherLight$p2.docs)||void 0===_ThemeSwitcherLight$p3?void 0:_ThemeSwitcherLight$p3.source)})}),ThemeSwitcherDark.parameters=_objectSpread(_objectSpread({},ThemeSwitcherDark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ThemeSwitcherDark$pa=ThemeSwitcherDark.parameters)||void 0===_ThemeSwitcherDark$pa?void 0:_ThemeSwitcherDark$pa.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'ThemeSwitcher Dark'\n}"},null===(_ThemeSwitcherDark$pa2=ThemeSwitcherDark.parameters)||void 0===_ThemeSwitcherDark$pa2||null===(_ThemeSwitcherDark$pa3=_ThemeSwitcherDark$pa2.docs)||void 0===_ThemeSwitcherDark$pa3?void 0:_ThemeSwitcherDark$pa3.source)})});var __namedExportsOrder=["ThemeSwitcherLight","ThemeSwitcherDark"]},"./src/app/providers/ThemeProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q2:()=>Theme,Fg:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.LIGHT="light",Theme.DARK="dark",Theme}({}),ThemeContext=(0,react.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultTheme=localStorage.getItem(LOCAL_STORAGE_THEME_KEY)||Theme.LIGHT,ThemeProvider_ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react.useState)(defaultTheme),2),theme=_useState2[0],setTheme=_useState2[1],defaultProps=(0,react.useMemo)((function(){return{theme,setTheme}}),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:defaultProps,children})};ThemeProvider_ThemeProvider.displayName="ThemeProvider";try{ThemeProvider_ThemeProvider.displayName="ThemeProvider",ThemeProvider_ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider_ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}function useTheme(){var _useContext=(0,react.useContext)(ThemeContext),theme=_useContext.theme,setTheme=_useContext.setTheme;return{theme,toggleTheme:function toggleTheme(){var newTheme=theme===Theme.LIGHT?Theme.DARK:Theme.LIGHT;setTheme(newTheme),localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)}}}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/index.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/index.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),style:{display:"block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_toConsumableArray((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var value=_slicedToArray(_ref,2)[1];return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,bn:()=>ButtonTheme,ZP:()=>Button_Button});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/shared/ui/Button/Button.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","children","theme","backgroundColor","color","borderRadius"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonTheme=function(ButtonTheme){return ButtonTheme.CLEAR="clear",ButtonTheme.PRIMARY="primary",ButtonTheme.OUTLINE="outline",ButtonTheme}({}),Button=function Button(props){var className=props.className,children=props.children,theme=props.theme,backgroundColor=props.backgroundColor,color=props.color,borderRadius=props.borderRadius,otherProps=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames.A)(Button_Button_module.Btn,_defineProperty({},Button_Button_module[theme],theme),[className]),style:{backgroundColor,color,borderRadius}},otherProps),{},{children}))};Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"primary"'},{value:'"outline"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/ThemeSwitcher/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ui_ThemeSwitcher});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeSwitcher=function ThemeSwitcher(_ref){var className=_ref.className,_useTheme=(0,ThemeProvider.Fg)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme;return(0,jsx_runtime.jsx)(Button.ZP,{style:{color:"inherit"},theme:Button.bn.CLEAR,className:(0,classNames.A)("",{},[className]),onClick:toggleTheme,children:theme===ThemeProvider.Q2.DARK?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_es.G,{size:"lg",icon:free_solid_svg_icons.X8G,style:{opacity:.5}})," | ",(0,jsx_runtime.jsx)(index_es.G,{size:"lg",icon:free_solid_svg_icons.DBF})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_es.G,{size:"lg",icon:free_solid_svg_icons.X8G})," | ",(0,jsx_runtime.jsx)(index_es.G,{size:"lg",icon:free_solid_svg_icons.DBF,style:{opacity:.5}})]})})};ThemeSwitcher.displayName="ThemeSwitcher";const ui_ThemeSwitcher=ThemeSwitcher;try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/shared/ui/Button/Button.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"\n.BTWYvn1P_FCT_jhVPA23 {\n    display: inline-block;\n    box-sizing: border-box;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    padding: 0.5rem 1rem;\n}\n\n.Iyh0U3lCq2_FO3hqZMXk {\n    color: var(--inverted-primary-color);\n    background: none;\n    border: none;\n    box-sizing: border-box;\n}\n\n.zqqtxbIFD83b2fywkrva {\n    color: var(--primary-color);\n    background-color: var(--inverted-bg-color) ;\n    border-radius: 15px;\n    border: none;\n}\n\n\n.Y4dmG2DAPsswq_1uBTOm {\n    color: var(--inverted-primary-color);\n    background: transparent;\n    border: 1px solid var(--inverted-primary-color);\n    border-radius: 15px;\n}\n","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.css"],names:[],mappings:";AACA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,eAAe;IACf,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,2CAA2C;IAC3C,mBAAmB;IACnB,YAAY;AAChB;;;AAGA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,+CAA+C;IAC/C,mBAAmB;AACvB",sourcesContent:["\n.Btn {\n    display: inline-block;\n    box-sizing: border-box;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    padding: 0.5rem 1rem;\n}\n\n.clear {\n    color: var(--inverted-primary-color);\n    background: none;\n    border: none;\n    box-sizing: border-box;\n}\n\n.primary {\n    color: var(--primary-color);\n    background-color: var(--inverted-bg-color) ;\n    border-radius: 15px;\n    border: none;\n}\n\n\n.outline {\n    color: var(--inverted-primary-color);\n    background: transparent;\n    border: 1px solid var(--inverted-primary-color);\n    border-radius: 15px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Btn:"BTWYvn1P_FCT_jhVPA23",clear:"Iyh0U3lCq2_FO3hqZMXk",primary:"zqqtxbIFD83b2fywkrva",outline:"Y4dmG2DAPsswq_1uBTOm"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);