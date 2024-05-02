import * as dn from "react";
import Fa, { useState as Ar, useEffect as br, useRef as pn, useCallback as vi, forwardRef as Hn, createElement as et, createContext as iv, useMemo as Af, useContext as Ey, Children as zf, isValidElement as gy, cloneElement as y1, Fragment as a1, useLayoutEffect as uN, useReducer as sN } from "react";
function a2() {
  const [d, y] = Ar(!1);
  return br(() => {
    const m = () => {
      y(window.innerWidth < 768);
    };
    return m(), window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, []), {
    isMobile: d
  };
}
function i2() {
  const d = pn(null), y = () => {
    d.current && clearInterval(d.current);
  }, m = vi(
    (C, x) => {
      d.current = setInterval(C, x);
    },
    [d]
  );
  return {
    stopInterval: y,
    startInterval: m
  };
}
function cN(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var i1 = { exports: {} }, ev = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx;
function fN() {
  if (fx)
    return ev;
  fx = 1;
  var d = Fa, y = Symbol.for("react.element"), m = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, x = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(D, T, R) {
    var A, _ = {}, U = null, F = null;
    R !== void 0 && (U = "" + R), T.key !== void 0 && (U = "" + T.key), T.ref !== void 0 && (F = T.ref);
    for (A in T)
      C.call(T, A) && !b.hasOwnProperty(A) && (_[A] = T[A]);
    if (D && D.defaultProps)
      for (A in T = D.defaultProps, T)
        _[A] === void 0 && (_[A] = T[A]);
    return { $$typeof: y, type: D, key: U, ref: F, props: _, _owner: x.current };
  }
  return ev.Fragment = m, ev.jsx = h, ev.jsxs = h, ev;
}
var tv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dx;
function dN() {
  return dx || (dx = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Fa, y = Symbol.for("react.element"), m = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), D = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), $ = Symbol.iterator, j = "@@iterator";
    function G(N) {
      if (N === null || typeof N != "object")
        return null;
      var ie = $ && N[$] || N[j];
      return typeof ie == "function" ? ie : null;
    }
    var W = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(N) {
      {
        for (var ie = arguments.length, ye = new Array(ie > 1 ? ie - 1 : 0), Be = 1; Be < ie; Be++)
          ye[Be - 1] = arguments[Be];
        q("error", N, ye);
      }
    }
    function q(N, ie, ye) {
      {
        var Be = W.ReactDebugCurrentFrame, ot = Be.getStackAddendum();
        ot !== "" && (ie += "%s", ye = ye.concat([ot]));
        var Et = ye.map(function(ut) {
          return String(ut);
        });
        Et.unshift("Warning: " + ie), Function.prototype.apply.call(console[N], console, Et);
      }
    }
    var ae = !1, te = !1, Se = !1, oe = !1, de = !1, ve;
    ve = Symbol.for("react.module.reference");
    function De(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === C || N === b || de || N === x || N === R || N === A || oe || N === F || ae || te || Se || typeof N == "object" && N !== null && (N.$$typeof === U || N.$$typeof === _ || N.$$typeof === h || N.$$typeof === D || N.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === ve || N.getModuleId !== void 0));
    }
    function Oe(N, ie, ye) {
      var Be = N.displayName;
      if (Be)
        return Be;
      var ot = ie.displayName || ie.name || "";
      return ot !== "" ? ye + "(" + ot + ")" : ye;
    }
    function Ue(N) {
      return N.displayName || "Context";
    }
    function $e(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case C:
          return "Fragment";
        case m:
          return "Portal";
        case b:
          return "Profiler";
        case x:
          return "StrictMode";
        case R:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case D:
            var ie = N;
            return Ue(ie) + ".Consumer";
          case h:
            var ye = N;
            return Ue(ye._context) + ".Provider";
          case T:
            return Oe(N, N.render, "ForwardRef");
          case _:
            var Be = N.displayName || null;
            return Be !== null ? Be : $e(N.type) || "Memo";
          case U: {
            var ot = N, Et = ot._payload, ut = ot._init;
            try {
              return $e(ut(Et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ve = Object.assign, kt = 0, ft, At, se, xe, pe, Ke, rt;
    function Pt() {
    }
    Pt.__reactDisabledLog = !0;
    function Cn() {
      {
        if (kt === 0) {
          ft = console.log, At = console.info, se = console.warn, xe = console.error, pe = console.group, Ke = console.groupCollapsed, rt = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Pt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        kt++;
      }
    }
    function ur() {
      {
        if (kt--, kt === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ve({}, N, {
              value: ft
            }),
            info: Ve({}, N, {
              value: At
            }),
            warn: Ve({}, N, {
              value: se
            }),
            error: Ve({}, N, {
              value: xe
            }),
            group: Ve({}, N, {
              value: pe
            }),
            groupCollapsed: Ve({}, N, {
              value: Ke
            }),
            groupEnd: Ve({}, N, {
              value: rt
            })
          });
        }
        kt < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = W.ReactCurrentDispatcher, an;
    function Dt(N, ie, ye) {
      {
        if (an === void 0)
          try {
            throw Error();
          } catch (ot) {
            var Be = ot.stack.trim().match(/\n( *(at )?)/);
            an = Be && Be[1] || "";
          }
        return `
` + an + N;
      }
    }
    var En = !1, vn;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      vn = new dt();
    }
    function Re(N, ie) {
      if (!N || En)
        return "";
      {
        var ye = vn.get(N);
        if (ye !== void 0)
          return ye;
      }
      var Be;
      En = !0;
      var ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Et;
      Et = xt.current, xt.current = null, Cn();
      try {
        if (ie) {
          var ut = function() {
            throw Error();
          };
          if (Object.defineProperty(ut.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ut, []);
            } catch (wt) {
              Be = wt;
            }
            Reflect.construct(N, [], ut);
          } else {
            try {
              ut.call();
            } catch (wt) {
              Be = wt;
            }
            N.call(ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            Be = wt;
          }
          N();
        }
      } catch (wt) {
        if (wt && Be && typeof wt.stack == "string") {
          for (var Ye = wt.stack.split(`
`), Vn = Be.stack.split(`
`), en = Ye.length - 1, tn = Vn.length - 1; en >= 1 && tn >= 0 && Ye[en] !== Vn[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Ye[en] !== Vn[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Ye[en] !== Vn[tn]) {
                    var wr = `
` + Ye[en].replace(" at new ", " at ");
                    return N.displayName && wr.includes("<anonymous>") && (wr = wr.replace("<anonymous>", N.displayName)), typeof N == "function" && vn.set(N, wr), wr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        En = !1, xt.current = Et, ur(), Error.prepareStackTrace = ot;
      }
      var Qi = N ? N.displayName || N.name : "", Ps = Qi ? Dt(Qi) : "";
      return typeof N == "function" && vn.set(N, Ps), Ps;
    }
    function qe(N, ie, ye) {
      return Re(N, !1);
    }
    function mt(N) {
      var ie = N.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function yt(N, ie, ye) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Re(N, mt(N));
      if (typeof N == "string")
        return Dt(N);
      switch (N) {
        case R:
          return Dt("Suspense");
        case A:
          return Dt("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case T:
            return qe(N.render);
          case _:
            return yt(N.type, ie, ye);
          case U: {
            var Be = N, ot = Be._payload, Et = Be._init;
            try {
              return yt(Et(ot), ie, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var Yt = Object.prototype.hasOwnProperty, Ut = {}, hn = W.ReactDebugCurrentFrame;
    function Ln(N) {
      if (N) {
        var ie = N._owner, ye = yt(N.type, N._source, ie ? ie.type : null);
        hn.setExtraStackFrame(ye);
      } else
        hn.setExtraStackFrame(null);
    }
    function Jr(N, ie, ye, Be, ot) {
      {
        var Et = Function.call.bind(Yt);
        for (var ut in N)
          if (Et(N, ut)) {
            var Ye = void 0;
            try {
              if (typeof N[ut] != "function") {
                var Vn = Error((Be || "React class") + ": " + ye + " type `" + ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Vn.name = "Invariant Violation", Vn;
              }
              Ye = N[ut](ie, ut, Be, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Ye = en;
            }
            Ye && !(Ye instanceof Error) && (Ln(ot), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Be || "React class", ye, ut, typeof Ye), Ln(null)), Ye instanceof Error && !(Ye.message in Ut) && (Ut[Ye.message] = !0, Ln(ot), K("Failed %s type: %s", ye, Ye.message), Ln(null));
          }
      }
    }
    var Ur = Array.isArray;
    function $r(N) {
      return Ur(N);
    }
    function sr(N) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, ye = ie && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return ye;
      }
    }
    function va(N) {
      try {
        return cr(N), !1;
      } catch {
        return !0;
      }
    }
    function cr(N) {
      return "" + N;
    }
    function ea(N) {
      if (va(N))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(N)), cr(N);
    }
    var Jt = W.ReactCurrentOwner, bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ha, xr, fe;
    fe = {};
    function Fe(N) {
      if (Yt.call(N, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function lt(N) {
      if (Yt.call(N, "key")) {
        var ie = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function _t(N, ie) {
      if (typeof N.ref == "string" && Jt.current && ie && Jt.current.stateNode !== ie) {
        var ye = $e(Jt.current.type);
        fe[ye] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $e(Jt.current.type), N.ref), fe[ye] = !0);
      }
    }
    function Qt(N, ie) {
      {
        var ye = function() {
          ha || (ha = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        ye.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function xn(N, ie) {
      {
        var ye = function() {
          xr || (xr = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        ye.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var on = function(N, ie, ye, Be, ot, Et, ut) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: N,
        key: ie,
        ref: ye,
        props: ut,
        // Record the component responsible for creating this element.
        _owner: Et
      };
      return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ot
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function fr(N, ie, ye, Be, ot) {
      {
        var Et, ut = {}, Ye = null, Vn = null;
        ye !== void 0 && (ea(ye), Ye = "" + ye), lt(ie) && (ea(ie.key), Ye = "" + ie.key), Fe(ie) && (Vn = ie.ref, _t(ie, ot));
        for (Et in ie)
          Yt.call(ie, Et) && !bn.hasOwnProperty(Et) && (ut[Et] = ie[Et]);
        if (N && N.defaultProps) {
          var en = N.defaultProps;
          for (Et in en)
            ut[Et] === void 0 && (ut[Et] = en[Et]);
        }
        if (Ye || Vn) {
          var tn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Ye && Qt(ut, tn), Vn && xn(ut, tn);
        }
        return on(N, Ye, Vn, ot, Be, Jt.current, ut);
      }
    }
    var Lt = W.ReactCurrentOwner, dr = W.ReactDebugCurrentFrame;
    function Ht(N) {
      if (N) {
        var ie = N._owner, ye = yt(N.type, N._source, ie ? ie.type : null);
        dr.setExtraStackFrame(ye);
      } else
        dr.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function wl(N) {
      return typeof N == "object" && N !== null && N.$$typeof === y;
    }
    function _o() {
      {
        if (Lt.current) {
          var N = $e(Lt.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Tl(N) {
      {
        if (N !== void 0) {
          var ie = N.fileName.replace(/^.*[\\\/]/, ""), ye = N.lineNumber;
          return `

Check your code at ` + ie + ":" + ye + ".";
        }
        return "";
      }
    }
    var Du = {};
    function js(N) {
      {
        var ie = _o();
        if (!ie) {
          var ye = typeof N == "string" ? N : N.displayName || N.name;
          ye && (ie = `

Check the top-level render call using <` + ye + ">.");
        }
        return ie;
      }
    }
    function No(N, ie) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var ye = js(ie);
        if (Du[ye])
          return;
        Du[ye] = !0;
        var Be = "";
        N && N._owner && N._owner !== Lt.current && (Be = " It was passed a child from " + $e(N._owner.type) + "."), Ht(N), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Be), Ht(null);
      }
    }
    function Rl(N, ie) {
      {
        if (typeof N != "object")
          return;
        if ($r(N))
          for (var ye = 0; ye < N.length; ye++) {
            var Be = N[ye];
            wl(Be) && No(Be, ie);
          }
        else if (wl(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ot = G(N);
          if (typeof ot == "function" && ot !== N.entries)
            for (var Et = ot.call(N), ut; !(ut = Et.next()).done; )
              wl(ut.value) && No(ut.value, ie);
        }
      }
    }
    function Mo(N) {
      {
        var ie = N.type;
        if (ie == null || typeof ie == "string")
          return;
        var ye;
        if (typeof ie == "function")
          ye = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === _))
          ye = ie.propTypes;
        else
          return;
        if (ye) {
          var Be = $e(ie);
          Jr(ye, N.props, "prop", Be, N);
        } else if (ie.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var ot = $e(ie);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ot || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kl(N) {
      {
        for (var ie = Object.keys(N.props), ye = 0; ye < ie.length; ye++) {
          var Be = ie[ye];
          if (Be !== "children" && Be !== "key") {
            Ht(N), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Be), Ht(null);
            break;
          }
        }
        N.ref !== null && (Ht(N), K("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    function Za(N, ie, ye, Be, ot, Et) {
      {
        var ut = De(N);
        if (!ut) {
          var Ye = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Vn = Tl(ot);
          Vn ? Ye += Vn : Ye += _o();
          var en;
          N === null ? en = "null" : $r(N) ? en = "array" : N !== void 0 && N.$$typeof === y ? (en = "<" + ($e(N.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : en = typeof N, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Ye);
        }
        var tn = fr(N, ie, ye, ot, Et);
        if (tn == null)
          return tn;
        if (ut) {
          var wr = ie.children;
          if (wr !== void 0)
            if (Be)
              if ($r(wr)) {
                for (var Qi = 0; Qi < wr.length; Qi++)
                  Rl(wr[Qi], N);
                Object.freeze && Object.freeze(wr);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rl(wr, N);
        }
        return N === C ? kl(tn) : Mo(tn), tn;
      }
    }
    function Yi(N, ie, ye) {
      return Za(N, ie, ye, !0);
    }
    function ta(N, ie, ye) {
      return Za(N, ie, ye, !1);
    }
    var ja = ta, Gi = Yi;
    tv.Fragment = C, tv.jsx = ja, tv.jsxs = Gi;
  }()), tv;
}
process.env.NODE_ENV === "production" ? i1.exports = fN() : i1.exports = dN();
var ge = i1.exports;
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pN = {
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
const vN = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), xl = (d, y) => {
  const m = Hn(
    ({
      color: C = "currentColor",
      size: x = 24,
      strokeWidth: b = 2,
      absoluteStrokeWidth: h,
      className: D = "",
      children: T,
      ...R
    }, A) => et(
      "svg",
      {
        ref: A,
        ...pN,
        width: x,
        height: x,
        stroke: C,
        strokeWidth: h ? Number(b) * 24 / Number(x) : b,
        className: ["lucide", `lucide-${vN(d)}`, D].join(" "),
        ...R
      },
      [
        ...y.map(([_, U]) => et(_, U)),
        ...Array.isArray(T) ? T : [T]
      ]
    )
  );
  return m.displayName = `${d}`, m;
};
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hN = xl("AtSign", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mN = xl("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yN = xl("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gN = xl("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SN = xl("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = xl("Github", [
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
const CN = xl("Linkedin", [
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
const EN = xl("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bN = xl("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), o2 = ({
  footerText: d,
  footerSocials: y,
  footerSourceText: m
}) => /* @__PURE__ */ ge.jsxs("footer", { className: "mt-auto mb-6 flex flex-col justify-center items-center bottom-0 gap-4", children: [
  /* @__PURE__ */ ge.jsx(xN, { text: d }),
  /* @__PURE__ */ ge.jsx(wN, { ...y }),
  /* @__PURE__ */ ge.jsx(TN, { sourceText: m })
] }), xN = ({ text: d }) => d ? /* @__PURE__ */ ge.jsx("p", { className: "text-sm md:text-base", children: d }) : null, wN = ({
  showMail: d,
  showGithub: y,
  showLinkedin: m,
  additionalSocials: C
}) => /* @__PURE__ */ ge.jsxs("div", { className: "grid grid-flow-col gap-4", children: [
  d && /* @__PURE__ */ ge.jsx(
    "a",
    {
      target: "_blank",
      href: "mailto:kyrill@gobber.ch",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ ge.jsx(hN, {})
    }
  ),
  y && /* @__PURE__ */ ge.jsx(
    "a",
    {
      target: "_blank",
      href: "https://github.com/KyrillGobber",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ ge.jsx(Mx, {})
    }
  ),
  m && /* @__PURE__ */ ge.jsx(
    "a",
    {
      target: "_blank",
      href: "https://www.linkedin.com/in/kyrill-gobber-022a71199/",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ ge.jsx(CN, {})
    }
  ),
  C
] }), TN = ({ sourceText: d }) => d ? /* @__PURE__ */ ge.jsxs(
  "a",
  {
    className: "flex flex-row gap-2 text-sm md:text-base",
    target: "_blank",
    href: "https://github.com/KyrillGobber/kyFrontpage",
    rel: "noopener noreferrer",
    children: [
      d,
      /* @__PURE__ */ ge.jsx(SN, {})
    ]
  }
) : null;
function Ox(d) {
  var y, m, C = "";
  if (typeof d == "string" || typeof d == "number")
    C += d;
  else if (typeof d == "object")
    if (Array.isArray(d)) {
      var x = d.length;
      for (y = 0; y < x; y++)
        d[y] && (m = Ox(d[y])) && (C && (C += " "), C += m);
    } else
      for (m in d)
        d[m] && (C && (C += " "), C += m);
  return C;
}
function RN() {
  for (var d, y, m = 0, C = "", x = arguments.length; m < x; m++)
    (d = arguments[m]) && (y = Ox(d)) && (C && (C += " "), C += y);
  return C;
}
const g1 = "-";
function kN(d) {
  const y = _N(d), {
    conflictingClassGroups: m,
    conflictingClassGroupModifiers: C
  } = d;
  function x(h) {
    const D = h.split(g1);
    return D[0] === "" && D.length !== 1 && D.shift(), Lx(D, y) || DN(h);
  }
  function b(h, D) {
    const T = m[h] || [];
    return D && C[h] ? [...T, ...C[h]] : T;
  }
  return {
    getClassGroupId: x,
    getConflictingClassGroupIds: b
  };
}
function Lx(d, y) {
  var h;
  if (d.length === 0)
    return y.classGroupId;
  const m = d[0], C = y.nextPart.get(m), x = C ? Lx(d.slice(1), C) : void 0;
  if (x)
    return x;
  if (y.validators.length === 0)
    return;
  const b = d.join(g1);
  return (h = y.validators.find(({
    validator: D
  }) => D(b))) == null ? void 0 : h.classGroupId;
}
const px = /^\[(.+)\]$/;
function DN(d) {
  if (px.test(d)) {
    const y = px.exec(d)[1], m = y == null ? void 0 : y.substring(0, y.indexOf(":"));
    if (m)
      return "arbitrary.." + m;
  }
}
function _N(d) {
  const {
    theme: y,
    prefix: m
  } = d, C = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return MN(Object.entries(d.classGroups), m).forEach(([b, h]) => {
    o1(h, C, b, y);
  }), C;
}
function o1(d, y, m, C) {
  d.forEach((x) => {
    if (typeof x == "string") {
      const b = x === "" ? y : vx(y, x);
      b.classGroupId = m;
      return;
    }
    if (typeof x == "function") {
      if (NN(x)) {
        o1(x(C), y, m, C);
        return;
      }
      y.validators.push({
        validator: x,
        classGroupId: m
      });
      return;
    }
    Object.entries(x).forEach(([b, h]) => {
      o1(h, vx(y, b), m, C);
    });
  });
}
function vx(d, y) {
  let m = d;
  return y.split(g1).forEach((C) => {
    m.nextPart.has(C) || m.nextPart.set(C, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), m = m.nextPart.get(C);
  }), m;
}
function NN(d) {
  return d.isThemeGetter;
}
function MN(d, y) {
  return y ? d.map(([m, C]) => {
    const x = C.map((b) => typeof b == "string" ? y + b : typeof b == "object" ? Object.fromEntries(Object.entries(b).map(([h, D]) => [y + h, D])) : b);
    return [m, x];
  }) : d;
}
function ON(d) {
  if (d < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let y = 0, m = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
  function x(b, h) {
    m.set(b, h), y++, y > d && (y = 0, C = m, m = /* @__PURE__ */ new Map());
  }
  return {
    get(b) {
      let h = m.get(b);
      if (h !== void 0)
        return h;
      if ((h = C.get(b)) !== void 0)
        return x(b, h), h;
    },
    set(b, h) {
      m.has(b) ? m.set(b, h) : x(b, h);
    }
  };
}
const zx = "!";
function LN(d) {
  const y = d.separator, m = y.length === 1, C = y[0], x = y.length;
  return function(h) {
    const D = [];
    let T = 0, R = 0, A;
    for (let j = 0; j < h.length; j++) {
      let G = h[j];
      if (T === 0) {
        if (G === C && (m || h.slice(j, j + x) === y)) {
          D.push(h.slice(R, j)), R = j + x;
          continue;
        }
        if (G === "/") {
          A = j;
          continue;
        }
      }
      G === "[" ? T++ : G === "]" && T--;
    }
    const _ = D.length === 0 ? h : h.substring(R), U = _.startsWith(zx), F = U ? _.substring(1) : _, $ = A && A > R ? A - R : void 0;
    return {
      modifiers: D,
      hasImportantModifier: U,
      baseClassName: F,
      maybePostfixModifierPosition: $
    };
  };
}
function zN(d) {
  if (d.length <= 1)
    return d;
  const y = [];
  let m = [];
  return d.forEach((C) => {
    C[0] === "[" ? (y.push(...m.sort(), C), m = []) : m.push(C);
  }), y.push(...m.sort()), y;
}
function AN(d) {
  return {
    cache: ON(d.cacheSize),
    splitModifiers: LN(d),
    ...kN(d)
  };
}
const UN = /\s+/;
function $N(d, y) {
  const {
    splitModifiers: m,
    getClassGroupId: C,
    getConflictingClassGroupIds: x
  } = y, b = /* @__PURE__ */ new Set();
  return d.trim().split(UN).map((h) => {
    const {
      modifiers: D,
      hasImportantModifier: T,
      baseClassName: R,
      maybePostfixModifierPosition: A
    } = m(h);
    let _ = C(A ? R.substring(0, A) : R), U = !!A;
    if (!_) {
      if (!A)
        return {
          isTailwindClass: !1,
          originalClassName: h
        };
      if (_ = C(R), !_)
        return {
          isTailwindClass: !1,
          originalClassName: h
        };
      U = !1;
    }
    const F = zN(D).join(":");
    return {
      isTailwindClass: !0,
      modifierId: T ? F + zx : F,
      classGroupId: _,
      originalClassName: h,
      hasPostfixModifier: U
    };
  }).reverse().filter((h) => {
    if (!h.isTailwindClass)
      return !0;
    const {
      modifierId: D,
      classGroupId: T,
      hasPostfixModifier: R
    } = h, A = D + T;
    return b.has(A) ? !1 : (b.add(A), x(T, R).forEach((_) => b.add(D + _)), !0);
  }).reverse().map((h) => h.originalClassName).join(" ");
}
function FN() {
  let d = 0, y, m, C = "";
  for (; d < arguments.length; )
    (y = arguments[d++]) && (m = Ax(y)) && (C && (C += " "), C += m);
  return C;
}
function Ax(d) {
  if (typeof d == "string")
    return d;
  let y, m = "";
  for (let C = 0; C < d.length; C++)
    d[C] && (y = Ax(d[C])) && (m && (m += " "), m += y);
  return m;
}
function jN(d, ...y) {
  let m, C, x, b = h;
  function h(T) {
    const R = y.reduce((A, _) => _(A), d());
    return m = AN(R), C = m.cache.get, x = m.cache.set, b = D, D(T);
  }
  function D(T) {
    const R = C(T);
    if (R)
      return R;
    const A = $N(T, m);
    return x(T, A), A;
  }
  return function() {
    return b(FN.apply(null, arguments));
  };
}
function fn(d) {
  const y = (m) => m[d] || [];
  return y.isThemeGetter = !0, y;
}
const Ux = /^\[(?:([a-z-]+):)?(.+)\]$/i, PN = /^\d+\/\d+$/, HN = /* @__PURE__ */ new Set(["px", "full", "screen"]), VN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, BN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, IN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, YN = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, GN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function El(d) {
  return $s(d) || HN.has(d) || PN.test(d);
}
function Ru(d) {
  return $f(d, "length", eM);
}
function $s(d) {
  return !!d && !Number.isNaN(Number(d));
}
function py(d) {
  return $f(d, "number", $s);
}
function nv(d) {
  return !!d && Number.isInteger(Number(d));
}
function QN(d) {
  return d.endsWith("%") && $s(d.slice(0, -1));
}
function ct(d) {
  return Ux.test(d);
}
function ku(d) {
  return VN.test(d);
}
const WN = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function KN(d) {
  return $f(d, WN, $x);
}
function qN(d) {
  return $f(d, "position", $x);
}
const XN = /* @__PURE__ */ new Set(["image", "url"]);
function ZN(d) {
  return $f(d, XN, nM);
}
function JN(d) {
  return $f(d, "", tM);
}
function rv() {
  return !0;
}
function $f(d, y, m) {
  const C = Ux.exec(d);
  return C ? C[1] ? typeof y == "string" ? C[1] === y : y.has(C[1]) : m(C[2]) : !1;
}
function eM(d) {
  return BN.test(d) && !IN.test(d);
}
function $x() {
  return !1;
}
function tM(d) {
  return YN.test(d);
}
function nM(d) {
  return GN.test(d);
}
function rM() {
  const d = fn("colors"), y = fn("spacing"), m = fn("blur"), C = fn("brightness"), x = fn("borderColor"), b = fn("borderRadius"), h = fn("borderSpacing"), D = fn("borderWidth"), T = fn("contrast"), R = fn("grayscale"), A = fn("hueRotate"), _ = fn("invert"), U = fn("gap"), F = fn("gradientColorStops"), $ = fn("gradientColorStopPositions"), j = fn("inset"), G = fn("margin"), W = fn("opacity"), K = fn("padding"), q = fn("saturate"), ae = fn("scale"), te = fn("sepia"), Se = fn("skew"), oe = fn("space"), de = fn("translate"), ve = () => ["auto", "contain", "none"], De = () => ["auto", "hidden", "clip", "visible", "scroll"], Oe = () => ["auto", ct, y], Ue = () => [ct, y], $e = () => ["", El, Ru], Ve = () => ["auto", $s, ct], kt = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ft = () => ["solid", "dashed", "dotted", "double", "none"], At = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], se = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], xe = () => ["", "0", ct], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ke = () => [$s, py], rt = () => [$s, ct];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [rv],
      spacing: [El, Ru],
      blur: ["none", "", ku, ct],
      brightness: Ke(),
      borderColor: [d],
      borderRadius: ["none", "", "full", ku, ct],
      borderSpacing: Ue(),
      borderWidth: $e(),
      contrast: Ke(),
      grayscale: xe(),
      hueRotate: rt(),
      invert: xe(),
      gap: Ue(),
      gradientColorStops: [d],
      gradientColorStopPositions: [QN, Ru],
      inset: Oe(),
      margin: Oe(),
      opacity: Ke(),
      padding: Ue(),
      saturate: Ke(),
      scale: Ke(),
      sepia: xe(),
      skew: rt(),
      space: Ue(),
      translate: Ue()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ct]
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
        columns: [ku]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
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
        object: [...kt(), ct]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: De()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": De()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": De()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ve()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ve()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ve()
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
        inset: [j]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [j]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [j]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [j]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [j]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [j]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [j]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [j]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [j]
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
        z: ["auto", nv, ct]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Oe()
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
        flex: ["1", "auto", "initial", "none", ct]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: xe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: xe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", nv, ct]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [rv]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", nv, ct]
        }, ct]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ve()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ve()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [rv]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [nv, ct]
        }, ct]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ve()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ve()
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
        "auto-cols": ["auto", "min", "max", "fr", ct]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ct]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [U]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [U]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [U]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...se()]
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
        content: ["normal", ...se(), "baseline"]
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
        "place-content": [...se(), "baseline"]
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
        p: [K]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [K]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [K]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [K]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [K]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [K]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [K]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [K]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [K]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [G]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [G]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [G]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [G]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [G]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [G]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [G]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [G]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [G]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [oe]
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
        "space-y": [oe]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ct, y]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ct, y, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ct, y, "none", "full", "min", "max", "fit", "prose", {
          screen: [ku]
        }, ku]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ct, y, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ct, y, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ct, y, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ct, y, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ku, Ru]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", py]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rv]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ct]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $s, py]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", El, ct]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ct]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ct]
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
        placeholder: [d]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [W]
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
        text: [d]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [W]
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
        decoration: [...ft(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", El, Ru]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", El, ct]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [d]
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
        indent: Ue()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ct]
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
        content: ["none", ct]
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
        "bg-opacity": [W]
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
        bg: [...kt(), qN]
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
        bg: ["auto", "cover", "contain", KN]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ZN]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [d]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [$]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [$]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [$]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [F]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [F]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [F]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [b]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [b]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [b]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [b]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [b]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [b]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [b]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [b]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [b]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [b]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [b]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [b]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [b]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [b]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [b]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [D]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [D]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [D]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [D]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [D]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [D]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [D]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [D]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [D]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [W]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ft(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [D]
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
        "divide-y": [D]
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
        "divide-opacity": [W]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ft()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [x]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [x]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [x]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [x]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [x]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [x]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [x]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [x]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ft()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [El, ct]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [El, Ru]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [d]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $e()
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
        ring: [d]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [W]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [El, Ru]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [d]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ku, JN]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [rv]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": At()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": At()
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
        blur: [m]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [T]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ku, ct]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [R]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [_]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [te]
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
        "backdrop-blur": [m]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [T]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [R]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [_]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [te]
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
        "border-spacing": [h]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [h]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [h]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ct]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: rt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ct]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: rt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ct]
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
        scale: [ae]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ae]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ae]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [nv, ct]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [de]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [de]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Se]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Se]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ct]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", d]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ct]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [d]
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
        "scroll-m": Ue()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Ue()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Ue()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Ue()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Ue()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Ue()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Ue()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Ue()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Ue()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Ue()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Ue()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Ue()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Ue()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Ue()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Ue()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Ue()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Ue()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Ue()
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
        "will-change": ["auto", "scroll", "contents", "transform", ct]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [d, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [El, Ru, py]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [d, "none"]
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
const aM = /* @__PURE__ */ jN(rM);
function Zr(...d) {
  return aM(RN(d));
}
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(d) {
    for (var y = 1; y < arguments.length; y++) {
      var m = arguments[y];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (d[C] = m[C]);
    }
    return d;
  }, kn.apply(this, arguments);
}
var l1 = { exports: {} }, Ua = {}, vy = { exports: {} }, t1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function iM() {
  return hx || (hx = 1, function(d) {
    function y(se, xe) {
      var pe = se.length;
      se.push(xe);
      e:
        for (; 0 < pe; ) {
          var Ke = pe - 1 >>> 1, rt = se[Ke];
          if (0 < x(rt, xe))
            se[Ke] = xe, se[pe] = rt, pe = Ke;
          else
            break e;
        }
    }
    function m(se) {
      return se.length === 0 ? null : se[0];
    }
    function C(se) {
      if (se.length === 0)
        return null;
      var xe = se[0], pe = se.pop();
      if (pe !== xe) {
        se[0] = pe;
        e:
          for (var Ke = 0, rt = se.length, Pt = rt >>> 1; Ke < Pt; ) {
            var Cn = 2 * (Ke + 1) - 1, ur = se[Cn], xt = Cn + 1, an = se[xt];
            if (0 > x(ur, pe))
              xt < rt && 0 > x(an, ur) ? (se[Ke] = an, se[xt] = pe, Ke = xt) : (se[Ke] = ur, se[Cn] = pe, Ke = Cn);
            else if (xt < rt && 0 > x(an, pe))
              se[Ke] = an, se[xt] = pe, Ke = xt;
            else
              break e;
          }
      }
      return xe;
    }
    function x(se, xe) {
      var pe = se.sortIndex - xe.sortIndex;
      return pe !== 0 ? pe : se.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      d.unstable_now = function() {
        return b.now();
      };
    } else {
      var h = Date, D = h.now();
      d.unstable_now = function() {
        return h.now() - D;
      };
    }
    var T = [], R = [], A = 1, _ = null, U = 3, F = !1, $ = !1, j = !1, G = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function q(se) {
      for (var xe = m(R); xe !== null; ) {
        if (xe.callback === null)
          C(R);
        else if (xe.startTime <= se)
          C(R), xe.sortIndex = xe.expirationTime, y(T, xe);
        else
          break;
        xe = m(R);
      }
    }
    function ae(se) {
      if (j = !1, q(se), !$)
        if (m(T) !== null)
          $ = !0, ft(te);
        else {
          var xe = m(R);
          xe !== null && At(ae, xe.startTime - se);
        }
    }
    function te(se, xe) {
      $ = !1, j && (j = !1, W(de), de = -1), F = !0;
      var pe = U;
      try {
        for (q(xe), _ = m(T); _ !== null && (!(_.expirationTime > xe) || se && !Oe()); ) {
          var Ke = _.callback;
          if (typeof Ke == "function") {
            _.callback = null, U = _.priorityLevel;
            var rt = Ke(_.expirationTime <= xe);
            xe = d.unstable_now(), typeof rt == "function" ? _.callback = rt : _ === m(T) && C(T), q(xe);
          } else
            C(T);
          _ = m(T);
        }
        if (_ !== null)
          var Pt = !0;
        else {
          var Cn = m(R);
          Cn !== null && At(ae, Cn.startTime - xe), Pt = !1;
        }
        return Pt;
      } finally {
        _ = null, U = pe, F = !1;
      }
    }
    var Se = !1, oe = null, de = -1, ve = 5, De = -1;
    function Oe() {
      return !(d.unstable_now() - De < ve);
    }
    function Ue() {
      if (oe !== null) {
        var se = d.unstable_now();
        De = se;
        var xe = !0;
        try {
          xe = oe(!0, se);
        } finally {
          xe ? $e() : (Se = !1, oe = null);
        }
      } else
        Se = !1;
    }
    var $e;
    if (typeof K == "function")
      $e = function() {
        K(Ue);
      };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), kt = Ve.port2;
      Ve.port1.onmessage = Ue, $e = function() {
        kt.postMessage(null);
      };
    } else
      $e = function() {
        G(Ue, 0);
      };
    function ft(se) {
      oe = se, Se || (Se = !0, $e());
    }
    function At(se, xe) {
      de = G(function() {
        se(d.unstable_now());
      }, xe);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(se) {
      se.callback = null;
    }, d.unstable_continueExecution = function() {
      $ || F || ($ = !0, ft(te));
    }, d.unstable_forceFrameRate = function(se) {
      0 > se || 125 < se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ve = 0 < se ? Math.floor(1e3 / se) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, d.unstable_getFirstCallbackNode = function() {
      return m(T);
    }, d.unstable_next = function(se) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = U;
      }
      var pe = U;
      U = xe;
      try {
        return se();
      } finally {
        U = pe;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(se, xe) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var pe = U;
      U = se;
      try {
        return xe();
      } finally {
        U = pe;
      }
    }, d.unstable_scheduleCallback = function(se, xe, pe) {
      var Ke = d.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? Ke + pe : Ke) : pe = Ke, se) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = pe + rt, se = { id: A++, callback: xe, priorityLevel: se, startTime: pe, expirationTime: rt, sortIndex: -1 }, pe > Ke ? (se.sortIndex = pe, y(R, se), m(T) === null && se === m(R) && (j ? (W(de), de = -1) : j = !0, At(ae, pe - Ke))) : (se.sortIndex = rt, y(T, se), $ || F || ($ = !0, ft(te))), se;
    }, d.unstable_shouldYield = Oe, d.unstable_wrapCallback = function(se) {
      var xe = U;
      return function() {
        var pe = U;
        U = xe;
        try {
          return se.apply(this, arguments);
        } finally {
          U = pe;
        }
      };
    };
  }(t1)), t1;
}
var n1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mx;
function oM() {
  return mx || (mx = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = !1, m = !1, C = 5;
      function x(fe, Fe) {
        var lt = fe.length;
        fe.push(Fe), D(fe, Fe, lt);
      }
      function b(fe) {
        return fe.length === 0 ? null : fe[0];
      }
      function h(fe) {
        if (fe.length === 0)
          return null;
        var Fe = fe[0], lt = fe.pop();
        return lt !== Fe && (fe[0] = lt, T(fe, lt, 0)), Fe;
      }
      function D(fe, Fe, lt) {
        for (var _t = lt; _t > 0; ) {
          var Qt = _t - 1 >>> 1, xn = fe[Qt];
          if (R(xn, Fe) > 0)
            fe[Qt] = Fe, fe[_t] = xn, _t = Qt;
          else
            return;
        }
      }
      function T(fe, Fe, lt) {
        for (var _t = lt, Qt = fe.length, xn = Qt >>> 1; _t < xn; ) {
          var on = (_t + 1) * 2 - 1, fr = fe[on], Lt = on + 1, dr = fe[Lt];
          if (R(fr, Fe) < 0)
            Lt < Qt && R(dr, fr) < 0 ? (fe[_t] = dr, fe[Lt] = Fe, _t = Lt) : (fe[_t] = fr, fe[on] = Fe, _t = on);
          else if (Lt < Qt && R(dr, Fe) < 0)
            fe[_t] = dr, fe[Lt] = Fe, _t = Lt;
          else
            return;
        }
      }
      function R(fe, Fe) {
        var lt = fe.sortIndex - Fe.sortIndex;
        return lt !== 0 ? lt : fe.id - Fe.id;
      }
      var A = 1, _ = 2, U = 3, F = 4, $ = 5;
      function j(fe, Fe) {
      }
      var G = typeof performance == "object" && typeof performance.now == "function";
      if (G) {
        var W = performance;
        d.unstable_now = function() {
          return W.now();
        };
      } else {
        var K = Date, q = K.now();
        d.unstable_now = function() {
          return K.now() - q;
        };
      }
      var ae = 1073741823, te = -1, Se = 250, oe = 5e3, de = 1e4, ve = ae, De = [], Oe = [], Ue = 1, $e = null, Ve = U, kt = !1, ft = !1, At = !1, se = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, pe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ke(fe) {
        for (var Fe = b(Oe); Fe !== null; ) {
          if (Fe.callback === null)
            h(Oe);
          else if (Fe.startTime <= fe)
            h(Oe), Fe.sortIndex = Fe.expirationTime, x(De, Fe);
          else
            return;
          Fe = b(Oe);
        }
      }
      function rt(fe) {
        if (At = !1, Ke(fe), !ft)
          if (b(De) !== null)
            ft = !0, ea(Pt);
          else {
            var Fe = b(Oe);
            Fe !== null && Jt(rt, Fe.startTime - fe);
          }
      }
      function Pt(fe, Fe) {
        ft = !1, At && (At = !1, bn()), kt = !0;
        var lt = Ve;
        try {
          var _t;
          if (!m)
            return Cn(fe, Fe);
        } finally {
          $e = null, Ve = lt, kt = !1;
        }
      }
      function Cn(fe, Fe) {
        var lt = Fe;
        for (Ke(lt), $e = b(De); $e !== null && !y && !($e.expirationTime > lt && (!fe || Ln())); ) {
          var _t = $e.callback;
          if (typeof _t == "function") {
            $e.callback = null, Ve = $e.priorityLevel;
            var Qt = $e.expirationTime <= lt, xn = _t(Qt);
            lt = d.unstable_now(), typeof xn == "function" ? $e.callback = xn : $e === b(De) && h(De), Ke(lt);
          } else
            h(De);
          $e = b(De);
        }
        if ($e !== null)
          return !0;
        var on = b(Oe);
        return on !== null && Jt(rt, on.startTime - lt), !1;
      }
      function ur(fe, Fe) {
        switch (fe) {
          case A:
          case _:
          case U:
          case F:
          case $:
            break;
          default:
            fe = U;
        }
        var lt = Ve;
        Ve = fe;
        try {
          return Fe();
        } finally {
          Ve = lt;
        }
      }
      function xt(fe) {
        var Fe;
        switch (Ve) {
          case A:
          case _:
          case U:
            Fe = U;
            break;
          default:
            Fe = Ve;
            break;
        }
        var lt = Ve;
        Ve = Fe;
        try {
          return fe();
        } finally {
          Ve = lt;
        }
      }
      function an(fe) {
        var Fe = Ve;
        return function() {
          var lt = Ve;
          Ve = Fe;
          try {
            return fe.apply(this, arguments);
          } finally {
            Ve = lt;
          }
        };
      }
      function Dt(fe, Fe, lt) {
        var _t = d.unstable_now(), Qt;
        if (typeof lt == "object" && lt !== null) {
          var xn = lt.delay;
          typeof xn == "number" && xn > 0 ? Qt = _t + xn : Qt = _t;
        } else
          Qt = _t;
        var on;
        switch (fe) {
          case A:
            on = te;
            break;
          case _:
            on = Se;
            break;
          case $:
            on = ve;
            break;
          case F:
            on = de;
            break;
          case U:
          default:
            on = oe;
            break;
        }
        var fr = Qt + on, Lt = {
          id: Ue++,
          callback: Fe,
          priorityLevel: fe,
          startTime: Qt,
          expirationTime: fr,
          sortIndex: -1
        };
        return Qt > _t ? (Lt.sortIndex = Qt, x(Oe, Lt), b(De) === null && Lt === b(Oe) && (At ? bn() : At = !0, Jt(rt, Qt - _t))) : (Lt.sortIndex = fr, x(De, Lt), !ft && !kt && (ft = !0, ea(Pt))), Lt;
      }
      function En() {
      }
      function vn() {
        !ft && !kt && (ft = !0, ea(Pt));
      }
      function dt() {
        return b(De);
      }
      function Re(fe) {
        fe.callback = null;
      }
      function qe() {
        return Ve;
      }
      var mt = !1, yt = null, Yt = -1, Ut = C, hn = -1;
      function Ln() {
        var fe = d.unstable_now() - hn;
        return !(fe < Ut);
      }
      function Jr() {
      }
      function Ur(fe) {
        if (fe < 0 || fe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        fe > 0 ? Ut = Math.floor(1e3 / fe) : Ut = C;
      }
      var $r = function() {
        if (yt !== null) {
          var fe = d.unstable_now();
          hn = fe;
          var Fe = !0, lt = !0;
          try {
            lt = yt(Fe, fe);
          } finally {
            lt ? sr() : (mt = !1, yt = null);
          }
        } else
          mt = !1;
      }, sr;
      if (typeof pe == "function")
        sr = function() {
          pe($r);
        };
      else if (typeof MessageChannel < "u") {
        var va = new MessageChannel(), cr = va.port2;
        va.port1.onmessage = $r, sr = function() {
          cr.postMessage(null);
        };
      } else
        sr = function() {
          se($r, 0);
        };
      function ea(fe) {
        yt = fe, mt || (mt = !0, sr());
      }
      function Jt(fe, Fe) {
        Yt = se(function() {
          fe(d.unstable_now());
        }, Fe);
      }
      function bn() {
        xe(Yt), Yt = -1;
      }
      var ha = Jr, xr = null;
      d.unstable_IdlePriority = $, d.unstable_ImmediatePriority = A, d.unstable_LowPriority = F, d.unstable_NormalPriority = U, d.unstable_Profiling = xr, d.unstable_UserBlockingPriority = _, d.unstable_cancelCallback = Re, d.unstable_continueExecution = vn, d.unstable_forceFrameRate = Ur, d.unstable_getCurrentPriorityLevel = qe, d.unstable_getFirstCallbackNode = dt, d.unstable_next = xt, d.unstable_pauseExecution = En, d.unstable_requestPaint = ha, d.unstable_runWithPriority = ur, d.unstable_scheduleCallback = Dt, d.unstable_shouldYield = Ln, d.unstable_wrapCallback = an, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(n1)), n1;
}
var yx;
function Fx() {
  return yx || (yx = 1, process.env.NODE_ENV === "production" ? vy.exports = iM() : vy.exports = oM()), vy.exports;
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
var gx;
function lM() {
  if (gx)
    return Ua;
  gx = 1;
  var d = Fa, y = Fx();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), x = {};
  function b(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, _ = {};
  function U(n) {
    return T.call(_, n) ? !0 : T.call(A, n) ? !1 : R.test(n) ? _[n] = !0 : (A[n] = !0, !1);
  }
  function F(n, r, o, u) {
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
  function $(n, r, o, u) {
    if (r === null || typeof r > "u" || F(n, r, o, u))
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
  function j(n, r, o, u, c, p, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = S;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    G[n] = new j(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    G[r] = new j(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    G[n] = new j(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    G[n] = new j(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    G[n] = new j(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    G[n] = new j(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    G[n] = new j(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    G[n] = new j(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    G[n] = new j(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var W = /[\-:]([a-z])/g;
  function K(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      W,
      K
    );
    G[r] = new j(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(W, K);
    G[r] = new j(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(W, K);
    G[r] = new j(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    G[n] = new j(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    G[n] = new j(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function q(n, r, o, u) {
    var c = G.hasOwnProperty(r) ? G[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($(r, o, c, u) && (o = null), u || c === null ? U(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var ae = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), Se = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), De = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), ft = Symbol.for("react.lazy"), At = Symbol.for("react.offscreen"), se = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = se && n[se] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var pe = Object.assign, Ke;
  function rt(n) {
    if (Ke === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Ke = r && r[1] || "";
      }
    return `
` + Ke + n;
  }
  var Pt = !1;
  function Cn(n, r) {
    if (!n || Pt)
      return "";
    Pt = !0;
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
          } catch (Q) {
            var u = Q;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Q) {
            u = Q;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Q) {
          u = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && u && typeof Q.stack == "string") {
        for (var c = Q.stack.split(`
`), p = u.stack.split(`
`), S = c.length - 1, k = p.length - 1; 1 <= S && 0 <= k && c[S] !== p[k]; )
          k--;
        for (; 1 <= S && 0 <= k; S--, k--)
          if (c[S] !== p[k]) {
            if (S !== 1 || k !== 1)
              do
                if (S--, k--, 0 > k || c[S] !== p[k]) {
                  var M = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", n.displayName)), M;
                }
              while (1 <= S && 0 <= k);
            break;
          }
      }
    } finally {
      Pt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? rt(n) : "";
  }
  function ur(n) {
    switch (n.tag) {
      case 5:
        return rt(n.type);
      case 16:
        return rt("Lazy");
      case 13:
        return rt("Suspense");
      case 19:
        return rt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Cn(n.type, !1), n;
      case 11:
        return n = Cn(n.type.render, !1), n;
      case 1:
        return n = Cn(n.type, !0), n;
      default:
        return "";
    }
  }
  function xt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case oe:
        return "Fragment";
      case Se:
        return "Portal";
      case ve:
        return "Profiler";
      case de:
        return "StrictMode";
      case $e:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Oe:
          return (n.displayName || "Context") + ".Consumer";
        case De:
          return (n._context.displayName || "Context") + ".Provider";
        case Ue:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case kt:
          return r = n.displayName || null, r !== null ? r : xt(n.type) || "Memo";
        case ft:
          r = n._payload, n = n._init;
          try {
            return xt(n(r));
          } catch {
          }
      }
    return null;
  }
  function an(n) {
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
        return xt(r);
      case 8:
        return r === de ? "StrictMode" : "Mode";
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
  function Dt(n) {
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
  function En(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function vn(n) {
    var r = En(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, p = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(S) {
        u = "" + S, p.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(S) {
        u = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function dt(n) {
    n._valueTracker || (n._valueTracker = vn(n));
  }
  function Re(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = En(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function qe(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function mt(n, r) {
    var o = r.checked;
    return pe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function yt(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Dt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yt(n, r) {
    r = r.checked, r != null && q(n, "checked", r, !1);
  }
  function Ut(n, r) {
    Yt(n, r);
    var o = Dt(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ln(n, r.type, o) : r.hasOwnProperty("defaultValue") && Ln(n, r.type, Dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function hn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Ln(n, r, o) {
    (r !== "number" || qe(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Jr = Array.isArray;
  function Ur(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++)
        r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++)
        c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Dt(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $r(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return pe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function sr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(m(92));
        if (Jr(o)) {
          if (1 < o.length)
            throw Error(m(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Dt(o) };
  }
  function va(n, r) {
    var o = Dt(r.value), u = Dt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function cr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ea(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Jt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ea(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var bn, ha = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (bn = bn || document.createElement("div"), bn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = bn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function xr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var fe = {
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
  }, Fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fe).forEach(function(n) {
    Fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), fe[r] = fe[n];
    });
  });
  function lt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || fe.hasOwnProperty(n) && fe[n] ? ("" + r).trim() : r + "px";
  }
  function _t(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, c = lt(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
      }
  }
  var Qt = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xn(n, r) {
    if (r) {
      if (Qt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
    }
  }
  function on(n, r) {
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
  var fr = null;
  function Lt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var dr = null, Ht = null, Gt = null;
  function wl(n) {
    if (n = qu(n)) {
      if (typeof dr != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = Pe(r), dr(n.stateNode, n.type, r));
    }
  }
  function _o(n) {
    Ht ? Gt ? Gt.push(n) : Gt = [n] : Ht = n;
  }
  function Tl() {
    if (Ht) {
      var n = Ht, r = Gt;
      if (Gt = Ht = null, wl(n), r)
        for (n = 0; n < r.length; n++)
          wl(r[n]);
    }
  }
  function Du(n, r) {
    return n(r);
  }
  function js() {
  }
  var No = !1;
  function Rl(n, r, o) {
    if (No)
      return n(r, o);
    No = !0;
    try {
      return Du(n, r, o);
    } finally {
      No = !1, (Ht !== null || Gt !== null) && (js(), Tl());
    }
  }
  function Mo(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = Pe(o);
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
      throw Error(m(231, r, typeof o));
    return o;
  }
  var kl = !1;
  if (D)
    try {
      var Za = {};
      Object.defineProperty(Za, "passive", { get: function() {
        kl = !0;
      } }), window.addEventListener("test", Za, Za), window.removeEventListener("test", Za, Za);
    } catch {
      kl = !1;
    }
  function Yi(n, r, o, u, c, p, S, k, M) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (re) {
      this.onError(re);
    }
  }
  var ta = !1, ja = null, Gi = !1, N = null, ie = { onError: function(n) {
    ta = !0, ja = n;
  } };
  function ye(n, r, o, u, c, p, S, k, M) {
    ta = !1, ja = null, Yi.apply(ie, arguments);
  }
  function Be(n, r, o, u, c, p, S, k, M) {
    if (ye.apply(this, arguments), ta) {
      if (ta) {
        var Q = ja;
        ta = !1, ja = null;
      } else
        throw Error(m(198));
      Gi || (Gi = !0, N = Q);
    }
  }
  function ot(n) {
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
  function Et(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ut(n) {
    if (ot(n) !== n)
      throw Error(m(188));
  }
  function Ye(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ot(n), r === null)
        throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null)
        break;
      var p = c.alternate;
      if (p === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === o)
            return ut(c), n;
          if (p === u)
            return ut(c), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (o.return !== u.return)
        o = c, u = p;
      else {
        for (var S = !1, k = c.child; k; ) {
          if (k === o) {
            S = !0, o = c, u = p;
            break;
          }
          if (k === u) {
            S = !0, u = c, o = p;
            break;
          }
          k = k.sibling;
        }
        if (!S) {
          for (k = p.child; k; ) {
            if (k === o) {
              S = !0, o = p, u = c;
              break;
            }
            if (k === u) {
              S = !0, u = p, o = c;
              break;
            }
            k = k.sibling;
          }
          if (!S)
            throw Error(m(189));
        }
      }
      if (o.alternate !== u)
        throw Error(m(190));
    }
    if (o.tag !== 3)
      throw Error(m(188));
    return o.stateNode.current === o ? n : r;
  }
  function Vn(n) {
    return n = Ye(n), n !== null ? en(n) : null;
  }
  function en(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = en(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var tn = y.unstable_scheduleCallback, wr = y.unstable_cancelCallback, Qi = y.unstable_shouldYield, Ps = y.unstable_requestPaint, wt = y.unstable_now, wy = y.unstable_getCurrentPriorityLevel, hi = y.unstable_ImmediatePriority, pt = y.unstable_UserBlockingPriority, Wi = y.unstable_NormalPriority, vv = y.unstable_LowPriority, Ff = y.unstable_IdlePriority, _u = null, Pa = null;
  function hv(n) {
    if (Pa && typeof Pa.onCommitFiberRoot == "function")
      try {
        Pa.onCommitFiberRoot(_u, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ma = Math.clz32 ? Math.clz32 : Ty, mv = Math.log, yv = Math.LN2;
  function Ty(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (mv(n) / yv | 0) | 0;
  }
  var Hs = 64, Dl = 4194304;
  function Oo(n) {
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
  function Ha(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, S = o & 268435455;
    if (S !== 0) {
      var k = S & ~c;
      k !== 0 ? u = Oo(k) : (p &= S, p !== 0 && (u = Oo(p)));
    } else
      S = o & ~c, S !== 0 ? u = Oo(S) : p !== 0 && (u = Oo(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - ma(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function jf(n, r) {
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
  function Vs(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var S = 31 - ma(p), k = 1 << S, M = c[S];
      M === -1 ? (!(k & o) || k & u) && (c[S] = jf(k, r)) : M <= r && (n.expiredLanes |= k), p &= ~k;
    }
  }
  function Pf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bs() {
    var n = Hs;
    return Hs <<= 1, !(Hs & 4194240) && (Hs = 64), n;
  }
  function Hf(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Lo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ma(r), n[r] = o;
  }
  function Ry(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - ma(o), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~p;
    }
  }
  function Nu(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - ma(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var zt = 0;
  function Vf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var gv, Is, Vt, Sv, Bf, nt = !1, Mu = [], Dn = null, ya = null, ga = null, Ou = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), $t = [], ky = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Va(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dn = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        Ou.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(r.pointerId);
    }
  }
  function pr(n, r, o, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = qu(r), r !== null && Is(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ki(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Dn = pr(Dn, n, r, o, u, c), !0;
      case "dragenter":
        return ya = pr(ya, n, r, o, u, c), !0;
      case "mouseover":
        return ga = pr(ga, n, r, o, u, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return Ou.set(p, pr(Ou.get(p) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, zn.set(p, pr(zn.get(p) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function Cv(n) {
    var r = Ca(n.target);
    if (r !== null) {
      var o = ot(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Et(o), r !== null) {
            n.blockedOn = r, Bf(n.priority, function() {
              Vt(o);
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
  function _l(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Qs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        fr = u, o.target.dispatchEvent(u), fr = null;
      } else
        return r = qu(o), r !== null && Is(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function If(n, r, o) {
    _l(n) && o.delete(r);
  }
  function Ev() {
    nt = !1, Dn !== null && _l(Dn) && (Dn = null), ya !== null && _l(ya) && (ya = null), ga !== null && _l(ga) && (ga = null), Ou.forEach(If), zn.forEach(If);
  }
  function Lu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, nt || (nt = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Ev)));
  }
  function zu(n) {
    function r(c) {
      return Lu(c, n);
    }
    if (0 < Mu.length) {
      Lu(Mu[0], n);
      for (var o = 1; o < Mu.length; o++) {
        var u = Mu[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Dn !== null && Lu(Dn, n), ya !== null && Lu(ya, n), ga !== null && Lu(ga, n), Ou.forEach(r), zn.forEach(r), o = 0; o < $t.length; o++)
      u = $t[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < $t.length && (o = $t[0], o.blockedOn === null); )
      Cv(o), o.blockedOn === null && $t.shift();
  }
  var Nl = ae.ReactCurrentBatchConfig, zo = !0;
  function bv(n, r, o, u) {
    var c = zt, p = Nl.transition;
    Nl.transition = null;
    try {
      zt = 1, Gs(n, r, o, u);
    } finally {
      zt = c, Nl.transition = p;
    }
  }
  function Ys(n, r, o, u) {
    var c = zt, p = Nl.transition;
    Nl.transition = null;
    try {
      zt = 4, Gs(n, r, o, u);
    } finally {
      zt = c, Nl.transition = p;
    }
  }
  function Gs(n, r, o, u) {
    if (zo) {
      var c = Qs(n, r, o, u);
      if (c === null)
        ic(n, r, u, Au, o), Va(n, u);
      else if (Ki(c, n, r, o, u))
        u.stopPropagation();
      else if (Va(n, u), r & 4 && -1 < ky.indexOf(n)) {
        for (; c !== null; ) {
          var p = qu(c);
          if (p !== null && gv(p), p = Qs(n, r, o, u), p === null && ic(n, r, u, Au, o), p === c)
            break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else
        ic(n, r, u, null, o);
    }
  }
  var Au = null;
  function Qs(n, r, o, u) {
    if (Au = null, n = Lt(u), n = Ca(n), n !== null)
      if (r = ot(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Et(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Au = n, null;
  }
  function Yf(n) {
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
        switch (wy()) {
          case hi:
            return 1;
          case pt:
            return 4;
          case Wi:
          case vv:
            return 16;
          case Ff:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mi = null, Uu = null, $u = null;
  function Gf() {
    if ($u)
      return $u;
    var n, r = Uu, o = r.length, u, c = "value" in mi ? mi.value : mi.textContent, p = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++)
      ;
    var S = o - n;
    for (u = 1; u <= S && r[o - u] === c[p - u]; u++)
      ;
    return $u = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Ml(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Fu() {
    return !0;
  }
  function xv() {
    return !1;
  }
  function na(n) {
    function r(o, u, c, p, S) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = S, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(p) : p[k]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Fu : xv, this.isPropagationStopped = xv, this;
    }
    return pe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Fu);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Fu);
    }, persist: function() {
    }, isPersistent: Fu }), r;
  }
  var qi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ws = na(qi), Ol = pe({}, qi, { view: 0, detail: 0 }), wv = na(Ol), Ks, Qf, ju, Bn = pe({}, Ol, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ju && (ju && n.type === "mousemove" ? (Ks = n.screenX - ju.screenX, Qf = n.screenY - ju.screenY) : Qf = Ks = 0, ju = n), Ks);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Qf;
  } }), qs = na(Bn), Tv = pe({}, Bn, { dataTransfer: 0 }), Rv = na(Tv), Dy = pe({}, Ol, { relatedTarget: 0 }), Xi = na(Dy), Wf = pe({}, qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kv = na(Wf), _y = pe({}, qi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ny = na(_y), My = pe({}, qi, { data: 0 }), Kf = na(My), qf = {
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
  }, Dv = {
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
  }, _v = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Nv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = _v[n]) ? !!r[n] : !1;
  }
  function Xf() {
    return Nv;
  }
  var yi = pe({}, Ol, { key: function(n) {
    if (n.key) {
      var r = qf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ml(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xf, charCode: function(n) {
    return n.type === "keypress" ? Ml(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ml(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Oy = na(yi), Zf = pe({}, Bn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xs = na(Zf), Jf = pe({}, Ol, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xf }), Ly = na(Jf), Zs = pe({}, qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mv = na(Zs), Fr = pe({}, Bn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gi = na(Fr), _n = [9, 13, 27, 32], Ba = D && "CompositionEvent" in window, Ao = null;
  D && "documentMode" in document && (Ao = document.documentMode);
  var Js = D && "TextEvent" in window && !Ao, Ov = D && (!Ba || Ao && 8 < Ao && 11 >= Ao), Ll = " ", Lv = !1;
  function zv(n, r) {
    switch (n) {
      case "keyup":
        return _n.indexOf(r.keyCode) !== -1;
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
  function ec(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var zl = !1;
  function zy(n, r) {
    switch (n) {
      case "compositionend":
        return ec(r);
      case "keypress":
        return r.which !== 32 ? null : (Lv = !0, Ll);
      case "textInput":
        return n = r.data, n === Ll && Lv ? null : n;
      default:
        return null;
    }
  }
  function Ay(n, r) {
    if (zl)
      return n === "compositionend" || !Ba && zv(n, r) ? (n = Gf(), $u = Uu = mi = null, zl = !1, n) : null;
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
        return Ov && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Av = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Av[n.type] : r === "textarea";
  }
  function $v(n, r, o, u) {
    _o(u), r = Qu(r, "onChange"), 0 < r.length && (o = new Ws("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Pu = null, Al = null;
  function Ul(n) {
    ac(n, 0);
  }
  function $l(n) {
    var r = jl(n);
    if (Re(r))
      return n;
  }
  function Fv(n, r) {
    if (n === "change")
      return r;
  }
  var ed = !1;
  if (D) {
    var td;
    if (D) {
      var nd = "oninput" in document;
      if (!nd) {
        var jv = document.createElement("div");
        jv.setAttribute("oninput", "return;"), nd = typeof jv.oninput == "function";
      }
      td = nd;
    } else
      td = !1;
    ed = td && (!document.documentMode || 9 < document.documentMode);
  }
  function Pv() {
    Pu && (Pu.detachEvent("onpropertychange", Hv), Al = Pu = null);
  }
  function Hv(n) {
    if (n.propertyName === "value" && $l(Al)) {
      var r = [];
      $v(r, Al, n, Lt(n)), Rl(Ul, r);
    }
  }
  function Uy(n, r, o) {
    n === "focusin" ? (Pv(), Pu = r, Al = o, Pu.attachEvent("onpropertychange", Hv)) : n === "focusout" && Pv();
  }
  function $y(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return $l(Al);
  }
  function Fy(n, r) {
    if (n === "click")
      return $l(r);
  }
  function Vv(n, r) {
    if (n === "input" || n === "change")
      return $l(r);
  }
  function jy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Sa = typeof Object.is == "function" ? Object.is : jy;
  function Hu(n, r) {
    if (Sa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!T.call(r, c) || !Sa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Bv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Iv(n, r) {
    var o = Bv(n);
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
      o = Bv(o);
    }
  }
  function Yv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Yv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function tc() {
    for (var n = window, r = qe(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = qe(n.document);
    }
    return r;
  }
  function Si(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function nc(n) {
    var r = tc(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Yv(o.ownerDocument.documentElement, o)) {
      if (u !== null && Si(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = Iv(o, p);
          var S = Iv(
            o,
            u
          );
          c && S && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Gv = D && "documentMode" in document && 11 >= document.documentMode, Ia = null, rd = null, Vu = null, ad = !1;
  function Qv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    ad || Ia == null || Ia !== qe(u) || (u = Ia, "selectionStart" in u && Si(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Vu && Hu(Vu, u) || (Vu = u, u = Qu(rd, "onSelect"), 0 < u.length && (r = new Ws("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Ia)));
  }
  function rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Uo = { animationend: rc("Animation", "AnimationEnd"), animationiteration: rc("Animation", "AnimationIteration"), animationstart: rc("Animation", "AnimationStart"), transitionend: rc("Transition", "TransitionEnd") }, id = {}, od = {};
  D && (od = document.createElement("div").style, "AnimationEvent" in window || (delete Uo.animationend.animation, delete Uo.animationiteration.animation, delete Uo.animationstart.animation), "TransitionEvent" in window || delete Uo.transitionend.transition);
  function In(n) {
    if (id[n])
      return id[n];
    if (!Uo[n])
      return n;
    var r = Uo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in od)
        return id[n] = r[o];
    return n;
  }
  var ld = In("animationend"), Wv = In("animationiteration"), Kv = In("animationstart"), qv = In("transitionend"), Xv = /* @__PURE__ */ new Map(), Zv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ci(n, r) {
    Xv.set(n, r), b(r, [n]);
  }
  for (var Bu = 0; Bu < Zv.length; Bu++) {
    var $o = Zv[Bu], Py = $o.toLowerCase(), Iu = $o[0].toUpperCase() + $o.slice(1);
    Ci(Py, "on" + Iu);
  }
  Ci(ld, "onAnimationEnd"), Ci(Wv, "onAnimationIteration"), Ci(Kv, "onAnimationStart"), Ci("dblclick", "onDoubleClick"), Ci("focusin", "onFocus"), Ci("focusout", "onBlur"), Ci(qv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yu));
  function Jv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Be(u, r, void 0, n), n.currentTarget = null;
  }
  function ac(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var S = u.length - 1; 0 <= S; S--) {
            var k = u[S], M = k.instance, Q = k.currentTarget;
            if (k = k.listener, M !== p && c.isPropagationStopped())
              break e;
            Jv(c, k, Q), p = M;
          }
        else
          for (S = 0; S < u.length; S++) {
            if (k = u[S], M = k.instance, Q = k.currentTarget, k = k.listener, M !== p && c.isPropagationStopped())
              break e;
            Jv(c, k, Q), p = M;
          }
      }
    }
    if (Gi)
      throw n = N, Gi = !1, N = null, n;
  }
  function Bt(n, r) {
    var o = r[vd];
    o === void 0 && (o = r[vd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (eh(r, n, 2, !1), o.add(u));
  }
  function Zi(n, r, o) {
    var u = 0;
    r && (u |= 4), eh(o, n, u, r);
  }
  var Ei = "_reactListening" + Math.random().toString(36).slice(2);
  function Fl(n) {
    if (!n[Ei]) {
      n[Ei] = !0, C.forEach(function(o) {
        o !== "selectionchange" && (Hy.has(o) || Zi(o, !1, n), Zi(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ei] || (r[Ei] = !0, Zi("selectionchange", !1, r));
    }
  }
  function eh(n, r, o, u) {
    switch (Yf(r)) {
      case 1:
        var c = bv;
        break;
      case 4:
        c = Ys;
        break;
      default:
        c = Gs;
    }
    o = c.bind(null, r, o, n), c = void 0, !kl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function ic(n, r, o, u, c) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var S = u.tag;
          if (S === 3 || S === 4) {
            var k = u.stateNode.containerInfo;
            if (k === c || k.nodeType === 8 && k.parentNode === c)
              break;
            if (S === 4)
              for (S = u.return; S !== null; ) {
                var M = S.tag;
                if ((M === 3 || M === 4) && (M = S.stateNode.containerInfo, M === c || M.nodeType === 8 && M.parentNode === c))
                  return;
                S = S.return;
              }
            for (; k !== null; ) {
              if (S = Ca(k), S === null)
                return;
              if (M = S.tag, M === 5 || M === 6) {
                u = p = S;
                continue e;
              }
              k = k.parentNode;
            }
          }
          u = u.return;
        }
    Rl(function() {
      var Q = p, re = Lt(o), le = [];
      e: {
        var ne = Xv.get(n);
        if (ne !== void 0) {
          var Ee = Ws, _e = n;
          switch (n) {
            case "keypress":
              if (Ml(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ee = Oy;
              break;
            case "focusin":
              _e = "focus", Ee = Xi;
              break;
            case "focusout":
              _e = "blur", Ee = Xi;
              break;
            case "beforeblur":
            case "afterblur":
              Ee = Xi;
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
              Ee = qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ee = Rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ee = Ly;
              break;
            case ld:
            case Wv:
            case Kv:
              Ee = kv;
              break;
            case qv:
              Ee = Mv;
              break;
            case "scroll":
              Ee = wv;
              break;
            case "wheel":
              Ee = gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ee = Ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ee = Xs;
          }
          var Le = (r & 4) !== 0, Tn = !Le && n === "scroll", P = Le ? ne !== null ? ne + "Capture" : null : ne;
          Le = [];
          for (var L = Q, B; L !== null; ) {
            B = L;
            var ce = B.stateNode;
            if (B.tag === 5 && ce !== null && (B = ce, P !== null && (ce = Mo(L, P), ce != null && Le.push(Gu(L, ce, B)))), Tn)
              break;
            L = L.return;
          }
          0 < Le.length && (ne = new Ee(ne, _e, null, o, re), le.push({ event: ne, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", ne && o !== fr && (_e = o.relatedTarget || o.fromElement) && (Ca(_e) || _e[bi]))
            break e;
          if ((Ee || ne) && (ne = re.window === re ? re : (ne = re.ownerDocument) ? ne.defaultView || ne.parentWindow : window, Ee ? (_e = o.relatedTarget || o.toElement, Ee = Q, _e = _e ? Ca(_e) : null, _e !== null && (Tn = ot(_e), _e !== Tn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (Ee = null, _e = Q), Ee !== _e)) {
            if (Le = qs, ce = "onMouseLeave", P = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Xs, ce = "onPointerLeave", P = "onPointerEnter", L = "pointer"), Tn = Ee == null ? ne : jl(Ee), B = _e == null ? ne : jl(_e), ne = new Le(ce, L + "leave", Ee, o, re), ne.target = Tn, ne.relatedTarget = B, ce = null, Ca(re) === Q && (Le = new Le(P, L + "enter", _e, o, re), Le.target = B, Le.relatedTarget = Tn, ce = Le), Tn = ce, Ee && _e)
              t: {
                for (Le = Ee, P = _e, L = 0, B = Le; B; B = Fo(B))
                  L++;
                for (B = 0, ce = P; ce; ce = Fo(ce))
                  B++;
                for (; 0 < L - B; )
                  Le = Fo(Le), L--;
                for (; 0 < B - L; )
                  P = Fo(P), B--;
                for (; L--; ) {
                  if (Le === P || P !== null && Le === P.alternate)
                    break t;
                  Le = Fo(Le), P = Fo(P);
                }
                Le = null;
              }
            else
              Le = null;
            Ee !== null && ud(le, ne, Ee, Le, !1), _e !== null && Tn !== null && ud(le, Tn, _e, Le, !0);
          }
        }
        e: {
          if (ne = Q ? jl(Q) : window, Ee = ne.nodeName && ne.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && ne.type === "file")
            var ze = Fv;
          else if (Uv(ne))
            if (ed)
              ze = Vv;
            else {
              ze = $y;
              var Ne = Uy;
            }
          else
            (Ee = ne.nodeName) && Ee.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (ze = Fy);
          if (ze && (ze = ze(n, Q))) {
            $v(le, ze, o, re);
            break e;
          }
          Ne && Ne(n, ne, Q), n === "focusout" && (Ne = ne._wrapperState) && Ne.controlled && ne.type === "number" && Ln(ne, "number", ne.value);
        }
        switch (Ne = Q ? jl(Q) : window, n) {
          case "focusin":
            (Uv(Ne) || Ne.contentEditable === "true") && (Ia = Ne, rd = Q, Vu = null);
            break;
          case "focusout":
            Vu = rd = Ia = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Qv(le, o, re);
            break;
          case "selectionchange":
            if (Gv)
              break;
          case "keydown":
          case "keyup":
            Qv(le, o, re);
        }
        var je;
        if (Ba)
          e: {
            switch (n) {
              case "compositionstart":
                var Ze = "onCompositionStart";
                break e;
              case "compositionend":
                Ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ze = "onCompositionUpdate";
                break e;
            }
            Ze = void 0;
          }
        else
          zl ? zv(n, o) && (Ze = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Ze = "onCompositionStart");
        Ze && (Ov && o.locale !== "ko" && (zl || Ze !== "onCompositionStart" ? Ze === "onCompositionEnd" && zl && (je = Gf()) : (mi = re, Uu = "value" in mi ? mi.value : mi.textContent, zl = !0)), Ne = Qu(Q, Ze), 0 < Ne.length && (Ze = new Kf(Ze, n, null, o, re), le.push({ event: Ze, listeners: Ne }), je ? Ze.data = je : (je = ec(o), je !== null && (Ze.data = je)))), (je = Js ? zy(n, o) : Ay(n, o)) && (Q = Qu(Q, "onBeforeInput"), 0 < Q.length && (re = new Kf("onBeforeInput", "beforeinput", null, o, re), le.push({ event: re, listeners: Q }), re.data = je));
      }
      ac(le, r);
    });
  }
  function Gu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Qu(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = Mo(n, o), p != null && u.unshift(Gu(n, p, c)), p = Mo(n, r), p != null && u.push(Gu(n, p, c))), n = n.return;
    }
    return u;
  }
  function Fo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ud(n, r, o, u, c) {
    for (var p = r._reactName, S = []; o !== null && o !== u; ) {
      var k = o, M = k.alternate, Q = k.stateNode;
      if (M !== null && M === u)
        break;
      k.tag === 5 && Q !== null && (k = Q, c ? (M = Mo(o, p), M != null && S.unshift(Gu(o, M, k))) : c || (M = Mo(o, p), M != null && S.push(Gu(o, M, k)))), o = o.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var sd = /\r\n?/g, Vy = /\u0000|\uFFFD/g;
  function cd(n) {
    return (typeof n == "string" ? n : "" + n).replace(sd, `
`).replace(Vy, "");
  }
  function oc(n, r, o) {
    if (r = cd(r), cd(n) !== r && o)
      throw Error(m(425));
  }
  function lc() {
  }
  var fd = null, jo = null;
  function Wu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Po = typeof setTimeout == "function" ? setTimeout : void 0, th = typeof clearTimeout == "function" ? clearTimeout : void 0, dd = typeof Promise == "function" ? Promise : void 0, pd = typeof queueMicrotask == "function" ? queueMicrotask : typeof dd < "u" ? function(n) {
    return dd.resolve(null).then(n).catch(By);
  } : Po;
  function By(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ji(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (u === 0) {
            n.removeChild(c), zu(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    zu(r);
  }
  function Ya(n) {
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
  function Ku(n) {
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
  var eo = Math.random().toString(36).slice(2), Ja = "__reactFiber$" + eo, Ho = "__reactProps$" + eo, bi = "__reactContainer$" + eo, vd = "__reactEvents$" + eo, Iy = "__reactListeners$" + eo, hd = "__reactHandles$" + eo;
  function Ca(n) {
    var r = n[Ja];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[bi] || o[Ja]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ku(n); n !== null; ) {
            if (o = n[Ja])
              return o;
            n = Ku(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function qu(n) {
    return n = n[Ja] || n[bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function jl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function Pe(n) {
    return n[Ho] || null;
  }
  var to = [], Wt = -1;
  function at(n) {
    return { current: n };
  }
  function Nt(n) {
    0 > Wt || (n.current = to[Wt], to[Wt] = null, Wt--);
  }
  function Mt(n, r) {
    Wt++, to[Wt] = n.current, n.current = r;
  }
  var ei = {}, Xe = at(ei), mn = at(!1), jr = ei;
  function Ea(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ei;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in o)
      c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ba() {
    Nt(mn), Nt(Xe);
  }
  function no(n, r, o) {
    if (Xe.current !== ei)
      throw Error(m(168));
    Mt(Xe, r), Mt(mn, o);
  }
  function Xu(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(m(108, an(n) || "Unknown", c));
    return pe({}, o, u);
  }
  function uc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ei, jr = Xe.current, Mt(Xe, n), Mt(mn, mn.current), !0;
  }
  function nh(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(m(169));
    o ? (n = Xu(n, r, jr), u.__reactInternalMemoizedMergedChildContext = n, Nt(mn), Nt(Xe), Mt(Xe, n)) : Nt(mn), Mt(mn, o);
  }
  var ra = null, Yn = !1, Zu = !1;
  function md(n) {
    ra === null ? ra = [n] : ra.push(n);
  }
  function yd(n) {
    Yn = !0, md(n);
  }
  function Pr() {
    if (!Zu && ra !== null) {
      Zu = !0;
      var n = 0, r = zt;
      try {
        var o = ra;
        for (zt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ra = null, Yn = !1;
      } catch (c) {
        throw ra !== null && (ra = ra.slice(n + 1)), tn(hi, Pr), c;
      } finally {
        zt = r, Zu = !1;
      }
    }
    return null;
  }
  var ro = [], Hr = 0, Vo = null, Pl = 0, Vr = [], vr = 0, xa = null, Xn = 1, xi = "";
  function aa(n, r) {
    ro[Hr++] = Pl, ro[Hr++] = Vo, Vo = n, Pl = r;
  }
  function gd(n, r, o) {
    Vr[vr++] = Xn, Vr[vr++] = xi, Vr[vr++] = xa, xa = n;
    var u = Xn;
    n = xi;
    var c = 32 - ma(u) - 1;
    u &= ~(1 << c), o += 1;
    var p = 32 - ma(r) + c;
    if (30 < p) {
      var S = c - c % 5;
      p = (u & (1 << S) - 1).toString(32), u >>= S, c -= S, Xn = 1 << 32 - ma(r) + c | o << c | u, xi = p + n;
    } else
      Xn = 1 << p | o << c | u, xi = n;
  }
  function sc(n) {
    n.return !== null && (aa(n, 1), gd(n, 1, 0));
  }
  function Sd(n) {
    for (; n === Vo; )
      Vo = ro[--Hr], ro[Hr] = null, Pl = ro[--Hr], ro[Hr] = null;
    for (; n === xa; )
      xa = Vr[--vr], Vr[vr] = null, xi = Vr[--vr], Vr[vr] = null, Xn = Vr[--vr], Vr[vr] = null;
  }
  var ia = null, Br = null, Kt = !1, wa = null;
  function Cd(n, r) {
    var o = Na(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function rh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ia = n, Br = Ya(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ia = n, Br = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = xa !== null ? { id: Xn, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Na(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ia = n, Br = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function fc(n) {
    if (Kt) {
      var r = Br;
      if (r) {
        var o = r;
        if (!rh(n, r)) {
          if (cc(n))
            throw Error(m(418));
          r = Ya(o.nextSibling);
          var u = ia;
          r && rh(n, r) ? Cd(u, o) : (n.flags = n.flags & -4097 | 2, Kt = !1, ia = n);
        }
      } else {
        if (cc(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Kt = !1, ia = n;
      }
    }
  }
  function ah(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ia = n;
  }
  function dc(n) {
    if (n !== ia)
      return !1;
    if (!Kt)
      return ah(n), Kt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Wu(n.type, n.memoizedProps)), r && (r = Br)) {
      if (cc(n))
        throw ih(), Error(m(418));
      for (; r; )
        Cd(n, r), r = Ya(r.nextSibling);
    }
    if (ah(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Br = Ya(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Br = null;
      }
    } else
      Br = ia ? Ya(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ih() {
    for (var n = Br; n; )
      n = Ya(n.nextSibling);
  }
  function ln() {
    Br = ia = null, Kt = !1;
  }
  function Ed(n) {
    wa === null ? wa = [n] : wa.push(n);
  }
  var pc = ae.ReactCurrentBatchConfig;
  function oa(n, r) {
    if (n && n.defaultProps) {
      r = pe({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var ti = at(null), vc = null, ao = null, bd = null;
  function xd() {
    bd = ao = vc = null;
  }
  function io(n) {
    var r = ti.current;
    Nt(ti), n._currentValue = r;
  }
  function Gn(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function he(n, r) {
    vc = n, bd = ao = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Nn = !0), n.firstContext = null);
  }
  function wn(n) {
    var r = n._currentValue;
    if (bd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ao === null) {
        if (vc === null)
          throw Error(m(308));
        ao = n, vc.dependencies = { lanes: 0, firstContext: n };
      } else
        ao = ao.next = n;
    return r;
  }
  var Zn = null;
  function wd(n) {
    Zn === null ? Zn = [n] : Zn.push(n);
  }
  function oh(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, wd(r)) : (o.next = c.next, c.next = o), r.interleaved = o, wi(n, u);
  }
  function wi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var oo = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function An(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ti(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function lo(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, vt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, wi(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, wd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, wi(n, o);
  }
  function hc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Nu(n, o);
    }
  }
  function Rd(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, p = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var S = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          p === null ? c = p = S : p = p.next = S, o = o.next;
        } while (o !== null);
        p === null ? c = p = r : p = p.next = r;
      } else
        c = p = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function uo(n, r, o, u) {
    var c = n.updateQueue;
    oo = !1;
    var p = c.firstBaseUpdate, S = c.lastBaseUpdate, k = c.shared.pending;
    if (k !== null) {
      c.shared.pending = null;
      var M = k, Q = M.next;
      M.next = null, S === null ? p = Q : S.next = Q, S = M;
      var re = n.alternate;
      re !== null && (re = re.updateQueue, k = re.lastBaseUpdate, k !== S && (k === null ? re.firstBaseUpdate = Q : k.next = Q, re.lastBaseUpdate = M));
    }
    if (p !== null) {
      var le = c.baseState;
      S = 0, re = Q = M = null, k = p;
      do {
        var ne = k.lane, Ee = k.eventTime;
        if ((u & ne) === ne) {
          re !== null && (re = re.next = {
            eventTime: Ee,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var _e = n, Le = k;
            switch (ne = r, Ee = o, Le.tag) {
              case 1:
                if (_e = Le.payload, typeof _e == "function") {
                  le = _e.call(Ee, le, ne);
                  break e;
                }
                le = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Le.payload, ne = typeof _e == "function" ? _e.call(Ee, le, ne) : _e, ne == null)
                  break e;
                le = pe({}, le, ne);
                break e;
              case 2:
                oo = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, ne = c.effects, ne === null ? c.effects = [k] : ne.push(k));
        } else
          Ee = { eventTime: Ee, lane: ne, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, re === null ? (Q = re = Ee, M = le) : re = re.next = Ee, S |= ne;
        if (k = k.next, k === null) {
          if (k = c.shared.pending, k === null)
            break;
          ne = k, k = ne.next, ne.next = null, c.lastBaseUpdate = ne, c.shared.pending = null;
        }
      } while (!0);
      if (re === null && (M = le), c.baseState = M, c.firstBaseUpdate = Q, c.lastBaseUpdate = re, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        p === null && (c.shared.lanes = 0);
      _i |= S, n.lanes = S, n.memoizedState = le;
    }
  }
  function Bo(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = o, typeof c != "function")
            throw Error(m(191, c));
          c.call(u);
        }
      }
  }
  var lh = new d.Component().refs;
  function kd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : pe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var mc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ot(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = gr(), c = Mn(n), p = Ti(u, c);
    p.payload = r, o != null && (p.callback = o), r = lo(n, p, c), r !== null && (Sr(r, n, c, u), hc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = gr(), c = Mn(n), p = Ti(u, c);
    p.tag = 1, p.payload = r, o != null && (p.callback = o), r = lo(n, p, c), r !== null && (Sr(r, n, c, u), hc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = gr(), u = Mn(n), c = Ti(o, u);
    c.tag = 2, r != null && (c.callback = r), r = lo(n, c, u), r !== null && (Sr(r, n, u, o), hc(r, n, u));
  } };
  function uh(n, r, o, u, c, p, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, S) : r.prototype && r.prototype.isPureReactComponent ? !Hu(o, u) || !Hu(c, p) : !0;
  }
  function sh(n, r, o) {
    var u = !1, c = ei, p = r.contextType;
    return typeof p == "object" && p !== null ? p = wn(p) : (c = nn(r) ? jr : Xe.current, u = r.contextTypes, p = (u = u != null) ? Ea(n, c) : ei), r = new r(o, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = mc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function ch(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && mc.enqueueReplaceState(r, r.state, null);
  }
  function yc(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = lh, Td(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = wn(p) : (p = nn(r) ? jr : Xe.current, c.context = Ea(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (kd(n, r, p, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && mc.enqueueReplaceState(c, c.state, null), uo(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Hl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(m(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(m(147, n));
        var c = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(S) {
          var k = c.refs;
          k === lh && (k = c.refs = {}), S === null ? delete k[p] : k[p] = S;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!o._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function gc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function fh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function dh(n) {
    function r(P, L) {
      if (n) {
        var B = P.deletions;
        B === null ? (P.deletions = [L], P.flags |= 16) : B.push(L);
      }
    }
    function o(P, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(P, L), L = L.sibling;
      return null;
    }
    function u(P, L) {
      for (P = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? P.set(L.key, L) : P.set(L.index, L), L = L.sibling;
      return P;
    }
    function c(P, L) {
      return P = yo(P, L), P.index = 0, P.sibling = null, P;
    }
    function p(P, L, B) {
      return P.index = B, n ? (B = P.alternate, B !== null ? (B = B.index, B < L ? (P.flags |= 2, L) : B) : (P.flags |= 2, L)) : (P.flags |= 1048576, L);
    }
    function S(P) {
      return n && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, L, B, ce) {
      return L === null || L.tag !== 6 ? (L = ys(B, P.mode, ce), L.return = P, L) : (L = c(L, B), L.return = P, L);
    }
    function M(P, L, B, ce) {
      var ze = B.type;
      return ze === oe ? re(P, L, B.props.children, ce, B.key) : L !== null && (L.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === ft && fh(ze) === L.type) ? (ce = c(L, B.props), ce.ref = Hl(P, L, B), ce.return = P, ce) : (ce = qc(B.type, B.key, B.props, null, P.mode, ce), ce.ref = Hl(P, L, B), ce.return = P, ce);
    }
    function Q(P, L, B, ce) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== B.containerInfo || L.stateNode.implementation !== B.implementation ? (L = ul(B, P.mode, ce), L.return = P, L) : (L = c(L, B.children || []), L.return = P, L);
    }
    function re(P, L, B, ce, ze) {
      return L === null || L.tag !== 7 ? (L = ll(B, P.mode, ce, ze), L.return = P, L) : (L = c(L, B), L.return = P, L);
    }
    function le(P, L, B) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = ys("" + L, P.mode, B), L.return = P, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case te:
            return B = qc(L.type, L.key, L.props, null, P.mode, B), B.ref = Hl(P, null, L), B.return = P, B;
          case Se:
            return L = ul(L, P.mode, B), L.return = P, L;
          case ft:
            var ce = L._init;
            return le(P, ce(L._payload), B);
        }
        if (Jr(L) || xe(L))
          return L = ll(L, P.mode, B, null), L.return = P, L;
        gc(P, L);
      }
      return null;
    }
    function ne(P, L, B, ce) {
      var ze = L !== null ? L.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return ze !== null ? null : k(P, L, "" + B, ce);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case te:
            return B.key === ze ? M(P, L, B, ce) : null;
          case Se:
            return B.key === ze ? Q(P, L, B, ce) : null;
          case ft:
            return ze = B._init, ne(
              P,
              L,
              ze(B._payload),
              ce
            );
        }
        if (Jr(B) || xe(B))
          return ze !== null ? null : re(P, L, B, ce, null);
        gc(P, B);
      }
      return null;
    }
    function Ee(P, L, B, ce, ze) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number")
        return P = P.get(B) || null, k(L, P, "" + ce, ze);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case te:
            return P = P.get(ce.key === null ? B : ce.key) || null, M(L, P, ce, ze);
          case Se:
            return P = P.get(ce.key === null ? B : ce.key) || null, Q(L, P, ce, ze);
          case ft:
            var Ne = ce._init;
            return Ee(P, L, B, Ne(ce._payload), ze);
        }
        if (Jr(ce) || xe(ce))
          return P = P.get(B) || null, re(L, P, ce, ze, null);
        gc(L, ce);
      }
      return null;
    }
    function _e(P, L, B, ce) {
      for (var ze = null, Ne = null, je = L, Ze = L = 0, Kn = null; je !== null && Ze < B.length; Ze++) {
        je.index > Ze ? (Kn = je, je = null) : Kn = je.sibling;
        var bt = ne(P, je, B[Ze], ce);
        if (bt === null) {
          je === null && (je = Kn);
          break;
        }
        n && je && bt.alternate === null && r(P, je), L = p(bt, L, Ze), Ne === null ? ze = bt : Ne.sibling = bt, Ne = bt, je = Kn;
      }
      if (Ze === B.length)
        return o(P, je), Kt && aa(P, Ze), ze;
      if (je === null) {
        for (; Ze < B.length; Ze++)
          je = le(P, B[Ze], ce), je !== null && (L = p(je, L, Ze), Ne === null ? ze = je : Ne.sibling = je, Ne = je);
        return Kt && aa(P, Ze), ze;
      }
      for (je = u(P, je); Ze < B.length; Ze++)
        Kn = Ee(je, P, Ze, B[Ze], ce), Kn !== null && (n && Kn.alternate !== null && je.delete(Kn.key === null ? Ze : Kn.key), L = p(Kn, L, Ze), Ne === null ? ze = Kn : Ne.sibling = Kn, Ne = Kn);
      return n && je.forEach(function(go) {
        return r(P, go);
      }), Kt && aa(P, Ze), ze;
    }
    function Le(P, L, B, ce) {
      var ze = xe(B);
      if (typeof ze != "function")
        throw Error(m(150));
      if (B = ze.call(B), B == null)
        throw Error(m(151));
      for (var Ne = ze = null, je = L, Ze = L = 0, Kn = null, bt = B.next(); je !== null && !bt.done; Ze++, bt = B.next()) {
        je.index > Ze ? (Kn = je, je = null) : Kn = je.sibling;
        var go = ne(P, je, bt.value, ce);
        if (go === null) {
          je === null && (je = Kn);
          break;
        }
        n && je && go.alternate === null && r(P, je), L = p(go, L, Ze), Ne === null ? ze = go : Ne.sibling = go, Ne = go, je = Kn;
      }
      if (bt.done)
        return o(
          P,
          je
        ), Kt && aa(P, Ze), ze;
      if (je === null) {
        for (; !bt.done; Ze++, bt = B.next())
          bt = le(P, bt.value, ce), bt !== null && (L = p(bt, L, Ze), Ne === null ? ze = bt : Ne.sibling = bt, Ne = bt);
        return Kt && aa(P, Ze), ze;
      }
      for (je = u(P, je); !bt.done; Ze++, bt = B.next())
        bt = Ee(je, P, Ze, bt.value, ce), bt !== null && (n && bt.alternate !== null && je.delete(bt.key === null ? Ze : bt.key), L = p(bt, L, Ze), Ne === null ? ze = bt : Ne.sibling = bt, Ne = bt);
      return n && je.forEach(function(cg) {
        return r(P, cg);
      }), Kt && aa(P, Ze), ze;
    }
    function Tn(P, L, B, ce) {
      if (typeof B == "object" && B !== null && B.type === oe && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case te:
            e: {
              for (var ze = B.key, Ne = L; Ne !== null; ) {
                if (Ne.key === ze) {
                  if (ze = B.type, ze === oe) {
                    if (Ne.tag === 7) {
                      o(P, Ne.sibling), L = c(Ne, B.props.children), L.return = P, P = L;
                      break e;
                    }
                  } else if (Ne.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === ft && fh(ze) === Ne.type) {
                    o(P, Ne.sibling), L = c(Ne, B.props), L.ref = Hl(P, Ne, B), L.return = P, P = L;
                    break e;
                  }
                  o(P, Ne);
                  break;
                } else
                  r(P, Ne);
                Ne = Ne.sibling;
              }
              B.type === oe ? (L = ll(B.props.children, P.mode, ce, B.key), L.return = P, P = L) : (ce = qc(B.type, B.key, B.props, null, P.mode, ce), ce.ref = Hl(P, L, B), ce.return = P, P = ce);
            }
            return S(P);
          case Se:
            e: {
              for (Ne = B.key; L !== null; ) {
                if (L.key === Ne)
                  if (L.tag === 4 && L.stateNode.containerInfo === B.containerInfo && L.stateNode.implementation === B.implementation) {
                    o(P, L.sibling), L = c(L, B.children || []), L.return = P, P = L;
                    break e;
                  } else {
                    o(P, L);
                    break;
                  }
                else
                  r(P, L);
                L = L.sibling;
              }
              L = ul(B, P.mode, ce), L.return = P, P = L;
            }
            return S(P);
          case ft:
            return Ne = B._init, Tn(P, L, Ne(B._payload), ce);
        }
        if (Jr(B))
          return _e(P, L, B, ce);
        if (xe(B))
          return Le(P, L, B, ce);
        gc(P, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, L !== null && L.tag === 6 ? (o(P, L.sibling), L = c(L, B), L.return = P, P = L) : (o(P, L), L = ys(B, P.mode, ce), L.return = P, P = L), S(P)) : o(P, L);
    }
    return Tn;
  }
  var Vl = dh(!0), ph = dh(!1), Ju = {}, Ga = at(Ju), es = at(Ju), Bl = at(Ju);
  function Io(n) {
    if (n === Ju)
      throw Error(m(174));
    return n;
  }
  function Dd(n, r) {
    switch (Mt(Bl, r), Mt(es, n), Mt(Ga, Ju), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Jt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Jt(r, n);
    }
    Nt(Ga), Mt(Ga, r);
  }
  function so() {
    Nt(Ga), Nt(es), Nt(Bl);
  }
  function Ie(n) {
    Io(Bl.current);
    var r = Io(Ga.current), o = Jt(r, n.type);
    r !== o && (Mt(es, n), Mt(Ga, o));
  }
  function st(n) {
    es.current === n && (Nt(Ga), Nt(es));
  }
  var Ge = at(0);
  function un(n) {
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
  var Ta = [];
  function Sc() {
    for (var n = 0; n < Ta.length; n++)
      Ta[n]._workInProgressVersionPrimary = null;
    Ta.length = 0;
  }
  var Cc = ae.ReactCurrentDispatcher, _d = ae.ReactCurrentBatchConfig, Yo = 0, qt = null, J = null, gt = null, Qe = !1, ni = !1, la = 0, Go = 0;
  function Xt() {
    throw Error(m(321));
  }
  function Qo(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Sa(n[o], r[o]))
        return !1;
    return !0;
  }
  function co(n, r, o, u, c, p) {
    if (Yo = p, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Cc.current = n === null || n.memoizedState === null ? Gy : Qy, n = o(u, c), ni) {
      p = 0;
      do {
        if (ni = !1, la = 0, 25 <= p)
          throw Error(m(301));
        p += 1, gt = J = null, r.updateQueue = null, Cc.current = Md, n = o(u, c);
      } while (ni);
    }
    if (Cc.current = Uc, r = J !== null && J.next !== null, Yo = 0, gt = J = qt = null, Qe = !1, r)
      throw Error(m(300));
    return n;
  }
  function Wo() {
    var n = la !== 0;
    return la = 0, n;
  }
  function Ra() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return gt === null ? qt.memoizedState = gt = n : gt = gt.next = n, gt;
  }
  function Ir() {
    if (J === null) {
      var n = qt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = J.next;
    var r = gt === null ? qt.memoizedState : gt.next;
    if (r !== null)
      gt = r, J = n;
    else {
      if (n === null)
        throw Error(m(310));
      J = n, n = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, gt === null ? qt.memoizedState = gt = n : gt = gt.next = n;
    }
    return gt;
  }
  function Ko(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ts(n) {
    var r = Ir(), o = r.queue;
    if (o === null)
      throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = J, c = u.baseQueue, p = o.pending;
    if (p !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = p.next, p.next = S;
      }
      u.baseQueue = c = p, o.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var k = S = null, M = null, Q = p;
      do {
        var re = Q.lane;
        if ((Yo & re) === re)
          M !== null && (M = M.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var le = {
            lane: re,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          M === null ? (k = M = le, S = u) : M = M.next = le, qt.lanes |= re, _i |= re;
        }
        Q = Q.next;
      } while (Q !== null && Q !== p);
      M === null ? S = u : M.next = k, Sa(u, r.memoizedState) || (Nn = !0), r.memoizedState = u, r.baseState = S, r.baseQueue = M, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, qt.lanes |= p, _i |= p, c = c.next;
      while (c !== n);
    } else
      c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function ns(n) {
    var r = Ir(), o = r.queue;
    if (o === null)
      throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, p = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var S = c = c.next;
      do
        p = n(p, S.action), S = S.next;
      while (S !== c);
      Sa(p, r.memoizedState) || (Nn = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), o.lastRenderedState = p;
    }
    return [p, u];
  }
  function Ec() {
  }
  function bc(n, r) {
    var o = qt, u = Ir(), c = r(), p = !Sa(u.memoizedState, c);
    if (p && (u.memoizedState = c, Nn = !0), u = u.queue, rs(Tc.bind(null, o, u, n), [n]), u.getSnapshot !== r || p || gt !== null && gt.memoizedState.tag & 1) {
      if (o.flags |= 2048, qo(9, wc.bind(null, o, u, c, r), void 0, null), sn === null)
        throw Error(m(349));
      Yo & 30 || xc(o, r, c);
    }
    return c;
  }
  function xc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function wc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Rc(r) && kc(n);
  }
  function Tc(n, r, o) {
    return o(function() {
      Rc(r) && kc(n);
    });
  }
  function Rc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Sa(n, o);
    } catch {
      return !0;
    }
  }
  function kc(n) {
    var r = wi(n, 1);
    r !== null && Sr(r, n, 1, -1);
  }
  function Dc(n) {
    var r = Ra();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ko, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ac.bind(null, qt, n), [r.memoizedState, n];
  }
  function qo(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function _c() {
    return Ir().memoizedState;
  }
  function Xo(n, r, o, u) {
    var c = Ra();
    qt.flags |= n, c.memoizedState = qo(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Ri(n, r, o, u) {
    var c = Ir();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (J !== null) {
      var S = J.memoizedState;
      if (p = S.destroy, u !== null && Qo(u, S.deps)) {
        c.memoizedState = qo(r, o, p, u);
        return;
      }
    }
    qt.flags |= n, c.memoizedState = qo(1 | r, o, p, u);
  }
  function Nc(n, r) {
    return Xo(8390656, 8, n, r);
  }
  function rs(n, r) {
    return Ri(2048, 8, n, r);
  }
  function Mc(n, r) {
    return Ri(4, 2, n, r);
  }
  function Oc(n, r) {
    return Ri(4, 4, n, r);
  }
  function Nd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Il(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ri(4, 4, Nd.bind(null, r, n), o);
  }
  function Lc() {
  }
  function Yl(n, r) {
    var o = Ir();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Qo(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function fo(n, r) {
    var o = Ir();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Qo(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Yr(n, r, o) {
    return Yo & 21 ? (Sa(o, r) || (o = Bs(), qt.lanes |= o, _i |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Nn = !0), n.memoizedState = o);
  }
  function Yy(n, r) {
    var o = zt;
    zt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = _d.transition;
    _d.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = o, _d.transition = u;
    }
  }
  function It() {
    return Ir().memoizedState;
  }
  function zc(n, r, o) {
    var u = Mn(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Gl(n))
      as(r, o);
    else if (o = oh(n, r, o, u), o !== null) {
      var c = gr();
      Sr(o, n, u, c), vh(o, r, u);
    }
  }
  function Ac(n, r, o) {
    var u = Mn(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Gl(n))
      as(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var S = r.lastRenderedState, k = p(S, o);
          if (c.hasEagerState = !0, c.eagerState = k, Sa(k, S)) {
            var M = r.interleaved;
            M === null ? (c.next = c, wd(r)) : (c.next = M.next, M.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = oh(n, r, c, u), o !== null && (c = gr(), Sr(o, n, u, c), vh(o, r, u));
    }
  }
  function Gl(n) {
    var r = n.alternate;
    return n === qt || r !== null && r === qt;
  }
  function as(n, r) {
    ni = Qe = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function vh(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Nu(n, o);
    }
  }
  var Uc = { readContext: wn, useCallback: Xt, useContext: Xt, useEffect: Xt, useImperativeHandle: Xt, useInsertionEffect: Xt, useLayoutEffect: Xt, useMemo: Xt, useReducer: Xt, useRef: Xt, useState: Xt, useDebugValue: Xt, useDeferredValue: Xt, useTransition: Xt, useMutableSource: Xt, useSyncExternalStore: Xt, useId: Xt, unstable_isNewReconciler: !1 }, Gy = { readContext: wn, useCallback: function(n, r) {
    return Ra().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: wn, useEffect: Nc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Xo(
      4194308,
      4,
      Nd.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Xo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Xo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Ra();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Ra();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = zc.bind(null, qt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Ra();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Dc, useDebugValue: Lc, useDeferredValue: function(n) {
    return Ra().memoizedState = n;
  }, useTransition: function() {
    var n = Dc(!1), r = n[0];
    return n = Yy.bind(null, n[1]), Ra().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = qt, c = Ra();
    if (Kt) {
      if (o === void 0)
        throw Error(m(407));
      o = o();
    } else {
      if (o = r(), sn === null)
        throw Error(m(349));
      Yo & 30 || xc(u, r, o);
    }
    c.memoizedState = o;
    var p = { value: o, getSnapshot: r };
    return c.queue = p, Nc(Tc.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, qo(9, wc.bind(null, u, p, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ra(), r = sn.identifierPrefix;
    if (Kt) {
      var o = xi, u = Xn;
      o = (u & ~(1 << 32 - ma(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = la++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Go++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Qy = {
    readContext: wn,
    useCallback: Yl,
    useContext: wn,
    useEffect: rs,
    useImperativeHandle: Il,
    useInsertionEffect: Mc,
    useLayoutEffect: Oc,
    useMemo: fo,
    useReducer: ts,
    useRef: _c,
    useState: function() {
      return ts(Ko);
    },
    useDebugValue: Lc,
    useDeferredValue: function(n) {
      var r = Ir();
      return Yr(r, J.memoizedState, n);
    },
    useTransition: function() {
      var n = ts(Ko)[0], r = Ir().memoizedState;
      return [n, r];
    },
    useMutableSource: Ec,
    useSyncExternalStore: bc,
    useId: It,
    unstable_isNewReconciler: !1
  }, Md = { readContext: wn, useCallback: Yl, useContext: wn, useEffect: rs, useImperativeHandle: Il, useInsertionEffect: Mc, useLayoutEffect: Oc, useMemo: fo, useReducer: ns, useRef: _c, useState: function() {
    return ns(Ko);
  }, useDebugValue: Lc, useDeferredValue: function(n) {
    var r = Ir();
    return J === null ? r.memoizedState = n : Yr(r, J.memoizedState, n);
  }, useTransition: function() {
    var n = ns(Ko)[0], r = Ir().memoizedState;
    return [n, r];
  }, useMutableSource: Ec, useSyncExternalStore: bc, useId: It, unstable_isNewReconciler: !1 };
  function Ql(n, r) {
    try {
      var o = "", u = r;
      do
        o += ur(u), u = u.return;
      while (u);
      var c = o;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function is(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function $c(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Wy = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(n, r, o) {
    o = Ti(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Ic || (Ic = !0, nl = u), $c(n, r);
    }, o;
  }
  function os(n, r, o) {
    o = Ti(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        $c(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
      $c(n, r), typeof u != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([this]) : ii.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), o;
  }
  function mh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Wy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = tg.bind(null, n, r, o), r.then(n, n));
  }
  function Od(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ld(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ti(-1, 1), r.tag = 2, lo(o, r, 1))), o.lanes |= 1), n);
  }
  var Ky = ae.ReactCurrentOwner, Nn = !1;
  function Un(n, r, o, u) {
    r.child = n === null ? ph(r, null, o, u) : Vl(r, n.child, o, u);
  }
  function po(n, r, o, u, c) {
    o = o.render;
    var p = r.ref;
    return he(r, c), u = co(n, r, o, u, p, c), o = Wo(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Jn(n, r, c)) : (Kt && o && sc(r), r.flags |= 1, Un(n, r, u, c), r.child);
  }
  function Fc(n, r, o, u, c) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" && !Zd(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = p, Gr(n, r, p, u, c)) : (n = qc(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var S = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Hu, o(S, u) && n.ref === r.ref)
        return Jn(n, r, c);
    }
    return r.flags |= 1, n = yo(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Gr(n, r, o, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (Hu(p, u) && n.ref === r.ref)
        if (Nn = !1, r.pendingProps = u = p, (n.lanes & c) !== 0)
          n.flags & 131072 && (Nn = !0);
        else
          return r.lanes = n.lanes, Jn(n, r, c);
    }
    return Wl(n, r, o, u, c);
  }
  function Zo(n, r, o) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Mt(eu, ua), ua |= o;
      else {
        if (!(o & 1073741824))
          return n = p !== null ? p.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Mt(eu, ua), ua |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : o, Mt(eu, ua), ua |= u;
      }
    else
      p !== null ? (u = p.baseLanes | o, r.memoizedState = null) : u = o, Mt(eu, ua), ua |= u;
    return Un(n, r, c, o), r.child;
  }
  function it(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Wl(n, r, o, u, c) {
    var p = nn(o) ? jr : Xe.current;
    return p = Ea(r, p), he(r, c), o = co(n, r, o, u, p, c), u = Wo(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Jn(n, r, c)) : (Kt && u && sc(r), r.flags |= 1, Un(n, r, o, c), r.child);
  }
  function zd(n, r, o, u, c) {
    if (nn(o)) {
      var p = !0;
      uc(r);
    } else
      p = !1;
    if (he(r, c), r.stateNode === null)
      hr(n, r), sh(r, o, u), yc(r, o, u, c), u = !0;
    else if (n === null) {
      var S = r.stateNode, k = r.memoizedProps;
      S.props = k;
      var M = S.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = wn(Q) : (Q = nn(o) ? jr : Xe.current, Q = Ea(r, Q));
      var re = o.getDerivedStateFromProps, le = typeof re == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      le || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (k !== u || M !== Q) && ch(r, S, u, Q), oo = !1;
      var ne = r.memoizedState;
      S.state = ne, uo(r, u, S, c), M = r.memoizedState, k !== u || ne !== M || mn.current || oo ? (typeof re == "function" && (kd(r, o, re, u), M = r.memoizedState), (k = oo || uh(r, o, k, u, ne, M, Q)) ? (le || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = M), S.props = u, S.state = M, S.context = Q, u = k) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      S = r.stateNode, An(n, r), k = r.memoizedProps, Q = r.type === r.elementType ? k : oa(r.type, k), S.props = Q, le = r.pendingProps, ne = S.context, M = o.contextType, typeof M == "object" && M !== null ? M = wn(M) : (M = nn(o) ? jr : Xe.current, M = Ea(r, M));
      var Ee = o.getDerivedStateFromProps;
      (re = typeof Ee == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (k !== le || ne !== M) && ch(r, S, u, M), oo = !1, ne = r.memoizedState, S.state = ne, uo(r, u, S, c);
      var _e = r.memoizedState;
      k !== le || ne !== _e || mn.current || oo ? (typeof Ee == "function" && (kd(r, o, Ee, u), _e = r.memoizedState), (Q = oo || uh(r, o, Q, u, ne, _e, M) || !1) ? (re || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, _e, M), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, _e, M)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || k === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = _e), S.props = u, S.state = _e, S.context = M, u = Q) : (typeof S.componentDidUpdate != "function" || k === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return yh(n, r, o, u, p, c);
  }
  function yh(n, r, o, u, c, p) {
    it(n, r);
    var S = (r.flags & 128) !== 0;
    if (!u && !S)
      return c && nh(r, o, !1), Jn(n, r, p);
    u = r.stateNode, Ky.current = r;
    var k = S && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && S ? (r.child = Vl(r, n.child, null, p), r.child = Vl(r, null, k, p)) : Un(n, r, k, p), r.memoizedState = u.state, c && nh(r, o, !0), r.child;
  }
  function gh(n) {
    var r = n.stateNode;
    r.pendingContext ? no(n, r.pendingContext, r.pendingContext !== r.context) : r.context && no(n, r.context, !1), Dd(n, r.containerInfo);
  }
  function jc(n, r, o, u, c) {
    return ln(), Ed(c), r.flags |= 256, Un(n, r, o, u), r.child;
  }
  var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ad(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ud(n, r, o) {
    var u = r.pendingProps, c = Ge.current, p = !1, S = (r.flags & 128) !== 0, k;
    if ((k = S) || (k = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), k ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Mt(Ge, c & 1), n === null)
      return fc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, S = { mode: "hidden", children: S }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = S) : p = ms(S, u, 0, null), n = ll(n, u, o, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = Ad(o), r.memoizedState = Jo, n) : $d(r, S));
    if (c = n.memoizedState, c !== null && (k = c.dehydrated, k !== null))
      return qy(n, r, S, u, k, c, o);
    if (p) {
      p = u.fallback, S = r.mode, c = n.child, k = c.sibling;
      var M = { mode: "hidden", children: u.children };
      return !(S & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = M, r.deletions = null) : (u = yo(c, M), u.subtreeFlags = c.subtreeFlags & 14680064), k !== null ? p = yo(k, p) : (p = ll(p, S, o, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, S = n.child.memoizedState, S = S === null ? Ad(o) : { baseLanes: S.baseLanes | o, cachePool: null, transitions: S.transitions }, p.memoizedState = S, p.childLanes = n.childLanes & ~o, r.memoizedState = Jo, u;
    }
    return p = n.child, n = p.sibling, u = yo(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function $d(n, r) {
    return r = ms({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Kl(n, r, o, u) {
    return u !== null && Ed(u), Vl(r, n.child, null, o), n = $d(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qy(n, r, o, u, c, p, S) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = is(Error(m(422))), Kl(n, r, S, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = ms({ mode: "visible", children: u.children }, c, 0, null), p = ll(p, c, S, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && Vl(r, n.child, null, S), r.child.memoizedState = Ad(S), r.memoizedState = Jo, p);
    if (!(r.mode & 1))
      return Kl(n, r, S, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var k = u.dgst;
      return u = k, p = Error(m(419)), u = is(p, u, void 0), Kl(n, r, S, u);
    }
    if (k = (S & n.childLanes) !== 0, Nn || k) {
      if (u = sn, u !== null) {
        switch (S & -S) {
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
        c = c & (u.suspendedLanes | S) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, wi(n, c), Sr(u, n, c, -1));
      }
      return Kd(), u = is(Error(m(421))), Kl(n, r, S, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ng.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, Br = Ya(c.nextSibling), ia = r, Kt = !0, wa = null, n !== null && (Vr[vr++] = Xn, Vr[vr++] = xi, Vr[vr++] = xa, Xn = n.id, xi = n.overflow, xa = r), r = $d(r, u.children), r.flags |= 4096, r);
  }
  function Fd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Gn(n.return, r, o);
  }
  function Pc(n, r, o, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = c);
  }
  function jd(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (Un(n, r, u.children, o), u = Ge.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Fd(n, o, r);
            else if (n.tag === 19)
              Fd(n, o, r);
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
    if (Mt(Ge, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; )
            n = o.alternate, n !== null && un(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Pc(r, !1, c, o, p);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && un(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          Pc(r, !0, o, null, p);
          break;
        case "together":
          Pc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function hr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Jn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), _i |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, o = yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ki(n, r, o) {
    switch (r.tag) {
      case 3:
        gh(r), ln();
        break;
      case 5:
        Ie(r);
        break;
      case 1:
        nn(r.type) && uc(r);
        break;
      case 4:
        Dd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Mt(ti, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Mt(Ge, Ge.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Ud(n, r, o) : (Mt(Ge, Ge.current & 1), n = Jn(n, r, o), n !== null ? n.sibling : null);
        Mt(Ge, Ge.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return jd(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Mt(Ge, Ge.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Zo(n, r, o);
    }
    return Jn(n, r, o);
  }
  var ls, el, ka, $n;
  ls = function(n, r) {
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
  }, el = function() {
  }, ka = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Io(Ga.current);
      var p = null;
      switch (o) {
        case "input":
          c = mt(n, c), u = mt(n, u), p = [];
          break;
        case "select":
          c = pe({}, c, { value: void 0 }), u = pe({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = $r(n, c), u = $r(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = lc);
      }
      xn(o, u);
      var S;
      o = null;
      for (Q in c)
        if (!u.hasOwnProperty(Q) && c.hasOwnProperty(Q) && c[Q] != null)
          if (Q === "style") {
            var k = c[Q];
            for (S in k)
              k.hasOwnProperty(S) && (o || (o = {}), o[S] = "");
          } else
            Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (x.hasOwnProperty(Q) ? p || (p = []) : (p = p || []).push(Q, null));
      for (Q in u) {
        var M = u[Q];
        if (k = c != null ? c[Q] : void 0, u.hasOwnProperty(Q) && M !== k && (M != null || k != null))
          if (Q === "style")
            if (k) {
              for (S in k)
                !k.hasOwnProperty(S) || M && M.hasOwnProperty(S) || (o || (o = {}), o[S] = "");
              for (S in M)
                M.hasOwnProperty(S) && k[S] !== M[S] && (o || (o = {}), o[S] = M[S]);
            } else
              o || (p || (p = []), p.push(
                Q,
                o
              )), o = M;
          else
            Q === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, k = k ? k.__html : void 0, M != null && k !== M && (p = p || []).push(Q, M)) : Q === "children" ? typeof M != "string" && typeof M != "number" || (p = p || []).push(Q, "" + M) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (x.hasOwnProperty(Q) ? (M != null && Q === "onScroll" && Bt("scroll", n), p || k === M || (p = [])) : (p = p || []).push(Q, M));
      }
      o && (p = p || []).push("style", o);
      var Q = p;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, $n = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function us(n, r) {
    if (!Kt)
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
  function mr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Xy(n, r, o) {
    var u = r.pendingProps;
    switch (Sd(r), r.tag) {
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
        return mr(r), null;
      case 1:
        return nn(r.type) && ba(), mr(r), null;
      case 3:
        return u = r.stateNode, so(), Nt(mn), Nt(Xe), Sc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, wa !== null && (hs(wa), wa = null))), el(n, r), mr(r), null;
      case 5:
        st(r);
        var c = Io(Bl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          ka(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(m(166));
            return mr(r), null;
          }
          if (n = Io(Ga.current), dc(r)) {
            u = r.stateNode, o = r.type;
            var p = r.memoizedProps;
            switch (u[Ja] = r, u[Ho] = p, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Bt("cancel", u), Bt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Bt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Yu.length; c++)
                  Bt(Yu[c], u);
                break;
              case "source":
                Bt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Bt(
                  "error",
                  u
                ), Bt("load", u);
                break;
              case "details":
                Bt("toggle", u);
                break;
              case "input":
                yt(u, p), Bt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Bt("invalid", u);
                break;
              case "textarea":
                sr(u, p), Bt("invalid", u);
            }
            xn(o, p), c = null;
            for (var S in p)
              if (p.hasOwnProperty(S)) {
                var k = p[S];
                S === "children" ? typeof k == "string" ? u.textContent !== k && (p.suppressHydrationWarning !== !0 && oc(u.textContent, k, n), c = ["children", k]) : typeof k == "number" && u.textContent !== "" + k && (p.suppressHydrationWarning !== !0 && oc(
                  u.textContent,
                  k,
                  n
                ), c = ["children", "" + k]) : x.hasOwnProperty(S) && k != null && S === "onScroll" && Bt("scroll", u);
              }
            switch (o) {
              case "input":
                dt(u), hn(u, p, !0);
                break;
              case "textarea":
                dt(u), cr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = lc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ea(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = S.createElement(o, { is: u.is }) : (n = S.createElement(o), o === "select" && (S = n, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : n = S.createElementNS(n, o), n[Ja] = r, n[Ho] = u, ls(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = on(o, u), o) {
                case "dialog":
                  Bt("cancel", n), Bt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Bt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Yu.length; c++)
                    Bt(Yu[c], n);
                  c = u;
                  break;
                case "source":
                  Bt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Bt(
                    "error",
                    n
                  ), Bt("load", n), c = u;
                  break;
                case "details":
                  Bt("toggle", n), c = u;
                  break;
                case "input":
                  yt(n, u), c = mt(n, u), Bt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = pe({}, u, { value: void 0 }), Bt("invalid", n);
                  break;
                case "textarea":
                  sr(n, u), c = $r(n, u), Bt("invalid", n);
                  break;
                default:
                  c = u;
              }
              xn(o, c), k = c;
              for (p in k)
                if (k.hasOwnProperty(p)) {
                  var M = k[p];
                  p === "style" ? _t(n, M) : p === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && ha(n, M)) : p === "children" ? typeof M == "string" ? (o !== "textarea" || M !== "") && xr(n, M) : typeof M == "number" && xr(n, "" + M) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (x.hasOwnProperty(p) ? M != null && p === "onScroll" && Bt("scroll", n) : M != null && q(n, p, M, S));
                }
              switch (o) {
                case "input":
                  dt(n), hn(n, u, !1);
                  break;
                case "textarea":
                  dt(n), cr(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Dt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? Ur(n, !!u.multiple, p, !1) : u.defaultValue != null && Ur(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = lc);
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
        return mr(r), null;
      case 6:
        if (n && r.stateNode != null)
          $n(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(m(166));
          if (o = Io(Bl.current), Io(Ga.current), dc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ja] = r, (p = u.nodeValue !== o) && (n = ia, n !== null))
              switch (n.tag) {
                case 3:
                  oc(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && oc(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Ja] = r, r.stateNode = u;
        }
        return mr(r), null;
      case 13:
        if (Nt(Ge), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Kt && Br !== null && r.mode & 1 && !(r.flags & 128))
            ih(), ln(), r.flags |= 98560, p = !1;
          else if (p = dc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(m(317));
              p[Ja] = r;
            } else
              ln(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            mr(r), p = !1;
          } else
            wa !== null && (hs(wa), wa = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ge.current & 1 ? jn === 0 && (jn = 3) : Kd())), r.updateQueue !== null && (r.flags |= 4), mr(r), null);
      case 4:
        return so(), el(n, r), n === null && Fl(r.stateNode.containerInfo), mr(r), null;
      case 10:
        return io(r.type._context), mr(r), null;
      case 17:
        return nn(r.type) && ba(), mr(r), null;
      case 19:
        if (Nt(Ge), p = r.memoizedState, p === null)
          return mr(r), null;
        if (u = (r.flags & 128) !== 0, S = p.rendering, S === null)
          if (u)
            us(p, !1);
          else {
            if (jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = un(n), S !== null) {
                  for (r.flags |= 128, us(p, !1), u = S.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    p = o, n = u, p.flags &= 14680066, S = p.alternate, S === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = S.childLanes, p.lanes = S.lanes, p.child = S.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = S.memoizedProps, p.memoizedState = S.memoizedState, p.updateQueue = S.updateQueue, p.type = S.type, n = S.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Mt(Ge, Ge.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && wt() > nu && (r.flags |= 128, u = !0, us(p, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = un(S), n !== null) {
              if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), us(p, !0), p.tail === null && p.tailMode === "hidden" && !S.alternate && !Kt)
                return mr(r), null;
            } else
              2 * wt() - p.renderingStartTime > nu && o !== 1073741824 && (r.flags |= 128, u = !0, us(p, !1), r.lanes = 4194304);
          p.isBackwards ? (S.sibling = r.child, r.child = S) : (o = p.last, o !== null ? o.sibling = S : r.child = S, p.last = S);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = wt(), r.sibling = null, o = Ge.current, Mt(Ge, u ? o & 1 | 2 : o & 1), r) : (mr(r), null);
      case 22:
      case 23:
        return Wd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ua & 1073741824 && (mr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : mr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function Pd(n, r) {
    switch (Sd(r), r.tag) {
      case 1:
        return nn(r.type) && ba(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return so(), Nt(mn), Nt(Xe), Sc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return st(r), null;
      case 13:
        if (Nt(Ge), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          ln();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Nt(Ge), null;
      case 4:
        return so(), null;
      case 10:
        return io(r.type._context), null;
      case 22:
      case 23:
        return Wd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ss = !1, Fn = !1, Sh = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function ql(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          gn(n, r, u);
        }
      else
        o.current = null;
  }
  function cs(n, r, o) {
    try {
      o();
    } catch (u) {
      gn(n, r, u);
    }
  }
  var Ch = !1;
  function Eh(n, r) {
    if (fd = zo, n = tc(), Si(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var c = u.anchorOffset, p = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var S = 0, k = -1, M = -1, Q = 0, re = 0, le = n, ne = null;
            t:
              for (; ; ) {
                for (var Ee; le !== o || c !== 0 && le.nodeType !== 3 || (k = S + c), le !== p || u !== 0 && le.nodeType !== 3 || (M = S + u), le.nodeType === 3 && (S += le.nodeValue.length), (Ee = le.firstChild) !== null; )
                  ne = le, le = Ee;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (ne === o && ++Q === c && (k = S), ne === p && ++re === u && (M = S), (Ee = le.nextSibling) !== null)
                    break;
                  le = ne, ne = le.parentNode;
                }
                le = Ee;
              }
            o = k === -1 || M === -1 ? null : { start: k, end: M };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (jo = { focusedElem: n, selectionRange: o }, zo = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var _e = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_e !== null) {
                    var Le = _e.memoizedProps, Tn = _e.memoizedState, P = r.stateNode, L = P.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : oa(r.type, Le), Tn);
                    P.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var B = r.stateNode.containerInfo;
                  B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (ce) {
            gn(r, r.return, ce);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return _e = Ch, Ch = !1, _e;
  }
  function fs(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && cs(r, o, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function ds(n, r) {
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
  function Hd(n) {
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
  function Vd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Vd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ja], delete r[Ho], delete r[vd], delete r[Iy], delete r[hd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function bh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Hc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || bh(n.return))
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
  function Xl(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = lc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Xl(n, r, o), n = n.sibling; n !== null; )
        Xl(n, r, o), n = n.sibling;
  }
  function ri(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (ri(n, r, o), n = n.sibling; n !== null; )
        ri(n, r, o), n = n.sibling;
  }
  var rn = null, Qn = !1;
  function Da(n, r, o) {
    for (o = o.child; o !== null; )
      Zl(n, r, o), o = o.sibling;
  }
  function Zl(n, r, o) {
    if (Pa && typeof Pa.onCommitFiberUnmount == "function")
      try {
        Pa.onCommitFiberUnmount(_u, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Fn || ql(o, r);
      case 6:
        var u = rn, c = Qn;
        rn = null, Da(n, r, o), rn = u, Qn = c, rn !== null && (Qn ? (n = rn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : rn.removeChild(o.stateNode));
        break;
      case 18:
        rn !== null && (Qn ? (n = rn, o = o.stateNode, n.nodeType === 8 ? Ji(n.parentNode, o) : n.nodeType === 1 && Ji(n, o), zu(n)) : Ji(rn, o.stateNode));
        break;
      case 4:
        u = rn, c = Qn, rn = o.stateNode.containerInfo, Qn = !0, Da(n, r, o), rn = u, Qn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Fn && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, S = p.destroy;
            p = p.tag, S !== void 0 && (p & 2 || p & 4) && cs(o, r, S), c = c.next;
          } while (c !== u);
        }
        Da(n, r, o);
        break;
      case 1:
        if (!Fn && (ql(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (k) {
            gn(o, r, k);
          }
        Da(n, r, o);
        break;
      case 21:
        Da(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Fn = (u = Fn) || o.memoizedState !== null, Da(n, r, o), Fn = u) : Da(n, r, o);
        break;
      default:
        Da(n, r, o);
    }
  }
  function Di(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Sh()), r.forEach(function(u) {
        var c = rg.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function Qa(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var c = o[u];
        try {
          var p = n, S = r, k = S;
          e:
            for (; k !== null; ) {
              switch (k.tag) {
                case 5:
                  rn = k.stateNode, Qn = !1;
                  break e;
                case 3:
                  rn = k.stateNode.containerInfo, Qn = !0;
                  break e;
                case 4:
                  rn = k.stateNode.containerInfo, Qn = !0;
                  break e;
              }
              k = k.return;
            }
          if (rn === null)
            throw Error(m(160));
          Zl(p, S, c), rn = null, Qn = !1;
          var M = c.alternate;
          M !== null && (M.return = null), c.return = null;
        } catch (Q) {
          gn(c, r, Q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        xh(r, n), r = r.sibling;
  }
  function xh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Qa(r, n), ai(n), u & 4) {
          try {
            fs(3, n, n.return), ds(3, n);
          } catch (Le) {
            gn(n, n.return, Le);
          }
          try {
            fs(5, n, n.return);
          } catch (Le) {
            gn(n, n.return, Le);
          }
        }
        break;
      case 1:
        Qa(r, n), ai(n), u & 512 && o !== null && ql(o, o.return);
        break;
      case 5:
        if (Qa(r, n), ai(n), u & 512 && o !== null && ql(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            xr(c, "");
          } catch (Le) {
            gn(n, n.return, Le);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, S = o !== null ? o.memoizedProps : p, k = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              k === "input" && p.type === "radio" && p.name != null && Yt(c, p), on(k, S);
              var Q = on(k, p);
              for (S = 0; S < M.length; S += 2) {
                var re = M[S], le = M[S + 1];
                re === "style" ? _t(c, le) : re === "dangerouslySetInnerHTML" ? ha(c, le) : re === "children" ? xr(c, le) : q(c, re, le, Q);
              }
              switch (k) {
                case "input":
                  Ut(c, p);
                  break;
                case "textarea":
                  va(c, p);
                  break;
                case "select":
                  var ne = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var Ee = p.value;
                  Ee != null ? Ur(c, !!p.multiple, Ee, !1) : ne !== !!p.multiple && (p.defaultValue != null ? Ur(
                    c,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : Ur(c, !!p.multiple, p.multiple ? [] : "", !1));
              }
              c[Ho] = p;
            } catch (Le) {
              gn(n, n.return, Le);
            }
        }
        break;
      case 6:
        if (Qa(r, n), ai(n), u & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (Le) {
            gn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (Qa(r, n), ai(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            zu(r.containerInfo);
          } catch (Le) {
            gn(n, n.return, Le);
          }
        break;
      case 4:
        Qa(r, n), ai(n);
        break;
      case 13:
        Qa(r, n), ai(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (Yd = wt())), u & 4 && Di(n);
        break;
      case 22:
        if (re = o !== null && o.memoizedState !== null, n.mode & 1 ? (Fn = (Q = Fn) || re, Qa(r, n), Fn = Q) : Qa(r, n), ai(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !re && n.mode & 1)
            for (ke = n, re = n.child; re !== null; ) {
              for (le = ke = re; ke !== null; ) {
                switch (ne = ke, Ee = ne.child, ne.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fs(4, ne, ne.return);
                    break;
                  case 1:
                    ql(ne, ne.return);
                    var _e = ne.stateNode;
                    if (typeof _e.componentWillUnmount == "function") {
                      u = ne, o = ne.return;
                      try {
                        r = u, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                      } catch (Le) {
                        gn(u, o, Le);
                      }
                    }
                    break;
                  case 5:
                    ql(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      Bd(le);
                      continue;
                    }
                }
                Ee !== null ? (Ee.return = ne, ke = Ee) : Bd(le);
              }
              re = re.sibling;
            }
          e:
            for (re = null, le = n; ; ) {
              if (le.tag === 5) {
                if (re === null) {
                  re = le;
                  try {
                    c = le.stateNode, Q ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (k = le.stateNode, M = le.memoizedProps.style, S = M != null && M.hasOwnProperty("display") ? M.display : null, k.style.display = lt("display", S));
                  } catch (Le) {
                    gn(n, n.return, Le);
                  }
                }
              } else if (le.tag === 6) {
                if (re === null)
                  try {
                    le.stateNode.nodeValue = Q ? "" : le.memoizedProps;
                  } catch (Le) {
                    gn(n, n.return, Le);
                  }
              } else if ((le.tag !== 22 && le.tag !== 23 || le.memoizedState === null || le === n) && le.child !== null) {
                le.child.return = le, le = le.child;
                continue;
              }
              if (le === n)
                break e;
              for (; le.sibling === null; ) {
                if (le.return === null || le.return === n)
                  break e;
                re === le && (re = null), le = le.return;
              }
              re === le && (re = null), le.sibling.return = le.return, le = le.sibling;
            }
        }
        break;
      case 19:
        Qa(r, n), ai(n), u & 4 && Di(n);
        break;
      case 21:
        break;
      default:
        Qa(
          r,
          n
        ), ai(n);
    }
  }
  function ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (bh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (xr(c, ""), u.flags &= -33);
            var p = Hc(n);
            ri(n, p, c);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, k = Hc(n);
            Xl(n, k, S);
            break;
          default:
            throw Error(m(161));
        }
      } catch (M) {
        gn(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function wh(n, r, o) {
    ke = n, Jl(n);
  }
  function Jl(n, r, o) {
    for (var u = (n.mode & 1) !== 0; ke !== null; ) {
      var c = ke, p = c.child;
      if (c.tag === 22 && u) {
        var S = c.memoizedState !== null || ss;
        if (!S) {
          var k = c.alternate, M = k !== null && k.memoizedState !== null || Fn;
          k = ss;
          var Q = Fn;
          if (ss = S, (Fn = M) && !Q)
            for (ke = c; ke !== null; )
              S = ke, M = S.child, S.tag === 22 && S.memoizedState !== null ? Rh(c) : M !== null ? (M.return = S, ke = M) : Rh(c);
          for (; p !== null; )
            ke = p, Jl(p), p = p.sibling;
          ke = c, ss = k, Fn = Q;
        }
        Th(n);
      } else
        c.subtreeFlags & 8772 && p !== null ? (p.return = c, ke = p) : Th(n);
    }
  }
  function Th(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Fn || ds(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !Fn)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? o.memoizedProps : oa(r.type, o.memoizedProps);
                    u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && Bo(r, p, u);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Bo(r, S, o);
                }
                break;
              case 5:
                var k = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = k;
                  var M = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      M.autoFocus && o.focus();
                      break;
                    case "img":
                      M.src && (o.src = M.src);
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
                  var Q = r.alternate;
                  if (Q !== null) {
                    var re = Q.memoizedState;
                    if (re !== null) {
                      var le = re.dehydrated;
                      le !== null && zu(le);
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
                throw Error(m(163));
            }
          Fn || r.flags & 512 && Hd(r);
        } catch (ne) {
          gn(r, r.return, ne);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function Bd(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function Rh(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              ds(4, r);
            } catch (M) {
              gn(r, o, M);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (M) {
                gn(r, c, M);
              }
            }
            var p = r.return;
            try {
              Hd(r);
            } catch (M) {
              gn(r, p, M);
            }
            break;
          case 5:
            var S = r.return;
            try {
              Hd(r);
            } catch (M) {
              gn(r, S, M);
            }
        }
      } catch (M) {
        gn(r, r.return, M);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, ke = k;
        break;
      }
      ke = r.return;
    }
  }
  var Vc = Math.ceil, ps = ae.ReactCurrentDispatcher, Id = ae.ReactCurrentOwner, yr = ae.ReactCurrentBatchConfig, vt = 0, sn = null, yn = null, Wn = 0, ua = 0, eu = at(0), jn = 0, vs = null, _i = 0, Bc = 0, tu = 0, tl = null, Tr = null, Yd = 0, nu = 1 / 0, Ni = null, Ic = !1, nl = null, ii = null, vo = !1, ho = null, Yc = 0, ru = 0, Gc = null, rl = -1, al = 0;
  function gr() {
    return vt & 6 ? wt() : rl !== -1 ? rl : rl = wt();
  }
  function Mn(n) {
    return n.mode & 1 ? vt & 2 && Wn !== 0 ? Wn & -Wn : pc.transition !== null ? (al === 0 && (al = Bs()), al) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Yf(n.type)), n) : 1;
  }
  function Sr(n, r, o, u) {
    if (50 < ru)
      throw ru = 0, Gc = null, Error(m(185));
    Lo(n, o, u), (!(vt & 2) || n !== sn) && (n === sn && (!(vt & 2) && (Bc |= o), jn === 4 && _a(n, Wn)), Cr(n, u), o === 1 && vt === 0 && !(r.mode & 1) && (nu = wt() + 500, Yn && Pr()));
  }
  function Cr(n, r) {
    var o = n.callbackNode;
    Vs(n, r);
    var u = Ha(n, n === sn ? Wn : 0);
    if (u === 0)
      o !== null && wr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && wr(o), r === 1)
        n.tag === 0 ? yd(kh.bind(null, n)) : md(kh.bind(null, n)), pd(function() {
          !(vt & 6) && Pr();
        }), o = null;
      else {
        switch (Vf(u)) {
          case 1:
            o = hi;
            break;
          case 4:
            o = pt;
            break;
          case 16:
            o = Wi;
            break;
          case 536870912:
            o = Ff;
            break;
          default:
            o = Wi;
        }
        o = Xd(o, au.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function au(n, r) {
    if (rl = -1, al = 0, vt & 6)
      throw Error(m(327));
    var o = n.callbackNode;
    if (ou() && n.callbackNode !== o)
      return null;
    var u = Ha(n, n === sn ? Wn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Wc(n, u);
    else {
      r = u;
      var c = vt;
      vt |= 2;
      var p = Qc();
      (sn !== n || Wn !== r) && (Ni = null, nu = wt() + 500, il(n, r));
      do
        try {
          Jy();
          break;
        } catch (k) {
          Dh(n, k);
        }
      while (!0);
      xd(), ps.current = p, vt = c, yn !== null ? r = 0 : (sn = null, Wn = 0, r = jn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Pf(n), c !== 0 && (u = c, r = Gd(n, c))), r === 1)
        throw o = vs, il(n, 0), _a(n, u), Cr(n, wt()), o;
      if (r === 6)
        _a(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Qd(c) && (r = Wc(n, u), r === 2 && (p = Pf(n), p !== 0 && (u = p, r = Gd(n, p))), r === 1))
          throw o = vs, il(n, 0), _a(n, u), Cr(n, wt()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ol(n, Tr, Ni);
            break;
          case 3:
            if (_a(n, u), (u & 130023424) === u && (r = Yd + 500 - wt(), 10 < r)) {
              if (Ha(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                gr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Po(ol.bind(null, n, Tr, Ni), r);
              break;
            }
            ol(n, Tr, Ni);
            break;
          case 4:
            if (_a(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var S = 31 - ma(u);
              p = 1 << S, S = r[S], S > c && (c = S), u &= ~p;
            }
            if (u = c, u = wt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Vc(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Po(ol.bind(null, n, Tr, Ni), u);
              break;
            }
            ol(n, Tr, Ni);
            break;
          case 5:
            ol(n, Tr, Ni);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Cr(n, wt()), n.callbackNode === o ? au.bind(null, n) : null;
  }
  function Gd(n, r) {
    var o = tl;
    return n.current.memoizedState.isDehydrated && (il(n, r).flags |= 256), n = Wc(n, r), n !== 2 && (r = Tr, Tr = o, r !== null && hs(r)), n;
  }
  function hs(n) {
    Tr === null ? Tr = n : Tr.push.apply(Tr, n);
  }
  function Qd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var c = o[u], p = c.getSnapshot;
            c = c.value;
            try {
              if (!Sa(p(), c))
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
  function _a(n, r) {
    for (r &= ~tu, r &= ~Bc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - ma(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function kh(n) {
    if (vt & 6)
      throw Error(m(327));
    ou();
    var r = Ha(n, 0);
    if (!(r & 1))
      return Cr(n, wt()), null;
    var o = Wc(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Pf(n);
      u !== 0 && (r = u, o = Gd(n, u));
    }
    if (o === 1)
      throw o = vs, il(n, 0), _a(n, r), Cr(n, wt()), o;
    if (o === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ol(n, Tr, Ni), Cr(n, wt()), null;
  }
  function iu(n, r) {
    var o = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = o, vt === 0 && (nu = wt() + 500, Yn && Pr());
    }
  }
  function mo(n) {
    ho !== null && ho.tag === 0 && !(vt & 6) && ou();
    var r = vt;
    vt |= 1;
    var o = yr.transition, u = zt;
    try {
      if (yr.transition = null, zt = 1, n)
        return n();
    } finally {
      zt = u, yr.transition = o, vt = r, !(vt & 6) && Pr();
    }
  }
  function Wd() {
    ua = eu.current, Nt(eu);
  }
  function il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, th(o)), yn !== null)
      for (o = yn.return; o !== null; ) {
        var u = o;
        switch (Sd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && ba();
            break;
          case 3:
            so(), Nt(mn), Nt(Xe), Sc();
            break;
          case 5:
            st(u);
            break;
          case 4:
            so();
            break;
          case 13:
            Nt(Ge);
            break;
          case 19:
            Nt(Ge);
            break;
          case 10:
            io(u.type._context);
            break;
          case 22:
          case 23:
            Wd();
        }
        o = o.return;
      }
    if (sn = n, yn = n = yo(n.current, null), Wn = ua = r, jn = 0, vs = null, tu = Bc = _i = 0, Tr = tl = null, Zn !== null) {
      for (r = 0; r < Zn.length; r++)
        if (o = Zn[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var c = u.next, p = o.pending;
          if (p !== null) {
            var S = p.next;
            p.next = c, u.next = S;
          }
          o.pending = u;
        }
      Zn = null;
    }
    return n;
  }
  function Dh(n, r) {
    do {
      var o = yn;
      try {
        if (xd(), Cc.current = Uc, Qe) {
          for (var u = qt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Qe = !1;
        }
        if (Yo = 0, gt = J = qt = null, ni = !1, la = 0, Id.current = null, o === null || o.return === null) {
          jn = 1, vs = r, yn = null;
          break;
        }
        e: {
          var p = n, S = o.return, k = o, M = r;
          if (r = Wn, k.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var Q = M, re = k, le = re.tag;
            if (!(re.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var ne = re.alternate;
              ne ? (re.updateQueue = ne.updateQueue, re.memoizedState = ne.memoizedState, re.lanes = ne.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var Ee = Od(S);
            if (Ee !== null) {
              Ee.flags &= -257, Ld(Ee, S, k, p, r), Ee.mode & 1 && mh(p, Q, r), r = Ee, M = Q;
              var _e = r.updateQueue;
              if (_e === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(M), r.updateQueue = Le;
              } else
                _e.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                mh(p, Q, r), Kd();
                break e;
              }
              M = Error(m(426));
            }
          } else if (Kt && k.mode & 1) {
            var Tn = Od(S);
            if (Tn !== null) {
              !(Tn.flags & 65536) && (Tn.flags |= 256), Ld(Tn, S, k, p, r), Ed(Ql(M, k));
              break e;
            }
          }
          p = M = Ql(M, k), jn !== 4 && (jn = 2), tl === null ? tl = [p] : tl.push(p), p = S;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var P = hh(p, M, r);
                Rd(p, P);
                break e;
              case 1:
                k = M;
                var L = p.type, B = p.stateNode;
                if (!(p.flags & 128) && (typeof L.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (ii === null || !ii.has(B)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var ce = os(p, k, r);
                  Rd(p, ce);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        qd(o);
      } catch (ze) {
        r = ze, yn === o && o !== null && (yn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qc() {
    var n = ps.current;
    return ps.current = Uc, n === null ? Uc : n;
  }
  function Kd() {
    (jn === 0 || jn === 3 || jn === 2) && (jn = 4), sn === null || !(_i & 268435455) && !(Bc & 268435455) || _a(sn, Wn);
  }
  function Wc(n, r) {
    var o = vt;
    vt |= 2;
    var u = Qc();
    (sn !== n || Wn !== r) && (Ni = null, il(n, r));
    do
      try {
        Zy();
        break;
      } catch (c) {
        Dh(n, c);
      }
    while (!0);
    if (xd(), vt = o, ps.current = u, yn !== null)
      throw Error(m(261));
    return sn = null, Wn = 0, jn;
  }
  function Zy() {
    for (; yn !== null; )
      _h(yn);
  }
  function Jy() {
    for (; yn !== null && !Qi(); )
      _h(yn);
  }
  function _h(n) {
    var r = Mh(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? qd(n) : yn = r, Id.current = null;
  }
  function qd(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Pd(o, r), o !== null) {
          o.flags &= 32767, yn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          jn = 6, yn = null;
          return;
        }
      } else if (o = Xy(o, r, ua), o !== null) {
        yn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        yn = r;
        return;
      }
      yn = r = n;
    } while (r !== null);
    jn === 0 && (jn = 5);
  }
  function ol(n, r, o) {
    var u = zt, c = yr.transition;
    try {
      yr.transition = null, zt = 1, eg(n, r, o, u);
    } finally {
      yr.transition = c, zt = u;
    }
    return null;
  }
  function eg(n, r, o, u) {
    do
      ou();
    while (ho !== null);
    if (vt & 6)
      throw Error(m(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    if (Ry(n, p), n === sn && (yn = sn = null, Wn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || vo || (vo = !0, Xd(Wi, function() {
      return ou(), null;
    })), p = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || p) {
      p = yr.transition, yr.transition = null;
      var S = zt;
      zt = 1;
      var k = vt;
      vt |= 4, Id.current = null, Eh(n, o), xh(o, n), nc(jo), zo = !!fd, jo = fd = null, n.current = o, wh(o), Ps(), vt = k, zt = S, yr.transition = p;
    } else
      n.current = o;
    if (vo && (vo = !1, ho = n, Yc = c), p = n.pendingLanes, p === 0 && (ii = null), hv(o.stateNode), Cr(n, wt()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ic)
      throw Ic = !1, n = nl, nl = null, n;
    return Yc & 1 && n.tag !== 0 && ou(), p = n.pendingLanes, p & 1 ? n === Gc ? ru++ : (ru = 0, Gc = n) : ru = 0, Pr(), null;
  }
  function ou() {
    if (ho !== null) {
      var n = Vf(Yc), r = yr.transition, o = zt;
      try {
        if (yr.transition = null, zt = 16 > n ? 16 : n, ho === null)
          var u = !1;
        else {
          if (n = ho, ho = null, Yc = 0, vt & 6)
            throw Error(m(331));
          var c = vt;
          for (vt |= 4, ke = n.current; ke !== null; ) {
            var p = ke, S = p.child;
            if (ke.flags & 16) {
              var k = p.deletions;
              if (k !== null) {
                for (var M = 0; M < k.length; M++) {
                  var Q = k[M];
                  for (ke = Q; ke !== null; ) {
                    var re = ke;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fs(8, re, p);
                    }
                    var le = re.child;
                    if (le !== null)
                      le.return = re, ke = le;
                    else
                      for (; ke !== null; ) {
                        re = ke;
                        var ne = re.sibling, Ee = re.return;
                        if (Vd(re), re === Q) {
                          ke = null;
                          break;
                        }
                        if (ne !== null) {
                          ne.return = Ee, ke = ne;
                          break;
                        }
                        ke = Ee;
                      }
                  }
                }
                var _e = p.alternate;
                if (_e !== null) {
                  var Le = _e.child;
                  if (Le !== null) {
                    _e.child = null;
                    do {
                      var Tn = Le.sibling;
                      Le.sibling = null, Le = Tn;
                    } while (Le !== null);
                  }
                }
                ke = p;
              }
            }
            if (p.subtreeFlags & 2064 && S !== null)
              S.return = p, ke = S;
            else
              e:
                for (; ke !== null; ) {
                  if (p = ke, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fs(9, p, p.return);
                    }
                  var P = p.sibling;
                  if (P !== null) {
                    P.return = p.return, ke = P;
                    break e;
                  }
                  ke = p.return;
                }
          }
          var L = n.current;
          for (ke = L; ke !== null; ) {
            S = ke;
            var B = S.child;
            if (S.subtreeFlags & 2064 && B !== null)
              B.return = S, ke = B;
            else
              e:
                for (S = L; ke !== null; ) {
                  if (k = ke, k.flags & 2048)
                    try {
                      switch (k.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ds(9, k);
                      }
                    } catch (ze) {
                      gn(k, k.return, ze);
                    }
                  if (k === S) {
                    ke = null;
                    break e;
                  }
                  var ce = k.sibling;
                  if (ce !== null) {
                    ce.return = k.return, ke = ce;
                    break e;
                  }
                  ke = k.return;
                }
          }
          if (vt = c, Pr(), Pa && typeof Pa.onPostCommitFiberRoot == "function")
            try {
              Pa.onPostCommitFiberRoot(_u, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        zt = o, yr.transition = r;
      }
    }
    return !1;
  }
  function Nh(n, r, o) {
    r = Ql(o, r), r = hh(n, r, 1), n = lo(n, r, 1), r = gr(), n !== null && (Lo(n, 1, r), Cr(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3)
      Nh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Nh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ii === null || !ii.has(u))) {
            n = Ql(o, n), n = os(r, n, 1), r = lo(r, n, 1), n = gr(), r !== null && (Lo(r, 1, n), Cr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function tg(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = gr(), n.pingedLanes |= n.suspendedLanes & o, sn === n && (Wn & o) === o && (jn === 4 || jn === 3 && (Wn & 130023424) === Wn && 500 > wt() - Yd ? il(n, 0) : tu |= o), Cr(n, r);
  }
  function Kc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Dl, Dl <<= 1, !(Dl & 130023424) && (Dl = 4194304)) : r = 1);
    var o = gr();
    n = wi(n, r), n !== null && (Lo(n, r, o), Cr(n, o));
  }
  function ng(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Kc(n, o);
  }
  function rg(n, r) {
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
        throw Error(m(314));
    }
    u !== null && u.delete(r), Kc(n, o);
  }
  var Mh;
  Mh = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || mn.current)
        Nn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Nn = !1, ki(n, r, o);
        Nn = !!(n.flags & 131072);
      }
    else
      Nn = !1, Kt && r.flags & 1048576 && gd(r, Pl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        hr(n, r), n = r.pendingProps;
        var c = Ea(r, Xe.current);
        he(r, o), c = co(null, r, u, n, c, o);
        var p = Wo();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, nn(u) ? (p = !0, uc(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = mc, r.stateNode = c, c._reactInternals = r, yc(r, u, n, o), r = yh(null, r, u, !0, p, o)) : (r.tag = 0, Kt && p && sc(r), Un(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (hr(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = ig(u), n = oa(u, n), c) {
            case 0:
              r = Wl(null, r, u, n, o);
              break e;
            case 1:
              r = zd(null, r, u, n, o);
              break e;
            case 11:
              r = po(null, r, u, n, o);
              break e;
            case 14:
              r = Fc(null, r, u, oa(u.type, n), o);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : oa(u, c), Wl(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : oa(u, c), zd(n, r, u, c, o);
      case 3:
        e: {
          if (gh(r), n === null)
            throw Error(m(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, An(n, r), uo(r, u, null, o);
          var S = r.memoizedState;
          if (u = S.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              c = Ql(Error(m(423)), r), r = jc(n, r, u, o, c);
              break e;
            } else if (u !== c) {
              c = Ql(Error(m(424)), r), r = jc(n, r, u, o, c);
              break e;
            } else
              for (Br = Ya(r.stateNode.containerInfo.firstChild), ia = r, Kt = !0, wa = null, o = ph(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ln(), u === c) {
              r = Jn(n, r, o);
              break e;
            }
            Un(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ie(r), n === null && fc(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, S = c.children, Wu(u, c) ? S = null : p !== null && Wu(u, p) && (r.flags |= 32), it(n, r), Un(n, r, S, o), r.child;
      case 6:
        return n === null && fc(r), null;
      case 13:
        return Ud(n, r, o);
      case 4:
        return Dd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Vl(r, null, u, o) : Un(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : oa(u, c), po(n, r, u, c, o);
      case 7:
        return Un(n, r, r.pendingProps, o), r.child;
      case 8:
        return Un(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Un(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, S = c.value, Mt(ti, u._currentValue), u._currentValue = S, p !== null)
            if (Sa(p.value, S)) {
              if (p.children === c.children && !mn.current) {
                r = Jn(n, r, o);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var k = p.dependencies;
                if (k !== null) {
                  S = p.child;
                  for (var M = k.firstContext; M !== null; ) {
                    if (M.context === u) {
                      if (p.tag === 1) {
                        M = Ti(-1, o & -o), M.tag = 2;
                        var Q = p.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var re = Q.pending;
                          re === null ? M.next = M : (M.next = re.next, re.next = M), Q.pending = M;
                        }
                      }
                      p.lanes |= o, M = p.alternate, M !== null && (M.lanes |= o), Gn(
                        p.return,
                        o,
                        r
                      ), k.lanes |= o;
                      break;
                    }
                    M = M.next;
                  }
                } else if (p.tag === 10)
                  S = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (S = p.return, S === null)
                    throw Error(m(341));
                  S.lanes |= o, k = S.alternate, k !== null && (k.lanes |= o), Gn(S, o, r), S = p.sibling;
                } else
                  S = p.child;
                if (S !== null)
                  S.return = p;
                else
                  for (S = p; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (p = S.sibling, p !== null) {
                      p.return = S.return, S = p;
                      break;
                    }
                    S = S.return;
                  }
                p = S;
              }
          Un(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, he(r, o), c = wn(c), u = u(c), r.flags |= 1, Un(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = oa(u, r.pendingProps), c = oa(u.type, c), Fc(n, r, u, c, o);
      case 15:
        return Gr(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : oa(u, c), hr(n, r), r.tag = 1, nn(u) ? (n = !0, uc(r)) : n = !1, he(r, o), sh(r, u, c), yc(r, u, c, o), yh(null, r, u, !0, n, o);
      case 19:
        return jd(n, r, o);
      case 22:
        return Zo(n, r, o);
    }
    throw Error(m(156, r.tag));
  };
  function Xd(n, r) {
    return tn(n, r);
  }
  function ag(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Na(n, r, o, u) {
    return new ag(n, r, o, u);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ig(n) {
    if (typeof n == "function")
      return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ue)
        return 11;
      if (n === kt)
        return 14;
    }
    return 2;
  }
  function yo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Na(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function qc(n, r, o, u, c, p) {
    var S = 2;
    if (u = n, typeof n == "function")
      Zd(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case oe:
            return ll(o.children, c, p, r);
          case de:
            S = 8, c |= 8;
            break;
          case ve:
            return n = Na(12, o, r, c | 2), n.elementType = ve, n.lanes = p, n;
          case $e:
            return n = Na(13, o, r, c), n.elementType = $e, n.lanes = p, n;
          case Ve:
            return n = Na(19, o, r, c), n.elementType = Ve, n.lanes = p, n;
          case At:
            return ms(o, c, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case De:
                  S = 10;
                  break e;
                case Oe:
                  S = 9;
                  break e;
                case Ue:
                  S = 11;
                  break e;
                case kt:
                  S = 14;
                  break e;
                case ft:
                  S = 16, u = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = Na(S, o, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function ll(n, r, o, u) {
    return n = Na(7, n, u, r), n.lanes = o, n;
  }
  function ms(n, r, o, u) {
    return n = Na(22, n, u, r), n.elementType = At, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function ys(n, r, o) {
    return n = Na(6, n, null, r), n.lanes = o, n;
  }
  function ul(n, r, o) {
    return r = Na(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function og(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hf(0), this.expirationTimes = Hf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hf(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Xc(n, r, o, u, c, p, S, k, M) {
    return n = new og(n, r, o, k, M), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Na(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(p), n;
  }
  function Oh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Se, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function Jd(n) {
    if (!n)
      return ei;
    n = n._reactInternals;
    e: {
      if (ot(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (nn(o))
        return Xu(n, o, r);
    }
    return r;
  }
  function Lh(n, r, o, u, c, p, S, k, M) {
    return n = Xc(o, u, !0, n, c, p, S, k, M), n.context = Jd(null), o = n.current, u = gr(), c = Mn(o), p = Ti(u, c), p.callback = r ?? null, lo(o, p, c), n.current.lanes = c, Lo(n, c, u), Cr(n, u), n;
  }
  function gs(n, r, o, u) {
    var c = r.current, p = gr(), S = Mn(c);
    return o = Jd(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ti(p, S), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = lo(c, r, S), n !== null && (Sr(n, c, S, p), hc(n, c, S)), S;
  }
  function Zc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function zh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function ep(n, r) {
    zh(n, r), (n = n.alternate) && zh(n, r);
  }
  function Ah() {
    return null;
  }
  var tp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Jc(n) {
    this._internalRoot = n;
  }
  Mi.prototype.render = Jc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    gs(n, r, null, null);
  }, Mi.prototype.unmount = Jc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      mo(function() {
        gs(null, n, null, null);
      }), r[bi] = null;
    }
  };
  function Mi(n) {
    this._internalRoot = n;
  }
  Mi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Sv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < $t.length && r !== 0 && r < $t[o].priority; o++)
        ;
      $t.splice(o, 0, n), o === 0 && Cv(n);
    }
  };
  function np(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ef(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Uh() {
  }
  function lg(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var Q = Zc(S);
          p.call(Q);
        };
      }
      var S = Lh(r, u, n, 0, null, !1, !1, "", Uh);
      return n._reactRootContainer = S, n[bi] = S.current, Fl(n.nodeType === 8 ? n.parentNode : n), mo(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var k = u;
      u = function() {
        var Q = Zc(M);
        k.call(Q);
      };
    }
    var M = Xc(n, 0, !1, null, null, !1, !1, "", Uh);
    return n._reactRootContainer = M, n[bi] = M.current, Fl(n.nodeType === 8 ? n.parentNode : n), mo(function() {
      gs(r, M, o, u);
    }), M;
  }
  function tf(n, r, o, u, c) {
    var p = o._reactRootContainer;
    if (p) {
      var S = p;
      if (typeof c == "function") {
        var k = c;
        c = function() {
          var M = Zc(S);
          k.call(M);
        };
      }
      gs(r, S, n, c);
    } else
      S = lg(o, r, n, c, u);
    return Zc(S);
  }
  gv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Oo(r.pendingLanes);
          o !== 0 && (Nu(r, o | 1), Cr(r, wt()), !(vt & 6) && (nu = wt() + 500, Pr()));
        }
        break;
      case 13:
        mo(function() {
          var u = wi(n, 1);
          if (u !== null) {
            var c = gr();
            Sr(u, n, 1, c);
          }
        }), ep(n, 1);
    }
  }, Is = function(n) {
    if (n.tag === 13) {
      var r = wi(n, 134217728);
      if (r !== null) {
        var o = gr();
        Sr(r, n, 134217728, o);
      }
      ep(n, 134217728);
    }
  }, Vt = function(n) {
    if (n.tag === 13) {
      var r = Mn(n), o = wi(n, r);
      if (o !== null) {
        var u = gr();
        Sr(o, n, r, u);
      }
      ep(n, r);
    }
  }, Sv = function() {
    return zt;
  }, Bf = function(n, r) {
    var o = zt;
    try {
      return zt = n, r();
    } finally {
      zt = o;
    }
  }, dr = function(n, r, o) {
    switch (r) {
      case "input":
        if (Ut(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Pe(u);
              if (!c)
                throw Error(m(90));
              Re(u), Ut(u, c);
            }
          }
        }
        break;
      case "textarea":
        va(n, o);
        break;
      case "select":
        r = o.value, r != null && Ur(n, !!o.multiple, r, !1);
    }
  }, Du = iu, js = mo;
  var ug = { usingClientEntryPoint: !1, Events: [qu, jl, Pe, _o, Tl, iu] }, lu = { findFiberByHostInstance: Ca, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, sg = { bundleType: lu.bundleType, version: lu.version, rendererPackageName: lu.rendererPackageName, rendererConfig: lu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Vn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: lu.findFiberByHostInstance || Ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nf.isDisabled && nf.supportsFiber)
      try {
        _u = nf.inject(sg), Pa = nf;
      } catch {
      }
  }
  return Ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug, Ua.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!np(r))
      throw Error(m(200));
    return Oh(n, r, null, o);
  }, Ua.createRoot = function(n, r) {
    if (!np(n))
      throw Error(m(299));
    var o = !1, u = "", c = tp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Xc(n, 1, !1, null, null, o, !1, u, c), n[bi] = r.current, Fl(n.nodeType === 8 ? n.parentNode : n), new Jc(r);
  }, Ua.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Vn(r), n = n === null ? null : n.stateNode, n;
  }, Ua.flushSync = function(n) {
    return mo(n);
  }, Ua.hydrate = function(n, r, o) {
    if (!ef(r))
      throw Error(m(200));
    return tf(null, n, r, !0, o);
  }, Ua.hydrateRoot = function(n, r, o) {
    if (!np(n))
      throw Error(m(405));
    var u = o != null && o.hydratedSources || null, c = !1, p = "", S = tp;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (S = o.onRecoverableError)), r = Lh(r, null, n, 1, o ?? null, c, !1, p, S), n[bi] = r.current, Fl(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
          o,
          c
        );
    return new Mi(r);
  }, Ua.render = function(n, r, o) {
    if (!ef(r))
      throw Error(m(200));
    return tf(null, n, r, !1, o);
  }, Ua.unmountComponentAtNode = function(n) {
    if (!ef(n))
      throw Error(m(40));
    return n._reactRootContainer ? (mo(function() {
      tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[bi] = null;
      });
    }), !0) : !1;
  }, Ua.unstable_batchedUpdates = iu, Ua.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!ef(o))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return tf(n, r, o, !1, u);
  }, Ua.version = "18.2.0-next-9e3b772b8-20220608", Ua;
}
var $a = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx;
function uM() {
  return Sx || (Sx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = Fa, y = Fx(), m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function x(e) {
      C = e;
    }
    function b(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        D("warn", e, a);
      }
    }
    function h(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        D("error", e, a);
      }
    }
    function D(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var T = 0, R = 1, A = 2, _ = 3, U = 4, F = 5, $ = 6, j = 7, G = 8, W = 9, K = 10, q = 11, ae = 12, te = 13, Se = 14, oe = 15, de = 16, ve = 17, De = 18, Oe = 19, Ue = 21, $e = 22, Ve = 23, kt = 24, ft = 25, At = !0, se = !1, xe = !1, pe = !1, Ke = !1, rt = !0, Pt = !1, Cn = !1, ur = !0, xt = !0, an = !0, Dt = /* @__PURE__ */ new Set(), En = {}, vn = {};
    function dt(e, t) {
      Re(e, t), Re(e + "Capture", t);
    }
    function Re(e, t) {
      En[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), En[e] = t;
      {
        var a = e.toLowerCase();
        vn[a] = e, e === "onDoubleClick" && (vn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Dt.add(t[i]);
    }
    var qe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mt = Object.prototype.hasOwnProperty;
    function yt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Yt(e) {
      try {
        return Ut(e), !1;
      } catch {
        return !0;
      }
    }
    function Ut(e) {
      return "" + e;
    }
    function hn(e, t) {
      if (Yt(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), Ut(e);
    }
    function Ln(e) {
      if (Yt(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), Ut(e);
    }
    function Jr(e, t) {
      if (Yt(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), Ut(e);
    }
    function Ur(e, t) {
      if (Yt(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), Ut(e);
    }
    function $r(e) {
      if (Yt(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), Ut(e);
    }
    function sr(e) {
      if (Yt(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", yt(e)), Ut(e);
    }
    var va = 0, cr = 1, ea = 2, Jt = 3, bn = 4, ha = 5, xr = 6, fe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Fe = fe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + fe + "][" + Fe + "]*$"), _t = {}, Qt = {};
    function xn(e) {
      return mt.call(Qt, e) ? !0 : mt.call(_t, e) ? !1 : lt.test(e) ? (Qt[e] = !0, !0) : (_t[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function on(e, t, a) {
      return t !== null ? t.type === va : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fr(e, t, a, i) {
      if (a !== null && a.type === va)
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
      if (t === null || typeof t > "u" || fr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Jt:
            return !t;
          case bn:
            return t === !1;
          case ha:
            return isNaN(t);
          case xr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function dr(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Ht(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === ea || t === Jt || t === bn, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Gt = {}, wl = [
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
    wl.forEach(function(e) {
      Gt[e] = new Ht(
        e,
        va,
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
      Gt[t] = new Ht(
        t,
        cr,
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
      Gt[e] = new Ht(
        e,
        ea,
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
      Gt[e] = new Ht(
        e,
        ea,
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
      Gt[e] = new Ht(
        e,
        Jt,
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
      Gt[e] = new Ht(
        e,
        Jt,
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
      Gt[e] = new Ht(
        e,
        bn,
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
      Gt[e] = new Ht(
        e,
        xr,
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
      Gt[e] = new Ht(
        e,
        ha,
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
    var _o = /[\-\:]([a-z])/g, Tl = function(e) {
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
      var t = e.replace(_o, Tl);
      Gt[t] = new Ht(
        t,
        cr,
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
      var t = e.replace(_o, Tl);
      Gt[t] = new Ht(
        t,
        cr,
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
      var t = e.replace(_o, Tl);
      Gt[t] = new Ht(
        t,
        cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new Ht(
        e,
        cr,
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
    var Du = "xlinkHref";
    Gt[Du] = new Ht(
      "xlinkHref",
      cr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new Ht(
        e,
        cr,
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
    var js = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, No = !1;
    function Rl(e) {
      !No && js.test(e) && (No = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Mo(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        hn(a, t), i.sanitizeURL && Rl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === bn) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : Lt(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (Lt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Jt)
            return a;
          f = e.getAttribute(s);
        }
        return Lt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function kl(e, t, a, i) {
      {
        if (!xn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return hn(a, t), l === "" + a ? a : l;
      }
    }
    function Za(e, t, a, i) {
      var l = dr(t);
      if (!on(t, l, i)) {
        if (Lt(t, a, l, i) && (a = null), i || l === null) {
          if (xn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (hn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var v = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[v] = g === Jt ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var E = l.attributeName, w = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var z = l.type, O;
          z === Jt || z === bn && a === !0 ? O = "" : (hn(a, E), O = "" + a, l.sanitizeURL && Rl(O.toString())), w ? e.setAttributeNS(w, E, O) : e.setAttribute(E, O);
        }
      }
    }
    var Yi = Symbol.for("react.element"), ta = Symbol.for("react.portal"), ja = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), ye = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), ot = Symbol.for("react.suspense"), Et = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Vn = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), wr = Symbol.for("react.legacy_hidden"), Qi = Symbol.for("react.cache"), Ps = Symbol.for("react.tracing_marker"), wt = Symbol.iterator, wy = "@@iterator";
    function hi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = wt && e[wt] || e[wy];
      return typeof t == "function" ? t : null;
    }
    var pt = Object.assign, Wi = 0, vv, Ff, _u, Pa, hv, ma, mv;
    function yv() {
    }
    yv.__reactDisabledLog = !0;
    function Ty() {
      {
        if (Wi === 0) {
          vv = console.log, Ff = console.info, _u = console.warn, Pa = console.error, hv = console.group, ma = console.groupCollapsed, mv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: yv,
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
        Wi++;
      }
    }
    function Hs() {
      {
        if (Wi--, Wi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pt({}, e, {
              value: vv
            }),
            info: pt({}, e, {
              value: Ff
            }),
            warn: pt({}, e, {
              value: _u
            }),
            error: pt({}, e, {
              value: Pa
            }),
            group: pt({}, e, {
              value: hv
            }),
            groupCollapsed: pt({}, e, {
              value: ma
            }),
            groupEnd: pt({}, e, {
              value: mv
            })
          });
        }
        Wi < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Dl = m.ReactCurrentDispatcher, Oo;
    function Ha(e, t, a) {
      {
        if (Oo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Oo = i && i[1] || "";
          }
        return `
` + Oo + e;
      }
    }
    var jf = !1, Vs;
    {
      var Pf = typeof WeakMap == "function" ? WeakMap : Map;
      Vs = new Pf();
    }
    function Bs(e, t) {
      if (!e || jf)
        return "";
      {
        var a = Vs.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      jf = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Dl.current, Dl.current = null, Ty();
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
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var v = Y.stack.split(`
`), g = i.stack.split(`
`), E = v.length - 1, w = g.length - 1; E >= 1 && w >= 0 && v[E] !== g[w]; )
            w--;
          for (; E >= 1 && w >= 0; E--, w--)
            if (v[E] !== g[w]) {
              if (E !== 1 || w !== 1)
                do
                  if (E--, w--, w < 0 || v[E] !== g[w]) {
                    var z = `
` + v[E].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Vs.set(e, z), z;
                  }
                while (E >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        jf = !1, Dl.current = s, Hs(), Error.prepareStackTrace = l;
      }
      var O = e ? e.displayName || e.name : "", I = O ? Ha(O) : "";
      return typeof e == "function" && Vs.set(e, I), I;
    }
    function Hf(e, t, a) {
      return Bs(e, !0);
    }
    function Lo(e, t, a) {
      return Bs(e, !1);
    }
    function Ry(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Nu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bs(e, Ry(e));
      if (typeof e == "string")
        return Ha(e);
      switch (e) {
        case ot:
          return Ha("Suspense");
        case Et:
          return Ha("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Be:
            return Lo(e.render);
          case ut:
            return Nu(e.type, t, a);
          case Ye: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Nu(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function zt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return Ha(e.type);
        case de:
          return Ha("Lazy");
        case te:
          return Ha("Suspense");
        case Oe:
          return Ha("SuspenseList");
        case T:
        case A:
        case oe:
          return Lo(e.type);
        case q:
          return Lo(e.type.render);
        case R:
          return Hf(e.type);
        default:
          return "";
      }
    }
    function Vf(e) {
      try {
        var t = "", a = e;
        do
          t += zt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function gv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Is(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ja:
          return "Fragment";
        case ta:
          return "Portal";
        case N:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case ot:
          return "Suspense";
        case Et:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ye:
            var t = e;
            return Is(t) + ".Consumer";
          case ie:
            var a = e;
            return Is(a._context) + ".Provider";
          case Be:
            return gv(e, e.render, "ForwardRef");
          case ut:
            var i = e.displayName || null;
            return i !== null ? i : Vt(e.type) || "Memo";
          case Ye: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Vt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Sv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Bf(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case W:
          var i = a;
          return Bf(i) + ".Consumer";
        case K:
          var l = a;
          return Bf(l._context) + ".Provider";
        case De:
          return "DehydratedFragment";
        case q:
          return Sv(a, a.render, "ForwardRef");
        case j:
          return "Fragment";
        case F:
          return a;
        case U:
          return "Portal";
        case _:
          return "Root";
        case $:
          return "Text";
        case de:
          return Vt(a);
        case G:
          return a === Gi ? "StrictMode" : "Mode";
        case $e:
          return "Offscreen";
        case ae:
          return "Profiler";
        case Ue:
          return "Scope";
        case te:
          return "Suspense";
        case Oe:
          return "SuspenseList";
        case ft:
          return "TracingMarker";
        case R:
        case T:
        case ve:
        case A:
        case Se:
        case oe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Mu = m.ReactDebugCurrentFrame, Dn = null, ya = !1;
    function ga() {
      {
        if (Dn === null)
          return null;
        var e = Dn._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function Ou() {
      return Dn === null ? "" : Vf(Dn);
    }
    function zn() {
      Mu.getCurrentStack = null, Dn = null, ya = !1;
    }
    function $t(e) {
      Mu.getCurrentStack = e === null ? null : Ou, Dn = e, ya = !1;
    }
    function ky() {
      return Dn;
    }
    function Va(e) {
      ya = e;
    }
    function pr(e) {
      return "" + e;
    }
    function Ki(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return sr(e), e;
        default:
          return "";
      }
    }
    var Cv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function _l(e, t) {
      Cv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function If(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ev(e) {
      return e._valueTracker;
    }
    function Lu(e) {
      e._valueTracker = null;
    }
    function zu(e) {
      var t = "";
      return e && (If(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Nl(e) {
      var t = If(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      sr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(v) {
            sr(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            sr(v), i = "" + v;
          },
          stopTracking: function() {
            Lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function zo(e) {
      Ev(e) || (e._valueTracker = Nl(e));
    }
    function bv(e) {
      if (!e)
        return !1;
      var t = Ev(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = zu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ys(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Gs = !1, Au = !1, Qs = !1, Yf = !1;
    function mi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Uu(e, t) {
      var a = e, i = t.checked, l = pt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function $u(e, t) {
      _l("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Au && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), Au = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Gs && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component", t.type), Gs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ki(t.value != null ? t.value : i),
        controlled: mi(t)
      };
    }
    function Gf(e, t) {
      var a = e, i = t.checked;
      i != null && Za(a, "checked", i, !1);
    }
    function Ml(e, t) {
      var a = e;
      {
        var i = mi(t);
        !a._wrapperState.controlled && i && !Yf && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yf = !0), a._wrapperState.controlled && !i && !Qs && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qs = !0);
      }
      Gf(e, t);
      var l = Ki(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = pr(l)) : a.value !== pr(l) && (a.value = pr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? qi(a, t.type, l) : t.hasOwnProperty("defaultValue") && qi(a, t.type, Ki(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Fu(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = pr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function xv(e, t) {
      var a = e;
      Ml(a, t), na(a, t);
    }
    function na(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        hn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var v = Jh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            bv(f), Ml(f, v);
          }
        }
      }
    }
    function qi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ys(e.ownerDocument) !== e) && (a == null ? e.defaultValue = pr(e._wrapperState.initialValue) : e.defaultValue !== pr(a) && (e.defaultValue = pr(a)));
    }
    var Ws = !1, Ol = !1, wv = !1;
    function Ks(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ol || (Ol = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (wv || (wv = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ws && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ws = !0);
    }
    function Qf(e, t) {
      t.value != null && e.setAttribute("value", pr(Ki(t.value)));
    }
    var ju = Array.isArray;
    function Bn(e) {
      return ju(e);
    }
    var qs;
    qs = !1;
    function Tv() {
      var e = ga();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rv = ["value", "defaultValue"];
    function Dy(e) {
      {
        _l("select", e);
        for (var t = 0; t < Rv.length; t++) {
          var a = Rv[t];
          if (e[a] != null) {
            var i = Bn(e[a]);
            e.multiple && !i ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Tv()) : !e.multiple && i && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Tv());
          }
        }
      }
    }
    function Xi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var g = 0; g < l.length; g++) {
          var E = f.hasOwnProperty("$" + l[g].value);
          l[g].selected !== E && (l[g].selected = E), E && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var w = pr(Ki(a)), z = null, O = 0; O < l.length; O++) {
          if (l[O].value === w) {
            l[O].selected = !0, i && (l[O].defaultSelected = !0);
            return;
          }
          z === null && !l[O].disabled && (z = l[O]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function Wf(e, t) {
      return pt({}, t, {
        value: void 0
      });
    }
    function kv(e, t) {
      var a = e;
      Dy(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !qs && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qs = !0);
    }
    function _y(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Xi(a, !!t.multiple, i, !1) : t.defaultValue != null && Xi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ny(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Xi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Xi(a, !!t.multiple, t.defaultValue, !0) : Xi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function My(e, t) {
      var a = e, i = t.value;
      i != null && Xi(a, !!t.multiple, i, !1);
    }
    var Kf = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = pt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: pr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Dv(e, t) {
      var a = e;
      _l("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Kf && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ga() || "A component"), Kf = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Bn(l)) {
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
        initialValue: Ki(i)
      };
    }
    function _v(e, t) {
      var a = e, i = Ki(t.value), l = Ki(t.defaultValue);
      if (i != null) {
        var s = pr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = pr(l));
    }
    function Nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Xf(e, t) {
      _v(e, t);
    }
    var yi = "http://www.w3.org/1999/xhtml", Oy = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Xs(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Oy;
        default:
          return yi;
      }
    }
    function Jf(e, t) {
      return e == null || e === yi ? Xs(t) : e === Zf && t === "foreignObject" ? yi : e;
    }
    var Ly = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Zs, Mv = Ly(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        Zs = Zs || document.createElement("div"), Zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Zs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Fr = 1, gi = 3, _n = 8, Ba = 9, Ao = 11, Js = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === gi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ov = {
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
    }, Ll = {
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
    function Lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var zv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ll).forEach(function(e) {
      zv.forEach(function(t) {
        Ll[Lv(t, e)] = Ll[e];
      });
    });
    function ec(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ll.hasOwnProperty(e) && Ll[e]) ? t + "px" : (Ur(t, e), ("" + t).trim());
    }
    var zl = /([A-Z])/g, zy = /^ms-/;
    function Ay(e) {
      return e.replace(zl, "-$1").toLowerCase().replace(zy, "-ms-");
    }
    var Av = function() {
    };
    {
      var Uv = /^(?:webkit|moz|o)[A-Z]/, $v = /^-ms-/, Pu = /-(.)/g, Al = /;\s*$/, Ul = {}, $l = {}, Fv = !1, ed = !1, td = function(e) {
        return e.replace(Pu, function(t, a) {
          return a.toUpperCase();
        });
      }, nd = function(e) {
        Ul.hasOwnProperty(e) && Ul[e] || (Ul[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          td(e.replace($v, "ms-"))
        ));
      }, jv = function(e) {
        Ul.hasOwnProperty(e) && Ul[e] || (Ul[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Pv = function(e, t) {
        $l.hasOwnProperty(t) && $l[t] || ($l[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Al, "")));
      }, Hv = function(e, t) {
        Fv || (Fv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Uy = function(e, t) {
        ed || (ed = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Av = function(e, t) {
        e.indexOf("-") > -1 ? nd(e) : Uv.test(e) ? jv(e) : Al.test(t) && Pv(e, t), typeof t == "number" && (isNaN(t) ? Hv(e, t) : isFinite(t) || Uy(e, t));
      };
    }
    var $y = Av;
    function Fy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ay(i)) + ":", t += ec(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Vv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || $y(i, t[i]);
          var s = ec(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function jy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sa(e) {
      var t = {};
      for (var a in e)
        for (var i = Ov[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Hu(e, t) {
      {
        if (!t)
          return;
        var a = Sa(e), i = Sa(t), l = {};
        for (var s in a) {
          var f = a[s], v = i[s];
          if (v && f !== v) {
            var g = f + "," + v;
            if (l[g])
              continue;
            l[g] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", jy(e[f]) ? "Removing" : "Updating", f, v);
          }
        }
      }
    }
    var Bv = {
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
    }, Iv = pt({
      menuitem: !0
    }, Bv), Yv = "__html";
    function tc(e, t) {
      if (t) {
        if (Iv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Yv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Si(e, t) {
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
    var nc = {
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
    }, Gv = {
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
    }, Ia = {}, rd = new RegExp("^(aria)-[" + Fe + "]*$"), Vu = new RegExp("^(aria)[A-Z][" + Fe + "]*$");
    function ad(e, t) {
      {
        if (mt.call(Ia, t) && Ia[t])
          return !0;
        if (Vu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Gv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ia[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ia[t] = !0, !0;
        }
        if (rd.test(t)) {
          var l = t.toLowerCase(), s = Gv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Ia[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ia[t] = !0, !0;
        }
      }
      return !0;
    }
    function Qv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = ad(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function rc(e, t) {
      Si(e, t) || Qv(e, t);
    }
    var Uo = !1;
    function id(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Uo && (Uo = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var od = function() {
    };
    {
      var In = {}, ld = /^on./, Wv = /^on[^A-Z]/, Kv = new RegExp("^(aria)-[" + Fe + "]*$"), qv = new RegExp("^(aria)[A-Z][" + Fe + "]*$");
      od = function(e, t, a, i) {
        if (mt.call(In, t) && In[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), In[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = f.hasOwnProperty(l) ? f[l] : null;
          if (v != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, v), In[t] = !0, !0;
          if (ld.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), In[t] = !0, !0;
        } else if (ld.test(t))
          return Wv.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), In[t] = !0, !0;
        if (Kv.test(t) || qv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), In[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), In[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), In[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), In[t] = !0, !0;
        var g = dr(t), E = g !== null && g.type === va;
        if (nc.hasOwnProperty(l)) {
          var w = nc[l];
          if (w !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, w), In[t] = !0, !0;
        } else if (!E && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), In[t] = !0, !0;
        return typeof a == "boolean" && fr(t, a, g, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), In[t] = !0, !0) : E ? !0 : fr(t, a, g, !1) ? (In[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Jt && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), In[t] = !0), !0);
      };
    }
    var Xv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = od(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Zv(e, t, a) {
      Si(e, t) || Xv(e, t, a);
    }
    var Ci = 1, Bu = 2, $o = 4, Py = Ci | Bu | $o, Iu = null;
    function Yu(e) {
      Iu !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Iu = e;
    }
    function Hy() {
      Iu === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Iu = null;
    }
    function Jv(e) {
      return e === Iu;
    }
    function ac(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === gi ? t.parentNode : t;
    }
    var Bt = null, Zi = null, Ei = null;
    function Fl(e) {
      var t = cu(e);
      if (t) {
        if (typeof Bt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Jh(a);
          Bt(t.stateNode, t.type, i);
        }
      }
    }
    function eh(e) {
      Bt = e;
    }
    function ic(e) {
      Zi ? Ei ? Ei.push(e) : Ei = [e] : Zi = e;
    }
    function Gu() {
      return Zi !== null || Ei !== null;
    }
    function Qu() {
      if (Zi) {
        var e = Zi, t = Ei;
        if (Zi = null, Ei = null, Fl(e), t)
          for (var a = 0; a < t.length; a++)
            Fl(t[a]);
      }
    }
    var Fo = function(e, t) {
      return e(t);
    }, ud = function() {
    }, sd = !1;
    function Vy() {
      var e = Gu();
      e && (ud(), Qu());
    }
    function cd(e, t, a) {
      if (sd)
        return e(t, a);
      sd = !0;
      try {
        return Fo(e, t, a);
      } finally {
        sd = !1, Vy();
      }
    }
    function oc(e, t, a) {
      Fo = e, ud = a;
    }
    function lc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function fd(e, t, a) {
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
          return !!(a.disabled && lc(t));
        default:
          return !1;
      }
    }
    function jo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Jh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (fd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Wu = !1;
    if (qe)
      try {
        var Po = {};
        Object.defineProperty(Po, "passive", {
          get: function() {
            Wu = !0;
          }
        }), window.addEventListener("test", Po, Po), window.removeEventListener("test", Po, Po);
      } catch {
        Wu = !1;
      }
    function th(e, t, a, i, l, s, f, v, g) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (w) {
        this.onError(w);
      }
    }
    var dd = th;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      dd = function(t, a, i, l, s, f, v, g, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), z = !1, O = !0, I = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          pd.removeEventListener(Z, He, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = I);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function He() {
          z = !0, X(), a.apply(i, we), O = !1;
        }
        var Ae, Ct = !1, ht = !1;
        function H(V) {
          if (Ae = V.error, Ct = !0, Ae === null && V.colno === 0 && V.lineno === 0 && (ht = !0), V.defaultPrevented && Ae != null && typeof Ae == "object")
            try {
              Ae._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), pd.addEventListener(Z, He, !1), w.initEvent(Z, !1, !1), pd.dispatchEvent(w), Y && Object.defineProperty(window, "event", Y), z && O && (Ct ? ht && (Ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ae)), window.removeEventListener("error", H), !z)
          return X(), th.apply(this, arguments);
      };
    }
    var By = dd, Ji = !1, Ya = null, Ku = !1, eo = null, Ja = {
      onError: function(e) {
        Ji = !0, Ya = e;
      }
    };
    function Ho(e, t, a, i, l, s, f, v, g) {
      Ji = !1, Ya = null, By.apply(Ja, arguments);
    }
    function bi(e, t, a, i, l, s, f, v, g) {
      if (Ho.apply(this, arguments), Ji) {
        var E = hd();
        Ku || (Ku = !0, eo = E);
      }
    }
    function vd() {
      if (Ku) {
        var e = eo;
        throw Ku = !1, eo = null, e;
      }
    }
    function Iy() {
      return Ji;
    }
    function hd() {
      if (Ji) {
        var e = Ya;
        return Ji = !1, Ya = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ca(e) {
      return e._reactInternals;
    }
    function qu(e) {
      return e._reactInternals !== void 0;
    }
    function jl(e, t) {
      e._reactInternals = t;
    }
    var Pe = (
      /*                      */
      0
    ), to = (
      /*                */
      1
    ), Wt = (
      /*                    */
      2
    ), at = (
      /*                       */
      4
    ), Nt = (
      /*                */
      16
    ), Mt = (
      /*                 */
      32
    ), ei = (
      /*                     */
      64
    ), Xe = (
      /*                   */
      128
    ), mn = (
      /*            */
      256
    ), jr = (
      /*                          */
      512
    ), Ea = (
      /*                     */
      1024
    ), nn = (
      /*                      */
      2048
    ), ba = (
      /*                    */
      4096
    ), no = (
      /*                   */
      8192
    ), Xu = (
      /*             */
      16384
    ), uc = nn | at | ei | jr | Ea | Xu, nh = (
      /*               */
      32767
    ), ra = (
      /*                   */
      32768
    ), Yn = (
      /*                */
      65536
    ), Zu = (
      /* */
      131072
    ), md = (
      /*                       */
      1048576
    ), yd = (
      /*                    */
      2097152
    ), Pr = (
      /*                 */
      4194304
    ), ro = (
      /*                */
      8388608
    ), Hr = (
      /*               */
      16777216
    ), Vo = (
      /*              */
      33554432
    ), Pl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      at | Ea | 0
    ), Vr = Wt | at | Nt | Mt | jr | ba | no, vr = at | ei | jr | no, xa = nn | Nt, Xn = Pr | ro | yd, xi = m.ReactCurrentOwner;
    function aa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Wt | ba)) !== Pe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === _ ? a : null;
    }
    function gd(e) {
      if (e.tag === te) {
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
    function sc(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function Sd(e) {
      return aa(e) === e;
    }
    function ia(e) {
      {
        var t = xi.current;
        if (t !== null && t.tag === R) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ca(e);
      return l ? aa(l) === l : !1;
    }
    function Br(e) {
      if (aa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Kt(e) {
      var t = e.alternate;
      if (!t) {
        var a = aa(e);
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
          var v = s.return;
          if (v !== null) {
            i = l = v;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return Br(s), e;
            if (g === l)
              return Br(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var E = !1, w = s.child; w; ) {
            if (w === i) {
              E = !0, i = s, l = f;
              break;
            }
            if (w === l) {
              E = !0, l = s, i = f;
              break;
            }
            w = w.sibling;
          }
          if (!E) {
            for (w = f.child; w; ) {
              if (w === i) {
                E = !0, i = f, l = s;
                break;
              }
              if (w === l) {
                E = !0, l = f, i = s;
                break;
              }
              w = w.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== _)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function wa(e) {
      var t = Kt(e);
      return t !== null ? Cd(t) : null;
    }
    function Cd(e) {
      if (e.tag === F || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Cd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function rh(e) {
      var t = Kt(e);
      return t !== null ? cc(t) : null;
    }
    function cc(e) {
      if (e.tag === F || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== U) {
          var a = cc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var fc = y.unstable_scheduleCallback, ah = y.unstable_cancelCallback, dc = y.unstable_shouldYield, ih = y.unstable_requestPaint, ln = y.unstable_now, Ed = y.unstable_getCurrentPriorityLevel, pc = y.unstable_ImmediatePriority, oa = y.unstable_UserBlockingPriority, ti = y.unstable_NormalPriority, vc = y.unstable_LowPriority, ao = y.unstable_IdlePriority, bd = y.unstable_yieldValue, xd = y.unstable_setDisableYieldValue, io = null, Gn = null, he = null, wn = !1, Zn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function wd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ur && (e = pt({}, e, {
          getLaneLabelMap: lo,
          injectProfilingHooks: Ti
        })), io = t.inject(e), Gn = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function oh(e, t) {
      if (Gn && typeof Gn.onScheduleFiberRoot == "function")
        try {
          Gn.onScheduleFiberRoot(io, e, t);
        } catch (a) {
          wn || (wn = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function wi(e, t) {
      if (Gn && typeof Gn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Xe) === Xe;
          if (xt) {
            var i;
            switch (t) {
              case hr:
                i = pc;
                break;
              case Jn:
                i = oa;
                break;
              case ki:
                i = ti;
                break;
              case ls:
                i = ao;
                break;
              default:
                i = ti;
                break;
            }
            Gn.onCommitFiberRoot(io, e, i, a);
          }
        } catch (l) {
          wn || (wn = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function oo(e) {
      if (Gn && typeof Gn.onPostCommitFiberRoot == "function")
        try {
          Gn.onPostCommitFiberRoot(io, e);
        } catch (t) {
          wn || (wn = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Td(e) {
      if (Gn && typeof Gn.onCommitFiberUnmount == "function")
        try {
          Gn.onCommitFiberUnmount(io, e);
        } catch (t) {
          wn || (wn = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof bd == "function" && (xd(e), x(e)), Gn && typeof Gn.setStrictMode == "function")
        try {
          Gn.setStrictMode(io, e);
        } catch (t) {
          wn || (wn = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Ti(e) {
      he = e;
    }
    function lo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < qt; a++) {
          var i = Yy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function hc(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function Rd() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function uo(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function Bo() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function lh(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function kd() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function mc(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function uh() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function sh(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function ch() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function yc(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function Hl() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function gc(e, t, a) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, a);
    }
    function fh(e, t, a) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, a);
    }
    function dh(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function Vl() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function ph(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Ju() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function Ga(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function es() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Bl() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Io(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Dd(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function so(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var Ie = (
      /*                         */
      0
    ), st = (
      /*                 */
      1
    ), Ge = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), Ta = (
      /*              */
      16
    ), Sc = Math.clz32 ? Math.clz32 : Yo, Cc = Math.log, _d = Math.LN2;
    function Yo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Cc(t) / _d | 0) | 0;
    }
    var qt = 31, J = (
      /*                        */
      0
    ), gt = (
      /*                          */
      0
    ), Qe = (
      /*                        */
      1
    ), ni = (
      /*    */
      2
    ), la = (
      /*             */
      4
    ), Go = (
      /*            */
      8
    ), Xt = (
      /*                     */
      16
    ), Qo = (
      /*                */
      32
    ), co = (
      /*                       */
      4194240
    ), Wo = (
      /*                        */
      64
    ), Ra = (
      /*                        */
      128
    ), Ir = (
      /*                        */
      256
    ), Ko = (
      /*                        */
      512
    ), ts = (
      /*                        */
      1024
    ), ns = (
      /*                        */
      2048
    ), Ec = (
      /*                        */
      4096
    ), bc = (
      /*                        */
      8192
    ), xc = (
      /*                        */
      16384
    ), wc = (
      /*                       */
      32768
    ), Tc = (
      /*                       */
      65536
    ), Rc = (
      /*                       */
      131072
    ), kc = (
      /*                       */
      262144
    ), Dc = (
      /*                       */
      524288
    ), qo = (
      /*                       */
      1048576
    ), _c = (
      /*                       */
      2097152
    ), Xo = (
      /*                            */
      130023424
    ), Ri = (
      /*                             */
      4194304
    ), Nc = (
      /*                             */
      8388608
    ), rs = (
      /*                             */
      16777216
    ), Mc = (
      /*                             */
      33554432
    ), Oc = (
      /*                             */
      67108864
    ), Nd = Ri, Il = (
      /*          */
      134217728
    ), Lc = (
      /*                          */
      268435455
    ), Yl = (
      /*               */
      268435456
    ), fo = (
      /*                        */
      536870912
    ), Yr = (
      /*                   */
      1073741824
    );
    function Yy(e) {
      {
        if (e & Qe)
          return "Sync";
        if (e & ni)
          return "InputContinuousHydration";
        if (e & la)
          return "InputContinuous";
        if (e & Go)
          return "DefaultHydration";
        if (e & Xt)
          return "Default";
        if (e & Qo)
          return "TransitionHydration";
        if (e & co)
          return "Transition";
        if (e & Xo)
          return "Retry";
        if (e & Il)
          return "SelectiveHydration";
        if (e & Yl)
          return "IdleHydration";
        if (e & fo)
          return "Idle";
        if (e & Yr)
          return "Offscreen";
      }
    }
    var It = -1, zc = Wo, Ac = Ri;
    function Gl(e) {
      switch (Nn(e)) {
        case Qe:
          return Qe;
        case ni:
          return ni;
        case la:
          return la;
        case Go:
          return Go;
        case Xt:
          return Xt;
        case Qo:
          return Qo;
        case Wo:
        case Ra:
        case Ir:
        case Ko:
        case ts:
        case ns:
        case Ec:
        case bc:
        case xc:
        case wc:
        case Tc:
        case Rc:
        case kc:
        case Dc:
        case qo:
        case _c:
          return e & co;
        case Ri:
        case Nc:
        case rs:
        case Mc:
        case Oc:
          return e & Xo;
        case Il:
          return Il;
        case Yl:
          return Yl;
        case fo:
          return fo;
        case Yr:
          return Yr;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function as(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, l = e.suspendedLanes, s = e.pingedLanes, f = a & Lc;
      if (f !== J) {
        var v = f & ~l;
        if (v !== J)
          i = Gl(v);
        else {
          var g = f & s;
          g !== J && (i = Gl(g));
        }
      } else {
        var E = a & ~l;
        E !== J ? i = Gl(E) : s !== J && (i = Gl(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === J) {
        var w = Nn(i), z = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === Xt && (z & co) !== J
        )
          return t;
      }
      (i & la) !== J && (i |= a & Xt);
      var O = e.entangledLanes;
      if (O !== J)
        for (var I = e.entanglements, Y = i & O; Y > 0; ) {
          var X = po(Y), we = 1 << X;
          i |= I[X], Y &= ~we;
        }
      return i;
    }
    function vh(e, t) {
      for (var a = e.eventTimes, i = It; t > 0; ) {
        var l = po(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Uc(e, t) {
      switch (e) {
        case Qe:
        case ni:
        case la:
          return t + 250;
        case Go:
        case Xt:
        case Qo:
        case Wo:
        case Ra:
        case Ir:
        case Ko:
        case ts:
        case ns:
        case Ec:
        case bc:
        case xc:
        case wc:
        case Tc:
        case Rc:
        case kc:
        case Dc:
        case qo:
        case _c:
          return t + 5e3;
        case Ri:
        case Nc:
        case rs:
        case Mc:
        case Oc:
          return It;
        case Il:
        case Yl:
        case fo:
        case Yr:
          return It;
        default:
          return h("Should have found matching lanes. This is a bug in React."), It;
      }
    }
    function Gy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = po(f), g = 1 << v, E = s[v];
        E === It ? ((g & i) === J || (g & l) !== J) && (s[v] = Uc(g, t)) : E <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function Qy(e) {
      return Gl(e.pendingLanes);
    }
    function Md(e) {
      var t = e.pendingLanes & ~Yr;
      return t !== J ? t : t & Yr ? Yr : J;
    }
    function Ql(e) {
      return (e & Qe) !== J;
    }
    function is(e) {
      return (e & Lc) !== J;
    }
    function $c(e) {
      return (e & Xo) === e;
    }
    function Wy(e) {
      var t = Qe | la | Xt;
      return (e & t) === J;
    }
    function hh(e) {
      return (e & co) === e;
    }
    function os(e, t) {
      var a = ni | la | Go | Xt;
      return (t & a) !== J;
    }
    function mh(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function Od(e) {
      return (e & co) !== J;
    }
    function Ld() {
      var e = zc;
      return zc <<= 1, (zc & co) === J && (zc = Wo), e;
    }
    function Ky() {
      var e = Ac;
      return Ac <<= 1, (Ac & Xo) === J && (Ac = Ri), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function Un(e) {
      return Nn(e);
    }
    function po(e) {
      return 31 - Sc(e);
    }
    function Fc(e) {
      return po(e);
    }
    function Gr(e, t) {
      return (e & t) !== J;
    }
    function Zo(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function Wl(e, t) {
      return e & ~t;
    }
    function zd(e, t) {
      return e & t;
    }
    function yh(e) {
      return e;
    }
    function gh(e, t) {
      return e !== gt && e < t ? e : t;
    }
    function jc(e) {
      for (var t = [], a = 0; a < qt; a++)
        t.push(e);
      return t;
    }
    function Jo(e, t, a) {
      e.pendingLanes |= t, t !== fo && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, l = Fc(t);
      i[l] = a;
    }
    function Ad(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = po(i), s = 1 << l;
        a[l] = It, i &= ~s;
      }
    }
    function Ud(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function $d(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = po(f), g = 1 << v;
        i[v] = J, l[v] = It, s[v] = It, f &= ~g;
      }
    }
    function Kl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = po(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function qy(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case la:
          i = ni;
          break;
        case Xt:
          i = Go;
          break;
        case Wo:
        case Ra:
        case Ir:
        case Ko:
        case ts:
        case ns:
        case Ec:
        case bc:
        case xc:
        case wc:
        case Tc:
        case Rc:
        case kc:
        case Dc:
        case qo:
        case _c:
        case Ri:
        case Nc:
        case rs:
        case Mc:
        case Oc:
          i = Qo;
          break;
        case fo:
          i = Yl;
          break;
        default:
          i = gt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== gt ? gt : i;
    }
    function Fd(e, t, a) {
      if (Zn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Fc(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Pc(e, t) {
      if (Zn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Fc(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(v) {
            var g = v.alternate;
            (g === null || !i.has(g)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function jd(e, t) {
      return null;
    }
    var hr = Qe, Jn = la, ki = Xt, ls = fo, el = gt;
    function ka() {
      return el;
    }
    function $n(e) {
      el = e;
    }
    function us(e, t) {
      var a = el;
      try {
        return el = e, t();
      } finally {
        el = a;
      }
    }
    function mr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Xy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Pd(e, t) {
      return e !== 0 && e < t;
    }
    function ss(e) {
      var t = Nn(e);
      return Pd(hr, t) ? Pd(Jn, t) ? is(t) ? ki : ls : Jn : hr;
    }
    function Fn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Sh;
    function ke(e) {
      Sh = e;
    }
    function ql(e) {
      Sh(e);
    }
    var cs;
    function Ch(e) {
      cs = e;
    }
    var Eh;
    function fs(e) {
      Eh = e;
    }
    var ds;
    function Hd(e) {
      ds = e;
    }
    var Vd;
    function bh(e) {
      Vd = e;
    }
    var Hc = !1, Xl = [], ri = null, rn = null, Qn = null, Da = /* @__PURE__ */ new Map(), Zl = /* @__PURE__ */ new Map(), Di = [], Qa = [
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
    function xh(e) {
      return Qa.indexOf(e) > -1;
    }
    function ai(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function wh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ri = null;
          break;
        case "dragenter":
        case "dragleave":
          rn = null;
          break;
        case "mouseover":
        case "mouseout":
          Qn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Da.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Zl.delete(i);
          break;
        }
      }
    }
    function Jl(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, l, s);
        if (t !== null) {
          var v = cu(t);
          v !== null && cs(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Th(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return ri = Jl(ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return rn = Jl(rn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = l;
          return Qn = Jl(Qn, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var g = l, E = g.pointerId;
          return Da.set(E, Jl(Da.get(E) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var w = l, z = w.pointerId;
          return Zl.set(z, Jl(Zl.get(z) || null, e, t, a, i, w)), !0;
        }
      }
      return !1;
    }
    function Bd(e) {
      var t = Es(e.target);
      if (t !== null) {
        var a = aa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === te) {
            var l = gd(a);
            if (l !== null) {
              e.blockedOn = l, Vd(e.priority, function() {
                Eh(a);
              });
              return;
            }
          } else if (i === _) {
            var s = a.stateNode;
            if (Fn(s)) {
              e.blockedOn = sc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Rh(e) {
      for (var t = ds(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Di.length && Pd(t, Di[i].priority); i++)
        ;
      Di.splice(i, 0, a), i === 0 && Bd(a);
    }
    function Vc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = tl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Yu(s), l.target.dispatchEvent(s), Hy();
        } else {
          var f = cu(i);
          return f !== null && cs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ps(e, t, a) {
      Vc(e) && a.delete(t);
    }
    function Id() {
      Hc = !1, ri !== null && Vc(ri) && (ri = null), rn !== null && Vc(rn) && (rn = null), Qn !== null && Vc(Qn) && (Qn = null), Da.forEach(ps), Zl.forEach(ps);
    }
    function yr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hc || (Hc = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Id)));
    }
    function vt(e) {
      if (Xl.length > 0) {
        yr(Xl[0], e);
        for (var t = 1; t < Xl.length; t++) {
          var a = Xl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ri !== null && yr(ri, e), rn !== null && yr(rn, e), Qn !== null && yr(Qn, e);
      var i = function(v) {
        return yr(v, e);
      };
      Da.forEach(i), Zl.forEach(i);
      for (var l = 0; l < Di.length; l++) {
        var s = Di[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Di.length > 0; ) {
        var f = Di[0];
        if (f.blockedOn !== null)
          break;
        Bd(f), f.blockedOn === null && Di.shift();
      }
    }
    var sn = m.ReactCurrentBatchConfig, yn = !0;
    function Wn(e) {
      yn = !!e;
    }
    function ua() {
      return yn;
    }
    function eu(e, t, a) {
      var i = Tr(t), l;
      switch (i) {
        case hr:
          l = jn;
          break;
        case Jn:
          l = vs;
          break;
        case ki:
        default:
          l = _i;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function jn(e, t, a, i) {
      var l = ka(), s = sn.transition;
      sn.transition = null;
      try {
        $n(hr), _i(e, t, a, i);
      } finally {
        $n(l), sn.transition = s;
      }
    }
    function vs(e, t, a, i) {
      var l = ka(), s = sn.transition;
      sn.transition = null;
      try {
        $n(Jn), _i(e, t, a, i);
      } finally {
        $n(l), sn.transition = s;
      }
    }
    function _i(e, t, a, i) {
      yn && Bc(e, t, a, i);
    }
    function Bc(e, t, a, i) {
      var l = tl(e, t, a, i);
      if (l === null) {
        yg(e, t, i, tu, a), wh(e, i);
        return;
      }
      if (Th(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (wh(e, i), t & $o && xh(e)) {
        for (; l !== null; ) {
          var s = cu(l);
          s !== null && ql(s);
          var f = tl(e, t, a, i);
          if (f === null && yg(e, t, i, tu, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      yg(e, t, i, null, a);
    }
    var tu = null;
    function tl(e, t, a, i) {
      tu = null;
      var l = ac(i), s = Es(l);
      if (s !== null) {
        var f = aa(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === te) {
            var g = gd(f);
            if (g !== null)
              return g;
            s = null;
          } else if (v === _) {
            var E = f.stateNode;
            if (Fn(E))
              return sc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return tu = s, null;
    }
    function Tr(e) {
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
          return hr;
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
          return Jn;
        case "message": {
          var t = Ed();
          switch (t) {
            case pc:
              return hr;
            case oa:
              return Jn;
            case ti:
            case vc:
              return ki;
            case ao:
              return ls;
            default:
              return ki;
          }
        }
        default:
          return ki;
      }
    }
    function Yd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function nu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ni(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ic(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var nl = null, ii = null, vo = null;
    function ho(e) {
      return nl = e, ii = Gc(), !0;
    }
    function Yc() {
      nl = null, ii = null, vo = null;
    }
    function ru() {
      if (vo)
        return vo;
      var e, t = ii, a = t.length, i, l = Gc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return vo = l.slice(e, v), vo;
    }
    function Gc() {
      return "value" in nl ? nl.value : nl.textContent;
    }
    function rl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function al() {
      return !0;
    }
    function gr() {
      return !1;
    }
    function Mn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var g = e[v];
            g ? this[v] = g(s) : this[v] = s[v];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = al : this.isDefaultPrevented = gr, this.isPropagationStopped = gr, this;
      }
      return pt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = al);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = al);
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
        isPersistent: al
      }), t;
    }
    var Sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Cr = Mn(Sr), au = pt({}, Sr, {
      view: 0,
      detail: 0
    }), Gd = Mn(au), hs, Qd, _a;
    function kh(e) {
      e !== _a && (_a && e.type === "mousemove" ? (hs = e.screenX - _a.screenX, Qd = e.screenY - _a.screenY) : (hs = 0, Qd = 0), _a = e);
    }
    var iu = pt({}, au, {
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
      getModifierState: Kc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (kh(e), hs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Qd;
      }
    }), mo = Mn(iu), Wd = pt({}, iu, {
      dataTransfer: 0
    }), il = Mn(Wd), Dh = pt({}, au, {
      relatedTarget: 0
    }), Qc = Mn(Dh), Kd = pt({}, Sr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wc = Mn(Kd), Zy = pt({}, Sr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Jy = Mn(Zy), _h = pt({}, Sr, {
      data: 0
    }), qd = Mn(_h), ol = qd, eg = {
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
    }, ou = {
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
    function Nh(e) {
      if (e.key) {
        var t = eg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = rl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ou[e.keyCode] || "Unidentified" : "";
    }
    var gn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function tg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = gn[e];
      return i ? !!a[i] : !1;
    }
    function Kc(e) {
      return tg;
    }
    var ng = pt({}, au, {
      key: Nh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? rl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), rg = Mn(ng), Mh = pt({}, iu, {
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
    }), Xd = Mn(Mh), ag = pt({}, au, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kc
    }), Na = Mn(ag), Zd = pt({}, Sr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ig = Mn(Zd), yo = pt({}, iu, {
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
    }), qc = Mn(yo), ll = [9, 13, 27, 32], ms = 229, ys = qe && "CompositionEvent" in window, ul = null;
    qe && "documentMode" in document && (ul = document.documentMode);
    var og = qe && "TextEvent" in window && !ul, Xc = qe && (!ys || ul && ul > 8 && ul <= 11), Oh = 32, Jd = String.fromCharCode(Oh);
    function Lh() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var gs = !1;
    function Zc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function zh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ep(e, t) {
      return e === "keydown" && t.keyCode === ms;
    }
    function Ah(e, t) {
      switch (e) {
        case "keyup":
          return ll.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ms;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function tp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Jc(e) {
      return e.locale === "ko";
    }
    var Mi = !1;
    function np(e, t, a, i, l) {
      var s, f;
      if (ys ? s = zh(t) : Mi ? Ah(t, i) && (s = "onCompositionEnd") : ep(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Xc && !Jc(i) && (!Mi && s === "onCompositionStart" ? Mi = ho(l) : s === "onCompositionEnd" && Mi && (f = ru()));
      var v = Ph(a, s);
      if (v.length > 0) {
        var g = new qd(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: v
        }), f)
          g.data = f;
        else {
          var E = tp(i);
          E !== null && (g.data = E);
        }
      }
    }
    function ef(e, t) {
      switch (e) {
        case "compositionend":
          return tp(t);
        case "keypress":
          var a = t.which;
          return a !== Oh ? null : (gs = !0, Jd);
        case "textInput":
          var i = t.data;
          return i === Jd && gs ? null : i;
        default:
          return null;
      }
    }
    function Uh(e, t) {
      if (Mi) {
        if (e === "compositionend" || !ys && Ah(e, t)) {
          var a = ru();
          return Yc(), Mi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Zc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Xc && !Jc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function lg(e, t, a, i, l) {
      var s;
      if (og ? s = ef(t, i) : s = Uh(t, i), !s)
        return null;
      var f = Ph(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new ol("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function tf(e, t, a, i, l, s, f) {
      np(e, t, a, i, l), lg(e, t, a, i, l);
    }
    var ug = {
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
    function lu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ug[e.type] : t === "textarea";
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
    function sg(e) {
      if (!qe)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function nf() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ic(i);
      var l = Ph(t, "onChange");
      if (l.length > 0) {
        var s = new Cr("onChange", "change", null, a, i);
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
      n(t, o, e, ac(e)), cd(p, t);
    }
    function p(e) {
      B1(e, 0);
    }
    function S(e) {
      var t = sf(e);
      if (bv(t))
        return e;
    }
    function k(e, t) {
      if (e === "change")
        return t;
    }
    var M = !1;
    qe && (M = sg("input") && (!document.documentMode || document.documentMode > 9));
    function Q(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", le);
    }
    function re() {
      r && (r.detachEvent("onpropertychange", le), r = null, o = null);
    }
    function le(e) {
      e.propertyName === "value" && S(o) && c(e);
    }
    function ne(e, t, a) {
      e === "focusin" ? (re(), Q(t, a)) : e === "focusout" && re();
    }
    function Ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(o);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Le(e, t) {
      if (e === "click")
        return S(t);
    }
    function Tn(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qi(e, "number", e.value);
    }
    function L(e, t, a, i, l, s, f) {
      var v = a ? sf(a) : window, g, E;
      if (u(v) ? g = k : lu(v) ? M ? g = Tn : (g = Ee, E = ne) : _e(v) && (g = Le), g) {
        var w = g(t, a);
        if (w) {
          n(e, w, i, l);
          return;
        }
      }
      E && E(t, v, a), t === "focusout" && P(v);
    }
    function B() {
      Re("onMouseEnter", ["mouseout", "mouseover"]), Re("onMouseLeave", ["mouseout", "mouseover"]), Re("onPointerEnter", ["pointerout", "pointerover"]), Re("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ce(e, t, a, i, l, s, f) {
      var v = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (v && !Jv(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (Es(E) || mp(E)))
          return;
      }
      if (!(!g && !v)) {
        var w;
        if (l.window === l)
          w = l;
        else {
          var z = l.ownerDocument;
          z ? w = z.defaultView || z.parentWindow : w = window;
        }
        var O, I;
        if (g) {
          var Y = i.relatedTarget || i.toElement;
          if (O = a, I = Y ? Es(Y) : null, I !== null) {
            var X = aa(I);
            (I !== X || I.tag !== F && I.tag !== $) && (I = null);
          }
        } else
          O = null, I = a;
        if (O !== I) {
          var we = mo, He = "onMouseLeave", Ae = "onMouseEnter", Ct = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Xd, He = "onPointerLeave", Ae = "onPointerEnter", Ct = "pointer");
          var ht = O == null ? w : sf(O), H = I == null ? w : sf(I), Z = new we(He, Ct + "leave", O, i, l);
          Z.target = ht, Z.relatedTarget = H;
          var V = null, ue = Es(l);
          if (ue === a) {
            var Te = new we(Ae, Ct + "enter", I, i, l);
            Te.target = H, Te.relatedTarget = ht, V = Te;
          }
          Hw(e, Z, V, O, I);
        }
      }
    }
    function ze(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ne = typeof Object.is == "function" ? Object.is : ze;
    function je(e, t) {
      if (Ne(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!mt.call(t, s) || !Ne(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Kn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function bt(e, t) {
      for (var a = Ze(e), i = 0, l = 0; a; ) {
        if (a.nodeType === gi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Ze(Kn(a));
      }
    }
    function go(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return cg(e, l, s, f, v);
    }
    function cg(e, t, a, i, l) {
      var s = 0, f = -1, v = -1, g = 0, E = 0, w = e, z = null;
      e:
        for (; ; ) {
          for (var O = null; w === t && (a === 0 || w.nodeType === gi) && (f = s + a), w === i && (l === 0 || w.nodeType === gi) && (v = s + l), w.nodeType === gi && (s += w.nodeValue.length), (O = w.firstChild) !== null; )
            z = w, w = O;
          for (; ; ) {
            if (w === e)
              break e;
            if (z === t && ++g === a && (f = s), z === i && ++E === l && (v = s), (O = w.nextSibling) !== null)
              break;
            w = z, z = w.parentNode;
          }
          w = O;
        }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function bw(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > v) {
          var g = v;
          v = f, f = g;
        }
        var E = bt(e, f), w = bt(e, v);
        if (E && w) {
          if (l.rangeCount === 1 && l.anchorNode === E.node && l.anchorOffset === E.offset && l.focusNode === w.node && l.focusOffset === w.offset)
            return;
          var z = a.createRange();
          z.setStart(E.node, E.offset), l.removeAllRanges(), f > v ? (l.addRange(z), l.extend(w.node, w.offset)) : (z.setEnd(w.node, w.offset), l.addRange(z));
        }
      }
    }
    function M1(e) {
      return e && e.nodeType === gi;
    }
    function O1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : M1(e) ? !1 : M1(t) ? O1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function xw(e) {
      return e && e.ownerDocument && O1(e.ownerDocument.documentElement, e);
    }
    function ww(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function L1() {
      for (var e = window, t = Ys(); t instanceof e.HTMLIFrameElement; ) {
        if (ww(t))
          e = t.contentWindow;
        else
          return t;
        t = Ys(e.document);
      }
      return t;
    }
    function fg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Tw() {
      var e = L1();
      return {
        focusedElem: e,
        selectionRange: fg(e) ? kw(e) : null
      };
    }
    function Rw(e) {
      var t = L1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && xw(a)) {
        i !== null && fg(a) && Dw(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Fr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var v = l[f];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function kw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = go(e), t || {
        start: 0,
        end: 0
      };
    }
    function Dw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : bw(e, t);
    }
    var _w = qe && "documentMode" in document && document.documentMode <= 11;
    function Nw() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var rf = null, dg = null, rp = null, pg = !1;
    function Mw(e) {
      if ("selectionStart" in e && fg(e))
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
    function Ow(e) {
      return e.window === e ? e.document : e.nodeType === Ba ? e : e.ownerDocument;
    }
    function z1(e, t, a) {
      var i = Ow(a);
      if (!(pg || rf == null || rf !== Ys(i))) {
        var l = Mw(rf);
        if (!rp || !je(rp, l)) {
          rp = l;
          var s = Ph(dg, "onSelect");
          if (s.length > 0) {
            var f = new Cr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = rf;
          }
        }
      }
    }
    function Lw(e, t, a, i, l, s, f) {
      var v = a ? sf(a) : window;
      switch (t) {
        case "focusin":
          (lu(v) || v.contentEditable === "true") && (rf = v, dg = a, rp = null);
          break;
        case "focusout":
          rf = null, dg = null, rp = null;
          break;
        case "mousedown":
          pg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pg = !1, z1(e, i, l);
          break;
        case "selectionchange":
          if (_w)
            break;
        case "keydown":
        case "keyup":
          z1(e, i, l);
      }
    }
    function $h(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var af = {
      animationend: $h("Animation", "AnimationEnd"),
      animationiteration: $h("Animation", "AnimationIteration"),
      animationstart: $h("Animation", "AnimationStart"),
      transitionend: $h("Transition", "TransitionEnd")
    }, vg = {}, A1 = {};
    qe && (A1 = document.createElement("div").style, "AnimationEvent" in window || (delete af.animationend.animation, delete af.animationiteration.animation, delete af.animationstart.animation), "TransitionEvent" in window || delete af.transitionend.transition);
    function Fh(e) {
      if (vg[e])
        return vg[e];
      if (!af[e])
        return e;
      var t = af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in A1)
          return vg[e] = t[a];
      return e;
    }
    var U1 = Fh("animationend"), $1 = Fh("animationiteration"), F1 = Fh("animationstart"), j1 = Fh("transitionend"), P1 = /* @__PURE__ */ new Map(), H1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function uu(e, t) {
      P1.set(e, t), dt(t, [e]);
    }
    function zw() {
      for (var e = 0; e < H1.length; e++) {
        var t = H1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        uu(a, "on" + i);
      }
      uu(U1, "onAnimationEnd"), uu($1, "onAnimationIteration"), uu(F1, "onAnimationStart"), uu("dblclick", "onDoubleClick"), uu("focusin", "onFocus"), uu("focusout", "onBlur"), uu(j1, "onTransitionEnd");
    }
    function Aw(e, t, a, i, l, s, f) {
      var v = P1.get(t);
      if (v !== void 0) {
        var g = Cr, E = t;
        switch (t) {
          case "keypress":
            if (rl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = rg;
            break;
          case "focusin":
            E = "focus", g = Qc;
            break;
          case "focusout":
            E = "blur", g = Qc;
            break;
          case "beforeblur":
          case "afterblur":
            g = Qc;
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
            g = mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = il;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Na;
            break;
          case U1:
          case $1:
          case F1:
            g = Wc;
            break;
          case j1:
            g = ig;
            break;
          case "scroll":
            g = Gd;
            break;
          case "wheel":
            g = qc;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Jy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Xd;
            break;
        }
        var w = (s & $o) !== 0;
        {
          var z = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = jw(a, v, i.type, w, z);
          if (O.length > 0) {
            var I = new g(v, E, null, i, l);
            e.push({
              event: I,
              listeners: O
            });
          }
        }
      }
    }
    zw(), B(), nf(), Nw(), Lh();
    function Uw(e, t, a, i, l, s, f) {
      Aw(e, t, a, i, l, s);
      var v = (s & Py) === 0;
      v && (ce(e, t, a, i, l), L(e, t, a, i, l), Lw(e, t, a, i, l), tf(e, t, a, i, l));
    }
    var ap = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], hg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ap));
    function V1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, bi(i, t, void 0, e), e.currentTarget = null;
    }
    function $w(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, v = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          V1(e, g, v), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var w = t[E], z = w.instance, O = w.currentTarget, I = w.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          V1(e, I, O), i = z;
        }
    }
    function B1(e, t) {
      for (var a = (t & $o) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        $w(s, f, a);
      }
      vd();
    }
    function Fw(e, t, a, i, l) {
      var s = ac(a), f = [];
      Uw(f, e, i, a, s, t), B1(f, t);
    }
    function cn(e, t) {
      hg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = vR(t), l = Vw(e, a);
      i.has(l) || (I1(t, e, Bu, a), i.add(l));
    }
    function mg(e, t, a) {
      hg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= $o), I1(a, e, i, t);
    }
    var jh = "_reactListening" + Math.random().toString(36).slice(2);
    function ip(e) {
      if (!e[jh]) {
        e[jh] = !0, Dt.forEach(function(a) {
          a !== "selectionchange" && (hg.has(a) || mg(a, !1, e), mg(a, !0, e));
        });
        var t = e.nodeType === Ba ? e : e.ownerDocument;
        t !== null && (t[jh] || (t[jh] = !0, mg("selectionchange", !1, t)));
      }
    }
    function I1(e, t, a, i, l) {
      var s = eu(e, t, a), f = void 0;
      Wu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ni(e, t, s, f) : nu(e, t, s) : f !== void 0 ? Ic(e, t, s, f) : Yd(e, t, s);
    }
    function Y1(e, t) {
      return e === t || e.nodeType === _n && e.parentNode === t;
    }
    function yg(e, t, a, i, l) {
      var s = i;
      if (!(t & Ci) && !(t & Bu)) {
        var f = l;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var g = v.tag;
              if (g === _ || g === U) {
                var E = v.stateNode.containerInfo;
                if (Y1(E, f))
                  break;
                if (g === U)
                  for (var w = v.return; w !== null; ) {
                    var z = w.tag;
                    if (z === _ || z === U) {
                      var O = w.stateNode.containerInfo;
                      if (Y1(O, f))
                        return;
                    }
                    w = w.return;
                  }
                for (; E !== null; ) {
                  var I = Es(E);
                  if (I === null)
                    return;
                  var Y = I.tag;
                  if (Y === F || Y === $) {
                    v = s = I;
                    continue e;
                  }
                  E = E.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      cd(function() {
        return Fw(e, t, a, s);
      });
    }
    function op(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function jw(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, g = [], E = e, w = null; E !== null; ) {
        var z = E, O = z.stateNode, I = z.tag;
        if (I === F && O !== null && (w = O, v !== null)) {
          var Y = jo(E, v);
          Y != null && g.push(op(E, Y, w));
        }
        if (l)
          break;
        E = E.return;
      }
      return g;
    }
    function Ph(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, v = s.tag;
        if (v === F && f !== null) {
          var g = f, E = jo(l, a);
          E != null && i.unshift(op(l, E, g));
          var w = jo(l, t);
          w != null && i.push(op(l, w, g));
        }
        l = l.return;
      }
      return i;
    }
    function of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function Pw(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = of(s))
        l++;
      for (var f = 0, v = i; v; v = of(v))
        f++;
      for (; l - f > 0; )
        a = of(a), l--;
      for (; f - l > 0; )
        i = of(i), f--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = of(a), i = of(i);
      }
      return null;
    }
    function G1(e, t, a, i, l) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var g = v, E = g.alternate, w = g.stateNode, z = g.tag;
        if (E !== null && E === i)
          break;
        if (z === F && w !== null) {
          var O = w;
          if (l) {
            var I = jo(v, s);
            I != null && f.unshift(op(v, I, O));
          } else if (!l) {
            var Y = jo(v, s);
            Y != null && f.push(op(v, Y, O));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Hw(e, t, a, i, l) {
      var s = i && l ? Pw(i, l) : null;
      i !== null && G1(e, t, i, s, !1), l !== null && a !== null && G1(e, a, l, s, !0);
    }
    function Vw(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ma = !1, lp = "dangerouslySetInnerHTML", Hh = "suppressContentEditableWarning", su = "suppressHydrationWarning", Q1 = "autoFocus", Ss = "children", Cs = "style", Vh = "__html", gg, Bh, up, W1, Ih, K1, q1;
    gg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Bh = function(e, t) {
      rc(e, t), id(e, t), Zv(e, t, {
        registrationNameDependencies: En,
        possibleRegistrationNames: vn
      });
    }, K1 = qe && !document.documentMode, up = function(e, t, a) {
      if (!Ma) {
        var i = Yh(a), l = Yh(t);
        l !== i && (Ma = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, W1 = function(e) {
      if (!Ma) {
        Ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Ih = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q1 = function(e, t) {
      var a = e.namespaceURI === yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Bw = /\r\n?/g, Iw = /\u0000|\uFFFD/g;
    function Yh(e) {
      $r(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Bw, `
`).replace(Iw, "");
    }
    function Gh(e, t, a, i) {
      var l = Yh(t), s = Yh(e);
      if (s !== l && (i && (Ma || (Ma = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && At))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function X1(e) {
      return e.nodeType === Ba ? e : e.ownerDocument;
    }
    function Yw() {
    }
    function Qh(e) {
      e.onclick = Yw;
    }
    function Gw(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Cs)
            f && Object.freeze(f), Vv(t, f);
          else if (s === lp) {
            var v = f ? f[Vh] : void 0;
            v != null && Mv(t, v);
          } else if (s === Ss)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && Js(t, f);
            } else
              typeof f == "number" && Js(t, "" + f);
          else
            s === Hh || s === su || s === Q1 || (En.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ih(s, f), s === "onScroll" && cn("scroll", t)) : f != null && Za(t, s, f, l));
        }
    }
    function Qw(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Cs ? Vv(e, f) : s === lp ? Mv(e, f) : s === Ss ? Js(e, f) : Za(e, s, f, i);
      }
    }
    function Ww(e, t, a, i) {
      var l, s = X1(a), f, v = i;
      if (v === yi && (v = Xs(e)), v === yi) {
        if (l = Si(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var E = g.firstChild;
          f = g.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var w = f;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        f = s.createElementNS(v, e);
      return v === yi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !mt.call(gg, e) && (gg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Kw(e, t) {
      return X1(t).createTextNode(e);
    }
    function qw(e, t, a, i) {
      var l = Si(t, a);
      Bh(t, a);
      var s;
      switch (t) {
        case "dialog":
          cn("cancel", e), cn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          cn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ap.length; f++)
            cn(ap[f], e);
          s = a;
          break;
        case "source":
          cn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          cn("error", e), cn("load", e), s = a;
          break;
        case "details":
          cn("toggle", e), s = a;
          break;
        case "input":
          $u(e, a), s = Uu(e, a), cn("invalid", e);
          break;
        case "option":
          Ks(e, a), s = a;
          break;
        case "select":
          kv(e, a), s = Wf(e, a), cn("invalid", e);
          break;
        case "textarea":
          Dv(e, a), s = qf(e, a), cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (tc(t, s), Gw(t, e, i, s, l), t) {
        case "input":
          zo(e), Fu(e, a, !1);
          break;
        case "textarea":
          zo(e), Nv(e);
          break;
        case "option":
          Qf(e, a);
          break;
        case "select":
          _y(e, a);
          break;
        default:
          typeof s.onClick == "function" && Qh(e);
          break;
      }
    }
    function Xw(e, t, a, i, l) {
      Bh(t, i);
      var s = null, f, v;
      switch (t) {
        case "input":
          f = Uu(e, a), v = Uu(e, i), s = [];
          break;
        case "select":
          f = Wf(e, a), v = Wf(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), v = qf(e, i), s = [];
          break;
        default:
          f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && Qh(e);
          break;
      }
      tc(t, v);
      var g, E, w = null;
      for (g in f)
        if (!(v.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Cs) {
            var z = f[g];
            for (E in z)
              z.hasOwnProperty(E) && (w || (w = {}), w[E] = "");
          } else
            g === lp || g === Ss || g === Hh || g === su || g === Q1 || (En.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in v) {
        var O = v[g], I = f != null ? f[g] : void 0;
        if (!(!v.hasOwnProperty(g) || O === I || O == null && I == null))
          if (g === Cs)
            if (O && Object.freeze(O), I) {
              for (E in I)
                I.hasOwnProperty(E) && (!O || !O.hasOwnProperty(E)) && (w || (w = {}), w[E] = "");
              for (E in O)
                O.hasOwnProperty(E) && I[E] !== O[E] && (w || (w = {}), w[E] = O[E]);
            } else
              w || (s || (s = []), s.push(g, w)), w = O;
          else if (g === lp) {
            var Y = O ? O[Vh] : void 0, X = I ? I[Vh] : void 0;
            Y != null && X !== Y && (s = s || []).push(g, Y);
          } else
            g === Ss ? (typeof O == "string" || typeof O == "number") && (s = s || []).push(g, "" + O) : g === Hh || g === su || (En.hasOwnProperty(g) ? (O != null && (typeof O != "function" && Ih(g, O), g === "onScroll" && cn("scroll", e)), !s && I !== O && (s = [])) : (s = s || []).push(g, O));
      }
      return w && (Hu(w, v[Cs]), (s = s || []).push(Cs, w)), s;
    }
    function Zw(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Gf(e, l);
      var s = Si(a, i), f = Si(a, l);
      switch (Qw(e, t, s, f), a) {
        case "input":
          Ml(e, l);
          break;
        case "textarea":
          _v(e, l);
          break;
        case "select":
          Ny(e, l);
          break;
      }
    }
    function Jw(e) {
      {
        var t = e.toLowerCase();
        return nc.hasOwnProperty(t) && nc[t] || null;
      }
    }
    function eT(e, t, a, i, l, s, f) {
      var v, g;
      switch (v = Si(t, a), Bh(t, a), t) {
        case "dialog":
          cn("cancel", e), cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          cn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < ap.length; E++)
            cn(ap[E], e);
          break;
        case "source":
          cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          cn("error", e), cn("load", e);
          break;
        case "details":
          cn("toggle", e);
          break;
        case "input":
          $u(e, a), cn("invalid", e);
          break;
        case "option":
          Ks(e, a);
          break;
        case "select":
          kv(e, a), cn("invalid", e);
          break;
        case "textarea":
          Dv(e, a), cn("invalid", e);
          break;
      }
      tc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var w = e.attributes, z = 0; z < w.length; z++) {
          var O = w[z].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(w[z].name);
          }
        }
      }
      var I = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var X = a[Y];
          if (Y === Ss)
            typeof X == "string" ? e.textContent !== X && (a[su] !== !0 && Gh(e.textContent, X, s, f), I = [Ss, X]) : typeof X == "number" && e.textContent !== "" + X && (a[su] !== !0 && Gh(e.textContent, X, s, f), I = [Ss, "" + X]);
          else if (En.hasOwnProperty(Y))
            X != null && (typeof X != "function" && Ih(Y, X), Y === "onScroll" && cn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var we = void 0, He = v && Pt ? null : dr(Y);
            if (a[su] !== !0) {
              if (!(Y === Hh || Y === su || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === lp) {
                  var Ae = e.innerHTML, Ct = X ? X[Vh] : void 0;
                  if (Ct != null) {
                    var ht = q1(e, Ct);
                    ht !== Ae && up(Y, Ae, ht);
                  }
                } else if (Y === Cs) {
                  if (g.delete(Y), K1) {
                    var H = Fy(X);
                    we = e.getAttribute("style"), H !== we && up(Y, we, H);
                  }
                } else if (v && !Pt)
                  g.delete(Y.toLowerCase()), we = kl(e, Y, X), X !== we && up(Y, we, X);
                else if (!on(Y, He, v) && !Lt(Y, X, He, v)) {
                  var Z = !1;
                  if (He !== null)
                    g.delete(He.attributeName), we = Mo(e, Y, X, He);
                  else {
                    var V = i;
                    if (V === yi && (V = Xs(t)), V === yi)
                      g.delete(Y.toLowerCase());
                    else {
                      var ue = Jw(Y);
                      ue !== null && ue !== Y && (Z = !0, g.delete(ue)), g.delete(Y);
                    }
                    we = kl(e, Y, X);
                  }
                  var Te = Pt;
                  !Te && X !== we && !Z && up(Y, we, X);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[su] !== !0 && W1(g), t) {
        case "input":
          zo(e), Fu(e, a, !0);
          break;
        case "textarea":
          zo(e), Nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Qh(e);
          break;
      }
      return I;
    }
    function tT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Sg(e, t) {
      {
        if (Ma)
          return;
        Ma = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Cg(e, t) {
      {
        if (Ma)
          return;
        Ma = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Eg(e, t, a) {
      {
        if (Ma)
          return;
        Ma = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (t === "" || Ma)
          return;
        Ma = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function nT(e, t, a) {
      switch (t) {
        case "input":
          xv(e, a);
          return;
        case "textarea":
          Xf(e, a);
          return;
        case "select":
          My(e, a);
          return;
      }
    }
    var sp = function() {
    }, cp = function() {
    };
    {
      var rT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Z1 = [
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
      ], aT = Z1.concat(["button"]), iT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], J1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      cp = function(e, t) {
        var a = pt({}, e || J1), i = {
          tag: t
        };
        return Z1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), aT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), rT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var oT = function(e, t) {
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
            return iT.indexOf(t) === -1;
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
      }, lT = function(e, t) {
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
      }, eC = {};
      sp = function(e, t, a) {
        a = a || J1;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = oT(e, l) ? null : i, f = s ? null : lT(e, a), v = s || f;
        if (v) {
          var g = v.tag, E = !!s + "|" + e + "|" + g;
          if (!eC[E]) {
            eC[E] = !0;
            var w = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var O = "";
              g === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, g, z, O);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, g);
          }
        }
      };
    }
    var Wh = "suppressHydrationWarning", Kh = "$", qh = "/$", fp = "$?", dp = "$!", uT = "style", xg = null, wg = null;
    function sT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ba:
        case Ao: {
          t = i === Ba ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Jf(null, "");
          break;
        }
        default: {
          var s = i === _n ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Jf(f, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), g = cp(null, v);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function cT(e, t, a) {
      {
        var i = e, l = Jf(i.namespace, t), s = cp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function e2(e) {
      return e;
    }
    function fT(e) {
      xg = ua(), wg = Tw();
      var t = null;
      return Wn(!1), t;
    }
    function dT(e) {
      Rw(wg), Wn(xg), xg = null, wg = null;
    }
    function pT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (sp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, g = cp(f.ancestorInfo, e);
          sp(null, v, g);
        }
        s = f.namespace;
      }
      var E = Ww(e, t, a, s);
      return hp(l, E), Og(E, t), E;
    }
    function vT(e, t) {
      e.appendChild(t);
    }
    function hT(e, t, a, i, l) {
      switch (qw(e, t, a, i), t) {
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
    function mT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, g = cp(f.ancestorInfo, t);
          sp(null, v, g);
        }
      }
      return Xw(e, t, a, i);
    }
    function Tg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yT(e, t, a, i) {
      {
        var l = a;
        sp(null, e, l.ancestorInfo);
      }
      var s = Kw(e, t);
      return hp(i, s), s;
    }
    function gT() {
      var e = window.event;
      return e === void 0 ? ki : Tr(e.type);
    }
    var Rg = typeof setTimeout == "function" ? setTimeout : void 0, ST = typeof clearTimeout == "function" ? clearTimeout : void 0, kg = -1, tC = typeof Promise == "function" ? Promise : void 0, CT = typeof queueMicrotask == "function" ? queueMicrotask : typeof tC < "u" ? function(e) {
      return tC.resolve(null).then(e).catch(ET);
    } : Rg;
    function ET(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function bT(e, t, a, i) {
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
    function xT(e, t, a, i, l, s) {
      Zw(e, t, a, i, l), Og(e, l);
    }
    function nC(e) {
      Js(e, "");
    }
    function wT(e, t, a) {
      e.nodeValue = a;
    }
    function TT(e, t) {
      e.appendChild(t);
    }
    function RT(e, t) {
      var a;
      e.nodeType === _n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Qh(a);
    }
    function kT(e, t, a) {
      e.insertBefore(t, a);
    }
    function DT(e, t, a) {
      e.nodeType === _n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function _T(e, t) {
      e.removeChild(t);
    }
    function NT(e, t) {
      e.nodeType === _n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Dg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === _n) {
          var s = l.data;
          if (s === qh)
            if (i === 0) {
              e.removeChild(l), vt(t);
              return;
            } else
              i--;
          else
            (s === Kh || s === fp || s === dp) && i++;
        }
        a = l;
      } while (a);
      vt(t);
    }
    function MT(e, t) {
      e.nodeType === _n ? Dg(e.parentNode, t) : e.nodeType === Fr && Dg(e, t), vt(e);
    }
    function OT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function LT(e) {
      e.nodeValue = "";
    }
    function zT(e, t) {
      e = e;
      var a = t[uT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ec("display", i);
    }
    function AT(e, t) {
      e.nodeValue = t;
    }
    function UT(e) {
      e.nodeType === Fr ? e.textContent = "" : e.nodeType === Ba && e.documentElement && e.removeChild(e.documentElement);
    }
    function $T(e, t, a) {
      return e.nodeType !== Fr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function FT(e, t) {
      return t === "" || e.nodeType !== gi ? null : e;
    }
    function jT(e) {
      return e.nodeType !== _n ? null : e;
    }
    function rC(e) {
      return e.data === fp;
    }
    function _g(e) {
      return e.data === dp;
    }
    function PT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function HT(e, t) {
      e._reactRetry = t;
    }
    function Xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Fr || t === gi)
          break;
        if (t === _n) {
          var a = e.data;
          if (a === Kh || a === dp || a === fp)
            break;
          if (a === qh)
            return null;
        }
      }
      return e;
    }
    function pp(e) {
      return Xh(e.nextSibling);
    }
    function VT(e) {
      return Xh(e.firstChild);
    }
    function BT(e) {
      return Xh(e.firstChild);
    }
    function IT(e) {
      return Xh(e.nextSibling);
    }
    function YT(e, t, a, i, l, s, f) {
      hp(s, e), Og(e, a);
      var v;
      {
        var g = l;
        v = g.namespace;
      }
      var E = (s.mode & st) !== Ie;
      return eT(e, t, a, v, i, E, f);
    }
    function GT(e, t, a, i) {
      return hp(a, e), a.mode & st, tT(e, t);
    }
    function QT(e, t) {
      hp(t, e);
    }
    function WT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === _n) {
          var i = t.data;
          if (i === qh) {
            if (a === 0)
              return pp(t);
            a--;
          } else
            (i === Kh || i === dp || i === fp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function aC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === _n) {
          var i = t.data;
          if (i === Kh || i === dp || i === fp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === qh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function KT(e) {
      vt(e);
    }
    function qT(e) {
      vt(e);
    }
    function XT(e) {
      return e !== "head" && e !== "body";
    }
    function ZT(e, t, a, i) {
      var l = !0;
      Gh(t.nodeValue, a, i, l);
    }
    function JT(e, t, a, i, l, s) {
      if (t[Wh] !== !0) {
        var f = !0;
        Gh(i.nodeValue, l, s, f);
      }
    }
    function eR(e, t) {
      t.nodeType === Fr ? Sg(e, t) : t.nodeType === _n || Cg(e, t);
    }
    function tR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Fr ? Sg(a, t) : t.nodeType === _n || Cg(a, t));
      }
    }
    function nR(e, t, a, i, l) {
      (l || t[Wh] !== !0) && (i.nodeType === Fr ? Sg(a, i) : i.nodeType === _n || Cg(a, i));
    }
    function rR(e, t, a) {
      Eg(e, t);
    }
    function aR(e, t) {
      bg(e, t);
    }
    function iR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Eg(i, t);
      }
    }
    function oR(e, t) {
      {
        var a = e.parentNode;
        a !== null && bg(a, t);
      }
    }
    function lR(e, t, a, i, l, s) {
      (s || t[Wh] !== !0) && Eg(a, i);
    }
    function uR(e, t, a, i, l) {
      (l || t[Wh] !== !0) && bg(a, i);
    }
    function sR(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function cR(e) {
      ip(e);
    }
    var lf = Math.random().toString(36).slice(2), uf = "__reactFiber$" + lf, Ng = "__reactProps$" + lf, vp = "__reactContainer$" + lf, Mg = "__reactEvents$" + lf, fR = "__reactListeners$" + lf, dR = "__reactHandles$" + lf;
    function pR(e) {
      delete e[uf], delete e[Ng], delete e[Mg], delete e[fR], delete e[dR];
    }
    function hp(e, t) {
      t[uf] = e;
    }
    function Zh(e, t) {
      t[vp] = e;
    }
    function iC(e) {
      e[vp] = null;
    }
    function mp(e) {
      return !!e[vp];
    }
    function Es(e) {
      var t = e[uf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[vp] || a[uf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = aC(e); l !== null; ) {
              var s = l[uf];
              if (s)
                return s;
              l = aC(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function cu(e) {
      var t = e[uf] || e[vp];
      return t && (t.tag === F || t.tag === $ || t.tag === te || t.tag === _) ? t : null;
    }
    function sf(e) {
      if (e.tag === F || e.tag === $)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Jh(e) {
      return e[Ng] || null;
    }
    function Og(e, t) {
      e[Ng] = t;
    }
    function vR(e) {
      var t = e[Mg];
      return t === void 0 && (t = e[Mg] = /* @__PURE__ */ new Set()), t;
    }
    var oC = {}, lC = m.ReactDebugCurrentFrame;
    function em(e) {
      if (e) {
        var t = e._owner, a = Nu(e.type, e._source, t ? t.type : null);
        lC.setExtraStackFrame(a);
      } else
        lC.setExtraStackFrame(null);
    }
    function Oi(e, t, a, i, l) {
      {
        var s = Function.call.bind(mt);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (em(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), em(null)), v instanceof Error && !(v.message in oC) && (oC[v.message] = !0, em(l), h("Failed %s type: %s", a, v.message), em(null));
          }
      }
    }
    var Lg = [], tm;
    tm = [];
    var sl = -1;
    function fu(e) {
      return {
        current: e
      };
    }
    function Qr(e, t) {
      if (sl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== tm[sl] && h("Unexpected Fiber popped."), e.current = Lg[sl], Lg[sl] = null, tm[sl] = null, sl--;
    }
    function Wr(e, t, a) {
      sl++, Lg[sl] = e.current, tm[sl] = a, e.current = t;
    }
    var zg;
    zg = {};
    var Wa = {};
    Object.freeze(Wa);
    var cl = fu(Wa), So = fu(!1), Ag = Wa;
    function cf(e, t, a) {
      return a && Co(t) ? Ag : cl.current;
    }
    function uC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function ff(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Wa;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var v = nt(e) || "Unknown";
          Oi(i, s, "context", v);
        }
        return l && uC(e, t, s), s;
      }
    }
    function nm() {
      return So.current;
    }
    function Co(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rm(e) {
      Qr(So, e), Qr(cl, e);
    }
    function Ug(e) {
      Qr(So, e), Qr(cl, e);
    }
    function sC(e, t, a) {
      {
        if (cl.current !== Wa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Wr(cl, t, e), Wr(So, a, e);
      }
    }
    function cC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = nt(e) || "Unknown";
            zg[s] || (zg[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in l))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var g = nt(e) || "Unknown";
          Oi(l, f, "child context", g);
        }
        return pt({}, a, f);
      }
    }
    function am(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Wa;
        return Ag = cl.current, Wr(cl, a, e), Wr(So, So.current, e), !0;
      }
    }
    function fC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = cC(e, t, Ag);
          i.__reactInternalMemoizedMergedChildContext = l, Qr(So, e), Qr(cl, e), Wr(cl, l, e), Wr(So, a, e);
        } else
          Qr(So, e), Wr(So, a, e);
      }
    }
    function hR(e) {
      {
        if (!Sd(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (Co(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var du = 0, im = 1, fl = null, $g = !1, Fg = !1;
    function dC(e) {
      fl === null ? fl = [e] : fl.push(e);
    }
    function mR(e) {
      $g = !0, dC(e);
    }
    function pC() {
      $g && pu();
    }
    function pu() {
      if (!Fg && fl !== null) {
        Fg = !0;
        var e = 0, t = ka();
        try {
          var a = !0, i = fl;
          for ($n(hr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          fl = null, $g = !1;
        } catch (s) {
          throw fl !== null && (fl = fl.slice(e + 1)), fc(pc, pu), s;
        } finally {
          $n(t), Fg = !1;
        }
      }
      return null;
    }
    var df = [], pf = 0, om = null, lm = 0, oi = [], li = 0, bs = null, dl = 1, pl = "";
    function yR(e) {
      return ws(), (e.flags & md) !== Pe;
    }
    function gR(e) {
      return ws(), lm;
    }
    function SR() {
      var e = pl, t = dl, a = t & ~CR(t);
      return a.toString(32) + e;
    }
    function xs(e, t) {
      ws(), df[pf++] = lm, df[pf++] = om, om = e, lm = t;
    }
    function vC(e, t, a) {
      ws(), oi[li++] = dl, oi[li++] = pl, oi[li++] = bs, bs = e;
      var i = dl, l = pl, s = um(i) - 1, f = i & ~(1 << s), v = a + 1, g = um(t) + s;
      if (g > 30) {
        var E = s - s % 5, w = (1 << E) - 1, z = (f & w).toString(32), O = f >> E, I = s - E, Y = um(t) + I, X = v << I, we = X | O, He = z + l;
        dl = 1 << Y | we, pl = He;
      } else {
        var Ae = v << s, Ct = Ae | f, ht = l;
        dl = 1 << g | Ct, pl = ht;
      }
    }
    function jg(e) {
      ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        xs(e, a), vC(e, a, i);
      }
    }
    function um(e) {
      return 32 - Sc(e);
    }
    function CR(e) {
      return 1 << um(e) - 1;
    }
    function Pg(e) {
      for (; e === om; )
        om = df[--pf], df[pf] = null, lm = df[--pf], df[pf] = null;
      for (; e === bs; )
        bs = oi[--li], oi[li] = null, pl = oi[--li], oi[li] = null, dl = oi[--li], oi[li] = null;
    }
    function ER() {
      return ws(), bs !== null ? {
        id: dl,
        overflow: pl
      } : null;
    }
    function bR(e, t) {
      ws(), oi[li++] = dl, oi[li++] = pl, oi[li++] = bs, dl = t.id, pl = t.overflow, bs = e;
    }
    function ws() {
      kr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Rr = null, ui = null, Li = !1, Ts = !1, vu = null;
    function xR() {
      Li && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function hC() {
      Ts = !0;
    }
    function wR() {
      return Ts;
    }
    function TR(e) {
      var t = e.stateNode.containerInfo;
      return ui = BT(t), Rr = e, Li = !0, vu = null, Ts = !1, !0;
    }
    function RR(e, t, a) {
      return ui = IT(t), Rr = e, Li = !0, vu = null, Ts = !1, a !== null && bR(e, a), !0;
    }
    function mC(e, t) {
      switch (e.tag) {
        case _: {
          eR(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var a = (e.mode & st) !== Ie;
          nR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case te: {
          var i = e.memoizedState;
          i.dehydrated !== null && tR(i.dehydrated, t);
          break;
        }
      }
    }
    function yC(e, t) {
      mC(e, t);
      var a = __();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Nt) : i.push(a);
    }
    function Hg(e, t) {
      {
        if (Ts)
          return;
        switch (e.tag) {
          case _: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var i = t.type;
                t.pendingProps, rR(a, i);
                break;
              case $:
                var l = t.pendingProps;
                aR(a, l);
                break;
            }
            break;
          }
          case F: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case F: {
                var g = t.type, E = t.pendingProps, w = (e.mode & st) !== Ie;
                lR(
                  s,
                  f,
                  v,
                  g,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case $: {
                var z = t.pendingProps, O = (e.mode & st) !== Ie;
                uR(
                  s,
                  f,
                  v,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case te: {
            var I = e.memoizedState, Y = I.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case F:
                  var X = t.type;
                  t.pendingProps, iR(Y, X);
                  break;
                case $:
                  var we = t.pendingProps;
                  oR(Y, we);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function gC(e, t) {
      t.flags = t.flags & ~ba | Wt, Hg(e, t);
    }
    function SC(e, t) {
      switch (e.tag) {
        case F: {
          var a = e.type;
          e.pendingProps;
          var i = $T(t, a);
          return i !== null ? (e.stateNode = i, Rr = e, ui = VT(i), !0) : !1;
        }
        case $: {
          var l = e.pendingProps, s = FT(t, l);
          return s !== null ? (e.stateNode = s, Rr = e, ui = null, !0) : !1;
        }
        case te: {
          var f = jT(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: ER(),
              retryLane: Yr
            };
            e.memoizedState = v;
            var g = N_(f);
            return g.return = e, e.child = g, Rr = e, ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Vg(e) {
      return (e.mode & st) !== Ie && (e.flags & Xe) === Pe;
    }
    function Bg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ig(e) {
      if (Li) {
        var t = ui;
        if (!t) {
          Vg(e) && (Hg(Rr, e), Bg()), gC(Rr, e), Li = !1, Rr = e;
          return;
        }
        var a = t;
        if (!SC(e, t)) {
          Vg(e) && (Hg(Rr, e), Bg()), t = pp(a);
          var i = Rr;
          if (!t || !SC(e, t)) {
            gC(Rr, e), Li = !1, Rr = e;
            return;
          }
          yC(i, a);
        }
      }
    }
    function kR(e, t, a) {
      var i = e.stateNode, l = !Ts, s = YT(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function DR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = GT(t, a, e);
      if (i) {
        var l = Rr;
        if (l !== null)
          switch (l.tag) {
            case _: {
              var s = l.stateNode.containerInfo, f = (l.mode & st) !== Ie;
              ZT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case F: {
              var v = l.type, g = l.memoizedProps, E = l.stateNode, w = (l.mode & st) !== Ie;
              JT(
                v,
                g,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return i;
    }
    function _R(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      QT(a, e);
    }
    function NR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return WT(a);
    }
    function CC(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== _ && t.tag !== te; )
        t = t.return;
      Rr = t;
    }
    function sm(e) {
      if (e !== Rr)
        return !1;
      if (!Li)
        return CC(e), Li = !0, !1;
      if (e.tag !== _ && (e.tag !== F || XT(e.type) && !Tg(e.type, e.memoizedProps))) {
        var t = ui;
        if (t)
          if (Vg(e))
            EC(e), Bg();
          else
            for (; t; )
              yC(e, t), t = pp(t);
      }
      return CC(e), e.tag === te ? ui = NR(e) : ui = Rr ? pp(e.stateNode) : null, !0;
    }
    function MR() {
      return Li && ui !== null;
    }
    function EC(e) {
      for (var t = ui; t; )
        mC(e, t), t = pp(t);
    }
    function vf() {
      Rr = null, ui = null, Li = !1, Ts = !1;
    }
    function bC() {
      vu !== null && (mb(vu), vu = null);
    }
    function kr() {
      return Li;
    }
    function Yg(e) {
      vu === null ? vu = [e] : vu.push(e);
    }
    var OR = m.ReactCurrentBatchConfig, LR = null;
    function zR() {
      return OR.transition;
    }
    var zi = {
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
      var AR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & un && (t = a), a = a.return;
        return t;
      }, Rs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, yp = [], gp = [], Sp = [], Cp = [], Ep = [], bp = [], ks = /* @__PURE__ */ new Set();
      zi.recordUnsafeLifecycleWarnings = function(e, t) {
        ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && gp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && bp.push(e));
      }, zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(O) {
          e.add(nt(O) || "Component"), ks.add(O.type);
        }), yp = []);
        var t = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(O) {
          t.add(nt(O) || "Component"), ks.add(O.type);
        }), gp = []);
        var a = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(O) {
          a.add(nt(O) || "Component"), ks.add(O.type);
        }), Sp = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(O) {
          i.add(nt(O) || "Component"), ks.add(O.type);
        }), Cp = []);
        var l = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(O) {
          l.add(nt(O) || "Component"), ks.add(O.type);
        }), Ep = []);
        var s = /* @__PURE__ */ new Set();
        if (bp.length > 0 && (bp.forEach(function(O) {
          s.add(nt(O) || "Component"), ks.add(O.type);
        }), bp = []), t.size > 0) {
          var f = Rs(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var v = Rs(i);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var g = Rs(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var E = Rs(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var w = Rs(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (l.size > 0) {
          var z = Rs(l);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var cm = /* @__PURE__ */ new Map(), xC = /* @__PURE__ */ new Set();
      zi.recordLegacyContextWarning = function(e, t) {
        var a = AR(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!xC.has(e.type)) {
          var i = cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cm.set(a, i)), i.push(e));
        }
      }, zi.flushLegacyContextWarning = function() {
        cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(nt(s) || "Component"), xC.add(s.type);
            });
            var l = Rs(i);
            try {
              $t(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              zn();
            }
          }
        });
      }, zi.discardPendingWarnings = function() {
        yp = [], gp = [], Sp = [], Cp = [], Ep = [], bp = [], cm = /* @__PURE__ */ new Map();
      };
    }
    function Ai(e, t) {
      if (e && e.defaultProps) {
        var a = pt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var Gg = fu(null), Qg;
    Qg = {};
    var fm = null, hf = null, Wg = null, dm = !1;
    function pm() {
      fm = null, hf = null, Wg = null, dm = !1;
    }
    function wC() {
      dm = !0;
    }
    function TC() {
      dm = !1;
    }
    function RC(e, t, a) {
      Wr(Gg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Qg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Qg;
    }
    function Kg(e, t) {
      var a = Gg.current;
      Qr(Gg, t), e._currentValue = a;
    }
    function qg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Zo(i.childLanes, t) ? l !== null && !Zo(l.childLanes, t) && (l.childLanes = it(l.childLanes, t)) : (i.childLanes = it(i.childLanes, t), l !== null && (l.childLanes = it(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function UR(e, t, a) {
      $R(e, t, a);
    }
    function $R(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === R) {
                var v = Un(a), g = vl(It, v);
                g.tag = hm;
                var E = i.updateQueue;
                if (E !== null) {
                  var w = E.shared, z = w.pending;
                  z === null ? g.next = g : (g.next = z.next, z.next = g), w.pending = g;
                }
              }
              i.lanes = it(i.lanes, a);
              var O = i.alternate;
              O !== null && (O.lanes = it(O.lanes, a)), qg(i.return, a, e), s.lanes = it(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === K)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === De) {
          var I = i.return;
          if (I === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          I.lanes = it(I.lanes, a);
          var Y = I.alternate;
          Y !== null && (Y.lanes = it(Y.lanes, a)), qg(I, a, e), l = i.sibling;
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
            var X = l.sibling;
            if (X !== null) {
              X.return = l.return, l = X;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function mf(e, t) {
      fm = e, hf = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Gr(a.lanes, t) && Up(), a.firstContext = null);
      }
    }
    function qn(e) {
      dm && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (hf === null) {
          if (fm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          hf = a, fm.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          hf = hf.next = a;
      }
      return t;
    }
    var Ds = null;
    function Xg(e) {
      Ds === null ? Ds = [e] : Ds.push(e);
    }
    function FR() {
      if (Ds !== null) {
        for (var e = 0; e < Ds.length; e++) {
          var t = Ds[e], a = t.interleaved;
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
        Ds = null;
      }
    }
    function kC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, vm(e, i);
    }
    function jR(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function PR(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, vm(e, i);
    }
    function Oa(e, t) {
      return vm(e, t);
    }
    var HR = vm;
    function vm(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (Wt | ba)) !== Pe && Db(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = it(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (l.flags & (Wt | ba)) !== Pe && Db(e), i = l, l = l.return;
      if (i.tag === _) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var DC = 0, _C = 1, hm = 2, Zg = 3, mm = !1, Jg, ym;
    Jg = !1, ym = null;
    function e0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function NC(e, t) {
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
    function vl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: DC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function hu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (ym === l && !Jg && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Jg = !0), HD()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, HR(e, a);
      } else
        return PR(e, l, t, a);
    }
    function gm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Od(a)) {
          var s = l.lanes;
          s = zd(s, e.pendingLanes);
          var f = it(s, a);
          l.lanes = f, Kl(e, f);
        }
      }
    }
    function t0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var g = v;
            do {
              var E = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), g = g.next;
            } while (g !== null);
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
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function VR(e, t, a, i, l, s) {
      switch (a.tag) {
        case _C: {
          var f = a.payload;
          if (typeof f == "function") {
            wC();
            var v = f.call(s, i, l);
            {
              if (e.mode & un) {
                An(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  An(!1);
                }
              }
              TC();
            }
            return v;
          }
          return f;
        }
        case Zg:
          e.flags = e.flags & ~Yn | Xe;
        case DC: {
          var g = a.payload, E;
          if (typeof g == "function") {
            wC(), E = g.call(s, i, l);
            {
              if (e.mode & un) {
                An(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  An(!1);
                }
              }
              TC();
            }
          } else
            E = g;
          return E == null ? i : pt({}, i, E);
        }
        case hm:
          return mm = !0, i;
      }
      return i;
    }
    function Sm(e, t, a, i) {
      var l = e.updateQueue;
      mm = !1, ym = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, v = l.shared.pending;
      if (v !== null) {
        l.shared.pending = null;
        var g = v, E = g.next;
        g.next = null, f === null ? s = E : f.next = E, f = g;
        var w = e.alternate;
        if (w !== null) {
          var z = w.updateQueue, O = z.lastBaseUpdate;
          O !== f && (O === null ? z.firstBaseUpdate = E : O.next = E, z.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var I = l.baseState, Y = J, X = null, we = null, He = null, Ae = s;
        do {
          var Ct = Ae.lane, ht = Ae.eventTime;
          if (Zo(i, Ct)) {
            if (He !== null) {
              var Z = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: gt,
                tag: Ae.tag,
                payload: Ae.payload,
                callback: Ae.callback,
                next: null
              };
              He = He.next = Z;
            }
            I = VR(e, l, Ae, I, t, a);
            var V = Ae.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ae.lane !== gt) {
              e.flags |= ei;
              var ue = l.effects;
              ue === null ? l.effects = [Ae] : ue.push(Ae);
            }
          } else {
            var H = {
              eventTime: ht,
              lane: Ct,
              tag: Ae.tag,
              payload: Ae.payload,
              callback: Ae.callback,
              next: null
            };
            He === null ? (we = He = H, X = I) : He = He.next = H, Y = it(Y, Ct);
          }
          if (Ae = Ae.next, Ae === null) {
            if (v = l.shared.pending, v === null)
              break;
            var Te = v, Ce = Te.next;
            Te.next = null, Ae = Ce, l.lastBaseUpdate = Te, l.shared.pending = null;
          }
        } while (!0);
        He === null && (X = I), l.baseState = X, l.firstBaseUpdate = we, l.lastBaseUpdate = He;
        var We = l.shared.interleaved;
        if (We !== null) {
          var tt = We;
          do
            Y = it(Y, tt.lane), tt = tt.next;
          while (tt !== We);
        } else
          s === null && (l.shared.lanes = J);
        Wp(Y), e.lanes = Y, e.memoizedState = I;
      }
      ym = null;
    }
    function BR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function MC() {
      mm = !1;
    }
    function Cm() {
      return mm;
    }
    function OC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, BR(f, a));
        }
    }
    var n0 = {}, LC = new d.Component().refs, r0, a0, i0, o0, l0, zC, Em, u0, s0, c0;
    {
      r0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), i0 = /* @__PURE__ */ new Set(), o0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set();
      var AC = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          AC.has(a) || (AC.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, zC = function(e, t) {
        if (t === void 0) {
          var a = Vt(e) || "Component";
          l0.has(a) || (l0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(n0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(n0);
    }
    function f0(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & un) {
          An(!0);
          try {
            s = a(i, l);
          } finally {
            An(!1);
          }
        }
        zC(t, s);
      }
      var f = s == null ? l : pt({}, l, s);
      if (e.memoizedState = f, e.lanes === J) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var d0 = {
      isMounted: ia,
      enqueueSetState: function(e, t, a) {
        var i = Ca(e), l = fa(), s = xu(i), f = vl(l, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var v = hu(i, f, s);
        v !== null && (lr(v, i, s, l), gm(v, i, s)), so(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ca(e), l = fa(), s = xu(i), f = vl(l, s);
        f.tag = _C, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var v = hu(i, f, s);
        v !== null && (lr(v, i, s, l), gm(v, i, s)), so(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ca(e), i = fa(), l = xu(a), s = vl(i, l);
        s.tag = hm, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = hu(a, s, l);
        f !== null && (lr(f, a, l, i), gm(f, a, l)), Dd(a, l);
      }
    };
    function UC(e, t, a, i, l, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var g = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & un) {
            An(!0);
            try {
              g = v.shouldComponentUpdate(i, s, f);
            } finally {
              An(!1);
            }
          }
          g === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(l, s) : !0;
    }
    function IR(e, t, a) {
      var i = e.stateNode;
      {
        var l = Vt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !s0.has(t) && (s0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !i0.has(t) && (i0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var v = i.state;
        v && (typeof v != "object" || Bn(v)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function $C(e, t) {
      t.updater = d0, e.stateNode = t, jl(t, e), t._reactInternalInstance = n0;
    }
    function FC(e, t, a) {
      var i = !1, l = Wa, s = Wa, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ye && f._context === void 0
        );
        if (!v && !c0.has(t)) {
          c0.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === ie ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = qn(f);
      else {
        l = cf(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? ff(e, l) : Wa;
      }
      var w = new t(a, s);
      if (e.mode & un) {
        An(!0);
        try {
          w = new t(a, s);
        } finally {
          An(!1);
        }
      }
      var z = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      $C(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var O = Vt(t) || "Component";
          a0.has(O) || (a0.add(O), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, w.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var I = null, Y = null, X = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), I !== null || Y !== null || X !== null) {
            var we = Vt(t) || "Component", He = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            o0.has(we) || (o0.add(we), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, He, I !== null ? `
  ` + I : "", Y !== null ? `
  ` + Y : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && uC(e, l, s), w;
    }
    function YR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), d0.enqueueReplaceState(t, t.state, null));
    }
    function jC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = nt(e) || "Component";
          r0.has(s) || (r0.add(s), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        d0.enqueueReplaceState(t, t.state, null);
      }
    }
    function p0(e, t, a, i) {
      IR(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = LC, e0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = qn(s);
      else {
        var f = cf(e, t, !0);
        l.context = ff(e, f);
      }
      {
        if (l.state === a) {
          var v = Vt(t) || "Component";
          u0.has(v) || (u0.add(v), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & un && zi.recordLegacyContextWarning(e, l), zi.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (f0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (YR(e, l), Sm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var E = at;
        E |= Pr, (e.mode & Ta) !== Ie && (E |= Hr), e.flags |= E;
      }
    }
    function GR(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, v = t.contextType, g = Wa;
      if (typeof v == "object" && v !== null)
        g = qn(v);
      else {
        var E = cf(e, t, !0);
        g = ff(e, E);
      }
      var w = t.getDerivedStateFromProps, z = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !z && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && jC(e, l, a, g), MC();
      var O = e.memoizedState, I = l.state = O;
      if (Sm(e, a, l, i), I = e.memoizedState, s === a && O === I && !nm() && !Cm()) {
        if (typeof l.componentDidMount == "function") {
          var Y = at;
          Y |= Pr, (e.mode & Ta) !== Ie && (Y |= Hr), e.flags |= Y;
        }
        return !1;
      }
      typeof w == "function" && (f0(e, t, w, a), I = e.memoizedState);
      var X = Cm() || UC(e, t, s, a, O, I, g);
      if (X) {
        if (!z && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var we = at;
          we |= Pr, (e.mode & Ta) !== Ie && (we |= Hr), e.flags |= we;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var He = at;
          He |= Pr, (e.mode & Ta) !== Ie && (He |= Hr), e.flags |= He;
        }
        e.memoizedProps = a, e.memoizedState = I;
      }
      return l.props = a, l.state = I, l.context = g, X;
    }
    function QR(e, t, a, i, l) {
      var s = t.stateNode;
      NC(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : Ai(t.type, f);
      s.props = v;
      var g = t.pendingProps, E = s.context, w = a.contextType, z = Wa;
      if (typeof w == "object" && w !== null)
        z = qn(w);
      else {
        var O = cf(t, a, !0);
        z = ff(t, O);
      }
      var I = a.getDerivedStateFromProps, Y = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || E !== z) && jC(t, s, i, z), MC();
      var X = t.memoizedState, we = s.state = X;
      if (Sm(t, i, s, l), we = t.memoizedState, f === g && X === we && !nm() && !Cm() && !xe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ea), !1;
      typeof I == "function" && (f0(t, a, I, i), we = t.memoizedState);
      var He = Cm() || UC(t, a, v, i, X, we, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      xe;
      return He ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, z)), typeof s.componentDidUpdate == "function" && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ea)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ea), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = z, He;
    }
    var v0, h0, m0, y0, g0, PC = function(e, t) {
    };
    v0 = !1, h0 = !1, m0 = {}, y0 = {}, g0 = {}, PC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = nt(t) || "Component";
        y0[a] || (y0[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & un || Cn) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = nt(e) || "Component";
          m0[l] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), m0[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var v = s;
            if (v.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = v.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = f;
          Jr(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var w = function(z) {
            var O = g.refs;
            O === LC && (O = g.refs = {}), z === null ? delete O[E] : O[E] = z;
          };
          return w._stringRef = E, w;
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
    function bm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function xm(e) {
      {
        var t = nt(e) || "Component";
        if (g0[t])
          return;
        g0[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function HC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function VC(e) {
      function t(H, Z) {
        if (e) {
          var V = H.deletions;
          V === null ? (H.deletions = [Z], H.flags |= Nt) : V.push(Z);
        }
      }
      function a(H, Z) {
        if (!e)
          return null;
        for (var V = Z; V !== null; )
          t(H, V), V = V.sibling;
        return null;
      }
      function i(H, Z) {
        for (var V = /* @__PURE__ */ new Map(), ue = Z; ue !== null; )
          ue.key !== null ? V.set(ue.key, ue) : V.set(ue.index, ue), ue = ue.sibling;
        return V;
      }
      function l(H, Z) {
        var V = Us(H, Z);
        return V.index = 0, V.sibling = null, V;
      }
      function s(H, Z, V) {
        if (H.index = V, !e)
          return H.flags |= md, Z;
        var ue = H.alternate;
        if (ue !== null) {
          var Te = ue.index;
          return Te < Z ? (H.flags |= Wt, Z) : Te;
        } else
          return H.flags |= Wt, Z;
      }
      function f(H) {
        return e && H.alternate === null && (H.flags |= Wt), H;
      }
      function v(H, Z, V, ue) {
        if (Z === null || Z.tag !== $) {
          var Te = YS(V, H.mode, ue);
          return Te.return = H, Te;
        } else {
          var Ce = l(Z, V);
          return Ce.return = H, Ce;
        }
      }
      function g(H, Z, V, ue) {
        var Te = V.type;
        if (Te === ja)
          return w(H, Z, V.props.children, ue, V.key);
        if (Z !== null && (Z.elementType === Te || // Keep this check inline so it only runs on the false path:
        Ob(Z, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === Ye && HC(Te) === Z.type)) {
          var Ce = l(Z, V.props);
          return Ce.ref = xp(H, Z, V), Ce.return = H, Ce._debugSource = V._source, Ce._debugOwner = V._owner, Ce;
        }
        var We = IS(V, H.mode, ue);
        return We.ref = xp(H, Z, V), We.return = H, We;
      }
      function E(H, Z, V, ue) {
        if (Z === null || Z.tag !== U || Z.stateNode.containerInfo !== V.containerInfo || Z.stateNode.implementation !== V.implementation) {
          var Te = GS(V, H.mode, ue);
          return Te.return = H, Te;
        } else {
          var Ce = l(Z, V.children || []);
          return Ce.return = H, Ce;
        }
      }
      function w(H, Z, V, ue, Te) {
        if (Z === null || Z.tag !== j) {
          var Ce = Tu(V, H.mode, ue, Te);
          return Ce.return = H, Ce;
        } else {
          var We = l(Z, V);
          return We.return = H, We;
        }
      }
      function z(H, Z, V) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ue = YS("" + Z, H.mode, V);
          return ue.return = H, ue;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Yi: {
              var Te = IS(Z, H.mode, V);
              return Te.ref = xp(H, null, Z), Te.return = H, Te;
            }
            case ta: {
              var Ce = GS(Z, H.mode, V);
              return Ce.return = H, Ce;
            }
            case Ye: {
              var We = Z._payload, tt = Z._init;
              return z(H, tt(We), V);
            }
          }
          if (Bn(Z) || hi(Z)) {
            var jt = Tu(Z, H.mode, V, null);
            return jt.return = H, jt;
          }
          bm(H, Z);
        }
        return typeof Z == "function" && xm(H), null;
      }
      function O(H, Z, V, ue) {
        var Te = Z !== null ? Z.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Te !== null ? null : v(H, Z, "" + V, ue);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Yi:
              return V.key === Te ? g(H, Z, V, ue) : null;
            case ta:
              return V.key === Te ? E(H, Z, V, ue) : null;
            case Ye: {
              var Ce = V._payload, We = V._init;
              return O(H, Z, We(Ce), ue);
            }
          }
          if (Bn(V) || hi(V))
            return Te !== null ? null : w(H, Z, V, ue, null);
          bm(H, V);
        }
        return typeof V == "function" && xm(H), null;
      }
      function I(H, Z, V, ue, Te) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var Ce = H.get(V) || null;
          return v(Z, Ce, "" + ue, Te);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case Yi: {
              var We = H.get(ue.key === null ? V : ue.key) || null;
              return g(Z, We, ue, Te);
            }
            case ta: {
              var tt = H.get(ue.key === null ? V : ue.key) || null;
              return E(Z, tt, ue, Te);
            }
            case Ye:
              var jt = ue._payload, Tt = ue._init;
              return I(H, Z, V, Tt(jt), Te);
          }
          if (Bn(ue) || hi(ue)) {
            var Pn = H.get(V) || null;
            return w(Z, Pn, ue, Te, null);
          }
          bm(Z, ue);
        }
        return typeof ue == "function" && xm(Z), null;
      }
      function Y(H, Z, V) {
        {
          if (typeof H != "object" || H === null)
            return Z;
          switch (H.$$typeof) {
            case Yi:
            case ta:
              PC(H, V);
              var ue = H.key;
              if (typeof ue != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(ue);
                break;
              }
              if (!Z.has(ue)) {
                Z.add(ue);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ue);
              break;
            case Ye:
              var Te = H._payload, Ce = H._init;
              Y(Ce(Te), Z, V);
              break;
          }
        }
        return Z;
      }
      function X(H, Z, V, ue) {
        for (var Te = null, Ce = 0; Ce < V.length; Ce++) {
          var We = V[Ce];
          Te = Y(We, Te, H);
        }
        for (var tt = null, jt = null, Tt = Z, Pn = 0, Rt = 0, On = null; Tt !== null && Rt < V.length; Rt++) {
          Tt.index > Rt ? (On = Tt, Tt = null) : On = Tt.sibling;
          var qr = O(H, Tt, V[Rt], ue);
          if (qr === null) {
            Tt === null && (Tt = On);
            break;
          }
          e && Tt && qr.alternate === null && t(H, Tt), Pn = s(qr, Pn, Rt), jt === null ? tt = qr : jt.sibling = qr, jt = qr, Tt = On;
        }
        if (Rt === V.length) {
          if (a(H, Tt), kr()) {
            var zr = Rt;
            xs(H, zr);
          }
          return tt;
        }
        if (Tt === null) {
          for (; Rt < V.length; Rt++) {
            var qa = z(H, V[Rt], ue);
            qa !== null && (Pn = s(qa, Pn, Rt), jt === null ? tt = qa : jt.sibling = qa, jt = qa);
          }
          if (kr()) {
            var da = Rt;
            xs(H, da);
          }
          return tt;
        }
        for (var pa = i(H, Tt); Rt < V.length; Rt++) {
          var Xr = I(pa, H, Rt, V[Rt], ue);
          Xr !== null && (e && Xr.alternate !== null && pa.delete(Xr.key === null ? Rt : Xr.key), Pn = s(Xr, Pn, Rt), jt === null ? tt = Xr : jt.sibling = Xr, jt = Xr);
        }
        if (e && pa.forEach(function(Lf) {
          return t(H, Lf);
        }), kr()) {
          var Cl = Rt;
          xs(H, Cl);
        }
        return tt;
      }
      function we(H, Z, V, ue) {
        var Te = hi(V);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (h0 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), h0 = !0), V.entries === Te && (v0 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), v0 = !0);
          var Ce = Te.call(V);
          if (Ce)
            for (var We = null, tt = Ce.next(); !tt.done; tt = Ce.next()) {
              var jt = tt.value;
              We = Y(jt, We, H);
            }
        }
        var Tt = Te.call(V);
        if (Tt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Pn = null, Rt = null, On = Z, qr = 0, zr = 0, qa = null, da = Tt.next(); On !== null && !da.done; zr++, da = Tt.next()) {
          On.index > zr ? (qa = On, On = null) : qa = On.sibling;
          var pa = O(H, On, da.value, ue);
          if (pa === null) {
            On === null && (On = qa);
            break;
          }
          e && On && pa.alternate === null && t(H, On), qr = s(pa, qr, zr), Rt === null ? Pn = pa : Rt.sibling = pa, Rt = pa, On = qa;
        }
        if (da.done) {
          if (a(H, On), kr()) {
            var Xr = zr;
            xs(H, Xr);
          }
          return Pn;
        }
        if (On === null) {
          for (; !da.done; zr++, da = Tt.next()) {
            var Cl = z(H, da.value, ue);
            Cl !== null && (qr = s(Cl, qr, zr), Rt === null ? Pn = Cl : Rt.sibling = Cl, Rt = Cl);
          }
          if (kr()) {
            var Lf = zr;
            xs(H, Lf);
          }
          return Pn;
        }
        for (var Jp = i(H, On); !da.done; zr++, da = Tt.next()) {
          var Do = I(Jp, H, zr, da.value, ue);
          Do !== null && (e && Do.alternate !== null && Jp.delete(Do.key === null ? zr : Do.key), qr = s(Do, qr, zr), Rt === null ? Pn = Do : Rt.sibling = Do, Rt = Do);
        }
        if (e && Jp.forEach(function(lN) {
          return t(H, lN);
        }), kr()) {
          var oN = zr;
          xs(H, oN);
        }
        return Pn;
      }
      function He(H, Z, V, ue) {
        if (Z !== null && Z.tag === $) {
          a(H, Z.sibling);
          var Te = l(Z, V);
          return Te.return = H, Te;
        }
        a(H, Z);
        var Ce = YS(V, H.mode, ue);
        return Ce.return = H, Ce;
      }
      function Ae(H, Z, V, ue) {
        for (var Te = V.key, Ce = Z; Ce !== null; ) {
          if (Ce.key === Te) {
            var We = V.type;
            if (We === ja) {
              if (Ce.tag === j) {
                a(H, Ce.sibling);
                var tt = l(Ce, V.props.children);
                return tt.return = H, tt._debugSource = V._source, tt._debugOwner = V._owner, tt;
              }
            } else if (Ce.elementType === We || // Keep this check inline so it only runs on the false path:
            Ob(Ce, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof We == "object" && We !== null && We.$$typeof === Ye && HC(We) === Ce.type) {
              a(H, Ce.sibling);
              var jt = l(Ce, V.props);
              return jt.ref = xp(H, Ce, V), jt.return = H, jt._debugSource = V._source, jt._debugOwner = V._owner, jt;
            }
            a(H, Ce);
            break;
          } else
            t(H, Ce);
          Ce = Ce.sibling;
        }
        if (V.type === ja) {
          var Tt = Tu(V.props.children, H.mode, ue, V.key);
          return Tt.return = H, Tt;
        } else {
          var Pn = IS(V, H.mode, ue);
          return Pn.ref = xp(H, Z, V), Pn.return = H, Pn;
        }
      }
      function Ct(H, Z, V, ue) {
        for (var Te = V.key, Ce = Z; Ce !== null; ) {
          if (Ce.key === Te)
            if (Ce.tag === U && Ce.stateNode.containerInfo === V.containerInfo && Ce.stateNode.implementation === V.implementation) {
              a(H, Ce.sibling);
              var We = l(Ce, V.children || []);
              return We.return = H, We;
            } else {
              a(H, Ce);
              break;
            }
          else
            t(H, Ce);
          Ce = Ce.sibling;
        }
        var tt = GS(V, H.mode, ue);
        return tt.return = H, tt;
      }
      function ht(H, Z, V, ue) {
        var Te = typeof V == "object" && V !== null && V.type === ja && V.key === null;
        if (Te && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Yi:
              return f(Ae(H, Z, V, ue));
            case ta:
              return f(Ct(H, Z, V, ue));
            case Ye:
              var Ce = V._payload, We = V._init;
              return ht(H, Z, We(Ce), ue);
          }
          if (Bn(V))
            return X(H, Z, V, ue);
          if (hi(V))
            return we(H, Z, V, ue);
          bm(H, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? f(He(H, Z, "" + V, ue)) : (typeof V == "function" && xm(H), a(H, Z));
      }
      return ht;
    }
    var yf = VC(!0), BC = VC(!1);
    function WR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Us(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Us(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function KR(e, t) {
      for (var a = e.child; a !== null; )
        w_(a, t), a = a.sibling;
    }
    var wp = {}, mu = fu(wp), Tp = fu(wp), wm = fu(wp);
    function Tm(e) {
      if (e === wp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function IC() {
      var e = Tm(wm.current);
      return e;
    }
    function S0(e, t) {
      Wr(wm, t, e), Wr(Tp, e, e), Wr(mu, wp, e);
      var a = sT(t);
      Qr(mu, e), Wr(mu, a, e);
    }
    function gf(e) {
      Qr(mu, e), Qr(Tp, e), Qr(wm, e);
    }
    function C0() {
      var e = Tm(mu.current);
      return e;
    }
    function YC(e) {
      Tm(wm.current);
      var t = Tm(mu.current), a = cT(t, e.type);
      t !== a && (Wr(Tp, e, e), Wr(mu, a, e));
    }
    function E0(e) {
      Tp.current === e && (Qr(mu, e), Qr(Tp, e));
    }
    var qR = 0, GC = 1, QC = 1, Rp = 2, Ui = fu(qR);
    function b0(e, t) {
      return (e & t) !== 0;
    }
    function Sf(e) {
      return e & GC;
    }
    function x0(e, t) {
      return e & GC | t;
    }
    function XR(e, t) {
      return e | t;
    }
    function yu(e, t) {
      Wr(Ui, t, e);
    }
    function Cf(e) {
      Qr(Ui, e);
    }
    function ZR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || rC(i) || _g(i))
              return t;
          }
        } else if (t.tag === Oe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Xe) !== Pe;
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
    var La = (
      /*   */
      0
    ), er = (
      /* */
      1
    ), Eo = (
      /*  */
      2
    ), tr = (
      /*    */
      4
    ), Dr = (
      /*   */
      8
    ), w0 = [];
    function T0() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e];
        t._workInProgressVersionPrimary = null;
      }
      w0.length = 0;
    }
    function JR(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var be = m.ReactCurrentDispatcher, kp = m.ReactCurrentBatchConfig, R0, Ef;
    R0 = /* @__PURE__ */ new Set();
    var _s = J, Ft = null, nr = null, rr = null, km = !1, Dp = !1, _p = 0, ek = 0, tk = 25, ee = null, si = null, gu = -1, k0 = !1;
    function Ot() {
      {
        var e = ee;
        si === null ? si = [e] : si.push(e);
      }
    }
    function me() {
      {
        var e = ee;
        si !== null && (gu++, si[gu] !== e && nk(e));
      }
    }
    function bf(e) {
      e != null && !Bn(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function nk(e) {
      {
        var t = nt(Ft);
        if (!R0.has(t) && (R0.add(t), si !== null)) {
          for (var a = "", i = 30, l = 0; l <= gu; l++) {
            for (var s = si[l], f = l === gu ? e : s, v = l + 1 + ". " + s; v.length < i; )
              v += " ";
            v += f + `
`, a += v;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Kr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function D0(e, t) {
      if (k0)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ne(e[a], t[a]))
          return !1;
      return !0;
    }
    function xf(e, t, a, i, l, s) {
      _s = s, Ft = t, si = e !== null ? e._debugHookTypes : null, gu = -1, k0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? be.current = hE : si !== null ? be.current = vE : be.current = pE;
      var f = a(i, l);
      if (Dp) {
        var v = 0;
        do {
          if (Dp = !1, _p = 0, v >= tk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, k0 = !1, nr = null, rr = null, t.updateQueue = null, gu = -1, be.current = mE, f = a(i, l);
        } while (Dp);
      }
      be.current = Pm, t._debugHookTypes = si;
      var g = nr !== null && nr.next !== null;
      if (_s = J, Ft = null, nr = null, rr = null, ee = null, si = null, gu = -1, e !== null && (e.flags & Xn) !== (t.flags & Xn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & st) !== Ie && h("Internal React error: Expected static flag was missing. Please notify the React team."), km = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function wf() {
      var e = _p !== 0;
      return _p = 0, e;
    }
    function WC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ie ? t.flags &= ~(Vo | Hr | nn | at) : t.flags &= ~(nn | at), e.lanes = Wl(e.lanes, a);
    }
    function KC() {
      if (be.current = Pm, km) {
        for (var e = Ft.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        km = !1;
      }
      _s = J, Ft = null, nr = null, rr = null, si = null, gu = -1, ee = null, uE = !1, Dp = !1, _p = 0;
    }
    function bo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return rr === null ? Ft.memoizedState = rr = e : rr = rr.next = e, rr;
    }
    function ci() {
      var e;
      if (nr === null) {
        var t = Ft.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = nr.next;
      var a;
      if (rr === null ? a = Ft.memoizedState : a = rr.next, a !== null)
        rr = a, a = rr.next, nr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        nr = e;
        var i = {
          memoizedState: nr.memoizedState,
          baseState: nr.baseState,
          baseQueue: nr.baseQueue,
          queue: nr.queue,
          next: null
        };
        rr === null ? Ft.memoizedState = rr = i : rr = rr.next = i;
      }
      return rr;
    }
    function qC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function N0(e, t, a) {
      var i = bo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = ok.bind(null, Ft, s);
      return [i.memoizedState, f];
    }
    function M0(e, t, a) {
      var i = ci(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = nr, f = s.baseQueue, v = l.pending;
      if (v !== null) {
        if (f !== null) {
          var g = f.next, E = v.next;
          f.next = E, v.next = g;
        }
        s.baseQueue !== f && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, l.pending = null;
      }
      if (f !== null) {
        var w = f.next, z = s.baseState, O = null, I = null, Y = null, X = w;
        do {
          var we = X.lane;
          if (Zo(_s, we)) {
            if (Y !== null) {
              var Ae = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: gt,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              Y = Y.next = Ae;
            }
            if (X.hasEagerState)
              z = X.eagerState;
            else {
              var Ct = X.action;
              z = e(z, Ct);
            }
          } else {
            var He = {
              lane: we,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            Y === null ? (I = Y = He, O = z) : Y = Y.next = He, Ft.lanes = it(Ft.lanes, we), Wp(we);
          }
          X = X.next;
        } while (X !== null && X !== w);
        Y === null ? O = z : Y.next = I, Ne(z, i.memoizedState) || Up(), i.memoizedState = z, i.baseState = O, i.baseQueue = Y, l.lastRenderedState = z;
      }
      var ht = l.interleaved;
      if (ht !== null) {
        var H = ht;
        do {
          var Z = H.lane;
          Ft.lanes = it(Ft.lanes, Z), Wp(Z), H = H.next;
        } while (H !== ht);
      } else
        f === null && (l.lanes = J);
      var V = l.dispatch;
      return [i.memoizedState, V];
    }
    function O0(e, t, a) {
      var i = ci(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, v = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var g = f.next, E = g;
        do {
          var w = E.action;
          v = e(v, w), E = E.next;
        } while (E !== g);
        Ne(v, i.memoizedState) || Up(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), l.lastRenderedState = v;
      }
      return [v, s];
    }
    function t2(e, t, a) {
    }
    function n2(e, t, a) {
    }
    function L0(e, t, a) {
      var i = Ft, l = bo(), s, f = kr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ef || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ef = !0);
      } else {
        if (s = t(), !Ef) {
          var v = t();
          Ne(s, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Ef = !0);
        }
        var g = ay();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        os(g, _s) || XC(i, t, s);
      }
      l.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return l.queue = E, Om(JC.bind(null, i, E, e), [e]), i.flags |= nn, Np(er | Dr, ZC.bind(null, i, E, s, t), void 0, null), s;
    }
    function Dm(e, t, a) {
      var i = Ft, l = ci(), s = t();
      if (!Ef) {
        var f = t();
        Ne(s, f) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Ef = !0);
      }
      var v = l.memoizedState, g = !Ne(v, s);
      g && (l.memoizedState = s, Up());
      var E = l.queue;
      if (Op(JC.bind(null, i, E, e), [e]), E.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      rr !== null && rr.memoizedState.tag & er) {
        i.flags |= nn, Np(er | Dr, ZC.bind(null, i, E, s, t), void 0, null);
        var w = ay();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        os(w, _s) || XC(i, t, s);
      }
      return s;
    }
    function XC(e, t, a) {
      e.flags |= Xu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Ft.updateQueue;
      if (l === null)
        l = qC(), Ft.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function ZC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, eE(t) && tE(e);
    }
    function JC(e, t, a) {
      var i = function() {
        eE(t) && tE(e);
      };
      return a(i);
    }
    function eE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ne(a, i);
      } catch {
        return !0;
      }
    }
    function tE(e) {
      var t = Oa(e, Qe);
      t !== null && lr(t, e, Qe, It);
    }
    function _m(e) {
      var t = bo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: _0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = lk.bind(null, Ft, a);
      return [t.memoizedState, i];
    }
    function z0(e) {
      return M0(_0);
    }
    function A0(e) {
      return O0(_0);
    }
    function Np(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ft.updateQueue;
      if (s === null)
        s = qC(), Ft.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var v = f.next;
          f.next = l, l.next = v, s.lastEffect = l;
        }
      }
      return l;
    }
    function U0(e) {
      var t = bo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Nm(e) {
      var t = ci();
      return t.memoizedState;
    }
    function Mp(e, t, a, i) {
      var l = bo(), s = i === void 0 ? null : i;
      Ft.flags |= e, l.memoizedState = Np(er | t, a, void 0, s);
    }
    function Mm(e, t, a, i) {
      var l = ci(), s = i === void 0 ? null : i, f = void 0;
      if (nr !== null) {
        var v = nr.memoizedState;
        if (f = v.destroy, s !== null) {
          var g = v.deps;
          if (D0(s, g)) {
            l.memoizedState = Np(t, a, f, s);
            return;
          }
        }
      }
      Ft.flags |= e, l.memoizedState = Np(er | t, a, f, s);
    }
    function Om(e, t) {
      return (Ft.mode & Ta) !== Ie ? Mp(Vo | nn | ro, Dr, e, t) : Mp(nn | ro, Dr, e, t);
    }
    function Op(e, t) {
      return Mm(nn, Dr, e, t);
    }
    function $0(e, t) {
      return Mp(at, Eo, e, t);
    }
    function Lm(e, t) {
      return Mm(at, Eo, e, t);
    }
    function F0(e, t) {
      var a = at;
      return a |= Pr, (Ft.mode & Ta) !== Ie && (a |= Hr), Mp(a, tr, e, t);
    }
    function zm(e, t) {
      return Mm(at, tr, e, t);
    }
    function nE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function j0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = at;
      return l |= Pr, (Ft.mode & Ta) !== Ie && (l |= Hr), Mp(l, tr, nE.bind(null, t, e), i);
    }
    function Am(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Mm(at, tr, nE.bind(null, t, e), i);
    }
    function rk(e, t) {
    }
    var Um = rk;
    function P0(e, t) {
      var a = bo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function $m(e, t) {
      var a = ci(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (D0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function H0(e, t) {
      var a = bo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Fm(e, t) {
      var a = ci(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (D0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function V0(e) {
      var t = bo();
      return t.memoizedState = e, e;
    }
    function rE(e) {
      var t = ci(), a = nr, i = a.memoizedState;
      return iE(t, i, e);
    }
    function aE(e) {
      var t = ci();
      if (nr === null)
        return t.memoizedState = e, e;
      var a = nr.memoizedState;
      return iE(t, a, e);
    }
    function iE(e, t, a) {
      var i = !Wy(_s);
      if (i) {
        if (!Ne(a, t)) {
          var l = Ld();
          Ft.lanes = it(Ft.lanes, l), Wp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Up()), e.memoizedState = a, a;
    }
    function ak(e, t, a) {
      var i = ka();
      $n(mr(i, Jn)), e(!0);
      var l = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), kp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function B0() {
      var e = _m(!1), t = e[0], a = e[1], i = ak.bind(null, a), l = bo();
      return l.memoizedState = i, [t, i];
    }
    function oE() {
      var e = z0(), t = e[0], a = ci(), i = a.memoizedState;
      return [t, i];
    }
    function lE() {
      var e = A0(), t = e[0], a = ci(), i = a.memoizedState;
      return [t, i];
    }
    var uE = !1;
    function ik() {
      return uE;
    }
    function I0() {
      var e = bo(), t = ay(), a = t.identifierPrefix, i;
      if (kr()) {
        var l = SR();
        i = ":" + a + "R" + l;
        var s = _p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = ek++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function jm() {
      var e = ci(), t = e.memoizedState;
      return t;
    }
    function ok(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = xu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sE(e))
        cE(t, l);
      else {
        var s = kC(e, t, l, i);
        if (s !== null) {
          var f = fa();
          lr(s, e, i, f), fE(s, t, i);
        }
      }
      dE(e, i);
    }
    function lk(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = xu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sE(e))
        cE(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === J && (s === null || s.lanes === J)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = be.current, be.current = $i;
            try {
              var g = t.lastRenderedState, E = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = E, Ne(E, g)) {
                jR(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              be.current = v;
            }
          }
        }
        var w = kC(e, t, l, i);
        if (w !== null) {
          var z = fa();
          lr(w, e, i, z), fE(w, t, i);
        }
      }
      dE(e, i);
    }
    function sE(e) {
      var t = e.alternate;
      return e === Ft || t !== null && t === Ft;
    }
    function cE(e, t) {
      Dp = km = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function fE(e, t, a) {
      if (Od(a)) {
        var i = t.lanes;
        i = zd(i, e.pendingLanes);
        var l = it(i, a);
        t.lanes = l, Kl(e, l);
      }
    }
    function dE(e, t, a) {
      so(e, t);
    }
    var Pm = {
      readContext: qn,
      useCallback: Kr,
      useContext: Kr,
      useEffect: Kr,
      useImperativeHandle: Kr,
      useInsertionEffect: Kr,
      useLayoutEffect: Kr,
      useMemo: Kr,
      useReducer: Kr,
      useRef: Kr,
      useState: Kr,
      useDebugValue: Kr,
      useDeferredValue: Kr,
      useTransition: Kr,
      useMutableSource: Kr,
      useSyncExternalStore: Kr,
      useId: Kr,
      unstable_isNewReconciler: se
    }, pE = null, vE = null, hE = null, mE = null, xo = null, $i = null, Hm = null;
    {
      var Y0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Je = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      pE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ot(), bf(t), P0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ot(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ot(), bf(t), Om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ot(), bf(a), j0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ot(), bf(t), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ot(), bf(t), F0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ot(), bf(t);
          var a = be.current;
          be.current = xo;
          try {
            return H0(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ot();
          var i = be.current;
          be.current = xo;
          try {
            return N0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ot(), U0(e);
        },
        useState: function(e) {
          ee = "useState", Ot();
          var t = be.current;
          be.current = xo;
          try {
            return _m(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ot(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ot(), V0(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ot(), B0();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ot(), L0(e, t, a);
        },
        useId: function() {
          return ee = "useId", Ot(), I0();
        },
        unstable_isNewReconciler: se
      }, vE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), P0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", me(), j0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), F0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var a = be.current;
          be.current = xo;
          try {
            return H0(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", me();
          var i = be.current;
          be.current = xo;
          try {
            return N0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), U0(e);
        },
        useState: function(e) {
          ee = "useState", me();
          var t = be.current;
          be.current = xo;
          try {
            return _m(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), V0(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), B0();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", me(), L0(e, t, a);
        },
        useId: function() {
          return ee = "useId", me(), I0();
        },
        unstable_isNewReconciler: se
      }, hE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), $m(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", me(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), zm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var a = be.current;
          be.current = $i;
          try {
            return Fm(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", me();
          var i = be.current;
          be.current = $i;
          try {
            return M0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Nm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = be.current;
          be.current = $i;
          try {
            return z0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), rE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), oE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), jm();
        },
        unstable_isNewReconciler: se
      }, mE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), $m(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", me(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), zm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var a = be.current;
          be.current = Hm;
          try {
            return Fm(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", me();
          var i = be.current;
          be.current = Hm;
          try {
            return O0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Nm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = be.current;
          be.current = Hm;
          try {
            return A0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), aE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), lE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), jm();
        },
        unstable_isNewReconciler: se
      }, xo = {
        readContext: function(e) {
          return Y0(), qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Je(), Ot(), P0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Je(), Ot(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Je(), Ot(), Om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Je(), Ot(), j0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Je(), Ot(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Je(), Ot(), F0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Je(), Ot();
          var a = be.current;
          be.current = xo;
          try {
            return H0(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Je(), Ot();
          var i = be.current;
          be.current = xo;
          try {
            return N0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Je(), Ot(), U0(e);
        },
        useState: function(e) {
          ee = "useState", Je(), Ot();
          var t = be.current;
          be.current = xo;
          try {
            return _m(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Je(), Ot(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Je(), Ot(), V0(e);
        },
        useTransition: function() {
          return ee = "useTransition", Je(), Ot(), B0();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Je(), Ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Je(), Ot(), L0(e, t, a);
        },
        useId: function() {
          return ee = "useId", Je(), Ot(), I0();
        },
        unstable_isNewReconciler: se
      }, $i = {
        readContext: function(e) {
          return Y0(), qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Je(), me(), $m(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Je(), me(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Je(), me(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Je(), me(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Je(), me(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Je(), me(), zm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Je(), me();
          var a = be.current;
          be.current = $i;
          try {
            return Fm(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Je(), me();
          var i = be.current;
          be.current = $i;
          try {
            return M0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Je(), me(), Nm();
        },
        useState: function(e) {
          ee = "useState", Je(), me();
          var t = be.current;
          be.current = $i;
          try {
            return z0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Je(), me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Je(), me(), rE(e);
        },
        useTransition: function() {
          return ee = "useTransition", Je(), me(), oE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Je(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Je(), me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", Je(), me(), jm();
        },
        unstable_isNewReconciler: se
      }, Hm = {
        readContext: function(e) {
          return Y0(), qn(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Je(), me(), $m(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Je(), me(), qn(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Je(), me(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Je(), me(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Je(), me(), Lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Je(), me(), zm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Je(), me();
          var a = be.current;
          be.current = $i;
          try {
            return Fm(e, t);
          } finally {
            be.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Je(), me();
          var i = be.current;
          be.current = $i;
          try {
            return O0(e, t, a);
          } finally {
            be.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Je(), me(), Nm();
        },
        useState: function(e) {
          ee = "useState", Je(), me();
          var t = be.current;
          be.current = $i;
          try {
            return A0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Je(), me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Je(), me(), aE(e);
        },
        useTransition: function() {
          return ee = "useTransition", Je(), me(), lE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Je(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Je(), me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", Je(), me(), jm();
        },
        unstable_isNewReconciler: se
      };
    }
    var Su = y.unstable_now, yE = 0, Vm = -1, Lp = -1, Bm = -1, G0 = !1, Im = !1;
    function gE() {
      return G0;
    }
    function uk() {
      Im = !0;
    }
    function sk() {
      G0 = !1, Im = !1;
    }
    function ck() {
      G0 = Im, Im = !1;
    }
    function SE() {
      return yE;
    }
    function CE() {
      yE = Su();
    }
    function Q0(e) {
      Lp = Su(), e.actualStartTime < 0 && (e.actualStartTime = Su());
    }
    function EE(e) {
      Lp = -1;
    }
    function Ym(e, t) {
      if (Lp >= 0) {
        var a = Su() - Lp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Lp = -1;
      }
    }
    function wo(e) {
      if (Vm >= 0) {
        var t = Su() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ae:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function W0(e) {
      if (Bm >= 0) {
        var t = Su() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ae:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function To() {
      Vm = Su();
    }
    function K0() {
      Bm = Su();
    }
    function q0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ns(e, t) {
      return {
        value: e,
        source: t,
        stack: Vf(t),
        digest: null
      };
    }
    function X0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function fk(e, t) {
      return !0;
    }
    function Z0(e, t) {
      try {
        var a = fk(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(i);
        }
        var v = l ? nt(l) : null, g = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === _)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = nt(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var z = g + `
` + f + `

` + ("" + E);
        console.error(z);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var dk = typeof WeakMap == "function" ? WeakMap : Map;
    function bE(e, t, a) {
      var i = vl(It, a);
      i.tag = Zg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        a_(l), Z0(e, t);
      }, i;
    }
    function J0(e, t, a) {
      var i = vl(It, a);
      i.tag = Zg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          Lb(e), Z0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        Lb(e), Z0(e, t), typeof l != "function" && n_(this);
        var g = t.value, E = t.stack;
        this.componentDidCatch(g, {
          componentStack: E !== null ? E : ""
        }), typeof l != "function" && (Gr(e.lanes, Qe) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), i;
    }
    function xE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new dk(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = i_.bind(null, e, t, a);
        Zn && Kp(e, a), t.then(s, s);
      }
    }
    function pk(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function vk(e, t) {
      var a = e.tag;
      if ((e.mode & st) === Ie && (a === T || a === q || a === oe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function wE(e) {
      var t = e;
      do {
        if (t.tag === te && ZR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function TE(e, t, a, i, l) {
      if ((e.mode & st) === Ie) {
        if (e === t)
          e.flags |= Yn;
        else {
          if (e.flags |= Xe, a.flags |= Zu, a.flags &= ~(uc | ra), a.tag === R) {
            var s = a.alternate;
            if (s === null)
              a.tag = ve;
            else {
              var f = vl(It, Qe);
              f.tag = hm, hu(a, f, Qe);
            }
          }
          a.lanes = it(a.lanes, Qe);
        }
        return e;
      }
      return e.flags |= Yn, e.lanes = l, e;
    }
    function hk(e, t, a, i, l) {
      if (a.flags |= ra, Zn && Kp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        vk(a), kr() && a.mode & st && hC();
        var f = wE(t);
        if (f !== null) {
          f.flags &= ~mn, TE(f, t, a, e, l), f.mode & st && xE(e, s, l), pk(f, e, s);
          return;
        } else {
          if (!Ql(l)) {
            xE(e, s, l), OS();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (kr() && a.mode & st) {
        hC();
        var g = wE(t);
        if (g !== null) {
          (g.flags & Yn) === Pe && (g.flags |= mn), TE(g, t, a, e, l), Yg(Ns(i, a));
          return;
        }
      }
      i = Ns(i, a), WD(i);
      var E = t;
      do {
        switch (E.tag) {
          case _: {
            var w = i;
            E.flags |= Yn;
            var z = Un(l);
            E.lanes = it(E.lanes, z);
            var O = bE(E, w, z);
            t0(E, O);
            return;
          }
          case R:
            var I = i, Y = E.type, X = E.stateNode;
            if ((E.flags & Xe) === Pe && (typeof Y.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !wb(X))) {
              E.flags |= Yn;
              var we = Un(l);
              E.lanes = it(E.lanes, we);
              var He = J0(E, I, we);
              t0(E, He);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function mk() {
      return null;
    }
    var zp = m.ReactCurrentOwner, Fi = !1, eS, Ap, tS, nS, rS, Ms, aS, Gm;
    eS = {}, Ap = {}, tS = {}, nS = {}, rS = {}, Ms = !1, aS = {}, Gm = {};
    function sa(e, t, a, i) {
      e === null ? t.child = BC(t, null, a, i) : t.child = yf(t, e.child, a, i);
    }
    function yk(e, t, a, i) {
      t.child = yf(t, e.child, null, i), t.child = yf(t, null, a, i);
    }
    function RE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Oi(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f = a.render, v = t.ref, g, E;
      mf(t, l), uo(t);
      {
        if (zp.current = t, Va(!0), g = xf(e, t, f, i, v, l), E = wf(), t.mode & un) {
          An(!0);
          try {
            g = xf(e, t, f, i, v, l), E = wf();
          } finally {
            An(!1);
          }
        }
        Va(!1);
      }
      return Bo(), e !== null && !Fi ? (WC(e, t, l), hl(e, t, l)) : (kr() && E && jg(t), t.flags |= to, sa(e, t, g, l), t.child);
    }
    function kE(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (b_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Of(s), t.tag = oe, t.type = f, lS(t, s), DE(e, t, f, i, l);
        }
        {
          var v = s.propTypes;
          v && Oi(
            v,
            i,
            // Resolved props
            "prop",
            Vt(s)
          );
        }
        var g = BS(a.type, null, i, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var E = a.type, w = E.propTypes;
        w && Oi(
          w,
          i,
          // Resolved props
          "prop",
          Vt(E)
        );
      }
      var z = e.child, O = pS(e, l);
      if (!O) {
        var I = z.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : je, Y(I, i) && e.ref === t.ref)
          return hl(e, t, l);
      }
      t.flags |= to;
      var X = Us(z, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function DE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, v = f._payload, g = f._init;
          try {
            s = g(v);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && Oi(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(s)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (je(w, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Fi = !1, t.pendingProps = i = w, pS(e, l))
            (e.flags & Zu) !== Pe && (Fi = !0);
          else
            return t.lanes = e.lanes, hl(e, t, l);
      }
      return iS(e, t, a, i, l);
    }
    function _E(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || pe)
        if ((t.mode & st) === Ie) {
          var f = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, iy(t, a);
        } else if (Gr(a, Yr)) {
          var z = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var O = s !== null ? s.baseLanes : a;
          iy(t, O);
        } else {
          var v = null, g;
          if (s !== null) {
            var E = s.baseLanes;
            g = it(E, a);
          } else
            g = a;
          t.lanes = t.childLanes = Yr;
          var w = {
            baseLanes: g,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, iy(t, g), null;
        }
      else {
        var I;
        s !== null ? (I = it(s.baseLanes, a), t.memoizedState = null) : I = a, iy(t, I);
      }
      return sa(e, t, l, a), t.child;
    }
    function gk(e, t, a) {
      var i = t.pendingProps;
      return sa(e, t, i, a), t.child;
    }
    function Sk(e, t, a) {
      var i = t.pendingProps.children;
      return sa(e, t, i, a), t.child;
    }
    function Ck(e, t, a) {
      {
        t.flags |= at;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return sa(e, t, s, a), t.child;
    }
    function NE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= jr, t.flags |= yd);
    }
    function iS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Oi(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f;
      {
        var v = cf(t, a, !0);
        f = ff(t, v);
      }
      var g, E;
      mf(t, l), uo(t);
      {
        if (zp.current = t, Va(!0), g = xf(e, t, a, i, f, l), E = wf(), t.mode & un) {
          An(!0);
          try {
            g = xf(e, t, a, i, f, l), E = wf();
          } finally {
            An(!1);
          }
        }
        Va(!1);
      }
      return Bo(), e !== null && !Fi ? (WC(e, t, l), hl(e, t, l)) : (kr() && E && jg(t), t.flags |= to, sa(e, t, g, l), t.child);
    }
    function ME(e, t, a, i, l) {
      {
        switch ($_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), g = v.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= Yn;
            var E = new Error("Simulated error coming from DevTools"), w = Un(l);
            t.lanes = it(t.lanes, w);
            var z = J0(t, Ns(E, t), w);
            t0(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && Oi(
            O,
            i,
            // Resolved props
            "prop",
            Vt(a)
          );
        }
      }
      var I;
      Co(a) ? (I = !0, am(t)) : I = !1, mf(t, l);
      var Y = t.stateNode, X;
      Y === null ? (Wm(e, t), FC(t, a, i), p0(t, a, i, l), X = !0) : e === null ? X = GR(t, a, i, l) : X = QR(e, t, a, i, l);
      var we = oS(e, t, a, X, I, l);
      {
        var He = t.stateNode;
        X && He.props !== i && (Ms || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), Ms = !0);
      }
      return we;
    }
    function oS(e, t, a, i, l, s) {
      NE(e, t);
      var f = (t.flags & Xe) !== Pe;
      if (!i && !f)
        return l && fC(t, a, !1), hl(e, t, s);
      var v = t.stateNode;
      zp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, EE();
      else {
        uo(t);
        {
          if (Va(!0), g = v.render(), t.mode & un) {
            An(!0);
            try {
              v.render();
            } finally {
              An(!1);
            }
          }
          Va(!1);
        }
        Bo();
      }
      return t.flags |= to, e !== null && f ? yk(e, t, g, s) : sa(e, t, g, s), t.memoizedState = v.state, l && fC(t, a, !0), t.child;
    }
    function OE(e) {
      var t = e.stateNode;
      t.pendingContext ? sC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sC(e, t.context, !1), S0(e, t.containerInfo);
    }
    function Ek(e, t, a) {
      if (OE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      NC(e, t), Sm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var v = f.element;
      if (l.isDehydrated) {
        var g = {
          element: v,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = g, t.memoizedState = g, t.flags & mn) {
          var w = Ns(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return LE(e, t, v, a, w);
        } else if (v !== s) {
          var z = Ns(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return LE(e, t, v, a, z);
        } else {
          TR(t);
          var O = BC(t, null, v, a);
          t.child = O;
          for (var I = O; I; )
            I.flags = I.flags & ~Wt | ba, I = I.sibling;
        }
      } else {
        if (vf(), v === s)
          return hl(e, t, a);
        sa(e, t, v, a);
      }
      return t.child;
    }
    function LE(e, t, a, i, l) {
      return vf(), Yg(l), t.flags |= mn, sa(e, t, a, i), t.child;
    }
    function bk(e, t, a) {
      YC(t), e === null && Ig(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, v = Tg(i, l);
      return v ? f = null : s !== null && Tg(i, s) && (t.flags |= Mt), NE(e, t), sa(e, t, f, a), t.child;
    }
    function xk(e, t) {
      return e === null && Ig(t), null;
    }
    function wk(e, t, a, i) {
      Wm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, v = s._init, g = v(f);
      t.type = g;
      var E = t.tag = x_(g), w = Ai(g, l), z;
      switch (E) {
        case T:
          return lS(t, g), t.type = g = Of(g), z = iS(null, t, g, w, i), z;
        case R:
          return t.type = g = $S(g), z = ME(null, t, g, w, i), z;
        case q:
          return t.type = g = FS(g), z = RE(null, t, g, w, i), z;
        case Se: {
          if (t.type !== t.elementType) {
            var O = g.propTypes;
            O && Oi(
              O,
              w,
              // Resolved for outer only
              "prop",
              Vt(g)
            );
          }
          return z = kE(
            null,
            t,
            g,
            Ai(g.type, w),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var I = "";
      throw g !== null && typeof g == "object" && g.$$typeof === Ye && (I = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + I));
    }
    function Tk(e, t, a, i, l) {
      Wm(e, t), t.tag = R;
      var s;
      return Co(a) ? (s = !0, am(t)) : s = !1, mf(t, l), FC(t, a, i), p0(t, a, i, l), oS(null, t, a, !0, s, l);
    }
    function Rk(e, t, a, i) {
      Wm(e, t);
      var l = t.pendingProps, s;
      {
        var f = cf(t, a, !1);
        s = ff(t, f);
      }
      mf(t, i);
      var v, g;
      uo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = Vt(a) || "Unknown";
          eS[E] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), eS[E] = !0);
        }
        t.mode & un && zi.recordLegacyContextWarning(t, null), Va(!0), zp.current = t, v = xf(null, t, a, l, s, i), g = wf(), Va(!1);
      }
      if (Bo(), t.flags |= to, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var w = Vt(a) || "Unknown";
        Ap[w] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), Ap[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var z = Vt(a) || "Unknown";
          Ap[z] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Ap[z] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Co(a) ? (O = !0, am(t)) : O = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, e0(t), $C(t, v), p0(t, a, l, i), oS(null, t, a, !0, O, i);
      } else {
        if (t.tag = T, t.mode & un) {
          An(!0);
          try {
            v = xf(null, t, a, l, s, i), g = wf();
          } finally {
            An(!1);
          }
        }
        return kr() && g && jg(t), sa(null, t, v, i), lS(t, a), t.child;
      }
    }
    function lS(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ga();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), rS[l] || (rS[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Vt(t) || "Unknown";
          nS[f] || (h("%s: Function components do not support getDerivedStateFromProps.", f), nS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Vt(t) || "Unknown";
          tS[v] || (h("%s: Function components do not support contextType.", v), tS[v] = !0);
        }
      }
    }
    var uS = {
      dehydrated: null,
      treeContext: null,
      retryLane: gt
    };
    function sS(e) {
      return {
        baseLanes: e,
        cachePool: mk(),
        transitions: null
      };
    }
    function kk(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Dk(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return b0(e, Rp);
    }
    function _k(e, t) {
      return Wl(e.childLanes, t);
    }
    function zE(e, t, a) {
      var i = t.pendingProps;
      F_(t) && (t.flags |= Xe);
      var l = Ui.current, s = !1, f = (t.flags & Xe) !== Pe;
      if (f || Dk(l, e) ? (s = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (l = XR(l, QC)), l = Sf(l), yu(t, l), e === null) {
        Ig(t);
        var v = t.memoizedState;
        if (v !== null) {
          var g = v.dehydrated;
          if (g !== null)
            return zk(t, g);
        }
        var E = i.children, w = i.fallback;
        if (s) {
          var z = Nk(t, E, w, a), O = t.child;
          return O.memoizedState = sS(a), t.memoizedState = uS, z;
        } else
          return cS(t, E);
      } else {
        var I = e.memoizedState;
        if (I !== null) {
          var Y = I.dehydrated;
          if (Y !== null)
            return Ak(e, t, f, i, Y, I, a);
        }
        if (s) {
          var X = i.fallback, we = i.children, He = Ok(e, t, we, X, a), Ae = t.child, Ct = e.child.memoizedState;
          return Ae.memoizedState = Ct === null ? sS(a) : kk(Ct, a), Ae.childLanes = _k(e, a), t.memoizedState = uS, He;
        } else {
          var ht = i.children, H = Mk(e, t, ht, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function cS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = fS(l, i);
      return s.return = e, e.child = s, s;
    }
    function Nk(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, g;
      return (l & st) === Ie && s !== null ? (v = s, v.childLanes = J, v.pendingProps = f, e.mode & Ge && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), g = Tu(a, l, i, null)) : (v = fS(f, l), g = Tu(a, l, i, null)), v.return = e, g.return = e, v.sibling = g, e.child = v, g;
    }
    function fS(e, t, a) {
      return Ab(e, t, J, null);
    }
    function AE(e, t) {
      return Us(e, t);
    }
    function Mk(e, t, a, i) {
      var l = e.child, s = l.sibling, f = AE(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & st) === Ie && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Nt) : v.push(s);
      }
      return t.child = f, f;
    }
    function Ok(e, t, a, i, l) {
      var s = t.mode, f = e.child, v = f.sibling, g = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & st) === Ie && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var w = t.child;
        E = w, E.childLanes = J, E.pendingProps = g, t.mode & Ge && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = AE(f, g), E.subtreeFlags = f.subtreeFlags & Xn;
      var z;
      return v !== null ? z = Us(v, i) : (z = Tu(i, s, l, null), z.flags |= Wt), z.return = t, E.return = t, E.sibling = z, t.child = E, z;
    }
    function Qm(e, t, a, i) {
      i !== null && Yg(i), yf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = cS(t, s);
      return f.flags |= Wt, t.memoizedState = null, f;
    }
    function Lk(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = fS(f, s), g = Tu(i, s, l, null);
      return g.flags |= Wt, v.return = t, g.return = t, v.sibling = g, t.child = v, (t.mode & st) !== Ie && yf(t, e.child, null, l), g;
    }
    function zk(e, t, a) {
      return (e.mode & st) === Ie ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Qe) : _g(t) ? e.lanes = Go : e.lanes = Yr, null;
    }
    function Ak(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & mn) {
          t.flags &= ~mn;
          var H = X0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Qm(e, t, f, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var Z = i.children, V = i.fallback, ue = Lk(e, t, Z, V, f), Te = t.child;
          return Te.memoizedState = sS(f), t.memoizedState = uS, ue;
        }
      else {
        if (xR(), (t.mode & st) === Ie)
          return Qm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (_g(l)) {
          var v, g, E;
          {
            var w = PT(l);
            v = w.digest, g = w.message, E = w.stack;
          }
          var z;
          g ? z = new Error(g) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = X0(z, v, E);
          return Qm(e, t, f, O);
        }
        var I = Gr(f, e.childLanes);
        if (Fi || I) {
          var Y = ay();
          if (Y !== null) {
            var X = qy(Y, f);
            if (X !== gt && X !== s.retryLane) {
              s.retryLane = X;
              var we = It;
              Oa(e, X), lr(Y, e, X, we);
            }
          }
          OS();
          var He = X0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Qm(e, t, f, He);
        } else if (rC(l)) {
          t.flags |= Xe, t.child = e.child;
          var Ae = o_.bind(null, e);
          return HT(l, Ae), null;
        } else {
          RR(t, l, s.treeContext);
          var Ct = i.children, ht = cS(t, Ct);
          return ht.flags |= ba, ht;
        }
      }
    }
    function UE(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), qg(e.return, t, a);
    }
    function Uk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === te) {
          var l = i.memoizedState;
          l !== null && UE(i, a, e);
        } else if (i.tag === Oe)
          UE(i, a, e);
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
    function $k(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Fk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !aS[e])
        if (aS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              h('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          h('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function jk(e, t) {
      e !== void 0 && !Gm[e] && (e !== "collapsed" && e !== "hidden" ? (Gm[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gm[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $E(e, t) {
      {
        var a = Bn(e), i = !a && typeof hi(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Pk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Bn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!$E(e[a], a))
              return;
        } else {
          var i = hi(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!$E(s.value, f))
                  return;
                f++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function dS(e, t, a, i, l) {
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
    function FE(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      Fk(l), jk(s, l), Pk(f, l), sa(e, t, f, a);
      var v = Ui.current, g = b0(v, Rp);
      if (g)
        v = x0(v, Rp), t.flags |= Xe;
      else {
        var E = e !== null && (e.flags & Xe) !== Pe;
        E && Uk(t, t.child, a), v = Sf(v);
      }
      if (yu(t, v), (t.mode & st) === Ie)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var w = $k(t.child), z;
            w === null ? (z = t.child, t.child = null) : (z = w.sibling, w.sibling = null), dS(
              t,
              !1,
              // isBackwards
              z,
              w,
              s
            );
            break;
          }
          case "backwards": {
            var O = null, I = t.child;
            for (t.child = null; I !== null; ) {
              var Y = I.alternate;
              if (Y !== null && Rm(Y) === null) {
                t.child = I;
                break;
              }
              var X = I.sibling;
              I.sibling = O, O = I, I = X;
            }
            dS(
              t,
              !0,
              // isBackwards
              O,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            dS(
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
    function Hk(e, t, a) {
      S0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = yf(t, null, i, a) : sa(e, t, i, a), t.child;
    }
    var jE = !1;
    function Vk(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || jE || (jE = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && Oi(g, s, "prop", "Context.Provider");
      }
      if (RC(t, l, v), f !== null) {
        var E = f.value;
        if (Ne(E, v)) {
          if (f.children === s.children && !nm())
            return hl(e, t, a);
        } else
          UR(t, l, a);
      }
      var w = s.children;
      return sa(e, t, w, a), t.child;
    }
    var PE = !1;
    function Bk(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (PE || (PE = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), mf(t, a);
      var f = qn(i);
      uo(t);
      var v;
      return zp.current = t, Va(!0), v = s(f), Va(!1), Bo(), t.flags |= to, sa(e, t, v, a), t.child;
    }
    function Up() {
      Fi = !0;
    }
    function Wm(e, t) {
      (t.mode & st) === Ie && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Wt);
    }
    function hl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), EE(), Wp(t.lanes), Gr(a, t.childLanes) ? (WR(e, t), t.child) : null;
    }
    function Ik(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Nt) : s.push(e), a.flags |= Wt, a;
      }
    }
    function pS(e, t) {
      var a = e.lanes;
      return !!Gr(a, t);
    }
    function Yk(e, t, a) {
      switch (t.tag) {
        case _:
          OE(t), t.stateNode, vf();
          break;
        case F:
          YC(t);
          break;
        case R: {
          var i = t.type;
          Co(i) && am(t);
          break;
        }
        case U:
          S0(t, t.stateNode.containerInfo);
          break;
        case K: {
          var l = t.memoizedProps.value, s = t.type._context;
          RC(t, s, l);
          break;
        }
        case ae:
          {
            var f = Gr(a, t.childLanes);
            f && (t.flags |= at);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case te: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return yu(t, Sf(Ui.current)), t.flags |= Xe, null;
            var E = t.child, w = E.childLanes;
            if (Gr(a, w))
              return zE(e, t, a);
            yu(t, Sf(Ui.current));
            var z = hl(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            yu(t, Sf(Ui.current));
          break;
        }
        case Oe: {
          var O = (e.flags & Xe) !== Pe, I = Gr(a, t.childLanes);
          if (O) {
            if (I)
              return FE(e, t, a);
            t.flags |= Xe;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), yu(t, Ui.current), I)
            break;
          return null;
        }
        case $e:
        case Ve:
          return t.lanes = J, _E(e, t, a);
      }
      return hl(e, t, a);
    }
    function HE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ik(e, t, BS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Fi = !0;
        else {
          var s = pS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === Pe)
            return Fi = !1, Yk(e, t, a);
          (e.flags & Zu) !== Pe ? Fi = !0 : Fi = !1;
        }
      } else if (Fi = !1, kr() && yR(t)) {
        var f = t.index, v = gR();
        vC(t, v, f);
      }
      switch (t.lanes = J, t.tag) {
        case A:
          return Rk(e, t, t.type, a);
        case de: {
          var g = t.elementType;
          return wk(e, t, g, a);
        }
        case T: {
          var E = t.type, w = t.pendingProps, z = t.elementType === E ? w : Ai(E, w);
          return iS(e, t, E, z, a);
        }
        case R: {
          var O = t.type, I = t.pendingProps, Y = t.elementType === O ? I : Ai(O, I);
          return ME(e, t, O, Y, a);
        }
        case _:
          return Ek(e, t, a);
        case F:
          return bk(e, t, a);
        case $:
          return xk(e, t);
        case te:
          return zE(e, t, a);
        case U:
          return Hk(e, t, a);
        case q: {
          var X = t.type, we = t.pendingProps, He = t.elementType === X ? we : Ai(X, we);
          return RE(e, t, X, He, a);
        }
        case j:
          return gk(e, t, a);
        case G:
          return Sk(e, t, a);
        case ae:
          return Ck(e, t, a);
        case K:
          return Vk(e, t, a);
        case W:
          return Bk(e, t, a);
        case Se: {
          var Ae = t.type, Ct = t.pendingProps, ht = Ai(Ae, Ct);
          if (t.type !== t.elementType) {
            var H = Ae.propTypes;
            H && Oi(
              H,
              ht,
              // Resolved for outer only
              "prop",
              Vt(Ae)
            );
          }
          return ht = Ai(Ae.type, ht), kE(e, t, Ae, ht, a);
        }
        case oe:
          return DE(e, t, t.type, t.pendingProps, a);
        case ve: {
          var Z = t.type, V = t.pendingProps, ue = t.elementType === Z ? V : Ai(Z, V);
          return Tk(e, t, Z, ue, a);
        }
        case Oe:
          return FE(e, t, a);
        case Ue:
          break;
        case $e:
          return _E(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Tf(e) {
      e.flags |= at;
    }
    function VE(e) {
      e.flags |= jr, e.flags |= yd;
    }
    var BE, vS, IE, YE;
    BE = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === F || l.tag === $)
          vT(e, l.stateNode);
        else if (l.tag !== U) {
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
    }, vS = function(e, t) {
    }, IE = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = C0(), g = mT(f, a, s, i, l, v);
        t.updateQueue = g, g && Tf(t);
      }
    }, YE = function(e, t, a, i) {
      a !== i && Tf(t);
    };
    function $p(e, t) {
      if (!kr())
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
    function _r(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = Pe;
      if (t) {
        if ((e.mode & Ge) !== Ie) {
          for (var g = e.selfBaseDuration, E = e.child; E !== null; )
            a = it(a, it(E.lanes, E.childLanes)), i |= E.subtreeFlags & Xn, i |= E.flags & Xn, g += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = g;
        } else
          for (var w = e.child; w !== null; )
            a = it(a, it(w.lanes, w.childLanes)), i |= w.subtreeFlags & Xn, i |= w.flags & Xn, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ge) !== Ie) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = it(a, it(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = it(a, it(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Gk(e, t, a) {
      if (MR() && (t.mode & st) !== Ie && (t.flags & Xe) === Pe)
        return EC(t), vf(), t.flags |= mn | ra | Yn, !1;
      var i = sm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (_R(t), _r(t), (t.mode & Ge) !== Ie) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (vf(), (t.flags & Xe) === Pe && (t.memoizedState = null), t.flags |= at, _r(t), (t.mode & Ge) !== Ie) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return bC(), !0;
    }
    function GE(e, t, a) {
      var i = t.pendingProps;
      switch (Pg(t), t.tag) {
        case A:
        case de:
        case oe:
        case T:
        case q:
        case j:
        case G:
        case ae:
        case W:
        case Se:
          return _r(t), null;
        case R: {
          var l = t.type;
          return Co(l) && rm(t), _r(t), null;
        }
        case _: {
          var s = t.stateNode;
          if (gf(t), Ug(t), T0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = sm(t);
            if (f)
              Tf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & mn) !== Pe) && (t.flags |= Ea, bC());
            }
          }
          return vS(e, t), _r(t), null;
        }
        case F: {
          E0(t);
          var g = IC(), E = t.type;
          if (e !== null && t.stateNode != null)
            IE(e, t, E, i, g), e.ref !== t.ref && VE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return _r(t), null;
            }
            var w = C0(), z = sm(t);
            if (z)
              kR(t, g, w) && Tf(t);
            else {
              var O = pT(E, i, g, w, t);
              BE(O, t, !1, !1), t.stateNode = O, hT(O, E, i, g) && Tf(t);
            }
            t.ref !== null && VE(t);
          }
          return _r(t), null;
        }
        case $: {
          var I = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            YE(e, t, Y, I);
          } else {
            if (typeof I != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = IC(), we = C0(), He = sm(t);
            He ? DR(t) && Tf(t) : t.stateNode = yT(I, X, we, t);
          }
          return _r(t), null;
        }
        case te: {
          Cf(t);
          var Ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ct = Gk(e, t, Ae);
            if (!Ct)
              return t.flags & Yn ? t : null;
          }
          if ((t.flags & Xe) !== Pe)
            return t.lanes = a, (t.mode & Ge) !== Ie && q0(t), t;
          var ht = Ae !== null, H = e !== null && e.memoizedState !== null;
          if (ht !== H && ht) {
            var Z = t.child;
            if (Z.flags |= no, (t.mode & st) !== Ie) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ke);
              V || b0(Ui.current, QC) ? QD() : OS();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= at), _r(t), (t.mode & Ge) !== Ie && ht) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case U:
          return gf(t), vS(e, t), e === null && cR(t.stateNode.containerInfo), _r(t), null;
        case K:
          var Ce = t.type._context;
          return Kg(Ce, t), _r(t), null;
        case ve: {
          var We = t.type;
          return Co(We) && rm(t), _r(t), null;
        }
        case Oe: {
          Cf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return _r(t), null;
          var jt = (t.flags & Xe) !== Pe, Tt = tt.rendering;
          if (Tt === null)
            if (jt)
              $p(tt, !1);
            else {
              var Pn = KD() && (e === null || (e.flags & Xe) === Pe);
              if (!Pn)
                for (var Rt = t.child; Rt !== null; ) {
                  var On = Rm(Rt);
                  if (On !== null) {
                    jt = !0, t.flags |= Xe, $p(tt, !1);
                    var qr = On.updateQueue;
                    return qr !== null && (t.updateQueue = qr, t.flags |= at), t.subtreeFlags = Pe, KR(t, a), yu(t, x0(Ui.current, Rp)), t.child;
                  }
                  Rt = Rt.sibling;
                }
              tt.tail !== null && ln() > pb() && (t.flags |= Xe, jt = !0, $p(tt, !1), t.lanes = Nd);
            }
          else {
            if (!jt) {
              var zr = Rm(Tt);
              if (zr !== null) {
                t.flags |= Xe, jt = !0;
                var qa = zr.updateQueue;
                if (qa !== null && (t.updateQueue = qa, t.flags |= at), $p(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Tt.alternate && !kr())
                  return _r(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                ln() * 2 - tt.renderingStartTime > pb() && a !== Yr && (t.flags |= Xe, jt = !0, $p(tt, !1), t.lanes = Nd);
            }
            if (tt.isBackwards)
              Tt.sibling = t.child, t.child = Tt;
            else {
              var da = tt.last;
              da !== null ? da.sibling = Tt : t.child = Tt, tt.last = Tt;
            }
          }
          if (tt.tail !== null) {
            var pa = tt.tail;
            tt.rendering = pa, tt.tail = pa.sibling, tt.renderingStartTime = ln(), pa.sibling = null;
            var Xr = Ui.current;
            return jt ? Xr = x0(Xr, Rp) : Xr = Sf(Xr), yu(t, Xr), pa;
          }
          return _r(t), null;
        }
        case Ue:
          break;
        case $e:
        case Ve: {
          MS(t);
          var Cl = t.memoizedState, Lf = Cl !== null;
          if (e !== null) {
            var Jp = e.memoizedState, Do = Jp !== null;
            Do !== Lf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !pe && (t.flags |= no);
          }
          return !Lf || (t.mode & st) === Ie ? _r(t) : Gr(ko, Yr) && (_r(t), t.subtreeFlags & (Wt | at) && (t.flags |= no)), null;
        }
        case kt:
          return null;
        case ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qk(e, t, a) {
      switch (Pg(t), t.tag) {
        case R: {
          var i = t.type;
          Co(i) && rm(t);
          var l = t.flags;
          return l & Yn ? (t.flags = l & ~Yn | Xe, (t.mode & Ge) !== Ie && q0(t), t) : null;
        }
        case _: {
          t.stateNode, gf(t), Ug(t), T0();
          var s = t.flags;
          return (s & Yn) !== Pe && (s & Xe) === Pe ? (t.flags = s & ~Yn | Xe, t) : null;
        }
        case F:
          return E0(t), null;
        case te: {
          Cf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            vf();
          }
          var v = t.flags;
          return v & Yn ? (t.flags = v & ~Yn | Xe, (t.mode & Ge) !== Ie && q0(t), t) : null;
        }
        case Oe:
          return Cf(t), null;
        case U:
          return gf(t), null;
        case K:
          var g = t.type._context;
          return Kg(g, t), null;
        case $e:
        case Ve:
          return MS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function QE(e, t, a) {
      switch (Pg(t), t.tag) {
        case R: {
          var i = t.type.childContextTypes;
          i != null && rm(t);
          break;
        }
        case _: {
          t.stateNode, gf(t), Ug(t), T0();
          break;
        }
        case F: {
          E0(t);
          break;
        }
        case U:
          gf(t);
          break;
        case te:
          Cf(t);
          break;
        case Oe:
          Cf(t);
          break;
        case K:
          var l = t.type._context;
          Kg(l, t);
          break;
        case $e:
        case Ve:
          MS(t);
          break;
      }
    }
    var WE = null;
    WE = /* @__PURE__ */ new Set();
    var Km = !1, Nr = !1, Wk = typeof WeakSet == "function" ? WeakSet : Set, Me = null, Rf = null, kf = null;
    function Kk(e) {
      Ho(null, function() {
        throw e;
      }), hd();
    }
    var qk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ge)
        try {
          To(), t.componentWillUnmount();
        } finally {
          wo(e);
        }
      else
        t.componentWillUnmount();
    };
    function KE(e, t) {
      try {
        Cu(tr, e);
      } catch (a) {
        Zt(e, t, a);
      }
    }
    function hS(e, t, a) {
      try {
        qk(e, a);
      } catch (i) {
        Zt(e, t, i);
      }
    }
    function Xk(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Zt(e, t, i);
      }
    }
    function qE(e, t) {
      try {
        ZE(e);
      } catch (a) {
        Zt(e, t, a);
      }
    }
    function Df(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (xt && an && e.mode & Ge)
              try {
                To(), i = a(null);
              } finally {
                wo(e);
              }
            else
              i = a(null);
          } catch (l) {
            Zt(e, t, l);
          }
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          a.current = null;
    }
    function qm(e, t, a) {
      try {
        a();
      } catch (i) {
        Zt(e, t, i);
      }
    }
    var XE = !1;
    function Zk(e, t) {
      fT(e.containerInfo), Me = t, Jk();
      var a = XE;
      return XE = !1, a;
    }
    function Jk() {
      for (; Me !== null; ) {
        var e = Me, t = e.child;
        (e.subtreeFlags & Pl) !== Pe && t !== null ? (t.return = e, Me = t) : eD();
      }
    }
    function eD() {
      for (; Me !== null; ) {
        var e = Me;
        $t(e);
        try {
          tD(e);
        } catch (a) {
          Zt(e, e.return, a);
        }
        zn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Me = t;
          return;
        }
        Me = e.return;
      }
    }
    function tD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ea) !== Pe) {
        switch ($t(e), e.tag) {
          case T:
          case q:
          case oe:
            break;
          case R: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ms && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ai(e.type, i), l);
              {
                var v = WE;
                f === void 0 && !v.has(e.type) && (v.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case _: {
            {
              var g = e.stateNode;
              UT(g.containerInfo);
            }
            break;
          }
          case F:
          case $:
          case U:
          case ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        zn();
      }
    }
    function ji(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Dr) !== La ? mc(t) : (e & tr) !== La && yc(t), (e & Eo) !== La && qp(!0), qm(t, a, v), (e & Eo) !== La && qp(!1), (e & Dr) !== La ? uh() : (e & tr) !== La && Hl());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Cu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Dr) !== La ? lh(t) : (e & tr) !== La && sh(t);
            var f = s.create;
            (e & Eo) !== La && qp(!0), s.destroy = f(), (e & Eo) !== La && qp(!1), (e & Dr) !== La ? kd() : (e & tr) !== La && ch();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var g = void 0;
                (s.tag & tr) !== Pe ? g = "useLayoutEffect" : (s.tag & Eo) !== Pe ? g = "useInsertionEffect" : g = "useEffect";
                var E = void 0;
                v === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? E = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + v, h("%s must not return anything besides a function, which is used for clean-up.%s", g, E);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function nD(e, t) {
      if ((t.flags & at) !== Pe)
        switch (t.tag) {
          case ae: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = SE(), v = t.alternate === null ? "mount" : "update";
            gE() && (v = "nested-update"), typeof s == "function" && s(l, v, a, f);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case _:
                    var E = g.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                  case ae:
                    var w = g.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function rD(e, t, a, i) {
      if ((a.flags & vr) !== Pe)
        switch (a.tag) {
          case T:
          case q:
          case oe: {
            if (!Nr)
              if (a.mode & Ge)
                try {
                  To(), Cu(tr | er, a);
                } finally {
                  wo(a);
                }
              else
                Cu(tr | er, a);
            break;
          }
          case R: {
            var l = a.stateNode;
            if (a.flags & at && !Nr)
              if (t === null)
                if (a.type === a.elementType && !Ms && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & Ge)
                  try {
                    To(), l.componentDidMount();
                  } finally {
                    wo(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ai(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ms && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & Ge)
                  try {
                    To(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    wo(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !Ms && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), OC(a, v, l));
            break;
          }
          case _: {
            var g = a.updateQueue;
            if (g !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case F:
                    E = a.child.stateNode;
                    break;
                  case R:
                    E = a.child.stateNode;
                    break;
                }
              OC(a, g, E);
            }
            break;
          }
          case F: {
            var w = a.stateNode;
            if (t === null && a.flags & at) {
              var z = a.type, O = a.memoizedProps;
              bT(w, z, O);
            }
            break;
          }
          case $:
            break;
          case U:
            break;
          case ae: {
            {
              var I = a.memoizedProps, Y = I.onCommit, X = I.onRender, we = a.stateNode.effectDuration, He = SE(), Ae = t === null ? "mount" : "update";
              gE() && (Ae = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, Ae, a.actualDuration, a.treeBaseDuration, a.actualStartTime, He);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Ae, we, He), e_(a);
                var Ct = a.return;
                e:
                  for (; Ct !== null; ) {
                    switch (Ct.tag) {
                      case _:
                        var ht = Ct.stateNode;
                        ht.effectDuration += we;
                        break e;
                      case ae:
                        var H = Ct.stateNode;
                        H.effectDuration += we;
                        break e;
                    }
                    Ct = Ct.return;
                  }
              }
            }
            break;
          }
          case te: {
            fD(e, a);
            break;
          }
          case Oe:
          case ve:
          case Ue:
          case $e:
          case Ve:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Nr || a.flags & jr && ZE(a);
    }
    function aD(e) {
      switch (e.tag) {
        case T:
        case q:
        case oe: {
          if (e.mode & Ge)
            try {
              To(), KE(e, e.return);
            } finally {
              wo(e);
            }
          else
            KE(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Xk(e, e.return, t), qE(e, e.return);
          break;
        }
        case F: {
          qE(e, e.return);
          break;
        }
      }
    }
    function iD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === F) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? OT(l) : zT(i.stateNode, i.memoizedProps);
            } catch (f) {
              Zt(e, e.return, f);
            }
          }
        } else if (i.tag === $) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? LT(s) : AT(s, i.memoizedProps);
            } catch (f) {
              Zt(e, e.return, f);
            }
        } else if (!((i.tag === $e || i.tag === Ve) && i.memoizedState !== null && i !== e)) {
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
    function ZE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case F:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Ge)
            try {
              To(), l = t(i);
            } finally {
              wo(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = i;
      }
    }
    function oD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var a = e.stateNode;
          a !== null && pR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function lD(e) {
      for (var t = e.return; t !== null; ) {
        if (eb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eb(e) {
      return e.tag === F || e.tag === _ || e.tag === U;
    }
    function tb(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || eb(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== $ && t.tag !== De; ) {
            if (t.flags & Wt || t.child === null || t.tag === U)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Wt))
            return t.stateNode;
        }
    }
    function uD(e) {
      var t = lD(e);
      switch (t.tag) {
        case F: {
          var a = t.stateNode;
          t.flags & Mt && (nC(a), t.flags &= ~Mt);
          var i = tb(e);
          yS(e, i, a);
          break;
        }
        case _:
        case U: {
          var l = t.stateNode.containerInfo, s = tb(e);
          mS(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function mS(e, t, a) {
      var i = e.tag, l = i === F || i === $;
      if (l) {
        var s = e.stateNode;
        t ? DT(a, s, t) : RT(a, s);
      } else if (i !== U) {
        var f = e.child;
        if (f !== null) {
          mS(f, t, a);
          for (var v = f.sibling; v !== null; )
            mS(v, t, a), v = v.sibling;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.tag, l = i === F || i === $;
      if (l) {
        var s = e.stateNode;
        t ? kT(a, s, t) : TT(a, s);
      } else if (i !== U) {
        var f = e.child;
        if (f !== null) {
          yS(f, t, a);
          for (var v = f.sibling; v !== null; )
            yS(v, t, a), v = v.sibling;
        }
      }
    }
    var Mr = null, Pi = !1;
    function sD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case F: {
                Mr = i.stateNode, Pi = !1;
                break e;
              }
              case _: {
                Mr = i.stateNode.containerInfo, Pi = !0;
                break e;
              }
              case U: {
                Mr = i.stateNode.containerInfo, Pi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Mr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nb(e, t, a), Mr = null, Pi = !1;
      }
      oD(a);
    }
    function Eu(e, t, a) {
      for (var i = a.child; i !== null; )
        nb(e, t, i), i = i.sibling;
    }
    function nb(e, t, a) {
      switch (Td(a), a.tag) {
        case F:
          Nr || Df(a, t);
        case $: {
          {
            var i = Mr, l = Pi;
            Mr = null, Eu(e, t, a), Mr = i, Pi = l, Mr !== null && (Pi ? NT(Mr, a.stateNode) : _T(Mr, a.stateNode));
          }
          return;
        }
        case De: {
          Mr !== null && (Pi ? MT(Mr, a.stateNode) : Dg(Mr, a.stateNode));
          return;
        }
        case U: {
          {
            var s = Mr, f = Pi;
            Mr = a.stateNode.containerInfo, Pi = !0, Eu(e, t, a), Mr = s, Pi = f;
          }
          return;
        }
        case T:
        case q:
        case Se:
        case oe: {
          if (!Nr) {
            var v = a.updateQueue;
            if (v !== null) {
              var g = v.lastEffect;
              if (g !== null) {
                var E = g.next, w = E;
                do {
                  var z = w, O = z.destroy, I = z.tag;
                  O !== void 0 && ((I & Eo) !== La ? qm(a, t, O) : (I & tr) !== La && (yc(a), a.mode & Ge ? (To(), qm(a, t, O), wo(a)) : qm(a, t, O), Hl())), w = w.next;
                } while (w !== E);
              }
            }
          }
          Eu(e, t, a);
          return;
        }
        case R: {
          if (!Nr) {
            Df(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && hS(a, t, Y);
          }
          Eu(e, t, a);
          return;
        }
        case Ue: {
          Eu(e, t, a);
          return;
        }
        case $e: {
          if (
            // TODO: Remove this dead flag
            a.mode & st
          ) {
            var X = Nr;
            Nr = X || a.memoizedState !== null, Eu(e, t, a), Nr = X;
          } else
            Eu(e, t, a);
          break;
        }
        default: {
          Eu(e, t, a);
          return;
        }
      }
    }
    function cD(e) {
      e.memoizedState;
    }
    function fD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && qT(s);
          }
        }
      }
    }
    function rb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Wk()), t.forEach(function(i) {
          var l = l_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zn)
              if (Rf !== null && kf !== null)
                Kp(kf, Rf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function dD(e, t, a) {
      Rf = a, kf = e, $t(t), ab(t, e), $t(t), Rf = null, kf = null;
    }
    function Hi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            sD(e, t, s);
          } catch (g) {
            Zt(s, t, g);
          }
        }
      var f = ky();
      if (t.subtreeFlags & Vr)
        for (var v = t.child; v !== null; )
          $t(v), ab(v, e), v = v.sibling;
      $t(f);
    }
    function ab(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case T:
        case q:
        case Se:
        case oe: {
          if (Hi(t, e), Ro(e), l & at) {
            try {
              ji(Eo | er, e, e.return), Cu(Eo | er, e);
            } catch (We) {
              Zt(e, e.return, We);
            }
            if (e.mode & Ge) {
              try {
                To(), ji(tr | er, e, e.return);
              } catch (We) {
                Zt(e, e.return, We);
              }
              wo(e);
            } else
              try {
                ji(tr | er, e, e.return);
              } catch (We) {
                Zt(e, e.return, We);
              }
          }
          return;
        }
        case R: {
          Hi(t, e), Ro(e), l & jr && i !== null && Df(i, i.return);
          return;
        }
        case F: {
          Hi(t, e), Ro(e), l & jr && i !== null && Df(i, i.return);
          {
            if (e.flags & Mt) {
              var s = e.stateNode;
              try {
                nC(s);
              } catch (We) {
                Zt(e, e.return, We);
              }
            }
            if (l & at) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, g = i !== null ? i.memoizedProps : v, E = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    xT(f, w, E, g, v, e);
                  } catch (We) {
                    Zt(e, e.return, We);
                  }
              }
            }
          }
          return;
        }
        case $: {
          if (Hi(t, e), Ro(e), l & at) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, O = e.memoizedProps, I = i !== null ? i.memoizedProps : O;
            try {
              wT(z, I, O);
            } catch (We) {
              Zt(e, e.return, We);
            }
          }
          return;
        }
        case _: {
          if (Hi(t, e), Ro(e), l & at && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                KT(t.containerInfo);
              } catch (We) {
                Zt(e, e.return, We);
              }
          }
          return;
        }
        case U: {
          Hi(t, e), Ro(e);
          return;
        }
        case te: {
          Hi(t, e), Ro(e);
          var X = e.child;
          if (X.flags & no) {
            var we = X.stateNode, He = X.memoizedState, Ae = He !== null;
            if (we.isHidden = Ae, Ae) {
              var Ct = X.alternate !== null && X.alternate.memoizedState !== null;
              Ct || GD();
            }
          }
          if (l & at) {
            try {
              cD(e);
            } catch (We) {
              Zt(e, e.return, We);
            }
            rb(e);
          }
          return;
        }
        case $e: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & st
          ) {
            var H = Nr;
            Nr = H || ht, Hi(t, e), Nr = H;
          } else
            Hi(t, e);
          if (Ro(e), l & no) {
            var Z = e.stateNode, V = e.memoizedState, ue = V !== null, Te = e;
            if (Z.isHidden = ue, ue && !ht && (Te.mode & st) !== Ie) {
              Me = Te;
              for (var Ce = Te.child; Ce !== null; )
                Me = Ce, vD(Ce), Ce = Ce.sibling;
            }
            iD(Te, ue);
          }
          return;
        }
        case Oe: {
          Hi(t, e), Ro(e), l & at && rb(e);
          return;
        }
        case Ue:
          return;
        default: {
          Hi(t, e), Ro(e);
          return;
        }
      }
    }
    function Ro(e) {
      var t = e.flags;
      if (t & Wt) {
        try {
          uD(e);
        } catch (a) {
          Zt(e, e.return, a);
        }
        e.flags &= ~Wt;
      }
      t & ba && (e.flags &= ~ba);
    }
    function pD(e, t, a) {
      Rf = a, kf = t, Me = e, ib(e, t, a), Rf = null, kf = null;
    }
    function ib(e, t, a) {
      for (var i = (e.mode & st) !== Ie; Me !== null; ) {
        var l = Me, s = l.child;
        if (l.tag === $e && i) {
          var f = l.memoizedState !== null, v = f || Km;
          if (v) {
            gS(e, t, a);
            continue;
          } else {
            var g = l.alternate, E = g !== null && g.memoizedState !== null, w = E || Nr, z = Km, O = Nr;
            Km = v, Nr = w, Nr && !O && (Me = l, hD(l));
            for (var I = s; I !== null; )
              Me = I, ib(
                I,
                // New root; bubble back up to here and stop.
                t,
                a
              ), I = I.sibling;
            Me = l, Km = z, Nr = O, gS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & vr) !== Pe && s !== null ? (s.return = l, Me = s) : gS(e, t, a);
      }
    }
    function gS(e, t, a) {
      for (; Me !== null; ) {
        var i = Me;
        if ((i.flags & vr) !== Pe) {
          var l = i.alternate;
          $t(i);
          try {
            rD(t, l, i, a);
          } catch (f) {
            Zt(i, i.return, f);
          }
          zn();
        }
        if (i === e) {
          Me = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Me = s;
          return;
        }
        Me = i.return;
      }
    }
    function vD(e) {
      for (; Me !== null; ) {
        var t = Me, a = t.child;
        switch (t.tag) {
          case T:
          case q:
          case Se:
          case oe: {
            if (t.mode & Ge)
              try {
                To(), ji(tr, t, t.return);
              } finally {
                wo(t);
              }
            else
              ji(tr, t, t.return);
            break;
          }
          case R: {
            Df(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && hS(t, t.return, i);
            break;
          }
          case F: {
            Df(t, t.return);
            break;
          }
          case $e: {
            var l = t.memoizedState !== null;
            if (l) {
              ob(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Me = a) : ob(e);
      }
    }
    function ob(e) {
      for (; Me !== null; ) {
        var t = Me;
        if (t === e) {
          Me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Me = a;
          return;
        }
        Me = t.return;
      }
    }
    function hD(e) {
      for (; Me !== null; ) {
        var t = Me, a = t.child;
        if (t.tag === $e) {
          var i = t.memoizedState !== null;
          if (i) {
            lb(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Me = a) : lb(e);
      }
    }
    function lb(e) {
      for (; Me !== null; ) {
        var t = Me;
        $t(t);
        try {
          aD(t);
        } catch (i) {
          Zt(t, t.return, i);
        }
        if (zn(), t === e) {
          Me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Me = a;
          return;
        }
        Me = t.return;
      }
    }
    function mD(e, t, a, i) {
      Me = t, yD(t, e, a, i);
    }
    function yD(e, t, a, i) {
      for (; Me !== null; ) {
        var l = Me, s = l.child;
        (l.subtreeFlags & xa) !== Pe && s !== null ? (s.return = l, Me = s) : gD(e, t, a, i);
      }
    }
    function gD(e, t, a, i) {
      for (; Me !== null; ) {
        var l = Me;
        if ((l.flags & nn) !== Pe) {
          $t(l);
          try {
            SD(t, l, a, i);
          } catch (f) {
            Zt(l, l.return, f);
          }
          zn();
        }
        if (l === e) {
          Me = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Me = s;
          return;
        }
        Me = l.return;
      }
    }
    function SD(e, t, a, i) {
      switch (t.tag) {
        case T:
        case q:
        case oe: {
          if (t.mode & Ge) {
            K0();
            try {
              Cu(Dr | er, t);
            } finally {
              W0(t);
            }
          } else
            Cu(Dr | er, t);
          break;
        }
      }
    }
    function CD(e) {
      Me = e, ED();
    }
    function ED() {
      for (; Me !== null; ) {
        var e = Me, t = e.child;
        if ((Me.flags & Nt) !== Pe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Me = l, wD(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var v = f.sibling;
                    f.sibling = null, f = v;
                  } while (f !== null);
                }
              }
            }
            Me = e;
          }
        }
        (e.subtreeFlags & xa) !== Pe && t !== null ? (t.return = e, Me = t) : bD();
      }
    }
    function bD() {
      for (; Me !== null; ) {
        var e = Me;
        (e.flags & nn) !== Pe && ($t(e), xD(e), zn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Me = t;
          return;
        }
        Me = e.return;
      }
    }
    function xD(e) {
      switch (e.tag) {
        case T:
        case q:
        case oe: {
          e.mode & Ge ? (K0(), ji(Dr | er, e, e.return), W0(e)) : ji(Dr | er, e, e.return);
          break;
        }
      }
    }
    function wD(e, t) {
      for (; Me !== null; ) {
        var a = Me;
        $t(a), RD(a, t), zn();
        var i = a.child;
        i !== null ? (i.return = a, Me = i) : TD(e);
      }
    }
    function TD(e) {
      for (; Me !== null; ) {
        var t = Me, a = t.sibling, i = t.return;
        if (JE(t), t === e) {
          Me = null;
          return;
        }
        if (a !== null) {
          a.return = i, Me = a;
          return;
        }
        Me = i;
      }
    }
    function RD(e, t) {
      switch (e.tag) {
        case T:
        case q:
        case oe: {
          e.mode & Ge ? (K0(), ji(Dr, e, t), W0(e)) : ji(Dr, e, t);
          break;
        }
      }
    }
    function kD(e) {
      switch (e.tag) {
        case T:
        case q:
        case oe: {
          try {
            Cu(tr | er, e);
          } catch (a) {
            Zt(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Zt(e, e.return, a);
          }
          break;
        }
      }
    }
    function DD(e) {
      switch (e.tag) {
        case T:
        case q:
        case oe: {
          try {
            Cu(Dr | er, e);
          } catch (t) {
            Zt(e, e.return, t);
          }
          break;
        }
      }
    }
    function _D(e) {
      switch (e.tag) {
        case T:
        case q:
        case oe: {
          try {
            ji(tr | er, e, e.return);
          } catch (a) {
            Zt(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && hS(e, e.return, t);
          break;
        }
      }
    }
    function ND(e) {
      switch (e.tag) {
        case T:
        case q:
        case oe:
          try {
            ji(Dr | er, e, e.return);
          } catch (t) {
            Zt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Fp = Symbol.for;
      Fp("selector.component"), Fp("selector.has_pseudo_class"), Fp("selector.role"), Fp("selector.test_id"), Fp("selector.text");
    }
    var MD = [];
    function OD() {
      MD.forEach(function(e) {
        return e();
      });
    }
    var LD = m.ReactCurrentActQueue;
    function zD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ub() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && LD.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var AD = Math.ceil, SS = m.ReactCurrentDispatcher, CS = m.ReactCurrentOwner, Or = m.ReactCurrentBatchConfig, Vi = m.ReactCurrentActQueue, ar = (
      /*             */
      0
    ), sb = (
      /*               */
      1
    ), Lr = (
      /*                */
      2
    ), fi = (
      /*                */
      4
    ), ml = 0, jp = 1, Os = 2, Xm = 3, Pp = 4, cb = 5, ES = 6, St = ar, ca = null, Rn = null, ir = J, ko = J, bS = fu(J), or = ml, Hp = null, Zm = J, Vp = J, Jm = J, Bp = null, za = null, xS = 0, fb = 500, db = 1 / 0, UD = 500, yl = null;
    function Ip() {
      db = ln() + UD;
    }
    function pb() {
      return db;
    }
    var ey = !1, wS = null, _f = null, Ls = !1, bu = null, Yp = J, TS = [], RS = null, $D = 50, Gp = 0, kS = null, DS = !1, ty = !1, FD = 50, Nf = 0, ny = null, Qp = It, ry = J, vb = !1;
    function ay() {
      return ca;
    }
    function fa() {
      return (St & (Lr | fi)) !== ar ? ln() : (Qp !== It || (Qp = ln()), Qp);
    }
    function xu(e) {
      var t = e.mode;
      if ((t & st) === Ie)
        return Qe;
      if ((St & Lr) !== ar && ir !== J)
        return Un(ir);
      var a = zR() !== LR;
      if (a) {
        if (Or.transition !== null) {
          var i = Or.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ry === gt && (ry = Ld()), ry;
      }
      var l = ka();
      if (l !== gt)
        return l;
      var s = gT();
      return s;
    }
    function jD(e) {
      var t = e.mode;
      return (t & st) === Ie ? Qe : Ky();
    }
    function lr(e, t, a, i) {
      s_(), vb && h("useInsertionEffect must not schedule updates."), DS && (ty = !0), Jo(e, a, i), (St & Lr) !== J && e === ca ? d_(t) : (Zn && Fd(e, t, a), p_(t), e === ca && ((St & Lr) === ar && (Vp = it(Vp, a)), or === Pp && wu(e, ir)), Aa(e, i), a === Qe && St === ar && (t.mode & st) === Ie && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Vi.isBatchingLegacy && (Ip(), pC()));
    }
    function PD(e, t, a) {
      var i = e.current;
      i.lanes = t, Jo(e, t, a), Aa(e, a);
    }
    function HD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (St & Lr) !== ar
      );
    }
    function Aa(e, t) {
      var a = e.callbackNode;
      Gy(e, t);
      var i = as(e, e === ca ? ir : J);
      if (i === J) {
        a !== null && Nb(a), e.callbackNode = null, e.callbackPriority = gt;
        return;
      }
      var l = Nn(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Vi.current !== null && a !== AS)) {
        a == null && s !== Qe && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Nb(a);
      var f;
      if (l === Qe)
        e.tag === du ? (Vi.isBatchingLegacy !== null && (Vi.didScheduleLegacyUpdate = !0), mR(yb.bind(null, e))) : dC(yb.bind(null, e)), Vi.current !== null ? Vi.current.push(pu) : CT(function() {
          (St & (Lr | fi)) === ar && pu();
        }), f = null;
      else {
        var v;
        switch (ss(i)) {
          case hr:
            v = pc;
            break;
          case Jn:
            v = oa;
            break;
          case ki:
            v = ti;
            break;
          case ls:
            v = ao;
            break;
          default:
            v = ti;
            break;
        }
        f = US(v, hb.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function hb(e, t) {
      if (sk(), Qp = It, ry = J, (St & (Lr | fi)) !== ar)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Sl();
      if (i && e.callbackNode !== a)
        return null;
      var l = as(e, e === ca ? ir : J);
      if (l === J)
        return null;
      var s = !os(e, l) && !mh(e, l) && !t, f = s ? XD(e, l) : oy(e, l);
      if (f !== ml) {
        if (f === Os) {
          var v = Md(e);
          v !== J && (l = v, f = _S(e, v));
        }
        if (f === jp) {
          var g = Hp;
          throw zs(e, J), wu(e, l), Aa(e, ln()), g;
        }
        if (f === ES)
          wu(e, l);
        else {
          var E = !os(e, l), w = e.current.alternate;
          if (E && !BD(w)) {
            if (f = oy(e, l), f === Os) {
              var z = Md(e);
              z !== J && (l = z, f = _S(e, z));
            }
            if (f === jp) {
              var O = Hp;
              throw zs(e, J), wu(e, l), Aa(e, ln()), O;
            }
          }
          e.finishedWork = w, e.finishedLanes = l, VD(e, f, l);
        }
      }
      return Aa(e, ln()), e.callbackNode === a ? hb.bind(null, e) : null;
    }
    function _S(e, t) {
      var a = Bp;
      if (Fn(e)) {
        var i = zs(e, t);
        i.flags |= mn, sR(e.containerInfo);
      }
      var l = oy(e, t);
      if (l !== Os) {
        var s = za;
        za = a, s !== null && mb(s);
      }
      return l;
    }
    function mb(e) {
      za === null ? za = e : za.push.apply(za, e);
    }
    function VD(e, t, a) {
      switch (t) {
        case ml:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Os: {
          As(e, za, yl);
          break;
        }
        case Xm: {
          if (wu(e, a), $c(a) && // do not delay if we're inside an act() scope
          !Mb()) {
            var i = xS + fb - ln();
            if (i > 10) {
              var l = as(e, J);
              if (l !== J)
                break;
              var s = e.suspendedLanes;
              if (!Zo(s, a)) {
                fa(), Ud(e, s);
                break;
              }
              e.timeoutHandle = Rg(As.bind(null, e, za, yl), i);
              break;
            }
          }
          As(e, za, yl);
          break;
        }
        case Pp: {
          if (wu(e, a), hh(a))
            break;
          if (!Mb()) {
            var f = vh(e, a), v = f, g = ln() - v, E = u_(g) - g;
            if (E > 10) {
              e.timeoutHandle = Rg(As.bind(null, e, za, yl), E);
              break;
            }
          }
          As(e, za, yl);
          break;
        }
        case cb: {
          As(e, za, yl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function BD(e) {
      for (var t = e; ; ) {
        if (t.flags & Xu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, v = s.value;
                try {
                  if (!Ne(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Xu && g !== null) {
          g.return = t, t = g;
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
    function wu(e, t) {
      t = Wl(t, Jm), t = Wl(t, Vp), Ad(e, t);
    }
    function yb(e) {
      if (ck(), (St & (Lr | fi)) !== ar)
        throw new Error("Should not already be working.");
      Sl();
      var t = as(e, J);
      if (!Gr(t, Qe))
        return Aa(e, ln()), null;
      var a = oy(e, t);
      if (e.tag !== du && a === Os) {
        var i = Md(e);
        i !== J && (t = i, a = _S(e, i));
      }
      if (a === jp) {
        var l = Hp;
        throw zs(e, J), wu(e, t), Aa(e, ln()), l;
      }
      if (a === ES)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, As(e, za, yl), Aa(e, ln()), null;
    }
    function ID(e, t) {
      t !== J && (Kl(e, it(t, Qe)), Aa(e, ln()), (St & (Lr | fi)) === ar && (Ip(), pu()));
    }
    function NS(e, t) {
      var a = St;
      St |= sb;
      try {
        return e(t);
      } finally {
        St = a, St === ar && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Vi.isBatchingLegacy && (Ip(), pC());
      }
    }
    function YD(e, t, a, i, l) {
      var s = ka(), f = Or.transition;
      try {
        return Or.transition = null, $n(hr), e(t, a, i, l);
      } finally {
        $n(s), Or.transition = f, St === ar && Ip();
      }
    }
    function gl(e) {
      bu !== null && bu.tag === du && (St & (Lr | fi)) === ar && Sl();
      var t = St;
      St |= sb;
      var a = Or.transition, i = ka();
      try {
        return Or.transition = null, $n(hr), e ? e() : void 0;
      } finally {
        $n(i), Or.transition = a, St = t, (St & (Lr | fi)) === ar && pu();
      }
    }
    function gb() {
      return (St & (Lr | fi)) !== ar;
    }
    function iy(e, t) {
      Wr(bS, ko, e), ko = it(ko, t);
    }
    function MS(e) {
      ko = bS.current, Qr(bS, e);
    }
    function zs(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== kg && (e.timeoutHandle = kg, ST(a)), Rn !== null)
        for (var i = Rn.return; i !== null; ) {
          var l = i.alternate;
          QE(l, i), i = i.return;
        }
      ca = e;
      var s = Us(e.current, null);
      return Rn = s, ir = ko = t, or = ml, Hp = null, Zm = J, Vp = J, Jm = J, Bp = null, za = null, FR(), zi.discardPendingWarnings(), s;
    }
    function Sb(e, t) {
      do {
        var a = Rn;
        try {
          if (pm(), KC(), zn(), CS.current = null, a === null || a.return === null) {
            or = jp, Hp = t, Rn = null;
            return;
          }
          if (xt && a.mode & Ge && Ym(a, !0), ur)
            if (Bo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              fh(a, i, ir);
            } else
              gc(a, t, ir);
          hk(e, a.return, a, t, ir), xb(a);
        } catch (l) {
          t = l, Rn === a && a !== null ? (a = a.return, Rn = a) : a = Rn;
          continue;
        }
        return;
      } while (!0);
    }
    function Cb() {
      var e = SS.current;
      return SS.current = Pm, e === null ? Pm : e;
    }
    function Eb(e) {
      SS.current = e;
    }
    function GD() {
      xS = ln();
    }
    function Wp(e) {
      Zm = it(e, Zm);
    }
    function QD() {
      or === ml && (or = Xm);
    }
    function OS() {
      (or === ml || or === Xm || or === Os) && (or = Pp), ca !== null && (is(Zm) || is(Vp)) && wu(ca, ir);
    }
    function WD(e) {
      or !== Pp && (or = Os), Bp === null ? Bp = [e] : Bp.push(e);
    }
    function KD() {
      return or === ml;
    }
    function oy(e, t) {
      var a = St;
      St |= Lr;
      var i = Cb();
      if (ca !== e || ir !== t) {
        if (Zn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Kp(e, ir), l.clear()), Pc(e, t);
        }
        yl = jd(), zs(e, t);
      }
      Ga(t);
      do
        try {
          qD();
          break;
        } catch (s) {
          Sb(e, s);
        }
      while (!0);
      if (pm(), St = a, Eb(i), Rn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bl(), ca = null, ir = J, or;
    }
    function qD() {
      for (; Rn !== null; )
        bb(Rn);
    }
    function XD(e, t) {
      var a = St;
      St |= Lr;
      var i = Cb();
      if (ca !== e || ir !== t) {
        if (Zn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Kp(e, ir), l.clear()), Pc(e, t);
        }
        yl = jd(), Ip(), zs(e, t);
      }
      Ga(t);
      do
        try {
          ZD();
          break;
        } catch (s) {
          Sb(e, s);
        }
      while (!0);
      return pm(), Eb(i), St = a, Rn !== null ? (es(), ml) : (Bl(), ca = null, ir = J, or);
    }
    function ZD() {
      for (; Rn !== null && !dc(); )
        bb(Rn);
    }
    function bb(e) {
      var t = e.alternate;
      $t(e);
      var a;
      (e.mode & Ge) !== Ie ? (Q0(e), a = LS(t, e, ko), Ym(e, !0)) : a = LS(t, e, ko), zn(), e.memoizedProps = e.pendingProps, a === null ? xb(e) : Rn = a, CS.current = null;
    }
    function xb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ra) === Pe) {
          $t(t);
          var l = void 0;
          if ((t.mode & Ge) === Ie ? l = GE(a, t, ko) : (Q0(t), l = GE(a, t, ko), Ym(t, !1)), zn(), l !== null) {
            Rn = l;
            return;
          }
        } else {
          var s = Qk(a, t);
          if (s !== null) {
            s.flags &= nh, Rn = s;
            return;
          }
          if ((t.mode & Ge) !== Ie) {
            Ym(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ra, i.subtreeFlags = Pe, i.deletions = null;
          else {
            or = ES, Rn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Rn = g;
          return;
        }
        t = i, Rn = t;
      } while (t !== null);
      or === ml && (or = cb);
    }
    function As(e, t, a) {
      var i = ka(), l = Or.transition;
      try {
        Or.transition = null, $n(hr), JD(e, t, a, i);
      } finally {
        Or.transition = l, $n(i);
      }
      return null;
    }
    function JD(e, t, a, i) {
      do
        Sl();
      while (bu !== null);
      if (c_(), (St & (Lr | fi)) !== ar)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (hc(s), l === null)
        return Rd(), null;
      if (s === J && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = gt;
      var f = it(l.lanes, l.childLanes);
      $d(e, f), e === ca && (ca = null, Rn = null, ir = J), ((l.subtreeFlags & xa) !== Pe || (l.flags & xa) !== Pe) && (Ls || (Ls = !0, RS = a, US(ti, function() {
        return Sl(), null;
      })));
      var v = (l.subtreeFlags & (Pl | Vr | vr | xa)) !== Pe, g = (l.flags & (Pl | Vr | vr | xa)) !== Pe;
      if (v || g) {
        var E = Or.transition;
        Or.transition = null;
        var w = ka();
        $n(hr);
        var z = St;
        St |= fi, CS.current = null, Zk(e, l), CE(), dD(e, l, s), dT(e.containerInfo), e.current = l, dh(s), pD(l, e, s), Vl(), ih(), St = z, $n(w), Or.transition = E;
      } else
        e.current = l, CE();
      var O = Ls;
      if (Ls ? (Ls = !1, bu = e, Yp = s) : (Nf = 0, ny = null), f = e.pendingLanes, f === J && (_f = null), O || kb(e.current, !1), wi(l.stateNode, i), Zn && e.memoizedUpdaters.clear(), OD(), Aa(e, ln()), t !== null)
        for (var I = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var X = t[Y], we = X.stack, He = X.digest;
          I(X.value, {
            componentStack: we,
            digest: He
          });
        }
      if (ey) {
        ey = !1;
        var Ae = wS;
        throw wS = null, Ae;
      }
      return Gr(Yp, Qe) && e.tag !== du && Sl(), f = e.pendingLanes, Gr(f, Qe) ? (uk(), e === kS ? Gp++ : (Gp = 0, kS = e)) : Gp = 0, pu(), Rd(), null;
    }
    function Sl() {
      if (bu !== null) {
        var e = ss(Yp), t = Xy(ki, e), a = Or.transition, i = ka();
        try {
          return Or.transition = null, $n(t), t_();
        } finally {
          $n(i), Or.transition = a;
        }
      }
      return !1;
    }
    function e_(e) {
      TS.push(e), Ls || (Ls = !0, US(ti, function() {
        return Sl(), null;
      }));
    }
    function t_() {
      if (bu === null)
        return !1;
      var e = RS;
      RS = null;
      var t = bu, a = Yp;
      if (bu = null, Yp = J, (St & (Lr | fi)) !== ar)
        throw new Error("Cannot flush passive effects while already rendering.");
      DS = !0, ty = !1, ph(a);
      var i = St;
      St |= fi, CD(t.current), mD(t, t.current, a, e);
      {
        var l = TS;
        TS = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          nD(t, f);
        }
      }
      Ju(), kb(t.current, !0), St = i, pu(), ty ? t === ny ? Nf++ : (Nf = 0, ny = t) : Nf = 0, DS = !1, ty = !1, oo(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function wb(e) {
      return _f !== null && _f.has(e);
    }
    function n_(e) {
      _f === null ? _f = /* @__PURE__ */ new Set([e]) : _f.add(e);
    }
    function r_(e) {
      ey || (ey = !0, wS = e);
    }
    var a_ = r_;
    function Tb(e, t, a) {
      var i = Ns(a, t), l = bE(e, i, Qe), s = hu(e, l, Qe), f = fa();
      s !== null && (Jo(s, Qe, f), Aa(s, f));
    }
    function Zt(e, t, a) {
      if (Kk(a), qp(!1), e.tag === _) {
        Tb(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === _) {
          Tb(i, e, a);
          return;
        } else if (i.tag === R) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !wb(s)) {
            var f = Ns(a, e), v = J0(i, f, Qe), g = hu(i, v, Qe), E = fa();
            g !== null && (Jo(g, Qe, E), Aa(g, E));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function i_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = fa();
      Ud(e, a), v_(e), ca === e && Zo(ir, a) && (or === Pp || or === Xm && $c(ir) && ln() - xS < fb ? zs(e, J) : Jm = it(Jm, a)), Aa(e, l);
    }
    function Rb(e, t) {
      t === gt && (t = jD(e));
      var a = fa(), i = Oa(e, t);
      i !== null && (Jo(i, t, a), Aa(i, a));
    }
    function o_(e) {
      var t = e.memoizedState, a = gt;
      t !== null && (a = t.retryLane), Rb(e, a);
    }
    function l_(e, t) {
      var a = gt, i;
      switch (e.tag) {
        case te:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Oe:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Rb(e, a);
    }
    function u_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : AD(e / 1960) * 1960;
    }
    function s_() {
      if (Gp > $D)
        throw Gp = 0, kS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Nf > FD && (Nf = 0, ny = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function c_() {
      zi.flushLegacyContextWarning(), zi.flushPendingUnsafeLifecycleWarnings();
    }
    function kb(e, t) {
      $t(e), ly(e, Hr, _D), t && ly(e, Vo, ND), ly(e, Hr, kD), t && ly(e, Vo, DD), zn();
    }
    function ly(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Pe ? i = i.child : ((i.flags & t) !== Pe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var uy = null;
    function Db(e) {
      {
        if ((St & Lr) !== ar || !(e.mode & st))
          return;
        var t = e.tag;
        if (t !== A && t !== _ && t !== R && t !== T && t !== q && t !== Se && t !== oe)
          return;
        var a = nt(e) || "ReactComponent";
        if (uy !== null) {
          if (uy.has(a))
            return;
          uy.add(a);
        } else
          uy = /* @__PURE__ */ new Set([a]);
        var i = Dn;
        try {
          $t(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? $t(e) : zn();
        }
      }
    }
    var LS;
    {
      var f_ = null;
      LS = function(e, t, a) {
        var i = Ub(f_, t);
        try {
          return HE(e, t, a);
        } catch (s) {
          if (wR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (pm(), KC(), QE(e, t), Ub(t, i), t.mode & Ge && Q0(t), Ho(null, HE, null, e, t, a), Iy()) {
            var l = hd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var _b = !1, zS;
    zS = /* @__PURE__ */ new Set();
    function d_(e) {
      if (ya && !ik())
        switch (e.tag) {
          case T:
          case q:
          case oe: {
            var t = Rn && nt(Rn) || "Unknown", a = t;
            if (!zS.has(a)) {
              zS.add(a);
              var i = nt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case R: {
            _b || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), _b = !0);
            break;
          }
        }
    }
    function Kp(e, t) {
      if (Zn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Fd(e, i, t);
        });
      }
    }
    var AS = {};
    function US(e, t) {
      {
        var a = Vi.current;
        return a !== null ? (a.push(t), AS) : fc(e, t);
      }
    }
    function Nb(e) {
      if (e !== AS)
        return ah(e);
    }
    function Mb() {
      return Vi.current !== null;
    }
    function p_(e) {
      {
        if (e.mode & st) {
          if (!ub())
            return;
        } else if (!zD() || St !== ar || e.tag !== T && e.tag !== q && e.tag !== oe)
          return;
        if (Vi.current === null) {
          var t = Dn;
          try {
            $t(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? $t(e) : zn();
          }
        }
      }
    }
    function v_(e) {
      e.tag !== du && ub() && Vi.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qp(e) {
      vb = e;
    }
    var di = null, Mf = null, h_ = function(e) {
      di = e;
    };
    function Of(e) {
      {
        if (di === null)
          return e;
        var t = di(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return Of(e);
    }
    function FS(e) {
      {
        if (di === null)
          return e;
        var t = di(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Of(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Be,
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
    function Ob(e, t) {
      {
        if (di === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof i == "function" && (l = !0);
            break;
          }
          case T: {
            (typeof i == "function" || s === Ye) && (l = !0);
            break;
          }
          case q: {
            (s === Be || s === Ye) && (l = !0);
            break;
          }
          case Se:
          case oe: {
            (s === ut || s === Ye) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = di(a);
          if (f !== void 0 && f === di(i))
            return !0;
        }
        return !1;
      }
    }
    function Lb(e) {
      {
        if (di === null || typeof WeakSet != "function")
          return;
        Mf === null && (Mf = /* @__PURE__ */ new WeakSet()), Mf.add(e);
      }
    }
    var m_ = function(e, t) {
      {
        if (di === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Sl(), gl(function() {
          jS(e.current, i, a);
        });
      }
    }, y_ = function(e, t) {
      {
        if (e.context !== Wa)
          return;
        Sl(), gl(function() {
          Xp(t, e, null, null);
        });
      }
    };
    function jS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, v = e.type, g = null;
        switch (f) {
          case T:
          case oe:
          case R:
            g = v;
            break;
          case q:
            g = v.render;
            break;
        }
        if (di === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, w = !1;
        if (g !== null) {
          var z = di(g);
          z !== void 0 && (a.has(z) ? w = !0 : t.has(z) && (f === R ? w = !0 : E = !0));
        }
        if (Mf !== null && (Mf.has(e) || i !== null && Mf.has(i)) && (w = !0), w && (e._debugNeedsRemount = !0), w || E) {
          var O = Oa(e, Qe);
          O !== null && lr(O, e, Qe, It);
        }
        l !== null && !w && jS(l, t, a), s !== null && jS(s, t, a);
      }
    }
    var g_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return PS(e.current, i, a), a;
      }
    };
    function PS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case T:
          case oe:
          case R:
            v = f;
            break;
          case q:
            v = f.render;
            break;
        }
        var g = !1;
        v !== null && t.has(v) && (g = !0), g ? S_(e, a) : i !== null && PS(i, t, a), l !== null && PS(l, t, a);
      }
    }
    function S_(e, t) {
      {
        var a = C_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case F:
              t.add(i.stateNode);
              return;
            case U:
              t.add(i.stateNode.containerInfo);
              return;
            case _:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function C_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === F)
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
    var HS;
    {
      HS = !1;
      try {
        var zb = Object.preventExtensions({});
      } catch {
        HS = !0;
      }
    }
    function E_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Pe, this.subtreeFlags = Pe, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !HS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ka = function(e, t, a, i) {
      return new E_(e, t, a, i);
    };
    function VS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function b_(e) {
      return typeof e == "function" && !VS(e) && e.defaultProps === void 0;
    }
    function x_(e) {
      if (typeof e == "function")
        return VS(e) ? R : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Be)
          return q;
        if (t === ut)
          return Se;
      }
      return A;
    }
    function Us(e, t) {
      var a = e.alternate;
      a === null ? (a = Ka(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Pe, a.subtreeFlags = Pe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Xn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case A:
        case T:
        case oe:
          a.type = Of(e.type);
          break;
        case R:
          a.type = $S(e.type);
          break;
        case q:
          a.type = FS(e.type);
          break;
      }
      return a;
    }
    function w_(e, t) {
      e.flags &= Xn | Wt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = Pe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Pe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function T_(e, t, a) {
      var i;
      return e === im ? (i = st, t === !0 && (i |= un, i |= Ta)) : i = Ie, Zn && (i |= Ge), Ka(_, null, null, i);
    }
    function BS(e, t, a, i, l, s) {
      var f = A, v = e;
      if (typeof e == "function")
        VS(e) ? (f = R, v = $S(v)) : v = Of(v);
      else if (typeof e == "string")
        f = F;
      else
        e:
          switch (e) {
            case ja:
              return Tu(a.children, l, s, t);
            case Gi:
              f = G, l |= un, (l & st) !== Ie && (l |= Ta);
              break;
            case N:
              return R_(a, l, s, t);
            case ot:
              return k_(a, l, s, t);
            case Et:
              return D_(a, l, s, t);
            case tn:
              return Ab(a, l, s, t);
            case wr:
            case Vn:
            case Qi:
            case Ps:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    f = K;
                    break e;
                  case ye:
                    f = W;
                    break e;
                  case Be:
                    f = q, v = FS(v);
                    break e;
                  case ut:
                    f = Se;
                    break e;
                  case Ye:
                    f = de, v = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = i ? nt(i) : null;
                E && (g += `

Check the render method of \`` + E + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      var w = Ka(f, a, t, l);
      return w.elementType = e, w.type = v, w.lanes = s, w._debugOwner = i, w;
    }
    function IS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, v = BS(l, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function Tu(e, t, a, i) {
      var l = Ka(j, e, i, t);
      return l.lanes = a, l;
    }
    function R_(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Ka(ae, e, i, t | Ge);
      return l.elementType = N, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function k_(e, t, a, i) {
      var l = Ka(te, e, i, t);
      return l.elementType = ot, l.lanes = a, l;
    }
    function D_(e, t, a, i) {
      var l = Ka(Oe, e, i, t);
      return l.elementType = Et, l.lanes = a, l;
    }
    function Ab(e, t, a, i) {
      var l = Ka($e, e, i, t);
      l.elementType = tn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function YS(e, t, a) {
      var i = Ka($, e, null, t);
      return i.lanes = a, i;
    }
    function __() {
      var e = Ka(F, null, null, Ie);
      return e.elementType = "DELETED", e;
    }
    function N_(e) {
      var t = Ka(De, null, null, Ie);
      return t.stateNode = e, t;
    }
    function GS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = Ka(U, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Ub(e, t) {
      return e === null && (e = Ka(A, null, null, Ie)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function M_(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = kg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = gt, this.eventTimes = jc(J), this.expirationTimes = jc(It), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = jc(J), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < qt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case du:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function $b(e, t, a, i, l, s, f, v, g, E) {
      var w = new M_(e, t, a, v, g), z = T_(t, s);
      w.current = z, z.stateNode = w;
      {
        var O = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = O;
      }
      return e0(z), w;
    }
    var QS = "18.2.0";
    function O_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ln(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ta,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var WS, KS;
    WS = !1, KS = {};
    function Fb(e) {
      if (!e)
        return Wa;
      var t = Ca(e), a = hR(t);
      if (t.tag === R) {
        var i = t.type;
        if (Co(i))
          return cC(t, i, a);
      }
      return a;
    }
    function L_(e, t) {
      {
        var a = Ca(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = wa(a);
        if (l === null)
          return null;
        if (l.mode & un) {
          var s = nt(a) || "Component";
          if (!KS[s]) {
            KS[s] = !0;
            var f = Dn;
            try {
              $t(l), a.mode & un ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? $t(f) : zn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function jb(e, t, a, i, l, s, f, v) {
      var g = !1, E = null;
      return $b(e, t, g, E, a, i, l, s, f);
    }
    function Pb(e, t, a, i, l, s, f, v, g, E) {
      var w = !0, z = $b(a, i, w, e, l, s, f, v, g);
      z.context = Fb(null);
      var O = z.current, I = fa(), Y = xu(O), X = vl(I, Y);
      return X.callback = t ?? null, hu(O, X, Y), PD(z, Y, I), z;
    }
    function Xp(e, t, a, i) {
      oh(t, e);
      var l = t.current, s = fa(), f = xu(l);
      Io(f);
      var v = Fb(a);
      t.context === null ? t.context = v : t.pendingContext = v, ya && Dn !== null && !WS && (WS = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(Dn) || "Unknown"));
      var g = vl(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var E = hu(l, g, f);
      return E !== null && (lr(E, l, f, s), gm(E, l, f)), f;
    }
    function sy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case F:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function z_(e) {
      switch (e.tag) {
        case _: {
          var t = e.stateNode;
          if (Fn(t)) {
            var a = Qy(t);
            ID(t, a);
          }
          break;
        }
        case te: {
          gl(function() {
            var l = Oa(e, Qe);
            if (l !== null) {
              var s = fa();
              lr(l, e, Qe, s);
            }
          });
          var i = Qe;
          qS(e, i);
          break;
        }
      }
    }
    function Hb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = gh(a.retryLane, t));
    }
    function qS(e, t) {
      Hb(e, t);
      var a = e.alternate;
      a && Hb(a, t);
    }
    function A_(e) {
      if (e.tag === te) {
        var t = Il, a = Oa(e, t);
        if (a !== null) {
          var i = fa();
          lr(a, e, t, i);
        }
        qS(e, t);
      }
    }
    function U_(e) {
      if (e.tag === te) {
        var t = xu(e), a = Oa(e, t);
        if (a !== null) {
          var i = fa();
          lr(a, e, t, i);
        }
        qS(e, t);
      }
    }
    function Vb(e) {
      var t = rh(e);
      return t === null ? null : t.stateNode;
    }
    var Bb = function(e) {
      return null;
    };
    function $_(e) {
      return Bb(e);
    }
    var Ib = function(e) {
      return !1;
    };
    function F_(e) {
      return Ib(e);
    }
    var Yb = null, Gb = null, Qb = null, Wb = null, Kb = null, qb = null, Xb = null, Zb = null, Jb = null;
    {
      var ex = function(e, t, a) {
        var i = t[a], l = Bn(e) ? e.slice() : pt({}, e);
        return a + 1 === t.length ? (Bn(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = ex(e[i], t, a + 1), l);
      }, tx = function(e, t) {
        return ex(e, t, 0);
      }, nx = function(e, t, a, i) {
        var l = t[i], s = Bn(e) ? e.slice() : pt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Bn(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = nx(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, rx = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nx(e, t, a, 0);
      }, ax = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Bn(e) ? e.slice() : pt({}, e);
        return s[l] = ax(e[l], t, a + 1, i), s;
      }, ix = function(e, t, a) {
        return ax(e, t, 0, a);
      }, XS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Yb = function(e, t, a, i) {
        var l = XS(e, t);
        if (l !== null) {
          var s = ix(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = pt({}, e.memoizedProps);
          var f = Oa(e, Qe);
          f !== null && lr(f, e, Qe, It);
        }
      }, Gb = function(e, t, a) {
        var i = XS(e, t);
        if (i !== null) {
          var l = tx(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = pt({}, e.memoizedProps);
          var s = Oa(e, Qe);
          s !== null && lr(s, e, Qe, It);
        }
      }, Qb = function(e, t, a, i) {
        var l = XS(e, t);
        if (l !== null) {
          var s = rx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = pt({}, e.memoizedProps);
          var f = Oa(e, Qe);
          f !== null && lr(f, e, Qe, It);
        }
      }, Wb = function(e, t, a) {
        e.pendingProps = ix(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Oa(e, Qe);
        i !== null && lr(i, e, Qe, It);
      }, Kb = function(e, t) {
        e.pendingProps = tx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Oa(e, Qe);
        a !== null && lr(a, e, Qe, It);
      }, qb = function(e, t, a) {
        e.pendingProps = rx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Oa(e, Qe);
        i !== null && lr(i, e, Qe, It);
      }, Xb = function(e) {
        var t = Oa(e, Qe);
        t !== null && lr(t, e, Qe, It);
      }, Zb = function(e) {
        Bb = e;
      }, Jb = function(e) {
        Ib = e;
      };
    }
    function j_(e) {
      var t = wa(e);
      return t === null ? null : t.stateNode;
    }
    function P_(e) {
      return null;
    }
    function H_() {
      return Dn;
    }
    function V_(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return wd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Yb,
        overrideHookStateDeletePath: Gb,
        overrideHookStateRenamePath: Qb,
        overrideProps: Wb,
        overridePropsDeletePath: Kb,
        overridePropsRenamePath: qb,
        setErrorHandler: Zb,
        setSuspenseHandler: Jb,
        scheduleUpdate: Xb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: j_,
        findFiberByHostInstance: t || P_,
        // React Refresh
        findHostInstancesForRefresh: g_,
        scheduleRefresh: m_,
        scheduleRoot: y_,
        setRefreshHandler: h_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: H_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: QS
      });
    }
    var ox = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function ZS(e) {
      this._internalRoot = e;
    }
    cy.prototype.render = ZS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== _n) {
          var i = Vb(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Xp(e, t, null, null);
    }, cy.prototype.unmount = ZS.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gb() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), gl(function() {
          Xp(null, e, null, null);
        }), iC(t);
      }
    };
    function B_(e, t) {
      if (!fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      lx(e);
      var a = !1, i = !1, l = "", s = ox;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yi && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = jb(e, im, null, a, i, l, s);
      Zh(f.current, e);
      var v = e.nodeType === _n ? e.parentNode : e;
      return ip(v), new ZS(f);
    }
    function cy(e) {
      this._internalRoot = e;
    }
    function I_(e) {
      e && Rh(e);
    }
    cy.prototype.unstable_scheduleHydration = I_;
    function Y_(e, t, a) {
      if (!fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      lx(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", g = ox;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var E = Pb(t, null, e, im, i, s, f, v, g);
      if (Zh(E.current, e), ip(e), l)
        for (var w = 0; w < l.length; w++) {
          var z = l[w];
          JR(E, z);
        }
      return new cy(E);
    }
    function fy(e) {
      return !!(e && (e.nodeType === Fr || e.nodeType === Ba || e.nodeType === Ao || !rt));
    }
    function Zp(e) {
      return !!(e && (e.nodeType === Fr || e.nodeType === Ba || e.nodeType === Ao || e.nodeType === _n && e.nodeValue === " react-mount-point-unstable "));
    }
    function lx(e) {
      e.nodeType === Fr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), mp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var G_ = m.ReactCurrentOwner, ux;
    ux = function(e) {
      if (e._reactRootContainer && e.nodeType !== _n) {
        var t = Vb(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = JS(e), l = !!(i && cu(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Fr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function JS(e) {
      return e ? e.nodeType === Ba ? e.documentElement : e.firstChild : null;
    }
    function sx() {
    }
    function Q_(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var O = sy(f);
            s.call(O);
          };
        }
        var f = Pb(
          t,
          i,
          e,
          du,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sx
        );
        e._reactRootContainer = f, Zh(f.current, e);
        var v = e.nodeType === _n ? e.parentNode : e;
        return ip(v), gl(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var O = sy(w);
            E.call(O);
          };
        }
        var w = jb(
          e,
          du,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sx
        );
        e._reactRootContainer = w, Zh(w.current, e);
        var z = e.nodeType === _n ? e.parentNode : e;
        return ip(z), gl(function() {
          Xp(t, w, a, i);
        }), w;
      }
    }
    function W_(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dy(e, t, a, i, l) {
      ux(a), W_(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Q_(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var v = l;
          l = function() {
            var g = sy(f);
            v.call(g);
          };
        }
        Xp(t, f, e, l);
      }
      return sy(f);
    }
    function K_(e) {
      {
        var t = G_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Fr ? e : L_(e, "findDOMNode");
    }
    function q_(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = mp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dy(null, e, t, !0, a);
    }
    function X_(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = mp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dy(null, e, t, !1, a);
    }
    function Z_(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !qu(e))
        throw new Error("parentComponent must be a valid React Component");
      return dy(e, t, a, !1, i);
    }
    function J_(e) {
      if (!Zp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = mp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = JS(e), i = a && !cu(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return gl(function() {
          dy(null, null, e, !1, function() {
            e._reactRootContainer = null, iC(e);
          });
        }), !0;
      } else {
        {
          var l = JS(e), s = !!(l && cu(l)), f = e.nodeType === Fr && Zp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ke(z_), Ch(A_), fs(U_), Hd(ka), bh(us), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), eh(nT), oc(NS, YD, gl);
    function eN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fy(t))
        throw new Error("Target container is not a DOM element.");
      return O_(e, t, null, a);
    }
    function tN(e, t, a, i) {
      return Z_(e, t, a, i);
    }
    var e1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [cu, sf, Jh, ic, Qu, NS]
    };
    function nN(e, t) {
      return e1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), B_(e, t);
    }
    function rN(e, t, a) {
      return e1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Y_(e, t, a);
    }
    function aN(e) {
      return gb() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), gl(e);
    }
    var iN = V_({
      findFiberByHostInstance: Es,
      bundleType: 1,
      version: QS,
      rendererPackageName: "react-dom"
    });
    if (!iN && qe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var cx = window.location.protocol;
      /^(https?|file):$/.test(cx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (cx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e1, $a.createPortal = eN, $a.createRoot = nN, $a.findDOMNode = K_, $a.flushSync = aN, $a.hydrate = q_, $a.hydrateRoot = rN, $a.render = X_, $a.unmountComponentAtNode = J_, $a.unstable_batchedUpdates = NS, $a.unstable_renderSubtreeIntoContainer = tN, $a.version = QS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $a;
}
function jx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jx);
    } catch (d) {
      console.error(d);
    }
  }
}
process.env.NODE_ENV === "production" ? (jx(), l1.exports = lM()) : l1.exports = uM();
var S1 = l1.exports;
const sM = /* @__PURE__ */ cN(S1);
function Px(d, y = []) {
  let m = [];
  function C(b, h) {
    const D = /* @__PURE__ */ iv(h), T = m.length;
    m = [
      ...m,
      h
    ];
    function R(_) {
      const { scope: U, children: F, ...$ } = _, j = (U == null ? void 0 : U[d][T]) || D, G = Af(
        () => $,
        Object.values($)
      );
      return /* @__PURE__ */ et(j.Provider, {
        value: G
      }, F);
    }
    function A(_, U) {
      const F = (U == null ? void 0 : U[d][T]) || D, $ = Ey(F);
      if ($)
        return $;
      if (h !== void 0)
        return h;
      throw new Error(`\`${_}\` must be used within \`${b}\``);
    }
    return R.displayName = b + "Provider", [
      R,
      A
    ];
  }
  const x = () => {
    const b = m.map((h) => /* @__PURE__ */ iv(h));
    return function(D) {
      const T = (D == null ? void 0 : D[d]) || b;
      return Af(
        () => ({
          [`__scope${d}`]: {
            ...D,
            [d]: T
          }
        }),
        [
          D,
          T
        ]
      );
    };
  };
  return x.scopeName = d, [
    C,
    cM(x, ...y)
  ];
}
function cM(...d) {
  const y = d[0];
  if (d.length === 1)
    return y;
  const m = () => {
    const C = d.map(
      (x) => ({
        useScope: x(),
        scopeName: x.scopeName
      })
    );
    return function(b) {
      const h = C.reduce((D, { useScope: T, scopeName: R }) => {
        const _ = T(b)[`__scope${R}`];
        return {
          ...D,
          ..._
        };
      }, {});
      return Af(
        () => ({
          [`__scope${y.scopeName}`]: h
        }),
        [
          h
        ]
      );
    };
  };
  return m.scopeName = y.scopeName, m;
}
function Er(d, y, { checkForDefaultPrevented: m = !0 } = {}) {
  return function(x) {
    if (d == null || d(x), m === !1 || !x.defaultPrevented)
      return y == null ? void 0 : y(x);
  };
}
function fM(d, y) {
  typeof d == "function" ? d(y) : d != null && (d.current = y);
}
function C1(...d) {
  return (y) => d.forEach(
    (m) => fM(m, y)
  );
}
function bl(...d) {
  return vi(C1(...d), d);
}
const ov = /* @__PURE__ */ Hn((d, y) => {
  const { children: m, ...C } = d, x = zf.toArray(m), b = x.find(pM);
  if (b) {
    const h = b.props.children, D = x.map((T) => T === b ? zf.count(h) > 1 ? zf.only(null) : /* @__PURE__ */ gy(h) ? h.props.children : null : T);
    return /* @__PURE__ */ et(u1, kn({}, C, {
      ref: y
    }), /* @__PURE__ */ gy(h) ? /* @__PURE__ */ y1(h, void 0, D) : null);
  }
  return /* @__PURE__ */ et(u1, kn({}, C, {
    ref: y
  }), m);
});
ov.displayName = "Slot";
const u1 = /* @__PURE__ */ Hn((d, y) => {
  const { children: m, ...C } = d;
  return /* @__PURE__ */ gy(m) ? /* @__PURE__ */ y1(m, {
    ...vM(C, m.props),
    ref: y ? C1(y, m.ref) : m.ref
  }) : zf.count(m) > 1 ? zf.only(null) : null;
});
u1.displayName = "SlotClone";
const dM = ({ children: d }) => /* @__PURE__ */ et(a1, null, d);
function pM(d) {
  return /* @__PURE__ */ gy(d) && d.type === dM;
}
function vM(d, y) {
  const m = {
    ...y
  };
  for (const C in y) {
    const x = d[C], b = y[C];
    /^on[A-Z]/.test(C) ? x && b ? m[C] = (...D) => {
      b(...D), x(...D);
    } : x && (m[C] = x) : C === "style" ? m[C] = {
      ...x,
      ...b
    } : C === "className" && (m[C] = [
      x,
      b
    ].filter(Boolean).join(" "));
  }
  return {
    ...d,
    ...m
  };
}
const hM = [
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
], Xa = hM.reduce((d, y) => {
  const m = /* @__PURE__ */ Hn((C, x) => {
    const { asChild: b, ...h } = C, D = b ? ov : y;
    return br(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ et(D, kn({}, h, {
      ref: x
    }));
  });
  return m.displayName = `Primitive.${y}`, {
    ...d,
    [y]: m
  };
}, {});
function s1(d, y) {
  d && S1.flushSync(
    () => d.dispatchEvent(y)
  );
}
function pi(d) {
  const y = pn(d);
  return br(() => {
    y.current = d;
  }), Af(
    () => (...m) => {
      var C;
      return (C = y.current) === null || C === void 0 ? void 0 : C.call(y, ...m);
    },
    []
  );
}
function mM({ prop: d, defaultProp: y, onChange: m = () => {
} }) {
  const [C, x] = yM({
    defaultProp: y,
    onChange: m
  }), b = d !== void 0, h = b ? d : C, D = pi(m), T = vi((R) => {
    if (b) {
      const _ = typeof R == "function" ? R(d) : R;
      _ !== d && D(_);
    } else
      x(R);
  }, [
    b,
    d,
    x,
    D
  ]);
  return [
    h,
    T
  ];
}
function yM({ defaultProp: d, onChange: y }) {
  const m = Ar(d), [C] = m, x = pn(C), b = pi(y);
  return br(() => {
    x.current !== C && (b(C), x.current = C);
  }, [
    C,
    x,
    b
  ]), m;
}
const gM = /* @__PURE__ */ iv(void 0);
function SM(d) {
  const y = Ey(gM);
  return d || y || "ltr";
}
const Uf = globalThis != null && globalThis.document ? uN : () => {
};
function CM(d, y) {
  return sN((m, C) => {
    const x = y[m][C];
    return x ?? m;
  }, d);
}
const fv = (d) => {
  const { present: y, children: m } = d, C = EM(y), x = typeof m == "function" ? m({
    present: C.isPresent
  }) : zf.only(m), b = bl(C.ref, x.ref);
  return typeof m == "function" || C.isPresent ? /* @__PURE__ */ y1(x, {
    ref: b
  }) : null;
};
fv.displayName = "Presence";
function EM(d) {
  const [y, m] = Ar(), C = pn({}), x = pn(d), b = pn("none"), h = d ? "mounted" : "unmounted", [D, T] = CM(h, {
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
  return br(() => {
    const R = hy(C.current);
    b.current = D === "mounted" ? R : "none";
  }, [
    D
  ]), Uf(() => {
    const R = C.current, A = x.current;
    if (A !== d) {
      const U = b.current, F = hy(R);
      d ? T("MOUNT") : F === "none" || (R == null ? void 0 : R.display) === "none" ? T("UNMOUNT") : T(A && U !== F ? "ANIMATION_OUT" : "UNMOUNT"), x.current = d;
    }
  }, [
    d,
    T
  ]), Uf(() => {
    if (y) {
      const R = (_) => {
        const F = hy(C.current).includes(_.animationName);
        _.target === y && F && S1.flushSync(
          () => T("ANIMATION_END")
        );
      }, A = (_) => {
        _.target === y && (b.current = hy(C.current));
      };
      return y.addEventListener("animationstart", A), y.addEventListener("animationcancel", R), y.addEventListener("animationend", R), () => {
        y.removeEventListener("animationstart", A), y.removeEventListener("animationcancel", R), y.removeEventListener("animationend", R);
      };
    } else
      T("ANIMATION_END");
  }, [
    y,
    T
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(D),
    ref: vi((R) => {
      R && (C.current = getComputedStyle(R)), m(R);
    }, [])
  };
}
function hy(d) {
  return (d == null ? void 0 : d.animationName) || "none";
}
const bM = dn.useId || (() => {
});
let xM = 0;
function Hx(d) {
  const [y, m] = dn.useState(bM());
  return Uf(() => {
    d || m(
      (C) => C ?? String(xM++)
    );
  }, [
    d
  ]), d || (y ? `radix-${y}` : "");
}
function Vx(d) {
  const y = d + "CollectionProvider", [m, C] = Px(y), [x, b] = m(y, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), h = (F) => {
    const { scope: $, children: j } = F, G = Fa.useRef(null), W = Fa.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Fa.createElement(x, {
      scope: $,
      itemMap: W,
      collectionRef: G
    }, j);
  }, D = d + "CollectionSlot", T = /* @__PURE__ */ Fa.forwardRef((F, $) => {
    const { scope: j, children: G } = F, W = b(D, j), K = bl($, W.collectionRef);
    return /* @__PURE__ */ Fa.createElement(ov, {
      ref: K
    }, G);
  }), R = d + "CollectionItemSlot", A = "data-radix-collection-item", _ = /* @__PURE__ */ Fa.forwardRef((F, $) => {
    const { scope: j, children: G, ...W } = F, K = Fa.useRef(null), q = bl($, K), ae = b(R, j);
    return Fa.useEffect(() => (ae.itemMap.set(K, {
      ref: K,
      ...W
    }), () => void ae.itemMap.delete(K))), /* @__PURE__ */ Fa.createElement(ov, {
      [A]: "",
      ref: q
    }, G);
  });
  function U(F) {
    const $ = b(d + "CollectionConsumer", F);
    return Fa.useCallback(() => {
      const G = $.collectionRef.current;
      if (!G)
        return [];
      const W = Array.from(G.querySelectorAll(`[${A}]`));
      return Array.from($.itemMap.values()).sort(
        (ae, te) => W.indexOf(ae.ref.current) - W.indexOf(te.ref.current)
      );
    }, [
      $.collectionRef,
      $.itemMap
    ]);
  }
  return [
    {
      Provider: h,
      Slot: T,
      ItemSlot: _
    },
    U,
    C
  ];
}
function wM(d, y = globalThis == null ? void 0 : globalThis.document) {
  const m = pi(d);
  br(() => {
    const C = (x) => {
      x.key === "Escape" && m(x);
    };
    return y.addEventListener("keydown", C), () => y.removeEventListener("keydown", C);
  }, [
    m,
    y
  ]);
}
const c1 = "dismissableLayer.update", TM = "dismissableLayer.pointerDownOutside", RM = "dismissableLayer.focusOutside";
let Cx;
const kM = /* @__PURE__ */ iv({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), DM = /* @__PURE__ */ Hn((d, y) => {
  var m;
  const { disableOutsidePointerEvents: C = !1, onEscapeKeyDown: x, onPointerDownOutside: b, onFocusOutside: h, onInteractOutside: D, onDismiss: T, ...R } = d, A = Ey(kM), [_, U] = Ar(null), F = (m = _ == null ? void 0 : _.ownerDocument) !== null && m !== void 0 ? m : globalThis == null ? void 0 : globalThis.document, [, $] = Ar({}), j = bl(
    y,
    (de) => U(de)
  ), G = Array.from(A.layers), [W] = [
    ...A.layersWithOutsidePointerEventsDisabled
  ].slice(-1), K = G.indexOf(W), q = _ ? G.indexOf(_) : -1, ae = A.layersWithOutsidePointerEventsDisabled.size > 0, te = q >= K, Se = _M((de) => {
    const ve = de.target, De = [
      ...A.branches
    ].some(
      (Oe) => Oe.contains(ve)
    );
    !te || De || (b == null || b(de), D == null || D(de), de.defaultPrevented || T == null || T());
  }, F), oe = NM((de) => {
    const ve = de.target;
    [
      ...A.branches
    ].some(
      (Oe) => Oe.contains(ve)
    ) || (h == null || h(de), D == null || D(de), de.defaultPrevented || T == null || T());
  }, F);
  return wM((de) => {
    q === A.layers.size - 1 && (x == null || x(de), !de.defaultPrevented && T && (de.preventDefault(), T()));
  }, F), br(() => {
    if (_)
      return C && (A.layersWithOutsidePointerEventsDisabled.size === 0 && (Cx = F.body.style.pointerEvents, F.body.style.pointerEvents = "none"), A.layersWithOutsidePointerEventsDisabled.add(_)), A.layers.add(_), Ex(), () => {
        C && A.layersWithOutsidePointerEventsDisabled.size === 1 && (F.body.style.pointerEvents = Cx);
      };
  }, [
    _,
    F,
    C,
    A
  ]), br(() => () => {
    _ && (A.layers.delete(_), A.layersWithOutsidePointerEventsDisabled.delete(_), Ex());
  }, [
    _,
    A
  ]), br(() => {
    const de = () => $({});
    return document.addEventListener(c1, de), () => document.removeEventListener(c1, de);
  }, []), /* @__PURE__ */ et(Xa.div, kn({}, R, {
    ref: j,
    style: {
      pointerEvents: ae ? te ? "auto" : "none" : void 0,
      ...d.style
    },
    onFocusCapture: Er(d.onFocusCapture, oe.onFocusCapture),
    onBlurCapture: Er(d.onBlurCapture, oe.onBlurCapture),
    onPointerDownCapture: Er(d.onPointerDownCapture, Se.onPointerDownCapture)
  }));
});
function _M(d, y = globalThis == null ? void 0 : globalThis.document) {
  const m = pi(d), C = pn(!1), x = pn(() => {
  });
  return br(() => {
    const b = (D) => {
      if (D.target && !C.current) {
        let R = function() {
          Bx(TM, m, T, {
            discrete: !0
          });
        };
        const T = {
          originalEvent: D
        };
        D.pointerType === "touch" ? (y.removeEventListener("click", x.current), x.current = R, y.addEventListener("click", x.current, {
          once: !0
        })) : R();
      } else
        y.removeEventListener("click", x.current);
      C.current = !1;
    }, h = window.setTimeout(() => {
      y.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(h), y.removeEventListener("pointerdown", b), y.removeEventListener("click", x.current);
    };
  }, [
    y,
    m
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => C.current = !0
  };
}
function NM(d, y = globalThis == null ? void 0 : globalThis.document) {
  const m = pi(d), C = pn(!1);
  return br(() => {
    const x = (b) => {
      b.target && !C.current && Bx(RM, m, {
        originalEvent: b
      }, {
        discrete: !1
      });
    };
    return y.addEventListener("focusin", x), () => y.removeEventListener("focusin", x);
  }, [
    y,
    m
  ]), {
    onFocusCapture: () => C.current = !0,
    onBlurCapture: () => C.current = !1
  };
}
function Ex() {
  const d = new CustomEvent(c1);
  document.dispatchEvent(d);
}
function Bx(d, y, m, { discrete: C }) {
  const x = m.originalEvent.target, b = new CustomEvent(d, {
    bubbles: !1,
    cancelable: !0,
    detail: m
  });
  y && x.addEventListener(d, y, {
    once: !0
  }), C ? s1(x, b) : x.dispatchEvent(b);
}
function MM(d) {
  const y = pn({
    value: d,
    previous: d
  });
  return Af(() => (y.current.value !== d && (y.current.previous = y.current.value, y.current.value = d), y.current.previous), [
    d
  ]);
}
const OM = /* @__PURE__ */ Hn((d, y) => /* @__PURE__ */ et(Xa.span, kn({}, d, {
  ref: y,
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
    ...d.style
  }
}))), LM = OM, dv = "NavigationMenu", [E1, Ix, zM] = Vx(dv), [f1, AM, UM] = Vx(dv), [b1, l2] = Px(dv, [
  zM,
  UM
]), [$M, Ii] = b1(dv), [FM, jM] = b1(dv), PM = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, value: C, onValueChange: x, defaultValue: b, delayDuration: h = 200, skipDelayDuration: D = 300, orientation: T = "horizontal", dir: R, ...A } = d, [_, U] = Ar(null), F = bl(
    y,
    (ve) => U(ve)
  ), $ = SM(R), j = pn(0), G = pn(0), W = pn(0), [K, q] = Ar(!0), [ae = "", te] = mM({
    prop: C,
    onChange: (ve) => {
      const De = ve !== "", Oe = D > 0;
      De ? (window.clearTimeout(W.current), Oe && q(!1)) : (window.clearTimeout(W.current), W.current = window.setTimeout(
        () => q(!0),
        D
      )), x == null || x(ve);
    },
    defaultProp: b
  }), Se = vi(() => {
    window.clearTimeout(G.current), G.current = window.setTimeout(
      () => te(""),
      150
    );
  }, [
    te
  ]), oe = vi((ve) => {
    window.clearTimeout(G.current), te(ve);
  }, [
    te
  ]), de = vi((ve) => {
    ae === ve ? window.clearTimeout(G.current) : j.current = window.setTimeout(() => {
      window.clearTimeout(G.current), te(ve);
    }, h);
  }, [
    ae,
    te,
    h
  ]);
  return br(() => () => {
    window.clearTimeout(j.current), window.clearTimeout(G.current), window.clearTimeout(W.current);
  }, []), /* @__PURE__ */ et(HM, {
    scope: m,
    isRootMenu: !0,
    value: ae,
    dir: $,
    orientation: T,
    rootNavigationMenu: _,
    onTriggerEnter: (ve) => {
      window.clearTimeout(j.current), K ? de(ve) : oe(ve);
    },
    onTriggerLeave: () => {
      window.clearTimeout(j.current), Se();
    },
    onContentEnter: () => window.clearTimeout(G.current),
    onContentLeave: Se,
    onItemSelect: (ve) => {
      te(
        (De) => De === ve ? "" : ve
      );
    },
    onItemDismiss: () => te("")
  }, /* @__PURE__ */ et(Xa.nav, kn({
    "aria-label": "Main",
    "data-orientation": T,
    dir: $
  }, A, {
    ref: F
  })));
}), HM = (d) => {
  const { scope: y, isRootMenu: m, rootNavigationMenu: C, dir: x, orientation: b, children: h, value: D, onItemSelect: T, onItemDismiss: R, onTriggerEnter: A, onTriggerLeave: _, onContentEnter: U, onContentLeave: F } = d, [$, j] = Ar(null), [G, W] = Ar(/* @__PURE__ */ new Map()), [K, q] = Ar(null);
  return /* @__PURE__ */ et($M, {
    scope: y,
    isRootMenu: m,
    rootNavigationMenu: C,
    value: D,
    previousValue: MM(D),
    baseId: Hx(),
    dir: x,
    orientation: b,
    viewport: $,
    onViewportChange: j,
    indicatorTrack: K,
    onIndicatorTrackChange: q,
    onTriggerEnter: pi(A),
    onTriggerLeave: pi(_),
    onContentEnter: pi(U),
    onContentLeave: pi(F),
    onItemSelect: pi(T),
    onItemDismiss: pi(R),
    onViewportContentChange: vi((ae, te) => {
      W((Se) => (Se.set(ae, te), new Map(Se)));
    }, []),
    onViewportContentRemove: vi((ae) => {
      W((te) => te.has(ae) ? (te.delete(ae), new Map(te)) : te);
    }, [])
  }, /* @__PURE__ */ et(E1.Provider, {
    scope: y
  }, /* @__PURE__ */ et(FM, {
    scope: y,
    items: G
  }, h)));
}, VM = "NavigationMenuList", BM = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, ...C } = d, x = Ii(VM, m), b = /* @__PURE__ */ et(Xa.ul, kn({
    "data-orientation": x.orientation
  }, C, {
    ref: y
  }));
  return /* @__PURE__ */ et(Xa.div, {
    style: {
      position: "relative"
    },
    ref: x.onIndicatorTrackChange
  }, /* @__PURE__ */ et(E1.Slot, {
    scope: m
  }, x.isRootMenu ? /* @__PURE__ */ et(Kx, {
    asChild: !0
  }, b) : b));
}), IM = "NavigationMenuItem", [YM, Yx] = b1(IM), GM = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, value: C, ...x } = d, b = Hx(), h = C || b || "LEGACY_REACT_AUTO_VALUE", D = pn(null), T = pn(null), R = pn(null), A = pn(() => {
  }), _ = pn(!1), U = vi(($ = "start") => {
    if (D.current) {
      A.current();
      const j = d1(D.current);
      j.length && x1($ === "start" ? j : j.reverse());
    }
  }, []), F = vi(() => {
    if (D.current) {
      const $ = d1(D.current);
      $.length && (A.current = rO($));
    }
  }, []);
  return /* @__PURE__ */ et(YM, {
    scope: m,
    value: h,
    triggerRef: T,
    contentRef: D,
    focusProxyRef: R,
    wasEscapeCloseRef: _,
    onEntryKeyDown: U,
    onFocusProxyEnter: U,
    onRootContentClose: F,
    onContentFocusOutside: F
  }, /* @__PURE__ */ et(Xa.li, kn({}, x, {
    ref: y
  })));
}), bx = "NavigationMenuTrigger", QM = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, disabled: C, ...x } = d, b = Ii(bx, d.__scopeNavigationMenu), h = Yx(bx, d.__scopeNavigationMenu), D = pn(null), T = bl(D, h.triggerRef, y), R = Xx(b.baseId, h.value), A = Zx(b.baseId, h.value), _ = pn(!1), U = pn(!1), F = h.value === b.value;
  return /* @__PURE__ */ et(a1, null, /* @__PURE__ */ et(E1.ItemSlot, {
    scope: m,
    value: h.value
  }, /* @__PURE__ */ et(qx, {
    asChild: !0
  }, /* @__PURE__ */ et(Xa.button, kn({
    id: R,
    disabled: C,
    "data-disabled": C ? "" : void 0,
    "data-state": w1(F),
    "aria-expanded": F,
    "aria-controls": A
  }, x, {
    ref: T,
    onPointerEnter: Er(d.onPointerEnter, () => {
      U.current = !1, h.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: Er(d.onPointerMove, Sy(() => {
      C || U.current || h.wasEscapeCloseRef.current || _.current || (b.onTriggerEnter(h.value), _.current = !0);
    })),
    onPointerLeave: Er(d.onPointerLeave, Sy(() => {
      C || (b.onTriggerLeave(), _.current = !1);
    })),
    onClick: Er(d.onClick, () => {
      b.onItemSelect(h.value), U.current = F;
    }),
    onKeyDown: Er(d.onKeyDown, ($) => {
      const G = {
        horizontal: "ArrowDown",
        vertical: b.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[b.orientation];
      F && $.key === G && (h.onEntryKeyDown(), $.preventDefault());
    })
  })))), F && /* @__PURE__ */ et(a1, null, /* @__PURE__ */ et(LM, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: h.focusProxyRef,
    onFocus: ($) => {
      const j = h.contentRef.current, G = $.relatedTarget, W = G === D.current, K = j == null ? void 0 : j.contains(G);
      (W || !K) && h.onFocusProxyEnter(W ? "start" : "end");
    }
  }), b.viewport && /* @__PURE__ */ et("span", {
    "aria-owns": A
  })));
}), xx = "navigationMenu.linkSelect", WM = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, active: C, onSelect: x, ...b } = d;
  return /* @__PURE__ */ et(qx, {
    asChild: !0
  }, /* @__PURE__ */ et(Xa.a, kn({
    "data-active": C ? "" : void 0,
    "aria-current": C ? "page" : void 0
  }, b, {
    ref: y,
    onClick: Er(d.onClick, (h) => {
      const D = h.target, T = new CustomEvent(xx, {
        bubbles: !0,
        cancelable: !0
      });
      if (D.addEventListener(
        xx,
        (R) => x == null ? void 0 : x(R),
        {
          once: !0
        }
      ), s1(D, T), !T.defaultPrevented && !h.metaKey) {
        const R = new CustomEvent(my, {
          bubbles: !0,
          cancelable: !0
        });
        s1(D, R);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Gx = "NavigationMenuIndicator", KM = /* @__PURE__ */ Hn((d, y) => {
  const { forceMount: m, ...C } = d, x = Ii(Gx, d.__scopeNavigationMenu), b = !!x.value;
  return x.indicatorTrack ? /* @__PURE__ */ sM.createPortal(/* @__PURE__ */ et(fv, {
    present: m || b
  }, /* @__PURE__ */ et(qM, kn({}, C, {
    ref: y
  }))), x.indicatorTrack) : null;
}), qM = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, ...C } = d, x = Ii(Gx, m), b = Ix(m), [h, D] = Ar(null), [T, R] = Ar(null), A = x.orientation === "horizontal", _ = !!x.value;
  br(() => {
    var F;
    const j = (F = b().find(
      (G) => G.value === x.value
    )) === null || F === void 0 ? void 0 : F.ref.current;
    j && D(j);
  }, [
    b,
    x.value
  ]);
  const U = () => {
    h && R({
      size: A ? h.offsetWidth : h.offsetHeight,
      offset: A ? h.offsetLeft : h.offsetTop
    });
  };
  return p1(h, U), p1(x.indicatorTrack, U), T ? /* @__PURE__ */ et(Xa.div, kn({
    "aria-hidden": !0,
    "data-state": _ ? "visible" : "hidden",
    "data-orientation": x.orientation
  }, C, {
    ref: y,
    style: {
      position: "absolute",
      ...A ? {
        left: 0,
        width: T.size + "px",
        transform: `translateX(${T.offset}px)`
      } : {
        top: 0,
        height: T.size + "px",
        transform: `translateY(${T.offset}px)`
      },
      ...C.style
    }
  })) : null;
}), lv = "NavigationMenuContent", XM = /* @__PURE__ */ Hn((d, y) => {
  const { forceMount: m, ...C } = d, x = Ii(lv, d.__scopeNavigationMenu), b = Yx(lv, d.__scopeNavigationMenu), h = bl(b.contentRef, y), D = b.value === x.value, T = {
    value: b.value,
    triggerRef: b.triggerRef,
    focusProxyRef: b.focusProxyRef,
    wasEscapeCloseRef: b.wasEscapeCloseRef,
    onContentFocusOutside: b.onContentFocusOutside,
    onRootContentClose: b.onRootContentClose,
    ...C
  };
  return x.viewport ? /* @__PURE__ */ et(ZM, kn({
    forceMount: m
  }, T, {
    ref: h
  })) : /* @__PURE__ */ et(fv, {
    present: m || D
  }, /* @__PURE__ */ et(Qx, kn({
    "data-state": w1(D)
  }, T, {
    ref: h,
    onPointerEnter: Er(d.onPointerEnter, x.onContentEnter),
    onPointerLeave: Er(d.onPointerLeave, Sy(x.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !D && x.isRootMenu ? "none" : void 0,
      ...T.style
    }
  })));
}), ZM = /* @__PURE__ */ Hn((d, y) => {
  const m = Ii(lv, d.__scopeNavigationMenu), { onViewportContentChange: C, onViewportContentRemove: x } = m;
  return Uf(() => {
    C(d.value, {
      ref: y,
      ...d
    });
  }, [
    d,
    y,
    C
  ]), Uf(() => () => x(d.value), [
    d.value,
    x
  ]), null;
}), my = "navigationMenu.rootContentDismiss", Qx = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, value: C, triggerRef: x, focusProxyRef: b, wasEscapeCloseRef: h, onRootContentClose: D, onContentFocusOutside: T, ...R } = d, A = Ii(lv, m), _ = pn(null), U = bl(_, y), F = Xx(A.baseId, C), $ = Zx(A.baseId, C), j = Ix(m), G = pn(null), { onItemDismiss: W } = A;
  br(() => {
    const q = _.current;
    if (A.isRootMenu && q) {
      const ae = () => {
        var te;
        W(), D(), q.contains(document.activeElement) && ((te = x.current) === null || te === void 0 || te.focus());
      };
      return q.addEventListener(my, ae), () => q.removeEventListener(my, ae);
    }
  }, [
    A.isRootMenu,
    d.value,
    x,
    W,
    D
  ]);
  const K = Af(() => {
    const ae = j().map(
      (De) => De.value
    );
    A.dir === "rtl" && ae.reverse();
    const te = ae.indexOf(A.value), Se = ae.indexOf(A.previousValue), oe = C === A.value, de = Se === ae.indexOf(C);
    if (!oe && !de)
      return G.current;
    const ve = (() => {
      if (te !== Se) {
        if (oe && Se !== -1)
          return te > Se ? "from-end" : "from-start";
        if (de && te !== -1)
          return te > Se ? "to-start" : "to-end";
      }
      return null;
    })();
    return G.current = ve, ve;
  }, [
    A.previousValue,
    A.value,
    A.dir,
    j,
    C
  ]);
  return /* @__PURE__ */ et(Kx, {
    asChild: !0
  }, /* @__PURE__ */ et(DM, kn({
    id: $,
    "aria-labelledby": F,
    "data-motion": K,
    "data-orientation": A.orientation
  }, R, {
    ref: U,
    onDismiss: () => {
      var q;
      const ae = new Event(my, {
        bubbles: !0,
        cancelable: !0
      });
      (q = _.current) === null || q === void 0 || q.dispatchEvent(ae);
    },
    onFocusOutside: Er(d.onFocusOutside, (q) => {
      var ae;
      T();
      const te = q.target;
      (ae = A.rootNavigationMenu) !== null && ae !== void 0 && ae.contains(te) && q.preventDefault();
    }),
    onPointerDownOutside: Er(d.onPointerDownOutside, (q) => {
      var ae;
      const te = q.target, Se = j().some((de) => {
        var ve;
        return (ve = de.ref.current) === null || ve === void 0 ? void 0 : ve.contains(te);
      }), oe = A.isRootMenu && ((ae = A.viewport) === null || ae === void 0 ? void 0 : ae.contains(te));
      (Se || oe || !A.isRootMenu) && q.preventDefault();
    }),
    onKeyDown: Er(d.onKeyDown, (q) => {
      const ae = q.altKey || q.ctrlKey || q.metaKey;
      if (q.key === "Tab" && !ae) {
        const oe = d1(q.currentTarget), de = document.activeElement, ve = oe.findIndex(
          (Ue) => Ue === de
        ), Oe = q.shiftKey ? oe.slice(0, ve).reverse() : oe.slice(ve + 1, oe.length);
        if (x1(Oe))
          q.preventDefault();
        else {
          var Se;
          (Se = b.current) === null || Se === void 0 || Se.focus();
        }
      }
    }),
    onEscapeKeyDown: Er(d.onEscapeKeyDown, (q) => {
      h.current = !0;
    })
  })));
}), Wx = "NavigationMenuViewport", JM = /* @__PURE__ */ Hn((d, y) => {
  const { forceMount: m, ...C } = d, b = !!Ii(Wx, d.__scopeNavigationMenu).value;
  return /* @__PURE__ */ et(fv, {
    present: m || b
  }, /* @__PURE__ */ et(eO, kn({}, C, {
    ref: y
  })));
}), eO = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, children: C, ...x } = d, b = Ii(Wx, m), h = bl(y, b.onViewportChange), D = jM(lv, d.__scopeNavigationMenu), [T, R] = Ar(null), [A, _] = Ar(null), U = T ? (T == null ? void 0 : T.width) + "px" : void 0, F = T ? (T == null ? void 0 : T.height) + "px" : void 0, $ = !!b.value, j = $ ? b.value : b.previousValue;
  return p1(A, () => {
    A && R({
      width: A.offsetWidth,
      height: A.offsetHeight
    });
  }), /* @__PURE__ */ et(Xa.div, kn({
    "data-state": w1($),
    "data-orientation": b.orientation
  }, x, {
    ref: h,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !$ && b.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": U,
      "--radix-navigation-menu-viewport-height": F,
      ...x.style
    },
    onPointerEnter: Er(d.onPointerEnter, b.onContentEnter),
    onPointerLeave: Er(d.onPointerLeave, Sy(b.onContentLeave))
  }), Array.from(D.items).map(([W, { ref: K, forceMount: q, ...ae }]) => {
    const te = j === W;
    return /* @__PURE__ */ et(fv, {
      key: W,
      present: q || te
    }, /* @__PURE__ */ et(Qx, kn({}, ae, {
      ref: C1(K, (Se) => {
        te && Se && _(Se);
      })
    })));
  }));
}), tO = "FocusGroup", Kx = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, ...C } = d, x = Ii(tO, m);
  return /* @__PURE__ */ et(f1.Provider, {
    scope: m
  }, /* @__PURE__ */ et(f1.Slot, {
    scope: m
  }, /* @__PURE__ */ et(Xa.div, kn({
    dir: x.dir
  }, C, {
    ref: y
  }))));
}), wx = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], nO = "FocusGroupItem", qx = /* @__PURE__ */ Hn((d, y) => {
  const { __scopeNavigationMenu: m, ...C } = d, x = AM(m), b = Ii(nO, m);
  return /* @__PURE__ */ et(f1.ItemSlot, {
    scope: m
  }, /* @__PURE__ */ et(Xa.button, kn({}, C, {
    ref: y,
    onKeyDown: Er(d.onKeyDown, (h) => {
      if ([
        "Home",
        "End",
        ...wx
      ].includes(h.key)) {
        let T = x().map(
          (_) => _.ref.current
        );
        if ([
          b.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(h.key) && T.reverse(), wx.includes(h.key)) {
          const _ = T.indexOf(h.currentTarget);
          T = T.slice(_ + 1);
        }
        setTimeout(
          () => x1(T)
        ), h.preventDefault();
      }
    })
  })));
});
function d1(d) {
  const y = [], m = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (C) => {
      const x = C.tagName === "INPUT" && C.type === "hidden";
      return C.disabled || C.hidden || x ? NodeFilter.FILTER_SKIP : C.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; m.nextNode(); )
    y.push(m.currentNode);
  return y;
}
function x1(d) {
  const y = document.activeElement;
  return d.some((m) => m === y ? !0 : (m.focus(), document.activeElement !== y));
}
function rO(d) {
  return d.forEach((y) => {
    y.dataset.tabindex = y.getAttribute("tabindex") || "", y.setAttribute("tabindex", "-1");
  }), () => {
    d.forEach((y) => {
      const m = y.dataset.tabindex;
      y.setAttribute("tabindex", m);
    });
  };
}
function p1(d, y) {
  const m = pi(y);
  Uf(() => {
    let C = 0;
    if (d) {
      const x = new ResizeObserver(() => {
        cancelAnimationFrame(C), C = window.requestAnimationFrame(m);
      });
      return x.observe(d), () => {
        window.cancelAnimationFrame(C), x.unobserve(d);
      };
    }
  }, [
    d,
    m
  ]);
}
function w1(d) {
  return d ? "open" : "closed";
}
function Xx(d, y) {
  return `${d}-trigger-${y}`;
}
function Zx(d, y) {
  return `${d}-content-${y}`;
}
function Sy(d) {
  return (y) => y.pointerType === "mouse" ? d(y) : void 0;
}
const Jx = PM, ew = BM, aO = GM, tw = QM, iO = WM, nw = KM, rw = XM, aw = JM;
function iw(d) {
  var y, m, C = "";
  if (typeof d == "string" || typeof d == "number")
    C += d;
  else if (typeof d == "object")
    if (Array.isArray(d))
      for (y = 0; y < d.length; y++)
        d[y] && (m = iw(d[y])) && (C && (C += " "), C += m);
    else
      for (y in d)
        d[y] && (C && (C += " "), C += y);
  return C;
}
function oO() {
  for (var d, y, m = 0, C = ""; m < arguments.length; )
    (d = arguments[m++]) && (y = iw(d)) && (C && (C += " "), C += y);
  return C;
}
const Tx = (d) => typeof d == "boolean" ? "".concat(d) : d === 0 ? "0" : d, Rx = oO, ow = (d, y) => (m) => {
  var C;
  if ((y == null ? void 0 : y.variants) == null)
    return Rx(d, m == null ? void 0 : m.class, m == null ? void 0 : m.className);
  const { variants: x, defaultVariants: b } = y, h = Object.keys(x).map((R) => {
    const A = m == null ? void 0 : m[R], _ = b == null ? void 0 : b[R];
    if (A === null)
      return null;
    const U = Tx(A) || Tx(_);
    return x[R][U];
  }), D = m && Object.entries(m).reduce((R, A) => {
    let [_, U] = A;
    return U === void 0 || (R[_] = U), R;
  }, {}), T = y == null || (C = y.compoundVariants) === null || C === void 0 ? void 0 : C.reduce((R, A) => {
    let { class: _, className: U, ...F } = A;
    return Object.entries(F).every(($) => {
      let [j, G] = $;
      return Array.isArray(G) ? G.includes({
        ...b,
        ...D
      }[j]) : {
        ...b,
        ...D
      }[j] === G;
    }) ? [
      ...R,
      _,
      U
    ] : R;
  }, []);
  return Rx(d, h, T, m == null ? void 0 : m.class, m == null ? void 0 : m.className);
}, lw = dn.forwardRef(({ className: d, children: y, ...m }, C) => /* @__PURE__ */ ge.jsxs(
  Jx,
  {
    ref: C,
    className: Zr(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      d
    ),
    ...m,
    children: [
      y,
      /* @__PURE__ */ ge.jsx(fw, {})
    ]
  }
));
lw.displayName = Jx.displayName;
const uw = dn.forwardRef(({ className: d, ...y }, m) => /* @__PURE__ */ ge.jsx(
  ew,
  {
    ref: m,
    className: Zr(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      d
    ),
    ...y
  }
));
uw.displayName = ew.displayName;
const lO = aO, uO = ow(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), sw = dn.forwardRef(({ className: d, children: y, ...m }, C) => /* @__PURE__ */ ge.jsxs(
  tw,
  {
    ref: C,
    className: Zr(uO(), "group", d),
    ...m,
    children: [
      y,
      " ",
      /* @__PURE__ */ ge.jsx(
        mN,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
sw.displayName = tw.displayName;
const cw = dn.forwardRef(({ className: d, ...y }, m) => /* @__PURE__ */ ge.jsx(
  rw,
  {
    ref: m,
    className: Zr(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      d
    ),
    ...y
  }
));
cw.displayName = rw.displayName;
const v1 = iO, fw = dn.forwardRef(({ className: d, ...y }, m) => /* @__PURE__ */ ge.jsx("div", { className: Zr("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ ge.jsx(
  aw,
  {
    className: Zr(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      d
    ),
    ref: m,
    ...y
  }
) }));
fw.displayName = aw.displayName;
const sO = dn.forwardRef(({ className: d, ...y }, m) => /* @__PURE__ */ ge.jsx(
  nw,
  {
    ref: m,
    className: Zr(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      d
    ),
    ...y,
    children: /* @__PURE__ */ ge.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
sO.displayName = nw.displayName;
const cO = ow(
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
), by = dn.forwardRef(
  ({ className: d, variant: y, size: m, asChild: C = !1, ...x }, b) => {
    const h = C ? ov : "button";
    return /* @__PURE__ */ ge.jsx(
      h,
      {
        className: Zr(cO({ variant: y, size: m, className: d })),
        ref: b,
        ...x
      }
    );
  }
);
by.displayName = "Button";
const fO = {
  theme: "system",
  setTheme: () => null
}, dw = iv(fO);
function u2({
  children: d,
  defaultTheme: y = "system",
  storageKey: m = "vite-ui-theme",
  ...C
}) {
  const [x, b] = Ar(
    () => localStorage.getItem(m) || y
  );
  br(() => {
    const D = window.document.documentElement;
    if (D.classList.remove("light", "dark"), x === "system") {
      const T = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      D.classList.add(T);
      return;
    }
    D.classList.add(x);
  }, [x]);
  const h = {
    theme: x,
    setTheme: (D) => {
      localStorage.setItem(m, D), b(D);
    }
  };
  return /* @__PURE__ */ ge.jsx(dw.Provider, { ...C, value: h, children: d });
}
const dO = () => {
  const d = Ey(dw);
  if (d === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return d;
};
function pO() {
  const { setTheme: d, theme: y } = dO(), m = () => {
    d(y === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ ge.jsxs(by, { variant: "outline", size: "icon", onClick: () => m(), children: [
    /* @__PURE__ */ ge.jsx(bN, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ ge.jsx(EN, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
    /* @__PURE__ */ ge.jsx("span", { className: "sr-only", children: "Toggle theme" })
  ] });
}
const h1 = "horizontal", vO = [
  "horizontal",
  "vertical"
], pw = /* @__PURE__ */ Hn((d, y) => {
  const { decorative: m, orientation: C = h1, ...x } = d, b = vw(C) ? C : h1, D = m ? {
    role: "none"
  } : {
    "aria-orientation": b === "vertical" ? b : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ et(Xa.div, kn({
    "data-orientation": b
  }, D, x, {
    ref: y
  }));
});
pw.propTypes = {
  orientation(d, y, m) {
    const C = d[y], x = String(C);
    return C && !vw(C) ? new Error(hO(x, m)) : null;
  }
};
function hO(d, y) {
  return `Invalid prop \`orientation\` of value \`${d}\` supplied to \`${y}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${h1}\`.`;
}
function vw(d) {
  return vO.includes(d);
}
const hw = pw, mw = dn.forwardRef(
  ({ className: d, orientation: y = "horizontal", decorative: m = !0, ...C }, x) => /* @__PURE__ */ ge.jsx(
    hw,
    {
      ref: x,
      decorative: m,
      orientation: y,
      className: Zr(
        "shrink-0 bg-border",
        y === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        d
      ),
      ...C
    }
  )
);
mw.displayName = hw.displayName;
const s2 = () => /* @__PURE__ */ ge.jsx("div", { className: "bg-background sticky z-50 top-0 inset-x-0 h-16", children: /* @__PURE__ */ ge.jsxs("header", { className: "relative", children: [
  /* @__PURE__ */ ge.jsxs("div", { className: "flex flex-row justify-between items-center mx-2 h-16", children: [
    /* @__PURE__ */ ge.jsx(lw, { children: /* @__PURE__ */ ge.jsx(uw, { children: /* @__PURE__ */ ge.jsxs(lO, { children: [
      /* @__PURE__ */ ge.jsx(sw, { className: "bg-secondary dark:bg-secondary p-2 rounded-lg", children: "My Apps" }),
      /* @__PURE__ */ ge.jsx(cw, { children: /* @__PURE__ */ ge.jsxs("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ ge.jsx("li", { className: "row-span-3", children: /* @__PURE__ */ ge.jsxs("div", { className: "flex flex-col gap-2 h-full", children: [
          /* @__PURE__ */ ge.jsx(v1, { asChild: !0, children: /* @__PURE__ */ ge.jsxs(
            "a",
            {
              className: "flex h-3/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
              target: "_blank",
              href: "https://www.gobber.ch",
              children: [
                /* @__PURE__ */ ge.jsx("div", { className: "mb-2 text-lg font-medium", children: "Gobber.ch" }),
                /* @__PURE__ */ ge.jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "My place on the web" })
              ]
            }
          ) }),
          /* @__PURE__ */ ge.jsx(v1, { asChild: !0, children: /* @__PURE__ */ ge.jsx(
            "a",
            {
              className: "flex h-1/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-4 no-underline outline-none focus:shadow-md",
              target: "_blank",
              href: "https://github.com/KyrillGobber",
              children: /* @__PURE__ */ ge.jsxs("span", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ ge.jsx(Mx, {}),
                /* @__PURE__ */ ge.jsx("p", { children: "My Github" })
              ] })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ ge.jsx(
          r1,
          {
            href: "https://teabruh.gobber.ch",
            title: "TeaBruh",
            text: "The GongFu timer app, we teaheads needed."
          }
        ),
        /* @__PURE__ */ ge.jsx(
          r1,
          {
            href: "https://miit.gobber.ch",
            title: "Miit",
            text: "A free Doodle alternative. Your miitup planner."
          }
        ),
        /* @__PURE__ */ ge.jsx(
          r1,
          {
            href: "https://kybits.gobber.ch",
            title: "KyBits",
            text: "A simple habit tracker app."
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ ge.jsx("h1", { children: "Gobber.ch" }),
    /* @__PURE__ */ ge.jsx("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ ge.jsx(pO, {}) })
  ] }),
  /* @__PURE__ */ ge.jsx(mw, { className: "bg-secondary" })
] }) }), r1 = ({ title: d, href: y, text: m }) => /* @__PURE__ */ ge.jsx("li", { children: /* @__PURE__ */ ge.jsx(v1, { asChild: !0, children: /* @__PURE__ */ ge.jsxs(
  "a",
  {
    href: y,
    target: "_blank",
    className: Zr(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    ),
    children: [
      /* @__PURE__ */ ge.jsx("div", { className: "text-sm font-medium leading-none", children: d }),
      /* @__PURE__ */ ge.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: m })
    ]
  }
) }) }), c2 = ({ children: d }) => /* @__PURE__ */ ge.jsx("div", { className: Zr("relative h-full font-sans antialiased"), children: /* @__PURE__ */ ge.jsx("main", { className: "relative flex flex-col min-h-screen gap-8", children: d }) }), f2 = ({ children: d }) => /* @__PURE__ */ ge.jsx("div", { className: "flex flex-col justify-start items-center gap-20", children: /* @__PURE__ */ ge.jsx("div", { className: "flex w-10/12 sm:w-2/3 flex-col items-center gap-8 mt-12 md:mt-32 text-center", children: d }) });
function mO(d) {
  return Object.prototype.toString.call(d) === "[object Object]";
}
function kx(d) {
  return mO(d) || Array.isArray(d);
}
function yO() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function T1(d, y) {
  const m = Object.keys(d), C = Object.keys(y);
  if (m.length !== C.length)
    return !1;
  const x = JSON.stringify(Object.keys(d.breakpoints || {})), b = JSON.stringify(Object.keys(y.breakpoints || {}));
  return x !== b ? !1 : m.every((h) => {
    const D = d[h], T = y[h];
    return typeof D == "function" ? `${D}` == `${T}` : !kx(D) || !kx(T) ? D === T : T1(D, T);
  });
}
function Dx(d) {
  return d.concat().sort((y, m) => y.name > m.name ? 1 : -1).map((y) => y.options);
}
function gO(d, y) {
  if (d.length !== y.length)
    return !1;
  const m = Dx(d), C = Dx(y);
  return m.every((x, b) => {
    const h = C[b];
    return T1(x, h);
  });
}
function R1(d) {
  return typeof d == "number";
}
function m1(d) {
  return typeof d == "string";
}
function k1(d) {
  return typeof d == "boolean";
}
function _x(d) {
  return Object.prototype.toString.call(d) === "[object Object]";
}
function Sn(d) {
  return Math.abs(d);
}
function D1(d) {
  return Math.sign(d);
}
function av(d, y) {
  return Sn(d - y);
}
function SO(d, y) {
  if (d === 0 || y === 0 || Sn(d) <= Sn(y))
    return 0;
  const m = av(Sn(d), Sn(y));
  return Sn(m / d);
}
function uv(d) {
  return sv(d).map(Number);
}
function Bi(d) {
  return d[pv(d)];
}
function pv(d) {
  return Math.max(0, d.length - 1);
}
function _1(d, y) {
  return y === pv(d);
}
function Nx(d, y = 0) {
  return Array.from(Array(d), (m, C) => y + C);
}
function sv(d) {
  return Object.keys(d);
}
function yw(d, y) {
  return [d, y].reduce((m, C) => (sv(C).forEach((x) => {
    const b = m[x], h = C[x], D = _x(b) && _x(h);
    m[x] = D ? yw(b, h) : h;
  }), m), {});
}
function gw(d, y) {
  return typeof y.MouseEvent < "u" && d instanceof y.MouseEvent;
}
function CO(d, y) {
  const m = {
    start: C,
    center: x,
    end: b
  };
  function C() {
    return 0;
  }
  function x(T) {
    return b(T) / 2;
  }
  function b(T) {
    return y - T;
  }
  function h(T, R) {
    return m1(d) ? m[d](T) : d(y, T, R);
  }
  return {
    measure: h
  };
}
function cv() {
  let d = [];
  function y(x, b, h, D = {
    passive: !0
  }) {
    let T;
    if ("addEventListener" in x)
      x.addEventListener(b, h, D), T = () => x.removeEventListener(b, h, D);
    else {
      const R = x;
      R.addListener(h), T = () => R.removeListener(h);
    }
    return d.push(T), C;
  }
  function m() {
    d = d.filter((x) => x());
  }
  const C = {
    add: y,
    clear: m
  };
  return C;
}
function EO(d, y, m, C) {
  const x = cv(), b = 1e3 / 60;
  let h = null, D = 0, T = 0;
  function R() {
    x.add(d, "visibilitychange", () => {
      d.hidden && $();
    });
  }
  function A() {
    F(), x.clear();
  }
  function _(G) {
    if (!T)
      return;
    h || (h = G);
    const W = G - h;
    for (h = G, D += W; D >= b; )
      m(), D -= b;
    const K = Sn(D / b);
    C(K), T && y.requestAnimationFrame(_);
  }
  function U() {
    T || (T = y.requestAnimationFrame(_));
  }
  function F() {
    y.cancelAnimationFrame(T), h = null, D = 0, T = 0;
  }
  function $() {
    h = null, D = 0;
  }
  return {
    init: R,
    destroy: A,
    start: U,
    stop: F,
    update: m,
    render: C
  };
}
function bO(d, y) {
  const m = y === "rtl", C = d === "y", x = C ? "y" : "x", b = C ? "x" : "y", h = !C && m ? -1 : 1, D = A(), T = _();
  function R($) {
    const {
      height: j,
      width: G
    } = $;
    return C ? j : G;
  }
  function A() {
    return C ? "top" : m ? "right" : "left";
  }
  function _() {
    return C ? "bottom" : m ? "left" : "right";
  }
  function U($) {
    return $ * h;
  }
  return {
    scroll: x,
    cross: b,
    startEdge: D,
    endEdge: T,
    measureSize: R,
    direction: U
  };
}
function Fs(d = 0, y = 0) {
  const m = Sn(d - y);
  function C(R) {
    return R < d;
  }
  function x(R) {
    return R > y;
  }
  function b(R) {
    return C(R) || x(R);
  }
  function h(R) {
    return b(R) ? C(R) ? d : y : R;
  }
  function D(R) {
    return m ? R - m * Math.ceil((R - y) / m) : R;
  }
  return {
    length: m,
    max: y,
    min: d,
    constrain: h,
    reachedAny: b,
    reachedMax: x,
    reachedMin: C,
    removeOffset: D
  };
}
function Sw(d, y, m) {
  const {
    constrain: C
  } = Fs(0, d), x = d + 1;
  let b = h(y);
  function h(U) {
    return m ? Sn((x + U) % x) : C(U);
  }
  function D() {
    return b;
  }
  function T(U) {
    return b = h(U), _;
  }
  function R(U) {
    return A().set(D() + U);
  }
  function A() {
    return Sw(d, D(), m);
  }
  const _ = {
    get: D,
    set: T,
    add: R,
    clone: A
  };
  return _;
}
function xO(d, y, m, C, x, b, h, D, T, R, A, _, U, F, $, j, G, W, K) {
  const {
    cross: q,
    direction: ae
  } = d, te = ["INPUT", "SELECT", "TEXTAREA"], Se = {
    passive: !1
  }, oe = cv(), de = cv(), ve = Fs(50, 225).constrain(F.measure(20)), De = {
    mouse: 300,
    touch: 400
  }, Oe = {
    mouse: 500,
    touch: 600
  }, Ue = $ ? 43 : 25;
  let $e = !1, Ve = 0, kt = 0, ft = !1, At = !1, se = !1, xe = !1;
  function pe(Re) {
    if (!K)
      return;
    function qe(yt) {
      (k1(K) || K(Re, yt)) && xt(yt);
    }
    const mt = y;
    oe.add(mt, "dragstart", (yt) => yt.preventDefault(), Se).add(mt, "touchmove", () => {
    }, Se).add(mt, "touchend", () => {
    }).add(mt, "touchstart", qe).add(mt, "mousedown", qe).add(mt, "touchcancel", Dt).add(mt, "contextmenu", Dt).add(mt, "click", En, !0);
  }
  function Ke() {
    oe.clear(), de.clear();
  }
  function rt() {
    const Re = xe ? m : y;
    de.add(Re, "touchmove", an, Se).add(Re, "touchend", Dt).add(Re, "mousemove", an, Se).add(Re, "mouseup", Dt);
  }
  function Pt(Re) {
    const qe = Re.nodeName || "";
    return te.includes(qe);
  }
  function Cn() {
    return ($ ? Oe : De)[xe ? "mouse" : "touch"];
  }
  function ur(Re, qe) {
    const mt = _.add(D1(Re) * -1), yt = A.byDistance(Re, !$).distance;
    return $ || Sn(Re) < ve ? yt : G && qe ? yt * 0.5 : A.byIndex(mt.get(), 0).distance;
  }
  function xt(Re) {
    const qe = gw(Re, C);
    xe = qe, se = $ && qe && !Re.buttons && $e, $e = av(x.get(), h.get()) >= 2, !(qe && Re.button !== 0) && (Pt(Re.target) || (ft = !0, b.pointerDown(Re), R.useFriction(0).useDuration(0), x.set(h), rt(), Ve = b.readPoint(Re), kt = b.readPoint(Re, q), U.emit("pointerDown")));
  }
  function an(Re) {
    const qe = b.readPoint(Re), mt = b.readPoint(Re, q), yt = av(qe, Ve), Yt = av(mt, kt);
    if (!At && !xe && (!Re.cancelable || (At = yt > Yt, !At)))
      return Dt(Re);
    const Ut = b.pointerMove(Re);
    yt > j && (se = !0), R.useFriction(0.3).useDuration(1), D.start(), x.add(ae(Ut)), Re.preventDefault();
  }
  function Dt(Re) {
    const mt = A.byDistance(0, !1).index !== _.get(), yt = b.pointerUp(Re) * Cn(), Yt = ur(ae(yt), mt), Ut = SO(yt, Yt), hn = Ue - 10 * Ut, Ln = W + Ut / 50;
    At = !1, ft = !1, de.clear(), R.useDuration(hn).useFriction(Ln), T.distance(Yt, !$), xe = !1, U.emit("pointerUp");
  }
  function En(Re) {
    se && (Re.stopPropagation(), Re.preventDefault(), se = !1);
  }
  function vn() {
    return ft;
  }
  return {
    init: pe,
    pointerDown: vn,
    destroy: Ke
  };
}
function wO(d, y) {
  let C, x;
  function b(_) {
    return _.timeStamp;
  }
  function h(_, U) {
    const $ = `client${(U || d.scroll) === "x" ? "X" : "Y"}`;
    return (gw(_, y) ? _ : _.touches[0])[$];
  }
  function D(_) {
    return C = _, x = _, h(_);
  }
  function T(_) {
    const U = h(_) - h(x), F = b(_) - b(C) > 170;
    return x = _, F && (C = _), U;
  }
  function R(_) {
    if (!C || !x)
      return 0;
    const U = h(x) - h(C), F = b(_) - b(C), $ = b(_) - b(x) > 170, j = U / F;
    return F && !$ && Sn(j) > 0.1 ? j : 0;
  }
  return {
    pointerDown: D,
    pointerMove: T,
    pointerUp: R,
    readPoint: h
  };
}
function TO() {
  function d(m) {
    const {
      offsetTop: C,
      offsetLeft: x,
      offsetWidth: b,
      offsetHeight: h
    } = m;
    return {
      top: C,
      right: x + b,
      bottom: C + h,
      left: x,
      width: b,
      height: h
    };
  }
  return {
    measure: d
  };
}
function RO(d) {
  function y(C) {
    return d * (C / 100);
  }
  return {
    measure: y
  };
}
function kO(d, y, m, C, x, b, h) {
  let D, T, R = [], A = !1;
  function _(j) {
    return x.measureSize(h.measure(j));
  }
  function U(j) {
    if (!b)
      return;
    T = _(d), R = C.map(_);
    function G(K) {
      for (const q of K) {
        const ae = q.target === d, te = C.indexOf(q.target), Se = ae ? T : R[te], oe = _(ae ? d : C[te]);
        if (Sn(oe - Se) >= 0.5) {
          m.requestAnimationFrame(() => {
            j.reInit(), y.emit("resize");
          });
          break;
        }
      }
    }
    D = new ResizeObserver((K) => {
      A || (k1(b) || b(j, K)) && G(K);
    }), [d].concat(C).forEach((K) => D.observe(K));
  }
  function F() {
    D && D.disconnect(), A = !0;
  }
  return {
    init: U,
    destroy: F
  };
}
function DO(d, y, m, C, x) {
  let b = 0, h = 0, D = C, T = x, R = d.get(), A = 0;
  function _() {
    const te = m.get() - d.get(), Se = !D;
    let oe = 0;
    return Se ? (b = 0, d.set(m), oe = te) : (b += te / D, b *= T, R += b, d.add(b), oe = R - A), h = D1(oe), A = R, ae;
  }
  function U() {
    const te = m.get() - y.get();
    return Sn(te) < 1e-3;
  }
  function F() {
    return D;
  }
  function $() {
    return h;
  }
  function j() {
    return b;
  }
  function G() {
    return K(C);
  }
  function W() {
    return q(x);
  }
  function K(te) {
    return D = te, ae;
  }
  function q(te) {
    return T = te, ae;
  }
  const ae = {
    direction: $,
    duration: F,
    velocity: j,
    seek: _,
    settled: U,
    useBaseFriction: W,
    useBaseDuration: G,
    useFriction: q,
    useDuration: K
  };
  return ae;
}
function _O(d, y, m, C, x) {
  const b = x.measure(10), h = x.measure(50), D = Fs(0.1, 0.99);
  let T = !1;
  function R() {
    return !(T || !d.reachedAny(m.get()) || !d.reachedAny(y.get()));
  }
  function A(F) {
    if (!R())
      return;
    const $ = d.reachedMin(y.get()) ? "min" : "max", j = Sn(d[$] - y.get()), G = m.get() - y.get(), W = D.constrain(j / h);
    m.subtract(G * W), !F && Sn(G) < b && (m.set(d.constrain(m.get())), C.useDuration(25).useBaseFriction());
  }
  function _(F) {
    T = !F;
  }
  return {
    constrain: A,
    toggleActive: _
  };
}
function NO(d, y, m, C, x) {
  const b = Fs(-y + d, 0), h = _(), D = A(), T = U();
  function R($, j) {
    return av($, j) < 1;
  }
  function A() {
    const $ = h[0], j = Bi(h), G = h.lastIndexOf($), W = h.indexOf(j) + 1;
    return Fs(G, W);
  }
  function _() {
    return m.map(($, j) => {
      const {
        min: G,
        max: W
      } = b, K = b.constrain($), q = !j, ae = _1(m, j);
      return q ? W : ae || R(G, K) ? G : R(W, K) ? W : K;
    }).map(($) => parseFloat($.toFixed(3)));
  }
  function U() {
    if (y <= d + x)
      return [b.max];
    if (C === "keepSnaps")
      return h;
    const {
      min: $,
      max: j
    } = D;
    return h.slice($, j);
  }
  return {
    snapsContained: T,
    scrollContainLimit: D
  };
}
function MO(d, y, m) {
  const C = y[0], x = m ? C - d : Bi(y);
  return {
    limit: Fs(x, C)
  };
}
function OO(d, y, m, C) {
  const b = y.min + 0.1, h = y.max + 0.1, {
    reachedMin: D,
    reachedMax: T
  } = Fs(b, h);
  function R(U) {
    return U === 1 ? T(m.get()) : U === -1 ? D(m.get()) : !1;
  }
  function A(U) {
    if (!R(U))
      return;
    const F = d * (U * -1);
    C.forEach(($) => $.add(F));
  }
  return {
    loop: A
  };
}
function LO(d) {
  const {
    max: y,
    length: m
  } = d;
  function C(b) {
    const h = b - y;
    return m ? h / -m : 0;
  }
  return {
    get: C
  };
}
function zO(d, y, m, C, x) {
  const {
    startEdge: b,
    endEdge: h
  } = d, {
    groupSlides: D
  } = x, T = _().map(y.measure), R = U(), A = F();
  function _() {
    return D(C).map((j) => Bi(j)[h] - j[0][b]).map(Sn);
  }
  function U() {
    return C.map((j) => m[b] - j[b]).map((j) => -Sn(j));
  }
  function F() {
    return D(R).map((j) => j[0]).map((j, G) => j + T[G]);
  }
  return {
    snaps: R,
    snapsAligned: A
  };
}
function AO(d, y, m, C, x, b) {
  const {
    groupSlides: h
  } = x, {
    min: D,
    max: T
  } = C, R = A();
  function A() {
    const U = h(b), F = !d || y === "keepSnaps";
    return m.length === 1 ? [b] : F ? U : U.slice(D, T).map(($, j, G) => {
      const W = !j, K = _1(G, j);
      if (W) {
        const q = Bi(G[0]) + 1;
        return Nx(q);
      }
      if (K) {
        const q = pv(b) - Bi(G)[0] + 1;
        return Nx(q, Bi(G)[0]);
      }
      return $;
    });
  }
  return {
    slideRegistry: R
  };
}
function UO(d, y, m, C, x) {
  const {
    reachedAny: b,
    removeOffset: h,
    constrain: D
  } = C;
  function T($) {
    return $.concat().sort((j, G) => Sn(j) - Sn(G))[0];
  }
  function R($) {
    const j = d ? h($) : D($), G = y.map((K, q) => ({
      diff: A(K - j, 0),
      index: q
    })).sort((K, q) => Sn(K.diff) - Sn(q.diff)), {
      index: W
    } = G[0];
    return {
      index: W,
      distance: j
    };
  }
  function A($, j) {
    const G = [$, $ + m, $ - m];
    if (!d)
      return G[0];
    if (!j)
      return T(G);
    const W = G.filter((K) => D1(K) === j);
    return W.length ? T(W) : Bi(G) - m;
  }
  function _($, j) {
    const G = y[$] - x.get(), W = A(G, j);
    return {
      index: $,
      distance: W
    };
  }
  function U($, j) {
    const G = x.get() + $, {
      index: W,
      distance: K
    } = R(G), q = !d && b(G);
    if (!j || q)
      return {
        index: W,
        distance: $
      };
    const ae = y[W] - K, te = $ + A(ae, 0);
    return {
      index: W,
      distance: te
    };
  }
  return {
    byDistance: U,
    byIndex: _,
    shortcut: A
  };
}
function $O(d, y, m, C, x, b, h) {
  function D(_) {
    const U = _.distance, F = _.index !== y.get();
    b.add(U), U && (C.duration() ? d.start() : (d.update(), d.render(1), d.update())), F && (m.set(y.get()), y.set(_.index), h.emit("select"));
  }
  function T(_, U) {
    const F = x.byDistance(_, U);
    D(F);
  }
  function R(_, U) {
    const F = y.clone().set(_), $ = x.byIndex(F.get(), U);
    D($);
  }
  return {
    distance: T,
    index: R
  };
}
function FO(d, y, m, C, x, b) {
  let h = 0;
  function D() {
    b.add(document, "keydown", T, !1), y.forEach(R);
  }
  function T(_) {
    _.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  function R(_) {
    const U = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10)
        return;
      d.scrollLeft = 0;
      const j = y.indexOf(_), G = m.findIndex((W) => W.includes(j));
      R1(G) && (x.useDuration(0), C.index(G, 0));
    };
    b.add(_, "focus", U, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: D
  };
}
function yy(d) {
  let y = d;
  function m() {
    return y;
  }
  function C(T) {
    y = h(T);
  }
  function x(T) {
    y += h(T);
  }
  function b(T) {
    y -= h(T);
  }
  function h(T) {
    return R1(T) ? T : T.get();
  }
  return {
    get: m,
    set: C,
    add: x,
    subtract: b
  };
}
function Cw(d, y) {
  const m = d.scroll === "x" ? b : h, C = y.style;
  let x = !1;
  function b(_) {
    return `translate3d(${_}px,0px,0px)`;
  }
  function h(_) {
    return `translate3d(0px,${_}px,0px)`;
  }
  function D(_) {
    x || (C.transform = m(d.direction(_)));
  }
  function T(_) {
    x = !_;
  }
  function R() {
    x || (C.transform = "", y.getAttribute("style") || y.removeAttribute("style"));
  }
  return {
    clear: R,
    to: D,
    toggleActive: T
  };
}
function jO(d, y, m, C, x, b, h, D, T) {
  const A = uv(x), _ = uv(x).reverse(), U = W().concat(K());
  function F(oe, de) {
    return oe.reduce((ve, De) => ve - x[De], de);
  }
  function $(oe, de) {
    return oe.reduce((ve, De) => F(ve, de) > 0 ? ve.concat([De]) : ve, []);
  }
  function j(oe) {
    return b.map((de, ve) => ({
      start: de - C[ve] + 0.5 + oe,
      end: de + y - 0.5 + oe
    }));
  }
  function G(oe, de, ve) {
    const De = j(de);
    return oe.map((Oe) => {
      const Ue = ve ? 0 : -m, $e = ve ? m : 0, Ve = ve ? "end" : "start", kt = De[Oe][Ve];
      return {
        index: Oe,
        loopPoint: kt,
        slideLocation: yy(-1),
        translate: Cw(d, T[Oe]),
        target: () => D.get() > kt ? Ue : $e
      };
    });
  }
  function W() {
    const oe = h[0], de = $(_, oe);
    return G(de, m, !1);
  }
  function K() {
    const oe = y - h[0] - 1, de = $(A, oe);
    return G(de, -m, !0);
  }
  function q() {
    return U.every(({
      index: oe
    }) => {
      const de = A.filter((ve) => ve !== oe);
      return F(de, y) <= 0.1;
    });
  }
  function ae() {
    U.forEach((oe) => {
      const {
        target: de,
        translate: ve,
        slideLocation: De
      } = oe, Oe = de();
      Oe !== De.get() && (ve.to(Oe), De.set(Oe));
    });
  }
  function te() {
    U.forEach((oe) => oe.translate.clear());
  }
  return {
    canLoop: q,
    clear: te,
    loop: ae,
    loopPoints: U
  };
}
function PO(d, y, m) {
  let C, x = !1;
  function b(T) {
    if (!m)
      return;
    function R(A) {
      for (const _ of A)
        if (_.type === "childList") {
          T.reInit(), y.emit("slidesChanged");
          break;
        }
    }
    C = new MutationObserver((A) => {
      x || (k1(m) || m(T, A)) && R(A);
    }), C.observe(d, {
      childList: !0
    });
  }
  function h() {
    C && C.disconnect(), x = !0;
  }
  return {
    init: b,
    destroy: h
  };
}
function HO(d, y, m, C) {
  const x = {};
  let b = null, h = null, D, T = !1;
  function R() {
    D = new IntersectionObserver(($) => {
      T || ($.forEach((j) => {
        const G = y.indexOf(j.target);
        x[G] = j;
      }), b = null, h = null, m.emit("slidesInView"));
    }, {
      root: d.parentElement,
      threshold: C
    }), y.forEach(($) => D.observe($));
  }
  function A() {
    D && D.disconnect(), T = !0;
  }
  function _($) {
    return sv(x).reduce((j, G) => {
      const W = parseInt(G), {
        isIntersecting: K
      } = x[W];
      return ($ && K || !$ && !K) && j.push(W), j;
    }, []);
  }
  function U($ = !0) {
    if ($ && b)
      return b;
    if (!$ && h)
      return h;
    const j = _($);
    return $ && (b = j), $ || (h = j), j;
  }
  return {
    init: R,
    destroy: A,
    get: U
  };
}
function VO(d, y, m, C, x, b) {
  const {
    measureSize: h,
    startEdge: D,
    endEdge: T
  } = d, R = m[0] && x, A = $(), _ = j(), U = m.map(h), F = G();
  function $() {
    if (!R)
      return 0;
    const K = m[0];
    return Sn(y[D] - K[D]);
  }
  function j() {
    if (!R)
      return 0;
    const K = b.getComputedStyle(Bi(C));
    return parseFloat(K.getPropertyValue(`margin-${T}`));
  }
  function G() {
    return m.map((K, q, ae) => {
      const te = !q, Se = _1(ae, q);
      return te ? U[q] + A : Se ? U[q] + _ : ae[q + 1][D] - K[D];
    }).map(Sn);
  }
  return {
    slideSizes: U,
    slideSizesWithGaps: F,
    startGap: A,
    endGap: _
  };
}
function BO(d, y, m, C, x, b, h, D, T) {
  const {
    startEdge: R,
    endEdge: A,
    direction: _
  } = d, U = R1(m);
  function F(W, K) {
    return uv(W).filter((q) => q % K === 0).map((q) => W.slice(q, q + K));
  }
  function $(W) {
    return W.length ? uv(W).reduce((K, q, ae) => {
      const te = Bi(K) || 0, Se = te === 0, oe = q === pv(W), de = x[R] - b[te][R], ve = x[R] - b[q][A], De = !C && Se ? _(h) : 0, Oe = !C && oe ? _(D) : 0, Ue = Sn(ve - Oe - (de + De));
      return ae && Ue > y + T && K.push(q), oe && K.push(W.length), K;
    }, []).map((K, q, ae) => {
      const te = Math.max(ae[q - 1] || 0);
      return W.slice(te, K);
    }) : [];
  }
  function j(W) {
    return U ? F(W, m) : $(W);
  }
  return {
    groupSlides: j
  };
}
function IO(d, y, m, C, x, b, h) {
  const {
    align: D,
    axis: T,
    direction: R,
    startIndex: A,
    loop: _,
    duration: U,
    dragFree: F,
    dragThreshold: $,
    inViewThreshold: j,
    slidesToScroll: G,
    skipSnaps: W,
    containScroll: K,
    watchResize: q,
    watchSlides: ae,
    watchDrag: te
  } = b, Se = 2, oe = TO(), de = oe.measure(y), ve = m.map(oe.measure), De = bO(T, R), Oe = De.measureSize(de), Ue = RO(Oe), $e = CO(D, Oe), Ve = !_ && !!K, kt = _ || !!K, {
    slideSizes: ft,
    slideSizesWithGaps: At,
    startGap: se,
    endGap: xe
  } = VO(De, de, ve, m, kt, x), pe = BO(De, Oe, G, _, de, ve, se, xe, Se), {
    snaps: Ke,
    snapsAligned: rt
  } = zO(De, $e, de, ve, pe), Pt = -Bi(Ke) + Bi(At), {
    snapsContained: Cn,
    scrollContainLimit: ur
  } = NO(Oe, Pt, rt, K, Se), xt = Ve ? Cn : rt, {
    limit: an
  } = MO(Pt, xt, _), Dt = Sw(pv(xt), A, _), En = Dt.clone(), vn = uv(m), dt = ({
    dragHandler: bn,
    scrollBody: ha,
    scrollBounds: xr,
    options: {
      loop: fe
    }
  }) => {
    fe || xr.constrain(bn.pointerDown()), ha.seek();
  }, Re = ({
    scrollBody: bn,
    translate: ha,
    location: xr,
    offsetLocation: fe,
    scrollLooper: Fe,
    slideLooper: lt,
    dragHandler: _t,
    animation: Qt,
    eventHandler: xn,
    options: {
      loop: on
    }
  }, fr) => {
    const Lt = bn.velocity(), dr = bn.settled();
    dr && !_t.pointerDown() && (Qt.stop(), xn.emit("settle")), dr || xn.emit("scroll"), fe.set(xr.get() - Lt + Lt * fr), on && (Fe.loop(bn.direction()), lt.loop()), ha.to(fe.get());
  }, qe = EO(C, x, () => dt(Jt), (bn) => Re(Jt, bn)), mt = 0.68, yt = xt[Dt.get()], Yt = yy(yt), Ut = yy(yt), hn = yy(yt), Ln = DO(Yt, Ut, hn, U, mt), Jr = UO(_, xt, Pt, an, hn), Ur = $O(qe, Dt, En, Ln, Jr, hn, h), $r = LO(an), sr = cv(), va = HO(y, m, h, j), {
    slideRegistry: cr
  } = AO(Ve, K, xt, ur, pe, vn), ea = FO(d, m, cr, Ur, Ln, sr), Jt = {
    ownerDocument: C,
    ownerWindow: x,
    eventHandler: h,
    containerRect: de,
    slideRects: ve,
    animation: qe,
    axis: De,
    dragHandler: xO(De, d, C, x, hn, wO(De, x), Yt, qe, Ur, Ln, Jr, Dt, h, Ue, F, $, W, mt, te),
    eventStore: sr,
    percentOfView: Ue,
    index: Dt,
    indexPrevious: En,
    limit: an,
    location: Yt,
    offsetLocation: Ut,
    options: b,
    resizeHandler: kO(y, h, x, m, De, q, oe),
    scrollBody: Ln,
    scrollBounds: _O(an, Ut, hn, Ln, Ue),
    scrollLooper: OO(Pt, an, Ut, [Yt, Ut, hn]),
    scrollProgress: $r,
    scrollSnapList: xt.map($r.get),
    scrollSnaps: xt,
    scrollTarget: Jr,
    scrollTo: Ur,
    slideLooper: jO(De, Oe, Pt, ft, At, Ke, xt, Ut, m),
    slideFocus: ea,
    slidesHandler: PO(y, h, ae),
    slidesInView: va,
    slideIndexes: vn,
    slideRegistry: cr,
    slidesToScroll: pe,
    target: hn,
    translate: Cw(De, y)
  };
  return Jt;
}
function YO() {
  const d = {};
  let y;
  function m(T) {
    y = T;
  }
  function C(T) {
    return d[T] || [];
  }
  function x(T) {
    return C(T).forEach((R) => R(y, T)), D;
  }
  function b(T, R) {
    return d[T] = C(T).concat([R]), D;
  }
  function h(T, R) {
    return d[T] = C(T).filter((A) => A !== R), D;
  }
  const D = {
    init: m,
    emit: x,
    off: h,
    on: b
  };
  return D;
}
const GO = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function QO(d) {
  function y(b, h) {
    return yw(b, h || {});
  }
  function m(b) {
    const h = b.breakpoints || {}, D = sv(h).filter((T) => d.matchMedia(T).matches).map((T) => h[T]).reduce((T, R) => y(T, R), {});
    return y(b, D);
  }
  function C(b) {
    return b.map((h) => sv(h.breakpoints || {})).reduce((h, D) => h.concat(D), []).map(d.matchMedia);
  }
  return {
    mergeOptions: y,
    optionsAtMedia: m,
    optionsMediaQueries: C
  };
}
function WO(d) {
  let y = [];
  function m(b, h) {
    return y = h.filter(({
      options: D
    }) => d.optionsAtMedia(D).active !== !1), y.forEach((D) => D.init(b, d)), h.reduce((D, T) => Object.assign(D, {
      [T.name]: T
    }), {});
  }
  function C() {
    y = y.filter((b) => b.destroy());
  }
  return {
    init: m,
    destroy: C
  };
}
function Cy(d, y, m) {
  const C = d.ownerDocument, x = C.defaultView, b = QO(x), h = WO(b), D = cv(), T = YO(), {
    mergeOptions: R,
    optionsAtMedia: A,
    optionsMediaQueries: _
  } = b, {
    on: U,
    off: F,
    emit: $
  } = T, j = Oe;
  let G = !1, W, K = R(GO, Cy.globalOptions), q = R(K), ae = [], te, Se, oe;
  function de() {
    const {
      container: dt,
      slides: Re
    } = q;
    Se = (m1(dt) ? d.querySelector(dt) : dt) || d.children[0];
    const mt = m1(Re) ? Se.querySelectorAll(Re) : Re;
    oe = [].slice.call(mt || Se.children);
  }
  function ve(dt) {
    const Re = IO(d, Se, oe, C, x, dt, T);
    if (dt.loop && !Re.slideLooper.canLoop()) {
      const qe = Object.assign({}, dt, {
        loop: !1
      });
      return ve(qe);
    }
    return Re;
  }
  function De(dt, Re) {
    G || (K = R(K, dt), q = A(K), ae = Re || ae, de(), W = ve(q), _([K, ...ae.map(({
      options: qe
    }) => qe)]).forEach((qe) => D.add(qe, "change", Oe)), q.active && (W.translate.to(W.location.get()), W.animation.init(), W.slidesInView.init(), W.slideFocus.init(), W.eventHandler.init(vn), W.resizeHandler.init(vn), W.slidesHandler.init(vn), W.options.loop && W.slideLooper.loop(), Se.offsetParent && oe.length && W.dragHandler.init(vn), te = h.init(vn, ae)));
  }
  function Oe(dt, Re) {
    const qe = Ke();
    Ue(), De(R({
      startIndex: qe
    }, dt), Re), T.emit("reInit");
  }
  function Ue() {
    W.dragHandler.destroy(), W.eventStore.clear(), W.translate.clear(), W.slideLooper.clear(), W.resizeHandler.destroy(), W.slidesHandler.destroy(), W.slidesInView.destroy(), W.animation.destroy(), h.destroy(), D.clear();
  }
  function $e() {
    G || (G = !0, D.clear(), Ue(), T.emit("destroy"));
  }
  function Ve(dt, Re, qe) {
    !q.active || G || (W.scrollBody.useBaseFriction().useDuration(Re === !0 ? 0 : q.duration), W.scrollTo.index(dt, qe || 0));
  }
  function kt(dt) {
    const Re = W.index.add(1).get();
    Ve(Re, dt, -1);
  }
  function ft(dt) {
    const Re = W.index.add(-1).get();
    Ve(Re, dt, 1);
  }
  function At() {
    return W.index.add(1).get() !== Ke();
  }
  function se() {
    return W.index.add(-1).get() !== Ke();
  }
  function xe() {
    return W.scrollSnapList;
  }
  function pe() {
    return W.scrollProgress.get(W.location.get());
  }
  function Ke() {
    return W.index.get();
  }
  function rt() {
    return W.indexPrevious.get();
  }
  function Pt() {
    return W.slidesInView.get();
  }
  function Cn() {
    return W.slidesInView.get(!1);
  }
  function ur() {
    return te;
  }
  function xt() {
    return W;
  }
  function an() {
    return d;
  }
  function Dt() {
    return Se;
  }
  function En() {
    return oe;
  }
  const vn = {
    canScrollNext: At,
    canScrollPrev: se,
    containerNode: Dt,
    internalEngine: xt,
    destroy: $e,
    off: F,
    on: U,
    emit: $,
    plugins: ur,
    previousScrollSnap: rt,
    reInit: j,
    rootNode: an,
    scrollNext: kt,
    scrollPrev: ft,
    scrollProgress: pe,
    scrollSnapList: xe,
    scrollTo: Ve,
    selectedScrollSnap: Ke,
    slideNodes: En,
    slidesInView: Pt,
    slidesNotInView: Cn
  };
  return De(y, m), setTimeout(() => T.emit("init"), 0), vn;
}
Cy.globalOptions = void 0;
function N1(d = {}, y = []) {
  const m = pn(d), C = pn(y), [x, b] = Ar(), [h, D] = Ar(), T = vi(() => {
    x && x.reInit(m.current, C.current);
  }, [x]);
  return br(() => {
    if (yO() && h) {
      Cy.globalOptions = N1.globalOptions;
      const R = Cy(h, m.current, C.current);
      return b(R), () => R.destroy();
    } else
      b(void 0);
  }, [h, b]), br(() => {
    T1(m.current, d) || (m.current = d, T());
  }, [d, T]), br(() => {
    gO(C.current, y) || (C.current = y, T());
  }, [y, T]), [D, x];
}
N1.globalOptions = void 0;
const Ew = dn.createContext(null);
function xy() {
  const d = dn.useContext(Ew);
  if (!d)
    throw new Error("useCarousel must be used within a <Carousel />");
  return d;
}
const KO = dn.forwardRef(
  ({
    orientation: d = "horizontal",
    opts: y,
    setApi: m,
    plugins: C,
    className: x,
    children: b,
    ...h
  }, D) => {
    const [T, R] = N1(
      {
        ...y,
        axis: d === "horizontal" ? "x" : "y"
      },
      C
    ), [A, _] = dn.useState(!1), [U, F] = dn.useState(!1), $ = dn.useCallback((K) => {
      K && (_(K.canScrollPrev()), F(K.canScrollNext()));
    }, []), j = dn.useCallback(() => {
      R == null || R.scrollPrev();
    }, [R]), G = dn.useCallback(() => {
      R == null || R.scrollNext();
    }, [R]), W = dn.useCallback(
      (K) => {
        K.key === "ArrowLeft" ? (K.preventDefault(), j()) : K.key === "ArrowRight" && (K.preventDefault(), G());
      },
      [j, G]
    );
    return dn.useEffect(() => {
      !R || !m || m(R);
    }, [R, m]), dn.useEffect(() => {
      if (R)
        return $(R), R.on("reInit", $), R.on("select", $), () => {
          R == null || R.off("select", $);
        };
    }, [R, $]), /* @__PURE__ */ ge.jsx(
      Ew.Provider,
      {
        value: {
          carouselRef: T,
          api: R,
          opts: y,
          orientation: d || ((y == null ? void 0 : y.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: j,
          scrollNext: G,
          canScrollPrev: A,
          canScrollNext: U
        },
        children: /* @__PURE__ */ ge.jsx(
          "div",
          {
            ref: D,
            onKeyDownCapture: W,
            className: Zr("relative", x),
            role: "region",
            "aria-roledescription": "carousel",
            ...h,
            children: b
          }
        )
      }
    );
  }
);
KO.displayName = "Carousel";
const qO = dn.forwardRef(({ className: d, ...y }, m) => {
  const { carouselRef: C, orientation: x } = xy();
  return /* @__PURE__ */ ge.jsx("div", { ref: C, className: "overflow-hidden", children: /* @__PURE__ */ ge.jsx(
    "div",
    {
      ref: m,
      className: Zr(
        "flex",
        x === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        d
      ),
      ...y
    }
  ) });
});
qO.displayName = "CarouselContent";
const XO = dn.forwardRef(({ className: d, ...y }, m) => {
  const { orientation: C } = xy();
  return /* @__PURE__ */ ge.jsx(
    "div",
    {
      ref: m,
      role: "group",
      "aria-roledescription": "slide",
      className: Zr(
        "min-w-0 shrink-0 grow-0 basis-full",
        C === "horizontal" ? "pl-4" : "pt-4",
        d
      ),
      ...y
    }
  );
});
XO.displayName = "CarouselItem";
const ZO = dn.forwardRef(({ className: d, variant: y = "ghost", size: m = "icon", ...C }, x) => {
  const { orientation: b, scrollPrev: h, canScrollPrev: D } = xy();
  return /* @__PURE__ */ ge.jsxs(
    by,
    {
      ref: x,
      variant: y,
      size: m,
      className: Zr(
        "absolute  h-8 w-8 rounded-full",
        b === "horizontal" ? "-left-6 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        d
      ),
      disabled: !D,
      onClick: h,
      ...C,
      children: [
        /* @__PURE__ */ ge.jsx(yN, { className: "h-4 w-4" }),
        /* @__PURE__ */ ge.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
ZO.displayName = "CarouselPrevious";
const JO = dn.forwardRef(({ className: d, variant: y = "ghost", size: m = "icon", ...C }, x) => {
  const { orientation: b, scrollNext: h, canScrollNext: D } = xy();
  return /* @__PURE__ */ ge.jsxs(
    by,
    {
      ref: x,
      variant: y,
      size: m,
      className: Zr(
        "absolute h-8 w-8 rounded-full",
        b === "horizontal" ? "-right-6 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        d
      ),
      disabled: !D,
      onClick: h,
      ...C,
      children: [
        /* @__PURE__ */ ge.jsx(gN, { className: "h-4 w-4" }),
        /* @__PURE__ */ ge.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
JO.displayName = "CarouselNext";
function d2(d) {
  return `Hello ${d}!`;
}
export {
  c2 as AppContainer,
  KO as Carousel,
  qO as CarouselContent,
  XO as CarouselItem,
  JO as CarouselNext,
  ZO as CarouselPrevious,
  f2 as HeroWrapper,
  o2 as KyFooter,
  s2 as KyNav,
  pO as ModeToggle,
  u2 as ThemeProvider,
  d2 as helloAnything,
  i2 as useInterval,
  a2 as useIsMobile
};
