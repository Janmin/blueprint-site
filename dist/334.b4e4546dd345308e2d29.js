"use strict";(self.webpackChunk_idg_project_name=self.webpackChunk_idg_project_name||[]).push([[334],{95334:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:function(){return vue_class_component__WEBPACK_IMPORTED_MODULE_1___default.a},Emit:function(){return Emit},Inject:function(){return Inject},InjectReactive:function(){return InjectReactive},Mixins:function(){return vue_class_component__WEBPACK_IMPORTED_MODULE_1__.mixins},Model:function(){return Model},Prop:function(){return Prop},PropSync:function(){return PropSync},Provide:function(){return Provide},ProvideReactive:function(){return ProvideReactive},Ref:function(){return Ref},Vue:function(){return vue__WEBPACK_IMPORTED_MODULE_0___default.a},Watch:function(){return Watch}});var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64078),vue__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__),vue_class_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99350),vue_class_component__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(vue_class_component__WEBPACK_IMPORTED_MODULE_1__);function Inject(options){return(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,key){void 0===componentOptions.inject&&(componentOptions.inject={}),Array.isArray(componentOptions.inject)||(componentOptions.inject[key]=options||key)}))}function InjectReactive(options){return(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,key){if(void 0===componentOptions.inject&&(componentOptions.inject={}),!Array.isArray(componentOptions.inject)){var fromKey_1=options?options.from||options:key,defaultVal_1=!!options&&options.default||void 0;componentOptions.computed||(componentOptions.computed={}),componentOptions.computed[key]=function(){var obj=this.__reactiveInject__;return obj?obj[fromKey_1]:defaultVal_1},componentOptions.inject.__reactiveInject__="__reactiveInject__"}}))}function Provide(key){return(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,k){var provide=componentOptions.provide;if("function"!=typeof provide||!provide.managed){var original_1=componentOptions.provide;(provide=componentOptions.provide=function(){var rv=Object.create(("function"==typeof original_1?original_1.call(this):original_1)||null);for(var i in provide.managed)rv[provide.managed[i]]=this[i];return rv}).managed={}}provide.managed[k]=key||k}))}function ProvideReactive(key){return(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,k){var provide=componentOptions.provide;if("function"!=typeof provide||!provide.managed){var original_2=componentOptions.provide;(provide=componentOptions.provide=function(){var _this=this,rv=Object.create(("function"==typeof original_2?original_2.call(this):original_2)||null);rv.__reactiveInject__={};var _loop_1=function(i){rv[provide.managed[i]]=this_1[i],Object.defineProperty(rv.__reactiveInject__,provide.managed[i],{enumerable:!0,get:function(){return _this[i]}})},this_1=this;for(var i in provide.managed)_loop_1(i);return rv}).managed={}}provide.managed[k]=key||k}))}var reflectMetadataIsSupported="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function applyMetadata(options,target,key){reflectMetadataIsSupported&&(Array.isArray(options)||"function"==typeof options||void 0!==options.type||(options.type=Reflect.getMetadata("design:type",target,key)))}function Model(event,options){return void 0===options&&(options={}),function(target,key){applyMetadata(options,target,key),(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,k){(componentOptions.props||(componentOptions.props={}))[k]=options,componentOptions.model={prop:k,event:event||k}}))(target,key)}}function Prop(options){return void 0===options&&(options={}),function(target,key){applyMetadata(options,target,key),(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,k){(componentOptions.props||(componentOptions.props={}))[k]=options}))(target,key)}}function PropSync(propName,options){return void 0===options&&(options={}),function(target,key){applyMetadata(options,target,key),(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,k){(componentOptions.props||(componentOptions.props={}))[propName]=options,(componentOptions.computed||(componentOptions.computed={}))[k]={get:function(){return this[propName]},set:function(value){this.$emit("update:"+propName,value)}}}))(target,key)}}function Watch(path,options){void 0===options&&(options={});var _a=options.deep,deep=void 0!==_a&&_a,_b=options.immediate,immediate=void 0!==_b&&_b;return(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(componentOptions,handler){"object"!=typeof componentOptions.watch&&(componentOptions.watch=Object.create(null));var watch=componentOptions.watch;"object"!=typeof watch[path]||Array.isArray(watch[path])?void 0===watch[path]&&(watch[path]=[]):watch[path]=[watch[path]],watch[path].push({handler:handler,deep:deep,immediate:immediate})}))}var hyphenateRE=/\B([A-Z])/g;function Emit(event){return function(_target,key,descriptor){key=key.replace(hyphenateRE,"-$1").toLowerCase();var original=descriptor.value;descriptor.value=function emitter(){for(var _this=this,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var emit=function(returnValue){void 0!==returnValue&&args.unshift(returnValue),_this.$emit.apply(_this,[event||key].concat(args))},returnValue=original.apply(this,args);return isPromise(returnValue)?returnValue.then((function(returnValue){emit(returnValue)})):emit(returnValue),returnValue}}}function Ref(refKey){return(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.createDecorator)((function(options,key){options.computed=options.computed||{},options.computed[key]={cache:!1,get:function(){return this.$refs[refKey||key]}}}))}function isPromise(obj){return obj instanceof Promise||obj&&"function"==typeof obj.then}}}]);