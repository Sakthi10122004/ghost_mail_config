import { h as j, a as fe, u as V, P as _, f as k, n as pt, b as yt, d as bt, e as ae, m as Et, o as Ct, g as Me } from "./heading-DXxLDQ96.mjs";
import { F as he, H as Ie, u as R, q as w, b as S, o as M, $ as wt, D as N, B as Re, A as St, j as m, a6 as Nt, U as Dt, v as I, J as _e, a as xt, W as Pt, n as $ } from "./index-By5yPnMZ.mjs";
var O = function() {
  return O = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, O.apply(this, arguments);
};
function Le(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function rr(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(c) {
      c(a);
    });
  }
  return new (n || (n = Promise))(function(a, c) {
    function i(l) {
      try {
        s(r.next(l));
      } catch (d) {
        c(d);
      }
    }
    function f(l) {
      try {
        s(r.throw(l));
      } catch (d) {
        c(d);
      }
    }
    function s(l) {
      l.done ? a(l.value) : o(l.value).then(i, f);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function ar(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return c.next = i(0), c.throw = i(1), c.return = i(2), typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function i(s) {
    return function(l) {
      return f([s, l]);
    };
  }
  function f(s) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; c && (c = 0, s[0] && (n = 0)), n; ) try {
      if (r = 1, o && (a = s[0] & 2 ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
      switch (o = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
        case 0:
        case 1:
          a = s;
          break;
        case 4:
          return n.label++, { value: s[1], done: !1 };
        case 5:
          n.label++, o = s[1], s = [0];
          continue;
        case 7:
          s = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            n = 0;
            continue;
          }
          if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
            n.label = s[1];
            break;
          }
          if (s[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = s;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(s);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      s = t.call(e, n);
    } catch (l) {
      s = [6, l], o = 0;
    } finally {
      r = a = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function or(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], c;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    c = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (c) throw c.error;
    }
  }
  return a;
}
function Ot(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function At(e, t) {
  return wt((n, r) => t[n][r] ?? n, e);
}
var ee = (e) => {
  const { present: t, children: n } = e, r = Tt(t), o = typeof n == "function" ? n({ present: r.isPresent }) : he.only(n), a = j(r.ref, Mt(o));
  return typeof n == "function" || r.isPresent ? Ie(o, { ref: a }) : null;
};
ee.displayName = "Presence";
function Tt(e) {
  const [t, n] = R(), r = w(null), o = w(e), a = w("none"), c = e ? "mounted" : "unmounted", [i, f] = At(c, {
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
  return S(() => {
    const s = z(r.current);
    a.current = i === "mounted" ? s : "none";
  }, [i]), fe(() => {
    const s = r.current, l = o.current;
    if (l !== e) {
      const h = a.current, g = z(s);
      e ? f("MOUNT") : g === "none" || (s == null ? void 0 : s.display) === "none" ? f("UNMOUNT") : f(l && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), fe(() => {
    if (t) {
      let s;
      const l = t.ownerDocument.defaultView ?? window, d = (g) => {
        const u = z(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && u && (f("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", s = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (g) => {
        g.target === t && (a.current = z(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(s), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: M((s) => {
      r.current = s ? getComputedStyle(s) : null, n(s);
    }, [])
  };
}
function z(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Mt(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function It(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = V(e);
  S(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Rt = "DismissableLayer", ve = "dismissableLayer.update", _t = "dismissableLayer.pointerDownOutside", Lt = "dismissableLayer.focusOutside", be, ke = St({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fe = N(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: i,
      ...f
    } = e, s = Re(ke), [l, d] = R(null), h = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = R({}), x = j(t, (y) => d(y)), u = Array.from(s.layers), [v] = [...s.layersWithOutsidePointerEventsDisabled].slice(-1), p = u.indexOf(v), D = l ? u.indexOf(l) : -1, b = s.layersWithOutsidePointerEventsDisabled.size > 0, E = D >= p, C = jt((y) => {
      const T = y.target, K = [...s.branches].some((re) => re.contains(T));
      !E || K || (o == null || o(y), c == null || c(y), y.defaultPrevented || i == null || i());
    }, h), A = Wt((y) => {
      const T = y.target;
      [...s.branches].some((re) => re.contains(T)) || (a == null || a(y), c == null || c(y), y.defaultPrevented || i == null || i());
    }, h);
    return It((y) => {
      D === s.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, h), S(() => {
      if (l)
        return n && (s.layersWithOutsidePointerEventsDisabled.size === 0 && (be = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), s.layersWithOutsidePointerEventsDisabled.add(l)), s.layers.add(l), Ee(), () => {
          n && s.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = be);
        };
    }, [l, h, n, s]), S(() => () => {
      l && (s.layers.delete(l), s.layersWithOutsidePointerEventsDisabled.delete(l), Ee());
    }, [l, s]), S(() => {
      const y = () => g({});
      return document.addEventListener(ve, y), () => document.removeEventListener(ve, y);
    }, []), /* @__PURE__ */ m.jsx(
      _.div,
      {
        ...f,
        ref: x,
        style: {
          pointerEvents: b ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: k(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: k(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: k(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Fe.displayName = Rt;
var kt = "DismissableLayerBranch", Ft = N((e, t) => {
  const n = Re(ke), r = w(null), o = j(t, r);
  return S(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m.jsx(_.div, { ...e, ref: o });
});
Ft.displayName = kt;
function jt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = V(e), r = w(!1), o = w(() => {
  });
  return S(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          je(
            _t,
            n,
            s,
            { discrete: !0 }
          );
        };
        const s = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Wt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = V(e), r = w(!1);
  return S(() => {
    const o = (a) => {
      a.target && !r.current && je(Lt, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ee() {
  const e = new CustomEvent(ve);
  document.dispatchEvent(e);
}
function je(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pt(o, a) : o.dispatchEvent(a);
}
var Bt = "Portal", We = N((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = R(!1);
  fe(() => a(!0), []);
  const c = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return c ? Nt.createPortal(/* @__PURE__ */ m.jsx(_.div, { ...r, ref: t }), c) : null;
});
We.displayName = Bt;
var oe = 0;
function Ut() {
  S(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ce()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ce()), oe++, () => {
      oe === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), oe--;
    };
  }, []);
}
function Ce() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ie = "focusScope.autoFocusOnMount", se = "focusScope.autoFocusOnUnmount", we = { bubbles: !1, cancelable: !0 }, Ht = "FocusScope", Be = N((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [i, f] = R(null), s = V(o), l = V(a), d = w(null), h = j(t, (u) => f(u)), g = w({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  S(() => {
    if (r) {
      let u = function(b) {
        if (g.paused || !i) return;
        const E = b.target;
        i.contains(E) ? d.current = E : L(d.current, { select: !0 });
      }, v = function(b) {
        if (g.paused || !i) return;
        const E = b.relatedTarget;
        E !== null && (i.contains(E) || L(d.current, { select: !0 }));
      }, p = function(b) {
        if (document.activeElement === document.body)
          for (const C of b)
            C.removedNodes.length > 0 && L(i);
      };
      document.addEventListener("focusin", u), document.addEventListener("focusout", v);
      const D = new MutationObserver(p);
      return i && D.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", u), document.removeEventListener("focusout", v), D.disconnect();
      };
    }
  }, [r, i, g.paused]), S(() => {
    if (i) {
      Ne.add(g);
      const u = document.activeElement;
      if (!i.contains(u)) {
        const p = new CustomEvent(ie, we);
        i.addEventListener(ie, s), i.dispatchEvent(p), p.defaultPrevented || ($t(Xt(Ue(i)), { select: !0 }), document.activeElement === u && L(i));
      }
      return () => {
        i.removeEventListener(ie, s), setTimeout(() => {
          const p = new CustomEvent(se, we);
          i.addEventListener(se, l), i.dispatchEvent(p), p.defaultPrevented || L(u ?? document.body, { select: !0 }), i.removeEventListener(se, l), Ne.remove(g);
        }, 0);
      };
    }
  }, [i, s, l, g]);
  const x = M(
    (u) => {
      if (!n && !r || g.paused) return;
      const v = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, p = document.activeElement;
      if (v && p) {
        const D = u.currentTarget, [b, E] = Kt(D);
        b && E ? !u.shiftKey && p === E ? (u.preventDefault(), n && L(b, { select: !0 })) : u.shiftKey && p === b && (u.preventDefault(), n && L(E, { select: !0 })) : p === D && u.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ m.jsx(_.div, { tabIndex: -1, ...c, ref: h, onKeyDown: x });
});
Be.displayName = Ht;
function $t(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (L(r, { select: t }), document.activeElement !== n) return;
}
function Kt(e) {
  const t = Ue(e), n = Se(t, e), r = Se(t.reverse(), e);
  return [n, r];
}
function Ue(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Se(e, t) {
  for (const n of e)
    if (!Vt(n, { upTo: t })) return n;
}
function Vt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function L(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zt(e) && t && e.select();
  }
}
var Ne = Gt();
function Gt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = De(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = De(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function De(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Xt(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Yt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, W = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), X = {}, ce = 0, He = function(e) {
  return e && (e.host || He(e.parentNode));
}, qt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = He(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Zt = function(e, t, n, r) {
  var o = qt(t, Array.isArray(e) ? e : [e]);
  X[n] || (X[n] = /* @__PURE__ */ new WeakMap());
  var a = X[n], c = [], i = /* @__PURE__ */ new Set(), f = new Set(o), s = function(d) {
    !d || i.has(d) || (i.add(d), s(d.parentNode));
  };
  o.forEach(s);
  var l = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        l(h);
      else
        try {
          var g = h.getAttribute(r), x = g !== null && g !== "false", u = (W.get(h) || 0) + 1, v = (a.get(h) || 0) + 1;
          W.set(h, u), a.set(h, v), c.push(h), u === 1 && x && G.set(h, !0), v === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return l(t), i.clear(), ce++, function() {
    c.forEach(function(d) {
      var h = W.get(d) - 1, g = a.get(d) - 1;
      W.set(d, h), a.set(d, g), h || (G.has(d) || d.removeAttribute(r), G.delete(d)), g || d.removeAttribute(n);
    }), ce--, ce || (W = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), X = {});
  };
}, Qt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Yt(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Zt(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Z = "right-scroll-bar-position", Q = "width-before-scroll-bar", Jt = "with-scroll-bars-hidden", en = "--removed-body-scroll-bar-size";
function ue(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function tn(e, t) {
  var n = R(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var nn = typeof window < "u" ? Dt : S, xe = /* @__PURE__ */ new WeakMap();
function rn(e, t) {
  var n = tn(null, function(r) {
    return e.forEach(function(o) {
      return ue(o, r);
    });
  });
  return nn(function() {
    var r = xe.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || ue(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ue(i, c);
      });
    }
    xe.set(n, e);
  }, [e]), n;
}
function an(e) {
  return e;
}
function on(e, t) {
  t === void 0 && (t = an);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var c = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), c = n;
      }
      var f = function() {
        var l = c;
        c = [], l.forEach(a);
      }, s = function() {
        return Promise.resolve().then(f);
      };
      s(), n = {
        push: function(l) {
          c.push(l), s();
        },
        filter: function(l) {
          return c = c.filter(l), n;
        }
      };
    }
  };
  return o;
}
function sn(e) {
  e === void 0 && (e = {});
  var t = on(null);
  return t.options = O({ async: !0, ssr: !1 }, e), t;
}
var $e = function(e) {
  var t = e.sideCar, n = Le(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return I(r, O({}, n));
};
$e.isSideCarExport = !0;
function cn(e, t) {
  return e.useMedium(t), $e;
}
var Ke = sn(), le = function() {
}, te = N(function(e, t) {
  var n = w(null), r = R({
    onScrollCapture: le,
    onWheelCapture: le,
    onTouchMoveCapture: le
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, f = e.className, s = e.removeScrollBar, l = e.enabled, d = e.shards, h = e.sideCar, g = e.noIsolation, x = e.inert, u = e.allowPinchZoom, v = e.as, p = v === void 0 ? "div" : v, D = e.gapMode, b = Le(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, C = rn([n, t]), A = O(O({}, b), o);
  return I(
    _e,
    null,
    l && I(E, { sideCar: Ke, removeScrollBar: s, shards: d, noIsolation: g, inert: x, setCallbacks: a, allowPinchZoom: !!u, lockRef: n, gapMode: D }),
    c ? Ie(he.only(i), O(O({}, A), { ref: C })) : I(p, O({}, A, { className: f, ref: C }), i)
  );
});
te.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
te.classNames = {
  fullWidth: Q,
  zeroRight: Z
};
var un = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ln() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = un();
  return t && e.setAttribute("nonce", t), e;
}
function dn(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fn(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var vn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ln()) && (dn(t, n), fn(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mn = function() {
  var e = vn();
  return function(t, n) {
    S(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ve = function() {
  var e = mn(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, hn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, de = function(e) {
  return parseInt(e || "", 10) || 0;
}, gn = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [de(n), de(r), de(o)];
}, pn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return hn;
  var t = gn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yn = Ve(), H = "data-scroll-locked", bn = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Jt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(H, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Z, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Q, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Z, " .").concat(Z, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Q, " .").concat(Q, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(H, `] {
    `).concat(en, ": ").concat(i, `px;
  }
`);
}, Pe = function() {
  var e = parseInt(document.body.getAttribute(H) || "0", 10);
  return isFinite(e) ? e : 0;
}, En = function() {
  S(function() {
    return document.body.setAttribute(H, (Pe() + 1).toString()), function() {
      var e = Pe() - 1;
      e <= 0 ? document.body.removeAttribute(H) : document.body.setAttribute(H, e.toString());
    };
  }, []);
}, Cn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  En();
  var a = xt(function() {
    return pn(o);
  }, [o]);
  return I(yn, { styles: bn(a, !t, o, n ? "" : "!important") });
}, me = !1;
if (typeof window < "u")
  try {
    var Y = Object.defineProperty({}, "passive", {
      get: function() {
        return me = !0, !0;
      }
    });
    window.addEventListener("test", Y, Y), window.removeEventListener("test", Y, Y);
  } catch {
    me = !1;
  }
var B = me ? { passive: !1 } : !1, wn = function(e) {
  return e.tagName === "TEXTAREA";
}, ze = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !wn(e) && n[t] === "visible")
  );
}, Sn = function(e) {
  return ze(e, "overflowY");
}, Nn = function(e) {
  return ze(e, "overflowX");
}, Oe = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ge(e, r);
    if (o) {
      var a = Xe(e, r), c = a[1], i = a[2];
      if (c > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Dn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ge = function(e, t) {
  return e === "v" ? Sn(t) : Nn(t);
}, Xe = function(e, t) {
  return e === "v" ? Dn(t) : xn(t);
}, Pn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, On = function(e, t, n, r, o) {
  var a = Pn(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, f = t.contains(i), s = !1, l = c > 0, d = 0, h = 0;
  do {
    var g = Xe(e, i), x = g[0], u = g[1], v = g[2], p = u - v - a * x;
    (x || p) && Ge(e, i) && (d += p, h += x), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(h) < 1) && (s = !0), s;
}, q = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ae = function(e) {
  return [e.deltaX, e.deltaY];
}, Te = function(e) {
  return e && "current" in e ? e.current : e;
}, An = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Tn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mn = 0, U = [];
function In(e) {
  var t = w([]), n = w([0, 0]), r = w(), o = R(Mn++)[0], a = R(Ve)[0], c = w(e);
  S(function() {
    c.current = e;
  }, [e]), S(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var u = Ot([e.lockRef.current], (e.shards || []).map(Te), !0).filter(Boolean);
      return u.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), u.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = M(function(u, v) {
    if ("touches" in u && u.touches.length === 2 || u.type === "wheel" && u.ctrlKey)
      return !c.current.allowPinchZoom;
    var p = q(u), D = n.current, b = "deltaX" in u ? u.deltaX : D[0] - p[0], E = "deltaY" in u ? u.deltaY : D[1] - p[1], C, A = u.target, y = Math.abs(b) > Math.abs(E) ? "h" : "v";
    if ("touches" in u && y === "h" && A.type === "range")
      return !1;
    var T = Oe(y, A);
    if (!T)
      return !0;
    if (T ? C = y : (C = y === "v" ? "h" : "v", T = Oe(y, A)), !T)
      return !1;
    if (!r.current && "changedTouches" in u && (b || E) && (r.current = C), !C)
      return !0;
    var K = r.current || C;
    return On(K, v, u, K === "h" ? b : E);
  }, []), f = M(function(u) {
    var v = u;
    if (!(!U.length || U[U.length - 1] !== a)) {
      var p = "deltaY" in v ? Ae(v) : q(v), D = t.current.filter(function(C) {
        return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && An(C.delta, p);
      })[0];
      if (D && D.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!D) {
        var b = (c.current.shards || []).map(Te).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), E = b.length > 0 ? i(v, b[0]) : !c.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), s = M(function(u, v, p, D) {
    var b = { name: u, delta: v, target: p, should: D, shadowParent: Rn(p) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== b;
      });
    }, 1);
  }, []), l = M(function(u) {
    n.current = q(u), r.current = void 0;
  }, []), d = M(function(u) {
    s(u.type, Ae(u), u.target, i(u, e.lockRef.current));
  }, []), h = M(function(u) {
    s(u.type, q(u), u.target, i(u, e.lockRef.current));
  }, []);
  S(function() {
    return U.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, B), document.addEventListener("touchmove", f, B), document.addEventListener("touchstart", l, B), function() {
      U = U.filter(function(u) {
        return u !== a;
      }), document.removeEventListener("wheel", f, B), document.removeEventListener("touchmove", f, B), document.removeEventListener("touchstart", l, B);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return I(
    _e,
    null,
    x ? I(a, { styles: Tn(o) }) : null,
    g ? I(Cn, { gapMode: e.gapMode }) : null
  );
}
function Rn(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const _n = cn(Ke, In);
var Ye = N(function(e, t) {
  return I(te, O({}, e, { ref: t, sideCar: _n }));
});
Ye.classNames = te.classNames;
var ne = "Dialog", [qe, ir] = bt(ne), [Ln, P] = qe(ne), Ze = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: c = !0
  } = e, i = w(null), f = w(null), [s, l] = yt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ne
  });
  return /* @__PURE__ */ m.jsx(
    Ln,
    {
      scope: t,
      triggerRef: i,
      contentRef: f,
      contentId: ae(),
      titleId: ae(),
      descriptionId: ae(),
      open: s,
      onOpenChange: l,
      onOpenToggle: M(() => l((d) => !d), [l]),
      modal: c,
      children: n
    }
  );
};
Ze.displayName = ne;
var Qe = "DialogTrigger", Je = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(Qe, n), a = j(t, o.triggerRef);
    return /* @__PURE__ */ m.jsx(
      _.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ye(o.open),
        ...r,
        ref: a,
        onClick: k(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Je.displayName = Qe;
var ge = "DialogPortal", [kn, et] = qe(ge, {
  forceMount: void 0
}), tt = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = P(ge, t);
  return /* @__PURE__ */ m.jsx(kn, { scope: t, forceMount: n, children: he.map(r, (c) => /* @__PURE__ */ m.jsx(ee, { present: n || a.open, children: /* @__PURE__ */ m.jsx(We, { asChild: !0, container: o, children: c }) })) });
};
tt.displayName = ge;
var J = "DialogOverlay", nt = N(
  (e, t) => {
    const n = et(J, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = P(J, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ m.jsx(ee, { present: r || a.open, children: /* @__PURE__ */ m.jsx(jn, { ...o, ref: t }) }) : null;
  }
);
nt.displayName = J;
var Fn = Et("DialogOverlay.RemoveScroll"), jn = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(J, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(Ye, { as: Fn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m.jsx(
        _.div,
        {
          "data-state": ye(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), F = "DialogContent", rt = N(
  (e, t) => {
    const n = et(F, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = P(F, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(ee, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m.jsx(Wn, { ...o, ref: t }) : /* @__PURE__ */ m.jsx(Bn, { ...o, ref: t }) });
  }
);
rt.displayName = F;
var Wn = N(
  (e, t) => {
    const n = P(F, e.__scopeDialog), r = w(null), o = j(t, n.contentRef, r);
    return S(() => {
      const a = r.current;
      if (a) return Qt(a);
    }, []), /* @__PURE__ */ m.jsx(
      at,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (a) => {
          var c;
          a.preventDefault(), (c = n.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: k(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: k(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Bn = N(
  (e, t) => {
    const n = P(F, e.__scopeDialog), r = w(!1), o = w(!1);
    return /* @__PURE__ */ m.jsx(
      at,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var c, i;
          (c = e.onCloseAutoFocus) == null || c.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var f, s;
          (f = e.onInteractOutside) == null || f.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const c = a.target;
          ((s = n.triggerRef.current) == null ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), at = N(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...c } = e, i = P(F, n), f = w(null), s = j(t, f);
    return Ut(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        Be,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ m.jsx(
            Fe,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ye(i.open),
              ...c,
              ref: s,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(Un, { titleId: i.titleId }),
        /* @__PURE__ */ m.jsx($n, { contentRef: f, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), pe = "DialogTitle", ot = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(pe, n);
    return /* @__PURE__ */ m.jsx(_.h2, { id: o.titleId, ...r, ref: t });
  }
);
ot.displayName = pe;
var it = "DialogDescription", st = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(it, n);
    return /* @__PURE__ */ m.jsx(_.p, { id: o.descriptionId, ...r, ref: t });
  }
);
st.displayName = it;
var ct = "DialogClose", ut = N(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(ct, n);
    return /* @__PURE__ */ m.jsx(
      _.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ut.displayName = ct;
function ye(e) {
  return e ? "open" : "closed";
}
var lt = "DialogTitleWarning", [sr, dt] = Ct(lt, {
  contentName: F,
  titleName: pe,
  docsSlug: "dialog"
}), Un = ({ titleId: e }) => {
  const t = dt(lt), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return S(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Hn = "DialogDescriptionWarning", $n = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dt(Hn).contentName}}.`;
  return S(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Kn = Ze, Vn = Je, zn = tt, ft = nt, vt = rt, mt = ot, ht = st, cr = ut;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ur = Me("check", Gn);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], lr = Me("x", Xn), dr = Kn, fr = Vn, Yn = zn, gt = N(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  ft,
  {
    ref: n,
    className: $(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...t
  }
));
gt.displayName = ft.displayName;
const qn = N(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m.jsx(Yn, { children: /* @__PURE__ */ m.jsxs("div", { className: Pt, children: [
  /* @__PURE__ */ m.jsx(gt, {}),
  /* @__PURE__ */ m.jsx(
    vt,
    {
      ref: r,
      className: $(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-background dark:bg-[#101114] p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg outline-hidden",
        e
      ),
      ...n,
      children: t
    }
  )
] }) }));
qn.displayName = vt.displayName;
const Zn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: $(
      "flex flex-col gap-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Zn.displayName = "DialogHeader";
const Qn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: $(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 sm:items-end [&_button]:min-w-20",
      e
    ),
    ...t
  }
);
Qn.displayName = "DialogFooter";
const Jn = N(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  mt,
  {
    ref: n,
    className: $(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Jn.displayName = mt.displayName;
const er = N(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  ht,
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
er.displayName = ht.displayName;
export {
  ur as C,
  ht as D,
  Be as F,
  ft as O,
  ee as P,
  Kn as R,
  mt as T,
  sr as W,
  lr as X,
  rr as _,
  Le as a,
  zn as b,
  ir as c,
  vt as d,
  cr as e,
  Vn as f,
  dr as g,
  fr as h,
  qn as i,
  Zn as j,
  Jn as k,
  er as l,
  Qn as m,
  ar as n,
  Ot as o,
  or as p,
  We as q,
  Qt as r,
  Ye as s,
  Fe as t,
  Ut as u
};
//# sourceMappingURL=dialog-67vvNv8e.mjs.map
