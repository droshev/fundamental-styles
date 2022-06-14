/*! For license information please see 5057.10f6293c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfundamental_styles=self.webpackChunkfundamental_styles||[]).push([[5057],{"./node_modules/symbol.prototype.description/auto.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./node_modules/symbol.prototype.description/shim.js")()},"./node_modules/symbol.prototype.description/implementation.js":function(module,__unused_webpack_exports,__webpack_require__){var getSymbolDescription=__webpack_require__("./node_modules/get-symbol-description/index.js");module.exports=function description(){return getSymbolDescription(this)}},"./node_modules/symbol.prototype.description/polyfill.js":function(module,__unused_webpack_exports,__webpack_require__){var hasSymbols=__webpack_require__("./node_modules/has-symbols/index.js")(),implementation=__webpack_require__("./node_modules/symbol.prototype.description/implementation.js"),gOPD=Object.getOwnPropertyDescriptor;module.exports=function descriptionPolyfill(){if(!hasSymbols||"function"!=typeof gOPD)return null;var desc=gOPD(Symbol.prototype,"description");if(!desc||"function"!=typeof desc.get)return implementation;var emptySymbolDesc=desc.get.call(Symbol());return(void 0===emptySymbolDesc||""===emptySymbolDesc)&&"a"===desc.get.call(Symbol("a"))?desc.get:implementation}},"./node_modules/symbol.prototype.description/shim.js":function(module,__unused_webpack_exports,__webpack_require__){var hasSymbols=__webpack_require__("./node_modules/has-symbols/index.js")(),polyfill=__webpack_require__("./node_modules/symbol.prototype.description/polyfill.js"),getInferredName=__webpack_require__("./node_modules/get-symbol-description/getInferredName.js"),gOPD=Object.getOwnPropertyDescriptor,gOPDs=__webpack_require__("./node_modules/object.getownpropertydescriptors/polyfill.js")(),dP=Object.defineProperty,dPs=Object.defineProperties,setProto=Object.setPrototypeOf,define=function defineGetter(getter){dP(Symbol.prototype,"description",{configurable:!0,enumerable:!1,get:getter})};module.exports=function shimSymbolDescription(){if(!hasSymbols)return!1;var desc=gOPD(Symbol.prototype,"description"),getter=polyfill(),isMissing=!desc||"function"!=typeof desc.get,isBroken=!isMissing&&(void 0!==Symbol().description||""!==Symbol("").description);if(isMissing||isBroken){if(!getInferredName)return function shimGlobalSymbol(getter){var origSym=Function.apply.bind(Symbol),emptyStrings=Object.create?Object.create(null):{},SymNew=function Symbol(){var sym=origSym(this,arguments);return arguments.length>0&&""===arguments[0]&&(emptyStrings[sym]=!0),sym};SymNew.prototype=Symbol.prototype,setProto(SymNew,Symbol);var props=gOPDs(Symbol);delete props.length,delete props.arguments,delete props.caller,dPs(SymNew,props),Symbol=SymNew;var boundGetter=Function.call.bind(getter),wrappedGetter=function description(){var symbolDescription=boundGetter(this);return emptyStrings[this]?"":symbolDescription};return define(wrappedGetter),wrappedGetter}(getter);define(getter)}return getter}},"./node_modules/synchronous-promise/index.js":function(module){function makeArrayFrom(obj){return Array.prototype.slice.apply(obj)}function SynchronousPromise(handler){this.status="pending",this._continuations=[],this._parent=null,this._paused=!1,handler&&handler.call(this,this._continueWith.bind(this),this._failWith.bind(this))}function looksLikeAPromise(obj){return obj&&"function"==typeof obj.then}function passThrough(value){return value}function createAggregateErrorFrom(errors){return"undefined"!=typeof window&&"AggregateError"in window?new window.AggregateError(errors):{errors:errors}}if(SynchronousPromise.prototype={then:function(nextFn,catchFn){var next=SynchronousPromise.unresolved()._setParent(this);if(this._isRejected()){if(this._paused)return this._continuations.push({promise:next,nextFn:nextFn,catchFn:catchFn}),next;if(catchFn)try{var catchResult=catchFn(this._error);return looksLikeAPromise(catchResult)?(this._chainPromiseData(catchResult,next),next):SynchronousPromise.resolve(catchResult)._setParent(this)}catch(e){return SynchronousPromise.reject(e)._setParent(this)}return SynchronousPromise.reject(this._error)._setParent(this)}return this._continuations.push({promise:next,nextFn:nextFn,catchFn:catchFn}),this._runResolutions(),next},catch:function(handler){if(this._isResolved())return SynchronousPromise.resolve(this._data)._setParent(this);var next=SynchronousPromise.unresolved()._setParent(this);return this._continuations.push({promise:next,catchFn:handler}),this._runRejections(),next},finally:function(callback){var ran=!1;function runFinally(result,err){if(!ran){ran=!0,callback||(callback=passThrough);var callbackResult=callback(result);return looksLikeAPromise(callbackResult)?callbackResult.then((function(){if(err)throw err;return result})):result}}return this.then((function(result){return runFinally(result)})).catch((function(err){return runFinally(null,err)}))},pause:function(){return this._paused=!0,this},resume:function(){var firstPaused=this._findFirstPaused();return firstPaused&&(firstPaused._paused=!1,firstPaused._runResolutions(),firstPaused._runRejections()),this},_findAncestry:function(){return this._continuations.reduce((function(acc,cur){if(cur.promise){var node={promise:cur.promise,children:cur.promise._findAncestry()};acc.push(node)}return acc}),[])},_setParent:function(parent){if(this._parent)throw new Error("parent already set");return this._parent=parent,this},_continueWith:function(data){var firstPending=this._findFirstPending();firstPending&&(firstPending._data=data,firstPending._setResolved())},_findFirstPending:function(){return this._findFirstAncestor((function(test){return test._isPending&&test._isPending()}))},_findFirstPaused:function(){return this._findFirstAncestor((function(test){return test._paused}))},_findFirstAncestor:function(matching){for(var result,test=this;test;)matching(test)&&(result=test),test=test._parent;return result},_failWith:function(error){var firstRejected=this._findFirstPending();firstRejected&&(firstRejected._error=error,firstRejected._setRejected())},_takeContinuations:function(){return this._continuations.splice(0,this._continuations.length)},_runRejections:function(){if(!this._paused&&this._isRejected()){var error=this._error,continuations=this._takeContinuations(),self=this;continuations.forEach((function(cont){if(cont.catchFn)try{var catchResult=cont.catchFn(error);self._handleUserFunctionResult(catchResult,cont.promise)}catch(e){cont.promise.reject(e)}else cont.promise.reject(error)}))}},_runResolutions:function(){if(!this._paused&&this._isResolved()&&!this._isPending()){var continuations=this._takeContinuations();if(looksLikeAPromise(this._data))return this._handleWhenResolvedDataIsPromise(this._data);var data=this._data,self=this;continuations.forEach((function(cont){if(cont.nextFn)try{var result=cont.nextFn(data);self._handleUserFunctionResult(result,cont.promise)}catch(e){self._handleResolutionError(e,cont)}else cont.promise&&cont.promise.resolve(data)}))}},_handleResolutionError:function(e,continuation){if(this._setRejected(),continuation.catchFn)try{return void continuation.catchFn(e)}catch(e2){e=e2}continuation.promise&&continuation.promise.reject(e)},_handleWhenResolvedDataIsPromise:function(data){var self=this;return data.then((function(result){self._data=result,self._runResolutions()})).catch((function(error){self._error=error,self._setRejected(),self._runRejections()}))},_handleUserFunctionResult:function(data,nextSynchronousPromise){looksLikeAPromise(data)?this._chainPromiseData(data,nextSynchronousPromise):nextSynchronousPromise.resolve(data)},_chainPromiseData:function(promiseData,nextSynchronousPromise){promiseData.then((function(newData){nextSynchronousPromise.resolve(newData)})).catch((function(newError){nextSynchronousPromise.reject(newError)}))},_setResolved:function(){this.status="resolved",this._paused||this._runResolutions()},_setRejected:function(){this.status="rejected",this._paused||this._runRejections()},_isPending:function(){return"pending"===this.status},_isResolved:function(){return"resolved"===this.status},_isRejected:function(){return"rejected"===this.status}},SynchronousPromise.resolve=function(result){return new SynchronousPromise((function(resolve,reject){looksLikeAPromise(result)?result.then((function(newResult){resolve(newResult)})).catch((function(error){reject(error)})):resolve(result)}))},SynchronousPromise.reject=function(result){return new SynchronousPromise((function(resolve,reject){reject(result)}))},SynchronousPromise.unresolved=function(){return new SynchronousPromise((function(resolve,reject){this.resolve=resolve,this.reject=reject}))},SynchronousPromise.all=function(){var args=makeArrayFrom(arguments);return Array.isArray(args[0])&&(args=args[0]),args.length?new SynchronousPromise((function(resolve,reject){var allData=[],numResolved=0,rejected=!1;args.forEach((function(arg,idx){SynchronousPromise.resolve(arg).then((function(thisResult){allData[idx]=thisResult,(numResolved+=1)===args.length&&resolve(allData)})).catch((function(err){!function(err){rejected||(rejected=!0,reject(err))}(err)}))}))})):SynchronousPromise.resolve([])},SynchronousPromise.any=function(){var args=makeArrayFrom(arguments);return Array.isArray(args[0])&&(args=args[0]),args.length?new SynchronousPromise((function(resolve,reject){var allErrors=[],numRejected=0,resolved=!1;args.forEach((function(arg,idx){SynchronousPromise.resolve(arg).then((function(thisResult){var result;result=thisResult,resolved||(resolved=!0,resolve(result))})).catch((function(err){allErrors[idx]=err,(numRejected+=1)===args.length&&reject(createAggregateErrorFrom(allErrors))}))}))})):SynchronousPromise.reject(createAggregateErrorFrom([]))},SynchronousPromise.allSettled=function(){var args=makeArrayFrom(arguments);return Array.isArray(args[0])&&(args=args[0]),args.length?new SynchronousPromise((function(resolve){var allData=[],numSettled=0,doSettled=function(){(numSettled+=1)===args.length&&resolve(allData)};args.forEach((function(arg,idx){SynchronousPromise.resolve(arg).then((function(thisResult){allData[idx]={status:"fulfilled",value:thisResult},doSettled()})).catch((function(err){allData[idx]={status:"rejected",reason:err},doSettled()}))}))})):SynchronousPromise.resolve([])},Promise===SynchronousPromise)throw new Error("Please use SynchronousPromise.installGlobally() to install globally");var RealPromise=Promise;SynchronousPromise.installGlobally=function(__awaiter){if(Promise===SynchronousPromise)return __awaiter;var result=function patchAwaiterIfRequired(__awaiter){if(void 0===__awaiter||__awaiter.__patched)return __awaiter;var originalAwaiter=__awaiter;return __awaiter=function(){originalAwaiter.apply(this,makeArrayFrom(arguments))},__awaiter.__patched=!0,__awaiter}(__awaiter);return Promise=SynchronousPromise,result},SynchronousPromise.uninstallGlobally=function(){Promise===SynchronousPromise&&(Promise=RealPromise)},module.exports={SynchronousPromise:SynchronousPromise}},"./node_modules/telejson/dist/esm/dom-event.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{_:function(){return extractEventHiddenProperties}});var eventProperties=["bubbles","cancelBubble","cancelable","composed","currentTarget","defaultPrevented","eventPhase","isTrusted","returnValue","srcElement","target","timeStamp","type"],customEventSpecificProperties=["detail"];function extractEventHiddenProperties(event){var rebuildEvent=eventProperties.filter((function(value){return void 0!==event[value]})).reduce((function(acc,value){return _objectSpread(_objectSpread({},acc),{},_defineProperty({},value,event[value]))}),{});return event instanceof CustomEvent&&customEventSpecificProperties.filter((function(value){return void 0!==event[value]})).forEach((function(value){rebuildEvent[value]=event[value]})),rebuildEvent}},"./node_modules/telejson/dist/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Pz:function(){return stringify},Qc:function(){return parse},pM:function(){return isJSON}});var is_regex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/is-regex/index.js"),is_regex__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(is_regex__WEBPACK_IMPORTED_MODULE_0__),is_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/is-function/index.js"),is_function__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(is_function__WEBPACK_IMPORTED_MODULE_1__),is_symbol__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/is-symbol/index.js"),is_symbol__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_2__),isobject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/telejson/node_modules/isobject/index.js"),lodash_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/get.js"),lodash_get__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__),memoizerific__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/memoizerific/memoizerific.js"),memoizerific__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_4__),_dom_event__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/telejson/dist/esm/dom-event.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var isRunningInBrowser="undefined"!=typeof window&&void 0!==window.document,isObject=isobject__WEBPACK_IMPORTED_MODULE_5__.Z,removeCodeComments=function removeCodeComments(code){var inQuoteChar=null,inBlockComment=!1,inLineComment=!1,inRegexLiteral=!1,newCode="";if(code.indexOf("//")>=0||code.indexOf("/*")>=0)for(var i=0;i<code.length;i+=1)inQuoteChar||inBlockComment||inLineComment||inRegexLiteral?(inQuoteChar&&(code[i]===inQuoteChar&&"\\"!==code[i-1]||"\n"===code[i]&&"`"!==inQuoteChar)&&(inQuoteChar=null),inRegexLiteral&&("/"===code[i]&&"\\"!==code[i-1]||"\n"===code[i])&&(inRegexLiteral=!1),inBlockComment&&"/"===code[i-1]&&"*"===code[i-2]&&(inBlockComment=!1),inLineComment&&"\n"===code[i]&&(inLineComment=!1)):'"'===code[i]||"'"===code[i]||"`"===code[i]?inQuoteChar=code[i]:"/"===code[i]&&"*"===code[i+1]?inBlockComment=!0:"/"===code[i]&&"/"===code[i+1]?inLineComment=!0:"/"===code[i]&&"/"!==code[i+1]&&(inRegexLiteral=!0),inBlockComment||inLineComment||(newCode+=code[i]);else newCode=code;return newCode},cleanCode=memoizerific__WEBPACK_IMPORTED_MODULE_4___default()(1e4)((function(code){return removeCodeComments(code).replace(/\n\s*/g,"").trim()})),convertShorthandMethods=function convertShorthandMethods(key,stringified){var fnHead=stringified.slice(0,stringified.indexOf("{")),fnBody=stringified.slice(stringified.indexOf("{"));if(fnHead.includes("=>"))return stringified;if(fnHead.includes("function"))return stringified;var modifiedHead=fnHead;return(modifiedHead=modifiedHead.replace(key,"function"))+fnBody},dateFormat=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,isJSON=function isJSON(input){return input.match(/^[\[\{\"\}].*[\]\}\"]$/)};function convertUnconventionalData(data){if(!isObject(data))return data;var result=data,wasMutated=!1;return isRunningInBrowser&&data instanceof Event&&(result=(0,_dom_event__WEBPACK_IMPORTED_MODULE_6__._)(result),wasMutated=!0),result=Object.keys(result).reduce((function(acc,key){try{var _result$key;null===(_result$key=result[key])||void 0===_result$key||_result$key.toJSON,acc[key]=result[key]}catch(err){wasMutated=!0}return acc}),{}),wasMutated?result:data}var replacer=function replacer(options){var objects,map,stack,keys;return function replace(key,value){try{if(""===key)return keys=[],objects=new Map([[value,"[]"]]),map=new Map,stack=[],value;for(var origin=map.get(this)||this;stack.length&&origin!==stack[0];)stack.shift(),keys.pop();if("boolean"==typeof value)return value;if(void 0===value){if(!options.allowUndefined)return;return"_undefined_"}if(null===value)return null;if("number"==typeof value)return value===-1/0?"_-Infinity_":value===1/0?"_Infinity_":Number.isNaN(value)?"_NaN_":value;if("bigint"==typeof value)return"_bigint_".concat(value.toString());if("string"==typeof value){if(dateFormat.test(value)){if(!options.allowDate)return;return"_date_".concat(value)}return value}if(is_regex__WEBPACK_IMPORTED_MODULE_0___default()(value)){if(!options.allowRegExp)return;return"_regexp_".concat(value.flags,"|").concat(value.source)}if(is_function__WEBPACK_IMPORTED_MODULE_1___default()(value)){if(!options.allowFunction)return;var name=value.name,stringified=value.toString();return stringified.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/)?"_function_".concat(name,"|").concat(function(){}.toString()):"_function_".concat(name,"|").concat(cleanCode(convertShorthandMethods(key,stringified)))}if(is_symbol__WEBPACK_IMPORTED_MODULE_2___default()(value)){if(!options.allowSymbol)return;var globalRegistryKey=Symbol.keyFor(value);return void 0!==globalRegistryKey?"_gsymbol_".concat(globalRegistryKey):"_symbol_".concat(value.toString().slice(7,-1))}if(stack.length>=options.maxDepth)return Array.isArray(value)?"[Array(".concat(value.length,")]"):"[Object]";if(value===this)return"_duplicate_".concat(JSON.stringify(keys));if(value.constructor&&value.constructor.name&&"Object"!==value.constructor.name&&!Array.isArray(value)&&!options.allowClass)return;var found=objects.get(value);if(!found){var converted=Array.isArray(value)?value:convertUnconventionalData(value);if(value.constructor&&value.constructor.name&&"Object"!==value.constructor.name&&!Array.isArray(value)&&options.allowClass)try{Object.assign(converted,{"_constructor-name_":value.constructor.name})}catch(e){}return keys.push(key),stack.unshift(converted),objects.set(value,JSON.stringify(keys)),value!==converted&&map.set(value,converted),converted}return"_duplicate_".concat(found)}catch(e){return}}},reviver=function reviver(options){var refs=[],root;return function revive(key,value){if(""===key&&(root=value,refs.forEach((function(_ref){var target=_ref.target,container=_ref.container,replacement=_ref.replacement,replacementArr=isJSON(replacement)?JSON.parse(replacement):replacement.split(".");0===replacementArr.length?container[target]=root:container[target]=lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(root,replacementArr)}))),"_constructor-name_"===key)return value;if(isObject(value)&&value["_constructor-name_"]&&options.allowFunction){var name=value["_constructor-name_"];if("Object"!==name){var Fn=new Function("return function ".concat(name.replace(/[\W_]+/g,""),"(){}"))();Object.setPrototypeOf(value,new Fn)}return delete value["_constructor-name_"],value}if("string"==typeof value&&value.startsWith("_function_")&&options.allowFunction){var _ref2=value.match(/_function_([^|]*)\|(.*)/)||[],_ref3=_slicedToArray(_ref2,3),_name=_ref3[1],source=_ref3[2],sourceSanitized=source.replace(/[(\(\))|\\| |\]|`]*$/,"");if(!options.lazyEval)return eval("(".concat(sourceSanitized,")"));var result=function result(){var f=eval("(".concat(sourceSanitized,")"));return f.apply(void 0,arguments)};return Object.defineProperty(result,"toString",{value:function value(){return sourceSanitized}}),Object.defineProperty(result,"name",{value:_name}),result}if("string"==typeof value&&value.startsWith("_regexp_")&&options.allowRegExp){var _ref4=value.match(/_regexp_([^|]*)\|(.*)/)||[],_ref5=_slicedToArray(_ref4,3),flags=_ref5[1],_source=_ref5[2];return new RegExp(_source,flags)}return"string"==typeof value&&value.startsWith("_date_")&&options.allowDate?new Date(value.replace("_date_","")):"string"==typeof value&&value.startsWith("_duplicate_")?(refs.push({target:key,container:this,replacement:value.replace(/^_duplicate_/,"")}),null):"string"==typeof value&&value.startsWith("_symbol_")&&options.allowSymbol?Symbol(value.replace("_symbol_","")):"string"==typeof value&&value.startsWith("_gsymbol_")&&options.allowSymbol?Symbol.for(value.replace("_gsymbol_","")):"string"==typeof value&&"_-Infinity_"===value?-1/0:"string"==typeof value&&"_Infinity_"===value?1/0:"string"==typeof value&&"_NaN_"===value?NaN:"string"==typeof value&&value.startsWith("_bigint_")&&"function"==typeof BigInt?BigInt(value.replace("_bigint_","")):value}},defaultOptions={maxDepth:10,space:void 0,allowFunction:!0,allowRegExp:!0,allowDate:!0,allowClass:!0,allowUndefined:!0,allowSymbol:!0,lazyEval:!0},stringify=function stringify(data){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},mergedOptions=_objectSpread(_objectSpread({},defaultOptions),options);return JSON.stringify(convertUnconventionalData(data),replacer(mergedOptions),options.space)},mutator=function mutator(){var mutated=new Map;return function mutateUndefined(value){isObject(value)&&Object.entries(value).forEach((function(_ref6){var _ref7=_slicedToArray(_ref6,2),k=_ref7[0],v=_ref7[1];"_undefined_"===v?value[k]=void 0:mutated.get(v)||(mutated.set(v,!0),mutateUndefined(v))})),Array.isArray(value)&&value.forEach((function(v,index){"_undefined_"===v?(mutated.set(v,!0),value[index]=void 0):mutated.get(v)||(mutated.set(v,!0),mutateUndefined(v))}))}},parse=function parse(data){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},mergedOptions=_objectSpread(_objectSpread({},defaultOptions),options),result=JSON.parse(data,reviver(mergedOptions));return mutator()(result),result}},"./node_modules/telejson/node_modules/isobject/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isObject(val){return null!=val&&"object"==typeof val&&!1===Array.isArray(val)}__webpack_require__.d(__webpack_exports__,{Z:function(){return isObject}})}}]);