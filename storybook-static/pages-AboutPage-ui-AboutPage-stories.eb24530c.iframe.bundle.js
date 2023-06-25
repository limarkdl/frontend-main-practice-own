"use strict";(self.webpackChunkfrontend_main_practice=self.webpackChunkfrontend_main_practice||[]).push([[821],{"./src/pages/AboutPage/ui/AboutPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AboutPageDark:()=>AboutPageDark,AboutPageLight:()=>AboutPageLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AboutPageLight$param,_AboutPageLight$param2,_AboutPageLight$param3,_AboutPageDark$parame,_AboutPageDark$parame2,_AboutPageDark$parame3,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"pages/AboutPage",component:__webpack_require__("./src/pages/AboutPage/index.ts").t};var AboutPageLight={name:"Light"};AboutPageLight.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.LIGHT)];var AboutPageDark={name:"Dark"};AboutPageDark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK)],AboutPageLight.parameters=_objectSpread(_objectSpread({},AboutPageLight.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AboutPageLight$param=AboutPageLight.parameters)||void 0===_AboutPageLight$param?void 0:_AboutPageLight$param.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Light'\n}"},null===(_AboutPageLight$param2=AboutPageLight.parameters)||void 0===_AboutPageLight$param2||null===(_AboutPageLight$param3=_AboutPageLight$param2.docs)||void 0===_AboutPageLight$param3?void 0:_AboutPageLight$param3.source)})}),AboutPageDark.parameters=_objectSpread(_objectSpread({},AboutPageDark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AboutPageDark$parame=AboutPageDark.parameters)||void 0===_AboutPageDark$parame?void 0:_AboutPageDark$parame.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Dark'\n}"},null===(_AboutPageDark$parame2=AboutPageDark.parameters)||void 0===_AboutPageDark$parame2||null===(_AboutPageDark$parame3=_AboutPageDark$parame2.docs)||void 0===_AboutPageDark$parame3?void 0:_AboutPageDark$parame3.source)})});var __namedExportsOrder=["AboutPageLight","AboutPageDark"]},"./src/app/providers/ThemeProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q2:()=>Theme,Fg:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.LIGHT="light",Theme.DARK="dark",Theme}({}),ThemeContext=(0,react.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultTheme=localStorage.getItem(LOCAL_STORAGE_THEME_KEY)||Theme.LIGHT,ThemeProvider_ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react.useState)(defaultTheme),2),theme=_useState2[0],setTheme=_useState2[1],defaultProps=(0,react.useMemo)((function(){return{theme,setTheme}}),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:defaultProps,children})};ThemeProvider_ThemeProvider.displayName="ThemeProvider";try{ThemeProvider_ThemeProvider.displayName="ThemeProvider",ThemeProvider_ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider_ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}function useTheme(){var _useContext=(0,react.useContext)(ThemeContext),theme=_useContext.theme,setTheme=_useContext.setTheme;return{theme,toggleTheme:function toggleTheme(){var newTheme=theme===Theme.LIGHT?Theme.DARK:Theme.LIGHT;setTheme(newTheme),localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)}}}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/index.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/index.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/pages/AboutPage/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>AboutPageAsync});var AboutPageAsync=(0,__webpack_require__("./node_modules/react/index.js").lazy)((function(){return new Promise((function(resolve){setTimeout((function(){resolve(__webpack_require__.e(725).then(__webpack_require__.bind(__webpack_require__,"./src/pages/AboutPage/ui/AboutPage.tsx")))}),100)}))}));try{AboutPageAsync.displayName="AboutPageAsync",AboutPageAsync.__docgenInfo={description:"",displayName:"AboutPageAsync",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/AboutPage/ui/AboutPage.async.tsx#AboutPageAsync"]={docgenInfo:AboutPageAsync.__docgenInfo,name:"AboutPageAsync",path:"src/pages/AboutPage/ui/AboutPage.async.tsx#AboutPageAsync"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),style:{display:"block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);