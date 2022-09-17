import {
  __commonJS
} from "./chunk-HUBM7RA2.js";

// node_modules/hash-it/dist/hash-it.cjs.js
var require_hash_it_cjs = __commonJS({
  "node_modules/hash-it/dist/hash-it.cjs.js"(exports, module) {
    "use strict";
    function getUniqueIntegerFromString(string) {
      var index = string.length;
      var hashA = 5381;
      var hashB = 52711;
      var charCode;
      while (index--) {
        charCode = string.charCodeAt(index);
        hashA = hashA * 33 ^ charCode;
        hashB = hashB * 33 ^ charCode;
      }
      return (hashA >>> 0) * 4096 + (hashB >>> 0);
    }
    var getClassTypes = function getClassTypes2(classes, reversed) {
      return classes.reduce(function(map, className) {
        var toStringClassName = "[object " + className + "]";
        if (reversed) {
          map[toStringClassName] = className;
        } else {
          map[className] = toStringClassName;
        }
        return map;
      }, {});
    };
    var getFlags = function getFlags2(flags) {
      return flags.reduce(function(flag, item) {
        flag[item] = true;
        return flag;
      }, {});
    };
    var OBJECT_CLASSES = [
      "Array",
      "Arguments",
      "Object",
      "RegExp",
      "Symbol",
      "Map",
      "Set",
      "Date",
      "Error",
      "Event",
      "Generator",
      "Promise",
      "WeakMap",
      "WeakSet",
      "DocumentFragment",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "ArrayBuffer",
      "DataView",
      "DocumentFragment",
      "Window",
      "String",
      "Number",
      "Boolean",
      "Function",
      "Undefined",
      "GeneratorFunction",
      "BigInt",
      "Null"
    ];
    var OBJECT_CLASS_TYPE = getClassTypes(OBJECT_CLASSES, false);
    var OBJECT_CLASS = getClassTypes(OBJECT_CLASSES, true);
    var BAILOUT_TAGS = getFlags([OBJECT_CLASS_TYPE.Generator, OBJECT_CLASS_TYPE.Promise, OBJECT_CLASS_TYPE.WeakMap, OBJECT_CLASS_TYPE.WeakSet]);
    var ITERABLE_TAGS = getFlags([OBJECT_CLASS_TYPE.Map, OBJECT_CLASS_TYPE.Set]);
    var NORMALIZED_TAGS = getFlags([OBJECT_CLASS_TYPE.Date, OBJECT_CLASS_TYPE.RegExp]);
    var PRIMITIVE_TAGS = getFlags(["bigint", "boolean", "function", "number", "string", "undefined"]);
    var SELF_TAGS = getFlags([OBJECT_CLASS_TYPE.Arguments, OBJECT_CLASS_TYPE.Array]);
    var TO_STRING_TAGS = getFlags([OBJECT_CLASS_TYPE.RegExp, OBJECT_CLASS_TYPE.Symbol]);
    var TYPED_ARRAY_TAGS = getFlags([OBJECT_CLASS_TYPE.Float32Array, OBJECT_CLASS_TYPE.Float64Array, OBJECT_CLASS_TYPE.Int8Array, OBJECT_CLASS_TYPE.Int16Array, OBJECT_CLASS_TYPE.Int32Array, OBJECT_CLASS_TYPE.Uint8Array, OBJECT_CLASS_TYPE.Uint8ClampedArray, OBJECT_CLASS_TYPE.Uint16Array, OBJECT_CLASS_TYPE.Uint32Array]);
    var HAS_BUFFER_FROM_SUPPORT = typeof Buffer !== "undefined" && typeof Buffer.from === "function";
    var HAS_UINT16ARRAY_SUPPORT = typeof Uint16Array === "function";
    function getStringifiedArrayBufferFallback(buffer) {
      return String.fromCharCode.apply(null, new Uint16Array(buffer));
    }
    function getStringifiedArrayBufferModern(buffer) {
      return Buffer.from(buffer).toString("utf8");
    }
    function getStringifiedArrayBufferNoSupport(buffer) {
      return "";
    }
    var getStringifiedArrayBuffer = function() {
      if (HAS_BUFFER_FROM_SUPPORT) {
        return getStringifiedArrayBufferModern;
      }
      if (HAS_UINT16ARRAY_SUPPORT) {
        return getStringifiedArrayBufferFallback;
      }
      return getStringifiedArrayBufferNoSupport;
    }();
    var XML_ELEMENT_REGEXP = /\[object ([HTML|SVG](.*)Element)\]/;
    var toString = Object.prototype.toString;
    var keys = Object.keys;
    function getSortedEvent(event) {
      return {
        bubbles: event.bubbles,
        cancelBubble: event.cancelBubble,
        cancelable: event.cancelable,
        composed: event.composed,
        currentTarget: event.currentTarget,
        defaultPrevented: event.defaultPrevented,
        eventPhase: event.eventPhase,
        isTrusted: event.isTrusted,
        returnValue: event.returnValue,
        target: event.target,
        type: event.type
      };
    }
    function shouldSort(first, second) {
      return first > second;
    }
    function shouldSortPair(firstPair, secondPair) {
      return firstPair[0] > secondPair[0];
    }
    function sort(array, fn) {
      var subIndex;
      var value;
      for (var index = 0; index < array.length; ++index) {
        value = array[index];
        for (subIndex = index - 1; ~subIndex && fn(array[subIndex], value); --subIndex) {
          array[subIndex + 1] = array[subIndex];
        }
        array[subIndex + 1] = value;
      }
      return array;
    }
    function getSortedMap(map, cache, keys2) {
      var entries = [];
      map.forEach(function(value, key) {
        entries.push([stringify(key, cache, keys2), stringify(value, cache, keys2)]);
      });
      sort(entries, shouldSortPair);
      for (var index = 0, entry; index < entries.length; ++index) {
        entry = entries[index];
        entries[index] = "[" + entry[0] + "," + entry[1] + "]";
      }
      return "Map|[" + entries.join(",") + "]";
    }
    function getSortedSet(set, cache, keys2) {
      var entries = [];
      set.forEach(function(value) {
        entries.push(stringify(value, cache, keys2));
      });
      sort(entries, shouldSort);
      return "Set|[" + entries.join(",") + "]";
    }
    function getSortedObject(object) {
      var objectKeys = sort(keys(object), shouldSort);
      var newObject = {};
      var key;
      for (var index = 0; index < objectKeys.length; ++index) {
        key = objectKeys[index];
        newObject[key] = object[key];
      }
      return newObject;
    }
    function getStringifiedDocumentFragment(fragment) {
      var children = fragment.children;
      var innerHTML = [];
      for (var index = 0; index < children.length; ++index) {
        innerHTML.push(children[index].outerHTML);
      }
      return innerHTML.join(",");
    }
    function getCutoffIndex(array, value) {
      for (var index = 0; index < array.length; ++index) {
        if (array[index] === value) {
          return index + 1;
        }
      }
      return 0;
    }
    function getNormalizedValue(value, cache, keys2, passedTag) {
      if (!passedTag) {
        var type = typeof value;
        if (PRIMITIVE_TAGS[type]) {
          return type + "|" + value;
        }
        if (value === null) {
          return value + "|" + value;
        }
      }
      var tag = passedTag || toString.call(value);
      if (SELF_TAGS[tag]) {
        return value;
      }
      if (tag === OBJECT_CLASS_TYPE.Object) {
        return getSortedObject(value);
      }
      if (TO_STRING_TAGS[tag]) {
        return OBJECT_CLASS[tag] + "|" + value.toString();
      }
      if (ITERABLE_TAGS[tag]) {
        return value instanceof Map ? getSortedMap(value, cache, keys2) : getSortedSet(value, cache, keys2);
      }
      if (tag === OBJECT_CLASS_TYPE.Date) {
        return OBJECT_CLASS[tag] + "|" + value.getTime();
      }
      if (tag === OBJECT_CLASS_TYPE.Error) {
        return OBJECT_CLASS[tag] + "|" + value.stack;
      }
      if (tag === OBJECT_CLASS_TYPE.Event) {
        return getSortedEvent(value);
      }
      if (BAILOUT_TAGS[tag]) {
        return OBJECT_CLASS[tag] + "|NOT_ENUMERABLE";
      }
      if (XML_ELEMENT_REGEXP.test(tag)) {
        return tag.slice(8, -1) + "|" + value.outerHTML;
      }
      if (tag === OBJECT_CLASS_TYPE.DocumentFragment) {
        return OBJECT_CLASS[tag] + "|" + getStringifiedDocumentFragment(value);
      }
      if (TYPED_ARRAY_TAGS[tag]) {
        return OBJECT_CLASS[tag] + "|" + value.join(",");
      }
      if (tag === OBJECT_CLASS_TYPE.ArrayBuffer) {
        return OBJECT_CLASS[tag] + "|" + getStringifiedArrayBuffer(value);
      }
      if (tag === OBJECT_CLASS_TYPE.DataView) {
        return OBJECT_CLASS[tag] + "|" + getStringifiedArrayBuffer(value.buffer);
      }
      return value;
    }
    function createReplacer(cache, keys2) {
      if (cache === void 0) {
        cache = [];
      }
      if (keys2 === void 0) {
        keys2 = [];
      }
      return function(key, value) {
        if (typeof value === "object") {
          if (cache.length) {
            var thisCutoff = getCutoffIndex(cache, this);
            if (thisCutoff === 0) {
              cache.push(this);
            } else {
              cache.splice(thisCutoff);
              keys2.splice(thisCutoff);
            }
            keys2.push(key);
            var valueCutoff = getCutoffIndex(cache, value);
            if (valueCutoff !== 0) {
              return "[~" + (keys2.slice(0, valueCutoff).join(".") || ".") + "]";
            }
            cache.push(value);
          } else {
            cache[0] = value;
            keys2[0] = key;
          }
        }
        if (key && this[key] instanceof Date) {
          return getNormalizedValue(this[key], cache, keys2, OBJECT_CLASS_TYPE.Date);
        }
        return getNormalizedValue(value, cache, keys2);
      };
    }
    function stringify(value, cache, keys2) {
      if (!value || typeof value !== "object") {
        return getNormalizedValue(value, cache, keys2);
      }
      var tag = toString.call(value);
      if (NORMALIZED_TAGS[tag]) {
        return getNormalizedValue(value, cache, keys2, tag);
      }
      return JSON.stringify(value, createReplacer(cache, keys2));
    }
    function hash(value) {
      return getUniqueIntegerFromString(stringify(value));
    }
    function is(value, otherValue) {
      return hash(value) === hash(otherValue);
    }
    function isAll(value) {
      for (var index = 0; index < (arguments.length <= 1 ? 0 : arguments.length - 1); ++index) {
        if (!is(value, index + 1 < 1 || arguments.length <= index + 1 ? void 0 : arguments[index + 1])) {
          return false;
        }
      }
      return true;
    }
    function isAny(value) {
      for (var index = 0; index < (arguments.length <= 1 ? 0 : arguments.length - 1); ++index) {
        if (is(value, index + 1 < 1 || arguments.length <= index + 1 ? void 0 : arguments[index + 1])) {
          return true;
        }
      }
      return false;
    }
    function isNot(value, otherValue) {
      return hash(value) !== hash(otherValue);
    }
    is.all = isAll;
    is.any = isAny;
    is.not = isNot;
    hash.is = is;
    module.exports = hash;
  }
});

export {
  require_hash_it_cjs
};
//# sourceMappingURL=chunk-PQIMBZ5K.js.map