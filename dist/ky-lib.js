import * as Ro from "react";
import xa, { forwardRef as En, createElement as Qe, createContext as tv, useMemo as Of, useContext as fy, useCallback as To, Children as Nf, isValidElement as sy, cloneElement as a1, Fragment as GS, useEffect as Ta, useRef as dn, useState as wa, useLayoutEffect as A_, useReducer as U_ } from "react";
function $_(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var QS = { exports: {} }, qp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function F_() {
  if (Gb)
    return qp;
  Gb = 1;
  var v = xa, C = Symbol.for("react.element"), g = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, R = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(P, O, H) {
    var V, j = {}, W = null, G = null;
    H !== void 0 && (W = "" + H), O.key !== void 0 && (W = "" + O.key), O.ref !== void 0 && (G = O.ref);
    for (V in O)
      x.call(O, V) && !k.hasOwnProperty(V) && (j[V] = O[V]);
    if (P && P.defaultProps)
      for (V in O = P.defaultProps, O)
        j[V] === void 0 && (j[V] = O[V]);
    return { $$typeof: C, type: P, key: W, ref: G, props: j, _owner: R.current };
  }
  return qp.Fragment = g, qp.jsx = y, qp.jsxs = y, qp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qb;
function j_() {
  return Qb || (Qb = 1, process.env.NODE_ENV !== "production" && function() {
    var v = xa, C = Symbol.for("react.element"), g = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), P = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), ee = Symbol.iterator, ne = "@@iterator";
    function ae(T) {
      if (T === null || typeof T != "object")
        return null;
      var q = ee && T[ee] || T[ne];
      return typeof q == "function" ? q : null;
    }
    var Me = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function be(T) {
      {
        for (var q = arguments.length, ce = new Array(q > 1 ? q - 1 : 0), ze = 1; ze < q; ze++)
          ce[ze - 1] = arguments[ze];
        ie("error", T, ce);
      }
    }
    function ie(T, q, ce) {
      {
        var ze = Me.ReactDebugCurrentFrame, Je = ze.getStackAddendum();
        Je !== "" && (q += "%s", ce = ce.concat([Je]));
        var ht = ce.map(function(tt) {
          return String(tt);
        });
        ht.unshift("Warning: " + q), Function.prototype.apply.call(console[T], console, ht);
      }
    }
    var he = !1, oe = !1, Fe = !1, De = !1, Ve = !1, je;
    je = Symbol.for("react.module.reference");
    function lt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === x || T === k || Ve || T === R || T === H || T === V || De || T === G || he || oe || Fe || typeof T == "object" && T !== null && (T.$$typeof === W || T.$$typeof === j || T.$$typeof === y || T.$$typeof === P || T.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === je || T.getModuleId !== void 0));
    }
    function nt(T, q, ce) {
      var ze = T.displayName;
      if (ze)
        return ze;
      var Je = q.displayName || q.name || "";
      return Je !== "" ? ce + "(" + Je + ")" : ce;
    }
    function Ke(T) {
      return T.displayName || "Context";
    }
    function Be(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && be("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case x:
          return "Fragment";
        case g:
          return "Portal";
        case k:
          return "Profiler";
        case R:
          return "StrictMode";
        case H:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case P:
            var q = T;
            return Ke(q) + ".Consumer";
          case y:
            var ce = T;
            return Ke(ce._context) + ".Provider";
          case O:
            return nt(T, T.render, "ForwardRef");
          case j:
            var ze = T.displayName || null;
            return ze !== null ? ze : Be(T.type) || "Memo";
          case W: {
            var Je = T, ht = Je._payload, tt = Je._init;
            try {
              return Be(tt(ht));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, Jt = 0, Et, bn, re, Re, fe, ot, ft;
    function zn() {
    }
    zn.__reactDisabledLog = !0;
    function or() {
      {
        if (Jt === 0) {
          Et = console.log, bn = console.info, re = console.warn, Re = console.error, fe = console.group, ot = console.groupCollapsed, ft = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: zn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        Jt++;
      }
    }
    function Ba() {
      {
        if (Jt--, Jt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, T, {
              value: Et
            }),
            info: et({}, T, {
              value: bn
            }),
            warn: et({}, T, {
              value: re
            }),
            error: et({}, T, {
              value: Re
            }),
            group: et({}, T, {
              value: fe
            }),
            groupCollapsed: et({}, T, {
              value: ot
            }),
            groupEnd: et({}, T, {
              value: ft
            })
          });
        }
        Jt < 0 && be("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pn = Me.ReactCurrentDispatcher, Zr;
    function Qn(T, q, ce) {
      {
        if (Zr === void 0)
          try {
            throw Error();
          } catch (Je) {
            var ze = Je.stack.trim().match(/\n( *(at )?)/);
            Zr = ze && ze[1] || "";
          }
        return `
` + Zr + T;
      }
    }
    var gr = !1, Ia;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      Ia = new Sr();
    }
    function Jr(T, q) {
      if (!T || gr)
        return "";
      {
        var ce = Ia.get(T);
        if (ce !== void 0)
          return ce;
      }
      var ze;
      gr = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ht;
      ht = pn.current, pn.current = null, or();
      try {
        if (q) {
          var tt = function() {
            throw Error();
          };
          if (Object.defineProperty(tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(tt, []);
            } catch (yt) {
              ze = yt;
            }
            Reflect.construct(T, [], tt);
          } else {
            try {
              tt.call();
            } catch (yt) {
              ze = yt;
            }
            T.call(tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            ze = yt;
          }
          T();
        }
      } catch (yt) {
        if (yt && ze && typeof yt.stack == "string") {
          for (var Ue = yt.stack.split(`
`), wn = ze.stack.split(`
`), Ht = Ue.length - 1, Pt = wn.length - 1; Ht >= 1 && Pt >= 0 && Ue[Ht] !== wn[Pt]; )
            Pt--;
          for (; Ht >= 1 && Pt >= 0; Ht--, Pt--)
            if (Ue[Ht] !== wn[Pt]) {
              if (Ht !== 1 || Pt !== 1)
                do
                  if (Ht--, Pt--, Pt < 0 || Ue[Ht] !== wn[Pt]) {
                    var lr = `
` + Ue[Ht].replace(" at new ", " at ");
                    return T.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", T.displayName)), typeof T == "function" && Ia.set(T, lr), lr;
                  }
                while (Ht >= 1 && Pt >= 0);
              break;
            }
        }
      } finally {
        gr = !1, pn.current = ht, Ba(), Error.prepareStackTrace = Je;
      }
      var Vi = T ? T.displayName || T.name : "", $s = Vi ? Qn(Vi) : "";
      return typeof T == "function" && Ia.set(T, $s), $s;
    }
    function xn(T, q, ce) {
      return Jr(T, !1);
    }
    function Wn(T) {
      var q = T.prototype;
      return !!(q && q.isReactComponent);
    }
    function An(T, q, ce) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Jr(T, Wn(T));
      if (typeof T == "string")
        return Qn(T);
      switch (T) {
        case H:
          return Qn("Suspense");
        case V:
          return Qn("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case O:
            return xn(T.render);
          case j:
            return An(T.type, q, ce);
          case W: {
            var ze = T, Je = ze._payload, ht = ze._init;
            try {
              return An(ht(Je), q, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Kn = Object.prototype.hasOwnProperty, Xn = {}, ea = Me.ReactDebugCurrentFrame;
    function Ra(T) {
      if (T) {
        var q = T._owner, ce = An(T.type, T._source, q ? q.type : null);
        ea.setExtraStackFrame(ce);
      } else
        ea.setExtraStackFrame(null);
    }
    function si(T, q, ce, ze, Je) {
      {
        var ht = Function.call.bind(Kn);
        for (var tt in T)
          if (ht(T, tt)) {
            var Ue = void 0;
            try {
              if (typeof T[tt] != "function") {
                var wn = Error((ze || "React class") + ": " + ce + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              Ue = T[tt](q, tt, ze, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ht) {
              Ue = Ht;
            }
            Ue && !(Ue instanceof Error) && (Ra(Je), be("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ze || "React class", ce, tt, typeof Ue), Ra(null)), Ue instanceof Error && !(Ue.message in Xn) && (Xn[Ue.message] = !0, Ra(Je), be("Failed %s type: %s", ce, Ue.message), Ra(null));
          }
      }
    }
    var Ya = Array.isArray;
    function ka(T) {
      return Ya(T);
    }
    function Ar(T) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, ce = q && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ce;
      }
    }
    function Ga(T) {
      try {
        return Ur(T), !1;
      } catch {
        return !0;
      }
    }
    function Ur(T) {
      return "" + T;
    }
    function Da(T) {
      if (Ga(T))
        return be("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(T)), Ur(T);
    }
    var on = Me.ReactCurrentOwner, $r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ji, _a, se;
    se = {};
    function Ne(T) {
      if (Kn.call(T, "ref")) {
        var q = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function rt(T) {
      if (Kn.call(T, "key")) {
        var q = Object.getOwnPropertyDescriptor(T, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Tt(T, q) {
      if (typeof T.ref == "string" && on.current && q && on.current.stateNode !== q) {
        var ce = Be(on.current.type);
        se[ce] || (be('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(on.current.type), T.ref), se[ce] = !0);
      }
    }
    function It(T, q) {
      {
        var ce = function() {
          ji || (ji = !0, be("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ce.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function Tn(T, q) {
      {
        var ce = function() {
          _a || (_a = !0, be("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ce.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var en = function(T, q, ce, ze, Je, ht, tt) {
      var Ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: T,
        key: q,
        ref: ce,
        props: tt,
        // Record the component responsible for creating this element.
        _owner: ht
      };
      return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ze
      }), Object.defineProperty(Ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
    };
    function Cr(T, q, ce, ze, Je) {
      {
        var ht, tt = {}, Ue = null, wn = null;
        ce !== void 0 && (Da(ce), Ue = "" + ce), rt(q) && (Da(q.key), Ue = "" + q.key), Ne(q) && (wn = q.ref, Tt(q, Je));
        for (ht in q)
          Kn.call(q, ht) && !$r.hasOwnProperty(ht) && (tt[ht] = q[ht]);
        if (T && T.defaultProps) {
          var Ht = T.defaultProps;
          for (ht in Ht)
            tt[ht] === void 0 && (tt[ht] = Ht[ht]);
        }
        if (Ue || wn) {
          var Pt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          Ue && It(tt, Pt), wn && Tn(tt, Pt);
        }
        return en(T, Ue, wn, Je, ze, on.current, tt);
      }
    }
    var Lt = Me.ReactCurrentOwner, Fr = Me.ReactDebugCurrentFrame;
    function _t(T) {
      if (T) {
        var q = T._owner, ce = An(T.type, T._source, q ? q.type : null);
        Fr.setExtraStackFrame(ce);
      } else
        Fr.setExtraStackFrame(null);
    }
    var zt;
    zt = !1;
    function El(T) {
      return typeof T == "object" && T !== null && T.$$typeof === C;
    }
    function ko() {
      {
        if (Lt.current) {
          var T = Be(Lt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function bl(T) {
      {
        if (T !== void 0) {
          var q = T.fileName.replace(/^.*[\\\/]/, ""), ce = T.lineNumber;
          return `

Check your code at ` + q + ":" + ce + ".";
        }
        return "";
      }
    }
    var wu = {};
    function Us(T) {
      {
        var q = ko();
        if (!q) {
          var ce = typeof T == "string" ? T : T.displayName || T.name;
          ce && (q = `

Check the top-level render call using <` + ce + ">.");
        }
        return q;
      }
    }
    function Do(T, q) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ce = Us(q);
        if (wu[ce])
          return;
        wu[ce] = !0;
        var ze = "";
        T && T._owner && T._owner !== Lt.current && (ze = " It was passed a child from " + Be(T._owner.type) + "."), _t(T), be('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, ze), _t(null);
      }
    }
    function xl(T, q) {
      {
        if (typeof T != "object")
          return;
        if (ka(T))
          for (var ce = 0; ce < T.length; ce++) {
            var ze = T[ce];
            El(ze) && Do(ze, q);
          }
        else if (El(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Je = ae(T);
          if (typeof Je == "function" && Je !== T.entries)
            for (var ht = Je.call(T), tt; !(tt = ht.next()).done; )
              El(tt.value) && Do(tt.value, q);
        }
      }
    }
    function _o(T) {
      {
        var q = T.type;
        if (q == null || typeof q == "string")
          return;
        var ce;
        if (typeof q == "function")
          ce = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === j))
          ce = q.propTypes;
        else
          return;
        if (ce) {
          var ze = Be(q);
          si(ce, T.props, "prop", ze, T);
        } else if (q.PropTypes !== void 0 && !zt) {
          zt = !0;
          var Je = Be(q);
          be("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && be("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tl(T) {
      {
        for (var q = Object.keys(T.props), ce = 0; ce < q.length; ce++) {
          var ze = q[ce];
          if (ze !== "children" && ze !== "key") {
            _t(T), be("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ze), _t(null);
            break;
          }
        }
        T.ref !== null && (_t(T), be("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
      }
    }
    function Qa(T, q, ce, ze, Je, ht) {
      {
        var tt = lt(T);
        if (!tt) {
          var Ue = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (Ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = bl(Je);
          wn ? Ue += wn : Ue += ko();
          var Ht;
          T === null ? Ht = "null" : ka(T) ? Ht = "array" : T !== void 0 && T.$$typeof === C ? (Ht = "<" + (Be(T.type) || "Unknown") + " />", Ue = " Did you accidentally export a JSX literal instead of a component?") : Ht = typeof T, be("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ht, Ue);
        }
        var Pt = Cr(T, q, ce, Je, ht);
        if (Pt == null)
          return Pt;
        if (tt) {
          var lr = q.children;
          if (lr !== void 0)
            if (ze)
              if (ka(lr)) {
                for (var Vi = 0; Vi < lr.length; Vi++)
                  xl(lr[Vi], T);
                Object.freeze && Object.freeze(lr);
              } else
                be("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xl(lr, T);
        }
        return T === x ? Tl(Pt) : _o(Pt), Pt;
      }
    }
    function Hi(T, q, ce) {
      return Qa(T, q, ce, !0);
    }
    function jr(T, q, ce) {
      return Qa(T, q, ce, !1);
    }
    var Ma = jr, Pi = Hi;
    Zp.Fragment = x, Zp.jsx = Ma, Zp.jsxs = Pi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? QS.exports = F_() : QS.exports = j_();
var Te = QS.exports;
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var H_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P_ = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), As = (v, C) => {
  const g = En(
    ({
      color: x = "currentColor",
      size: R = 24,
      strokeWidth: k = 2,
      absoluteStrokeWidth: y,
      className: P = "",
      children: O,
      ...H
    }, V) => Qe(
      "svg",
      {
        ref: V,
        ...H_,
        width: R,
        height: R,
        stroke: x,
        strokeWidth: y ? Number(k) * 24 / Number(R) : k,
        className: ["lucide", `lucide-${P_(v)}`, P].join(" "),
        ...H
      },
      [
        ...C.map(([j, W]) => Qe(j, W)),
        ...Array.isArray(O) ? O : [O]
      ]
    )
  );
  return g.displayName = `${v}`, g;
};
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V_ = As("AtSign", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B_ = As("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I_ = As("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = As("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y_ = As("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G_ = As("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q_ = As("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), YN = ({
  footerText: v,
  footerSocials: C,
  footerSourceText: g
}) => /* @__PURE__ */ Te.jsxs("footer", { className: "mt-auto mb-6 flex flex-col justify-center items-center bottom-0 gap-4", children: [
  /* @__PURE__ */ Te.jsx(W_, { text: v }),
  /* @__PURE__ */ Te.jsx(K_, { ...C }),
  /* @__PURE__ */ Te.jsx(X_, { sourceText: g })
] }), W_ = ({ text: v }) => v ? /* @__PURE__ */ Te.jsx("p", { className: "text-sm md:text-base", children: v }) : null, K_ = ({
  showMail: v,
  showGithub: C,
  showLinkedin: g,
  additionalSocials: x
}) => /* @__PURE__ */ Te.jsxs("div", { className: "grid grid-flow-col gap-4", children: [
  v && /* @__PURE__ */ Te.jsx(
    "a",
    {
      target: "_blank",
      href: "mailto:kyrill@gobber.ch",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ Te.jsx(V_, {})
    }
  ),
  C && /* @__PURE__ */ Te.jsx(
    "a",
    {
      target: "_blank",
      href: "https://github.com/KyrillGobber",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ Te.jsx(ux, {})
    }
  ),
  g && /* @__PURE__ */ Te.jsx(
    "a",
    {
      target: "_blank",
      href: "https://www.linkedin.com/in/kyrill-gobber-022a71199/",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ Te.jsx(Y_, {})
    }
  ),
  x
] }), X_ = ({ sourceText: v }) => v ? /* @__PURE__ */ Te.jsxs(
  "a",
  {
    className: "flex flex-row gap-2 text-sm md:text-base",
    target: "_blank",
    href: "https://github.com/KyrillGobber/kyFrontpage",
    rel: "noopener noreferrer",
    children: [
      v,
      /* @__PURE__ */ Te.jsx(I_, {})
    ]
  }
) : null;
function sx(v) {
  var C, g, x = "";
  if (typeof v == "string" || typeof v == "number")
    x += v;
  else if (typeof v == "object")
    if (Array.isArray(v)) {
      var R = v.length;
      for (C = 0; C < R; C++)
        v[C] && (g = sx(v[C])) && (x && (x += " "), x += g);
    } else
      for (g in v)
        v[g] && (x && (x += " "), x += g);
  return x;
}
function q_() {
  for (var v, C, g = 0, x = "", R = arguments.length; g < R; g++)
    (v = arguments[g]) && (C = sx(v)) && (x && (x += " "), x += C);
  return x;
}
const i1 = "-";
function Z_(v) {
  const C = eM(v), {
    conflictingClassGroups: g,
    conflictingClassGroupModifiers: x
  } = v;
  function R(y) {
    const P = y.split(i1);
    return P[0] === "" && P.length !== 1 && P.shift(), cx(P, C) || J_(y);
  }
  function k(y, P) {
    const O = g[y] || [];
    return P && x[y] ? [...O, ...x[y]] : O;
  }
  return {
    getClassGroupId: R,
    getConflictingClassGroupIds: k
  };
}
function cx(v, C) {
  var y;
  if (v.length === 0)
    return C.classGroupId;
  const g = v[0], x = C.nextPart.get(g), R = x ? cx(v.slice(1), x) : void 0;
  if (R)
    return R;
  if (C.validators.length === 0)
    return;
  const k = v.join(i1);
  return (y = C.validators.find(({
    validator: P
  }) => P(k))) == null ? void 0 : y.classGroupId;
}
const Wb = /^\[(.+)\]$/;
function J_(v) {
  if (Wb.test(v)) {
    const C = Wb.exec(v)[1], g = C == null ? void 0 : C.substring(0, C.indexOf(":"));
    if (g)
      return "arbitrary.." + g;
  }
}
function eM(v) {
  const {
    theme: C,
    prefix: g
  } = v, x = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nM(Object.entries(v.classGroups), g).forEach(([k, y]) => {
    WS(y, x, k, C);
  }), x;
}
function WS(v, C, g, x) {
  v.forEach((R) => {
    if (typeof R == "string") {
      const k = R === "" ? C : Kb(C, R);
      k.classGroupId = g;
      return;
    }
    if (typeof R == "function") {
      if (tM(R)) {
        WS(R(x), C, g, x);
        return;
      }
      C.validators.push({
        validator: R,
        classGroupId: g
      });
      return;
    }
    Object.entries(R).forEach(([k, y]) => {
      WS(y, Kb(C, k), g, x);
    });
  });
}
function Kb(v, C) {
  let g = v;
  return C.split(i1).forEach((x) => {
    g.nextPart.has(x) || g.nextPart.set(x, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), g = g.nextPart.get(x);
  }), g;
}
function tM(v) {
  return v.isThemeGetter;
}
function nM(v, C) {
  return C ? v.map(([g, x]) => {
    const R = x.map((k) => typeof k == "string" ? C + k : typeof k == "object" ? Object.fromEntries(Object.entries(k).map(([y, P]) => [C + y, P])) : k);
    return [g, R];
  }) : v;
}
function rM(v) {
  if (v < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let C = 0, g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  function R(k, y) {
    g.set(k, y), C++, C > v && (C = 0, x = g, g = /* @__PURE__ */ new Map());
  }
  return {
    get(k) {
      let y = g.get(k);
      if (y !== void 0)
        return y;
      if ((y = x.get(k)) !== void 0)
        return R(k, y), y;
    },
    set(k, y) {
      g.has(k) ? g.set(k, y) : R(k, y);
    }
  };
}
const fx = "!";
function aM(v) {
  const C = v.separator, g = C.length === 1, x = C[0], R = C.length;
  return function(y) {
    const P = [];
    let O = 0, H = 0, V;
    for (let ne = 0; ne < y.length; ne++) {
      let ae = y[ne];
      if (O === 0) {
        if (ae === x && (g || y.slice(ne, ne + R) === C)) {
          P.push(y.slice(H, ne)), H = ne + R;
          continue;
        }
        if (ae === "/") {
          V = ne;
          continue;
        }
      }
      ae === "[" ? O++ : ae === "]" && O--;
    }
    const j = P.length === 0 ? y : y.substring(H), W = j.startsWith(fx), G = W ? j.substring(1) : j, ee = V && V > H ? V - H : void 0;
    return {
      modifiers: P,
      hasImportantModifier: W,
      baseClassName: G,
      maybePostfixModifierPosition: ee
    };
  };
}
function iM(v) {
  if (v.length <= 1)
    return v;
  const C = [];
  let g = [];
  return v.forEach((x) => {
    x[0] === "[" ? (C.push(...g.sort(), x), g = []) : g.push(x);
  }), C.push(...g.sort()), C;
}
function oM(v) {
  return {
    cache: rM(v.cacheSize),
    splitModifiers: aM(v),
    ...Z_(v)
  };
}
const lM = /\s+/;
function uM(v, C) {
  const {
    splitModifiers: g,
    getClassGroupId: x,
    getConflictingClassGroupIds: R
  } = C, k = /* @__PURE__ */ new Set();
  return v.trim().split(lM).map((y) => {
    const {
      modifiers: P,
      hasImportantModifier: O,
      baseClassName: H,
      maybePostfixModifierPosition: V
    } = g(y);
    let j = x(V ? H.substring(0, V) : H), W = !!V;
    if (!j) {
      if (!V)
        return {
          isTailwindClass: !1,
          originalClassName: y
        };
      if (j = x(H), !j)
        return {
          isTailwindClass: !1,
          originalClassName: y
        };
      W = !1;
    }
    const G = iM(P).join(":");
    return {
      isTailwindClass: !0,
      modifierId: O ? G + fx : G,
      classGroupId: j,
      originalClassName: y,
      hasPostfixModifier: W
    };
  }).reverse().filter((y) => {
    if (!y.isTailwindClass)
      return !0;
    const {
      modifierId: P,
      classGroupId: O,
      hasPostfixModifier: H
    } = y, V = P + O;
    return k.has(V) ? !1 : (k.add(V), R(O, H).forEach((j) => k.add(P + j)), !0);
  }).reverse().map((y) => y.originalClassName).join(" ");
}
function sM() {
  let v = 0, C, g, x = "";
  for (; v < arguments.length; )
    (C = arguments[v++]) && (g = dx(C)) && (x && (x += " "), x += g);
  return x;
}
function dx(v) {
  if (typeof v == "string")
    return v;
  let C, g = "";
  for (let x = 0; x < v.length; x++)
    v[x] && (C = dx(v[x])) && (g && (g += " "), g += C);
  return g;
}
function cM(v, ...C) {
  let g, x, R, k = y;
  function y(O) {
    const H = C.reduce((V, j) => j(V), v());
    return g = oM(H), x = g.cache.get, R = g.cache.set, k = P, P(O);
  }
  function P(O) {
    const H = x(O);
    if (H)
      return H;
    const V = uM(O, g);
    return R(O, V), V;
  }
  return function() {
    return k(sM.apply(null, arguments));
  };
}
function Kt(v) {
  const C = (g) => g[v] || [];
  return C.isThemeGetter = !0, C;
}
const px = /^\[(?:([a-z-]+):)?(.+)\]$/i, fM = /^\d+\/\d+$/, dM = /* @__PURE__ */ new Set(["px", "full", "screen"]), pM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, mM = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yM = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Sl(v) {
  return zs(v) || dM.has(v) || fM.test(v);
}
function xu(v) {
  return zf(v, "length", wM);
}
function zs(v) {
  return !!v && !Number.isNaN(Number(v));
}
function iy(v) {
  return zf(v, "number", zs);
}
function Jp(v) {
  return !!v && Number.isInteger(Number(v));
}
function gM(v) {
  return v.endsWith("%") && zs(v.slice(0, -1));
}
function it(v) {
  return px.test(v);
}
function Tu(v) {
  return pM.test(v);
}
const SM = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function CM(v) {
  return zf(v, SM, vx);
}
function EM(v) {
  return zf(v, "position", vx);
}
const bM = /* @__PURE__ */ new Set(["image", "url"]);
function xM(v) {
  return zf(v, bM, kM);
}
function TM(v) {
  return zf(v, "", RM);
}
function ev() {
  return !0;
}
function zf(v, C, g) {
  const x = px.exec(v);
  return x ? x[1] ? typeof C == "string" ? x[1] === C : C.has(x[1]) : g(x[2]) : !1;
}
function wM(v) {
  return vM.test(v) && !hM.test(v);
}
function vx() {
  return !1;
}
function RM(v) {
  return mM.test(v);
}
function kM(v) {
  return yM.test(v);
}
function DM() {
  const v = Kt("colors"), C = Kt("spacing"), g = Kt("blur"), x = Kt("brightness"), R = Kt("borderColor"), k = Kt("borderRadius"), y = Kt("borderSpacing"), P = Kt("borderWidth"), O = Kt("contrast"), H = Kt("grayscale"), V = Kt("hueRotate"), j = Kt("invert"), W = Kt("gap"), G = Kt("gradientColorStops"), ee = Kt("gradientColorStopPositions"), ne = Kt("inset"), ae = Kt("margin"), Me = Kt("opacity"), be = Kt("padding"), ie = Kt("saturate"), he = Kt("scale"), oe = Kt("sepia"), Fe = Kt("skew"), De = Kt("space"), Ve = Kt("translate"), je = () => ["auto", "contain", "none"], lt = () => ["auto", "hidden", "clip", "visible", "scroll"], nt = () => ["auto", it, C], Ke = () => [it, C], Be = () => ["", Sl, xu], et = () => ["auto", zs, it], Jt = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Et = () => ["solid", "dashed", "dotted", "double", "none"], bn = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], re = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Re = () => ["", "0", it], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ot = () => [zs, iy], ft = () => [zs, it];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ev],
      spacing: [Sl, xu],
      blur: ["none", "", Tu, it],
      brightness: ot(),
      borderColor: [v],
      borderRadius: ["none", "", "full", Tu, it],
      borderSpacing: Ke(),
      borderWidth: Be(),
      contrast: ot(),
      grayscale: Re(),
      hueRotate: ft(),
      invert: Re(),
      gap: Ke(),
      gradientColorStops: [v],
      gradientColorStopPositions: [gM, xu],
      inset: nt(),
      margin: nt(),
      opacity: ot(),
      padding: Ke(),
      saturate: ot(),
      scale: ot(),
      sepia: Re(),
      skew: ft(),
      space: Ke(),
      translate: Ke()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", it]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Tu]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Jt(), it]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: lt()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": lt()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": lt()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: je()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": je()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": je()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [ne]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [ne]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [ne]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [ne]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [ne]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [ne]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [ne]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [ne]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [ne]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Jp, it]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: nt()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", it]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Jp, it]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ev]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Jp, it]
        }, it]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": et()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": et()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ev]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Jp, it]
        }, it]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": et()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": et()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", it]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", it]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [W]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [W]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [W]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...re()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...re(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...re(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [be]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [be]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [be]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [be]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [be]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [be]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [be]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [be]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [be]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [ae]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [ae]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [ae]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [ae]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [ae]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [ae]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [ae]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [ae]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [ae]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [De]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [De]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", it, C]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [it, C, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [it, C, "none", "full", "min", "max", "fit", "prose", {
          screen: [Tu]
        }, Tu]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [it, C, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [it, C, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [it, C, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [it, C, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Tu, xu]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", iy]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ev]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", it]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", zs, iy]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Sl, it]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", it]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", it]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [v]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [Me]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [v]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [Me]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Et(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Sl, xu]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Sl, it]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [v]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Ke()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", it]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", it]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [Me]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Jt(), EM]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", CM]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xM]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [v]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [ee]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [ee]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [ee]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [G]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [G]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [G]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [k]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [k]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [k]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [k]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [k]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [k]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [k]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [k]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [k]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [k]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [k]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [k]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [k]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [k]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [k]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [P]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [P]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [P]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [P]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [P]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [P]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [P]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [P]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [P]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [Me]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Et(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [P]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [P]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [Me]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Et()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [R]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [R]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [R]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [R]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [R]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [R]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [R]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [R]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Et()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Sl, it]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Sl, xu]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [v]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Be()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [v]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [Me]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Sl, xu]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [v]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Tu, TM]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ev]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Me]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": bn()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": bn()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [g]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Tu, it]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [H]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [V]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [j]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [oe]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [g]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [H]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [V]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [j]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Me]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [oe]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [y]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [y]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [y]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", it]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ft()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", it]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ft()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", it]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [he]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [he]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [he]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Jp, it]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Ve]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Ve]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Fe]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Fe]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", it]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", v]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", it]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [v]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Ke()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Ke()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Ke()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Ke()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Ke()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Ke()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Ke()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Ke()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Ke()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Ke()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Ke()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Ke()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Ke()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Ke()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Ke()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Ke()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Ke()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Ke()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", it]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [v, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Sl, xu, iy]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [v, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const _M = /* @__PURE__ */ cM(DM);
function wo(...v) {
  return _M(q_(v));
}
function an() {
  return an = Object.assign ? Object.assign.bind() : function(v) {
    for (var C = 1; C < arguments.length; C++) {
      var g = arguments[C];
      for (var x in g)
        Object.prototype.hasOwnProperty.call(g, x) && (v[x] = g[x]);
    }
    return v;
  }, an.apply(this, arguments);
}
var KS = { exports: {} }, Ea = {}, oy = { exports: {} }, BS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xb;
function MM() {
  return Xb || (Xb = 1, function(v) {
    function C(re, Re) {
      var fe = re.length;
      re.push(Re);
      e:
        for (; 0 < fe; ) {
          var ot = fe - 1 >>> 1, ft = re[ot];
          if (0 < R(ft, Re))
            re[ot] = Re, re[fe] = ft, fe = ot;
          else
            break e;
        }
    }
    function g(re) {
      return re.length === 0 ? null : re[0];
    }
    function x(re) {
      if (re.length === 0)
        return null;
      var Re = re[0], fe = re.pop();
      if (fe !== Re) {
        re[0] = fe;
        e:
          for (var ot = 0, ft = re.length, zn = ft >>> 1; ot < zn; ) {
            var or = 2 * (ot + 1) - 1, Ba = re[or], pn = or + 1, Zr = re[pn];
            if (0 > R(Ba, fe))
              pn < ft && 0 > R(Zr, Ba) ? (re[ot] = Zr, re[pn] = fe, ot = pn) : (re[ot] = Ba, re[or] = fe, ot = or);
            else if (pn < ft && 0 > R(Zr, fe))
              re[ot] = Zr, re[pn] = fe, ot = pn;
            else
              break e;
          }
      }
      return Re;
    }
    function R(re, Re) {
      var fe = re.sortIndex - Re.sortIndex;
      return fe !== 0 ? fe : re.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var k = performance;
      v.unstable_now = function() {
        return k.now();
      };
    } else {
      var y = Date, P = y.now();
      v.unstable_now = function() {
        return y.now() - P;
      };
    }
    var O = [], H = [], V = 1, j = null, W = 3, G = !1, ee = !1, ne = !1, ae = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(re) {
      for (var Re = g(H); Re !== null; ) {
        if (Re.callback === null)
          x(H);
        else if (Re.startTime <= re)
          x(H), Re.sortIndex = Re.expirationTime, C(O, Re);
        else
          break;
        Re = g(H);
      }
    }
    function he(re) {
      if (ne = !1, ie(re), !ee)
        if (g(O) !== null)
          ee = !0, Et(oe);
        else {
          var Re = g(H);
          Re !== null && bn(he, Re.startTime - re);
        }
    }
    function oe(re, Re) {
      ee = !1, ne && (ne = !1, Me(Ve), Ve = -1), G = !0;
      var fe = W;
      try {
        for (ie(Re), j = g(O); j !== null && (!(j.expirationTime > Re) || re && !nt()); ) {
          var ot = j.callback;
          if (typeof ot == "function") {
            j.callback = null, W = j.priorityLevel;
            var ft = ot(j.expirationTime <= Re);
            Re = v.unstable_now(), typeof ft == "function" ? j.callback = ft : j === g(O) && x(O), ie(Re);
          } else
            x(O);
          j = g(O);
        }
        if (j !== null)
          var zn = !0;
        else {
          var or = g(H);
          or !== null && bn(he, or.startTime - Re), zn = !1;
        }
        return zn;
      } finally {
        j = null, W = fe, G = !1;
      }
    }
    var Fe = !1, De = null, Ve = -1, je = 5, lt = -1;
    function nt() {
      return !(v.unstable_now() - lt < je);
    }
    function Ke() {
      if (De !== null) {
        var re = v.unstable_now();
        lt = re;
        var Re = !0;
        try {
          Re = De(!0, re);
        } finally {
          Re ? Be() : (Fe = !1, De = null);
        }
      } else
        Fe = !1;
    }
    var Be;
    if (typeof be == "function")
      Be = function() {
        be(Ke);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), Jt = et.port2;
      et.port1.onmessage = Ke, Be = function() {
        Jt.postMessage(null);
      };
    } else
      Be = function() {
        ae(Ke, 0);
      };
    function Et(re) {
      De = re, Fe || (Fe = !0, Be());
    }
    function bn(re, Re) {
      Ve = ae(function() {
        re(v.unstable_now());
      }, Re);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, v.unstable_continueExecution = function() {
      ee || G || (ee = !0, Et(oe));
    }, v.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : je = 0 < re ? Math.floor(1e3 / re) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, v.unstable_getFirstCallbackNode = function() {
      return g(O);
    }, v.unstable_next = function(re) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = W;
      }
      var fe = W;
      W = Re;
      try {
        return re();
      } finally {
        W = fe;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(re, Re) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var fe = W;
      W = re;
      try {
        return Re();
      } finally {
        W = fe;
      }
    }, v.unstable_scheduleCallback = function(re, Re, fe) {
      var ot = v.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? ot + fe : ot) : fe = ot, re) {
        case 1:
          var ft = -1;
          break;
        case 2:
          ft = 250;
          break;
        case 5:
          ft = 1073741823;
          break;
        case 4:
          ft = 1e4;
          break;
        default:
          ft = 5e3;
      }
      return ft = fe + ft, re = { id: V++, callback: Re, priorityLevel: re, startTime: fe, expirationTime: ft, sortIndex: -1 }, fe > ot ? (re.sortIndex = fe, C(H, re), g(O) === null && re === g(H) && (ne ? (Me(Ve), Ve = -1) : ne = !0, bn(he, fe - ot))) : (re.sortIndex = ft, C(O, re), ee || G || (ee = !0, Et(oe))), re;
    }, v.unstable_shouldYield = nt, v.unstable_wrapCallback = function(re) {
      var Re = W;
      return function() {
        var fe = W;
        W = Re;
        try {
          return re.apply(this, arguments);
        } finally {
          W = fe;
        }
      };
    };
  }(BS)), BS;
}
var IS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb;
function NM() {
  return qb || (qb = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = !1, g = !1, x = 5;
      function R(se, Ne) {
        var rt = se.length;
        se.push(Ne), P(se, Ne, rt);
      }
      function k(se) {
        return se.length === 0 ? null : se[0];
      }
      function y(se) {
        if (se.length === 0)
          return null;
        var Ne = se[0], rt = se.pop();
        return rt !== Ne && (se[0] = rt, O(se, rt, 0)), Ne;
      }
      function P(se, Ne, rt) {
        for (var Tt = rt; Tt > 0; ) {
          var It = Tt - 1 >>> 1, Tn = se[It];
          if (H(Tn, Ne) > 0)
            se[It] = Ne, se[Tt] = Tn, Tt = It;
          else
            return;
        }
      }
      function O(se, Ne, rt) {
        for (var Tt = rt, It = se.length, Tn = It >>> 1; Tt < Tn; ) {
          var en = (Tt + 1) * 2 - 1, Cr = se[en], Lt = en + 1, Fr = se[Lt];
          if (H(Cr, Ne) < 0)
            Lt < It && H(Fr, Cr) < 0 ? (se[Tt] = Fr, se[Lt] = Ne, Tt = Lt) : (se[Tt] = Cr, se[en] = Ne, Tt = en);
          else if (Lt < It && H(Fr, Ne) < 0)
            se[Tt] = Fr, se[Lt] = Ne, Tt = Lt;
          else
            return;
        }
      }
      function H(se, Ne) {
        var rt = se.sortIndex - Ne.sortIndex;
        return rt !== 0 ? rt : se.id - Ne.id;
      }
      var V = 1, j = 2, W = 3, G = 4, ee = 5;
      function ne(se, Ne) {
      }
      var ae = typeof performance == "object" && typeof performance.now == "function";
      if (ae) {
        var Me = performance;
        v.unstable_now = function() {
          return Me.now();
        };
      } else {
        var be = Date, ie = be.now();
        v.unstable_now = function() {
          return be.now() - ie;
        };
      }
      var he = 1073741823, oe = -1, Fe = 250, De = 5e3, Ve = 1e4, je = he, lt = [], nt = [], Ke = 1, Be = null, et = W, Jt = !1, Et = !1, bn = !1, re = typeof setTimeout == "function" ? setTimeout : null, Re = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ot(se) {
        for (var Ne = k(nt); Ne !== null; ) {
          if (Ne.callback === null)
            y(nt);
          else if (Ne.startTime <= se)
            y(nt), Ne.sortIndex = Ne.expirationTime, R(lt, Ne);
          else
            return;
          Ne = k(nt);
        }
      }
      function ft(se) {
        if (bn = !1, ot(se), !Et)
          if (k(lt) !== null)
            Et = !0, Da(zn);
          else {
            var Ne = k(nt);
            Ne !== null && on(ft, Ne.startTime - se);
          }
      }
      function zn(se, Ne) {
        Et = !1, bn && (bn = !1, $r()), Jt = !0;
        var rt = et;
        try {
          var Tt;
          if (!g)
            return or(se, Ne);
        } finally {
          Be = null, et = rt, Jt = !1;
        }
      }
      function or(se, Ne) {
        var rt = Ne;
        for (ot(rt), Be = k(lt); Be !== null && !C && !(Be.expirationTime > rt && (!se || Ra())); ) {
          var Tt = Be.callback;
          if (typeof Tt == "function") {
            Be.callback = null, et = Be.priorityLevel;
            var It = Be.expirationTime <= rt, Tn = Tt(It);
            rt = v.unstable_now(), typeof Tn == "function" ? Be.callback = Tn : Be === k(lt) && y(lt), ot(rt);
          } else
            y(lt);
          Be = k(lt);
        }
        if (Be !== null)
          return !0;
        var en = k(nt);
        return en !== null && on(ft, en.startTime - rt), !1;
      }
      function Ba(se, Ne) {
        switch (se) {
          case V:
          case j:
          case W:
          case G:
          case ee:
            break;
          default:
            se = W;
        }
        var rt = et;
        et = se;
        try {
          return Ne();
        } finally {
          et = rt;
        }
      }
      function pn(se) {
        var Ne;
        switch (et) {
          case V:
          case j:
          case W:
            Ne = W;
            break;
          default:
            Ne = et;
            break;
        }
        var rt = et;
        et = Ne;
        try {
          return se();
        } finally {
          et = rt;
        }
      }
      function Zr(se) {
        var Ne = et;
        return function() {
          var rt = et;
          et = Ne;
          try {
            return se.apply(this, arguments);
          } finally {
            et = rt;
          }
        };
      }
      function Qn(se, Ne, rt) {
        var Tt = v.unstable_now(), It;
        if (typeof rt == "object" && rt !== null) {
          var Tn = rt.delay;
          typeof Tn == "number" && Tn > 0 ? It = Tt + Tn : It = Tt;
        } else
          It = Tt;
        var en;
        switch (se) {
          case V:
            en = oe;
            break;
          case j:
            en = Fe;
            break;
          case ee:
            en = je;
            break;
          case G:
            en = Ve;
            break;
          case W:
          default:
            en = De;
            break;
        }
        var Cr = It + en, Lt = {
          id: Ke++,
          callback: Ne,
          priorityLevel: se,
          startTime: It,
          expirationTime: Cr,
          sortIndex: -1
        };
        return It > Tt ? (Lt.sortIndex = It, R(nt, Lt), k(lt) === null && Lt === k(nt) && (bn ? $r() : bn = !0, on(ft, It - Tt))) : (Lt.sortIndex = Cr, R(lt, Lt), !Et && !Jt && (Et = !0, Da(zn))), Lt;
      }
      function gr() {
      }
      function Ia() {
        !Et && !Jt && (Et = !0, Da(zn));
      }
      function Sr() {
        return k(lt);
      }
      function Jr(se) {
        se.callback = null;
      }
      function xn() {
        return et;
      }
      var Wn = !1, An = null, Kn = -1, Xn = x, ea = -1;
      function Ra() {
        var se = v.unstable_now() - ea;
        return !(se < Xn);
      }
      function si() {
      }
      function Ya(se) {
        if (se < 0 || se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        se > 0 ? Xn = Math.floor(1e3 / se) : Xn = x;
      }
      var ka = function() {
        if (An !== null) {
          var se = v.unstable_now();
          ea = se;
          var Ne = !0, rt = !0;
          try {
            rt = An(Ne, se);
          } finally {
            rt ? Ar() : (Wn = !1, An = null);
          }
        } else
          Wn = !1;
      }, Ar;
      if (typeof fe == "function")
        Ar = function() {
          fe(ka);
        };
      else if (typeof MessageChannel < "u") {
        var Ga = new MessageChannel(), Ur = Ga.port2;
        Ga.port1.onmessage = ka, Ar = function() {
          Ur.postMessage(null);
        };
      } else
        Ar = function() {
          re(ka, 0);
        };
      function Da(se) {
        An = se, Wn || (Wn = !0, Ar());
      }
      function on(se, Ne) {
        Kn = re(function() {
          se(v.unstable_now());
        }, Ne);
      }
      function $r() {
        Re(Kn), Kn = -1;
      }
      var ji = si, _a = null;
      v.unstable_IdlePriority = ee, v.unstable_ImmediatePriority = V, v.unstable_LowPriority = G, v.unstable_NormalPriority = W, v.unstable_Profiling = _a, v.unstable_UserBlockingPriority = j, v.unstable_cancelCallback = Jr, v.unstable_continueExecution = Ia, v.unstable_forceFrameRate = Ya, v.unstable_getCurrentPriorityLevel = xn, v.unstable_getFirstCallbackNode = Sr, v.unstable_next = pn, v.unstable_pauseExecution = gr, v.unstable_requestPaint = ji, v.unstable_runWithPriority = Ba, v.unstable_scheduleCallback = Qn, v.unstable_shouldYield = Ra, v.unstable_wrapCallback = Zr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(IS)), IS;
}
var Zb;
function hx() {
  return Zb || (Zb = 1, process.env.NODE_ENV === "production" ? oy.exports = MM() : oy.exports = NM()), oy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb;
function OM() {
  if (Jb)
    return Ea;
  Jb = 1;
  var v = xa, C = hx();
  function g(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = /* @__PURE__ */ new Set(), R = {};
  function k(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (R[n] = r, n = 0; n < r.length; n++)
      x.add(r[n]);
  }
  var P = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, H = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, V = {}, j = {};
  function W(n) {
    return O.call(j, n) ? !0 : O.call(V, n) ? !1 : H.test(n) ? j[n] = !0 : (V[n] = !0, !1);
  }
  function G(n, r, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ee(n, r, o, u) {
    if (r === null || typeof r > "u" || G(n, r, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function ne(n, r, o, u, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ae = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ae[n] = new ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ae[r] = new ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ae[n] = new ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ae[n] = new ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ae[n] = new ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ae[n] = new ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ae[n] = new ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ae[n] = new ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ae[n] = new ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Me = /[\-:]([a-z])/g;
  function be(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Me,
      be
    );
    ae[r] = new ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Me, be);
    ae[r] = new ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Me, be);
    ae[r] = new ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ae[n] = new ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ae.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ae[n] = new ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ie(n, r, o, u) {
    var c = ae.hasOwnProperty(r) ? ae[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, o, c, u) && (o = null), u || c === null ? W(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var he = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, oe = Symbol.for("react.element"), Fe = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), nt = Symbol.for("react.context"), Ke = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), Jt = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), bn = Symbol.for("react.offscreen"), re = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var fe = Object.assign, ot;
  function ft(n) {
    if (ot === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        ot = r && r[1] || "";
      }
    return `
` + ot + n;
  }
  var zn = !1;
  function or(n, r) {
    if (!n || zn)
      return "";
    zn = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (F) {
            var u = F;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (F) {
            u = F;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          u = F;
        }
        n();
      }
    } catch (F) {
      if (F && u && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = u.stack.split(`
`), m = c.length - 1, b = d.length - 1; 1 <= m && 0 <= b && c[m] !== d[b]; )
          b--;
        for (; 1 <= m && 0 <= b; m--, b--)
          if (c[m] !== d[b]) {
            if (m !== 1 || b !== 1)
              do
                if (m--, b--, 0 > b || c[m] !== d[b]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= b);
            break;
          }
      }
    } finally {
      zn = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ft(n) : "";
  }
  function Ba(n) {
    switch (n.tag) {
      case 5:
        return ft(n.type);
      case 16:
        return ft("Lazy");
      case 13:
        return ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = or(n.type, !1), n;
      case 11:
        return n = or(n.type.render, !1), n;
      case 1:
        return n = or(n.type, !0), n;
      default:
        return "";
    }
  }
  function pn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case De:
        return "Fragment";
      case Fe:
        return "Portal";
      case je:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case Be:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case nt:
          return (n.displayName || "Context") + ".Consumer";
        case lt:
          return (n._context.displayName || "Context") + ".Provider";
        case Ke:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Jt:
          return r = n.displayName || null, r !== null ? r : pn(n.type) || "Memo";
        case Et:
          r = n._payload, n = n._init;
          try {
            return pn(n(r));
          } catch {
          }
      }
    return null;
  }
  function Zr(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pn(r);
      case 8:
        return r === Ve ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Qn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function gr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ia(n) {
    var r = gr(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, d = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        u = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(m) {
        u = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Sr(n) {
    n._valueTracker || (n._valueTracker = Ia(n));
  }
  function Jr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = gr(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function xn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Wn(n, r) {
    var o = r.checked;
    return fe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function An(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Qn(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Kn(n, r) {
    r = r.checked, r != null && ie(n, "checked", r, !1);
  }
  function Xn(n, r) {
    Kn(n, r);
    var o = Qn(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ra(n, r.type, o) : r.hasOwnProperty("defaultValue") && Ra(n, r.type, Qn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ea(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Ra(n, r, o) {
    (r !== "number" || xn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var si = Array.isArray;
  function Ya(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++)
        r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++)
        c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Qn(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ka(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(g(91));
    return fe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ar(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(g(92));
        if (si(o)) {
          if (1 < o.length)
            throw Error(g(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Qn(o) };
  }
  function Ga(n, r) {
    var o = Qn(r.value), u = Qn(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Ur(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Da(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function on(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Da(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $r, ji = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $r.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function _a(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var se = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(se).forEach(function(n) {
    Ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), se[r] = se[n];
    });
  });
  function rt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || se.hasOwnProperty(n) && se[n] ? ("" + r).trim() : r + "px";
  }
  function Tt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, c = rt(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
      }
  }
  var It = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Tn(n, r) {
    if (r) {
      if (It[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(g(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(g(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(g(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(g(62));
    }
  }
  function en(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Cr = null;
  function Lt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Fr = null, _t = null, zt = null;
  function El(n) {
    if (n = Qu(n)) {
      if (typeof Fr != "function")
        throw Error(g(280));
      var r = n.stateNode;
      r && (r = Oe(r), Fr(n.stateNode, n.type, r));
    }
  }
  function ko(n) {
    _t ? zt ? zt.push(n) : zt = [n] : _t = n;
  }
  function bl() {
    if (_t) {
      var n = _t, r = zt;
      if (zt = _t = null, El(n), r)
        for (n = 0; n < r.length; n++)
          El(r[n]);
    }
  }
  function wu(n, r) {
    return n(r);
  }
  function Us() {
  }
  var Do = !1;
  function xl(n, r, o) {
    if (Do)
      return n(r, o);
    Do = !0;
    try {
      return wu(n, r, o);
    } finally {
      Do = !1, (_t !== null || zt !== null) && (Us(), bl());
    }
  }
  function _o(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = Oe(o);
    if (u === null)
      return null;
    o = u[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(g(231, r, typeof o));
    return o;
  }
  var Tl = !1;
  if (P)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", { get: function() {
        Tl = !0;
      } }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      Tl = !1;
    }
  function Hi(n, r, o, u, c, d, m, b, w) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, F);
    } catch (X) {
      this.onError(X);
    }
  }
  var jr = !1, Ma = null, Pi = !1, T = null, q = { onError: function(n) {
    jr = !0, Ma = n;
  } };
  function ce(n, r, o, u, c, d, m, b, w) {
    jr = !1, Ma = null, Hi.apply(q, arguments);
  }
  function ze(n, r, o, u, c, d, m, b, w) {
    if (ce.apply(this, arguments), jr) {
      if (jr) {
        var F = Ma;
        jr = !1, Ma = null;
      } else
        throw Error(g(198));
      Pi || (Pi = !0, T = F);
    }
  }
  function Je(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function tt(n) {
    if (Je(n) !== n)
      throw Error(g(188));
  }
  function Ue(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Je(n), r === null)
        throw Error(g(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === o)
            return tt(c), n;
          if (d === u)
            return tt(c), r;
          d = d.sibling;
        }
        throw Error(g(188));
      }
      if (o.return !== u.return)
        o = c, u = d;
      else {
        for (var m = !1, b = c.child; b; ) {
          if (b === o) {
            m = !0, o = c, u = d;
            break;
          }
          if (b === u) {
            m = !0, u = c, o = d;
            break;
          }
          b = b.sibling;
        }
        if (!m) {
          for (b = d.child; b; ) {
            if (b === o) {
              m = !0, o = d, u = c;
              break;
            }
            if (b === u) {
              m = !0, u = d, o = c;
              break;
            }
            b = b.sibling;
          }
          if (!m)
            throw Error(g(189));
        }
      }
      if (o.alternate !== u)
        throw Error(g(190));
    }
    if (o.tag !== 3)
      throw Error(g(188));
    return o.stateNode.current === o ? n : r;
  }
  function wn(n) {
    return n = Ue(n), n !== null ? Ht(n) : null;
  }
  function Ht(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Ht(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Pt = C.unstable_scheduleCallback, lr = C.unstable_cancelCallback, Vi = C.unstable_shouldYield, $s = C.unstable_requestPaint, yt = C.unstable_now, dy = C.unstable_getCurrentPriorityLevel, ci = C.unstable_ImmediatePriority, ut = C.unstable_UserBlockingPriority, Bi = C.unstable_NormalPriority, ov = C.unstable_LowPriority, Af = C.unstable_IdlePriority, Ru = null, Na = null;
  function lv(n) {
    if (Na && typeof Na.onCommitFiberRoot == "function")
      try {
        Na.onCommitFiberRoot(Ru, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ta = Math.clz32 ? Math.clz32 : py, uv = Math.log, sv = Math.LN2;
  function py(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (uv(n) / sv | 0) | 0;
  }
  var Fs = 64, wl = 4194304;
  function Mo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Oa(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, m = o & 268435455;
    if (m !== 0) {
      var b = m & ~c;
      b !== 0 ? u = Mo(b) : (d &= m, d !== 0 && (u = Mo(d)));
    } else
      m = o & ~c, m !== 0 ? u = Mo(m) : d !== 0 && (u = Mo(d));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - ta(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function Uf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function js(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - ta(d), b = 1 << m, w = c[m];
      w === -1 ? (!(b & o) || b & u) && (c[m] = Uf(b, r)) : w <= r && (n.expiredLanes |= b), d &= ~b;
    }
  }
  function $f(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Hs() {
    var n = Fs;
    return Fs <<= 1, !(Fs & 4194240) && (Fs = 64), n;
  }
  function Ff(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function No(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ta(r), n[r] = o;
  }
  function vy(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - ta(o), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~d;
    }
  }
  function ku(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - ta(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var wt = 0;
  function jf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cv, Ps, Mt, fv, Hf, Xe = !1, Du = [], ln = null, na = null, ra = null, _u = /* @__PURE__ */ new Map(), vn = /* @__PURE__ */ new Map(), Rt = [], hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function La(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ln = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        _u.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vn.delete(r.pointerId);
    }
  }
  function qn(n, r, o, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Qu(r), r !== null && Ps(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ii(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return ln = qn(ln, n, r, o, u, c), !0;
      case "dragenter":
        return na = qn(na, n, r, o, u, c), !0;
      case "mouseover":
        return ra = qn(ra, n, r, o, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return _u.set(d, qn(_u.get(d) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, vn.set(d, qn(vn.get(d) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function dv(n) {
    var r = ia(n.target);
    if (r !== null) {
      var o = Je(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = ht(o), r !== null) {
            n.blockedOn = r, Hf(n.priority, function() {
              Mt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Rl(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Is(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        Cr = u, o.target.dispatchEvent(u), Cr = null;
      } else
        return r = Qu(o), r !== null && Ps(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Pf(n, r, o) {
    Rl(n) && o.delete(r);
  }
  function pv() {
    Xe = !1, ln !== null && Rl(ln) && (ln = null), na !== null && Rl(na) && (na = null), ra !== null && Rl(ra) && (ra = null), _u.forEach(Pf), vn.forEach(Pf);
  }
  function Mu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xe || (Xe = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, pv)));
  }
  function Nu(n) {
    function r(c) {
      return Mu(c, n);
    }
    if (0 < Du.length) {
      Mu(Du[0], n);
      for (var o = 1; o < Du.length; o++) {
        var u = Du[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (ln !== null && Mu(ln, n), na !== null && Mu(na, n), ra !== null && Mu(ra, n), _u.forEach(r), vn.forEach(r), o = 0; o < Rt.length; o++)
      u = Rt[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Rt.length && (o = Rt[0], o.blockedOn === null); )
      dv(o), o.blockedOn === null && Rt.shift();
  }
  var kl = he.ReactCurrentBatchConfig, Oo = !0;
  function vv(n, r, o, u) {
    var c = wt, d = kl.transition;
    kl.transition = null;
    try {
      wt = 1, Bs(n, r, o, u);
    } finally {
      wt = c, kl.transition = d;
    }
  }
  function Vs(n, r, o, u) {
    var c = wt, d = kl.transition;
    kl.transition = null;
    try {
      wt = 4, Bs(n, r, o, u);
    } finally {
      wt = c, kl.transition = d;
    }
  }
  function Bs(n, r, o, u) {
    if (Oo) {
      var c = Is(n, r, o, u);
      if (c === null)
        nc(n, r, u, Ou, o), La(n, u);
      else if (Ii(c, n, r, o, u))
        u.stopPropagation();
      else if (La(n, u), r & 4 && -1 < hy.indexOf(n)) {
        for (; c !== null; ) {
          var d = Qu(c);
          if (d !== null && cv(d), d = Is(n, r, o, u), d === null && nc(n, r, u, Ou, o), d === c)
            break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else
        nc(n, r, u, null, o);
    }
  }
  var Ou = null;
  function Is(n, r, o, u) {
    if (Ou = null, n = Lt(u), n = ia(n), n !== null)
      if (r = Je(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = ht(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Ou = n, null;
  }
  function Vf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dy()) {
          case ci:
            return 1;
          case ut:
            return 4;
          case Bi:
          case ov:
            return 16;
          case Af:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fi = null, Lu = null, zu = null;
  function Bf() {
    if (zu)
      return zu;
    var n, r = Lu, o = r.length, u, c = "value" in fi ? fi.value : fi.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++)
      ;
    var m = o - n;
    for (u = 1; u <= m && r[o - u] === c[d - u]; u++)
      ;
    return zu = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Dl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Au() {
    return !0;
  }
  function hv() {
    return !1;
  }
  function Hr(n) {
    function r(o, u, c, d, m) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var b in n)
        n.hasOwnProperty(b) && (o = n[b], this[b] = o ? o(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Au : hv, this.isPropagationStopped = hv, this;
    }
    return fe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Au);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Au);
    }, persist: function() {
    }, isPersistent: Au }), r;
  }
  var Yi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ys = Hr(Yi), _l = fe({}, Yi, { view: 0, detail: 0 }), mv = Hr(_l), Gs, If, Uu, Rn = fe({}, _l, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Uu && (Uu && n.type === "mousemove" ? (Gs = n.screenX - Uu.screenX, If = n.screenY - Uu.screenY) : If = Gs = 0, Uu = n), Gs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : If;
  } }), Qs = Hr(Rn), yv = fe({}, Rn, { dataTransfer: 0 }), gv = Hr(yv), my = fe({}, _l, { relatedTarget: 0 }), Gi = Hr(my), Yf = fe({}, Yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sv = Hr(Yf), yy = fe({}, Yi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), gy = Hr(yy), Sy = fe({}, Yi, { data: 0 }), Gf = Hr(Sy), Qf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Cv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ev = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function bv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ev[n]) ? !!r[n] : !1;
  }
  function Wf() {
    return bv;
  }
  var di = fe({}, _l, { key: function(n) {
    if (n.key) {
      var r = Qf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Dl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wf, charCode: function(n) {
    return n.type === "keypress" ? Dl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Dl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Cy = Hr(di), Kf = fe({}, Rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ws = Hr(Kf), Xf = fe({}, _l, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wf }), Ey = Hr(Xf), Ks = fe({}, Yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xv = Hr(Ks), Er = fe({}, Rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pi = Hr(Er), un = [9, 13, 27, 32], za = P && "CompositionEvent" in window, Lo = null;
  P && "documentMode" in document && (Lo = document.documentMode);
  var Xs = P && "TextEvent" in window && !Lo, Tv = P && (!za || Lo && 8 < Lo && 11 >= Lo), Ml = " ", wv = !1;
  function Rv(n, r) {
    switch (n) {
      case "keyup":
        return un.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Nl = !1;
  function by(n, r) {
    switch (n) {
      case "compositionend":
        return qs(r);
      case "keypress":
        return r.which !== 32 ? null : (wv = !0, Ml);
      case "textInput":
        return n = r.data, n === Ml && wv ? null : n;
      default:
        return null;
    }
  }
  function xy(n, r) {
    if (Nl)
      return n === "compositionend" || !za && Rv(n, r) ? (n = Bf(), zu = Lu = fi = null, Nl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Tv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var kv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Dv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!kv[n.type] : r === "textarea";
  }
  function _v(n, r, o, u) {
    ko(u), r = Iu(r, "onChange"), 0 < r.length && (o = new Ys("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var $u = null, Ol = null;
  function Ll(n) {
    tc(n, 0);
  }
  function zl(n) {
    var r = Ul(n);
    if (Jr(r))
      return n;
  }
  function Mv(n, r) {
    if (n === "change")
      return r;
  }
  var qf = !1;
  if (P) {
    var Zf;
    if (P) {
      var Jf = "oninput" in document;
      if (!Jf) {
        var Nv = document.createElement("div");
        Nv.setAttribute("oninput", "return;"), Jf = typeof Nv.oninput == "function";
      }
      Zf = Jf;
    } else
      Zf = !1;
    qf = Zf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ov() {
    $u && ($u.detachEvent("onpropertychange", Lv), Ol = $u = null);
  }
  function Lv(n) {
    if (n.propertyName === "value" && zl(Ol)) {
      var r = [];
      _v(r, Ol, n, Lt(n)), xl(Ll, r);
    }
  }
  function Ty(n, r, o) {
    n === "focusin" ? (Ov(), $u = r, Ol = o, $u.attachEvent("onpropertychange", Lv)) : n === "focusout" && Ov();
  }
  function wy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return zl(Ol);
  }
  function Ry(n, r) {
    if (n === "click")
      return zl(r);
  }
  function zv(n, r) {
    if (n === "input" || n === "change")
      return zl(r);
  }
  function ky(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var aa = typeof Object.is == "function" ? Object.is : ky;
  function Fu(n, r) {
    if (aa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!O.call(r, c) || !aa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Av(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Uv(n, r) {
    var o = Av(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Av(o);
    }
  }
  function $v(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? $v(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Zs() {
    for (var n = window, r = xn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = xn(n.document);
    }
    return r;
  }
  function vi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Js(n) {
    var r = Zs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && $v(o.ownerDocument.documentElement, o)) {
      if (u !== null && vi(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Uv(o, d);
          var m = Uv(
            o,
            u
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Fv = P && "documentMode" in document && 11 >= document.documentMode, Aa = null, ed = null, ju = null, td = !1;
  function jv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    td || Aa == null || Aa !== xn(u) || (u = Aa, "selectionStart" in u && vi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ju && Fu(ju, u) || (ju = u, u = Iu(ed, "onSelect"), 0 < u.length && (r = new Ys("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Aa)));
  }
  function ec(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var zo = { animationend: ec("Animation", "AnimationEnd"), animationiteration: ec("Animation", "AnimationIteration"), animationstart: ec("Animation", "AnimationStart"), transitionend: ec("Transition", "TransitionEnd") }, nd = {}, rd = {};
  P && (rd = document.createElement("div").style, "AnimationEvent" in window || (delete zo.animationend.animation, delete zo.animationiteration.animation, delete zo.animationstart.animation), "TransitionEvent" in window || delete zo.transitionend.transition);
  function kn(n) {
    if (nd[n])
      return nd[n];
    if (!zo[n])
      return n;
    var r = zo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in rd)
        return nd[n] = r[o];
    return n;
  }
  var ad = kn("animationend"), Hv = kn("animationiteration"), Pv = kn("animationstart"), Vv = kn("transitionend"), Bv = /* @__PURE__ */ new Map(), Iv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hi(n, r) {
    Bv.set(n, r), k(r, [n]);
  }
  for (var Hu = 0; Hu < Iv.length; Hu++) {
    var Ao = Iv[Hu], Dy = Ao.toLowerCase(), Pu = Ao[0].toUpperCase() + Ao.slice(1);
    hi(Dy, "on" + Pu);
  }
  hi(ad, "onAnimationEnd"), hi(Hv, "onAnimationIteration"), hi(Pv, "onAnimationStart"), hi("dblclick", "onDoubleClick"), hi("focusin", "onFocus"), hi("focusout", "onBlur"), hi(Vv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), k("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), k("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), k("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _y = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vu));
  function Yv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, ze(u, r, void 0, n), n.currentTarget = null;
  }
  function tc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = u.length - 1; 0 <= m; m--) {
            var b = u[m], w = b.instance, F = b.currentTarget;
            if (b = b.listener, w !== d && c.isPropagationStopped())
              break e;
            Yv(c, b, F), d = w;
          }
        else
          for (m = 0; m < u.length; m++) {
            if (b = u[m], w = b.instance, F = b.currentTarget, b = b.listener, w !== d && c.isPropagationStopped())
              break e;
            Yv(c, b, F), d = w;
          }
      }
    }
    if (Pi)
      throw n = T, Pi = !1, T = null, n;
  }
  function Nt(n, r) {
    var o = r[fd];
    o === void 0 && (o = r[fd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Gv(r, n, 2, !1), o.add(u));
  }
  function Qi(n, r, o) {
    var u = 0;
    r && (u |= 4), Gv(o, n, u, r);
  }
  var mi = "_reactListening" + Math.random().toString(36).slice(2);
  function Al(n) {
    if (!n[mi]) {
      n[mi] = !0, x.forEach(function(o) {
        o !== "selectionchange" && (_y.has(o) || Qi(o, !1, n), Qi(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[mi] || (r[mi] = !0, Qi("selectionchange", !1, r));
    }
  }
  function Gv(n, r, o, u) {
    switch (Vf(r)) {
      case 1:
        var c = vv;
        break;
      case 4:
        c = Vs;
        break;
      default:
        c = Bs;
    }
    o = c.bind(null, r, o, n), c = void 0, !Tl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function nc(n, r, o, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var m = u.tag;
          if (m === 3 || m === 4) {
            var b = u.stateNode.containerInfo;
            if (b === c || b.nodeType === 8 && b.parentNode === c)
              break;
            if (m === 4)
              for (m = u.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; b !== null; ) {
              if (m = ia(b), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                u = d = m;
                continue e;
              }
              b = b.parentNode;
            }
          }
          u = u.return;
        }
    xl(function() {
      var F = d, X = Lt(o), Z = [];
      e: {
        var K = Bv.get(n);
        if (K !== void 0) {
          var pe = Ys, Se = n;
          switch (n) {
            case "keypress":
              if (Dl(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              pe = Cy;
              break;
            case "focusin":
              Se = "focus", pe = Gi;
              break;
            case "focusout":
              Se = "blur", pe = Gi;
              break;
            case "beforeblur":
            case "afterblur":
              pe = Gi;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = Qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = Ey;
              break;
            case ad:
            case Hv:
            case Pv:
              pe = Sv;
              break;
            case Vv:
              pe = xv;
              break;
            case "scroll":
              pe = mv;
              break;
            case "wheel":
              pe = pi;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = gy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = Ws;
          }
          var xe = (r & 4) !== 0, nn = !xe && n === "scroll", N = xe ? K !== null ? K + "Capture" : null : K;
          xe = [];
          for (var _ = F, A; _ !== null; ) {
            A = _;
            var te = A.stateNode;
            if (A.tag === 5 && te !== null && (A = te, N !== null && (te = _o(_, N), te != null && xe.push(Bu(_, te, A)))), nn)
              break;
            _ = _.return;
          }
          0 < xe.length && (K = new pe(K, Se, null, o, X), Z.push({ event: K, listeners: xe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", K && o !== Cr && (Se = o.relatedTarget || o.fromElement) && (ia(Se) || Se[yi]))
            break e;
          if ((pe || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, pe ? (Se = o.relatedTarget || o.toElement, pe = F, Se = Se ? ia(Se) : null, Se !== null && (nn = Je(Se), Se !== nn || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (pe = null, Se = F), pe !== Se)) {
            if (xe = Qs, te = "onMouseLeave", N = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (xe = Ws, te = "onPointerLeave", N = "onPointerEnter", _ = "pointer"), nn = pe == null ? K : Ul(pe), A = Se == null ? K : Ul(Se), K = new xe(te, _ + "leave", pe, o, X), K.target = nn, K.relatedTarget = A, te = null, ia(X) === F && (xe = new xe(N, _ + "enter", Se, o, X), xe.target = A, xe.relatedTarget = nn, te = xe), nn = te, pe && Se)
              t: {
                for (xe = pe, N = Se, _ = 0, A = xe; A; A = Uo(A))
                  _++;
                for (A = 0, te = N; te; te = Uo(te))
                  A++;
                for (; 0 < _ - A; )
                  xe = Uo(xe), _--;
                for (; 0 < A - _; )
                  N = Uo(N), A--;
                for (; _--; ) {
                  if (xe === N || N !== null && xe === N.alternate)
                    break t;
                  xe = Uo(xe), N = Uo(N);
                }
                xe = null;
              }
            else
              xe = null;
            pe !== null && id(Z, K, pe, xe, !1), Se !== null && nn !== null && id(Z, nn, Se, xe, !0);
          }
        }
        e: {
          if (K = F ? Ul(F) : window, pe = K.nodeName && K.nodeName.toLowerCase(), pe === "select" || pe === "input" && K.type === "file")
            var we = Mv;
          else if (Dv(K))
            if (qf)
              we = zv;
            else {
              we = wy;
              var Ce = Ty;
            }
          else
            (pe = K.nodeName) && pe.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (we = Ry);
          if (we && (we = we(n, F))) {
            _v(Z, we, o, X);
            break e;
          }
          Ce && Ce(n, K, F), n === "focusout" && (Ce = K._wrapperState) && Ce.controlled && K.type === "number" && Ra(K, "number", K.value);
        }
        switch (Ce = F ? Ul(F) : window, n) {
          case "focusin":
            (Dv(Ce) || Ce.contentEditable === "true") && (Aa = Ce, ed = F, ju = null);
            break;
          case "focusout":
            ju = ed = Aa = null;
            break;
          case "mousedown":
            td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            td = !1, jv(Z, o, X);
            break;
          case "selectionchange":
            if (Fv)
              break;
          case "keydown":
          case "keyup":
            jv(Z, o, X);
        }
        var _e;
        if (za)
          e: {
            switch (n) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          Nl ? Rv(n, o) && (Ye = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Ye = "onCompositionStart");
        Ye && (Tv && o.locale !== "ko" && (Nl || Ye !== "onCompositionStart" ? Ye === "onCompositionEnd" && Nl && (_e = Bf()) : (fi = X, Lu = "value" in fi ? fi.value : fi.textContent, Nl = !0)), Ce = Iu(F, Ye), 0 < Ce.length && (Ye = new Gf(Ye, n, null, o, X), Z.push({ event: Ye, listeners: Ce }), _e ? Ye.data = _e : (_e = qs(o), _e !== null && (Ye.data = _e)))), (_e = Xs ? by(n, o) : xy(n, o)) && (F = Iu(F, "onBeforeInput"), 0 < F.length && (X = new Gf("onBeforeInput", "beforeinput", null, o, X), Z.push({ event: X, listeners: F }), X.data = _e));
      }
      tc(Z, r);
    });
  }
  function Bu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Iu(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _o(n, o), d != null && u.unshift(Bu(n, d, c)), d = _o(n, r), d != null && u.push(Bu(n, d, c))), n = n.return;
    }
    return u;
  }
  function Uo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function id(n, r, o, u, c) {
    for (var d = r._reactName, m = []; o !== null && o !== u; ) {
      var b = o, w = b.alternate, F = b.stateNode;
      if (w !== null && w === u)
        break;
      b.tag === 5 && F !== null && (b = F, c ? (w = _o(o, d), w != null && m.unshift(Bu(o, w, b))) : c || (w = _o(o, d), w != null && m.push(Bu(o, w, b)))), o = o.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var od = /\r\n?/g, My = /\u0000|\uFFFD/g;
  function ld(n) {
    return (typeof n == "string" ? n : "" + n).replace(od, `
`).replace(My, "");
  }
  function rc(n, r, o) {
    if (r = ld(r), ld(n) !== r && o)
      throw Error(g(425));
  }
  function ac() {
  }
  var ud = null, $o = null;
  function Yu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Fo = typeof setTimeout == "function" ? setTimeout : void 0, Qv = typeof clearTimeout == "function" ? clearTimeout : void 0, sd = typeof Promise == "function" ? Promise : void 0, cd = typeof queueMicrotask == "function" ? queueMicrotask : typeof sd < "u" ? function(n) {
    return sd.resolve(null).then(n).catch(Ny);
  } : Fo;
  function Ny(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Wi(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (u === 0) {
            n.removeChild(c), Nu(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    Nu(r);
  }
  function Ua(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Gu(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ki = Math.random().toString(36).slice(2), Wa = "__reactFiber$" + Ki, jo = "__reactProps$" + Ki, yi = "__reactContainer$" + Ki, fd = "__reactEvents$" + Ki, Oy = "__reactListeners$" + Ki, dd = "__reactHandles$" + Ki;
  function ia(n) {
    var r = n[Wa];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[yi] || o[Wa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Gu(n); n !== null; ) {
            if (o = n[Wa])
              return o;
            n = Gu(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Qu(n) {
    return n = n[Wa] || n[yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ul(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(g(33));
  }
  function Oe(n) {
    return n[jo] || null;
  }
  var Xi = [], At = -1;
  function qe(n) {
    return { current: n };
  }
  function Ct(n) {
    0 > At || (n.current = Xi[At], Xi[At] = null, At--);
  }
  function bt(n, r) {
    At++, Xi[At] = n.current, n.current = r;
  }
  var Ka = {}, Ie = qe(Ka), Xt = qe(!1), br = Ka;
  function oa(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Ka;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o)
      c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Vt(n) {
    return n = n.childContextTypes, n != null;
  }
  function la() {
    Ct(Xt), Ct(Ie);
  }
  function qi(n, r, o) {
    if (Ie.current !== Ka)
      throw Error(g(168));
    bt(Ie, r), bt(Xt, o);
  }
  function Wu(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(g(108, Zr(n) || "Unknown", c));
    return fe({}, o, u);
  }
  function ic(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ka, br = Ie.current, bt(Ie, n), bt(Xt, Xt.current), !0;
  }
  function Wv(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(g(169));
    o ? (n = Wu(n, r, br), u.__reactInternalMemoizedMergedChildContext = n, Ct(Xt), Ct(Ie), bt(Ie, n)) : Ct(Xt), bt(Xt, o);
  }
  var Pr = null, Dn = !1, Ku = !1;
  function pd(n) {
    Pr === null ? Pr = [n] : Pr.push(n);
  }
  function vd(n) {
    Dn = !0, pd(n);
  }
  function xr() {
    if (!Ku && Pr !== null) {
      Ku = !0;
      var n = 0, r = wt;
      try {
        var o = Pr;
        for (wt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Pr = null, Dn = !1;
      } catch (c) {
        throw Pr !== null && (Pr = Pr.slice(n + 1)), Pt(ci, xr), c;
      } finally {
        wt = r, Ku = !1;
      }
    }
    return null;
  }
  var Zi = [], Tr = 0, Ho = null, $l = 0, wr = [], Zn = 0, ua = null, Un = 1, gi = "";
  function Vr(n, r) {
    Zi[Tr++] = $l, Zi[Tr++] = Ho, Ho = n, $l = r;
  }
  function hd(n, r, o) {
    wr[Zn++] = Un, wr[Zn++] = gi, wr[Zn++] = ua, ua = n;
    var u = Un;
    n = gi;
    var c = 32 - ta(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - ta(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (u & (1 << m) - 1).toString(32), u >>= m, c -= m, Un = 1 << 32 - ta(r) + c | o << c | u, gi = d + n;
    } else
      Un = 1 << d | o << c | u, gi = n;
  }
  function oc(n) {
    n.return !== null && (Vr(n, 1), hd(n, 1, 0));
  }
  function md(n) {
    for (; n === Ho; )
      Ho = Zi[--Tr], Zi[Tr] = null, $l = Zi[--Tr], Zi[Tr] = null;
    for (; n === ua; )
      ua = wr[--Zn], wr[Zn] = null, gi = wr[--Zn], wr[Zn] = null, Un = wr[--Zn], wr[Zn] = null;
  }
  var Br = null, Rr = null, Ut = !1, sa = null;
  function yd(n, r) {
    var o = ha(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Kv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Br = n, Rr = Ua(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Br = n, Rr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ua !== null ? { id: Un, overflow: gi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ha(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Br = n, Rr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function lc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function uc(n) {
    if (Ut) {
      var r = Rr;
      if (r) {
        var o = r;
        if (!Kv(n, r)) {
          if (lc(n))
            throw Error(g(418));
          r = Ua(o.nextSibling);
          var u = Br;
          r && Kv(n, r) ? yd(u, o) : (n.flags = n.flags & -4097 | 2, Ut = !1, Br = n);
        }
      } else {
        if (lc(n))
          throw Error(g(418));
        n.flags = n.flags & -4097 | 2, Ut = !1, Br = n;
      }
    }
  }
  function Xv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Br = n;
  }
  function sc(n) {
    if (n !== Br)
      return !1;
    if (!Ut)
      return Xv(n), Ut = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Yu(n.type, n.memoizedProps)), r && (r = Rr)) {
      if (lc(n))
        throw qv(), Error(g(418));
      for (; r; )
        yd(n, r), r = Ua(r.nextSibling);
    }
    if (Xv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(g(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Rr = Ua(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Rr = null;
      }
    } else
      Rr = Br ? Ua(n.stateNode.nextSibling) : null;
    return !0;
  }
  function qv() {
    for (var n = Rr; n; )
      n = Ua(n.nextSibling);
  }
  function Yt() {
    Rr = Br = null, Ut = !1;
  }
  function gd(n) {
    sa === null ? sa = [n] : sa.push(n);
  }
  var cc = he.ReactCurrentBatchConfig;
  function Ir(n, r) {
    if (n && n.defaultProps) {
      r = fe({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Xa = qe(null), fc = null, Ji = null, Sd = null;
  function Cd() {
    Sd = Ji = fc = null;
  }
  function eo(n) {
    var r = Xa.current;
    Ct(Xa), n._currentValue = r;
  }
  function _n(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function le(n, r) {
    fc = n, Sd = Ji = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (sn = !0), n.firstContext = null);
  }
  function tn(n) {
    var r = n._currentValue;
    if (Sd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ji === null) {
        if (fc === null)
          throw Error(g(308));
        Ji = n, fc.dependencies = { lanes: 0, firstContext: n };
      } else
        Ji = Ji.next = n;
    return r;
  }
  var $n = null;
  function Ed(n) {
    $n === null ? $n = [n] : $n.push(n);
  }
  function Zv(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Ed(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Si(n, u);
  }
  function Si(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var to = !1;
  function bd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ci(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function no(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, st & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Si(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ed(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Si(n, o);
  }
  function dc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, ku(n, o);
    }
  }
  function xd(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, d = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var m = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          d === null ? c = d = m : d = d.next = m, o = o.next;
        } while (o !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function ro(n, r, o, u) {
    var c = n.updateQueue;
    to = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var w = b, F = w.next;
      w.next = null, m === null ? d = F : m.next = F, m = w;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, b = X.lastBaseUpdate, b !== m && (b === null ? X.firstBaseUpdate = F : b.next = F, X.lastBaseUpdate = w));
    }
    if (d !== null) {
      var Z = c.baseState;
      m = 0, X = F = w = null, b = d;
      do {
        var K = b.lane, pe = b.eventTime;
        if ((u & K) === K) {
          X !== null && (X = X.next = {
            eventTime: pe,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var Se = n, xe = b;
            switch (K = r, pe = o, xe.tag) {
              case 1:
                if (Se = xe.payload, typeof Se == "function") {
                  Z = Se.call(pe, Z, K);
                  break e;
                }
                Z = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = xe.payload, K = typeof Se == "function" ? Se.call(pe, Z, K) : Se, K == null)
                  break e;
                Z = fe({}, Z, K);
                break e;
              case 2:
                to = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [b] : K.push(b));
        } else
          pe = { eventTime: pe, lane: K, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, X === null ? (F = X = pe, w = Z) : X = X.next = pe, m |= K;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null)
            break;
          K = b, b = K.next, K.next = null, c.lastBaseUpdate = K, c.shared.pending = null;
        }
      } while (!0);
      if (X === null && (w = Z), c.baseState = w, c.firstBaseUpdate = F, c.lastBaseUpdate = X, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ti |= m, n.lanes = m, n.memoizedState = Z;
    }
  }
  function Po(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = o, typeof c != "function")
            throw Error(g(191, c));
          c.call(u);
        }
      }
  }
  var Jv = new v.Component().refs;
  function Td(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : fe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var pc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Je(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = nr(), c = cn(n), d = Ci(u, c);
    d.payload = r, o != null && (d.callback = o), r = no(n, d, c), r !== null && (rr(r, n, c, u), dc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = nr(), c = cn(n), d = Ci(u, c);
    d.tag = 1, d.payload = r, o != null && (d.callback = o), r = no(n, d, c), r !== null && (rr(r, n, c, u), dc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = nr(), u = cn(n), c = Ci(o, u);
    c.tag = 2, r != null && (c.callback = r), r = no(n, c, u), r !== null && (rr(r, n, u, o), dc(r, n, u));
  } };
  function eh(n, r, o, u, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Fu(o, u) || !Fu(c, d) : !0;
  }
  function th(n, r, o) {
    var u = !1, c = Ka, d = r.contextType;
    return typeof d == "object" && d !== null ? d = tn(d) : (c = Vt(r) ? br : Ie.current, u = r.contextTypes, d = (u = u != null) ? oa(n, c) : Ka), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = pc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function nh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && pc.enqueueReplaceState(r, r.state, null);
  }
  function vc(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = Jv, bd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = tn(d) : (d = Vt(r) ? br : Ie.current, c.context = oa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Td(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && pc.enqueueReplaceState(c, c.state, null), ro(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Fl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(g(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(g(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var b = c.refs;
          b === Jv && (b = c.refs = {}), m === null ? delete b[d] : b[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(g(284));
      if (!o._owner)
        throw Error(g(290, n));
    }
    return n;
  }
  function hc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(g(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function rh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ah(n) {
    function r(N, _) {
      if (n) {
        var A = N.deletions;
        A === null ? (N.deletions = [_], N.flags |= 16) : A.push(_);
      }
    }
    function o(N, _) {
      if (!n)
        return null;
      for (; _ !== null; )
        r(N, _), _ = _.sibling;
      return null;
    }
    function u(N, _) {
      for (N = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? N.set(_.key, _) : N.set(_.index, _), _ = _.sibling;
      return N;
    }
    function c(N, _) {
      return N = fo(N, _), N.index = 0, N.sibling = null, N;
    }
    function d(N, _, A) {
      return N.index = A, n ? (A = N.alternate, A !== null ? (A = A.index, A < _ ? (N.flags |= 2, _) : A) : (N.flags |= 2, _)) : (N.flags |= 1048576, _);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function b(N, _, A, te) {
      return _ === null || _.tag !== 6 ? (_ = vs(A, N.mode, te), _.return = N, _) : (_ = c(_, A), _.return = N, _);
    }
    function w(N, _, A, te) {
      var we = A.type;
      return we === De ? X(N, _, A.props.children, te, A.key) : _ !== null && (_.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Et && rh(we) === _.type) ? (te = c(_, A.props), te.ref = Fl(N, _, A), te.return = N, te) : (te = Qc(A.type, A.key, A.props, null, N.mode, te), te.ref = Fl(N, _, A), te.return = N, te);
    }
    function F(N, _, A, te) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== A.containerInfo || _.stateNode.implementation !== A.implementation ? (_ = ol(A, N.mode, te), _.return = N, _) : (_ = c(_, A.children || []), _.return = N, _);
    }
    function X(N, _, A, te, we) {
      return _ === null || _.tag !== 7 ? (_ = il(A, N.mode, te, we), _.return = N, _) : (_ = c(_, A), _.return = N, _);
    }
    function Z(N, _, A) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return _ = vs("" + _, N.mode, A), _.return = N, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case oe:
            return A = Qc(_.type, _.key, _.props, null, N.mode, A), A.ref = Fl(N, null, _), A.return = N, A;
          case Fe:
            return _ = ol(_, N.mode, A), _.return = N, _;
          case Et:
            var te = _._init;
            return Z(N, te(_._payload), A);
        }
        if (si(_) || Re(_))
          return _ = il(_, N.mode, A, null), _.return = N, _;
        hc(N, _);
      }
      return null;
    }
    function K(N, _, A, te) {
      var we = _ !== null ? _.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number")
        return we !== null ? null : b(N, _, "" + A, te);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case oe:
            return A.key === we ? w(N, _, A, te) : null;
          case Fe:
            return A.key === we ? F(N, _, A, te) : null;
          case Et:
            return we = A._init, K(
              N,
              _,
              we(A._payload),
              te
            );
        }
        if (si(A) || Re(A))
          return we !== null ? null : X(N, _, A, te, null);
        hc(N, A);
      }
      return null;
    }
    function pe(N, _, A, te, we) {
      if (typeof te == "string" && te !== "" || typeof te == "number")
        return N = N.get(A) || null, b(_, N, "" + te, we);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case oe:
            return N = N.get(te.key === null ? A : te.key) || null, w(_, N, te, we);
          case Fe:
            return N = N.get(te.key === null ? A : te.key) || null, F(_, N, te, we);
          case Et:
            var Ce = te._init;
            return pe(N, _, A, Ce(te._payload), we);
        }
        if (si(te) || Re(te))
          return N = N.get(A) || null, X(_, N, te, we, null);
        hc(_, te);
      }
      return null;
    }
    function Se(N, _, A, te) {
      for (var we = null, Ce = null, _e = _, Ye = _ = 0, On = null; _e !== null && Ye < A.length; Ye++) {
        _e.index > Ye ? (On = _e, _e = null) : On = _e.sibling;
        var mt = K(N, _e, A[Ye], te);
        if (mt === null) {
          _e === null && (_e = On);
          break;
        }
        n && _e && mt.alternate === null && r(N, _e), _ = d(mt, _, Ye), Ce === null ? we = mt : Ce.sibling = mt, Ce = mt, _e = On;
      }
      if (Ye === A.length)
        return o(N, _e), Ut && Vr(N, Ye), we;
      if (_e === null) {
        for (; Ye < A.length; Ye++)
          _e = Z(N, A[Ye], te), _e !== null && (_ = d(_e, _, Ye), Ce === null ? we = _e : Ce.sibling = _e, Ce = _e);
        return Ut && Vr(N, Ye), we;
      }
      for (_e = u(N, _e); Ye < A.length; Ye++)
        On = pe(_e, N, Ye, A[Ye], te), On !== null && (n && On.alternate !== null && _e.delete(On.key === null ? Ye : On.key), _ = d(On, _, Ye), Ce === null ? we = On : Ce.sibling = On, Ce = On);
      return n && _e.forEach(function(po) {
        return r(N, po);
      }), Ut && Vr(N, Ye), we;
    }
    function xe(N, _, A, te) {
      var we = Re(A);
      if (typeof we != "function")
        throw Error(g(150));
      if (A = we.call(A), A == null)
        throw Error(g(151));
      for (var Ce = we = null, _e = _, Ye = _ = 0, On = null, mt = A.next(); _e !== null && !mt.done; Ye++, mt = A.next()) {
        _e.index > Ye ? (On = _e, _e = null) : On = _e.sibling;
        var po = K(N, _e, mt.value, te);
        if (po === null) {
          _e === null && (_e = On);
          break;
        }
        n && _e && po.alternate === null && r(N, _e), _ = d(po, _, Ye), Ce === null ? we = po : Ce.sibling = po, Ce = po, _e = On;
      }
      if (mt.done)
        return o(
          N,
          _e
        ), Ut && Vr(N, Ye), we;
      if (_e === null) {
        for (; !mt.done; Ye++, mt = A.next())
          mt = Z(N, mt.value, te), mt !== null && (_ = d(mt, _, Ye), Ce === null ? we = mt : Ce.sibling = mt, Ce = mt);
        return Ut && Vr(N, Ye), we;
      }
      for (_e = u(N, _e); !mt.done; Ye++, mt = A.next())
        mt = pe(_e, N, Ye, mt.value, te), mt !== null && (n && mt.alternate !== null && _e.delete(mt.key === null ? Ye : mt.key), _ = d(mt, _, Ye), Ce === null ? we = mt : Ce.sibling = mt, Ce = mt);
      return n && _e.forEach(function(Zy) {
        return r(N, Zy);
      }), Ut && Vr(N, Ye), we;
    }
    function nn(N, _, A, te) {
      if (typeof A == "object" && A !== null && A.type === De && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case oe:
            e: {
              for (var we = A.key, Ce = _; Ce !== null; ) {
                if (Ce.key === we) {
                  if (we = A.type, we === De) {
                    if (Ce.tag === 7) {
                      o(N, Ce.sibling), _ = c(Ce, A.props.children), _.return = N, N = _;
                      break e;
                    }
                  } else if (Ce.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Et && rh(we) === Ce.type) {
                    o(N, Ce.sibling), _ = c(Ce, A.props), _.ref = Fl(N, Ce, A), _.return = N, N = _;
                    break e;
                  }
                  o(N, Ce);
                  break;
                } else
                  r(N, Ce);
                Ce = Ce.sibling;
              }
              A.type === De ? (_ = il(A.props.children, N.mode, te, A.key), _.return = N, N = _) : (te = Qc(A.type, A.key, A.props, null, N.mode, te), te.ref = Fl(N, _, A), te.return = N, N = te);
            }
            return m(N);
          case Fe:
            e: {
              for (Ce = A.key; _ !== null; ) {
                if (_.key === Ce)
                  if (_.tag === 4 && _.stateNode.containerInfo === A.containerInfo && _.stateNode.implementation === A.implementation) {
                    o(N, _.sibling), _ = c(_, A.children || []), _.return = N, N = _;
                    break e;
                  } else {
                    o(N, _);
                    break;
                  }
                else
                  r(N, _);
                _ = _.sibling;
              }
              _ = ol(A, N.mode, te), _.return = N, N = _;
            }
            return m(N);
          case Et:
            return Ce = A._init, nn(N, _, Ce(A._payload), te);
        }
        if (si(A))
          return Se(N, _, A, te);
        if (Re(A))
          return xe(N, _, A, te);
        hc(N, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, _ !== null && _.tag === 6 ? (o(N, _.sibling), _ = c(_, A), _.return = N, N = _) : (o(N, _), _ = vs(A, N.mode, te), _.return = N, N = _), m(N)) : o(N, _);
    }
    return nn;
  }
  var jl = ah(!0), ih = ah(!1), Xu = {}, $a = qe(Xu), qu = qe(Xu), Hl = qe(Xu);
  function Vo(n) {
    if (n === Xu)
      throw Error(g(174));
    return n;
  }
  function wd(n, r) {
    switch (bt(Hl, r), bt(qu, n), bt($a, Xu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : on(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = on(r, n);
    }
    Ct($a), bt($a, r);
  }
  function ao() {
    Ct($a), Ct(qu), Ct(Hl);
  }
  function Ae(n) {
    Vo(Hl.current);
    var r = Vo($a.current), o = on(r, n.type);
    r !== o && (bt(qu, n), bt($a, o));
  }
  function at(n) {
    qu.current === n && (Ct($a), Ct(qu));
  }
  var $e = qe(0);
  function Gt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ca = [];
  function mc() {
    for (var n = 0; n < ca.length; n++)
      ca[n]._workInProgressVersionPrimary = null;
    ca.length = 0;
  }
  var yc = he.ReactCurrentDispatcher, Rd = he.ReactCurrentBatchConfig, Bo = 0, $t = null, Y = null, dt = null, He = !1, qa = !1, Yr = 0, Io = 0;
  function Ft() {
    throw Error(g(321));
  }
  function Yo(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!aa(n[o], r[o]))
        return !1;
    return !0;
  }
  function io(n, r, o, u, c, d) {
    if (Bo = d, $t = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, yc.current = n === null || n.memoizedState === null ? zy : Ay, n = o(u, c), qa) {
      d = 0;
      do {
        if (qa = !1, Yr = 0, 25 <= d)
          throw Error(g(301));
        d += 1, dt = Y = null, r.updateQueue = null, yc.current = Dd, n = o(u, c);
      } while (qa);
    }
    if (yc.current = Lc, r = Y !== null && Y.next !== null, Bo = 0, dt = Y = $t = null, He = !1, r)
      throw Error(g(300));
    return n;
  }
  function Go() {
    var n = Yr !== 0;
    return Yr = 0, n;
  }
  function fa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return dt === null ? $t.memoizedState = dt = n : dt = dt.next = n, dt;
  }
  function kr() {
    if (Y === null) {
      var n = $t.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Y.next;
    var r = dt === null ? $t.memoizedState : dt.next;
    if (r !== null)
      dt = r, Y = n;
    else {
      if (n === null)
        throw Error(g(310));
      Y = n, n = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, dt === null ? $t.memoizedState = dt = n : dt = dt.next = n;
    }
    return dt;
  }
  function Qo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Zu(n) {
    var r = kr(), o = r.queue;
    if (o === null)
      throw Error(g(311));
    o.lastRenderedReducer = n;
    var u = Y, c = u.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      u.baseQueue = c = d, o.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var b = m = null, w = null, F = d;
      do {
        var X = F.lane;
        if ((Bo & X) === X)
          w !== null && (w = w.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), u = F.hasEagerState ? F.eagerState : n(u, F.action);
        else {
          var Z = {
            lane: X,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          w === null ? (b = w = Z, m = u) : w = w.next = Z, $t.lanes |= X, Ti |= X;
        }
        F = F.next;
      } while (F !== null && F !== d);
      w === null ? m = u : w.next = b, aa(u, r.memoizedState) || (sn = !0), r.memoizedState = u, r.baseState = m, r.baseQueue = w, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, $t.lanes |= d, Ti |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ju(n) {
    var r = kr(), o = r.queue;
    if (o === null)
      throw Error(g(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, d = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      aa(d, r.memoizedState) || (sn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), o.lastRenderedState = d;
    }
    return [d, u];
  }
  function gc() {
  }
  function Sc(n, r) {
    var o = $t, u = kr(), c = r(), d = !aa(u.memoizedState, c);
    if (d && (u.memoizedState = c, sn = !0), u = u.queue, es(bc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || dt !== null && dt.memoizedState.tag & 1) {
      if (o.flags |= 2048, Wo(9, Ec.bind(null, o, u, c, r), void 0, null), Qt === null)
        throw Error(g(349));
      Bo & 30 || Cc(o, r, c);
    }
    return c;
  }
  function Cc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Ec(n, r, o, u) {
    r.value = o, r.getSnapshot = u, xc(r) && Tc(n);
  }
  function bc(n, r, o) {
    return o(function() {
      xc(r) && Tc(n);
    });
  }
  function xc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !aa(n, o);
    } catch {
      return !0;
    }
  }
  function Tc(n) {
    var r = Si(n, 1);
    r !== null && rr(r, n, 1, -1);
  }
  function wc(n) {
    var r = fa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Oc.bind(null, $t, n), [r.memoizedState, n];
  }
  function Wo(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Rc() {
    return kr().memoizedState;
  }
  function Ko(n, r, o, u) {
    var c = fa();
    $t.flags |= n, c.memoizedState = Wo(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Ei(n, r, o, u) {
    var c = kr();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Y !== null) {
      var m = Y.memoizedState;
      if (d = m.destroy, u !== null && Yo(u, m.deps)) {
        c.memoizedState = Wo(r, o, d, u);
        return;
      }
    }
    $t.flags |= n, c.memoizedState = Wo(1 | r, o, d, u);
  }
  function kc(n, r) {
    return Ko(8390656, 8, n, r);
  }
  function es(n, r) {
    return Ei(2048, 8, n, r);
  }
  function Dc(n, r) {
    return Ei(4, 2, n, r);
  }
  function _c(n, r) {
    return Ei(4, 4, n, r);
  }
  function kd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Pl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ei(4, 4, kd.bind(null, r, n), o);
  }
  function Mc() {
  }
  function Vl(n, r) {
    var o = kr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Yo(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function oo(n, r) {
    var o = kr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Yo(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Dr(n, r, o) {
    return Bo & 21 ? (aa(o, r) || (o = Hs(), $t.lanes |= o, Ti |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, sn = !0), n.memoizedState = o);
  }
  function Ly(n, r) {
    var o = wt;
    wt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Rd.transition;
    Rd.transition = {};
    try {
      n(!1), r();
    } finally {
      wt = o, Rd.transition = u;
    }
  }
  function Ot() {
    return kr().memoizedState;
  }
  function Nc(n, r, o) {
    var u = cn(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Bl(n))
      ts(r, o);
    else if (o = Zv(n, r, o, u), o !== null) {
      var c = nr();
      rr(o, n, u, c), oh(o, r, u);
    }
  }
  function Oc(n, r, o) {
    var u = cn(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Bl(n))
      ts(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, b = d(m, o);
          if (c.hasEagerState = !0, c.eagerState = b, aa(b, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, Ed(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = Zv(n, r, c, u), o !== null && (c = nr(), rr(o, n, u, c), oh(o, r, u));
    }
  }
  function Bl(n) {
    var r = n.alternate;
    return n === $t || r !== null && r === $t;
  }
  function ts(n, r) {
    qa = He = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function oh(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, ku(n, o);
    }
  }
  var Lc = { readContext: tn, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, zy = { readContext: tn, useCallback: function(n, r) {
    return fa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: tn, useEffect: kc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ko(
      4194308,
      4,
      kd.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Ko(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ko(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = fa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = fa();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Nc.bind(null, $t, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = fa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: wc, useDebugValue: Mc, useDeferredValue: function(n) {
    return fa().memoizedState = n;
  }, useTransition: function() {
    var n = wc(!1), r = n[0];
    return n = Ly.bind(null, n[1]), fa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = $t, c = fa();
    if (Ut) {
      if (o === void 0)
        throw Error(g(407));
      o = o();
    } else {
      if (o = r(), Qt === null)
        throw Error(g(349));
      Bo & 30 || Cc(u, r, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: r };
    return c.queue = d, kc(bc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Wo(9, Ec.bind(null, u, d, o, r), void 0, null), o;
  }, useId: function() {
    var n = fa(), r = Qt.identifierPrefix;
    if (Ut) {
      var o = gi, u = Un;
      o = (u & ~(1 << 32 - ta(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Yr++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Io++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ay = {
    readContext: tn,
    useCallback: Vl,
    useContext: tn,
    useEffect: es,
    useImperativeHandle: Pl,
    useInsertionEffect: Dc,
    useLayoutEffect: _c,
    useMemo: oo,
    useReducer: Zu,
    useRef: Rc,
    useState: function() {
      return Zu(Qo);
    },
    useDebugValue: Mc,
    useDeferredValue: function(n) {
      var r = kr();
      return Dr(r, Y.memoizedState, n);
    },
    useTransition: function() {
      var n = Zu(Qo)[0], r = kr().memoizedState;
      return [n, r];
    },
    useMutableSource: gc,
    useSyncExternalStore: Sc,
    useId: Ot,
    unstable_isNewReconciler: !1
  }, Dd = { readContext: tn, useCallback: Vl, useContext: tn, useEffect: es, useImperativeHandle: Pl, useInsertionEffect: Dc, useLayoutEffect: _c, useMemo: oo, useReducer: Ju, useRef: Rc, useState: function() {
    return Ju(Qo);
  }, useDebugValue: Mc, useDeferredValue: function(n) {
    var r = kr();
    return Y === null ? r.memoizedState = n : Dr(r, Y.memoizedState, n);
  }, useTransition: function() {
    var n = Ju(Qo)[0], r = kr().memoizedState;
    return [n, r];
  }, useMutableSource: gc, useSyncExternalStore: Sc, useId: Ot, unstable_isNewReconciler: !1 };
  function Il(n, r) {
    try {
      var o = "", u = r;
      do
        o += Ba(u), u = u.return;
      while (u);
      var c = o;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function ns(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function zc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Uy = typeof WeakMap == "function" ? WeakMap : Map;
  function lh(n, r, o) {
    o = Ci(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Pc || (Pc = !0, el = u), zc(n, r);
    }, o;
  }
  function rs(n, r, o) {
    o = Ci(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        zc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
      zc(n, r), typeof u != "function" && (ei === null ? ei = /* @__PURE__ */ new Set([this]) : ei.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), o;
  }
  function uh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Uy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = By.bind(null, n, r, o), r.then(n, n));
  }
  function _d(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Md(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ci(-1, 1), r.tag = 2, no(o, r, 1))), o.lanes |= 1), n);
  }
  var $y = he.ReactCurrentOwner, sn = !1;
  function mn(n, r, o, u) {
    r.child = n === null ? ih(r, null, o, u) : jl(r, n.child, o, u);
  }
  function lo(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return le(r, c), u = io(n, r, o, u, d, c), o = Go(), n !== null && !sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fn(n, r, c)) : (Ut && o && oc(r), r.flags |= 1, mn(n, r, u, c), r.child);
  }
  function Ac(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !Kd(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, _r(n, r, d, u, c)) : (n = Qc(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Fu, o(m, u) && n.ref === r.ref)
        return Fn(n, r, c);
    }
    return r.flags |= 1, n = fo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function _r(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Fu(d, u) && n.ref === r.ref)
        if (sn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (sn = !0);
        else
          return r.lanes = n.lanes, Fn(n, r, c);
    }
    return Yl(n, r, o, u, c);
  }
  function Xo(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, bt(ql, Gr), Gr |= o;
      else {
        if (!(o & 1073741824))
          return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, bt(ql, Gr), Gr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, bt(ql, Gr), Gr |= u;
      }
    else
      d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, bt(ql, Gr), Gr |= u;
    return mn(n, r, c, o), r.child;
  }
  function Ze(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Yl(n, r, o, u, c) {
    var d = Vt(o) ? br : Ie.current;
    return d = oa(r, d), le(r, c), o = io(n, r, o, u, d, c), u = Go(), n !== null && !sn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fn(n, r, c)) : (Ut && u && oc(r), r.flags |= 1, mn(n, r, o, c), r.child);
  }
  function Nd(n, r, o, u, c) {
    if (Vt(o)) {
      var d = !0;
      ic(r);
    } else
      d = !1;
    if (le(r, c), r.stateNode === null)
      Jn(n, r), th(r, o, u), vc(r, o, u, c), u = !0;
    else if (n === null) {
      var m = r.stateNode, b = r.memoizedProps;
      m.props = b;
      var w = m.context, F = o.contextType;
      typeof F == "object" && F !== null ? F = tn(F) : (F = Vt(o) ? br : Ie.current, F = oa(r, F));
      var X = o.getDerivedStateFromProps, Z = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Z || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== u || w !== F) && nh(r, m, u, F), to = !1;
      var K = r.memoizedState;
      m.state = K, ro(r, u, m, c), w = r.memoizedState, b !== u || K !== w || Xt.current || to ? (typeof X == "function" && (Td(r, o, X, u), w = r.memoizedState), (b = to || eh(r, o, b, u, K, w, F)) ? (Z || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = w), m.props = u, m.state = w, m.context = F, u = b) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      m = r.stateNode, hn(n, r), b = r.memoizedProps, F = r.type === r.elementType ? b : Ir(r.type, b), m.props = F, Z = r.pendingProps, K = m.context, w = o.contextType, typeof w == "object" && w !== null ? w = tn(w) : (w = Vt(o) ? br : Ie.current, w = oa(r, w));
      var pe = o.getDerivedStateFromProps;
      (X = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== Z || K !== w) && nh(r, m, u, w), to = !1, K = r.memoizedState, m.state = K, ro(r, u, m, c);
      var Se = r.memoizedState;
      b !== Z || K !== Se || Xt.current || to ? (typeof pe == "function" && (Td(r, o, pe, u), Se = r.memoizedState), (F = to || eh(r, o, F, u, K, Se, w) || !1) ? (X || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, Se, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, Se, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Se), m.props = u, m.state = Se, m.context = w, u = F) : (typeof m.componentDidUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return sh(n, r, o, u, d, c);
  }
  function sh(n, r, o, u, c, d) {
    Ze(n, r);
    var m = (r.flags & 128) !== 0;
    if (!u && !m)
      return c && Wv(r, o, !1), Fn(n, r, d);
    u = r.stateNode, $y.current = r;
    var b = m && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && m ? (r.child = jl(r, n.child, null, d), r.child = jl(r, null, b, d)) : mn(n, r, b, d), r.memoizedState = u.state, c && Wv(r, o, !0), r.child;
  }
  function ch(n) {
    var r = n.stateNode;
    r.pendingContext ? qi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && qi(n, r.context, !1), wd(n, r.containerInfo);
  }
  function Uc(n, r, o, u, c) {
    return Yt(), gd(c), r.flags |= 256, mn(n, r, o, u), r.child;
  }
  var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Od(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ld(n, r, o) {
    var u = r.pendingProps, c = $e.current, d = !1, m = (r.flags & 128) !== 0, b;
    if ((b = m) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), bt($e, c & 1), n === null)
      return uc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = ps(m, u, 0, null), n = il(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Od(o), r.memoizedState = qo, n) : zd(r, m));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null))
      return Fy(n, r, m, u, b, c, o);
    if (d) {
      d = u.fallback, m = r.mode, c = n.child, b = c.sibling;
      var w = { mode: "hidden", children: u.children };
      return !(m & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = w, r.deletions = null) : (u = fo(c, w), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? d = fo(b, d) : (d = il(d, m, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, m = n.child.memoizedState, m = m === null ? Od(o) : { baseLanes: m.baseLanes | o, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~o, r.memoizedState = qo, u;
    }
    return d = n.child, n = d.sibling, u = fo(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function zd(n, r) {
    return r = ps({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Gl(n, r, o, u) {
    return u !== null && gd(u), jl(r, n.child, null, o), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Fy(n, r, o, u, c, d, m) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = ns(Error(g(422))), Gl(n, r, m, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = ps({ mode: "visible", children: u.children }, c, 0, null), d = il(d, c, m, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && jl(r, n.child, null, m), r.child.memoizedState = Od(m), r.memoizedState = qo, d);
    if (!(r.mode & 1))
      return Gl(n, r, m, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var b = u.dgst;
      return u = b, d = Error(g(419)), u = ns(d, u, void 0), Gl(n, r, m, u);
    }
    if (b = (m & n.childLanes) !== 0, sn || b) {
      if (u = Qt, u !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Si(n, c), rr(u, n, c, -1));
      }
      return Gd(), u = ns(Error(g(421))), Gl(n, r, m, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Iy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Rr = Ua(c.nextSibling), Br = r, Ut = !0, sa = null, n !== null && (wr[Zn++] = Un, wr[Zn++] = gi, wr[Zn++] = ua, Un = n.id, gi = n.overflow, ua = r), r = zd(r, u.children), r.flags |= 4096, r);
  }
  function Ad(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), _n(n.return, r, o);
  }
  function $c(n, r, o, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = o, d.tailMode = c);
  }
  function Ud(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (mn(n, r, u.children, o), u = $e.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Ad(n, o, r);
            else if (n.tag === 19)
              Ad(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (bt($e, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; )
            n = o.alternate, n !== null && Gt(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), $c(r, !1, c, o, d);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Gt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          $c(r, !0, o, null, d);
          break;
        case "together":
          $c(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Jn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Fn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ti |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(g(153));
    if (r.child !== null) {
      for (n = r.child, o = fo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = fo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function bi(n, r, o) {
    switch (r.tag) {
      case 3:
        ch(r), Yt();
        break;
      case 5:
        Ae(r);
        break;
      case 1:
        Vt(r.type) && ic(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        bt(Xa, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (bt($e, $e.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Ld(n, r, o) : (bt($e, $e.current & 1), n = Fn(n, r, o), n !== null ? n.sibling : null);
        bt($e, $e.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Ud(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), bt($e, $e.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xo(n, r, o);
    }
    return Fn(n, r, o);
  }
  var as, Zo, da, yn;
  as = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Zo = function() {
  }, da = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Vo($a.current);
      var d = null;
      switch (o) {
        case "input":
          c = Wn(n, c), u = Wn(n, u), d = [];
          break;
        case "select":
          c = fe({}, c, { value: void 0 }), u = fe({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ka(n, c), u = ka(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = ac);
      }
      Tn(o, u);
      var m;
      o = null;
      for (F in c)
        if (!u.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null)
          if (F === "style") {
            var b = c[F];
            for (m in b)
              b.hasOwnProperty(m) && (o || (o = {}), o[m] = "");
          } else
            F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (R.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in u) {
        var w = u[F];
        if (b = c != null ? c[F] : void 0, u.hasOwnProperty(F) && w !== b && (w != null || b != null))
          if (F === "style")
            if (b) {
              for (m in b)
                !b.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (o || (o = {}), o[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && b[m] !== w[m] && (o || (o = {}), o[m] = w[m]);
            } else
              o || (d || (d = []), d.push(
                F,
                o
              )), o = w;
          else
            F === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, b = b ? b.__html : void 0, w != null && b !== w && (d = d || []).push(F, w)) : F === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(F, "" + w) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (R.hasOwnProperty(F) ? (w != null && F === "onScroll" && Nt("scroll", n), d || b === w || (d = [])) : (d = d || []).push(F, w));
      }
      o && (d = d || []).push("style", o);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, yn = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function is(n, r) {
    if (!Ut)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function jy(n, r, o) {
    var u = r.pendingProps;
    switch (md(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return er(r), null;
      case 1:
        return Vt(r.type) && la(), er(r), null;
      case 3:
        return u = r.stateNode, ao(), Ct(Xt), Ct(Ie), mc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (sc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, sa !== null && (ds(sa), sa = null))), Zo(n, r), er(r), null;
      case 5:
        at(r);
        var c = Vo(Hl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          da(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(g(166));
            return er(r), null;
          }
          if (n = Vo($a.current), sc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[Wa] = r, u[jo] = d, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Nt("cancel", u), Nt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Nt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Vu.length; c++)
                  Nt(Vu[c], u);
                break;
              case "source":
                Nt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Nt(
                  "error",
                  u
                ), Nt("load", u);
                break;
              case "details":
                Nt("toggle", u);
                break;
              case "input":
                An(u, d), Nt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Nt("invalid", u);
                break;
              case "textarea":
                Ar(u, d), Nt("invalid", u);
            }
            Tn(o, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var b = d[m];
                m === "children" ? typeof b == "string" ? u.textContent !== b && (d.suppressHydrationWarning !== !0 && rc(u.textContent, b, n), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (d.suppressHydrationWarning !== !0 && rc(
                  u.textContent,
                  b,
                  n
                ), c = ["children", "" + b]) : R.hasOwnProperty(m) && b != null && m === "onScroll" && Nt("scroll", u);
              }
            switch (o) {
              case "input":
                Sr(u), ea(u, d, !0);
                break;
              case "textarea":
                Sr(u), Ur(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = ac);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Da(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = m.createElement(o, { is: u.is }) : (n = m.createElement(o), o === "select" && (m = n, u.multiple ? m.multiple = !0 : u.size && (m.size = u.size))) : n = m.createElementNS(n, o), n[Wa] = r, n[jo] = u, as(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = en(o, u), o) {
                case "dialog":
                  Nt("cancel", n), Nt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Nt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Vu.length; c++)
                    Nt(Vu[c], n);
                  c = u;
                  break;
                case "source":
                  Nt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Nt(
                    "error",
                    n
                  ), Nt("load", n), c = u;
                  break;
                case "details":
                  Nt("toggle", n), c = u;
                  break;
                case "input":
                  An(n, u), c = Wn(n, u), Nt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = fe({}, u, { value: void 0 }), Nt("invalid", n);
                  break;
                case "textarea":
                  Ar(n, u), c = ka(n, u), Nt("invalid", n);
                  break;
                default:
                  c = u;
              }
              Tn(o, c), b = c;
              for (d in b)
                if (b.hasOwnProperty(d)) {
                  var w = b[d];
                  d === "style" ? Tt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && ji(n, w)) : d === "children" ? typeof w == "string" ? (o !== "textarea" || w !== "") && _a(n, w) : typeof w == "number" && _a(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (R.hasOwnProperty(d) ? w != null && d === "onScroll" && Nt("scroll", n) : w != null && ie(n, d, w, m));
                }
              switch (o) {
                case "input":
                  Sr(n), ea(n, u, !1);
                  break;
                case "textarea":
                  Sr(n), Ur(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Qn(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Ya(n, !!u.multiple, d, !1) : u.defaultValue != null && Ya(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = ac);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null)
          yn(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(g(166));
          if (o = Vo(Hl.current), Vo($a.current), sc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Wa] = r, (d = u.nodeValue !== o) && (n = Br, n !== null))
              switch (n.tag) {
                case 3:
                  rc(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && rc(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Wa] = r, r.stateNode = u;
        }
        return er(r), null;
      case 13:
        if (Ct($e), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Ut && Rr !== null && r.mode & 1 && !(r.flags & 128))
            qv(), Yt(), r.flags |= 98560, d = !1;
          else if (d = sc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(g(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(g(317));
              d[Wa] = r;
            } else
              Yt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else
            sa !== null && (ds(sa), sa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || $e.current & 1 ? Sn === 0 && (Sn = 3) : Gd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return ao(), Zo(n, r), n === null && Al(r.stateNode.containerInfo), er(r), null;
      case 10:
        return eo(r.type._context), er(r), null;
      case 17:
        return Vt(r.type) && la(), er(r), null;
      case 19:
        if (Ct($e), d = r.memoizedState, d === null)
          return er(r), null;
        if (u = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (u)
            is(d, !1);
          else {
            if (Sn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = Gt(n), m !== null) {
                  for (r.flags |= 128, is(d, !1), u = m.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    d = o, n = u, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return bt($e, $e.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && yt() > Jl && (r.flags |= 128, u = !0, is(d, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Gt(m), n !== null) {
              if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), is(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Ut)
                return er(r), null;
            } else
              2 * yt() - d.renderingStartTime > Jl && o !== 1073741824 && (r.flags |= 128, u = !0, is(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (o = d.last, o !== null ? o.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = yt(), r.sibling = null, o = $e.current, bt($e, u ? o & 1 | 2 : o & 1), r) : (er(r), null);
      case 22:
      case 23:
        return Yd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Gr & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(g(156, r.tag));
  }
  function $d(n, r) {
    switch (md(r), r.tag) {
      case 1:
        return Vt(r.type) && la(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ao(), Ct(Xt), Ct(Ie), mc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return at(r), null;
      case 13:
        if (Ct($e), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(g(340));
          Yt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ct($e), null;
      case 4:
        return ao(), null;
      case 10:
        return eo(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var os = !1, gn = !1, fh = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Ql(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          Zt(n, r, u);
        }
      else
        o.current = null;
  }
  function ls(n, r, o) {
    try {
      o();
    } catch (u) {
      Zt(n, r, u);
    }
  }
  var dh = !1;
  function ph(n, r) {
    if (ud = Oo, n = Zs(), vi(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var c = u.anchorOffset, d = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, d.nodeType;
            } catch {
              o = null;
              break e;
            }
            var m = 0, b = -1, w = -1, F = 0, X = 0, Z = n, K = null;
            t:
              for (; ; ) {
                for (var pe; Z !== o || c !== 0 && Z.nodeType !== 3 || (b = m + c), Z !== d || u !== 0 && Z.nodeType !== 3 || (w = m + u), Z.nodeType === 3 && (m += Z.nodeValue.length), (pe = Z.firstChild) !== null; )
                  K = Z, Z = pe;
                for (; ; ) {
                  if (Z === n)
                    break t;
                  if (K === o && ++F === c && (b = m), K === d && ++X === u && (w = m), (pe = Z.nextSibling) !== null)
                    break;
                  Z = K, K = Z.parentNode;
                }
                Z = pe;
              }
            o = b === -1 || w === -1 ? null : { start: b, end: w };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for ($o = { focusedElem: n, selectionRange: o }, Oo = !1, ge = r; ge !== null; )
      if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ge = n;
      else
        for (; ge !== null; ) {
          r = ge;
          try {
            var Se = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Se !== null) {
                    var xe = Se.memoizedProps, nn = Se.memoizedState, N = r.stateNode, _ = N.getSnapshotBeforeUpdate(r.elementType === r.type ? xe : Ir(r.type, xe), nn);
                    N.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var A = r.stateNode.containerInfo;
                  A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(g(163));
              }
          } catch (te) {
            Zt(r, r.return, te);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ge = n;
            break;
          }
          ge = r.return;
        }
    return Se = dh, dh = !1, Se;
  }
  function us(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ls(r, o, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function ss(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Fd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function jd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, jd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Wa], delete r[jo], delete r[fd], delete r[Oy], delete r[dd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || vh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Wl(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = ac));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Wl(n, r, o), n = n.sibling; n !== null; )
        Wl(n, r, o), n = n.sibling;
  }
  function Za(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Za(n, r, o), n = n.sibling; n !== null; )
        Za(n, r, o), n = n.sibling;
  }
  var Bt = null, Mn = !1;
  function pa(n, r, o) {
    for (o = o.child; o !== null; )
      Kl(n, r, o), o = o.sibling;
  }
  function Kl(n, r, o) {
    if (Na && typeof Na.onCommitFiberUnmount == "function")
      try {
        Na.onCommitFiberUnmount(Ru, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        gn || Ql(o, r);
      case 6:
        var u = Bt, c = Mn;
        Bt = null, pa(n, r, o), Bt = u, Mn = c, Bt !== null && (Mn ? (n = Bt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Bt.removeChild(o.stateNode));
        break;
      case 18:
        Bt !== null && (Mn ? (n = Bt, o = o.stateNode, n.nodeType === 8 ? Wi(n.parentNode, o) : n.nodeType === 1 && Wi(n, o), Nu(n)) : Wi(Bt, o.stateNode));
        break;
      case 4:
        u = Bt, c = Mn, Bt = o.stateNode.containerInfo, Mn = !0, pa(n, r, o), Bt = u, Mn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!gn && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && ls(o, r, m), c = c.next;
          } while (c !== u);
        }
        pa(n, r, o);
        break;
      case 1:
        if (!gn && (Ql(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (b) {
            Zt(o, r, b);
          }
        pa(n, r, o);
        break;
      case 21:
        pa(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (gn = (u = gn) || o.memoizedState !== null, pa(n, r, o), gn = u) : pa(n, r, o);
        break;
      default:
        pa(n, r, o);
    }
  }
  function xi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new fh()), r.forEach(function(u) {
        var c = Yy.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function Fa(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var c = o[u];
        try {
          var d = n, m = r, b = m;
          e:
            for (; b !== null; ) {
              switch (b.tag) {
                case 5:
                  Bt = b.stateNode, Mn = !1;
                  break e;
                case 3:
                  Bt = b.stateNode.containerInfo, Mn = !0;
                  break e;
                case 4:
                  Bt = b.stateNode.containerInfo, Mn = !0;
                  break e;
              }
              b = b.return;
            }
          if (Bt === null)
            throw Error(g(160));
          Kl(d, m, c), Bt = null, Mn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (F) {
          Zt(c, r, F);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        hh(r, n), r = r.sibling;
  }
  function hh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Fa(r, n), Ja(n), u & 4) {
          try {
            us(3, n, n.return), ss(3, n);
          } catch (xe) {
            Zt(n, n.return, xe);
          }
          try {
            us(5, n, n.return);
          } catch (xe) {
            Zt(n, n.return, xe);
          }
        }
        break;
      case 1:
        Fa(r, n), Ja(n), u & 512 && o !== null && Ql(o, o.return);
        break;
      case 5:
        if (Fa(r, n), Ja(n), u & 512 && o !== null && Ql(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            _a(c, "");
          } catch (xe) {
            Zt(n, n.return, xe);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = o !== null ? o.memoizedProps : d, b = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              b === "input" && d.type === "radio" && d.name != null && Kn(c, d), en(b, m);
              var F = en(b, d);
              for (m = 0; m < w.length; m += 2) {
                var X = w[m], Z = w[m + 1];
                X === "style" ? Tt(c, Z) : X === "dangerouslySetInnerHTML" ? ji(c, Z) : X === "children" ? _a(c, Z) : ie(c, X, Z, F);
              }
              switch (b) {
                case "input":
                  Xn(c, d);
                  break;
                case "textarea":
                  Ga(c, d);
                  break;
                case "select":
                  var K = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var pe = d.value;
                  pe != null ? Ya(c, !!d.multiple, pe, !1) : K !== !!d.multiple && (d.defaultValue != null ? Ya(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Ya(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[jo] = d;
            } catch (xe) {
              Zt(n, n.return, xe);
            }
        }
        break;
      case 6:
        if (Fa(r, n), Ja(n), u & 4) {
          if (n.stateNode === null)
            throw Error(g(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (xe) {
            Zt(n, n.return, xe);
          }
        }
        break;
      case 3:
        if (Fa(r, n), Ja(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Nu(r.containerInfo);
          } catch (xe) {
            Zt(n, n.return, xe);
          }
        break;
      case 4:
        Fa(r, n), Ja(n);
        break;
      case 13:
        Fa(r, n), Ja(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = yt())), u & 4 && xi(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (gn = (F = gn) || X, Fa(r, n), gn = F) : Fa(r, n), Ja(n), u & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !X && n.mode & 1)
            for (ge = n, X = n.child; X !== null; ) {
              for (Z = ge = X; ge !== null; ) {
                switch (K = ge, pe = K.child, K.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    us(4, K, K.return);
                    break;
                  case 1:
                    Ql(K, K.return);
                    var Se = K.stateNode;
                    if (typeof Se.componentWillUnmount == "function") {
                      u = K, o = K.return;
                      try {
                        r = u, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                      } catch (xe) {
                        Zt(u, o, xe);
                      }
                    }
                    break;
                  case 5:
                    Ql(K, K.return);
                    break;
                  case 22:
                    if (K.memoizedState !== null) {
                      Hd(Z);
                      continue;
                    }
                }
                pe !== null ? (pe.return = K, ge = pe) : Hd(Z);
              }
              X = X.sibling;
            }
          e:
            for (X = null, Z = n; ; ) {
              if (Z.tag === 5) {
                if (X === null) {
                  X = Z;
                  try {
                    c = Z.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (b = Z.stateNode, w = Z.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, b.style.display = rt("display", m));
                  } catch (xe) {
                    Zt(n, n.return, xe);
                  }
                }
              } else if (Z.tag === 6) {
                if (X === null)
                  try {
                    Z.stateNode.nodeValue = F ? "" : Z.memoizedProps;
                  } catch (xe) {
                    Zt(n, n.return, xe);
                  }
              } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === n) && Z.child !== null) {
                Z.child.return = Z, Z = Z.child;
                continue;
              }
              if (Z === n)
                break e;
              for (; Z.sibling === null; ) {
                if (Z.return === null || Z.return === n)
                  break e;
                X === Z && (X = null), Z = Z.return;
              }
              X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling;
            }
        }
        break;
      case 19:
        Fa(r, n), Ja(n), u & 4 && xi(n);
        break;
      case 21:
        break;
      default:
        Fa(
          r,
          n
        ), Ja(n);
    }
  }
  function Ja(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (vh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(g(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (_a(c, ""), u.flags &= -33);
            var d = Fc(n);
            Za(n, d, c);
            break;
          case 3:
          case 4:
            var m = u.stateNode.containerInfo, b = Fc(n);
            Wl(n, b, m);
            break;
          default:
            throw Error(g(161));
        }
      } catch (w) {
        Zt(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function mh(n, r, o) {
    ge = n, Xl(n);
  }
  function Xl(n, r, o) {
    for (var u = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, d = c.child;
      if (c.tag === 22 && u) {
        var m = c.memoizedState !== null || os;
        if (!m) {
          var b = c.alternate, w = b !== null && b.memoizedState !== null || gn;
          b = os;
          var F = gn;
          if (os = m, (gn = w) && !F)
            for (ge = c; ge !== null; )
              m = ge, w = m.child, m.tag === 22 && m.memoizedState !== null ? gh(c) : w !== null ? (w.return = m, ge = w) : gh(c);
          for (; d !== null; )
            ge = d, Xl(d), d = d.sibling;
          ge = c, os = b, gn = F;
        }
        yh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ge = d) : yh(n);
    }
  }
  function yh(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                gn || ss(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !gn)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? o.memoizedProps : Ir(r.type, o.memoizedProps);
                    u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Po(r, d, u);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Po(r, m, o);
                }
                break;
              case 5:
                var b = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = b;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && o.focus();
                      break;
                    case "img":
                      w.src && (o.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var F = r.alternate;
                  if (F !== null) {
                    var X = F.memoizedState;
                    if (X !== null) {
                      var Z = X.dehydrated;
                      Z !== null && Nu(Z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(g(163));
            }
          gn || r.flags & 512 && Fd(r);
        } catch (K) {
          Zt(r, r.return, K);
        }
      }
      if (r === n) {
        ge = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ge = o;
        break;
      }
      ge = r.return;
    }
  }
  function Hd(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
        ge = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ge = o;
        break;
      }
      ge = r.return;
    }
  }
  function gh(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              ss(4, r);
            } catch (w) {
              Zt(r, o, w);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (w) {
                Zt(r, c, w);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (w) {
              Zt(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (w) {
              Zt(r, m, w);
            }
        }
      } catch (w) {
        Zt(r, r.return, w);
      }
      if (r === n) {
        ge = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, ge = b;
        break;
      }
      ge = r.return;
    }
  }
  var jc = Math.ceil, cs = he.ReactCurrentDispatcher, Pd = he.ReactCurrentOwner, tr = he.ReactCurrentBatchConfig, st = 0, Qt = null, qt = null, Nn = 0, Gr = 0, ql = qe(0), Sn = 0, fs = null, Ti = 0, Hc = 0, Zl = 0, Jo = null, ur = null, Vd = 0, Jl = 1 / 0, wi = null, Pc = !1, el = null, ei = null, uo = !1, so = null, Vc = 0, eu = 0, Bc = null, tl = -1, nl = 0;
  function nr() {
    return st & 6 ? yt() : tl !== -1 ? tl : tl = yt();
  }
  function cn(n) {
    return n.mode & 1 ? st & 2 && Nn !== 0 ? Nn & -Nn : cc.transition !== null ? (nl === 0 && (nl = Hs()), nl) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Vf(n.type)), n) : 1;
  }
  function rr(n, r, o, u) {
    if (50 < eu)
      throw eu = 0, Bc = null, Error(g(185));
    No(n, o, u), (!(st & 2) || n !== Qt) && (n === Qt && (!(st & 2) && (Hc |= o), Sn === 4 && va(n, Nn)), ar(n, u), o === 1 && st === 0 && !(r.mode & 1) && (Jl = yt() + 500, Dn && xr()));
  }
  function ar(n, r) {
    var o = n.callbackNode;
    js(n, r);
    var u = Oa(n, n === Qt ? Nn : 0);
    if (u === 0)
      o !== null && lr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && lr(o), r === 1)
        n.tag === 0 ? vd(Sh.bind(null, n)) : pd(Sh.bind(null, n)), cd(function() {
          !(st & 6) && xr();
        }), o = null;
      else {
        switch (jf(u)) {
          case 1:
            o = ci;
            break;
          case 4:
            o = ut;
            break;
          case 16:
            o = Bi;
            break;
          case 536870912:
            o = Af;
            break;
          default:
            o = Bi;
        }
        o = Wd(o, tu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function tu(n, r) {
    if (tl = -1, nl = 0, st & 6)
      throw Error(g(327));
    var o = n.callbackNode;
    if (ru() && n.callbackNode !== o)
      return null;
    var u = Oa(n, n === Qt ? Nn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Yc(n, u);
    else {
      r = u;
      var c = st;
      st |= 2;
      var d = Ic();
      (Qt !== n || Nn !== r) && (wi = null, Jl = yt() + 500, rl(n, r));
      do
        try {
          Py();
          break;
        } catch (b) {
          Ch(n, b);
        }
      while (!0);
      Cd(), cs.current = d, st = c, qt !== null ? r = 0 : (Qt = null, Nn = 0, r = Sn);
    }
    if (r !== 0) {
      if (r === 2 && (c = $f(n), c !== 0 && (u = c, r = Bd(n, c))), r === 1)
        throw o = fs, rl(n, 0), va(n, u), ar(n, yt()), o;
      if (r === 6)
        va(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Id(c) && (r = Yc(n, u), r === 2 && (d = $f(n), d !== 0 && (u = d, r = Bd(n, d))), r === 1))
          throw o = fs, rl(n, 0), va(n, u), ar(n, yt()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(g(345));
          case 2:
            al(n, ur, wi);
            break;
          case 3:
            if (va(n, u), (u & 130023424) === u && (r = Vd + 500 - yt(), 10 < r)) {
              if (Oa(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                nr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Fo(al.bind(null, n, ur, wi), r);
              break;
            }
            al(n, ur, wi);
            break;
          case 4:
            if (va(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var m = 31 - ta(u);
              d = 1 << m, m = r[m], m > c && (c = m), u &= ~d;
            }
            if (u = c, u = yt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * jc(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Fo(al.bind(null, n, ur, wi), u);
              break;
            }
            al(n, ur, wi);
            break;
          case 5:
            al(n, ur, wi);
            break;
          default:
            throw Error(g(329));
        }
      }
    }
    return ar(n, yt()), n.callbackNode === o ? tu.bind(null, n) : null;
  }
  function Bd(n, r) {
    var o = Jo;
    return n.current.memoizedState.isDehydrated && (rl(n, r).flags |= 256), n = Yc(n, r), n !== 2 && (r = ur, ur = o, r !== null && ds(r)), n;
  }
  function ds(n) {
    ur === null ? ur = n : ur.push.apply(ur, n);
  }
  function Id(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var c = o[u], d = c.getSnapshot;
            c = c.value;
            try {
              if (!aa(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function va(n, r) {
    for (r &= ~Zl, r &= ~Hc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - ta(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Sh(n) {
    if (st & 6)
      throw Error(g(327));
    ru();
    var r = Oa(n, 0);
    if (!(r & 1))
      return ar(n, yt()), null;
    var o = Yc(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = $f(n);
      u !== 0 && (r = u, o = Bd(n, u));
    }
    if (o === 1)
      throw o = fs, rl(n, 0), va(n, r), ar(n, yt()), o;
    if (o === 6)
      throw Error(g(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, al(n, ur, wi), ar(n, yt()), null;
  }
  function nu(n, r) {
    var o = st;
    st |= 1;
    try {
      return n(r);
    } finally {
      st = o, st === 0 && (Jl = yt() + 500, Dn && xr());
    }
  }
  function co(n) {
    so !== null && so.tag === 0 && !(st & 6) && ru();
    var r = st;
    st |= 1;
    var o = tr.transition, u = wt;
    try {
      if (tr.transition = null, wt = 1, n)
        return n();
    } finally {
      wt = u, tr.transition = o, st = r, !(st & 6) && xr();
    }
  }
  function Yd() {
    Gr = ql.current, Ct(ql);
  }
  function rl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Qv(o)), qt !== null)
      for (o = qt.return; o !== null; ) {
        var u = o;
        switch (md(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && la();
            break;
          case 3:
            ao(), Ct(Xt), Ct(Ie), mc();
            break;
          case 5:
            at(u);
            break;
          case 4:
            ao();
            break;
          case 13:
            Ct($e);
            break;
          case 19:
            Ct($e);
            break;
          case 10:
            eo(u.type._context);
            break;
          case 22:
          case 23:
            Yd();
        }
        o = o.return;
      }
    if (Qt = n, qt = n = fo(n.current, null), Nn = Gr = r, Sn = 0, fs = null, Zl = Hc = Ti = 0, ur = Jo = null, $n !== null) {
      for (r = 0; r < $n.length; r++)
        if (o = $n[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var c = u.next, d = o.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, u.next = m;
          }
          o.pending = u;
        }
      $n = null;
    }
    return n;
  }
  function Ch(n, r) {
    do {
      var o = qt;
      try {
        if (Cd(), yc.current = Lc, He) {
          for (var u = $t.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          He = !1;
        }
        if (Bo = 0, dt = Y = $t = null, qa = !1, Yr = 0, Pd.current = null, o === null || o.return === null) {
          Sn = 1, fs = r, qt = null;
          break;
        }
        e: {
          var d = n, m = o.return, b = o, w = r;
          if (r = Nn, b.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var F = w, X = b, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var K = X.alternate;
              K ? (X.updateQueue = K.updateQueue, X.memoizedState = K.memoizedState, X.lanes = K.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var pe = _d(m);
            if (pe !== null) {
              pe.flags &= -257, Md(pe, m, b, d, r), pe.mode & 1 && uh(d, F, r), r = pe, w = F;
              var Se = r.updateQueue;
              if (Se === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(w), r.updateQueue = xe;
              } else
                Se.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                uh(d, F, r), Gd();
                break e;
              }
              w = Error(g(426));
            }
          } else if (Ut && b.mode & 1) {
            var nn = _d(m);
            if (nn !== null) {
              !(nn.flags & 65536) && (nn.flags |= 256), Md(nn, m, b, d, r), gd(Il(w, b));
              break e;
            }
          }
          d = w = Il(w, b), Sn !== 4 && (Sn = 2), Jo === null ? Jo = [d] : Jo.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = lh(d, w, r);
                xd(d, N);
                break e;
              case 1:
                b = w;
                var _ = d.type, A = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (ei === null || !ei.has(A)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var te = rs(d, b, r);
                  xd(d, te);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Qd(o);
      } catch (we) {
        r = we, qt === o && o !== null && (qt = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ic() {
    var n = cs.current;
    return cs.current = Lc, n === null ? Lc : n;
  }
  function Gd() {
    (Sn === 0 || Sn === 3 || Sn === 2) && (Sn = 4), Qt === null || !(Ti & 268435455) && !(Hc & 268435455) || va(Qt, Nn);
  }
  function Yc(n, r) {
    var o = st;
    st |= 2;
    var u = Ic();
    (Qt !== n || Nn !== r) && (wi = null, rl(n, r));
    do
      try {
        Hy();
        break;
      } catch (c) {
        Ch(n, c);
      }
    while (!0);
    if (Cd(), st = o, cs.current = u, qt !== null)
      throw Error(g(261));
    return Qt = null, Nn = 0, Sn;
  }
  function Hy() {
    for (; qt !== null; )
      Eh(qt);
  }
  function Py() {
    for (; qt !== null && !Vi(); )
      Eh(qt);
  }
  function Eh(n) {
    var r = xh(n.alternate, n, Gr);
    n.memoizedProps = n.pendingProps, r === null ? Qd(n) : qt = r, Pd.current = null;
  }
  function Qd(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = $d(o, r), o !== null) {
          o.flags &= 32767, qt = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Sn = 6, qt = null;
          return;
        }
      } else if (o = jy(o, r, Gr), o !== null) {
        qt = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        qt = r;
        return;
      }
      qt = r = n;
    } while (r !== null);
    Sn === 0 && (Sn = 5);
  }
  function al(n, r, o) {
    var u = wt, c = tr.transition;
    try {
      tr.transition = null, wt = 1, Vy(n, r, o, u);
    } finally {
      tr.transition = c, wt = u;
    }
    return null;
  }
  function Vy(n, r, o, u) {
    do
      ru();
    while (so !== null);
    if (st & 6)
      throw Error(g(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(g(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (vy(n, d), n === Qt && (qt = Qt = null, Nn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || uo || (uo = !0, Wd(Bi, function() {
      return ru(), null;
    })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
      d = tr.transition, tr.transition = null;
      var m = wt;
      wt = 1;
      var b = st;
      st |= 4, Pd.current = null, ph(n, o), hh(o, n), Js($o), Oo = !!ud, $o = ud = null, n.current = o, mh(o), $s(), st = b, wt = m, tr.transition = d;
    } else
      n.current = o;
    if (uo && (uo = !1, so = n, Vc = c), d = n.pendingLanes, d === 0 && (ei = null), lv(o.stateNode), ar(n, yt()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Pc)
      throw Pc = !1, n = el, el = null, n;
    return Vc & 1 && n.tag !== 0 && ru(), d = n.pendingLanes, d & 1 ? n === Bc ? eu++ : (eu = 0, Bc = n) : eu = 0, xr(), null;
  }
  function ru() {
    if (so !== null) {
      var n = jf(Vc), r = tr.transition, o = wt;
      try {
        if (tr.transition = null, wt = 16 > n ? 16 : n, so === null)
          var u = !1;
        else {
          if (n = so, so = null, Vc = 0, st & 6)
            throw Error(g(331));
          var c = st;
          for (st |= 4, ge = n.current; ge !== null; ) {
            var d = ge, m = d.child;
            if (ge.flags & 16) {
              var b = d.deletions;
              if (b !== null) {
                for (var w = 0; w < b.length; w++) {
                  var F = b[w];
                  for (ge = F; ge !== null; ) {
                    var X = ge;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        us(8, X, d);
                    }
                    var Z = X.child;
                    if (Z !== null)
                      Z.return = X, ge = Z;
                    else
                      for (; ge !== null; ) {
                        X = ge;
                        var K = X.sibling, pe = X.return;
                        if (jd(X), X === F) {
                          ge = null;
                          break;
                        }
                        if (K !== null) {
                          K.return = pe, ge = K;
                          break;
                        }
                        ge = pe;
                      }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var xe = Se.child;
                  if (xe !== null) {
                    Se.child = null;
                    do {
                      var nn = xe.sibling;
                      xe.sibling = null, xe = nn;
                    } while (xe !== null);
                  }
                }
                ge = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, ge = m;
            else
              e:
                for (; ge !== null; ) {
                  if (d = ge, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        us(9, d, d.return);
                    }
                  var N = d.sibling;
                  if (N !== null) {
                    N.return = d.return, ge = N;
                    break e;
                  }
                  ge = d.return;
                }
          }
          var _ = n.current;
          for (ge = _; ge !== null; ) {
            m = ge;
            var A = m.child;
            if (m.subtreeFlags & 2064 && A !== null)
              A.return = m, ge = A;
            else
              e:
                for (m = _; ge !== null; ) {
                  if (b = ge, b.flags & 2048)
                    try {
                      switch (b.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ss(9, b);
                      }
                    } catch (we) {
                      Zt(b, b.return, we);
                    }
                  if (b === m) {
                    ge = null;
                    break e;
                  }
                  var te = b.sibling;
                  if (te !== null) {
                    te.return = b.return, ge = te;
                    break e;
                  }
                  ge = b.return;
                }
          }
          if (st = c, xr(), Na && typeof Na.onPostCommitFiberRoot == "function")
            try {
              Na.onPostCommitFiberRoot(Ru, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        wt = o, tr.transition = r;
      }
    }
    return !1;
  }
  function bh(n, r, o) {
    r = Il(o, r), r = lh(n, r, 1), n = no(n, r, 1), r = nr(), n !== null && (No(n, 1, r), ar(n, r));
  }
  function Zt(n, r, o) {
    if (n.tag === 3)
      bh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          bh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ei === null || !ei.has(u))) {
            n = Il(o, n), n = rs(r, n, 1), r = no(r, n, 1), n = nr(), r !== null && (No(r, 1, n), ar(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function By(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & o, Qt === n && (Nn & o) === o && (Sn === 4 || Sn === 3 && (Nn & 130023424) === Nn && 500 > yt() - Vd ? rl(n, 0) : Zl |= o), ar(n, r);
  }
  function Gc(n, r) {
    r === 0 && (n.mode & 1 ? (r = wl, wl <<= 1, !(wl & 130023424) && (wl = 4194304)) : r = 1);
    var o = nr();
    n = Si(n, r), n !== null && (No(n, r, o), ar(n, o));
  }
  function Iy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Gc(n, o);
  }
  function Yy(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(g(314));
    }
    u !== null && u.delete(r), Gc(n, o);
  }
  var xh;
  xh = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Xt.current)
        sn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return sn = !1, bi(n, r, o);
        sn = !!(n.flags & 131072);
      }
    else
      sn = !1, Ut && r.flags & 1048576 && hd(r, $l, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Jn(n, r), n = r.pendingProps;
        var c = oa(r, Ie.current);
        le(r, o), c = io(null, r, u, n, c, o);
        var d = Go();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vt(u) ? (d = !0, ic(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, bd(r), c.updater = pc, r.stateNode = c, c._reactInternals = r, vc(r, u, n, o), r = sh(null, r, u, !0, d, o)) : (r.tag = 0, Ut && d && oc(r), mn(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Jn(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Qy(u), n = Ir(u, n), c) {
            case 0:
              r = Yl(null, r, u, n, o);
              break e;
            case 1:
              r = Nd(null, r, u, n, o);
              break e;
            case 11:
              r = lo(null, r, u, n, o);
              break e;
            case 14:
              r = Ac(null, r, u, Ir(u.type, n), o);
              break e;
          }
          throw Error(g(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ir(u, c), Yl(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ir(u, c), Nd(n, r, u, c, o);
      case 3:
        e: {
          if (ch(r), n === null)
            throw Error(g(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, hn(n, r), ro(r, u, null, o);
          var m = r.memoizedState;
          if (u = m.element, d.isDehydrated)
            if (d = { element: u, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Il(Error(g(423)), r), r = Uc(n, r, u, o, c);
              break e;
            } else if (u !== c) {
              c = Il(Error(g(424)), r), r = Uc(n, r, u, o, c);
              break e;
            } else
              for (Rr = Ua(r.stateNode.containerInfo.firstChild), Br = r, Ut = !0, sa = null, o = ih(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Yt(), u === c) {
              r = Fn(n, r, o);
              break e;
            }
            mn(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ae(r), n === null && uc(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Yu(u, c) ? m = null : d !== null && Yu(u, d) && (r.flags |= 32), Ze(n, r), mn(n, r, m, o), r.child;
      case 6:
        return n === null && uc(r), null;
      case 13:
        return Ld(n, r, o);
      case 4:
        return wd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = jl(r, null, u, o) : mn(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ir(u, c), lo(n, r, u, c, o);
      case 7:
        return mn(n, r, r.pendingProps, o), r.child;
      case 8:
        return mn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return mn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, bt(Xa, u._currentValue), u._currentValue = m, d !== null)
            if (aa(d.value, m)) {
              if (d.children === c.children && !Xt.current) {
                r = Fn(n, r, o);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var b = d.dependencies;
                if (b !== null) {
                  m = d.child;
                  for (var w = b.firstContext; w !== null; ) {
                    if (w.context === u) {
                      if (d.tag === 1) {
                        w = Ci(-1, o & -o), w.tag = 2;
                        var F = d.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var X = F.pending;
                          X === null ? w.next = w : (w.next = X.next, X.next = w), F.pending = w;
                        }
                      }
                      d.lanes |= o, w = d.alternate, w !== null && (w.lanes |= o), _n(
                        d.return,
                        o,
                        r
                      ), b.lanes |= o;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(g(341));
                  m.lanes |= o, b = m.alternate, b !== null && (b.lanes |= o), _n(m, o, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          mn(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, le(r, o), c = tn(c), u = u(c), r.flags |= 1, mn(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = Ir(u, r.pendingProps), c = Ir(u.type, c), Ac(n, r, u, c, o);
      case 15:
        return _r(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ir(u, c), Jn(n, r), r.tag = 1, Vt(u) ? (n = !0, ic(r)) : n = !1, le(r, o), th(r, u, c), vc(r, u, c, o), sh(null, r, u, !0, n, o);
      case 19:
        return Ud(n, r, o);
      case 22:
        return Xo(n, r, o);
    }
    throw Error(g(156, r.tag));
  };
  function Wd(n, r) {
    return Pt(n, r);
  }
  function Gy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ha(n, r, o, u) {
    return new Gy(n, r, o, u);
  }
  function Kd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Qy(n) {
    if (typeof n == "function")
      return Kd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ke)
        return 11;
      if (n === Jt)
        return 14;
    }
    return 2;
  }
  function fo(n, r) {
    var o = n.alternate;
    return o === null ? (o = ha(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Qc(n, r, o, u, c, d) {
    var m = 2;
    if (u = n, typeof n == "function")
      Kd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case De:
            return il(o.children, c, d, r);
          case Ve:
            m = 8, c |= 8;
            break;
          case je:
            return n = ha(12, o, r, c | 2), n.elementType = je, n.lanes = d, n;
          case Be:
            return n = ha(13, o, r, c), n.elementType = Be, n.lanes = d, n;
          case et:
            return n = ha(19, o, r, c), n.elementType = et, n.lanes = d, n;
          case bn:
            return ps(o, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case lt:
                  m = 10;
                  break e;
                case nt:
                  m = 9;
                  break e;
                case Ke:
                  m = 11;
                  break e;
                case Jt:
                  m = 14;
                  break e;
                case Et:
                  m = 16, u = null;
                  break e;
              }
            throw Error(g(130, n == null ? n : typeof n, ""));
        }
    return r = ha(m, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function il(n, r, o, u) {
    return n = ha(7, n, u, r), n.lanes = o, n;
  }
  function ps(n, r, o, u) {
    return n = ha(22, n, u, r), n.elementType = bn, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function vs(n, r, o) {
    return n = ha(6, n, null, r), n.lanes = o, n;
  }
  function ol(n, r, o) {
    return r = ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Wy(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ff(0), this.expirationTimes = Ff(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ff(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Wc(n, r, o, u, c, d, m, b, w) {
    return n = new Wy(n, r, o, b, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bd(d), n;
  }
  function Th(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Fe, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function Xd(n) {
    if (!n)
      return Ka;
    n = n._reactInternals;
    e: {
      if (Je(n) !== n || n.tag !== 1)
        throw Error(g(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Vt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(g(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Vt(o))
        return Wu(n, o, r);
    }
    return r;
  }
  function wh(n, r, o, u, c, d, m, b, w) {
    return n = Wc(o, u, !0, n, c, d, m, b, w), n.context = Xd(null), o = n.current, u = nr(), c = cn(o), d = Ci(u, c), d.callback = r ?? null, no(o, d, c), n.current.lanes = c, No(n, c, u), ar(n, u), n;
  }
  function hs(n, r, o, u) {
    var c = r.current, d = nr(), m = cn(c);
    return o = Xd(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ci(d, m), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = no(c, r, m), n !== null && (rr(n, c, m, d), dc(n, c, m)), m;
  }
  function Kc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Rh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function qd(n, r) {
    Rh(n, r), (n = n.alternate) && Rh(n, r);
  }
  function kh() {
    return null;
  }
  var Zd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xc(n) {
    this._internalRoot = n;
  }
  Ri.prototype.render = Xc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(g(409));
    hs(n, r, null, null);
  }, Ri.prototype.unmount = Xc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      co(function() {
        hs(null, n, null, null);
      }), r[yi] = null;
    }
  };
  function Ri(n) {
    this._internalRoot = n;
  }
  Ri.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = fv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Rt.length && r !== 0 && r < Rt[o].priority; o++)
        ;
      Rt.splice(o, 0, n), o === 0 && dv(n);
    }
  };
  function Jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function qc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Dh() {
  }
  function Ky(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var F = Kc(m);
          d.call(F);
        };
      }
      var m = wh(r, u, n, 0, null, !1, !1, "", Dh);
      return n._reactRootContainer = m, n[yi] = m.current, Al(n.nodeType === 8 ? n.parentNode : n), co(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var F = Kc(w);
        b.call(F);
      };
    }
    var w = Wc(n, 0, !1, null, null, !1, !1, "", Dh);
    return n._reactRootContainer = w, n[yi] = w.current, Al(n.nodeType === 8 ? n.parentNode : n), co(function() {
      hs(r, w, o, u);
    }), w;
  }
  function Zc(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var w = Kc(m);
          b.call(w);
        };
      }
      hs(r, m, n, c);
    } else
      m = Ky(o, r, n, c, u);
    return Kc(m);
  }
  cv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Mo(r.pendingLanes);
          o !== 0 && (ku(r, o | 1), ar(r, yt()), !(st & 6) && (Jl = yt() + 500, xr()));
        }
        break;
      case 13:
        co(function() {
          var u = Si(n, 1);
          if (u !== null) {
            var c = nr();
            rr(u, n, 1, c);
          }
        }), qd(n, 1);
    }
  }, Ps = function(n) {
    if (n.tag === 13) {
      var r = Si(n, 134217728);
      if (r !== null) {
        var o = nr();
        rr(r, n, 134217728, o);
      }
      qd(n, 134217728);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = cn(n), o = Si(n, r);
      if (o !== null) {
        var u = nr();
        rr(o, n, r, u);
      }
      qd(n, r);
    }
  }, fv = function() {
    return wt;
  }, Hf = function(n, r) {
    var o = wt;
    try {
      return wt = n, r();
    } finally {
      wt = o;
    }
  }, Fr = function(n, r, o) {
    switch (r) {
      case "input":
        if (Xn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Oe(u);
              if (!c)
                throw Error(g(90));
              Jr(u), Xn(u, c);
            }
          }
        }
        break;
      case "textarea":
        Ga(n, o);
        break;
      case "select":
        r = o.value, r != null && Ya(n, !!o.multiple, r, !1);
    }
  }, wu = nu, Us = co;
  var Xy = { usingClientEntryPoint: !1, Events: [Qu, Ul, Oe, ko, bl, nu] }, au = { findFiberByHostInstance: ia, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, qy = { bundleType: au.bundleType, version: au.version, rendererPackageName: au.rendererPackageName, rendererConfig: au.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: au.findFiberByHostInstance || kh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jc.isDisabled && Jc.supportsFiber)
      try {
        Ru = Jc.inject(qy), Na = Jc;
      } catch {
      }
  }
  return Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy, Ea.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(r))
      throw Error(g(200));
    return Th(n, r, null, o);
  }, Ea.createRoot = function(n, r) {
    if (!Jd(n))
      throw Error(g(299));
    var o = !1, u = "", c = Zd;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Wc(n, 1, !1, null, null, o, !1, u, c), n[yi] = r.current, Al(n.nodeType === 8 ? n.parentNode : n), new Xc(r);
  }, Ea.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(g(188)) : (n = Object.keys(n).join(","), Error(g(268, n)));
    return n = wn(r), n = n === null ? null : n.stateNode, n;
  }, Ea.flushSync = function(n) {
    return co(n);
  }, Ea.hydrate = function(n, r, o) {
    if (!qc(r))
      throw Error(g(200));
    return Zc(null, n, r, !0, o);
  }, Ea.hydrateRoot = function(n, r, o) {
    if (!Jd(n))
      throw Error(g(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", m = Zd;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (m = o.onRecoverableError)), r = wh(r, null, n, 1, o ?? null, c, !1, d, m), n[yi] = r.current, Al(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
          o,
          c
        );
    return new Ri(r);
  }, Ea.render = function(n, r, o) {
    if (!qc(r))
      throw Error(g(200));
    return Zc(null, n, r, !1, o);
  }, Ea.unmountComponentAtNode = function(n) {
    if (!qc(n))
      throw Error(g(40));
    return n._reactRootContainer ? (co(function() {
      Zc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[yi] = null;
      });
    }), !0) : !1;
  }, Ea.unstable_batchedUpdates = nu, Ea.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!qc(o))
      throw Error(g(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(g(38));
    return Zc(n, r, o, !1, u);
  }, Ea.version = "18.2.0-next-9e3b772b8-20220608", Ea;
}
var ba = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ex;
function LM() {
  return ex || (ex = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = xa, C = hx(), g = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = !1;
    function R(e) {
      x = e;
    }
    function k(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        P("warn", e, a);
      }
    }
    function y(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        P("error", e, a);
      }
    }
    function P(e, t, a) {
      {
        var i = g.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var O = 0, H = 1, V = 2, j = 3, W = 4, G = 5, ee = 6, ne = 7, ae = 8, Me = 9, be = 10, ie = 11, he = 12, oe = 13, Fe = 14, De = 15, Ve = 16, je = 17, lt = 18, nt = 19, Ke = 21, Be = 22, et = 23, Jt = 24, Et = 25, bn = !0, re = !1, Re = !1, fe = !1, ot = !1, ft = !0, zn = !1, or = !1, Ba = !0, pn = !0, Zr = !0, Qn = /* @__PURE__ */ new Set(), gr = {}, Ia = {};
    function Sr(e, t) {
      Jr(e, t), Jr(e + "Capture", t);
    }
    function Jr(e, t) {
      gr[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), gr[e] = t;
      {
        var a = e.toLowerCase();
        Ia[a] = e, e === "onDoubleClick" && (Ia.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Qn.add(t[i]);
    }
    var xn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Wn = Object.prototype.hasOwnProperty;
    function An(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Kn(e) {
      try {
        return Xn(e), !1;
      } catch {
        return !0;
      }
    }
    function Xn(e) {
      return "" + e;
    }
    function ea(e, t) {
      if (Kn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), Xn(e);
    }
    function Ra(e) {
      if (Kn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), Xn(e);
    }
    function si(e, t) {
      if (Kn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), Xn(e);
    }
    function Ya(e, t) {
      if (Kn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), Xn(e);
    }
    function ka(e) {
      if (Kn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), Xn(e);
    }
    function Ar(e) {
      if (Kn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), Xn(e);
    }
    var Ga = 0, Ur = 1, Da = 2, on = 3, $r = 4, ji = 5, _a = 6, se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + se + "][" + Ne + "]*$"), Tt = {}, It = {};
    function Tn(e) {
      return Wn.call(It, e) ? !0 : Wn.call(Tt, e) ? !1 : rt.test(e) ? (It[e] = !0, !0) : (Tt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function en(e, t, a) {
      return t !== null ? t.type === Ga : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Cr(e, t, a, i) {
      if (a !== null && a.type === Ga)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Lt(e, t, a, i) {
      if (t === null || typeof t > "u" || Cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case on:
            return !t;
          case $r:
            return t === !1;
          case ji:
            return isNaN(t);
          case _a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Fr(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function _t(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Da || t === on || t === $r, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, El = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    El.forEach(function(e) {
      zt[e] = new _t(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      zt[t] = new _t(
        t,
        Ur,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      zt[e] = new _t(
        e,
        Da,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      zt[e] = new _t(
        e,
        Da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      zt[e] = new _t(
        e,
        on,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new _t(
        e,
        on,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new _t(
        e,
        $r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new _t(
        e,
        _a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      zt[e] = new _t(
        e,
        ji,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ko = /[\-\:]([a-z])/g, bl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ko, bl);
      zt[t] = new _t(
        t,
        Ur,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ko, bl);
      zt[t] = new _t(
        t,
        Ur,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ko, bl);
      zt[t] = new _t(
        t,
        Ur,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new _t(
        e,
        Ur,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var wu = "xlinkHref";
    zt[wu] = new _t(
      "xlinkHref",
      Ur,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new _t(
        e,
        Ur,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Us = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Do = !1;
    function xl(e) {
      !Do && Us.test(e) && (Do = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function _o(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        ea(a, t), i.sanitizeURL && xl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === $r) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Lt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Lt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === on)
            return a;
          f = e.getAttribute(s);
        }
        return Lt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Tl(e, t, a, i) {
      {
        if (!Tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return ea(a, t), l === "" + a ? a : l;
      }
    }
    function Qa(e, t, a, i) {
      var l = Fr(t);
      if (!en(t, l, i)) {
        if (Lt(t, a, l, i) && (a = null), i || l === null) {
          if (Tn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (ea(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var h = l.type;
            e[p] = h === on ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var S = l.attributeName, E = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var M = l.type, D;
          M === on || M === $r && a === !0 ? D = "" : (ea(a, S), D = "" + a, l.sanitizeURL && xl(D.toString())), E ? e.setAttributeNS(E, S, D) : e.setAttribute(S, D);
        }
      }
    }
    var Hi = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Ma = Symbol.for("react.fragment"), Pi = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), ce = Symbol.for("react.context"), ze = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), ht = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), wn = Symbol.for("react.scope"), Ht = Symbol.for("react.debug_trace_mode"), Pt = Symbol.for("react.offscreen"), lr = Symbol.for("react.legacy_hidden"), Vi = Symbol.for("react.cache"), $s = Symbol.for("react.tracing_marker"), yt = Symbol.iterator, dy = "@@iterator";
    function ci(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = yt && e[yt] || e[dy];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, Bi = 0, ov, Af, Ru, Na, lv, ta, uv;
    function sv() {
    }
    sv.__reactDisabledLog = !0;
    function py() {
      {
        if (Bi === 0) {
          ov = console.log, Af = console.info, Ru = console.warn, Na = console.error, lv = console.group, ta = console.groupCollapsed, uv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: sv,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Bi++;
      }
    }
    function Fs() {
      {
        if (Bi--, Bi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: ov
            }),
            info: ut({}, e, {
              value: Af
            }),
            warn: ut({}, e, {
              value: Ru
            }),
            error: ut({}, e, {
              value: Na
            }),
            group: ut({}, e, {
              value: lv
            }),
            groupCollapsed: ut({}, e, {
              value: ta
            }),
            groupEnd: ut({}, e, {
              value: uv
            })
          });
        }
        Bi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wl = g.ReactCurrentDispatcher, Mo;
    function Oa(e, t, a) {
      {
        if (Mo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Mo = i && i[1] || "";
          }
        return `
` + Mo + e;
      }
    }
    var Uf = !1, js;
    {
      var $f = typeof WeakMap == "function" ? WeakMap : Map;
      js = new $f();
    }
    function Hs(e, t) {
      if (!e || Uf)
        return "";
      {
        var a = js.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Uf = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = wl.current, wl.current = null, py();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch ($) {
              i = $;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch ($) {
              i = $;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            i = $;
          }
          e();
        }
      } catch ($) {
        if ($ && i && typeof $.stack == "string") {
          for (var p = $.stack.split(`
`), h = i.stack.split(`
`), S = p.length - 1, E = h.length - 1; S >= 1 && E >= 0 && p[S] !== h[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (p[S] !== h[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || p[S] !== h[E]) {
                    var M = `
` + p[S].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && js.set(e, M), M;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Uf = !1, wl.current = s, Fs(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", U = D ? Oa(D) : "";
      return typeof e == "function" && js.set(e, U), U;
    }
    function Ff(e, t, a) {
      return Hs(e, !0);
    }
    function No(e, t, a) {
      return Hs(e, !1);
    }
    function vy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ku(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Hs(e, vy(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case Je:
          return Oa("Suspense");
        case ht:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ze:
            return No(e.render);
          case tt:
            return ku(e.type, t, a);
          case Ue: {
            var i = e, l = i._payload, s = i._init;
            try {
              return ku(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function wt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case G:
          return Oa(e.type);
        case Ve:
          return Oa("Lazy");
        case oe:
          return Oa("Suspense");
        case nt:
          return Oa("SuspenseList");
        case O:
        case V:
        case De:
          return No(e.type);
        case ie:
          return No(e.type.render);
        case H:
          return Ff(e.type);
        default:
          return "";
      }
    }
    function jf(e) {
      try {
        var t = "", a = e;
        do
          t += wt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function cv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Ps(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ma:
          return "Fragment";
        case jr:
          return "Portal";
        case T:
          return "Profiler";
        case Pi:
          return "StrictMode";
        case Je:
          return "Suspense";
        case ht:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            var t = e;
            return Ps(t) + ".Consumer";
          case q:
            var a = e;
            return Ps(a._context) + ".Provider";
          case ze:
            return cv(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case Ue: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Hf(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Jt:
          return "Cache";
        case Me:
          var i = a;
          return Hf(i) + ".Consumer";
        case be:
          var l = a;
          return Hf(l._context) + ".Provider";
        case lt:
          return "DehydratedFragment";
        case ie:
          return fv(a, a.render, "ForwardRef");
        case ne:
          return "Fragment";
        case G:
          return a;
        case W:
          return "Portal";
        case j:
          return "Root";
        case ee:
          return "Text";
        case Ve:
          return Mt(a);
        case ae:
          return a === Pi ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case he:
          return "Profiler";
        case Ke:
          return "Scope";
        case oe:
          return "Suspense";
        case nt:
          return "SuspenseList";
        case Et:
          return "TracingMarker";
        case H:
        case O:
        case je:
        case V:
        case Fe:
        case De:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Du = g.ReactDebugCurrentFrame, ln = null, na = !1;
    function ra() {
      {
        if (ln === null)
          return null;
        var e = ln._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function _u() {
      return ln === null ? "" : jf(ln);
    }
    function vn() {
      Du.getCurrentStack = null, ln = null, na = !1;
    }
    function Rt(e) {
      Du.getCurrentStack = e === null ? null : _u, ln = e, na = !1;
    }
    function hy() {
      return ln;
    }
    function La(e) {
      na = e;
    }
    function qn(e) {
      return "" + e;
    }
    function Ii(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ar(e), e;
        default:
          return "";
      }
    }
    var dv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Rl(e, t) {
      dv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Pf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pv(e) {
      return e._valueTracker;
    }
    function Mu(e) {
      e._valueTracker = null;
    }
    function Nu(e) {
      var t = "";
      return e && (Pf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function kl(e) {
      var t = Pf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Ar(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            Ar(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Ar(p), i = "" + p;
          },
          stopTracking: function() {
            Mu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oo(e) {
      pv(e) || (e._valueTracker = kl(e));
    }
    function vv(e) {
      if (!e)
        return !1;
      var t = pv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Nu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Vs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Bs = !1, Ou = !1, Is = !1, Vf = !1;
    function fi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Lu(e, t) {
      var a = e, i = t.checked, l = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function zu(e, t) {
      Rl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ou && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ra() || "A component", t.type), Ou = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Bs && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ra() || "A component", t.type), Bs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ii(t.value != null ? t.value : i),
        controlled: fi(t)
      };
    }
    function Bf(e, t) {
      var a = e, i = t.checked;
      i != null && Qa(a, "checked", i, !1);
    }
    function Dl(e, t) {
      var a = e;
      {
        var i = fi(t);
        !a._wrapperState.controlled && i && !Vf && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vf = !0), a._wrapperState.controlled && !i && !Is && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Is = !0);
      }
      Bf(e, t);
      var l = Ii(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = qn(l)) : a.value !== qn(l) && (a.value = qn(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Yi(a, t.type, l) : t.hasOwnProperty("defaultValue") && Yi(a, t.type, Ii(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Au(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function hv(e, t) {
      var a = e;
      Dl(a, t), Hr(a, t);
    }
    function Hr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ea(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vv(f), Dl(f, p);
          }
        }
      }
    }
    function Yi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Vs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
    }
    var Ys = !1, _l = !1, mv = !1;
    function Gs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || _l || (_l = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mv || (mv = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ys && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ys = !0);
    }
    function If(e, t) {
      t.value != null && e.setAttribute("value", qn(Ii(t.value)));
    }
    var Uu = Array.isArray;
    function Rn(e) {
      return Uu(e);
    }
    var Qs;
    Qs = !1;
    function yv() {
      var e = ra();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gv = ["value", "defaultValue"];
    function my(e) {
      {
        Rl("select", e);
        for (var t = 0; t < gv.length; t++) {
          var a = gv[t];
          if (e[a] != null) {
            var i = Rn(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yv()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yv());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < l.length; h++) {
          var S = f.hasOwnProperty("$" + l[h].value);
          l[h].selected !== S && (l[h].selected = S), S && i && (l[h].defaultSelected = !0);
        }
      } else {
        for (var E = qn(Ii(a)), M = null, D = 0; D < l.length; D++) {
          if (l[D].value === E) {
            l[D].selected = !0, i && (l[D].defaultSelected = !0);
            return;
          }
          M === null && !l[D].disabled && (M = l[D]);
        }
        M !== null && (M.selected = !0);
      }
    }
    function Yf(e, t) {
      return ut({}, t, {
        value: void 0
      });
    }
    function Sv(e, t) {
      var a = e;
      my(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qs && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qs = !0);
    }
    function yy(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function gy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Gi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Sy(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var Gf = !1;
    function Qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Cv(e, t) {
      var a = e;
      Rl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Gf && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ra() || "A component"), Gf = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Rn(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ii(i)
      };
    }
    function Ev(e, t) {
      var a = e, i = Ii(t.value), l = Ii(t.defaultValue);
      if (i != null) {
        var s = qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = qn(l));
    }
    function bv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Wf(e, t) {
      Ev(e, t);
    }
    var di = "http://www.w3.org/1999/xhtml", Cy = "http://www.w3.org/1998/Math/MathML", Kf = "http://www.w3.org/2000/svg";
    function Ws(e) {
      switch (e) {
        case "svg":
          return Kf;
        case "math":
          return Cy;
        default:
          return di;
      }
    }
    function Xf(e, t) {
      return e == null || e === di ? Ws(t) : e === Kf && t === "foreignObject" ? di : e;
    }
    var Ey = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ks, xv = Ey(function(e, t) {
      if (e.namespaceURI === Kf && !("innerHTML" in e)) {
        Ks = Ks || document.createElement("div"), Ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ks.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Er = 1, pi = 3, un = 8, za = 9, Lo = 11, Xs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === pi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Tv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ml = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function wv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Rv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ml).forEach(function(e) {
      Rv.forEach(function(t) {
        Ml[wv(t, e)] = Ml[e];
      });
    });
    function qs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ml.hasOwnProperty(e) && Ml[e]) ? t + "px" : (Ya(t, e), ("" + t).trim());
    }
    var Nl = /([A-Z])/g, by = /^ms-/;
    function xy(e) {
      return e.replace(Nl, "-$1").toLowerCase().replace(by, "-ms-");
    }
    var kv = function() {
    };
    {
      var Dv = /^(?:webkit|moz|o)[A-Z]/, _v = /^-ms-/, $u = /-(.)/g, Ol = /;\s*$/, Ll = {}, zl = {}, Mv = !1, qf = !1, Zf = function(e) {
        return e.replace($u, function(t, a) {
          return a.toUpperCase();
        });
      }, Jf = function(e) {
        Ll.hasOwnProperty(e) && Ll[e] || (Ll[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zf(e.replace(_v, "ms-"))
        ));
      }, Nv = function(e) {
        Ll.hasOwnProperty(e) && Ll[e] || (Ll[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ov = function(e, t) {
        zl.hasOwnProperty(t) && zl[t] || (zl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ol, "")));
      }, Lv = function(e, t) {
        Mv || (Mv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ty = function(e, t) {
        qf || (qf = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      kv = function(e, t) {
        e.indexOf("-") > -1 ? Jf(e) : Dv.test(e) ? Nv(e) : Ol.test(t) && Ov(e, t), typeof t == "number" && (isNaN(t) ? Lv(e, t) : isFinite(t) || Ty(e, t));
      };
    }
    var wy = kv;
    function Ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : xy(i)) + ":", t += qs(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function zv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || wy(i, t[i]);
          var s = qs(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ky(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function aa(e) {
      var t = {};
      for (var a in e)
        for (var i = Tv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Fu(e, t) {
      {
        if (!t)
          return;
        var a = aa(e), i = aa(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (l[h])
              continue;
            l[h] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ky(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Av = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Uv = ut({
      menuitem: !0
    }, Av), $v = "__html";
    function Zs(e, t) {
      if (t) {
        if (Uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !($v in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function vi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Js = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Fv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Aa = {}, ed = new RegExp("^(aria)-[" + Ne + "]*$"), ju = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function td(e, t) {
      {
        if (Wn.call(Aa, t) && Aa[t])
          return !0;
        if (ju.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Fv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Aa[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Aa[t] = !0, !0;
        }
        if (ed.test(t)) {
          var l = t.toLowerCase(), s = Fv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Aa[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Aa[t] = !0, !0;
        }
      }
      return !0;
    }
    function jv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = td(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ec(e, t) {
      vi(e, t) || jv(e, t);
    }
    var zo = !1;
    function nd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !zo && (zo = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var rd = function() {
    };
    {
      var kn = {}, ad = /^on./, Hv = /^on[^A-Z]/, Pv = new RegExp("^(aria)-[" + Ne + "]*$"), Vv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      rd = function(e, t, a, i) {
        if (Wn.call(kn, t) && kn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), kn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), kn[t] = !0, !0;
          if (ad.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), kn[t] = !0, !0;
        } else if (ad.test(t))
          return Hv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), kn[t] = !0, !0;
        if (Pv.test(t) || Vv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), kn[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), kn[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), kn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), kn[t] = !0, !0;
        var h = Fr(t), S = h !== null && h.type === Ga;
        if (Js.hasOwnProperty(l)) {
          var E = Js[l];
          if (E !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, E), kn[t] = !0, !0;
        } else if (!S && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), kn[t] = !0, !0;
        return typeof a == "boolean" && Cr(t, a, h, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), kn[t] = !0, !0) : S ? !0 : Cr(t, a, h, !1) ? (kn[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === on && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), kn[t] = !0), !0);
      };
    }
    var Bv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = rd(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Iv(e, t, a) {
      vi(e, t) || Bv(e, t, a);
    }
    var hi = 1, Hu = 2, Ao = 4, Dy = hi | Hu | Ao, Pu = null;
    function Vu(e) {
      Pu !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Pu = e;
    }
    function _y() {
      Pu === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Pu = null;
    }
    function Yv(e) {
      return e === Pu;
    }
    function tc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === pi ? t.parentNode : t;
    }
    var Nt = null, Qi = null, mi = null;
    function Al(e) {
      var t = lu(e);
      if (t) {
        if (typeof Nt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Yh(a);
          Nt(t.stateNode, t.type, i);
        }
      }
    }
    function Gv(e) {
      Nt = e;
    }
    function nc(e) {
      Qi ? mi ? mi.push(e) : mi = [e] : Qi = e;
    }
    function Bu() {
      return Qi !== null || mi !== null;
    }
    function Iu() {
      if (Qi) {
        var e = Qi, t = mi;
        if (Qi = null, mi = null, Al(e), t)
          for (var a = 0; a < t.length; a++)
            Al(t[a]);
      }
    }
    var Uo = function(e, t) {
      return e(t);
    }, id = function() {
    }, od = !1;
    function My() {
      var e = Bu();
      e && (id(), Iu());
    }
    function ld(e, t, a) {
      if (od)
        return e(t, a);
      od = !0;
      try {
        return Uo(e, t, a);
      } finally {
        od = !1, My();
      }
    }
    function rc(e, t, a) {
      Uo = e, id = a;
    }
    function ac(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ud(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && ac(t));
        default:
          return !1;
      }
    }
    function $o(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Yh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (ud(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Yu = !1;
    if (xn)
      try {
        var Fo = {};
        Object.defineProperty(Fo, "passive", {
          get: function() {
            Yu = !0;
          }
        }), window.addEventListener("test", Fo, Fo), window.removeEventListener("test", Fo, Fo);
      } catch {
        Yu = !1;
      }
    function Qv(e, t, a, i, l, s, f, p, h) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (E) {
        this.onError(E);
      }
    }
    var sd = Qv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var cd = document.createElement("react");
      sd = function(t, a, i, l, s, f, p, h, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), M = !1, D = !0, U = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function B() {
          cd.removeEventListener(I, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var me = Array.prototype.slice.call(arguments, 3);
        function Le() {
          M = !0, B(), a.apply(i, me), D = !1;
        }
        var ke, vt = !1, ct = !1;
        function L(z) {
          if (ke = z.error, vt = !0, ke === null && z.colno === 0 && z.lineno === 0 && (ct = !0), z.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var I = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), cd.addEventListener(I, Le, !1), E.initEvent(I, !1, !1), cd.dispatchEvent(E), $ && Object.defineProperty(window, "event", $), M && D && (vt ? ct && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", L), !M)
          return B(), Qv.apply(this, arguments);
      };
    }
    var Ny = sd, Wi = !1, Ua = null, Gu = !1, Ki = null, Wa = {
      onError: function(e) {
        Wi = !0, Ua = e;
      }
    };
    function jo(e, t, a, i, l, s, f, p, h) {
      Wi = !1, Ua = null, Ny.apply(Wa, arguments);
    }
    function yi(e, t, a, i, l, s, f, p, h) {
      if (jo.apply(this, arguments), Wi) {
        var S = dd();
        Gu || (Gu = !0, Ki = S);
      }
    }
    function fd() {
      if (Gu) {
        var e = Ki;
        throw Gu = !1, Ki = null, e;
      }
    }
    function Oy() {
      return Wi;
    }
    function dd() {
      if (Wi) {
        var e = Ua;
        return Wi = !1, Ua = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ia(e) {
      return e._reactInternals;
    }
    function Qu(e) {
      return e._reactInternals !== void 0;
    }
    function Ul(e, t) {
      e._reactInternals = t;
    }
    var Oe = (
      /*                      */
      0
    ), Xi = (
      /*                */
      1
    ), At = (
      /*                    */
      2
    ), qe = (
      /*                       */
      4
    ), Ct = (
      /*                */
      16
    ), bt = (
      /*                 */
      32
    ), Ka = (
      /*                     */
      64
    ), Ie = (
      /*                   */
      128
    ), Xt = (
      /*            */
      256
    ), br = (
      /*                          */
      512
    ), oa = (
      /*                     */
      1024
    ), Vt = (
      /*                      */
      2048
    ), la = (
      /*                    */
      4096
    ), qi = (
      /*                   */
      8192
    ), Wu = (
      /*             */
      16384
    ), ic = Vt | qe | Ka | br | oa | Wu, Wv = (
      /*               */
      32767
    ), Pr = (
      /*                   */
      32768
    ), Dn = (
      /*                */
      65536
    ), Ku = (
      /* */
      131072
    ), pd = (
      /*                       */
      1048576
    ), vd = (
      /*                    */
      2097152
    ), xr = (
      /*                 */
      4194304
    ), Zi = (
      /*                */
      8388608
    ), Tr = (
      /*               */
      16777216
    ), Ho = (
      /*              */
      33554432
    ), $l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      qe | oa | 0
    ), wr = At | qe | Ct | bt | br | la | qi, Zn = qe | Ka | br | qi, ua = Vt | Ct, Un = xr | Zi | vd, gi = g.ReactCurrentOwner;
    function Vr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (At | la)) !== Oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === j ? a : null;
    }
    function hd(e) {
      if (e.tag === oe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function oc(e) {
      return e.tag === j ? e.stateNode.containerInfo : null;
    }
    function md(e) {
      return Vr(e) === e;
    }
    function Br(e) {
      {
        var t = gi.current;
        if (t !== null && t.tag === H) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = ia(e);
      return l ? Vr(l) === l : !1;
    }
    function Rr(e) {
      if (Vr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ut(e) {
      var t = e.alternate;
      if (!t) {
        var a = Vr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return Rr(s), e;
            if (h === l)
              return Rr(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var S = !1, E = s.child; E; ) {
            if (E === i) {
              S = !0, i = s, l = f;
              break;
            }
            if (E === l) {
              S = !0, l = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!S) {
            for (E = f.child; E; ) {
              if (E === i) {
                S = !0, i = f, l = s;
                break;
              }
              if (E === l) {
                S = !0, l = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== j)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function sa(e) {
      var t = Ut(e);
      return t !== null ? yd(t) : null;
    }
    function yd(e) {
      if (e.tag === G || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = yd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Kv(e) {
      var t = Ut(e);
      return t !== null ? lc(t) : null;
    }
    function lc(e) {
      if (e.tag === G || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== W) {
          var a = lc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var uc = C.unstable_scheduleCallback, Xv = C.unstable_cancelCallback, sc = C.unstable_shouldYield, qv = C.unstable_requestPaint, Yt = C.unstable_now, gd = C.unstable_getCurrentPriorityLevel, cc = C.unstable_ImmediatePriority, Ir = C.unstable_UserBlockingPriority, Xa = C.unstable_NormalPriority, fc = C.unstable_LowPriority, Ji = C.unstable_IdlePriority, Sd = C.unstable_yieldValue, Cd = C.unstable_setDisableYieldValue, eo = null, _n = null, le = null, tn = !1, $n = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ed(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ba && (e = ut({}, e, {
          getLaneLabelMap: no,
          injectProfilingHooks: Ci
        })), eo = t.inject(e), _n = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zv(e, t) {
      if (_n && typeof _n.onScheduleFiberRoot == "function")
        try {
          _n.onScheduleFiberRoot(eo, e, t);
        } catch (a) {
          tn || (tn = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Si(e, t) {
      if (_n && typeof _n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ie) === Ie;
          if (pn) {
            var i;
            switch (t) {
              case Jn:
                i = cc;
                break;
              case Fn:
                i = Ir;
                break;
              case bi:
                i = Xa;
                break;
              case as:
                i = Ji;
                break;
              default:
                i = Xa;
                break;
            }
            _n.onCommitFiberRoot(eo, e, i, a);
          }
        } catch (l) {
          tn || (tn = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function to(e) {
      if (_n && typeof _n.onPostCommitFiberRoot == "function")
        try {
          _n.onPostCommitFiberRoot(eo, e);
        } catch (t) {
          tn || (tn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function bd(e) {
      if (_n && typeof _n.onCommitFiberUnmount == "function")
        try {
          _n.onCommitFiberUnmount(eo, e);
        } catch (t) {
          tn || (tn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function hn(e) {
      if (typeof Sd == "function" && (Cd(e), R(e)), _n && typeof _n.setStrictMode == "function")
        try {
          _n.setStrictMode(eo, e);
        } catch (t) {
          tn || (tn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Ci(e) {
      le = e;
    }
    function no() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < $t; a++) {
          var i = Ly(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function dc(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function xd() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function ro(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function Po() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Jv(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function Td() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function pc(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function eh() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function th(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function vc(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function Fl() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function hc(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function rh(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function ah(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function jl() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function ih(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function Xu() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function $a(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function qu() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function Hl() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function Vo(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function wd(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function ao(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var Ae = (
      /*                         */
      0
    ), at = (
      /*                 */
      1
    ), $e = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), ca = (
      /*              */
      16
    ), mc = Math.clz32 ? Math.clz32 : Bo, yc = Math.log, Rd = Math.LN2;
    function Bo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (yc(t) / Rd | 0) | 0;
    }
    var $t = 31, Y = (
      /*                        */
      0
    ), dt = (
      /*                          */
      0
    ), He = (
      /*                        */
      1
    ), qa = (
      /*    */
      2
    ), Yr = (
      /*             */
      4
    ), Io = (
      /*            */
      8
    ), Ft = (
      /*                     */
      16
    ), Yo = (
      /*                */
      32
    ), io = (
      /*                       */
      4194240
    ), Go = (
      /*                        */
      64
    ), fa = (
      /*                        */
      128
    ), kr = (
      /*                        */
      256
    ), Qo = (
      /*                        */
      512
    ), Zu = (
      /*                        */
      1024
    ), Ju = (
      /*                        */
      2048
    ), gc = (
      /*                        */
      4096
    ), Sc = (
      /*                        */
      8192
    ), Cc = (
      /*                        */
      16384
    ), Ec = (
      /*                       */
      32768
    ), bc = (
      /*                       */
      65536
    ), xc = (
      /*                       */
      131072
    ), Tc = (
      /*                       */
      262144
    ), wc = (
      /*                       */
      524288
    ), Wo = (
      /*                       */
      1048576
    ), Rc = (
      /*                       */
      2097152
    ), Ko = (
      /*                            */
      130023424
    ), Ei = (
      /*                             */
      4194304
    ), kc = (
      /*                             */
      8388608
    ), es = (
      /*                             */
      16777216
    ), Dc = (
      /*                             */
      33554432
    ), _c = (
      /*                             */
      67108864
    ), kd = Ei, Pl = (
      /*          */
      134217728
    ), Mc = (
      /*                          */
      268435455
    ), Vl = (
      /*               */
      268435456
    ), oo = (
      /*                        */
      536870912
    ), Dr = (
      /*                   */
      1073741824
    );
    function Ly(e) {
      {
        if (e & He)
          return "Sync";
        if (e & qa)
          return "InputContinuousHydration";
        if (e & Yr)
          return "InputContinuous";
        if (e & Io)
          return "DefaultHydration";
        if (e & Ft)
          return "Default";
        if (e & Yo)
          return "TransitionHydration";
        if (e & io)
          return "Transition";
        if (e & Ko)
          return "Retry";
        if (e & Pl)
          return "SelectiveHydration";
        if (e & Vl)
          return "IdleHydration";
        if (e & oo)
          return "Idle";
        if (e & Dr)
          return "Offscreen";
      }
    }
    var Ot = -1, Nc = Go, Oc = Ei;
    function Bl(e) {
      switch (sn(e)) {
        case He:
          return He;
        case qa:
          return qa;
        case Yr:
          return Yr;
        case Io:
          return Io;
        case Ft:
          return Ft;
        case Yo:
          return Yo;
        case Go:
        case fa:
        case kr:
        case Qo:
        case Zu:
        case Ju:
        case gc:
        case Sc:
        case Cc:
        case Ec:
        case bc:
        case xc:
        case Tc:
        case wc:
        case Wo:
        case Rc:
          return e & io;
        case Ei:
        case kc:
        case es:
        case Dc:
        case _c:
          return e & Ko;
        case Pl:
          return Pl;
        case Vl:
          return Vl;
        case oo:
          return oo;
        case Dr:
          return Dr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ts(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, l = e.suspendedLanes, s = e.pingedLanes, f = a & Mc;
      if (f !== Y) {
        var p = f & ~l;
        if (p !== Y)
          i = Bl(p);
        else {
          var h = f & s;
          h !== Y && (i = Bl(h));
        }
      } else {
        var S = a & ~l;
        S !== Y ? i = Bl(S) : s !== Y && (i = Bl(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === Y) {
        var E = sn(i), M = sn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === Ft && (M & io) !== Y
        )
          return t;
      }
      (i & Yr) !== Y && (i |= a & Ft);
      var D = e.entangledLanes;
      if (D !== Y)
        for (var U = e.entanglements, $ = i & D; $ > 0; ) {
          var B = lo($), me = 1 << B;
          i |= U[B], $ &= ~me;
        }
      return i;
    }
    function oh(e, t) {
      for (var a = e.eventTimes, i = Ot; t > 0; ) {
        var l = lo(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Lc(e, t) {
      switch (e) {
        case He:
        case qa:
        case Yr:
          return t + 250;
        case Io:
        case Ft:
        case Yo:
        case Go:
        case fa:
        case kr:
        case Qo:
        case Zu:
        case Ju:
        case gc:
        case Sc:
        case Cc:
        case Ec:
        case bc:
        case xc:
        case Tc:
        case wc:
        case Wo:
        case Rc:
          return t + 5e3;
        case Ei:
        case kc:
        case es:
        case Dc:
        case _c:
          return Ot;
        case Pl:
        case Vl:
        case oo:
        case Dr:
          return Ot;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Ot;
      }
    }
    function zy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = lo(f), h = 1 << p, S = s[p];
        S === Ot ? ((h & i) === Y || (h & l) !== Y) && (s[p] = Lc(h, t)) : S <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Ay(e) {
      return Bl(e.pendingLanes);
    }
    function Dd(e) {
      var t = e.pendingLanes & ~Dr;
      return t !== Y ? t : t & Dr ? Dr : Y;
    }
    function Il(e) {
      return (e & He) !== Y;
    }
    function ns(e) {
      return (e & Mc) !== Y;
    }
    function zc(e) {
      return (e & Ko) === e;
    }
    function Uy(e) {
      var t = He | Yr | Ft;
      return (e & t) === Y;
    }
    function lh(e) {
      return (e & io) === e;
    }
    function rs(e, t) {
      var a = qa | Yr | Io | Ft;
      return (t & a) !== Y;
    }
    function uh(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function _d(e) {
      return (e & io) !== Y;
    }
    function Md() {
      var e = Nc;
      return Nc <<= 1, (Nc & io) === Y && (Nc = Go), e;
    }
    function $y() {
      var e = Oc;
      return Oc <<= 1, (Oc & Ko) === Y && (Oc = Ei), e;
    }
    function sn(e) {
      return e & -e;
    }
    function mn(e) {
      return sn(e);
    }
    function lo(e) {
      return 31 - mc(e);
    }
    function Ac(e) {
      return lo(e);
    }
    function _r(e, t) {
      return (e & t) !== Y;
    }
    function Xo(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function Yl(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== dt && e < t ? e : t;
    }
    function Uc(e) {
      for (var t = [], a = 0; a < $t; a++)
        t.push(e);
      return t;
    }
    function qo(e, t, a) {
      e.pendingLanes |= t, t !== oo && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, l = Ac(t);
      i[l] = a;
    }
    function Od(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = lo(i), s = 1 << l;
        a[l] = Ot, i &= ~s;
      }
    }
    function Ld(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = lo(f), h = 1 << p;
        i[p] = Y, l[p] = Ot, s[p] = Ot, f &= ~h;
      }
    }
    function Gl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = lo(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Fy(e, t) {
      var a = sn(t), i;
      switch (a) {
        case Yr:
          i = qa;
          break;
        case Ft:
          i = Io;
          break;
        case Go:
        case fa:
        case kr:
        case Qo:
        case Zu:
        case Ju:
        case gc:
        case Sc:
        case Cc:
        case Ec:
        case bc:
        case xc:
        case Tc:
        case wc:
        case Wo:
        case Rc:
        case Ei:
        case kc:
        case es:
        case Dc:
        case _c:
          i = Yo;
          break;
        case oo:
          i = Vl;
          break;
        default:
          i = dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== dt ? dt : i;
    }
    function Ad(e, t, a) {
      if ($n)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Ac(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function $c(e, t) {
      if ($n)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Ac(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ud(e, t) {
      return null;
    }
    var Jn = He, Fn = Yr, bi = Ft, as = oo, Zo = dt;
    function da() {
      return Zo;
    }
    function yn(e) {
      Zo = e;
    }
    function is(e, t) {
      var a = Zo;
      try {
        return Zo = e, t();
      } finally {
        Zo = a;
      }
    }
    function er(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function jy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function $d(e, t) {
      return e !== 0 && e < t;
    }
    function os(e) {
      var t = sn(e);
      return $d(Jn, t) ? $d(Fn, t) ? ns(t) ? bi : as : Fn : Jn;
    }
    function gn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fh;
    function ge(e) {
      fh = e;
    }
    function Ql(e) {
      fh(e);
    }
    var ls;
    function dh(e) {
      ls = e;
    }
    var ph;
    function us(e) {
      ph = e;
    }
    var ss;
    function Fd(e) {
      ss = e;
    }
    var jd;
    function vh(e) {
      jd = e;
    }
    var Fc = !1, Wl = [], Za = null, Bt = null, Mn = null, pa = /* @__PURE__ */ new Map(), Kl = /* @__PURE__ */ new Map(), xi = [], Fa = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function hh(e) {
      return Fa.indexOf(e) > -1;
    }
    function Ja(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Za = null;
          break;
        case "dragenter":
        case "dragleave":
          Bt = null;
          break;
        case "mouseover":
        case "mouseout":
          Mn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          pa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Kl.delete(i);
          break;
        }
      }
    }
    function Xl(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ja(t, a, i, l, s);
        if (t !== null) {
          var p = lu(t);
          p !== null && ls(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return l !== null && h.indexOf(l) === -1 && h.push(l), e;
    }
    function yh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Za = Xl(Za, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Bt = Xl(Bt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Mn = Xl(Mn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = l, S = h.pointerId;
          return pa.set(S, Xl(pa.get(S) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var E = l, M = E.pointerId;
          return Kl.set(M, Xl(Kl.get(M) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = gs(e.target);
      if (t !== null) {
        var a = Vr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === oe) {
            var l = hd(a);
            if (l !== null) {
              e.blockedOn = l, jd(e.priority, function() {
                ph(a);
              });
              return;
            }
          } else if (i === j) {
            var s = a.stateNode;
            if (gn(s)) {
              e.blockedOn = oc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function gh(e) {
      for (var t = ss(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < xi.length && $d(t, xi[i].priority); i++)
        ;
      xi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function jc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Jo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Vu(s), l.target.dispatchEvent(s), _y();
        } else {
          var f = lu(i);
          return f !== null && ls(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function cs(e, t, a) {
      jc(e) && a.delete(t);
    }
    function Pd() {
      Fc = !1, Za !== null && jc(Za) && (Za = null), Bt !== null && jc(Bt) && (Bt = null), Mn !== null && jc(Mn) && (Mn = null), pa.forEach(cs), Kl.forEach(cs);
    }
    function tr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Fc || (Fc = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Pd)));
    }
    function st(e) {
      if (Wl.length > 0) {
        tr(Wl[0], e);
        for (var t = 1; t < Wl.length; t++) {
          var a = Wl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Za !== null && tr(Za, e), Bt !== null && tr(Bt, e), Mn !== null && tr(Mn, e);
      var i = function(p) {
        return tr(p, e);
      };
      pa.forEach(i), Kl.forEach(i);
      for (var l = 0; l < xi.length; l++) {
        var s = xi[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; xi.length > 0; ) {
        var f = xi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && xi.shift();
      }
    }
    var Qt = g.ReactCurrentBatchConfig, qt = !0;
    function Nn(e) {
      qt = !!e;
    }
    function Gr() {
      return qt;
    }
    function ql(e, t, a) {
      var i = ur(t), l;
      switch (i) {
        case Jn:
          l = Sn;
          break;
        case Fn:
          l = fs;
          break;
        case bi:
        default:
          l = Ti;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Sn(e, t, a, i) {
      var l = da(), s = Qt.transition;
      Qt.transition = null;
      try {
        yn(Jn), Ti(e, t, a, i);
      } finally {
        yn(l), Qt.transition = s;
      }
    }
    function fs(e, t, a, i) {
      var l = da(), s = Qt.transition;
      Qt.transition = null;
      try {
        yn(Fn), Ti(e, t, a, i);
      } finally {
        yn(l), Qt.transition = s;
      }
    }
    function Ti(e, t, a, i) {
      qt && Hc(e, t, a, i);
    }
    function Hc(e, t, a, i) {
      var l = Jo(e, t, a, i);
      if (l === null) {
        ig(e, t, i, Zl, a), mh(e, i);
        return;
      }
      if (yh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (mh(e, i), t & Ao && hh(e)) {
        for (; l !== null; ) {
          var s = lu(l);
          s !== null && Ql(s);
          var f = Jo(e, t, a, i);
          if (f === null && ig(e, t, i, Zl, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      ig(e, t, i, null, a);
    }
    var Zl = null;
    function Jo(e, t, a, i) {
      Zl = null;
      var l = tc(i), s = gs(l);
      if (s !== null) {
        var f = Vr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === oe) {
            var h = hd(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === j) {
            var S = f.stateNode;
            if (gn(S))
              return oc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Zl = s, null;
    }
    function ur(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Jn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Fn;
        case "message": {
          var t = gd();
          switch (t) {
            case cc:
              return Jn;
            case Ir:
              return Fn;
            case Xa:
            case fc:
              return bi;
            case Ji:
              return as;
            default:
              return bi;
          }
        }
        default:
          return bi;
      }
    }
    function Vd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Jl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function wi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Pc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var el = null, ei = null, uo = null;
    function so(e) {
      return el = e, ei = Bc(), !0;
    }
    function Vc() {
      el = null, ei = null, uo = null;
    }
    function eu() {
      if (uo)
        return uo;
      var e, t = ei, a = t.length, i, l = Bc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return uo = l.slice(e, p), uo;
    }
    function Bc() {
      return "value" in el ? el.value : el.textContent;
    }
    function tl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function nl() {
      return !0;
    }
    function nr() {
      return !1;
    }
    function cn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = nl : this.isDefaultPrevented = nr, this.isPropagationStopped = nr, this;
      }
      return ut(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = nl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = nl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: nl
      }), t;
    }
    var rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ar = cn(rr), tu = ut({}, rr, {
      view: 0,
      detail: 0
    }), Bd = cn(tu), ds, Id, va;
    function Sh(e) {
      e !== va && (va && e.type === "mousemove" ? (ds = e.screenX - va.screenX, Id = e.screenY - va.screenY) : (ds = 0, Id = 0), va = e);
    }
    var nu = ut({}, tu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Sh(e), ds);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Id;
      }
    }), co = cn(nu), Yd = ut({}, nu, {
      dataTransfer: 0
    }), rl = cn(Yd), Ch = ut({}, tu, {
      relatedTarget: 0
    }), Ic = cn(Ch), Gd = ut({}, rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Yc = cn(Gd), Hy = ut({}, rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Py = cn(Hy), Eh = ut({}, rr, {
      data: 0
    }), Qd = cn(Eh), al = Qd, Vy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ru = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function bh(e) {
      if (e.key) {
        var t = Vy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = tl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ru[e.keyCode] || "Unidentified" : "";
    }
    var Zt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function By(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Zt[e];
      return i ? !!a[i] : !1;
    }
    function Gc(e) {
      return By;
    }
    var Iy = ut({}, tu, {
      key: bh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? tl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Yy = cn(Iy), xh = ut({}, nu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Wd = cn(xh), Gy = ut({}, tu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gc
    }), ha = cn(Gy), Kd = ut({}, rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qy = cn(Kd), fo = ut({}, nu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Qc = cn(fo), il = [9, 13, 27, 32], ps = 229, vs = xn && "CompositionEvent" in window, ol = null;
    xn && "documentMode" in document && (ol = document.documentMode);
    var Wy = xn && "TextEvent" in window && !ol, Wc = xn && (!vs || ol && ol > 8 && ol <= 11), Th = 32, Xd = String.fromCharCode(Th);
    function wh() {
      Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Sr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Sr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Sr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var hs = !1;
    function Kc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Rh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function qd(e, t) {
      return e === "keydown" && t.keyCode === ps;
    }
    function kh(e, t) {
      switch (e) {
        case "keyup":
          return il.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Zd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Xc(e) {
      return e.locale === "ko";
    }
    var Ri = !1;
    function Jd(e, t, a, i, l) {
      var s, f;
      if (vs ? s = Rh(t) : Ri ? kh(t, i) && (s = "onCompositionEnd") : qd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Wc && !Xc(i) && (!Ri && s === "onCompositionStart" ? Ri = so(l) : s === "onCompositionEnd" && Ri && (f = eu()));
      var p = Oh(a, s);
      if (p.length > 0) {
        var h = new Qd(s, t, null, i, l);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var S = Zd(i);
          S !== null && (h.data = S);
        }
      }
    }
    function qc(e, t) {
      switch (e) {
        case "compositionend":
          return Zd(t);
        case "keypress":
          var a = t.which;
          return a !== Th ? null : (hs = !0, Xd);
        case "textInput":
          var i = t.data;
          return i === Xd && hs ? null : i;
        default:
          return null;
      }
    }
    function Dh(e, t) {
      if (Ri) {
        if (e === "compositionend" || !vs && kh(e, t)) {
          var a = eu();
          return Vc(), Ri = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Kc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Wc && !Xc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ky(e, t, a, i, l) {
      var s;
      if (Wy ? s = qc(t, i) : s = Dh(t, i), !s)
        return null;
      var f = Oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new al("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Zc(e, t, a, i, l, s, f) {
      Jd(e, t, a, i, l), Ky(e, t, a, i, l);
    }
    var Xy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function au(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Xy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function qy(e) {
      if (!xn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Jc() {
      Sr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      nc(i);
      var l = Oh(t, "onChange");
      if (l.length > 0) {
        var s = new ar("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, o = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, o, e, tc(e)), ld(d, t);
    }
    function d(e) {
      T1(e, 0);
    }
    function m(e) {
      var t = of(e);
      if (vv(t))
        return e;
    }
    function b(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    xn && (w = qy("input") && (!document.documentMode || document.documentMode > 9));
    function F(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", Z);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", Z), r = null, o = null);
    }
    function Z(e) {
      e.propertyName === "value" && m(o) && c(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (X(), F(t, a)) : e === "focusout" && X();
    }
    function pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(o);
    }
    function Se(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function xe(e, t) {
      if (e === "click")
        return m(t);
    }
    function nn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Yi(e, "number", e.value);
    }
    function _(e, t, a, i, l, s, f) {
      var p = a ? of(a) : window, h, S;
      if (u(p) ? h = b : au(p) ? w ? h = nn : (h = pe, S = K) : Se(p) && (h = xe), h) {
        var E = h(t, a);
        if (E) {
          n(e, E, i, l);
          return;
        }
      }
      S && S(t, p, a), t === "focusout" && N(p);
    }
    function A() {
      Jr("onMouseEnter", ["mouseout", "mouseover"]), Jr("onMouseLeave", ["mouseout", "mouseover"]), Jr("onPointerEnter", ["pointerout", "pointerover"]), Jr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function te(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !Yv(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (gs(S) || pp(S)))
          return;
      }
      if (!(!h && !p)) {
        var E;
        if (l.window === l)
          E = l;
        else {
          var M = l.ownerDocument;
          M ? E = M.defaultView || M.parentWindow : E = window;
        }
        var D, U;
        if (h) {
          var $ = i.relatedTarget || i.toElement;
          if (D = a, U = $ ? gs($) : null, U !== null) {
            var B = Vr(U);
            (U !== B || U.tag !== G && U.tag !== ee) && (U = null);
          }
        } else
          D = null, U = a;
        if (D !== U) {
          var me = co, Le = "onMouseLeave", ke = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (me = Wd, Le = "onPointerLeave", ke = "onPointerEnter", vt = "pointer");
          var ct = D == null ? E : of(D), L = U == null ? E : of(U), I = new me(Le, vt + "leave", D, i, l);
          I.target = ct, I.relatedTarget = L;
          var z = null, J = gs(l);
          if (J === a) {
            var ye = new me(ke, vt + "enter", U, i, l);
            ye.target = L, ye.relatedTarget = ct, z = ye;
          }
          vT(e, I, z, D, U);
        }
      }
    }
    function we(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : we;
    function _e(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Wn.call(t, s) || !Ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ye(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function On(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function mt(e, t) {
      for (var a = Ye(e), i = 0, l = 0; a; ) {
        if (a.nodeType === pi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Ye(On(a));
      }
    }
    function po(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Zy(e, l, s, f, p);
    }
    function Zy(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, h = 0, S = 0, E = e, M = null;
      e:
        for (; ; ) {
          for (var D = null; E === t && (a === 0 || E.nodeType === pi) && (f = s + a), E === i && (l === 0 || E.nodeType === pi) && (p = s + l), E.nodeType === pi && (s += E.nodeValue.length), (D = E.firstChild) !== null; )
            M = E, E = D;
          for (; ; ) {
            if (E === e)
              break e;
            if (M === t && ++h === a && (f = s), M === i && ++S === l && (p = s), (D = E.nextSibling) !== null)
              break;
            E = M, M = E.parentNode;
          }
          E = D;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Kx(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var S = mt(e, f), E = mt(e, p);
        if (S && E) {
          if (l.rangeCount === 1 && l.anchorNode === S.node && l.anchorOffset === S.offset && l.focusNode === E.node && l.focusOffset === E.offset)
            return;
          var M = a.createRange();
          M.setStart(S.node, S.offset), l.removeAllRanges(), f > p ? (l.addRange(M), l.extend(E.node, E.offset)) : (M.setEnd(E.node, E.offset), l.addRange(M));
        }
      }
    }
    function d1(e) {
      return e && e.nodeType === pi;
    }
    function p1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : d1(e) ? !1 : d1(t) ? p1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Xx(e) {
      return e && e.ownerDocument && p1(e.ownerDocument.documentElement, e);
    }
    function qx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v1() {
      for (var e = window, t = Vs(); t instanceof e.HTMLIFrameElement; ) {
        if (qx(t))
          e = t.contentWindow;
        else
          return t;
        t = Vs(e.document);
      }
      return t;
    }
    function Jy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Zx() {
      var e = v1();
      return {
        focusedElem: e,
        selectionRange: Jy(e) ? eT(e) : null
      };
    }
    function Jx(e) {
      var t = v1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Xx(a)) {
        i !== null && Jy(a) && tT(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Er && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function eT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = po(e), t || {
        start: 0,
        end: 0
      };
    }
    function tT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Kx(e, t);
    }
    var nT = xn && "documentMode" in document && document.documentMode <= 11;
    function rT() {
      Sr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ef = null, eg = null, ep = null, tg = !1;
    function aT(e) {
      if ("selectionStart" in e && Jy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function iT(e) {
      return e.window === e ? e.document : e.nodeType === za ? e : e.ownerDocument;
    }
    function h1(e, t, a) {
      var i = iT(a);
      if (!(tg || ef == null || ef !== Vs(i))) {
        var l = aT(ef);
        if (!ep || !_e(ep, l)) {
          ep = l;
          var s = Oh(eg, "onSelect");
          if (s.length > 0) {
            var f = new ar("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = ef;
          }
        }
      }
    }
    function oT(e, t, a, i, l, s, f) {
      var p = a ? of(a) : window;
      switch (t) {
        case "focusin":
          (au(p) || p.contentEditable === "true") && (ef = p, eg = a, ep = null);
          break;
        case "focusout":
          ef = null, eg = null, ep = null;
          break;
        case "mousedown":
          tg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          tg = !1, h1(e, i, l);
          break;
        case "selectionchange":
          if (nT)
            break;
        case "keydown":
        case "keyup":
          h1(e, i, l);
      }
    }
    function _h(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var tf = {
      animationend: _h("Animation", "AnimationEnd"),
      animationiteration: _h("Animation", "AnimationIteration"),
      animationstart: _h("Animation", "AnimationStart"),
      transitionend: _h("Transition", "TransitionEnd")
    }, ng = {}, m1 = {};
    xn && (m1 = document.createElement("div").style, "AnimationEvent" in window || (delete tf.animationend.animation, delete tf.animationiteration.animation, delete tf.animationstart.animation), "TransitionEvent" in window || delete tf.transitionend.transition);
    function Mh(e) {
      if (ng[e])
        return ng[e];
      if (!tf[e])
        return e;
      var t = tf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m1)
          return ng[e] = t[a];
      return e;
    }
    var y1 = Mh("animationend"), g1 = Mh("animationiteration"), S1 = Mh("animationstart"), C1 = Mh("transitionend"), E1 = /* @__PURE__ */ new Map(), b1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function iu(e, t) {
      E1.set(e, t), Sr(t, [e]);
    }
    function lT() {
      for (var e = 0; e < b1.length; e++) {
        var t = b1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        iu(a, "on" + i);
      }
      iu(y1, "onAnimationEnd"), iu(g1, "onAnimationIteration"), iu(S1, "onAnimationStart"), iu("dblclick", "onDoubleClick"), iu("focusin", "onFocus"), iu("focusout", "onBlur"), iu(C1, "onTransitionEnd");
    }
    function uT(e, t, a, i, l, s, f) {
      var p = E1.get(t);
      if (p !== void 0) {
        var h = ar, S = t;
        switch (t) {
          case "keypress":
            if (tl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Yy;
            break;
          case "focusin":
            S = "focus", h = Ic;
            break;
          case "focusout":
            S = "blur", h = Ic;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ic;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = co;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = rl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = ha;
            break;
          case y1:
          case g1:
          case S1:
            h = Yc;
            break;
          case C1:
            h = Qy;
            break;
          case "scroll":
            h = Bd;
            break;
          case "wheel":
            h = Qc;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Py;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Wd;
            break;
        }
        var E = (s & Ao) !== 0;
        {
          var M = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", D = dT(a, p, i.type, E, M);
          if (D.length > 0) {
            var U = new h(p, S, null, i, l);
            e.push({
              event: U,
              listeners: D
            });
          }
        }
      }
    }
    lT(), A(), Jc(), rT(), wh();
    function sT(e, t, a, i, l, s, f) {
      uT(e, t, a, i, l, s);
      var p = (s & Dy) === 0;
      p && (te(e, t, a, i, l), _(e, t, a, i, l), oT(e, t, a, i, l), Zc(e, t, a, i, l));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], rg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function x1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, yi(i, t, void 0, e), e.currentTarget = null;
    }
    function cT(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          x1(e, h, p), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var E = t[S], M = E.instance, D = E.currentTarget, U = E.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          x1(e, U, D), i = M;
        }
    }
    function T1(e, t) {
      for (var a = (t & Ao) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        cT(s, f, a);
      }
      fd();
    }
    function fT(e, t, a, i, l) {
      var s = tc(a), f = [];
      sT(f, e, i, a, s, t), T1(f, t);
    }
    function Wt(e, t) {
      rg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Pw(t), l = hT(e, a);
      i.has(l) || (w1(t, e, Hu, a), i.add(l));
    }
    function ag(e, t, a) {
      rg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ao), w1(a, e, i, t);
    }
    var Nh = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[Nh]) {
        e[Nh] = !0, Qn.forEach(function(a) {
          a !== "selectionchange" && (rg.has(a) || ag(a, !1, e), ag(a, !0, e));
        });
        var t = e.nodeType === za ? e : e.ownerDocument;
        t !== null && (t[Nh] || (t[Nh] = !0, ag("selectionchange", !1, t)));
      }
    }
    function w1(e, t, a, i, l) {
      var s = ql(e, t, a), f = void 0;
      Yu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? wi(e, t, s, f) : Jl(e, t, s) : f !== void 0 ? Pc(e, t, s, f) : Vd(e, t, s);
    }
    function R1(e, t) {
      return e === t || e.nodeType === un && e.parentNode === t;
    }
    function ig(e, t, a, i, l) {
      var s = i;
      if (!(t & hi) && !(t & Hu)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var h = p.tag;
              if (h === j || h === W) {
                var S = p.stateNode.containerInfo;
                if (R1(S, f))
                  break;
                if (h === W)
                  for (var E = p.return; E !== null; ) {
                    var M = E.tag;
                    if (M === j || M === W) {
                      var D = E.stateNode.containerInfo;
                      if (R1(D, f))
                        return;
                    }
                    E = E.return;
                  }
                for (; S !== null; ) {
                  var U = gs(S);
                  if (U === null)
                    return;
                  var $ = U.tag;
                  if ($ === G || $ === ee) {
                    p = s = U;
                    continue e;
                  }
                  S = S.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      ld(function() {
        return fT(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function dT(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], S = e, E = null; S !== null; ) {
        var M = S, D = M.stateNode, U = M.tag;
        if (U === G && D !== null && (E = D, p !== null)) {
          var $ = $o(S, p);
          $ != null && h.push(rp(S, $, E));
        }
        if (l)
          break;
        S = S.return;
      }
      return h;
    }
    function Oh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === G && f !== null) {
          var h = f, S = $o(l, a);
          S != null && i.unshift(rp(l, S, h));
          var E = $o(l, t);
          E != null && i.push(rp(l, E, h));
        }
        l = l.return;
      }
      return i;
    }
    function nf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== G);
      return e || null;
    }
    function pT(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = nf(s))
        l++;
      for (var f = 0, p = i; p; p = nf(p))
        f++;
      for (; l - f > 0; )
        a = nf(a), l--;
      for (; f - l > 0; )
        i = nf(i), f--;
      for (var h = l; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = nf(a), i = nf(i);
      }
      return null;
    }
    function k1(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, S = h.alternate, E = h.stateNode, M = h.tag;
        if (S !== null && S === i)
          break;
        if (M === G && E !== null) {
          var D = E;
          if (l) {
            var U = $o(p, s);
            U != null && f.unshift(rp(p, U, D));
          } else if (!l) {
            var $ = $o(p, s);
            $ != null && f.push(rp(p, $, D));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function vT(e, t, a, i, l) {
      var s = i && l ? pT(i, l) : null;
      i !== null && k1(e, t, i, s, !1), l !== null && a !== null && k1(e, a, l, s, !0);
    }
    function hT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ma = !1, ap = "dangerouslySetInnerHTML", Lh = "suppressContentEditableWarning", ou = "suppressHydrationWarning", D1 = "autoFocus", ms = "children", ys = "style", zh = "__html", og, Ah, ip, _1, Uh, M1, N1;
    og = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ah = function(e, t) {
      ec(e, t), nd(e, t), Iv(e, t, {
        registrationNameDependencies: gr,
        possibleRegistrationNames: Ia
      });
    }, M1 = xn && !document.documentMode, ip = function(e, t, a) {
      if (!ma) {
        var i = $h(a), l = $h(t);
        l !== i && (ma = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, _1 = function(e) {
      if (!ma) {
        ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Uh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, N1 = function(e, t) {
      var a = e.namespaceURI === di ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var mT = /\r\n?/g, yT = /\u0000|\uFFFD/g;
    function $h(e) {
      ka(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(mT, `
`).replace(yT, "");
    }
    function Fh(e, t, a, i) {
      var l = $h(t), s = $h(e);
      if (s !== l && (i && (ma || (ma = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && bn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function O1(e) {
      return e.nodeType === za ? e : e.ownerDocument;
    }
    function gT() {
    }
    function jh(e) {
      e.onclick = gT;
    }
    function ST(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ys)
            f && Object.freeze(f), zv(t, f);
          else if (s === ap) {
            var p = f ? f[zh] : void 0;
            p != null && xv(t, p);
          } else if (s === ms)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && Xs(t, f);
            } else
              typeof f == "number" && Xs(t, "" + f);
          else
            s === Lh || s === ou || s === D1 || (gr.hasOwnProperty(s) ? f != null && (typeof f != "function" && Uh(s, f), s === "onScroll" && Wt("scroll", t)) : f != null && Qa(t, s, f, l));
        }
    }
    function CT(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === ys ? zv(e, f) : s === ap ? xv(e, f) : s === ms ? Xs(e, f) : Qa(e, s, f, i);
      }
    }
    function ET(e, t, a, i) {
      var l, s = O1(a), f, p = i;
      if (p === di && (p = Ws(e)), p === di) {
        if (l = vi(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var S = h.firstChild;
          f = h.removeChild(S);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === di && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Wn.call(og, e) && (og[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function bT(e, t) {
      return O1(t).createTextNode(e);
    }
    function xT(e, t, a, i) {
      var l = vi(t, a);
      Ah(t, a);
      var s;
      switch (t) {
        case "dialog":
          Wt("cancel", e), Wt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Wt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < tp.length; f++)
            Wt(tp[f], e);
          s = a;
          break;
        case "source":
          Wt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Wt("error", e), Wt("load", e), s = a;
          break;
        case "details":
          Wt("toggle", e), s = a;
          break;
        case "input":
          zu(e, a), s = Lu(e, a), Wt("invalid", e);
          break;
        case "option":
          Gs(e, a), s = a;
          break;
        case "select":
          Sv(e, a), s = Yf(e, a), Wt("invalid", e);
          break;
        case "textarea":
          Cv(e, a), s = Qf(e, a), Wt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Zs(t, s), ST(t, e, i, s, l), t) {
        case "input":
          Oo(e), Au(e, a, !1);
          break;
        case "textarea":
          Oo(e), bv(e);
          break;
        case "option":
          If(e, a);
          break;
        case "select":
          yy(e, a);
          break;
        default:
          typeof s.onClick == "function" && jh(e);
          break;
      }
    }
    function TT(e, t, a, i, l) {
      Ah(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Lu(e, a), p = Lu(e, i), s = [];
          break;
        case "select":
          f = Yf(e, a), p = Yf(e, i), s = [];
          break;
        case "textarea":
          f = Qf(e, a), p = Qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && jh(e);
          break;
      }
      Zs(t, p);
      var h, S, E = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === ys) {
            var M = f[h];
            for (S in M)
              M.hasOwnProperty(S) && (E || (E = {}), E[S] = "");
          } else
            h === ap || h === ms || h === Lh || h === ou || h === D1 || (gr.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var D = p[h], U = f != null ? f[h] : void 0;
        if (!(!p.hasOwnProperty(h) || D === U || D == null && U == null))
          if (h === ys)
            if (D && Object.freeze(D), U) {
              for (S in U)
                U.hasOwnProperty(S) && (!D || !D.hasOwnProperty(S)) && (E || (E = {}), E[S] = "");
              for (S in D)
                D.hasOwnProperty(S) && U[S] !== D[S] && (E || (E = {}), E[S] = D[S]);
            } else
              E || (s || (s = []), s.push(h, E)), E = D;
          else if (h === ap) {
            var $ = D ? D[zh] : void 0, B = U ? U[zh] : void 0;
            $ != null && B !== $ && (s = s || []).push(h, $);
          } else
            h === ms ? (typeof D == "string" || typeof D == "number") && (s = s || []).push(h, "" + D) : h === Lh || h === ou || (gr.hasOwnProperty(h) ? (D != null && (typeof D != "function" && Uh(h, D), h === "onScroll" && Wt("scroll", e)), !s && U !== D && (s = [])) : (s = s || []).push(h, D));
      }
      return E && (Fu(E, p[ys]), (s = s || []).push(ys, E)), s;
    }
    function wT(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Bf(e, l);
      var s = vi(a, i), f = vi(a, l);
      switch (CT(e, t, s, f), a) {
        case "input":
          Dl(e, l);
          break;
        case "textarea":
          Ev(e, l);
          break;
        case "select":
          gy(e, l);
          break;
      }
    }
    function RT(e) {
      {
        var t = e.toLowerCase();
        return Js.hasOwnProperty(t) && Js[t] || null;
      }
    }
    function kT(e, t, a, i, l, s, f) {
      var p, h;
      switch (p = vi(t, a), Ah(t, a), t) {
        case "dialog":
          Wt("cancel", e), Wt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Wt("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < tp.length; S++)
            Wt(tp[S], e);
          break;
        case "source":
          Wt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Wt("error", e), Wt("load", e);
          break;
        case "details":
          Wt("toggle", e);
          break;
        case "input":
          zu(e, a), Wt("invalid", e);
          break;
        case "option":
          Gs(e, a);
          break;
        case "select":
          Sv(e, a), Wt("invalid", e);
          break;
        case "textarea":
          Cv(e, a), Wt("invalid", e);
          break;
      }
      Zs(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var E = e.attributes, M = 0; M < E.length; M++) {
          var D = E[M].name.toLowerCase();
          switch (D) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(E[M].name);
          }
        }
      }
      var U = null;
      for (var $ in a)
        if (a.hasOwnProperty($)) {
          var B = a[$];
          if ($ === ms)
            typeof B == "string" ? e.textContent !== B && (a[ou] !== !0 && Fh(e.textContent, B, s, f), U = [ms, B]) : typeof B == "number" && e.textContent !== "" + B && (a[ou] !== !0 && Fh(e.textContent, B, s, f), U = [ms, "" + B]);
          else if (gr.hasOwnProperty($))
            B != null && (typeof B != "function" && Uh($, B), $ === "onScroll" && Wt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var me = void 0, Le = p && zn ? null : Fr($);
            if (a[ou] !== !0) {
              if (!($ === Lh || $ === ou || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === ap) {
                  var ke = e.innerHTML, vt = B ? B[zh] : void 0;
                  if (vt != null) {
                    var ct = N1(e, vt);
                    ct !== ke && ip($, ke, ct);
                  }
                } else if ($ === ys) {
                  if (h.delete($), M1) {
                    var L = Ry(B);
                    me = e.getAttribute("style"), L !== me && ip($, me, L);
                  }
                } else if (p && !zn)
                  h.delete($.toLowerCase()), me = Tl(e, $, B), B !== me && ip($, me, B);
                else if (!en($, Le, p) && !Lt($, B, Le, p)) {
                  var I = !1;
                  if (Le !== null)
                    h.delete(Le.attributeName), me = _o(e, $, B, Le);
                  else {
                    var z = i;
                    if (z === di && (z = Ws(t)), z === di)
                      h.delete($.toLowerCase());
                    else {
                      var J = RT($);
                      J !== null && J !== $ && (I = !0, h.delete(J)), h.delete($);
                    }
                    me = Tl(e, $, B);
                  }
                  var ye = zn;
                  !ye && B !== me && !I && ip($, me, B);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[ou] !== !0 && _1(h), t) {
        case "input":
          Oo(e), Au(e, a, !0);
          break;
        case "textarea":
          Oo(e), bv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jh(e);
          break;
      }
      return U;
    }
    function DT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function lg(e, t) {
      {
        if (ma)
          return;
        ma = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ug(e, t) {
      {
        if (ma)
          return;
        ma = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function sg(e, t, a) {
      {
        if (ma)
          return;
        ma = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function cg(e, t) {
      {
        if (t === "" || ma)
          return;
        ma = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function _T(e, t, a) {
      switch (t) {
        case "input":
          hv(e, a);
          return;
        case "textarea":
          Wf(e, a);
          return;
        case "select":
          Sy(e, a);
          return;
      }
    }
    var op = function() {
    }, lp = function() {
    };
    {
      var MT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], L1 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], NT = L1.concat(["button"]), OT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], z1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = ut({}, e || z1), i = {
          tag: t
        };
        return L1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), NT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), MT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var LT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return OT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, zT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, A1 = {};
      op = function(e, t, a) {
        a = a || z1;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = LT(e, l) ? null : i, f = s ? null : zT(e, a), p = s || f;
        if (p) {
          var h = p.tag, S = !!s + "|" + e + "|" + h;
          if (!A1[S]) {
            A1[S] = !0;
            var E = e, M = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", M = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var D = "";
              h === "table" && e === "tr" && (D += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, h, M, D);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, h);
          }
        }
      };
    }
    var Hh = "suppressHydrationWarning", Ph = "$", Vh = "/$", up = "$?", sp = "$!", AT = "style", fg = null, dg = null;
    function UT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case za:
        case Lo: {
          t = i === za ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Xf(null, "");
          break;
        }
        default: {
          var s = i === un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Xf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function $T(e, t, a) {
      {
        var i = e, l = Xf(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function PN(e) {
      return e;
    }
    function FT(e) {
      fg = Gr(), dg = Zx();
      var t = null;
      return Nn(!1), t;
    }
    function jT(e) {
      Jx(dg), Nn(fg), fg = null, dg = null;
    }
    function HT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (op(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = lp(f.ancestorInfo, e);
          op(null, p, h);
        }
        s = f.namespace;
      }
      var S = ET(e, t, a, s);
      return dp(l, S), Cg(S, t), S;
    }
    function PT(e, t) {
      e.appendChild(t);
    }
    function VT(e, t, a, i, l) {
      switch (xT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function BT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = lp(f.ancestorInfo, t);
          op(null, p, h);
        }
      }
      return TT(e, t, a, i);
    }
    function pg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function IT(e, t, a, i) {
      {
        var l = a;
        op(null, e, l.ancestorInfo);
      }
      var s = bT(e, t);
      return dp(i, s), s;
    }
    function YT() {
      var e = window.event;
      return e === void 0 ? bi : ur(e.type);
    }
    var vg = typeof setTimeout == "function" ? setTimeout : void 0, GT = typeof clearTimeout == "function" ? clearTimeout : void 0, hg = -1, U1 = typeof Promise == "function" ? Promise : void 0, QT = typeof queueMicrotask == "function" ? queueMicrotask : typeof U1 < "u" ? function(e) {
      return U1.resolve(null).then(e).catch(WT);
    } : vg;
    function WT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function KT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function XT(e, t, a, i, l, s) {
      wT(e, t, a, i, l), Cg(e, l);
    }
    function $1(e) {
      Xs(e, "");
    }
    function qT(e, t, a) {
      e.nodeValue = a;
    }
    function ZT(e, t) {
      e.appendChild(t);
    }
    function JT(e, t) {
      var a;
      e.nodeType === un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && jh(a);
    }
    function ew(e, t, a) {
      e.insertBefore(t, a);
    }
    function tw(e, t, a) {
      e.nodeType === un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function nw(e, t) {
      e.removeChild(t);
    }
    function rw(e, t) {
      e.nodeType === un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function mg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === un) {
          var s = l.data;
          if (s === Vh)
            if (i === 0) {
              e.removeChild(l), st(t);
              return;
            } else
              i--;
          else
            (s === Ph || s === up || s === sp) && i++;
        }
        a = l;
      } while (a);
      st(t);
    }
    function aw(e, t) {
      e.nodeType === un ? mg(e.parentNode, t) : e.nodeType === Er && mg(e, t), st(e);
    }
    function iw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ow(e) {
      e.nodeValue = "";
    }
    function lw(e, t) {
      e = e;
      var a = t[AT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = qs("display", i);
    }
    function uw(e, t) {
      e.nodeValue = t;
    }
    function sw(e) {
      e.nodeType === Er ? e.textContent = "" : e.nodeType === za && e.documentElement && e.removeChild(e.documentElement);
    }
    function cw(e, t, a) {
      return e.nodeType !== Er || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function fw(e, t) {
      return t === "" || e.nodeType !== pi ? null : e;
    }
    function dw(e) {
      return e.nodeType !== un ? null : e;
    }
    function F1(e) {
      return e.data === up;
    }
    function yg(e) {
      return e.data === sp;
    }
    function pw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function vw(e, t) {
      e._reactRetry = t;
    }
    function Bh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Er || t === pi)
          break;
        if (t === un) {
          var a = e.data;
          if (a === Ph || a === sp || a === up)
            break;
          if (a === Vh)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return Bh(e.nextSibling);
    }
    function hw(e) {
      return Bh(e.firstChild);
    }
    function mw(e) {
      return Bh(e.firstChild);
    }
    function yw(e) {
      return Bh(e.nextSibling);
    }
    function gw(e, t, a, i, l, s, f) {
      dp(s, e), Cg(e, a);
      var p;
      {
        var h = l;
        p = h.namespace;
      }
      var S = (s.mode & at) !== Ae;
      return kT(e, t, a, p, i, S, f);
    }
    function Sw(e, t, a, i) {
      return dp(a, e), a.mode & at, DT(e, t);
    }
    function Cw(e, t) {
      dp(t, e);
    }
    function Ew(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === un) {
          var i = t.data;
          if (i === Vh) {
            if (a === 0)
              return cp(t);
            a--;
          } else
            (i === Ph || i === sp || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function j1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === un) {
          var i = t.data;
          if (i === Ph || i === sp || i === up) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function bw(e) {
      st(e);
    }
    function xw(e) {
      st(e);
    }
    function Tw(e) {
      return e !== "head" && e !== "body";
    }
    function ww(e, t, a, i) {
      var l = !0;
      Fh(t.nodeValue, a, i, l);
    }
    function Rw(e, t, a, i, l, s) {
      if (t[Hh] !== !0) {
        var f = !0;
        Fh(i.nodeValue, l, s, f);
      }
    }
    function kw(e, t) {
      t.nodeType === Er ? lg(e, t) : t.nodeType === un || ug(e, t);
    }
    function Dw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Er ? lg(a, t) : t.nodeType === un || ug(a, t));
      }
    }
    function _w(e, t, a, i, l) {
      (l || t[Hh] !== !0) && (i.nodeType === Er ? lg(a, i) : i.nodeType === un || ug(a, i));
    }
    function Mw(e, t, a) {
      sg(e, t);
    }
    function Nw(e, t) {
      cg(e, t);
    }
    function Ow(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && sg(i, t);
      }
    }
    function Lw(e, t) {
      {
        var a = e.parentNode;
        a !== null && cg(a, t);
      }
    }
    function zw(e, t, a, i, l, s) {
      (s || t[Hh] !== !0) && sg(a, i);
    }
    function Aw(e, t, a, i, l) {
      (l || t[Hh] !== !0) && cg(a, i);
    }
    function Uw(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function $w(e) {
      np(e);
    }
    var rf = Math.random().toString(36).slice(2), af = "__reactFiber$" + rf, gg = "__reactProps$" + rf, fp = "__reactContainer$" + rf, Sg = "__reactEvents$" + rf, Fw = "__reactListeners$" + rf, jw = "__reactHandles$" + rf;
    function Hw(e) {
      delete e[af], delete e[gg], delete e[Sg], delete e[Fw], delete e[jw];
    }
    function dp(e, t) {
      t[af] = e;
    }
    function Ih(e, t) {
      t[fp] = e;
    }
    function H1(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function gs(e) {
      var t = e[af];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[af], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = j1(e); l !== null; ) {
              var s = l[af];
              if (s)
                return s;
              l = j1(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function lu(e) {
      var t = e[af] || e[fp];
      return t && (t.tag === G || t.tag === ee || t.tag === oe || t.tag === j) ? t : null;
    }
    function of(e) {
      if (e.tag === G || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[gg] || null;
    }
    function Cg(e, t) {
      e[gg] = t;
    }
    function Pw(e) {
      var t = e[Sg];
      return t === void 0 && (t = e[Sg] = /* @__PURE__ */ new Set()), t;
    }
    var P1 = {}, V1 = g.ReactDebugCurrentFrame;
    function Gh(e) {
      if (e) {
        var t = e._owner, a = ku(e.type, e._source, t ? t.type : null);
        V1.setExtraStackFrame(a);
      } else
        V1.setExtraStackFrame(null);
    }
    function ki(e, t, a, i, l) {
      {
        var s = Function.call.bind(Wn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              p = S;
            }
            p && !(p instanceof Error) && (Gh(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Gh(null)), p instanceof Error && !(p.message in P1) && (P1[p.message] = !0, Gh(l), y("Failed %s type: %s", a, p.message), Gh(null));
          }
      }
    }
    var Eg = [], Qh;
    Qh = [];
    var ll = -1;
    function uu(e) {
      return {
        current: e
      };
    }
    function Mr(e, t) {
      if (ll < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Qh[ll] && y("Unexpected Fiber popped."), e.current = Eg[ll], Eg[ll] = null, Qh[ll] = null, ll--;
    }
    function Nr(e, t, a) {
      ll++, Eg[ll] = e.current, Qh[ll] = a, e.current = t;
    }
    var bg;
    bg = {};
    var ja = {};
    Object.freeze(ja);
    var ul = uu(ja), vo = uu(!1), xg = ja;
    function lf(e, t, a) {
      return a && ho(t) ? xg : ul.current;
    }
    function B1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function uf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ja;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Xe(e) || "Unknown";
          ki(i, s, "context", p);
        }
        return l && B1(e, t, s), s;
      }
    }
    function Wh() {
      return vo.current;
    }
    function ho(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Kh(e) {
      Mr(vo, e), Mr(ul, e);
    }
    function Tg(e) {
      Mr(vo, e), Mr(ul, e);
    }
    function I1(e, t, a) {
      {
        if (ul.current !== ja)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Nr(ul, t, e), Nr(vo, a, e);
      }
    }
    function Y1(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            bg[s] || (bg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = Xe(e) || "Unknown";
          ki(l, f, "child context", h);
        }
        return ut({}, a, f);
      }
    }
    function Xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ja;
        return xg = ul.current, Nr(ul, a, e), Nr(vo, vo.current, e), !0;
      }
    }
    function G1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Y1(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = l, Mr(vo, e), Mr(ul, e), Nr(ul, l, e), Nr(vo, a, e);
        } else
          Mr(vo, e), Nr(vo, a, e);
      }
    }
    function Vw(e) {
      {
        if (!md(e) || e.tag !== H)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case j:
              return t.stateNode.context;
            case H: {
              var a = t.type;
              if (ho(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var su = 0, qh = 1, sl = null, wg = !1, Rg = !1;
    function Q1(e) {
      sl === null ? sl = [e] : sl.push(e);
    }
    function Bw(e) {
      wg = !0, Q1(e);
    }
    function W1() {
      wg && cu();
    }
    function cu() {
      if (!Rg && sl !== null) {
        Rg = !0;
        var e = 0, t = da();
        try {
          var a = !0, i = sl;
          for (yn(Jn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          sl = null, wg = !1;
        } catch (s) {
          throw sl !== null && (sl = sl.slice(e + 1)), uc(cc, cu), s;
        } finally {
          yn(t), Rg = !1;
        }
      }
      return null;
    }
    var sf = [], cf = 0, Zh = null, Jh = 0, ti = [], ni = 0, Ss = null, cl = 1, fl = "";
    function Iw(e) {
      return Es(), (e.flags & pd) !== Oe;
    }
    function Yw(e) {
      return Es(), Jh;
    }
    function Gw() {
      var e = fl, t = cl, a = t & ~Qw(t);
      return a.toString(32) + e;
    }
    function Cs(e, t) {
      Es(), sf[cf++] = Jh, sf[cf++] = Zh, Zh = e, Jh = t;
    }
    function K1(e, t, a) {
      Es(), ti[ni++] = cl, ti[ni++] = fl, ti[ni++] = Ss, Ss = e;
      var i = cl, l = fl, s = em(i) - 1, f = i & ~(1 << s), p = a + 1, h = em(t) + s;
      if (h > 30) {
        var S = s - s % 5, E = (1 << S) - 1, M = (f & E).toString(32), D = f >> S, U = s - S, $ = em(t) + U, B = p << U, me = B | D, Le = M + l;
        cl = 1 << $ | me, fl = Le;
      } else {
        var ke = p << s, vt = ke | f, ct = l;
        cl = 1 << h | vt, fl = ct;
      }
    }
    function kg(e) {
      Es();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Cs(e, a), K1(e, a, i);
      }
    }
    function em(e) {
      return 32 - mc(e);
    }
    function Qw(e) {
      return 1 << em(e) - 1;
    }
    function Dg(e) {
      for (; e === Zh; )
        Zh = sf[--cf], sf[cf] = null, Jh = sf[--cf], sf[cf] = null;
      for (; e === Ss; )
        Ss = ti[--ni], ti[ni] = null, fl = ti[--ni], ti[ni] = null, cl = ti[--ni], ti[ni] = null;
    }
    function Ww() {
      return Es(), Ss !== null ? {
        id: cl,
        overflow: fl
      } : null;
    }
    function Kw(e, t) {
      Es(), ti[ni++] = cl, ti[ni++] = fl, ti[ni++] = Ss, cl = t.id, fl = t.overflow, Ss = e;
    }
    function Es() {
      cr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var sr = null, ri = null, Di = !1, bs = !1, fu = null;
    function Xw() {
      Di && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function X1() {
      bs = !0;
    }
    function qw() {
      return bs;
    }
    function Zw(e) {
      var t = e.stateNode.containerInfo;
      return ri = mw(t), sr = e, Di = !0, fu = null, bs = !1, !0;
    }
    function Jw(e, t, a) {
      return ri = yw(t), sr = e, Di = !0, fu = null, bs = !1, a !== null && Kw(e, a), !0;
    }
    function q1(e, t) {
      switch (e.tag) {
        case j: {
          kw(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & at) !== Ae;
          _w(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case oe: {
          var i = e.memoizedState;
          i.dehydrated !== null && Dw(i.dehydrated, t);
          break;
        }
      }
    }
    function Z1(e, t) {
      q1(e, t);
      var a = n_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ct) : i.push(a);
    }
    function _g(e, t) {
      {
        if (bs)
          return;
        switch (e.tag) {
          case j: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, Mw(a, i);
                break;
              case ee:
                var l = t.pendingProps;
                Nw(a, l);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var h = t.type, S = t.pendingProps, E = (e.mode & at) !== Ae;
                zw(
                  s,
                  f,
                  p,
                  h,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case ee: {
                var M = t.pendingProps, D = (e.mode & at) !== Ae;
                Aw(
                  s,
                  f,
                  p,
                  M,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
            }
            break;
          }
          case oe: {
            var U = e.memoizedState, $ = U.dehydrated;
            if ($ !== null)
              switch (t.tag) {
                case G:
                  var B = t.type;
                  t.pendingProps, Ow($, B);
                  break;
                case ee:
                  var me = t.pendingProps;
                  Lw($, me);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function J1(e, t) {
      t.flags = t.flags & ~la | At, _g(e, t);
    }
    function eC(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = cw(t, a);
          return i !== null ? (e.stateNode = i, sr = e, ri = hw(i), !0) : !1;
        }
        case ee: {
          var l = e.pendingProps, s = fw(t, l);
          return s !== null ? (e.stateNode = s, sr = e, ri = null, !0) : !1;
        }
        case oe: {
          var f = dw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ww(),
              retryLane: Dr
            };
            e.memoizedState = p;
            var h = r_(f);
            return h.return = e, e.child = h, sr = e, ri = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Mg(e) {
      return (e.mode & at) !== Ae && (e.flags & Ie) === Oe;
    }
    function Ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Og(e) {
      if (Di) {
        var t = ri;
        if (!t) {
          Mg(e) && (_g(sr, e), Ng()), J1(sr, e), Di = !1, sr = e;
          return;
        }
        var a = t;
        if (!eC(e, t)) {
          Mg(e) && (_g(sr, e), Ng()), t = cp(a);
          var i = sr;
          if (!t || !eC(e, t)) {
            J1(sr, e), Di = !1, sr = e;
            return;
          }
          Z1(i, a);
        }
      }
    }
    function eR(e, t, a) {
      var i = e.stateNode, l = !bs, s = gw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function tR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Sw(t, a, e);
      if (i) {
        var l = sr;
        if (l !== null)
          switch (l.tag) {
            case j: {
              var s = l.stateNode.containerInfo, f = (l.mode & at) !== Ae;
              ww(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = l.type, h = l.memoizedProps, S = l.stateNode, E = (l.mode & at) !== Ae;
              Rw(
                p,
                h,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function nR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Cw(a, e);
    }
    function rR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ew(a);
    }
    function tC(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== j && t.tag !== oe; )
        t = t.return;
      sr = t;
    }
    function tm(e) {
      if (e !== sr)
        return !1;
      if (!Di)
        return tC(e), Di = !0, !1;
      if (e.tag !== j && (e.tag !== G || Tw(e.type) && !pg(e.type, e.memoizedProps))) {
        var t = ri;
        if (t)
          if (Mg(e))
            nC(e), Ng();
          else
            for (; t; )
              Z1(e, t), t = cp(t);
      }
      return tC(e), e.tag === oe ? ri = rR(e) : ri = sr ? cp(e.stateNode) : null, !0;
    }
    function aR() {
      return Di && ri !== null;
    }
    function nC(e) {
      for (var t = ri; t; )
        q1(e, t), t = cp(t);
    }
    function ff() {
      sr = null, ri = null, Di = !1, bs = !1;
    }
    function rC() {
      fu !== null && (qE(fu), fu = null);
    }
    function cr() {
      return Di;
    }
    function Lg(e) {
      fu === null ? fu = [e] : fu.push(e);
    }
    var iR = g.ReactCurrentBatchConfig, oR = null;
    function lR() {
      return iR.transition;
    }
    var _i = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var uR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], Ts = /* @__PURE__ */ new Set();
      _i.recordUnsafeLifecycleWarnings = function(e, t) {
        Ts.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, _i.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(D) {
          e.add(Xe(D) || "Component"), Ts.add(D.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(D) {
          t.add(Xe(D) || "Component"), Ts.add(D.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(D) {
          a.add(Xe(D) || "Component"), Ts.add(D.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(D) {
          i.add(Xe(D) || "Component"), Ts.add(D.type);
        }), yp = []);
        var l = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(D) {
          l.add(Xe(D) || "Component"), Ts.add(D.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(D) {
          s.add(Xe(D) || "Component"), Ts.add(D.type);
        }), Sp = []), t.size > 0) {
          var f = xs(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = xs(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = xs(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var S = xs(e);
          k(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var E = xs(a);
          k(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (l.size > 0) {
          var M = xs(l);
          k(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var nm = /* @__PURE__ */ new Map(), aC = /* @__PURE__ */ new Set();
      _i.recordLegacyContextWarning = function(e, t) {
        var a = uR(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!aC.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, _i.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), aC.add(s.type);
            });
            var l = xs(i);
            try {
              Rt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              vn();
            }
          }
        });
      }, _i.discardPendingWarnings = function() {
        vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    function Mi(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var zg = uu(null), Ag;
    Ag = {};
    var rm = null, df = null, Ug = null, am = !1;
    function im() {
      rm = null, df = null, Ug = null, am = !1;
    }
    function iC() {
      am = !0;
    }
    function oC() {
      am = !1;
    }
    function lC(e, t, a) {
      Nr(zg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ag && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ag;
    }
    function $g(e, t) {
      var a = zg.current;
      Mr(zg, t), e._currentValue = a;
    }
    function Fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Xo(i.childLanes, t) ? l !== null && !Xo(l.childLanes, t) && (l.childLanes = Ze(l.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), l !== null && (l.childLanes = Ze(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function sR(e, t, a) {
      cR(e, t, a);
    }
    function cR(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === H) {
                var p = mn(a), h = dl(Ot, p);
                h.tag = lm;
                var S = i.updateQueue;
                if (S !== null) {
                  var E = S.shared, M = E.pending;
                  M === null ? h.next = h : (h.next = M.next, M.next = h), E.pending = h;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var D = i.alternate;
              D !== null && (D.lanes = Ze(D.lanes, a)), Fg(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === be)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === lt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = Ze(U.lanes, a);
          var $ = U.alternate;
          $ !== null && ($.lanes = Ze($.lanes, a)), Fg(U, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var B = l.sibling;
            if (B !== null) {
              B.return = l.return, l = B;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function pf(e, t) {
      rm = e, df = null, Ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (_r(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function Ln(e) {
      am && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ug !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (df === null) {
          if (rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          df = a, rm.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          df = df.next = a;
      }
      return t;
    }
    var ws = null;
    function jg(e) {
      ws === null ? ws = [e] : ws.push(e);
    }
    function fR() {
      if (ws !== null) {
        for (var e = 0; e < ws.length; e++) {
          var t = ws[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ws = null;
      }
    }
    function uC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, jg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, om(e, i);
    }
    function dR(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, jg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function pR(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, jg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, om(e, i);
    }
    function ya(e, t) {
      return om(e, t);
    }
    var vR = om;
    function om(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (At | la)) !== Oe && sb(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ze(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (l.flags & (At | la)) !== Oe && sb(e), i = l, l = l.return;
      if (i.tag === j) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var sC = 0, cC = 1, lm = 2, Hg = 3, um = !1, Pg, sm;
    Pg = !1, sm = null;
    function Vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function fC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function dl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: sC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function du(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (sm === l && !Pg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Pg = !0), vD()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, vR(e, a);
      } else
        return pR(e, l, t, a);
    }
    function cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (_d(a)) {
          var s = l.lanes;
          s = Nd(s, e.pendingLanes);
          var f = Ze(s, a);
          l.lanes = f, Gl(e, f);
        }
      }
    }
    function Bg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var S = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = S : (f.next = S, f = S), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function hR(e, t, a, i, l, s) {
      switch (a.tag) {
        case cC: {
          var f = a.payload;
          if (typeof f == "function") {
            iC();
            var p = f.call(s, i, l);
            {
              if (e.mode & Gt) {
                hn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  hn(!1);
                }
              }
              oC();
            }
            return p;
          }
          return f;
        }
        case Hg:
          e.flags = e.flags & ~Dn | Ie;
        case sC: {
          var h = a.payload, S;
          if (typeof h == "function") {
            iC(), S = h.call(s, i, l);
            {
              if (e.mode & Gt) {
                hn(!0);
                try {
                  h.call(s, i, l);
                } finally {
                  hn(!1);
                }
              }
              oC();
            }
          } else
            S = h;
          return S == null ? i : ut({}, i, S);
        }
        case lm:
          return um = !0, i;
      }
      return i;
    }
    function fm(e, t, a, i) {
      var l = e.updateQueue;
      um = !1, sm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var h = p, S = h.next;
        h.next = null, f === null ? s = S : f.next = S, f = h;
        var E = e.alternate;
        if (E !== null) {
          var M = E.updateQueue, D = M.lastBaseUpdate;
          D !== f && (D === null ? M.firstBaseUpdate = S : D.next = S, M.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var U = l.baseState, $ = Y, B = null, me = null, Le = null, ke = s;
        do {
          var vt = ke.lane, ct = ke.eventTime;
          if (Xo(i, vt)) {
            if (Le !== null) {
              var I = {
                eventTime: ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: dt,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              Le = Le.next = I;
            }
            U = hR(e, l, ke, U, t, a);
            var z = ke.callback;
            if (z !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== dt) {
              e.flags |= Ka;
              var J = l.effects;
              J === null ? l.effects = [ke] : J.push(ke);
            }
          } else {
            var L = {
              eventTime: ct,
              lane: vt,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            Le === null ? (me = Le = L, B = U) : Le = Le.next = L, $ = Ze($, vt);
          }
          if (ke = ke.next, ke === null) {
            if (p = l.shared.pending, p === null)
              break;
            var ye = p, de = ye.next;
            ye.next = null, ke = de, l.lastBaseUpdate = ye, l.shared.pending = null;
          }
        } while (!0);
        Le === null && (B = U), l.baseState = B, l.firstBaseUpdate = me, l.lastBaseUpdate = Le;
        var Pe = l.shared.interleaved;
        if (Pe !== null) {
          var We = Pe;
          do
            $ = Ze($, We.lane), We = We.next;
          while (We !== Pe);
        } else
          s === null && (l.shared.lanes = Y);
        Yp($), e.lanes = $, e.memoizedState = U;
      }
      sm = null;
    }
    function mR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function dC() {
      um = !1;
    }
    function dm() {
      return um;
    }
    function pC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, mR(f, a));
        }
    }
    var Ig = {}, vC = new v.Component().refs, Yg, Gg, Qg, Wg, Kg, hC, pm, Xg, qg, Zg;
    {
      Yg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set();
      var mC = /* @__PURE__ */ new Set();
      pm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          mC.has(a) || (mC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, hC = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          Kg.has(a) || (Kg.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Ig, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Ig);
    }
    function Jg(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & Gt) {
          hn(!0);
          try {
            s = a(i, l);
          } finally {
            hn(!1);
          }
        }
        hC(t, s);
      }
      var f = s == null ? l : ut({}, l, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var e0 = {
      isMounted: Br,
      enqueueSetState: function(e, t, a) {
        var i = ia(e), l = Kr(), s = Cu(i), f = dl(l, s);
        f.payload = t, a != null && (pm(a, "setState"), f.callback = a);
        var p = du(i, f, s);
        p !== null && (Gn(p, i, s, l), cm(p, i, s)), ao(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ia(e), l = Kr(), s = Cu(i), f = dl(l, s);
        f.tag = cC, f.payload = t, a != null && (pm(a, "replaceState"), f.callback = a);
        var p = du(i, f, s);
        p !== null && (Gn(p, i, s, l), cm(p, i, s)), ao(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ia(e), i = Kr(), l = Cu(a), s = dl(i, l);
        s.tag = lm, t != null && (pm(t, "forceUpdate"), s.callback = t);
        var f = du(a, s, l);
        f !== null && (Gn(f, a, l, i), cm(f, a, l)), wd(a, l);
      }
    };
    function yC(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            hn(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              hn(!1);
            }
          }
          h === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_e(a, i) || !_e(l, s) : !0;
    }
    function yR(e, t, a) {
      var i = e.stateNode;
      {
        var l = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !qg.has(t) && (qg.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Qg.has(t) && (Qg.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || Rn(p)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function gC(e, t) {
      t.updater = e0, e.stateNode = t, Ul(t, e), t._reactInternalInstance = Ig;
    }
    function SC(e, t, a) {
      var i = !1, l = ja, s = ja, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ce && f._context === void 0
        );
        if (!p && !Zg.has(t)) {
          Zg.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === q ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Ln(f);
      else {
        l = lf(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? uf(e, l) : ja;
      }
      var E = new t(a, s);
      if (e.mode & Gt) {
        hn(!0);
        try {
          E = new t(a, s);
        } finally {
          hn(!1);
        }
      }
      var M = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      gC(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var D = Mt(t) || "Component";
          Gg.has(D) || (Gg.add(D), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, E.state === null ? "null" : "undefined", D));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var U = null, $ = null, B = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? B = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (B = "UNSAFE_componentWillUpdate"), U !== null || $ !== null || B !== null) {
            var me = Mt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Wg.has(me) || (Wg.add(me), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, me, Le, U !== null ? `
  ` + U : "", $ !== null ? `
  ` + $ : "", B !== null ? `
  ` + B : ""));
          }
        }
      }
      return i && B1(e, l, s), E;
    }
    function gR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), e0.enqueueReplaceState(t, t.state, null));
    }
    function CC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = Xe(e) || "Component";
          Yg.has(s) || (Yg.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        e0.enqueueReplaceState(t, t.state, null);
      }
    }
    function t0(e, t, a, i) {
      yR(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = vC, Vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = Ln(s);
      else {
        var f = lf(e, t, !0);
        l.context = uf(e, f);
      }
      {
        if (l.state === a) {
          var p = Mt(t) || "Component";
          Xg.has(p) || (Xg.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && _i.recordLegacyContextWarning(e, l), _i.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (Jg(e, t, h, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (gR(e, l), fm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var S = qe;
        S |= xr, (e.mode & ca) !== Ae && (S |= Tr), e.flags |= S;
      }
    }
    function SR(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, h = ja;
      if (typeof p == "object" && p !== null)
        h = Ln(p);
      else {
        var S = lf(e, t, !0);
        h = uf(e, S);
      }
      var E = t.getDerivedStateFromProps, M = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !M && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== h) && CC(e, l, a, h), dC();
      var D = e.memoizedState, U = l.state = D;
      if (fm(e, a, l, i), U = e.memoizedState, s === a && D === U && !Wh() && !dm()) {
        if (typeof l.componentDidMount == "function") {
          var $ = qe;
          $ |= xr, (e.mode & ca) !== Ae && ($ |= Tr), e.flags |= $;
        }
        return !1;
      }
      typeof E == "function" && (Jg(e, t, E, a), U = e.memoizedState);
      var B = dm() || yC(e, t, s, a, D, U, h);
      if (B) {
        if (!M && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var me = qe;
          me |= xr, (e.mode & ca) !== Ae && (me |= Tr), e.flags |= me;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Le = qe;
          Le |= xr, (e.mode & ca) !== Ae && (Le |= Tr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return l.props = a, l.state = U, l.context = h, B;
    }
    function CR(e, t, a, i, l) {
      var s = t.stateNode;
      fC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Mi(t.type, f);
      s.props = p;
      var h = t.pendingProps, S = s.context, E = a.contextType, M = ja;
      if (typeof E == "object" && E !== null)
        M = Ln(E);
      else {
        var D = lf(t, a, !0);
        M = uf(t, D);
      }
      var U = a.getDerivedStateFromProps, $ = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !$ && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || S !== M) && CC(t, s, i, M), dC();
      var B = t.memoizedState, me = s.state = B;
      if (fm(t, i, s, l), me = t.memoizedState, f === h && B === me && !Wh() && !dm() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= qe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= oa), !1;
      typeof U == "function" && (Jg(t, a, U, i), me = t.memoizedState);
      var Le = dm() || yC(t, a, p, i, B, me, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Le ? (!$ && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, me, M), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, me, M)), typeof s.componentDidUpdate == "function" && (t.flags |= qe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= oa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= qe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= oa), t.memoizedProps = i, t.memoizedState = me), s.props = i, s.state = me, s.context = M, Le;
    }
    var n0, r0, a0, i0, o0, EC = function(e, t) {
    };
    n0 = !1, r0 = !1, a0 = {}, i0 = {}, o0 = {}, EC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        i0[a] || (i0[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Cp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || or) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = Xe(e) || "Component";
          a0[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), a0[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== H)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          si(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var E = function(M) {
            var D = h.refs;
            D === vC && (D = h.refs = {}), M === null ? delete D[S] : D[S] = M;
          };
          return E._stringRef = S, E;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function vm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hm(e) {
      {
        var t = Xe(e) || "Component";
        if (o0[t])
          return;
        o0[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function bC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function xC(e) {
      function t(L, I) {
        if (e) {
          var z = L.deletions;
          z === null ? (L.deletions = [I], L.flags |= Ct) : z.push(I);
        }
      }
      function a(L, I) {
        if (!e)
          return null;
        for (var z = I; z !== null; )
          t(L, z), z = z.sibling;
        return null;
      }
      function i(L, I) {
        for (var z = /* @__PURE__ */ new Map(), J = I; J !== null; )
          J.key !== null ? z.set(J.key, J) : z.set(J.index, J), J = J.sibling;
        return z;
      }
      function l(L, I) {
        var z = Ls(L, I);
        return z.index = 0, z.sibling = null, z;
      }
      function s(L, I, z) {
        if (L.index = z, !e)
          return L.flags |= pd, I;
        var J = L.alternate;
        if (J !== null) {
          var ye = J.index;
          return ye < I ? (L.flags |= At, I) : ye;
        } else
          return L.flags |= At, I;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= At), L;
      }
      function p(L, I, z, J) {
        if (I === null || I.tag !== ee) {
          var ye = LS(z, L.mode, J);
          return ye.return = L, ye;
        } else {
          var de = l(I, z);
          return de.return = L, de;
        }
      }
      function h(L, I, z, J) {
        var ye = z.type;
        if (ye === Ma)
          return E(L, I, z.props.children, J, z.key);
        if (I !== null && (I.elementType === ye || // Keep this check inline so it only runs on the false path:
        pb(I, z) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Ue && bC(ye) === I.type)) {
          var de = l(I, z.props);
          return de.ref = Cp(L, I, z), de.return = L, de._debugSource = z._source, de._debugOwner = z._owner, de;
        }
        var Pe = OS(z, L.mode, J);
        return Pe.ref = Cp(L, I, z), Pe.return = L, Pe;
      }
      function S(L, I, z, J) {
        if (I === null || I.tag !== W || I.stateNode.containerInfo !== z.containerInfo || I.stateNode.implementation !== z.implementation) {
          var ye = zS(z, L.mode, J);
          return ye.return = L, ye;
        } else {
          var de = l(I, z.children || []);
          return de.return = L, de;
        }
      }
      function E(L, I, z, J, ye) {
        if (I === null || I.tag !== ne) {
          var de = bu(z, L.mode, J, ye);
          return de.return = L, de;
        } else {
          var Pe = l(I, z);
          return Pe.return = L, Pe;
        }
      }
      function M(L, I, z) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var J = LS("" + I, L.mode, z);
          return J.return = L, J;
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Hi: {
              var ye = OS(I, L.mode, z);
              return ye.ref = Cp(L, null, I), ye.return = L, ye;
            }
            case jr: {
              var de = zS(I, L.mode, z);
              return de.return = L, de;
            }
            case Ue: {
              var Pe = I._payload, We = I._init;
              return M(L, We(Pe), z);
            }
          }
          if (Rn(I) || ci(I)) {
            var Dt = bu(I, L.mode, z, null);
            return Dt.return = L, Dt;
          }
          vm(L, I);
        }
        return typeof I == "function" && hm(L), null;
      }
      function D(L, I, z, J) {
        var ye = I !== null ? I.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number")
          return ye !== null ? null : p(L, I, "" + z, J);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Hi:
              return z.key === ye ? h(L, I, z, J) : null;
            case jr:
              return z.key === ye ? S(L, I, z, J) : null;
            case Ue: {
              var de = z._payload, Pe = z._init;
              return D(L, I, Pe(de), J);
            }
          }
          if (Rn(z) || ci(z))
            return ye !== null ? null : E(L, I, z, J, null);
          vm(L, z);
        }
        return typeof z == "function" && hm(L), null;
      }
      function U(L, I, z, J, ye) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var de = L.get(z) || null;
          return p(I, de, "" + J, ye);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Hi: {
              var Pe = L.get(J.key === null ? z : J.key) || null;
              return h(I, Pe, J, ye);
            }
            case jr: {
              var We = L.get(J.key === null ? z : J.key) || null;
              return S(I, We, J, ye);
            }
            case Ue:
              var Dt = J._payload, gt = J._init;
              return U(L, I, z, gt(Dt), ye);
          }
          if (Rn(J) || ci(J)) {
            var Cn = L.get(z) || null;
            return E(I, Cn, J, ye, null);
          }
          vm(I, J);
        }
        return typeof J == "function" && hm(I), null;
      }
      function $(L, I, z) {
        {
          if (typeof L != "object" || L === null)
            return I;
          switch (L.$$typeof) {
            case Hi:
            case jr:
              EC(L, z);
              var J = L.key;
              if (typeof J != "string")
                break;
              if (I === null) {
                I = /* @__PURE__ */ new Set(), I.add(J);
                break;
              }
              if (!I.has(J)) {
                I.add(J);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case Ue:
              var ye = L._payload, de = L._init;
              $(de(ye), I, z);
              break;
          }
        }
        return I;
      }
      function B(L, I, z, J) {
        for (var ye = null, de = 0; de < z.length; de++) {
          var Pe = z[de];
          ye = $(Pe, ye, L);
        }
        for (var We = null, Dt = null, gt = I, Cn = 0, St = 0, fn = null; gt !== null && St < z.length; St++) {
          gt.index > St ? (fn = gt, gt = null) : fn = gt.sibling;
          var Lr = D(L, gt, z[St], J);
          if (Lr === null) {
            gt === null && (gt = fn);
            break;
          }
          e && gt && Lr.alternate === null && t(L, gt), Cn = s(Lr, Cn, St), Dt === null ? We = Lr : Dt.sibling = Lr, Dt = Lr, gt = fn;
        }
        if (St === z.length) {
          if (a(L, gt), cr()) {
            var yr = St;
            Cs(L, yr);
          }
          return We;
        }
        if (gt === null) {
          for (; St < z.length; St++) {
            var Pa = M(L, z[St], J);
            Pa !== null && (Cn = s(Pa, Cn, St), Dt === null ? We = Pa : Dt.sibling = Pa, Dt = Pa);
          }
          if (cr()) {
            var Xr = St;
            Cs(L, Xr);
          }
          return We;
        }
        for (var qr = i(L, gt); St < z.length; St++) {
          var zr = U(qr, L, St, z[St], J);
          zr !== null && (e && zr.alternate !== null && qr.delete(zr.key === null ? St : zr.key), Cn = s(zr, Cn, St), Dt === null ? We = zr : Dt.sibling = zr, Dt = zr);
        }
        if (e && qr.forEach(function(Mf) {
          return t(L, Mf);
        }), cr()) {
          var gl = St;
          Cs(L, gl);
        }
        return We;
      }
      function me(L, I, z, J) {
        var ye = ci(z);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          z[Symbol.toStringTag] === "Generator" && (r0 || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), r0 = !0), z.entries === ye && (n0 || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), n0 = !0);
          var de = ye.call(z);
          if (de)
            for (var Pe = null, We = de.next(); !We.done; We = de.next()) {
              var Dt = We.value;
              Pe = $(Dt, Pe, L);
            }
        }
        var gt = ye.call(z);
        if (gt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Cn = null, St = null, fn = I, Lr = 0, yr = 0, Pa = null, Xr = gt.next(); fn !== null && !Xr.done; yr++, Xr = gt.next()) {
          fn.index > yr ? (Pa = fn, fn = null) : Pa = fn.sibling;
          var qr = D(L, fn, Xr.value, J);
          if (qr === null) {
            fn === null && (fn = Pa);
            break;
          }
          e && fn && qr.alternate === null && t(L, fn), Lr = s(qr, Lr, yr), St === null ? Cn = qr : St.sibling = qr, St = qr, fn = Pa;
        }
        if (Xr.done) {
          if (a(L, fn), cr()) {
            var zr = yr;
            Cs(L, zr);
          }
          return Cn;
        }
        if (fn === null) {
          for (; !Xr.done; yr++, Xr = gt.next()) {
            var gl = M(L, Xr.value, J);
            gl !== null && (Lr = s(gl, Lr, yr), St === null ? Cn = gl : St.sibling = gl, St = gl);
          }
          if (cr()) {
            var Mf = yr;
            Cs(L, Mf);
          }
          return Cn;
        }
        for (var Xp = i(L, fn); !Xr.done; yr++, Xr = gt.next()) {
          var xo = U(Xp, L, yr, Xr.value, J);
          xo !== null && (e && xo.alternate !== null && Xp.delete(xo.key === null ? yr : xo.key), Lr = s(xo, Lr, yr), St === null ? Cn = xo : St.sibling = xo, St = xo);
        }
        if (e && Xp.forEach(function(z_) {
          return t(L, z_);
        }), cr()) {
          var L_ = yr;
          Cs(L, L_);
        }
        return Cn;
      }
      function Le(L, I, z, J) {
        if (I !== null && I.tag === ee) {
          a(L, I.sibling);
          var ye = l(I, z);
          return ye.return = L, ye;
        }
        a(L, I);
        var de = LS(z, L.mode, J);
        return de.return = L, de;
      }
      function ke(L, I, z, J) {
        for (var ye = z.key, de = I; de !== null; ) {
          if (de.key === ye) {
            var Pe = z.type;
            if (Pe === Ma) {
              if (de.tag === ne) {
                a(L, de.sibling);
                var We = l(de, z.props.children);
                return We.return = L, We._debugSource = z._source, We._debugOwner = z._owner, We;
              }
            } else if (de.elementType === Pe || // Keep this check inline so it only runs on the false path:
            pb(de, z) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ue && bC(Pe) === de.type) {
              a(L, de.sibling);
              var Dt = l(de, z.props);
              return Dt.ref = Cp(L, de, z), Dt.return = L, Dt._debugSource = z._source, Dt._debugOwner = z._owner, Dt;
            }
            a(L, de);
            break;
          } else
            t(L, de);
          de = de.sibling;
        }
        if (z.type === Ma) {
          var gt = bu(z.props.children, L.mode, J, z.key);
          return gt.return = L, gt;
        } else {
          var Cn = OS(z, L.mode, J);
          return Cn.ref = Cp(L, I, z), Cn.return = L, Cn;
        }
      }
      function vt(L, I, z, J) {
        for (var ye = z.key, de = I; de !== null; ) {
          if (de.key === ye)
            if (de.tag === W && de.stateNode.containerInfo === z.containerInfo && de.stateNode.implementation === z.implementation) {
              a(L, de.sibling);
              var Pe = l(de, z.children || []);
              return Pe.return = L, Pe;
            } else {
              a(L, de);
              break;
            }
          else
            t(L, de);
          de = de.sibling;
        }
        var We = zS(z, L.mode, J);
        return We.return = L, We;
      }
      function ct(L, I, z, J) {
        var ye = typeof z == "object" && z !== null && z.type === Ma && z.key === null;
        if (ye && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Hi:
              return f(ke(L, I, z, J));
            case jr:
              return f(vt(L, I, z, J));
            case Ue:
              var de = z._payload, Pe = z._init;
              return ct(L, I, Pe(de), J);
          }
          if (Rn(z))
            return B(L, I, z, J);
          if (ci(z))
            return me(L, I, z, J);
          vm(L, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" ? f(Le(L, I, "" + z, J)) : (typeof z == "function" && hm(L), a(L, I));
      }
      return ct;
    }
    var vf = xC(!0), TC = xC(!1);
    function ER(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Ls(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Ls(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bR(e, t) {
      for (var a = e.child; a !== null; )
        qD(a, t), a = a.sibling;
    }
    var Ep = {}, pu = uu(Ep), bp = uu(Ep), mm = uu(Ep);
    function ym(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wC() {
      var e = ym(mm.current);
      return e;
    }
    function l0(e, t) {
      Nr(mm, t, e), Nr(bp, e, e), Nr(pu, Ep, e);
      var a = UT(t);
      Mr(pu, e), Nr(pu, a, e);
    }
    function hf(e) {
      Mr(pu, e), Mr(bp, e), Mr(mm, e);
    }
    function u0() {
      var e = ym(pu.current);
      return e;
    }
    function RC(e) {
      ym(mm.current);
      var t = ym(pu.current), a = $T(t, e.type);
      t !== a && (Nr(bp, e, e), Nr(pu, a, e));
    }
    function s0(e) {
      bp.current === e && (Mr(pu, e), Mr(bp, e));
    }
    var xR = 0, kC = 1, DC = 1, xp = 2, Ni = uu(xR);
    function c0(e, t) {
      return (e & t) !== 0;
    }
    function mf(e) {
      return e & kC;
    }
    function f0(e, t) {
      return e & kC | t;
    }
    function TR(e, t) {
      return e | t;
    }
    function vu(e, t) {
      Nr(Ni, t, e);
    }
    function yf(e) {
      Mr(Ni, e);
    }
    function wR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || F1(i) || yg(i))
              return t;
          }
        } else if (t.tag === nt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Ie) !== Oe;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ga = (
      /*   */
      0
    ), jn = (
      /* */
      1
    ), mo = (
      /*  */
      2
    ), Hn = (
      /*    */
      4
    ), fr = (
      /*   */
      8
    ), d0 = [];
    function p0() {
      for (var e = 0; e < d0.length; e++) {
        var t = d0[e];
        t._workInProgressVersionPrimary = null;
      }
      d0.length = 0;
    }
    function RR(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = g.ReactCurrentDispatcher, Tp = g.ReactCurrentBatchConfig, v0, gf;
    v0 = /* @__PURE__ */ new Set();
    var Rs = Y, kt = null, Pn = null, Vn = null, Sm = !1, wp = !1, Rp = 0, kR = 0, DR = 25, Q = null, ai = null, hu = -1, h0 = !1;
    function xt() {
      {
        var e = Q;
        ai === null ? ai = [e] : ai.push(e);
      }
    }
    function ue() {
      {
        var e = Q;
        ai !== null && (hu++, ai[hu] !== e && _R(e));
      }
    }
    function Sf(e) {
      e != null && !Rn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Q, typeof e);
    }
    function _R(e) {
      {
        var t = Xe(kt);
        if (!v0.has(t) && (v0.add(t), ai !== null)) {
          for (var a = "", i = 30, l = 0; l <= hu; l++) {
            for (var s = ai[l], f = l === hu ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Or() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function m0(e, t) {
      if (h0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Q), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Cf(e, t, a, i, l, s) {
      Rs = s, kt = t, ai = e !== null ? e._debugHookTypes : null, hu = -1, h0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? ve.current = XC : ai !== null ? ve.current = KC : ve.current = WC;
      var f = a(i, l);
      if (wp) {
        var p = 0;
        do {
          if (wp = !1, Rp = 0, p >= DR)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, h0 = !1, Pn = null, Vn = null, t.updateQueue = null, hu = -1, ve.current = qC, f = a(i, l);
        } while (wp);
      }
      ve.current = Om, t._debugHookTypes = ai;
      var h = Pn !== null && Pn.next !== null;
      if (Rs = Y, kt = null, Pn = null, Vn = null, Q = null, ai = null, hu = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & at) !== Ae && y("Internal React error: Expected static flag was missing. Please notify the React team."), Sm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Ef() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function _C(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ca) !== Ae ? t.flags &= ~(Ho | Tr | Vt | qe) : t.flags &= ~(Vt | qe), e.lanes = Yl(e.lanes, a);
    }
    function MC() {
      if (ve.current = Om, Sm) {
        for (var e = kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sm = !1;
      }
      Rs = Y, kt = null, Pn = null, Vn = null, ai = null, hu = -1, Q = null, BC = !1, wp = !1, Rp = 0;
    }
    function yo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Vn === null ? kt.memoizedState = Vn = e : Vn = Vn.next = e, Vn;
    }
    function ii() {
      var e;
      if (Pn === null) {
        var t = kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Pn.next;
      var a;
      if (Vn === null ? a = kt.memoizedState : a = Vn.next, a !== null)
        Vn = a, a = Vn.next, Pn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Pn = e;
        var i = {
          memoizedState: Pn.memoizedState,
          baseState: Pn.baseState,
          baseQueue: Pn.baseQueue,
          queue: Pn.queue,
          next: null
        };
        Vn === null ? kt.memoizedState = Vn = i : Vn = Vn.next = i;
      }
      return Vn;
    }
    function NC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function y0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function g0(e, t, a) {
      var i = yo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = LR.bind(null, kt, s);
      return [i.memoizedState, f];
    }
    function S0(e, t, a) {
      var i = ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Pn, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, S = p.next;
          f.next = S, p.next = h;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var E = f.next, M = s.baseState, D = null, U = null, $ = null, B = E;
        do {
          var me = B.lane;
          if (Xo(Rs, me)) {
            if ($ !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: dt,
                action: B.action,
                hasEagerState: B.hasEagerState,
                eagerState: B.eagerState,
                next: null
              };
              $ = $.next = ke;
            }
            if (B.hasEagerState)
              M = B.eagerState;
            else {
              var vt = B.action;
              M = e(M, vt);
            }
          } else {
            var Le = {
              lane: me,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            };
            $ === null ? (U = $ = Le, D = M) : $ = $.next = Le, kt.lanes = Ze(kt.lanes, me), Yp(me);
          }
          B = B.next;
        } while (B !== null && B !== E);
        $ === null ? D = M : $.next = U, Ce(M, i.memoizedState) || Lp(), i.memoizedState = M, i.baseState = D, i.baseQueue = $, l.lastRenderedState = M;
      }
      var ct = l.interleaved;
      if (ct !== null) {
        var L = ct;
        do {
          var I = L.lane;
          kt.lanes = Ze(kt.lanes, I), Yp(I), L = L.next;
        } while (L !== ct);
      } else
        f === null && (l.lanes = Y);
      var z = l.dispatch;
      return [i.memoizedState, z];
    }
    function C0(e, t, a) {
      var i = ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var h = f.next, S = h;
        do {
          var E = S.action;
          p = e(p, E), S = S.next;
        } while (S !== h);
        Ce(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function VN(e, t, a) {
    }
    function BN(e, t, a) {
    }
    function E0(e, t, a) {
      var i = kt, l = yo(), s, f = cr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), gf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), gf = !0);
      } else {
        if (s = t(), !gf) {
          var p = t();
          Ce(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), gf = !0);
        }
        var h = Xm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rs(h, Rs) || OC(i, t, s);
      }
      l.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return l.queue = S, Tm(zC.bind(null, i, S, e), [e]), i.flags |= Vt, kp(jn | fr, LC.bind(null, i, S, s, t), void 0, null), s;
    }
    function Cm(e, t, a) {
      var i = kt, l = ii(), s = t();
      if (!gf) {
        var f = t();
        Ce(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), gf = !0);
      }
      var p = l.memoizedState, h = !Ce(p, s);
      h && (l.memoizedState = s, Lp());
      var S = l.queue;
      if (_p(zC.bind(null, i, S, e), [e]), S.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Vn !== null && Vn.memoizedState.tag & jn) {
        i.flags |= Vt, kp(jn | fr, LC.bind(null, i, S, s, t), void 0, null);
        var E = Xm();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rs(E, Rs) || OC(i, t, s);
      }
      return s;
    }
    function OC(e, t, a) {
      e.flags |= Wu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = kt.updateQueue;
      if (l === null)
        l = NC(), kt.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function LC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AC(t) && UC(e);
    }
    function zC(e, t, a) {
      var i = function() {
        AC(t) && UC(e);
      };
      return a(i);
    }
    function AC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ce(a, i);
      } catch {
        return !0;
      }
    }
    function UC(e) {
      var t = ya(e, He);
      t !== null && Gn(t, e, He, Ot);
    }
    function Em(e) {
      var t = yo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: y0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = zR.bind(null, kt, a);
      return [t.memoizedState, i];
    }
    function b0(e) {
      return S0(y0);
    }
    function x0(e) {
      return C0(y0);
    }
    function kp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = kt.updateQueue;
      if (s === null)
        s = NC(), kt.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function T0(e) {
      var t = yo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function bm(e) {
      var t = ii();
      return t.memoizedState;
    }
    function Dp(e, t, a, i) {
      var l = yo(), s = i === void 0 ? null : i;
      kt.flags |= e, l.memoizedState = kp(jn | t, a, void 0, s);
    }
    function xm(e, t, a, i) {
      var l = ii(), s = i === void 0 ? null : i, f = void 0;
      if (Pn !== null) {
        var p = Pn.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if (m0(s, h)) {
            l.memoizedState = kp(t, a, f, s);
            return;
          }
        }
      }
      kt.flags |= e, l.memoizedState = kp(jn | t, a, f, s);
    }
    function Tm(e, t) {
      return (kt.mode & ca) !== Ae ? Dp(Ho | Vt | Zi, fr, e, t) : Dp(Vt | Zi, fr, e, t);
    }
    function _p(e, t) {
      return xm(Vt, fr, e, t);
    }
    function w0(e, t) {
      return Dp(qe, mo, e, t);
    }
    function wm(e, t) {
      return xm(qe, mo, e, t);
    }
    function R0(e, t) {
      var a = qe;
      return a |= xr, (kt.mode & ca) !== Ae && (a |= Tr), Dp(a, Hn, e, t);
    }
    function Rm(e, t) {
      return xm(qe, Hn, e, t);
    }
    function $C(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function k0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = qe;
      return l |= xr, (kt.mode & ca) !== Ae && (l |= Tr), Dp(l, Hn, $C.bind(null, t, e), i);
    }
    function km(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return xm(qe, Hn, $C.bind(null, t, e), i);
    }
    function MR(e, t) {
    }
    var Dm = MR;
    function D0(e, t) {
      var a = yo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function _m(e, t) {
      var a = ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (m0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function _0(e, t) {
      var a = yo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Mm(e, t) {
      var a = ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (m0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function M0(e) {
      var t = yo();
      return t.memoizedState = e, e;
    }
    function FC(e) {
      var t = ii(), a = Pn, i = a.memoizedState;
      return HC(t, i, e);
    }
    function jC(e) {
      var t = ii();
      if (Pn === null)
        return t.memoizedState = e, e;
      var a = Pn.memoizedState;
      return HC(t, a, e);
    }
    function HC(e, t, a) {
      var i = !Uy(Rs);
      if (i) {
        if (!Ce(a, t)) {
          var l = Md();
          kt.lanes = Ze(kt.lanes, l), Yp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function NR(e, t, a) {
      var i = da();
      yn(er(i, Fn)), e(!0);
      var l = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (yn(i), Tp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function N0() {
      var e = Em(!1), t = e[0], a = e[1], i = NR.bind(null, a), l = yo();
      return l.memoizedState = i, [t, i];
    }
    function PC() {
      var e = b0(), t = e[0], a = ii(), i = a.memoizedState;
      return [t, i];
    }
    function VC() {
      var e = x0(), t = e[0], a = ii(), i = a.memoizedState;
      return [t, i];
    }
    var BC = !1;
    function OR() {
      return BC;
    }
    function O0() {
      var e = yo(), t = Xm(), a = t.identifierPrefix, i;
      if (cr()) {
        var l = Gw();
        i = ":" + a + "R" + l;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = kR++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Nm() {
      var e = ii(), t = e.memoizedState;
      return t;
    }
    function LR(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Cu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IC(e))
        YC(t, l);
      else {
        var s = uC(e, t, l, i);
        if (s !== null) {
          var f = Kr();
          Gn(s, e, i, f), GC(s, t, i);
        }
      }
      QC(e, i);
    }
    function zR(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Cu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IC(e))
        YC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = Oi;
            try {
              var h = t.lastRenderedState, S = f(h, a);
              if (l.hasEagerState = !0, l.eagerState = S, Ce(S, h)) {
                dR(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var E = uC(e, t, l, i);
        if (E !== null) {
          var M = Kr();
          Gn(E, e, i, M), GC(E, t, i);
        }
      }
      QC(e, i);
    }
    function IC(e) {
      var t = e.alternate;
      return e === kt || t !== null && t === kt;
    }
    function YC(e, t) {
      wp = Sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function GC(e, t, a) {
      if (_d(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var l = Ze(i, a);
        t.lanes = l, Gl(e, l);
      }
    }
    function QC(e, t, a) {
      ao(e, t);
    }
    var Om = {
      readContext: Ln,
      useCallback: Or,
      useContext: Or,
      useEffect: Or,
      useImperativeHandle: Or,
      useInsertionEffect: Or,
      useLayoutEffect: Or,
      useMemo: Or,
      useReducer: Or,
      useRef: Or,
      useState: Or,
      useDebugValue: Or,
      useDeferredValue: Or,
      useTransition: Or,
      useMutableSource: Or,
      useSyncExternalStore: Or,
      useId: Or,
      unstable_isNewReconciler: re
    }, WC = null, KC = null, XC = null, qC = null, go = null, Oi = null, Lm = null;
    {
      var L0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WC = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", xt(), Sf(t), D0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", xt(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", xt(), Sf(t), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", xt(), Sf(a), k0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", xt(), Sf(t), w0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", xt(), Sf(t), R0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", xt(), Sf(t);
          var a = ve.current;
          ve.current = go;
          try {
            return _0(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", xt();
          var i = ve.current;
          ve.current = go;
          try {
            return g0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", xt(), T0(e);
        },
        useState: function(e) {
          Q = "useState", xt();
          var t = ve.current;
          ve.current = go;
          try {
            return Em(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", xt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", xt(), M0(e);
        },
        useTransition: function() {
          return Q = "useTransition", xt(), N0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", xt(), E0(e, t, a);
        },
        useId: function() {
          return Q = "useId", xt(), O0();
        },
        unstable_isNewReconciler: re
      }, KC = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", ue(), D0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", ue(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", ue(), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", ue(), k0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", ue(), w0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", ue(), R0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", ue();
          var a = ve.current;
          ve.current = go;
          try {
            return _0(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", ue();
          var i = ve.current;
          ve.current = go;
          try {
            return g0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", ue(), T0(e);
        },
        useState: function(e) {
          Q = "useState", ue();
          var t = ve.current;
          ve.current = go;
          try {
            return Em(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", ue(), M0(e);
        },
        useTransition: function() {
          return Q = "useTransition", ue(), N0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", ue(), E0(e, t, a);
        },
        useId: function() {
          return Q = "useId", ue(), O0();
        },
        unstable_isNewReconciler: re
      }, XC = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", ue(), _m(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", ue(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", ue(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", ue(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", ue(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", ue(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", ue();
          var a = ve.current;
          ve.current = Oi;
          try {
            return Mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", ue();
          var i = ve.current;
          ve.current = Oi;
          try {
            return S0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", ue(), bm();
        },
        useState: function(e) {
          Q = "useState", ue();
          var t = ve.current;
          ve.current = Oi;
          try {
            return b0(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", ue(), Dm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", ue(), FC(e);
        },
        useTransition: function() {
          return Q = "useTransition", ue(), PC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", ue(), Cm(e, t);
        },
        useId: function() {
          return Q = "useId", ue(), Nm();
        },
        unstable_isNewReconciler: re
      }, qC = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", ue(), _m(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", ue(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", ue(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", ue(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", ue(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", ue(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", ue();
          var a = ve.current;
          ve.current = Lm;
          try {
            return Mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", ue();
          var i = ve.current;
          ve.current = Lm;
          try {
            return C0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", ue(), bm();
        },
        useState: function(e) {
          Q = "useState", ue();
          var t = ve.current;
          ve.current = Lm;
          try {
            return x0(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", ue(), Dm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", ue(), jC(e);
        },
        useTransition: function() {
          return Q = "useTransition", ue(), VC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", ue(), Cm(e, t);
        },
        useId: function() {
          return Q = "useId", ue(), Nm();
        },
        unstable_isNewReconciler: re
      }, go = {
        readContext: function(e) {
          return L0(), Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Ge(), xt(), D0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Ge(), xt(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Ge(), xt(), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Ge(), xt(), k0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Ge(), xt(), w0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Ge(), xt(), R0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Ge(), xt();
          var a = ve.current;
          ve.current = go;
          try {
            return _0(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Ge(), xt();
          var i = ve.current;
          ve.current = go;
          try {
            return g0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Ge(), xt(), T0(e);
        },
        useState: function(e) {
          Q = "useState", Ge(), xt();
          var t = ve.current;
          ve.current = go;
          try {
            return Em(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Ge(), xt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Ge(), xt(), M0(e);
        },
        useTransition: function() {
          return Q = "useTransition", Ge(), xt(), N0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Ge(), xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Ge(), xt(), E0(e, t, a);
        },
        useId: function() {
          return Q = "useId", Ge(), xt(), O0();
        },
        unstable_isNewReconciler: re
      }, Oi = {
        readContext: function(e) {
          return L0(), Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Ge(), ue(), _m(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Ge(), ue(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Ge(), ue(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Ge(), ue(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Ge(), ue(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Ge(), ue(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Ge(), ue();
          var a = ve.current;
          ve.current = Oi;
          try {
            return Mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Ge(), ue();
          var i = ve.current;
          ve.current = Oi;
          try {
            return S0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Ge(), ue(), bm();
        },
        useState: function(e) {
          Q = "useState", Ge(), ue();
          var t = ve.current;
          ve.current = Oi;
          try {
            return b0(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Ge(), ue(), Dm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Ge(), ue(), FC(e);
        },
        useTransition: function() {
          return Q = "useTransition", Ge(), ue(), PC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Ge(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Ge(), ue(), Cm(e, t);
        },
        useId: function() {
          return Q = "useId", Ge(), ue(), Nm();
        },
        unstable_isNewReconciler: re
      }, Lm = {
        readContext: function(e) {
          return L0(), Ln(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Ge(), ue(), _m(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Ge(), ue(), Ln(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Ge(), ue(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Ge(), ue(), km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Ge(), ue(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Ge(), ue(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Ge(), ue();
          var a = ve.current;
          ve.current = Oi;
          try {
            return Mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Ge(), ue();
          var i = ve.current;
          ve.current = Oi;
          try {
            return C0(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Ge(), ue(), bm();
        },
        useState: function(e) {
          Q = "useState", Ge(), ue();
          var t = ve.current;
          ve.current = Oi;
          try {
            return x0(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Ge(), ue(), Dm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Ge(), ue(), jC(e);
        },
        useTransition: function() {
          return Q = "useTransition", Ge(), ue(), VC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Ge(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Ge(), ue(), Cm(e, t);
        },
        useId: function() {
          return Q = "useId", Ge(), ue(), Nm();
        },
        unstable_isNewReconciler: re
      };
    }
    var mu = C.unstable_now, ZC = 0, zm = -1, Mp = -1, Am = -1, z0 = !1, Um = !1;
    function JC() {
      return z0;
    }
    function AR() {
      Um = !0;
    }
    function UR() {
      z0 = !1, Um = !1;
    }
    function $R() {
      z0 = Um, Um = !1;
    }
    function eE() {
      return ZC;
    }
    function tE() {
      ZC = mu();
    }
    function A0(e) {
      Mp = mu(), e.actualStartTime < 0 && (e.actualStartTime = mu());
    }
    function nE(e) {
      Mp = -1;
    }
    function $m(e, t) {
      if (Mp >= 0) {
        var a = mu() - Mp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Mp = -1;
      }
    }
    function So(e) {
      if (zm >= 0) {
        var t = mu() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case he:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function U0(e) {
      if (Am >= 0) {
        var t = mu() - Am;
        Am = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case he:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Co() {
      zm = mu();
    }
    function $0() {
      Am = mu();
    }
    function F0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ks(e, t) {
      return {
        value: e,
        source: t,
        stack: jf(t),
        digest: null
      };
    }
    function j0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function FR(e, t) {
      return !0;
    }
    function H0(e, t) {
      try {
        var a = FR(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === H)
            return;
          console.error(i);
        }
        var p = l ? Xe(l) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === j)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = Xe(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var M = h + `
` + f + `

` + ("" + S);
        console.error(M);
      } catch (D) {
        setTimeout(function() {
          throw D;
        });
      }
    }
    var jR = typeof WeakMap == "function" ? WeakMap : Map;
    function rE(e, t, a) {
      var i = dl(Ot, a);
      i.tag = Hg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        ND(l), H0(e, t);
      }, i;
    }
    function P0(e, t, a) {
      var i = dl(Ot, a);
      i.tag = Hg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          vb(e), H0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        vb(e), H0(e, t), typeof l != "function" && _D(this);
        var h = t.value, S = t.stack;
        this.componentDidCatch(h, {
          componentStack: S !== null ? S : ""
        }), typeof l != "function" && (_r(e.lanes, He) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function aE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new jR(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = OD.bind(null, e, t, a);
        $n && Gp(e, a), t.then(s, s);
      }
    }
    function HR(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function PR(e, t) {
      var a = e.tag;
      if ((e.mode & at) === Ae && (a === O || a === ie || a === De)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function iE(e) {
      var t = e;
      do {
        if (t.tag === oe && wR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function oE(e, t, a, i, l) {
      if ((e.mode & at) === Ae) {
        if (e === t)
          e.flags |= Dn;
        else {
          if (e.flags |= Ie, a.flags |= Ku, a.flags &= ~(ic | Pr), a.tag === H) {
            var s = a.alternate;
            if (s === null)
              a.tag = je;
            else {
              var f = dl(Ot, He);
              f.tag = lm, du(a, f, He);
            }
          }
          a.lanes = Ze(a.lanes, He);
        }
        return e;
      }
      return e.flags |= Dn, e.lanes = l, e;
    }
    function VR(e, t, a, i, l) {
      if (a.flags |= Pr, $n && Gp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        PR(a), cr() && a.mode & at && X1();
        var f = iE(t);
        if (f !== null) {
          f.flags &= ~Xt, oE(f, t, a, e, l), f.mode & at && aE(e, s, l), HR(f, e, s);
          return;
        } else {
          if (!Il(l)) {
            aE(e, s, l), CS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (cr() && a.mode & at) {
        X1();
        var h = iE(t);
        if (h !== null) {
          (h.flags & Dn) === Oe && (h.flags |= Xt), oE(h, t, a, e, l), Lg(ks(i, a));
          return;
        }
      }
      i = ks(i, a), ED(i);
      var S = t;
      do {
        switch (S.tag) {
          case j: {
            var E = i;
            S.flags |= Dn;
            var M = mn(l);
            S.lanes = Ze(S.lanes, M);
            var D = rE(S, E, M);
            Bg(S, D);
            return;
          }
          case H:
            var U = i, $ = S.type, B = S.stateNode;
            if ((S.flags & Ie) === Oe && (typeof $.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && !ib(B))) {
              S.flags |= Dn;
              var me = mn(l);
              S.lanes = Ze(S.lanes, me);
              var Le = P0(S, U, me);
              Bg(S, Le);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function BR() {
      return null;
    }
    var Np = g.ReactCurrentOwner, Li = !1, V0, Op, B0, I0, Y0, Ds, G0, Fm;
    V0 = {}, Op = {}, B0 = {}, I0 = {}, Y0 = {}, Ds = !1, G0 = {}, Fm = {};
    function Qr(e, t, a, i) {
      e === null ? t.child = TC(t, null, a, i) : t.child = vf(t, e.child, a, i);
    }
    function IR(e, t, a, i) {
      t.child = vf(t, e.child, null, i), t.child = vf(t, null, a, i);
    }
    function lE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ki(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, h, S;
      pf(t, l), ro(t);
      {
        if (Np.current = t, La(!0), h = Cf(e, t, f, i, p, l), S = Ef(), t.mode & Gt) {
          hn(!0);
          try {
            h = Cf(e, t, f, i, p, l), S = Ef();
          } finally {
            hn(!1);
          }
        }
        La(!1);
      }
      return Po(), e !== null && !Li ? (_C(e, t, l), pl(e, t, l)) : (cr() && S && kg(t), t.flags |= Xi, Qr(e, t, h, l), t.child);
    }
    function uE(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (KD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = _f(s), t.tag = De, t.type = f, K0(t, s), sE(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          p && ki(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          );
        }
        var h = NS(a.type, null, i, t, t.mode, l);
        return h.ref = t.ref, h.return = t, t.child = h, h;
      }
      {
        var S = a.type, E = S.propTypes;
        E && ki(
          E,
          i,
          // Resolved props
          "prop",
          Mt(S)
        );
      }
      var M = e.child, D = tS(e, l);
      if (!D) {
        var U = M.memoizedProps, $ = a.compare;
        if ($ = $ !== null ? $ : _e, $(U, i) && e.ref === t.ref)
          return pl(e, t, l);
      }
      t.flags |= Xi;
      var B = Ls(M, i);
      return B.ref = t.ref, B.return = t, t.child = B, B;
    }
    function sE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ue) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && ki(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (_e(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Li = !1, t.pendingProps = i = E, tS(e, l))
            (e.flags & Ku) !== Oe && (Li = !0);
          else
            return t.lanes = e.lanes, pl(e, t, l);
      }
      return Q0(e, t, a, i, l);
    }
    function cE(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || fe)
        if ((t.mode & at) === Ae) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, qm(t, a);
        } else if (_r(a, Dr)) {
          var M = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var D = s !== null ? s.baseLanes : a;
          qm(t, D);
        } else {
          var p = null, h;
          if (s !== null) {
            var S = s.baseLanes;
            h = Ze(S, a);
          } else
            h = a;
          t.lanes = t.childLanes = Dr;
          var E = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, qm(t, h), null;
        }
      else {
        var U;
        s !== null ? (U = Ze(s.baseLanes, a), t.memoizedState = null) : U = a, qm(t, U);
      }
      return Qr(e, t, l, a), t.child;
    }
    function YR(e, t, a) {
      var i = t.pendingProps;
      return Qr(e, t, i, a), t.child;
    }
    function GR(e, t, a) {
      var i = t.pendingProps.children;
      return Qr(e, t, i, a), t.child;
    }
    function QR(e, t, a) {
      {
        t.flags |= qe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Qr(e, t, s, a), t.child;
    }
    function fE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= br, t.flags |= vd);
    }
    function Q0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ki(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = lf(t, a, !0);
        f = uf(t, p);
      }
      var h, S;
      pf(t, l), ro(t);
      {
        if (Np.current = t, La(!0), h = Cf(e, t, a, i, f, l), S = Ef(), t.mode & Gt) {
          hn(!0);
          try {
            h = Cf(e, t, a, i, f, l), S = Ef();
          } finally {
            hn(!1);
          }
        }
        La(!1);
      }
      return Po(), e !== null && !Li ? (_C(e, t, l), pl(e, t, l)) : (cr() && S && kg(t), t.flags |= Xi, Qr(e, t, h, l), t.child);
    }
    function dE(e, t, a, i, l) {
      {
        switch (c_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= Ie, t.flags |= Dn;
            var S = new Error("Simulated error coming from DevTools"), E = mn(l);
            t.lanes = Ze(t.lanes, E);
            var M = P0(t, ks(S, t), E);
            Bg(t, M);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var D = a.propTypes;
          D && ki(
            D,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var U;
      ho(a) ? (U = !0, Xh(t)) : U = !1, pf(t, l);
      var $ = t.stateNode, B;
      $ === null ? (Hm(e, t), SC(t, a, i), t0(t, a, i, l), B = !0) : e === null ? B = SR(t, a, i, l) : B = CR(e, t, a, i, l);
      var me = W0(e, t, a, B, U, l);
      {
        var Le = t.stateNode;
        B && Le.props !== i && (Ds || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), Ds = !0);
      }
      return me;
    }
    function W0(e, t, a, i, l, s) {
      fE(e, t);
      var f = (t.flags & Ie) !== Oe;
      if (!i && !f)
        return l && G1(t, a, !1), pl(e, t, s);
      var p = t.stateNode;
      Np.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, nE();
      else {
        ro(t);
        {
          if (La(!0), h = p.render(), t.mode & Gt) {
            hn(!0);
            try {
              p.render();
            } finally {
              hn(!1);
            }
          }
          La(!1);
        }
        Po();
      }
      return t.flags |= Xi, e !== null && f ? IR(e, t, h, s) : Qr(e, t, h, s), t.memoizedState = p.state, l && G1(t, a, !0), t.child;
    }
    function pE(e) {
      var t = e.stateNode;
      t.pendingContext ? I1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && I1(e, t.context, !1), l0(e, t.containerInfo);
    }
    function WR(e, t, a) {
      if (pE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      fC(e, t), fm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, S = t.updateQueue;
        if (S.baseState = h, t.memoizedState = h, t.flags & Xt) {
          var E = ks(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return vE(e, t, p, a, E);
        } else if (p !== s) {
          var M = ks(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return vE(e, t, p, a, M);
        } else {
          Zw(t);
          var D = TC(t, null, p, a);
          t.child = D;
          for (var U = D; U; )
            U.flags = U.flags & ~At | la, U = U.sibling;
        }
      } else {
        if (ff(), p === s)
          return pl(e, t, a);
        Qr(e, t, p, a);
      }
      return t.child;
    }
    function vE(e, t, a, i, l) {
      return ff(), Lg(l), t.flags |= Xt, Qr(e, t, a, i), t.child;
    }
    function KR(e, t, a) {
      RC(t), e === null && Og(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = pg(i, l);
      return p ? f = null : s !== null && pg(i, s) && (t.flags |= bt), fE(e, t), Qr(e, t, f, a), t.child;
    }
    function XR(e, t) {
      return e === null && Og(t), null;
    }
    function qR(e, t, a, i) {
      Hm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var S = t.tag = XD(h), E = Mi(h, l), M;
      switch (S) {
        case O:
          return K0(t, h), t.type = h = _f(h), M = Q0(null, t, h, E, i), M;
        case H:
          return t.type = h = wS(h), M = dE(null, t, h, E, i), M;
        case ie:
          return t.type = h = RS(h), M = lE(null, t, h, E, i), M;
        case Fe: {
          if (t.type !== t.elementType) {
            var D = h.propTypes;
            D && ki(
              D,
              E,
              // Resolved for outer only
              "prop",
              Mt(h)
            );
          }
          return M = uE(
            null,
            t,
            h,
            Mi(h.type, E),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var U = "";
      throw h !== null && typeof h == "object" && h.$$typeof === Ue && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function ZR(e, t, a, i, l) {
      Hm(e, t), t.tag = H;
      var s;
      return ho(a) ? (s = !0, Xh(t)) : s = !1, pf(t, l), SC(t, a, i), t0(t, a, i, l), W0(null, t, a, !0, s, l);
    }
    function JR(e, t, a, i) {
      Hm(e, t);
      var l = t.pendingProps, s;
      {
        var f = lf(t, a, !1);
        s = uf(t, f);
      }
      pf(t, i);
      var p, h;
      ro(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = Mt(a) || "Unknown";
          V0[S] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), V0[S] = !0);
        }
        t.mode & Gt && _i.recordLegacyContextWarning(t, null), La(!0), Np.current = t, p = Cf(null, t, a, l, s, i), h = Ef(), La(!1);
      }
      if (Po(), t.flags |= Xi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = Mt(a) || "Unknown";
        Op[E] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Op[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var M = Mt(a) || "Unknown";
          Op[M] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), Op[M] = !0);
        }
        t.tag = H, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        return ho(a) ? (D = !0, Xh(t)) : D = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Vg(t), gC(t, p), t0(t, a, l, i), W0(null, t, a, !0, D, i);
      } else {
        if (t.tag = O, t.mode & Gt) {
          hn(!0);
          try {
            p = Cf(null, t, a, l, s, i), h = Ef();
          } finally {
            hn(!1);
          }
        }
        return cr() && h && kg(t), Qr(null, t, p, i), K0(t, a), t.child;
      }
    }
    function K0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ra();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), Y0[l] || (Y0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Mt(t) || "Unknown";
          I0[f] || (y("%s: Function components do not support getDerivedStateFromProps.", f), I0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Mt(t) || "Unknown";
          B0[p] || (y("%s: Function components do not support contextType.", p), B0[p] = !0);
        }
      }
    }
    var X0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: dt
    };
    function q0(e) {
      return {
        baseLanes: e,
        cachePool: BR(),
        transitions: null
      };
    }
    function ek(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function tk(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return c0(e, xp);
    }
    function nk(e, t) {
      return Yl(e.childLanes, t);
    }
    function hE(e, t, a) {
      var i = t.pendingProps;
      f_(t) && (t.flags |= Ie);
      var l = Ni.current, s = !1, f = (t.flags & Ie) !== Oe;
      if (f || tk(l, e) ? (s = !0, t.flags &= ~Ie) : (e === null || e.memoizedState !== null) && (l = TR(l, DC)), l = mf(l), vu(t, l), e === null) {
        Og(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return lk(t, h);
        }
        var S = i.children, E = i.fallback;
        if (s) {
          var M = rk(t, S, E, a), D = t.child;
          return D.memoizedState = q0(a), t.memoizedState = X0, M;
        } else
          return Z0(t, S);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var $ = U.dehydrated;
          if ($ !== null)
            return uk(e, t, f, i, $, U, a);
        }
        if (s) {
          var B = i.fallback, me = i.children, Le = ik(e, t, me, B, a), ke = t.child, vt = e.child.memoizedState;
          return ke.memoizedState = vt === null ? q0(a) : ek(vt, a), ke.childLanes = nk(e, a), t.memoizedState = X0, Le;
        } else {
          var ct = i.children, L = ak(e, t, ct, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function Z0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = J0(l, i);
      return s.return = e, e.child = s, s;
    }
    function rk(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (l & at) === Ae && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & $e && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = bu(a, l, i, null)) : (p = J0(f, l), h = bu(a, l, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function J0(e, t, a) {
      return mb(e, t, Y, null);
    }
    function mE(e, t) {
      return Ls(e, t);
    }
    function ak(e, t, a, i) {
      var l = e.child, s = l.sibling, f = mE(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & at) === Ae && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ct) : p.push(s);
      }
      return t.child = f, f;
    }
    function ik(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & at) === Ae && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        S = E, S.childLanes = Y, S.pendingProps = h, t.mode & $e && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = mE(f, h), S.subtreeFlags = f.subtreeFlags & Un;
      var M;
      return p !== null ? M = Ls(p, i) : (M = bu(i, s, l, null), M.flags |= At), M.return = t, S.return = t, S.sibling = M, t.child = S, M;
    }
    function jm(e, t, a, i) {
      i !== null && Lg(i), vf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = Z0(t, s);
      return f.flags |= At, t.memoizedState = null, f;
    }
    function ok(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = J0(f, s), h = bu(i, s, l, null);
      return h.flags |= At, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & at) !== Ae && vf(t, e.child, null, l), h;
    }
    function lk(e, t, a) {
      return (e.mode & at) === Ae ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = He) : yg(t) ? e.lanes = Io : e.lanes = Dr, null;
    }
    function uk(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Xt) {
          t.flags &= ~Xt;
          var L = j0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jm(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ie, null;
          var I = i.children, z = i.fallback, J = ok(e, t, I, z, f), ye = t.child;
          return ye.memoizedState = q0(f), t.memoizedState = X0, J;
        }
      else {
        if (Xw(), (t.mode & at) === Ae)
          return jm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (yg(l)) {
          var p, h, S;
          {
            var E = pw(l);
            p = E.digest, h = E.message, S = E.stack;
          }
          var M;
          h ? M = new Error(h) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var D = j0(M, p, S);
          return jm(e, t, f, D);
        }
        var U = _r(f, e.childLanes);
        if (Li || U) {
          var $ = Xm();
          if ($ !== null) {
            var B = Fy($, f);
            if (B !== dt && B !== s.retryLane) {
              s.retryLane = B;
              var me = Ot;
              ya(e, B), Gn($, e, B, me);
            }
          }
          CS();
          var Le = j0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jm(e, t, f, Le);
        } else if (F1(l)) {
          t.flags |= Ie, t.child = e.child;
          var ke = LD.bind(null, e);
          return vw(l, ke), null;
        } else {
          Jw(t, l, s.treeContext);
          var vt = i.children, ct = Z0(t, vt);
          return ct.flags |= la, ct;
        }
      }
    }
    function yE(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), Fg(e.return, t, a);
    }
    function sk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === oe) {
          var l = i.memoizedState;
          l !== null && yE(i, a, e);
        } else if (i.tag === nt)
          yE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ck(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function fk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !G0[e])
        if (G0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function dk(e, t) {
      e !== void 0 && !Fm[e] && (e !== "collapsed" && e !== "hidden" ? (Fm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Fm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function gE(e, t) {
      {
        var a = Rn(e), i = !a && typeof ci(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function pk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Rn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!gE(e[a], a))
              return;
        } else {
          var i = ci(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!gE(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function eS(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function SE(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      fk(l), dk(s, l), pk(f, l), Qr(e, t, f, a);
      var p = Ni.current, h = c0(p, xp);
      if (h)
        p = f0(p, xp), t.flags |= Ie;
      else {
        var S = e !== null && (e.flags & Ie) !== Oe;
        S && sk(t, t.child, a), p = mf(p);
      }
      if (vu(t, p), (t.mode & at) === Ae)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var E = ck(t.child), M;
            E === null ? (M = t.child, t.child = null) : (M = E.sibling, E.sibling = null), eS(
              t,
              !1,
              // isBackwards
              M,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var D = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var $ = U.alternate;
              if ($ !== null && gm($) === null) {
                t.child = U;
                break;
              }
              var B = U.sibling;
              U.sibling = D, D = U, U = B;
            }
            eS(
              t,
              !0,
              // isBackwards
              D,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            eS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function vk(e, t, a) {
      l0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = vf(t, null, i, a) : Qr(e, t, i, a), t.child;
    }
    var CE = !1;
    function hk(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CE || (CE = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && ki(h, s, "prop", "Context.Provider");
      }
      if (lC(t, l, p), f !== null) {
        var S = f.value;
        if (Ce(S, p)) {
          if (f.children === s.children && !Wh())
            return pl(e, t, a);
        } else
          sR(t, l, a);
      }
      var E = s.children;
      return Qr(e, t, E, a), t.child;
    }
    var EE = !1;
    function mk(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (EE || (EE = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), pf(t, a);
      var f = Ln(i);
      ro(t);
      var p;
      return Np.current = t, La(!0), p = s(f), La(!1), Po(), t.flags |= Xi, Qr(e, t, p, a), t.child;
    }
    function Lp() {
      Li = !0;
    }
    function Hm(e, t) {
      (t.mode & at) === Ae && e !== null && (e.alternate = null, t.alternate = null, t.flags |= At);
    }
    function pl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nE(), Yp(t.lanes), _r(a, t.childLanes) ? (ER(e, t), t.child) : null;
    }
    function yk(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ct) : s.push(e), a.flags |= At, a;
      }
    }
    function tS(e, t) {
      var a = e.lanes;
      return !!_r(a, t);
    }
    function gk(e, t, a) {
      switch (t.tag) {
        case j:
          pE(t), t.stateNode, ff();
          break;
        case G:
          RC(t);
          break;
        case H: {
          var i = t.type;
          ho(i) && Xh(t);
          break;
        }
        case W:
          l0(t, t.stateNode.containerInfo);
          break;
        case be: {
          var l = t.memoizedProps.value, s = t.type._context;
          lC(t, s, l);
          break;
        }
        case he:
          {
            var f = _r(a, t.childLanes);
            f && (t.flags |= qe);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case oe: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return vu(t, mf(Ni.current)), t.flags |= Ie, null;
            var S = t.child, E = S.childLanes;
            if (_r(a, E))
              return hE(e, t, a);
            vu(t, mf(Ni.current));
            var M = pl(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            vu(t, mf(Ni.current));
          break;
        }
        case nt: {
          var D = (e.flags & Ie) !== Oe, U = _r(a, t.childLanes);
          if (D) {
            if (U)
              return SE(e, t, a);
            t.flags |= Ie;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), vu(t, Ni.current), U)
            break;
          return null;
        }
        case Be:
        case et:
          return t.lanes = Y, cE(e, t, a);
      }
      return pl(e, t, a);
    }
    function bE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return yk(e, t, NS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Wh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Li = !0;
        else {
          var s = tS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ie) === Oe)
            return Li = !1, gk(e, t, a);
          (e.flags & Ku) !== Oe ? Li = !0 : Li = !1;
        }
      } else if (Li = !1, cr() && Iw(t)) {
        var f = t.index, p = Yw();
        K1(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case V:
          return JR(e, t, t.type, a);
        case Ve: {
          var h = t.elementType;
          return qR(e, t, h, a);
        }
        case O: {
          var S = t.type, E = t.pendingProps, M = t.elementType === S ? E : Mi(S, E);
          return Q0(e, t, S, M, a);
        }
        case H: {
          var D = t.type, U = t.pendingProps, $ = t.elementType === D ? U : Mi(D, U);
          return dE(e, t, D, $, a);
        }
        case j:
          return WR(e, t, a);
        case G:
          return KR(e, t, a);
        case ee:
          return XR(e, t);
        case oe:
          return hE(e, t, a);
        case W:
          return vk(e, t, a);
        case ie: {
          var B = t.type, me = t.pendingProps, Le = t.elementType === B ? me : Mi(B, me);
          return lE(e, t, B, Le, a);
        }
        case ne:
          return YR(e, t, a);
        case ae:
          return GR(e, t, a);
        case he:
          return QR(e, t, a);
        case be:
          return hk(e, t, a);
        case Me:
          return mk(e, t, a);
        case Fe: {
          var ke = t.type, vt = t.pendingProps, ct = Mi(ke, vt);
          if (t.type !== t.elementType) {
            var L = ke.propTypes;
            L && ki(
              L,
              ct,
              // Resolved for outer only
              "prop",
              Mt(ke)
            );
          }
          return ct = Mi(ke.type, ct), uE(e, t, ke, ct, a);
        }
        case De:
          return sE(e, t, t.type, t.pendingProps, a);
        case je: {
          var I = t.type, z = t.pendingProps, J = t.elementType === I ? z : Mi(I, z);
          return ZR(e, t, I, J, a);
        }
        case nt:
          return SE(e, t, a);
        case Ke:
          break;
        case Be:
          return cE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bf(e) {
      e.flags |= qe;
    }
    function xE(e) {
      e.flags |= br, e.flags |= vd;
    }
    var TE, nS, wE, RE;
    TE = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === G || l.tag === ee)
          PT(e, l.stateNode);
        else if (l.tag !== W) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, nS = function(e, t) {
    }, wE = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = u0(), h = BT(f, a, s, i, l, p);
        t.updateQueue = h, h && bf(t);
      }
    }, RE = function(e, t, a, i) {
      a !== i && bf(t);
    };
    function zp(e, t) {
      if (!cr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function dr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Oe;
      if (t) {
        if ((e.mode & $e) !== Ae) {
          for (var h = e.selfBaseDuration, S = e.child; S !== null; )
            a = Ze(a, Ze(S.lanes, S.childLanes)), i |= S.subtreeFlags & Un, i |= S.flags & Un, h += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = h;
        } else
          for (var E = e.child; E !== null; )
            a = Ze(a, Ze(E.lanes, E.childLanes)), i |= E.subtreeFlags & Un, i |= E.flags & Un, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & $e) !== Ae) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Sk(e, t, a) {
      if (aR() && (t.mode & at) !== Ae && (t.flags & Ie) === Oe)
        return nC(t), ff(), t.flags |= Xt | Pr | Dn, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (nR(t), dr(t), (t.mode & $e) !== Ae) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ff(), (t.flags & Ie) === Oe && (t.memoizedState = null), t.flags |= qe, dr(t), (t.mode & $e) !== Ae) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return rC(), !0;
    }
    function kE(e, t, a) {
      var i = t.pendingProps;
      switch (Dg(t), t.tag) {
        case V:
        case Ve:
        case De:
        case O:
        case ie:
        case ne:
        case ae:
        case he:
        case Me:
        case Fe:
          return dr(t), null;
        case H: {
          var l = t.type;
          return ho(l) && Kh(t), dr(t), null;
        }
        case j: {
          var s = t.stateNode;
          if (hf(t), Tg(t), p0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = tm(t);
            if (f)
              bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Xt) !== Oe) && (t.flags |= oa, rC());
            }
          }
          return nS(e, t), dr(t), null;
        }
        case G: {
          s0(t);
          var h = wC(), S = t.type;
          if (e !== null && t.stateNode != null)
            wE(e, t, S, i, h), e.ref !== t.ref && xE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return dr(t), null;
            }
            var E = u0(), M = tm(t);
            if (M)
              eR(t, h, E) && bf(t);
            else {
              var D = HT(S, i, h, E, t);
              TE(D, t, !1, !1), t.stateNode = D, VT(D, S, i, h) && bf(t);
            }
            t.ref !== null && xE(t);
          }
          return dr(t), null;
        }
        case ee: {
          var U = i;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            RE(e, t, $, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var B = wC(), me = u0(), Le = tm(t);
            Le ? tR(t) && bf(t) : t.stateNode = IT(U, B, me, t);
          }
          return dr(t), null;
        }
        case oe: {
          yf(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = Sk(e, t, ke);
            if (!vt)
              return t.flags & Dn ? t : null;
          }
          if ((t.flags & Ie) !== Oe)
            return t.lanes = a, (t.mode & $e) !== Ae && F0(t), t;
          var ct = ke !== null, L = e !== null && e.memoizedState !== null;
          if (ct !== L && ct) {
            var I = t.child;
            if (I.flags |= qi, (t.mode & at) !== Ae) {
              var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ot);
              z || c0(Ni.current, DC) ? CD() : CS();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= qe), dr(t), (t.mode & $e) !== Ae && ct) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case W:
          return hf(t), nS(e, t), e === null && $w(t.stateNode.containerInfo), dr(t), null;
        case be:
          var de = t.type._context;
          return $g(de, t), dr(t), null;
        case je: {
          var Pe = t.type;
          return ho(Pe) && Kh(t), dr(t), null;
        }
        case nt: {
          yf(t);
          var We = t.memoizedState;
          if (We === null)
            return dr(t), null;
          var Dt = (t.flags & Ie) !== Oe, gt = We.rendering;
          if (gt === null)
            if (Dt)
              zp(We, !1);
            else {
              var Cn = bD() && (e === null || (e.flags & Ie) === Oe);
              if (!Cn)
                for (var St = t.child; St !== null; ) {
                  var fn = gm(St);
                  if (fn !== null) {
                    Dt = !0, t.flags |= Ie, zp(We, !1);
                    var Lr = fn.updateQueue;
                    return Lr !== null && (t.updateQueue = Lr, t.flags |= qe), t.subtreeFlags = Oe, bR(t, a), vu(t, f0(Ni.current, xp)), t.child;
                  }
                  St = St.sibling;
                }
              We.tail !== null && Yt() > WE() && (t.flags |= Ie, Dt = !0, zp(We, !1), t.lanes = kd);
            }
          else {
            if (!Dt) {
              var yr = gm(gt);
              if (yr !== null) {
                t.flags |= Ie, Dt = !0;
                var Pa = yr.updateQueue;
                if (Pa !== null && (t.updateQueue = Pa, t.flags |= qe), zp(We, !0), We.tail === null && We.tailMode === "hidden" && !gt.alternate && !cr())
                  return dr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Yt() * 2 - We.renderingStartTime > WE() && a !== Dr && (t.flags |= Ie, Dt = !0, zp(We, !1), t.lanes = kd);
            }
            if (We.isBackwards)
              gt.sibling = t.child, t.child = gt;
            else {
              var Xr = We.last;
              Xr !== null ? Xr.sibling = gt : t.child = gt, We.last = gt;
            }
          }
          if (We.tail !== null) {
            var qr = We.tail;
            We.rendering = qr, We.tail = qr.sibling, We.renderingStartTime = Yt(), qr.sibling = null;
            var zr = Ni.current;
            return Dt ? zr = f0(zr, xp) : zr = mf(zr), vu(t, zr), qr;
          }
          return dr(t), null;
        }
        case Ke:
          break;
        case Be:
        case et: {
          SS(t);
          var gl = t.memoizedState, Mf = gl !== null;
          if (e !== null) {
            var Xp = e.memoizedState, xo = Xp !== null;
            xo !== Mf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !fe && (t.flags |= qi);
          }
          return !Mf || (t.mode & at) === Ae ? dr(t) : _r(bo, Dr) && (dr(t), t.subtreeFlags & (At | qe) && (t.flags |= qi)), null;
        }
        case Jt:
          return null;
        case Et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ck(e, t, a) {
      switch (Dg(t), t.tag) {
        case H: {
          var i = t.type;
          ho(i) && Kh(t);
          var l = t.flags;
          return l & Dn ? (t.flags = l & ~Dn | Ie, (t.mode & $e) !== Ae && F0(t), t) : null;
        }
        case j: {
          t.stateNode, hf(t), Tg(t), p0();
          var s = t.flags;
          return (s & Dn) !== Oe && (s & Ie) === Oe ? (t.flags = s & ~Dn | Ie, t) : null;
        }
        case G:
          return s0(t), null;
        case oe: {
          yf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ff();
          }
          var p = t.flags;
          return p & Dn ? (t.flags = p & ~Dn | Ie, (t.mode & $e) !== Ae && F0(t), t) : null;
        }
        case nt:
          return yf(t), null;
        case W:
          return hf(t), null;
        case be:
          var h = t.type._context;
          return $g(h, t), null;
        case Be:
        case et:
          return SS(t), null;
        case Jt:
          return null;
        default:
          return null;
      }
    }
    function DE(e, t, a) {
      switch (Dg(t), t.tag) {
        case H: {
          var i = t.type.childContextTypes;
          i != null && Kh(t);
          break;
        }
        case j: {
          t.stateNode, hf(t), Tg(t), p0();
          break;
        }
        case G: {
          s0(t);
          break;
        }
        case W:
          hf(t);
          break;
        case oe:
          yf(t);
          break;
        case nt:
          yf(t);
          break;
        case be:
          var l = t.type._context;
          $g(l, t);
          break;
        case Be:
        case et:
          SS(t);
          break;
      }
    }
    var _E = null;
    _E = /* @__PURE__ */ new Set();
    var Pm = !1, pr = !1, Ek = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, xf = null, Tf = null;
    function bk(e) {
      jo(null, function() {
        throw e;
      }), dd();
    }
    var xk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & $e)
        try {
          Co(), t.componentWillUnmount();
        } finally {
          So(e);
        }
      else
        t.componentWillUnmount();
    };
    function ME(e, t) {
      try {
        yu(Hn, e);
      } catch (a) {
        jt(e, t, a);
      }
    }
    function rS(e, t, a) {
      try {
        xk(e, a);
      } catch (i) {
        jt(e, t, i);
      }
    }
    function Tk(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        jt(e, t, i);
      }
    }
    function NE(e, t) {
      try {
        LE(e);
      } catch (a) {
        jt(e, t, a);
      }
    }
    function wf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (pn && Zr && e.mode & $e)
              try {
                Co(), i = a(null);
              } finally {
                So(e);
              }
            else
              i = a(null);
          } catch (l) {
            jt(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function Vm(e, t, a) {
      try {
        a();
      } catch (i) {
        jt(e, t, i);
      }
    }
    var OE = !1;
    function wk(e, t) {
      FT(e.containerInfo), Ee = t, Rk();
      var a = OE;
      return OE = !1, a;
    }
    function Rk() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & $l) !== Oe && t !== null ? (t.return = e, Ee = t) : kk();
      }
    }
    function kk() {
      for (; Ee !== null; ) {
        var e = Ee;
        Rt(e);
        try {
          Dk(e);
        } catch (a) {
          jt(e, e.return, a);
        }
        vn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Dk(e) {
      var t = e.alternate, a = e.flags;
      if ((a & oa) !== Oe) {
        switch (Rt(e), e.tag) {
          case O:
          case ie:
          case De:
            break;
          case H: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ds && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Mi(e.type, i), l);
              {
                var p = _E;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case j: {
            {
              var h = e.stateNode;
              sw(h.containerInfo);
            }
            break;
          }
          case G:
          case ee:
          case W:
          case je:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        vn();
      }
    }
    function zi(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & fr) !== ga ? pc(t) : (e & Hn) !== ga && vc(t), (e & mo) !== ga && Qp(!0), Vm(t, a, p), (e & mo) !== ga && Qp(!1), (e & fr) !== ga ? eh() : (e & Hn) !== ga && Fl());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function yu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & fr) !== ga ? Jv(t) : (e & Hn) !== ga && th(t);
            var f = s.create;
            (e & mo) !== ga && Qp(!0), s.destroy = f(), (e & mo) !== ga && Qp(!1), (e & fr) !== ga ? Td() : (e & Hn) !== ga && nh();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & Hn) !== Oe ? h = "useLayoutEffect" : (s.tag & mo) !== Oe ? h = "useInsertionEffect" : h = "useEffect";
                var S = void 0;
                p === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? S = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", h, S);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function _k(e, t) {
      if ((t.flags & qe) !== Oe)
        switch (t.tag) {
          case he: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = eE(), p = t.alternate === null ? "mount" : "update";
            JC() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var h = t.return;
            e:
              for (; h !== null; ) {
                switch (h.tag) {
                  case j:
                    var S = h.stateNode;
                    S.passiveEffectDuration += a;
                    break e;
                  case he:
                    var E = h.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                }
                h = h.return;
              }
            break;
          }
        }
    }
    function Mk(e, t, a, i) {
      if ((a.flags & Zn) !== Oe)
        switch (a.tag) {
          case O:
          case ie:
          case De: {
            if (!pr)
              if (a.mode & $e)
                try {
                  Co(), yu(Hn | jn, a);
                } finally {
                  So(a);
                }
              else
                yu(Hn | jn, a);
            break;
          }
          case H: {
            var l = a.stateNode;
            if (a.flags & qe && !pr)
              if (t === null)
                if (a.type === a.elementType && !Ds && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & $e)
                  try {
                    Co(), l.componentDidMount();
                  } finally {
                    So(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Mi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ds && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & $e)
                  try {
                    Co(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    So(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ds && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), pC(a, p, l));
            break;
          }
          case j: {
            var h = a.updateQueue;
            if (h !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    S = a.child.stateNode;
                    break;
                  case H:
                    S = a.child.stateNode;
                    break;
                }
              pC(a, h, S);
            }
            break;
          }
          case G: {
            var E = a.stateNode;
            if (t === null && a.flags & qe) {
              var M = a.type, D = a.memoizedProps;
              KT(E, M, D);
            }
            break;
          }
          case ee:
            break;
          case W:
            break;
          case he: {
            {
              var U = a.memoizedProps, $ = U.onCommit, B = U.onRender, me = a.stateNode.effectDuration, Le = eE(), ke = t === null ? "mount" : "update";
              JC() && (ke = "nested-update"), typeof B == "function" && B(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof $ == "function" && $(a.memoizedProps.id, ke, me, Le), kD(a);
                var vt = a.return;
                e:
                  for (; vt !== null; ) {
                    switch (vt.tag) {
                      case j:
                        var ct = vt.stateNode;
                        ct.effectDuration += me;
                        break e;
                      case he:
                        var L = vt.stateNode;
                        L.effectDuration += me;
                        break e;
                    }
                    vt = vt.return;
                  }
              }
            }
            break;
          }
          case oe: {
            Fk(e, a);
            break;
          }
          case nt:
          case je:
          case Ke:
          case Be:
          case et:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      pr || a.flags & br && LE(a);
    }
    function Nk(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          if (e.mode & $e)
            try {
              Co(), ME(e, e.return);
            } finally {
              So(e);
            }
          else
            ME(e, e.return);
          break;
        }
        case H: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Tk(e, e.return, t), NE(e, e.return);
          break;
        }
        case G: {
          NE(e, e.return);
          break;
        }
      }
    }
    function Ok(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? iw(l) : lw(i.stateNode, i.memoizedProps);
            } catch (f) {
              jt(e, e.return, f);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ow(s) : uw(s, i.memoizedProps);
            } catch (f) {
              jt(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === et) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function LE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case G:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & $e)
            try {
              Co(), l = t(i);
            } finally {
              So(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
      }
    }
    function Lk(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && Hw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function zk(e) {
      for (var t = e.return; t !== null; ) {
        if (AE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AE(e) {
      return e.tag === G || e.tag === j || e.tag === W;
    }
    function UE(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AE(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== ee && t.tag !== lt; ) {
            if (t.flags & At || t.child === null || t.tag === W)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & At))
            return t.stateNode;
        }
    }
    function Ak(e) {
      var t = zk(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & bt && ($1(a), t.flags &= ~bt);
          var i = UE(e);
          iS(e, i, a);
          break;
        }
        case j:
        case W: {
          var l = t.stateNode.containerInfo, s = UE(e);
          aS(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function aS(e, t, a) {
      var i = e.tag, l = i === G || i === ee;
      if (l) {
        var s = e.stateNode;
        t ? tw(a, s, t) : JT(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          aS(f, t, a);
          for (var p = f.sibling; p !== null; )
            aS(p, t, a), p = p.sibling;
        }
      }
    }
    function iS(e, t, a) {
      var i = e.tag, l = i === G || i === ee;
      if (l) {
        var s = e.stateNode;
        t ? ew(a, s, t) : ZT(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          iS(f, t, a);
          for (var p = f.sibling; p !== null; )
            iS(p, t, a), p = p.sibling;
        }
      }
    }
    var vr = null, Ai = !1;
    function Uk(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case G: {
                vr = i.stateNode, Ai = !1;
                break e;
              }
              case j: {
                vr = i.stateNode.containerInfo, Ai = !0;
                break e;
              }
              case W: {
                vr = i.stateNode.containerInfo, Ai = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        $E(e, t, a), vr = null, Ai = !1;
      }
      Lk(a);
    }
    function gu(e, t, a) {
      for (var i = a.child; i !== null; )
        $E(e, t, i), i = i.sibling;
    }
    function $E(e, t, a) {
      switch (bd(a), a.tag) {
        case G:
          pr || wf(a, t);
        case ee: {
          {
            var i = vr, l = Ai;
            vr = null, gu(e, t, a), vr = i, Ai = l, vr !== null && (Ai ? rw(vr, a.stateNode) : nw(vr, a.stateNode));
          }
          return;
        }
        case lt: {
          vr !== null && (Ai ? aw(vr, a.stateNode) : mg(vr, a.stateNode));
          return;
        }
        case W: {
          {
            var s = vr, f = Ai;
            vr = a.stateNode.containerInfo, Ai = !0, gu(e, t, a), vr = s, Ai = f;
          }
          return;
        }
        case O:
        case ie:
        case Fe:
        case De: {
          if (!pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var S = h.next, E = S;
                do {
                  var M = E, D = M.destroy, U = M.tag;
                  D !== void 0 && ((U & mo) !== ga ? Vm(a, t, D) : (U & Hn) !== ga && (vc(a), a.mode & $e ? (Co(), Vm(a, t, D), So(a)) : Vm(a, t, D), Fl())), E = E.next;
                } while (E !== S);
              }
            }
          }
          gu(e, t, a);
          return;
        }
        case H: {
          if (!pr) {
            wf(a, t);
            var $ = a.stateNode;
            typeof $.componentWillUnmount == "function" && rS(a, t, $);
          }
          gu(e, t, a);
          return;
        }
        case Ke: {
          gu(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & at
          ) {
            var B = pr;
            pr = B || a.memoizedState !== null, gu(e, t, a), pr = B;
          } else
            gu(e, t, a);
          break;
        }
        default: {
          gu(e, t, a);
          return;
        }
      }
    }
    function $k(e) {
      e.memoizedState;
    }
    function Fk(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && xw(s);
          }
        }
      }
    }
    function FE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ek()), t.forEach(function(i) {
          var l = zD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), $n)
              if (xf !== null && Tf !== null)
                Gp(Tf, xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function jk(e, t, a) {
      xf = a, Tf = e, Rt(t), jE(t, e), Rt(t), xf = null, Tf = null;
    }
    function Ui(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            Uk(e, t, s);
          } catch (h) {
            jt(s, t, h);
          }
        }
      var f = hy();
      if (t.subtreeFlags & wr)
        for (var p = t.child; p !== null; )
          Rt(p), jE(p, e), p = p.sibling;
      Rt(f);
    }
    function jE(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case O:
        case ie:
        case Fe:
        case De: {
          if (Ui(t, e), Eo(e), l & qe) {
            try {
              zi(mo | jn, e, e.return), yu(mo | jn, e);
            } catch (Pe) {
              jt(e, e.return, Pe);
            }
            if (e.mode & $e) {
              try {
                Co(), zi(Hn | jn, e, e.return);
              } catch (Pe) {
                jt(e, e.return, Pe);
              }
              So(e);
            } else
              try {
                zi(Hn | jn, e, e.return);
              } catch (Pe) {
                jt(e, e.return, Pe);
              }
          }
          return;
        }
        case H: {
          Ui(t, e), Eo(e), l & br && i !== null && wf(i, i.return);
          return;
        }
        case G: {
          Ui(t, e), Eo(e), l & br && i !== null && wf(i, i.return);
          {
            if (e.flags & bt) {
              var s = e.stateNode;
              try {
                $1(s);
              } catch (Pe) {
                jt(e, e.return, Pe);
              }
            }
            if (l & qe) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, S = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    XT(f, E, S, h, p, e);
                  } catch (Pe) {
                    jt(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (Ui(t, e), Eo(e), l & qe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, D = e.memoizedProps, U = i !== null ? i.memoizedProps : D;
            try {
              qT(M, U, D);
            } catch (Pe) {
              jt(e, e.return, Pe);
            }
          }
          return;
        }
        case j: {
          if (Ui(t, e), Eo(e), l & qe && i !== null) {
            var $ = i.memoizedState;
            if ($.isDehydrated)
              try {
                bw(t.containerInfo);
              } catch (Pe) {
                jt(e, e.return, Pe);
              }
          }
          return;
        }
        case W: {
          Ui(t, e), Eo(e);
          return;
        }
        case oe: {
          Ui(t, e), Eo(e);
          var B = e.child;
          if (B.flags & qi) {
            var me = B.stateNode, Le = B.memoizedState, ke = Le !== null;
            if (me.isHidden = ke, ke) {
              var vt = B.alternate !== null && B.alternate.memoizedState !== null;
              vt || SD();
            }
          }
          if (l & qe) {
            try {
              $k(e);
            } catch (Pe) {
              jt(e, e.return, Pe);
            }
            FE(e);
          }
          return;
        }
        case Be: {
          var ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & at
          ) {
            var L = pr;
            pr = L || ct, Ui(t, e), pr = L;
          } else
            Ui(t, e);
          if (Eo(e), l & qi) {
            var I = e.stateNode, z = e.memoizedState, J = z !== null, ye = e;
            if (I.isHidden = J, J && !ct && (ye.mode & at) !== Ae) {
              Ee = ye;
              for (var de = ye.child; de !== null; )
                Ee = de, Pk(de), de = de.sibling;
            }
            Ok(ye, J);
          }
          return;
        }
        case nt: {
          Ui(t, e), Eo(e), l & qe && FE(e);
          return;
        }
        case Ke:
          return;
        default: {
          Ui(t, e), Eo(e);
          return;
        }
      }
    }
    function Eo(e) {
      var t = e.flags;
      if (t & At) {
        try {
          Ak(e);
        } catch (a) {
          jt(e, e.return, a);
        }
        e.flags &= ~At;
      }
      t & la && (e.flags &= ~la);
    }
    function Hk(e, t, a) {
      xf = a, Tf = t, Ee = e, HE(e, t, a), xf = null, Tf = null;
    }
    function HE(e, t, a) {
      for (var i = (e.mode & at) !== Ae; Ee !== null; ) {
        var l = Ee, s = l.child;
        if (l.tag === Be && i) {
          var f = l.memoizedState !== null, p = f || Pm;
          if (p) {
            oS(e, t, a);
            continue;
          } else {
            var h = l.alternate, S = h !== null && h.memoizedState !== null, E = S || pr, M = Pm, D = pr;
            Pm = p, pr = E, pr && !D && (Ee = l, Vk(l));
            for (var U = s; U !== null; )
              Ee = U, HE(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            Ee = l, Pm = M, pr = D, oS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Zn) !== Oe && s !== null ? (s.return = l, Ee = s) : oS(e, t, a);
      }
    }
    function oS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & Zn) !== Oe) {
          var l = i.alternate;
          Rt(i);
          try {
            Mk(t, l, i, a);
          } catch (f) {
            jt(i, i.return, f);
          }
          vn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function Pk(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case O:
          case ie:
          case Fe:
          case De: {
            if (t.mode & $e)
              try {
                Co(), zi(Hn, t, t.return);
              } finally {
                So(t);
              }
            else
              zi(Hn, t, t.return);
            break;
          }
          case H: {
            wf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && rS(t, t.return, i);
            break;
          }
          case G: {
            wf(t, t.return);
            break;
          }
          case Be: {
            var l = t.memoizedState !== null;
            if (l) {
              PE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : PE(e);
      }
    }
    function PE(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Vk(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            VE(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : VE(e);
      }
    }
    function VE(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Rt(t);
        try {
          Nk(t);
        } catch (i) {
          jt(t, t.return, i);
        }
        if (vn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Bk(e, t, a, i) {
      Ee = t, Ik(t, e, a, i);
    }
    function Ik(e, t, a, i) {
      for (; Ee !== null; ) {
        var l = Ee, s = l.child;
        (l.subtreeFlags & ua) !== Oe && s !== null ? (s.return = l, Ee = s) : Yk(e, t, a, i);
      }
    }
    function Yk(e, t, a, i) {
      for (; Ee !== null; ) {
        var l = Ee;
        if ((l.flags & Vt) !== Oe) {
          Rt(l);
          try {
            Gk(t, l, a, i);
          } catch (f) {
            jt(l, l.return, f);
          }
          vn();
        }
        if (l === e) {
          Ee = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ee = s;
          return;
        }
        Ee = l.return;
      }
    }
    function Gk(e, t, a, i) {
      switch (t.tag) {
        case O:
        case ie:
        case De: {
          if (t.mode & $e) {
            $0();
            try {
              yu(fr | jn, t);
            } finally {
              U0(t);
            }
          } else
            yu(fr | jn, t);
          break;
        }
      }
    }
    function Qk(e) {
      Ee = e, Wk();
    }
    function Wk() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Ct) !== Oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ee = l, qk(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & ua) !== Oe && t !== null ? (t.return = e, Ee = t) : Kk();
      }
    }
    function Kk() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Vt) !== Oe && (Rt(e), Xk(e), vn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Xk(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          e.mode & $e ? ($0(), zi(fr | jn, e, e.return), U0(e)) : zi(fr | jn, e, e.return);
          break;
        }
      }
    }
    function qk(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Rt(a), Jk(a, t), vn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : Zk(e);
      }
    }
    function Zk(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (zE(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function Jk(e, t) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          e.mode & $e ? ($0(), zi(fr, e, t), U0(e)) : zi(fr, e, t);
          break;
        }
      }
    }
    function eD(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          try {
            yu(Hn | jn, e);
          } catch (a) {
            jt(e, e.return, a);
          }
          break;
        }
        case H: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            jt(e, e.return, a);
          }
          break;
        }
      }
    }
    function tD(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          try {
            yu(fr | jn, e);
          } catch (t) {
            jt(e, e.return, t);
          }
          break;
        }
      }
    }
    function nD(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          try {
            zi(Hn | jn, e, e.return);
          } catch (a) {
            jt(e, e.return, a);
          }
          break;
        }
        case H: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && rS(e, e.return, t);
          break;
        }
      }
    }
    function rD(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De:
          try {
            zi(fr | jn, e, e.return);
          } catch (t) {
            jt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var aD = [];
    function iD() {
      aD.forEach(function(e) {
        return e();
      });
    }
    var oD = g.ReactCurrentActQueue;
    function lD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function BE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && oD.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var uD = Math.ceil, lS = g.ReactCurrentDispatcher, uS = g.ReactCurrentOwner, hr = g.ReactCurrentBatchConfig, $i = g.ReactCurrentActQueue, Bn = (
      /*             */
      0
    ), IE = (
      /*               */
      1
    ), mr = (
      /*                */
      2
    ), oi = (
      /*                */
      4
    ), vl = 0, Up = 1, _s = 2, Bm = 3, $p = 4, YE = 5, sS = 6, pt = Bn, Wr = null, rn = null, In = Y, bo = Y, cS = uu(Y), Yn = vl, Fp = null, Im = Y, jp = Y, Ym = Y, Hp = null, Sa = null, fS = 0, GE = 500, QE = 1 / 0, sD = 500, hl = null;
    function Pp() {
      QE = Yt() + sD;
    }
    function WE() {
      return QE;
    }
    var Gm = !1, dS = null, Rf = null, Ms = !1, Su = null, Vp = Y, pS = [], vS = null, cD = 50, Bp = 0, hS = null, mS = !1, Qm = !1, fD = 50, kf = 0, Wm = null, Ip = Ot, Km = Y, KE = !1;
    function Xm() {
      return Wr;
    }
    function Kr() {
      return (pt & (mr | oi)) !== Bn ? Yt() : (Ip !== Ot || (Ip = Yt()), Ip);
    }
    function Cu(e) {
      var t = e.mode;
      if ((t & at) === Ae)
        return He;
      if ((pt & mr) !== Bn && In !== Y)
        return mn(In);
      var a = lR() !== oR;
      if (a) {
        if (hr.transition !== null) {
          var i = hr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Km === dt && (Km = Md()), Km;
      }
      var l = da();
      if (l !== dt)
        return l;
      var s = YT();
      return s;
    }
    function dD(e) {
      var t = e.mode;
      return (t & at) === Ae ? He : $y();
    }
    function Gn(e, t, a, i) {
      UD(), KE && y("useInsertionEffect must not schedule updates."), mS && (Qm = !0), qo(e, a, i), (pt & mr) !== Y && e === Wr ? jD(t) : ($n && Ad(e, t, a), HD(t), e === Wr && ((pt & mr) === Bn && (jp = Ze(jp, a)), Yn === $p && Eu(e, In)), Ca(e, i), a === He && pt === Bn && (t.mode & at) === Ae && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !$i.isBatchingLegacy && (Pp(), W1()));
    }
    function pD(e, t, a) {
      var i = e.current;
      i.lanes = t, qo(e, t, a), Ca(e, a);
    }
    function vD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (pt & mr) !== Bn
      );
    }
    function Ca(e, t) {
      var a = e.callbackNode;
      zy(e, t);
      var i = ts(e, e === Wr ? In : Y);
      if (i === Y) {
        a !== null && fb(a), e.callbackNode = null, e.callbackPriority = dt;
        return;
      }
      var l = sn(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !($i.current !== null && a !== xS)) {
        a == null && s !== He && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && fb(a);
      var f;
      if (l === He)
        e.tag === su ? ($i.isBatchingLegacy !== null && ($i.didScheduleLegacyUpdate = !0), Bw(ZE.bind(null, e))) : Q1(ZE.bind(null, e)), $i.current !== null ? $i.current.push(cu) : QT(function() {
          (pt & (mr | oi)) === Bn && cu();
        }), f = null;
      else {
        var p;
        switch (os(i)) {
          case Jn:
            p = cc;
            break;
          case Fn:
            p = Ir;
            break;
          case bi:
            p = Xa;
            break;
          case as:
            p = Ji;
            break;
          default:
            p = Xa;
            break;
        }
        f = TS(p, XE.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function XE(e, t) {
      if (UR(), Ip = Ot, Km = Y, (pt & (mr | oi)) !== Bn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = yl();
      if (i && e.callbackNode !== a)
        return null;
      var l = ts(e, e === Wr ? In : Y);
      if (l === Y)
        return null;
      var s = !rs(e, l) && !uh(e, l) && !t, f = s ? TD(e, l) : Zm(e, l);
      if (f !== vl) {
        if (f === _s) {
          var p = Dd(e);
          p !== Y && (l = p, f = yS(e, p));
        }
        if (f === Up) {
          var h = Fp;
          throw Ns(e, Y), Eu(e, l), Ca(e, Yt()), h;
        }
        if (f === sS)
          Eu(e, l);
        else {
          var S = !rs(e, l), E = e.current.alternate;
          if (S && !mD(E)) {
            if (f = Zm(e, l), f === _s) {
              var M = Dd(e);
              M !== Y && (l = M, f = yS(e, M));
            }
            if (f === Up) {
              var D = Fp;
              throw Ns(e, Y), Eu(e, l), Ca(e, Yt()), D;
            }
          }
          e.finishedWork = E, e.finishedLanes = l, hD(e, f, l);
        }
      }
      return Ca(e, Yt()), e.callbackNode === a ? XE.bind(null, e) : null;
    }
    function yS(e, t) {
      var a = Hp;
      if (gn(e)) {
        var i = Ns(e, t);
        i.flags |= Xt, Uw(e.containerInfo);
      }
      var l = Zm(e, t);
      if (l !== _s) {
        var s = Sa;
        Sa = a, s !== null && qE(s);
      }
      return l;
    }
    function qE(e) {
      Sa === null ? Sa = e : Sa.push.apply(Sa, e);
    }
    function hD(e, t, a) {
      switch (t) {
        case vl:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case _s: {
          Os(e, Sa, hl);
          break;
        }
        case Bm: {
          if (Eu(e, a), zc(a) && // do not delay if we're inside an act() scope
          !db()) {
            var i = fS + GE - Yt();
            if (i > 10) {
              var l = ts(e, Y);
              if (l !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Xo(s, a)) {
                Kr(), Ld(e, s);
                break;
              }
              e.timeoutHandle = vg(Os.bind(null, e, Sa, hl), i);
              break;
            }
          }
          Os(e, Sa, hl);
          break;
        }
        case $p: {
          if (Eu(e, a), lh(a))
            break;
          if (!db()) {
            var f = oh(e, a), p = f, h = Yt() - p, S = AD(h) - h;
            if (S > 10) {
              e.timeoutHandle = vg(Os.bind(null, e, Sa, hl), S);
              break;
            }
          }
          Os(e, Sa, hl);
          break;
        }
        case YE: {
          Os(e, Sa, hl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function mD(e) {
      for (var t = e; ; ) {
        if (t.flags & Wu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Wu && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Eu(e, t) {
      t = Yl(t, Ym), t = Yl(t, jp), Od(e, t);
    }
    function ZE(e) {
      if ($R(), (pt & (mr | oi)) !== Bn)
        throw new Error("Should not already be working.");
      yl();
      var t = ts(e, Y);
      if (!_r(t, He))
        return Ca(e, Yt()), null;
      var a = Zm(e, t);
      if (e.tag !== su && a === _s) {
        var i = Dd(e);
        i !== Y && (t = i, a = yS(e, i));
      }
      if (a === Up) {
        var l = Fp;
        throw Ns(e, Y), Eu(e, t), Ca(e, Yt()), l;
      }
      if (a === sS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Os(e, Sa, hl), Ca(e, Yt()), null;
    }
    function yD(e, t) {
      t !== Y && (Gl(e, Ze(t, He)), Ca(e, Yt()), (pt & (mr | oi)) === Bn && (Pp(), cu()));
    }
    function gS(e, t) {
      var a = pt;
      pt |= IE;
      try {
        return e(t);
      } finally {
        pt = a, pt === Bn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !$i.isBatchingLegacy && (Pp(), W1());
      }
    }
    function gD(e, t, a, i, l) {
      var s = da(), f = hr.transition;
      try {
        return hr.transition = null, yn(Jn), e(t, a, i, l);
      } finally {
        yn(s), hr.transition = f, pt === Bn && Pp();
      }
    }
    function ml(e) {
      Su !== null && Su.tag === su && (pt & (mr | oi)) === Bn && yl();
      var t = pt;
      pt |= IE;
      var a = hr.transition, i = da();
      try {
        return hr.transition = null, yn(Jn), e ? e() : void 0;
      } finally {
        yn(i), hr.transition = a, pt = t, (pt & (mr | oi)) === Bn && cu();
      }
    }
    function JE() {
      return (pt & (mr | oi)) !== Bn;
    }
    function qm(e, t) {
      Nr(cS, bo, e), bo = Ze(bo, t);
    }
    function SS(e) {
      bo = cS.current, Mr(cS, e);
    }
    function Ns(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== hg && (e.timeoutHandle = hg, GT(a)), rn !== null)
        for (var i = rn.return; i !== null; ) {
          var l = i.alternate;
          DE(l, i), i = i.return;
        }
      Wr = e;
      var s = Ls(e.current, null);
      return rn = s, In = bo = t, Yn = vl, Fp = null, Im = Y, jp = Y, Ym = Y, Hp = null, Sa = null, fR(), _i.discardPendingWarnings(), s;
    }
    function eb(e, t) {
      do {
        var a = rn;
        try {
          if (im(), MC(), vn(), uS.current = null, a === null || a.return === null) {
            Yn = Up, Fp = t, rn = null;
            return;
          }
          if (pn && a.mode & $e && $m(a, !0), Ba)
            if (Po(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              rh(a, i, In);
            } else
              hc(a, t, In);
          VR(e, a.return, a, t, In), ab(a);
        } catch (l) {
          t = l, rn === a && a !== null ? (a = a.return, rn = a) : a = rn;
          continue;
        }
        return;
      } while (!0);
    }
    function tb() {
      var e = lS.current;
      return lS.current = Om, e === null ? Om : e;
    }
    function nb(e) {
      lS.current = e;
    }
    function SD() {
      fS = Yt();
    }
    function Yp(e) {
      Im = Ze(e, Im);
    }
    function CD() {
      Yn === vl && (Yn = Bm);
    }
    function CS() {
      (Yn === vl || Yn === Bm || Yn === _s) && (Yn = $p), Wr !== null && (ns(Im) || ns(jp)) && Eu(Wr, In);
    }
    function ED(e) {
      Yn !== $p && (Yn = _s), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function bD() {
      return Yn === vl;
    }
    function Zm(e, t) {
      var a = pt;
      pt |= mr;
      var i = tb();
      if (Wr !== e || In !== t) {
        if ($n) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Gp(e, In), l.clear()), $c(e, t);
        }
        hl = Ud(), Ns(e, t);
      }
      $a(t);
      do
        try {
          xD();
          break;
        } catch (s) {
          eb(e, s);
        }
      while (!0);
      if (im(), pt = a, nb(i), rn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Hl(), Wr = null, In = Y, Yn;
    }
    function xD() {
      for (; rn !== null; )
        rb(rn);
    }
    function TD(e, t) {
      var a = pt;
      pt |= mr;
      var i = tb();
      if (Wr !== e || In !== t) {
        if ($n) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Gp(e, In), l.clear()), $c(e, t);
        }
        hl = Ud(), Pp(), Ns(e, t);
      }
      $a(t);
      do
        try {
          wD();
          break;
        } catch (s) {
          eb(e, s);
        }
      while (!0);
      return im(), nb(i), pt = a, rn !== null ? (qu(), vl) : (Hl(), Wr = null, In = Y, Yn);
    }
    function wD() {
      for (; rn !== null && !sc(); )
        rb(rn);
    }
    function rb(e) {
      var t = e.alternate;
      Rt(e);
      var a;
      (e.mode & $e) !== Ae ? (A0(e), a = ES(t, e, bo), $m(e, !0)) : a = ES(t, e, bo), vn(), e.memoizedProps = e.pendingProps, a === null ? ab(e) : rn = a, uS.current = null;
    }
    function ab(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Pr) === Oe) {
          Rt(t);
          var l = void 0;
          if ((t.mode & $e) === Ae ? l = kE(a, t, bo) : (A0(t), l = kE(a, t, bo), $m(t, !1)), vn(), l !== null) {
            rn = l;
            return;
          }
        } else {
          var s = Ck(a, t);
          if (s !== null) {
            s.flags &= Wv, rn = s;
            return;
          }
          if ((t.mode & $e) !== Ae) {
            $m(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Pr, i.subtreeFlags = Oe, i.deletions = null;
          else {
            Yn = sS, rn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          rn = h;
          return;
        }
        t = i, rn = t;
      } while (t !== null);
      Yn === vl && (Yn = YE);
    }
    function Os(e, t, a) {
      var i = da(), l = hr.transition;
      try {
        hr.transition = null, yn(Jn), RD(e, t, a, i);
      } finally {
        hr.transition = l, yn(i);
      }
      return null;
    }
    function RD(e, t, a, i) {
      do
        yl();
      while (Su !== null);
      if ($D(), (pt & (mr | oi)) !== Bn)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (dc(s), l === null)
        return xd(), null;
      if (s === Y && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = dt;
      var f = Ze(l.lanes, l.childLanes);
      zd(e, f), e === Wr && (Wr = null, rn = null, In = Y), ((l.subtreeFlags & ua) !== Oe || (l.flags & ua) !== Oe) && (Ms || (Ms = !0, vS = a, TS(Xa, function() {
        return yl(), null;
      })));
      var p = (l.subtreeFlags & ($l | wr | Zn | ua)) !== Oe, h = (l.flags & ($l | wr | Zn | ua)) !== Oe;
      if (p || h) {
        var S = hr.transition;
        hr.transition = null;
        var E = da();
        yn(Jn);
        var M = pt;
        pt |= oi, uS.current = null, wk(e, l), tE(), jk(e, l, s), jT(e.containerInfo), e.current = l, ah(s), Hk(l, e, s), jl(), qv(), pt = M, yn(E), hr.transition = S;
      } else
        e.current = l, tE();
      var D = Ms;
      if (Ms ? (Ms = !1, Su = e, Vp = s) : (kf = 0, Wm = null), f = e.pendingLanes, f === Y && (Rf = null), D || ub(e.current, !1), Si(l.stateNode, i), $n && e.memoizedUpdaters.clear(), iD(), Ca(e, Yt()), t !== null)
        for (var U = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var B = t[$], me = B.stack, Le = B.digest;
          U(B.value, {
            componentStack: me,
            digest: Le
          });
        }
      if (Gm) {
        Gm = !1;
        var ke = dS;
        throw dS = null, ke;
      }
      return _r(Vp, He) && e.tag !== su && yl(), f = e.pendingLanes, _r(f, He) ? (AR(), e === hS ? Bp++ : (Bp = 0, hS = e)) : Bp = 0, cu(), xd(), null;
    }
    function yl() {
      if (Su !== null) {
        var e = os(Vp), t = jy(bi, e), a = hr.transition, i = da();
        try {
          return hr.transition = null, yn(t), DD();
        } finally {
          yn(i), hr.transition = a;
        }
      }
      return !1;
    }
    function kD(e) {
      pS.push(e), Ms || (Ms = !0, TS(Xa, function() {
        return yl(), null;
      }));
    }
    function DD() {
      if (Su === null)
        return !1;
      var e = vS;
      vS = null;
      var t = Su, a = Vp;
      if (Su = null, Vp = Y, (pt & (mr | oi)) !== Bn)
        throw new Error("Cannot flush passive effects while already rendering.");
      mS = !0, Qm = !1, ih(a);
      var i = pt;
      pt |= oi, Qk(t.current), Bk(t, t.current, a, e);
      {
        var l = pS;
        pS = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          _k(t, f);
        }
      }
      Xu(), ub(t.current, !0), pt = i, cu(), Qm ? t === Wm ? kf++ : (kf = 0, Wm = t) : kf = 0, mS = !1, Qm = !1, to(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ib(e) {
      return Rf !== null && Rf.has(e);
    }
    function _D(e) {
      Rf === null ? Rf = /* @__PURE__ */ new Set([e]) : Rf.add(e);
    }
    function MD(e) {
      Gm || (Gm = !0, dS = e);
    }
    var ND = MD;
    function ob(e, t, a) {
      var i = ks(a, t), l = rE(e, i, He), s = du(e, l, He), f = Kr();
      s !== null && (qo(s, He, f), Ca(s, f));
    }
    function jt(e, t, a) {
      if (bk(a), Qp(!1), e.tag === j) {
        ob(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === j) {
          ob(i, e, a);
          return;
        } else if (i.tag === H) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ib(s)) {
            var f = ks(a, e), p = P0(i, f, He), h = du(i, p, He), S = Kr();
            h !== null && (qo(h, He, S), Ca(h, S));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function OD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Kr();
      Ld(e, a), PD(e), Wr === e && Xo(In, a) && (Yn === $p || Yn === Bm && zc(In) && Yt() - fS < GE ? Ns(e, Y) : Ym = Ze(Ym, a)), Ca(e, l);
    }
    function lb(e, t) {
      t === dt && (t = dD(e));
      var a = Kr(), i = ya(e, t);
      i !== null && (qo(i, t, a), Ca(i, a));
    }
    function LD(e) {
      var t = e.memoizedState, a = dt;
      t !== null && (a = t.retryLane), lb(e, a);
    }
    function zD(e, t) {
      var a = dt, i;
      switch (e.tag) {
        case oe:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case nt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), lb(e, a);
    }
    function AD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : uD(e / 1960) * 1960;
    }
    function UD() {
      if (Bp > cD)
        throw Bp = 0, hS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      kf > fD && (kf = 0, Wm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function $D() {
      _i.flushLegacyContextWarning(), _i.flushPendingUnsafeLifecycleWarnings();
    }
    function ub(e, t) {
      Rt(e), Jm(e, Tr, nD), t && Jm(e, Ho, rD), Jm(e, Tr, eD), t && Jm(e, Ho, tD), vn();
    }
    function Jm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Oe ? i = i.child : ((i.flags & t) !== Oe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ey = null;
    function sb(e) {
      {
        if ((pt & mr) !== Bn || !(e.mode & at))
          return;
        var t = e.tag;
        if (t !== V && t !== j && t !== H && t !== O && t !== ie && t !== Fe && t !== De)
          return;
        var a = Xe(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = ln;
        try {
          Rt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Rt(e) : vn();
        }
      }
    }
    var ES;
    {
      var FD = null;
      ES = function(e, t, a) {
        var i = yb(FD, t);
        try {
          return bE(e, t, a);
        } catch (s) {
          if (qw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (im(), MC(), DE(e, t), yb(t, i), t.mode & $e && A0(t), jo(null, bE, null, e, t, a), Oy()) {
            var l = dd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var cb = !1, bS;
    bS = /* @__PURE__ */ new Set();
    function jD(e) {
      if (na && !OR())
        switch (e.tag) {
          case O:
          case ie:
          case De: {
            var t = rn && Xe(rn) || "Unknown", a = t;
            if (!bS.has(a)) {
              bS.add(a);
              var i = Xe(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case H: {
            cb || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), cb = !0);
            break;
          }
        }
    }
    function Gp(e, t) {
      if ($n) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ad(e, i, t);
        });
      }
    }
    var xS = {};
    function TS(e, t) {
      {
        var a = $i.current;
        return a !== null ? (a.push(t), xS) : uc(e, t);
      }
    }
    function fb(e) {
      if (e !== xS)
        return Xv(e);
    }
    function db() {
      return $i.current !== null;
    }
    function HD(e) {
      {
        if (e.mode & at) {
          if (!BE())
            return;
        } else if (!lD() || pt !== Bn || e.tag !== O && e.tag !== ie && e.tag !== De)
          return;
        if ($i.current === null) {
          var t = ln;
          try {
            Rt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Rt(e) : vn();
          }
        }
      }
    }
    function PD(e) {
      e.tag !== su && BE() && $i.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      KE = e;
    }
    var li = null, Df = null, VD = function(e) {
      li = e;
    };
    function _f(e) {
      {
        if (li === null)
          return e;
        var t = li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function wS(e) {
      return _f(e);
    }
    function RS(e) {
      {
        if (li === null)
          return e;
        var t = li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = _f(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ze,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function pb(e, t) {
      {
        if (li === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case H: {
            typeof i == "function" && (l = !0);
            break;
          }
          case O: {
            (typeof i == "function" || s === Ue) && (l = !0);
            break;
          }
          case ie: {
            (s === ze || s === Ue) && (l = !0);
            break;
          }
          case Fe:
          case De: {
            (s === tt || s === Ue) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = li(a);
          if (f !== void 0 && f === li(i))
            return !0;
        }
        return !1;
      }
    }
    function vb(e) {
      {
        if (li === null || typeof WeakSet != "function")
          return;
        Df === null && (Df = /* @__PURE__ */ new WeakSet()), Df.add(e);
      }
    }
    var BD = function(e, t) {
      {
        if (li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        yl(), ml(function() {
          kS(e.current, i, a);
        });
      }
    }, ID = function(e, t) {
      {
        if (e.context !== ja)
          return;
        yl(), ml(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function kS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case O:
          case De:
          case H:
            h = p;
            break;
          case ie:
            h = p.render;
            break;
        }
        if (li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, E = !1;
        if (h !== null) {
          var M = li(h);
          M !== void 0 && (a.has(M) ? E = !0 : t.has(M) && (f === H ? E = !0 : S = !0));
        }
        if (Df !== null && (Df.has(e) || i !== null && Df.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || S) {
          var D = ya(e, He);
          D !== null && Gn(D, e, He, Ot);
        }
        l !== null && !E && kS(l, t, a), s !== null && kS(s, t, a);
      }
    }
    var YD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return DS(e.current, i, a), a;
      }
    };
    function DS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case O:
          case De:
          case H:
            p = f;
            break;
          case ie:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? GD(e, a) : i !== null && DS(i, t, a), l !== null && DS(l, t, a);
      }
    }
    function GD(e, t) {
      {
        var a = QD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function QD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var _S;
    {
      _S = !1;
      try {
        var hb = Object.preventExtensions({});
      } catch {
        _S = !0;
      }
    }
    function WD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Oe, this.subtreeFlags = Oe, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !_S && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ha = function(e, t, a, i) {
      return new WD(e, t, a, i);
    };
    function MS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function KD(e) {
      return typeof e == "function" && !MS(e) && e.defaultProps === void 0;
    }
    function XD(e) {
      if (typeof e == "function")
        return MS(e) ? H : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ze)
          return ie;
        if (t === tt)
          return Fe;
      }
      return V;
    }
    function Ls(e, t) {
      var a = e.alternate;
      a === null ? (a = Ha(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Oe, a.subtreeFlags = Oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case V:
        case O:
        case De:
          a.type = _f(e.type);
          break;
        case H:
          a.type = wS(e.type);
          break;
        case ie:
          a.type = RS(e.type);
          break;
      }
      return a;
    }
    function qD(e, t) {
      e.flags &= Un | At;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ZD(e, t, a) {
      var i;
      return e === qh ? (i = at, t === !0 && (i |= Gt, i |= ca)) : i = Ae, $n && (i |= $e), Ha(j, null, null, i);
    }
    function NS(e, t, a, i, l, s) {
      var f = V, p = e;
      if (typeof e == "function")
        MS(e) ? (f = H, p = wS(p)) : p = _f(p);
      else if (typeof e == "string")
        f = G;
      else
        e:
          switch (e) {
            case Ma:
              return bu(a.children, l, s, t);
            case Pi:
              f = ae, l |= Gt, (l & at) !== Ae && (l |= ca);
              break;
            case T:
              return JD(a, l, s, t);
            case Je:
              return e_(a, l, s, t);
            case ht:
              return t_(a, l, s, t);
            case Pt:
              return mb(a, l, s, t);
            case lr:
            case wn:
            case Vi:
            case $s:
            case Ht:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case q:
                    f = be;
                    break e;
                  case ce:
                    f = Me;
                    break e;
                  case ze:
                    f = ie, p = RS(p);
                    break e;
                  case tt:
                    f = Fe;
                    break e;
                  case Ue:
                    f = Ve, p = null;
                    break e;
                }
              var h = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var S = i ? Xe(i) : null;
                S && (h += `

Check the render method of \`` + S + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
            }
          }
      var E = Ha(f, a, t, l);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function OS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = NS(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function bu(e, t, a, i) {
      var l = Ha(ne, e, i, t);
      return l.lanes = a, l;
    }
    function JD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Ha(he, e, i, t | $e);
      return l.elementType = T, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function e_(e, t, a, i) {
      var l = Ha(oe, e, i, t);
      return l.elementType = Je, l.lanes = a, l;
    }
    function t_(e, t, a, i) {
      var l = Ha(nt, e, i, t);
      return l.elementType = ht, l.lanes = a, l;
    }
    function mb(e, t, a, i) {
      var l = Ha(Be, e, i, t);
      l.elementType = Pt, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function LS(e, t, a) {
      var i = Ha(ee, e, null, t);
      return i.lanes = a, i;
    }
    function n_() {
      var e = Ha(G, null, null, Ae);
      return e.elementType = "DELETED", e;
    }
    function r_(e) {
      var t = Ha(lt, null, null, Ae);
      return t.stateNode = e, t;
    }
    function zS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = Ha(W, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function yb(e, t) {
      return e === null && (e = Ha(V, null, null, Ae)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function a_(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = hg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = dt, this.eventTimes = Uc(Y), this.expirationTimes = Uc(Ot), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Uc(Y), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < $t; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case qh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case su:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function gb(e, t, a, i, l, s, f, p, h, S) {
      var E = new a_(e, t, a, p, h), M = ZD(t, s);
      E.current = M, M.stateNode = E;
      {
        var D = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        M.memoizedState = D;
      }
      return Vg(M), E;
    }
    var AS = "18.2.0";
    function i_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ra(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var US, $S;
    US = !1, $S = {};
    function Sb(e) {
      if (!e)
        return ja;
      var t = ia(e), a = Vw(t);
      if (t.tag === H) {
        var i = t.type;
        if (ho(i))
          return Y1(t, i, a);
      }
      return a;
    }
    function o_(e, t) {
      {
        var a = ia(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = sa(a);
        if (l === null)
          return null;
        if (l.mode & Gt) {
          var s = Xe(a) || "Component";
          if (!$S[s]) {
            $S[s] = !0;
            var f = ln;
            try {
              Rt(l), a.mode & Gt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Rt(f) : vn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function Cb(e, t, a, i, l, s, f, p) {
      var h = !1, S = null;
      return gb(e, t, h, S, a, i, l, s, f);
    }
    function Eb(e, t, a, i, l, s, f, p, h, S) {
      var E = !0, M = gb(a, i, E, e, l, s, f, p, h);
      M.context = Sb(null);
      var D = M.current, U = Kr(), $ = Cu(D), B = dl(U, $);
      return B.callback = t ?? null, du(D, B, $), pD(M, $, U), M;
    }
    function Wp(e, t, a, i) {
      Zv(t, e);
      var l = t.current, s = Kr(), f = Cu(l);
      Vo(f);
      var p = Sb(a);
      t.context === null ? t.context = p : t.pendingContext = p, na && ln !== null && !US && (US = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(ln) || "Unknown"));
      var h = dl(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var S = du(l, h, f);
      return S !== null && (Gn(S, l, f, s), cm(S, l, f)), f;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function l_(e) {
      switch (e.tag) {
        case j: {
          var t = e.stateNode;
          if (gn(t)) {
            var a = Ay(t);
            yD(t, a);
          }
          break;
        }
        case oe: {
          ml(function() {
            var l = ya(e, He);
            if (l !== null) {
              var s = Kr();
              Gn(l, e, He, s);
            }
          });
          var i = He;
          FS(e, i);
          break;
        }
      }
    }
    function bb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function FS(e, t) {
      bb(e, t);
      var a = e.alternate;
      a && bb(a, t);
    }
    function u_(e) {
      if (e.tag === oe) {
        var t = Pl, a = ya(e, t);
        if (a !== null) {
          var i = Kr();
          Gn(a, e, t, i);
        }
        FS(e, t);
      }
    }
    function s_(e) {
      if (e.tag === oe) {
        var t = Cu(e), a = ya(e, t);
        if (a !== null) {
          var i = Kr();
          Gn(a, e, t, i);
        }
        FS(e, t);
      }
    }
    function xb(e) {
      var t = Kv(e);
      return t === null ? null : t.stateNode;
    }
    var Tb = function(e) {
      return null;
    };
    function c_(e) {
      return Tb(e);
    }
    var wb = function(e) {
      return !1;
    };
    function f_(e) {
      return wb(e);
    }
    var Rb = null, kb = null, Db = null, _b = null, Mb = null, Nb = null, Ob = null, Lb = null, zb = null;
    {
      var Ab = function(e, t, a) {
        var i = t[a], l = Rn(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (Rn(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Ab(e[i], t, a + 1), l);
      }, Ub = function(e, t) {
        return Ab(e, t, 0);
      }, $b = function(e, t, a, i) {
        var l = t[i], s = Rn(e) ? e.slice() : ut({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Rn(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = $b(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, Fb = function(e, t, a) {
        if (t.length !== a.length) {
          k("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              k("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $b(e, t, a, 0);
      }, jb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Rn(e) ? e.slice() : ut({}, e);
        return s[l] = jb(e[l], t, a + 1, i), s;
      }, Hb = function(e, t, a) {
        return jb(e, t, 0, a);
      }, jS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Rb = function(e, t, a, i) {
        var l = jS(e, t);
        if (l !== null) {
          var s = Hb(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = ya(e, He);
          f !== null && Gn(f, e, He, Ot);
        }
      }, kb = function(e, t, a) {
        var i = jS(e, t);
        if (i !== null) {
          var l = Ub(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = ut({}, e.memoizedProps);
          var s = ya(e, He);
          s !== null && Gn(s, e, He, Ot);
        }
      }, Db = function(e, t, a, i) {
        var l = jS(e, t);
        if (l !== null) {
          var s = Fb(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = ya(e, He);
          f !== null && Gn(f, e, He, Ot);
        }
      }, _b = function(e, t, a) {
        e.pendingProps = Hb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, He);
        i !== null && Gn(i, e, He, Ot);
      }, Mb = function(e, t) {
        e.pendingProps = Ub(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ya(e, He);
        a !== null && Gn(a, e, He, Ot);
      }, Nb = function(e, t, a) {
        e.pendingProps = Fb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, He);
        i !== null && Gn(i, e, He, Ot);
      }, Ob = function(e) {
        var t = ya(e, He);
        t !== null && Gn(t, e, He, Ot);
      }, Lb = function(e) {
        Tb = e;
      }, zb = function(e) {
        wb = e;
      };
    }
    function d_(e) {
      var t = sa(e);
      return t === null ? null : t.stateNode;
    }
    function p_(e) {
      return null;
    }
    function v_() {
      return ln;
    }
    function h_(e) {
      var t = e.findFiberByHostInstance, a = g.ReactCurrentDispatcher;
      return Ed({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Rb,
        overrideHookStateDeletePath: kb,
        overrideHookStateRenamePath: Db,
        overrideProps: _b,
        overridePropsDeletePath: Mb,
        overridePropsRenamePath: Nb,
        setErrorHandler: Lb,
        setSuspenseHandler: zb,
        scheduleUpdate: Ob,
        currentDispatcherRef: a,
        findHostInstanceByFiber: d_,
        findFiberByHostInstance: t || p_,
        // React Refresh
        findHostInstancesForRefresh: YD,
        scheduleRefresh: BD,
        scheduleRoot: ID,
        setRefreshHandler: VD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: v_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: AS
      });
    }
    var Pb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function HS(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = HS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== un) {
          var i = xb(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, ny.prototype.unmount = HS.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JE() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ml(function() {
          Wp(null, e, null, null);
        }), H1(t);
      }
    };
    function m_(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Vb(e);
      var a = !1, i = !1, l = "", s = Pb;
      t != null && (t.hydrate ? k("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Hi && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Cb(e, qh, null, a, i, l, s);
      Ih(f.current, e);
      var p = e.nodeType === un ? e.parentNode : e;
      return np(p), new HS(f);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function y_(e) {
      e && gh(e);
    }
    ny.prototype.unstable_scheduleHydration = y_;
    function g_(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Vb(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = Pb;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var S = Eb(t, null, e, qh, i, s, f, p, h);
      if (Ih(S.current, e), np(e), l)
        for (var E = 0; E < l.length; E++) {
          var M = l[E];
          RR(S, M);
        }
      return new ny(S);
    }
    function ry(e) {
      return !!(e && (e.nodeType === Er || e.nodeType === za || e.nodeType === Lo || !ft));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Er || e.nodeType === za || e.nodeType === Lo || e.nodeType === un && e.nodeValue === " react-mount-point-unstable "));
    }
    function Vb(e) {
      e.nodeType === Er && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var S_ = g.ReactCurrentOwner, Bb;
    Bb = function(e) {
      if (e._reactRootContainer && e.nodeType !== un) {
        var t = xb(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = PS(e), l = !!(i && lu(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Er && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function PS(e) {
      return e ? e.nodeType === za ? e.documentElement : e.firstChild : null;
    }
    function Ib() {
    }
    function C_(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var D = ty(f);
            s.call(D);
          };
        }
        var f = Eb(
          t,
          i,
          e,
          su,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Ib
        );
        e._reactRootContainer = f, Ih(f.current, e);
        var p = e.nodeType === un ? e.parentNode : e;
        return np(p), ml(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var D = ty(E);
            S.call(D);
          };
        }
        var E = Cb(
          e,
          su,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Ib
        );
        e._reactRootContainer = E, Ih(E.current, e);
        var M = e.nodeType === un ? e.parentNode : e;
        return np(M), ml(function() {
          Wp(t, E, a, i);
        }), E;
      }
    }
    function E_(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, l) {
      Bb(a), E_(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = C_(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var h = ty(f);
            p.call(h);
          };
        }
        Wp(t, f, e, l);
      }
      return ty(f);
    }
    function b_(e) {
      {
        var t = S_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Er ? e : o_(e, "findDOMNode");
    }
    function x_(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function T_(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function w_(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Qu(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    function R_(e) {
      if (!Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = PS(e), i = a && !lu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ml(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, H1(e);
          });
        }), !0;
      } else {
        {
          var l = PS(e), s = !!(l && lu(l)), f = e.nodeType === Er && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ge(l_), dh(u_), us(s_), Fd(da), vh(is), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Gv(_T), rc(gS, gD, ml);
    function k_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return i_(e, t, null, a);
    }
    function D_(e, t, a, i) {
      return w_(e, t, a, i);
    }
    var VS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [lu, of, Yh, nc, Iu, gS]
    };
    function __(e, t) {
      return VS.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), m_(e, t);
    }
    function M_(e, t, a) {
      return VS.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), g_(e, t, a);
    }
    function N_(e) {
      return JE() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ml(e);
    }
    var O_ = h_({
      findFiberByHostInstance: gs,
      bundleType: 1,
      version: AS,
      rendererPackageName: "react-dom"
    });
    if (!O_ && xn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Yb = window.location.protocol;
      /^(https?|file):$/.test(Yb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Yb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VS, ba.createPortal = k_, ba.createRoot = __, ba.findDOMNode = b_, ba.flushSync = N_, ba.hydrate = x_, ba.hydrateRoot = M_, ba.render = T_, ba.unmountComponentAtNode = R_, ba.unstable_batchedUpdates = gS, ba.unstable_renderSubtreeIntoContainer = D_, ba.version = AS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ba;
}
function mx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mx);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (mx(), KS.exports = OM()) : KS.exports = LM();
var o1 = KS.exports;
const zM = /* @__PURE__ */ $_(o1);
function yx(v, C = []) {
  let g = [];
  function x(k, y) {
    const P = /* @__PURE__ */ tv(y), O = g.length;
    g = [
      ...g,
      y
    ];
    function H(j) {
      const { scope: W, children: G, ...ee } = j, ne = (W == null ? void 0 : W[v][O]) || P, ae = Of(
        () => ee,
        Object.values(ee)
      );
      return /* @__PURE__ */ Qe(ne.Provider, {
        value: ae
      }, G);
    }
    function V(j, W) {
      const G = (W == null ? void 0 : W[v][O]) || P, ee = fy(G);
      if (ee)
        return ee;
      if (y !== void 0)
        return y;
      throw new Error(`\`${j}\` must be used within \`${k}\``);
    }
    return H.displayName = k + "Provider", [
      H,
      V
    ];
  }
  const R = () => {
    const k = g.map((y) => /* @__PURE__ */ tv(y));
    return function(P) {
      const O = (P == null ? void 0 : P[v]) || k;
      return Of(
        () => ({
          [`__scope${v}`]: {
            ...P,
            [v]: O
          }
        }),
        [
          P,
          O
        ]
      );
    };
  };
  return R.scopeName = v, [
    x,
    AM(R, ...C)
  ];
}
function AM(...v) {
  const C = v[0];
  if (v.length === 1)
    return C;
  const g = () => {
    const x = v.map(
      (R) => ({
        useScope: R(),
        scopeName: R.scopeName
      })
    );
    return function(k) {
      const y = x.reduce((P, { useScope: O, scopeName: H }) => {
        const j = O(k)[`__scope${H}`];
        return {
          ...P,
          ...j
        };
      }, {});
      return Of(
        () => ({
          [`__scope${C.scopeName}`]: y
        }),
        [
          y
        ]
      );
    };
  };
  return g.scopeName = C.scopeName, g;
}
function ir(v, C, { checkForDefaultPrevented: g = !0 } = {}) {
  return function(R) {
    if (v == null || v(R), g === !1 || !R.defaultPrevented)
      return C == null ? void 0 : C(R);
  };
}
function UM(v, C) {
  typeof v == "function" ? v(C) : v != null && (v.current = C);
}
function l1(...v) {
  return (C) => v.forEach(
    (g) => UM(g, C)
  );
}
function Cl(...v) {
  return To(l1(...v), v);
}
const nv = /* @__PURE__ */ En((v, C) => {
  const { children: g, ...x } = v, R = Nf.toArray(g), k = R.find(FM);
  if (k) {
    const y = k.props.children, P = R.map((O) => O === k ? Nf.count(y) > 1 ? Nf.only(null) : /* @__PURE__ */ sy(y) ? y.props.children : null : O);
    return /* @__PURE__ */ Qe(XS, an({}, x, {
      ref: C
    }), /* @__PURE__ */ sy(y) ? /* @__PURE__ */ a1(y, void 0, P) : null);
  }
  return /* @__PURE__ */ Qe(XS, an({}, x, {
    ref: C
  }), g);
});
nv.displayName = "Slot";
const XS = /* @__PURE__ */ En((v, C) => {
  const { children: g, ...x } = v;
  return /* @__PURE__ */ sy(g) ? /* @__PURE__ */ a1(g, {
    ...jM(x, g.props),
    ref: C ? l1(C, g.ref) : g.ref
  }) : Nf.count(g) > 1 ? Nf.only(null) : null;
});
XS.displayName = "SlotClone";
const $M = ({ children: v }) => /* @__PURE__ */ Qe(GS, null, v);
function FM(v) {
  return /* @__PURE__ */ sy(v) && v.type === $M;
}
function jM(v, C) {
  const g = {
    ...C
  };
  for (const x in C) {
    const R = v[x], k = C[x];
    /^on[A-Z]/.test(x) ? R && k ? g[x] = (...P) => {
      k(...P), R(...P);
    } : R && (g[x] = R) : x === "style" ? g[x] = {
      ...R,
      ...k
    } : x === "className" && (g[x] = [
      R,
      k
    ].filter(Boolean).join(" "));
  }
  return {
    ...v,
    ...g
  };
}
const HM = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Va = HM.reduce((v, C) => {
  const g = /* @__PURE__ */ En((x, R) => {
    const { asChild: k, ...y } = x, P = k ? nv : C;
    return Ta(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ Qe(P, an({}, y, {
      ref: R
    }));
  });
  return g.displayName = `Primitive.${C}`, {
    ...v,
    [C]: g
  };
}, {});
function qS(v, C) {
  v && o1.flushSync(
    () => v.dispatchEvent(C)
  );
}
function ui(v) {
  const C = dn(v);
  return Ta(() => {
    C.current = v;
  }), Of(
    () => (...g) => {
      var x;
      return (x = C.current) === null || x === void 0 ? void 0 : x.call(C, ...g);
    },
    []
  );
}
function PM({ prop: v, defaultProp: C, onChange: g = () => {
} }) {
  const [x, R] = VM({
    defaultProp: C,
    onChange: g
  }), k = v !== void 0, y = k ? v : x, P = ui(g), O = To((H) => {
    if (k) {
      const j = typeof H == "function" ? H(v) : H;
      j !== v && P(j);
    } else
      R(H);
  }, [
    k,
    v,
    R,
    P
  ]);
  return [
    y,
    O
  ];
}
function VM({ defaultProp: v, onChange: C }) {
  const g = wa(v), [x] = g, R = dn(x), k = ui(C);
  return Ta(() => {
    R.current !== x && (k(x), R.current = x);
  }, [
    x,
    R,
    k
  ]), g;
}
const BM = /* @__PURE__ */ tv(void 0);
function IM(v) {
  const C = fy(BM);
  return v || C || "ltr";
}
const Lf = globalThis != null && globalThis.document ? A_ : () => {
};
function YM(v, C) {
  return U_((g, x) => {
    const R = C[g][x];
    return R ?? g;
  }, v);
}
const av = (v) => {
  const { present: C, children: g } = v, x = GM(C), R = typeof g == "function" ? g({
    present: x.isPresent
  }) : Nf.only(g), k = Cl(x.ref, R.ref);
  return typeof g == "function" || x.isPresent ? /* @__PURE__ */ a1(R, {
    ref: k
  }) : null;
};
av.displayName = "Presence";
function GM(v) {
  const [C, g] = wa(), x = dn({}), R = dn(v), k = dn("none"), y = v ? "mounted" : "unmounted", [P, O] = YM(y, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Ta(() => {
    const H = ly(x.current);
    k.current = P === "mounted" ? H : "none";
  }, [
    P
  ]), Lf(() => {
    const H = x.current, V = R.current;
    if (V !== v) {
      const W = k.current, G = ly(H);
      v ? O("MOUNT") : G === "none" || (H == null ? void 0 : H.display) === "none" ? O("UNMOUNT") : O(V && W !== G ? "ANIMATION_OUT" : "UNMOUNT"), R.current = v;
    }
  }, [
    v,
    O
  ]), Lf(() => {
    if (C) {
      const H = (j) => {
        const G = ly(x.current).includes(j.animationName);
        j.target === C && G && o1.flushSync(
          () => O("ANIMATION_END")
        );
      }, V = (j) => {
        j.target === C && (k.current = ly(x.current));
      };
      return C.addEventListener("animationstart", V), C.addEventListener("animationcancel", H), C.addEventListener("animationend", H), () => {
        C.removeEventListener("animationstart", V), C.removeEventListener("animationcancel", H), C.removeEventListener("animationend", H);
      };
    } else
      O("ANIMATION_END");
  }, [
    C,
    O
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(P),
    ref: To((H) => {
      H && (x.current = getComputedStyle(H)), g(H);
    }, [])
  };
}
function ly(v) {
  return (v == null ? void 0 : v.animationName) || "none";
}
const QM = Ro.useId || (() => {
});
let WM = 0;
function gx(v) {
  const [C, g] = Ro.useState(QM());
  return Lf(() => {
    v || g(
      (x) => x ?? String(WM++)
    );
  }, [
    v
  ]), v || (C ? `radix-${C}` : "");
}
function Sx(v) {
  const C = v + "CollectionProvider", [g, x] = yx(C), [R, k] = g(C, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), y = (G) => {
    const { scope: ee, children: ne } = G, ae = xa.useRef(null), Me = xa.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ xa.createElement(R, {
      scope: ee,
      itemMap: Me,
      collectionRef: ae
    }, ne);
  }, P = v + "CollectionSlot", O = /* @__PURE__ */ xa.forwardRef((G, ee) => {
    const { scope: ne, children: ae } = G, Me = k(P, ne), be = Cl(ee, Me.collectionRef);
    return /* @__PURE__ */ xa.createElement(nv, {
      ref: be
    }, ae);
  }), H = v + "CollectionItemSlot", V = "data-radix-collection-item", j = /* @__PURE__ */ xa.forwardRef((G, ee) => {
    const { scope: ne, children: ae, ...Me } = G, be = xa.useRef(null), ie = Cl(ee, be), he = k(H, ne);
    return xa.useEffect(() => (he.itemMap.set(be, {
      ref: be,
      ...Me
    }), () => void he.itemMap.delete(be))), /* @__PURE__ */ xa.createElement(nv, {
      [V]: "",
      ref: ie
    }, ae);
  });
  function W(G) {
    const ee = k(v + "CollectionConsumer", G);
    return xa.useCallback(() => {
      const ae = ee.collectionRef.current;
      if (!ae)
        return [];
      const Me = Array.from(ae.querySelectorAll(`[${V}]`));
      return Array.from(ee.itemMap.values()).sort(
        (he, oe) => Me.indexOf(he.ref.current) - Me.indexOf(oe.ref.current)
      );
    }, [
      ee.collectionRef,
      ee.itemMap
    ]);
  }
  return [
    {
      Provider: y,
      Slot: O,
      ItemSlot: j
    },
    W,
    x
  ];
}
function KM(v, C = globalThis == null ? void 0 : globalThis.document) {
  const g = ui(v);
  Ta(() => {
    const x = (R) => {
      R.key === "Escape" && g(R);
    };
    return C.addEventListener("keydown", x), () => C.removeEventListener("keydown", x);
  }, [
    g,
    C
  ]);
}
const ZS = "dismissableLayer.update", XM = "dismissableLayer.pointerDownOutside", qM = "dismissableLayer.focusOutside";
let tx;
const ZM = /* @__PURE__ */ tv({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), JM = /* @__PURE__ */ En((v, C) => {
  var g;
  const { disableOutsidePointerEvents: x = !1, onEscapeKeyDown: R, onPointerDownOutside: k, onFocusOutside: y, onInteractOutside: P, onDismiss: O, ...H } = v, V = fy(ZM), [j, W] = wa(null), G = (g = j == null ? void 0 : j.ownerDocument) !== null && g !== void 0 ? g : globalThis == null ? void 0 : globalThis.document, [, ee] = wa({}), ne = Cl(
    C,
    (Ve) => W(Ve)
  ), ae = Array.from(V.layers), [Me] = [
    ...V.layersWithOutsidePointerEventsDisabled
  ].slice(-1), be = ae.indexOf(Me), ie = j ? ae.indexOf(j) : -1, he = V.layersWithOutsidePointerEventsDisabled.size > 0, oe = ie >= be, Fe = eN((Ve) => {
    const je = Ve.target, lt = [
      ...V.branches
    ].some(
      (nt) => nt.contains(je)
    );
    !oe || lt || (k == null || k(Ve), P == null || P(Ve), Ve.defaultPrevented || O == null || O());
  }, G), De = tN((Ve) => {
    const je = Ve.target;
    [
      ...V.branches
    ].some(
      (nt) => nt.contains(je)
    ) || (y == null || y(Ve), P == null || P(Ve), Ve.defaultPrevented || O == null || O());
  }, G);
  return KM((Ve) => {
    ie === V.layers.size - 1 && (R == null || R(Ve), !Ve.defaultPrevented && O && (Ve.preventDefault(), O()));
  }, G), Ta(() => {
    if (j)
      return x && (V.layersWithOutsidePointerEventsDisabled.size === 0 && (tx = G.body.style.pointerEvents, G.body.style.pointerEvents = "none"), V.layersWithOutsidePointerEventsDisabled.add(j)), V.layers.add(j), nx(), () => {
        x && V.layersWithOutsidePointerEventsDisabled.size === 1 && (G.body.style.pointerEvents = tx);
      };
  }, [
    j,
    G,
    x,
    V
  ]), Ta(() => () => {
    j && (V.layers.delete(j), V.layersWithOutsidePointerEventsDisabled.delete(j), nx());
  }, [
    j,
    V
  ]), Ta(() => {
    const Ve = () => ee({});
    return document.addEventListener(ZS, Ve), () => document.removeEventListener(ZS, Ve);
  }, []), /* @__PURE__ */ Qe(Va.div, an({}, H, {
    ref: ne,
    style: {
      pointerEvents: he ? oe ? "auto" : "none" : void 0,
      ...v.style
    },
    onFocusCapture: ir(v.onFocusCapture, De.onFocusCapture),
    onBlurCapture: ir(v.onBlurCapture, De.onBlurCapture),
    onPointerDownCapture: ir(v.onPointerDownCapture, Fe.onPointerDownCapture)
  }));
});
function eN(v, C = globalThis == null ? void 0 : globalThis.document) {
  const g = ui(v), x = dn(!1), R = dn(() => {
  });
  return Ta(() => {
    const k = (P) => {
      if (P.target && !x.current) {
        let H = function() {
          Cx(XM, g, O, {
            discrete: !0
          });
        };
        const O = {
          originalEvent: P
        };
        P.pointerType === "touch" ? (C.removeEventListener("click", R.current), R.current = H, C.addEventListener("click", R.current, {
          once: !0
        })) : H();
      } else
        C.removeEventListener("click", R.current);
      x.current = !1;
    }, y = window.setTimeout(() => {
      C.addEventListener("pointerdown", k);
    }, 0);
    return () => {
      window.clearTimeout(y), C.removeEventListener("pointerdown", k), C.removeEventListener("click", R.current);
    };
  }, [
    C,
    g
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => x.current = !0
  };
}
function tN(v, C = globalThis == null ? void 0 : globalThis.document) {
  const g = ui(v), x = dn(!1);
  return Ta(() => {
    const R = (k) => {
      k.target && !x.current && Cx(qM, g, {
        originalEvent: k
      }, {
        discrete: !1
      });
    };
    return C.addEventListener("focusin", R), () => C.removeEventListener("focusin", R);
  }, [
    C,
    g
  ]), {
    onFocusCapture: () => x.current = !0,
    onBlurCapture: () => x.current = !1
  };
}
function nx() {
  const v = new CustomEvent(ZS);
  document.dispatchEvent(v);
}
function Cx(v, C, g, { discrete: x }) {
  const R = g.originalEvent.target, k = new CustomEvent(v, {
    bubbles: !1,
    cancelable: !0,
    detail: g
  });
  C && R.addEventListener(v, C, {
    once: !0
  }), x ? qS(R, k) : R.dispatchEvent(k);
}
function nN(v) {
  const C = dn({
    value: v,
    previous: v
  });
  return Of(() => (C.current.value !== v && (C.current.previous = C.current.value, C.current.value = v), C.current.previous), [
    v
  ]);
}
const rN = /* @__PURE__ */ En((v, C) => /* @__PURE__ */ Qe(Va.span, an({}, v, {
  ref: C,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...v.style
  }
}))), aN = rN, iv = "NavigationMenu", [u1, Ex, iN] = Sx(iv), [JS, oN, lN] = Sx(iv), [s1, GN] = yx(iv, [
  iN,
  lN
]), [uN, Fi] = s1(iv), [sN, cN] = s1(iv), fN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, value: x, onValueChange: R, defaultValue: k, delayDuration: y = 200, skipDelayDuration: P = 300, orientation: O = "horizontal", dir: H, ...V } = v, [j, W] = wa(null), G = Cl(
    C,
    (je) => W(je)
  ), ee = IM(H), ne = dn(0), ae = dn(0), Me = dn(0), [be, ie] = wa(!0), [he = "", oe] = PM({
    prop: x,
    onChange: (je) => {
      const lt = je !== "", nt = P > 0;
      lt ? (window.clearTimeout(Me.current), nt && ie(!1)) : (window.clearTimeout(Me.current), Me.current = window.setTimeout(
        () => ie(!0),
        P
      )), R == null || R(je);
    },
    defaultProp: k
  }), Fe = To(() => {
    window.clearTimeout(ae.current), ae.current = window.setTimeout(
      () => oe(""),
      150
    );
  }, [
    oe
  ]), De = To((je) => {
    window.clearTimeout(ae.current), oe(je);
  }, [
    oe
  ]), Ve = To((je) => {
    he === je ? window.clearTimeout(ae.current) : ne.current = window.setTimeout(() => {
      window.clearTimeout(ae.current), oe(je);
    }, y);
  }, [
    he,
    oe,
    y
  ]);
  return Ta(() => () => {
    window.clearTimeout(ne.current), window.clearTimeout(ae.current), window.clearTimeout(Me.current);
  }, []), /* @__PURE__ */ Qe(dN, {
    scope: g,
    isRootMenu: !0,
    value: he,
    dir: ee,
    orientation: O,
    rootNavigationMenu: j,
    onTriggerEnter: (je) => {
      window.clearTimeout(ne.current), be ? Ve(je) : De(je);
    },
    onTriggerLeave: () => {
      window.clearTimeout(ne.current), Fe();
    },
    onContentEnter: () => window.clearTimeout(ae.current),
    onContentLeave: Fe,
    onItemSelect: (je) => {
      oe(
        (lt) => lt === je ? "" : je
      );
    },
    onItemDismiss: () => oe("")
  }, /* @__PURE__ */ Qe(Va.nav, an({
    "aria-label": "Main",
    "data-orientation": O,
    dir: ee
  }, V, {
    ref: G
  })));
}), dN = (v) => {
  const { scope: C, isRootMenu: g, rootNavigationMenu: x, dir: R, orientation: k, children: y, value: P, onItemSelect: O, onItemDismiss: H, onTriggerEnter: V, onTriggerLeave: j, onContentEnter: W, onContentLeave: G } = v, [ee, ne] = wa(null), [ae, Me] = wa(/* @__PURE__ */ new Map()), [be, ie] = wa(null);
  return /* @__PURE__ */ Qe(uN, {
    scope: C,
    isRootMenu: g,
    rootNavigationMenu: x,
    value: P,
    previousValue: nN(P),
    baseId: gx(),
    dir: R,
    orientation: k,
    viewport: ee,
    onViewportChange: ne,
    indicatorTrack: be,
    onIndicatorTrackChange: ie,
    onTriggerEnter: ui(V),
    onTriggerLeave: ui(j),
    onContentEnter: ui(W),
    onContentLeave: ui(G),
    onItemSelect: ui(O),
    onItemDismiss: ui(H),
    onViewportContentChange: To((he, oe) => {
      Me((Fe) => (Fe.set(he, oe), new Map(Fe)));
    }, []),
    onViewportContentRemove: To((he) => {
      Me((oe) => oe.has(he) ? (oe.delete(he), new Map(oe)) : oe);
    }, [])
  }, /* @__PURE__ */ Qe(u1.Provider, {
    scope: C
  }, /* @__PURE__ */ Qe(sN, {
    scope: C,
    items: ae
  }, y)));
}, pN = "NavigationMenuList", vN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, ...x } = v, R = Fi(pN, g), k = /* @__PURE__ */ Qe(Va.ul, an({
    "data-orientation": R.orientation
  }, x, {
    ref: C
  }));
  return /* @__PURE__ */ Qe(Va.div, {
    style: {
      position: "relative"
    },
    ref: R.onIndicatorTrackChange
  }, /* @__PURE__ */ Qe(u1.Slot, {
    scope: g
  }, R.isRootMenu ? /* @__PURE__ */ Qe(Rx, {
    asChild: !0
  }, k) : k));
}), hN = "NavigationMenuItem", [mN, bx] = s1(hN), yN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, value: x, ...R } = v, k = gx(), y = x || k || "LEGACY_REACT_AUTO_VALUE", P = dn(null), O = dn(null), H = dn(null), V = dn(() => {
  }), j = dn(!1), W = To((ee = "start") => {
    if (P.current) {
      V.current();
      const ne = e1(P.current);
      ne.length && c1(ee === "start" ? ne : ne.reverse());
    }
  }, []), G = To(() => {
    if (P.current) {
      const ee = e1(P.current);
      ee.length && (V.current = DN(ee));
    }
  }, []);
  return /* @__PURE__ */ Qe(mN, {
    scope: g,
    value: y,
    triggerRef: O,
    contentRef: P,
    focusProxyRef: H,
    wasEscapeCloseRef: j,
    onEntryKeyDown: W,
    onFocusProxyEnter: W,
    onRootContentClose: G,
    onContentFocusOutside: G
  }, /* @__PURE__ */ Qe(Va.li, an({}, R, {
    ref: C
  })));
}), rx = "NavigationMenuTrigger", gN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, disabled: x, ...R } = v, k = Fi(rx, v.__scopeNavigationMenu), y = bx(rx, v.__scopeNavigationMenu), P = dn(null), O = Cl(P, y.triggerRef, C), H = Dx(k.baseId, y.value), V = _x(k.baseId, y.value), j = dn(!1), W = dn(!1), G = y.value === k.value;
  return /* @__PURE__ */ Qe(GS, null, /* @__PURE__ */ Qe(u1.ItemSlot, {
    scope: g,
    value: y.value
  }, /* @__PURE__ */ Qe(kx, {
    asChild: !0
  }, /* @__PURE__ */ Qe(Va.button, an({
    id: H,
    disabled: x,
    "data-disabled": x ? "" : void 0,
    "data-state": f1(G),
    "aria-expanded": G,
    "aria-controls": V
  }, R, {
    ref: O,
    onPointerEnter: ir(v.onPointerEnter, () => {
      W.current = !1, y.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: ir(v.onPointerMove, cy(() => {
      x || W.current || y.wasEscapeCloseRef.current || j.current || (k.onTriggerEnter(y.value), j.current = !0);
    })),
    onPointerLeave: ir(v.onPointerLeave, cy(() => {
      x || (k.onTriggerLeave(), j.current = !1);
    })),
    onClick: ir(v.onClick, () => {
      k.onItemSelect(y.value), W.current = G;
    }),
    onKeyDown: ir(v.onKeyDown, (ee) => {
      const ae = {
        horizontal: "ArrowDown",
        vertical: k.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[k.orientation];
      G && ee.key === ae && (y.onEntryKeyDown(), ee.preventDefault());
    })
  })))), G && /* @__PURE__ */ Qe(GS, null, /* @__PURE__ */ Qe(aN, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: y.focusProxyRef,
    onFocus: (ee) => {
      const ne = y.contentRef.current, ae = ee.relatedTarget, Me = ae === P.current, be = ne == null ? void 0 : ne.contains(ae);
      (Me || !be) && y.onFocusProxyEnter(Me ? "start" : "end");
    }
  }), k.viewport && /* @__PURE__ */ Qe("span", {
    "aria-owns": V
  })));
}), ax = "navigationMenu.linkSelect", SN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, active: x, onSelect: R, ...k } = v;
  return /* @__PURE__ */ Qe(kx, {
    asChild: !0
  }, /* @__PURE__ */ Qe(Va.a, an({
    "data-active": x ? "" : void 0,
    "aria-current": x ? "page" : void 0
  }, k, {
    ref: C,
    onClick: ir(v.onClick, (y) => {
      const P = y.target, O = new CustomEvent(ax, {
        bubbles: !0,
        cancelable: !0
      });
      if (P.addEventListener(
        ax,
        (H) => R == null ? void 0 : R(H),
        {
          once: !0
        }
      ), qS(P, O), !O.defaultPrevented && !y.metaKey) {
        const H = new CustomEvent(uy, {
          bubbles: !0,
          cancelable: !0
        });
        qS(P, H);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), xx = "NavigationMenuIndicator", CN = /* @__PURE__ */ En((v, C) => {
  const { forceMount: g, ...x } = v, R = Fi(xx, v.__scopeNavigationMenu), k = !!R.value;
  return R.indicatorTrack ? /* @__PURE__ */ zM.createPortal(/* @__PURE__ */ Qe(av, {
    present: g || k
  }, /* @__PURE__ */ Qe(EN, an({}, x, {
    ref: C
  }))), R.indicatorTrack) : null;
}), EN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, ...x } = v, R = Fi(xx, g), k = Ex(g), [y, P] = wa(null), [O, H] = wa(null), V = R.orientation === "horizontal", j = !!R.value;
  Ta(() => {
    var G;
    const ne = (G = k().find(
      (ae) => ae.value === R.value
    )) === null || G === void 0 ? void 0 : G.ref.current;
    ne && P(ne);
  }, [
    k,
    R.value
  ]);
  const W = () => {
    y && H({
      size: V ? y.offsetWidth : y.offsetHeight,
      offset: V ? y.offsetLeft : y.offsetTop
    });
  };
  return t1(y, W), t1(R.indicatorTrack, W), O ? /* @__PURE__ */ Qe(Va.div, an({
    "aria-hidden": !0,
    "data-state": j ? "visible" : "hidden",
    "data-orientation": R.orientation
  }, x, {
    ref: C,
    style: {
      position: "absolute",
      ...V ? {
        left: 0,
        width: O.size + "px",
        transform: `translateX(${O.offset}px)`
      } : {
        top: 0,
        height: O.size + "px",
        transform: `translateY(${O.offset}px)`
      },
      ...x.style
    }
  })) : null;
}), rv = "NavigationMenuContent", bN = /* @__PURE__ */ En((v, C) => {
  const { forceMount: g, ...x } = v, R = Fi(rv, v.__scopeNavigationMenu), k = bx(rv, v.__scopeNavigationMenu), y = Cl(k.contentRef, C), P = k.value === R.value, O = {
    value: k.value,
    triggerRef: k.triggerRef,
    focusProxyRef: k.focusProxyRef,
    wasEscapeCloseRef: k.wasEscapeCloseRef,
    onContentFocusOutside: k.onContentFocusOutside,
    onRootContentClose: k.onRootContentClose,
    ...x
  };
  return R.viewport ? /* @__PURE__ */ Qe(xN, an({
    forceMount: g
  }, O, {
    ref: y
  })) : /* @__PURE__ */ Qe(av, {
    present: g || P
  }, /* @__PURE__ */ Qe(Tx, an({
    "data-state": f1(P)
  }, O, {
    ref: y,
    onPointerEnter: ir(v.onPointerEnter, R.onContentEnter),
    onPointerLeave: ir(v.onPointerLeave, cy(R.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !P && R.isRootMenu ? "none" : void 0,
      ...O.style
    }
  })));
}), xN = /* @__PURE__ */ En((v, C) => {
  const g = Fi(rv, v.__scopeNavigationMenu), { onViewportContentChange: x, onViewportContentRemove: R } = g;
  return Lf(() => {
    x(v.value, {
      ref: C,
      ...v
    });
  }, [
    v,
    C,
    x
  ]), Lf(() => () => R(v.value), [
    v.value,
    R
  ]), null;
}), uy = "navigationMenu.rootContentDismiss", Tx = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, value: x, triggerRef: R, focusProxyRef: k, wasEscapeCloseRef: y, onRootContentClose: P, onContentFocusOutside: O, ...H } = v, V = Fi(rv, g), j = dn(null), W = Cl(j, C), G = Dx(V.baseId, x), ee = _x(V.baseId, x), ne = Ex(g), ae = dn(null), { onItemDismiss: Me } = V;
  Ta(() => {
    const ie = j.current;
    if (V.isRootMenu && ie) {
      const he = () => {
        var oe;
        Me(), P(), ie.contains(document.activeElement) && ((oe = R.current) === null || oe === void 0 || oe.focus());
      };
      return ie.addEventListener(uy, he), () => ie.removeEventListener(uy, he);
    }
  }, [
    V.isRootMenu,
    v.value,
    R,
    Me,
    P
  ]);
  const be = Of(() => {
    const he = ne().map(
      (lt) => lt.value
    );
    V.dir === "rtl" && he.reverse();
    const oe = he.indexOf(V.value), Fe = he.indexOf(V.previousValue), De = x === V.value, Ve = Fe === he.indexOf(x);
    if (!De && !Ve)
      return ae.current;
    const je = (() => {
      if (oe !== Fe) {
        if (De && Fe !== -1)
          return oe > Fe ? "from-end" : "from-start";
        if (Ve && oe !== -1)
          return oe > Fe ? "to-start" : "to-end";
      }
      return null;
    })();
    return ae.current = je, je;
  }, [
    V.previousValue,
    V.value,
    V.dir,
    ne,
    x
  ]);
  return /* @__PURE__ */ Qe(Rx, {
    asChild: !0
  }, /* @__PURE__ */ Qe(JM, an({
    id: ee,
    "aria-labelledby": G,
    "data-motion": be,
    "data-orientation": V.orientation
  }, H, {
    ref: W,
    onDismiss: () => {
      var ie;
      const he = new Event(uy, {
        bubbles: !0,
        cancelable: !0
      });
      (ie = j.current) === null || ie === void 0 || ie.dispatchEvent(he);
    },
    onFocusOutside: ir(v.onFocusOutside, (ie) => {
      var he;
      O();
      const oe = ie.target;
      (he = V.rootNavigationMenu) !== null && he !== void 0 && he.contains(oe) && ie.preventDefault();
    }),
    onPointerDownOutside: ir(v.onPointerDownOutside, (ie) => {
      var he;
      const oe = ie.target, Fe = ne().some((Ve) => {
        var je;
        return (je = Ve.ref.current) === null || je === void 0 ? void 0 : je.contains(oe);
      }), De = V.isRootMenu && ((he = V.viewport) === null || he === void 0 ? void 0 : he.contains(oe));
      (Fe || De || !V.isRootMenu) && ie.preventDefault();
    }),
    onKeyDown: ir(v.onKeyDown, (ie) => {
      const he = ie.altKey || ie.ctrlKey || ie.metaKey;
      if (ie.key === "Tab" && !he) {
        const De = e1(ie.currentTarget), Ve = document.activeElement, je = De.findIndex(
          (Ke) => Ke === Ve
        ), nt = ie.shiftKey ? De.slice(0, je).reverse() : De.slice(je + 1, De.length);
        if (c1(nt))
          ie.preventDefault();
        else {
          var Fe;
          (Fe = k.current) === null || Fe === void 0 || Fe.focus();
        }
      }
    }),
    onEscapeKeyDown: ir(v.onEscapeKeyDown, (ie) => {
      y.current = !0;
    })
  })));
}), wx = "NavigationMenuViewport", TN = /* @__PURE__ */ En((v, C) => {
  const { forceMount: g, ...x } = v, k = !!Fi(wx, v.__scopeNavigationMenu).value;
  return /* @__PURE__ */ Qe(av, {
    present: g || k
  }, /* @__PURE__ */ Qe(wN, an({}, x, {
    ref: C
  })));
}), wN = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, children: x, ...R } = v, k = Fi(wx, g), y = Cl(C, k.onViewportChange), P = cN(rv, v.__scopeNavigationMenu), [O, H] = wa(null), [V, j] = wa(null), W = O ? (O == null ? void 0 : O.width) + "px" : void 0, G = O ? (O == null ? void 0 : O.height) + "px" : void 0, ee = !!k.value, ne = ee ? k.value : k.previousValue;
  return t1(V, () => {
    V && H({
      width: V.offsetWidth,
      height: V.offsetHeight
    });
  }), /* @__PURE__ */ Qe(Va.div, an({
    "data-state": f1(ee),
    "data-orientation": k.orientation
  }, R, {
    ref: y,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !ee && k.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": W,
      "--radix-navigation-menu-viewport-height": G,
      ...R.style
    },
    onPointerEnter: ir(v.onPointerEnter, k.onContentEnter),
    onPointerLeave: ir(v.onPointerLeave, cy(k.onContentLeave))
  }), Array.from(P.items).map(([Me, { ref: be, forceMount: ie, ...he }]) => {
    const oe = ne === Me;
    return /* @__PURE__ */ Qe(av, {
      key: Me,
      present: ie || oe
    }, /* @__PURE__ */ Qe(Tx, an({}, he, {
      ref: l1(be, (Fe) => {
        oe && Fe && j(Fe);
      })
    })));
  }));
}), RN = "FocusGroup", Rx = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, ...x } = v, R = Fi(RN, g);
  return /* @__PURE__ */ Qe(JS.Provider, {
    scope: g
  }, /* @__PURE__ */ Qe(JS.Slot, {
    scope: g
  }, /* @__PURE__ */ Qe(Va.div, an({
    dir: R.dir
  }, x, {
    ref: C
  }))));
}), ix = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], kN = "FocusGroupItem", kx = /* @__PURE__ */ En((v, C) => {
  const { __scopeNavigationMenu: g, ...x } = v, R = oN(g), k = Fi(kN, g);
  return /* @__PURE__ */ Qe(JS.ItemSlot, {
    scope: g
  }, /* @__PURE__ */ Qe(Va.button, an({}, x, {
    ref: C,
    onKeyDown: ir(v.onKeyDown, (y) => {
      if ([
        "Home",
        "End",
        ...ix
      ].includes(y.key)) {
        let O = R().map(
          (j) => j.ref.current
        );
        if ([
          k.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(y.key) && O.reverse(), ix.includes(y.key)) {
          const j = O.indexOf(y.currentTarget);
          O = O.slice(j + 1);
        }
        setTimeout(
          () => c1(O)
        ), y.preventDefault();
      }
    })
  })));
});
function e1(v) {
  const C = [], g = document.createTreeWalker(v, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (x) => {
      const R = x.tagName === "INPUT" && x.type === "hidden";
      return x.disabled || x.hidden || R ? NodeFilter.FILTER_SKIP : x.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; g.nextNode(); )
    C.push(g.currentNode);
  return C;
}
function c1(v) {
  const C = document.activeElement;
  return v.some((g) => g === C ? !0 : (g.focus(), document.activeElement !== C));
}
function DN(v) {
  return v.forEach((C) => {
    C.dataset.tabindex = C.getAttribute("tabindex") || "", C.setAttribute("tabindex", "-1");
  }), () => {
    v.forEach((C) => {
      const g = C.dataset.tabindex;
      C.setAttribute("tabindex", g);
    });
  };
}
function t1(v, C) {
  const g = ui(C);
  Lf(() => {
    let x = 0;
    if (v) {
      const R = new ResizeObserver(() => {
        cancelAnimationFrame(x), x = window.requestAnimationFrame(g);
      });
      return R.observe(v), () => {
        window.cancelAnimationFrame(x), R.unobserve(v);
      };
    }
  }, [
    v,
    g
  ]);
}
function f1(v) {
  return v ? "open" : "closed";
}
function Dx(v, C) {
  return `${v}-trigger-${C}`;
}
function _x(v, C) {
  return `${v}-content-${C}`;
}
function cy(v) {
  return (C) => C.pointerType === "mouse" ? v(C) : void 0;
}
const Mx = fN, Nx = vN, _N = yN, Ox = gN, MN = SN, Lx = CN, zx = bN, Ax = TN;
function Ux(v) {
  var C, g, x = "";
  if (typeof v == "string" || typeof v == "number")
    x += v;
  else if (typeof v == "object")
    if (Array.isArray(v))
      for (C = 0; C < v.length; C++)
        v[C] && (g = Ux(v[C])) && (x && (x += " "), x += g);
    else
      for (C in v)
        v[C] && (x && (x += " "), x += C);
  return x;
}
function NN() {
  for (var v, C, g = 0, x = ""; g < arguments.length; )
    (v = arguments[g++]) && (C = Ux(v)) && (x && (x += " "), x += C);
  return x;
}
const ox = (v) => typeof v == "boolean" ? "".concat(v) : v === 0 ? "0" : v, lx = NN, $x = (v, C) => (g) => {
  var x;
  if ((C == null ? void 0 : C.variants) == null)
    return lx(v, g == null ? void 0 : g.class, g == null ? void 0 : g.className);
  const { variants: R, defaultVariants: k } = C, y = Object.keys(R).map((H) => {
    const V = g == null ? void 0 : g[H], j = k == null ? void 0 : k[H];
    if (V === null)
      return null;
    const W = ox(V) || ox(j);
    return R[H][W];
  }), P = g && Object.entries(g).reduce((H, V) => {
    let [j, W] = V;
    return W === void 0 || (H[j] = W), H;
  }, {}), O = C == null || (x = C.compoundVariants) === null || x === void 0 ? void 0 : x.reduce((H, V) => {
    let { class: j, className: W, ...G } = V;
    return Object.entries(G).every((ee) => {
      let [ne, ae] = ee;
      return Array.isArray(ae) ? ae.includes({
        ...k,
        ...P
      }[ne]) : {
        ...k,
        ...P
      }[ne] === ae;
    }) ? [
      ...H,
      j,
      W
    ] : H;
  }, []);
  return lx(v, y, O, g == null ? void 0 : g.class, g == null ? void 0 : g.className);
}, Fx = Ro.forwardRef(({ className: v, children: C, ...g }, x) => /* @__PURE__ */ Te.jsxs(
  Mx,
  {
    ref: x,
    className: wo(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      v
    ),
    ...g,
    children: [
      C,
      /* @__PURE__ */ Te.jsx(Vx, {})
    ]
  }
));
Fx.displayName = Mx.displayName;
const jx = Ro.forwardRef(({ className: v, ...C }, g) => /* @__PURE__ */ Te.jsx(
  Nx,
  {
    ref: g,
    className: wo(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      v
    ),
    ...C
  }
));
jx.displayName = Nx.displayName;
const ON = _N, LN = $x(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), Hx = Ro.forwardRef(({ className: v, children: C, ...g }, x) => /* @__PURE__ */ Te.jsxs(
  Ox,
  {
    ref: x,
    className: wo(LN(), "group", v),
    ...g,
    children: [
      C,
      " ",
      /* @__PURE__ */ Te.jsx(
        B_,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Hx.displayName = Ox.displayName;
const Px = Ro.forwardRef(({ className: v, ...C }, g) => /* @__PURE__ */ Te.jsx(
  zx,
  {
    ref: g,
    className: wo(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      v
    ),
    ...C
  }
));
Px.displayName = zx.displayName;
const n1 = MN, Vx = Ro.forwardRef(({ className: v, ...C }, g) => /* @__PURE__ */ Te.jsx("div", { className: wo("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ Te.jsx(
  Ax,
  {
    className: wo(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      v
    ),
    ref: g,
    ...C
  }
) }));
Vx.displayName = Ax.displayName;
const zN = Ro.forwardRef(({ className: v, ...C }, g) => /* @__PURE__ */ Te.jsx(
  Lx,
  {
    ref: g,
    className: wo(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      v
    ),
    ...C,
    children: /* @__PURE__ */ Te.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
zN.displayName = Lx.displayName;
const AN = $x(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Bx = Ro.forwardRef(
  ({ className: v, variant: C, size: g, asChild: x = !1, ...R }, k) => {
    const y = x ? nv : "button";
    return /* @__PURE__ */ Te.jsx(
      y,
      {
        className: wo(AN({ variant: C, size: g, className: v })),
        ref: k,
        ...R
      }
    );
  }
);
Bx.displayName = "Button";
const UN = {
  theme: "system",
  setTheme: () => null
}, Ix = tv(UN);
function QN({
  children: v,
  defaultTheme: C = "system",
  storageKey: g = "vite-ui-theme",
  ...x
}) {
  const [R, k] = wa(
    () => localStorage.getItem(g) || C
  );
  Ta(() => {
    const P = window.document.documentElement;
    if (P.classList.remove("light", "dark"), R === "system") {
      const O = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      P.classList.add(O);
      return;
    }
    P.classList.add(R);
  }, [R]);
  const y = {
    theme: R,
    setTheme: (P) => {
      localStorage.setItem(g, P), k(P);
    }
  };
  return /* @__PURE__ */ Te.jsx(Ix.Provider, { ...x, value: y, children: v });
}
const $N = () => {
  const v = fy(Ix);
  if (v === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return v;
};
function FN() {
  const { setTheme: v, theme: C } = $N(), g = () => {
    v(C === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ Te.jsxs(Bx, { variant: "outline", size: "icon", onClick: () => g(), children: [
    /* @__PURE__ */ Te.jsx(Q_, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ Te.jsx(G_, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
    /* @__PURE__ */ Te.jsx("span", { className: "sr-only", children: "Toggle theme" })
  ] });
}
const r1 = "horizontal", jN = [
  "horizontal",
  "vertical"
], Yx = /* @__PURE__ */ En((v, C) => {
  const { decorative: g, orientation: x = r1, ...R } = v, k = Gx(x) ? x : r1, P = g ? {
    role: "none"
  } : {
    "aria-orientation": k === "vertical" ? k : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ Qe(Va.div, an({
    "data-orientation": k
  }, P, R, {
    ref: C
  }));
});
Yx.propTypes = {
  orientation(v, C, g) {
    const x = v[C], R = String(x);
    return x && !Gx(x) ? new Error(HN(R, g)) : null;
  }
};
function HN(v, C) {
  return `Invalid prop \`orientation\` of value \`${v}\` supplied to \`${C}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${r1}\`.`;
}
function Gx(v) {
  return jN.includes(v);
}
const Qx = Yx, Wx = Ro.forwardRef(
  ({ className: v, orientation: C = "horizontal", decorative: g = !0, ...x }, R) => /* @__PURE__ */ Te.jsx(
    Qx,
    {
      ref: R,
      decorative: g,
      orientation: C,
      className: wo(
        "shrink-0 bg-border",
        C === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        v
      ),
      ...x
    }
  )
);
Wx.displayName = Qx.displayName;
const WN = () => /* @__PURE__ */ Te.jsx("div", { className: "bg-background sticky z-50 top-0 inset-x-0 h-16", children: /* @__PURE__ */ Te.jsxs("header", { className: "relative", children: [
  /* @__PURE__ */ Te.jsxs("div", { className: "flex flex-row justify-between items-center mx-2 h-16", children: [
    /* @__PURE__ */ Te.jsx(Fx, { children: /* @__PURE__ */ Te.jsx(jx, { children: /* @__PURE__ */ Te.jsxs(ON, { children: [
      /* @__PURE__ */ Te.jsx(Hx, { className: "bg-secondary dark:bg-secondary p-2 rounded-lg", children: "My Apps" }),
      /* @__PURE__ */ Te.jsx(Px, { children: /* @__PURE__ */ Te.jsxs("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ Te.jsx("li", { className: "row-span-3", children: /* @__PURE__ */ Te.jsxs("div", { className: "flex flex-col gap-2 h-full", children: [
          /* @__PURE__ */ Te.jsx(n1, { asChild: !0, children: /* @__PURE__ */ Te.jsxs(
            "a",
            {
              className: "flex h-3/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
              target: "_blank",
              href: "https://www.gobber.ch",
              children: [
                /* @__PURE__ */ Te.jsx("div", { className: "mb-2 text-lg font-medium", children: "Gobber.ch" }),
                /* @__PURE__ */ Te.jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "My place on the web" })
              ]
            }
          ) }),
          /* @__PURE__ */ Te.jsx(n1, { asChild: !0, children: /* @__PURE__ */ Te.jsx(
            "a",
            {
              className: "flex h-1/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-4 no-underline outline-none focus:shadow-md",
              target: "_blank",
              href: "https://github.com/KyrillGobber",
              children: /* @__PURE__ */ Te.jsxs("span", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ Te.jsx(ux, {}),
                /* @__PURE__ */ Te.jsx("p", { children: "My Github" })
              ] })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ Te.jsx(
          YS,
          {
            href: "https://teabruh.gobber.ch",
            title: "TeaBruh",
            text: "The GongFu timer app, we teaheads needed."
          }
        ),
        /* @__PURE__ */ Te.jsx(
          YS,
          {
            href: "https://miit.gobber.ch",
            title: "Miit",
            text: "A free Doodle alternative. Your miitup planner."
          }
        ),
        /* @__PURE__ */ Te.jsx(
          YS,
          {
            href: "https://kybits.gobber.ch",
            title: "KyBits",
            text: "A simple habit tracker app."
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ Te.jsx("h1", { children: "Gobber.ch" }),
    /* @__PURE__ */ Te.jsx("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ Te.jsx(FN, {}) })
  ] }),
  /* @__PURE__ */ Te.jsx(Wx, { className: "bg-secondary" })
] }) }), YS = ({ title: v, href: C, text: g }) => /* @__PURE__ */ Te.jsx("li", { children: /* @__PURE__ */ Te.jsx(n1, { asChild: !0, children: /* @__PURE__ */ Te.jsxs(
  "a",
  {
    href: C,
    target: "_blank",
    className: wo(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    ),
    children: [
      /* @__PURE__ */ Te.jsx("div", { className: "text-sm font-medium leading-none", children: v }),
      /* @__PURE__ */ Te.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: g })
    ]
  }
) }) });
function KN(v) {
  return `Hello ${v}!`;
}
export {
  YN as KyFooter,
  WN as KyNav,
  FN as ModeToggle,
  QN as ThemeProvider,
  KN as helloAnything
};
