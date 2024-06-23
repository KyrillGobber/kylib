import * as ze from "react";
import Me, { useState as fr, useEffect as Fn, useRef as jt, useCallback as Ba, forwardRef as Ht, createElement as Le, createContext as Cv, useMemo as Kf, useContext as Gy, Children as Qs, isValidElement as Iy, cloneElement as n1, Fragment as By, useLayoutEffect as zw, useReducer as BO } from "react";
function YO() {
  const [u, d] = fr(!1);
  return Fn(() => {
    const f = () => {
      d(window.innerWidth < 768);
    };
    return f(), window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, []), {
    isMobile: u
  };
}
function OA() {
  const u = jt(null), d = () => {
    u.current && clearInterval(u.current);
  }, f = Ba(
    (y, S) => {
      u.current = setInterval(y, S);
    },
    [u]
  );
  return {
    stopInterval: d,
    startInterval: f
  };
}
function WO(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var jb = { exports: {} }, hv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tw;
function GO() {
  if (tw)
    return hv;
  tw = 1;
  var u = Me, d = Symbol.for("react.element"), f = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, S = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(x, T, R) {
    var M, D = {}, _ = null, L = null;
    R !== void 0 && (_ = "" + R), T.key !== void 0 && (_ = "" + T.key), T.ref !== void 0 && (L = T.ref);
    for (M in T)
      y.call(T, M) && !b.hasOwnProperty(M) && (D[M] = T[M]);
    if (x && x.defaultProps)
      for (M in T = x.defaultProps, T)
        D[M] === void 0 && (D[M] = T[M]);
    return { $$typeof: d, type: x, key: _, ref: L, props: D, _owner: S.current };
  }
  return hv.Fragment = f, hv.jsx = h, hv.jsxs = h, hv;
}
var mv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nw;
function QO() {
  return nw || (nw = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Me, d = Symbol.for("react.element"), f = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), x = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), U = Symbol.iterator, O = "@@iterator";
    function H(A) {
      if (A === null || typeof A != "object")
        return null;
      var le = U && A[U] || A[O];
      return typeof le == "function" ? le : null;
    }
    var z = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(A) {
      {
        for (var le = arguments.length, be = new Array(le > 1 ? le - 1 : 0), qe = 1; qe < le; qe++)
          be[qe - 1] = arguments[qe];
        V("error", A, be);
      }
    }
    function V(A, le, be) {
      {
        var qe = z.ReactDebugCurrentFrame, mt = qe.getStackAddendum();
        mt !== "" && (le += "%s", be = be.concat([mt]));
        var Lt = be.map(function(yt) {
          return String(yt);
        });
        Lt.unshift("Warning: " + le), Function.prototype.apply.call(console[A], console, Lt);
      }
    }
    var G = !1, B = !1, ue = !1, ae = !1, se = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Te(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === y || A === b || se || A === S || A === R || A === M || ae || A === L || G || B || ue || typeof A == "object" && A !== null && (A.$$typeof === _ || A.$$typeof === D || A.$$typeof === h || A.$$typeof === x || A.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === ve || A.getModuleId !== void 0));
    }
    function Ae(A, le, be) {
      var qe = A.displayName;
      if (qe)
        return qe;
      var mt = le.displayName || le.name || "";
      return mt !== "" ? be + "(" + mt + ")" : be;
    }
    function je(A) {
      return A.displayName || "Context";
    }
    function ke(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && Q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case y:
          return "Fragment";
        case f:
          return "Portal";
        case b:
          return "Profiler";
        case S:
          return "StrictMode";
        case R:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case x:
            var le = A;
            return je(le) + ".Consumer";
          case h:
            var be = A;
            return je(be._context) + ".Provider";
          case T:
            return Ae(A, A.render, "ForwardRef");
          case D:
            var qe = A.displayName || null;
            return qe !== null ? qe : ke(A.type) || "Memo";
          case _: {
            var mt = A, Lt = mt._payload, yt = mt._init;
            try {
              return ke(yt(Lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Be = Object.assign, _t = 0, lt, Mt, ce, xe, me, Xe, ot;
    function Pt() {
    }
    Pt.__reactDisabledLog = !0;
    function Qt() {
      {
        if (_t === 0) {
          lt = console.log, Mt = console.info, ce = console.warn, xe = console.error, me = console.group, Xe = console.groupCollapsed, ot = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: Pt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        _t++;
      }
    }
    function Yn() {
      {
        if (_t--, _t === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Be({}, A, {
              value: lt
            }),
            info: Be({}, A, {
              value: Mt
            }),
            warn: Be({}, A, {
              value: ce
            }),
            error: Be({}, A, {
              value: xe
            }),
            group: Be({}, A, {
              value: me
            }),
            groupCollapsed: Be({}, A, {
              value: Xe
            }),
            groupEnd: Be({}, A, {
              value: ot
            })
          });
        }
        _t < 0 && Q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = z.ReactCurrentDispatcher, nn;
    function Rt(A, le, be) {
      {
        if (nn === void 0)
          try {
            throw Error();
          } catch (mt) {
            var qe = mt.stack.trim().match(/\n( *(at )?)/);
            nn = qe && qe[1] || "";
          }
        return `
` + nn + A;
      }
    }
    var bn = !1, pn;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      pn = new dt();
    }
    function Ne(A, le) {
      if (!A || bn)
        return "";
      {
        var be = pn.get(A);
        if (be !== void 0)
          return be;
      }
      var qe;
      bn = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Lt;
      Lt = Ee.current, Ee.current = null, Qt();
      try {
        if (le) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch ($t) {
              qe = $t;
            }
            Reflect.construct(A, [], yt);
          } else {
            try {
              yt.call();
            } catch ($t) {
              qe = $t;
            }
            A.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($t) {
            qe = $t;
          }
          A();
        }
      } catch ($t) {
        if ($t && qe && typeof $t.stack == "string") {
          for (var Je = $t.stack.split(`
`), tr = qe.stack.split(`
`), mn = Je.length - 1, yn = tr.length - 1; mn >= 1 && yn >= 0 && Je[mn] !== tr[yn]; )
            yn--;
          for (; mn >= 1 && yn >= 0; mn--, yn--)
            if (Je[mn] !== tr[yn]) {
              if (mn !== 1 || yn !== 1)
                do
                  if (mn--, yn--, yn < 0 || Je[mn] !== tr[yn]) {
                    var zr = `
` + Je[mn].replace(" at new ", " at ");
                    return A.displayName && zr.includes("<anonymous>") && (zr = zr.replace("<anonymous>", A.displayName)), typeof A == "function" && pn.set(A, zr), zr;
                  }
                while (mn >= 1 && yn >= 0);
              break;
            }
        }
      } finally {
        bn = !1, Ee.current = Lt, Yn(), Error.prepareStackTrace = mt;
      }
      var Zi = A ? A.displayName || A.name : "", qs = Zi ? Rt(Zi) : "";
      return typeof A == "function" && pn.set(A, qs), qs;
    }
    function nt(A, le, be) {
      return Ne(A, !1);
    }
    function ht(A) {
      var le = A.prototype;
      return !!(le && le.isReactComponent);
    }
    function Et(A, le, be) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Ne(A, ht(A));
      if (typeof A == "string")
        return Rt(A);
      switch (A) {
        case R:
          return Rt("Suspense");
        case M:
          return Rt("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case T:
            return nt(A.render);
          case D:
            return Et(A.type, le, be);
          case _: {
            var qe = A, mt = qe._payload, Lt = qe._init;
            try {
              return Et(Lt(mt), le, be);
            } catch {
            }
          }
        }
      return "";
    }
    var Wt = Object.prototype.hasOwnProperty, Vt = {}, vn = z.ReactDebugCurrentFrame;
    function rn(A) {
      if (A) {
        var le = A._owner, be = Et(A.type, A._source, le ? le.type : null);
        vn.setExtraStackFrame(be);
      } else
        vn.setExtraStackFrame(null);
    }
    function Ar(A, le, be, qe, mt) {
      {
        var Lt = Function.call.bind(Wt);
        for (var yt in A)
          if (Lt(A, yt)) {
            var Je = void 0;
            try {
              if (typeof A[yt] != "function") {
                var tr = Error((qe || "React class") + ": " + be + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw tr.name = "Invariant Violation", tr;
              }
              Je = A[yt](le, yt, qe, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (mn) {
              Je = mn;
            }
            Je && !(Je instanceof Error) && (rn(mt), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", be, yt, typeof Je), rn(null)), Je instanceof Error && !(Je.message in Vt) && (Vt[Je.message] = !0, rn(mt), Q("Failed %s type: %s", be, Je.message), rn(null));
          }
      }
    }
    var pr = Array.isArray;
    function Tr(A) {
      return pr(A);
    }
    function En(A) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, be = le && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return be;
      }
    }
    function $r(A) {
      try {
        return Jn(A), !1;
      } catch {
        return !0;
      }
    }
    function Jn(A) {
      return "" + A;
    }
    function er(A) {
      if ($r(A))
        return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(A)), Jn(A);
    }
    var an = z.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gr, Ve, ne;
    ne = {};
    function ye(A) {
      if (Wt.call(A, "ref")) {
        var le = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Ce(A) {
      if (Wt.call(A, "key")) {
        var le = Object.getOwnPropertyDescriptor(A, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Ge(A, le) {
      if (typeof A.ref == "string" && an.current && le && an.current.stateNode !== le) {
        var be = ke(an.current.type);
        ne[be] || (Q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ke(an.current.type), A.ref), ne[be] = !0);
      }
    }
    function ut(A, le) {
      {
        var be = function() {
          Gr || (Gr = !0, Q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        be.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function Ct(A, le) {
      {
        var be = function() {
          Ve || (Ve = !0, Q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        be.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var Kt = function(A, le, be, qe, mt, Lt, yt) {
      var Je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: A,
        key: le,
        ref: be,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Lt
      };
      return Je._store = {}, Object.defineProperty(Je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.defineProperty(Je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
    };
    function hn(A, le, be, qe, mt) {
      {
        var Lt, yt = {}, Je = null, tr = null;
        be !== void 0 && (er(be), Je = "" + be), Ce(le) && (er(le.key), Je = "" + le.key), ye(le) && (tr = le.ref, Ge(le, mt));
        for (Lt in le)
          Wt.call(le, Lt) && !Cn.hasOwnProperty(Lt) && (yt[Lt] = le[Lt]);
        if (A && A.defaultProps) {
          var mn = A.defaultProps;
          for (Lt in mn)
            yt[Lt] === void 0 && (yt[Lt] = mn[Lt]);
        }
        if (Je || tr) {
          var yn = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Je && ut(yt, yn), tr && Ct(yt, yn);
        }
        return Kt(A, Je, tr, mt, qe, an.current, yt);
      }
    }
    var gt = z.ReactCurrentOwner, An = z.ReactDebugCurrentFrame;
    function It(A) {
      if (A) {
        var le = A._owner, be = Et(A.type, A._source, le ? le.type : null);
        An.setExtraStackFrame(be);
      } else
        An.setExtraStackFrame(null);
    }
    var on;
    on = !1;
    function _l(A) {
      return typeof A == "object" && A !== null && A.$$typeof === d;
    }
    function Uo() {
      {
        if (gt.current) {
          var A = ke(gt.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Ol(A) {
      {
        if (A !== void 0) {
          var le = A.fileName.replace(/^.*[\\\/]/, ""), be = A.lineNumber;
          return `

Check your code at ` + le + ":" + be + ".";
        }
        return "";
      }
    }
    var Uu = {};
    function Xs(A) {
      {
        var le = Uo();
        if (!le) {
          var be = typeof A == "string" ? A : A.displayName || A.name;
          be && (le = `

Check the top-level render call using <` + be + ">.");
        }
        return le;
      }
    }
    function Po(A, le) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var be = Xs(le);
        if (Uu[be])
          return;
        Uu[be] = !0;
        var qe = "";
        A && A._owner && A._owner !== gt.current && (qe = " It was passed a child from " + ke(A._owner.type) + "."), It(A), Q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, qe), It(null);
      }
    }
    function Ml(A, le) {
      {
        if (typeof A != "object")
          return;
        if (Tr(A))
          for (var be = 0; be < A.length; be++) {
            var qe = A[be];
            _l(qe) && Po(qe, le);
          }
        else if (_l(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var mt = H(A);
          if (typeof mt == "function" && mt !== A.entries)
            for (var Lt = mt.call(A), yt; !(yt = Lt.next()).done; )
              _l(yt.value) && Po(yt.value, le);
        }
      }
    }
    function Fo(A) {
      {
        var le = A.type;
        if (le == null || typeof le == "string")
          return;
        var be;
        if (typeof le == "function")
          be = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === D))
          be = le.propTypes;
        else
          return;
        if (be) {
          var qe = ke(le);
          Ar(be, A.props, "prop", qe, A);
        } else if (le.PropTypes !== void 0 && !on) {
          on = !0;
          var mt = ke(le);
          Q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && Q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ll(A) {
      {
        for (var le = Object.keys(A.props), be = 0; be < le.length; be++) {
          var qe = le[be];
          if (qe !== "children" && qe !== "key") {
            It(A), Q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", qe), It(null);
            break;
          }
        }
        A.ref !== null && (It(A), Q("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    function ai(A, le, be, qe, mt, Lt) {
      {
        var yt = Te(A);
        if (!yt) {
          var Je = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var tr = Ol(mt);
          tr ? Je += tr : Je += Uo();
          var mn;
          A === null ? mn = "null" : Tr(A) ? mn = "array" : A !== void 0 && A.$$typeof === d ? (mn = "<" + (ke(A.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : mn = typeof A, Q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", mn, Je);
        }
        var yn = hn(A, le, be, mt, Lt);
        if (yn == null)
          return yn;
        if (yt) {
          var zr = le.children;
          if (zr !== void 0)
            if (qe)
              if (Tr(zr)) {
                for (var Zi = 0; Zi < zr.length; Zi++)
                  Ml(zr[Zi], A);
                Object.freeze && Object.freeze(zr);
              } else
                Q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ml(zr, A);
        }
        return A === y ? Ll(yn) : Fo(yn), yn;
      }
    }
    function Xi(A, le, be) {
      return ai(A, le, be, !0);
    }
    function ua(A, le, be) {
      return ai(A, le, be, !1);
    }
    var Ya = ua, qi = Xi;
    mv.Fragment = y, mv.jsx = Ya, mv.jsxs = qi;
  }()), mv;
}
process.env.NODE_ENV === "production" ? jb.exports = GO() : jb.exports = QO();
var pe = jb.exports;
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KO = {
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
const XO = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), $o = (u, d) => {
  const f = Ht(
    ({
      color: y = "currentColor",
      size: S = 24,
      strokeWidth: b = 2,
      absoluteStrokeWidth: h,
      className: x = "",
      children: T,
      ...R
    }, M) => Le(
      "svg",
      {
        ref: M,
        ...KO,
        width: S,
        height: S,
        stroke: y,
        strokeWidth: h ? Number(b) * 24 / Number(S) : b,
        className: ["lucide", `lucide-${XO(u)}`, x].join(" "),
        ...R
      },
      [
        ...d.map(([D, _]) => Le(D, _)),
        ...Array.isArray(T) ? T : [T]
      ]
    )
  );
  return f.displayName = `${u}`, f;
};
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qO = $o("AtSign", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZO = $o("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JO = $o("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eM = $o("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tM = $o("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uw = $o("Github", [
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
const nM = $o("Linkedin", [
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
const rM = $o("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aM = $o("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iM = $o("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), MA = ({
  footerText: u,
  footerSocials: d,
  footerSource: f
}) => /* @__PURE__ */ pe.jsxs("footer", { className: "mt-auto mb-6 flex flex-col justify-center items-center bottom-0 gap-4", children: [
  /* @__PURE__ */ pe.jsx(oM, { text: u }),
  /* @__PURE__ */ pe.jsx(lM, { ...d }),
  f && /* @__PURE__ */ pe.jsx(uM, { ...f })
] }), oM = ({ text: u }) => u ? /* @__PURE__ */ pe.jsx("p", { className: "text-sm md:text-base", children: u }) : null, lM = ({
  showMail: u,
  showGithub: d,
  showLinkedin: f,
  additionalSocials: y
}) => /* @__PURE__ */ pe.jsxs("div", { className: "grid grid-flow-col gap-4", children: [
  u && /* @__PURE__ */ pe.jsx(
    "a",
    {
      target: "_blank",
      href: "mailto:kyrill@gobber.ch",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ pe.jsx(qO, {})
    }
  ),
  d && /* @__PURE__ */ pe.jsx(
    "a",
    {
      target: "_blank",
      href: "https://github.com/KyrillGobber",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ pe.jsx(Uw, {})
    }
  ),
  f && /* @__PURE__ */ pe.jsx(
    "a",
    {
      target: "_blank",
      href: "https://www.linkedin.com/in/kyrill-gobber-022a71199/",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ pe.jsx(nM, {})
    }
  ),
  y
] }), uM = ({ sourceText: u, link: d }) => /* @__PURE__ */ pe.jsxs(
  "a",
  {
    className: "flex flex-row gap-2 text-sm md:text-base",
    target: "_blank",
    href: d,
    rel: "noopener noreferrer",
    children: [
      u,
      /* @__PURE__ */ pe.jsx(tM, {})
    ]
  }
);
function Pw(u) {
  var d, f, y = "";
  if (typeof u == "string" || typeof u == "number")
    y += u;
  else if (typeof u == "object")
    if (Array.isArray(u)) {
      var S = u.length;
      for (d = 0; d < S; d++)
        u[d] && (f = Pw(u[d])) && (y && (y += " "), y += f);
    } else
      for (f in u)
        u[f] && (y && (y += " "), y += f);
  return y;
}
function sM() {
  for (var u, d, f = 0, y = "", S = arguments.length; f < S; f++)
    (u = arguments[f]) && (d = Pw(u)) && (y && (y += " "), y += d);
  return y;
}
const r1 = "-";
function cM(u) {
  const d = dM(u), {
    conflictingClassGroups: f,
    conflictingClassGroupModifiers: y
  } = u;
  function S(h) {
    const x = h.split(r1);
    return x[0] === "" && x.length !== 1 && x.shift(), Fw(x, d) || fM(h);
  }
  function b(h, x) {
    const T = f[h] || [];
    return x && y[h] ? [...T, ...y[h]] : T;
  }
  return {
    getClassGroupId: S,
    getConflictingClassGroupIds: b
  };
}
function Fw(u, d) {
  var h;
  if (u.length === 0)
    return d.classGroupId;
  const f = u[0], y = d.nextPart.get(f), S = y ? Fw(u.slice(1), y) : void 0;
  if (S)
    return S;
  if (d.validators.length === 0)
    return;
  const b = u.join(r1);
  return (h = d.validators.find(({
    validator: x
  }) => x(b))) == null ? void 0 : h.classGroupId;
}
const rw = /^\[(.+)\]$/;
function fM(u) {
  if (rw.test(u)) {
    const d = rw.exec(u)[1], f = d == null ? void 0 : d.substring(0, d.indexOf(":"));
    if (f)
      return "arbitrary.." + f;
  }
}
function dM(u) {
  const {
    theme: d,
    prefix: f
  } = u, y = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vM(Object.entries(u.classGroups), f).forEach(([b, h]) => {
    Hb(h, y, b, d);
  }), y;
}
function Hb(u, d, f, y) {
  u.forEach((S) => {
    if (typeof S == "string") {
      const b = S === "" ? d : aw(d, S);
      b.classGroupId = f;
      return;
    }
    if (typeof S == "function") {
      if (pM(S)) {
        Hb(S(y), d, f, y);
        return;
      }
      d.validators.push({
        validator: S,
        classGroupId: f
      });
      return;
    }
    Object.entries(S).forEach(([b, h]) => {
      Hb(h, aw(d, b), f, y);
    });
  });
}
function aw(u, d) {
  let f = u;
  return d.split(r1).forEach((y) => {
    f.nextPart.has(y) || f.nextPart.set(y, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), f = f.nextPart.get(y);
  }), f;
}
function pM(u) {
  return u.isThemeGetter;
}
function vM(u, d) {
  return d ? u.map(([f, y]) => {
    const S = y.map((b) => typeof b == "string" ? d + b : typeof b == "object" ? Object.fromEntries(Object.entries(b).map(([h, x]) => [d + h, x])) : b);
    return [f, S];
  }) : u;
}
function hM(u) {
  if (u < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let d = 0, f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  function S(b, h) {
    f.set(b, h), d++, d > u && (d = 0, y = f, f = /* @__PURE__ */ new Map());
  }
  return {
    get(b) {
      let h = f.get(b);
      if (h !== void 0)
        return h;
      if ((h = y.get(b)) !== void 0)
        return S(b, h), h;
    },
    set(b, h) {
      f.has(b) ? f.set(b, h) : S(b, h);
    }
  };
}
const jw = "!";
function mM(u) {
  const d = u.separator, f = d.length === 1, y = d[0], S = d.length;
  return function(h) {
    const x = [];
    let T = 0, R = 0, M;
    for (let O = 0; O < h.length; O++) {
      let H = h[O];
      if (T === 0) {
        if (H === y && (f || h.slice(O, O + S) === d)) {
          x.push(h.slice(R, O)), R = O + S;
          continue;
        }
        if (H === "/") {
          M = O;
          continue;
        }
      }
      H === "[" ? T++ : H === "]" && T--;
    }
    const D = x.length === 0 ? h : h.substring(R), _ = D.startsWith(jw), L = _ ? D.substring(1) : D, U = M && M > R ? M - R : void 0;
    return {
      modifiers: x,
      hasImportantModifier: _,
      baseClassName: L,
      maybePostfixModifierPosition: U
    };
  };
}
function yM(u) {
  if (u.length <= 1)
    return u;
  const d = [];
  let f = [];
  return u.forEach((y) => {
    y[0] === "[" ? (d.push(...f.sort(), y), f = []) : f.push(y);
  }), d.push(...f.sort()), d;
}
function gM(u) {
  return {
    cache: hM(u.cacheSize),
    splitModifiers: mM(u),
    ...cM(u)
  };
}
const SM = /\s+/;
function bM(u, d) {
  const {
    splitModifiers: f,
    getClassGroupId: y,
    getConflictingClassGroupIds: S
  } = d, b = /* @__PURE__ */ new Set();
  return u.trim().split(SM).map((h) => {
    const {
      modifiers: x,
      hasImportantModifier: T,
      baseClassName: R,
      maybePostfixModifierPosition: M
    } = f(h);
    let D = y(M ? R.substring(0, M) : R), _ = !!M;
    if (!D) {
      if (!M)
        return {
          isTailwindClass: !1,
          originalClassName: h
        };
      if (D = y(R), !D)
        return {
          isTailwindClass: !1,
          originalClassName: h
        };
      _ = !1;
    }
    const L = yM(x).join(":");
    return {
      isTailwindClass: !0,
      modifierId: T ? L + jw : L,
      classGroupId: D,
      originalClassName: h,
      hasPostfixModifier: _
    };
  }).reverse().filter((h) => {
    if (!h.isTailwindClass)
      return !0;
    const {
      modifierId: x,
      classGroupId: T,
      hasPostfixModifier: R
    } = h, M = x + T;
    return b.has(M) ? !1 : (b.add(M), S(T, R).forEach((D) => b.add(x + D)), !0);
  }).reverse().map((h) => h.originalClassName).join(" ");
}
function EM() {
  let u = 0, d, f, y = "";
  for (; u < arguments.length; )
    (d = arguments[u++]) && (f = Hw(d)) && (y && (y += " "), y += f);
  return y;
}
function Hw(u) {
  if (typeof u == "string")
    return u;
  let d, f = "";
  for (let y = 0; y < u.length; y++)
    u[y] && (d = Hw(u[y])) && (f && (f += " "), f += d);
  return f;
}
function CM(u, ...d) {
  let f, y, S, b = h;
  function h(T) {
    const R = d.reduce((M, D) => D(M), u());
    return f = gM(R), y = f.cache.get, S = f.cache.set, b = x, x(T);
  }
  function x(T) {
    const R = y(T);
    if (R)
      return R;
    const M = bM(T, f);
    return S(T, M), M;
  }
  return function() {
    return b(EM.apply(null, arguments));
  };
}
function Dn(u) {
  const d = (f) => f[u] || [];
  return d.isThemeGetter = !0, d;
}
const Vw = /^\[(?:([a-z-]+):)?(.+)\]$/i, xM = /^\d+\/\d+$/, wM = /* @__PURE__ */ new Set(["px", "full", "screen"]), TM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, RM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, DM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, kM = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, NM = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Nl(u) {
  return Gs(u) || wM.has(u) || xM.test(u);
}
function Mu(u) {
  return Zf(u, "length", UM);
}
function Gs(u) {
  return !!u && !Number.isNaN(Number(u));
}
function Ny(u) {
  return Zf(u, "number", Gs);
}
function yv(u) {
  return !!u && Number.isInteger(Number(u));
}
function _M(u) {
  return u.endsWith("%") && Gs(u.slice(0, -1));
}
function bt(u) {
  return Vw.test(u);
}
function Lu(u) {
  return TM.test(u);
}
const OM = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function MM(u) {
  return Zf(u, OM, Iw);
}
function LM(u) {
  return Zf(u, "position", Iw);
}
const AM = /* @__PURE__ */ new Set(["image", "url"]);
function $M(u) {
  return Zf(u, AM, FM);
}
function zM(u) {
  return Zf(u, "", PM);
}
function gv() {
  return !0;
}
function Zf(u, d, f) {
  const y = Vw.exec(u);
  return y ? y[1] ? typeof d == "string" ? y[1] === d : d.has(y[1]) : f(y[2]) : !1;
}
function UM(u) {
  return RM.test(u) && !DM.test(u);
}
function Iw() {
  return !1;
}
function PM(u) {
  return kM.test(u);
}
function FM(u) {
  return NM.test(u);
}
function jM() {
  const u = Dn("colors"), d = Dn("spacing"), f = Dn("blur"), y = Dn("brightness"), S = Dn("borderColor"), b = Dn("borderRadius"), h = Dn("borderSpacing"), x = Dn("borderWidth"), T = Dn("contrast"), R = Dn("grayscale"), M = Dn("hueRotate"), D = Dn("invert"), _ = Dn("gap"), L = Dn("gradientColorStops"), U = Dn("gradientColorStopPositions"), O = Dn("inset"), H = Dn("margin"), z = Dn("opacity"), Q = Dn("padding"), V = Dn("saturate"), G = Dn("scale"), B = Dn("sepia"), ue = Dn("skew"), ae = Dn("space"), se = Dn("translate"), ve = () => ["auto", "contain", "none"], Te = () => ["auto", "hidden", "clip", "visible", "scroll"], Ae = () => ["auto", bt, d], je = () => [bt, d], ke = () => ["", Nl, Mu], Be = () => ["auto", Gs, bt], _t = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], lt = () => ["solid", "dashed", "dotted", "double", "none"], Mt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ce = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], xe = () => ["", "0", bt], me = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Xe = () => [Gs, Ny], ot = () => [Gs, bt];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [gv],
      spacing: [Nl, Mu],
      blur: ["none", "", Lu, bt],
      brightness: Xe(),
      borderColor: [u],
      borderRadius: ["none", "", "full", Lu, bt],
      borderSpacing: je(),
      borderWidth: ke(),
      contrast: Xe(),
      grayscale: xe(),
      hueRotate: ot(),
      invert: xe(),
      gap: je(),
      gradientColorStops: [u],
      gradientColorStopPositions: [_M, Mu],
      inset: Ae(),
      margin: Ae(),
      opacity: Xe(),
      padding: je(),
      saturate: Xe(),
      scale: Xe(),
      sepia: xe(),
      skew: ot(),
      space: je(),
      translate: je()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", bt]
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
        columns: [Lu]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": me()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": me()
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
        object: [..._t(), bt]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Te()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Te()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Te()
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
        inset: [O]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [O]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [O]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [O]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [O]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [O]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [O]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [O]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [O]
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
        z: ["auto", yv, bt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Ae()
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
        flex: ["1", "auto", "initial", "none", bt]
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
        order: ["first", "last", "none", yv, bt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [gv]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", yv, bt]
        }, bt]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Be()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Be()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [gv]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [yv, bt]
        }, bt]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Be()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Be()
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
        "auto-cols": ["auto", "min", "max", "fr", bt]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", bt]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [_]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [_]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [_]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ce()]
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
        content: ["normal", ...ce(), "baseline"]
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
        "place-content": [...ce(), "baseline"]
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
        p: [Q]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [Q]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [Q]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [Q]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [Q]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [Q]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [Q]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [Q]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [Q]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [H]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [H]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [H]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [H]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [H]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [H]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [H]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [H]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [H]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ae]
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
        "space-y": [ae]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", bt, d]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [bt, d, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [bt, d, "none", "full", "min", "max", "fit", "prose", {
          screen: [Lu]
        }, Lu]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [bt, d, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [bt, d, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [bt, d, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [bt, d, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Lu, Mu]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ny]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gv]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", bt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Gs, Ny]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nl, bt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", bt]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", bt]
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
        placeholder: [u]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [z]
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
        text: [u]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [z]
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
        decoration: [...lt(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Nl, Mu]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Nl, bt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [u]
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
        indent: je()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", bt]
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
        content: ["none", bt]
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
        "bg-opacity": [z]
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
        bg: [..._t(), LM]
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
        bg: ["auto", "cover", "contain", MM]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $M]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [u]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [U]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [U]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [U]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [L]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [L]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [L]
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
        border: [x]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [x]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [x]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [x]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [x]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [x]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [x]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [x]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [x]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [z]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...lt(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [x]
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
        "divide-y": [x]
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
        "divide-opacity": [z]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: lt()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [S]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [S]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [S]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [S]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [S]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [S]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [S]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [S]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...lt()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Nl, bt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Nl, Mu]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [u]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ke()
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
        ring: [u]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [z]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Nl, Mu]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [u]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Lu, zM]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [gv]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Mt()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Mt()
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
        blur: [f]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [y]
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
        "drop-shadow": ["", "none", Lu, bt]
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
        "hue-rotate": [M]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [D]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [V]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [B]
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
        "backdrop-blur": [f]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [y]
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
        "backdrop-hue-rotate": [M]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [D]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [B]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", bt]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ot()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", bt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ot()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", bt]
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
        scale: [G]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [G]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [G]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [yv, bt]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [se]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [se]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ue]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ue]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", bt]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", u]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", bt]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [u]
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
        "scroll-m": je()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": je()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": je()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": je()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": je()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": je()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": je()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": je()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": je()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": je()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": je()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": je()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": je()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": je()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": je()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": je()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": je()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": je()
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
        "will-change": ["auto", "scroll", "contents", "transform", bt]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [u, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Nl, Mu, Ny]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [u, "none"]
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
const HM = /* @__PURE__ */ CM(jM);
var Bw = /* @__PURE__ */ ((u) => (u.Red = "bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent", u.Green = "bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent", u.Blue = "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent", u.Purple = "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent", u.Teal = "bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 bg-clip-text text-transparent", u.Lime = "bg-gradient-to-r from-lime-300 via-lime-500 to-lime-700 bg-clip-text text-transparent", u))(Bw || {});
function Ln(...u) {
  return HM(sM(u));
}
const VM = {
  top: "top-1/2",
  center: "top-1/2 -translate-y-1/2",
  bottom: "bottom-1/2"
  // Add other positions as needed
}, IM = {
  right: "right-8",
  left: "left-8"
  // Add other sides as needed
}, LA = () => BM(Bw);
function BM(u) {
  const d = Object.values(u), f = Math.floor(Math.random() * d.length);
  return d[f];
}
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(u) {
    for (var d = 1; d < arguments.length; d++) {
      var f = arguments[d];
      for (var y in f)
        Object.prototype.hasOwnProperty.call(f, y) && (u[y] = f[y]);
    }
    return u;
  }, Ot.apply(this, arguments);
}
var Vb = { exports: {} }, Ha = {}, _y = { exports: {} }, kb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iw;
function YM() {
  return iw || (iw = 1, function(u) {
    function d(ce, xe) {
      var me = ce.length;
      ce.push(xe);
      e:
        for (; 0 < me; ) {
          var Xe = me - 1 >>> 1, ot = ce[Xe];
          if (0 < S(ot, xe))
            ce[Xe] = xe, ce[me] = ot, me = Xe;
          else
            break e;
        }
    }
    function f(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function y(ce) {
      if (ce.length === 0)
        return null;
      var xe = ce[0], me = ce.pop();
      if (me !== xe) {
        ce[0] = me;
        e:
          for (var Xe = 0, ot = ce.length, Pt = ot >>> 1; Xe < Pt; ) {
            var Qt = 2 * (Xe + 1) - 1, Yn = ce[Qt], Ee = Qt + 1, nn = ce[Ee];
            if (0 > S(Yn, me))
              Ee < ot && 0 > S(nn, Yn) ? (ce[Xe] = nn, ce[Ee] = me, Xe = Ee) : (ce[Xe] = Yn, ce[Qt] = me, Xe = Qt);
            else if (Ee < ot && 0 > S(nn, me))
              ce[Xe] = nn, ce[Ee] = me, Xe = Ee;
            else
              break e;
          }
      }
      return xe;
    }
    function S(ce, xe) {
      var me = ce.sortIndex - xe.sortIndex;
      return me !== 0 ? me : ce.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      u.unstable_now = function() {
        return b.now();
      };
    } else {
      var h = Date, x = h.now();
      u.unstable_now = function() {
        return h.now() - x;
      };
    }
    var T = [], R = [], M = 1, D = null, _ = 3, L = !1, U = !1, O = !1, H = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function V(ce) {
      for (var xe = f(R); xe !== null; ) {
        if (xe.callback === null)
          y(R);
        else if (xe.startTime <= ce)
          y(R), xe.sortIndex = xe.expirationTime, d(T, xe);
        else
          break;
        xe = f(R);
      }
    }
    function G(ce) {
      if (O = !1, V(ce), !U)
        if (f(T) !== null)
          U = !0, lt(B);
        else {
          var xe = f(R);
          xe !== null && Mt(G, xe.startTime - ce);
        }
    }
    function B(ce, xe) {
      U = !1, O && (O = !1, z(se), se = -1), L = !0;
      var me = _;
      try {
        for (V(xe), D = f(T); D !== null && (!(D.expirationTime > xe) || ce && !Ae()); ) {
          var Xe = D.callback;
          if (typeof Xe == "function") {
            D.callback = null, _ = D.priorityLevel;
            var ot = Xe(D.expirationTime <= xe);
            xe = u.unstable_now(), typeof ot == "function" ? D.callback = ot : D === f(T) && y(T), V(xe);
          } else
            y(T);
          D = f(T);
        }
        if (D !== null)
          var Pt = !0;
        else {
          var Qt = f(R);
          Qt !== null && Mt(G, Qt.startTime - xe), Pt = !1;
        }
        return Pt;
      } finally {
        D = null, _ = me, L = !1;
      }
    }
    var ue = !1, ae = null, se = -1, ve = 5, Te = -1;
    function Ae() {
      return !(u.unstable_now() - Te < ve);
    }
    function je() {
      if (ae !== null) {
        var ce = u.unstable_now();
        Te = ce;
        var xe = !0;
        try {
          xe = ae(!0, ce);
        } finally {
          xe ? ke() : (ue = !1, ae = null);
        }
      } else
        ue = !1;
    }
    var ke;
    if (typeof Q == "function")
      ke = function() {
        Q(je);
      };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), _t = Be.port2;
      Be.port1.onmessage = je, ke = function() {
        _t.postMessage(null);
      };
    } else
      ke = function() {
        H(je, 0);
      };
    function lt(ce) {
      ae = ce, ue || (ue = !0, ke());
    }
    function Mt(ce, xe) {
      se = H(function() {
        ce(u.unstable_now());
      }, xe);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, u.unstable_continueExecution = function() {
      U || L || (U = !0, lt(B));
    }, u.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ve = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, u.unstable_getFirstCallbackNode = function() {
      return f(T);
    }, u.unstable_next = function(ce) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = _;
      }
      var me = _;
      _ = xe;
      try {
        return ce();
      } finally {
        _ = me;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(ce, xe) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var me = _;
      _ = ce;
      try {
        return xe();
      } finally {
        _ = me;
      }
    }, u.unstable_scheduleCallback = function(ce, xe, me) {
      var Xe = u.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? Xe + me : Xe) : me = Xe, ce) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return ot = me + ot, ce = { id: M++, callback: xe, priorityLevel: ce, startTime: me, expirationTime: ot, sortIndex: -1 }, me > Xe ? (ce.sortIndex = me, d(R, ce), f(T) === null && ce === f(R) && (O ? (z(se), se = -1) : O = !0, Mt(G, me - Xe))) : (ce.sortIndex = ot, d(T, ce), U || L || (U = !0, lt(B))), ce;
    }, u.unstable_shouldYield = Ae, u.unstable_wrapCallback = function(ce) {
      var xe = _;
      return function() {
        var me = _;
        _ = xe;
        try {
          return ce.apply(this, arguments);
        } finally {
          _ = me;
        }
      };
    };
  }(kb)), kb;
}
var Nb = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ow;
function WM() {
  return ow || (ow = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = !1, f = !1, y = 5;
      function S(ne, ye) {
        var Ce = ne.length;
        ne.push(ye), x(ne, ye, Ce);
      }
      function b(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function h(ne) {
        if (ne.length === 0)
          return null;
        var ye = ne[0], Ce = ne.pop();
        return Ce !== ye && (ne[0] = Ce, T(ne, Ce, 0)), ye;
      }
      function x(ne, ye, Ce) {
        for (var Ge = Ce; Ge > 0; ) {
          var ut = Ge - 1 >>> 1, Ct = ne[ut];
          if (R(Ct, ye) > 0)
            ne[ut] = ye, ne[Ge] = Ct, Ge = ut;
          else
            return;
        }
      }
      function T(ne, ye, Ce) {
        for (var Ge = Ce, ut = ne.length, Ct = ut >>> 1; Ge < Ct; ) {
          var Kt = (Ge + 1) * 2 - 1, hn = ne[Kt], gt = Kt + 1, An = ne[gt];
          if (R(hn, ye) < 0)
            gt < ut && R(An, hn) < 0 ? (ne[Ge] = An, ne[gt] = ye, Ge = gt) : (ne[Ge] = hn, ne[Kt] = ye, Ge = Kt);
          else if (gt < ut && R(An, ye) < 0)
            ne[Ge] = An, ne[gt] = ye, Ge = gt;
          else
            return;
        }
      }
      function R(ne, ye) {
        var Ce = ne.sortIndex - ye.sortIndex;
        return Ce !== 0 ? Ce : ne.id - ye.id;
      }
      var M = 1, D = 2, _ = 3, L = 4, U = 5;
      function O(ne, ye) {
      }
      var H = typeof performance == "object" && typeof performance.now == "function";
      if (H) {
        var z = performance;
        u.unstable_now = function() {
          return z.now();
        };
      } else {
        var Q = Date, V = Q.now();
        u.unstable_now = function() {
          return Q.now() - V;
        };
      }
      var G = 1073741823, B = -1, ue = 250, ae = 5e3, se = 1e4, ve = G, Te = [], Ae = [], je = 1, ke = null, Be = _, _t = !1, lt = !1, Mt = !1, ce = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Xe(ne) {
        for (var ye = b(Ae); ye !== null; ) {
          if (ye.callback === null)
            h(Ae);
          else if (ye.startTime <= ne)
            h(Ae), ye.sortIndex = ye.expirationTime, S(Te, ye);
          else
            return;
          ye = b(Ae);
        }
      }
      function ot(ne) {
        if (Mt = !1, Xe(ne), !lt)
          if (b(Te) !== null)
            lt = !0, er(Pt);
          else {
            var ye = b(Ae);
            ye !== null && an(ot, ye.startTime - ne);
          }
      }
      function Pt(ne, ye) {
        lt = !1, Mt && (Mt = !1, Cn()), _t = !0;
        var Ce = Be;
        try {
          var Ge;
          if (!f)
            return Qt(ne, ye);
        } finally {
          ke = null, Be = Ce, _t = !1;
        }
      }
      function Qt(ne, ye) {
        var Ce = ye;
        for (Xe(Ce), ke = b(Te); ke !== null && !d && !(ke.expirationTime > Ce && (!ne || rn())); ) {
          var Ge = ke.callback;
          if (typeof Ge == "function") {
            ke.callback = null, Be = ke.priorityLevel;
            var ut = ke.expirationTime <= Ce, Ct = Ge(ut);
            Ce = u.unstable_now(), typeof Ct == "function" ? ke.callback = Ct : ke === b(Te) && h(Te), Xe(Ce);
          } else
            h(Te);
          ke = b(Te);
        }
        if (ke !== null)
          return !0;
        var Kt = b(Ae);
        return Kt !== null && an(ot, Kt.startTime - Ce), !1;
      }
      function Yn(ne, ye) {
        switch (ne) {
          case M:
          case D:
          case _:
          case L:
          case U:
            break;
          default:
            ne = _;
        }
        var Ce = Be;
        Be = ne;
        try {
          return ye();
        } finally {
          Be = Ce;
        }
      }
      function Ee(ne) {
        var ye;
        switch (Be) {
          case M:
          case D:
          case _:
            ye = _;
            break;
          default:
            ye = Be;
            break;
        }
        var Ce = Be;
        Be = ye;
        try {
          return ne();
        } finally {
          Be = Ce;
        }
      }
      function nn(ne) {
        var ye = Be;
        return function() {
          var Ce = Be;
          Be = ye;
          try {
            return ne.apply(this, arguments);
          } finally {
            Be = Ce;
          }
        };
      }
      function Rt(ne, ye, Ce) {
        var Ge = u.unstable_now(), ut;
        if (typeof Ce == "object" && Ce !== null) {
          var Ct = Ce.delay;
          typeof Ct == "number" && Ct > 0 ? ut = Ge + Ct : ut = Ge;
        } else
          ut = Ge;
        var Kt;
        switch (ne) {
          case M:
            Kt = B;
            break;
          case D:
            Kt = ue;
            break;
          case U:
            Kt = ve;
            break;
          case L:
            Kt = se;
            break;
          case _:
          default:
            Kt = ae;
            break;
        }
        var hn = ut + Kt, gt = {
          id: je++,
          callback: ye,
          priorityLevel: ne,
          startTime: ut,
          expirationTime: hn,
          sortIndex: -1
        };
        return ut > Ge ? (gt.sortIndex = ut, S(Ae, gt), b(Te) === null && gt === b(Ae) && (Mt ? Cn() : Mt = !0, an(ot, ut - Ge))) : (gt.sortIndex = hn, S(Te, gt), !lt && !_t && (lt = !0, er(Pt))), gt;
      }
      function bn() {
      }
      function pn() {
        !lt && !_t && (lt = !0, er(Pt));
      }
      function dt() {
        return b(Te);
      }
      function Ne(ne) {
        ne.callback = null;
      }
      function nt() {
        return Be;
      }
      var ht = !1, Et = null, Wt = -1, Vt = y, vn = -1;
      function rn() {
        var ne = u.unstable_now() - vn;
        return !(ne < Vt);
      }
      function Ar() {
      }
      function pr(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Vt = Math.floor(1e3 / ne) : Vt = y;
      }
      var Tr = function() {
        if (Et !== null) {
          var ne = u.unstable_now();
          vn = ne;
          var ye = !0, Ce = !0;
          try {
            Ce = Et(ye, ne);
          } finally {
            Ce ? En() : (ht = !1, Et = null);
          }
        } else
          ht = !1;
      }, En;
      if (typeof me == "function")
        En = function() {
          me(Tr);
        };
      else if (typeof MessageChannel < "u") {
        var $r = new MessageChannel(), Jn = $r.port2;
        $r.port1.onmessage = Tr, En = function() {
          Jn.postMessage(null);
        };
      } else
        En = function() {
          ce(Tr, 0);
        };
      function er(ne) {
        Et = ne, ht || (ht = !0, En());
      }
      function an(ne, ye) {
        Wt = ce(function() {
          ne(u.unstable_now());
        }, ye);
      }
      function Cn() {
        xe(Wt), Wt = -1;
      }
      var Gr = Ar, Ve = null;
      u.unstable_IdlePriority = U, u.unstable_ImmediatePriority = M, u.unstable_LowPriority = L, u.unstable_NormalPriority = _, u.unstable_Profiling = Ve, u.unstable_UserBlockingPriority = D, u.unstable_cancelCallback = Ne, u.unstable_continueExecution = pn, u.unstable_forceFrameRate = pr, u.unstable_getCurrentPriorityLevel = nt, u.unstable_getFirstCallbackNode = dt, u.unstable_next = Ee, u.unstable_pauseExecution = bn, u.unstable_requestPaint = Gr, u.unstable_runWithPriority = Yn, u.unstable_scheduleCallback = Rt, u.unstable_shouldYield = rn, u.unstable_wrapCallback = nn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Nb)), Nb;
}
var lw;
function Yw() {
  return lw || (lw = 1, process.env.NODE_ENV === "production" ? _y.exports = YM() : _y.exports = WM()), _y.exports;
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
var uw;
function GM() {
  if (uw)
    return Ha;
  uw = 1;
  var u = Me, d = Yw();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = /* @__PURE__ */ new Set(), S = {};
  function b(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (S[n] = r, n = 0; n < r.length; n++)
      y.add(r[n]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, D = {};
  function _(n) {
    return T.call(D, n) ? !0 : T.call(M, n) ? !1 : R.test(n) ? D[n] = !0 : (M[n] = !0, !1);
  }
  function L(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function U(n, r, o, s) {
    if (r === null || typeof r > "u" || L(n, r, o, s))
      return !0;
    if (s)
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
  function O(n, r, o, s, p, m, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    H[n] = new O(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    H[r] = new O(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    H[n] = new O(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    H[n] = new O(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    H[n] = new O(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    H[n] = new O(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    H[n] = new O(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    H[n] = new O(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    H[n] = new O(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function Q(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      z,
      Q
    );
    H[r] = new O(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(z, Q);
    H[r] = new O(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(z, Q);
    H[r] = new O(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    H[n] = new O(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    H[n] = new O(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function V(n, r, o, s) {
    var p = H.hasOwnProperty(r) ? H[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (U(r, o, p, s) && (o = null), s || p === null ? _(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var G = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), ue = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), Te = Symbol.for("react.provider"), Ae = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Mt = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, Xe;
  function ot(n) {
    if (Xe === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Xe = r && r[1] || "";
      }
    return `
` + Xe + n;
  }
  var Pt = !1;
  function Qt(n, r) {
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
          } catch (Z) {
            var s = Z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Z) {
            s = Z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Z) {
          s = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && s && typeof Z.stack == "string") {
        for (var p = Z.stack.split(`
`), m = s.stack.split(`
`), C = p.length - 1, N = m.length - 1; 1 <= C && 0 <= N && p[C] !== m[N]; )
          N--;
        for (; 1 <= C && 0 <= N; C--, N--)
          if (p[C] !== m[N]) {
            if (C !== 1 || N !== 1)
              do
                if (C--, N--, 0 > N || p[C] !== m[N]) {
                  var $ = `
` + p[C].replace(" at new ", " at ");
                  return n.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", n.displayName)), $;
                }
              while (1 <= C && 0 <= N);
            break;
          }
      }
    } finally {
      Pt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ot(n) : "";
  }
  function Yn(n) {
    switch (n.tag) {
      case 5:
        return ot(n.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qt(n.type, !1), n;
      case 11:
        return n = Qt(n.type.render, !1), n;
      case 1:
        return n = Qt(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ee(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ae:
        return "Fragment";
      case ue:
        return "Portal";
      case ve:
        return "Profiler";
      case se:
        return "StrictMode";
      case ke:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ae:
          return (n.displayName || "Context") + ".Consumer";
        case Te:
          return (n._context.displayName || "Context") + ".Provider";
        case je:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case _t:
          return r = n.displayName || null, r !== null ? r : Ee(n.type) || "Memo";
        case lt:
          r = n._payload, n = n._init;
          try {
            return Ee(n(r));
          } catch {
          }
      }
    return null;
  }
  function nn(n) {
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
        return Ee(r);
      case 8:
        return r === se ? "StrictMode" : "Mode";
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
  function Rt(n) {
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
  function bn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function pn(n) {
    var r = bn(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        s = "" + C, m.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(C) {
        s = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function dt(n) {
    n._valueTracker || (n._valueTracker = pn(n));
  }
  function Ne(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = bn(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function nt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ht(n, r) {
    var o = r.checked;
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Et(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = Rt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wt(n, r) {
    r = r.checked, r != null && V(n, "checked", r, !1);
  }
  function Vt(n, r) {
    Wt(n, r);
    var o = Rt(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? rn(n, r.type, o) : r.hasOwnProperty("defaultValue") && rn(n, r.type, Rt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function vn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function rn(n, r, o) {
    (r !== "number" || nt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Ar = Array.isArray;
  function pr(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Rt(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Tr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function En(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(f(92));
        if (Ar(o)) {
          if (1 < o.length)
            throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Rt(o) };
  }
  function $r(n, r) {
    var o = Rt(r.value), s = Rt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Jn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function an(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Cn, Gr = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Cn = Cn || document.createElement("div"), Cn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Cn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ve(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ne = {
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
  }, ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ne).forEach(function(n) {
    ye.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ne[r] = ne[n];
    });
  });
  function Ce(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ne.hasOwnProperty(n) && ne[n] ? ("" + r).trim() : r + "px";
  }
  function Ge(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, p = Ce(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var ut = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ct(n, r) {
    if (r) {
      if (ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(f(62));
    }
  }
  function Kt(n, r) {
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
  var hn = null;
  function gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var An = null, It = null, on = null;
  function _l(n) {
    if (n = is(n)) {
      if (typeof An != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = Qe(r), An(n.stateNode, n.type, r));
    }
  }
  function Uo(n) {
    It ? on ? on.push(n) : on = [n] : It = n;
  }
  function Ol() {
    if (It) {
      var n = It, r = on;
      if (on = It = null, _l(n), r)
        for (n = 0; n < r.length; n++)
          _l(r[n]);
    }
  }
  function Uu(n, r) {
    return n(r);
  }
  function Xs() {
  }
  var Po = !1;
  function Ml(n, r, o) {
    if (Po)
      return n(r, o);
    Po = !0;
    try {
      return Uu(n, r, o);
    } finally {
      Po = !1, (It !== null || on !== null) && (Xs(), Ol());
    }
  }
  function Fo(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = Qe(o);
    if (s === null)
      return null;
    o = s[r];
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
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(f(231, r, typeof o));
    return o;
  }
  var Ll = !1;
  if (x)
    try {
      var ai = {};
      Object.defineProperty(ai, "passive", { get: function() {
        Ll = !0;
      } }), window.addEventListener("test", ai, ai), window.removeEventListener("test", ai, ai);
    } catch {
      Ll = !1;
    }
  function Xi(n, r, o, s, p, m, C, N, $) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Z);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var ua = !1, Ya = null, qi = !1, A = null, le = { onError: function(n) {
    ua = !0, Ya = n;
  } };
  function be(n, r, o, s, p, m, C, N, $) {
    ua = !1, Ya = null, Xi.apply(le, arguments);
  }
  function qe(n, r, o, s, p, m, C, N, $) {
    if (be.apply(this, arguments), ua) {
      if (ua) {
        var Z = Ya;
        ua = !1, Ya = null;
      } else
        throw Error(f(198));
      qi || (qi = !0, A = Z);
    }
  }
  function mt(n) {
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
  function Lt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (mt(n) !== n)
      throw Error(f(188));
  }
  function Je(n) {
    var r = n.alternate;
    if (!r) {
      if (r = mt(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var m = p.alternate;
      if (m === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === m.child) {
        for (m = p.child; m; ) {
          if (m === o)
            return yt(p), n;
          if (m === s)
            return yt(p), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== s.return)
        o = p, s = m;
      else {
        for (var C = !1, N = p.child; N; ) {
          if (N === o) {
            C = !0, o = p, s = m;
            break;
          }
          if (N === s) {
            C = !0, s = p, o = m;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = m.child; N; ) {
            if (N === o) {
              C = !0, o = m, s = p;
              break;
            }
            if (N === s) {
              C = !0, s = m, o = p;
              break;
            }
            N = N.sibling;
          }
          if (!C)
            throw Error(f(189));
        }
      }
      if (o.alternate !== s)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : r;
  }
  function tr(n) {
    return n = Je(n), n !== null ? mn(n) : null;
  }
  function mn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = mn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var yn = d.unstable_scheduleCallback, zr = d.unstable_cancelCallback, Zi = d.unstable_shouldYield, qs = d.unstable_requestPaint, $t = d.unstable_now, qy = d.unstable_getCurrentPriorityLevel, Si = d.unstable_ImmediatePriority, xt = d.unstable_UserBlockingPriority, Ji = d.unstable_NormalPriority, _v = d.unstable_LowPriority, Jf = d.unstable_IdlePriority, Pu = null, Wa = null;
  function Ov(n) {
    if (Wa && typeof Wa.onCommitFiberRoot == "function")
      try {
        Wa.onCommitFiberRoot(Pu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ea = Math.clz32 ? Math.clz32 : Zy, Mv = Math.log, Lv = Math.LN2;
  function Zy(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Mv(n) / Lv | 0) | 0;
  }
  var Zs = 64, Al = 4194304;
  function jo(n) {
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
  function Ga(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, p = n.suspendedLanes, m = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var N = C & ~p;
      N !== 0 ? s = jo(N) : (m &= C, m !== 0 && (s = jo(m)));
    } else
      C = o & ~p, C !== 0 ? s = jo(C) : m !== 0 && (s = jo(m));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, m = r & -r, p >= m || p === 16 && (m & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - Ea(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function ed(n, r) {
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
  function Js(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var C = 31 - Ea(m), N = 1 << C, $ = p[C];
      $ === -1 ? (!(N & o) || N & s) && (p[C] = ed(N, r)) : $ <= r && (n.expiredLanes |= N), m &= ~N;
    }
  }
  function td(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ec() {
    var n = Zs;
    return Zs <<= 1, !(Zs & 4194240) && (Zs = 64), n;
  }
  function nd(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Ho(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ea(r), n[r] = o;
  }
  function Jy(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Ea(o), m = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~m;
    }
  }
  function Fu(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Ea(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var Gt = 0;
  function rd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Av, tc, Jt, $v, ad, ft = !1, ju = [], jn = null, Ca = null, xa = null, Hu = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), Xt = [], eg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ca = null;
        break;
      case "mouseover":
      case "mouseout":
        xa = null;
        break;
      case "pointerover":
      case "pointerout":
        Hu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wn.delete(r.pointerId);
    }
  }
  function Rr(n, r, o, s, p, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: m, targetContainers: [p] }, r !== null && (r = is(r), r !== null && tc(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function eo(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return jn = Rr(jn, n, r, o, s, p), !0;
      case "dragenter":
        return Ca = Rr(Ca, n, r, o, s, p), !0;
      case "mouseover":
        return xa = Rr(xa, n, r, o, s, p), !0;
      case "pointerover":
        var m = p.pointerId;
        return Hu.set(m, Rr(Hu.get(m) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return m = p.pointerId, Wn.set(m, Rr(Wn.get(m) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function zv(n) {
    var r = Ta(n.target);
    if (r !== null) {
      var o = mt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Lt(o), r !== null) {
            n.blockedOn = r, ad(n.priority, function() {
              Jt(o);
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
  function $l(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = ac(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        hn = s, o.target.dispatchEvent(s), hn = null;
      } else
        return r = is(o), r !== null && tc(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function id(n, r, o) {
    $l(n) && o.delete(r);
  }
  function Uv() {
    ft = !1, jn !== null && $l(jn) && (jn = null), Ca !== null && $l(Ca) && (Ca = null), xa !== null && $l(xa) && (xa = null), Hu.forEach(id), Wn.forEach(id);
  }
  function Vu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ft || (ft = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, Uv)));
  }
  function Iu(n) {
    function r(p) {
      return Vu(p, n);
    }
    if (0 < ju.length) {
      Vu(ju[0], n);
      for (var o = 1; o < ju.length; o++) {
        var s = ju[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (jn !== null && Vu(jn, n), Ca !== null && Vu(Ca, n), xa !== null && Vu(xa, n), Hu.forEach(r), Wn.forEach(r), o = 0; o < Xt.length; o++)
      s = Xt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Xt.length && (o = Xt[0], o.blockedOn === null); )
      zv(o), o.blockedOn === null && Xt.shift();
  }
  var zl = G.ReactCurrentBatchConfig, Vo = !0;
  function Pv(n, r, o, s) {
    var p = Gt, m = zl.transition;
    zl.transition = null;
    try {
      Gt = 1, rc(n, r, o, s);
    } finally {
      Gt = p, zl.transition = m;
    }
  }
  function nc(n, r, o, s) {
    var p = Gt, m = zl.transition;
    zl.transition = null;
    try {
      Gt = 4, rc(n, r, o, s);
    } finally {
      Gt = p, zl.transition = m;
    }
  }
  function rc(n, r, o, s) {
    if (Vo) {
      var p = ac(n, r, o, s);
      if (p === null)
        mc(n, r, s, Bu, o), Qa(n, s);
      else if (eo(p, n, r, o, s))
        s.stopPropagation();
      else if (Qa(n, s), r & 4 && -1 < eg.indexOf(n)) {
        for (; p !== null; ) {
          var m = is(p);
          if (m !== null && Av(m), m = ac(n, r, o, s), m === null && mc(n, r, s, Bu, o), m === p)
            break;
          p = m;
        }
        p !== null && s.stopPropagation();
      } else
        mc(n, r, s, null, o);
    }
  }
  var Bu = null;
  function ac(n, r, o, s) {
    if (Bu = null, n = gt(s), n = Ta(n), n !== null)
      if (r = mt(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Lt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Bu = n, null;
  }
  function od(n) {
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
        switch (qy()) {
          case Si:
            return 1;
          case xt:
            return 4;
          case Ji:
          case _v:
            return 16;
          case Jf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bi = null, Yu = null, Wu = null;
  function ld() {
    if (Wu)
      return Wu;
    var n, r = Yu, o = r.length, s, p = "value" in bi ? bi.value : bi.textContent, m = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var C = o - n;
    for (s = 1; s <= C && r[o - s] === p[m - s]; s++)
      ;
    return Wu = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function Ul(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Gu() {
    return !0;
  }
  function Fv() {
    return !1;
  }
  function sa(n) {
    function r(o, s, p, m, C) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in n)
        n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Gu : Fv, this.isPropagationStopped = Fv, this;
    }
    return me(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Gu);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Gu);
    }, persist: function() {
    }, isPersistent: Gu }), r;
  }
  var to = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ic = sa(to), Pl = me({}, to, { view: 0, detail: 0 }), jv = sa(Pl), oc, ud, Qu, nr = me({}, Pl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qu && (Qu && n.type === "mousemove" ? (oc = n.screenX - Qu.screenX, ud = n.screenY - Qu.screenY) : ud = oc = 0, Qu = n), oc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ud;
  } }), lc = sa(nr), Hv = me({}, nr, { dataTransfer: 0 }), Vv = sa(Hv), tg = me({}, Pl, { relatedTarget: 0 }), no = sa(tg), sd = me({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Iv = sa(sd), ng = me({}, to, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), rg = sa(ng), ag = me({}, to, { data: 0 }), cd = sa(ag), fd = {
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
  }, Bv = {
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
  }, Yv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yv[n]) ? !!r[n] : !1;
  }
  function dd() {
    return Wv;
  }
  var Ei = me({}, Pl, { key: function(n) {
    if (n.key) {
      var r = fd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ul(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Bv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dd, charCode: function(n) {
    return n.type === "keypress" ? Ul(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ul(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ig = sa(Ei), pd = me({}, nr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uc = sa(pd), vd = me({}, Pl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dd }), og = sa(vd), sc = me({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gv = sa(sc), Qr = me({}, nr, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ci = sa(Qr), Hn = [9, 13, 27, 32], Ka = x && "CompositionEvent" in window, Io = null;
  x && "documentMode" in document && (Io = document.documentMode);
  var cc = x && "TextEvent" in window && !Io, Qv = x && (!Ka || Io && 8 < Io && 11 >= Io), Fl = " ", Kv = !1;
  function Xv(n, r) {
    switch (n) {
      case "keyup":
        return Hn.indexOf(r.keyCode) !== -1;
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
  function fc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var jl = !1;
  function lg(n, r) {
    switch (n) {
      case "compositionend":
        return fc(r);
      case "keypress":
        return r.which !== 32 ? null : (Kv = !0, Fl);
      case "textInput":
        return n = r.data, n === Fl && Kv ? null : n;
      default:
        return null;
    }
  }
  function ug(n, r) {
    if (jl)
      return n === "compositionend" || !Ka && Xv(n, r) ? (n = ld(), Wu = Yu = bi = null, jl = !1, n) : null;
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
        return Qv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var qv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qv[n.type] : r === "textarea";
  }
  function Jv(n, r, o, s) {
    Uo(s), r = ns(r, "onChange"), 0 < r.length && (o = new ic("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var Ku = null, Hl = null;
  function Vl(n) {
    hc(n, 0);
  }
  function Il(n) {
    var r = Yl(n);
    if (Ne(r))
      return n;
  }
  function eh(n, r) {
    if (n === "change")
      return r;
  }
  var hd = !1;
  if (x) {
    var md;
    if (x) {
      var yd = "oninput" in document;
      if (!yd) {
        var th = document.createElement("div");
        th.setAttribute("oninput", "return;"), yd = typeof th.oninput == "function";
      }
      md = yd;
    } else
      md = !1;
    hd = md && (!document.documentMode || 9 < document.documentMode);
  }
  function nh() {
    Ku && (Ku.detachEvent("onpropertychange", rh), Hl = Ku = null);
  }
  function rh(n) {
    if (n.propertyName === "value" && Il(Hl)) {
      var r = [];
      Jv(r, Hl, n, gt(n)), Ml(Vl, r);
    }
  }
  function sg(n, r, o) {
    n === "focusin" ? (nh(), Ku = r, Hl = o, Ku.attachEvent("onpropertychange", rh)) : n === "focusout" && nh();
  }
  function cg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Il(Hl);
  }
  function fg(n, r) {
    if (n === "click")
      return Il(r);
  }
  function ah(n, r) {
    if (n === "input" || n === "change")
      return Il(r);
  }
  function dg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var wa = typeof Object.is == "function" ? Object.is : dg;
  function Xu(n, r) {
    if (wa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!T.call(r, p) || !wa(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function ih(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function oh(n, r) {
    var o = ih(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
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
      o = ih(o);
    }
  }
  function lh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? lh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function dc() {
    for (var n = window, r = nt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = nt(n.document);
    }
    return r;
  }
  function xi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function pc(n) {
    var r = dc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && lh(o.ownerDocument.documentElement, o)) {
      if (s !== null && xi(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, m = Math.min(s.start, p);
          s = s.end === void 0 ? m : Math.min(s.end, p), !n.extend && m > s && (p = s, s = m, m = p), p = oh(o, m);
          var C = oh(
            o,
            s
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), m > s ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var uh = x && "documentMode" in document && 11 >= document.documentMode, Xa = null, gd = null, qu = null, Sd = !1;
  function sh(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Sd || Xa == null || Xa !== nt(s) || (s = Xa, "selectionStart" in s && xi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), qu && Xu(qu, s) || (qu = s, s = ns(gd, "onSelect"), 0 < s.length && (r = new ic("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = Xa)));
  }
  function vc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Bo = { animationend: vc("Animation", "AnimationEnd"), animationiteration: vc("Animation", "AnimationIteration"), animationstart: vc("Animation", "AnimationStart"), transitionend: vc("Transition", "TransitionEnd") }, bd = {}, Ed = {};
  x && (Ed = document.createElement("div").style, "AnimationEvent" in window || (delete Bo.animationend.animation, delete Bo.animationiteration.animation, delete Bo.animationstart.animation), "TransitionEvent" in window || delete Bo.transitionend.transition);
  function rr(n) {
    if (bd[n])
      return bd[n];
    if (!Bo[n])
      return n;
    var r = Bo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Ed)
        return bd[n] = r[o];
    return n;
  }
  var Cd = rr("animationend"), ch = rr("animationiteration"), fh = rr("animationstart"), dh = rr("transitionend"), ph = /* @__PURE__ */ new Map(), vh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function wi(n, r) {
    ph.set(n, r), b(r, [n]);
  }
  for (var Zu = 0; Zu < vh.length; Zu++) {
    var Yo = vh[Zu], pg = Yo.toLowerCase(), Ju = Yo[0].toUpperCase() + Yo.slice(1);
    wi(pg, "on" + Ju);
  }
  wi(Cd, "onAnimationEnd"), wi(ch, "onAnimationIteration"), wi(fh, "onAnimationStart"), wi("dblclick", "onDoubleClick"), wi("focusin", "onFocus"), wi("focusout", "onBlur"), wi(dh, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vg = new Set("cancel close invalid load scroll toggle".split(" ").concat(es));
  function hh(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, qe(s, r, void 0, n), n.currentTarget = null;
  }
  function hc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var C = s.length - 1; 0 <= C; C--) {
            var N = s[C], $ = N.instance, Z = N.currentTarget;
            if (N = N.listener, $ !== m && p.isPropagationStopped())
              break e;
            hh(p, N, Z), m = $;
          }
        else
          for (C = 0; C < s.length; C++) {
            if (N = s[C], $ = N.instance, Z = N.currentTarget, N = N.listener, $ !== m && p.isPropagationStopped())
              break e;
            hh(p, N, Z), m = $;
          }
      }
    }
    if (qi)
      throw n = A, qi = !1, A = null, n;
  }
  function en(n, r) {
    var o = r[Nd];
    o === void 0 && (o = r[Nd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (mh(r, n, 2, !1), o.add(s));
  }
  function ro(n, r, o) {
    var s = 0;
    r && (s |= 4), mh(o, n, s, r);
  }
  var Ti = "_reactListening" + Math.random().toString(36).slice(2);
  function Bl(n) {
    if (!n[Ti]) {
      n[Ti] = !0, y.forEach(function(o) {
        o !== "selectionchange" && (vg.has(o) || ro(o, !1, n), ro(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ti] || (r[Ti] = !0, ro("selectionchange", !1, r));
    }
  }
  function mh(n, r, o, s) {
    switch (od(r)) {
      case 1:
        var p = Pv;
        break;
      case 4:
        p = nc;
        break;
      default:
        p = rc;
    }
    o = p.bind(null, r, o, n), p = void 0, !Ll || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function mc(n, r, o, s, p) {
    var m = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var C = s.tag;
          if (C === 3 || C === 4) {
            var N = s.stateNode.containerInfo;
            if (N === p || N.nodeType === 8 && N.parentNode === p)
              break;
            if (C === 4)
              for (C = s.return; C !== null; ) {
                var $ = C.tag;
                if (($ === 3 || $ === 4) && ($ = C.stateNode.containerInfo, $ === p || $.nodeType === 8 && $.parentNode === p))
                  return;
                C = C.return;
              }
            for (; N !== null; ) {
              if (C = Ta(N), C === null)
                return;
              if ($ = C.tag, $ === 5 || $ === 6) {
                s = m = C;
                continue e;
              }
              N = N.parentNode;
            }
          }
          s = s.return;
        }
    Ml(function() {
      var Z = m, oe = gt(o), fe = [];
      e: {
        var ie = ph.get(n);
        if (ie !== void 0) {
          var Re = ic, Ue = n;
          switch (n) {
            case "keypress":
              if (Ul(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Re = ig;
              break;
            case "focusin":
              Ue = "focus", Re = no;
              break;
            case "focusout":
              Ue = "blur", Re = no;
              break;
            case "beforeblur":
            case "afterblur":
              Re = no;
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
              Re = lc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Re = Vv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Re = og;
              break;
            case Cd:
            case ch:
            case fh:
              Re = Iv;
              break;
            case dh:
              Re = Gv;
              break;
            case "scroll":
              Re = jv;
              break;
            case "wheel":
              Re = Ci;
              break;
            case "copy":
            case "cut":
            case "paste":
              Re = rg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Re = uc;
          }
          var He = (r & 4) !== 0, zn = !He && n === "scroll", I = He ? ie !== null ? ie + "Capture" : null : ie;
          He = [];
          for (var F = Z, K; F !== null; ) {
            K = F;
            var he = K.stateNode;
            if (K.tag === 5 && he !== null && (K = he, I !== null && (he = Fo(F, I), he != null && He.push(ts(F, he, K)))), zn)
              break;
            F = F.return;
          }
          0 < He.length && (ie = new Re(ie, Ue, null, o, oe), fe.push({ event: ie, listeners: He }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", ie && o !== hn && (Ue = o.relatedTarget || o.fromElement) && (Ta(Ue) || Ue[Ri]))
            break e;
          if ((Re || ie) && (ie = oe.window === oe ? oe : (ie = oe.ownerDocument) ? ie.defaultView || ie.parentWindow : window, Re ? (Ue = o.relatedTarget || o.toElement, Re = Z, Ue = Ue ? Ta(Ue) : null, Ue !== null && (zn = mt(Ue), Ue !== zn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (Re = null, Ue = Z), Re !== Ue)) {
            if (He = lc, he = "onMouseLeave", I = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (He = uc, he = "onPointerLeave", I = "onPointerEnter", F = "pointer"), zn = Re == null ? ie : Yl(Re), K = Ue == null ? ie : Yl(Ue), ie = new He(he, F + "leave", Re, o, oe), ie.target = zn, ie.relatedTarget = K, he = null, Ta(oe) === Z && (He = new He(I, F + "enter", Ue, o, oe), He.target = K, He.relatedTarget = zn, he = He), zn = he, Re && Ue)
              t: {
                for (He = Re, I = Ue, F = 0, K = He; K; K = Wo(K))
                  F++;
                for (K = 0, he = I; he; he = Wo(he))
                  K++;
                for (; 0 < F - K; )
                  He = Wo(He), F--;
                for (; 0 < K - F; )
                  I = Wo(I), K--;
                for (; F--; ) {
                  if (He === I || I !== null && He === I.alternate)
                    break t;
                  He = Wo(He), I = Wo(I);
                }
                He = null;
              }
            else
              He = null;
            Re !== null && xd(fe, ie, Re, He, !1), Ue !== null && zn !== null && xd(fe, zn, Ue, He, !0);
          }
        }
        e: {
          if (ie = Z ? Yl(Z) : window, Re = ie.nodeName && ie.nodeName.toLowerCase(), Re === "select" || Re === "input" && ie.type === "file")
            var Ie = eh;
          else if (Zv(ie))
            if (hd)
              Ie = ah;
            else {
              Ie = cg;
              var Pe = sg;
            }
          else
            (Re = ie.nodeName) && Re.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ie = fg);
          if (Ie && (Ie = Ie(n, Z))) {
            Jv(fe, Ie, o, oe);
            break e;
          }
          Pe && Pe(n, ie, Z), n === "focusout" && (Pe = ie._wrapperState) && Pe.controlled && ie.type === "number" && rn(ie, "number", ie.value);
        }
        switch (Pe = Z ? Yl(Z) : window, n) {
          case "focusin":
            (Zv(Pe) || Pe.contentEditable === "true") && (Xa = Pe, gd = Z, qu = null);
            break;
          case "focusout":
            qu = gd = Xa = null;
            break;
          case "mousedown":
            Sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sd = !1, sh(fe, o, oe);
            break;
          case "selectionchange":
            if (uh)
              break;
          case "keydown":
          case "keyup":
            sh(fe, o, oe);
        }
        var We;
        if (Ka)
          e: {
            switch (n) {
              case "compositionstart":
                var it = "onCompositionStart";
                break e;
              case "compositionend":
                it = "onCompositionEnd";
                break e;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break e;
            }
            it = void 0;
          }
        else
          jl ? Xv(n, o) && (it = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (it = "onCompositionStart");
        it && (Qv && o.locale !== "ko" && (jl || it !== "onCompositionStart" ? it === "onCompositionEnd" && jl && (We = ld()) : (bi = oe, Yu = "value" in bi ? bi.value : bi.textContent, jl = !0)), Pe = ns(Z, it), 0 < Pe.length && (it = new cd(it, n, null, o, oe), fe.push({ event: it, listeners: Pe }), We ? it.data = We : (We = fc(o), We !== null && (it.data = We)))), (We = cc ? lg(n, o) : ug(n, o)) && (Z = ns(Z, "onBeforeInput"), 0 < Z.length && (oe = new cd("onBeforeInput", "beforeinput", null, o, oe), fe.push({ event: oe, listeners: Z }), oe.data = We));
      }
      hc(fe, r);
    });
  }
  function ts(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ns(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, m = p.stateNode;
      p.tag === 5 && m !== null && (p = m, m = Fo(n, o), m != null && s.unshift(ts(n, m, p)), m = Fo(n, r), m != null && s.push(ts(n, m, p))), n = n.return;
    }
    return s;
  }
  function Wo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xd(n, r, o, s, p) {
    for (var m = r._reactName, C = []; o !== null && o !== s; ) {
      var N = o, $ = N.alternate, Z = N.stateNode;
      if ($ !== null && $ === s)
        break;
      N.tag === 5 && Z !== null && (N = Z, p ? ($ = Fo(o, m), $ != null && C.unshift(ts(o, $, N))) : p || ($ = Fo(o, m), $ != null && C.push(ts(o, $, N)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var wd = /\r\n?/g, hg = /\u0000|\uFFFD/g;
  function Td(n) {
    return (typeof n == "string" ? n : "" + n).replace(wd, `
`).replace(hg, "");
  }
  function yc(n, r, o) {
    if (r = Td(r), Td(n) !== r && o)
      throw Error(f(425));
  }
  function gc() {
  }
  var Rd = null, Go = null;
  function rs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Qo = typeof setTimeout == "function" ? setTimeout : void 0, yh = typeof clearTimeout == "function" ? clearTimeout : void 0, Dd = typeof Promise == "function" ? Promise : void 0, kd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dd < "u" ? function(n) {
    return Dd.resolve(null).then(n).catch(mg);
  } : Qo;
  function mg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ao(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (s === 0) {
            n.removeChild(p), Iu(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    Iu(r);
  }
  function qa(n) {
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
  function as(n) {
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
  var io = Math.random().toString(36).slice(2), ii = "__reactFiber$" + io, Ko = "__reactProps$" + io, Ri = "__reactContainer$" + io, Nd = "__reactEvents$" + io, yg = "__reactListeners$" + io, _d = "__reactHandles$" + io;
  function Ta(n) {
    var r = n[ii];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ri] || o[ii]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = as(n); n !== null; ) {
            if (o = n[ii])
              return o;
            n = as(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function is(n) {
    return n = n[ii] || n[Ri], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Yl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function Qe(n) {
    return n[Ko] || null;
  }
  var oo = [], ln = -1;
  function pt(n) {
    return { current: n };
  }
  function Ft(n) {
    0 > ln || (n.current = oo[ln], oo[ln] = null, ln--);
  }
  function Bt(n, r) {
    ln++, oo[ln] = n.current, n.current = r;
  }
  var oi = {}, at = pt(oi), Nn = pt(!1), Kr = oi;
  function Ra(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return oi;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, m;
    for (m in o)
      p[m] = r[m];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function gn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Da() {
    Ft(Nn), Ft(at);
  }
  function lo(n, r, o) {
    if (at.current !== oi)
      throw Error(f(168));
    Bt(at, r), Bt(Nn, o);
  }
  function os(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var p in s)
      if (!(p in r))
        throw Error(f(108, nn(n) || "Unknown", p));
    return me({}, o, s);
  }
  function Sc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || oi, Kr = at.current, Bt(at, n), Bt(Nn, Nn.current), !0;
  }
  function gh(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(f(169));
    o ? (n = os(n, r, Kr), s.__reactInternalMemoizedMergedChildContext = n, Ft(Nn), Ft(at), Bt(at, n)) : Ft(Nn), Bt(Nn, o);
  }
  var ca = null, ar = !1, ls = !1;
  function Od(n) {
    ca === null ? ca = [n] : ca.push(n);
  }
  function Md(n) {
    ar = !0, Od(n);
  }
  function Xr() {
    if (!ls && ca !== null) {
      ls = !0;
      var n = 0, r = Gt;
      try {
        var o = ca;
        for (Gt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        ca = null, ar = !1;
      } catch (p) {
        throw ca !== null && (ca = ca.slice(n + 1)), yn(Si, Xr), p;
      } finally {
        Gt = r, ls = !1;
      }
    }
    return null;
  }
  var uo = [], qr = 0, Xo = null, Wl = 0, Zr = [], Dr = 0, ka = null, vr = 1, Di = "";
  function fa(n, r) {
    uo[qr++] = Wl, uo[qr++] = Xo, Xo = n, Wl = r;
  }
  function Ld(n, r, o) {
    Zr[Dr++] = vr, Zr[Dr++] = Di, Zr[Dr++] = ka, ka = n;
    var s = vr;
    n = Di;
    var p = 32 - Ea(s) - 1;
    s &= ~(1 << p), o += 1;
    var m = 32 - Ea(r) + p;
    if (30 < m) {
      var C = p - p % 5;
      m = (s & (1 << C) - 1).toString(32), s >>= C, p -= C, vr = 1 << 32 - Ea(r) + p | o << p | s, Di = m + n;
    } else
      vr = 1 << m | o << p | s, Di = n;
  }
  function bc(n) {
    n.return !== null && (fa(n, 1), Ld(n, 1, 0));
  }
  function Ad(n) {
    for (; n === Xo; )
      Xo = uo[--qr], uo[qr] = null, Wl = uo[--qr], uo[qr] = null;
    for (; n === ka; )
      ka = Zr[--Dr], Zr[Dr] = null, Di = Zr[--Dr], Zr[Dr] = null, vr = Zr[--Dr], Zr[Dr] = null;
  }
  var da = null, Jr = null, un = !1, Na = null;
  function $d(n, r) {
    var o = $a(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Sh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, da = n, Jr = qa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, da = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ka !== null ? { id: vr, overflow: Di } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = $a(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, da = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ec(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Cc(n) {
    if (un) {
      var r = Jr;
      if (r) {
        var o = r;
        if (!Sh(n, r)) {
          if (Ec(n))
            throw Error(f(418));
          r = qa(o.nextSibling);
          var s = da;
          r && Sh(n, r) ? $d(s, o) : (n.flags = n.flags & -4097 | 2, un = !1, da = n);
        }
      } else {
        if (Ec(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, un = !1, da = n;
      }
    }
  }
  function bh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    da = n;
  }
  function xc(n) {
    if (n !== da)
      return !1;
    if (!un)
      return bh(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !rs(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (Ec(n))
        throw Eh(), Error(f(418));
      for (; r; )
        $d(n, r), r = qa(r.nextSibling);
    }
    if (bh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Jr = qa(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else
      Jr = da ? qa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Eh() {
    for (var n = Jr; n; )
      n = qa(n.nextSibling);
  }
  function xn() {
    Jr = da = null, un = !1;
  }
  function zd(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var wc = G.ReactCurrentBatchConfig;
  function pa(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var li = pt(null), Tc = null, so = null, Ud = null;
  function Pd() {
    Ud = so = Tc = null;
  }
  function co(n) {
    var r = li.current;
    Ft(li), n._currentValue = r;
  }
  function ir(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function ge(n, r) {
    Tc = n, Ud = so = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Vn = !0), n.firstContext = null);
  }
  function $n(n) {
    var r = n._currentValue;
    if (Ud !== n)
      if (n = { context: n, memoizedValue: r, next: null }, so === null) {
        if (Tc === null)
          throw Error(f(308));
        so = n, Tc.dependencies = { lanes: 0, firstContext: n };
      } else
        so = so.next = n;
    return r;
  }
  var hr = null;
  function Fd(n) {
    hr === null ? hr = [n] : hr.push(n);
  }
  function Ch(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Fd(r)) : (o.next = p.next, p.next = o), r.interleaved = o, ki(n, s);
  }
  function ki(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var fo = !1;
  function jd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Gn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ni(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function po(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, wt & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, ki(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, Fd(s)) : (r.next = p.next, p.next = r), s.interleaved = r, ki(n, o);
  }
  function Rc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Fu(n, o);
    }
  }
  function Hd(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? p = m = C : m = m.next = C, o = o.next;
        } while (o !== null);
        m === null ? p = m = r : m = m.next = r;
      } else
        p = m = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function vo(n, r, o, s) {
    var p = n.updateQueue;
    fo = !1;
    var m = p.firstBaseUpdate, C = p.lastBaseUpdate, N = p.shared.pending;
    if (N !== null) {
      p.shared.pending = null;
      var $ = N, Z = $.next;
      $.next = null, C === null ? m = Z : C.next = Z, C = $;
      var oe = n.alternate;
      oe !== null && (oe = oe.updateQueue, N = oe.lastBaseUpdate, N !== C && (N === null ? oe.firstBaseUpdate = Z : N.next = Z, oe.lastBaseUpdate = $));
    }
    if (m !== null) {
      var fe = p.baseState;
      C = 0, oe = Z = $ = null, N = m;
      do {
        var ie = N.lane, Re = N.eventTime;
        if ((s & ie) === ie) {
          oe !== null && (oe = oe.next = {
            eventTime: Re,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ue = n, He = N;
            switch (ie = r, Re = o, He.tag) {
              case 1:
                if (Ue = He.payload, typeof Ue == "function") {
                  fe = Ue.call(Re, fe, ie);
                  break e;
                }
                fe = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = He.payload, ie = typeof Ue == "function" ? Ue.call(Re, fe, ie) : Ue, ie == null)
                  break e;
                fe = me({}, fe, ie);
                break e;
              case 2:
                fo = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, ie = p.effects, ie === null ? p.effects = [N] : ie.push(N));
        } else
          Re = { eventTime: Re, lane: ie, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, oe === null ? (Z = oe = Re, $ = fe) : oe = oe.next = Re, C |= ie;
        if (N = N.next, N === null) {
          if (N = p.shared.pending, N === null)
            break;
          ie = N, N = ie.next, ie.next = null, p.lastBaseUpdate = ie, p.shared.pending = null;
        }
      } while (!0);
      if (oe === null && ($ = fe), p.baseState = $, p.firstBaseUpdate = Z, p.lastBaseUpdate = oe, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else
        m === null && (p.shared.lanes = 0);
      Li |= C, n.lanes = C, n.memoizedState = fe;
    }
  }
  function qo(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], p = s.callback;
        if (p !== null) {
          if (s.callback = null, s = o, typeof p != "function")
            throw Error(f(191, p));
          p.call(s);
        }
      }
  }
  var xh = new u.Component().refs;
  function Vd(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : me({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Dc = { isMounted: function(n) {
    return (n = n._reactInternals) ? mt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = Or(), p = In(n), m = Ni(s, p);
    m.payload = r, o != null && (m.callback = o), r = po(n, m, p), r !== null && (Mr(r, n, p, s), Rc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = Or(), p = In(n), m = Ni(s, p);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = po(n, m, p), r !== null && (Mr(r, n, p, s), Rc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Or(), s = In(n), p = Ni(o, s);
    p.tag = 2, r != null && (p.callback = r), r = po(n, p, s), r !== null && (Mr(r, n, s, o), Rc(r, n, s));
  } };
  function wh(n, r, o, s, p, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, m, C) : r.prototype && r.prototype.isPureReactComponent ? !Xu(o, s) || !Xu(p, m) : !0;
  }
  function Th(n, r, o) {
    var s = !1, p = oi, m = r.contextType;
    return typeof m == "object" && m !== null ? m = $n(m) : (p = gn(r) ? Kr : at.current, s = r.contextTypes, m = (s = s != null) ? Ra(n, p) : oi), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dc, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Rh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && Dc.enqueueReplaceState(r, r.state, null);
  }
  function kc(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = xh, jd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? p.context = $n(m) : (m = gn(r) ? Kr : at.current, p.context = Ra(n, m)), p.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Vd(n, r, m, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Dc.enqueueReplaceState(p, p.state, null), vo(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Gl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(f(147, n));
        var p = s, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(C) {
          var N = p.refs;
          N === xh && (N = p.refs = {}), C === null ? delete N[m] : N[m] = C;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function Nc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Dh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function kh(n) {
    function r(I, F) {
      if (n) {
        var K = I.deletions;
        K === null ? (I.deletions = [F], I.flags |= 16) : K.push(F);
      }
    }
    function o(I, F) {
      if (!n)
        return null;
      for (; F !== null; )
        r(I, F), F = F.sibling;
      return null;
    }
    function s(I, F) {
      for (I = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? I.set(F.key, F) : I.set(F.index, F), F = F.sibling;
      return I;
    }
    function p(I, F) {
      return I = Co(I, F), I.index = 0, I.sibling = null, I;
    }
    function m(I, F, K) {
      return I.index = K, n ? (K = I.alternate, K !== null ? (K = K.index, K < F ? (I.flags |= 2, F) : K) : (I.flags |= 2, F)) : (I.flags |= 1048576, F);
    }
    function C(I) {
      return n && I.alternate === null && (I.flags |= 2), I;
    }
    function N(I, F, K, he) {
      return F === null || F.tag !== 6 ? (F = Rs(K, I.mode, he), F.return = I, F) : (F = p(F, K), F.return = I, F);
    }
    function $(I, F, K, he) {
      var Ie = K.type;
      return Ie === ae ? oe(I, F, K.props.children, he, K.key) : F !== null && (F.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === lt && Dh(Ie) === F.type) ? (he = p(F, K.props), he.ref = Gl(I, F, K), he.return = I, he) : (he = uf(K.type, K.key, K.props, null, I.mode, he), he.ref = Gl(I, F, K), he.return = I, he);
    }
    function Z(I, F, K, he) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== K.containerInfo || F.stateNode.implementation !== K.implementation ? (F = ml(K, I.mode, he), F.return = I, F) : (F = p(F, K.children || []), F.return = I, F);
    }
    function oe(I, F, K, he, Ie) {
      return F === null || F.tag !== 7 ? (F = hl(K, I.mode, he, Ie), F.return = I, F) : (F = p(F, K), F.return = I, F);
    }
    function fe(I, F, K) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = Rs("" + F, I.mode, K), F.return = I, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case B:
            return K = uf(F.type, F.key, F.props, null, I.mode, K), K.ref = Gl(I, null, F), K.return = I, K;
          case ue:
            return F = ml(F, I.mode, K), F.return = I, F;
          case lt:
            var he = F._init;
            return fe(I, he(F._payload), K);
        }
        if (Ar(F) || xe(F))
          return F = hl(F, I.mode, K, null), F.return = I, F;
        Nc(I, F);
      }
      return null;
    }
    function ie(I, F, K, he) {
      var Ie = F !== null ? F.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number")
        return Ie !== null ? null : N(I, F, "" + K, he);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case B:
            return K.key === Ie ? $(I, F, K, he) : null;
          case ue:
            return K.key === Ie ? Z(I, F, K, he) : null;
          case lt:
            return Ie = K._init, ie(
              I,
              F,
              Ie(K._payload),
              he
            );
        }
        if (Ar(K) || xe(K))
          return Ie !== null ? null : oe(I, F, K, he, null);
        Nc(I, K);
      }
      return null;
    }
    function Re(I, F, K, he, Ie) {
      if (typeof he == "string" && he !== "" || typeof he == "number")
        return I = I.get(K) || null, N(F, I, "" + he, Ie);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case B:
            return I = I.get(he.key === null ? K : he.key) || null, $(F, I, he, Ie);
          case ue:
            return I = I.get(he.key === null ? K : he.key) || null, Z(F, I, he, Ie);
          case lt:
            var Pe = he._init;
            return Re(I, F, K, Pe(he._payload), Ie);
        }
        if (Ar(he) || xe(he))
          return I = I.get(K) || null, oe(F, I, he, Ie, null);
        Nc(F, he);
      }
      return null;
    }
    function Ue(I, F, K, he) {
      for (var Ie = null, Pe = null, We = F, it = F = 0, ur = null; We !== null && it < K.length; it++) {
        We.index > it ? (ur = We, We = null) : ur = We.sibling;
        var At = ie(I, We, K[it], he);
        if (At === null) {
          We === null && (We = ur);
          break;
        }
        n && We && At.alternate === null && r(I, We), F = m(At, F, it), Pe === null ? Ie = At : Pe.sibling = At, Pe = At, We = ur;
      }
      if (it === K.length)
        return o(I, We), un && fa(I, it), Ie;
      if (We === null) {
        for (; it < K.length; it++)
          We = fe(I, K[it], he), We !== null && (F = m(We, F, it), Pe === null ? Ie = We : Pe.sibling = We, Pe = We);
        return un && fa(I, it), Ie;
      }
      for (We = s(I, We); it < K.length; it++)
        ur = Re(We, I, it, K[it], he), ur !== null && (n && ur.alternate !== null && We.delete(ur.key === null ? it : ur.key), F = m(ur, F, it), Pe === null ? Ie = ur : Pe.sibling = ur, Pe = ur);
      return n && We.forEach(function(xo) {
        return r(I, xo);
      }), un && fa(I, it), Ie;
    }
    function He(I, F, K, he) {
      var Ie = xe(K);
      if (typeof Ie != "function")
        throw Error(f(150));
      if (K = Ie.call(K), K == null)
        throw Error(f(151));
      for (var Pe = Ie = null, We = F, it = F = 0, ur = null, At = K.next(); We !== null && !At.done; it++, At = K.next()) {
        We.index > it ? (ur = We, We = null) : ur = We.sibling;
        var xo = ie(I, We, At.value, he);
        if (xo === null) {
          We === null && (We = ur);
          break;
        }
        n && We && xo.alternate === null && r(I, We), F = m(xo, F, it), Pe === null ? Ie = xo : Pe.sibling = xo, Pe = xo, We = ur;
      }
      if (At.done)
        return o(
          I,
          We
        ), un && fa(I, it), Ie;
      if (We === null) {
        for (; !At.done; it++, At = K.next())
          At = fe(I, At.value, he), At !== null && (F = m(At, F, it), Pe === null ? Ie = At : Pe.sibling = At, Pe = At);
        return un && fa(I, it), Ie;
      }
      for (We = s(I, We); !At.done; it++, At = K.next())
        At = Re(We, I, it, At.value, he), At !== null && (n && At.alternate !== null && We.delete(At.key === null ? it : At.key), F = m(At, F, it), Pe === null ? Ie = At : Pe.sibling = At, Pe = At);
      return n && We.forEach(function(Ug) {
        return r(I, Ug);
      }), un && fa(I, it), Ie;
    }
    function zn(I, F, K, he) {
      if (typeof K == "object" && K !== null && K.type === ae && K.key === null && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case B:
            e: {
              for (var Ie = K.key, Pe = F; Pe !== null; ) {
                if (Pe.key === Ie) {
                  if (Ie = K.type, Ie === ae) {
                    if (Pe.tag === 7) {
                      o(I, Pe.sibling), F = p(Pe, K.props.children), F.return = I, I = F;
                      break e;
                    }
                  } else if (Pe.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === lt && Dh(Ie) === Pe.type) {
                    o(I, Pe.sibling), F = p(Pe, K.props), F.ref = Gl(I, Pe, K), F.return = I, I = F;
                    break e;
                  }
                  o(I, Pe);
                  break;
                } else
                  r(I, Pe);
                Pe = Pe.sibling;
              }
              K.type === ae ? (F = hl(K.props.children, I.mode, he, K.key), F.return = I, I = F) : (he = uf(K.type, K.key, K.props, null, I.mode, he), he.ref = Gl(I, F, K), he.return = I, I = he);
            }
            return C(I);
          case ue:
            e: {
              for (Pe = K.key; F !== null; ) {
                if (F.key === Pe)
                  if (F.tag === 4 && F.stateNode.containerInfo === K.containerInfo && F.stateNode.implementation === K.implementation) {
                    o(I, F.sibling), F = p(F, K.children || []), F.return = I, I = F;
                    break e;
                  } else {
                    o(I, F);
                    break;
                  }
                else
                  r(I, F);
                F = F.sibling;
              }
              F = ml(K, I.mode, he), F.return = I, I = F;
            }
            return C(I);
          case lt:
            return Pe = K._init, zn(I, F, Pe(K._payload), he);
        }
        if (Ar(K))
          return Ue(I, F, K, he);
        if (xe(K))
          return He(I, F, K, he);
        Nc(I, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" ? (K = "" + K, F !== null && F.tag === 6 ? (o(I, F.sibling), F = p(F, K), F.return = I, I = F) : (o(I, F), F = Rs(K, I.mode, he), F.return = I, I = F), C(I)) : o(I, F);
    }
    return zn;
  }
  var Ql = kh(!0), Nh = kh(!1), us = {}, Za = pt(us), ss = pt(us), Kl = pt(us);
  function Zo(n) {
    if (n === us)
      throw Error(f(174));
    return n;
  }
  function Id(n, r) {
    switch (Bt(Kl, r), Bt(ss, n), Bt(Za, us), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : an(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = an(r, n);
    }
    Ft(Za), Bt(Za, r);
  }
  function ho() {
    Ft(Za), Ft(ss), Ft(Kl);
  }
  function Ze(n) {
    Zo(Kl.current);
    var r = Zo(Za.current), o = an(r, n.type);
    r !== o && (Bt(ss, n), Bt(Za, o));
  }
  function St(n) {
    ss.current === n && (Ft(Za), Ft(ss));
  }
  var et = pt(0);
  function wn(n) {
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
  var _a = [];
  function _c() {
    for (var n = 0; n < _a.length; n++)
      _a[n]._workInProgressVersionPrimary = null;
    _a.length = 0;
  }
  var Oc = G.ReactCurrentDispatcher, Bd = G.ReactCurrentBatchConfig, Jo = 0, sn = null, te = null, Dt = null, tt = !1, ui = !1, va = 0, el = 0;
  function cn() {
    throw Error(f(321));
  }
  function tl(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!wa(n[o], r[o]))
        return !1;
    return !0;
  }
  function mo(n, r, o, s, p, m) {
    if (Jo = m, sn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Oc.current = n === null || n.memoizedState === null ? Sg : bg, n = o(s, p), ui) {
      m = 0;
      do {
        if (ui = !1, va = 0, 25 <= m)
          throw Error(f(301));
        m += 1, Dt = te = null, r.updateQueue = null, Oc.current = Wd, n = o(s, p);
      } while (ui);
    }
    if (Oc.current = Gc, r = te !== null && te.next !== null, Jo = 0, Dt = te = sn = null, tt = !1, r)
      throw Error(f(300));
    return n;
  }
  function nl() {
    var n = va !== 0;
    return va = 0, n;
  }
  function Oa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Dt === null ? sn.memoizedState = Dt = n : Dt = Dt.next = n, Dt;
  }
  function ea() {
    if (te === null) {
      var n = sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = te.next;
    var r = Dt === null ? sn.memoizedState : Dt.next;
    if (r !== null)
      Dt = r, te = n;
    else {
      if (n === null)
        throw Error(f(310));
      te = n, n = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, Dt === null ? sn.memoizedState = Dt = n : Dt = Dt.next = n;
    }
    return Dt;
  }
  function rl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function cs(n) {
    var r = ea(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = te, p = s.baseQueue, m = o.pending;
    if (m !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = m.next, m.next = C;
      }
      s.baseQueue = p = m, o.pending = null;
    }
    if (p !== null) {
      m = p.next, s = s.baseState;
      var N = C = null, $ = null, Z = m;
      do {
        var oe = Z.lane;
        if ((Jo & oe) === oe)
          $ !== null && ($ = $.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), s = Z.hasEagerState ? Z.eagerState : n(s, Z.action);
        else {
          var fe = {
            lane: oe,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          $ === null ? (N = $ = fe, C = s) : $ = $.next = fe, sn.lanes |= oe, Li |= oe;
        }
        Z = Z.next;
      } while (Z !== null && Z !== m);
      $ === null ? C = s : $.next = N, wa(s, r.memoizedState) || (Vn = !0), r.memoizedState = s, r.baseState = C, r.baseQueue = $, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        m = p.lane, sn.lanes |= m, Li |= m, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function fs(n) {
    var r = ea(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, m = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var C = p = p.next;
      do
        m = n(m, C.action), C = C.next;
      while (C !== p);
      wa(m, r.memoizedState) || (Vn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, s];
  }
  function Mc() {
  }
  function Lc(n, r) {
    var o = sn, s = ea(), p = r(), m = !wa(s.memoizedState, p);
    if (m && (s.memoizedState = p, Vn = !0), s = s.queue, ds(zc.bind(null, o, s, n), [n]), s.getSnapshot !== r || m || Dt !== null && Dt.memoizedState.tag & 1) {
      if (o.flags |= 2048, al(9, $c.bind(null, o, s, p, r), void 0, null), Tn === null)
        throw Error(f(349));
      Jo & 30 || Ac(o, r, p);
    }
    return p;
  }
  function Ac(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, sn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function $c(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Uc(r) && Pc(n);
  }
  function zc(n, r, o) {
    return o(function() {
      Uc(r) && Pc(n);
    });
  }
  function Uc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !wa(n, o);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = ki(n, 1);
    r !== null && Mr(r, n, 1, -1);
  }
  function Fc(n) {
    var r = Oa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Wc.bind(null, sn, n), [r.memoizedState, n];
  }
  function al(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, sn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function jc() {
    return ea().memoizedState;
  }
  function il(n, r, o, s) {
    var p = Oa();
    sn.flags |= n, p.memoizedState = al(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function _i(n, r, o, s) {
    var p = ea();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (te !== null) {
      var C = te.memoizedState;
      if (m = C.destroy, s !== null && tl(s, C.deps)) {
        p.memoizedState = al(r, o, m, s);
        return;
      }
    }
    sn.flags |= n, p.memoizedState = al(1 | r, o, m, s);
  }
  function Hc(n, r) {
    return il(8390656, 8, n, r);
  }
  function ds(n, r) {
    return _i(2048, 8, n, r);
  }
  function Vc(n, r) {
    return _i(4, 2, n, r);
  }
  function Ic(n, r) {
    return _i(4, 4, n, r);
  }
  function Yd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Xl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, _i(4, 4, Yd.bind(null, r, n), o);
  }
  function Bc() {
  }
  function ql(n, r) {
    var o = ea();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && tl(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function yo(n, r) {
    var o = ea();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && tl(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function ta(n, r, o) {
    return Jo & 21 ? (wa(o, r) || (o = ec(), sn.lanes |= o, Li |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Vn = !0), n.memoizedState = o);
  }
  function gg(n, r) {
    var o = Gt;
    Gt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Bd.transition;
    Bd.transition = {};
    try {
      n(!1), r();
    } finally {
      Gt = o, Bd.transition = s;
    }
  }
  function tn() {
    return ea().memoizedState;
  }
  function Yc(n, r, o) {
    var s = In(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Zl(n))
      ps(r, o);
    else if (o = Ch(n, r, o, s), o !== null) {
      var p = Or();
      Mr(o, n, s, p), _h(o, r, s);
    }
  }
  function Wc(n, r, o) {
    var s = In(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Zl(n))
      ps(r, p);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var C = r.lastRenderedState, N = m(C, o);
          if (p.hasEagerState = !0, p.eagerState = N, wa(N, C)) {
            var $ = r.interleaved;
            $ === null ? (p.next = p, Fd(r)) : (p.next = $.next, $.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = Ch(n, r, p, s), o !== null && (p = Or(), Mr(o, n, s, p), _h(o, r, s));
    }
  }
  function Zl(n) {
    var r = n.alternate;
    return n === sn || r !== null && r === sn;
  }
  function ps(n, r) {
    ui = tt = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function _h(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Fu(n, o);
    }
  }
  var Gc = { readContext: $n, useCallback: cn, useContext: cn, useEffect: cn, useImperativeHandle: cn, useInsertionEffect: cn, useLayoutEffect: cn, useMemo: cn, useReducer: cn, useRef: cn, useState: cn, useDebugValue: cn, useDeferredValue: cn, useTransition: cn, useMutableSource: cn, useSyncExternalStore: cn, useId: cn, unstable_isNewReconciler: !1 }, Sg = { readContext: $n, useCallback: function(n, r) {
    return Oa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: $n, useEffect: Hc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, il(
      4194308,
      4,
      Yd.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return il(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return il(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Oa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = Oa();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = Yc.bind(null, sn, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Oa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Fc, useDebugValue: Bc, useDeferredValue: function(n) {
    return Oa().memoizedState = n;
  }, useTransition: function() {
    var n = Fc(!1), r = n[0];
    return n = gg.bind(null, n[1]), Oa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = sn, p = Oa();
    if (un) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), Tn === null)
        throw Error(f(349));
      Jo & 30 || Ac(s, r, o);
    }
    p.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return p.queue = m, Hc(zc.bind(
      null,
      s,
      m,
      n
    ), [n]), s.flags |= 2048, al(9, $c.bind(null, s, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = Oa(), r = Tn.identifierPrefix;
    if (un) {
      var o = Di, s = vr;
      o = (s & ~(1 << 32 - Ea(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = va++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = el++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, bg = {
    readContext: $n,
    useCallback: ql,
    useContext: $n,
    useEffect: ds,
    useImperativeHandle: Xl,
    useInsertionEffect: Vc,
    useLayoutEffect: Ic,
    useMemo: yo,
    useReducer: cs,
    useRef: jc,
    useState: function() {
      return cs(rl);
    },
    useDebugValue: Bc,
    useDeferredValue: function(n) {
      var r = ea();
      return ta(r, te.memoizedState, n);
    },
    useTransition: function() {
      var n = cs(rl)[0], r = ea().memoizedState;
      return [n, r];
    },
    useMutableSource: Mc,
    useSyncExternalStore: Lc,
    useId: tn,
    unstable_isNewReconciler: !1
  }, Wd = { readContext: $n, useCallback: ql, useContext: $n, useEffect: ds, useImperativeHandle: Xl, useInsertionEffect: Vc, useLayoutEffect: Ic, useMemo: yo, useReducer: fs, useRef: jc, useState: function() {
    return fs(rl);
  }, useDebugValue: Bc, useDeferredValue: function(n) {
    var r = ea();
    return te === null ? r.memoizedState = n : ta(r, te.memoizedState, n);
  }, useTransition: function() {
    var n = fs(rl)[0], r = ea().memoizedState;
    return [n, r];
  }, useMutableSource: Mc, useSyncExternalStore: Lc, useId: tn, unstable_isNewReconciler: !1 };
  function Jl(n, r) {
    try {
      var o = "", s = r;
      do
        o += Yn(s), s = s.return;
      while (s);
      var p = o;
    } catch (m) {
      p = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function vs(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Qc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Eg = typeof WeakMap == "function" ? WeakMap : Map;
  function Oh(n, r, o) {
    o = Ni(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      tf || (tf = !0, cl = s), Qc(n, r);
    }, o;
  }
  function hs(n, r, o) {
    o = Ni(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        Qc(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      Qc(n, r), typeof s != "function" && (fi === null ? fi = /* @__PURE__ */ new Set([this]) : fi.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Mh(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Eg();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else
      p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = kg.bind(null, n, r, o), r.then(n, n));
  }
  function Gd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qd(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ni(-1, 1), r.tag = 2, po(o, r, 1))), o.lanes |= 1), n);
  }
  var Cg = G.ReactCurrentOwner, Vn = !1;
  function Qn(n, r, o, s) {
    r.child = n === null ? Nh(r, null, o, s) : Ql(r, n.child, o, s);
  }
  function go(n, r, o, s, p) {
    o = o.render;
    var m = r.ref;
    return ge(r, p), s = mo(n, r, o, s, m, p), o = nl(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, mr(n, r, p)) : (un && o && bc(r), r.flags |= 1, Qn(n, r, s, p), r.child);
  }
  function Kc(n, r, o, s, p) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !pp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, na(n, r, m, s, p)) : (n = uf(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & p)) {
      var C = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Xu, o(C, s) && n.ref === r.ref)
        return mr(n, r, p);
    }
    return r.flags |= 1, n = Co(m, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function na(n, r, o, s, p) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Xu(m, s) && n.ref === r.ref)
        if (Vn = !1, r.pendingProps = s = m, (n.lanes & p) !== 0)
          n.flags & 131072 && (Vn = !0);
        else
          return r.lanes = n.lanes, mr(n, r, p);
    }
    return eu(n, r, o, s, p);
  }
  function ol(n, r, o) {
    var s = r.pendingProps, p = s.children, m = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Bt(ou, ha), ha |= o;
      else {
        if (!(o & 1073741824))
          return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Bt(ou, ha), ha |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : o, Bt(ou, ha), ha |= s;
      }
    else
      m !== null ? (s = m.baseLanes | o, r.memoizedState = null) : s = o, Bt(ou, ha), ha |= s;
    return Qn(n, r, p, o), r.child;
  }
  function vt(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function eu(n, r, o, s, p) {
    var m = gn(o) ? Kr : at.current;
    return m = Ra(r, m), ge(r, p), o = mo(n, r, o, s, m, p), s = nl(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, mr(n, r, p)) : (un && s && bc(r), r.flags |= 1, Qn(n, r, o, p), r.child);
  }
  function Kd(n, r, o, s, p) {
    if (gn(o)) {
      var m = !0;
      Sc(r);
    } else
      m = !1;
    if (ge(r, p), r.stateNode === null)
      kr(n, r), Th(r, o, s), kc(r, o, s, p), s = !0;
    else if (n === null) {
      var C = r.stateNode, N = r.memoizedProps;
      C.props = N;
      var $ = C.context, Z = o.contextType;
      typeof Z == "object" && Z !== null ? Z = $n(Z) : (Z = gn(o) ? Kr : at.current, Z = Ra(r, Z));
      var oe = o.getDerivedStateFromProps, fe = typeof oe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      fe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== s || $ !== Z) && Rh(r, C, s, Z), fo = !1;
      var ie = r.memoizedState;
      C.state = ie, vo(r, s, C, p), $ = r.memoizedState, N !== s || ie !== $ || Nn.current || fo ? (typeof oe == "function" && (Vd(r, o, oe, s), $ = r.memoizedState), (N = fo || wh(r, o, N, s, ie, $, Z)) ? (fe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = $), C.props = s, C.state = $, C.context = Z, s = N) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, Gn(n, r), N = r.memoizedProps, Z = r.type === r.elementType ? N : pa(r.type, N), C.props = Z, fe = r.pendingProps, ie = C.context, $ = o.contextType, typeof $ == "object" && $ !== null ? $ = $n($) : ($ = gn(o) ? Kr : at.current, $ = Ra(r, $));
      var Re = o.getDerivedStateFromProps;
      (oe = typeof Re == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== fe || ie !== $) && Rh(r, C, s, $), fo = !1, ie = r.memoizedState, C.state = ie, vo(r, s, C, p);
      var Ue = r.memoizedState;
      N !== fe || ie !== Ue || Nn.current || fo ? (typeof Re == "function" && (Vd(r, o, Re, s), Ue = r.memoizedState), (Z = fo || wh(r, o, Z, s, ie, Ue, $) || !1) ? (oe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, Ue, $), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, Ue, $)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Ue), C.props = s, C.state = Ue, C.context = $, s = Z) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Lh(n, r, o, s, m, p);
  }
  function Lh(n, r, o, s, p, m) {
    vt(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C)
      return p && gh(r, o, !1), mr(n, r, m);
    s = r.stateNode, Cg.current = r;
    var N = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = Ql(r, n.child, null, m), r.child = Ql(r, null, N, m)) : Qn(n, r, N, m), r.memoizedState = s.state, p && gh(r, o, !0), r.child;
  }
  function Ah(n) {
    var r = n.stateNode;
    r.pendingContext ? lo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && lo(n, r.context, !1), Id(n, r.containerInfo);
  }
  function Xc(n, r, o, s, p) {
    return xn(), zd(p), r.flags |= 256, Qn(n, r, o, s), r.child;
  }
  var ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function qd(n, r, o) {
    var s = r.pendingProps, p = et.current, m = !1, C = (r.flags & 128) !== 0, N;
    if ((N = C) || (N = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), N ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Bt(et, p & 1), n === null)
      return Cc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, m ? (s = r.mode, m = r.child, C = { mode: "hidden", children: C }, !(s & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = Ts(C, s, 0, null), n = hl(n, s, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Xd(o), r.memoizedState = ll, n) : Zd(r, C));
    if (p = n.memoizedState, p !== null && (N = p.dehydrated, N !== null))
      return xg(n, r, C, s, N, p, o);
    if (m) {
      m = s.fallback, C = r.mode, p = n.child, N = p.sibling;
      var $ = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = $, r.deletions = null) : (s = Co(p, $), s.subtreeFlags = p.subtreeFlags & 14680064), N !== null ? m = Co(N, m) : (m = hl(m, C, o, null), m.flags |= 2), m.return = r, s.return = r, s.sibling = m, r.child = s, s = m, m = r.child, C = n.child.memoizedState, C = C === null ? Xd(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = n.childLanes & ~o, r.memoizedState = ll, s;
    }
    return m = n.child, n = m.sibling, s = Co(m, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Zd(n, r) {
    return r = Ts({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function tu(n, r, o, s) {
    return s !== null && zd(s), Ql(r, n.child, null, o), n = Zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function xg(n, r, o, s, p, m, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = vs(Error(f(422))), tu(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = s.fallback, p = r.mode, s = Ts({ mode: "visible", children: s.children }, p, 0, null), m = hl(m, p, C, null), m.flags |= 2, s.return = r, m.return = r, s.sibling = m, r.child = s, r.mode & 1 && Ql(r, n.child, null, C), r.child.memoizedState = Xd(C), r.memoizedState = ll, m);
    if (!(r.mode & 1))
      return tu(n, r, C, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s)
        var N = s.dgst;
      return s = N, m = Error(f(419)), s = vs(m, s, void 0), tu(n, r, C, s);
    }
    if (N = (C & n.childLanes) !== 0, Vn || N) {
      if (s = Tn, s !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | C) ? 0 : p, p !== 0 && p !== m.retryLane && (m.retryLane = p, ki(n, p), Mr(s, n, p, -1));
      }
      return cp(), s = vs(Error(f(421))), tu(n, r, C, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ng.bind(null, n), p._reactRetry = r, null) : (n = m.treeContext, Jr = qa(p.nextSibling), da = r, un = !0, Na = null, n !== null && (Zr[Dr++] = vr, Zr[Dr++] = Di, Zr[Dr++] = ka, vr = n.id, Di = n.overflow, ka = r), r = Zd(r, s.children), r.flags |= 4096, r);
  }
  function Jd(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), ir(n.return, r, o);
  }
  function qc(n, r, o, s, p) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = o, m.tailMode = p);
  }
  function ep(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, m = s.tail;
    if (Qn(n, r, s.children, o), s = et.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Jd(n, o, r);
            else if (n.tag === 19)
              Jd(n, o, r);
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
      s &= 1;
    }
    if (Bt(et, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && wn(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), qc(r, !1, p, o, m);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && wn(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          qc(r, !0, o, null, m);
          break;
        case "together":
          qc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function kr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function mr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = Co(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Co(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Oi(n, r, o) {
    switch (r.tag) {
      case 3:
        Ah(r), xn();
        break;
      case 5:
        Ze(r);
        break;
      case 1:
        gn(r.type) && Sc(r);
        break;
      case 4:
        Id(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        Bt(li, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Bt(et, et.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? qd(n, r, o) : (Bt(et, et.current & 1), n = mr(n, r, o), n !== null ? n.sibling : null);
        Bt(et, et.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return ep(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Bt(et, et.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ol(n, r, o);
    }
    return mr(n, r, o);
  }
  var ms, ul, Ma, Kn;
  ms = function(n, r) {
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
  }, ul = function() {
  }, Ma = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, Zo(Za.current);
      var m = null;
      switch (o) {
        case "input":
          p = ht(n, p), s = ht(n, s), m = [];
          break;
        case "select":
          p = me({}, p, { value: void 0 }), s = me({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          p = Tr(n, p), s = Tr(n, s), m = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = gc);
      }
      Ct(o, s);
      var C;
      o = null;
      for (Z in p)
        if (!s.hasOwnProperty(Z) && p.hasOwnProperty(Z) && p[Z] != null)
          if (Z === "style") {
            var N = p[Z];
            for (C in N)
              N.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
          } else
            Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (S.hasOwnProperty(Z) ? m || (m = []) : (m = m || []).push(Z, null));
      for (Z in s) {
        var $ = s[Z];
        if (N = p != null ? p[Z] : void 0, s.hasOwnProperty(Z) && $ !== N && ($ != null || N != null))
          if (Z === "style")
            if (N) {
              for (C in N)
                !N.hasOwnProperty(C) || $ && $.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
              for (C in $)
                $.hasOwnProperty(C) && N[C] !== $[C] && (o || (o = {}), o[C] = $[C]);
            } else
              o || (m || (m = []), m.push(
                Z,
                o
              )), o = $;
          else
            Z === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, N = N ? N.__html : void 0, $ != null && N !== $ && (m = m || []).push(Z, $)) : Z === "children" ? typeof $ != "string" && typeof $ != "number" || (m = m || []).push(Z, "" + $) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (S.hasOwnProperty(Z) ? ($ != null && Z === "onScroll" && en("scroll", n), m || N === $ || (m = [])) : (m = m || []).push(Z, $));
      }
      o && (m = m || []).push("style", o);
      var Z = m;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Kn = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function ys(n, r) {
    if (!un)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function Nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function wg(n, r, o) {
    var s = r.pendingProps;
    switch (Ad(r), r.tag) {
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
        return Nr(r), null;
      case 1:
        return gn(r.type) && Da(), Nr(r), null;
      case 3:
        return s = r.stateNode, ho(), Ft(Nn), Ft(at), _c(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (xc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (ws(Na), Na = null))), ul(n, r), Nr(r), null;
      case 5:
        St(r);
        var p = Zo(Kl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Ma(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(f(166));
            return Nr(r), null;
          }
          if (n = Zo(Za.current), xc(r)) {
            s = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (s[ii] = r, s[Ko] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                en("cancel", s), en("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                en("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < es.length; p++)
                  en(es[p], s);
                break;
              case "source":
                en("error", s);
                break;
              case "img":
              case "image":
              case "link":
                en(
                  "error",
                  s
                ), en("load", s);
                break;
              case "details":
                en("toggle", s);
                break;
              case "input":
                Et(s, m), en("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, en("invalid", s);
                break;
              case "textarea":
                En(s, m), en("invalid", s);
            }
            Ct(o, m), p = null;
            for (var C in m)
              if (m.hasOwnProperty(C)) {
                var N = m[C];
                C === "children" ? typeof N == "string" ? s.textContent !== N && (m.suppressHydrationWarning !== !0 && yc(s.textContent, N, n), p = ["children", N]) : typeof N == "number" && s.textContent !== "" + N && (m.suppressHydrationWarning !== !0 && yc(
                  s.textContent,
                  N,
                  n
                ), p = ["children", "" + N]) : S.hasOwnProperty(C) && N != null && C === "onScroll" && en("scroll", s);
              }
            switch (o) {
              case "input":
                dt(s), vn(s, m, !0);
                break;
              case "textarea":
                dt(s), Jn(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = gc);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = er(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = C.createElement(o, { is: s.is }) : (n = C.createElement(o), o === "select" && (C = n, s.multiple ? C.multiple = !0 : s.size && (C.size = s.size))) : n = C.createElementNS(n, o), n[ii] = r, n[Ko] = s, ms(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Kt(o, s), o) {
                case "dialog":
                  en("cancel", n), en("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  en("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < es.length; p++)
                    en(es[p], n);
                  p = s;
                  break;
                case "source":
                  en("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  en(
                    "error",
                    n
                  ), en("load", n), p = s;
                  break;
                case "details":
                  en("toggle", n), p = s;
                  break;
                case "input":
                  Et(n, s), p = ht(n, s), en("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = me({}, s, { value: void 0 }), en("invalid", n);
                  break;
                case "textarea":
                  En(n, s), p = Tr(n, s), en("invalid", n);
                  break;
                default:
                  p = s;
              }
              Ct(o, p), N = p;
              for (m in N)
                if (N.hasOwnProperty(m)) {
                  var $ = N[m];
                  m === "style" ? Ge(n, $) : m === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, $ != null && Gr(n, $)) : m === "children" ? typeof $ == "string" ? (o !== "textarea" || $ !== "") && Ve(n, $) : typeof $ == "number" && Ve(n, "" + $) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (S.hasOwnProperty(m) ? $ != null && m === "onScroll" && en("scroll", n) : $ != null && V(n, m, $, C));
                }
              switch (o) {
                case "input":
                  dt(n), vn(n, s, !1);
                  break;
                case "textarea":
                  dt(n), Jn(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + Rt(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, m = s.value, m != null ? pr(n, !!s.multiple, m, !1) : s.defaultValue != null && pr(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = gc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Nr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Kn(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = Zo(Kl.current), Zo(Za.current), xc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[ii] = r, (m = s.nodeValue !== o) && (n = da, n !== null))
              switch (n.tag) {
                case 3:
                  yc(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && yc(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[ii] = r, r.stateNode = s;
        }
        return Nr(r), null;
      case 13:
        if (Ft(et), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && Jr !== null && r.mode & 1 && !(r.flags & 128))
            Eh(), xn(), r.flags |= 98560, m = !1;
          else if (m = xc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(f(317));
              m[ii] = r;
            } else
              xn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Nr(r), m = !1;
          } else
            Na !== null && (ws(Na), Na = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || et.current & 1 ? qn === 0 && (qn = 3) : cp())), r.updateQueue !== null && (r.flags |= 4), Nr(r), null);
      case 4:
        return ho(), ul(n, r), n === null && Bl(r.stateNode.containerInfo), Nr(r), null;
      case 10:
        return co(r.type._context), Nr(r), null;
      case 17:
        return gn(r.type) && Da(), Nr(r), null;
      case 19:
        if (Ft(et), m = r.memoizedState, m === null)
          return Nr(r), null;
        if (s = (r.flags & 128) !== 0, C = m.rendering, C === null)
          if (s)
            ys(m, !1);
          else {
            if (qn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = wn(n), C !== null) {
                  for (r.flags |= 128, ys(m, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    m = o, n = s, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Bt(et, et.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && $t() > uu && (r.flags |= 128, s = !0, ys(m, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = wn(C), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), ys(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !un)
                return Nr(r), null;
            } else
              2 * $t() - m.renderingStartTime > uu && o !== 1073741824 && (r.flags |= 128, s = !0, ys(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (o = m.last, o !== null ? o.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = $t(), r.sibling = null, o = et.current, Bt(et, s ? o & 1 | 2 : o & 1), r) : (Nr(r), null);
      case 22:
      case 23:
        return sp(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? ha & 1073741824 && (Nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function tp(n, r) {
    switch (Ad(r), r.tag) {
      case 1:
        return gn(r.type) && Da(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ho(), Ft(Nn), Ft(at), _c(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return St(r), null;
      case 13:
        if (Ft(et), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          xn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ft(et), null;
      case 4:
        return ho(), null;
      case 10:
        return co(r.type._context), null;
      case 22:
      case 23:
        return sp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1, Xn = !1, $h = typeof WeakSet == "function" ? WeakSet : Set, $e = null;
  function nu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          On(n, r, s);
        }
      else
        o.current = null;
  }
  function Ss(n, r, o) {
    try {
      o();
    } catch (s) {
      On(n, r, s);
    }
  }
  var zh = !1;
  function Uh(n, r) {
    if (Rd = Vo, n = dc(), xi(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var p = s.anchorOffset, m = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break e;
            }
            var C = 0, N = -1, $ = -1, Z = 0, oe = 0, fe = n, ie = null;
            t:
              for (; ; ) {
                for (var Re; fe !== o || p !== 0 && fe.nodeType !== 3 || (N = C + p), fe !== m || s !== 0 && fe.nodeType !== 3 || ($ = C + s), fe.nodeType === 3 && (C += fe.nodeValue.length), (Re = fe.firstChild) !== null; )
                  ie = fe, fe = Re;
                for (; ; ) {
                  if (fe === n)
                    break t;
                  if (ie === o && ++Z === p && (N = C), ie === m && ++oe === s && ($ = C), (Re = fe.nextSibling) !== null)
                    break;
                  fe = ie, ie = fe.parentNode;
                }
                fe = Re;
              }
            o = N === -1 || $ === -1 ? null : { start: N, end: $ };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Go = { focusedElem: n, selectionRange: o }, Vo = !1, $e = r; $e !== null; )
      if (r = $e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, $e = n;
      else
        for (; $e !== null; ) {
          r = $e;
          try {
            var Ue = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ue !== null) {
                    var He = Ue.memoizedProps, zn = Ue.memoizedState, I = r.stateNode, F = I.getSnapshotBeforeUpdate(r.elementType === r.type ? He : pa(r.type, He), zn);
                    I.__reactInternalSnapshotBeforeUpdate = F;
                  }
                  break;
                case 3:
                  var K = r.stateNode.containerInfo;
                  K.nodeType === 1 ? K.textContent = "" : K.nodeType === 9 && K.documentElement && K.removeChild(K.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (he) {
            On(r, r.return, he);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, $e = n;
            break;
          }
          $e = r.return;
        }
    return Ue = zh, zh = !1, Ue;
  }
  function bs(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var m = p.destroy;
          p.destroy = void 0, m !== void 0 && Ss(r, o, m);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function Es(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function np(n) {
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
  function rp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ii], delete r[Ko], delete r[Nd], delete r[yg], delete r[_d])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ph(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Ph(n.return))
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
  function ru(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = gc));
    else if (s !== 4 && (n = n.child, n !== null))
      for (ru(n, r, o), n = n.sibling; n !== null; )
        ru(n, r, o), n = n.sibling;
  }
  function si(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (si(n, r, o), n = n.sibling; n !== null; )
        si(n, r, o), n = n.sibling;
  }
  var Sn = null, or = !1;
  function La(n, r, o) {
    for (o = o.child; o !== null; )
      au(n, r, o), o = o.sibling;
  }
  function au(n, r, o) {
    if (Wa && typeof Wa.onCommitFiberUnmount == "function")
      try {
        Wa.onCommitFiberUnmount(Pu, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Xn || nu(o, r);
      case 6:
        var s = Sn, p = or;
        Sn = null, La(n, r, o), Sn = s, or = p, Sn !== null && (or ? (n = Sn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Sn.removeChild(o.stateNode));
        break;
      case 18:
        Sn !== null && (or ? (n = Sn, o = o.stateNode, n.nodeType === 8 ? ao(n.parentNode, o) : n.nodeType === 1 && ao(n, o), Iu(n)) : ao(Sn, o.stateNode));
        break;
      case 4:
        s = Sn, p = or, Sn = o.stateNode.containerInfo, or = !0, La(n, r, o), Sn = s, or = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xn && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var m = p, C = m.destroy;
            m = m.tag, C !== void 0 && (m & 2 || m & 4) && Ss(o, r, C), p = p.next;
          } while (p !== s);
        }
        La(n, r, o);
        break;
      case 1:
        if (!Xn && (nu(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (N) {
            On(o, r, N);
          }
        La(n, r, o);
        break;
      case 21:
        La(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Xn = (s = Xn) || o.memoizedState !== null, La(n, r, o), Xn = s) : La(n, r, o);
        break;
      default:
        La(n, r, o);
    }
  }
  function Mi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new $h()), r.forEach(function(s) {
        var p = _g.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function Ja(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var p = o[s];
        try {
          var m = n, C = r, N = C;
          e:
            for (; N !== null; ) {
              switch (N.tag) {
                case 5:
                  Sn = N.stateNode, or = !1;
                  break e;
                case 3:
                  Sn = N.stateNode.containerInfo, or = !0;
                  break e;
                case 4:
                  Sn = N.stateNode.containerInfo, or = !0;
                  break e;
              }
              N = N.return;
            }
          if (Sn === null)
            throw Error(f(160));
          au(m, C, p), Sn = null, or = !1;
          var $ = p.alternate;
          $ !== null && ($.return = null), p.return = null;
        } catch (Z) {
          On(p, r, Z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Fh(r, n), r = r.sibling;
  }
  function Fh(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ja(r, n), ci(n), s & 4) {
          try {
            bs(3, n, n.return), Es(3, n);
          } catch (He) {
            On(n, n.return, He);
          }
          try {
            bs(5, n, n.return);
          } catch (He) {
            On(n, n.return, He);
          }
        }
        break;
      case 1:
        Ja(r, n), ci(n), s & 512 && o !== null && nu(o, o.return);
        break;
      case 5:
        if (Ja(r, n), ci(n), s & 512 && o !== null && nu(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Ve(p, "");
          } catch (He) {
            On(n, n.return, He);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var m = n.memoizedProps, C = o !== null ? o.memoizedProps : m, N = n.type, $ = n.updateQueue;
          if (n.updateQueue = null, $ !== null)
            try {
              N === "input" && m.type === "radio" && m.name != null && Wt(p, m), Kt(N, C);
              var Z = Kt(N, m);
              for (C = 0; C < $.length; C += 2) {
                var oe = $[C], fe = $[C + 1];
                oe === "style" ? Ge(p, fe) : oe === "dangerouslySetInnerHTML" ? Gr(p, fe) : oe === "children" ? Ve(p, fe) : V(p, oe, fe, Z);
              }
              switch (N) {
                case "input":
                  Vt(p, m);
                  break;
                case "textarea":
                  $r(p, m);
                  break;
                case "select":
                  var ie = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!m.multiple;
                  var Re = m.value;
                  Re != null ? pr(p, !!m.multiple, Re, !1) : ie !== !!m.multiple && (m.defaultValue != null ? pr(
                    p,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : pr(p, !!m.multiple, m.multiple ? [] : "", !1));
              }
              p[Ko] = m;
            } catch (He) {
              On(n, n.return, He);
            }
        }
        break;
      case 6:
        if (Ja(r, n), ci(n), s & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          p = n.stateNode, m = n.memoizedProps;
          try {
            p.nodeValue = m;
          } catch (He) {
            On(n, n.return, He);
          }
        }
        break;
      case 3:
        if (Ja(r, n), ci(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Iu(r.containerInfo);
          } catch (He) {
            On(n, n.return, He);
          }
        break;
      case 4:
        Ja(r, n), ci(n);
        break;
      case 13:
        Ja(r, n), ci(n), p = n.child, p.flags & 8192 && (m = p.memoizedState !== null, p.stateNode.isHidden = m, !m || p.alternate !== null && p.alternate.memoizedState !== null || (op = $t())), s & 4 && Mi(n);
        break;
      case 22:
        if (oe = o !== null && o.memoizedState !== null, n.mode & 1 ? (Xn = (Z = Xn) || oe, Ja(r, n), Xn = Z) : Ja(r, n), ci(n), s & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !oe && n.mode & 1)
            for ($e = n, oe = n.child; oe !== null; ) {
              for (fe = $e = oe; $e !== null; ) {
                switch (ie = $e, Re = ie.child, ie.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bs(4, ie, ie.return);
                    break;
                  case 1:
                    nu(ie, ie.return);
                    var Ue = ie.stateNode;
                    if (typeof Ue.componentWillUnmount == "function") {
                      s = ie, o = ie.return;
                      try {
                        r = s, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                      } catch (He) {
                        On(s, o, He);
                      }
                    }
                    break;
                  case 5:
                    nu(ie, ie.return);
                    break;
                  case 22:
                    if (ie.memoizedState !== null) {
                      ap(fe);
                      continue;
                    }
                }
                Re !== null ? (Re.return = ie, $e = Re) : ap(fe);
              }
              oe = oe.sibling;
            }
          e:
            for (oe = null, fe = n; ; ) {
              if (fe.tag === 5) {
                if (oe === null) {
                  oe = fe;
                  try {
                    p = fe.stateNode, Z ? (m = p.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (N = fe.stateNode, $ = fe.memoizedProps.style, C = $ != null && $.hasOwnProperty("display") ? $.display : null, N.style.display = Ce("display", C));
                  } catch (He) {
                    On(n, n.return, He);
                  }
                }
              } else if (fe.tag === 6) {
                if (oe === null)
                  try {
                    fe.stateNode.nodeValue = Z ? "" : fe.memoizedProps;
                  } catch (He) {
                    On(n, n.return, He);
                  }
              } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === n) && fe.child !== null) {
                fe.child.return = fe, fe = fe.child;
                continue;
              }
              if (fe === n)
                break e;
              for (; fe.sibling === null; ) {
                if (fe.return === null || fe.return === n)
                  break e;
                oe === fe && (oe = null), fe = fe.return;
              }
              oe === fe && (oe = null), fe.sibling.return = fe.return, fe = fe.sibling;
            }
        }
        break;
      case 19:
        Ja(r, n), ci(n), s & 4 && Mi(n);
        break;
      case 21:
        break;
      default:
        Ja(
          r,
          n
        ), ci(n);
    }
  }
  function ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Ph(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (Ve(p, ""), s.flags &= -33);
            var m = Zc(n);
            si(n, m, p);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, N = Zc(n);
            ru(n, N, C);
            break;
          default:
            throw Error(f(161));
        }
      } catch ($) {
        On(n, n.return, $);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function jh(n, r, o) {
    $e = n, iu(n);
  }
  function iu(n, r, o) {
    for (var s = (n.mode & 1) !== 0; $e !== null; ) {
      var p = $e, m = p.child;
      if (p.tag === 22 && s) {
        var C = p.memoizedState !== null || gs;
        if (!C) {
          var N = p.alternate, $ = N !== null && N.memoizedState !== null || Xn;
          N = gs;
          var Z = Xn;
          if (gs = C, (Xn = $) && !Z)
            for ($e = p; $e !== null; )
              C = $e, $ = C.child, C.tag === 22 && C.memoizedState !== null ? Vh(p) : $ !== null ? ($.return = C, $e = $) : Vh(p);
          for (; m !== null; )
            $e = m, iu(m), m = m.sibling;
          $e = p, gs = N, Xn = Z;
        }
        Hh(n);
      } else
        p.subtreeFlags & 8772 && m !== null ? (m.return = p, $e = m) : Hh(n);
    }
  }
  function Hh(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Xn || Es(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !Xn)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : pa(r.type, o.memoizedProps);
                    s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && qo(r, m, s);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  qo(r, C, o);
                }
                break;
              case 5:
                var N = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = N;
                  var $ = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      $.autoFocus && o.focus();
                      break;
                    case "img":
                      $.src && (o.src = $.src);
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
                  var Z = r.alternate;
                  if (Z !== null) {
                    var oe = Z.memoizedState;
                    if (oe !== null) {
                      var fe = oe.dehydrated;
                      fe !== null && Iu(fe);
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
                throw Error(f(163));
            }
          Xn || r.flags & 512 && np(r);
        } catch (ie) {
          On(r, r.return, ie);
        }
      }
      if (r === n) {
        $e = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, $e = o;
        break;
      }
      $e = r.return;
    }
  }
  function ap(n) {
    for (; $e !== null; ) {
      var r = $e;
      if (r === n) {
        $e = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, $e = o;
        break;
      }
      $e = r.return;
    }
  }
  function Vh(n) {
    for (; $e !== null; ) {
      var r = $e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Es(4, r);
            } catch ($) {
              On(r, o, $);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch ($) {
                On(r, p, $);
              }
            }
            var m = r.return;
            try {
              np(r);
            } catch ($) {
              On(r, m, $);
            }
            break;
          case 5:
            var C = r.return;
            try {
              np(r);
            } catch ($) {
              On(r, C, $);
            }
        }
      } catch ($) {
        On(r, r.return, $);
      }
      if (r === n) {
        $e = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, $e = N;
        break;
      }
      $e = r.return;
    }
  }
  var Jc = Math.ceil, Cs = G.ReactCurrentDispatcher, ip = G.ReactCurrentOwner, _r = G.ReactCurrentBatchConfig, wt = 0, Tn = null, _n = null, lr = 0, ha = 0, ou = pt(0), qn = 0, xs = null, Li = 0, ef = 0, lu = 0, sl = null, Ur = null, op = 0, uu = 1 / 0, Ai = null, tf = !1, cl = null, fi = null, So = !1, bo = null, nf = 0, su = 0, rf = null, fl = -1, dl = 0;
  function Or() {
    return wt & 6 ? $t() : fl !== -1 ? fl : fl = $t();
  }
  function In(n) {
    return n.mode & 1 ? wt & 2 && lr !== 0 ? lr & -lr : wc.transition !== null ? (dl === 0 && (dl = ec()), dl) : (n = Gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : od(n.type)), n) : 1;
  }
  function Mr(n, r, o, s) {
    if (50 < su)
      throw su = 0, rf = null, Error(f(185));
    Ho(n, o, s), (!(wt & 2) || n !== Tn) && (n === Tn && (!(wt & 2) && (ef |= o), qn === 4 && Aa(n, lr)), Lr(n, s), o === 1 && wt === 0 && !(r.mode & 1) && (uu = $t() + 500, ar && Xr()));
  }
  function Lr(n, r) {
    var o = n.callbackNode;
    Js(n, r);
    var s = Ga(n, n === Tn ? lr : 0);
    if (s === 0)
      o !== null && zr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && zr(o), r === 1)
        n.tag === 0 ? Md(Ih.bind(null, n)) : Od(Ih.bind(null, n)), kd(function() {
          !(wt & 6) && Xr();
        }), o = null;
      else {
        switch (rd(s)) {
          case 1:
            o = Si;
            break;
          case 4:
            o = xt;
            break;
          case 16:
            o = Ji;
            break;
          case 536870912:
            o = Jf;
            break;
          default:
            o = Ji;
        }
        o = dp(o, cu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function cu(n, r) {
    if (fl = -1, dl = 0, wt & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (du() && n.callbackNode !== o)
      return null;
    var s = Ga(n, n === Tn ? lr : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = of(n, s);
    else {
      r = s;
      var p = wt;
      wt |= 2;
      var m = af();
      (Tn !== n || lr !== r) && (Ai = null, uu = $t() + 500, pl(n, r));
      do
        try {
          Rg();
          break;
        } catch (N) {
          Bh(n, N);
        }
      while (!0);
      Pd(), Cs.current = m, wt = p, _n !== null ? r = 0 : (Tn = null, lr = 0, r = qn);
    }
    if (r !== 0) {
      if (r === 2 && (p = td(n), p !== 0 && (s = p, r = lp(n, p))), r === 1)
        throw o = xs, pl(n, 0), Aa(n, s), Lr(n, $t()), o;
      if (r === 6)
        Aa(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !up(p) && (r = of(n, s), r === 2 && (m = td(n), m !== 0 && (s = m, r = lp(n, m))), r === 1))
          throw o = xs, pl(n, 0), Aa(n, s), Lr(n, $t()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            vl(n, Ur, Ai);
            break;
          case 3:
            if (Aa(n, s), (s & 130023424) === s && (r = op + 500 - $t(), 10 < r)) {
              if (Ga(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                Or(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Qo(vl.bind(null, n, Ur, Ai), r);
              break;
            }
            vl(n, Ur, Ai);
            break;
          case 4:
            if (Aa(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var C = 31 - Ea(s);
              m = 1 << C, C = r[C], C > p && (p = C), s &= ~m;
            }
            if (s = p, s = $t() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Jc(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Qo(vl.bind(null, n, Ur, Ai), s);
              break;
            }
            vl(n, Ur, Ai);
            break;
          case 5:
            vl(n, Ur, Ai);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return Lr(n, $t()), n.callbackNode === o ? cu.bind(null, n) : null;
  }
  function lp(n, r) {
    var o = sl;
    return n.current.memoizedState.isDehydrated && (pl(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = Ur, Ur = o, r !== null && ws(r)), n;
  }
  function ws(n) {
    Ur === null ? Ur = n : Ur.push.apply(Ur, n);
  }
  function up(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var p = o[s], m = p.getSnapshot;
            p = p.value;
            try {
              if (!wa(m(), p))
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
  function Aa(n, r) {
    for (r &= ~lu, r &= ~ef, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ea(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Ih(n) {
    if (wt & 6)
      throw Error(f(327));
    du();
    var r = Ga(n, 0);
    if (!(r & 1))
      return Lr(n, $t()), null;
    var o = of(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = td(n);
      s !== 0 && (r = s, o = lp(n, s));
    }
    if (o === 1)
      throw o = xs, pl(n, 0), Aa(n, r), Lr(n, $t()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, vl(n, Ur, Ai), Lr(n, $t()), null;
  }
  function fu(n, r) {
    var o = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = o, wt === 0 && (uu = $t() + 500, ar && Xr());
    }
  }
  function Eo(n) {
    bo !== null && bo.tag === 0 && !(wt & 6) && du();
    var r = wt;
    wt |= 1;
    var o = _r.transition, s = Gt;
    try {
      if (_r.transition = null, Gt = 1, n)
        return n();
    } finally {
      Gt = s, _r.transition = o, wt = r, !(wt & 6) && Xr();
    }
  }
  function sp() {
    ha = ou.current, Ft(ou);
  }
  function pl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, yh(o)), _n !== null)
      for (o = _n.return; o !== null; ) {
        var s = o;
        switch (Ad(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Da();
            break;
          case 3:
            ho(), Ft(Nn), Ft(at), _c();
            break;
          case 5:
            St(s);
            break;
          case 4:
            ho();
            break;
          case 13:
            Ft(et);
            break;
          case 19:
            Ft(et);
            break;
          case 10:
            co(s.type._context);
            break;
          case 22:
          case 23:
            sp();
        }
        o = o.return;
      }
    if (Tn = n, _n = n = Co(n.current, null), lr = ha = r, qn = 0, xs = null, lu = ef = Li = 0, Ur = sl = null, hr !== null) {
      for (r = 0; r < hr.length; r++)
        if (o = hr[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var p = s.next, m = o.pending;
          if (m !== null) {
            var C = m.next;
            m.next = p, s.next = C;
          }
          o.pending = s;
        }
      hr = null;
    }
    return n;
  }
  function Bh(n, r) {
    do {
      var o = _n;
      try {
        if (Pd(), Oc.current = Gc, tt) {
          for (var s = sn.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          tt = !1;
        }
        if (Jo = 0, Dt = te = sn = null, ui = !1, va = 0, ip.current = null, o === null || o.return === null) {
          qn = 1, xs = r, _n = null;
          break;
        }
        e: {
          var m = n, C = o.return, N = o, $ = r;
          if (r = lr, N.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
            var Z = $, oe = N, fe = oe.tag;
            if (!(oe.mode & 1) && (fe === 0 || fe === 11 || fe === 15)) {
              var ie = oe.alternate;
              ie ? (oe.updateQueue = ie.updateQueue, oe.memoizedState = ie.memoizedState, oe.lanes = ie.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var Re = Gd(C);
            if (Re !== null) {
              Re.flags &= -257, Qd(Re, C, N, m, r), Re.mode & 1 && Mh(m, Z, r), r = Re, $ = Z;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var He = /* @__PURE__ */ new Set();
                He.add($), r.updateQueue = He;
              } else
                Ue.add($);
              break e;
            } else {
              if (!(r & 1)) {
                Mh(m, Z, r), cp();
                break e;
              }
              $ = Error(f(426));
            }
          } else if (un && N.mode & 1) {
            var zn = Gd(C);
            if (zn !== null) {
              !(zn.flags & 65536) && (zn.flags |= 256), Qd(zn, C, N, m, r), zd(Jl($, N));
              break e;
            }
          }
          m = $ = Jl($, N), qn !== 4 && (qn = 2), sl === null ? sl = [m] : sl.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var I = Oh(m, $, r);
                Hd(m, I);
                break e;
              case 1:
                N = $;
                var F = m.type, K = m.stateNode;
                if (!(m.flags & 128) && (typeof F.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && (fi === null || !fi.has(K)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var he = hs(m, N, r);
                  Hd(m, he);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        fp(o);
      } catch (Ie) {
        r = Ie, _n === o && o !== null && (_n = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function af() {
    var n = Cs.current;
    return Cs.current = Gc, n === null ? Gc : n;
  }
  function cp() {
    (qn === 0 || qn === 3 || qn === 2) && (qn = 4), Tn === null || !(Li & 268435455) && !(ef & 268435455) || Aa(Tn, lr);
  }
  function of(n, r) {
    var o = wt;
    wt |= 2;
    var s = af();
    (Tn !== n || lr !== r) && (Ai = null, pl(n, r));
    do
      try {
        Tg();
        break;
      } catch (p) {
        Bh(n, p);
      }
    while (!0);
    if (Pd(), wt = o, Cs.current = s, _n !== null)
      throw Error(f(261));
    return Tn = null, lr = 0, qn;
  }
  function Tg() {
    for (; _n !== null; )
      Yh(_n);
  }
  function Rg() {
    for (; _n !== null && !Zi(); )
      Yh(_n);
  }
  function Yh(n) {
    var r = Gh(n.alternate, n, ha);
    n.memoizedProps = n.pendingProps, r === null ? fp(n) : _n = r, ip.current = null;
  }
  function fp(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = tp(o, r), o !== null) {
          o.flags &= 32767, _n = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qn = 6, _n = null;
          return;
        }
      } else if (o = wg(o, r, ha), o !== null) {
        _n = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        _n = r;
        return;
      }
      _n = r = n;
    } while (r !== null);
    qn === 0 && (qn = 5);
  }
  function vl(n, r, o) {
    var s = Gt, p = _r.transition;
    try {
      _r.transition = null, Gt = 1, Dg(n, r, o, s);
    } finally {
      _r.transition = p, Gt = s;
    }
    return null;
  }
  function Dg(n, r, o, s) {
    do
      du();
    while (bo !== null);
    if (wt & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (Jy(n, m), n === Tn && (_n = Tn = null, lr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || So || (So = !0, dp(Ji, function() {
      return du(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = _r.transition, _r.transition = null;
      var C = Gt;
      Gt = 1;
      var N = wt;
      wt |= 4, ip.current = null, Uh(n, o), Fh(o, n), pc(Go), Vo = !!Rd, Go = Rd = null, n.current = o, jh(o), qs(), wt = N, Gt = C, _r.transition = m;
    } else
      n.current = o;
    if (So && (So = !1, bo = n, nf = p), m = n.pendingLanes, m === 0 && (fi = null), Ov(o.stateNode), Lr(n, $t()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (tf)
      throw tf = !1, n = cl, cl = null, n;
    return nf & 1 && n.tag !== 0 && du(), m = n.pendingLanes, m & 1 ? n === rf ? su++ : (su = 0, rf = n) : su = 0, Xr(), null;
  }
  function du() {
    if (bo !== null) {
      var n = rd(nf), r = _r.transition, o = Gt;
      try {
        if (_r.transition = null, Gt = 16 > n ? 16 : n, bo === null)
          var s = !1;
        else {
          if (n = bo, bo = null, nf = 0, wt & 6)
            throw Error(f(331));
          var p = wt;
          for (wt |= 4, $e = n.current; $e !== null; ) {
            var m = $e, C = m.child;
            if ($e.flags & 16) {
              var N = m.deletions;
              if (N !== null) {
                for (var $ = 0; $ < N.length; $++) {
                  var Z = N[$];
                  for ($e = Z; $e !== null; ) {
                    var oe = $e;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bs(8, oe, m);
                    }
                    var fe = oe.child;
                    if (fe !== null)
                      fe.return = oe, $e = fe;
                    else
                      for (; $e !== null; ) {
                        oe = $e;
                        var ie = oe.sibling, Re = oe.return;
                        if (rp(oe), oe === Z) {
                          $e = null;
                          break;
                        }
                        if (ie !== null) {
                          ie.return = Re, $e = ie;
                          break;
                        }
                        $e = Re;
                      }
                  }
                }
                var Ue = m.alternate;
                if (Ue !== null) {
                  var He = Ue.child;
                  if (He !== null) {
                    Ue.child = null;
                    do {
                      var zn = He.sibling;
                      He.sibling = null, He = zn;
                    } while (He !== null);
                  }
                }
                $e = m;
              }
            }
            if (m.subtreeFlags & 2064 && C !== null)
              C.return = m, $e = C;
            else
              e:
                for (; $e !== null; ) {
                  if (m = $e, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bs(9, m, m.return);
                    }
                  var I = m.sibling;
                  if (I !== null) {
                    I.return = m.return, $e = I;
                    break e;
                  }
                  $e = m.return;
                }
          }
          var F = n.current;
          for ($e = F; $e !== null; ) {
            C = $e;
            var K = C.child;
            if (C.subtreeFlags & 2064 && K !== null)
              K.return = C, $e = K;
            else
              e:
                for (C = F; $e !== null; ) {
                  if (N = $e, N.flags & 2048)
                    try {
                      switch (N.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Es(9, N);
                      }
                    } catch (Ie) {
                      On(N, N.return, Ie);
                    }
                  if (N === C) {
                    $e = null;
                    break e;
                  }
                  var he = N.sibling;
                  if (he !== null) {
                    he.return = N.return, $e = he;
                    break e;
                  }
                  $e = N.return;
                }
          }
          if (wt = p, Xr(), Wa && typeof Wa.onPostCommitFiberRoot == "function")
            try {
              Wa.onPostCommitFiberRoot(Pu, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Gt = o, _r.transition = r;
      }
    }
    return !1;
  }
  function Wh(n, r, o) {
    r = Jl(o, r), r = Oh(n, r, 1), n = po(n, r, 1), r = Or(), n !== null && (Ho(n, 1, r), Lr(n, r));
  }
  function On(n, r, o) {
    if (n.tag === 3)
      Wh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Wh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (fi === null || !fi.has(s))) {
            n = Jl(o, n), n = hs(r, n, 1), r = po(r, n, 1), n = Or(), r !== null && (Ho(r, 1, n), Lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function kg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = Or(), n.pingedLanes |= n.suspendedLanes & o, Tn === n && (lr & o) === o && (qn === 4 || qn === 3 && (lr & 130023424) === lr && 500 > $t() - op ? pl(n, 0) : lu |= o), Lr(n, r);
  }
  function lf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Al, Al <<= 1, !(Al & 130023424) && (Al = 4194304)) : r = 1);
    var o = Or();
    n = ki(n, r), n !== null && (Ho(n, r, o), Lr(n, o));
  }
  function Ng(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), lf(n, o);
  }
  function _g(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    s !== null && s.delete(r), lf(n, o);
  }
  var Gh;
  Gh = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Nn.current)
        Vn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Vn = !1, Oi(n, r, o);
        Vn = !!(n.flags & 131072);
      }
    else
      Vn = !1, un && r.flags & 1048576 && Ld(r, Wl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        kr(n, r), n = r.pendingProps;
        var p = Ra(r, at.current);
        ge(r, o), p = mo(null, r, s, n, p, o);
        var m = nl();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, gn(s) ? (m = !0, Sc(r)) : m = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, jd(r), p.updater = Dc, r.stateNode = p, p._reactInternals = r, kc(r, s, n, o), r = Lh(null, r, s, !0, m, o)) : (r.tag = 0, un && m && bc(r), Qn(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (kr(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = Mg(s), n = pa(s, n), p) {
            case 0:
              r = eu(null, r, s, n, o);
              break e;
            case 1:
              r = Kd(null, r, s, n, o);
              break e;
            case 11:
              r = go(null, r, s, n, o);
              break e;
            case 14:
              r = Kc(null, r, s, pa(s.type, n), o);
              break e;
          }
          throw Error(f(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pa(s, p), eu(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pa(s, p), Kd(n, r, s, p, o);
      case 3:
        e: {
          if (Ah(r), n === null)
            throw Error(f(387));
          s = r.pendingProps, m = r.memoizedState, p = m.element, Gn(n, r), vo(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, m.isDehydrated)
            if (m = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              p = Jl(Error(f(423)), r), r = Xc(n, r, s, o, p);
              break e;
            } else if (s !== p) {
              p = Jl(Error(f(424)), r), r = Xc(n, r, s, o, p);
              break e;
            } else
              for (Jr = qa(r.stateNode.containerInfo.firstChild), da = r, un = !0, Na = null, o = Nh(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (xn(), s === p) {
              r = mr(n, r, o);
              break e;
            }
            Qn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ze(r), n === null && Cc(r), s = r.type, p = r.pendingProps, m = n !== null ? n.memoizedProps : null, C = p.children, rs(s, p) ? C = null : m !== null && rs(s, m) && (r.flags |= 32), vt(n, r), Qn(n, r, C, o), r.child;
      case 6:
        return n === null && Cc(r), null;
      case 13:
        return qd(n, r, o);
      case 4:
        return Id(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = Ql(r, null, s, o) : Qn(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pa(s, p), go(n, r, s, p, o);
      case 7:
        return Qn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Qn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Qn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, m = r.memoizedProps, C = p.value, Bt(li, s._currentValue), s._currentValue = C, m !== null)
            if (wa(m.value, C)) {
              if (m.children === p.children && !Nn.current) {
                r = mr(n, r, o);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var N = m.dependencies;
                if (N !== null) {
                  C = m.child;
                  for (var $ = N.firstContext; $ !== null; ) {
                    if ($.context === s) {
                      if (m.tag === 1) {
                        $ = Ni(-1, o & -o), $.tag = 2;
                        var Z = m.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var oe = Z.pending;
                          oe === null ? $.next = $ : ($.next = oe.next, oe.next = $), Z.pending = $;
                        }
                      }
                      m.lanes |= o, $ = m.alternate, $ !== null && ($.lanes |= o), ir(
                        m.return,
                        o,
                        r
                      ), N.lanes |= o;
                      break;
                    }
                    $ = $.next;
                  }
                } else if (m.tag === 10)
                  C = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (C = m.return, C === null)
                    throw Error(f(341));
                  C.lanes |= o, N = C.alternate, N !== null && (N.lanes |= o), ir(C, o, r), C = m.sibling;
                } else
                  C = m.child;
                if (C !== null)
                  C.return = m;
                else
                  for (C = m; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (m = C.sibling, m !== null) {
                      m.return = C.return, C = m;
                      break;
                    }
                    C = C.return;
                  }
                m = C;
              }
          Qn(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, ge(r, o), p = $n(p), s = s(p), r.flags |= 1, Qn(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = pa(s, r.pendingProps), p = pa(s.type, p), Kc(n, r, s, p, o);
      case 15:
        return na(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pa(s, p), kr(n, r), r.tag = 1, gn(s) ? (n = !0, Sc(r)) : n = !1, ge(r, o), Th(r, s, p), kc(r, s, p, o), Lh(null, r, s, !0, n, o);
      case 19:
        return ep(n, r, o);
      case 22:
        return ol(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function dp(n, r) {
    return yn(n, r);
  }
  function Og(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, o, s) {
    return new Og(n, r, o, s);
  }
  function pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Mg(n) {
    if (typeof n == "function")
      return pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === je)
        return 11;
      if (n === _t)
        return 14;
    }
    return 2;
  }
  function Co(n, r) {
    var o = n.alternate;
    return o === null ? (o = $a(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function uf(n, r, o, s, p, m) {
    var C = 2;
    if (s = n, typeof n == "function")
      pp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case ae:
            return hl(o.children, p, m, r);
          case se:
            C = 8, p |= 8;
            break;
          case ve:
            return n = $a(12, o, r, p | 2), n.elementType = ve, n.lanes = m, n;
          case ke:
            return n = $a(13, o, r, p), n.elementType = ke, n.lanes = m, n;
          case Be:
            return n = $a(19, o, r, p), n.elementType = Be, n.lanes = m, n;
          case Mt:
            return Ts(o, p, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Te:
                  C = 10;
                  break e;
                case Ae:
                  C = 9;
                  break e;
                case je:
                  C = 11;
                  break e;
                case _t:
                  C = 14;
                  break e;
                case lt:
                  C = 16, s = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = $a(C, o, r, p), r.elementType = n, r.type = s, r.lanes = m, r;
  }
  function hl(n, r, o, s) {
    return n = $a(7, n, s, r), n.lanes = o, n;
  }
  function Ts(n, r, o, s) {
    return n = $a(22, n, s, r), n.elementType = Mt, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Rs(n, r, o) {
    return n = $a(6, n, null, r), n.lanes = o, n;
  }
  function ml(n, r, o) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Lg(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nd(0), this.expirationTimes = nd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nd(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function sf(n, r, o, s, p, m, C, N, $) {
    return n = new Lg(n, r, o, N, $), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = $a(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jd(m), n;
  }
  function Qh(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ue, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function vp(n) {
    if (!n)
      return oi;
    n = n._reactInternals;
    e: {
      if (mt(n) !== n || n.tag !== 1)
        throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (gn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (gn(o))
        return os(n, o, r);
    }
    return r;
  }
  function Kh(n, r, o, s, p, m, C, N, $) {
    return n = sf(o, s, !0, n, p, m, C, N, $), n.context = vp(null), o = n.current, s = Or(), p = In(o), m = Ni(s, p), m.callback = r ?? null, po(o, m, p), n.current.lanes = p, Ho(n, p, s), Lr(n, s), n;
  }
  function Ds(n, r, o, s) {
    var p = r.current, m = Or(), C = In(p);
    return o = vp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ni(m, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = po(p, r, C), n !== null && (Mr(n, p, C, m), Rc(n, p, C)), C;
  }
  function cf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Xh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function hp(n, r) {
    Xh(n, r), (n = n.alternate) && Xh(n, r);
  }
  function qh() {
    return null;
  }
  var mp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ff(n) {
    this._internalRoot = n;
  }
  $i.prototype.render = ff.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Ds(n, r, null, null);
  }, $i.prototype.unmount = ff.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Eo(function() {
        Ds(null, n, null, null);
      }), r[Ri] = null;
    }
  };
  function $i(n) {
    this._internalRoot = n;
  }
  $i.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $v();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Xt.length && r !== 0 && r < Xt[o].priority; o++)
        ;
      Xt.splice(o, 0, n), o === 0 && zv(n);
    }
  };
  function yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function df(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Zh() {
  }
  function Ag(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var Z = cf(C);
          m.call(Z);
        };
      }
      var C = Kh(r, s, n, 0, null, !1, !1, "", Zh);
      return n._reactRootContainer = C, n[Ri] = C.current, Bl(n.nodeType === 8 ? n.parentNode : n), Eo(), C;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof s == "function") {
      var N = s;
      s = function() {
        var Z = cf($);
        N.call(Z);
      };
    }
    var $ = sf(n, 0, !1, null, null, !1, !1, "", Zh);
    return n._reactRootContainer = $, n[Ri] = $.current, Bl(n.nodeType === 8 ? n.parentNode : n), Eo(function() {
      Ds(r, $, o, s);
    }), $;
  }
  function pf(n, r, o, s, p) {
    var m = o._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof p == "function") {
        var N = p;
        p = function() {
          var $ = cf(C);
          N.call($);
        };
      }
      Ds(r, C, n, p);
    } else
      C = Ag(o, r, n, p, s);
    return cf(C);
  }
  Av = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = jo(r.pendingLanes);
          o !== 0 && (Fu(r, o | 1), Lr(r, $t()), !(wt & 6) && (uu = $t() + 500, Xr()));
        }
        break;
      case 13:
        Eo(function() {
          var s = ki(n, 1);
          if (s !== null) {
            var p = Or();
            Mr(s, n, 1, p);
          }
        }), hp(n, 1);
    }
  }, tc = function(n) {
    if (n.tag === 13) {
      var r = ki(n, 134217728);
      if (r !== null) {
        var o = Or();
        Mr(r, n, 134217728, o);
      }
      hp(n, 134217728);
    }
  }, Jt = function(n) {
    if (n.tag === 13) {
      var r = In(n), o = ki(n, r);
      if (o !== null) {
        var s = Or();
        Mr(o, n, r, s);
      }
      hp(n, r);
    }
  }, $v = function() {
    return Gt;
  }, ad = function(n, r) {
    var o = Gt;
    try {
      return Gt = n, r();
    } finally {
      Gt = o;
    }
  }, An = function(n, r, o) {
    switch (r) {
      case "input":
        if (Vt(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = Qe(s);
              if (!p)
                throw Error(f(90));
              Ne(s), Vt(s, p);
            }
          }
        }
        break;
      case "textarea":
        $r(n, o);
        break;
      case "select":
        r = o.value, r != null && pr(n, !!o.multiple, r, !1);
    }
  }, Uu = fu, Xs = Eo;
  var $g = { usingClientEntryPoint: !1, Events: [is, Yl, Qe, Uo, Ol, fu] }, pu = { findFiberByHostInstance: Ta, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, zg = { bundleType: pu.bundleType, version: pu.version, rendererPackageName: pu.rendererPackageName, rendererConfig: pu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = tr(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: pu.findFiberByHostInstance || qh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vf.isDisabled && vf.supportsFiber)
      try {
        Pu = vf.inject(zg), Wa = vf;
      } catch {
      }
  }
  return Ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $g, Ha.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yp(r))
      throw Error(f(200));
    return Qh(n, r, null, o);
  }, Ha.createRoot = function(n, r) {
    if (!yp(n))
      throw Error(f(299));
    var o = !1, s = "", p = mp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = sf(n, 1, !1, null, null, o, !1, s, p), n[Ri] = r.current, Bl(n.nodeType === 8 ? n.parentNode : n), new ff(r);
  }, Ha.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = tr(r), n = n === null ? null : n.stateNode, n;
  }, Ha.flushSync = function(n) {
    return Eo(n);
  }, Ha.hydrate = function(n, r, o) {
    if (!df(r))
      throw Error(f(200));
    return pf(null, n, r, !0, o);
  }, Ha.hydrateRoot = function(n, r, o) {
    if (!yp(n))
      throw Error(f(405));
    var s = o != null && o.hydratedSources || null, p = !1, m = "", C = mp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Kh(r, null, n, 1, o ?? null, p, !1, m, C), n[Ri] = r.current, Bl(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new $i(r);
  }, Ha.render = function(n, r, o) {
    if (!df(r))
      throw Error(f(200));
    return pf(null, n, r, !1, o);
  }, Ha.unmountComponentAtNode = function(n) {
    if (!df(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Eo(function() {
      pf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ri] = null;
      });
    }), !0) : !1;
  }, Ha.unstable_batchedUpdates = fu, Ha.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!df(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return pf(n, r, o, !1, s);
  }, Ha.version = "18.2.0-next-9e3b772b8-20220608", Ha;
}
var Va = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sw;
function QM() {
  return sw || (sw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = Me, d = Yw(), f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function S(e) {
      y = e;
    }
    function b(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("warn", e, a);
      }
    }
    function h(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("error", e, a);
      }
    }
    function x(e, t, a) {
      {
        var i = f.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var c = a.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var T = 0, R = 1, M = 2, D = 3, _ = 4, L = 5, U = 6, O = 7, H = 8, z = 9, Q = 10, V = 11, G = 12, B = 13, ue = 14, ae = 15, se = 16, ve = 17, Te = 18, Ae = 19, je = 21, ke = 22, Be = 23, _t = 24, lt = 25, Mt = !0, ce = !1, xe = !1, me = !1, Xe = !1, ot = !0, Pt = !1, Qt = !1, Yn = !0, Ee = !0, nn = !0, Rt = /* @__PURE__ */ new Set(), bn = {}, pn = {};
    function dt(e, t) {
      Ne(e, t), Ne(e + "Capture", t);
    }
    function Ne(e, t) {
      bn[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), bn[e] = t;
      {
        var a = e.toLowerCase();
        pn[a] = e, e === "onDoubleClick" && (pn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Rt.add(t[i]);
    }
    var nt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ht = Object.prototype.hasOwnProperty;
    function Et(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wt(e) {
      try {
        return Vt(e), !1;
      } catch {
        return !0;
      }
    }
    function Vt(e) {
      return "" + e;
    }
    function vn(e, t) {
      if (Wt(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), Vt(e);
    }
    function rn(e) {
      if (Wt(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), Vt(e);
    }
    function Ar(e, t) {
      if (Wt(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), Vt(e);
    }
    function pr(e, t) {
      if (Wt(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), Vt(e);
    }
    function Tr(e) {
      if (Wt(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), Vt(e);
    }
    function En(e) {
      if (Wt(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Et(e)), Vt(e);
    }
    var $r = 0, Jn = 1, er = 2, an = 3, Cn = 4, Gr = 5, Ve = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ye = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ce = new RegExp("^[" + ne + "][" + ye + "]*$"), Ge = {}, ut = {};
    function Ct(e) {
      return ht.call(ut, e) ? !0 : ht.call(Ge, e) ? !1 : Ce.test(e) ? (ut[e] = !0, !0) : (Ge[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Kt(e, t, a) {
      return t !== null ? t.type === $r : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function hn(e, t, a, i) {
      if (a !== null && a.type === $r)
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
    function gt(e, t, a, i) {
      if (t === null || typeof t > "u" || hn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case an:
            return !t;
          case Cn:
            return t === !1;
          case Gr:
            return isNaN(t);
          case Ve:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function An(e) {
      return on.hasOwnProperty(e) ? on[e] : null;
    }
    function It(e, t, a, i, l, c, v) {
      this.acceptsBooleans = t === er || t === an || t === Cn, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var on = {}, _l = [
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
    _l.forEach(function(e) {
      on[e] = new It(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      on[t] = new It(
        t,
        Jn,
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
      on[e] = new It(
        e,
        er,
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
      on[e] = new It(
        e,
        er,
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
      on[e] = new It(
        e,
        an,
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
      on[e] = new It(
        e,
        an,
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
      on[e] = new It(
        e,
        Cn,
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
      on[e] = new It(
        e,
        Ve,
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
      on[e] = new It(
        e,
        Gr,
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
    var Uo = /[\-\:]([a-z])/g, Ol = function(e) {
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
      var t = e.replace(Uo, Ol);
      on[t] = new It(
        t,
        Jn,
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
      var t = e.replace(Uo, Ol);
      on[t] = new It(
        t,
        Jn,
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
      var t = e.replace(Uo, Ol);
      on[t] = new It(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      on[e] = new It(
        e,
        Jn,
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
    var Uu = "xlinkHref";
    on[Uu] = new It(
      "xlinkHref",
      Jn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      on[e] = new It(
        e,
        Jn,
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
    var Xs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Po = !1;
    function Ml(e) {
      !Po && Xs.test(e) && (Po = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Fo(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        vn(a, t), i.sanitizeURL && Ml("" + a);
        var c = i.attributeName, v = null;
        if (i.type === Cn) {
          if (e.hasAttribute(c)) {
            var g = e.getAttribute(c);
            return g === "" ? !0 : gt(t, a, i, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(c)) {
          if (gt(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === an)
            return a;
          v = e.getAttribute(c);
        }
        return gt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Ll(e, t, a, i) {
      {
        if (!Ct(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return vn(a, t), l === "" + a ? a : l;
      }
    }
    function ai(e, t, a, i) {
      var l = An(t);
      if (!Kt(t, l, i)) {
        if (gt(t, a, l, i) && (a = null), i || l === null) {
          if (Ct(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (vn(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var g = l.propertyName;
          if (a === null) {
            var E = l.type;
            e[g] = E === an ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var w = l.attributeName, k = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(w);
        else {
          var j = l.type, P;
          j === an || j === Cn && a === !0 ? P = "" : (vn(a, w), P = "" + a, l.sanitizeURL && Ml(P.toString())), k ? e.setAttributeNS(k, w, P) : e.setAttribute(w, P);
        }
      }
    }
    var Xi = Symbol.for("react.element"), ua = Symbol.for("react.portal"), Ya = Symbol.for("react.fragment"), qi = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), be = Symbol.for("react.context"), qe = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), tr = Symbol.for("react.scope"), mn = Symbol.for("react.debug_trace_mode"), yn = Symbol.for("react.offscreen"), zr = Symbol.for("react.legacy_hidden"), Zi = Symbol.for("react.cache"), qs = Symbol.for("react.tracing_marker"), $t = Symbol.iterator, qy = "@@iterator";
    function Si(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = $t && e[$t] || e[qy];
      return typeof t == "function" ? t : null;
    }
    var xt = Object.assign, Ji = 0, _v, Jf, Pu, Wa, Ov, Ea, Mv;
    function Lv() {
    }
    Lv.__reactDisabledLog = !0;
    function Zy() {
      {
        if (Ji === 0) {
          _v = console.log, Jf = console.info, Pu = console.warn, Wa = console.error, Ov = console.group, Ea = console.groupCollapsed, Mv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Lv,
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
        Ji++;
      }
    }
    function Zs() {
      {
        if (Ji--, Ji === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xt({}, e, {
              value: _v
            }),
            info: xt({}, e, {
              value: Jf
            }),
            warn: xt({}, e, {
              value: Pu
            }),
            error: xt({}, e, {
              value: Wa
            }),
            group: xt({}, e, {
              value: Ov
            }),
            groupCollapsed: xt({}, e, {
              value: Ea
            }),
            groupEnd: xt({}, e, {
              value: Mv
            })
          });
        }
        Ji < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Al = f.ReactCurrentDispatcher, jo;
    function Ga(e, t, a) {
      {
        if (jo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            jo = i && i[1] || "";
          }
        return `
` + jo + e;
      }
    }
    var ed = !1, Js;
    {
      var td = typeof WeakMap == "function" ? WeakMap : Map;
      Js = new td();
    }
    function ec(e, t) {
      if (!e || ed)
        return "";
      {
        var a = Js.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ed = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Al.current, Al.current = null, Zy();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (q) {
              i = q;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (q) {
              i = q;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            i = q;
          }
          e();
        }
      } catch (q) {
        if (q && i && typeof q.stack == "string") {
          for (var g = q.stack.split(`
`), E = i.stack.split(`
`), w = g.length - 1, k = E.length - 1; w >= 1 && k >= 0 && g[w] !== E[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (g[w] !== E[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || g[w] !== E[k]) {
                    var j = `
` + g[w].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Js.set(e, j), j;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        ed = !1, Al.current = c, Zs(), Error.prepareStackTrace = l;
      }
      var P = e ? e.displayName || e.name : "", X = P ? Ga(P) : "";
      return typeof e == "function" && Js.set(e, X), X;
    }
    function nd(e, t, a) {
      return ec(e, !0);
    }
    function Ho(e, t, a) {
      return ec(e, !1);
    }
    function Jy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Fu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ec(e, Jy(e));
      if (typeof e == "string")
        return Ga(e);
      switch (e) {
        case mt:
          return Ga("Suspense");
        case Lt:
          return Ga("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qe:
            return Ho(e.render);
          case yt:
            return Fu(e.type, t, a);
          case Je: {
            var i = e, l = i._payload, c = i._init;
            try {
              return Fu(c(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case L:
          return Ga(e.type);
        case se:
          return Ga("Lazy");
        case B:
          return Ga("Suspense");
        case Ae:
          return Ga("SuspenseList");
        case T:
        case M:
        case ae:
          return Ho(e.type);
        case V:
          return Ho(e.type.render);
        case R:
          return nd(e.type);
        default:
          return "";
      }
    }
    function rd(e) {
      try {
        var t = "", a = e;
        do
          t += Gt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Av(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function tc(e) {
      return e.displayName || "Context";
    }
    function Jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ya:
          return "Fragment";
        case ua:
          return "Portal";
        case A:
          return "Profiler";
        case qi:
          return "StrictMode";
        case mt:
          return "Suspense";
        case Lt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case be:
            var t = e;
            return tc(t) + ".Consumer";
          case le:
            var a = e;
            return tc(a._context) + ".Provider";
          case qe:
            return Av(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : Jt(e.type) || "Memo";
          case Je: {
            var l = e, c = l._payload, v = l._init;
            try {
              return Jt(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function $v(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ad(e) {
      return e.displayName || "Context";
    }
    function ft(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case z:
          var i = a;
          return ad(i) + ".Consumer";
        case Q:
          var l = a;
          return ad(l._context) + ".Provider";
        case Te:
          return "DehydratedFragment";
        case V:
          return $v(a, a.render, "ForwardRef");
        case O:
          return "Fragment";
        case L:
          return a;
        case _:
          return "Portal";
        case D:
          return "Root";
        case U:
          return "Text";
        case se:
          return Jt(a);
        case H:
          return a === qi ? "StrictMode" : "Mode";
        case ke:
          return "Offscreen";
        case G:
          return "Profiler";
        case je:
          return "Scope";
        case B:
          return "Suspense";
        case Ae:
          return "SuspenseList";
        case lt:
          return "TracingMarker";
        case R:
        case T:
        case ve:
        case M:
        case ue:
        case ae:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ju = f.ReactDebugCurrentFrame, jn = null, Ca = !1;
    function xa() {
      {
        if (jn === null)
          return null;
        var e = jn._debugOwner;
        if (e !== null && typeof e < "u")
          return ft(e);
      }
      return null;
    }
    function Hu() {
      return jn === null ? "" : rd(jn);
    }
    function Wn() {
      ju.getCurrentStack = null, jn = null, Ca = !1;
    }
    function Xt(e) {
      ju.getCurrentStack = e === null ? null : Hu, jn = e, Ca = !1;
    }
    function eg() {
      return jn;
    }
    function Qa(e) {
      Ca = e;
    }
    function Rr(e) {
      return "" + e;
    }
    function eo(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return En(e), e;
        default:
          return "";
      }
    }
    var zv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $l(e, t) {
      zv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function id(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Uv(e) {
      return e._valueTracker;
    }
    function Vu(e) {
      e._valueTracker = null;
    }
    function Iu(e) {
      var t = "";
      return e && (id(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function zl(e) {
      var t = id(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      En(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(g) {
            En(g), i = "" + g, c.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(g) {
            En(g), i = "" + g;
          },
          stopTracking: function() {
            Vu(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Vo(e) {
      Uv(e) || (e._valueTracker = zl(e));
    }
    function Pv(e) {
      if (!e)
        return !1;
      var t = Uv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Iu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function nc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var rc = !1, Bu = !1, ac = !1, od = !1;
    function bi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Yu(e, t) {
      var a = e, i = t.checked, l = xt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function Wu(e, t) {
      $l("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Bu && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", xa() || "A component", t.type), Bu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !rc && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", xa() || "A component", t.type), rc = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: eo(t.value != null ? t.value : i),
        controlled: bi(t)
      };
    }
    function ld(e, t) {
      var a = e, i = t.checked;
      i != null && ai(a, "checked", i, !1);
    }
    function Ul(e, t) {
      var a = e;
      {
        var i = bi(t);
        !a._wrapperState.controlled && i && !od && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), od = !0), a._wrapperState.controlled && !i && !ac && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ac = !0);
      }
      ld(e, t);
      var l = eo(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Rr(l)) : a.value !== Rr(l) && (a.value = Rr(l));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? to(a, t.type, l) : t.hasOwnProperty("defaultValue") && to(a, t.type, eo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Gu(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = Rr(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var g = i.name;
      g !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, g !== "" && (i.name = g);
    }
    function Fv(e, t) {
      var a = e;
      Ul(a, t), sa(a, t);
    }
    function sa(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        vn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var v = l[c];
          if (!(v === e || v.form !== e.form)) {
            var g = hm(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Pv(v), Ul(v, g);
          }
        }
      }
    }
    function to(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || nc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Rr(e._wrapperState.initialValue) : e.defaultValue !== Rr(a) && (e.defaultValue = Rr(a)));
    }
    var ic = !1, Pl = !1, jv = !1;
    function oc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pl || (Pl = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (jv || (jv = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ic && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ic = !0);
    }
    function ud(e, t) {
      t.value != null && e.setAttribute("value", Rr(eo(t.value)));
    }
    var Qu = Array.isArray;
    function nr(e) {
      return Qu(e);
    }
    var lc;
    lc = !1;
    function Hv() {
      var e = xa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vv = ["value", "defaultValue"];
    function tg(e) {
      {
        $l("select", e);
        for (var t = 0; t < Vv.length; t++) {
          var a = Vv[t];
          if (e[a] != null) {
            var i = nr(e[a]);
            e.multiple && !i ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Hv()) : !e.multiple && i && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Hv());
          }
        }
      }
    }
    function no(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var c = a, v = {}, g = 0; g < c.length; g++)
          v["$" + c[g]] = !0;
        for (var E = 0; E < l.length; E++) {
          var w = v.hasOwnProperty("$" + l[E].value);
          l[E].selected !== w && (l[E].selected = w), w && i && (l[E].defaultSelected = !0);
        }
      } else {
        for (var k = Rr(eo(a)), j = null, P = 0; P < l.length; P++) {
          if (l[P].value === k) {
            l[P].selected = !0, i && (l[P].defaultSelected = !0);
            return;
          }
          j === null && !l[P].disabled && (j = l[P]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function sd(e, t) {
      return xt({}, t, {
        value: void 0
      });
    }
    function Iv(e, t) {
      var a = e;
      tg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !lc && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), lc = !0);
    }
    function ng(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? no(a, !!t.multiple, i, !1) : t.defaultValue != null && no(a, !!t.multiple, t.defaultValue, !0);
    }
    function rg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? no(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? no(a, !!t.multiple, t.defaultValue, !0) : no(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ag(e, t) {
      var a = e, i = t.value;
      i != null && no(a, !!t.multiple, i, !1);
    }
    var cd = !1;
    function fd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = xt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Bv(e, t) {
      var a = e;
      $l("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cd && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", xa() || "A component"), cd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, c = t.defaultValue;
        if (l != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (nr(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            c = l;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: eo(i)
      };
    }
    function Yv(e, t) {
      var a = e, i = eo(t.value), l = eo(t.defaultValue);
      if (i != null) {
        var c = Rr(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      l != null && (a.defaultValue = Rr(l));
    }
    function Wv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function dd(e, t) {
      Yv(e, t);
    }
    var Ei = "http://www.w3.org/1999/xhtml", ig = "http://www.w3.org/1998/Math/MathML", pd = "http://www.w3.org/2000/svg";
    function uc(e) {
      switch (e) {
        case "svg":
          return pd;
        case "math":
          return ig;
        default:
          return Ei;
      }
    }
    function vd(e, t) {
      return e == null || e === Ei ? uc(t) : e === pd && t === "foreignObject" ? Ei : e;
    }
    var og = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, sc, Gv = og(function(e, t) {
      if (e.namespaceURI === pd && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Ci = 3, Hn = 8, Ka = 9, Io = 11, cc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ci) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Qv = {
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
    }, Fl = {
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
    function Kv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Fl).forEach(function(e) {
      Xv.forEach(function(t) {
        Fl[Kv(t, e)] = Fl[e];
      });
    });
    function fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Fl.hasOwnProperty(e) && Fl[e]) ? t + "px" : (pr(t, e), ("" + t).trim());
    }
    var jl = /([A-Z])/g, lg = /^ms-/;
    function ug(e) {
      return e.replace(jl, "-$1").toLowerCase().replace(lg, "-ms-");
    }
    var qv = function() {
    };
    {
      var Zv = /^(?:webkit|moz|o)[A-Z]/, Jv = /^-ms-/, Ku = /-(.)/g, Hl = /;\s*$/, Vl = {}, Il = {}, eh = !1, hd = !1, md = function(e) {
        return e.replace(Ku, function(t, a) {
          return a.toUpperCase();
        });
      }, yd = function(e) {
        Vl.hasOwnProperty(e) && Vl[e] || (Vl[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          md(e.replace(Jv, "ms-"))
        ));
      }, th = function(e) {
        Vl.hasOwnProperty(e) && Vl[e] || (Vl[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, nh = function(e, t) {
        Il.hasOwnProperty(t) && Il[t] || (Il[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Hl, "")));
      }, rh = function(e, t) {
        eh || (eh = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, sg = function(e, t) {
        hd || (hd = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      qv = function(e, t) {
        e.indexOf("-") > -1 ? yd(e) : Zv.test(e) ? th(e) : Hl.test(t) && nh(e, t), typeof t == "number" && (isNaN(t) ? rh(e, t) : isFinite(t) || sg(e, t));
      };
    }
    var cg = qv;
    function fg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : ug(i)) + ":", t += fc(i, l, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function ah(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || cg(i, t[i]);
          var c = fc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function dg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function wa(e) {
      var t = {};
      for (var a in e)
        for (var i = Qv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Xu(e, t) {
      {
        if (!t)
          return;
        var a = wa(e), i = wa(t), l = {};
        for (var c in a) {
          var v = a[c], g = i[c];
          if (g && v !== g) {
            var E = v + "," + g;
            if (l[E])
              continue;
            l[E] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", dg(e[v]) ? "Removing" : "Updating", v, g);
          }
        }
      }
    }
    var ih = {
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
    }, oh = xt({
      menuitem: !0
    }, ih), lh = "__html";
    function dc(e, t) {
      if (t) {
        if (oh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(lh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function xi(e, t) {
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
    var pc = {
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
    }, uh = {
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
    }, Xa = {}, gd = new RegExp("^(aria)-[" + ye + "]*$"), qu = new RegExp("^(aria)[A-Z][" + ye + "]*$");
    function Sd(e, t) {
      {
        if (ht.call(Xa, t) && Xa[t])
          return !0;
        if (qu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = uh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xa[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xa[t] = !0, !0;
        }
        if (gd.test(t)) {
          var l = t.toLowerCase(), c = uh.hasOwnProperty(l) ? l : null;
          if (c == null)
            return Xa[t] = !0, !1;
          if (t !== c)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Xa[t] = !0, !0;
        }
      }
      return !0;
    }
    function sh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Sd(e, i);
          l || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function vc(e, t) {
      xi(e, t) || sh(e, t);
    }
    var Bo = !1;
    function bd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Bo && (Bo = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ed = function() {
    };
    {
      var rr = {}, Cd = /^on./, ch = /^on[^A-Z]/, fh = new RegExp("^(aria)-[" + ye + "]*$"), dh = new RegExp("^(aria)[A-Z][" + ye + "]*$");
      Ed = function(e, t, a, i) {
        if (ht.call(rr, t) && rr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), rr[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(l) ? v[l] : null;
          if (g != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, g), rr[t] = !0, !0;
          if (Cd.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), rr[t] = !0, !0;
        } else if (Cd.test(t))
          return ch.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), rr[t] = !0, !0;
        if (fh.test(t) || dh.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), rr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), rr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), rr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), rr[t] = !0, !0;
        var E = An(t), w = E !== null && E.type === $r;
        if (pc.hasOwnProperty(l)) {
          var k = pc[l];
          if (k !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, k), rr[t] = !0, !0;
        } else if (!w && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), rr[t] = !0, !0;
        return typeof a == "boolean" && hn(t, a, E, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), rr[t] = !0, !0) : w ? !0 : hn(t, a, E, !1) ? (rr[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === an && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), rr[t] = !0), !0);
      };
    }
    var ph = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var c = Ed(e, l, t[l], a);
          c || i.push(l);
        }
        var v = i.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function vh(e, t, a) {
      xi(e, t) || ph(e, t, a);
    }
    var wi = 1, Zu = 2, Yo = 4, pg = wi | Zu | Yo, Ju = null;
    function es(e) {
      Ju !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ju = e;
    }
    function vg() {
      Ju === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ju = null;
    }
    function hh(e) {
      return e === Ju;
    }
    function hc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ci ? t.parentNode : t;
    }
    var en = null, ro = null, Ti = null;
    function Bl(e) {
      var t = mu(e);
      if (t) {
        if (typeof en != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = hm(a);
          en(t.stateNode, t.type, i);
        }
      }
    }
    function mh(e) {
      en = e;
    }
    function mc(e) {
      ro ? Ti ? Ti.push(e) : Ti = [e] : ro = e;
    }
    function ts() {
      return ro !== null || Ti !== null;
    }
    function ns() {
      if (ro) {
        var e = ro, t = Ti;
        if (ro = null, Ti = null, Bl(e), t)
          for (var a = 0; a < t.length; a++)
            Bl(t[a]);
      }
    }
    var Wo = function(e, t) {
      return e(t);
    }, xd = function() {
    }, wd = !1;
    function hg() {
      var e = ts();
      e && (xd(), ns());
    }
    function Td(e, t, a) {
      if (wd)
        return e(t, a);
      wd = !0;
      try {
        return Wo(e, t, a);
      } finally {
        wd = !1, hg();
      }
    }
    function yc(e, t, a) {
      Wo = e, xd = a;
    }
    function gc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Rd(e, t, a) {
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
          return !!(a.disabled && gc(t));
        default:
          return !1;
      }
    }
    function Go(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = hm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Rd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var rs = !1;
    if (nt)
      try {
        var Qo = {};
        Object.defineProperty(Qo, "passive", {
          get: function() {
            rs = !0;
          }
        }), window.addEventListener("test", Qo, Qo), window.removeEventListener("test", Qo, Qo);
      } catch {
        rs = !1;
      }
    function yh(e, t, a, i, l, c, v, g, E) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, w);
      } catch (k) {
        this.onError(k);
      }
    }
    var Dd = yh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var kd = document.createElement("react");
      Dd = function(t, a, i, l, c, v, g, E, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var k = document.createEvent("Event"), j = !1, P = !0, X = window.event, q = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          kd.removeEventListener(ee, Ke, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = X);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function Ke() {
          j = !0, J(), a.apply(i, _e), P = !1;
        }
        var Ye, Nt = !1, Tt = !1;
        function Y(W) {
          if (Ye = W.error, Nt = !0, Ye === null && W.colno === 0 && W.lineno === 0 && (Tt = !0), W.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var ee = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), kd.addEventListener(ee, Ke, !1), k.initEvent(ee, !1, !1), kd.dispatchEvent(k), q && Object.defineProperty(window, "event", q), j && P && (Nt ? Tt && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", Y), !j)
          return J(), yh.apply(this, arguments);
      };
    }
    var mg = Dd, ao = !1, qa = null, as = !1, io = null, ii = {
      onError: function(e) {
        ao = !0, qa = e;
      }
    };
    function Ko(e, t, a, i, l, c, v, g, E) {
      ao = !1, qa = null, mg.apply(ii, arguments);
    }
    function Ri(e, t, a, i, l, c, v, g, E) {
      if (Ko.apply(this, arguments), ao) {
        var w = _d();
        as || (as = !0, io = w);
      }
    }
    function Nd() {
      if (as) {
        var e = io;
        throw as = !1, io = null, e;
      }
    }
    function yg() {
      return ao;
    }
    function _d() {
      if (ao) {
        var e = qa;
        return ao = !1, qa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ta(e) {
      return e._reactInternals;
    }
    function is(e) {
      return e._reactInternals !== void 0;
    }
    function Yl(e, t) {
      e._reactInternals = t;
    }
    var Qe = (
      /*                      */
      0
    ), oo = (
      /*                */
      1
    ), ln = (
      /*                    */
      2
    ), pt = (
      /*                       */
      4
    ), Ft = (
      /*                */
      16
    ), Bt = (
      /*                 */
      32
    ), oi = (
      /*                     */
      64
    ), at = (
      /*                   */
      128
    ), Nn = (
      /*            */
      256
    ), Kr = (
      /*                          */
      512
    ), Ra = (
      /*                     */
      1024
    ), gn = (
      /*                      */
      2048
    ), Da = (
      /*                    */
      4096
    ), lo = (
      /*                   */
      8192
    ), os = (
      /*             */
      16384
    ), Sc = gn | pt | oi | Kr | Ra | os, gh = (
      /*               */
      32767
    ), ca = (
      /*                   */
      32768
    ), ar = (
      /*                */
      65536
    ), ls = (
      /* */
      131072
    ), Od = (
      /*                       */
      1048576
    ), Md = (
      /*                    */
      2097152
    ), Xr = (
      /*                 */
      4194304
    ), uo = (
      /*                */
      8388608
    ), qr = (
      /*               */
      16777216
    ), Xo = (
      /*              */
      33554432
    ), Wl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      pt | Ra | 0
    ), Zr = ln | pt | Ft | Bt | Kr | Da | lo, Dr = pt | oi | Kr | lo, ka = gn | Ft, vr = Xr | uo | Md, Di = f.ReactCurrentOwner;
    function fa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ln | Da)) !== Qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === D ? a : null;
    }
    function Ld(e) {
      if (e.tag === B) {
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
    function bc(e) {
      return e.tag === D ? e.stateNode.containerInfo : null;
    }
    function Ad(e) {
      return fa(e) === e;
    }
    function da(e) {
      {
        var t = Di.current;
        if (t !== null && t.tag === R) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ta(e);
      return l ? fa(l) === l : !1;
    }
    function Jr(e) {
      if (fa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function un(e) {
      var t = e.alternate;
      if (!t) {
        var a = fa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var g = c.return;
          if (g !== null) {
            i = l = g;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var E = c.child; E; ) {
            if (E === i)
              return Jr(c), e;
            if (E === l)
              return Jr(c), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = c, l = v;
        else {
          for (var w = !1, k = c.child; k; ) {
            if (k === i) {
              w = !0, i = c, l = v;
              break;
            }
            if (k === l) {
              w = !0, l = c, i = v;
              break;
            }
            k = k.sibling;
          }
          if (!w) {
            for (k = v.child; k; ) {
              if (k === i) {
                w = !0, i = v, l = c;
                break;
              }
              if (k === l) {
                w = !0, l = v, i = c;
                break;
              }
              k = k.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== D)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Na(e) {
      var t = un(e);
      return t !== null ? $d(t) : null;
    }
    function $d(e) {
      if (e.tag === L || e.tag === U)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = $d(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Sh(e) {
      var t = un(e);
      return t !== null ? Ec(t) : null;
    }
    function Ec(e) {
      if (e.tag === L || e.tag === U)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== _) {
          var a = Ec(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Cc = d.unstable_scheduleCallback, bh = d.unstable_cancelCallback, xc = d.unstable_shouldYield, Eh = d.unstable_requestPaint, xn = d.unstable_now, zd = d.unstable_getCurrentPriorityLevel, wc = d.unstable_ImmediatePriority, pa = d.unstable_UserBlockingPriority, li = d.unstable_NormalPriority, Tc = d.unstable_LowPriority, so = d.unstable_IdlePriority, Ud = d.unstable_yieldValue, Pd = d.unstable_setDisableYieldValue, co = null, ir = null, ge = null, $n = !1, hr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Fd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Yn && (e = xt({}, e, {
          getLaneLabelMap: po,
          injectProfilingHooks: Ni
        })), co = t.inject(e), ir = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ch(e, t) {
      if (ir && typeof ir.onScheduleFiberRoot == "function")
        try {
          ir.onScheduleFiberRoot(co, e, t);
        } catch (a) {
          $n || ($n = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function ki(e, t) {
      if (ir && typeof ir.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & at) === at;
          if (Ee) {
            var i;
            switch (t) {
              case kr:
                i = wc;
                break;
              case mr:
                i = pa;
                break;
              case Oi:
                i = li;
                break;
              case ms:
                i = so;
                break;
              default:
                i = li;
                break;
            }
            ir.onCommitFiberRoot(co, e, i, a);
          }
        } catch (l) {
          $n || ($n = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function fo(e) {
      if (ir && typeof ir.onPostCommitFiberRoot == "function")
        try {
          ir.onPostCommitFiberRoot(co, e);
        } catch (t) {
          $n || ($n = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function jd(e) {
      if (ir && typeof ir.onCommitFiberUnmount == "function")
        try {
          ir.onCommitFiberUnmount(co, e);
        } catch (t) {
          $n || ($n = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Gn(e) {
      if (typeof Ud == "function" && (Pd(e), S(e)), ir && typeof ir.setStrictMode == "function")
        try {
          ir.setStrictMode(co, e);
        } catch (t) {
          $n || ($n = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Ni(e) {
      ge = e;
    }
    function po() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < sn; a++) {
          var i = gg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Rc(e) {
      ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(e);
    }
    function Hd() {
      ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
    }
    function vo(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function qo() {
      ge !== null && typeof ge.markComponentRenderStopped == "function" && ge.markComponentRenderStopped();
    }
    function xh(e) {
      ge !== null && typeof ge.markComponentPassiveEffectMountStarted == "function" && ge.markComponentPassiveEffectMountStarted(e);
    }
    function Vd() {
      ge !== null && typeof ge.markComponentPassiveEffectMountStopped == "function" && ge.markComponentPassiveEffectMountStopped();
    }
    function Dc(e) {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStarted == "function" && ge.markComponentPassiveEffectUnmountStarted(e);
    }
    function wh() {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStopped == "function" && ge.markComponentPassiveEffectUnmountStopped();
    }
    function Th(e) {
      ge !== null && typeof ge.markComponentLayoutEffectMountStarted == "function" && ge.markComponentLayoutEffectMountStarted(e);
    }
    function Rh() {
      ge !== null && typeof ge.markComponentLayoutEffectMountStopped == "function" && ge.markComponentLayoutEffectMountStopped();
    }
    function kc(e) {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStarted == "function" && ge.markComponentLayoutEffectUnmountStarted(e);
    }
    function Gl() {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStopped == "function" && ge.markComponentLayoutEffectUnmountStopped();
    }
    function Nc(e, t, a) {
      ge !== null && typeof ge.markComponentErrored == "function" && ge.markComponentErrored(e, t, a);
    }
    function Dh(e, t, a) {
      ge !== null && typeof ge.markComponentSuspended == "function" && ge.markComponentSuspended(e, t, a);
    }
    function kh(e) {
      ge !== null && typeof ge.markLayoutEffectsStarted == "function" && ge.markLayoutEffectsStarted(e);
    }
    function Ql() {
      ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
    }
    function Nh(e) {
      ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(e);
    }
    function us() {
      ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped();
    }
    function Za(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function ss() {
      ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
    }
    function Kl() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function Zo(e) {
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
    }
    function Id(e, t) {
      ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, t);
    }
    function ho(e, t) {
      ge !== null && typeof ge.markStateUpdateScheduled == "function" && ge.markStateUpdateScheduled(e, t);
    }
    var Ze = (
      /*                         */
      0
    ), St = (
      /*                 */
      1
    ), et = (
      /*                    */
      2
    ), wn = (
      /*               */
      8
    ), _a = (
      /*              */
      16
    ), _c = Math.clz32 ? Math.clz32 : Jo, Oc = Math.log, Bd = Math.LN2;
    function Jo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Oc(t) / Bd | 0) | 0;
    }
    var sn = 31, te = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), tt = (
      /*                        */
      1
    ), ui = (
      /*    */
      2
    ), va = (
      /*             */
      4
    ), el = (
      /*            */
      8
    ), cn = (
      /*                     */
      16
    ), tl = (
      /*                */
      32
    ), mo = (
      /*                       */
      4194240
    ), nl = (
      /*                        */
      64
    ), Oa = (
      /*                        */
      128
    ), ea = (
      /*                        */
      256
    ), rl = (
      /*                        */
      512
    ), cs = (
      /*                        */
      1024
    ), fs = (
      /*                        */
      2048
    ), Mc = (
      /*                        */
      4096
    ), Lc = (
      /*                        */
      8192
    ), Ac = (
      /*                        */
      16384
    ), $c = (
      /*                       */
      32768
    ), zc = (
      /*                       */
      65536
    ), Uc = (
      /*                       */
      131072
    ), Pc = (
      /*                       */
      262144
    ), Fc = (
      /*                       */
      524288
    ), al = (
      /*                       */
      1048576
    ), jc = (
      /*                       */
      2097152
    ), il = (
      /*                            */
      130023424
    ), _i = (
      /*                             */
      4194304
    ), Hc = (
      /*                             */
      8388608
    ), ds = (
      /*                             */
      16777216
    ), Vc = (
      /*                             */
      33554432
    ), Ic = (
      /*                             */
      67108864
    ), Yd = _i, Xl = (
      /*          */
      134217728
    ), Bc = (
      /*                          */
      268435455
    ), ql = (
      /*               */
      268435456
    ), yo = (
      /*                        */
      536870912
    ), ta = (
      /*                   */
      1073741824
    );
    function gg(e) {
      {
        if (e & tt)
          return "Sync";
        if (e & ui)
          return "InputContinuousHydration";
        if (e & va)
          return "InputContinuous";
        if (e & el)
          return "DefaultHydration";
        if (e & cn)
          return "Default";
        if (e & tl)
          return "TransitionHydration";
        if (e & mo)
          return "Transition";
        if (e & il)
          return "Retry";
        if (e & Xl)
          return "SelectiveHydration";
        if (e & ql)
          return "IdleHydration";
        if (e & yo)
          return "Idle";
        if (e & ta)
          return "Offscreen";
      }
    }
    var tn = -1, Yc = nl, Wc = _i;
    function Zl(e) {
      switch (Vn(e)) {
        case tt:
          return tt;
        case ui:
          return ui;
        case va:
          return va;
        case el:
          return el;
        case cn:
          return cn;
        case tl:
          return tl;
        case nl:
        case Oa:
        case ea:
        case rl:
        case cs:
        case fs:
        case Mc:
        case Lc:
        case Ac:
        case $c:
        case zc:
        case Uc:
        case Pc:
        case Fc:
        case al:
        case jc:
          return e & mo;
        case _i:
        case Hc:
        case ds:
        case Vc:
        case Ic:
          return e & il;
        case Xl:
          return Xl;
        case ql:
          return ql;
        case yo:
          return yo;
        case ta:
          return ta;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ps(e, t) {
      var a = e.pendingLanes;
      if (a === te)
        return te;
      var i = te, l = e.suspendedLanes, c = e.pingedLanes, v = a & Bc;
      if (v !== te) {
        var g = v & ~l;
        if (g !== te)
          i = Zl(g);
        else {
          var E = v & c;
          E !== te && (i = Zl(E));
        }
      } else {
        var w = a & ~l;
        w !== te ? i = Zl(w) : c !== te && (i = Zl(c));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === te) {
        var k = Vn(i), j = Vn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          k >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          k === cn && (j & mo) !== te
        )
          return t;
      }
      (i & va) !== te && (i |= a & cn);
      var P = e.entangledLanes;
      if (P !== te)
        for (var X = e.entanglements, q = i & P; q > 0; ) {
          var J = go(q), _e = 1 << J;
          i |= X[J], q &= ~_e;
        }
      return i;
    }
    function _h(e, t) {
      for (var a = e.eventTimes, i = tn; t > 0; ) {
        var l = go(t), c = 1 << l, v = a[l];
        v > i && (i = v), t &= ~c;
      }
      return i;
    }
    function Gc(e, t) {
      switch (e) {
        case tt:
        case ui:
        case va:
          return t + 250;
        case el:
        case cn:
        case tl:
        case nl:
        case Oa:
        case ea:
        case rl:
        case cs:
        case fs:
        case Mc:
        case Lc:
        case Ac:
        case $c:
        case zc:
        case Uc:
        case Pc:
        case Fc:
        case al:
        case jc:
          return t + 5e3;
        case _i:
        case Hc:
        case ds:
        case Vc:
        case Ic:
          return tn;
        case Xl:
        case ql:
        case yo:
        case ta:
          return tn;
        default:
          return h("Should have found matching lanes. This is a bug in React."), tn;
      }
    }
    function Sg(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, v = a; v > 0; ) {
        var g = go(v), E = 1 << g, w = c[g];
        w === tn ? ((E & i) === te || (E & l) !== te) && (c[g] = Gc(E, t)) : w <= t && (e.expiredLanes |= E), v &= ~E;
      }
    }
    function bg(e) {
      return Zl(e.pendingLanes);
    }
    function Wd(e) {
      var t = e.pendingLanes & ~ta;
      return t !== te ? t : t & ta ? ta : te;
    }
    function Jl(e) {
      return (e & tt) !== te;
    }
    function vs(e) {
      return (e & Bc) !== te;
    }
    function Qc(e) {
      return (e & il) === e;
    }
    function Eg(e) {
      var t = tt | va | cn;
      return (e & t) === te;
    }
    function Oh(e) {
      return (e & mo) === e;
    }
    function hs(e, t) {
      var a = ui | va | el | cn;
      return (t & a) !== te;
    }
    function Mh(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function Gd(e) {
      return (e & mo) !== te;
    }
    function Qd() {
      var e = Yc;
      return Yc <<= 1, (Yc & mo) === te && (Yc = nl), e;
    }
    function Cg() {
      var e = Wc;
      return Wc <<= 1, (Wc & il) === te && (Wc = _i), e;
    }
    function Vn(e) {
      return e & -e;
    }
    function Qn(e) {
      return Vn(e);
    }
    function go(e) {
      return 31 - _c(e);
    }
    function Kc(e) {
      return go(e);
    }
    function na(e, t) {
      return (e & t) !== te;
    }
    function ol(e, t) {
      return (e & t) === t;
    }
    function vt(e, t) {
      return e | t;
    }
    function eu(e, t) {
      return e & ~t;
    }
    function Kd(e, t) {
      return e & t;
    }
    function Lh(e) {
      return e;
    }
    function Ah(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < sn; a++)
        t.push(e);
      return t;
    }
    function ll(e, t, a) {
      e.pendingLanes |= t, t !== yo && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, l = Kc(t);
      i[l] = a;
    }
    function Xd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = go(i), c = 1 << l;
        a[l] = tn, i &= ~c;
      }
    }
    function qd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, c = e.expirationTimes, v = a; v > 0; ) {
        var g = go(v), E = 1 << g;
        i[g] = te, l[g] = tn, c[g] = tn, v &= ~E;
      }
    }
    function tu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var c = go(l), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), l &= ~v;
      }
    }
    function xg(e, t) {
      var a = Vn(t), i;
      switch (a) {
        case va:
          i = ui;
          break;
        case cn:
          i = el;
          break;
        case nl:
        case Oa:
        case ea:
        case rl:
        case cs:
        case fs:
        case Mc:
        case Lc:
        case Ac:
        case $c:
        case zc:
        case Uc:
        case Pc:
        case Fc:
        case al:
        case jc:
        case _i:
        case Hc:
        case ds:
        case Vc:
        case Ic:
          i = tl;
          break;
        case yo:
          i = ql;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function Jd(e, t, a) {
      if (hr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Kc(a), c = 1 << l, v = i[l];
          v.add(t), a &= ~c;
        }
    }
    function qc(e, t) {
      if (hr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Kc(t), c = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(g) {
            var E = g.alternate;
            (E === null || !i.has(E)) && i.add(g);
          }), v.clear()), t &= ~c;
        }
    }
    function ep(e, t) {
      return null;
    }
    var kr = tt, mr = va, Oi = cn, ms = yo, ul = Dt;
    function Ma() {
      return ul;
    }
    function Kn(e) {
      ul = e;
    }
    function ys(e, t) {
      var a = ul;
      try {
        return ul = e, t();
      } finally {
        ul = a;
      }
    }
    function Nr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function wg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function tp(e, t) {
      return e !== 0 && e < t;
    }
    function gs(e) {
      var t = Vn(e);
      return tp(kr, t) ? tp(mr, t) ? vs(t) ? Oi : ms : mr : kr;
    }
    function Xn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var $h;
    function $e(e) {
      $h = e;
    }
    function nu(e) {
      $h(e);
    }
    var Ss;
    function zh(e) {
      Ss = e;
    }
    var Uh;
    function bs(e) {
      Uh = e;
    }
    var Es;
    function np(e) {
      Es = e;
    }
    var rp;
    function Ph(e) {
      rp = e;
    }
    var Zc = !1, ru = [], si = null, Sn = null, or = null, La = /* @__PURE__ */ new Map(), au = /* @__PURE__ */ new Map(), Mi = [], Ja = [
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
    function Fh(e) {
      return Ja.indexOf(e) > -1;
    }
    function ci(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function jh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          si = null;
          break;
        case "dragenter":
        case "dragleave":
          Sn = null;
          break;
        case "mouseover":
        case "mouseout":
          or = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          La.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          au.delete(i);
          break;
        }
      }
    }
    function iu(e, t, a, i, l, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = ci(t, a, i, l, c);
        if (t !== null) {
          var g = mu(t);
          g !== null && Ss(g);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return l !== null && E.indexOf(l) === -1 && E.push(l), e;
    }
    function Hh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var c = l;
          return si = iu(si, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var v = l;
          return Sn = iu(Sn, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var g = l;
          return or = iu(or, e, t, a, i, g), !0;
        }
        case "pointerover": {
          var E = l, w = E.pointerId;
          return La.set(w, iu(La.get(w) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var k = l, j = k.pointerId;
          return au.set(j, iu(au.get(j) || null, e, t, a, i, k)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = _s(e.target);
      if (t !== null) {
        var a = fa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === B) {
            var l = Ld(a);
            if (l !== null) {
              e.blockedOn = l, rp(e.priority, function() {
                Uh(a);
              });
              return;
            }
          } else if (i === D) {
            var c = a.stateNode;
            if (Xn(c)) {
              e.blockedOn = bc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Vh(e) {
      for (var t = Es(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mi.length && tp(t, Mi[i].priority); i++)
        ;
      Mi.splice(i, 0, a), i === 0 && ap(a);
    }
    function Jc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = sl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, c = new l.constructor(l.type, l);
          es(c), l.target.dispatchEvent(c), vg();
        } else {
          var v = mu(i);
          return v !== null && Ss(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Cs(e, t, a) {
      Jc(e) && a.delete(t);
    }
    function ip() {
      Zc = !1, si !== null && Jc(si) && (si = null), Sn !== null && Jc(Sn) && (Sn = null), or !== null && Jc(or) && (or = null), La.forEach(Cs), au.forEach(Cs);
    }
    function _r(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Zc || (Zc = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, ip)));
    }
    function wt(e) {
      if (ru.length > 0) {
        _r(ru[0], e);
        for (var t = 1; t < ru.length; t++) {
          var a = ru[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      si !== null && _r(si, e), Sn !== null && _r(Sn, e), or !== null && _r(or, e);
      var i = function(g) {
        return _r(g, e);
      };
      La.forEach(i), au.forEach(i);
      for (var l = 0; l < Mi.length; l++) {
        var c = Mi[l];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; Mi.length > 0; ) {
        var v = Mi[0];
        if (v.blockedOn !== null)
          break;
        ap(v), v.blockedOn === null && Mi.shift();
      }
    }
    var Tn = f.ReactCurrentBatchConfig, _n = !0;
    function lr(e) {
      _n = !!e;
    }
    function ha() {
      return _n;
    }
    function ou(e, t, a) {
      var i = Ur(t), l;
      switch (i) {
        case kr:
          l = qn;
          break;
        case mr:
          l = xs;
          break;
        case Oi:
        default:
          l = Li;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function qn(e, t, a, i) {
      var l = Ma(), c = Tn.transition;
      Tn.transition = null;
      try {
        Kn(kr), Li(e, t, a, i);
      } finally {
        Kn(l), Tn.transition = c;
      }
    }
    function xs(e, t, a, i) {
      var l = Ma(), c = Tn.transition;
      Tn.transition = null;
      try {
        Kn(mr), Li(e, t, a, i);
      } finally {
        Kn(l), Tn.transition = c;
      }
    }
    function Li(e, t, a, i) {
      _n && ef(e, t, a, i);
    }
    function ef(e, t, a, i) {
      var l = sl(e, t, a, i);
      if (l === null) {
        Bg(e, t, i, lu, a), jh(e, i);
        return;
      }
      if (Hh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (jh(e, i), t & Yo && Fh(e)) {
        for (; l !== null; ) {
          var c = mu(l);
          c !== null && nu(c);
          var v = sl(e, t, a, i);
          if (v === null && Bg(e, t, i, lu, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Bg(e, t, i, null, a);
    }
    var lu = null;
    function sl(e, t, a, i) {
      lu = null;
      var l = hc(i), c = _s(l);
      if (c !== null) {
        var v = fa(c);
        if (v === null)
          c = null;
        else {
          var g = v.tag;
          if (g === B) {
            var E = Ld(v);
            if (E !== null)
              return E;
            c = null;
          } else if (g === D) {
            var w = v.stateNode;
            if (Xn(w))
              return bc(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return lu = c, null;
    }
    function Ur(e) {
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
          return kr;
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
          return mr;
        case "message": {
          var t = zd();
          switch (t) {
            case wc:
              return kr;
            case pa:
              return mr;
            case li:
            case Tc:
              return Oi;
            case so:
              return ms;
            default:
              return Oi;
          }
        }
        default:
          return Oi;
      }
    }
    function op(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function uu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ai(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function tf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var cl = null, fi = null, So = null;
    function bo(e) {
      return cl = e, fi = rf(), !0;
    }
    function nf() {
      cl = null, fi = null, So = null;
    }
    function su() {
      if (So)
        return So;
      var e, t = fi, a = t.length, i, l = rf(), c = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[c - i]; i++)
        ;
      var g = i > 1 ? 1 - i : void 0;
      return So = l.slice(e, g), So;
    }
    function rf() {
      return "value" in cl ? cl.value : cl.textContent;
    }
    function fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function dl() {
      return !0;
    }
    function Or() {
      return !1;
    }
    function In(e) {
      function t(a, i, l, c, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var E = e[g];
            E ? this[g] = E(c) : this[g] = c[g];
          }
        var w = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return w ? this.isDefaultPrevented = dl : this.isDefaultPrevented = Or, this.isPropagationStopped = Or, this;
      }
      return xt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = dl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = dl);
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
        isPersistent: dl
      }), t;
    }
    var Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Lr = In(Mr), cu = xt({}, Mr, {
      view: 0,
      detail: 0
    }), lp = In(cu), ws, up, Aa;
    function Ih(e) {
      e !== Aa && (Aa && e.type === "mousemove" ? (ws = e.screenX - Aa.screenX, up = e.screenY - Aa.screenY) : (ws = 0, up = 0), Aa = e);
    }
    var fu = xt({}, cu, {
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
      getModifierState: lf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ih(e), ws);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : up;
      }
    }), Eo = In(fu), sp = xt({}, fu, {
      dataTransfer: 0
    }), pl = In(sp), Bh = xt({}, cu, {
      relatedTarget: 0
    }), af = In(Bh), cp = xt({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), of = In(cp), Tg = xt({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Rg = In(Tg), Yh = xt({}, Mr, {
      data: 0
    }), fp = In(Yh), vl = fp, Dg = {
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
    }, du = {
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
    function Wh(e) {
      if (e.key) {
        var t = Dg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? du[e.keyCode] || "Unidentified" : "";
    }
    var On = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function kg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = On[e];
      return i ? !!a[i] : !1;
    }
    function lf(e) {
      return kg;
    }
    var Ng = xt({}, cu, {
      key: Wh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), _g = In(Ng), Gh = xt({}, fu, {
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
    }), dp = In(Gh), Og = xt({}, cu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lf
    }), $a = In(Og), pp = xt({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mg = In(pp), Co = xt({}, fu, {
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
    }), uf = In(Co), hl = [9, 13, 27, 32], Ts = 229, Rs = nt && "CompositionEvent" in window, ml = null;
    nt && "documentMode" in document && (ml = document.documentMode);
    var Lg = nt && "TextEvent" in window && !ml, sf = nt && (!Rs || ml && ml > 8 && ml <= 11), Qh = 32, vp = String.fromCharCode(Qh);
    function Kh() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ds = !1;
    function cf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Xh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function hp(e, t) {
      return e === "keydown" && t.keyCode === Ts;
    }
    function qh(e, t) {
      switch (e) {
        case "keyup":
          return hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ts;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function mp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ff(e) {
      return e.locale === "ko";
    }
    var $i = !1;
    function yp(e, t, a, i, l) {
      var c, v;
      if (Rs ? c = Xh(t) : $i ? qh(t, i) && (c = "onCompositionEnd") : hp(t, i) && (c = "onCompositionStart"), !c)
        return null;
      sf && !ff(i) && (!$i && c === "onCompositionStart" ? $i = bo(l) : c === "onCompositionEnd" && $i && (v = su()));
      var g = nm(a, c);
      if (g.length > 0) {
        var E = new fp(c, t, null, i, l);
        if (e.push({
          event: E,
          listeners: g
        }), v)
          E.data = v;
        else {
          var w = mp(i);
          w !== null && (E.data = w);
        }
      }
    }
    function df(e, t) {
      switch (e) {
        case "compositionend":
          return mp(t);
        case "keypress":
          var a = t.which;
          return a !== Qh ? null : (Ds = !0, vp);
        case "textInput":
          var i = t.data;
          return i === vp && Ds ? null : i;
        default:
          return null;
      }
    }
    function Zh(e, t) {
      if ($i) {
        if (e === "compositionend" || !Rs && qh(e, t)) {
          var a = su();
          return nf(), $i = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!cf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !ff(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ag(e, t, a, i, l) {
      var c;
      if (Lg ? c = df(t, i) : c = Zh(t, i), !c)
        return null;
      var v = nm(a, "onBeforeInput");
      if (v.length > 0) {
        var g = new vl("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: g,
          listeners: v
        }), g.data = c;
      }
    }
    function pf(e, t, a, i, l, c, v) {
      yp(e, t, a, i, l), Ag(e, t, a, i, l);
    }
    var $g = {
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
    function pu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!$g[e.type] : t === "textarea";
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
    function zg(e) {
      if (!nt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function vf() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      mc(i);
      var l = nm(t, "onChange");
      if (l.length > 0) {
        var c = new Lr("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: l
        });
      }
    }
    var r = null, o = null;
    function s(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, o, e, hc(e)), Td(m, t);
    }
    function m(e) {
      L1(e, 0);
    }
    function C(e) {
      var t = bf(e);
      if (Pv(t))
        return e;
    }
    function N(e, t) {
      if (e === "change")
        return t;
    }
    var $ = !1;
    nt && ($ = zg("input") && (!document.documentMode || document.documentMode > 9));
    function Z(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", fe);
    }
    function oe() {
      r && (r.detachEvent("onpropertychange", fe), r = null, o = null);
    }
    function fe(e) {
      e.propertyName === "value" && C(o) && p(e);
    }
    function ie(e, t, a) {
      e === "focusin" ? (oe(), Z(t, a)) : e === "focusout" && oe();
    }
    function Re(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(o);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function He(e, t) {
      if (e === "click")
        return C(t);
    }
    function zn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function I(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || to(e, "number", e.value);
    }
    function F(e, t, a, i, l, c, v) {
      var g = a ? bf(a) : window, E, w;
      if (s(g) ? E = N : pu(g) ? $ ? E = zn : (E = Re, w = ie) : Ue(g) && (E = He), E) {
        var k = E(t, a);
        if (k) {
          n(e, k, i, l);
          return;
        }
      }
      w && w(t, g, a), t === "focusout" && I(g);
    }
    function K() {
      Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function he(e, t, a, i, l, c, v) {
      var g = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (g && !hh(i)) {
        var w = i.relatedTarget || i.fromElement;
        if (w && (_s(w) || Op(w)))
          return;
      }
      if (!(!E && !g)) {
        var k;
        if (l.window === l)
          k = l;
        else {
          var j = l.ownerDocument;
          j ? k = j.defaultView || j.parentWindow : k = window;
        }
        var P, X;
        if (E) {
          var q = i.relatedTarget || i.toElement;
          if (P = a, X = q ? _s(q) : null, X !== null) {
            var J = fa(X);
            (X !== J || X.tag !== L && X.tag !== U) && (X = null);
          }
        } else
          P = null, X = a;
        if (P !== X) {
          var _e = Eo, Ke = "onMouseLeave", Ye = "onMouseEnter", Nt = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = dp, Ke = "onPointerLeave", Ye = "onPointerEnter", Nt = "pointer");
          var Tt = P == null ? k : bf(P), Y = X == null ? k : bf(X), ee = new _e(Ke, Nt + "leave", P, i, l);
          ee.target = Tt, ee.relatedTarget = Y;
          var W = null, de = _s(l);
          if (de === a) {
            var Oe = new _e(Ye, Nt + "enter", X, i, l);
            Oe.target = Y, Oe.relatedTarget = Tt, W = Oe;
          }
          xR(e, ee, W, P, X);
        }
      }
    }
    function Ie(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Pe = typeof Object.is == "function" ? Object.is : Ie;
    function We(e, t) {
      if (Pe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!ht.call(t, c) || !Pe(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function it(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ur(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function At(e, t) {
      for (var a = it(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ci) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = it(ur(a));
      }
    }
    function xo(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, c = i.anchorOffset, v = i.focusNode, g = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return Ug(e, l, c, v, g);
    }
    function Ug(e, t, a, i, l) {
      var c = 0, v = -1, g = -1, E = 0, w = 0, k = e, j = null;
      e:
        for (; ; ) {
          for (var P = null; k === t && (a === 0 || k.nodeType === Ci) && (v = c + a), k === i && (l === 0 || k.nodeType === Ci) && (g = c + l), k.nodeType === Ci && (c += k.nodeValue.length), (P = k.firstChild) !== null; )
            j = k, k = P;
          for (; ; ) {
            if (k === e)
              break e;
            if (j === t && ++E === a && (v = c), j === i && ++w === l && (g = c), (P = k.nextSibling) !== null)
              break;
            k = j, j = k.parentNode;
          }
          k = P;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function aR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), g = t.end === void 0 ? v : Math.min(t.end, c);
        if (!l.extend && v > g) {
          var E = g;
          g = v, v = E;
        }
        var w = At(e, v), k = At(e, g);
        if (w && k) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === k.node && l.focusOffset === k.offset)
            return;
          var j = a.createRange();
          j.setStart(w.node, w.offset), l.removeAllRanges(), v > g ? (l.addRange(j), l.extend(k.node, k.offset)) : (j.setEnd(k.node, k.offset), l.addRange(j));
        }
      }
    }
    function E1(e) {
      return e && e.nodeType === Ci;
    }
    function C1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : E1(e) ? !1 : E1(t) ? C1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function iR(e) {
      return e && e.ownerDocument && C1(e.ownerDocument.documentElement, e);
    }
    function oR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function x1() {
      for (var e = window, t = nc(); t instanceof e.HTMLIFrameElement; ) {
        if (oR(t))
          e = t.contentWindow;
        else
          return t;
        t = nc(e.document);
      }
      return t;
    }
    function Pg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function lR() {
      var e = x1();
      return {
        focusedElem: e,
        selectionRange: Pg(e) ? sR(e) : null
      };
    }
    function uR(e) {
      var t = x1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && iR(a)) {
        i !== null && Pg(a) && cR(a, i);
        for (var l = [], c = a; c = c.parentNode; )
          c.nodeType === Qr && l.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var g = l[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function sR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = xo(e), t || {
        start: 0,
        end: 0
      };
    }
    function cR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : aR(e, t);
    }
    var fR = nt && "documentMode" in document && document.documentMode <= 11;
    function dR() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var hf = null, Fg = null, gp = null, jg = !1;
    function pR(e) {
      if ("selectionStart" in e && Pg(e))
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
    function vR(e) {
      return e.window === e ? e.document : e.nodeType === Ka ? e : e.ownerDocument;
    }
    function w1(e, t, a) {
      var i = vR(a);
      if (!(jg || hf == null || hf !== nc(i))) {
        var l = pR(hf);
        if (!gp || !We(gp, l)) {
          gp = l;
          var c = nm(Fg, "onSelect");
          if (c.length > 0) {
            var v = new Lr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: c
            }), v.target = hf;
          }
        }
      }
    }
    function hR(e, t, a, i, l, c, v) {
      var g = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          (pu(g) || g.contentEditable === "true") && (hf = g, Fg = a, gp = null);
          break;
        case "focusout":
          hf = null, Fg = null, gp = null;
          break;
        case "mousedown":
          jg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          jg = !1, w1(e, i, l);
          break;
        case "selectionchange":
          if (fR)
            break;
        case "keydown":
        case "keyup":
          w1(e, i, l);
      }
    }
    function Jh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var mf = {
      animationend: Jh("Animation", "AnimationEnd"),
      animationiteration: Jh("Animation", "AnimationIteration"),
      animationstart: Jh("Animation", "AnimationStart"),
      transitionend: Jh("Transition", "TransitionEnd")
    }, Hg = {}, T1 = {};
    nt && (T1 = document.createElement("div").style, "AnimationEvent" in window || (delete mf.animationend.animation, delete mf.animationiteration.animation, delete mf.animationstart.animation), "TransitionEvent" in window || delete mf.transitionend.transition);
    function em(e) {
      if (Hg[e])
        return Hg[e];
      if (!mf[e])
        return e;
      var t = mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in T1)
          return Hg[e] = t[a];
      return e;
    }
    var R1 = em("animationend"), D1 = em("animationiteration"), k1 = em("animationstart"), N1 = em("transitionend"), _1 = /* @__PURE__ */ new Map(), O1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function vu(e, t) {
      _1.set(e, t), dt(t, [e]);
    }
    function mR() {
      for (var e = 0; e < O1.length; e++) {
        var t = O1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        vu(a, "on" + i);
      }
      vu(R1, "onAnimationEnd"), vu(D1, "onAnimationIteration"), vu(k1, "onAnimationStart"), vu("dblclick", "onDoubleClick"), vu("focusin", "onFocus"), vu("focusout", "onBlur"), vu(N1, "onTransitionEnd");
    }
    function yR(e, t, a, i, l, c, v) {
      var g = _1.get(t);
      if (g !== void 0) {
        var E = Lr, w = t;
        switch (t) {
          case "keypress":
            if (fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = _g;
            break;
          case "focusin":
            w = "focus", E = af;
            break;
          case "focusout":
            w = "blur", E = af;
            break;
          case "beforeblur":
          case "afterblur":
            E = af;
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
            E = Eo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = pl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = $a;
            break;
          case R1:
          case D1:
          case k1:
            E = of;
            break;
          case N1:
            E = Mg;
            break;
          case "scroll":
            E = lp;
            break;
          case "wheel":
            E = uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Rg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = dp;
            break;
        }
        var k = (c & Yo) !== 0;
        {
          var j = !k && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", P = ER(a, g, i.type, k, j);
          if (P.length > 0) {
            var X = new E(g, w, null, i, l);
            e.push({
              event: X,
              listeners: P
            });
          }
        }
      }
    }
    mR(), K(), vf(), dR(), Kh();
    function gR(e, t, a, i, l, c, v) {
      yR(e, t, a, i, l, c);
      var g = (c & pg) === 0;
      g && (he(e, t, a, i, l), F(e, t, a, i, l), hR(e, t, a, i, l), pf(e, t, a, i, l));
    }
    var Sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Vg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sp));
    function M1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ri(i, t, void 0, e), e.currentTarget = null;
    }
    function SR(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var c = t[l], v = c.instance, g = c.currentTarget, E = c.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          M1(e, E, g), i = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var k = t[w], j = k.instance, P = k.currentTarget, X = k.listener;
          if (j !== i && e.isPropagationStopped())
            return;
          M1(e, X, P), i = j;
        }
    }
    function L1(e, t) {
      for (var a = (t & Yo) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], c = l.event, v = l.listeners;
        SR(c, v, a);
      }
      Nd();
    }
    function bR(e, t, a, i, l) {
      var c = hc(a), v = [];
      gR(v, e, i, a, c, t), L1(v, t);
    }
    function Rn(e, t) {
      Vg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = XD(t), l = wR(e, a);
      i.has(l) || (A1(t, e, Zu, a), i.add(l));
    }
    function Ig(e, t, a) {
      Vg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Yo), A1(a, e, i, t);
    }
    var tm = "_reactListening" + Math.random().toString(36).slice(2);
    function bp(e) {
      if (!e[tm]) {
        e[tm] = !0, Rt.forEach(function(a) {
          a !== "selectionchange" && (Vg.has(a) || Ig(a, !1, e), Ig(a, !0, e));
        });
        var t = e.nodeType === Ka ? e : e.ownerDocument;
        t !== null && (t[tm] || (t[tm] = !0, Ig("selectionchange", !1, t)));
      }
    }
    function A1(e, t, a, i, l) {
      var c = ou(e, t, a), v = void 0;
      rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? Ai(e, t, c, v) : uu(e, t, c) : v !== void 0 ? tf(e, t, c, v) : op(e, t, c);
    }
    function $1(e, t) {
      return e === t || e.nodeType === Hn && e.parentNode === t;
    }
    function Bg(e, t, a, i, l) {
      var c = i;
      if (!(t & wi) && !(t & Zu)) {
        var v = l;
        if (i !== null) {
          var g = i;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var E = g.tag;
              if (E === D || E === _) {
                var w = g.stateNode.containerInfo;
                if ($1(w, v))
                  break;
                if (E === _)
                  for (var k = g.return; k !== null; ) {
                    var j = k.tag;
                    if (j === D || j === _) {
                      var P = k.stateNode.containerInfo;
                      if ($1(P, v))
                        return;
                    }
                    k = k.return;
                  }
                for (; w !== null; ) {
                  var X = _s(w);
                  if (X === null)
                    return;
                  var q = X.tag;
                  if (q === L || q === U) {
                    g = c = X;
                    continue e;
                  }
                  w = w.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      Td(function() {
        return bR(e, t, a, c);
      });
    }
    function Ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ER(e, t, a, i, l, c) {
      for (var v = t !== null ? t + "Capture" : null, g = i ? v : t, E = [], w = e, k = null; w !== null; ) {
        var j = w, P = j.stateNode, X = j.tag;
        if (X === L && P !== null && (k = P, g !== null)) {
          var q = Go(w, g);
          q != null && E.push(Ep(w, q, k));
        }
        if (l)
          break;
        w = w.return;
      }
      return E;
    }
    function nm(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var c = l, v = c.stateNode, g = c.tag;
        if (g === L && v !== null) {
          var E = v, w = Go(l, a);
          w != null && i.unshift(Ep(l, w, E));
          var k = Go(l, t);
          k != null && i.push(Ep(l, k, E));
        }
        l = l.return;
      }
      return i;
    }
    function yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== L);
      return e || null;
    }
    function CR(e, t) {
      for (var a = e, i = t, l = 0, c = a; c; c = yf(c))
        l++;
      for (var v = 0, g = i; g; g = yf(g))
        v++;
      for (; l - v > 0; )
        a = yf(a), l--;
      for (; v - l > 0; )
        i = yf(i), v--;
      for (var E = l; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = yf(a), i = yf(i);
      }
      return null;
    }
    function z1(e, t, a, i, l) {
      for (var c = t._reactName, v = [], g = a; g !== null && g !== i; ) {
        var E = g, w = E.alternate, k = E.stateNode, j = E.tag;
        if (w !== null && w === i)
          break;
        if (j === L && k !== null) {
          var P = k;
          if (l) {
            var X = Go(g, c);
            X != null && v.unshift(Ep(g, X, P));
          } else if (!l) {
            var q = Go(g, c);
            q != null && v.push(Ep(g, q, P));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function xR(e, t, a, i, l) {
      var c = i && l ? CR(i, l) : null;
      i !== null && z1(e, t, i, c, !1), l !== null && a !== null && z1(e, a, l, c, !0);
    }
    function wR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var za = !1, Cp = "dangerouslySetInnerHTML", rm = "suppressContentEditableWarning", hu = "suppressHydrationWarning", U1 = "autoFocus", ks = "children", Ns = "style", am = "__html", Yg, im, xp, P1, om, F1, j1;
    Yg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, im = function(e, t) {
      vc(e, t), bd(e, t), vh(e, t, {
        registrationNameDependencies: bn,
        possibleRegistrationNames: pn
      });
    }, F1 = nt && !document.documentMode, xp = function(e, t, a) {
      if (!za) {
        var i = lm(a), l = lm(t);
        l !== i && (za = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, P1 = function(e) {
      if (!za) {
        za = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, om = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, j1 = function(e, t) {
      var a = e.namespaceURI === Ei ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var TR = /\r\n?/g, RR = /\u0000|\uFFFD/g;
    function lm(e) {
      Tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(TR, `
`).replace(RR, "");
    }
    function um(e, t, a, i) {
      var l = lm(t), c = lm(e);
      if (c !== l && (i && (za || (za = !0, h('Text content did not match. Server: "%s" Client: "%s"', c, l))), a && Mt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function H1(e) {
      return e.nodeType === Ka ? e : e.ownerDocument;
    }
    function DR() {
    }
    function sm(e) {
      e.onclick = DR;
    }
    function kR(e, t, a, i, l) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === Ns)
            v && Object.freeze(v), ah(t, v);
          else if (c === Cp) {
            var g = v ? v[am] : void 0;
            g != null && Gv(t, g);
          } else if (c === ks)
            if (typeof v == "string") {
              var E = e !== "textarea" || v !== "";
              E && cc(t, v);
            } else
              typeof v == "number" && cc(t, "" + v);
          else
            c === rm || c === hu || c === U1 || (bn.hasOwnProperty(c) ? v != null && (typeof v != "function" && om(c, v), c === "onScroll" && Rn("scroll", t)) : v != null && ai(t, c, v, l));
        }
    }
    function NR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], v = t[l + 1];
        c === Ns ? ah(e, v) : c === Cp ? Gv(e, v) : c === ks ? cc(e, v) : ai(e, c, v, i);
      }
    }
    function _R(e, t, a, i) {
      var l, c = H1(a), v, g = i;
      if (g === Ei && (g = uc(e)), g === Ei) {
        if (l = xi(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = c.createElement("div");
          E.innerHTML = "<script><\/script>";
          var w = E.firstChild;
          v = E.removeChild(w);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var k = v;
          t.multiple ? k.multiple = !0 : t.size && (k.size = t.size);
        }
      } else
        v = c.createElementNS(g, e);
      return g === Ei && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !ht.call(Yg, e) && (Yg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function OR(e, t) {
      return H1(t).createTextNode(e);
    }
    function MR(e, t, a, i) {
      var l = xi(t, a);
      im(t, a);
      var c;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Sp.length; v++)
            Rn(Sp[v], e);
          c = a;
          break;
        case "source":
          Rn("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), c = a;
          break;
        case "details":
          Rn("toggle", e), c = a;
          break;
        case "input":
          Wu(e, a), c = Yu(e, a), Rn("invalid", e);
          break;
        case "option":
          oc(e, a), c = a;
          break;
        case "select":
          Iv(e, a), c = sd(e, a), Rn("invalid", e);
          break;
        case "textarea":
          Bv(e, a), c = fd(e, a), Rn("invalid", e);
          break;
        default:
          c = a;
      }
      switch (dc(t, c), kR(t, e, i, c, l), t) {
        case "input":
          Vo(e), Gu(e, a, !1);
          break;
        case "textarea":
          Vo(e), Wv(e);
          break;
        case "option":
          ud(e, a);
          break;
        case "select":
          ng(e, a);
          break;
        default:
          typeof c.onClick == "function" && sm(e);
          break;
      }
    }
    function LR(e, t, a, i, l) {
      im(t, i);
      var c = null, v, g;
      switch (t) {
        case "input":
          v = Yu(e, a), g = Yu(e, i), c = [];
          break;
        case "select":
          v = sd(e, a), g = sd(e, i), c = [];
          break;
        case "textarea":
          v = fd(e, a), g = fd(e, i), c = [];
          break;
        default:
          v = a, g = i, typeof v.onClick != "function" && typeof g.onClick == "function" && sm(e);
          break;
      }
      dc(t, g);
      var E, w, k = null;
      for (E in v)
        if (!(g.hasOwnProperty(E) || !v.hasOwnProperty(E) || v[E] == null))
          if (E === Ns) {
            var j = v[E];
            for (w in j)
              j.hasOwnProperty(w) && (k || (k = {}), k[w] = "");
          } else
            E === Cp || E === ks || E === rm || E === hu || E === U1 || (bn.hasOwnProperty(E) ? c || (c = []) : (c = c || []).push(E, null));
      for (E in g) {
        var P = g[E], X = v != null ? v[E] : void 0;
        if (!(!g.hasOwnProperty(E) || P === X || P == null && X == null))
          if (E === Ns)
            if (P && Object.freeze(P), X) {
              for (w in X)
                X.hasOwnProperty(w) && (!P || !P.hasOwnProperty(w)) && (k || (k = {}), k[w] = "");
              for (w in P)
                P.hasOwnProperty(w) && X[w] !== P[w] && (k || (k = {}), k[w] = P[w]);
            } else
              k || (c || (c = []), c.push(E, k)), k = P;
          else if (E === Cp) {
            var q = P ? P[am] : void 0, J = X ? X[am] : void 0;
            q != null && J !== q && (c = c || []).push(E, q);
          } else
            E === ks ? (typeof P == "string" || typeof P == "number") && (c = c || []).push(E, "" + P) : E === rm || E === hu || (bn.hasOwnProperty(E) ? (P != null && (typeof P != "function" && om(E, P), E === "onScroll" && Rn("scroll", e)), !c && X !== P && (c = [])) : (c = c || []).push(E, P));
      }
      return k && (Xu(k, g[Ns]), (c = c || []).push(Ns, k)), c;
    }
    function AR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && ld(e, l);
      var c = xi(a, i), v = xi(a, l);
      switch (NR(e, t, c, v), a) {
        case "input":
          Ul(e, l);
          break;
        case "textarea":
          Yv(e, l);
          break;
        case "select":
          rg(e, l);
          break;
      }
    }
    function $R(e) {
      {
        var t = e.toLowerCase();
        return pc.hasOwnProperty(t) && pc[t] || null;
      }
    }
    function zR(e, t, a, i, l, c, v) {
      var g, E;
      switch (g = xi(t, a), im(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < Sp.length; w++)
            Rn(Sp[w], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          Wu(e, a), Rn("invalid", e);
          break;
        case "option":
          oc(e, a);
          break;
        case "select":
          Iv(e, a), Rn("invalid", e);
          break;
        case "textarea":
          Bv(e, a), Rn("invalid", e);
          break;
      }
      dc(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var k = e.attributes, j = 0; j < k.length; j++) {
          var P = k[j].name.toLowerCase();
          switch (P) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(k[j].name);
          }
        }
      }
      var X = null;
      for (var q in a)
        if (a.hasOwnProperty(q)) {
          var J = a[q];
          if (q === ks)
            typeof J == "string" ? e.textContent !== J && (a[hu] !== !0 && um(e.textContent, J, c, v), X = [ks, J]) : typeof J == "number" && e.textContent !== "" + J && (a[hu] !== !0 && um(e.textContent, J, c, v), X = [ks, "" + J]);
          else if (bn.hasOwnProperty(q))
            J != null && (typeof J != "function" && om(q, J), q === "onScroll" && Rn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var _e = void 0, Ke = g && Pt ? null : An(q);
            if (a[hu] !== !0) {
              if (!(q === rm || q === hu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              q === "value" || q === "checked" || q === "selected")) {
                if (q === Cp) {
                  var Ye = e.innerHTML, Nt = J ? J[am] : void 0;
                  if (Nt != null) {
                    var Tt = j1(e, Nt);
                    Tt !== Ye && xp(q, Ye, Tt);
                  }
                } else if (q === Ns) {
                  if (E.delete(q), F1) {
                    var Y = fg(J);
                    _e = e.getAttribute("style"), Y !== _e && xp(q, _e, Y);
                  }
                } else if (g && !Pt)
                  E.delete(q.toLowerCase()), _e = Ll(e, q, J), J !== _e && xp(q, _e, J);
                else if (!Kt(q, Ke, g) && !gt(q, J, Ke, g)) {
                  var ee = !1;
                  if (Ke !== null)
                    E.delete(Ke.attributeName), _e = Fo(e, q, J, Ke);
                  else {
                    var W = i;
                    if (W === Ei && (W = uc(t)), W === Ei)
                      E.delete(q.toLowerCase());
                    else {
                      var de = $R(q);
                      de !== null && de !== q && (ee = !0, E.delete(de)), E.delete(q);
                    }
                    _e = Ll(e, q, J);
                  }
                  var Oe = Pt;
                  !Oe && J !== _e && !ee && xp(q, _e, J);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[hu] !== !0 && P1(E), t) {
        case "input":
          Vo(e), Gu(e, a, !0);
          break;
        case "textarea":
          Vo(e), Wv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && sm(e);
          break;
      }
      return X;
    }
    function UR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Wg(e, t) {
      {
        if (za)
          return;
        za = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Gg(e, t) {
      {
        if (za)
          return;
        za = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Qg(e, t, a) {
      {
        if (za)
          return;
        za = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Kg(e, t) {
      {
        if (t === "" || za)
          return;
        za = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function PR(e, t, a) {
      switch (t) {
        case "input":
          Fv(e, a);
          return;
        case "textarea":
          dd(e, a);
          return;
        case "select":
          ag(e, a);
          return;
      }
    }
    var wp = function() {
    }, Tp = function() {
    };
    {
      var FR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], V1 = [
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
      ], jR = V1.concat(["button"]), HR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], I1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Tp = function(e, t) {
        var a = xt({}, e || I1), i = {
          tag: t
        };
        return V1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), jR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), FR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var VR = function(e, t) {
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
            return HR.indexOf(t) === -1;
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
      }, IR = function(e, t) {
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
      }, B1 = {};
      wp = function(e, t, a) {
        a = a || I1;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = VR(e, l) ? null : i, v = c ? null : IR(e, a), g = c || v;
        if (g) {
          var E = g.tag, w = !!c + "|" + e + "|" + E;
          if (!B1[w]) {
            B1[w] = !0;
            var k = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? k = "Text nodes" : (k = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : k = "<" + e + ">", c) {
              var P = "";
              E === "table" && e === "tr" && (P += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", k, E, j, P);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", k, E);
          }
        }
      };
    }
    var cm = "suppressHydrationWarning", fm = "$", dm = "/$", Rp = "$?", Dp = "$!", BR = "style", Xg = null, qg = null;
    function YR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ka:
        case Io: {
          t = i === Ka ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : vd(null, "");
          break;
        }
        default: {
          var c = i === Hn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = vd(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), E = Tp(null, g);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function WR(e, t, a) {
      {
        var i = e, l = vd(i.namespace, t), c = Tp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function DA(e) {
      return e;
    }
    function GR(e) {
      Xg = ha(), qg = lR();
      var t = null;
      return lr(!1), t;
    }
    function QR(e) {
      uR(qg), lr(Xg), Xg = null, qg = null;
    }
    function KR(e, t, a, i, l) {
      var c;
      {
        var v = i;
        if (wp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, E = Tp(v.ancestorInfo, e);
          wp(null, g, E);
        }
        c = v.namespace;
      }
      var w = _R(e, t, a, c);
      return _p(l, w), i0(w, t), w;
    }
    function XR(e, t) {
      e.appendChild(t);
    }
    function qR(e, t, a, i, l) {
      switch (MR(e, t, a, i), t) {
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
    function ZR(e, t, a, i, l, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var g = "" + i.children, E = Tp(v.ancestorInfo, t);
          wp(null, g, E);
        }
      }
      return LR(e, t, a, i);
    }
    function Zg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function JR(e, t, a, i) {
      {
        var l = a;
        wp(null, e, l.ancestorInfo);
      }
      var c = OR(e, t);
      return _p(i, c), c;
    }
    function eD() {
      var e = window.event;
      return e === void 0 ? Oi : Ur(e.type);
    }
    var Jg = typeof setTimeout == "function" ? setTimeout : void 0, tD = typeof clearTimeout == "function" ? clearTimeout : void 0, e0 = -1, Y1 = typeof Promise == "function" ? Promise : void 0, nD = typeof queueMicrotask == "function" ? queueMicrotask : typeof Y1 < "u" ? function(e) {
      return Y1.resolve(null).then(e).catch(rD);
    } : Jg;
    function rD(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function aD(e, t, a, i) {
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
    function iD(e, t, a, i, l, c) {
      AR(e, t, a, i, l), i0(e, l);
    }
    function W1(e) {
      cc(e, "");
    }
    function oD(e, t, a) {
      e.nodeValue = a;
    }
    function lD(e, t) {
      e.appendChild(t);
    }
    function uD(e, t) {
      var a;
      e.nodeType === Hn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && sm(a);
    }
    function sD(e, t, a) {
      e.insertBefore(t, a);
    }
    function cD(e, t, a) {
      e.nodeType === Hn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function fD(e, t) {
      e.removeChild(t);
    }
    function dD(e, t) {
      e.nodeType === Hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function t0(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Hn) {
          var c = l.data;
          if (c === dm)
            if (i === 0) {
              e.removeChild(l), wt(t);
              return;
            } else
              i--;
          else
            (c === fm || c === Rp || c === Dp) && i++;
        }
        a = l;
      } while (a);
      wt(t);
    }
    function pD(e, t) {
      e.nodeType === Hn ? t0(e.parentNode, t) : e.nodeType === Qr && t0(e, t), wt(e);
    }
    function vD(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function hD(e) {
      e.nodeValue = "";
    }
    function mD(e, t) {
      e = e;
      var a = t[BR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = fc("display", i);
    }
    function yD(e, t) {
      e.nodeValue = t;
    }
    function gD(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Ka && e.documentElement && e.removeChild(e.documentElement);
    }
    function SD(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bD(e, t) {
      return t === "" || e.nodeType !== Ci ? null : e;
    }
    function ED(e) {
      return e.nodeType !== Hn ? null : e;
    }
    function G1(e) {
      return e.data === Rp;
    }
    function n0(e) {
      return e.data === Dp;
    }
    function CD(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function xD(e, t) {
      e._reactRetry = t;
    }
    function pm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Ci)
          break;
        if (t === Hn) {
          var a = e.data;
          if (a === fm || a === Dp || a === Rp)
            break;
          if (a === dm)
            return null;
        }
      }
      return e;
    }
    function kp(e) {
      return pm(e.nextSibling);
    }
    function wD(e) {
      return pm(e.firstChild);
    }
    function TD(e) {
      return pm(e.firstChild);
    }
    function RD(e) {
      return pm(e.nextSibling);
    }
    function DD(e, t, a, i, l, c, v) {
      _p(c, e), i0(e, a);
      var g;
      {
        var E = l;
        g = E.namespace;
      }
      var w = (c.mode & St) !== Ze;
      return zR(e, t, a, g, i, w, v);
    }
    function kD(e, t, a, i) {
      return _p(a, e), a.mode & St, UR(e, t);
    }
    function ND(e, t) {
      _p(t, e);
    }
    function _D(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var i = t.data;
          if (i === dm) {
            if (a === 0)
              return kp(t);
            a--;
          } else
            (i === fm || i === Dp || i === Rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Q1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var i = t.data;
          if (i === fm || i === Dp || i === Rp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === dm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function OD(e) {
      wt(e);
    }
    function MD(e) {
      wt(e);
    }
    function LD(e) {
      return e !== "head" && e !== "body";
    }
    function AD(e, t, a, i) {
      var l = !0;
      um(t.nodeValue, a, i, l);
    }
    function $D(e, t, a, i, l, c) {
      if (t[cm] !== !0) {
        var v = !0;
        um(i.nodeValue, l, c, v);
      }
    }
    function zD(e, t) {
      t.nodeType === Qr ? Wg(e, t) : t.nodeType === Hn || Gg(e, t);
    }
    function UD(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Wg(a, t) : t.nodeType === Hn || Gg(a, t));
      }
    }
    function PD(e, t, a, i, l) {
      (l || t[cm] !== !0) && (i.nodeType === Qr ? Wg(a, i) : i.nodeType === Hn || Gg(a, i));
    }
    function FD(e, t, a) {
      Qg(e, t);
    }
    function jD(e, t) {
      Kg(e, t);
    }
    function HD(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Qg(i, t);
      }
    }
    function VD(e, t) {
      {
        var a = e.parentNode;
        a !== null && Kg(a, t);
      }
    }
    function ID(e, t, a, i, l, c) {
      (c || t[cm] !== !0) && Qg(a, i);
    }
    function BD(e, t, a, i, l) {
      (l || t[cm] !== !0) && Kg(a, i);
    }
    function YD(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function WD(e) {
      bp(e);
    }
    var gf = Math.random().toString(36).slice(2), Sf = "__reactFiber$" + gf, r0 = "__reactProps$" + gf, Np = "__reactContainer$" + gf, a0 = "__reactEvents$" + gf, GD = "__reactListeners$" + gf, QD = "__reactHandles$" + gf;
    function KD(e) {
      delete e[Sf], delete e[r0], delete e[a0], delete e[GD], delete e[QD];
    }
    function _p(e, t) {
      t[Sf] = e;
    }
    function vm(e, t) {
      t[Np] = e;
    }
    function K1(e) {
      e[Np] = null;
    }
    function Op(e) {
      return !!e[Np];
    }
    function _s(e) {
      var t = e[Sf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Np] || a[Sf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = Q1(e); l !== null; ) {
              var c = l[Sf];
              if (c)
                return c;
              l = Q1(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function mu(e) {
      var t = e[Sf] || e[Np];
      return t && (t.tag === L || t.tag === U || t.tag === B || t.tag === D) ? t : null;
    }
    function bf(e) {
      if (e.tag === L || e.tag === U)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function hm(e) {
      return e[r0] || null;
    }
    function i0(e, t) {
      e[r0] = t;
    }
    function XD(e) {
      var t = e[a0];
      return t === void 0 && (t = e[a0] = /* @__PURE__ */ new Set()), t;
    }
    var X1 = {}, q1 = f.ReactDebugCurrentFrame;
    function mm(e) {
      if (e) {
        var t = e._owner, a = Fu(e.type, e._source, t ? t.type : null);
        q1.setExtraStackFrame(a);
      } else
        q1.setExtraStackFrame(null);
    }
    function zi(e, t, a, i, l) {
      {
        var c = Function.call.bind(ht);
        for (var v in e)
          if (c(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              g = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              g = w;
            }
            g && !(g instanceof Error) && (mm(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof g), mm(null)), g instanceof Error && !(g.message in X1) && (X1[g.message] = !0, mm(l), h("Failed %s type: %s", a, g.message), mm(null));
          }
      }
    }
    var o0 = [], ym;
    ym = [];
    var yl = -1;
    function yu(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (yl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== ym[yl] && h("Unexpected Fiber popped."), e.current = o0[yl], o0[yl] = null, ym[yl] = null, yl--;
    }
    function aa(e, t, a) {
      yl++, o0[yl] = e.current, ym[yl] = a, e.current = t;
    }
    var l0;
    l0 = {};
    var ei = {};
    Object.freeze(ei);
    var gl = yu(ei), wo = yu(!1), u0 = ei;
    function Ef(e, t, a) {
      return a && To(t) ? u0 : gl.current;
    }
    function Z1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Cf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ei;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var g = ft(e) || "Unknown";
          zi(i, c, "context", g);
        }
        return l && Z1(e, t, c), c;
      }
    }
    function gm() {
      return wo.current;
    }
    function To(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Sm(e) {
      ra(wo, e), ra(gl, e);
    }
    function s0(e) {
      ra(wo, e), ra(gl, e);
    }
    function J1(e, t, a) {
      {
        if (gl.current !== ei)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(gl, t, e), aa(wo, a, e);
      }
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = ft(e) || "Unknown";
            l0[c] || (l0[c] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var g in v)
          if (!(g in l))
            throw new Error((ft(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var E = ft(e) || "Unknown";
          zi(l, v, "child context", E);
        }
        return xt({}, a, v);
      }
    }
    function bm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ei;
        return u0 = gl.current, aa(gl, a, e), aa(wo, wo.current, e), !0;
      }
    }
    function tE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = eE(e, t, u0);
          i.__reactInternalMemoizedMergedChildContext = l, ra(wo, e), ra(gl, e), aa(gl, l, e), aa(wo, a, e);
        } else
          ra(wo, e), aa(wo, a, e);
      }
    }
    function qD(e) {
      {
        if (!Ad(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case D:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (To(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var gu = 0, Em = 1, Sl = null, c0 = !1, f0 = !1;
    function nE(e) {
      Sl === null ? Sl = [e] : Sl.push(e);
    }
    function ZD(e) {
      c0 = !0, nE(e);
    }
    function rE() {
      c0 && Su();
    }
    function Su() {
      if (!f0 && Sl !== null) {
        f0 = !0;
        var e = 0, t = Ma();
        try {
          var a = !0, i = Sl;
          for (Kn(kr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Sl = null, c0 = !1;
        } catch (c) {
          throw Sl !== null && (Sl = Sl.slice(e + 1)), Cc(wc, Su), c;
        } finally {
          Kn(t), f0 = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Cm = null, xm = 0, di = [], pi = 0, Os = null, bl = 1, El = "";
    function JD(e) {
      return Ls(), (e.flags & Od) !== Qe;
    }
    function ek(e) {
      return Ls(), xm;
    }
    function tk() {
      var e = El, t = bl, a = t & ~nk(t);
      return a.toString(32) + e;
    }
    function Ms(e, t) {
      Ls(), xf[wf++] = xm, xf[wf++] = Cm, Cm = e, xm = t;
    }
    function aE(e, t, a) {
      Ls(), di[pi++] = bl, di[pi++] = El, di[pi++] = Os, Os = e;
      var i = bl, l = El, c = wm(i) - 1, v = i & ~(1 << c), g = a + 1, E = wm(t) + c;
      if (E > 30) {
        var w = c - c % 5, k = (1 << w) - 1, j = (v & k).toString(32), P = v >> w, X = c - w, q = wm(t) + X, J = g << X, _e = J | P, Ke = j + l;
        bl = 1 << q | _e, El = Ke;
      } else {
        var Ye = g << c, Nt = Ye | v, Tt = l;
        bl = 1 << E | Nt, El = Tt;
      }
    }
    function d0(e) {
      Ls();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ms(e, a), aE(e, a, i);
      }
    }
    function wm(e) {
      return 32 - _c(e);
    }
    function nk(e) {
      return 1 << wm(e) - 1;
    }
    function p0(e) {
      for (; e === Cm; )
        Cm = xf[--wf], xf[wf] = null, xm = xf[--wf], xf[wf] = null;
      for (; e === Os; )
        Os = di[--pi], di[pi] = null, El = di[--pi], di[pi] = null, bl = di[--pi], di[pi] = null;
    }
    function rk() {
      return Ls(), Os !== null ? {
        id: bl,
        overflow: El
      } : null;
    }
    function ak(e, t) {
      Ls(), di[pi++] = bl, di[pi++] = El, di[pi++] = Os, bl = t.id, El = t.overflow, Os = e;
    }
    function Ls() {
      Fr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, vi = null, Ui = !1, As = !1, bu = null;
    function ik() {
      Ui && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function iE() {
      As = !0;
    }
    function ok() {
      return As;
    }
    function lk(e) {
      var t = e.stateNode.containerInfo;
      return vi = TD(t), Pr = e, Ui = !0, bu = null, As = !1, !0;
    }
    function uk(e, t, a) {
      return vi = RD(t), Pr = e, Ui = !0, bu = null, As = !1, a !== null && ak(e, a), !0;
    }
    function oE(e, t) {
      switch (e.tag) {
        case D: {
          zD(e.stateNode.containerInfo, t);
          break;
        }
        case L: {
          var a = (e.mode & St) !== Ze;
          PD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case B: {
          var i = e.memoizedState;
          i.dehydrated !== null && UD(i.dehydrated, t);
          break;
        }
      }
    }
    function lE(e, t) {
      oE(e, t);
      var a = fO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ft) : i.push(a);
    }
    function v0(e, t) {
      {
        if (As)
          return;
        switch (e.tag) {
          case D: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case L:
                var i = t.type;
                t.pendingProps, FD(a, i);
                break;
              case U:
                var l = t.pendingProps;
                jD(a, l);
                break;
            }
            break;
          }
          case L: {
            var c = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case L: {
                var E = t.type, w = t.pendingProps, k = (e.mode & St) !== Ze;
                ID(
                  c,
                  v,
                  g,
                  E,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
              case U: {
                var j = t.pendingProps, P = (e.mode & St) !== Ze;
                BD(
                  c,
                  v,
                  g,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  P
                );
                break;
              }
            }
            break;
          }
          case B: {
            var X = e.memoizedState, q = X.dehydrated;
            if (q !== null)
              switch (t.tag) {
                case L:
                  var J = t.type;
                  t.pendingProps, HD(q, J);
                  break;
                case U:
                  var _e = t.pendingProps;
                  VD(q, _e);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function uE(e, t) {
      t.flags = t.flags & ~Da | ln, v0(e, t);
    }
    function sE(e, t) {
      switch (e.tag) {
        case L: {
          var a = e.type;
          e.pendingProps;
          var i = SD(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, vi = wD(i), !0) : !1;
        }
        case U: {
          var l = e.pendingProps, c = bD(t, l);
          return c !== null ? (e.stateNode = c, Pr = e, vi = null, !0) : !1;
        }
        case B: {
          var v = ED(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: rk(),
              retryLane: ta
            };
            e.memoizedState = g;
            var E = dO(v);
            return E.return = e, e.child = E, Pr = e, vi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function h0(e) {
      return (e.mode & St) !== Ze && (e.flags & at) === Qe;
    }
    function m0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function y0(e) {
      if (Ui) {
        var t = vi;
        if (!t) {
          h0(e) && (v0(Pr, e), m0()), uE(Pr, e), Ui = !1, Pr = e;
          return;
        }
        var a = t;
        if (!sE(e, t)) {
          h0(e) && (v0(Pr, e), m0()), t = kp(a);
          var i = Pr;
          if (!t || !sE(e, t)) {
            uE(Pr, e), Ui = !1, Pr = e;
            return;
          }
          lE(i, a);
        }
      }
    }
    function sk(e, t, a) {
      var i = e.stateNode, l = !As, c = DD(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = c, c !== null;
    }
    function ck(e) {
      var t = e.stateNode, a = e.memoizedProps, i = kD(t, a, e);
      if (i) {
        var l = Pr;
        if (l !== null)
          switch (l.tag) {
            case D: {
              var c = l.stateNode.containerInfo, v = (l.mode & St) !== Ze;
              AD(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case L: {
              var g = l.type, E = l.memoizedProps, w = l.stateNode, k = (l.mode & St) !== Ze;
              $D(
                g,
                E,
                w,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                k
              );
              break;
            }
          }
      }
      return i;
    }
    function fk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ND(a, e);
    }
    function dk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return _D(a);
    }
    function cE(e) {
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== D && t.tag !== B; )
        t = t.return;
      Pr = t;
    }
    function Tm(e) {
      if (e !== Pr)
        return !1;
      if (!Ui)
        return cE(e), Ui = !0, !1;
      if (e.tag !== D && (e.tag !== L || LD(e.type) && !Zg(e.type, e.memoizedProps))) {
        var t = vi;
        if (t)
          if (h0(e))
            fE(e), m0();
          else
            for (; t; )
              lE(e, t), t = kp(t);
      }
      return cE(e), e.tag === B ? vi = dk(e) : vi = Pr ? kp(e.stateNode) : null, !0;
    }
    function pk() {
      return Ui && vi !== null;
    }
    function fE(e) {
      for (var t = vi; t; )
        oE(e, t), t = kp(t);
    }
    function Tf() {
      Pr = null, vi = null, Ui = !1, As = !1;
    }
    function dE() {
      bu !== null && (ox(bu), bu = null);
    }
    function Fr() {
      return Ui;
    }
    function g0(e) {
      bu === null ? bu = [e] : bu.push(e);
    }
    var vk = f.ReactCurrentBatchConfig, hk = null;
    function mk() {
      return vk.transition;
    }
    var Pi = {
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
      var yk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & wn && (t = a), a = a.return;
        return t;
      }, $s = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Mp = [], Lp = [], Ap = [], $p = [], zp = [], Up = [], zs = /* @__PURE__ */ new Set();
      Pi.recordUnsafeLifecycleWarnings = function(e, t) {
        zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & wn && typeof t.UNSAFE_componentWillMount == "function" && Lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & wn && typeof t.UNSAFE_componentWillReceiveProps == "function" && $p.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & wn && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, Pi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(P) {
          e.add(ft(P) || "Component"), zs.add(P.type);
        }), Mp = []);
        var t = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(P) {
          t.add(ft(P) || "Component"), zs.add(P.type);
        }), Lp = []);
        var a = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(P) {
          a.add(ft(P) || "Component"), zs.add(P.type);
        }), Ap = []);
        var i = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(P) {
          i.add(ft(P) || "Component"), zs.add(P.type);
        }), $p = []);
        var l = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(P) {
          l.add(ft(P) || "Component"), zs.add(P.type);
        }), zp = []);
        var c = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(P) {
          c.add(ft(P) || "Component"), zs.add(P.type);
        }), Up = []), t.size > 0) {
          var v = $s(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var g = $s(i);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (c.size > 0) {
          var E = $s(c);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var w = $s(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (a.size > 0) {
          var k = $s(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
        if (l.size > 0) {
          var j = $s(l);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var Rm = /* @__PURE__ */ new Map(), pE = /* @__PURE__ */ new Set();
      Pi.recordLegacyContextWarning = function(e, t) {
        var a = yk(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!pE.has(e.type)) {
          var i = Rm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Rm.set(a, i)), i.push(e));
        }
      }, Pi.flushLegacyContextWarning = function() {
        Rm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(ft(c) || "Component"), pE.add(c.type);
            });
            var l = $s(i);
            try {
              Xt(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Wn();
            }
          }
        });
      }, Pi.discardPendingWarnings = function() {
        Mp = [], Lp = [], Ap = [], $p = [], zp = [], Up = [], Rm = /* @__PURE__ */ new Map();
      };
    }
    function Fi(e, t) {
      if (e && e.defaultProps) {
        var a = xt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var S0 = yu(null), b0;
    b0 = {};
    var Dm = null, Rf = null, E0 = null, km = !1;
    function Nm() {
      Dm = null, Rf = null, E0 = null, km = !1;
    }
    function vE() {
      km = !0;
    }
    function hE() {
      km = !1;
    }
    function mE(e, t, a) {
      aa(S0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== b0 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = b0;
    }
    function C0(e, t) {
      var a = S0.current;
      ra(S0, t), e._currentValue = a;
    }
    function x0(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (ol(i.childLanes, t) ? l !== null && !ol(l.childLanes, t) && (l.childLanes = vt(l.childLanes, t)) : (i.childLanes = vt(i.childLanes, t), l !== null && (l.childLanes = vt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gk(e, t, a) {
      Sk(e, t, a);
    }
    function Sk(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, c = i.dependencies;
        if (c !== null) {
          l = i.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === R) {
                var g = Qn(a), E = Cl(tn, g);
                E.tag = Om;
                var w = i.updateQueue;
                if (w !== null) {
                  var k = w.shared, j = k.pending;
                  j === null ? E.next = E : (E.next = j.next, j.next = E), k.pending = E;
                }
              }
              i.lanes = vt(i.lanes, a);
              var P = i.alternate;
              P !== null && (P.lanes = vt(P.lanes, a)), x0(i.return, a, e), c.lanes = vt(c.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === Q)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Te) {
          var X = i.return;
          if (X === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          X.lanes = vt(X.lanes, a);
          var q = X.alternate;
          q !== null && (q.lanes = vt(q.lanes, a)), x0(X, a, e), l = i.sibling;
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
            var J = l.sibling;
            if (J !== null) {
              J.return = l.return, l = J;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Df(e, t) {
      Dm = e, Rf = null, E0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function sr(e) {
      km && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (E0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Rf === null) {
          if (Dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Rf = a, Dm.dependencies = {
            lanes: te,
            firstContext: a
          };
        } else
          Rf = Rf.next = a;
      }
      return t;
    }
    var Us = null;
    function w0(e) {
      Us === null ? Us = [e] : Us.push(e);
    }
    function bk() {
      if (Us !== null) {
        for (var e = 0; e < Us.length; e++) {
          var t = Us[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var c = l.next;
              l.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        Us = null;
      }
    }
    function yE(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, w0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, _m(e, i);
    }
    function Ek(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, w0(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Ck(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, w0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, _m(e, i);
    }
    function Ua(e, t) {
      return _m(e, t);
    }
    var xk = _m;
    function _m(e, t) {
      e.lanes = vt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = vt(a.lanes, t)), a === null && (e.flags & (ln | Da)) !== Qe && gx(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = vt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = vt(a.childLanes, t) : (l.flags & (ln | Da)) !== Qe && gx(e), i = l, l = l.return;
      if (i.tag === D) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var gE = 0, SE = 1, Om = 2, T0 = 3, Mm = !1, R0, Lm;
    R0 = !1, Lm = null;
    function D0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function bE(e, t) {
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
    function Cl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: gE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Eu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Lm === l && !R0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), R0 = !0), x_()) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, xk(e, a);
      } else
        return Ck(e, l, t, a);
    }
    function Am(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Gd(a)) {
          var c = l.lanes;
          c = Kd(c, e.pendingLanes);
          var v = vt(c, a);
          l.lanes = v, tu(e, v);
        }
      }
    }
    function k0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var c = null, v = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var E = g;
            do {
              var w = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              v === null ? c = v = w : (v.next = w, v = w), E = E.next;
            } while (E !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var k = a.lastBaseUpdate;
      k === null ? a.firstBaseUpdate = t : k.next = t, a.lastBaseUpdate = t;
    }
    function wk(e, t, a, i, l, c) {
      switch (a.tag) {
        case SE: {
          var v = a.payload;
          if (typeof v == "function") {
            vE();
            var g = v.call(c, i, l);
            {
              if (e.mode & wn) {
                Gn(!0);
                try {
                  v.call(c, i, l);
                } finally {
                  Gn(!1);
                }
              }
              hE();
            }
            return g;
          }
          return v;
        }
        case T0:
          e.flags = e.flags & ~ar | at;
        case gE: {
          var E = a.payload, w;
          if (typeof E == "function") {
            vE(), w = E.call(c, i, l);
            {
              if (e.mode & wn) {
                Gn(!0);
                try {
                  E.call(c, i, l);
                } finally {
                  Gn(!1);
                }
              }
              hE();
            }
          } else
            w = E;
          return w == null ? i : xt({}, i, w);
        }
        case Om:
          return Mm = !0, i;
      }
      return i;
    }
    function $m(e, t, a, i) {
      var l = e.updateQueue;
      Mm = !1, Lm = l.shared;
      var c = l.firstBaseUpdate, v = l.lastBaseUpdate, g = l.shared.pending;
      if (g !== null) {
        l.shared.pending = null;
        var E = g, w = E.next;
        E.next = null, v === null ? c = w : v.next = w, v = E;
        var k = e.alternate;
        if (k !== null) {
          var j = k.updateQueue, P = j.lastBaseUpdate;
          P !== v && (P === null ? j.firstBaseUpdate = w : P.next = w, j.lastBaseUpdate = E);
        }
      }
      if (c !== null) {
        var X = l.baseState, q = te, J = null, _e = null, Ke = null, Ye = c;
        do {
          var Nt = Ye.lane, Tt = Ye.eventTime;
          if (ol(i, Nt)) {
            if (Ke !== null) {
              var ee = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: Ye.tag,
                payload: Ye.payload,
                callback: Ye.callback,
                next: null
              };
              Ke = Ke.next = ee;
            }
            X = wk(e, l, Ye, X, t, a);
            var W = Ye.callback;
            if (W !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ye.lane !== Dt) {
              e.flags |= oi;
              var de = l.effects;
              de === null ? l.effects = [Ye] : de.push(Ye);
            }
          } else {
            var Y = {
              eventTime: Tt,
              lane: Nt,
              tag: Ye.tag,
              payload: Ye.payload,
              callback: Ye.callback,
              next: null
            };
            Ke === null ? (_e = Ke = Y, J = X) : Ke = Ke.next = Y, q = vt(q, Nt);
          }
          if (Ye = Ye.next, Ye === null) {
            if (g = l.shared.pending, g === null)
              break;
            var Oe = g, we = Oe.next;
            Oe.next = null, Ye = we, l.lastBaseUpdate = Oe, l.shared.pending = null;
          }
        } while (!0);
        Ke === null && (J = X), l.baseState = J, l.firstBaseUpdate = _e, l.lastBaseUpdate = Ke;
        var rt = l.shared.interleaved;
        if (rt !== null) {
          var ct = rt;
          do
            q = vt(q, ct.lane), ct = ct.next;
          while (ct !== rt);
        } else
          c === null && (l.shared.lanes = te);
        sv(q), e.lanes = q, e.memoizedState = X;
      }
      Lm = null;
    }
    function Tk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Mm = !1;
    }
    function zm() {
      return Mm;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l], v = c.callback;
          v !== null && (c.callback = null, Tk(v, a));
        }
    }
    var N0 = {}, xE = new u.Component().refs, _0, O0, M0, L0, A0, wE, Um, $0, z0, U0;
    {
      _0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), $0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), z0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set();
      var TE = /* @__PURE__ */ new Set();
      Um = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          TE.has(a) || (TE.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, wE = function(e, t) {
        if (t === void 0) {
          var a = Jt(e) || "Component";
          A0.has(a) || (A0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(N0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(N0);
    }
    function P0(e, t, a, i) {
      var l = e.memoizedState, c = a(i, l);
      {
        if (e.mode & wn) {
          Gn(!0);
          try {
            c = a(i, l);
          } finally {
            Gn(!1);
          }
        }
        wE(t, c);
      }
      var v = c == null ? l : xt({}, l, c);
      if (e.memoizedState = v, e.lanes === te) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var F0 = {
      isMounted: da,
      enqueueSetState: function(e, t, a) {
        var i = Ta(e), l = ga(), c = Nu(i), v = Cl(l, c);
        v.payload = t, a != null && (Um(a, "setState"), v.callback = a);
        var g = Eu(i, v, c);
        g !== null && (wr(g, i, c, l), Am(g, i, c)), ho(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ta(e), l = ga(), c = Nu(i), v = Cl(l, c);
        v.tag = SE, v.payload = t, a != null && (Um(a, "replaceState"), v.callback = a);
        var g = Eu(i, v, c);
        g !== null && (wr(g, i, c, l), Am(g, i, c)), ho(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ta(e), i = ga(), l = Nu(a), c = Cl(i, l);
        c.tag = Om, t != null && (Um(t, "forceUpdate"), c.callback = t);
        var v = Eu(a, c, l);
        v !== null && (wr(v, a, l, i), Am(v, a, l)), Id(a, l);
      }
    };
    function RE(e, t, a, i, l, c, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var E = g.shouldComponentUpdate(i, c, v);
        {
          if (e.mode & wn) {
            Gn(!0);
            try {
              E = g.shouldComponentUpdate(i, c, v);
            } finally {
              Gn(!1);
            }
          }
          E === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Jt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !We(a, i) || !We(l, c) : !0;
    }
    function Rk(e, t, a) {
      var i = e.stateNode;
      {
        var l = Jt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !z0.has(t) && (z0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !M0.has(t) && (M0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Jt(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var g = i.state;
        g && (typeof g != "object" || nr(g)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function DE(e, t) {
      t.updater = F0, e.stateNode = t, Yl(t, e), t._reactInternalInstance = N0;
    }
    function kE(e, t, a) {
      var i = !1, l = ei, c = ei, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === be && v._context === void 0
        );
        if (!g && !U0.has(t)) {
          U0.add(t);
          var E = "";
          v === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? E = " However, it is set to a " + typeof v + "." : v.$$typeof === le ? E = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Jt(t) || "Component", E);
        }
      }
      if (typeof v == "object" && v !== null)
        c = sr(v);
      else {
        l = Ef(e, t, !0);
        var w = t.contextTypes;
        i = w != null, c = i ? Cf(e, l) : ei;
      }
      var k = new t(a, c);
      if (e.mode & wn) {
        Gn(!0);
        try {
          k = new t(a, c);
        } finally {
          Gn(!1);
        }
      }
      var j = e.memoizedState = k.state !== null && k.state !== void 0 ? k.state : null;
      DE(e, k);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var P = Jt(t) || "Component";
          O0.has(P) || (O0.add(P), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, k.state === null ? "null" : "undefined", P));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof k.getSnapshotBeforeUpdate == "function") {
          var X = null, q = null, J = null;
          if (typeof k.componentWillMount == "function" && k.componentWillMount.__suppressDeprecationWarning !== !0 ? X = "componentWillMount" : typeof k.UNSAFE_componentWillMount == "function" && (X = "UNSAFE_componentWillMount"), typeof k.componentWillReceiveProps == "function" && k.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? q = "componentWillReceiveProps" : typeof k.UNSAFE_componentWillReceiveProps == "function" && (q = "UNSAFE_componentWillReceiveProps"), typeof k.componentWillUpdate == "function" && k.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof k.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), X !== null || q !== null || J !== null) {
            var _e = Jt(t) || "Component", Ke = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            L0.has(_e) || (L0.add(_e), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, Ke, X !== null ? `
  ` + X : "", q !== null ? `
  ` + q : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && Z1(e, l, c), k;
    }
    function Dk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ft(e) || "Component"), F0.enqueueReplaceState(t, t.state, null));
    }
    function NE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var c = ft(e) || "Component";
          _0.has(c) || (_0.add(c), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        F0.enqueueReplaceState(t, t.state, null);
      }
    }
    function j0(e, t, a, i) {
      Rk(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = xE, D0(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        l.context = sr(c);
      else {
        var v = Ef(e, t, !0);
        l.context = Cf(e, v);
      }
      {
        if (l.state === a) {
          var g = Jt(t) || "Component";
          $0.has(g) || ($0.add(g), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & wn && Pi.recordLegacyContextWarning(e, l), Pi.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (P0(e, t, E, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Dk(e, l), $m(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = pt;
        w |= Xr, (e.mode & _a) !== Ze && (w |= qr), e.flags |= w;
      }
    }
    function kk(e, t, a, i) {
      var l = e.stateNode, c = e.memoizedProps;
      l.props = c;
      var v = l.context, g = t.contextType, E = ei;
      if (typeof g == "object" && g !== null)
        E = sr(g);
      else {
        var w = Ef(e, t, !0);
        E = Cf(e, w);
      }
      var k = t.getDerivedStateFromProps, j = typeof k == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !j && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== a || v !== E) && NE(e, l, a, E), EE();
      var P = e.memoizedState, X = l.state = P;
      if ($m(e, a, l, i), X = e.memoizedState, c === a && P === X && !gm() && !zm()) {
        if (typeof l.componentDidMount == "function") {
          var q = pt;
          q |= Xr, (e.mode & _a) !== Ze && (q |= qr), e.flags |= q;
        }
        return !1;
      }
      typeof k == "function" && (P0(e, t, k, a), X = e.memoizedState);
      var J = zm() || RE(e, t, c, a, P, X, E);
      if (J) {
        if (!j && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var _e = pt;
          _e |= Xr, (e.mode & _a) !== Ze && (_e |= qr), e.flags |= _e;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ke = pt;
          Ke |= Xr, (e.mode & _a) !== Ze && (Ke |= qr), e.flags |= Ke;
        }
        e.memoizedProps = a, e.memoizedState = X;
      }
      return l.props = a, l.state = X, l.context = E, J;
    }
    function Nk(e, t, a, i, l) {
      var c = t.stateNode;
      bE(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : Fi(t.type, v);
      c.props = g;
      var E = t.pendingProps, w = c.context, k = a.contextType, j = ei;
      if (typeof k == "object" && k !== null)
        j = sr(k);
      else {
        var P = Ef(t, a, !0);
        j = Cf(t, P);
      }
      var X = a.getDerivedStateFromProps, q = typeof X == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !q && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== E || w !== j) && NE(t, c, i, j), EE();
      var J = t.memoizedState, _e = c.state = J;
      if ($m(t, i, c, l), _e = t.memoizedState, v === E && J === _e && !gm() && !zm() && !xe)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= pt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Ra), !1;
      typeof X == "function" && (P0(t, a, X, i), _e = t.memoizedState);
      var Ke = zm() || RE(t, a, g, i, J, _e, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      xe;
      return Ke ? (!q && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, _e, j), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, _e, j)), typeof c.componentDidUpdate == "function" && (t.flags |= pt), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Ra)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= pt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Ra), t.memoizedProps = i, t.memoizedState = _e), c.props = i, c.state = _e, c.context = j, Ke;
    }
    var H0, V0, I0, B0, Y0, _E = function(e, t) {
    };
    H0 = !1, V0 = !1, I0 = {}, B0 = {}, Y0 = {}, _E = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ft(t) || "Component";
        B0[a] || (B0[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & wn || Qt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = ft(e) || "Component";
          I0[l] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), I0[l] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var g = c;
            if (g.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = g.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = v;
          Ar(i, "ref");
          var w = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var k = function(j) {
            var P = E.refs;
            P === xE && (P = E.refs = {}), j === null ? delete P[w] : P[w] = j;
          };
          return k._stringRef = w, k;
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
    function Pm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Fm(e) {
      {
        var t = ft(e) || "Component";
        if (Y0[t])
          return;
        Y0[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function OE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function ME(e) {
      function t(Y, ee) {
        if (e) {
          var W = Y.deletions;
          W === null ? (Y.deletions = [ee], Y.flags |= Ft) : W.push(ee);
        }
      }
      function a(Y, ee) {
        if (!e)
          return null;
        for (var W = ee; W !== null; )
          t(Y, W), W = W.sibling;
        return null;
      }
      function i(Y, ee) {
        for (var W = /* @__PURE__ */ new Map(), de = ee; de !== null; )
          de.key !== null ? W.set(de.key, de) : W.set(de.index, de), de = de.sibling;
        return W;
      }
      function l(Y, ee) {
        var W = Ys(Y, ee);
        return W.index = 0, W.sibling = null, W;
      }
      function c(Y, ee, W) {
        if (Y.index = W, !e)
          return Y.flags |= Od, ee;
        var de = Y.alternate;
        if (de !== null) {
          var Oe = de.index;
          return Oe < ee ? (Y.flags |= ln, ee) : Oe;
        } else
          return Y.flags |= ln, ee;
      }
      function v(Y) {
        return e && Y.alternate === null && (Y.flags |= ln), Y;
      }
      function g(Y, ee, W, de) {
        if (ee === null || ee.tag !== U) {
          var Oe = gb(W, Y.mode, de);
          return Oe.return = Y, Oe;
        } else {
          var we = l(ee, W);
          return we.return = Y, we;
        }
      }
      function E(Y, ee, W, de) {
        var Oe = W.type;
        if (Oe === Ya)
          return k(Y, ee, W.props.children, de, W.key);
        if (ee !== null && (ee.elementType === Oe || // Keep this check inline so it only runs on the false path:
        Cx(ee, W) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === Je && OE(Oe) === ee.type)) {
          var we = l(ee, W.props);
          return we.ref = Pp(Y, ee, W), we.return = Y, we._debugSource = W._source, we._debugOwner = W._owner, we;
        }
        var rt = yb(W, Y.mode, de);
        return rt.ref = Pp(Y, ee, W), rt.return = Y, rt;
      }
      function w(Y, ee, W, de) {
        if (ee === null || ee.tag !== _ || ee.stateNode.containerInfo !== W.containerInfo || ee.stateNode.implementation !== W.implementation) {
          var Oe = Sb(W, Y.mode, de);
          return Oe.return = Y, Oe;
        } else {
          var we = l(ee, W.children || []);
          return we.return = Y, we;
        }
      }
      function k(Y, ee, W, de, Oe) {
        if (ee === null || ee.tag !== O) {
          var we = Ou(W, Y.mode, de, Oe);
          return we.return = Y, we;
        } else {
          var rt = l(ee, W);
          return rt.return = Y, rt;
        }
      }
      function j(Y, ee, W) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var de = gb("" + ee, Y.mode, W);
          return de.return = Y, de;
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case Xi: {
              var Oe = yb(ee, Y.mode, W);
              return Oe.ref = Pp(Y, null, ee), Oe.return = Y, Oe;
            }
            case ua: {
              var we = Sb(ee, Y.mode, W);
              return we.return = Y, we;
            }
            case Je: {
              var rt = ee._payload, ct = ee._init;
              return j(Y, ct(rt), W);
            }
          }
          if (nr(ee) || Si(ee)) {
            var Zt = Ou(ee, Y.mode, W, null);
            return Zt.return = Y, Zt;
          }
          Pm(Y, ee);
        }
        return typeof ee == "function" && Fm(Y), null;
      }
      function P(Y, ee, W, de) {
        var Oe = ee !== null ? ee.key : null;
        if (typeof W == "string" && W !== "" || typeof W == "number")
          return Oe !== null ? null : g(Y, ee, "" + W, de);
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Xi:
              return W.key === Oe ? E(Y, ee, W, de) : null;
            case ua:
              return W.key === Oe ? w(Y, ee, W, de) : null;
            case Je: {
              var we = W._payload, rt = W._init;
              return P(Y, ee, rt(we), de);
            }
          }
          if (nr(W) || Si(W))
            return Oe !== null ? null : k(Y, ee, W, de, null);
          Pm(Y, W);
        }
        return typeof W == "function" && Fm(Y), null;
      }
      function X(Y, ee, W, de, Oe) {
        if (typeof de == "string" && de !== "" || typeof de == "number") {
          var we = Y.get(W) || null;
          return g(ee, we, "" + de, Oe);
        }
        if (typeof de == "object" && de !== null) {
          switch (de.$$typeof) {
            case Xi: {
              var rt = Y.get(de.key === null ? W : de.key) || null;
              return E(ee, rt, de, Oe);
            }
            case ua: {
              var ct = Y.get(de.key === null ? W : de.key) || null;
              return w(ee, ct, de, Oe);
            }
            case Je:
              var Zt = de._payload, zt = de._init;
              return X(Y, ee, W, zt(Zt), Oe);
          }
          if (nr(de) || Si(de)) {
            var Zn = Y.get(W) || null;
            return k(ee, Zn, de, Oe, null);
          }
          Pm(ee, de);
        }
        return typeof de == "function" && Fm(ee), null;
      }
      function q(Y, ee, W) {
        {
          if (typeof Y != "object" || Y === null)
            return ee;
          switch (Y.$$typeof) {
            case Xi:
            case ua:
              _E(Y, W);
              var de = Y.key;
              if (typeof de != "string")
                break;
              if (ee === null) {
                ee = /* @__PURE__ */ new Set(), ee.add(de);
                break;
              }
              if (!ee.has(de)) {
                ee.add(de);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", de);
              break;
            case Je:
              var Oe = Y._payload, we = Y._init;
              q(we(Oe), ee, W);
              break;
          }
        }
        return ee;
      }
      function J(Y, ee, W, de) {
        for (var Oe = null, we = 0; we < W.length; we++) {
          var rt = W[we];
          Oe = q(rt, Oe, Y);
        }
        for (var ct = null, Zt = null, zt = ee, Zn = 0, Ut = 0, Bn = null; zt !== null && Ut < W.length; Ut++) {
          zt.index > Ut ? (Bn = zt, zt = null) : Bn = zt.sibling;
          var oa = P(Y, zt, W[Ut], de);
          if (oa === null) {
            zt === null && (zt = Bn);
            break;
          }
          e && zt && oa.alternate === null && t(Y, zt), Zn = c(oa, Zn, Ut), Zt === null ? ct = oa : Zt.sibling = oa, Zt = oa, zt = Bn;
        }
        if (Ut === W.length) {
          if (a(Y, zt), Fr()) {
            var Wr = Ut;
            Ms(Y, Wr);
          }
          return ct;
        }
        if (zt === null) {
          for (; Ut < W.length; Ut++) {
            var ni = j(Y, W[Ut], de);
            ni !== null && (Zn = c(ni, Zn, Ut), Zt === null ? ct = ni : Zt.sibling = ni, Zt = ni);
          }
          if (Fr()) {
            var Sa = Ut;
            Ms(Y, Sa);
          }
          return ct;
        }
        for (var ba = i(Y, zt); Ut < W.length; Ut++) {
          var la = X(ba, Y, Ut, W[Ut], de);
          la !== null && (e && la.alternate !== null && ba.delete(la.key === null ? Ut : la.key), Zn = c(la, Zn, Ut), Zt === null ? ct = la : Zt.sibling = la, Zt = la);
        }
        if (e && ba.forEach(function(Bf) {
          return t(Y, Bf);
        }), Fr()) {
          var kl = Ut;
          Ms(Y, kl);
        }
        return ct;
      }
      function _e(Y, ee, W, de) {
        var Oe = Si(W);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          W[Symbol.toStringTag] === "Generator" && (V0 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), V0 = !0), W.entries === Oe && (H0 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), H0 = !0);
          var we = Oe.call(W);
          if (we)
            for (var rt = null, ct = we.next(); !ct.done; ct = we.next()) {
              var Zt = ct.value;
              rt = q(Zt, rt, Y);
            }
        }
        var zt = Oe.call(W);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Zn = null, Ut = null, Bn = ee, oa = 0, Wr = 0, ni = null, Sa = zt.next(); Bn !== null && !Sa.done; Wr++, Sa = zt.next()) {
          Bn.index > Wr ? (ni = Bn, Bn = null) : ni = Bn.sibling;
          var ba = P(Y, Bn, Sa.value, de);
          if (ba === null) {
            Bn === null && (Bn = ni);
            break;
          }
          e && Bn && ba.alternate === null && t(Y, Bn), oa = c(ba, oa, Wr), Ut === null ? Zn = ba : Ut.sibling = ba, Ut = ba, Bn = ni;
        }
        if (Sa.done) {
          if (a(Y, Bn), Fr()) {
            var la = Wr;
            Ms(Y, la);
          }
          return Zn;
        }
        if (Bn === null) {
          for (; !Sa.done; Wr++, Sa = zt.next()) {
            var kl = j(Y, Sa.value, de);
            kl !== null && (oa = c(kl, oa, Wr), Ut === null ? Zn = kl : Ut.sibling = kl, Ut = kl);
          }
          if (Fr()) {
            var Bf = Wr;
            Ms(Y, Bf);
          }
          return Zn;
        }
        for (var vv = i(Y, Bn); !Sa.done; Wr++, Sa = zt.next()) {
          var Lo = X(vv, Y, Wr, Sa.value, de);
          Lo !== null && (e && Lo.alternate !== null && vv.delete(Lo.key === null ? Wr : Lo.key), oa = c(Lo, oa, Wr), Ut === null ? Zn = Lo : Ut.sibling = Lo, Ut = Lo);
        }
        if (e && vv.forEach(function(IO) {
          return t(Y, IO);
        }), Fr()) {
          var VO = Wr;
          Ms(Y, VO);
        }
        return Zn;
      }
      function Ke(Y, ee, W, de) {
        if (ee !== null && ee.tag === U) {
          a(Y, ee.sibling);
          var Oe = l(ee, W);
          return Oe.return = Y, Oe;
        }
        a(Y, ee);
        var we = gb(W, Y.mode, de);
        return we.return = Y, we;
      }
      function Ye(Y, ee, W, de) {
        for (var Oe = W.key, we = ee; we !== null; ) {
          if (we.key === Oe) {
            var rt = W.type;
            if (rt === Ya) {
              if (we.tag === O) {
                a(Y, we.sibling);
                var ct = l(we, W.props.children);
                return ct.return = Y, ct._debugSource = W._source, ct._debugOwner = W._owner, ct;
              }
            } else if (we.elementType === rt || // Keep this check inline so it only runs on the false path:
            Cx(we, W) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof rt == "object" && rt !== null && rt.$$typeof === Je && OE(rt) === we.type) {
              a(Y, we.sibling);
              var Zt = l(we, W.props);
              return Zt.ref = Pp(Y, we, W), Zt.return = Y, Zt._debugSource = W._source, Zt._debugOwner = W._owner, Zt;
            }
            a(Y, we);
            break;
          } else
            t(Y, we);
          we = we.sibling;
        }
        if (W.type === Ya) {
          var zt = Ou(W.props.children, Y.mode, de, W.key);
          return zt.return = Y, zt;
        } else {
          var Zn = yb(W, Y.mode, de);
          return Zn.ref = Pp(Y, ee, W), Zn.return = Y, Zn;
        }
      }
      function Nt(Y, ee, W, de) {
        for (var Oe = W.key, we = ee; we !== null; ) {
          if (we.key === Oe)
            if (we.tag === _ && we.stateNode.containerInfo === W.containerInfo && we.stateNode.implementation === W.implementation) {
              a(Y, we.sibling);
              var rt = l(we, W.children || []);
              return rt.return = Y, rt;
            } else {
              a(Y, we);
              break;
            }
          else
            t(Y, we);
          we = we.sibling;
        }
        var ct = Sb(W, Y.mode, de);
        return ct.return = Y, ct;
      }
      function Tt(Y, ee, W, de) {
        var Oe = typeof W == "object" && W !== null && W.type === Ya && W.key === null;
        if (Oe && (W = W.props.children), typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Xi:
              return v(Ye(Y, ee, W, de));
            case ua:
              return v(Nt(Y, ee, W, de));
            case Je:
              var we = W._payload, rt = W._init;
              return Tt(Y, ee, rt(we), de);
          }
          if (nr(W))
            return J(Y, ee, W, de);
          if (Si(W))
            return _e(Y, ee, W, de);
          Pm(Y, W);
        }
        return typeof W == "string" && W !== "" || typeof W == "number" ? v(Ke(Y, ee, "" + W, de)) : (typeof W == "function" && Fm(Y), a(Y, ee));
      }
      return Tt;
    }
    var kf = ME(!0), LE = ME(!1);
    function _k(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Ys(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Ys(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Ok(e, t) {
      for (var a = e.child; a !== null; )
        oO(a, t), a = a.sibling;
    }
    var Fp = {}, Cu = yu(Fp), jp = yu(Fp), jm = yu(Fp);
    function Hm(e) {
      if (e === Fp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function AE() {
      var e = Hm(jm.current);
      return e;
    }
    function W0(e, t) {
      aa(jm, t, e), aa(jp, e, e), aa(Cu, Fp, e);
      var a = YR(t);
      ra(Cu, e), aa(Cu, a, e);
    }
    function Nf(e) {
      ra(Cu, e), ra(jp, e), ra(jm, e);
    }
    function G0() {
      var e = Hm(Cu.current);
      return e;
    }
    function $E(e) {
      Hm(jm.current);
      var t = Hm(Cu.current), a = WR(t, e.type);
      t !== a && (aa(jp, e, e), aa(Cu, a, e));
    }
    function Q0(e) {
      jp.current === e && (ra(Cu, e), ra(jp, e));
    }
    var Mk = 0, zE = 1, UE = 1, Hp = 2, ji = yu(Mk);
    function K0(e, t) {
      return (e & t) !== 0;
    }
    function _f(e) {
      return e & zE;
    }
    function X0(e, t) {
      return e & zE | t;
    }
    function Lk(e, t) {
      return e | t;
    }
    function xu(e, t) {
      aa(ji, t, e);
    }
    function Of(e) {
      ra(ji, e);
    }
    function Ak(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Vm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === B) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || G1(i) || n0(i))
              return t;
          }
        } else if (t.tag === Ae && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & at) !== Qe;
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
    var Pa = (
      /*   */
      0
    ), yr = (
      /* */
      1
    ), Ro = (
      /*  */
      2
    ), gr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), q0 = [];
    function Z0() {
      for (var e = 0; e < q0.length; e++) {
        var t = q0[e];
        t._workInProgressVersionPrimary = null;
      }
      q0.length = 0;
    }
    function $k(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var De = f.ReactCurrentDispatcher, Vp = f.ReactCurrentBatchConfig, J0, Mf;
    J0 = /* @__PURE__ */ new Set();
    var Ps = te, qt = null, Sr = null, br = null, Im = !1, Ip = !1, Bp = 0, zk = 0, Uk = 25, re = null, hi = null, wu = -1, eS = !1;
    function Yt() {
      {
        var e = re;
        hi === null ? hi = [e] : hi.push(e);
      }
    }
    function Se() {
      {
        var e = re;
        hi !== null && (wu++, hi[wu] !== e && Pk(e));
      }
    }
    function Lf(e) {
      e != null && !nr(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function Pk(e) {
      {
        var t = ft(qt);
        if (!J0.has(t) && (J0.add(t), hi !== null)) {
          for (var a = "", i = 30, l = 0; l <= wu; l++) {
            for (var c = hi[l], v = l === wu ? e : c, g = l + 1 + ". " + c; g.length < i; )
              g += " ";
            g += v + `
`, a += g;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function tS(e, t) {
      if (eS)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Pe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, l, c) {
      Ps = c, qt = t, hi = e !== null ? e._debugHookTypes : null, wu = -1, eS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? De.current = iC : hi !== null ? De.current = aC : De.current = rC;
      var v = a(i, l);
      if (Ip) {
        var g = 0;
        do {
          if (Ip = !1, Bp = 0, g >= Uk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, eS = !1, Sr = null, br = null, t.updateQueue = null, wu = -1, De.current = oC, v = a(i, l);
        } while (Ip);
      }
      De.current = ny, t._debugHookTypes = hi;
      var E = Sr !== null && Sr.next !== null;
      if (Ps = te, qt = null, Sr = null, br = null, re = null, hi = null, wu = -1, e !== null && (e.flags & vr) !== (t.flags & vr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & St) !== Ze && h("Internal React error: Expected static flag was missing. Please notify the React team."), Im = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function $f() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function PE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & _a) !== Ze ? t.flags &= ~(Xo | qr | gn | pt) : t.flags &= ~(gn | pt), e.lanes = eu(e.lanes, a);
    }
    function FE() {
      if (De.current = ny, Im) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Im = !1;
      }
      Ps = te, qt = null, Sr = null, br = null, hi = null, wu = -1, re = null, ZE = !1, Ip = !1, Bp = 0;
    }
    function Do() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return br === null ? qt.memoizedState = br = e : br = br.next = e, br;
    }
    function mi() {
      var e;
      if (Sr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Sr.next;
      var a;
      if (br === null ? a = qt.memoizedState : a = br.next, a !== null)
        br = a, a = br.next, Sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Sr = e;
        var i = {
          memoizedState: Sr.memoizedState,
          baseState: Sr.baseState,
          baseQueue: Sr.baseQueue,
          queue: Sr.queue,
          next: null
        };
        br === null ? qt.memoizedState = br = i : br = br.next = i;
      }
      return br;
    }
    function jE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function nS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function rS(e, t, a) {
      var i = Do(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var c = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = c;
      var v = c.dispatch = Vk.bind(null, qt, c);
      return [i.memoizedState, v];
    }
    function aS(e, t, a) {
      var i = mi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = Sr, v = c.baseQueue, g = l.pending;
      if (g !== null) {
        if (v !== null) {
          var E = v.next, w = g.next;
          v.next = w, g.next = E;
        }
        c.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = g, l.pending = null;
      }
      if (v !== null) {
        var k = v.next, j = c.baseState, P = null, X = null, q = null, J = k;
        do {
          var _e = J.lane;
          if (ol(Ps, _e)) {
            if (q !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              q = q.next = Ye;
            }
            if (J.hasEagerState)
              j = J.eagerState;
            else {
              var Nt = J.action;
              j = e(j, Nt);
            }
          } else {
            var Ke = {
              lane: _e,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            q === null ? (X = q = Ke, P = j) : q = q.next = Ke, qt.lanes = vt(qt.lanes, _e), sv(_e);
          }
          J = J.next;
        } while (J !== null && J !== k);
        q === null ? P = j : q.next = X, Pe(j, i.memoizedState) || qp(), i.memoizedState = j, i.baseState = P, i.baseQueue = q, l.lastRenderedState = j;
      }
      var Tt = l.interleaved;
      if (Tt !== null) {
        var Y = Tt;
        do {
          var ee = Y.lane;
          qt.lanes = vt(qt.lanes, ee), sv(ee), Y = Y.next;
        } while (Y !== Tt);
      } else
        v === null && (l.lanes = te);
      var W = l.dispatch;
      return [i.memoizedState, W];
    }
    function iS(e, t, a) {
      var i = mi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = l.dispatch, v = l.pending, g = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var E = v.next, w = E;
        do {
          var k = w.action;
          g = e(g, k), w = w.next;
        } while (w !== E);
        Pe(g, i.memoizedState) || qp(), i.memoizedState = g, i.baseQueue === null && (i.baseState = g), l.lastRenderedState = g;
      }
      return [g, c];
    }
    function kA(e, t, a) {
    }
    function NA(e, t, a) {
    }
    function oS(e, t, a) {
      var i = qt, l = Do(), c, v = Fr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), Mf || c !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (c = t(), !Mf) {
          var g = t();
          Pe(c, g) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var E = by();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hs(E, Ps) || HE(i, t, c);
      }
      l.memoizedState = c;
      var w = {
        value: c,
        getSnapshot: t
      };
      return l.queue = w, Qm(IE.bind(null, i, w, e), [e]), i.flags |= gn, Yp(yr | jr, VE.bind(null, i, w, c, t), void 0, null), c;
    }
    function Bm(e, t, a) {
      var i = qt, l = mi(), c = t();
      if (!Mf) {
        var v = t();
        Pe(c, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var g = l.memoizedState, E = !Pe(g, c);
      E && (l.memoizedState = c, qp());
      var w = l.queue;
      if (Gp(IE.bind(null, i, w, e), [e]), w.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      br !== null && br.memoizedState.tag & yr) {
        i.flags |= gn, Yp(yr | jr, VE.bind(null, i, w, c, t), void 0, null);
        var k = by();
        if (k === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hs(k, Ps) || HE(i, t, c);
      }
      return c;
    }
    function HE(e, t, a) {
      e.flags |= os;
      var i = {
        getSnapshot: t,
        value: a
      }, l = qt.updateQueue;
      if (l === null)
        l = jE(), qt.updateQueue = l, l.stores = [i];
      else {
        var c = l.stores;
        c === null ? l.stores = [i] : c.push(i);
      }
    }
    function VE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, BE(t) && YE(e);
    }
    function IE(e, t, a) {
      var i = function() {
        BE(t) && YE(e);
      };
      return a(i);
    }
    function BE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Pe(a, i);
      } catch {
        return !0;
      }
    }
    function YE(e) {
      var t = Ua(e, tt);
      t !== null && wr(t, e, tt, tn);
    }
    function Ym(e) {
      var t = Do();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: nS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ik.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function lS(e) {
      return aS(nS);
    }
    function uS(e) {
      return iS(nS);
    }
    function Yp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = qt.updateQueue;
      if (c === null)
        c = jE(), qt.updateQueue = c, c.lastEffect = l.next = l;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = l.next = l;
        else {
          var g = v.next;
          v.next = l, l.next = g, c.lastEffect = l;
        }
      }
      return l;
    }
    function sS(e) {
      var t = Do();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Wm(e) {
      var t = mi();
      return t.memoizedState;
    }
    function Wp(e, t, a, i) {
      var l = Do(), c = i === void 0 ? null : i;
      qt.flags |= e, l.memoizedState = Yp(yr | t, a, void 0, c);
    }
    function Gm(e, t, a, i) {
      var l = mi(), c = i === void 0 ? null : i, v = void 0;
      if (Sr !== null) {
        var g = Sr.memoizedState;
        if (v = g.destroy, c !== null) {
          var E = g.deps;
          if (tS(c, E)) {
            l.memoizedState = Yp(t, a, v, c);
            return;
          }
        }
      }
      qt.flags |= e, l.memoizedState = Yp(yr | t, a, v, c);
    }
    function Qm(e, t) {
      return (qt.mode & _a) !== Ze ? Wp(Xo | gn | uo, jr, e, t) : Wp(gn | uo, jr, e, t);
    }
    function Gp(e, t) {
      return Gm(gn, jr, e, t);
    }
    function cS(e, t) {
      return Wp(pt, Ro, e, t);
    }
    function Km(e, t) {
      return Gm(pt, Ro, e, t);
    }
    function fS(e, t) {
      var a = pt;
      return a |= Xr, (qt.mode & _a) !== Ze && (a |= qr), Wp(a, gr, e, t);
    }
    function Xm(e, t) {
      return Gm(pt, gr, e, t);
    }
    function WE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var c = e();
        return l.current = c, function() {
          l.current = null;
        };
      }
    }
    function dS(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = pt;
      return l |= Xr, (qt.mode & _a) !== Ze && (l |= qr), Wp(l, gr, WE.bind(null, t, e), i);
    }
    function qm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Gm(pt, gr, WE.bind(null, t, e), i);
    }
    function Fk(e, t) {
    }
    var Zm = Fk;
    function pS(e, t) {
      var a = Do(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Jm(e, t) {
      var a = mi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (tS(i, c))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function vS(e, t) {
      var a = Do(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function ey(e, t) {
      var a = mi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (tS(i, c))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function hS(e) {
      var t = Do();
      return t.memoizedState = e, e;
    }
    function GE(e) {
      var t = mi(), a = Sr, i = a.memoizedState;
      return KE(t, i, e);
    }
    function QE(e) {
      var t = mi();
      if (Sr === null)
        return t.memoizedState = e, e;
      var a = Sr.memoizedState;
      return KE(t, a, e);
    }
    function KE(e, t, a) {
      var i = !Eg(Ps);
      if (i) {
        if (!Pe(a, t)) {
          var l = Qd();
          qt.lanes = vt(qt.lanes, l), sv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function jk(e, t, a) {
      var i = Ma();
      Kn(Nr(i, mr)), e(!0);
      var l = Vp.transition;
      Vp.transition = {};
      var c = Vp.transition;
      Vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Kn(i), Vp.transition = l, l === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function mS() {
      var e = Ym(!1), t = e[0], a = e[1], i = jk.bind(null, a), l = Do();
      return l.memoizedState = i, [t, i];
    }
    function XE() {
      var e = lS(), t = e[0], a = mi(), i = a.memoizedState;
      return [t, i];
    }
    function qE() {
      var e = uS(), t = e[0], a = mi(), i = a.memoizedState;
      return [t, i];
    }
    var ZE = !1;
    function Hk() {
      return ZE;
    }
    function yS() {
      var e = Do(), t = by(), a = t.identifierPrefix, i;
      if (Fr()) {
        var l = tk();
        i = ":" + a + "R" + l;
        var c = Bp++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var v = zk++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ty() {
      var e = mi(), t = e.memoizedState;
      return t;
    }
    function Vk(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Nu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (JE(e))
        eC(t, l);
      else {
        var c = yE(e, t, l, i);
        if (c !== null) {
          var v = ga();
          wr(c, e, i, v), tC(c, t, i);
        }
      }
      nC(e, i);
    }
    function Ik(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Nu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (JE(e))
        eC(t, l);
      else {
        var c = e.alternate;
        if (e.lanes === te && (c === null || c.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = De.current, De.current = Hi;
            try {
              var E = t.lastRenderedState, w = v(E, a);
              if (l.hasEagerState = !0, l.eagerState = w, Pe(w, E)) {
                Ek(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              De.current = g;
            }
          }
        }
        var k = yE(e, t, l, i);
        if (k !== null) {
          var j = ga();
          wr(k, e, i, j), tC(k, t, i);
        }
      }
      nC(e, i);
    }
    function JE(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function eC(e, t) {
      Ip = Im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function tC(e, t, a) {
      if (Gd(a)) {
        var i = t.lanes;
        i = Kd(i, e.pendingLanes);
        var l = vt(i, a);
        t.lanes = l, tu(e, l);
      }
    }
    function nC(e, t, a) {
      ho(e, t);
    }
    var ny = {
      readContext: sr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: ce
    }, rC = null, aC = null, iC = null, oC = null, ko = null, Hi = null, ry = null;
    {
      var gS = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, st = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      rC = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Yt(), Lf(t), pS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Yt(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Yt(), Lf(t), Qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Yt(), Lf(a), dS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Yt(), Lf(t), cS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Yt(), Lf(t), fS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Yt(), Lf(t);
          var a = De.current;
          De.current = ko;
          try {
            return vS(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Yt();
          var i = De.current;
          De.current = ko;
          try {
            return rS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Yt(), sS(e);
        },
        useState: function(e) {
          re = "useState", Yt();
          var t = De.current;
          De.current = ko;
          try {
            return Ym(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Yt(), hS(e);
        },
        useTransition: function() {
          return re = "useTransition", Yt(), mS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Yt(), oS(e, t, a);
        },
        useId: function() {
          return re = "useId", Yt(), yS();
        },
        unstable_isNewReconciler: ce
      }, aC = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Se(), pS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Se(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Se(), Qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Se(), dS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Se(), cS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Se(), fS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Se();
          var a = De.current;
          De.current = ko;
          try {
            return vS(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Se();
          var i = De.current;
          De.current = ko;
          try {
            return rS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Se(), sS(e);
        },
        useState: function(e) {
          re = "useState", Se();
          var t = De.current;
          De.current = ko;
          try {
            return Ym(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Se(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Se(), hS(e);
        },
        useTransition: function() {
          return re = "useTransition", Se(), mS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Se(), oS(e, t, a);
        },
        useId: function() {
          return re = "useId", Se(), yS();
        },
        unstable_isNewReconciler: ce
      }, iC = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Se(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Se(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Se(), qm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Se(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Se(), Xm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Se();
          var a = De.current;
          De.current = Hi;
          try {
            return ey(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Se();
          var i = De.current;
          De.current = Hi;
          try {
            return aS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Se(), Wm();
        },
        useState: function(e) {
          re = "useState", Se();
          var t = De.current;
          De.current = Hi;
          try {
            return lS(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Se(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Se(), GE(e);
        },
        useTransition: function() {
          return re = "useTransition", Se(), XE();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Se(), Bm(e, t);
        },
        useId: function() {
          return re = "useId", Se(), ty();
        },
        unstable_isNewReconciler: ce
      }, oC = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Se(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Se(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Se(), qm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Se(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Se(), Xm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Se();
          var a = De.current;
          De.current = ry;
          try {
            return ey(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Se();
          var i = De.current;
          De.current = ry;
          try {
            return iS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Se(), Wm();
        },
        useState: function(e) {
          re = "useState", Se();
          var t = De.current;
          De.current = ry;
          try {
            return uS(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Se(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Se(), QE(e);
        },
        useTransition: function() {
          return re = "useTransition", Se(), qE();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Se(), Bm(e, t);
        },
        useId: function() {
          return re = "useId", Se(), ty();
        },
        unstable_isNewReconciler: ce
      }, ko = {
        readContext: function(e) {
          return gS(), sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", st(), Yt(), pS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", st(), Yt(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", st(), Yt(), Qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", st(), Yt(), dS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", st(), Yt(), cS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", st(), Yt(), fS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", st(), Yt();
          var a = De.current;
          De.current = ko;
          try {
            return vS(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", st(), Yt();
          var i = De.current;
          De.current = ko;
          try {
            return rS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", st(), Yt(), sS(e);
        },
        useState: function(e) {
          re = "useState", st(), Yt();
          var t = De.current;
          De.current = ko;
          try {
            return Ym(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", st(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", st(), Yt(), hS(e);
        },
        useTransition: function() {
          return re = "useTransition", st(), Yt(), mS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", st(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", st(), Yt(), oS(e, t, a);
        },
        useId: function() {
          return re = "useId", st(), Yt(), yS();
        },
        unstable_isNewReconciler: ce
      }, Hi = {
        readContext: function(e) {
          return gS(), sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", st(), Se(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", st(), Se(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", st(), Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", st(), Se(), qm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", st(), Se(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", st(), Se(), Xm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", st(), Se();
          var a = De.current;
          De.current = Hi;
          try {
            return ey(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", st(), Se();
          var i = De.current;
          De.current = Hi;
          try {
            return aS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", st(), Se(), Wm();
        },
        useState: function(e) {
          re = "useState", st(), Se();
          var t = De.current;
          De.current = Hi;
          try {
            return lS(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", st(), Se(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", st(), Se(), GE(e);
        },
        useTransition: function() {
          return re = "useTransition", st(), Se(), XE();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", st(), Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", st(), Se(), Bm(e, t);
        },
        useId: function() {
          return re = "useId", st(), Se(), ty();
        },
        unstable_isNewReconciler: ce
      }, ry = {
        readContext: function(e) {
          return gS(), sr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", st(), Se(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", st(), Se(), sr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", st(), Se(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", st(), Se(), qm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", st(), Se(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", st(), Se(), Xm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", st(), Se();
          var a = De.current;
          De.current = Hi;
          try {
            return ey(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", st(), Se();
          var i = De.current;
          De.current = Hi;
          try {
            return iS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", st(), Se(), Wm();
        },
        useState: function(e) {
          re = "useState", st(), Se();
          var t = De.current;
          De.current = Hi;
          try {
            return uS(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", st(), Se(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", st(), Se(), QE(e);
        },
        useTransition: function() {
          return re = "useTransition", st(), Se(), qE();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", st(), Se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", st(), Se(), Bm(e, t);
        },
        useId: function() {
          return re = "useId", st(), Se(), ty();
        },
        unstable_isNewReconciler: ce
      };
    }
    var Tu = d.unstable_now, lC = 0, ay = -1, Qp = -1, iy = -1, SS = !1, oy = !1;
    function uC() {
      return SS;
    }
    function Bk() {
      oy = !0;
    }
    function Yk() {
      SS = !1, oy = !1;
    }
    function Wk() {
      SS = oy, oy = !1;
    }
    function sC() {
      return lC;
    }
    function cC() {
      lC = Tu();
    }
    function bS(e) {
      Qp = Tu(), e.actualStartTime < 0 && (e.actualStartTime = Tu());
    }
    function fC(e) {
      Qp = -1;
    }
    function ly(e, t) {
      if (Qp >= 0) {
        var a = Tu() - Qp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Qp = -1;
      }
    }
    function No(e) {
      if (ay >= 0) {
        var t = Tu() - ay;
        ay = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case D:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case G:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function ES(e) {
      if (iy >= 0) {
        var t = Tu() - iy;
        iy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case D:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case G:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function _o() {
      ay = Tu();
    }
    function CS() {
      iy = Tu();
    }
    function xS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Fs(e, t) {
      return {
        value: e,
        source: t,
        stack: rd(t),
        digest: null
      };
    }
    function wS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Gk(e, t) {
      return !0;
    }
    function TS(e, t) {
      try {
        var a = Gk(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, c = t.stack, v = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(i);
        }
        var g = l ? ft(l) : null, E = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === D)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var k = ft(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + k + ".");
        }
        var j = E + `
` + v + `

` + ("" + w);
        console.error(j);
      } catch (P) {
        setTimeout(function() {
          throw P;
        });
      }
    }
    var Qk = typeof WeakMap == "function" ? WeakMap : Map;
    function dC(e, t, a) {
      var i = Cl(tn, a);
      i.tag = T0, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        j_(l), TS(e, t);
      }, i;
    }
    function RS(e, t, a) {
      var i = Cl(tn, a);
      i.tag = T0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
          return l(c);
        }, i.callback = function() {
          xx(e), TS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        xx(e), TS(e, t), typeof l != "function" && P_(this);
        var E = t.value, w = t.stack;
        this.componentDidCatch(E, {
          componentStack: w !== null ? w : ""
        }), typeof l != "function" && (na(e.lanes, tt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ft(e) || "Unknown"));
      }), i;
    }
    function pC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Qk(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var c = H_.bind(null, e, t, a);
        hr && cv(e, a), t.then(c, c);
      }
    }
    function Kk(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        l.add(a);
    }
    function Xk(e, t) {
      var a = e.tag;
      if ((e.mode & St) === Ze && (a === T || a === V || a === ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function vC(e) {
      var t = e;
      do {
        if (t.tag === B && Ak(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function hC(e, t, a, i, l) {
      if ((e.mode & St) === Ze) {
        if (e === t)
          e.flags |= ar;
        else {
          if (e.flags |= at, a.flags |= ls, a.flags &= ~(Sc | ca), a.tag === R) {
            var c = a.alternate;
            if (c === null)
              a.tag = ve;
            else {
              var v = Cl(tn, tt);
              v.tag = Om, Eu(a, v, tt);
            }
          }
          a.lanes = vt(a.lanes, tt);
        }
        return e;
      }
      return e.flags |= ar, e.lanes = l, e;
    }
    function qk(e, t, a, i, l) {
      if (a.flags |= ca, hr && cv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        Xk(a), Fr() && a.mode & St && iE();
        var v = vC(t);
        if (v !== null) {
          v.flags &= ~Nn, hC(v, t, a, e, l), v.mode & St && pC(e, c, l), Kk(v, e, c);
          return;
        } else {
          if (!Jl(l)) {
            pC(e, c, l), ib();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = g;
        }
      } else if (Fr() && a.mode & St) {
        iE();
        var E = vC(t);
        if (E !== null) {
          (E.flags & ar) === Qe && (E.flags |= Nn), hC(E, t, a, e, l), g0(Fs(i, a));
          return;
        }
      }
      i = Fs(i, a), __(i);
      var w = t;
      do {
        switch (w.tag) {
          case D: {
            var k = i;
            w.flags |= ar;
            var j = Qn(l);
            w.lanes = vt(w.lanes, j);
            var P = dC(w, k, j);
            k0(w, P);
            return;
          }
          case R:
            var X = i, q = w.type, J = w.stateNode;
            if ((w.flags & at) === Qe && (typeof q.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !vx(J))) {
              w.flags |= ar;
              var _e = Qn(l);
              w.lanes = vt(w.lanes, _e);
              var Ke = RS(w, X, _e);
              k0(w, Ke);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function Zk() {
      return null;
    }
    var Kp = f.ReactCurrentOwner, Vi = !1, DS, Xp, kS, NS, _S, js, OS, uy;
    DS = {}, Xp = {}, kS = {}, NS = {}, _S = {}, js = !1, OS = {}, uy = {};
    function ma(e, t, a, i) {
      e === null ? t.child = LE(t, null, a, i) : t.child = kf(t, e.child, a, i);
    }
    function Jk(e, t, a, i) {
      t.child = kf(t, e.child, null, i), t.child = kf(t, null, a, i);
    }
    function mC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && zi(
          c,
          i,
          // Resolved props
          "prop",
          Jt(a)
        );
      }
      var v = a.render, g = t.ref, E, w;
      Df(t, l), vo(t);
      {
        if (Kp.current = t, Qa(!0), E = Af(e, t, v, i, g, l), w = $f(), t.mode & wn) {
          Gn(!0);
          try {
            E = Af(e, t, v, i, g, l), w = $f();
          } finally {
            Gn(!1);
          }
        }
        Qa(!1);
      }
      return qo(), e !== null && !Vi ? (PE(e, t, l), xl(e, t, l)) : (Fr() && w && d0(t), t.flags |= oo, ma(e, t, E, l), t.child);
    }
    function yC(e, t, a, i, l) {
      if (e === null) {
        var c = a.type;
        if (aO(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = c;
          return v = If(c), t.tag = ae, t.type = v, AS(t, c), gC(e, t, v, i, l);
        }
        {
          var g = c.propTypes;
          g && zi(
            g,
            i,
            // Resolved props
            "prop",
            Jt(c)
          );
        }
        var E = mb(a.type, null, i, t, t.mode, l);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var w = a.type, k = w.propTypes;
        k && zi(
          k,
          i,
          // Resolved props
          "prop",
          Jt(w)
        );
      }
      var j = e.child, P = jS(e, l);
      if (!P) {
        var X = j.memoizedProps, q = a.compare;
        if (q = q !== null ? q : We, q(X, i) && e.ref === t.ref)
          return xl(e, t, l);
      }
      t.flags |= oo;
      var J = Ys(j, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function gC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Je) {
          var v = c, g = v._payload, E = v._init;
          try {
            c = E(g);
          } catch {
            c = null;
          }
          var w = c && c.propTypes;
          w && zi(
            w,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Jt(c)
          );
        }
      }
      if (e !== null) {
        var k = e.memoizedProps;
        if (We(k, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Vi = !1, t.pendingProps = i = k, jS(e, l))
            (e.flags & ls) !== Qe && (Vi = !0);
          else
            return t.lanes = e.lanes, xl(e, t, l);
      }
      return MS(e, t, a, i, l);
    }
    function SC(e, t, a) {
      var i = t.pendingProps, l = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || me)
        if ((t.mode & St) === Ze) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Ey(t, a);
        } else if (na(a, ta)) {
          var j = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var P = c !== null ? c.baseLanes : a;
          Ey(t, P);
        } else {
          var g = null, E;
          if (c !== null) {
            var w = c.baseLanes;
            E = vt(w, a);
          } else
            E = a;
          t.lanes = t.childLanes = ta;
          var k = {
            baseLanes: E,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = k, t.updateQueue = null, Ey(t, E), null;
        }
      else {
        var X;
        c !== null ? (X = vt(c.baseLanes, a), t.memoizedState = null) : X = a, Ey(t, X);
      }
      return ma(e, t, l, a), t.child;
    }
    function eN(e, t, a) {
      var i = t.pendingProps;
      return ma(e, t, i, a), t.child;
    }
    function tN(e, t, a) {
      var i = t.pendingProps.children;
      return ma(e, t, i, a), t.child;
    }
    function nN(e, t, a) {
      {
        t.flags |= pt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, c = l.children;
      return ma(e, t, c, a), t.child;
    }
    function bC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Kr, t.flags |= Md);
    }
    function MS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && zi(
          c,
          i,
          // Resolved props
          "prop",
          Jt(a)
        );
      }
      var v;
      {
        var g = Ef(t, a, !0);
        v = Cf(t, g);
      }
      var E, w;
      Df(t, l), vo(t);
      {
        if (Kp.current = t, Qa(!0), E = Af(e, t, a, i, v, l), w = $f(), t.mode & wn) {
          Gn(!0);
          try {
            E = Af(e, t, a, i, v, l), w = $f();
          } finally {
            Gn(!1);
          }
        }
        Qa(!1);
      }
      return qo(), e !== null && !Vi ? (PE(e, t, l), xl(e, t, l)) : (Fr() && w && d0(t), t.flags |= oo, ma(e, t, E, l), t.child);
    }
    function EC(e, t, a, i, l) {
      {
        switch (SO(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, g = new v(t.memoizedProps, c.context), E = g.state;
            c.updater.enqueueSetState(c, E, null);
            break;
          }
          case !0: {
            t.flags |= at, t.flags |= ar;
            var w = new Error("Simulated error coming from DevTools"), k = Qn(l);
            t.lanes = vt(t.lanes, k);
            var j = RS(t, Fs(w, t), k);
            k0(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var P = a.propTypes;
          P && zi(
            P,
            i,
            // Resolved props
            "prop",
            Jt(a)
          );
        }
      }
      var X;
      To(a) ? (X = !0, bm(t)) : X = !1, Df(t, l);
      var q = t.stateNode, J;
      q === null ? (cy(e, t), kE(t, a, i), j0(t, a, i, l), J = !0) : e === null ? J = kk(t, a, i, l) : J = Nk(e, t, a, i, l);
      var _e = LS(e, t, a, J, X, l);
      {
        var Ke = t.stateNode;
        J && Ke.props !== i && (js || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ft(t) || "a component"), js = !0);
      }
      return _e;
    }
    function LS(e, t, a, i, l, c) {
      bC(e, t);
      var v = (t.flags & at) !== Qe;
      if (!i && !v)
        return l && tE(t, a, !1), xl(e, t, c);
      var g = t.stateNode;
      Kp.current = t;
      var E;
      if (v && typeof a.getDerivedStateFromError != "function")
        E = null, fC();
      else {
        vo(t);
        {
          if (Qa(!0), E = g.render(), t.mode & wn) {
            Gn(!0);
            try {
              g.render();
            } finally {
              Gn(!1);
            }
          }
          Qa(!1);
        }
        qo();
      }
      return t.flags |= oo, e !== null && v ? Jk(e, t, E, c) : ma(e, t, E, c), t.memoizedState = g.state, l && tE(t, a, !0), t.child;
    }
    function CC(e) {
      var t = e.stateNode;
      t.pendingContext ? J1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && J1(e, t.context, !1), W0(e, t.containerInfo);
    }
    function rN(e, t, a) {
      if (CC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, c = l.element;
      bE(e, t), $m(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (l.isDehydrated) {
        var E = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, w = t.updateQueue;
        if (w.baseState = E, t.memoizedState = E, t.flags & Nn) {
          var k = Fs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return xC(e, t, g, a, k);
        } else if (g !== c) {
          var j = Fs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return xC(e, t, g, a, j);
        } else {
          lk(t);
          var P = LE(t, null, g, a);
          t.child = P;
          for (var X = P; X; )
            X.flags = X.flags & ~ln | Da, X = X.sibling;
        }
      } else {
        if (Tf(), g === c)
          return xl(e, t, a);
        ma(e, t, g, a);
      }
      return t.child;
    }
    function xC(e, t, a, i, l) {
      return Tf(), g0(l), t.flags |= Nn, ma(e, t, a, i), t.child;
    }
    function aN(e, t, a) {
      $E(t), e === null && y0(t);
      var i = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = l.children, g = Zg(i, l);
      return g ? v = null : c !== null && Zg(i, c) && (t.flags |= Bt), bC(e, t), ma(e, t, v, a), t.child;
    }
    function iN(e, t) {
      return e === null && y0(t), null;
    }
    function oN(e, t, a, i) {
      cy(e, t);
      var l = t.pendingProps, c = a, v = c._payload, g = c._init, E = g(v);
      t.type = E;
      var w = t.tag = iO(E), k = Fi(E, l), j;
      switch (w) {
        case T:
          return AS(t, E), t.type = E = If(E), j = MS(null, t, E, k, i), j;
        case R:
          return t.type = E = cb(E), j = EC(null, t, E, k, i), j;
        case V:
          return t.type = E = fb(E), j = mC(null, t, E, k, i), j;
        case ue: {
          if (t.type !== t.elementType) {
            var P = E.propTypes;
            P && zi(
              P,
              k,
              // Resolved for outer only
              "prop",
              Jt(E)
            );
          }
          return j = yC(
            null,
            t,
            E,
            Fi(E.type, k),
            // The inner type can have defaults too
            i
          ), j;
        }
      }
      var X = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Je && (X = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + X));
    }
    function lN(e, t, a, i, l) {
      cy(e, t), t.tag = R;
      var c;
      return To(a) ? (c = !0, bm(t)) : c = !1, Df(t, l), kE(t, a, i), j0(t, a, i, l), LS(null, t, a, !0, c, l);
    }
    function uN(e, t, a, i) {
      cy(e, t);
      var l = t.pendingProps, c;
      {
        var v = Ef(t, a, !1);
        c = Cf(t, v);
      }
      Df(t, i);
      var g, E;
      vo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var w = Jt(a) || "Unknown";
          DS[w] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), DS[w] = !0);
        }
        t.mode & wn && Pi.recordLegacyContextWarning(t, null), Qa(!0), Kp.current = t, g = Af(null, t, a, l, c, i), E = $f(), Qa(!1);
      }
      if (qo(), t.flags |= oo, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var k = Jt(a) || "Unknown";
        Xp[k] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), Xp[k] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var j = Jt(a) || "Unknown";
          Xp[j] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), Xp[j] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var P = !1;
        return To(a) ? (P = !0, bm(t)) : P = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, D0(t), DE(t, g), j0(t, a, l, i), LS(null, t, a, !0, P, i);
      } else {
        if (t.tag = T, t.mode & wn) {
          Gn(!0);
          try {
            g = Af(null, t, a, l, c, i), E = $f();
          } finally {
            Gn(!1);
          }
        }
        return Fr() && E && d0(t), ma(null, t, g, i), AS(t, a), t.child;
      }
    }
    function AS(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = xa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", c = e._debugSource;
          c && (l = c.fileName + ":" + c.lineNumber), _S[l] || (_S[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Jt(t) || "Unknown";
          NS[v] || (h("%s: Function components do not support getDerivedStateFromProps.", v), NS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Jt(t) || "Unknown";
          kS[g] || (h("%s: Function components do not support contextType.", g), kS[g] = !0);
        }
      }
    }
    var $S = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function zS(e) {
      return {
        baseLanes: e,
        cachePool: Zk(),
        transitions: null
      };
    }
    function sN(e, t) {
      var a = null;
      return {
        baseLanes: vt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function cN(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return K0(e, Hp);
    }
    function fN(e, t) {
      return eu(e.childLanes, t);
    }
    function wC(e, t, a) {
      var i = t.pendingProps;
      bO(t) && (t.flags |= at);
      var l = ji.current, c = !1, v = (t.flags & at) !== Qe;
      if (v || cN(l, e) ? (c = !0, t.flags &= ~at) : (e === null || e.memoizedState !== null) && (l = Lk(l, UE)), l = _f(l), xu(t, l), e === null) {
        y0(t);
        var g = t.memoizedState;
        if (g !== null) {
          var E = g.dehydrated;
          if (E !== null)
            return mN(t, E);
        }
        var w = i.children, k = i.fallback;
        if (c) {
          var j = dN(t, w, k, a), P = t.child;
          return P.memoizedState = zS(a), t.memoizedState = $S, j;
        } else
          return US(t, w);
      } else {
        var X = e.memoizedState;
        if (X !== null) {
          var q = X.dehydrated;
          if (q !== null)
            return yN(e, t, v, i, q, X, a);
        }
        if (c) {
          var J = i.fallback, _e = i.children, Ke = vN(e, t, _e, J, a), Ye = t.child, Nt = e.child.memoizedState;
          return Ye.memoizedState = Nt === null ? zS(a) : sN(Nt, a), Ye.childLanes = fN(e, a), t.memoizedState = $S, Ke;
        } else {
          var Tt = i.children, Y = pN(e, t, Tt, a);
          return t.memoizedState = null, Y;
        }
      }
    }
    function US(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, c = PS(l, i);
      return c.return = e, e.child = c, c;
    }
    function dN(e, t, a, i) {
      var l = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, g, E;
      return (l & St) === Ze && c !== null ? (g = c, g.childLanes = te, g.pendingProps = v, e.mode & et && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), E = Ou(a, l, i, null)) : (g = PS(v, l), E = Ou(a, l, i, null)), g.return = e, E.return = e, g.sibling = E, e.child = g, E;
    }
    function PS(e, t, a) {
      return Tx(e, t, te, null);
    }
    function TC(e, t) {
      return Ys(e, t);
    }
    function pN(e, t, a, i) {
      var l = e.child, c = l.sibling, v = TC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & St) === Ze && (v.lanes = i), v.return = t, v.sibling = null, c !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [c], t.flags |= Ft) : g.push(c);
      }
      return t.child = v, v;
    }
    function vN(e, t, a, i, l) {
      var c = t.mode, v = e.child, g = v.sibling, E = {
        mode: "hidden",
        children: a
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & St) === Ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var k = t.child;
        w = k, w.childLanes = te, w.pendingProps = E, t.mode & et && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = v.selfBaseDuration, w.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        w = TC(v, E), w.subtreeFlags = v.subtreeFlags & vr;
      var j;
      return g !== null ? j = Ys(g, i) : (j = Ou(i, c, l, null), j.flags |= ln), j.return = t, w.return = t, w.sibling = j, t.child = w, j;
    }
    function sy(e, t, a, i) {
      i !== null && g0(i), kf(t, e.child, null, a);
      var l = t.pendingProps, c = l.children, v = US(t, c);
      return v.flags |= ln, t.memoizedState = null, v;
    }
    function hN(e, t, a, i, l) {
      var c = t.mode, v = {
        mode: "visible",
        children: a
      }, g = PS(v, c), E = Ou(i, c, l, null);
      return E.flags |= ln, g.return = t, E.return = t, g.sibling = E, t.child = g, (t.mode & St) !== Ze && kf(t, e.child, null, l), E;
    }
    function mN(e, t, a) {
      return (e.mode & St) === Ze ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = tt) : n0(t) ? e.lanes = el : e.lanes = ta, null;
    }
    function yN(e, t, a, i, l, c, v) {
      if (a)
        if (t.flags & Nn) {
          t.flags &= ~Nn;
          var Y = wS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return sy(e, t, v, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= at, null;
          var ee = i.children, W = i.fallback, de = hN(e, t, ee, W, v), Oe = t.child;
          return Oe.memoizedState = zS(v), t.memoizedState = $S, de;
        }
      else {
        if (ik(), (t.mode & St) === Ze)
          return sy(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (n0(l)) {
          var g, E, w;
          {
            var k = CD(l);
            g = k.digest, E = k.message, w = k.stack;
          }
          var j;
          E ? j = new Error(E) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var P = wS(j, g, w);
          return sy(e, t, v, P);
        }
        var X = na(v, e.childLanes);
        if (Vi || X) {
          var q = by();
          if (q !== null) {
            var J = xg(q, v);
            if (J !== Dt && J !== c.retryLane) {
              c.retryLane = J;
              var _e = tn;
              Ua(e, J), wr(q, e, J, _e);
            }
          }
          ib();
          var Ke = wS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return sy(e, t, v, Ke);
        } else if (G1(l)) {
          t.flags |= at, t.child = e.child;
          var Ye = V_.bind(null, e);
          return xD(l, Ye), null;
        } else {
          uk(t, l, c.treeContext);
          var Nt = i.children, Tt = US(t, Nt);
          return Tt.flags |= Da, Tt;
        }
      }
    }
    function RC(e, t, a) {
      e.lanes = vt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = vt(i.lanes, t)), x0(e.return, t, a);
    }
    function gN(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === B) {
          var l = i.memoizedState;
          l !== null && RC(i, a, e);
        } else if (i.tag === Ae)
          RC(i, a, e);
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
    function SN(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Vm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bN(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !OS[e])
        if (OS[e] = !0, typeof e == "string")
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
    function EN(e, t) {
      e !== void 0 && !uy[e] && (e !== "collapsed" && e !== "hidden" ? (uy[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (uy[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function DC(e, t) {
      {
        var a = nr(e), i = !a && typeof Si(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function CN(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (nr(e)) {
          for (var a = 0; a < e.length; a++)
            if (!DC(e[a], a))
              return;
        } else {
          var i = Si(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var c = l.next(), v = 0; !c.done; c = l.next()) {
                if (!DC(c.value, v))
                  return;
                v++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function FS(e, t, a, i, l) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = l);
    }
    function kC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, c = i.tail, v = i.children;
      bN(l), EN(c, l), CN(v, l), ma(e, t, v, a);
      var g = ji.current, E = K0(g, Hp);
      if (E)
        g = X0(g, Hp), t.flags |= at;
      else {
        var w = e !== null && (e.flags & at) !== Qe;
        w && gN(t, t.child, a), g = _f(g);
      }
      if (xu(t, g), (t.mode & St) === Ze)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var k = SN(t.child), j;
            k === null ? (j = t.child, t.child = null) : (j = k.sibling, k.sibling = null), FS(
              t,
              !1,
              // isBackwards
              j,
              k,
              c
            );
            break;
          }
          case "backwards": {
            var P = null, X = t.child;
            for (t.child = null; X !== null; ) {
              var q = X.alternate;
              if (q !== null && Vm(q) === null) {
                t.child = X;
                break;
              }
              var J = X.sibling;
              X.sibling = P, P = X, X = J;
            }
            FS(
              t,
              !0,
              // isBackwards
              P,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            FS(
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
    function xN(e, t, a) {
      W0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = kf(t, null, i, a) : ma(e, t, i, a), t.child;
    }
    var NC = !1;
    function wN(e, t, a) {
      var i = t.type, l = i._context, c = t.pendingProps, v = t.memoizedProps, g = c.value;
      {
        "value" in c || NC || (NC = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && zi(E, c, "prop", "Context.Provider");
      }
      if (mE(t, l, g), v !== null) {
        var w = v.value;
        if (Pe(w, g)) {
          if (v.children === c.children && !gm())
            return xl(e, t, a);
        } else
          gk(t, l, a);
      }
      var k = c.children;
      return ma(e, t, k, a), t.child;
    }
    var _C = !1;
    function TN(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_C || (_C = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, c = l.children;
      typeof c != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var v = sr(i);
      vo(t);
      var g;
      return Kp.current = t, Qa(!0), g = c(v), Qa(!1), qo(), t.flags |= oo, ma(e, t, g, a), t.child;
    }
    function qp() {
      Vi = !0;
    }
    function cy(e, t) {
      (t.mode & St) === Ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ln);
    }
    function xl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), fC(), sv(t.lanes), na(a, t.childLanes) ? (_k(e, t), t.child) : null;
    }
    function RN(e, t, a) {
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
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= Ft) : c.push(e), a.flags |= ln, a;
      }
    }
    function jS(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function DN(e, t, a) {
      switch (t.tag) {
        case D:
          CC(t), t.stateNode, Tf();
          break;
        case L:
          $E(t);
          break;
        case R: {
          var i = t.type;
          To(i) && bm(t);
          break;
        }
        case _:
          W0(t, t.stateNode.containerInfo);
          break;
        case Q: {
          var l = t.memoizedProps.value, c = t.type._context;
          mE(t, c, l);
          break;
        }
        case G:
          {
            var v = na(a, t.childLanes);
            v && (t.flags |= pt);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case B: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return xu(t, _f(ji.current)), t.flags |= at, null;
            var w = t.child, k = w.childLanes;
            if (na(a, k))
              return wC(e, t, a);
            xu(t, _f(ji.current));
            var j = xl(e, t, a);
            return j !== null ? j.sibling : null;
          } else
            xu(t, _f(ji.current));
          break;
        }
        case Ae: {
          var P = (e.flags & at) !== Qe, X = na(a, t.childLanes);
          if (P) {
            if (X)
              return kC(e, t, a);
            t.flags |= at;
          }
          var q = t.memoizedState;
          if (q !== null && (q.rendering = null, q.tail = null, q.lastEffect = null), xu(t, ji.current), X)
            break;
          return null;
        }
        case ke:
        case Be:
          return t.lanes = te, SC(e, t, a);
      }
      return xl(e, t, a);
    }
    function OC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return RN(e, t, mb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || gm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Vi = !0;
        else {
          var c = jS(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & at) === Qe)
            return Vi = !1, DN(e, t, a);
          (e.flags & ls) !== Qe ? Vi = !0 : Vi = !1;
        }
      } else if (Vi = !1, Fr() && JD(t)) {
        var v = t.index, g = ek();
        aE(t, g, v);
      }
      switch (t.lanes = te, t.tag) {
        case M:
          return uN(e, t, t.type, a);
        case se: {
          var E = t.elementType;
          return oN(e, t, E, a);
        }
        case T: {
          var w = t.type, k = t.pendingProps, j = t.elementType === w ? k : Fi(w, k);
          return MS(e, t, w, j, a);
        }
        case R: {
          var P = t.type, X = t.pendingProps, q = t.elementType === P ? X : Fi(P, X);
          return EC(e, t, P, q, a);
        }
        case D:
          return rN(e, t, a);
        case L:
          return aN(e, t, a);
        case U:
          return iN(e, t);
        case B:
          return wC(e, t, a);
        case _:
          return xN(e, t, a);
        case V: {
          var J = t.type, _e = t.pendingProps, Ke = t.elementType === J ? _e : Fi(J, _e);
          return mC(e, t, J, Ke, a);
        }
        case O:
          return eN(e, t, a);
        case H:
          return tN(e, t, a);
        case G:
          return nN(e, t, a);
        case Q:
          return wN(e, t, a);
        case z:
          return TN(e, t, a);
        case ue: {
          var Ye = t.type, Nt = t.pendingProps, Tt = Fi(Ye, Nt);
          if (t.type !== t.elementType) {
            var Y = Ye.propTypes;
            Y && zi(
              Y,
              Tt,
              // Resolved for outer only
              "prop",
              Jt(Ye)
            );
          }
          return Tt = Fi(Ye.type, Tt), yC(e, t, Ye, Tt, a);
        }
        case ae:
          return gC(e, t, t.type, t.pendingProps, a);
        case ve: {
          var ee = t.type, W = t.pendingProps, de = t.elementType === ee ? W : Fi(ee, W);
          return lN(e, t, ee, de, a);
        }
        case Ae:
          return kC(e, t, a);
        case je:
          break;
        case ke:
          return SC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zf(e) {
      e.flags |= pt;
    }
    function MC(e) {
      e.flags |= Kr, e.flags |= Md;
    }
    var LC, HS, AC, $C;
    LC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === L || l.tag === U)
          XR(e, l.stateNode);
        else if (l.tag !== _) {
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
    }, HS = function(e, t) {
    }, AC = function(e, t, a, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, g = G0(), E = ZR(v, a, c, i, l, g);
        t.updateQueue = E, E && zf(t);
      }
    }, $C = function(e, t, a, i) {
      a !== i && zf(t);
    };
    function Zp(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, c = null; l !== null; )
              l.alternate !== null && (c = l), l = l.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = te, i = Qe;
      if (t) {
        if ((e.mode & et) !== Ze) {
          for (var E = e.selfBaseDuration, w = e.child; w !== null; )
            a = vt(a, vt(w.lanes, w.childLanes)), i |= w.subtreeFlags & vr, i |= w.flags & vr, E += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = E;
        } else
          for (var k = e.child; k !== null; )
            a = vt(a, vt(k.lanes, k.childLanes)), i |= k.subtreeFlags & vr, i |= k.flags & vr, k.return = e, k = k.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & et) !== Ze) {
          for (var l = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            a = vt(a, vt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = c;
        } else
          for (var g = e.child; g !== null; )
            a = vt(a, vt(g.lanes, g.childLanes)), i |= g.subtreeFlags, i |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function kN(e, t, a) {
      if (pk() && (t.mode & St) !== Ze && (t.flags & at) === Qe)
        return fE(t), Tf(), t.flags |= Nn | ca | ar, !1;
      var i = Tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (fk(t), Hr(t), (t.mode & et) !== Ze) {
            var l = a !== null;
            if (l) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Tf(), (t.flags & at) === Qe && (t.memoizedState = null), t.flags |= pt, Hr(t), (t.mode & et) !== Ze) {
            var v = a !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return dE(), !0;
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      switch (p0(t), t.tag) {
        case M:
        case se:
        case ae:
        case T:
        case V:
        case O:
        case H:
        case G:
        case z:
        case ue:
          return Hr(t), null;
        case R: {
          var l = t.type;
          return To(l) && Sm(t), Hr(t), null;
        }
        case D: {
          var c = t.stateNode;
          if (Nf(t), s0(t), Z0(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = Tm(t);
            if (v)
              zf(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Nn) !== Qe) && (t.flags |= Ra, dE());
            }
          }
          return HS(e, t), Hr(t), null;
        }
        case L: {
          Q0(t);
          var E = AE(), w = t.type;
          if (e !== null && t.stateNode != null)
            AC(e, t, w, i, E), e.ref !== t.ref && MC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var k = G0(), j = Tm(t);
            if (j)
              sk(t, E, k) && zf(t);
            else {
              var P = KR(w, i, E, k, t);
              LC(P, t, !1, !1), t.stateNode = P, qR(P, w, i, E) && zf(t);
            }
            t.ref !== null && MC(t);
          }
          return Hr(t), null;
        }
        case U: {
          var X = i;
          if (e && t.stateNode != null) {
            var q = e.memoizedProps;
            $C(e, t, q, X);
          } else {
            if (typeof X != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = AE(), _e = G0(), Ke = Tm(t);
            Ke ? ck(t) && zf(t) : t.stateNode = JR(X, J, _e, t);
          }
          return Hr(t), null;
        }
        case B: {
          Of(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Nt = kN(e, t, Ye);
            if (!Nt)
              return t.flags & ar ? t : null;
          }
          if ((t.flags & at) !== Qe)
            return t.lanes = a, (t.mode & et) !== Ze && xS(t), t;
          var Tt = Ye !== null, Y = e !== null && e.memoizedState !== null;
          if (Tt !== Y && Tt) {
            var ee = t.child;
            if (ee.flags |= lo, (t.mode & St) !== Ze) {
              var W = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Xe);
              W || K0(ji.current, UE) ? N_() : ib();
            }
          }
          var de = t.updateQueue;
          if (de !== null && (t.flags |= pt), Hr(t), (t.mode & et) !== Ze && Tt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case _:
          return Nf(t), HS(e, t), e === null && WD(t.stateNode.containerInfo), Hr(t), null;
        case Q:
          var we = t.type._context;
          return C0(we, t), Hr(t), null;
        case ve: {
          var rt = t.type;
          return To(rt) && Sm(t), Hr(t), null;
        }
        case Ae: {
          Of(t);
          var ct = t.memoizedState;
          if (ct === null)
            return Hr(t), null;
          var Zt = (t.flags & at) !== Qe, zt = ct.rendering;
          if (zt === null)
            if (Zt)
              Zp(ct, !1);
            else {
              var Zn = O_() && (e === null || (e.flags & at) === Qe);
              if (!Zn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Bn = Vm(Ut);
                  if (Bn !== null) {
                    Zt = !0, t.flags |= at, Zp(ct, !1);
                    var oa = Bn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= pt), t.subtreeFlags = Qe, Ok(t, a), xu(t, X0(ji.current, Hp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              ct.tail !== null && xn() > rx() && (t.flags |= at, Zt = !0, Zp(ct, !1), t.lanes = Yd);
            }
          else {
            if (!Zt) {
              var Wr = Vm(zt);
              if (Wr !== null) {
                t.flags |= at, Zt = !0;
                var ni = Wr.updateQueue;
                if (ni !== null && (t.updateQueue = ni, t.flags |= pt), Zp(ct, !0), ct.tail === null && ct.tailMode === "hidden" && !zt.alternate && !Fr())
                  return Hr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                xn() * 2 - ct.renderingStartTime > rx() && a !== ta && (t.flags |= at, Zt = !0, Zp(ct, !1), t.lanes = Yd);
            }
            if (ct.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Sa = ct.last;
              Sa !== null ? Sa.sibling = zt : t.child = zt, ct.last = zt;
            }
          }
          if (ct.tail !== null) {
            var ba = ct.tail;
            ct.rendering = ba, ct.tail = ba.sibling, ct.renderingStartTime = xn(), ba.sibling = null;
            var la = ji.current;
            return Zt ? la = X0(la, Hp) : la = _f(la), xu(t, la), ba;
          }
          return Hr(t), null;
        }
        case je:
          break;
        case ke:
        case Be: {
          ab(t);
          var kl = t.memoizedState, Bf = kl !== null;
          if (e !== null) {
            var vv = e.memoizedState, Lo = vv !== null;
            Lo !== Bf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !me && (t.flags |= lo);
          }
          return !Bf || (t.mode & St) === Ze ? Hr(t) : na(Mo, ta) && (Hr(t), t.subtreeFlags & (ln | pt) && (t.flags |= lo)), null;
        }
        case _t:
          return null;
        case lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function NN(e, t, a) {
      switch (p0(t), t.tag) {
        case R: {
          var i = t.type;
          To(i) && Sm(t);
          var l = t.flags;
          return l & ar ? (t.flags = l & ~ar | at, (t.mode & et) !== Ze && xS(t), t) : null;
        }
        case D: {
          t.stateNode, Nf(t), s0(t), Z0();
          var c = t.flags;
          return (c & ar) !== Qe && (c & at) === Qe ? (t.flags = c & ~ar | at, t) : null;
        }
        case L:
          return Q0(t), null;
        case B: {
          Of(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Tf();
          }
          var g = t.flags;
          return g & ar ? (t.flags = g & ~ar | at, (t.mode & et) !== Ze && xS(t), t) : null;
        }
        case Ae:
          return Of(t), null;
        case _:
          return Nf(t), null;
        case Q:
          var E = t.type._context;
          return C0(E, t), null;
        case ke:
        case Be:
          return ab(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function UC(e, t, a) {
      switch (p0(t), t.tag) {
        case R: {
          var i = t.type.childContextTypes;
          i != null && Sm(t);
          break;
        }
        case D: {
          t.stateNode, Nf(t), s0(t), Z0();
          break;
        }
        case L: {
          Q0(t);
          break;
        }
        case _:
          Nf(t);
          break;
        case B:
          Of(t);
          break;
        case Ae:
          Of(t);
          break;
        case Q:
          var l = t.type._context;
          C0(l, t);
          break;
        case ke:
        case Be:
          ab(t);
          break;
      }
    }
    var PC = null;
    PC = /* @__PURE__ */ new Set();
    var fy = !1, Vr = !1, _N = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Uf = null, Pf = null;
    function ON(e) {
      Ko(null, function() {
        throw e;
      }), _d();
    }
    var MN = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & et)
        try {
          _o(), t.componentWillUnmount();
        } finally {
          No(e);
        }
      else
        t.componentWillUnmount();
    };
    function FC(e, t) {
      try {
        Ru(gr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function VS(e, t, a) {
      try {
        MN(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function LN(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function jC(e, t) {
      try {
        VC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Ff(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ee && nn && e.mode & et)
              try {
                _o(), i = a(null);
              } finally {
                No(e);
              }
            else
              i = a(null);
          } catch (l) {
            fn(e, t, l);
          }
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          a.current = null;
    }
    function dy(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var HC = !1;
    function AN(e, t) {
      GR(e.containerInfo), Fe = t, $N();
      var a = HC;
      return HC = !1, a;
    }
    function $N() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & Wl) !== Qe && t !== null ? (t.return = e, Fe = t) : zN();
      }
    }
    function zN() {
      for (; Fe !== null; ) {
        var e = Fe;
        Xt(e);
        try {
          UN(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        Wn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function UN(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ra) !== Qe) {
        switch (Xt(e), e.tag) {
          case T:
          case V:
          case ae:
            break;
          case R: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !js && (c.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(e) || "instance"), c.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Fi(e.type, i), l);
              {
                var g = PC;
                v === void 0 && !g.has(e.type) && (g.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ft(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case D: {
            {
              var E = e.stateNode;
              gD(E.containerInfo);
            }
            break;
          }
          case L:
          case U:
          case _:
          case ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Wn();
      }
    }
    function Ii(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & jr) !== Pa ? Dc(t) : (e & gr) !== Pa && kc(t), (e & Ro) !== Pa && fv(!0), dy(t, a, g), (e & Ro) !== Pa && fv(!1), (e & jr) !== Pa ? wh() : (e & gr) !== Pa && Gl());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function Ru(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, c = l;
        do {
          if ((c.tag & e) === e) {
            (e & jr) !== Pa ? xh(t) : (e & gr) !== Pa && Th(t);
            var v = c.create;
            (e & Ro) !== Pa && fv(!0), c.destroy = v(), (e & Ro) !== Pa && fv(!1), (e & jr) !== Pa ? Vd() : (e & gr) !== Pa && Rh();
            {
              var g = c.destroy;
              if (g !== void 0 && typeof g != "function") {
                var E = void 0;
                (c.tag & gr) !== Qe ? E = "useLayoutEffect" : (c.tag & Ro) !== Qe ? E = "useInsertionEffect" : E = "useEffect";
                var w = void 0;
                g === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? w = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + g, h("%s must not return anything besides a function, which is used for clean-up.%s", E, w);
              }
            }
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function PN(e, t) {
      if ((t.flags & pt) !== Qe)
        switch (t.tag) {
          case G: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, c = i.onPostCommit, v = sC(), g = t.alternate === null ? "mount" : "update";
            uC() && (g = "nested-update"), typeof c == "function" && c(l, g, a, v);
            var E = t.return;
            e:
              for (; E !== null; ) {
                switch (E.tag) {
                  case D:
                    var w = E.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                  case G:
                    var k = E.stateNode;
                    k.passiveEffectDuration += a;
                    break e;
                }
                E = E.return;
              }
            break;
          }
        }
    }
    function FN(e, t, a, i) {
      if ((a.flags & Dr) !== Qe)
        switch (a.tag) {
          case T:
          case V:
          case ae: {
            if (!Vr)
              if (a.mode & et)
                try {
                  _o(), Ru(gr | yr, a);
                } finally {
                  No(a);
                }
              else
                Ru(gr | yr, a);
            break;
          }
          case R: {
            var l = a.stateNode;
            if (a.flags & pt && !Vr)
              if (t === null)
                if (a.type === a.elementType && !js && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & et)
                  try {
                    _o(), l.componentDidMount();
                  } finally {
                    No(a);
                  }
                else
                  l.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : Fi(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !js && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & et)
                  try {
                    _o(), l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    No(a);
                  }
                else
                  l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !js && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), CE(a, g, l));
            break;
          }
          case D: {
            var E = a.updateQueue;
            if (E !== null) {
              var w = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case L:
                    w = a.child.stateNode;
                    break;
                  case R:
                    w = a.child.stateNode;
                    break;
                }
              CE(a, E, w);
            }
            break;
          }
          case L: {
            var k = a.stateNode;
            if (t === null && a.flags & pt) {
              var j = a.type, P = a.memoizedProps;
              aD(k, j, P);
            }
            break;
          }
          case U:
            break;
          case _:
            break;
          case G: {
            {
              var X = a.memoizedProps, q = X.onCommit, J = X.onRender, _e = a.stateNode.effectDuration, Ke = sC(), Ye = t === null ? "mount" : "update";
              uC() && (Ye = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ke);
              {
                typeof q == "function" && q(a.memoizedProps.id, Ye, _e, Ke), z_(a);
                var Nt = a.return;
                e:
                  for (; Nt !== null; ) {
                    switch (Nt.tag) {
                      case D:
                        var Tt = Nt.stateNode;
                        Tt.effectDuration += _e;
                        break e;
                      case G:
                        var Y = Nt.stateNode;
                        Y.effectDuration += _e;
                        break e;
                    }
                    Nt = Nt.return;
                  }
              }
            }
            break;
          }
          case B: {
            GN(e, a);
            break;
          }
          case Ae:
          case ve:
          case je:
          case ke:
          case Be:
          case lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & Kr && VC(a);
    }
    function jN(e) {
      switch (e.tag) {
        case T:
        case V:
        case ae: {
          if (e.mode & et)
            try {
              _o(), FC(e, e.return);
            } finally {
              No(e);
            }
          else
            FC(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && LN(e, e.return, t), jC(e, e.return);
          break;
        }
        case L: {
          jC(e, e.return);
          break;
        }
      }
    }
    function HN(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === L) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? vD(l) : mD(i.stateNode, i.memoizedProps);
            } catch (v) {
              fn(e, e.return, v);
            }
          }
        } else if (i.tag === U) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? hD(c) : yD(c, i.memoizedProps);
            } catch (v) {
              fn(e, e.return, v);
            }
        } else if (!((i.tag === ke || i.tag === Be) && i.memoizedState !== null && i !== e)) {
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
    function VC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case L:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & et)
            try {
              _o(), l = t(i);
            } finally {
              No(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ft(e)), t.current = i;
      }
    }
    function VN(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function IC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, IC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === L) {
          var a = e.stateNode;
          a !== null && KD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function IN(e) {
      for (var t = e.return; t !== null; ) {
        if (BC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BC(e) {
      return e.tag === L || e.tag === D || e.tag === _;
    }
    function YC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || BC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== U && t.tag !== Te; ) {
            if (t.flags & ln || t.child === null || t.tag === _)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ln))
            return t.stateNode;
        }
    }
    function BN(e) {
      var t = IN(e);
      switch (t.tag) {
        case L: {
          var a = t.stateNode;
          t.flags & Bt && (W1(a), t.flags &= ~Bt);
          var i = YC(e);
          BS(e, i, a);
          break;
        }
        case D:
        case _: {
          var l = t.stateNode.containerInfo, c = YC(e);
          IS(e, c, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function IS(e, t, a) {
      var i = e.tag, l = i === L || i === U;
      if (l) {
        var c = e.stateNode;
        t ? cD(a, c, t) : uD(a, c);
      } else if (i !== _) {
        var v = e.child;
        if (v !== null) {
          IS(v, t, a);
          for (var g = v.sibling; g !== null; )
            IS(g, t, a), g = g.sibling;
        }
      }
    }
    function BS(e, t, a) {
      var i = e.tag, l = i === L || i === U;
      if (l) {
        var c = e.stateNode;
        t ? sD(a, c, t) : lD(a, c);
      } else if (i !== _) {
        var v = e.child;
        if (v !== null) {
          BS(v, t, a);
          for (var g = v.sibling; g !== null; )
            BS(g, t, a), g = g.sibling;
        }
      }
    }
    var Ir = null, Bi = !1;
    function YN(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case L: {
                Ir = i.stateNode, Bi = !1;
                break e;
              }
              case D: {
                Ir = i.stateNode.containerInfo, Bi = !0;
                break e;
              }
              case _: {
                Ir = i.stateNode.containerInfo, Bi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ir === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        WC(e, t, a), Ir = null, Bi = !1;
      }
      VN(a);
    }
    function Du(e, t, a) {
      for (var i = a.child; i !== null; )
        WC(e, t, i), i = i.sibling;
    }
    function WC(e, t, a) {
      switch (jd(a), a.tag) {
        case L:
          Vr || Ff(a, t);
        case U: {
          {
            var i = Ir, l = Bi;
            Ir = null, Du(e, t, a), Ir = i, Bi = l, Ir !== null && (Bi ? dD(Ir, a.stateNode) : fD(Ir, a.stateNode));
          }
          return;
        }
        case Te: {
          Ir !== null && (Bi ? pD(Ir, a.stateNode) : t0(Ir, a.stateNode));
          return;
        }
        case _: {
          {
            var c = Ir, v = Bi;
            Ir = a.stateNode.containerInfo, Bi = !0, Du(e, t, a), Ir = c, Bi = v;
          }
          return;
        }
        case T:
        case V:
        case ue:
        case ae: {
          if (!Vr) {
            var g = a.updateQueue;
            if (g !== null) {
              var E = g.lastEffect;
              if (E !== null) {
                var w = E.next, k = w;
                do {
                  var j = k, P = j.destroy, X = j.tag;
                  P !== void 0 && ((X & Ro) !== Pa ? dy(a, t, P) : (X & gr) !== Pa && (kc(a), a.mode & et ? (_o(), dy(a, t, P), No(a)) : dy(a, t, P), Gl())), k = k.next;
                } while (k !== w);
              }
            }
          }
          Du(e, t, a);
          return;
        }
        case R: {
          if (!Vr) {
            Ff(a, t);
            var q = a.stateNode;
            typeof q.componentWillUnmount == "function" && VS(a, t, q);
          }
          Du(e, t, a);
          return;
        }
        case je: {
          Du(e, t, a);
          return;
        }
        case ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & St
          ) {
            var J = Vr;
            Vr = J || a.memoizedState !== null, Du(e, t, a), Vr = J;
          } else
            Du(e, t, a);
          break;
        }
        default: {
          Du(e, t, a);
          return;
        }
      }
    }
    function WN(e) {
      e.memoizedState;
    }
    function GN(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && MD(c);
          }
        }
      }
    }
    function GC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new _N()), t.forEach(function(i) {
          var l = I_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), hr)
              if (Uf !== null && Pf !== null)
                cv(Pf, Uf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function QN(e, t, a) {
      Uf = a, Pf = e, Xt(t), QC(t, e), Xt(t), Uf = null, Pf = null;
    }
    function Yi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          try {
            YN(e, t, c);
          } catch (E) {
            fn(c, t, E);
          }
        }
      var v = eg();
      if (t.subtreeFlags & Zr)
        for (var g = t.child; g !== null; )
          Xt(g), QC(g, e), g = g.sibling;
      Xt(v);
    }
    function QC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case T:
        case V:
        case ue:
        case ae: {
          if (Yi(t, e), Oo(e), l & pt) {
            try {
              Ii(Ro | yr, e, e.return), Ru(Ro | yr, e);
            } catch (rt) {
              fn(e, e.return, rt);
            }
            if (e.mode & et) {
              try {
                _o(), Ii(gr | yr, e, e.return);
              } catch (rt) {
                fn(e, e.return, rt);
              }
              No(e);
            } else
              try {
                Ii(gr | yr, e, e.return);
              } catch (rt) {
                fn(e, e.return, rt);
              }
          }
          return;
        }
        case R: {
          Yi(t, e), Oo(e), l & Kr && i !== null && Ff(i, i.return);
          return;
        }
        case L: {
          Yi(t, e), Oo(e), l & Kr && i !== null && Ff(i, i.return);
          {
            if (e.flags & Bt) {
              var c = e.stateNode;
              try {
                W1(c);
              } catch (rt) {
                fn(e, e.return, rt);
              }
            }
            if (l & pt) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, E = i !== null ? i.memoizedProps : g, w = e.type, k = e.updateQueue;
                if (e.updateQueue = null, k !== null)
                  try {
                    iD(v, k, w, E, g, e);
                  } catch (rt) {
                    fn(e, e.return, rt);
                  }
              }
            }
          }
          return;
        }
        case U: {
          if (Yi(t, e), Oo(e), l & pt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, P = e.memoizedProps, X = i !== null ? i.memoizedProps : P;
            try {
              oD(j, X, P);
            } catch (rt) {
              fn(e, e.return, rt);
            }
          }
          return;
        }
        case D: {
          if (Yi(t, e), Oo(e), l & pt && i !== null) {
            var q = i.memoizedState;
            if (q.isDehydrated)
              try {
                OD(t.containerInfo);
              } catch (rt) {
                fn(e, e.return, rt);
              }
          }
          return;
        }
        case _: {
          Yi(t, e), Oo(e);
          return;
        }
        case B: {
          Yi(t, e), Oo(e);
          var J = e.child;
          if (J.flags & lo) {
            var _e = J.stateNode, Ke = J.memoizedState, Ye = Ke !== null;
            if (_e.isHidden = Ye, Ye) {
              var Nt = J.alternate !== null && J.alternate.memoizedState !== null;
              Nt || k_();
            }
          }
          if (l & pt) {
            try {
              WN(e);
            } catch (rt) {
              fn(e, e.return, rt);
            }
            GC(e);
          }
          return;
        }
        case ke: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & St
          ) {
            var Y = Vr;
            Vr = Y || Tt, Yi(t, e), Vr = Y;
          } else
            Yi(t, e);
          if (Oo(e), l & lo) {
            var ee = e.stateNode, W = e.memoizedState, de = W !== null, Oe = e;
            if (ee.isHidden = de, de && !Tt && (Oe.mode & St) !== Ze) {
              Fe = Oe;
              for (var we = Oe.child; we !== null; )
                Fe = we, XN(we), we = we.sibling;
            }
            HN(Oe, de);
          }
          return;
        }
        case Ae: {
          Yi(t, e), Oo(e), l & pt && GC(e);
          return;
        }
        case je:
          return;
        default: {
          Yi(t, e), Oo(e);
          return;
        }
      }
    }
    function Oo(e) {
      var t = e.flags;
      if (t & ln) {
        try {
          BN(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~ln;
      }
      t & Da && (e.flags &= ~Da);
    }
    function KN(e, t, a) {
      Uf = a, Pf = t, Fe = e, KC(e, t, a), Uf = null, Pf = null;
    }
    function KC(e, t, a) {
      for (var i = (e.mode & St) !== Ze; Fe !== null; ) {
        var l = Fe, c = l.child;
        if (l.tag === ke && i) {
          var v = l.memoizedState !== null, g = v || fy;
          if (g) {
            YS(e, t, a);
            continue;
          } else {
            var E = l.alternate, w = E !== null && E.memoizedState !== null, k = w || Vr, j = fy, P = Vr;
            fy = g, Vr = k, Vr && !P && (Fe = l, qN(l));
            for (var X = c; X !== null; )
              Fe = X, KC(
                X,
                // New root; bubble back up to here and stop.
                t,
                a
              ), X = X.sibling;
            Fe = l, fy = j, Vr = P, YS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Dr) !== Qe && c !== null ? (c.return = l, Fe = c) : YS(e, t, a);
      }
    }
    function YS(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & Dr) !== Qe) {
          var l = i.alternate;
          Xt(i);
          try {
            FN(t, l, i, a);
          } catch (v) {
            fn(i, i.return, v);
          }
          Wn();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, Fe = c;
          return;
        }
        Fe = i.return;
      }
    }
    function XN(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case T:
          case V:
          case ue:
          case ae: {
            if (t.mode & et)
              try {
                _o(), Ii(gr, t, t.return);
              } finally {
                No(t);
              }
            else
              Ii(gr, t, t.return);
            break;
          }
          case R: {
            Ff(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && VS(t, t.return, i);
            break;
          }
          case L: {
            Ff(t, t.return);
            break;
          }
          case ke: {
            var l = t.memoizedState !== null;
            if (l) {
              XC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : XC(e);
      }
    }
    function XC(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function qN(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === ke) {
          var i = t.memoizedState !== null;
          if (i) {
            qC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : qC(e);
      }
    }
    function qC(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        Xt(t);
        try {
          jN(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (Wn(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function ZN(e, t, a, i) {
      Fe = t, JN(t, e, a, i);
    }
    function JN(e, t, a, i) {
      for (; Fe !== null; ) {
        var l = Fe, c = l.child;
        (l.subtreeFlags & ka) !== Qe && c !== null ? (c.return = l, Fe = c) : e_(e, t, a, i);
      }
    }
    function e_(e, t, a, i) {
      for (; Fe !== null; ) {
        var l = Fe;
        if ((l.flags & gn) !== Qe) {
          Xt(l);
          try {
            t_(t, l, a, i);
          } catch (v) {
            fn(l, l.return, v);
          }
          Wn();
        }
        if (l === e) {
          Fe = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, Fe = c;
          return;
        }
        Fe = l.return;
      }
    }
    function t_(e, t, a, i) {
      switch (t.tag) {
        case T:
        case V:
        case ae: {
          if (t.mode & et) {
            CS();
            try {
              Ru(jr | yr, t);
            } finally {
              ES(t);
            }
          } else
            Ru(jr | yr, t);
          break;
        }
      }
    }
    function n_(e) {
      Fe = e, r_();
    }
    function r_() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & Ft) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Fe = l, o_(l, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var g = v.sibling;
                    v.sibling = null, v = g;
                  } while (v !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & ka) !== Qe && t !== null ? (t.return = e, Fe = t) : a_();
      }
    }
    function a_() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & gn) !== Qe && (Xt(e), i_(e), Wn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function i_(e) {
      switch (e.tag) {
        case T:
        case V:
        case ae: {
          e.mode & et ? (CS(), Ii(jr | yr, e, e.return), ES(e)) : Ii(jr | yr, e, e.return);
          break;
        }
      }
    }
    function o_(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        Xt(a), u_(a, t), Wn();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : l_(e);
      }
    }
    function l_(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (IC(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function u_(e, t) {
      switch (e.tag) {
        case T:
        case V:
        case ae: {
          e.mode & et ? (CS(), Ii(jr, e, t), ES(e)) : Ii(jr, e, t);
          break;
        }
      }
    }
    function s_(e) {
      switch (e.tag) {
        case T:
        case V:
        case ae: {
          try {
            Ru(gr | yr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function c_(e) {
      switch (e.tag) {
        case T:
        case V:
        case ae: {
          try {
            Ru(jr | yr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function f_(e) {
      switch (e.tag) {
        case T:
        case V:
        case ae: {
          try {
            Ii(gr | yr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && VS(e, e.return, t);
          break;
        }
      }
    }
    function d_(e) {
      switch (e.tag) {
        case T:
        case V:
        case ae:
          try {
            Ii(jr | yr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Jp = Symbol.for;
      Jp("selector.component"), Jp("selector.has_pseudo_class"), Jp("selector.role"), Jp("selector.test_id"), Jp("selector.text");
    }
    var p_ = [];
    function v_() {
      p_.forEach(function(e) {
        return e();
      });
    }
    var h_ = f.ReactCurrentActQueue;
    function m_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ZC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && h_.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var y_ = Math.ceil, WS = f.ReactCurrentDispatcher, GS = f.ReactCurrentOwner, Br = f.ReactCurrentBatchConfig, Wi = f.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), JC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), yi = (
      /*                */
      4
    ), wl = 0, ev = 1, Hs = 2, py = 3, tv = 4, ex = 5, QS = 6, kt = Er, ya = null, Un = null, Cr = te, Mo = te, KS = yu(te), xr = wl, nv = null, vy = te, rv = te, hy = te, av = null, Fa = null, XS = 0, tx = 500, nx = 1 / 0, g_ = 500, Tl = null;
    function iv() {
      nx = xn() + g_;
    }
    function rx() {
      return nx;
    }
    var my = !1, qS = null, jf = null, Vs = !1, ku = null, ov = te, ZS = [], JS = null, S_ = 50, lv = 0, eb = null, tb = !1, yy = !1, b_ = 50, Hf = 0, gy = null, uv = tn, Sy = te, ax = !1;
    function by() {
      return ya;
    }
    function ga() {
      return (kt & (Yr | yi)) !== Er ? xn() : (uv !== tn || (uv = xn()), uv);
    }
    function Nu(e) {
      var t = e.mode;
      if ((t & St) === Ze)
        return tt;
      if ((kt & Yr) !== Er && Cr !== te)
        return Qn(Cr);
      var a = mk() !== hk;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Sy === Dt && (Sy = Qd()), Sy;
      }
      var l = Ma();
      if (l !== Dt)
        return l;
      var c = eD();
      return c;
    }
    function E_(e) {
      var t = e.mode;
      return (t & St) === Ze ? tt : Cg();
    }
    function wr(e, t, a, i) {
      Y_(), ax && h("useInsertionEffect must not schedule updates."), tb && (yy = !0), ll(e, a, i), (kt & Yr) !== te && e === ya ? Q_(t) : (hr && Jd(e, t, a), K_(t), e === ya && ((kt & Yr) === Er && (rv = vt(rv, a)), xr === tv && _u(e, Cr)), ja(e, i), a === tt && kt === Er && (t.mode & St) === Ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Wi.isBatchingLegacy && (iv(), rE()));
    }
    function C_(e, t, a) {
      var i = e.current;
      i.lanes = t, ll(e, t, a), ja(e, a);
    }
    function x_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & Yr) !== Er
      );
    }
    function ja(e, t) {
      var a = e.callbackNode;
      Sg(e, t);
      var i = ps(e, e === ya ? Cr : te);
      if (i === te) {
        a !== null && bx(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var l = Vn(i), c = e.callbackPriority;
      if (c === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Wi.current !== null && a !== ub)) {
        a == null && c !== tt && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && bx(a);
      var v;
      if (l === tt)
        e.tag === gu ? (Wi.isBatchingLegacy !== null && (Wi.didScheduleLegacyUpdate = !0), ZD(lx.bind(null, e))) : nE(lx.bind(null, e)), Wi.current !== null ? Wi.current.push(Su) : nD(function() {
          (kt & (Yr | yi)) === Er && Su();
        }), v = null;
      else {
        var g;
        switch (gs(i)) {
          case kr:
            g = wc;
            break;
          case mr:
            g = pa;
            break;
          case Oi:
            g = li;
            break;
          case ms:
            g = so;
            break;
          default:
            g = li;
            break;
        }
        v = sb(g, ix.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function ix(e, t) {
      if (Yk(), uv = tn, Sy = te, (kt & (Yr | yi)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Dl();
      if (i && e.callbackNode !== a)
        return null;
      var l = ps(e, e === ya ? Cr : te);
      if (l === te)
        return null;
      var c = !hs(e, l) && !Mh(e, l) && !t, v = c ? L_(e, l) : Cy(e, l);
      if (v !== wl) {
        if (v === Hs) {
          var g = Wd(e);
          g !== te && (l = g, v = nb(e, g));
        }
        if (v === ev) {
          var E = nv;
          throw Is(e, te), _u(e, l), ja(e, xn()), E;
        }
        if (v === QS)
          _u(e, l);
        else {
          var w = !hs(e, l), k = e.current.alternate;
          if (w && !T_(k)) {
            if (v = Cy(e, l), v === Hs) {
              var j = Wd(e);
              j !== te && (l = j, v = nb(e, j));
            }
            if (v === ev) {
              var P = nv;
              throw Is(e, te), _u(e, l), ja(e, xn()), P;
            }
          }
          e.finishedWork = k, e.finishedLanes = l, w_(e, v, l);
        }
      }
      return ja(e, xn()), e.callbackNode === a ? ix.bind(null, e) : null;
    }
    function nb(e, t) {
      var a = av;
      if (Xn(e)) {
        var i = Is(e, t);
        i.flags |= Nn, YD(e.containerInfo);
      }
      var l = Cy(e, t);
      if (l !== Hs) {
        var c = Fa;
        Fa = a, c !== null && ox(c);
      }
      return l;
    }
    function ox(e) {
      Fa === null ? Fa = e : Fa.push.apply(Fa, e);
    }
    function w_(e, t, a) {
      switch (t) {
        case wl:
        case ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case Hs: {
          Bs(e, Fa, Tl);
          break;
        }
        case py: {
          if (_u(e, a), Qc(a) && // do not delay if we're inside an act() scope
          !Ex()) {
            var i = XS + tx - xn();
            if (i > 10) {
              var l = ps(e, te);
              if (l !== te)
                break;
              var c = e.suspendedLanes;
              if (!ol(c, a)) {
                ga(), qd(e, c);
                break;
              }
              e.timeoutHandle = Jg(Bs.bind(null, e, Fa, Tl), i);
              break;
            }
          }
          Bs(e, Fa, Tl);
          break;
        }
        case tv: {
          if (_u(e, a), Oh(a))
            break;
          if (!Ex()) {
            var v = _h(e, a), g = v, E = xn() - g, w = B_(E) - E;
            if (w > 10) {
              e.timeoutHandle = Jg(Bs.bind(null, e, Fa, Tl), w);
              break;
            }
          }
          Bs(e, Fa, Tl);
          break;
        }
        case ex: {
          Bs(e, Fa, Tl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function T_(e) {
      for (var t = e; ; ) {
        if (t.flags & os) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var c = i[l], v = c.getSnapshot, g = c.value;
                try {
                  if (!Pe(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & os && E !== null) {
          E.return = t, t = E;
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
    function _u(e, t) {
      t = eu(t, hy), t = eu(t, rv), Xd(e, t);
    }
    function lx(e) {
      if (Wk(), (kt & (Yr | yi)) !== Er)
        throw new Error("Should not already be working.");
      Dl();
      var t = ps(e, te);
      if (!na(t, tt))
        return ja(e, xn()), null;
      var a = Cy(e, t);
      if (e.tag !== gu && a === Hs) {
        var i = Wd(e);
        i !== te && (t = i, a = nb(e, i));
      }
      if (a === ev) {
        var l = nv;
        throw Is(e, te), _u(e, t), ja(e, xn()), l;
      }
      if (a === QS)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, Bs(e, Fa, Tl), ja(e, xn()), null;
    }
    function R_(e, t) {
      t !== te && (tu(e, vt(t, tt)), ja(e, xn()), (kt & (Yr | yi)) === Er && (iv(), Su()));
    }
    function rb(e, t) {
      var a = kt;
      kt |= JC;
      try {
        return e(t);
      } finally {
        kt = a, kt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Wi.isBatchingLegacy && (iv(), rE());
      }
    }
    function D_(e, t, a, i, l) {
      var c = Ma(), v = Br.transition;
      try {
        return Br.transition = null, Kn(kr), e(t, a, i, l);
      } finally {
        Kn(c), Br.transition = v, kt === Er && iv();
      }
    }
    function Rl(e) {
      ku !== null && ku.tag === gu && (kt & (Yr | yi)) === Er && Dl();
      var t = kt;
      kt |= JC;
      var a = Br.transition, i = Ma();
      try {
        return Br.transition = null, Kn(kr), e ? e() : void 0;
      } finally {
        Kn(i), Br.transition = a, kt = t, (kt & (Yr | yi)) === Er && Su();
      }
    }
    function ux() {
      return (kt & (Yr | yi)) !== Er;
    }
    function Ey(e, t) {
      aa(KS, Mo, e), Mo = vt(Mo, t);
    }
    function ab(e) {
      Mo = KS.current, ra(KS, e);
    }
    function Is(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var a = e.timeoutHandle;
      if (a !== e0 && (e.timeoutHandle = e0, tD(a)), Un !== null)
        for (var i = Un.return; i !== null; ) {
          var l = i.alternate;
          UC(l, i), i = i.return;
        }
      ya = e;
      var c = Ys(e.current, null);
      return Un = c, Cr = Mo = t, xr = wl, nv = null, vy = te, rv = te, hy = te, av = null, Fa = null, bk(), Pi.discardPendingWarnings(), c;
    }
    function sx(e, t) {
      do {
        var a = Un;
        try {
          if (Nm(), FE(), Wn(), GS.current = null, a === null || a.return === null) {
            xr = ev, nv = t, Un = null;
            return;
          }
          if (Ee && a.mode & et && ly(a, !0), Yn)
            if (qo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Dh(a, i, Cr);
            } else
              Nc(a, t, Cr);
          qk(e, a.return, a, t, Cr), px(a);
        } catch (l) {
          t = l, Un === a && a !== null ? (a = a.return, Un = a) : a = Un;
          continue;
        }
        return;
      } while (!0);
    }
    function cx() {
      var e = WS.current;
      return WS.current = ny, e === null ? ny : e;
    }
    function fx(e) {
      WS.current = e;
    }
    function k_() {
      XS = xn();
    }
    function sv(e) {
      vy = vt(e, vy);
    }
    function N_() {
      xr === wl && (xr = py);
    }
    function ib() {
      (xr === wl || xr === py || xr === Hs) && (xr = tv), ya !== null && (vs(vy) || vs(rv)) && _u(ya, Cr);
    }
    function __(e) {
      xr !== tv && (xr = Hs), av === null ? av = [e] : av.push(e);
    }
    function O_() {
      return xr === wl;
    }
    function Cy(e, t) {
      var a = kt;
      kt |= Yr;
      var i = cx();
      if (ya !== e || Cr !== t) {
        if (hr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (cv(e, Cr), l.clear()), qc(e, t);
        }
        Tl = ep(), Is(e, t);
      }
      Za(t);
      do
        try {
          M_();
          break;
        } catch (c) {
          sx(e, c);
        }
      while (!0);
      if (Nm(), kt = a, fx(i), Un !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Kl(), ya = null, Cr = te, xr;
    }
    function M_() {
      for (; Un !== null; )
        dx(Un);
    }
    function L_(e, t) {
      var a = kt;
      kt |= Yr;
      var i = cx();
      if (ya !== e || Cr !== t) {
        if (hr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (cv(e, Cr), l.clear()), qc(e, t);
        }
        Tl = ep(), iv(), Is(e, t);
      }
      Za(t);
      do
        try {
          A_();
          break;
        } catch (c) {
          sx(e, c);
        }
      while (!0);
      return Nm(), fx(i), kt = a, Un !== null ? (ss(), wl) : (Kl(), ya = null, Cr = te, xr);
    }
    function A_() {
      for (; Un !== null && !xc(); )
        dx(Un);
    }
    function dx(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & et) !== Ze ? (bS(e), a = ob(t, e, Mo), ly(e, !0)) : a = ob(t, e, Mo), Wn(), e.memoizedProps = e.pendingProps, a === null ? px(e) : Un = a, GS.current = null;
    }
    function px(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ca) === Qe) {
          Xt(t);
          var l = void 0;
          if ((t.mode & et) === Ze ? l = zC(a, t, Mo) : (bS(t), l = zC(a, t, Mo), ly(t, !1)), Wn(), l !== null) {
            Un = l;
            return;
          }
        } else {
          var c = NN(a, t);
          if (c !== null) {
            c.flags &= gh, Un = c;
            return;
          }
          if ((t.mode & et) !== Ze) {
            ly(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= ca, i.subtreeFlags = Qe, i.deletions = null;
          else {
            xr = QS, Un = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Un = E;
          return;
        }
        t = i, Un = t;
      } while (t !== null);
      xr === wl && (xr = ex);
    }
    function Bs(e, t, a) {
      var i = Ma(), l = Br.transition;
      try {
        Br.transition = null, Kn(kr), $_(e, t, a, i);
      } finally {
        Br.transition = l, Kn(i);
      }
      return null;
    }
    function $_(e, t, a, i) {
      do
        Dl();
      while (ku !== null);
      if (W_(), (kt & (Yr | yi)) !== Er)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (Rc(c), l === null)
        return Hd(), null;
      if (c === te && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var v = vt(l.lanes, l.childLanes);
      Zd(e, v), e === ya && (ya = null, Un = null, Cr = te), ((l.subtreeFlags & ka) !== Qe || (l.flags & ka) !== Qe) && (Vs || (Vs = !0, JS = a, sb(li, function() {
        return Dl(), null;
      })));
      var g = (l.subtreeFlags & (Wl | Zr | Dr | ka)) !== Qe, E = (l.flags & (Wl | Zr | Dr | ka)) !== Qe;
      if (g || E) {
        var w = Br.transition;
        Br.transition = null;
        var k = Ma();
        Kn(kr);
        var j = kt;
        kt |= yi, GS.current = null, AN(e, l), cC(), QN(e, l, c), QR(e.containerInfo), e.current = l, kh(c), KN(l, e, c), Ql(), Eh(), kt = j, Kn(k), Br.transition = w;
      } else
        e.current = l, cC();
      var P = Vs;
      if (Vs ? (Vs = !1, ku = e, ov = c) : (Hf = 0, gy = null), v = e.pendingLanes, v === te && (jf = null), P || yx(e.current, !1), ki(l.stateNode, i), hr && e.memoizedUpdaters.clear(), v_(), ja(e, xn()), t !== null)
        for (var X = e.onRecoverableError, q = 0; q < t.length; q++) {
          var J = t[q], _e = J.stack, Ke = J.digest;
          X(J.value, {
            componentStack: _e,
            digest: Ke
          });
        }
      if (my) {
        my = !1;
        var Ye = qS;
        throw qS = null, Ye;
      }
      return na(ov, tt) && e.tag !== gu && Dl(), v = e.pendingLanes, na(v, tt) ? (Bk(), e === eb ? lv++ : (lv = 0, eb = e)) : lv = 0, Su(), Hd(), null;
    }
    function Dl() {
      if (ku !== null) {
        var e = gs(ov), t = wg(Oi, e), a = Br.transition, i = Ma();
        try {
          return Br.transition = null, Kn(t), U_();
        } finally {
          Kn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function z_(e) {
      ZS.push(e), Vs || (Vs = !0, sb(li, function() {
        return Dl(), null;
      }));
    }
    function U_() {
      if (ku === null)
        return !1;
      var e = JS;
      JS = null;
      var t = ku, a = ov;
      if (ku = null, ov = te, (kt & (Yr | yi)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      tb = !0, yy = !1, Nh(a);
      var i = kt;
      kt |= yi, n_(t.current), ZN(t, t.current, a, e);
      {
        var l = ZS;
        ZS = [];
        for (var c = 0; c < l.length; c++) {
          var v = l[c];
          PN(t, v);
        }
      }
      us(), yx(t.current, !0), kt = i, Su(), yy ? t === gy ? Hf++ : (Hf = 0, gy = t) : Hf = 0, tb = !1, yy = !1, fo(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function vx(e) {
      return jf !== null && jf.has(e);
    }
    function P_(e) {
      jf === null ? jf = /* @__PURE__ */ new Set([e]) : jf.add(e);
    }
    function F_(e) {
      my || (my = !0, qS = e);
    }
    var j_ = F_;
    function hx(e, t, a) {
      var i = Fs(a, t), l = dC(e, i, tt), c = Eu(e, l, tt), v = ga();
      c !== null && (ll(c, tt, v), ja(c, v));
    }
    function fn(e, t, a) {
      if (ON(a), fv(!1), e.tag === D) {
        hx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === D) {
          hx(i, e, a);
          return;
        } else if (i.tag === R) {
          var l = i.type, c = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !vx(c)) {
            var v = Fs(a, e), g = RS(i, v, tt), E = Eu(i, g, tt), w = ga();
            E !== null && (ll(E, tt, w), ja(E, w));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function H_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ga();
      qd(e, a), X_(e), ya === e && ol(Cr, a) && (xr === tv || xr === py && Qc(Cr) && xn() - XS < tx ? Is(e, te) : hy = vt(hy, a)), ja(e, l);
    }
    function mx(e, t) {
      t === Dt && (t = E_(e));
      var a = ga(), i = Ua(e, t);
      i !== null && (ll(i, t, a), ja(i, a));
    }
    function V_(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), mx(e, a);
    }
    function I_(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case B:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Ae:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), mx(e, a);
    }
    function B_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : y_(e / 1960) * 1960;
    }
    function Y_() {
      if (lv > S_)
        throw lv = 0, eb = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hf > b_ && (Hf = 0, gy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function W_() {
      Pi.flushLegacyContextWarning(), Pi.flushPendingUnsafeLifecycleWarnings();
    }
    function yx(e, t) {
      Xt(e), xy(e, qr, f_), t && xy(e, Xo, d_), xy(e, qr, s_), t && xy(e, Xo, c_), Wn();
    }
    function xy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== l && i.child !== null && c !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var wy = null;
    function gx(e) {
      {
        if ((kt & Yr) !== Er || !(e.mode & St))
          return;
        var t = e.tag;
        if (t !== M && t !== D && t !== R && t !== T && t !== V && t !== ue && t !== ae)
          return;
        var a = ft(e) || "ReactComponent";
        if (wy !== null) {
          if (wy.has(a))
            return;
          wy.add(a);
        } else
          wy = /* @__PURE__ */ new Set([a]);
        var i = jn;
        try {
          Xt(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : Wn();
        }
      }
    }
    var ob;
    {
      var G_ = null;
      ob = function(e, t, a) {
        var i = Rx(G_, t);
        try {
          return OC(e, t, a);
        } catch (c) {
          if (ok() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Nm(), FE(), UC(e, t), Rx(t, i), t.mode & et && bS(t), Ko(null, OC, null, e, t, a), yg()) {
            var l = _d();
            typeof l == "object" && l !== null && l._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var Sx = !1, lb;
    lb = /* @__PURE__ */ new Set();
    function Q_(e) {
      if (Ca && !Hk())
        switch (e.tag) {
          case T:
          case V:
          case ae: {
            var t = Un && ft(Un) || "Unknown", a = t;
            if (!lb.has(a)) {
              lb.add(a);
              var i = ft(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case R: {
            Sx || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Sx = !0);
            break;
          }
        }
    }
    function cv(e, t) {
      if (hr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Jd(e, i, t);
        });
      }
    }
    var ub = {};
    function sb(e, t) {
      {
        var a = Wi.current;
        return a !== null ? (a.push(t), ub) : Cc(e, t);
      }
    }
    function bx(e) {
      if (e !== ub)
        return bh(e);
    }
    function Ex() {
      return Wi.current !== null;
    }
    function K_(e) {
      {
        if (e.mode & St) {
          if (!ZC())
            return;
        } else if (!m_() || kt !== Er || e.tag !== T && e.tag !== V && e.tag !== ae)
          return;
        if (Wi.current === null) {
          var t = jn;
          try {
            Xt(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ft(e));
          } finally {
            t ? Xt(e) : Wn();
          }
        }
      }
    }
    function X_(e) {
      e.tag !== gu && ZC() && Wi.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function fv(e) {
      ax = e;
    }
    var gi = null, Vf = null, q_ = function(e) {
      gi = e;
    };
    function If(e) {
      {
        if (gi === null)
          return e;
        var t = gi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function cb(e) {
      return If(e);
    }
    function fb(e) {
      {
        if (gi === null)
          return e;
        var t = gi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: qe,
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
    function Cx(e, t) {
      {
        if (gi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof i == "function" && (l = !0);
            break;
          }
          case T: {
            (typeof i == "function" || c === Je) && (l = !0);
            break;
          }
          case V: {
            (c === qe || c === Je) && (l = !0);
            break;
          }
          case ue:
          case ae: {
            (c === yt || c === Je) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = gi(a);
          if (v !== void 0 && v === gi(i))
            return !0;
        }
        return !1;
      }
    }
    function xx(e) {
      {
        if (gi === null || typeof WeakSet != "function")
          return;
        Vf === null && (Vf = /* @__PURE__ */ new WeakSet()), Vf.add(e);
      }
    }
    var Z_ = function(e, t) {
      {
        if (gi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Dl(), Rl(function() {
          db(e.current, i, a);
        });
      }
    }, J_ = function(e, t) {
      {
        if (e.context !== ei)
          return;
        Dl(), Rl(function() {
          dv(t, e, null, null);
        });
      }
    };
    function db(e, t, a) {
      {
        var i = e.alternate, l = e.child, c = e.sibling, v = e.tag, g = e.type, E = null;
        switch (v) {
          case T:
          case ae:
          case R:
            E = g;
            break;
          case V:
            E = g.render;
            break;
        }
        if (gi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, k = !1;
        if (E !== null) {
          var j = gi(E);
          j !== void 0 && (a.has(j) ? k = !0 : t.has(j) && (v === R ? k = !0 : w = !0));
        }
        if (Vf !== null && (Vf.has(e) || i !== null && Vf.has(i)) && (k = !0), k && (e._debugNeedsRemount = !0), k || w) {
          var P = Ua(e, tt);
          P !== null && wr(P, e, tt, tn);
        }
        l !== null && !k && db(l, t, a), c !== null && db(c, t, a);
      }
    }
    var eO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return pb(e.current, i, a), a;
      }
    };
    function pb(e, t, a) {
      {
        var i = e.child, l = e.sibling, c = e.tag, v = e.type, g = null;
        switch (c) {
          case T:
          case ae:
          case R:
            g = v;
            break;
          case V:
            g = v.render;
            break;
        }
        var E = !1;
        g !== null && t.has(g) && (E = !0), E ? tO(e, a) : i !== null && pb(i, t, a), l !== null && pb(l, t, a);
      }
    }
    function tO(e, t) {
      {
        var a = nO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case L:
              t.add(i.stateNode);
              return;
            case _:
              t.add(i.stateNode.containerInfo);
              return;
            case D:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === L)
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
    var vb;
    {
      vb = !1;
      try {
        var wx = Object.preventExtensions({});
      } catch {
        vb = !0;
      }
    }
    function rO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !vb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ti = function(e, t, a, i) {
      return new rO(e, t, a, i);
    };
    function hb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function aO(e) {
      return typeof e == "function" && !hb(e) && e.defaultProps === void 0;
    }
    function iO(e) {
      if (typeof e == "function")
        return hb(e) ? R : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === qe)
          return V;
        if (t === yt)
          return ue;
      }
      return M;
    }
    function Ys(e, t) {
      var a = e.alternate;
      a === null ? (a = ti(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & vr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case T:
        case ae:
          a.type = If(e.type);
          break;
        case R:
          a.type = cb(e.type);
          break;
        case V:
          a.type = fb(e.type);
          break;
      }
      return a;
    }
    function oO(e, t) {
      e.flags &= vr | ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function lO(e, t, a) {
      var i;
      return e === Em ? (i = St, t === !0 && (i |= wn, i |= _a)) : i = Ze, hr && (i |= et), ti(D, null, null, i);
    }
    function mb(e, t, a, i, l, c) {
      var v = M, g = e;
      if (typeof e == "function")
        hb(e) ? (v = R, g = cb(g)) : g = If(g);
      else if (typeof e == "string")
        v = L;
      else
        e:
          switch (e) {
            case Ya:
              return Ou(a.children, l, c, t);
            case qi:
              v = H, l |= wn, (l & St) !== Ze && (l |= _a);
              break;
            case A:
              return uO(a, l, c, t);
            case mt:
              return sO(a, l, c, t);
            case Lt:
              return cO(a, l, c, t);
            case yn:
              return Tx(a, l, c, t);
            case zr:
            case tr:
            case Zi:
            case qs:
            case mn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case le:
                    v = Q;
                    break e;
                  case be:
                    v = z;
                    break e;
                  case qe:
                    v = V, g = fb(g);
                    break e;
                  case yt:
                    v = ue;
                    break e;
                  case Je:
                    v = se, g = null;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var w = i ? ft(i) : null;
                w && (E += `

Check the render method of \`` + w + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
            }
          }
      var k = ti(v, a, t, l);
      return k.elementType = e, k.type = g, k.lanes = c, k._debugOwner = i, k;
    }
    function yb(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, c = e.key, v = e.props, g = mb(l, c, v, i, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function Ou(e, t, a, i) {
      var l = ti(O, e, i, t);
      return l.lanes = a, l;
    }
    function uO(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ti(G, e, i, t | et);
      return l.elementType = A, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function sO(e, t, a, i) {
      var l = ti(B, e, i, t);
      return l.elementType = mt, l.lanes = a, l;
    }
    function cO(e, t, a, i) {
      var l = ti(Ae, e, i, t);
      return l.elementType = Lt, l.lanes = a, l;
    }
    function Tx(e, t, a, i) {
      var l = ti(ke, e, i, t);
      l.elementType = yn, l.lanes = a;
      var c = {
        isHidden: !1
      };
      return l.stateNode = c, l;
    }
    function gb(e, t, a) {
      var i = ti(U, e, null, t);
      return i.lanes = a, i;
    }
    function fO() {
      var e = ti(L, null, null, Ze);
      return e.elementType = "DELETED", e;
    }
    function dO(e) {
      var t = ti(Te, null, null, Ze);
      return t.stateNode = e, t;
    }
    function Sb(e, t, a) {
      var i = e.children !== null ? e.children : [], l = ti(_, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Rx(e, t) {
      return e === null && (e = ti(M, null, null, Ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pO(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = e0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = Xc(te), this.expirationTimes = Xc(tn), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Xc(te), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < sn; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Em:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case gu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Dx(e, t, a, i, l, c, v, g, E, w) {
      var k = new pO(e, t, a, g, E), j = lO(t, c);
      k.current = j, j.stateNode = k;
      {
        var P = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = P;
      }
      return D0(j), k;
    }
    var bb = "18.2.0";
    function vO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return rn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ua,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Eb, Cb;
    Eb = !1, Cb = {};
    function kx(e) {
      if (!e)
        return ei;
      var t = Ta(e), a = qD(t);
      if (t.tag === R) {
        var i = t.type;
        if (To(i))
          return eE(t, i, a);
      }
      return a;
    }
    function hO(e, t) {
      {
        var a = Ta(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Na(a);
        if (l === null)
          return null;
        if (l.mode & wn) {
          var c = ft(a) || "Component";
          if (!Cb[c]) {
            Cb[c] = !0;
            var v = jn;
            try {
              Xt(l), a.mode & wn ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? Xt(v) : Wn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function Nx(e, t, a, i, l, c, v, g) {
      var E = !1, w = null;
      return Dx(e, t, E, w, a, i, l, c, v);
    }
    function _x(e, t, a, i, l, c, v, g, E, w) {
      var k = !0, j = Dx(a, i, k, e, l, c, v, g, E);
      j.context = kx(null);
      var P = j.current, X = ga(), q = Nu(P), J = Cl(X, q);
      return J.callback = t ?? null, Eu(P, J, q), C_(j, q, X), j;
    }
    function dv(e, t, a, i) {
      Ch(t, e);
      var l = t.current, c = ga(), v = Nu(l);
      Zo(v);
      var g = kx(a);
      t.context === null ? t.context = g : t.pendingContext = g, Ca && jn !== null && !Eb && (Eb = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ft(jn) || "Unknown"));
      var E = Cl(c, v);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var w = Eu(l, E, v);
      return w !== null && (wr(w, l, v, c), Am(w, l, v)), v;
    }
    function Ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case L:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function mO(e) {
      switch (e.tag) {
        case D: {
          var t = e.stateNode;
          if (Xn(t)) {
            var a = bg(t);
            R_(t, a);
          }
          break;
        }
        case B: {
          Rl(function() {
            var l = Ua(e, tt);
            if (l !== null) {
              var c = ga();
              wr(l, e, tt, c);
            }
          });
          var i = tt;
          xb(e, i);
          break;
        }
      }
    }
    function Ox(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ah(a.retryLane, t));
    }
    function xb(e, t) {
      Ox(e, t);
      var a = e.alternate;
      a && Ox(a, t);
    }
    function yO(e) {
      if (e.tag === B) {
        var t = Xl, a = Ua(e, t);
        if (a !== null) {
          var i = ga();
          wr(a, e, t, i);
        }
        xb(e, t);
      }
    }
    function gO(e) {
      if (e.tag === B) {
        var t = Nu(e), a = Ua(e, t);
        if (a !== null) {
          var i = ga();
          wr(a, e, t, i);
        }
        xb(e, t);
      }
    }
    function Mx(e) {
      var t = Sh(e);
      return t === null ? null : t.stateNode;
    }
    var Lx = function(e) {
      return null;
    };
    function SO(e) {
      return Lx(e);
    }
    var Ax = function(e) {
      return !1;
    };
    function bO(e) {
      return Ax(e);
    }
    var $x = null, zx = null, Ux = null, Px = null, Fx = null, jx = null, Hx = null, Vx = null, Ix = null;
    {
      var Bx = function(e, t, a) {
        var i = t[a], l = nr(e) ? e.slice() : xt({}, e);
        return a + 1 === t.length ? (nr(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Bx(e[i], t, a + 1), l);
      }, Yx = function(e, t) {
        return Bx(e, t, 0);
      }, Wx = function(e, t, a, i) {
        var l = t[i], c = nr(e) ? e.slice() : xt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          c[v] = c[l], nr(c) ? c.splice(l, 1) : delete c[l];
        } else
          c[l] = Wx(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return c;
      }, Gx = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Wx(e, t, a, 0);
      }, Qx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], c = nr(e) ? e.slice() : xt({}, e);
        return c[l] = Qx(e[l], t, a + 1, i), c;
      }, Kx = function(e, t, a) {
        return Qx(e, t, 0, a);
      }, wb = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      $x = function(e, t, a, i) {
        var l = wb(e, t);
        if (l !== null) {
          var c = Kx(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = xt({}, e.memoizedProps);
          var v = Ua(e, tt);
          v !== null && wr(v, e, tt, tn);
        }
      }, zx = function(e, t, a) {
        var i = wb(e, t);
        if (i !== null) {
          var l = Yx(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = xt({}, e.memoizedProps);
          var c = Ua(e, tt);
          c !== null && wr(c, e, tt, tn);
        }
      }, Ux = function(e, t, a, i) {
        var l = wb(e, t);
        if (l !== null) {
          var c = Gx(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = xt({}, e.memoizedProps);
          var v = Ua(e, tt);
          v !== null && wr(v, e, tt, tn);
        }
      }, Px = function(e, t, a) {
        e.pendingProps = Kx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ua(e, tt);
        i !== null && wr(i, e, tt, tn);
      }, Fx = function(e, t) {
        e.pendingProps = Yx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ua(e, tt);
        a !== null && wr(a, e, tt, tn);
      }, jx = function(e, t, a) {
        e.pendingProps = Gx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ua(e, tt);
        i !== null && wr(i, e, tt, tn);
      }, Hx = function(e) {
        var t = Ua(e, tt);
        t !== null && wr(t, e, tt, tn);
      }, Vx = function(e) {
        Lx = e;
      }, Ix = function(e) {
        Ax = e;
      };
    }
    function EO(e) {
      var t = Na(e);
      return t === null ? null : t.stateNode;
    }
    function CO(e) {
      return null;
    }
    function xO() {
      return jn;
    }
    function wO(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return Fd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: $x,
        overrideHookStateDeletePath: zx,
        overrideHookStateRenamePath: Ux,
        overrideProps: Px,
        overridePropsDeletePath: Fx,
        overridePropsRenamePath: jx,
        setErrorHandler: Vx,
        setSuspenseHandler: Ix,
        scheduleUpdate: Hx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: EO,
        findFiberByHostInstance: t || CO,
        // React Refresh
        findHostInstancesForRefresh: eO,
        scheduleRefresh: Z_,
        scheduleRoot: J_,
        setRefreshHandler: q_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: xO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: bb
      });
    }
    var Xx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Tb(e) {
      this._internalRoot = e;
    }
    Ry.prototype.render = Tb.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Dy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Hn) {
          var i = Mx(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      dv(e, t, null, null);
    }, Ry.prototype.unmount = Tb.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ux() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Rl(function() {
          dv(null, e, null, null);
        }), K1(t);
      }
    };
    function TO(e, t) {
      if (!Dy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qx(e);
      var a = !1, i = !1, l = "", c = Xx;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Xi && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = Nx(e, Em, null, a, i, l, c);
      vm(v.current, e);
      var g = e.nodeType === Hn ? e.parentNode : e;
      return bp(g), new Tb(v);
    }
    function Ry(e) {
      this._internalRoot = e;
    }
    function RO(e) {
      e && Vh(e);
    }
    Ry.prototype.unstable_scheduleHydration = RO;
    function DO(e, t, a) {
      if (!Dy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qx(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, c = !1, v = !1, g = "", E = Xx;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var w = _x(t, null, e, Em, i, c, v, g, E);
      if (vm(w.current, e), bp(e), l)
        for (var k = 0; k < l.length; k++) {
          var j = l[k];
          $k(w, j);
        }
      return new Ry(w);
    }
    function Dy(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ka || e.nodeType === Io || !ot));
    }
    function pv(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ka || e.nodeType === Io || e.nodeType === Hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function qx(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Op(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var kO = f.ReactCurrentOwner, Zx;
    Zx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Hn) {
        var t = Mx(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Rb(e), l = !!(i && mu(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Rb(e) {
      return e ? e.nodeType === Ka ? e.documentElement : e.firstChild : null;
    }
    function Jx() {
    }
    function NO(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var P = Ty(v);
            c.call(P);
          };
        }
        var v = _x(
          t,
          i,
          e,
          gu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Jx
        );
        e._reactRootContainer = v, vm(v.current, e);
        var g = e.nodeType === Hn ? e.parentNode : e;
        return bp(g), Rl(), v;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var w = i;
          i = function() {
            var P = Ty(k);
            w.call(P);
          };
        }
        var k = Nx(
          e,
          gu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Jx
        );
        e._reactRootContainer = k, vm(k.current, e);
        var j = e.nodeType === Hn ? e.parentNode : e;
        return bp(j), Rl(function() {
          dv(t, k, a, i);
        }), k;
      }
    }
    function _O(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ky(e, t, a, i, l) {
      Zx(a), _O(l === void 0 ? null : l, "render");
      var c = a._reactRootContainer, v;
      if (!c)
        v = NO(a, t, e, l, i);
      else {
        if (v = c, typeof l == "function") {
          var g = l;
          l = function() {
            var E = Ty(v);
            g.call(E);
          };
        }
        dv(t, v, e, l);
      }
      return Ty(v);
    }
    function OO(e) {
      {
        var t = kO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : hO(e, "findDOMNode");
    }
    function MO(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ky(null, e, t, !0, a);
    }
    function LO(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ky(null, e, t, !1, a);
    }
    function AO(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !is(e))
        throw new Error("parentComponent must be a valid React Component");
      return ky(e, t, a, !1, i);
    }
    function $O(e) {
      if (!pv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Op(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Rb(e), i = a && !mu(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Rl(function() {
          ky(null, null, e, !1, function() {
            e._reactRootContainer = null, K1(e);
          });
        }), !0;
      } else {
        {
          var l = Rb(e), c = !!(l && mu(l)), v = e.nodeType === Qr && pv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    $e(mO), zh(yO), bs(gO), np(Ma), Ph(ys), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), mh(PR), yc(rb, D_, Rl);
    function zO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dy(t))
        throw new Error("Target container is not a DOM element.");
      return vO(e, t, null, a);
    }
    function UO(e, t, a, i) {
      return AO(e, t, a, i);
    }
    var Db = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [mu, bf, hm, mc, ns, rb]
    };
    function PO(e, t) {
      return Db.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), TO(e, t);
    }
    function FO(e, t, a) {
      return Db.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), DO(e, t, a);
    }
    function jO(e) {
      return ux() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Rl(e);
    }
    var HO = wO({
      findFiberByHostInstance: _s,
      bundleType: 1,
      version: bb,
      rendererPackageName: "react-dom"
    });
    if (!HO && nt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ew = window.location.protocol;
      /^(https?|file):$/.test(ew) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ew === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Db, Va.createPortal = zO, Va.createRoot = PO, Va.findDOMNode = OO, Va.flushSync = jO, Va.hydrate = MO, Va.hydrateRoot = FO, Va.render = LO, Va.unmountComponentAtNode = $O, Va.unstable_batchedUpdates = rb, Va.unstable_renderSubtreeIntoContainer = UO, Va.version = bb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Va;
}
function Ww() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ww);
    } catch (u) {
      console.error(u);
    }
  }
}
process.env.NODE_ENV === "production" ? (Ww(), Vb.exports = GM()) : Vb.exports = QM();
var a1 = Vb.exports;
const Gw = /* @__PURE__ */ WO(a1);
function i1(u, d = []) {
  let f = [];
  function y(b, h) {
    const x = /* @__PURE__ */ Cv(h), T = f.length;
    f = [
      ...f,
      h
    ];
    function R(D) {
      const { scope: _, children: L, ...U } = D, O = (_ == null ? void 0 : _[u][T]) || x, H = Kf(
        () => U,
        Object.values(U)
      );
      return /* @__PURE__ */ Le(O.Provider, {
        value: H
      }, L);
    }
    function M(D, _) {
      const L = (_ == null ? void 0 : _[u][T]) || x, U = Gy(L);
      if (U)
        return U;
      if (h !== void 0)
        return h;
      throw new Error(`\`${D}\` must be used within \`${b}\``);
    }
    return R.displayName = b + "Provider", [
      R,
      M
    ];
  }
  const S = () => {
    const b = f.map((h) => /* @__PURE__ */ Cv(h));
    return function(x) {
      const T = (x == null ? void 0 : x[u]) || b;
      return Kf(
        () => ({
          [`__scope${u}`]: {
            ...x,
            [u]: T
          }
        }),
        [
          x,
          T
        ]
      );
    };
  };
  return S.scopeName = u, [
    y,
    KM(S, ...d)
  ];
}
function KM(...u) {
  const d = u[0];
  if (u.length === 1)
    return d;
  const f = () => {
    const y = u.map(
      (S) => ({
        useScope: S(),
        scopeName: S.scopeName
      })
    );
    return function(b) {
      const h = y.reduce((x, { useScope: T, scopeName: R }) => {
        const D = T(b)[`__scope${R}`];
        return {
          ...x,
          ...D
        };
      }, {});
      return Kf(
        () => ({
          [`__scope${d.scopeName}`]: h
        }),
        [
          h
        ]
      );
    };
  };
  return f.scopeName = d.scopeName, f;
}
function Pn(u, d, { checkForDefaultPrevented: f = !0 } = {}) {
  return function(S) {
    if (u == null || u(S), f === !1 || !S.defaultPrevented)
      return d == null ? void 0 : d(S);
  };
}
function XM(u, d) {
  typeof u == "function" ? u(d) : u != null && (u.current = d);
}
function o1(...u) {
  return (d) => u.forEach(
    (f) => XM(f, d)
  );
}
function ri(...u) {
  return Ba(o1(...u), u);
}
const Xf = /* @__PURE__ */ Ht((u, d) => {
  const { children: f, ...y } = u, S = Qs.toArray(f), b = S.find(ZM);
  if (b) {
    const h = b.props.children, x = S.map((T) => T === b ? Qs.count(h) > 1 ? Qs.only(null) : /* @__PURE__ */ Iy(h) ? h.props.children : null : T);
    return /* @__PURE__ */ Le(Ib, Ot({}, y, {
      ref: d
    }), /* @__PURE__ */ Iy(h) ? /* @__PURE__ */ n1(h, void 0, x) : null);
  }
  return /* @__PURE__ */ Le(Ib, Ot({}, y, {
    ref: d
  }), f);
});
Xf.displayName = "Slot";
const Ib = /* @__PURE__ */ Ht((u, d) => {
  const { children: f, ...y } = u;
  return /* @__PURE__ */ Iy(f) ? /* @__PURE__ */ n1(f, {
    ...JM(y, f.props),
    ref: d ? o1(d, f.ref) : f.ref
  }) : Qs.count(f) > 1 ? Qs.only(null) : null;
});
Ib.displayName = "SlotClone";
const qM = ({ children: u }) => /* @__PURE__ */ Le(By, null, u);
function ZM(u) {
  return /* @__PURE__ */ Iy(u) && u.type === qM;
}
function JM(u, d) {
  const f = {
    ...d
  };
  for (const y in d) {
    const S = u[y], b = d[y];
    /^on[A-Z]/.test(y) ? S && b ? f[y] = (...x) => {
      b(...x), S(...x);
    } : S && (f[y] = S) : y === "style" ? f[y] = {
      ...S,
      ...b
    } : y === "className" && (f[y] = [
      S,
      b
    ].filter(Boolean).join(" "));
  }
  return {
    ...u,
    ...f
  };
}
const e2 = [
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
], dr = e2.reduce((u, d) => {
  const f = /* @__PURE__ */ Ht((y, S) => {
    const { asChild: b, ...h } = y, x = b ? Xf : d;
    return Fn(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ Le(x, Ot({}, h, {
      ref: S
    }));
  });
  return f.displayName = `Primitive.${d}`, {
    ...u,
    [d]: f
  };
}, {});
function Bb(u, d) {
  u && a1.flushSync(
    () => u.dispatchEvent(d)
  );
}
function Ia(u) {
  const d = jt(u);
  return Fn(() => {
    d.current = u;
  }), Kf(
    () => (...f) => {
      var y;
      return (y = d.current) === null || y === void 0 ? void 0 : y.call(d, ...f);
    },
    []
  );
}
function Qw({ prop: u, defaultProp: d, onChange: f = () => {
} }) {
  const [y, S] = t2({
    defaultProp: d,
    onChange: f
  }), b = u !== void 0, h = b ? u : y, x = Ia(f), T = Ba((R) => {
    if (b) {
      const D = typeof R == "function" ? R(u) : R;
      D !== u && x(D);
    } else
      S(R);
  }, [
    b,
    u,
    S,
    x
  ]);
  return [
    h,
    T
  ];
}
function t2({ defaultProp: u, onChange: d }) {
  const f = fr(u), [y] = f, S = jt(y), b = Ia(d);
  return Fn(() => {
    S.current !== y && (b(y), S.current = y);
  }, [
    y,
    S,
    b
  ]), f;
}
const n2 = /* @__PURE__ */ Cv(void 0);
function r2(u) {
  const d = Gy(n2);
  return u || d || "ltr";
}
const qf = globalThis != null && globalThis.document ? zw : () => {
};
function a2(u, d) {
  return BO((f, y) => {
    const S = d[f][y];
    return S ?? f;
  }, u);
}
const zu = (u) => {
  const { present: d, children: f } = u, y = i2(d), S = typeof f == "function" ? f({
    present: y.isPresent
  }) : Qs.only(f), b = ri(y.ref, S.ref);
  return typeof f == "function" || y.isPresent ? /* @__PURE__ */ n1(S, {
    ref: b
  }) : null;
};
zu.displayName = "Presence";
function i2(u) {
  const [d, f] = fr(), y = jt({}), S = jt(u), b = jt("none"), h = u ? "mounted" : "unmounted", [x, T] = a2(h, {
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
  return Fn(() => {
    const R = Oy(y.current);
    b.current = x === "mounted" ? R : "none";
  }, [
    x
  ]), qf(() => {
    const R = y.current, M = S.current;
    if (M !== u) {
      const _ = b.current, L = Oy(R);
      u ? T("MOUNT") : L === "none" || (R == null ? void 0 : R.display) === "none" ? T("UNMOUNT") : T(M && _ !== L ? "ANIMATION_OUT" : "UNMOUNT"), S.current = u;
    }
  }, [
    u,
    T
  ]), qf(() => {
    if (d) {
      const R = (D) => {
        const L = Oy(y.current).includes(D.animationName);
        D.target === d && L && a1.flushSync(
          () => T("ANIMATION_END")
        );
      }, M = (D) => {
        D.target === d && (b.current = Oy(y.current));
      };
      return d.addEventListener("animationstart", M), d.addEventListener("animationcancel", R), d.addEventListener("animationend", R), () => {
        d.removeEventListener("animationstart", M), d.removeEventListener("animationcancel", R), d.removeEventListener("animationend", R);
      };
    } else
      T("ANIMATION_END");
  }, [
    d,
    T
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(x),
    ref: Ba((R) => {
      R && (y.current = getComputedStyle(R)), f(R);
    }, [])
  };
}
function Oy(u) {
  return (u == null ? void 0 : u.animationName) || "none";
}
const o2 = ze.useId || (() => {
});
let l2 = 0;
function bv(u) {
  const [d, f] = ze.useState(o2());
  return qf(() => {
    u || f(
      (y) => y ?? String(l2++)
    );
  }, [
    u
  ]), u || (d ? `radix-${d}` : "");
}
function Kw(u) {
  const d = u + "CollectionProvider", [f, y] = i1(d), [S, b] = f(d, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), h = (L) => {
    const { scope: U, children: O } = L, H = Me.useRef(null), z = Me.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Me.createElement(S, {
      scope: U,
      itemMap: z,
      collectionRef: H
    }, O);
  }, x = u + "CollectionSlot", T = /* @__PURE__ */ Me.forwardRef((L, U) => {
    const { scope: O, children: H } = L, z = b(x, O), Q = ri(U, z.collectionRef);
    return /* @__PURE__ */ Me.createElement(Xf, {
      ref: Q
    }, H);
  }), R = u + "CollectionItemSlot", M = "data-radix-collection-item", D = /* @__PURE__ */ Me.forwardRef((L, U) => {
    const { scope: O, children: H, ...z } = L, Q = Me.useRef(null), V = ri(U, Q), G = b(R, O);
    return Me.useEffect(() => (G.itemMap.set(Q, {
      ref: Q,
      ...z
    }), () => void G.itemMap.delete(Q))), /* @__PURE__ */ Me.createElement(Xf, {
      [M]: "",
      ref: V
    }, H);
  });
  function _(L) {
    const U = b(u + "CollectionConsumer", L);
    return Me.useCallback(() => {
      const H = U.collectionRef.current;
      if (!H)
        return [];
      const z = Array.from(H.querySelectorAll(`[${M}]`));
      return Array.from(U.itemMap.values()).sort(
        (G, B) => z.indexOf(G.ref.current) - z.indexOf(B.ref.current)
      );
    }, [
      U.collectionRef,
      U.itemMap
    ]);
  }
  return [
    {
      Provider: h,
      Slot: T,
      ItemSlot: D
    },
    _,
    y
  ];
}
function u2(u, d = globalThis == null ? void 0 : globalThis.document) {
  const f = Ia(u);
  Fn(() => {
    const y = (S) => {
      S.key === "Escape" && f(S);
    };
    return d.addEventListener("keydown", y), () => d.removeEventListener("keydown", y);
  }, [
    f,
    d
  ]);
}
const Yb = "dismissableLayer.update", s2 = "dismissableLayer.pointerDownOutside", c2 = "dismissableLayer.focusOutside";
let cw;
const f2 = /* @__PURE__ */ Cv({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xw = /* @__PURE__ */ Ht((u, d) => {
  var f;
  const { disableOutsidePointerEvents: y = !1, onEscapeKeyDown: S, onPointerDownOutside: b, onFocusOutside: h, onInteractOutside: x, onDismiss: T, ...R } = u, M = Gy(f2), [D, _] = fr(null), L = (f = D == null ? void 0 : D.ownerDocument) !== null && f !== void 0 ? f : globalThis == null ? void 0 : globalThis.document, [, U] = fr({}), O = ri(
    d,
    (se) => _(se)
  ), H = Array.from(M.layers), [z] = [
    ...M.layersWithOutsidePointerEventsDisabled
  ].slice(-1), Q = H.indexOf(z), V = D ? H.indexOf(D) : -1, G = M.layersWithOutsidePointerEventsDisabled.size > 0, B = V >= Q, ue = d2((se) => {
    const ve = se.target, Te = [
      ...M.branches
    ].some(
      (Ae) => Ae.contains(ve)
    );
    !B || Te || (b == null || b(se), x == null || x(se), se.defaultPrevented || T == null || T());
  }, L), ae = p2((se) => {
    const ve = se.target;
    [
      ...M.branches
    ].some(
      (Ae) => Ae.contains(ve)
    ) || (h == null || h(se), x == null || x(se), se.defaultPrevented || T == null || T());
  }, L);
  return u2((se) => {
    V === M.layers.size - 1 && (S == null || S(se), !se.defaultPrevented && T && (se.preventDefault(), T()));
  }, L), Fn(() => {
    if (D)
      return y && (M.layersWithOutsidePointerEventsDisabled.size === 0 && (cw = L.body.style.pointerEvents, L.body.style.pointerEvents = "none"), M.layersWithOutsidePointerEventsDisabled.add(D)), M.layers.add(D), fw(), () => {
        y && M.layersWithOutsidePointerEventsDisabled.size === 1 && (L.body.style.pointerEvents = cw);
      };
  }, [
    D,
    L,
    y,
    M
  ]), Fn(() => () => {
    D && (M.layers.delete(D), M.layersWithOutsidePointerEventsDisabled.delete(D), fw());
  }, [
    D,
    M
  ]), Fn(() => {
    const se = () => U({});
    return document.addEventListener(Yb, se), () => document.removeEventListener(Yb, se);
  }, []), /* @__PURE__ */ Le(dr.div, Ot({}, R, {
    ref: O,
    style: {
      pointerEvents: G ? B ? "auto" : "none" : void 0,
      ...u.style
    },
    onFocusCapture: Pn(u.onFocusCapture, ae.onFocusCapture),
    onBlurCapture: Pn(u.onBlurCapture, ae.onBlurCapture),
    onPointerDownCapture: Pn(u.onPointerDownCapture, ue.onPointerDownCapture)
  }));
});
function d2(u, d = globalThis == null ? void 0 : globalThis.document) {
  const f = Ia(u), y = jt(!1), S = jt(() => {
  });
  return Fn(() => {
    const b = (x) => {
      if (x.target && !y.current) {
        let R = function() {
          qw(s2, f, T, {
            discrete: !0
          });
        };
        const T = {
          originalEvent: x
        };
        x.pointerType === "touch" ? (d.removeEventListener("click", S.current), S.current = R, d.addEventListener("click", S.current, {
          once: !0
        })) : R();
      } else
        d.removeEventListener("click", S.current);
      y.current = !1;
    }, h = window.setTimeout(() => {
      d.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(h), d.removeEventListener("pointerdown", b), d.removeEventListener("click", S.current);
    };
  }, [
    d,
    f
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => y.current = !0
  };
}
function p2(u, d = globalThis == null ? void 0 : globalThis.document) {
  const f = Ia(u), y = jt(!1);
  return Fn(() => {
    const S = (b) => {
      b.target && !y.current && qw(c2, f, {
        originalEvent: b
      }, {
        discrete: !1
      });
    };
    return d.addEventListener("focusin", S), () => d.removeEventListener("focusin", S);
  }, [
    d,
    f
  ]), {
    onFocusCapture: () => y.current = !0,
    onBlurCapture: () => y.current = !1
  };
}
function fw() {
  const u = new CustomEvent(Yb);
  document.dispatchEvent(u);
}
function qw(u, d, f, { discrete: y }) {
  const S = f.originalEvent.target, b = new CustomEvent(u, {
    bubbles: !1,
    cancelable: !0,
    detail: f
  });
  d && S.addEventListener(u, d, {
    once: !0
  }), y ? Bb(S, b) : S.dispatchEvent(b);
}
function v2(u) {
  const d = jt({
    value: u,
    previous: u
  });
  return Kf(() => (d.current.value !== u && (d.current.previous = d.current.value, d.current.value = u), d.current.previous), [
    u
  ]);
}
const h2 = /* @__PURE__ */ Ht((u, d) => /* @__PURE__ */ Le(dr.span, Ot({}, u, {
  ref: d,
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
    ...u.style
  }
}))), m2 = h2, kv = "NavigationMenu", [l1, Zw, y2] = Kw(kv), [Wb, g2, S2] = Kw(kv), [u1, AA] = i1(kv, [
  y2,
  S2
]), [b2, Qi] = u1(kv), [E2, C2] = u1(kv), x2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, value: y, onValueChange: S, defaultValue: b, delayDuration: h = 200, skipDelayDuration: x = 300, orientation: T = "horizontal", dir: R, ...M } = u, [D, _] = fr(null), L = ri(
    d,
    (ve) => _(ve)
  ), U = r2(R), O = jt(0), H = jt(0), z = jt(0), [Q, V] = fr(!0), [G = "", B] = Qw({
    prop: y,
    onChange: (ve) => {
      const Te = ve !== "", Ae = x > 0;
      Te ? (window.clearTimeout(z.current), Ae && V(!1)) : (window.clearTimeout(z.current), z.current = window.setTimeout(
        () => V(!0),
        x
      )), S == null || S(ve);
    },
    defaultProp: b
  }), ue = Ba(() => {
    window.clearTimeout(H.current), H.current = window.setTimeout(
      () => B(""),
      150
    );
  }, [
    B
  ]), ae = Ba((ve) => {
    window.clearTimeout(H.current), B(ve);
  }, [
    B
  ]), se = Ba((ve) => {
    G === ve ? window.clearTimeout(H.current) : O.current = window.setTimeout(() => {
      window.clearTimeout(H.current), B(ve);
    }, h);
  }, [
    G,
    B,
    h
  ]);
  return Fn(() => () => {
    window.clearTimeout(O.current), window.clearTimeout(H.current), window.clearTimeout(z.current);
  }, []), /* @__PURE__ */ Le(w2, {
    scope: f,
    isRootMenu: !0,
    value: G,
    dir: U,
    orientation: T,
    rootNavigationMenu: D,
    onTriggerEnter: (ve) => {
      window.clearTimeout(O.current), Q ? se(ve) : ae(ve);
    },
    onTriggerLeave: () => {
      window.clearTimeout(O.current), ue();
    },
    onContentEnter: () => window.clearTimeout(H.current),
    onContentLeave: ue,
    onItemSelect: (ve) => {
      B(
        (Te) => Te === ve ? "" : ve
      );
    },
    onItemDismiss: () => B("")
  }, /* @__PURE__ */ Le(dr.nav, Ot({
    "aria-label": "Main",
    "data-orientation": T,
    dir: U
  }, M, {
    ref: L
  })));
}), w2 = (u) => {
  const { scope: d, isRootMenu: f, rootNavigationMenu: y, dir: S, orientation: b, children: h, value: x, onItemSelect: T, onItemDismiss: R, onTriggerEnter: M, onTriggerLeave: D, onContentEnter: _, onContentLeave: L } = u, [U, O] = fr(null), [H, z] = fr(/* @__PURE__ */ new Map()), [Q, V] = fr(null);
  return /* @__PURE__ */ Le(b2, {
    scope: d,
    isRootMenu: f,
    rootNavigationMenu: y,
    value: x,
    previousValue: v2(x),
    baseId: bv(),
    dir: S,
    orientation: b,
    viewport: U,
    onViewportChange: O,
    indicatorTrack: Q,
    onIndicatorTrackChange: V,
    onTriggerEnter: Ia(M),
    onTriggerLeave: Ia(D),
    onContentEnter: Ia(_),
    onContentLeave: Ia(L),
    onItemSelect: Ia(T),
    onItemDismiss: Ia(R),
    onViewportContentChange: Ba((G, B) => {
      z((ue) => (ue.set(G, B), new Map(ue)));
    }, []),
    onViewportContentRemove: Ba((G) => {
      z((B) => B.has(G) ? (B.delete(G), new Map(B)) : B);
    }, [])
  }, /* @__PURE__ */ Le(l1.Provider, {
    scope: d
  }, /* @__PURE__ */ Le(E2, {
    scope: d,
    items: H
  }, h)));
}, T2 = "NavigationMenuList", R2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, ...y } = u, S = Qi(T2, f), b = /* @__PURE__ */ Le(dr.ul, Ot({
    "data-orientation": S.orientation
  }, y, {
    ref: d
  }));
  return /* @__PURE__ */ Le(dr.div, {
    style: {
      position: "relative"
    },
    ref: S.onIndicatorTrackChange
  }, /* @__PURE__ */ Le(l1.Slot, {
    scope: f
  }, S.isRootMenu ? /* @__PURE__ */ Le(rT, {
    asChild: !0
  }, b) : b));
}), D2 = "NavigationMenuItem", [k2, Jw] = u1(D2), N2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, value: y, ...S } = u, b = bv(), h = y || b || "LEGACY_REACT_AUTO_VALUE", x = jt(null), T = jt(null), R = jt(null), M = jt(() => {
  }), D = jt(!1), _ = Ba((U = "start") => {
    if (x.current) {
      M.current();
      const O = Gb(x.current);
      O.length && s1(U === "start" ? O : O.reverse());
    }
  }, []), L = Ba(() => {
    if (x.current) {
      const U = Gb(x.current);
      U.length && (M.current = j2(U));
    }
  }, []);
  return /* @__PURE__ */ Le(k2, {
    scope: f,
    value: h,
    triggerRef: T,
    contentRef: x,
    focusProxyRef: R,
    wasEscapeCloseRef: D,
    onEntryKeyDown: _,
    onFocusProxyEnter: _,
    onRootContentClose: L,
    onContentFocusOutside: L
  }, /* @__PURE__ */ Le(dr.li, Ot({}, S, {
    ref: d
  })));
}), dw = "NavigationMenuTrigger", _2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, disabled: y, ...S } = u, b = Qi(dw, u.__scopeNavigationMenu), h = Jw(dw, u.__scopeNavigationMenu), x = jt(null), T = ri(x, h.triggerRef, d), R = iT(b.baseId, h.value), M = oT(b.baseId, h.value), D = jt(!1), _ = jt(!1), L = h.value === b.value;
  return /* @__PURE__ */ Le(By, null, /* @__PURE__ */ Le(l1.ItemSlot, {
    scope: f,
    value: h.value
  }, /* @__PURE__ */ Le(aT, {
    asChild: !0
  }, /* @__PURE__ */ Le(dr.button, Ot({
    id: R,
    disabled: y,
    "data-disabled": y ? "" : void 0,
    "data-state": c1(L),
    "aria-expanded": L,
    "aria-controls": M
  }, S, {
    ref: T,
    onPointerEnter: Pn(u.onPointerEnter, () => {
      _.current = !1, h.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: Pn(u.onPointerMove, Yy(() => {
      y || _.current || h.wasEscapeCloseRef.current || D.current || (b.onTriggerEnter(h.value), D.current = !0);
    })),
    onPointerLeave: Pn(u.onPointerLeave, Yy(() => {
      y || (b.onTriggerLeave(), D.current = !1);
    })),
    onClick: Pn(u.onClick, () => {
      b.onItemSelect(h.value), _.current = L;
    }),
    onKeyDown: Pn(u.onKeyDown, (U) => {
      const H = {
        horizontal: "ArrowDown",
        vertical: b.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[b.orientation];
      L && U.key === H && (h.onEntryKeyDown(), U.preventDefault());
    })
  })))), L && /* @__PURE__ */ Le(By, null, /* @__PURE__ */ Le(m2, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: h.focusProxyRef,
    onFocus: (U) => {
      const O = h.contentRef.current, H = U.relatedTarget, z = H === x.current, Q = O == null ? void 0 : O.contains(H);
      (z || !Q) && h.onFocusProxyEnter(z ? "start" : "end");
    }
  }), b.viewport && /* @__PURE__ */ Le("span", {
    "aria-owns": M
  })));
}), pw = "navigationMenu.linkSelect", O2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, active: y, onSelect: S, ...b } = u;
  return /* @__PURE__ */ Le(aT, {
    asChild: !0
  }, /* @__PURE__ */ Le(dr.a, Ot({
    "data-active": y ? "" : void 0,
    "aria-current": y ? "page" : void 0
  }, b, {
    ref: d,
    onClick: Pn(u.onClick, (h) => {
      const x = h.target, T = new CustomEvent(pw, {
        bubbles: !0,
        cancelable: !0
      });
      if (x.addEventListener(
        pw,
        (R) => S == null ? void 0 : S(R),
        {
          once: !0
        }
      ), Bb(x, T), !T.defaultPrevented && !h.metaKey) {
        const R = new CustomEvent(Fy, {
          bubbles: !0,
          cancelable: !0
        });
        Bb(x, R);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), eT = "NavigationMenuIndicator", M2 = /* @__PURE__ */ Ht((u, d) => {
  const { forceMount: f, ...y } = u, S = Qi(eT, u.__scopeNavigationMenu), b = !!S.value;
  return S.indicatorTrack ? /* @__PURE__ */ Gw.createPortal(/* @__PURE__ */ Le(zu, {
    present: f || b
  }, /* @__PURE__ */ Le(L2, Ot({}, y, {
    ref: d
  }))), S.indicatorTrack) : null;
}), L2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, ...y } = u, S = Qi(eT, f), b = Zw(f), [h, x] = fr(null), [T, R] = fr(null), M = S.orientation === "horizontal", D = !!S.value;
  Fn(() => {
    var L;
    const O = (L = b().find(
      (H) => H.value === S.value
    )) === null || L === void 0 ? void 0 : L.ref.current;
    O && x(O);
  }, [
    b,
    S.value
  ]);
  const _ = () => {
    h && R({
      size: M ? h.offsetWidth : h.offsetHeight,
      offset: M ? h.offsetLeft : h.offsetTop
    });
  };
  return Qb(h, _), Qb(S.indicatorTrack, _), T ? /* @__PURE__ */ Le(dr.div, Ot({
    "aria-hidden": !0,
    "data-state": D ? "visible" : "hidden",
    "data-orientation": S.orientation
  }, y, {
    ref: d,
    style: {
      position: "absolute",
      ...M ? {
        left: 0,
        width: T.size + "px",
        transform: `translateX(${T.offset}px)`
      } : {
        top: 0,
        height: T.size + "px",
        transform: `translateY(${T.offset}px)`
      },
      ...y.style
    }
  })) : null;
}), xv = "NavigationMenuContent", A2 = /* @__PURE__ */ Ht((u, d) => {
  const { forceMount: f, ...y } = u, S = Qi(xv, u.__scopeNavigationMenu), b = Jw(xv, u.__scopeNavigationMenu), h = ri(b.contentRef, d), x = b.value === S.value, T = {
    value: b.value,
    triggerRef: b.triggerRef,
    focusProxyRef: b.focusProxyRef,
    wasEscapeCloseRef: b.wasEscapeCloseRef,
    onContentFocusOutside: b.onContentFocusOutside,
    onRootContentClose: b.onRootContentClose,
    ...y
  };
  return S.viewport ? /* @__PURE__ */ Le($2, Ot({
    forceMount: f
  }, T, {
    ref: h
  })) : /* @__PURE__ */ Le(zu, {
    present: f || x
  }, /* @__PURE__ */ Le(tT, Ot({
    "data-state": c1(x)
  }, T, {
    ref: h,
    onPointerEnter: Pn(u.onPointerEnter, S.onContentEnter),
    onPointerLeave: Pn(u.onPointerLeave, Yy(S.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !x && S.isRootMenu ? "none" : void 0,
      ...T.style
    }
  })));
}), $2 = /* @__PURE__ */ Ht((u, d) => {
  const f = Qi(xv, u.__scopeNavigationMenu), { onViewportContentChange: y, onViewportContentRemove: S } = f;
  return qf(() => {
    y(u.value, {
      ref: d,
      ...u
    });
  }, [
    u,
    d,
    y
  ]), qf(() => () => S(u.value), [
    u.value,
    S
  ]), null;
}), Fy = "navigationMenu.rootContentDismiss", tT = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, value: y, triggerRef: S, focusProxyRef: b, wasEscapeCloseRef: h, onRootContentClose: x, onContentFocusOutside: T, ...R } = u, M = Qi(xv, f), D = jt(null), _ = ri(D, d), L = iT(M.baseId, y), U = oT(M.baseId, y), O = Zw(f), H = jt(null), { onItemDismiss: z } = M;
  Fn(() => {
    const V = D.current;
    if (M.isRootMenu && V) {
      const G = () => {
        var B;
        z(), x(), V.contains(document.activeElement) && ((B = S.current) === null || B === void 0 || B.focus());
      };
      return V.addEventListener(Fy, G), () => V.removeEventListener(Fy, G);
    }
  }, [
    M.isRootMenu,
    u.value,
    S,
    z,
    x
  ]);
  const Q = Kf(() => {
    const G = O().map(
      (Te) => Te.value
    );
    M.dir === "rtl" && G.reverse();
    const B = G.indexOf(M.value), ue = G.indexOf(M.previousValue), ae = y === M.value, se = ue === G.indexOf(y);
    if (!ae && !se)
      return H.current;
    const ve = (() => {
      if (B !== ue) {
        if (ae && ue !== -1)
          return B > ue ? "from-end" : "from-start";
        if (se && B !== -1)
          return B > ue ? "to-start" : "to-end";
      }
      return null;
    })();
    return H.current = ve, ve;
  }, [
    M.previousValue,
    M.value,
    M.dir,
    O,
    y
  ]);
  return /* @__PURE__ */ Le(rT, {
    asChild: !0
  }, /* @__PURE__ */ Le(Xw, Ot({
    id: U,
    "aria-labelledby": L,
    "data-motion": Q,
    "data-orientation": M.orientation
  }, R, {
    ref: _,
    onDismiss: () => {
      var V;
      const G = new Event(Fy, {
        bubbles: !0,
        cancelable: !0
      });
      (V = D.current) === null || V === void 0 || V.dispatchEvent(G);
    },
    onFocusOutside: Pn(u.onFocusOutside, (V) => {
      var G;
      T();
      const B = V.target;
      (G = M.rootNavigationMenu) !== null && G !== void 0 && G.contains(B) && V.preventDefault();
    }),
    onPointerDownOutside: Pn(u.onPointerDownOutside, (V) => {
      var G;
      const B = V.target, ue = O().some((se) => {
        var ve;
        return (ve = se.ref.current) === null || ve === void 0 ? void 0 : ve.contains(B);
      }), ae = M.isRootMenu && ((G = M.viewport) === null || G === void 0 ? void 0 : G.contains(B));
      (ue || ae || !M.isRootMenu) && V.preventDefault();
    }),
    onKeyDown: Pn(u.onKeyDown, (V) => {
      const G = V.altKey || V.ctrlKey || V.metaKey;
      if (V.key === "Tab" && !G) {
        const ae = Gb(V.currentTarget), se = document.activeElement, ve = ae.findIndex(
          (je) => je === se
        ), Ae = V.shiftKey ? ae.slice(0, ve).reverse() : ae.slice(ve + 1, ae.length);
        if (s1(Ae))
          V.preventDefault();
        else {
          var ue;
          (ue = b.current) === null || ue === void 0 || ue.focus();
        }
      }
    }),
    onEscapeKeyDown: Pn(u.onEscapeKeyDown, (V) => {
      h.current = !0;
    })
  })));
}), nT = "NavigationMenuViewport", z2 = /* @__PURE__ */ Ht((u, d) => {
  const { forceMount: f, ...y } = u, b = !!Qi(nT, u.__scopeNavigationMenu).value;
  return /* @__PURE__ */ Le(zu, {
    present: f || b
  }, /* @__PURE__ */ Le(U2, Ot({}, y, {
    ref: d
  })));
}), U2 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, children: y, ...S } = u, b = Qi(nT, f), h = ri(d, b.onViewportChange), x = C2(xv, u.__scopeNavigationMenu), [T, R] = fr(null), [M, D] = fr(null), _ = T ? (T == null ? void 0 : T.width) + "px" : void 0, L = T ? (T == null ? void 0 : T.height) + "px" : void 0, U = !!b.value, O = U ? b.value : b.previousValue;
  return Qb(M, () => {
    M && R({
      width: M.offsetWidth,
      height: M.offsetHeight
    });
  }), /* @__PURE__ */ Le(dr.div, Ot({
    "data-state": c1(U),
    "data-orientation": b.orientation
  }, S, {
    ref: h,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !U && b.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": _,
      "--radix-navigation-menu-viewport-height": L,
      ...S.style
    },
    onPointerEnter: Pn(u.onPointerEnter, b.onContentEnter),
    onPointerLeave: Pn(u.onPointerLeave, Yy(b.onContentLeave))
  }), Array.from(x.items).map(([z, { ref: Q, forceMount: V, ...G }]) => {
    const B = O === z;
    return /* @__PURE__ */ Le(zu, {
      key: z,
      present: V || B
    }, /* @__PURE__ */ Le(tT, Ot({}, G, {
      ref: o1(Q, (ue) => {
        B && ue && D(ue);
      })
    })));
  }));
}), P2 = "FocusGroup", rT = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, ...y } = u, S = Qi(P2, f);
  return /* @__PURE__ */ Le(Wb.Provider, {
    scope: f
  }, /* @__PURE__ */ Le(Wb.Slot, {
    scope: f
  }, /* @__PURE__ */ Le(dr.div, Ot({
    dir: S.dir
  }, y, {
    ref: d
  }))));
}), vw = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], F2 = "FocusGroupItem", aT = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeNavigationMenu: f, ...y } = u, S = g2(f), b = Qi(F2, f);
  return /* @__PURE__ */ Le(Wb.ItemSlot, {
    scope: f
  }, /* @__PURE__ */ Le(dr.button, Ot({}, y, {
    ref: d,
    onKeyDown: Pn(u.onKeyDown, (h) => {
      if ([
        "Home",
        "End",
        ...vw
      ].includes(h.key)) {
        let T = S().map(
          (D) => D.ref.current
        );
        if ([
          b.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(h.key) && T.reverse(), vw.includes(h.key)) {
          const D = T.indexOf(h.currentTarget);
          T = T.slice(D + 1);
        }
        setTimeout(
          () => s1(T)
        ), h.preventDefault();
      }
    })
  })));
});
function Gb(u) {
  const d = [], f = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (y) => {
      const S = y.tagName === "INPUT" && y.type === "hidden";
      return y.disabled || y.hidden || S ? NodeFilter.FILTER_SKIP : y.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; f.nextNode(); )
    d.push(f.currentNode);
  return d;
}
function s1(u) {
  const d = document.activeElement;
  return u.some((f) => f === d ? !0 : (f.focus(), document.activeElement !== d));
}
function j2(u) {
  return u.forEach((d) => {
    d.dataset.tabindex = d.getAttribute("tabindex") || "", d.setAttribute("tabindex", "-1");
  }), () => {
    u.forEach((d) => {
      const f = d.dataset.tabindex;
      d.setAttribute("tabindex", f);
    });
  };
}
function Qb(u, d) {
  const f = Ia(d);
  qf(() => {
    let y = 0;
    if (u) {
      const S = new ResizeObserver(() => {
        cancelAnimationFrame(y), y = window.requestAnimationFrame(f);
      });
      return S.observe(u), () => {
        window.cancelAnimationFrame(y), S.unobserve(u);
      };
    }
  }, [
    u,
    f
  ]);
}
function c1(u) {
  return u ? "open" : "closed";
}
function iT(u, d) {
  return `${u}-trigger-${d}`;
}
function oT(u, d) {
  return `${u}-content-${d}`;
}
function Yy(u) {
  return (d) => d.pointerType === "mouse" ? u(d) : void 0;
}
const lT = x2, uT = R2, H2 = N2, sT = _2, V2 = O2, cT = M2, fT = A2, dT = z2;
function pT(u) {
  var d, f, y = "";
  if (typeof u == "string" || typeof u == "number")
    y += u;
  else if (typeof u == "object")
    if (Array.isArray(u))
      for (d = 0; d < u.length; d++)
        u[d] && (f = pT(u[d])) && (y && (y += " "), y += f);
    else
      for (d in u)
        u[d] && (y && (y += " "), y += d);
  return y;
}
function I2() {
  for (var u, d, f = 0, y = ""; f < arguments.length; )
    (u = arguments[f++]) && (d = pT(u)) && (y && (y += " "), y += d);
  return y;
}
const hw = (u) => typeof u == "boolean" ? "".concat(u) : u === 0 ? "0" : u, mw = I2, vT = (u, d) => (f) => {
  var y;
  if ((d == null ? void 0 : d.variants) == null)
    return mw(u, f == null ? void 0 : f.class, f == null ? void 0 : f.className);
  const { variants: S, defaultVariants: b } = d, h = Object.keys(S).map((R) => {
    const M = f == null ? void 0 : f[R], D = b == null ? void 0 : b[R];
    if (M === null)
      return null;
    const _ = hw(M) || hw(D);
    return S[R][_];
  }), x = f && Object.entries(f).reduce((R, M) => {
    let [D, _] = M;
    return _ === void 0 || (R[D] = _), R;
  }, {}), T = d == null || (y = d.compoundVariants) === null || y === void 0 ? void 0 : y.reduce((R, M) => {
    let { class: D, className: _, ...L } = M;
    return Object.entries(L).every((U) => {
      let [O, H] = U;
      return Array.isArray(H) ? H.includes({
        ...b,
        ...x
      }[O]) : {
        ...b,
        ...x
      }[O] === H;
    }) ? [
      ...R,
      D,
      _
    ] : R;
  }, []);
  return mw(u, h, T, f == null ? void 0 : f.class, f == null ? void 0 : f.className);
}, hT = ze.forwardRef(({ className: u, children: d, ...f }, y) => /* @__PURE__ */ pe.jsxs(
  lT,
  {
    ref: y,
    className: Ln(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      u
    ),
    ...f,
    children: [
      d,
      /* @__PURE__ */ pe.jsx(ST, {})
    ]
  }
));
hT.displayName = lT.displayName;
const mT = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx(
  uT,
  {
    ref: f,
    className: Ln(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      u
    ),
    ...d
  }
));
mT.displayName = uT.displayName;
const B2 = H2, Y2 = vT(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), yT = ze.forwardRef(({ className: u, children: d, ...f }, y) => /* @__PURE__ */ pe.jsxs(
  sT,
  {
    ref: y,
    className: Ln(Y2(), "group", u),
    ...f,
    children: [
      d,
      " ",
      /* @__PURE__ */ pe.jsx(
        ZO,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
yT.displayName = sT.displayName;
const gT = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx(
  fT,
  {
    ref: f,
    className: Ln(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      u
    ),
    ...d
  }
));
gT.displayName = fT.displayName;
const Kb = V2, ST = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx("div", { className: Ln("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ pe.jsx(
  dT,
  {
    className: Ln(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      u
    ),
    ref: f,
    ...d
  }
) }));
ST.displayName = dT.displayName;
const W2 = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx(
  cT,
  {
    ref: f,
    className: Ln(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      u
    ),
    ...d,
    children: /* @__PURE__ */ pe.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
W2.displayName = cT.displayName;
const G2 = vT(
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
), Qy = ze.forwardRef(
  ({ className: u, variant: d, size: f, asChild: y = !1, ...S }, b) => {
    const h = y ? Xf : "button";
    return /* @__PURE__ */ pe.jsx(
      h,
      {
        className: Ln(G2({ variant: d, size: f, className: u })),
        ref: b,
        ...S
      }
    );
  }
);
Qy.displayName = "Button";
const Q2 = {
  theme: "system",
  setTheme: () => null
}, bT = Cv(Q2);
function $A({
  children: u,
  defaultTheme: d = "system",
  storageKey: f = "vite-ui-theme",
  ...y
}) {
  const [S, b] = fr(
    () => localStorage.getItem(f) || d
  );
  Fn(() => {
    const x = window.document.documentElement;
    if (x.classList.remove("light", "dark"), S === "system") {
      const T = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      x.classList.add(T);
      return;
    }
    x.classList.add(S);
  }, [S]);
  const h = {
    theme: S,
    setTheme: (x) => {
      localStorage.setItem(f, x), b(x);
    }
  };
  return /* @__PURE__ */ pe.jsx(bT.Provider, { ...y, value: h, children: u });
}
const K2 = () => {
  const u = Gy(bT);
  if (u === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return u;
};
function X2() {
  const { setTheme: u, theme: d } = K2(), f = () => {
    u(d === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ pe.jsxs(Qy, { variant: "outline", size: "icon", onClick: () => f(), children: [
    /* @__PURE__ */ pe.jsx(iM, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ pe.jsx(aM, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
    /* @__PURE__ */ pe.jsx("span", { className: "sr-only", children: "Toggle theme" })
  ] });
}
const Xb = "horizontal", q2 = [
  "horizontal",
  "vertical"
], ET = /* @__PURE__ */ Ht((u, d) => {
  const { decorative: f, orientation: y = Xb, ...S } = u, b = CT(y) ? y : Xb, x = f ? {
    role: "none"
  } : {
    "aria-orientation": b === "vertical" ? b : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ Le(dr.div, Ot({
    "data-orientation": b
  }, x, S, {
    ref: d
  }));
});
ET.propTypes = {
  orientation(u, d, f) {
    const y = u[d], S = String(y);
    return y && !CT(y) ? new Error(Z2(S, f)) : null;
  }
};
function Z2(u, d) {
  return `Invalid prop \`orientation\` of value \`${u}\` supplied to \`${d}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Xb}\`.`;
}
function CT(u) {
  return q2.includes(u);
}
const xT = ET, f1 = ze.forwardRef(
  ({ className: u, orientation: d = "horizontal", decorative: f = !0, ...y }, S) => /* @__PURE__ */ pe.jsx(
    xT,
    {
      ref: S,
      decorative: f,
      orientation: d,
      className: Ln(
        "shrink-0 bg-border",
        d === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        u
      ),
      ...y
    }
  )
);
f1.displayName = xT.displayName;
const zA = () => /* @__PURE__ */ pe.jsx("div", { className: "bg-background sticky z-50 top-0 inset-x-0 h-16", children: /* @__PURE__ */ pe.jsxs("header", { className: "relative", children: [
  /* @__PURE__ */ pe.jsxs("div", { className: "flex flex-row justify-between items-center mx-2 h-16", children: [
    /* @__PURE__ */ pe.jsx(hT, { children: /* @__PURE__ */ pe.jsx(mT, { children: /* @__PURE__ */ pe.jsxs(B2, { children: [
      /* @__PURE__ */ pe.jsx(yT, { className: "bg-secondary dark:bg-secondary p-2 rounded-lg", children: "My Apps" }),
      /* @__PURE__ */ pe.jsx(gT, { children: /* @__PURE__ */ pe.jsxs("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ pe.jsx("li", { className: "row-span-3", children: /* @__PURE__ */ pe.jsxs("div", { className: "flex flex-col gap-2 h-full", children: [
          /* @__PURE__ */ pe.jsx(Kb, { asChild: !0, children: /* @__PURE__ */ pe.jsxs(
            "a",
            {
              className: "flex h-3/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
              target: "_blank",
              href: "https://www.gobber.ch",
              children: [
                /* @__PURE__ */ pe.jsx("div", { className: "mb-2 text-lg font-medium", children: "Gobber.ch" }),
                /* @__PURE__ */ pe.jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "My place on the web" })
              ]
            }
          ) }),
          /* @__PURE__ */ pe.jsx(Kb, { asChild: !0, children: /* @__PURE__ */ pe.jsx(
            "a",
            {
              className: "flex h-1/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-4 no-underline outline-none focus:shadow-md",
              target: "_blank",
              href: "https://github.com/KyrillGobber",
              children: /* @__PURE__ */ pe.jsxs("span", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ pe.jsx(Uw, {}),
                /* @__PURE__ */ pe.jsx("p", { children: "My Github" })
              ] })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ pe.jsx(
          _b,
          {
            href: "https://teabruh.gobber.ch",
            title: "TeaBruh",
            text: "The GongFu timer app, we teaheads needed."
          }
        ),
        /* @__PURE__ */ pe.jsx(
          _b,
          {
            href: "https://miit.gobber.ch",
            title: "Miit",
            text: "A free Doodle alternative. Your miitup planner."
          }
        ),
        /* @__PURE__ */ pe.jsx(
          _b,
          {
            href: "https://kybits.gobber.ch",
            title: "KyBits",
            text: "A simple habit tracker app."
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ pe.jsx("h1", { children: "Gobber.ch" }),
    /* @__PURE__ */ pe.jsx("div", { className: "flex flex-row gap-2", children: /* @__PURE__ */ pe.jsx(X2, {}) })
  ] }),
  /* @__PURE__ */ pe.jsx(f1, { className: "bg-secondary" })
] }) }), _b = ({ title: u, href: d, text: f }) => /* @__PURE__ */ pe.jsx("li", { children: /* @__PURE__ */ pe.jsx(Kb, { asChild: !0, children: /* @__PURE__ */ pe.jsxs(
  "a",
  {
    href: d,
    target: "_blank",
    className: Ln(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    ),
    children: [
      /* @__PURE__ */ pe.jsx("div", { className: "text-sm font-medium leading-none", children: u }),
      /* @__PURE__ */ pe.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: f })
    ]
  }
) }) }), Ob = "focusScope.autoFocusOnMount", Mb = "focusScope.autoFocusOnUnmount", yw = {
  bubbles: !1,
  cancelable: !0
}, J2 = /* @__PURE__ */ Ht((u, d) => {
  const { loop: f = !1, trapped: y = !1, onMountAutoFocus: S, onUnmountAutoFocus: b, ...h } = u, [x, T] = fr(null), R = Ia(S), M = Ia(b), D = jt(null), _ = ri(
    d,
    (O) => T(O)
  ), L = jt({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  Fn(() => {
    if (y) {
      let O = function(V) {
        if (L.paused || !x)
          return;
        const G = V.target;
        x.contains(G) ? D.current = G : $u(D.current, {
          select: !0
        });
      }, H = function(V) {
        if (L.paused || !x)
          return;
        const G = V.relatedTarget;
        G !== null && (x.contains(G) || $u(D.current, {
          select: !0
        }));
      }, z = function(V) {
        if (document.activeElement === document.body)
          for (const B of V)
            B.removedNodes.length > 0 && $u(x);
      };
      document.addEventListener("focusin", O), document.addEventListener("focusout", H);
      const Q = new MutationObserver(z);
      return x && Q.observe(x, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", O), document.removeEventListener("focusout", H), Q.disconnect();
      };
    }
  }, [
    y,
    x,
    L.paused
  ]), Fn(() => {
    if (x) {
      Sw.add(L);
      const O = document.activeElement;
      if (!x.contains(O)) {
        const z = new CustomEvent(Ob, yw);
        x.addEventListener(Ob, R), x.dispatchEvent(z), z.defaultPrevented || (eL(iL(wT(x)), {
          select: !0
        }), document.activeElement === O && $u(x));
      }
      return () => {
        x.removeEventListener(Ob, R), setTimeout(() => {
          const z = new CustomEvent(Mb, yw);
          x.addEventListener(Mb, M), x.dispatchEvent(z), z.defaultPrevented || $u(O ?? document.body, {
            select: !0
          }), x.removeEventListener(Mb, M), Sw.remove(L);
        }, 0);
      };
    }
  }, [
    x,
    R,
    M,
    L
  ]);
  const U = Ba((O) => {
    if (!f && !y || L.paused)
      return;
    const H = O.key === "Tab" && !O.altKey && !O.ctrlKey && !O.metaKey, z = document.activeElement;
    if (H && z) {
      const Q = O.currentTarget, [V, G] = tL(Q);
      V && G ? !O.shiftKey && z === G ? (O.preventDefault(), f && $u(V, {
        select: !0
      })) : O.shiftKey && z === V && (O.preventDefault(), f && $u(G, {
        select: !0
      })) : z === Q && O.preventDefault();
    }
  }, [
    f,
    y,
    L.paused
  ]);
  return /* @__PURE__ */ Le(dr.div, Ot({
    tabIndex: -1
  }, h, {
    ref: _,
    onKeyDown: U
  }));
});
function eL(u, { select: d = !1 } = {}) {
  const f = document.activeElement;
  for (const y of u)
    if ($u(y, {
      select: d
    }), document.activeElement !== f)
      return;
}
function tL(u) {
  const d = wT(u), f = gw(d, u), y = gw(d.reverse(), u);
  return [
    f,
    y
  ];
}
function wT(u) {
  const d = [], f = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (y) => {
      const S = y.tagName === "INPUT" && y.type === "hidden";
      return y.disabled || y.hidden || S ? NodeFilter.FILTER_SKIP : y.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; f.nextNode(); )
    d.push(f.currentNode);
  return d;
}
function gw(u, d) {
  for (const f of u)
    if (!nL(f, {
      upTo: d
    }))
      return f;
}
function nL(u, { upTo: d }) {
  if (getComputedStyle(u).visibility === "hidden")
    return !0;
  for (; u; ) {
    if (d !== void 0 && u === d)
      return !1;
    if (getComputedStyle(u).display === "none")
      return !0;
    u = u.parentElement;
  }
  return !1;
}
function rL(u) {
  return u instanceof HTMLInputElement && "select" in u;
}
function $u(u, { select: d = !1 } = {}) {
  if (u && u.focus) {
    const f = document.activeElement;
    u.focus({
      preventScroll: !0
    }), u !== f && rL(u) && d && u.select();
  }
}
const Sw = aL();
function aL() {
  let u = [];
  return {
    add(d) {
      const f = u[0];
      d !== f && (f == null || f.pause()), u = bw(u, d), u.unshift(d);
    },
    remove(d) {
      var f;
      u = bw(u, d), (f = u[0]) === null || f === void 0 || f.resume();
    }
  };
}
function bw(u, d) {
  const f = [
    ...u
  ], y = f.indexOf(d);
  return y !== -1 && f.splice(y, 1), f;
}
function iL(u) {
  return u.filter(
    (d) => d.tagName !== "A"
  );
}
const oL = /* @__PURE__ */ Ht((u, d) => {
  var f;
  const { container: y = globalThis == null || (f = globalThis.document) === null || f === void 0 ? void 0 : f.body, ...S } = u;
  return y ? /* @__PURE__ */ Gw.createPortal(/* @__PURE__ */ Le(dr.div, Ot({}, S, {
    ref: d
  })), y) : null;
});
let Lb = 0;
function lL() {
  Fn(() => {
    var u, d;
    const f = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (u = f[0]) !== null && u !== void 0 ? u : Ew()), document.body.insertAdjacentElement("beforeend", (d = f[1]) !== null && d !== void 0 ? d : Ew()), Lb++, () => {
      Lb === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (y) => y.remove()
      ), Lb--;
    };
  }, []);
}
function Ew() {
  const u = document.createElement("span");
  return u.setAttribute("data-radix-focus-guard", ""), u.tabIndex = 0, u.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", u;
}
var Ao = function() {
  return Ao = Object.assign || function(d) {
    for (var f, y = 1, S = arguments.length; y < S; y++) {
      f = arguments[y];
      for (var b in f)
        Object.prototype.hasOwnProperty.call(f, b) && (d[b] = f[b]);
    }
    return d;
  }, Ao.apply(this, arguments);
};
function TT(u, d) {
  var f = {};
  for (var y in u)
    Object.prototype.hasOwnProperty.call(u, y) && d.indexOf(y) < 0 && (f[y] = u[y]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var S = 0, y = Object.getOwnPropertySymbols(u); S < y.length; S++)
      d.indexOf(y[S]) < 0 && Object.prototype.propertyIsEnumerable.call(u, y[S]) && (f[y[S]] = u[y[S]]);
  return f;
}
function uL(u, d, f) {
  if (f || arguments.length === 2)
    for (var y = 0, S = d.length, b; y < S; y++)
      (b || !(y in d)) && (b || (b = Array.prototype.slice.call(d, 0, y)), b[y] = d[y]);
  return u.concat(b || Array.prototype.slice.call(d));
}
var jy = "right-scroll-bar-position", Hy = "width-before-scroll-bar", sL = "with-scroll-bars-hidden", cL = "--removed-body-scroll-bar-size";
function Ab(u, d) {
  return typeof u == "function" ? u(d) : u && (u.current = d), u;
}
function fL(u, d) {
  var f = fr(function() {
    return {
      // value
      value: u,
      // last callback
      callback: d,
      // "memoized" public interface
      facade: {
        get current() {
          return f.value;
        },
        set current(y) {
          var S = f.value;
          S !== y && (f.value = y, f.callback(y, S));
        }
      }
    };
  })[0];
  return f.callback = d, f.facade;
}
var dL = typeof window < "u" ? ze.useLayoutEffect : ze.useEffect, Cw = /* @__PURE__ */ new WeakMap();
function pL(u, d) {
  var f = fL(d || null, function(y) {
    return u.forEach(function(S) {
      return Ab(S, y);
    });
  });
  return dL(function() {
    var y = Cw.get(f);
    if (y) {
      var S = new Set(y), b = new Set(u), h = f.current;
      S.forEach(function(x) {
        b.has(x) || Ab(x, null);
      }), b.forEach(function(x) {
        S.has(x) || Ab(x, h);
      });
    }
    Cw.set(f, u);
  }, [u]), f;
}
function vL(u) {
  return u;
}
function hL(u, d) {
  d === void 0 && (d = vL);
  var f = [], y = !1, S = {
    read: function() {
      if (y)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return f.length ? f[f.length - 1] : u;
    },
    useMedium: function(b) {
      var h = d(b, y);
      return f.push(h), function() {
        f = f.filter(function(x) {
          return x !== h;
        });
      };
    },
    assignSyncMedium: function(b) {
      for (y = !0; f.length; ) {
        var h = f;
        f = [], h.forEach(b);
      }
      f = {
        push: function(x) {
          return b(x);
        },
        filter: function() {
          return f;
        }
      };
    },
    assignMedium: function(b) {
      y = !0;
      var h = [];
      if (f.length) {
        var x = f;
        f = [], x.forEach(b), h = f;
      }
      var T = function() {
        var M = h;
        h = [], M.forEach(b);
      }, R = function() {
        return Promise.resolve().then(T);
      };
      R(), f = {
        push: function(M) {
          h.push(M), R();
        },
        filter: function(M) {
          return h = h.filter(M), f;
        }
      };
    }
  };
  return S;
}
function mL(u) {
  u === void 0 && (u = {});
  var d = hL(null);
  return d.options = Ao({ async: !0, ssr: !1 }, u), d;
}
var RT = function(u) {
  var d = u.sideCar, f = TT(u, ["sideCar"]);
  if (!d)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var y = d.read();
  if (!y)
    throw new Error("Sidecar medium not found");
  return ze.createElement(y, Ao({}, f));
};
RT.isSideCarExport = !0;
function yL(u, d) {
  return u.useMedium(d), RT;
}
var DT = mL(), $b = function() {
}, Ky = ze.forwardRef(function(u, d) {
  var f = ze.useRef(null), y = ze.useState({
    onScrollCapture: $b,
    onWheelCapture: $b,
    onTouchMoveCapture: $b
  }), S = y[0], b = y[1], h = u.forwardProps, x = u.children, T = u.className, R = u.removeScrollBar, M = u.enabled, D = u.shards, _ = u.sideCar, L = u.noIsolation, U = u.inert, O = u.allowPinchZoom, H = u.as, z = H === void 0 ? "div" : H, Q = TT(u, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), V = _, G = pL([f, d]), B = Ao(Ao({}, Q), S);
  return ze.createElement(
    ze.Fragment,
    null,
    M && ze.createElement(V, { sideCar: DT, removeScrollBar: R, shards: D, noIsolation: L, inert: U, setCallbacks: b, allowPinchZoom: !!O, lockRef: f }),
    h ? ze.cloneElement(ze.Children.only(x), Ao(Ao({}, B), { ref: G })) : ze.createElement(z, Ao({}, B, { className: T, ref: G }), x)
  );
});
Ky.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ky.classNames = {
  fullWidth: Hy,
  zeroRight: jy
};
var gL = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function SL() {
  if (!document)
    return null;
  var u = document.createElement("style");
  u.type = "text/css";
  var d = gL();
  return d && u.setAttribute("nonce", d), u;
}
function bL(u, d) {
  u.styleSheet ? u.styleSheet.cssText = d : u.appendChild(document.createTextNode(d));
}
function EL(u) {
  var d = document.head || document.getElementsByTagName("head")[0];
  d.appendChild(u);
}
var CL = function() {
  var u = 0, d = null;
  return {
    add: function(f) {
      u == 0 && (d = SL()) && (bL(d, f), EL(d)), u++;
    },
    remove: function() {
      u--, !u && d && (d.parentNode && d.parentNode.removeChild(d), d = null);
    }
  };
}, xL = function() {
  var u = CL();
  return function(d, f) {
    ze.useEffect(function() {
      return u.add(d), function() {
        u.remove();
      };
    }, [d && f]);
  };
}, kT = function() {
  var u = xL(), d = function(f) {
    var y = f.styles, S = f.dynamic;
    return u(y, S), null;
  };
  return d;
}, wL = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zb = function(u) {
  return parseInt(u || "", 10) || 0;
}, TL = function(u) {
  var d = window.getComputedStyle(document.body), f = d[u === "padding" ? "paddingLeft" : "marginLeft"], y = d[u === "padding" ? "paddingTop" : "marginTop"], S = d[u === "padding" ? "paddingRight" : "marginRight"];
  return [zb(f), zb(y), zb(S)];
}, RL = function(u) {
  if (u === void 0 && (u = "margin"), typeof window > "u")
    return wL;
  var d = TL(u), f = document.documentElement.clientWidth, y = window.innerWidth;
  return {
    left: d[0],
    top: d[1],
    right: d[2],
    gap: Math.max(0, y - f + d[2] - d[0])
  };
}, DL = kT(), Qf = "data-scroll-locked", kL = function(u, d, f, y) {
  var S = u.left, b = u.top, h = u.right, x = u.gap;
  return f === void 0 && (f = "margin"), `
  .`.concat(sL, ` {
   overflow: hidden `).concat(y, `;
   padding-right: `).concat(x, "px ").concat(y, `;
  }
  body[`).concat(Qf, `] {
    overflow: hidden `).concat(y, `;
    overscroll-behavior: contain;
    `).concat([
    d && "position: relative ".concat(y, ";"),
    f === "margin" && `
    padding-left: `.concat(S, `px;
    padding-top: `).concat(b, `px;
    padding-right: `).concat(h, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(x, "px ").concat(y, `;
    `),
    f === "padding" && "padding-right: ".concat(x, "px ").concat(y, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(jy, ` {
    right: `).concat(x, "px ").concat(y, `;
  }
  
  .`).concat(Hy, ` {
    margin-right: `).concat(x, "px ").concat(y, `;
  }
  
  .`).concat(jy, " .").concat(jy, ` {
    right: 0 `).concat(y, `;
  }
  
  .`).concat(Hy, " .").concat(Hy, ` {
    margin-right: 0 `).concat(y, `;
  }
  
  body[`).concat(Qf, `] {
    `).concat(cL, ": ").concat(x, `px;
  }
`);
}, xw = function() {
  var u = parseInt(document.body.getAttribute(Qf) || "0", 10);
  return isFinite(u) ? u : 0;
}, NL = function() {
  ze.useEffect(function() {
    return document.body.setAttribute(Qf, (xw() + 1).toString()), function() {
      var u = xw() - 1;
      u <= 0 ? document.body.removeAttribute(Qf) : document.body.setAttribute(Qf, u.toString());
    };
  }, []);
}, _L = function(u) {
  var d = u.noRelative, f = u.noImportant, y = u.gapMode, S = y === void 0 ? "margin" : y;
  NL();
  var b = ze.useMemo(function() {
    return RL(S);
  }, [S]);
  return ze.createElement(DL, { styles: kL(b, !d, S, f ? "" : "!important") });
}, qb = !1;
if (typeof window < "u")
  try {
    var My = Object.defineProperty({}, "passive", {
      get: function() {
        return qb = !0, !0;
      }
    });
    window.addEventListener("test", My, My), window.removeEventListener("test", My, My);
  } catch {
    qb = !1;
  }
var Yf = qb ? { passive: !1 } : !1, OL = function(u) {
  return u.tagName === "TEXTAREA";
}, NT = function(u, d) {
  var f = window.getComputedStyle(u);
  return (
    // not-not-scrollable
    f[d] !== "hidden" && // contains scroll inside self
    !(f.overflowY === f.overflowX && !OL(u) && f[d] === "visible")
  );
}, ML = function(u) {
  return NT(u, "overflowY");
}, LL = function(u) {
  return NT(u, "overflowX");
}, ww = function(u, d) {
  var f = d;
  do {
    typeof ShadowRoot < "u" && f instanceof ShadowRoot && (f = f.host);
    var y = _T(u, f);
    if (y) {
      var S = OT(u, f), b = S[1], h = S[2];
      if (b > h)
        return !0;
    }
    f = f.parentNode;
  } while (f && f !== document.body);
  return !1;
}, AL = function(u) {
  var d = u.scrollTop, f = u.scrollHeight, y = u.clientHeight;
  return [
    d,
    f,
    y
  ];
}, $L = function(u) {
  var d = u.scrollLeft, f = u.scrollWidth, y = u.clientWidth;
  return [
    d,
    f,
    y
  ];
}, _T = function(u, d) {
  return u === "v" ? ML(d) : LL(d);
}, OT = function(u, d) {
  return u === "v" ? AL(d) : $L(d);
}, zL = function(u, d) {
  return u === "h" && d === "rtl" ? -1 : 1;
}, UL = function(u, d, f, y, S) {
  var b = zL(u, window.getComputedStyle(d).direction), h = b * y, x = f.target, T = d.contains(x), R = !1, M = h > 0, D = 0, _ = 0;
  do {
    var L = OT(u, x), U = L[0], O = L[1], H = L[2], z = O - H - b * U;
    (U || z) && _T(u, x) && (D += z, _ += U), x = x.parentNode;
  } while (
    // portaled content
    !T && x !== document.body || // self content
    T && (d.contains(x) || d === x)
  );
  return (M && (S && D === 0 || !S && h > D) || !M && (S && _ === 0 || !S && -h > _)) && (R = !0), R;
}, Ly = function(u) {
  return "changedTouches" in u ? [u.changedTouches[0].clientX, u.changedTouches[0].clientY] : [0, 0];
}, Tw = function(u) {
  return [u.deltaX, u.deltaY];
}, Rw = function(u) {
  return u && "current" in u ? u.current : u;
}, PL = function(u, d) {
  return u[0] === d[0] && u[1] === d[1];
}, FL = function(u) {
  return `
  .block-interactivity-`.concat(u, ` {pointer-events: none;}
  .allow-interactivity-`).concat(u, ` {pointer-events: all;}
`);
}, jL = 0, Wf = [];
function HL(u) {
  var d = ze.useRef([]), f = ze.useRef([0, 0]), y = ze.useRef(), S = ze.useState(jL++)[0], b = ze.useState(function() {
    return kT();
  })[0], h = ze.useRef(u);
  ze.useEffect(function() {
    h.current = u;
  }, [u]), ze.useEffect(function() {
    if (u.inert) {
      document.body.classList.add("block-interactivity-".concat(S));
      var O = uL([u.lockRef.current], (u.shards || []).map(Rw), !0).filter(Boolean);
      return O.forEach(function(H) {
        return H.classList.add("allow-interactivity-".concat(S));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(S)), O.forEach(function(H) {
          return H.classList.remove("allow-interactivity-".concat(S));
        });
      };
    }
  }, [u.inert, u.lockRef.current, u.shards]);
  var x = ze.useCallback(function(O, H) {
    if ("touches" in O && O.touches.length === 2)
      return !h.current.allowPinchZoom;
    var z = Ly(O), Q = f.current, V = "deltaX" in O ? O.deltaX : Q[0] - z[0], G = "deltaY" in O ? O.deltaY : Q[1] - z[1], B, ue = O.target, ae = Math.abs(V) > Math.abs(G) ? "h" : "v";
    if ("touches" in O && ae === "h" && ue.type === "range")
      return !1;
    var se = ww(ae, ue);
    if (!se)
      return !0;
    if (se ? B = ae : (B = ae === "v" ? "h" : "v", se = ww(ae, ue)), !se)
      return !1;
    if (!y.current && "changedTouches" in O && (V || G) && (y.current = B), !B)
      return !0;
    var ve = y.current || B;
    return UL(ve, H, O, ve === "h" ? V : G, !0);
  }, []), T = ze.useCallback(function(O) {
    var H = O;
    if (!(!Wf.length || Wf[Wf.length - 1] !== b)) {
      var z = "deltaY" in H ? Tw(H) : Ly(H), Q = d.current.filter(function(B) {
        return B.name === H.type && B.target === H.target && PL(B.delta, z);
      })[0];
      if (Q && Q.should) {
        H.cancelable && H.preventDefault();
        return;
      }
      if (!Q) {
        var V = (h.current.shards || []).map(Rw).filter(Boolean).filter(function(B) {
          return B.contains(H.target);
        }), G = V.length > 0 ? x(H, V[0]) : !h.current.noIsolation;
        G && H.cancelable && H.preventDefault();
      }
    }
  }, []), R = ze.useCallback(function(O, H, z, Q) {
    var V = { name: O, delta: H, target: z, should: Q };
    d.current.push(V), setTimeout(function() {
      d.current = d.current.filter(function(G) {
        return G !== V;
      });
    }, 1);
  }, []), M = ze.useCallback(function(O) {
    f.current = Ly(O), y.current = void 0;
  }, []), D = ze.useCallback(function(O) {
    R(O.type, Tw(O), O.target, x(O, u.lockRef.current));
  }, []), _ = ze.useCallback(function(O) {
    R(O.type, Ly(O), O.target, x(O, u.lockRef.current));
  }, []);
  ze.useEffect(function() {
    return Wf.push(b), u.setCallbacks({
      onScrollCapture: D,
      onWheelCapture: D,
      onTouchMoveCapture: _
    }), document.addEventListener("wheel", T, Yf), document.addEventListener("touchmove", T, Yf), document.addEventListener("touchstart", M, Yf), function() {
      Wf = Wf.filter(function(O) {
        return O !== b;
      }), document.removeEventListener("wheel", T, Yf), document.removeEventListener("touchmove", T, Yf), document.removeEventListener("touchstart", M, Yf);
    };
  }, []);
  var L = u.removeScrollBar, U = u.inert;
  return ze.createElement(
    ze.Fragment,
    null,
    U ? ze.createElement(b, { styles: FL(S) }) : null,
    L ? ze.createElement(_L, { gapMode: "margin" }) : null
  );
}
const VL = yL(DT, HL);
var MT = ze.forwardRef(function(u, d) {
  return ze.createElement(Ky, Ao({}, u, { ref: d, sideCar: VL }));
});
MT.classNames = Ky.classNames;
const IL = MT;
var BL = function(u) {
  if (typeof document > "u")
    return null;
  var d = Array.isArray(u) ? u[0] : u;
  return d.ownerDocument.body;
}, Gf = /* @__PURE__ */ new WeakMap(), Ay = /* @__PURE__ */ new WeakMap(), $y = {}, Ub = 0, LT = function(u) {
  return u && (u.host || LT(u.parentNode));
}, YL = function(u, d) {
  return d.map(function(f) {
    if (u.contains(f))
      return f;
    var y = LT(f);
    return y && u.contains(y) ? y : (console.error("aria-hidden", f, "in not contained inside", u, ". Doing nothing"), null);
  }).filter(function(f) {
    return !!f;
  });
}, WL = function(u, d, f, y) {
  var S = YL(d, Array.isArray(u) ? u : [u]);
  $y[f] || ($y[f] = /* @__PURE__ */ new WeakMap());
  var b = $y[f], h = [], x = /* @__PURE__ */ new Set(), T = new Set(S), R = function(D) {
    !D || x.has(D) || (x.add(D), R(D.parentNode));
  };
  S.forEach(R);
  var M = function(D) {
    !D || T.has(D) || Array.prototype.forEach.call(D.children, function(_) {
      if (x.has(_))
        M(_);
      else
        try {
          var L = _.getAttribute(y), U = L !== null && L !== "false", O = (Gf.get(_) || 0) + 1, H = (b.get(_) || 0) + 1;
          Gf.set(_, O), b.set(_, H), h.push(_), O === 1 && U && Ay.set(_, !0), H === 1 && _.setAttribute(f, "true"), U || _.setAttribute(y, "true");
        } catch (z) {
          console.error("aria-hidden: cannot operate on ", _, z);
        }
    });
  };
  return M(d), x.clear(), Ub++, function() {
    h.forEach(function(D) {
      var _ = Gf.get(D) - 1, L = b.get(D) - 1;
      Gf.set(D, _), b.set(D, L), _ || (Ay.has(D) || D.removeAttribute(y), Ay.delete(D)), L || D.removeAttribute(f);
    }), Ub--, Ub || (Gf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), Ay = /* @__PURE__ */ new WeakMap(), $y = {});
  };
}, GL = function(u, d, f) {
  f === void 0 && (f = "data-aria-hidden");
  var y = Array.from(Array.isArray(u) ? u : [u]), S = d || BL(u);
  return S ? (y.push.apply(y, Array.from(S.querySelectorAll("[aria-live]"))), WL(y, S, f, "aria-hidden")) : function() {
    return null;
  };
};
const AT = "Dialog", [$T, UA] = i1(AT), [QL, Ki] = $T(AT), KL = (u) => {
  const { __scopeDialog: d, children: f, open: y, defaultOpen: S, onOpenChange: b, modal: h = !0 } = u, x = jt(null), T = jt(null), [R = !1, M] = Qw({
    prop: y,
    defaultProp: S,
    onChange: b
  });
  return /* @__PURE__ */ Le(QL, {
    scope: d,
    triggerRef: x,
    contentRef: T,
    contentId: bv(),
    titleId: bv(),
    descriptionId: bv(),
    open: R,
    onOpenChange: M,
    onOpenToggle: Ba(
      () => M(
        (D) => !D
      ),
      [
        M
      ]
    ),
    modal: h
  }, f);
}, XL = "DialogTrigger", qL = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeDialog: f, ...y } = u, S = Ki(XL, f), b = ri(d, S.triggerRef);
  return /* @__PURE__ */ Le(dr.button, Ot({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": S.open,
    "aria-controls": S.contentId,
    "data-state": d1(S.open)
  }, y, {
    ref: b,
    onClick: Pn(u.onClick, S.onOpenToggle)
  }));
}), zT = "DialogPortal", [ZL, UT] = $T(zT, {
  forceMount: void 0
}), JL = (u) => {
  const { __scopeDialog: d, forceMount: f, children: y, container: S } = u, b = Ki(zT, d);
  return /* @__PURE__ */ Le(ZL, {
    scope: d,
    forceMount: f
  }, Qs.map(
    y,
    (h) => /* @__PURE__ */ Le(zu, {
      present: f || b.open
    }, /* @__PURE__ */ Le(oL, {
      asChild: !0,
      container: S
    }, h))
  ));
}, Zb = "DialogOverlay", e3 = /* @__PURE__ */ Ht((u, d) => {
  const f = UT(Zb, u.__scopeDialog), { forceMount: y = f.forceMount, ...S } = u, b = Ki(Zb, u.__scopeDialog);
  return b.modal ? /* @__PURE__ */ Le(zu, {
    present: y || b.open
  }, /* @__PURE__ */ Le(t3, Ot({}, S, {
    ref: d
  }))) : null;
}), t3 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeDialog: f, ...y } = u, S = Ki(Zb, f);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ Le(IL, {
      as: Xf,
      allowPinchZoom: !0,
      shards: [
        S.contentRef
      ]
    }, /* @__PURE__ */ Le(dr.div, Ot({
      "data-state": d1(S.open)
    }, y, {
      ref: d,
      style: {
        pointerEvents: "auto",
        ...y.style
      }
    })))
  );
}), wv = "DialogContent", n3 = /* @__PURE__ */ Ht((u, d) => {
  const f = UT(wv, u.__scopeDialog), { forceMount: y = f.forceMount, ...S } = u, b = Ki(wv, u.__scopeDialog);
  return /* @__PURE__ */ Le(zu, {
    present: y || b.open
  }, b.modal ? /* @__PURE__ */ Le(r3, Ot({}, S, {
    ref: d
  })) : /* @__PURE__ */ Le(a3, Ot({}, S, {
    ref: d
  })));
}), r3 = /* @__PURE__ */ Ht((u, d) => {
  const f = Ki(wv, u.__scopeDialog), y = jt(null), S = ri(d, f.contentRef, y);
  return Fn(() => {
    const b = y.current;
    if (b)
      return GL(b);
  }, []), /* @__PURE__ */ Le(PT, Ot({}, u, {
    ref: S,
    trapFocus: f.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Pn(u.onCloseAutoFocus, (b) => {
      var h;
      b.preventDefault(), (h = f.triggerRef.current) === null || h === void 0 || h.focus();
    }),
    onPointerDownOutside: Pn(u.onPointerDownOutside, (b) => {
      const h = b.detail.originalEvent, x = h.button === 0 && h.ctrlKey === !0;
      (h.button === 2 || x) && b.preventDefault();
    }),
    onFocusOutside: Pn(
      u.onFocusOutside,
      (b) => b.preventDefault()
    )
  }));
}), a3 = /* @__PURE__ */ Ht((u, d) => {
  const f = Ki(wv, u.__scopeDialog), y = jt(!1), S = jt(!1);
  return /* @__PURE__ */ Le(PT, Ot({}, u, {
    ref: d,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (b) => {
      var h;
      if ((h = u.onCloseAutoFocus) === null || h === void 0 || h.call(u, b), !b.defaultPrevented) {
        var x;
        y.current || (x = f.triggerRef.current) === null || x === void 0 || x.focus(), b.preventDefault();
      }
      y.current = !1, S.current = !1;
    },
    onInteractOutside: (b) => {
      var h, x;
      (h = u.onInteractOutside) === null || h === void 0 || h.call(u, b), b.defaultPrevented || (y.current = !0, b.detail.originalEvent.type === "pointerdown" && (S.current = !0));
      const T = b.target;
      ((x = f.triggerRef.current) === null || x === void 0 ? void 0 : x.contains(T)) && b.preventDefault(), b.detail.originalEvent.type === "focusin" && S.current && b.preventDefault();
    }
  }));
}), PT = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeDialog: f, trapFocus: y, onOpenAutoFocus: S, onCloseAutoFocus: b, ...h } = u, x = Ki(wv, f), T = jt(null), R = ri(d, T);
  return lL(), /* @__PURE__ */ Le(By, null, /* @__PURE__ */ Le(J2, {
    asChild: !0,
    loop: !0,
    trapped: y,
    onMountAutoFocus: S,
    onUnmountAutoFocus: b
  }, /* @__PURE__ */ Le(Xw, Ot({
    role: "dialog",
    id: x.contentId,
    "aria-describedby": x.descriptionId,
    "aria-labelledby": x.titleId,
    "data-state": d1(x.open)
  }, h, {
    ref: R,
    onDismiss: () => x.onOpenChange(!1)
  }))), !1);
}), i3 = "DialogTitle", o3 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeDialog: f, ...y } = u, S = Ki(i3, f);
  return /* @__PURE__ */ Le(dr.h2, Ot({
    id: S.titleId
  }, y, {
    ref: d
  }));
}), l3 = "DialogDescription", u3 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeDialog: f, ...y } = u, S = Ki(l3, f);
  return /* @__PURE__ */ Le(dr.p, Ot({
    id: S.descriptionId
  }, y, {
    ref: d
  }));
}), s3 = "DialogClose", c3 = /* @__PURE__ */ Ht((u, d) => {
  const { __scopeDialog: f, ...y } = u, S = Ki(s3, f);
  return /* @__PURE__ */ Le(dr.button, Ot({
    type: "button"
  }, y, {
    ref: d,
    onClick: Pn(
      u.onClick,
      () => S.onOpenChange(!1)
    )
  }));
});
function d1(u) {
  return u ? "open" : "closed";
}
const f3 = KL, d3 = qL, p3 = JL, v3 = e3, h3 = n3, m3 = o3, y3 = u3, g3 = c3;
var FT = Me.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
}, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: !1, isOpen: !1, keyboardIsOpen: { current: !1 }, snapPointsOffset: null, snapPoints: null, modal: !1, shouldFade: !1, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, visible: !1, closeDrawer: () => {
}, setVisible: () => {
}, direction: "bottom" }), p1 = () => Me.useContext(FT);
function S3(u, { insertAt: d } = {}) {
  if (!u || typeof document > "u")
    return;
  let f = document.head || document.getElementsByTagName("head")[0], y = document.createElement("style");
  y.type = "text/css", d === "top" && f.firstChild ? f.insertBefore(y, f.firstChild) : f.appendChild(y), y.styleSheet ? y.styleSheet.cssText = u : y.appendChild(document.createTextNode(u));
}
S3(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var b3 = typeof window < "u" ? zw : Fn;
function Jb(...u) {
  return (...d) => {
    for (let f of u)
      typeof f == "function" && f(...d);
  };
}
function E3() {
  return v1(/^Mac/);
}
function C3() {
  return v1(/^iPhone/);
}
function x3() {
  return v1(/^iPad/) || E3() && navigator.maxTouchPoints > 1;
}
function jT() {
  return C3() || x3();
}
function v1(u) {
  return typeof window < "u" && window.navigator != null ? u.test(window.navigator.platform) : void 0;
}
var Pb = typeof document < "u" && window.visualViewport;
function Dw(u) {
  let d = window.getComputedStyle(u);
  return /(auto|scroll)/.test(d.overflow + d.overflowX + d.overflowY);
}
function HT(u) {
  for (Dw(u) && (u = u.parentElement); u && !Dw(u); )
    u = u.parentElement;
  return u || document.scrollingElement || document.documentElement;
}
var w3 = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), zy = 0, Fb;
function T3(u = {}) {
  let { isDisabled: d } = u;
  b3(() => {
    if (!d)
      return zy++, zy === 1 && (jT() ? Fb = D3() : Fb = R3()), () => {
        zy--, zy === 0 && Fb();
      };
  }, [d]);
}
function R3() {
  return Jb(VT(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function D3() {
  let u, d = 0, f = (D) => {
    u = HT(D.target), !(u === document.documentElement && u === document.body) && (d = D.changedTouches[0].pageY);
  }, y = (D) => {
    if (!u || u === document.documentElement || u === document.body) {
      D.preventDefault();
      return;
    }
    let _ = D.changedTouches[0].pageY, L = u.scrollTop, U = u.scrollHeight - u.clientHeight;
    U !== 0 && ((L <= 0 && _ > d || L >= U && _ < d) && D.preventDefault(), d = _);
  }, S = (D) => {
    let _ = D.target;
    e1(_) && _ !== document.activeElement && (D.preventDefault(), _.style.transform = "translateY(-2000px)", _.focus(), requestAnimationFrame(() => {
      _.style.transform = "";
    }));
  }, b = (D) => {
    let _ = D.target;
    e1(_) && (_.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      _.style.transform = "", Pb && (Pb.height < window.innerHeight ? requestAnimationFrame(() => {
        kw(_);
      }) : Pb.addEventListener("resize", () => kw(_), { once: !0 }));
    }));
  }, h = () => {
    window.scrollTo(0, 0);
  }, x = window.pageXOffset, T = window.pageYOffset, R = Jb(VT(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let M = Jb(Sv(document, "touchstart", f, { passive: !1, capture: !0 }), Sv(document, "touchmove", y, { passive: !1, capture: !0 }), Sv(document, "touchend", S, { passive: !1, capture: !0 }), Sv(document, "focus", b, !0), Sv(window, "scroll", h));
  return () => {
    R(), M(), window.scrollTo(x, T);
  };
}
function VT(u, d, f) {
  let y = u.style[d];
  return u.style[d] = f, () => {
    u.style[d] = y;
  };
}
function Sv(u, d, f, y) {
  return u.addEventListener(d, f, y), () => {
    u.removeEventListener(d, f, y);
  };
}
function kw(u) {
  let d = document.scrollingElement || document.documentElement;
  for (; u && u !== d; ) {
    let f = HT(u);
    if (f !== document.documentElement && f !== document.body && f !== u) {
      let y = f.getBoundingClientRect().top, S = u.getBoundingClientRect().top, b = u.getBoundingClientRect().bottom, h = f.getBoundingClientRect().bottom;
      b > h && (f.scrollTop += S - y);
    }
    u = f.parentElement;
  }
}
function e1(u) {
  return u instanceof HTMLInputElement && !w3.has(u.type) || u instanceof HTMLTextAreaElement || u instanceof HTMLElement && u.isContentEditable;
}
function k3(u, d) {
  typeof u == "function" ? u(d) : u != null && (u.current = d);
}
function N3(...u) {
  return (d) => u.forEach((f) => k3(f, d));
}
function IT(...u) {
  return ze.useCallback(N3(...u), u);
}
var Au = null;
function _3({ isOpen: u, modal: d, nested: f, hasBeenOpened: y, preventScrollRestoration: S }) {
  let [b, h] = Me.useState(typeof window < "u" ? window.location.href : ""), x = Me.useRef(0), T = Me.useCallback(() => {
    if (Au === null && u) {
      Au = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: M, innerHeight: D } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-x.current}px`, document.body.style.left = `${-M}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let _ = D - window.innerHeight;
        _ && x.current >= D && (document.body.style.top = `${-(x.current + _)}px`);
      }), 300);
    }
  }, [u]), R = Me.useCallback(() => {
    if (Au !== null) {
      let M = -parseInt(document.body.style.top, 10), D = -parseInt(document.body.style.left, 10);
      document.body.style.position = Au.position, document.body.style.top = Au.top, document.body.style.left = Au.left, document.body.style.height = Au.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (S && b !== window.location.href) {
          h(window.location.href);
          return;
        }
        window.scrollTo(D, M);
      }), Au = null;
    }
  }, [b]);
  return Me.useEffect(() => {
    function M() {
      x.current = window.scrollY;
    }
    return M(), window.addEventListener("scroll", M), () => {
      window.removeEventListener("scroll", M);
    };
  }, []), Me.useEffect(() => {
    f || !y || (u ? (T(), d || setTimeout(() => {
      R();
    }, 500)) : R());
  }, [u, y, b, d, f, T, R]), { restorePositionSetting: R };
}
var BT = /* @__PURE__ */ new WeakMap();
function kn(u, d, f = !1) {
  if (!u || !(u instanceof HTMLElement) || !d)
    return;
  let y = {};
  Object.entries(d).forEach(([S, b]) => {
    if (S.startsWith("--")) {
      u.style.setProperty(S, b);
      return;
    }
    y[S] = u.style[S], u.style[S] = b;
  }), !f && BT.set(u, y);
}
function Uy(u, d) {
  if (!u || !(u instanceof HTMLElement))
    return;
  let f = BT.get(u);
  f && (d ? u.style[d] = f[d] : Object.entries(f).forEach(([y, S]) => {
    u.style[y] = S;
  }));
}
var cr = (u) => {
  switch (u) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return u;
  }
};
function Py(u, d) {
  let f = window.getComputedStyle(u), y = f.transform || f.webkitTransform || f.mozTransform, S = y.match(/^matrix3d\((.+)\)$/);
  return S ? parseFloat(S[1].split(", ")[cr(d) ? 13 : 12]) : (S = y.match(/^matrix\((.+)\)$/), S ? parseFloat(S[1].split(", ")[cr(d) ? 5 : 4]) : null);
}
function O3(u) {
  return 8 * (Math.log(u + 1) - 2);
}
var dn = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, YT = 0.4;
function WT(u) {
  let d = Me.useRef(u);
  return Me.useEffect(() => {
    d.current = u;
  }), Me.useMemo(() => (...f) => {
    var y;
    return (y = d.current) == null ? void 0 : y.call(d, ...f);
  }, []);
}
function M3({ defaultProp: u, onChange: d }) {
  let f = Me.useState(u), [y] = f, S = Me.useRef(y), b = WT(d);
  return Me.useEffect(() => {
    S.current !== y && (b(y), S.current = y);
  }, [y, S, b]), f;
}
function L3({ prop: u, defaultProp: d, onChange: f = () => {
} }) {
  let [y, S] = M3({ defaultProp: d, onChange: f }), b = u !== void 0, h = b ? u : y, x = WT(f), T = Me.useCallback((R) => {
    if (b) {
      let M = typeof R == "function" ? R(u) : R;
      M !== u && x(M);
    } else
      S(R);
  }, [b, u, S, x]);
  return [h, T];
}
function A3({ activeSnapPointProp: u, setActiveSnapPointProp: d, snapPoints: f, drawerRef: y, overlayRef: S, fadeFromIndex: b, onSnapPointChange: h, direction: x = "bottom" }) {
  let [T, R] = L3({ prop: u, defaultProp: f == null ? void 0 : f[0], onChange: d }), M = Me.useMemo(() => T === (f == null ? void 0 : f[f.length - 1]) || null, [f, T]), D = f && f.length > 0 && (b || b === 0) && !Number.isNaN(b) && f[b] === T || !f, _ = Me.useMemo(() => f == null ? void 0 : f.findIndex((V) => V === T), [f, T]), L = Me.useMemo(() => {
    var V;
    return (V = f == null ? void 0 : f.map((G) => {
      let B = typeof window < "u", ue = typeof G == "string", ae = 0;
      if (ue && (ae = parseInt(G, 10)), cr(x)) {
        let ve = ue ? ae : B ? G * window.innerHeight : 0;
        return B ? x === "bottom" ? window.innerHeight - ve : -window.innerHeight + ve : ve;
      }
      let se = ue ? ae : B ? G * window.innerWidth : 0;
      return B ? x === "right" ? window.innerWidth - se : -window.innerWidth + se : se;
    })) != null ? V : [];
  }, [f]), U = Me.useMemo(() => _ !== null ? L == null ? void 0 : L[_] : null, [L, _]), O = Me.useCallback((V) => {
    var G;
    let B = (G = L == null ? void 0 : L.findIndex((ue) => ue === V)) != null ? G : null;
    h(B), kn(y.current, { transition: `transform ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})`, transform: cr(x) ? `translate3d(0, ${V}px, 0)` : `translate3d(${V}px, 0, 0)` }), L && B !== L.length - 1 && B !== b ? kn(S.current, { transition: `opacity ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})`, opacity: "0" }) : kn(S.current, { transition: `opacity ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})`, opacity: "1" }), R(B !== null ? f == null ? void 0 : f[B] : null);
  }, [y.current, f, L, b, S, R]);
  Me.useEffect(() => {
    var V;
    if (u) {
      let G = (V = f == null ? void 0 : f.findIndex((B) => B === u)) != null ? V : -1;
      L && G !== -1 && typeof L[G] == "number" && O(L[G]);
    }
  }, [u, f, L, O]);
  function H({ draggedDistance: V, closeDrawer: G, velocity: B, dismissible: ue }) {
    if (b === void 0)
      return;
    let ae = x === "bottom" || x === "right" ? (U ?? 0) - V : (U ?? 0) + V, se = _ === b - 1, ve = _ === 0, Te = V > 0;
    if (se && kn(S.current, { transition: `opacity ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})` }), B > 2 && !Te) {
      ue ? G() : O(L[0]);
      return;
    }
    if (B > 2 && Te && L && f) {
      O(L[f.length - 1]);
      return;
    }
    let Ae = L == null ? void 0 : L.reduce((ke, Be) => typeof ke != "number" || typeof Be != "number" ? ke : Math.abs(Be - ae) < Math.abs(ke - ae) ? Be : ke), je = cr(x) ? window.innerHeight : window.innerWidth;
    if (B > YT && Math.abs(V) < je * 0.4) {
      let ke = Te ? 1 : -1;
      if (ke > 0 && M) {
        O(L[f.length - 1]);
        return;
      }
      if (ve && ke < 0 && ue && G(), _ === null)
        return;
      O(L[_ + ke]);
      return;
    }
    O(Ae);
  }
  function z({ draggedDistance: V }) {
    if (U === null)
      return;
    let G = x === "bottom" || x === "right" ? U - V : U + V;
    (x === "bottom" || x === "right") && G < L[L.length - 1] || (x === "top" || x === "left") && G > L[L.length - 1] || kn(y.current, { transform: cr(x) ? `translate3d(0, ${G}px, 0)` : `translate3d(${G}px, 0, 0)` });
  }
  function Q(V, G) {
    if (!f || typeof _ != "number" || !L || b === void 0)
      return null;
    let B = _ === b - 1;
    if (_ >= b && G)
      return 0;
    if (B && !G)
      return 1;
    if (!D && !B)
      return null;
    let ue = B ? _ + 1 : _ - 1, ae = B ? L[ue] - L[ue - 1] : L[ue + 1] - L[ue], se = V / Math.abs(ae);
    return B ? 1 - se : se;
  }
  return { isLastSnapPoint: M, activeSnapPoint: T, shouldFade: D, getPercentageDragged: Q, setActiveSnapPoint: R, activeSnapPointIndex: _, onRelease: H, onDrag: z, snapPointsOffset: L };
}
var $3 = 0.25, z3 = 100, Nw = 8, Ws = 16, _w = 26, Ow = "vaul-dragging";
function GT({ open: u, onOpenChange: d, children: f, shouldScaleBackground: y, onDrag: S, onRelease: b, snapPoints: h, nested: x = !1, closeThreshold: T = $3, scrollLockTimeout: R = z3, dismissible: M = !0, fadeFromIndex: D = h && h.length - 1, activeSnapPoint: _, setActiveSnapPoint: L, fixed: U, modal: O = !0, onClose: H, direction: z = "bottom", preventScrollRestoration: Q = !0 }) {
  var V;
  let [G = !1, B] = Me.useState(!1), [ue, ae] = Me.useState(!1), [se, ve] = Me.useState(!1), [Te, Ae] = Me.useState(!1), [je, ke] = Me.useState(!1), [Be, _t] = Me.useState(!1), lt = Me.useRef(null), Mt = Me.useRef(null), ce = Me.useRef(null), xe = Me.useRef(null), me = Me.useRef(null), Xe = Me.useRef(!1), ot = Me.useRef(null), Pt = Me.useRef(0), Qt = Me.useRef(!1), Yn = Me.useRef(0), Ee = Me.useRef(null), nn = Me.useRef(((V = Ee.current) == null ? void 0 : V.getBoundingClientRect().height) || 0), Rt = Me.useRef(0), bn = Me.useCallback((Ve) => {
    h && Ve === ht.length - 1 && (Mt.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: pn, activeSnapPointIndex: dt, setActiveSnapPoint: Ne, onRelease: nt, snapPointsOffset: ht, onDrag: Et, shouldFade: Wt, getPercentageDragged: Vt } = A3({ snapPoints: h, activeSnapPointProp: _, setActiveSnapPointProp: L, drawerRef: Ee, fadeFromIndex: D, overlayRef: lt, onSnapPointChange: bn, direction: z });
  T3({ isDisabled: !G || je || !O || Be || !ue });
  let { restorePositionSetting: vn } = _3({ isOpen: G, modal: O, nested: x, hasBeenOpened: ue, preventScrollRestoration: Q });
  function rn() {
    return (window.innerWidth - _w) / window.innerWidth;
  }
  function Ar(Ve) {
    var ne;
    !M && !h || Ee.current && !Ee.current.contains(Ve.target) || (nn.current = ((ne = Ee.current) == null ? void 0 : ne.getBoundingClientRect().height) || 0, ke(!0), ce.current = /* @__PURE__ */ new Date(), jT() && window.addEventListener("touchend", () => Xe.current = !1, { once: !0 }), Ve.target.setPointerCapture(Ve.pointerId), Pt.current = cr(z) ? Ve.screenY : Ve.screenX);
  }
  function pr(Ve, ne) {
    var ye;
    let Ce = Ve, Ge = (ye = window.getSelection()) == null ? void 0 : ye.toString(), ut = Ee.current ? Py(Ee.current, z) : null, Ct = /* @__PURE__ */ new Date();
    if (Ce.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (z === "right" || z === "left")
      return !0;
    if (Mt.current && Ct.getTime() - Mt.current.getTime() < 500)
      return !1;
    if (ut !== null && (z === "bottom" ? ut > 0 : ut < 0))
      return !0;
    if (Ge && Ge.length > 0)
      return !1;
    if (me.current && Ct.getTime() - me.current.getTime() < R && ut === 0 || ne)
      return me.current = Ct, !1;
    for (; Ce; ) {
      if (Ce.scrollHeight > Ce.clientHeight) {
        if (Ce.scrollTop !== 0)
          return me.current = /* @__PURE__ */ new Date(), !1;
        if (Ce.getAttribute("role") === "dialog")
          return !0;
      }
      Ce = Ce.parentNode;
    }
    return !0;
  }
  function Tr(Ve) {
    if (Ee.current && je) {
      let ne = z === "bottom" || z === "right" ? 1 : -1, ye = (Pt.current - (cr(z) ? Ve.screenY : Ve.screenX)) * ne, Ce = ye > 0;
      if (h && dt === 0 && !M || !Xe.current && !pr(Ve.target, Ce))
        return;
      if (Ee.current.classList.add(Ow), Xe.current = !0, kn(Ee.current, { transition: "none" }), kn(lt.current, { transition: "none" }), h && Et({ draggedDistance: ye }), Ce && !h) {
        let gt = O3(ye), An = Math.min(gt * -1, 0) * ne;
        kn(Ee.current, { transform: cr(z) ? `translate3d(0, ${An}px, 0)` : `translate3d(${An}px, 0, 0)` });
        return;
      }
      let Ge = Math.abs(ye), ut = document.querySelector("[vaul-drawer-wrapper]"), Ct = Ge / nn.current, Kt = Vt(Ge, Ce);
      Kt !== null && (Ct = Kt);
      let hn = 1 - Ct;
      if ((Wt || D && dt === D - 1) && (S == null || S(Ve, Ct), kn(lt.current, { opacity: `${hn}`, transition: "none" }, !0)), ut && lt.current && y) {
        let gt = Math.min(rn() + Ct * (1 - rn()), 1), An = 8 - Ct * 8, It = Math.max(0, 14 - Ct * 14);
        kn(ut, { borderRadius: `${An}px`, transform: cr(z) ? `scale(${gt}) translate3d(0, ${It}px, 0)` : `scale(${gt}) translate3d(${It}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!h) {
        let gt = Ge * ne;
        kn(Ee.current, { transform: cr(z) ? `translate3d(0, ${gt}px, 0)` : `translate3d(${gt}px, 0, 0)` });
      }
    }
  }
  Me.useEffect(() => () => {
    er(!1), vn();
  }, []), Me.useEffect(() => {
    var Ve;
    function ne() {
      var ye;
      if (!Ee.current)
        return;
      let Ce = document.activeElement;
      if (e1(Ce) || Qt.current) {
        let Ge = ((ye = window.visualViewport) == null ? void 0 : ye.height) || 0, ut = window.innerHeight - Ge, Ct = Ee.current.getBoundingClientRect().height || 0;
        Rt.current || (Rt.current = Ct);
        let Kt = Ee.current.getBoundingClientRect().top;
        if (Math.abs(Yn.current - ut) > 60 && (Qt.current = !Qt.current), h && h.length > 0 && ht && dt) {
          let hn = ht[dt] || 0;
          ut += hn;
        }
        if (Yn.current = ut, Ct > Ge || Qt.current) {
          let hn = Ee.current.getBoundingClientRect().height, gt = hn;
          hn > Ge && (gt = Ge - _w), U ? Ee.current.style.height = `${hn - Math.max(ut, 0)}px` : Ee.current.style.height = `${Math.max(gt, Ge - Kt)}px`;
        } else
          Ee.current.style.height = `${Rt.current}px`;
        h && h.length > 0 && !Qt.current ? Ee.current.style.bottom = "0px" : Ee.current.style.bottom = `${Math.max(ut, 0)}px`;
      }
    }
    return (Ve = window.visualViewport) == null || Ve.addEventListener("resize", ne), () => {
      var ye;
      return (ye = window.visualViewport) == null ? void 0 : ye.removeEventListener("resize", ne);
    };
  }, [dt, h, ht]);
  function En() {
    Ee.current && (H == null || H(), kn(Ee.current, { transform: cr(z) ? `translate3d(0, ${z === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${z === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})` }), kn(lt.current, { opacity: "0", transition: `opacity ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})` }), er(!1), setTimeout(() => {
      ve(!1), B(!1);
    }, 300), setTimeout(() => {
      h && Ne(h[0]);
    }, dn.DURATION * 1e3));
  }
  Me.useEffect(() => {
    if (!G && y) {
      let Ve = setTimeout(() => {
        Uy(document.body);
      }, 200);
      return () => clearTimeout(Ve);
    }
  }, [G, y]), Me.useEffect(() => {
    u ? (B(!0), ae(!0)) : En();
  }, [u]), Me.useEffect(() => {
    Te && (d == null || d(G));
  }, [G]), Me.useEffect(() => {
    Ae(!0);
  }, []);
  function $r() {
    if (!Ee.current)
      return;
    let Ve = document.querySelector("[vaul-drawer-wrapper]"), ne = Py(Ee.current, z);
    kn(Ee.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})` }), kn(lt.current, { transition: `opacity ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})`, opacity: "1" }), y && ne && ne > 0 && G && kn(Ve, { borderRadius: `${Nw}px`, overflow: "hidden", ...cr(z) ? { transform: `scale(${rn()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${rn()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${dn.DURATION}s`, transitionTimingFunction: `cubic-bezier(${dn.EASE.join(",")})` }, !0);
  }
  function Jn(Ve) {
    var ne;
    if (!je || !Ee.current)
      return;
    Ee.current.classList.remove(Ow), Xe.current = !1, ke(!1), xe.current = /* @__PURE__ */ new Date();
    let ye = Py(Ee.current, z);
    if (!pr(Ve.target, !1) || !ye || Number.isNaN(ye) || ce.current === null)
      return;
    let Ce = xe.current.getTime() - ce.current.getTime(), Ge = Pt.current - (cr(z) ? Ve.screenY : Ve.screenX), ut = Math.abs(Ge) / Ce;
    if (ut > 0.05 && (_t(!0), setTimeout(() => {
      _t(!1);
    }, 200)), h) {
      nt({ draggedDistance: Ge * (z === "bottom" || z === "right" ? 1 : -1), closeDrawer: En, velocity: ut, dismissible: M }), b == null || b(Ve, !0);
      return;
    }
    if (z === "bottom" || z === "right" ? Ge > 0 : Ge < 0) {
      $r(), b == null || b(Ve, !0);
      return;
    }
    if (ut > YT) {
      En(), b == null || b(Ve, !1);
      return;
    }
    let Ct = Math.min((ne = Ee.current.getBoundingClientRect().height) != null ? ne : 0, window.innerHeight);
    if (ye >= Ct * T) {
      En(), b == null || b(Ve, !1);
      return;
    }
    b == null || b(Ve, !0), $r();
  }
  Me.useEffect(() => {
    G && (kn(document.documentElement, { scrollBehavior: "auto" }), Mt.current = /* @__PURE__ */ new Date(), er(!0));
  }, [G]), Me.useEffect(() => {
    var Ve;
    if (Ee.current && se) {
      let ne = (Ve = Ee == null ? void 0 : Ee.current) == null ? void 0 : Ve.querySelectorAll("*");
      ne == null || ne.forEach((ye) => {
        let Ce = ye;
        (Ce.scrollHeight > Ce.clientHeight || Ce.scrollWidth > Ce.clientWidth) && Ce.classList.add("vaul-scrollable");
      });
    }
  }, [se]);
  function er(Ve) {
    let ne = document.querySelector("[vaul-drawer-wrapper]");
    !ne || !y || (Ve ? (kn(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), kn(document.body, { background: "black" }, !0), kn(ne, { borderRadius: `${Nw}px`, overflow: "hidden", ...cr(z) ? { transform: `scale(${rn()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${rn()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${dn.DURATION}s`, transitionTimingFunction: `cubic-bezier(${dn.EASE.join(",")})` })) : (Uy(ne, "overflow"), Uy(ne, "transform"), Uy(ne, "borderRadius"), kn(ne, { transitionProperty: "transform, border-radius", transitionDuration: `${dn.DURATION}s`, transitionTimingFunction: `cubic-bezier(${dn.EASE.join(",")})` })));
  }
  function an(Ve) {
    let ne = Ve ? (window.innerWidth - Ws) / window.innerWidth : 1, ye = Ve ? -Ws : 0;
    ot.current && window.clearTimeout(ot.current), kn(Ee.current, { transition: `transform ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})`, transform: `scale(${ne}) translate3d(0, ${ye}px, 0)` }), !Ve && Ee.current && (ot.current = setTimeout(() => {
      let Ce = Py(Ee.current, z);
      kn(Ee.current, { transition: "none", transform: cr(z) ? `translate3d(0, ${Ce}px, 0)` : `translate3d(${Ce}px, 0, 0)` });
    }, 500));
  }
  function Cn(Ve, ne) {
    if (ne < 0)
      return;
    let ye = cr(z) ? window.innerHeight : window.innerWidth, Ce = (ye - Ws) / ye, Ge = Ce + ne * (1 - Ce), ut = -Ws + ne * Ws;
    kn(Ee.current, { transform: cr(z) ? `scale(${Ge}) translate3d(0, ${ut}px, 0)` : `scale(${Ge}) translate3d(${ut}px, 0, 0)`, transition: "none" });
  }
  function Gr(Ve, ne) {
    let ye = cr(z) ? window.innerHeight : window.innerWidth, Ce = ne ? (ye - Ws) / ye : 1, Ge = ne ? -Ws : 0;
    ne && kn(Ee.current, { transition: `transform ${dn.DURATION}s cubic-bezier(${dn.EASE.join(",")})`, transform: cr(z) ? `scale(${Ce}) translate3d(0, ${Ge}px, 0)` : `scale(${Ce}) translate3d(${Ge}px, 0, 0)` });
  }
  return Me.createElement(f3, { modal: O, onOpenChange: (Ve) => {
    if (u !== void 0) {
      d == null || d(Ve);
      return;
    }
    Ve ? (ae(!0), B(Ve)) : En();
  }, open: G }, Me.createElement(FT.Provider, { value: { visible: se, activeSnapPoint: pn, snapPoints: h, setActiveSnapPoint: Ne, drawerRef: Ee, overlayRef: lt, scaleBackground: er, onOpenChange: d, onPress: Ar, setVisible: ve, onRelease: Jn, onDrag: Tr, dismissible: M, isOpen: G, shouldFade: Wt, closeDrawer: En, onNestedDrag: Cn, onNestedOpenChange: an, onNestedRelease: Gr, keyboardIsOpen: Qt, openProp: u, modal: O, snapPointsOffset: ht, direction: z } }, f));
}
var QT = Me.forwardRef(function({ children: u, ...d }, f) {
  let { overlayRef: y, snapPoints: S, onRelease: b, shouldFade: h, isOpen: x, visible: T } = p1(), R = IT(f, y), M = S && S.length > 0;
  return Me.createElement(v3, { onMouseUp: b, ref: R, "vaul-drawer-visible": T ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": x && M ? "true" : "false", "vaul-snap-points-overlay": x && h ? "true" : "false", ...d });
});
QT.displayName = "Drawer.Overlay";
var KT = Me.forwardRef(function({ onOpenAutoFocus: u, onPointerDownOutside: d, onAnimationEnd: f, style: y, ...S }, b) {
  let { drawerRef: h, onPress: x, onRelease: T, onDrag: R, dismissible: M, keyboardIsOpen: D, snapPointsOffset: _, visible: L, closeDrawer: U, modal: O, openProp: H, onOpenChange: z, setVisible: Q, direction: V } = p1(), G = IT(b, h);
  return Me.useEffect(() => {
    Q(!0);
  }, []), Me.createElement(h3, { onOpenAutoFocus: (B) => {
    var ue;
    u ? u(B) : (B.preventDefault(), (ue = h.current) == null || ue.focus());
  }, onPointerDown: x, onPointerDownOutside: (B) => {
    if (d == null || d(B), !O || B.defaultPrevented) {
      B.preventDefault();
      return;
    }
    D.current && (D.current = !1), B.preventDefault(), z == null || z(!1), !(!M || H !== void 0) && U();
  }, onPointerMove: R, onPointerUp: T, ref: G, style: _ && _.length > 0 ? { "--snap-point-height": `${_[0]}px`, ...y } : y, ...S, "vaul-drawer": "", "vaul-drawer-direction": V, "vaul-drawer-visible": L ? "true" : "false" });
});
KT.displayName = "Drawer.Content";
function U3({ onDrag: u, onOpenChange: d, ...f }) {
  let { onNestedDrag: y, onNestedOpenChange: S, onNestedRelease: b } = p1();
  if (!y)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return Me.createElement(GT, { nested: !0, onClose: () => {
    S(!1);
  }, onDrag: (h, x) => {
    y(h, x), u == null || u(h, x);
  }, onOpenChange: (h) => {
    h && S(h), d == null || d(h);
  }, onRelease: b, ...f });
}
var zo = { Root: GT, NestedRoot: U3, Content: KT, Overlay: QT, Trigger: d3, Portal: p3, Close: g3, Title: m3, Description: y3 };
const XT = ({
  shouldScaleBackground: u = !0,
  ...d
}) => /* @__PURE__ */ pe.jsx(
  zo.Root,
  {
    shouldScaleBackground: u,
    ...d
  }
);
XT.displayName = "Drawer";
const P3 = zo.Trigger, F3 = zo.Portal, qT = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx(
  zo.Overlay,
  {
    ref: f,
    className: Ln("fixed inset-0 z-50 bg-black/80", u),
    ...d
  }
));
qT.displayName = zo.Overlay.displayName;
const ZT = ze.forwardRef(({ className: u, children: d, ...f }, y) => /* @__PURE__ */ pe.jsxs(F3, { children: [
  /* @__PURE__ */ pe.jsx(qT, {}),
  /* @__PURE__ */ pe.jsxs(
    zo.Content,
    {
      ref: y,
      className: Ln(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        u
      ),
      ...f,
      children: [
        /* @__PURE__ */ pe.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        d
      ]
    }
  )
] }));
ZT.displayName = "DrawerContent";
const j3 = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx(
  zo.Title,
  {
    ref: f,
    className: Ln(
      "text-lg font-semibold leading-none tracking-tight",
      u
    ),
    ...d
  }
));
j3.displayName = zo.Title.displayName;
const H3 = ze.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ pe.jsx(
  zo.Description,
  {
    ref: f,
    className: Ln("text-sm text-muted-foreground", u),
    ...d
  }
));
H3.displayName = zo.Description.displayName;
const V3 = ({
  mobileChildren: u,
  mobileAddition: d
}) => {
  const [f, y] = fr(!1);
  return /* @__PURE__ */ pe.jsxs(
    XT,
    {
      preventScrollRestoration: !0,
      open: f,
      onOpenChange: y,
      children: [
        /* @__PURE__ */ pe.jsx(
          P3,
          {
            onClick: () => y(!0),
            className: Ln(
              "bg-secondary w-screen sticky h-16 z-50 bottom-0 flex flex-row justify-center items-center"
            ),
            children: /* @__PURE__ */ pe.jsx(rM, { className: "scale-150 self-center", color: "white" })
          }
        ),
        /* @__PURE__ */ pe.jsxs(ZT, { className: "flex flex-col gap-4", children: [
          u && /* @__PURE__ */ pe.jsx("div", { className: "flex flex-col gap-2 cursor-pointer", children: u.map((S) => S) }),
          d && /* @__PURE__ */ pe.jsxs(pe.Fragment, { children: [
            /* @__PURE__ */ pe.jsx(f1, {}),
            d
          ] })
        ] })
      ]
    }
  );
}, PA = ({
  children: u,
  mobileChildren: d,
  mobileAddition: f,
  position: y = "bottom",
  side: S = "right"
}) => {
  const { isMobile: b } = YO(), h = VM[y], x = IM[S];
  return b && d ? /* @__PURE__ */ pe.jsx(
    V3,
    {
      mobileChildren: d,
      mobileAddition: f
    }
  ) : !b && u ? /* @__PURE__ */ pe.jsx(
    "div",
    {
      className: Ln(
        "flex flex-col gap-2 fixed z-90 cursor-pointer",
        h,
        x
      ),
      children: u
    }
  ) : null;
}, FA = ({
  children: u,
  bgColorCssString: d,
  addMainClasses: f
}) => /* @__PURE__ */ pe.jsx(
  "div",
  {
    className: Ln(
      "relative h-full font-sans antialiased",
      d
    ),
    children: /* @__PURE__ */ pe.jsx("main", { className: Ln(
      "relative flex flex-col min-h-screen w-screen gap-8",
      f
    ), children: u })
  }
), jA = ({ children: u, addClasses: d }) => /* @__PURE__ */ pe.jsx("div", { className: "flex flex-col justify-start items-center gap-20", children: /* @__PURE__ */ pe.jsx("div", { className: Ln("flex w-10/12 sm:w-2/3 flex-col items-center gap-8 mt-12 md:mt-32 text-center", d), children: u }) });
function I3(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
function Mw(u) {
  return I3(u) || Array.isArray(u);
}
function B3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function h1(u, d) {
  const f = Object.keys(u), y = Object.keys(d);
  if (f.length !== y.length)
    return !1;
  const S = JSON.stringify(Object.keys(u.breakpoints || {})), b = JSON.stringify(Object.keys(d.breakpoints || {}));
  return S !== b ? !1 : f.every((h) => {
    const x = u[h], T = d[h];
    return typeof x == "function" ? `${x}` == `${T}` : !Mw(x) || !Mw(T) ? x === T : h1(x, T);
  });
}
function Lw(u) {
  return u.concat().sort((d, f) => d.name > f.name ? 1 : -1).map((d) => d.options);
}
function Y3(u, d) {
  if (u.length !== d.length)
    return !1;
  const f = Lw(u), y = Lw(d);
  return f.every((S, b) => {
    const h = y[b];
    return h1(S, h);
  });
}
function m1(u) {
  return typeof u == "number";
}
function t1(u) {
  return typeof u == "string";
}
function y1(u) {
  return typeof u == "boolean";
}
function Aw(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
function Mn(u) {
  return Math.abs(u);
}
function g1(u) {
  return Math.sign(u);
}
function Ev(u, d) {
  return Mn(u - d);
}
function W3(u, d) {
  if (u === 0 || d === 0 || Mn(u) <= Mn(d))
    return 0;
  const f = Ev(Mn(u), Mn(d));
  return Mn(f / u);
}
function Tv(u) {
  return Rv(u).map(Number);
}
function Gi(u) {
  return u[Nv(u)];
}
function Nv(u) {
  return Math.max(0, u.length - 1);
}
function S1(u, d) {
  return d === Nv(u);
}
function $w(u, d = 0) {
  return Array.from(Array(u), (f, y) => d + y);
}
function Rv(u) {
  return Object.keys(u);
}
function JT(u, d) {
  return [u, d].reduce((f, y) => (Rv(y).forEach((S) => {
    const b = f[S], h = y[S], x = Aw(b) && Aw(h);
    f[S] = x ? JT(b, h) : h;
  }), f), {});
}
function eR(u, d) {
  return typeof d.MouseEvent < "u" && u instanceof d.MouseEvent;
}
function G3(u, d) {
  const f = {
    start: y,
    center: S,
    end: b
  };
  function y() {
    return 0;
  }
  function S(T) {
    return b(T) / 2;
  }
  function b(T) {
    return d - T;
  }
  function h(T, R) {
    return t1(u) ? f[u](T) : u(d, T, R);
  }
  return {
    measure: h
  };
}
function Dv() {
  let u = [];
  function d(S, b, h, x = {
    passive: !0
  }) {
    let T;
    if ("addEventListener" in S)
      S.addEventListener(b, h, x), T = () => S.removeEventListener(b, h, x);
    else {
      const R = S;
      R.addListener(h), T = () => R.removeListener(h);
    }
    return u.push(T), y;
  }
  function f() {
    u = u.filter((S) => S());
  }
  const y = {
    add: d,
    clear: f
  };
  return y;
}
function Q3(u, d, f, y) {
  const S = Dv(), b = 1e3 / 60;
  let h = null, x = 0, T = 0;
  function R() {
    S.add(u, "visibilitychange", () => {
      u.hidden && U();
    });
  }
  function M() {
    L(), S.clear();
  }
  function D(H) {
    if (!T)
      return;
    h || (h = H);
    const z = H - h;
    for (h = H, x += z; x >= b; )
      f(), x -= b;
    const Q = Mn(x / b);
    y(Q), T && d.requestAnimationFrame(D);
  }
  function _() {
    T || (T = d.requestAnimationFrame(D));
  }
  function L() {
    d.cancelAnimationFrame(T), h = null, x = 0, T = 0;
  }
  function U() {
    h = null, x = 0;
  }
  return {
    init: R,
    destroy: M,
    start: _,
    stop: L,
    update: f,
    render: y
  };
}
function K3(u, d) {
  const f = d === "rtl", y = u === "y", S = y ? "y" : "x", b = y ? "x" : "y", h = !y && f ? -1 : 1, x = M(), T = D();
  function R(U) {
    const {
      height: O,
      width: H
    } = U;
    return y ? O : H;
  }
  function M() {
    return y ? "top" : f ? "right" : "left";
  }
  function D() {
    return y ? "bottom" : f ? "left" : "right";
  }
  function _(U) {
    return U * h;
  }
  return {
    scroll: S,
    cross: b,
    startEdge: x,
    endEdge: T,
    measureSize: R,
    direction: _
  };
}
function Ks(u = 0, d = 0) {
  const f = Mn(u - d);
  function y(R) {
    return R < u;
  }
  function S(R) {
    return R > d;
  }
  function b(R) {
    return y(R) || S(R);
  }
  function h(R) {
    return b(R) ? y(R) ? u : d : R;
  }
  function x(R) {
    return f ? R - f * Math.ceil((R - d) / f) : R;
  }
  return {
    length: f,
    max: d,
    min: u,
    constrain: h,
    reachedAny: b,
    reachedMax: S,
    reachedMin: y,
    removeOffset: x
  };
}
function tR(u, d, f) {
  const {
    constrain: y
  } = Ks(0, u), S = u + 1;
  let b = h(d);
  function h(_) {
    return f ? Mn((S + _) % S) : y(_);
  }
  function x() {
    return b;
  }
  function T(_) {
    return b = h(_), D;
  }
  function R(_) {
    return M().set(x() + _);
  }
  function M() {
    return tR(u, x(), f);
  }
  const D = {
    get: x,
    set: T,
    add: R,
    clone: M
  };
  return D;
}
function X3(u, d, f, y, S, b, h, x, T, R, M, D, _, L, U, O, H, z, Q) {
  const {
    cross: V,
    direction: G
  } = u, B = ["INPUT", "SELECT", "TEXTAREA"], ue = {
    passive: !1
  }, ae = Dv(), se = Dv(), ve = Ks(50, 225).constrain(L.measure(20)), Te = {
    mouse: 300,
    touch: 400
  }, Ae = {
    mouse: 500,
    touch: 600
  }, je = U ? 43 : 25;
  let ke = !1, Be = 0, _t = 0, lt = !1, Mt = !1, ce = !1, xe = !1;
  function me(Ne) {
    if (!Q)
      return;
    function nt(Et) {
      (y1(Q) || Q(Ne, Et)) && Ee(Et);
    }
    const ht = d;
    ae.add(ht, "dragstart", (Et) => Et.preventDefault(), ue).add(ht, "touchmove", () => {
    }, ue).add(ht, "touchend", () => {
    }).add(ht, "touchstart", nt).add(ht, "mousedown", nt).add(ht, "touchcancel", Rt).add(ht, "contextmenu", Rt).add(ht, "click", bn, !0);
  }
  function Xe() {
    ae.clear(), se.clear();
  }
  function ot() {
    const Ne = xe ? f : d;
    se.add(Ne, "touchmove", nn, ue).add(Ne, "touchend", Rt).add(Ne, "mousemove", nn, ue).add(Ne, "mouseup", Rt);
  }
  function Pt(Ne) {
    const nt = Ne.nodeName || "";
    return B.includes(nt);
  }
  function Qt() {
    return (U ? Ae : Te)[xe ? "mouse" : "touch"];
  }
  function Yn(Ne, nt) {
    const ht = D.add(g1(Ne) * -1), Et = M.byDistance(Ne, !U).distance;
    return U || Mn(Ne) < ve ? Et : H && nt ? Et * 0.5 : M.byIndex(ht.get(), 0).distance;
  }
  function Ee(Ne) {
    const nt = eR(Ne, y);
    xe = nt, ce = U && nt && !Ne.buttons && ke, ke = Ev(S.get(), h.get()) >= 2, !(nt && Ne.button !== 0) && (Pt(Ne.target) || (lt = !0, b.pointerDown(Ne), R.useFriction(0).useDuration(0), S.set(h), ot(), Be = b.readPoint(Ne), _t = b.readPoint(Ne, V), _.emit("pointerDown")));
  }
  function nn(Ne) {
    const nt = b.readPoint(Ne), ht = b.readPoint(Ne, V), Et = Ev(nt, Be), Wt = Ev(ht, _t);
    if (!Mt && !xe && (!Ne.cancelable || (Mt = Et > Wt, !Mt)))
      return Rt(Ne);
    const Vt = b.pointerMove(Ne);
    Et > O && (ce = !0), R.useFriction(0.3).useDuration(1), x.start(), S.add(G(Vt)), Ne.preventDefault();
  }
  function Rt(Ne) {
    const ht = M.byDistance(0, !1).index !== D.get(), Et = b.pointerUp(Ne) * Qt(), Wt = Yn(G(Et), ht), Vt = W3(Et, Wt), vn = je - 10 * Vt, rn = z + Vt / 50;
    Mt = !1, lt = !1, se.clear(), R.useDuration(vn).useFriction(rn), T.distance(Wt, !U), xe = !1, _.emit("pointerUp");
  }
  function bn(Ne) {
    ce && (Ne.stopPropagation(), Ne.preventDefault(), ce = !1);
  }
  function pn() {
    return lt;
  }
  return {
    init: me,
    pointerDown: pn,
    destroy: Xe
  };
}
function q3(u, d) {
  let y, S;
  function b(D) {
    return D.timeStamp;
  }
  function h(D, _) {
    const U = `client${(_ || u.scroll) === "x" ? "X" : "Y"}`;
    return (eR(D, d) ? D : D.touches[0])[U];
  }
  function x(D) {
    return y = D, S = D, h(D);
  }
  function T(D) {
    const _ = h(D) - h(S), L = b(D) - b(y) > 170;
    return S = D, L && (y = D), _;
  }
  function R(D) {
    if (!y || !S)
      return 0;
    const _ = h(S) - h(y), L = b(D) - b(y), U = b(D) - b(S) > 170, O = _ / L;
    return L && !U && Mn(O) > 0.1 ? O : 0;
  }
  return {
    pointerDown: x,
    pointerMove: T,
    pointerUp: R,
    readPoint: h
  };
}
function Z3() {
  function u(f) {
    const {
      offsetTop: y,
      offsetLeft: S,
      offsetWidth: b,
      offsetHeight: h
    } = f;
    return {
      top: y,
      right: S + b,
      bottom: y + h,
      left: S,
      width: b,
      height: h
    };
  }
  return {
    measure: u
  };
}
function J3(u) {
  function d(y) {
    return u * (y / 100);
  }
  return {
    measure: d
  };
}
function eA(u, d, f, y, S, b, h) {
  let x, T, R = [], M = !1;
  function D(O) {
    return S.measureSize(h.measure(O));
  }
  function _(O) {
    if (!b)
      return;
    T = D(u), R = y.map(D);
    function H(Q) {
      for (const V of Q) {
        const G = V.target === u, B = y.indexOf(V.target), ue = G ? T : R[B], ae = D(G ? u : y[B]);
        if (Mn(ae - ue) >= 0.5) {
          f.requestAnimationFrame(() => {
            O.reInit(), d.emit("resize");
          });
          break;
        }
      }
    }
    x = new ResizeObserver((Q) => {
      M || (y1(b) || b(O, Q)) && H(Q);
    }), [u].concat(y).forEach((Q) => x.observe(Q));
  }
  function L() {
    x && x.disconnect(), M = !0;
  }
  return {
    init: _,
    destroy: L
  };
}
function tA(u, d, f, y, S) {
  let b = 0, h = 0, x = y, T = S, R = u.get(), M = 0;
  function D() {
    const B = f.get() - u.get(), ue = !x;
    let ae = 0;
    return ue ? (b = 0, u.set(f), ae = B) : (b += B / x, b *= T, R += b, u.add(b), ae = R - M), h = g1(ae), M = R, G;
  }
  function _() {
    const B = f.get() - d.get();
    return Mn(B) < 1e-3;
  }
  function L() {
    return x;
  }
  function U() {
    return h;
  }
  function O() {
    return b;
  }
  function H() {
    return Q(y);
  }
  function z() {
    return V(S);
  }
  function Q(B) {
    return x = B, G;
  }
  function V(B) {
    return T = B, G;
  }
  const G = {
    direction: U,
    duration: L,
    velocity: O,
    seek: D,
    settled: _,
    useBaseFriction: z,
    useBaseDuration: H,
    useFriction: V,
    useDuration: Q
  };
  return G;
}
function nA(u, d, f, y, S) {
  const b = S.measure(10), h = S.measure(50), x = Ks(0.1, 0.99);
  let T = !1;
  function R() {
    return !(T || !u.reachedAny(f.get()) || !u.reachedAny(d.get()));
  }
  function M(L) {
    if (!R())
      return;
    const U = u.reachedMin(d.get()) ? "min" : "max", O = Mn(u[U] - d.get()), H = f.get() - d.get(), z = x.constrain(O / h);
    f.subtract(H * z), !L && Mn(H) < b && (f.set(u.constrain(f.get())), y.useDuration(25).useBaseFriction());
  }
  function D(L) {
    T = !L;
  }
  return {
    constrain: M,
    toggleActive: D
  };
}
function rA(u, d, f, y, S) {
  const b = Ks(-d + u, 0), h = D(), x = M(), T = _();
  function R(U, O) {
    return Ev(U, O) < 1;
  }
  function M() {
    const U = h[0], O = Gi(h), H = h.lastIndexOf(U), z = h.indexOf(O) + 1;
    return Ks(H, z);
  }
  function D() {
    return f.map((U, O) => {
      const {
        min: H,
        max: z
      } = b, Q = b.constrain(U), V = !O, G = S1(f, O);
      return V ? z : G || R(H, Q) ? H : R(z, Q) ? z : Q;
    }).map((U) => parseFloat(U.toFixed(3)));
  }
  function _() {
    if (d <= u + S)
      return [b.max];
    if (y === "keepSnaps")
      return h;
    const {
      min: U,
      max: O
    } = x;
    return h.slice(U, O);
  }
  return {
    snapsContained: T,
    scrollContainLimit: x
  };
}
function aA(u, d, f) {
  const y = d[0], S = f ? y - u : Gi(d);
  return {
    limit: Ks(S, y)
  };
}
function iA(u, d, f, y) {
  const b = d.min + 0.1, h = d.max + 0.1, {
    reachedMin: x,
    reachedMax: T
  } = Ks(b, h);
  function R(_) {
    return _ === 1 ? T(f.get()) : _ === -1 ? x(f.get()) : !1;
  }
  function M(_) {
    if (!R(_))
      return;
    const L = u * (_ * -1);
    y.forEach((U) => U.add(L));
  }
  return {
    loop: M
  };
}
function oA(u) {
  const {
    max: d,
    length: f
  } = u;
  function y(b) {
    const h = b - d;
    return f ? h / -f : 0;
  }
  return {
    get: y
  };
}
function lA(u, d, f, y, S) {
  const {
    startEdge: b,
    endEdge: h
  } = u, {
    groupSlides: x
  } = S, T = D().map(d.measure), R = _(), M = L();
  function D() {
    return x(y).map((O) => Gi(O)[h] - O[0][b]).map(Mn);
  }
  function _() {
    return y.map((O) => f[b] - O[b]).map((O) => -Mn(O));
  }
  function L() {
    return x(R).map((O) => O[0]).map((O, H) => O + T[H]);
  }
  return {
    snaps: R,
    snapsAligned: M
  };
}
function uA(u, d, f, y, S, b) {
  const {
    groupSlides: h
  } = S, {
    min: x,
    max: T
  } = y, R = M();
  function M() {
    const _ = h(b), L = !u || d === "keepSnaps";
    return f.length === 1 ? [b] : L ? _ : _.slice(x, T).map((U, O, H) => {
      const z = !O, Q = S1(H, O);
      if (z) {
        const V = Gi(H[0]) + 1;
        return $w(V);
      }
      if (Q) {
        const V = Nv(b) - Gi(H)[0] + 1;
        return $w(V, Gi(H)[0]);
      }
      return U;
    });
  }
  return {
    slideRegistry: R
  };
}
function sA(u, d, f, y, S) {
  const {
    reachedAny: b,
    removeOffset: h,
    constrain: x
  } = y;
  function T(U) {
    return U.concat().sort((O, H) => Mn(O) - Mn(H))[0];
  }
  function R(U) {
    const O = u ? h(U) : x(U), H = d.map((Q, V) => ({
      diff: M(Q - O, 0),
      index: V
    })).sort((Q, V) => Mn(Q.diff) - Mn(V.diff)), {
      index: z
    } = H[0];
    return {
      index: z,
      distance: O
    };
  }
  function M(U, O) {
    const H = [U, U + f, U - f];
    if (!u)
      return H[0];
    if (!O)
      return T(H);
    const z = H.filter((Q) => g1(Q) === O);
    return z.length ? T(z) : Gi(H) - f;
  }
  function D(U, O) {
    const H = d[U] - S.get(), z = M(H, O);
    return {
      index: U,
      distance: z
    };
  }
  function _(U, O) {
    const H = S.get() + U, {
      index: z,
      distance: Q
    } = R(H), V = !u && b(H);
    if (!O || V)
      return {
        index: z,
        distance: U
      };
    const G = d[z] - Q, B = U + M(G, 0);
    return {
      index: z,
      distance: B
    };
  }
  return {
    byDistance: _,
    byIndex: D,
    shortcut: M
  };
}
function cA(u, d, f, y, S, b, h) {
  function x(D) {
    const _ = D.distance, L = D.index !== d.get();
    b.add(_), _ && (y.duration() ? u.start() : (u.update(), u.render(1), u.update())), L && (f.set(d.get()), d.set(D.index), h.emit("select"));
  }
  function T(D, _) {
    const L = S.byDistance(D, _);
    x(L);
  }
  function R(D, _) {
    const L = d.clone().set(D), U = S.byIndex(L.get(), _);
    x(U);
  }
  return {
    distance: T,
    index: R
  };
}
function fA(u, d, f, y, S, b) {
  let h = 0;
  function x() {
    b.add(document, "keydown", T, !1), d.forEach(R);
  }
  function T(D) {
    D.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  function R(D) {
    const _ = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10)
        return;
      u.scrollLeft = 0;
      const O = d.indexOf(D), H = f.findIndex((z) => z.includes(O));
      m1(H) && (S.useDuration(0), y.index(H, 0));
    };
    b.add(D, "focus", _, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: x
  };
}
function Vy(u) {
  let d = u;
  function f() {
    return d;
  }
  function y(T) {
    d = h(T);
  }
  function S(T) {
    d += h(T);
  }
  function b(T) {
    d -= h(T);
  }
  function h(T) {
    return m1(T) ? T : T.get();
  }
  return {
    get: f,
    set: y,
    add: S,
    subtract: b
  };
}
function nR(u, d) {
  const f = u.scroll === "x" ? b : h, y = d.style;
  let S = !1;
  function b(D) {
    return `translate3d(${D}px,0px,0px)`;
  }
  function h(D) {
    return `translate3d(0px,${D}px,0px)`;
  }
  function x(D) {
    S || (y.transform = f(u.direction(D)));
  }
  function T(D) {
    S = !D;
  }
  function R() {
    S || (y.transform = "", d.getAttribute("style") || d.removeAttribute("style"));
  }
  return {
    clear: R,
    to: x,
    toggleActive: T
  };
}
function dA(u, d, f, y, S, b, h, x, T) {
  const M = Tv(S), D = Tv(S).reverse(), _ = z().concat(Q());
  function L(ae, se) {
    return ae.reduce((ve, Te) => ve - S[Te], se);
  }
  function U(ae, se) {
    return ae.reduce((ve, Te) => L(ve, se) > 0 ? ve.concat([Te]) : ve, []);
  }
  function O(ae) {
    return b.map((se, ve) => ({
      start: se - y[ve] + 0.5 + ae,
      end: se + d - 0.5 + ae
    }));
  }
  function H(ae, se, ve) {
    const Te = O(se);
    return ae.map((Ae) => {
      const je = ve ? 0 : -f, ke = ve ? f : 0, Be = ve ? "end" : "start", _t = Te[Ae][Be];
      return {
        index: Ae,
        loopPoint: _t,
        slideLocation: Vy(-1),
        translate: nR(u, T[Ae]),
        target: () => x.get() > _t ? je : ke
      };
    });
  }
  function z() {
    const ae = h[0], se = U(D, ae);
    return H(se, f, !1);
  }
  function Q() {
    const ae = d - h[0] - 1, se = U(M, ae);
    return H(se, -f, !0);
  }
  function V() {
    return _.every(({
      index: ae
    }) => {
      const se = M.filter((ve) => ve !== ae);
      return L(se, d) <= 0.1;
    });
  }
  function G() {
    _.forEach((ae) => {
      const {
        target: se,
        translate: ve,
        slideLocation: Te
      } = ae, Ae = se();
      Ae !== Te.get() && (ve.to(Ae), Te.set(Ae));
    });
  }
  function B() {
    _.forEach((ae) => ae.translate.clear());
  }
  return {
    canLoop: V,
    clear: B,
    loop: G,
    loopPoints: _
  };
}
function pA(u, d, f) {
  let y, S = !1;
  function b(T) {
    if (!f)
      return;
    function R(M) {
      for (const D of M)
        if (D.type === "childList") {
          T.reInit(), d.emit("slidesChanged");
          break;
        }
    }
    y = new MutationObserver((M) => {
      S || (y1(f) || f(T, M)) && R(M);
    }), y.observe(u, {
      childList: !0
    });
  }
  function h() {
    y && y.disconnect(), S = !0;
  }
  return {
    init: b,
    destroy: h
  };
}
function vA(u, d, f, y) {
  const S = {};
  let b = null, h = null, x, T = !1;
  function R() {
    x = new IntersectionObserver((U) => {
      T || (U.forEach((O) => {
        const H = d.indexOf(O.target);
        S[H] = O;
      }), b = null, h = null, f.emit("slidesInView"));
    }, {
      root: u.parentElement,
      threshold: y
    }), d.forEach((U) => x.observe(U));
  }
  function M() {
    x && x.disconnect(), T = !0;
  }
  function D(U) {
    return Rv(S).reduce((O, H) => {
      const z = parseInt(H), {
        isIntersecting: Q
      } = S[z];
      return (U && Q || !U && !Q) && O.push(z), O;
    }, []);
  }
  function _(U = !0) {
    if (U && b)
      return b;
    if (!U && h)
      return h;
    const O = D(U);
    return U && (b = O), U || (h = O), O;
  }
  return {
    init: R,
    destroy: M,
    get: _
  };
}
function hA(u, d, f, y, S, b) {
  const {
    measureSize: h,
    startEdge: x,
    endEdge: T
  } = u, R = f[0] && S, M = U(), D = O(), _ = f.map(h), L = H();
  function U() {
    if (!R)
      return 0;
    const Q = f[0];
    return Mn(d[x] - Q[x]);
  }
  function O() {
    if (!R)
      return 0;
    const Q = b.getComputedStyle(Gi(y));
    return parseFloat(Q.getPropertyValue(`margin-${T}`));
  }
  function H() {
    return f.map((Q, V, G) => {
      const B = !V, ue = S1(G, V);
      return B ? _[V] + M : ue ? _[V] + D : G[V + 1][x] - Q[x];
    }).map(Mn);
  }
  return {
    slideSizes: _,
    slideSizesWithGaps: L,
    startGap: M,
    endGap: D
  };
}
function mA(u, d, f, y, S, b, h, x, T) {
  const {
    startEdge: R,
    endEdge: M,
    direction: D
  } = u, _ = m1(f);
  function L(z, Q) {
    return Tv(z).filter((V) => V % Q === 0).map((V) => z.slice(V, V + Q));
  }
  function U(z) {
    return z.length ? Tv(z).reduce((Q, V, G) => {
      const B = Gi(Q) || 0, ue = B === 0, ae = V === Nv(z), se = S[R] - b[B][R], ve = S[R] - b[V][M], Te = !y && ue ? D(h) : 0, Ae = !y && ae ? D(x) : 0, je = Mn(ve - Ae - (se + Te));
      return G && je > d + T && Q.push(V), ae && Q.push(z.length), Q;
    }, []).map((Q, V, G) => {
      const B = Math.max(G[V - 1] || 0);
      return z.slice(B, Q);
    }) : [];
  }
  function O(z) {
    return _ ? L(z, f) : U(z);
  }
  return {
    groupSlides: O
  };
}
function yA(u, d, f, y, S, b, h) {
  const {
    align: x,
    axis: T,
    direction: R,
    startIndex: M,
    loop: D,
    duration: _,
    dragFree: L,
    dragThreshold: U,
    inViewThreshold: O,
    slidesToScroll: H,
    skipSnaps: z,
    containScroll: Q,
    watchResize: V,
    watchSlides: G,
    watchDrag: B
  } = b, ue = 2, ae = Z3(), se = ae.measure(d), ve = f.map(ae.measure), Te = K3(T, R), Ae = Te.measureSize(se), je = J3(Ae), ke = G3(x, Ae), Be = !D && !!Q, _t = D || !!Q, {
    slideSizes: lt,
    slideSizesWithGaps: Mt,
    startGap: ce,
    endGap: xe
  } = hA(Te, se, ve, f, _t, S), me = mA(Te, Ae, H, D, se, ve, ce, xe, ue), {
    snaps: Xe,
    snapsAligned: ot
  } = lA(Te, ke, se, ve, me), Pt = -Gi(Xe) + Gi(Mt), {
    snapsContained: Qt,
    scrollContainLimit: Yn
  } = rA(Ae, Pt, ot, Q, ue), Ee = Be ? Qt : ot, {
    limit: nn
  } = aA(Pt, Ee, D), Rt = tR(Nv(Ee), M, D), bn = Rt.clone(), pn = Tv(f), dt = ({
    dragHandler: Cn,
    scrollBody: Gr,
    scrollBounds: Ve,
    options: {
      loop: ne
    }
  }) => {
    ne || Ve.constrain(Cn.pointerDown()), Gr.seek();
  }, Ne = ({
    scrollBody: Cn,
    translate: Gr,
    location: Ve,
    offsetLocation: ne,
    scrollLooper: ye,
    slideLooper: Ce,
    dragHandler: Ge,
    animation: ut,
    eventHandler: Ct,
    options: {
      loop: Kt
    }
  }, hn) => {
    const gt = Cn.velocity(), An = Cn.settled();
    An && !Ge.pointerDown() && (ut.stop(), Ct.emit("settle")), An || Ct.emit("scroll"), ne.set(Ve.get() - gt + gt * hn), Kt && (ye.loop(Cn.direction()), Ce.loop()), Gr.to(ne.get());
  }, nt = Q3(y, S, () => dt(an), (Cn) => Ne(an, Cn)), ht = 0.68, Et = Ee[Rt.get()], Wt = Vy(Et), Vt = Vy(Et), vn = Vy(Et), rn = tA(Wt, Vt, vn, _, ht), Ar = sA(D, Ee, Pt, nn, vn), pr = cA(nt, Rt, bn, rn, Ar, vn, h), Tr = oA(nn), En = Dv(), $r = vA(d, f, h, O), {
    slideRegistry: Jn
  } = uA(Be, Q, Ee, Yn, me, pn), er = fA(u, f, Jn, pr, rn, En), an = {
    ownerDocument: y,
    ownerWindow: S,
    eventHandler: h,
    containerRect: se,
    slideRects: ve,
    animation: nt,
    axis: Te,
    dragHandler: X3(Te, u, y, S, vn, q3(Te, S), Wt, nt, pr, rn, Ar, Rt, h, je, L, U, z, ht, B),
    eventStore: En,
    percentOfView: je,
    index: Rt,
    indexPrevious: bn,
    limit: nn,
    location: Wt,
    offsetLocation: Vt,
    options: b,
    resizeHandler: eA(d, h, S, f, Te, V, ae),
    scrollBody: rn,
    scrollBounds: nA(nn, Vt, vn, rn, je),
    scrollLooper: iA(Pt, nn, Vt, [Wt, Vt, vn]),
    scrollProgress: Tr,
    scrollSnapList: Ee.map(Tr.get),
    scrollSnaps: Ee,
    scrollTarget: Ar,
    scrollTo: pr,
    slideLooper: dA(Te, Ae, Pt, lt, Mt, Xe, Ee, Vt, f),
    slideFocus: er,
    slidesHandler: pA(d, h, G),
    slidesInView: $r,
    slideIndexes: pn,
    slideRegistry: Jn,
    slidesToScroll: me,
    target: vn,
    translate: nR(Te, d)
  };
  return an;
}
function gA() {
  const u = {};
  let d;
  function f(T) {
    d = T;
  }
  function y(T) {
    return u[T] || [];
  }
  function S(T) {
    return y(T).forEach((R) => R(d, T)), x;
  }
  function b(T, R) {
    return u[T] = y(T).concat([R]), x;
  }
  function h(T, R) {
    return u[T] = y(T).filter((M) => M !== R), x;
  }
  const x = {
    init: f,
    emit: S,
    off: h,
    on: b
  };
  return x;
}
const SA = {
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
function bA(u) {
  function d(b, h) {
    return JT(b, h || {});
  }
  function f(b) {
    const h = b.breakpoints || {}, x = Rv(h).filter((T) => u.matchMedia(T).matches).map((T) => h[T]).reduce((T, R) => d(T, R), {});
    return d(b, x);
  }
  function y(b) {
    return b.map((h) => Rv(h.breakpoints || {})).reduce((h, x) => h.concat(x), []).map(u.matchMedia);
  }
  return {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: y
  };
}
function EA(u) {
  let d = [];
  function f(b, h) {
    return d = h.filter(({
      options: x
    }) => u.optionsAtMedia(x).active !== !1), d.forEach((x) => x.init(b, u)), h.reduce((x, T) => Object.assign(x, {
      [T.name]: T
    }), {});
  }
  function y() {
    d = d.filter((b) => b.destroy());
  }
  return {
    init: f,
    destroy: y
  };
}
function Wy(u, d, f) {
  const y = u.ownerDocument, S = y.defaultView, b = bA(S), h = EA(b), x = Dv(), T = gA(), {
    mergeOptions: R,
    optionsAtMedia: M,
    optionsMediaQueries: D
  } = b, {
    on: _,
    off: L,
    emit: U
  } = T, O = Ae;
  let H = !1, z, Q = R(SA, Wy.globalOptions), V = R(Q), G = [], B, ue, ae;
  function se() {
    const {
      container: dt,
      slides: Ne
    } = V;
    ue = (t1(dt) ? u.querySelector(dt) : dt) || u.children[0];
    const ht = t1(Ne) ? ue.querySelectorAll(Ne) : Ne;
    ae = [].slice.call(ht || ue.children);
  }
  function ve(dt) {
    const Ne = yA(u, ue, ae, y, S, dt, T);
    if (dt.loop && !Ne.slideLooper.canLoop()) {
      const nt = Object.assign({}, dt, {
        loop: !1
      });
      return ve(nt);
    }
    return Ne;
  }
  function Te(dt, Ne) {
    H || (Q = R(Q, dt), V = M(Q), G = Ne || G, se(), z = ve(V), D([Q, ...G.map(({
      options: nt
    }) => nt)]).forEach((nt) => x.add(nt, "change", Ae)), V.active && (z.translate.to(z.location.get()), z.animation.init(), z.slidesInView.init(), z.slideFocus.init(), z.eventHandler.init(pn), z.resizeHandler.init(pn), z.slidesHandler.init(pn), z.options.loop && z.slideLooper.loop(), ue.offsetParent && ae.length && z.dragHandler.init(pn), B = h.init(pn, G)));
  }
  function Ae(dt, Ne) {
    const nt = Xe();
    je(), Te(R({
      startIndex: nt
    }, dt), Ne), T.emit("reInit");
  }
  function je() {
    z.dragHandler.destroy(), z.eventStore.clear(), z.translate.clear(), z.slideLooper.clear(), z.resizeHandler.destroy(), z.slidesHandler.destroy(), z.slidesInView.destroy(), z.animation.destroy(), h.destroy(), x.clear();
  }
  function ke() {
    H || (H = !0, x.clear(), je(), T.emit("destroy"));
  }
  function Be(dt, Ne, nt) {
    !V.active || H || (z.scrollBody.useBaseFriction().useDuration(Ne === !0 ? 0 : V.duration), z.scrollTo.index(dt, nt || 0));
  }
  function _t(dt) {
    const Ne = z.index.add(1).get();
    Be(Ne, dt, -1);
  }
  function lt(dt) {
    const Ne = z.index.add(-1).get();
    Be(Ne, dt, 1);
  }
  function Mt() {
    return z.index.add(1).get() !== Xe();
  }
  function ce() {
    return z.index.add(-1).get() !== Xe();
  }
  function xe() {
    return z.scrollSnapList;
  }
  function me() {
    return z.scrollProgress.get(z.location.get());
  }
  function Xe() {
    return z.index.get();
  }
  function ot() {
    return z.indexPrevious.get();
  }
  function Pt() {
    return z.slidesInView.get();
  }
  function Qt() {
    return z.slidesInView.get(!1);
  }
  function Yn() {
    return B;
  }
  function Ee() {
    return z;
  }
  function nn() {
    return u;
  }
  function Rt() {
    return ue;
  }
  function bn() {
    return ae;
  }
  const pn = {
    canScrollNext: Mt,
    canScrollPrev: ce,
    containerNode: Rt,
    internalEngine: Ee,
    destroy: ke,
    off: L,
    on: _,
    emit: U,
    plugins: Yn,
    previousScrollSnap: ot,
    reInit: O,
    rootNode: nn,
    scrollNext: _t,
    scrollPrev: lt,
    scrollProgress: me,
    scrollSnapList: xe,
    scrollTo: Be,
    selectedScrollSnap: Xe,
    slideNodes: bn,
    slidesInView: Pt,
    slidesNotInView: Qt
  };
  return Te(d, f), setTimeout(() => T.emit("init"), 0), pn;
}
Wy.globalOptions = void 0;
function b1(u = {}, d = []) {
  const f = jt(u), y = jt(d), [S, b] = fr(), [h, x] = fr(), T = Ba(() => {
    S && S.reInit(f.current, y.current);
  }, [S]);
  return Fn(() => {
    if (B3() && h) {
      Wy.globalOptions = b1.globalOptions;
      const R = Wy(h, f.current, y.current);
      return b(R), () => R.destroy();
    } else
      b(void 0);
  }, [h, b]), Fn(() => {
    h1(f.current, u) || (f.current = u, T());
  }, [u, T]), Fn(() => {
    Y3(y.current, d) || (y.current = d, T());
  }, [d, T]), [x, S];
}
b1.globalOptions = void 0;
const rR = ze.createContext(null);
function Xy() {
  const u = ze.useContext(rR);
  if (!u)
    throw new Error("useCarousel must be used within a <Carousel />");
  return u;
}
const CA = ze.forwardRef(
  ({
    orientation: u = "horizontal",
    opts: d,
    setApi: f,
    plugins: y,
    className: S,
    children: b,
    ...h
  }, x) => {
    const [T, R] = b1(
      {
        ...d,
        axis: u === "horizontal" ? "x" : "y"
      },
      y
    ), [M, D] = ze.useState(!1), [_, L] = ze.useState(!1), U = ze.useCallback((Q) => {
      Q && (D(Q.canScrollPrev()), L(Q.canScrollNext()));
    }, []), O = ze.useCallback(() => {
      R == null || R.scrollPrev();
    }, [R]), H = ze.useCallback(() => {
      R == null || R.scrollNext();
    }, [R]), z = ze.useCallback(
      (Q) => {
        Q.key === "ArrowLeft" ? (Q.preventDefault(), O()) : Q.key === "ArrowRight" && (Q.preventDefault(), H());
      },
      [O, H]
    );
    return ze.useEffect(() => {
      !R || !f || f(R);
    }, [R, f]), ze.useEffect(() => {
      if (R)
        return U(R), R.on("reInit", U), R.on("select", U), () => {
          R == null || R.off("select", U);
        };
    }, [R, U]), /* @__PURE__ */ pe.jsx(
      rR.Provider,
      {
        value: {
          carouselRef: T,
          api: R,
          opts: d,
          orientation: u || ((d == null ? void 0 : d.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: O,
          scrollNext: H,
          canScrollPrev: M,
          canScrollNext: _
        },
        children: /* @__PURE__ */ pe.jsx(
          "div",
          {
            ref: x,
            onKeyDownCapture: z,
            className: Ln("relative", S),
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
CA.displayName = "Carousel";
const xA = ze.forwardRef(({ className: u, ...d }, f) => {
  const { carouselRef: y, orientation: S } = Xy();
  return /* @__PURE__ */ pe.jsx("div", { ref: y, className: "overflow-hidden", children: /* @__PURE__ */ pe.jsx(
    "div",
    {
      ref: f,
      className: Ln(
        "flex",
        S === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        u
      ),
      ...d
    }
  ) });
});
xA.displayName = "CarouselContent";
const wA = ze.forwardRef(({ className: u, ...d }, f) => {
  const { orientation: y } = Xy();
  return /* @__PURE__ */ pe.jsx(
    "div",
    {
      ref: f,
      role: "group",
      "aria-roledescription": "slide",
      className: Ln(
        "min-w-0 shrink-0 grow-0 basis-full",
        y === "horizontal" ? "pl-4" : "pt-4",
        u
      ),
      ...d
    }
  );
});
wA.displayName = "CarouselItem";
const TA = ze.forwardRef(({ className: u, variant: d = "ghost", size: f = "icon", ...y }, S) => {
  const { orientation: b, scrollPrev: h, canScrollPrev: x } = Xy();
  return /* @__PURE__ */ pe.jsxs(
    Qy,
    {
      ref: S,
      variant: d,
      size: f,
      className: Ln(
        "absolute  h-8 w-8 rounded-full",
        b === "horizontal" ? "-left-6 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        u
      ),
      disabled: !x,
      onClick: h,
      ...y,
      children: [
        /* @__PURE__ */ pe.jsx(JO, { className: "h-4 w-4" }),
        /* @__PURE__ */ pe.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
TA.displayName = "CarouselPrevious";
const RA = ze.forwardRef(({ className: u, variant: d = "ghost", size: f = "icon", ...y }, S) => {
  const { orientation: b, scrollNext: h, canScrollNext: x } = Xy();
  return /* @__PURE__ */ pe.jsxs(
    Qy,
    {
      ref: S,
      variant: d,
      size: f,
      className: Ln(
        "absolute h-8 w-8 rounded-full",
        b === "horizontal" ? "-right-6 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        u
      ),
      disabled: !x,
      onClick: h,
      ...y,
      children: [
        /* @__PURE__ */ pe.jsx(eM, { className: "h-4 w-4" }),
        /* @__PURE__ */ pe.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
RA.displayName = "CarouselNext";
export {
  FA as AppContainer,
  CA as Carousel,
  xA as CarouselContent,
  wA as CarouselItem,
  RA as CarouselNext,
  TA as CarouselPrevious,
  PA as FloatingNav,
  jA as HeroWrapper,
  MA as KyFooter,
  zA as KyNav,
  X2 as ModeToggle,
  Bw as TextGradients,
  $A as ThemeProvider,
  BM as getRandomEnumValue,
  LA as getRandomTextGradient,
  OA as useInterval,
  YO as useIsMobile
};
