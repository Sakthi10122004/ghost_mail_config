import { D as v, u as b, q as B, j as n, o as A, b as oe, a3 as Me, a as xt, n as q, W as St } from "./index-By5yPnMZ.mjs";
import { b as Ee, d as wt, e as be, h as k, a as X, P as R, f as _, u as yt, m as Ct, C as Ae } from "./heading-DXxLDQ96.mjs";
import { u as It, b as Tt } from "./skeleton-Du7JXZ_1.mjs";
import { q as Nt, r as Pt, u as bt, s as _t, F as Et, t as jt, C as Mt } from "./dialog-67vvNv8e.mjs";
import { g as Re, R as At, A as Rt, h as Dt, i as Ot } from "./dropdown-menu-BKZfsAPJ.mjs";
import { u as Lt, V as Bt } from "./filters-Ds_ZaYIU.mjs";
import { a as Vt } from "./search-DQuB1WMm.mjs";
function je(t, [o, e]) {
  return Math.min(e, Math.max(o, t));
}
var Ht = [" ", "Enter", "ArrowUp", "ArrowDown"], kt = [" ", "Enter"], ne = "Select", [me, fe, Ft] = Tt(ne), [le] = wt(ne, [
  Ft,
  Re
]), he = Re(), [Ut, Z] = le(ne), [Wt, Kt] = le(ne), De = (t) => {
  const {
    __scopeSelect: o,
    children: e,
    open: s,
    defaultOpen: i,
    onOpenChange: p,
    value: l,
    defaultValue: a,
    onValueChange: r,
    dir: u,
    name: g,
    autoComplete: w,
    disabled: N,
    required: P,
    form: T
  } = t, c = he(o), [h, y] = b(null), [d, f] = b(null), [D, O] = b(!1), ae = It(u), [E, V] = Ee({
    prop: s,
    defaultProp: i ?? !1,
    onChange: p,
    caller: ne
  }), [$, Q] = Ee({
    prop: l,
    defaultProp: a,
    onChange: r,
    caller: ne
  }), F = B(null), U = h ? T || !!h.closest("form") : !0, [G, W] = b(/* @__PURE__ */ new Set()), K = Array.from(G).map((j) => j.props.value).join(";");
  return /* @__PURE__ */ n.jsx(At, { ...c, children: /* @__PURE__ */ n.jsxs(
    Ut,
    {
      required: P,
      scope: o,
      trigger: h,
      onTriggerChange: y,
      valueNode: d,
      onValueNodeChange: f,
      valueNodeHasChildren: D,
      onValueNodeHasChildrenChange: O,
      contentId: be(),
      value: $,
      onValueChange: Q,
      open: E,
      onOpenChange: V,
      dir: ae,
      triggerPointerDownPosRef: F,
      disabled: N,
      children: [
        /* @__PURE__ */ n.jsx(me.Provider, { scope: o, children: /* @__PURE__ */ n.jsx(
          Wt,
          {
            scope: t.__scopeSelect,
            onNativeOptionAdd: A((j) => {
              W((H) => new Set(H).add(j));
            }, []),
            onNativeOptionRemove: A((j) => {
              W((H) => {
                const z = new Set(H);
                return z.delete(j), z;
              });
            }, []),
            children: e
          }
        ) }),
        U ? /* @__PURE__ */ n.jsxs(
          st,
          {
            "aria-hidden": !0,
            required: P,
            tabIndex: -1,
            name: g,
            autoComplete: w,
            value: $,
            onChange: (j) => Q(j.target.value),
            disabled: N,
            form: T,
            children: [
              $ === void 0 ? /* @__PURE__ */ n.jsx("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
De.displayName = ne;
var Oe = "SelectTrigger", Le = v(
  (t, o) => {
    const { __scopeSelect: e, disabled: s = !1, ...i } = t, p = he(e), l = Z(Oe, e), a = l.disabled || s, r = k(o, l.onTriggerChange), u = fe(e), g = B("touch"), [w, N, P] = at((c) => {
      const h = u().filter((f) => !f.disabled), y = h.find((f) => f.value === l.value), d = it(h, c, y);
      d !== void 0 && l.onValueChange(d.value);
    }), T = (c) => {
      a || (l.onOpenChange(!0), P()), c && (l.triggerPointerDownPosRef.current = {
        x: Math.round(c.pageX),
        y: Math.round(c.pageY)
      });
    };
    return /* @__PURE__ */ n.jsx(Rt, { asChild: !0, ...p, children: /* @__PURE__ */ n.jsx(
      R.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": l.contentId,
        "aria-expanded": l.open,
        "aria-required": l.required,
        "aria-autocomplete": "none",
        dir: l.dir,
        "data-state": l.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": lt(l.value) ? "" : void 0,
        ...i,
        ref: r,
        onClick: _(i.onClick, (c) => {
          c.currentTarget.focus(), g.current !== "mouse" && T(c);
        }),
        onPointerDown: _(i.onPointerDown, (c) => {
          g.current = c.pointerType;
          const h = c.target;
          h.hasPointerCapture(c.pointerId) && h.releasePointerCapture(c.pointerId), c.button === 0 && c.ctrlKey === !1 && c.pointerType === "mouse" && (T(c), c.preventDefault());
        }),
        onKeyDown: _(i.onKeyDown, (c) => {
          const h = w.current !== "";
          !(c.ctrlKey || c.altKey || c.metaKey) && c.key.length === 1 && N(c.key), !(h && c.key === " ") && Ht.includes(c.key) && (T(), c.preventDefault());
        })
      }
    ) });
  }
);
Le.displayName = Oe;
var Be = "SelectValue", Ve = v(
  (t, o) => {
    const { __scopeSelect: e, className: s, style: i, children: p, placeholder: l = "", ...a } = t, r = Z(Be, e), { onValueNodeHasChildrenChange: u } = r, g = p !== void 0, w = k(o, r.onValueNodeChange);
    return X(() => {
      u(g);
    }, [u, g]), /* @__PURE__ */ n.jsx(
      R.span,
      {
        ...a,
        ref: w,
        style: { pointerEvents: "none" },
        children: lt(r.value) ? /* @__PURE__ */ n.jsx(n.Fragment, { children: l }) : p
      }
    );
  }
);
Ve.displayName = Be;
var zt = "SelectIcon", He = v(
  (t, o) => {
    const { __scopeSelect: e, children: s, ...i } = t;
    return /* @__PURE__ */ n.jsx(R.span, { "aria-hidden": !0, ...i, ref: o, children: s || "▼" });
  }
);
He.displayName = zt;
var $t = "SelectPortal", ke = (t) => /* @__PURE__ */ n.jsx(Nt, { asChild: !0, ...t });
ke.displayName = $t;
var re = "SelectContent", Fe = v(
  (t, o) => {
    const e = Z(re, t.__scopeSelect), [s, i] = b();
    if (X(() => {
      i(new DocumentFragment());
    }, []), !e.open) {
      const p = s;
      return p ? Me(
        /* @__PURE__ */ n.jsx(Ue, { scope: t.__scopeSelect, children: /* @__PURE__ */ n.jsx(me.Slot, { scope: t.__scopeSelect, children: /* @__PURE__ */ n.jsx("div", { children: t.children }) }) }),
        p
      ) : null;
    }
    return /* @__PURE__ */ n.jsx(We, { ...t, ref: o });
  }
);
Fe.displayName = re;
var L = 10, [Ue, J] = le(re), Gt = "SelectContentImpl", Yt = Ct("SelectContent.RemoveScroll"), We = v(
  (t, o) => {
    const {
      __scopeSelect: e,
      position: s = "item-aligned",
      onCloseAutoFocus: i,
      onEscapeKeyDown: p,
      onPointerDownOutside: l,
      //
      // PopperContent props
      side: a,
      sideOffset: r,
      align: u,
      alignOffset: g,
      arrowPadding: w,
      collisionBoundary: N,
      collisionPadding: P,
      sticky: T,
      hideWhenDetached: c,
      avoidCollisions: h,
      //
      ...y
    } = t, d = Z(re, e), [f, D] = b(null), [O, ae] = b(null), E = k(o, (m) => D(m)), [V, $] = b(null), [Q, F] = b(
      null
    ), U = fe(e), [G, W] = b(!1), K = B(!1);
    oe(() => {
      if (f) return Pt(f);
    }, [f]), bt();
    const j = A(
      (m) => {
        const [I, ...M] = U().map((S) => S.ref.current), [C] = M.slice(-1), x = document.activeElement;
        for (const S of m)
          if (S === x || (S == null || S.scrollIntoView({ block: "nearest" }), S === I && O && (O.scrollTop = 0), S === C && O && (O.scrollTop = O.scrollHeight), S == null || S.focus(), document.activeElement !== x)) return;
      },
      [U, O]
    ), H = A(
      () => j([V, f]),
      [j, V, f]
    );
    oe(() => {
      G && H();
    }, [G, H]);
    const { onOpenChange: z, triggerPointerDownPosRef: Y } = d;
    oe(() => {
      if (f) {
        let m = { x: 0, y: 0 };
        const I = (C) => {
          var x, S;
          m = {
            x: Math.abs(Math.round(C.pageX) - (((x = Y.current) == null ? void 0 : x.x) ?? 0)),
            y: Math.abs(Math.round(C.pageY) - (((S = Y.current) == null ? void 0 : S.y) ?? 0))
          };
        }, M = (C) => {
          m.x <= 10 && m.y <= 10 ? C.preventDefault() : f.contains(C.target) || z(!1), document.removeEventListener("pointermove", I), Y.current = null;
        };
        return Y.current !== null && (document.addEventListener("pointermove", I), document.addEventListener("pointerup", M, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", M, { capture: !0 });
        };
      }
    }, [f, z, Y]), oe(() => {
      const m = () => z(!1);
      return window.addEventListener("blur", m), window.addEventListener("resize", m), () => {
        window.removeEventListener("blur", m), window.removeEventListener("resize", m);
      };
    }, [z]);
    const [ge, de] = at((m) => {
      const I = U().filter((x) => !x.disabled), M = I.find((x) => x.ref.current === document.activeElement), C = it(I, m, M);
      C && setTimeout(() => C.ref.current.focus());
    }), ve = A(
      (m, I, M) => {
        const C = !K.current && !M;
        (d.value !== void 0 && d.value === I || C) && ($(m), C && (K.current = !0));
      },
      [d.value]
    ), xe = A(() => f == null ? void 0 : f.focus(), [f]), se = A(
      (m, I, M) => {
        const C = !K.current && !M;
        (d.value !== void 0 && d.value === I || C) && F(m);
      },
      [d.value]
    ), pe = s === "popper" ? Ce : Ke, ie = pe === Ce ? {
      side: a,
      sideOffset: r,
      align: u,
      alignOffset: g,
      arrowPadding: w,
      collisionBoundary: N,
      collisionPadding: P,
      sticky: T,
      hideWhenDetached: c,
      avoidCollisions: h
    } : {};
    return /* @__PURE__ */ n.jsx(
      Ue,
      {
        scope: e,
        content: f,
        viewport: O,
        onViewportChange: ae,
        itemRefCallback: ve,
        selectedItem: V,
        onItemLeave: xe,
        itemTextRefCallback: se,
        focusSelectedItem: H,
        selectedItemText: Q,
        position: s,
        isPositioned: G,
        searchRef: ge,
        children: /* @__PURE__ */ n.jsx(_t, { as: Yt, allowPinchZoom: !0, children: /* @__PURE__ */ n.jsx(
          Et,
          {
            asChild: !0,
            trapped: d.open,
            onMountAutoFocus: (m) => {
              m.preventDefault();
            },
            onUnmountAutoFocus: _(i, (m) => {
              var I;
              (I = d.trigger) == null || I.focus({ preventScroll: !0 }), m.preventDefault();
            }),
            children: /* @__PURE__ */ n.jsx(
              jt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: p,
                onPointerDownOutside: l,
                onFocusOutside: (m) => m.preventDefault(),
                onDismiss: () => d.onOpenChange(!1),
                children: /* @__PURE__ */ n.jsx(
                  pe,
                  {
                    role: "listbox",
                    id: d.contentId,
                    "data-state": d.open ? "open" : "closed",
                    dir: d.dir,
                    onContextMenu: (m) => m.preventDefault(),
                    ...y,
                    ...ie,
                    onPlaced: () => W(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: _(y.onKeyDown, (m) => {
                      const I = m.ctrlKey || m.altKey || m.metaKey;
                      if (m.key === "Tab" && m.preventDefault(), !I && m.key.length === 1 && de(m.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(m.key)) {
                        let C = U().filter((x) => !x.disabled).map((x) => x.ref.current);
                        if (["ArrowUp", "End"].includes(m.key) && (C = C.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(m.key)) {
                          const x = m.target, S = C.indexOf(x);
                          C = C.slice(S + 1);
                        }
                        setTimeout(() => j(C)), m.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
We.displayName = Gt;
var qt = "SelectItemAlignedPosition", Ke = v((t, o) => {
  const { __scopeSelect: e, onPlaced: s, ...i } = t, p = Z(re, e), l = J(re, e), [a, r] = b(null), [u, g] = b(null), w = k(o, (E) => g(E)), N = fe(e), P = B(!1), T = B(!0), { viewport: c, selectedItem: h, selectedItemText: y, focusSelectedItem: d } = l, f = A(() => {
    if (p.trigger && p.valueNode && a && u && c && h && y) {
      const E = p.trigger.getBoundingClientRect(), V = u.getBoundingClientRect(), $ = p.valueNode.getBoundingClientRect(), Q = y.getBoundingClientRect();
      if (p.dir !== "rtl") {
        const x = Q.left - V.left, S = $.left - x, ee = E.left - S, te = E.width + ee, Se = Math.max(te, V.width), we = window.innerWidth - L, ye = je(S, [
          L,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(L, we - Se)
        ]);
        a.style.minWidth = te + "px", a.style.left = ye + "px";
      } else {
        const x = V.right - Q.right, S = window.innerWidth - $.right - x, ee = window.innerWidth - E.right - S, te = E.width + ee, Se = Math.max(te, V.width), we = window.innerWidth - L, ye = je(S, [
          L,
          Math.max(L, we - Se)
        ]);
        a.style.minWidth = te + "px", a.style.right = ye + "px";
      }
      const F = N(), U = window.innerHeight - L * 2, G = c.scrollHeight, W = window.getComputedStyle(u), K = parseInt(W.borderTopWidth, 10), j = parseInt(W.paddingTop, 10), H = parseInt(W.borderBottomWidth, 10), z = parseInt(W.paddingBottom, 10), Y = K + j + G + z + H, ge = Math.min(h.offsetHeight * 5, Y), de = window.getComputedStyle(c), ve = parseInt(de.paddingTop, 10), xe = parseInt(de.paddingBottom, 10), se = E.top + E.height / 2 - L, pe = U - se, ie = h.offsetHeight / 2, m = h.offsetTop + ie, I = K + j + m, M = Y - I;
      if (I <= se) {
        const x = F.length > 0 && h === F[F.length - 1].ref.current;
        a.style.bottom = "0px";
        const S = u.clientHeight - c.offsetTop - c.offsetHeight, ee = Math.max(
          pe,
          ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (x ? xe : 0) + S + H
        ), te = I + ee;
        a.style.height = te + "px";
      } else {
        const x = F.length > 0 && h === F[0].ref.current;
        a.style.top = "0px";
        const ee = Math.max(
          se,
          K + c.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (x ? ve : 0) + ie
        ) + M;
        a.style.height = ee + "px", c.scrollTop = I - se + c.offsetTop;
      }
      a.style.margin = `${L}px 0`, a.style.minHeight = ge + "px", a.style.maxHeight = U + "px", s == null || s(), requestAnimationFrame(() => P.current = !0);
    }
  }, [
    N,
    p.trigger,
    p.valueNode,
    a,
    u,
    c,
    h,
    y,
    p.dir,
    s
  ]);
  X(() => f(), [f]);
  const [D, O] = b();
  X(() => {
    u && O(window.getComputedStyle(u).zIndex);
  }, [u]);
  const ae = A(
    (E) => {
      E && T.current === !0 && (f(), d == null || d(), T.current = !1);
    },
    [f, d]
  );
  return /* @__PURE__ */ n.jsx(
    Zt,
    {
      scope: e,
      contentWrapper: a,
      shouldExpandOnScrollRef: P,
      onScrollButtonChange: ae,
      children: /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: r,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: D
          },
          children: /* @__PURE__ */ n.jsx(
            R.div,
            {
              ...i,
              ref: w,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...i.style
              }
            }
          )
        }
      )
    }
  );
});
Ke.displayName = qt;
var Xt = "SelectPopperPosition", Ce = v((t, o) => {
  const {
    __scopeSelect: e,
    align: s = "start",
    collisionPadding: i = L,
    ...p
  } = t, l = he(e);
  return /* @__PURE__ */ n.jsx(
    Dt,
    {
      ...l,
      ...p,
      ref: o,
      align: s,
      collisionPadding: i,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...p.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ce.displayName = Xt;
var [Zt, _e] = le(re, {}), Ie = "SelectViewport", ze = v(
  (t, o) => {
    const { __scopeSelect: e, nonce: s, ...i } = t, p = J(Ie, e), l = _e(Ie, e), a = k(o, p.onViewportChange), r = B(0);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ n.jsx(me.Slot, { scope: e, children: /* @__PURE__ */ n.jsx(
        R.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...i,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...i.style
          },
          onScroll: _(i.onScroll, (u) => {
            const g = u.currentTarget, { contentWrapper: w, shouldExpandOnScrollRef: N } = l;
            if (N != null && N.current && w) {
              const P = Math.abs(r.current - g.scrollTop);
              if (P > 0) {
                const T = window.innerHeight - L * 2, c = parseFloat(w.style.minHeight), h = parseFloat(w.style.height), y = Math.max(c, h);
                if (y < T) {
                  const d = y + P, f = Math.min(T, d), D = d - f;
                  w.style.height = f + "px", w.style.bottom === "0px" && (g.scrollTop = D > 0 ? D : 0, w.style.justifyContent = "flex-end");
                }
              }
            }
            r.current = g.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ze.displayName = Ie;
var $e = "SelectGroup", [Jt, Qt] = le($e), Ge = v(
  (t, o) => {
    const { __scopeSelect: e, ...s } = t, i = be();
    return /* @__PURE__ */ n.jsx(Jt, { scope: e, id: i, children: /* @__PURE__ */ n.jsx(R.div, { role: "group", "aria-labelledby": i, ...s, ref: o }) });
  }
);
Ge.displayName = $e;
var Ye = "SelectLabel", qe = v(
  (t, o) => {
    const { __scopeSelect: e, ...s } = t, i = Qt(Ye, e);
    return /* @__PURE__ */ n.jsx(R.div, { id: i.id, ...s, ref: o });
  }
);
qe.displayName = Ye;
var ue = "SelectItem", [eo, Xe] = le(ue), Ze = v(
  (t, o) => {
    const {
      __scopeSelect: e,
      value: s,
      disabled: i = !1,
      textValue: p,
      ...l
    } = t, a = Z(ue, e), r = J(ue, e), u = a.value === s, [g, w] = b(p ?? ""), [N, P] = b(!1), T = k(
      o,
      (d) => {
        var f;
        return (f = r.itemRefCallback) == null ? void 0 : f.call(r, d, s, i);
      }
    ), c = be(), h = B("touch"), y = () => {
      i || (a.onValueChange(s), a.onOpenChange(!1));
    };
    if (s === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ n.jsx(
      eo,
      {
        scope: e,
        value: s,
        disabled: i,
        textId: c,
        isSelected: u,
        onItemTextChange: A((d) => {
          w((f) => f || ((d == null ? void 0 : d.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ n.jsx(
          me.ItemSlot,
          {
            scope: e,
            value: s,
            disabled: i,
            textValue: g,
            children: /* @__PURE__ */ n.jsx(
              R.div,
              {
                role: "option",
                "aria-labelledby": c,
                "data-highlighted": N ? "" : void 0,
                "aria-selected": u && N,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...l,
                ref: T,
                onFocus: _(l.onFocus, () => P(!0)),
                onBlur: _(l.onBlur, () => P(!1)),
                onClick: _(l.onClick, () => {
                  h.current !== "mouse" && y();
                }),
                onPointerUp: _(l.onPointerUp, () => {
                  h.current === "mouse" && y();
                }),
                onPointerDown: _(l.onPointerDown, (d) => {
                  h.current = d.pointerType;
                }),
                onPointerMove: _(l.onPointerMove, (d) => {
                  var f;
                  h.current = d.pointerType, i ? (f = r.onItemLeave) == null || f.call(r) : h.current === "mouse" && d.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: _(l.onPointerLeave, (d) => {
                  var f;
                  d.currentTarget === document.activeElement && ((f = r.onItemLeave) == null || f.call(r));
                }),
                onKeyDown: _(l.onKeyDown, (d) => {
                  var D;
                  ((D = r.searchRef) == null ? void 0 : D.current) !== "" && d.key === " " || (kt.includes(d.key) && y(), d.key === " " && d.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ze.displayName = ue;
var ce = "SelectItemText", Je = v(
  (t, o) => {
    const { __scopeSelect: e, className: s, style: i, ...p } = t, l = Z(ce, e), a = J(ce, e), r = Xe(ce, e), u = Kt(ce, e), [g, w] = b(null), N = k(
      o,
      (y) => w(y),
      r.onItemTextChange,
      (y) => {
        var d;
        return (d = a.itemTextRefCallback) == null ? void 0 : d.call(a, y, r.value, r.disabled);
      }
    ), P = g == null ? void 0 : g.textContent, T = xt(
      () => /* @__PURE__ */ n.jsx("option", { value: r.value, disabled: r.disabled, children: P }, r.value),
      [r.disabled, r.value, P]
    ), { onNativeOptionAdd: c, onNativeOptionRemove: h } = u;
    return X(() => (c(T), () => h(T)), [c, h, T]), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(R.span, { id: r.textId, ...p, ref: N }),
      r.isSelected && l.valueNode && !l.valueNodeHasChildren ? Me(p.children, l.valueNode) : null
    ] });
  }
);
Je.displayName = ce;
var Qe = "SelectItemIndicator", et = v(
  (t, o) => {
    const { __scopeSelect: e, ...s } = t;
    return Xe(Qe, e).isSelected ? /* @__PURE__ */ n.jsx(R.span, { "aria-hidden": !0, ...s, ref: o }) : null;
  }
);
et.displayName = Qe;
var Te = "SelectScrollUpButton", tt = v((t, o) => {
  const e = J(Te, t.__scopeSelect), s = _e(Te, t.__scopeSelect), [i, p] = b(!1), l = k(o, s.onScrollButtonChange);
  return X(() => {
    if (e.viewport && e.isPositioned) {
      let a = function() {
        const u = r.scrollTop > 0;
        p(u);
      };
      const r = e.viewport;
      return a(), r.addEventListener("scroll", a), () => r.removeEventListener("scroll", a);
    }
  }, [e.viewport, e.isPositioned]), i ? /* @__PURE__ */ n.jsx(
    nt,
    {
      ...t,
      ref: l,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: r } = e;
        a && r && (a.scrollTop = a.scrollTop - r.offsetHeight);
      }
    }
  ) : null;
});
tt.displayName = Te;
var Ne = "SelectScrollDownButton", ot = v((t, o) => {
  const e = J(Ne, t.__scopeSelect), s = _e(Ne, t.__scopeSelect), [i, p] = b(!1), l = k(o, s.onScrollButtonChange);
  return X(() => {
    if (e.viewport && e.isPositioned) {
      let a = function() {
        const u = r.scrollHeight - r.clientHeight, g = Math.ceil(r.scrollTop) < u;
        p(g);
      };
      const r = e.viewport;
      return a(), r.addEventListener("scroll", a), () => r.removeEventListener("scroll", a);
    }
  }, [e.viewport, e.isPositioned]), i ? /* @__PURE__ */ n.jsx(
    nt,
    {
      ...t,
      ref: l,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: r } = e;
        a && r && (a.scrollTop = a.scrollTop + r.offsetHeight);
      }
    }
  ) : null;
});
ot.displayName = Ne;
var nt = v((t, o) => {
  const { __scopeSelect: e, onAutoScroll: s, ...i } = t, p = J("SelectScrollButton", e), l = B(null), a = fe(e), r = A(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return oe(() => () => r(), [r]), X(() => {
    var g;
    const u = a().find((w) => w.ref.current === document.activeElement);
    (g = u == null ? void 0 : u.ref.current) == null || g.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ n.jsx(
    R.div,
    {
      "aria-hidden": !0,
      ...i,
      ref: o,
      style: { flexShrink: 0, ...i.style },
      onPointerDown: _(i.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(s, 50));
      }),
      onPointerMove: _(i.onPointerMove, () => {
        var u;
        (u = p.onItemLeave) == null || u.call(p), l.current === null && (l.current = window.setInterval(s, 50));
      }),
      onPointerLeave: _(i.onPointerLeave, () => {
        r();
      })
    }
  );
}), to = "SelectSeparator", rt = v(
  (t, o) => {
    const { __scopeSelect: e, ...s } = t;
    return /* @__PURE__ */ n.jsx(R.div, { "aria-hidden": !0, ...s, ref: o });
  }
);
rt.displayName = to;
var Pe = "SelectArrow", oo = v(
  (t, o) => {
    const { __scopeSelect: e, ...s } = t, i = he(e), p = Z(Pe, e), l = J(Pe, e);
    return p.open && l.position === "popper" ? /* @__PURE__ */ n.jsx(Ot, { ...i, ...s, ref: o }) : null;
  }
);
oo.displayName = Pe;
var no = "SelectBubbleInput", st = v(
  ({ __scopeSelect: t, value: o, ...e }, s) => {
    const i = B(null), p = k(s, i), l = Lt(o);
    return oe(() => {
      const a = i.current;
      if (!a) return;
      const r = window.HTMLSelectElement.prototype, g = Object.getOwnPropertyDescriptor(
        r,
        "value"
      ).set;
      if (l !== o && g) {
        const w = new Event("change", { bubbles: !0 });
        g.call(a, o), a.dispatchEvent(w);
      }
    }, [l, o]), /* @__PURE__ */ n.jsx(
      R.select,
      {
        ...e,
        style: { ...Bt, ...e.style },
        ref: p,
        defaultValue: o
      }
    );
  }
);
st.displayName = no;
function lt(t) {
  return t === "" || t === void 0;
}
function at(t) {
  const o = yt(t), e = B(""), s = B(0), i = A(
    (l) => {
      const a = e.current + l;
      o(a), function r(u) {
        e.current = u, window.clearTimeout(s.current), u !== "" && (s.current = window.setTimeout(() => r(""), 1e3));
      }(a);
    },
    [o]
  ), p = A(() => {
    e.current = "", window.clearTimeout(s.current);
  }, []);
  return oe(() => () => window.clearTimeout(s.current), []), [e, i, p];
}
function it(t, o, e) {
  const i = o.length > 1 && Array.from(o).every((u) => u === o[0]) ? o[0] : o, p = e ? t.indexOf(e) : -1;
  let l = ro(t, Math.max(p, 0));
  i.length === 1 && (l = l.filter((u) => u !== e));
  const r = l.find(
    (u) => u.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return r !== e ? r : void 0;
}
function ro(t, o) {
  return t.map((e, s) => t[(o + s) % t.length]);
}
var so = De, ct = Le, lo = Ve, ao = He, io = ke, dt = Fe, co = ze, po = Ge, pt = qe, ut = Ze, uo = Je, mo = et, mt = tt, ft = ot, ht = rt;
const Po = so, bo = po, _o = lo, fo = v(({ className: t, children: o, ...e }, s) => /* @__PURE__ */ n.jsxs(
  ct,
  {
    ref: s,
    className: q(
      "flex h-[34px] w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent hover:bg-accent px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...e,
    children: [
      o,
      /* @__PURE__ */ n.jsx(ao, { asChild: !0, children: /* @__PURE__ */ n.jsx(Ae, { className: "-mr-0.5 ml-1 size-4 opacity-50" }) })
    ]
  }
));
fo.displayName = ct.displayName;
const gt = v(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  mt,
  {
    ref: e,
    className: q(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...o,
    children: /* @__PURE__ */ n.jsx(Vt, { className: "size-4" })
  }
));
gt.displayName = mt.displayName;
const vt = v(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  ft,
  {
    ref: e,
    className: q(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...o,
    children: /* @__PURE__ */ n.jsx(Ae, { className: "size-4" })
  }
));
vt.displayName = ft.displayName;
const ho = v(({ className: t, children: o, position: e = "popper", ...s }, i) => /* @__PURE__ */ n.jsx(io, { children: /* @__PURE__ */ n.jsx("div", { className: St, children: /* @__PURE__ */ n.jsxs(
  dt,
  {
    ref: i,
    className: q(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      e === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: e,
    ...s,
    children: [
      /* @__PURE__ */ n.jsx(gt, {}),
      /* @__PURE__ */ n.jsx(
        co,
        {
          className: q(
            "p-1",
            e === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: o
        }
      ),
      /* @__PURE__ */ n.jsx(vt, {})
    ]
  }
) }) }));
ho.displayName = dt.displayName;
const go = v(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  pt,
  {
    ref: e,
    className: q("px-2 py-1.5 text-sm font-semibold", t),
    ...o
  }
));
go.displayName = pt.displayName;
const vo = v(({ className: t, children: o, ...e }, s) => /* @__PURE__ */ n.jsxs(
  ut,
  {
    ref: s,
    className: q(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-2 pr-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...e,
    children: [
      /* @__PURE__ */ n.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n.jsx(mo, { children: /* @__PURE__ */ n.jsx(Mt, { className: "size-4" }) }) }),
      /* @__PURE__ */ n.jsx(uo, { children: o })
    ]
  }
));
vo.displayName = ut.displayName;
const xo = v(({ className: t, ...o }, e) => /* @__PURE__ */ n.jsx(
  ht,
  {
    ref: e,
    className: q("-mx-1 my-1 h-px bg-muted", t),
    ...o
  }
));
xo.displayName = ht.displayName;
export {
  Po as S,
  fo as a,
  _o as b,
  ho as c,
  bo as d,
  go as e,
  vo as f
};
//# sourceMappingURL=select-BMPHyOdQ.mjs.map
