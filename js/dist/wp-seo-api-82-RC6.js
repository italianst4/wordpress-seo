yoastWebpackJsonp([26],{

/***/ 2570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global jQuery, wpApiSettings */\n\n(function ($, wpApiSettings) {\n\twindow.wpseoApi = {\n\t\t/**\n   * Performs a GET request to the Yoast REST Api.\n   *\n   * @param {string}   route     The endpoint to query.\n   * @param {Object}   [data]    The data to send to the endpoint.\n   * @param {function} [success] The success callback, can be passed as second argument if no data is provided.\n   * @param {function} [error]   The error callback, can be passed as third argument if no data is provided.\n   *\n   * @returns {void}\n   */\n\t\tget: function get(route, data, success, error) {\n\t\t\tthis.request(\"GET\", route, data, success, error);\n\t\t},\n\n\t\t/**\n   * Performs a POST request to the Yoast REST Api.\n   *\n   * @param {string}   route     The endpoint to query.\n   * @param {Object}   [data]    The data to send to the endpoint.\n   * @param {function} [success] The success callback, can be passed as second argument if no data is provided.\n   * @param {function} [error]   The error callback, can be passed as third argument if no data is provided.\n   *\n   * @returns {void}\n   */\n\t\tpost: function post(route, data, success, error) {\n\t\t\tthis.request(\"POST\", route, data, success, error);\n\t\t},\n\n\t\t/**\n   * Performs a PUT request to the Yoast REST Api.\n   *\n   * @param {string}   route     The endpoint to query.\n   * @param {Object}   [data]    The data to send to the endpoint.\n   * @param {function} [success] The success callback, can be passed as second argument if no data is provided.\n   * @param {function} [error]   The error callback, can be passed as third argument if no data is provided.\n   *\n   * @returns {void}\n   */\n\t\tput: function put(route, data, success, error) {\n\t\t\tthis.request(\"PUT\", route, data, success, error);\n\t\t},\n\n\t\t/**\n   * Performs a PATCH request to the Yoast REST Api.\n   *\n   * @param {string}   route     The endpoint to query.\n   * @param {Object}   [data]    The data to send to the endpoint.\n   * @param {function} [success] The success callback, can be passed as second argument if no data is provided.\n   * @param {function} [error]   The error callback, can be passed as third argument if no data is provided.\n   *\n   * @returns {void}\n   */\n\t\tpatch: function patch(route, data, success, error) {\n\t\t\tthis.request(\"PATCH\", route, data, success, error);\n\t\t},\n\n\t\t/**\n   * Performs a DELETE request to the Yoast REST Api.\n   *\n   * @param {string}   route     The endpoint to query.\n   * @param {Object}   [data]    The data to send to the endpoint.\n   * @param {function} [success] The success callback, can be passed as second argument if no data is provided.\n   * @param {function} [error]   The error callback, can be passed as third argument if no data is provided.\n   *\n   * @returns {void}\n   */\n\t\tdelete: function _delete(route, data, success, error) {\n\t\t\tthis.request(\"DELETE\", route, data, success, error);\n\t\t},\n\n\t\t/**\n   * Performs a request to the Yoast REST Api.\n   *\n   * @param {string}   method    The request method.\n   * @param {string}   route     The endpoint to query.\n   * @param {Object}   [data]    The data to send to the endpoint.\n   * @param {function} [success] The success callback, can be passed as third argument if no data is provided.\n   * @param {function} [error]   The error callback, can be passed as fourth argument if no data is provided.\n   *\n   * @returns {void}\n   */\n\t\trequest: function request(method, route, data, success, error) {\n\t\t\t/*\n    * If no data was passed along use the third argument as the success callback\n    * and the fourth argument as the error callback.\n    */\n\t\t\tif ($.isFunction(data) && typeof error === \"undefined\") {\n\t\t\t\terror = success;\n\t\t\t\tsuccess = data;\n\t\t\t\tdata = {};\n\t\t\t}\n\n\t\t\t// If this is no GET or POST request then use API's method override for maximum compatibility.\n\t\t\tif (method !== \"POST\" && method !== \"GET\") {\n\t\t\t\tdata[\"_method\"] = method;\n\t\t\t\tmethod = \"POST\";\n\t\t\t}\n\n\t\t\t$.ajax({\n\t\t\t\turl: wpApiSettings.root + \"yoast/v1/\" + route,\n\t\t\t\tmethod: method,\n\t\t\t\tbeforeSend: function beforeSend(xhr) {\n\t\t\t\t\txhr.setRequestHeader(\"X-WP-Nonce\", wpApiSettings.nonce);\n\t\t\t\t},\n\t\t\t\tdata: data\n\t\t\t}).done(success).fail(error);\n\t\t}\n\t};\n})(jQuery, wpApiSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3MC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvd3Atc2VvLWFwaS5qcz9iOTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBqUXVlcnksIHdwQXBpU2V0dGluZ3MgKi9cblxuKCBmdW5jdGlvbiggJCwgd3BBcGlTZXR0aW5ncyApIHtcblx0d2luZG93Lndwc2VvQXBpID0ge1xuXHRcdC8qKlxuXHRcdCAqIFBlcmZvcm1zIGEgR0VUIHJlcXVlc3QgdG8gdGhlIFlvYXN0IFJFU1QgQXBpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9ICAgcm91dGUgICAgIFRoZSBlbmRwb2ludCB0byBxdWVyeS5cblx0XHQgKiBAcGFyYW0ge09iamVjdH0gICBbZGF0YV0gICAgVGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgZW5kcG9pbnQuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3N1Y2Nlc3NdIFRoZSBzdWNjZXNzIGNhbGxiYWNrLCBjYW4gYmUgcGFzc2VkIGFzIHNlY29uZCBhcmd1bWVudCBpZiBubyBkYXRhIGlzIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlcnJvcl0gICBUaGUgZXJyb3IgY2FsbGJhY2ssIGNhbiBiZSBwYXNzZWQgYXMgdGhpcmQgYXJndW1lbnQgaWYgbm8gZGF0YSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHt2b2lkfVxuXHRcdCAqL1xuXHRcdGdldDogZnVuY3Rpb24oIHJvdXRlLCBkYXRhLCBzdWNjZXNzLCBlcnJvciApIHtcblx0XHRcdHRoaXMucmVxdWVzdCggXCJHRVRcIiwgcm91dGUsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBlcmZvcm1zIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBZb2FzdCBSRVNUIEFwaS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSAgIHJvdXRlICAgICBUaGUgZW5kcG9pbnQgdG8gcXVlcnkuXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9ICAgW2RhdGFdICAgIFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIGVuZHBvaW50LlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtzdWNjZXNzXSBUaGUgc3VjY2VzcyBjYWxsYmFjaywgY2FuIGJlIHBhc3NlZCBhcyBzZWNvbmQgYXJndW1lbnQgaWYgbm8gZGF0YSBpcyBwcm92aWRlZC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZXJyb3JdICAgVGhlIGVycm9yIGNhbGxiYWNrLCBjYW4gYmUgcGFzc2VkIGFzIHRoaXJkIGFyZ3VtZW50IGlmIG5vIGRhdGEgaXMgcHJvdmlkZWQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRwb3N0OiBmdW5jdGlvbiggcm91dGUsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yICkge1xuXHRcdFx0dGhpcy5yZXF1ZXN0KCBcIlBPU1RcIiwgcm91dGUsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBlcmZvcm1zIGEgUFVUIHJlcXVlc3QgdG8gdGhlIFlvYXN0IFJFU1QgQXBpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9ICAgcm91dGUgICAgIFRoZSBlbmRwb2ludCB0byBxdWVyeS5cblx0XHQgKiBAcGFyYW0ge09iamVjdH0gICBbZGF0YV0gICAgVGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgZW5kcG9pbnQuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3N1Y2Nlc3NdIFRoZSBzdWNjZXNzIGNhbGxiYWNrLCBjYW4gYmUgcGFzc2VkIGFzIHNlY29uZCBhcmd1bWVudCBpZiBubyBkYXRhIGlzIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlcnJvcl0gICBUaGUgZXJyb3IgY2FsbGJhY2ssIGNhbiBiZSBwYXNzZWQgYXMgdGhpcmQgYXJndW1lbnQgaWYgbm8gZGF0YSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHt2b2lkfVxuXHRcdCAqL1xuXHRcdHB1dDogZnVuY3Rpb24oIHJvdXRlLCBkYXRhLCBzdWNjZXNzLCBlcnJvciApIHtcblx0XHRcdHRoaXMucmVxdWVzdCggXCJQVVRcIiwgcm91dGUsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBlcmZvcm1zIGEgUEFUQ0ggcmVxdWVzdCB0byB0aGUgWW9hc3QgUkVTVCBBcGkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gICByb3V0ZSAgICAgVGhlIGVuZHBvaW50IHRvIHF1ZXJ5LlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSAgIFtkYXRhXSAgICBUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBlbmRwb2ludC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbc3VjY2Vzc10gVGhlIHN1Y2Nlc3MgY2FsbGJhY2ssIGNhbiBiZSBwYXNzZWQgYXMgc2Vjb25kIGFyZ3VtZW50IGlmIG5vIGRhdGEgaXMgcHJvdmlkZWQuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vycm9yXSAgIFRoZSBlcnJvciBjYWxsYmFjaywgY2FuIGJlIHBhc3NlZCBhcyB0aGlyZCBhcmd1bWVudCBpZiBubyBkYXRhIGlzIHByb3ZpZGVkLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3ZvaWR9XG5cdFx0ICovXG5cdFx0cGF0Y2g6IGZ1bmN0aW9uKCByb3V0ZSwgZGF0YSwgc3VjY2VzcywgZXJyb3IgKSB7XG5cdFx0XHR0aGlzLnJlcXVlc3QoIFwiUEFUQ0hcIiwgcm91dGUsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBlcmZvcm1zIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIFlvYXN0IFJFU1QgQXBpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9ICAgcm91dGUgICAgIFRoZSBlbmRwb2ludCB0byBxdWVyeS5cblx0XHQgKiBAcGFyYW0ge09iamVjdH0gICBbZGF0YV0gICAgVGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgZW5kcG9pbnQuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3N1Y2Nlc3NdIFRoZSBzdWNjZXNzIGNhbGxiYWNrLCBjYW4gYmUgcGFzc2VkIGFzIHNlY29uZCBhcmd1bWVudCBpZiBubyBkYXRhIGlzIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlcnJvcl0gICBUaGUgZXJyb3IgY2FsbGJhY2ssIGNhbiBiZSBwYXNzZWQgYXMgdGhpcmQgYXJndW1lbnQgaWYgbm8gZGF0YSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHt2b2lkfVxuXHRcdCAqL1xuXHRcdGRlbGV0ZTogZnVuY3Rpb24oIHJvdXRlLCBkYXRhLCBzdWNjZXNzLCBlcnJvciApIHtcblx0XHRcdHRoaXMucmVxdWVzdCggXCJERUxFVEVcIiwgcm91dGUsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBlcmZvcm1zIGEgcmVxdWVzdCB0byB0aGUgWW9hc3QgUkVTVCBBcGkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gICBtZXRob2QgICAgVGhlIHJlcXVlc3QgbWV0aG9kLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSAgIHJvdXRlICAgICBUaGUgZW5kcG9pbnQgdG8gcXVlcnkuXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9ICAgW2RhdGFdICAgIFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIGVuZHBvaW50LlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtzdWNjZXNzXSBUaGUgc3VjY2VzcyBjYWxsYmFjaywgY2FuIGJlIHBhc3NlZCBhcyB0aGlyZCBhcmd1bWVudCBpZiBubyBkYXRhIGlzIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlcnJvcl0gICBUaGUgZXJyb3IgY2FsbGJhY2ssIGNhbiBiZSBwYXNzZWQgYXMgZm91cnRoIGFyZ3VtZW50IGlmIG5vIGRhdGEgaXMgcHJvdmlkZWQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRyZXF1ZXN0OiBmdW5jdGlvbiggbWV0aG9kLCByb3V0ZSwgZGF0YSwgc3VjY2VzcywgZXJyb3IgKSB7XG5cdFx0XHQvKlxuXHRcdFx0ICogSWYgbm8gZGF0YSB3YXMgcGFzc2VkIGFsb25nIHVzZSB0aGUgdGhpcmQgYXJndW1lbnQgYXMgdGhlIHN1Y2Nlc3MgY2FsbGJhY2tcblx0XHRcdCAqIGFuZCB0aGUgZm91cnRoIGFyZ3VtZW50IGFzIHRoZSBlcnJvciBjYWxsYmFjay5cblx0XHRcdCAqL1xuXHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oIGRhdGEgKSAmJiB0eXBlb2YgZXJyb3IgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdGVycm9yICAgPSBzdWNjZXNzO1xuXHRcdFx0XHRzdWNjZXNzID0gZGF0YTtcblx0XHRcdFx0ZGF0YSAgICA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIG5vIEdFVCBvciBQT1NUIHJlcXVlc3QgdGhlbiB1c2UgQVBJJ3MgbWV0aG9kIG92ZXJyaWRlIGZvciBtYXhpbXVtIGNvbXBhdGliaWxpdHkuXG5cdFx0XHRpZiAoIG1ldGhvZCAhPT0gXCJQT1NUXCIgJiYgbWV0aG9kICE9PSBcIkdFVFwiICkge1xuXHRcdFx0XHRkYXRhW1wiX21ldGhvZFwiXSA9IG1ldGhvZDtcblx0XHRcdFx0bWV0aG9kID0gXCJQT1NUXCI7XG5cdFx0XHR9XG5cblx0XHRcdCQuYWpheCgge1xuXHRcdFx0XHR1cmw6IHdwQXBpU2V0dGluZ3Mucm9vdCArIFwieW9hc3QvdjEvXCIgKyByb3V0ZSxcblx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCB4aHIgKSB7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoIFwiWC1XUC1Ob25jZVwiLCB3cEFwaVNldHRpbmdzLm5vbmNlICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHR9ICkuZG9uZSggc3VjY2VzcyApLmZhaWwoIGVycm9yICk7XG5cdFx0fSxcblx0fTtcbn0oIGpRdWVyeSwgd3BBcGlTZXR0aW5ncyApICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvc3JjL3dwLXNlby1hcGkuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUEzR0E7QUE2R0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2570\n");

/***/ })

},[2570]);