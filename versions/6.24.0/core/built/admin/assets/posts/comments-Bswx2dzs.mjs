import { D as S, j as e, u as _, q as D, b as B, n as w, E as es, F as L, G as F, H as Ce, J as ss, T as ts, a as P, o as z, N as T, p as H, e as as, Z as K } from "./index-By5yPnMZ.mjs";
import { u as ns, F as rs, T as q, a as W, b as Q, d as G, c as is } from "./filters-Ds_ZaYIU.mjs";
import { a as Ne, u as os, g as ls, B as cs, b as ds, c as ms, M as E, d as us } from "./use-scroll-restoration-YSR5jwQl.mjs";
import { u as hs, g as ps } from "./posts-DI5YQFp4.mjs";
import { u as xs, U as ke, d as fs, D as bs, a as js, E as gs, b as vs, c as $ } from "./dropdown-menu-BKZfsAPJ.mjs";
import { a as Cs, c as Ns, F as Y, b as ye, D as X, M as ks, H as we, R as ys, E as _e } from "./reply-B4vwBMwj.mjs";
import { C as ws, F as _s, c as Ss, a as Ps, E as Se, M as Pe } from "./search-DQuB1WMm.mjs";
import { P as Rs, C as Is, X as Es, g as Z, i as J, j as ee, k as se, l as Ls, m as te } from "./dialog-67vvNv8e.mjs";
import { H as be, u as Ts } from "./use-infinite-virtual-scroll-B_NwiBXK.mjs";
import { M as Ds } from "./main-layout-CGs25JVH.mjs";
import { d as Ms, P as ae, b as $s, h as Re, f as je, c as Fs, B as y, C as zs } from "./heading-DXxLDQ96.mjs";
import { L as M } from "./loading-indicator-CSj2spwS.mjs";
import { d as Os, b as Ie, c as ne } from "./hooks-pVotzebr.mjs";
import { E as Bs, S as Hs } from "./separator-DgZ2VF9r.mjs";
import { E as Ee } from "./empty-indicator-DTmBQa_3.mjs";
import { S as Us, b as As, c as Vs, d as qs } from "./sheet-SOdCzxUt.mjs";
var U = "Checkbox", [Ws] = Ms(U), [Qs, re] = Ws(U);
function Gs(s) {
  const {
    __scopeCheckbox: t,
    checked: a,
    children: i,
    defaultChecked: n,
    disabled: r,
    form: o,
    name: l,
    onCheckedChange: d,
    required: c,
    value: h = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = s, [f, x] = $s({
    prop: a,
    defaultProp: n ?? !1,
    onChange: d,
    caller: U
  }), [p, v] = _(null), [j, g] = _(null), b = D(!1), C = p ? !!o || !!p.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
    checked: f,
    disabled: r,
    setChecked: x,
    control: p,
    setControl: v,
    name: l,
    form: o,
    value: h,
    hasConsumerStoppedPropagationRef: b,
    required: c,
    defaultChecked: R(n) ? !1 : n,
    isFormControl: C,
    bubbleInput: j,
    setBubbleInput: g
  };
  return /* @__PURE__ */ e.jsx(
    Qs,
    {
      scope: t,
      ...N,
      children: Ks(m) ? m(N) : i
    }
  );
}
var Le = "CheckboxTrigger", Te = S(
  ({ __scopeCheckbox: s, onKeyDown: t, onClick: a, ...i }, n) => {
    const {
      control: r,
      value: o,
      disabled: l,
      checked: d,
      required: c,
      setControl: h,
      setChecked: m,
      hasConsumerStoppedPropagationRef: f,
      isFormControl: x,
      bubbleInput: p
    } = re(Le, s), v = Re(n, h), j = D(d);
    return B(() => {
      const g = r == null ? void 0 : r.form;
      if (g) {
        const b = () => m(j.current);
        return g.addEventListener("reset", b), () => g.removeEventListener("reset", b);
      }
    }, [r, m]), /* @__PURE__ */ e.jsx(
      ae.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": R(d) ? "mixed" : d,
        "aria-required": c,
        "data-state": ze(d),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: o,
        ...i,
        ref: v,
        onKeyDown: je(t, (g) => {
          g.key === "Enter" && g.preventDefault();
        }),
        onClick: je(a, (g) => {
          m((b) => R(b) ? !0 : !b), p && x && (f.current = g.isPropagationStopped(), f.current || g.stopPropagation());
        })
      }
    );
  }
);
Te.displayName = Le;
var ie = S(
  (s, t) => {
    const {
      __scopeCheckbox: a,
      name: i,
      checked: n,
      defaultChecked: r,
      required: o,
      disabled: l,
      value: d,
      onCheckedChange: c,
      form: h,
      ...m
    } = s;
    return /* @__PURE__ */ e.jsx(
      Gs,
      {
        __scopeCheckbox: a,
        checked: n,
        defaultChecked: r,
        disabled: l,
        required: o,
        onCheckedChange: c,
        name: i,
        form: h,
        value: d,
        internal_do_not_use_render: ({ isFormControl: f }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            Te,
            {
              ...m,
              ref: t,
              __scopeCheckbox: a
            }
          ),
          f && /* @__PURE__ */ e.jsx(
            Fe,
            {
              __scopeCheckbox: a
            }
          )
        ] })
      }
    );
  }
);
ie.displayName = U;
var De = "CheckboxIndicator", Me = S(
  (s, t) => {
    const { __scopeCheckbox: a, forceMount: i, ...n } = s, r = re(De, a);
    return /* @__PURE__ */ e.jsx(
      Rs,
      {
        present: i || R(r.checked) || r.checked === !0,
        children: /* @__PURE__ */ e.jsx(
          ae.span,
          {
            "data-state": ze(r.checked),
            "data-disabled": r.disabled ? "" : void 0,
            ...n,
            ref: t,
            style: { pointerEvents: "none", ...s.style }
          }
        )
      }
    );
  }
);
Me.displayName = De;
var $e = "CheckboxBubbleInput", Fe = S(
  ({ __scopeCheckbox: s, ...t }, a) => {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: n,
      checked: r,
      defaultChecked: o,
      required: l,
      disabled: d,
      name: c,
      value: h,
      form: m,
      bubbleInput: f,
      setBubbleInput: x
    } = re($e, s), p = Re(a, x), v = ns(r), j = xs(i);
    B(() => {
      const b = f;
      if (!b) return;
      const C = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, u = !n.current;
      if (v !== r && k) {
        const I = new Event("click", { bubbles: u });
        b.indeterminate = R(r), k.call(b, R(r) ? !1 : r), b.dispatchEvent(I);
      }
    }, [f, v, r, n]);
    const g = D(R(r) ? !1 : r);
    return /* @__PURE__ */ e.jsx(
      ae.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o ?? g.current,
        required: l,
        disabled: d,
        name: c,
        value: h,
        form: m,
        ...t,
        tabIndex: -1,
        ref: p,
        style: {
          ...t.style,
          ...j,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Fe.displayName = $e;
function Ks(s) {
  return typeof s == "function";
}
function R(s) {
  return s === "indeterminate";
}
function ze(s) {
  return R(s) ? "indeterminate" : s ? "checked" : "unchecked";
}
const Oe = S(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  ie,
  {
    ref: a,
    className: w(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-xs border border-primary shadow focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      s
    ),
    ...t,
    children: /* @__PURE__ */ e.jsx(
      Me,
      {
        className: w("grid place-content-center text-current"),
        children: /* @__PURE__ */ e.jsx(Is, { className: "size-4" })
      }
    )
  }
));
Oe.displayName = ie.displayName;
var Ys = Symbol.for("react.lazy"), O = es[" use ".trim().toString()];
function Xs(s) {
  return typeof s == "object" && s !== null && "then" in s;
}
function Be(s) {
  return s != null && typeof s == "object" && "$$typeof" in s && s.$$typeof === Ys && "_payload" in s && Xs(s._payload);
}
// @__NO_SIDE_EFFECTS__
function Zs(s) {
  const t = /* @__PURE__ */ Js(s), a = S((i, n) => {
    let { children: r, ...o } = i;
    Be(r) && typeof O == "function" && (r = O(r._payload));
    const l = L.toArray(r), d = l.find(st);
    if (d) {
      const c = d.props.children, h = l.map((m) => m === d ? L.count(c) > 1 ? L.only(null) : F(c) ? c.props.children : null : m);
      return /* @__PURE__ */ e.jsx(t, { ...o, ref: n, children: F(c) ? Ce(c, void 0, h) : null });
    }
    return /* @__PURE__ */ e.jsx(t, { ...o, ref: n, children: r });
  });
  return a.displayName = `${s}.Slot`, a;
}
// @__NO_SIDE_EFFECTS__
function Js(s) {
  const t = S((a, i) => {
    let { children: n, ...r } = a;
    if (Be(n) && typeof O == "function" && (n = O(n._payload)), F(n)) {
      const o = at(n), l = tt(r, n.props);
      return n.type !== ss && (l.ref = i ? Fs(i, o) : o), Ce(n, l);
    }
    return L.count(n) > 1 ? L.only(null) : null;
  });
  return t.displayName = `${s}.SlotClone`, t;
}
var et = Symbol("radix.slottable");
function st(s) {
  return F(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === et;
}
function tt(s, t) {
  const a = { ...t };
  for (const i in t) {
    const n = s[i], r = t[i];
    /^on[A-Z]/.test(i) ? n && r ? a[i] = (...l) => {
      const d = r(...l);
      return n(...l), d;
    } : n && (a[i] = n) : i === "style" ? a[i] = { ...n, ...r } : i === "className" && (a[i] = [n, r].filter(Boolean).join(" "));
  }
  return { ...s, ...a };
}
function at(s) {
  var i, n;
  let t = (i = Object.getOwnPropertyDescriptor(s.props, "ref")) == null ? void 0 : i.get, a = t && "isReactWarning" in t && t.isReactWarning;
  return a ? s.ref : (t = (n = Object.getOwnPropertyDescriptor(s, "ref")) == null ? void 0 : n.get, a = t && "isReactWarning" in t && t.isReactWarning, a ? s.props.ref : s.props.ref || s.ref);
}
var nt = [
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
  "select",
  "span",
  "svg",
  "ul"
], rt = nt.reduce((s, t) => {
  const a = /* @__PURE__ */ Zs(`Primitive.${t}`), i = S((n, r) => {
    const { asChild: o, ...l } = n, d = o ? a : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ e.jsx(d, { ...l, ref: r });
  });
  return i.displayName = `Primitive.${t}`, { ...s, [t]: i };
}, {}), it = "Label", He = S((s, t) => /* @__PURE__ */ e.jsx(
  rt.label,
  {
    ...s,
    ref: t,
    onMouseDown: (a) => {
      var n;
      a.target.closest("button, input, select, textarea") || ((n = s.onMouseDown) == null || n.call(s, a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
    }
  }
));
He.displayName = it;
var Ue = He;
const ot = ts(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ae = S(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  Ue,
  {
    ref: a,
    className: w(ot(), s),
    ...t
  }
));
Ae.displayName = Ue.displayName;
const lt = ({ children: s, className: t, ...a }) => /* @__PURE__ */ e.jsx("section", { className: w("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...a, children: s });
function ge({
  knownItems: s,
  useSearch: t,
  useGetById: a,
  filters: i,
  filterFieldName: n,
  searchFieldName: r,
  toOption: o
}) {
  const [l, d] = _(""), { data: c, isLoading: h } = t(l), m = P(() => {
    const b = i.find((C) => C.field === n);
    return b != null && b.values[0] ? String(b.values[0]) : "";
  }, [i, n]), f = P(() => !m || s.some((C) => C.id === m) ? !1 : !((c == null ? void 0 : c[r]) ?? []).some((C) => C.id === m), [m, s, c, r]), { data: x, isLoading: p } = a(m || "", {
    enabled: f,
    defaultErrorHandler: !1
  }), v = h || p, j = z((b) => o(b), [o]);
  return {
    options: P(() => {
      var k;
      const b = (c == null ? void 0 : c[r]) ?? [], C = {};
      for (const u of s)
        C[u.id] = j(u);
      for (const u of b)
        C[u.id] = j(u);
      const N = (k = x == null ? void 0 : x[r]) == null ? void 0 : k[0];
      return N != null && N.id && (C[N.id] = j(N)), m && !(m in C) && (C[m] = { value: m, label: `ID: ${m}` }), Object.values(C);
    }, [s, c, r, x, m, j]),
    isLoading: v,
    searchValue: l,
    onSearchChange: d
  };
}
function ct(s) {
  const [t] = Ne(s, 200);
  return os({
    searchParams: {
      ...t && { search: t },
      limit: "100",
      order: "created_at DESC"
    }
  });
}
function dt(s) {
  const [t] = Ne(s, 200), a = t ? `title:~'${t.replace(/'/g, "\\'")}'` : "";
  return hs({
    searchParams: {
      ...a && { filter: a },
      limit: "100",
      fields: "id,title",
      order: "published_at DESC"
    }
  });
}
const mt = ({
  knownPosts: s,
  knownMembers: t,
  filters: a,
  onFiltersChange: i
}) => {
  const n = ge({
    knownItems: s,
    useSearch: dt,
    useGetById: ps,
    searchFieldName: "posts",
    filters: a,
    filterFieldName: "post",
    toOption: (c) => ({
      value: c.id,
      label: c.title || "(Untitled)"
    })
  }), r = ge({
    knownItems: t,
    useSearch: ct,
    useGetById: ls,
    searchFieldName: "members",
    filters: a,
    filterFieldName: "author",
    toOption: (c) => ({
      value: c.id,
      label: c.name || "Unknown name",
      detail: c.email ?? "(Unknown email)"
    })
  }), o = P(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ke, { className: "size-4" }),
        options: r.options,
        isLoading: r.options.length === 0 && r.isLoading,
        onSearchChange: r.onSearchChange,
        searchValue: r.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Cs, { className: "size-4" }),
        options: n.options,
        isLoading: n.options.length === 0 && n.isLoading,
        onSearchChange: n.onSearchChange,
        searchValue: n.searchValue,
        searchable: !0,
        className: "w-full max-w-80",
        popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ e.jsx(Ns, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-full max-w-48",
        popoverContentClassName: "w-full max-w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(fs, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Y, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-full max-w-32",
        icon: /* @__PURE__ */ e.jsx(ws, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [n, r]
  ), l = a.length > 0, d = w(
    "flex flex-row",
    !l && "[grid-area:actions] pt-5 justify-start sm:justify-end sm:pt-0",
    l && "col-start-1 col-end-4 row-start-3 pt-5"
  );
  return /* @__PURE__ */ e.jsx("div", { className: d, children: /* @__PURE__ */ e.jsx(
    rs,
    {
      addButtonIcon: l ? /* @__PURE__ */ e.jsx(_s, {}) : /* @__PURE__ */ e.jsx(Ss, {}),
      addButtonText: l ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${l ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ e.jsx(Es, {}),
      clearButtonText: "Clear",
      fields: o,
      filters: a,
      keyboardShortcut: "f",
      popoverAlign: l ? "start" : "end",
      showClearButton: l,
      showSearchInput: !1,
      onChange: i
    }
  ) });
}, ut = ({ children: s }) => /* @__PURE__ */ e.jsxs(be, { className: "relative pb-6! md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(be.Title, { children: "Comments" }),
  s
] }), ht = ({ children: s }) => /* @__PURE__ */ e.jsx(Ds, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: s }) }) });
function pt({ onClick: s, expanded: t }) {
  return /* @__PURE__ */ e.jsxs(
    y,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: s,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ e.jsx(Ps, {}) : /* @__PURE__ */ e.jsx(zs, {})
      ]
    }
  );
}
function Ve({ item: s }) {
  const t = D(null), [a, i] = _(!1), [n, r] = _(!1);
  return B(() => {
    if (n)
      return;
    const o = () => {
      t.current && i(t.current.scrollHeight > t.current.clientHeight);
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [s.html, n]), /* @__PURE__ */ e.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: `flex max-w-full flex-col items-start ${s.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: s.html || "" },
        ref: t,
        className: w(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          n ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    a && /* @__PURE__ */ e.jsx(pt, { expanded: n, onClick: () => r(!n) })
  ] }) });
}
const A = "CommentsResponseType", xt = Os({
  dataType: A,
  path: "/comments/",
  defaultNextPageParams: (s, t) => {
    var a, i;
    return (a = s.meta) != null && a.pagination.next ? {
      ...t,
      page: (((i = s.meta) == null ? void 0 : i.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (s) => {
    const { pages: t } = s, a = t.flatMap((n) => n.comments), i = t[t.length - 1].meta;
    return {
      comments: a,
      meta: i,
      isEnd: i ? i.pagination.pages === i.pagination.page : !0
    };
  }
}), qe = (s) => xt({
  ...s,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...s == null ? void 0 : s.searchParams
  }
}), We = Ie({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: A
  }
}), Qe = Ie({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: A
  }
}), ft = ne({
  dataType: A,
  path: (s) => `/comments/${s}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), bt = ne({
  dataType: "CommentReportsResponseType",
  path: (s) => `/comments/${s}/reports/`
}), jt = (s, t) => bt(s, { ...t }), gt = ne({
  dataType: "CommentLikesResponseType",
  path: (s) => `/comments/${s}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), vt = (s, t) => gt(s, { ...t }), Ct = (s, t) => qe({
  ...t,
  searchParams: {
    filter: `(parent_id:${s}+in_reply_to_id:null),in_reply_to_id:${s}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function Nt(s) {
  const t = new Date(s);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function Ge({
  memberName: s,
  memberId: t,
  createdAt: a,
  isHidden: i,
  canComment: n,
  onAuthorClick: r,
  postTitle: o,
  onPostClick: l,
  className: d
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: w("flex items-baseline gap-4", d), children: [
    /* @__PURE__ */ e.jsxs("div", { className: w(
      "mb-1 flex min-w-0 items-center gap-x-1 text-sm",
      i && "opacity-50"
    ), children: [
      /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap", children: t && r ? /* @__PURE__ */ e.jsx(
        y,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: r,
          children: s || "Unknown"
        }
      ) : /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold", children: s || "Unknown" }) }),
      n === !1 && /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(W, { children: [
        /* @__PURE__ */ e.jsx(Q, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ e.jsx(
          ye,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ e.jsx(G, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ e.jsx(X, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ e.jsx("div", { className: "shrink-0 whitespace-nowrap", children: a && /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(W, { children: [
        /* @__PURE__ */ e.jsx(Q, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: T(a) }) }),
        /* @__PURE__ */ e.jsx(G, { children: Nt(a) })
      ] }) }) }),
      o && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate", children: l ? /* @__PURE__ */ e.jsx(
          y,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: l,
            children: o
          }
        ) : /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: o }) })
      ] })
    ] }),
    i && /* @__PURE__ */ e.jsx(cs, { variant: "secondary", children: "Hidden" })
  ] });
}
function kt({
  open: s,
  memberName: t,
  onOpenChange: a,
  onConfirm: i
}) {
  const [n, r] = _(!1), o = (d) => {
    d || r(!1), a(d);
  }, l = () => {
    i(n), r(!1);
  };
  return /* @__PURE__ */ e.jsx(Z, { open: s, onOpenChange: o, children: /* @__PURE__ */ e.jsxs(J, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsxs(ee, { children: [
      /* @__PURE__ */ e.jsx(se, { children: "Disable comments" }),
      /* @__PURE__ */ e.jsxs(Ls, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(
        Oe,
        {
          checked: n,
          id: "hide-comments",
          onCheckedChange: (d) => r(d === !0)
        }
      ),
      /* @__PURE__ */ e.jsx(Ae, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ e.jsxs(te, { children: [
      /* @__PURE__ */ e.jsx(y, { variant: "outline", onClick: () => o(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(y, { onClick: l, children: "Disable comments" })
    ] })
  ] }) });
}
function Ke({
  comment: s
}) {
  const { mutate: t } = ds(), { mutate: a } = ms(), [i, n] = _(!1), { id: r, post: o, member: l } = s, d = o == null ? void 0 : o.url, c = l == null ? void 0 : l.id, h = l == null ? void 0 : l.can_comment, m = (x) => {
    c && (t({
      id: c,
      reason: `Disabled from comment ${r}`,
      hideComments: x
    }), n(!1));
  }, f = () => {
    c && a({ id: c });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(bs, { children: [
      /* @__PURE__ */ e.jsx(js, { asChild: !0, children: /* @__PURE__ */ e.jsx(
        y,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ e.jsx(gs, {})
        }
      ) }),
      /* @__PURE__ */ e.jsxs(vs, { align: "start", children: [
        d && /* @__PURE__ */ e.jsx($, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `${d}#ghost-comments-${r}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ e.jsx(Bs, { className: "size-4" }),
          "View on post"
        ] }) }),
        c && /* @__PURE__ */ e.jsx($, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `#/members/${c}`, children: [
          /* @__PURE__ */ e.jsx(ke, { className: "size-4" }),
          "View member"
        ] }) }),
        c && (h !== !1 ? /* @__PURE__ */ e.jsxs($, { onClick: () => n(!0), children: [
          /* @__PURE__ */ e.jsx(ye, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ e.jsxs($, { onClick: f, children: [
          /* @__PURE__ */ e.jsx(ks, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      kt,
      {
        memberName: l == null ? void 0 : l.name,
        open: i,
        onConfirm: m,
        onOpenChange: n
      }
    )
  ] });
}
function yt({ comment: s, open: t, onOpenChange: a }) {
  var d, c, h, m, f;
  const { data: i, isLoading: n } = vt(s.id, { enabled: t }), r = (i == null ? void 0 : i.comment_likes) ?? [], o = ((d = s.count) == null ? void 0 : d.likes) ?? 0, l = o - r.length;
  return /* @__PURE__ */ e.jsx(Z, { open: t, onOpenChange: a, children: /* @__PURE__ */ e.jsxs(J, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsxs(se, { children: [
      o,
      " ",
      o === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        E,
        {
          avatarImage: (c = s.member) == null ? void 0 : c.avatar_image,
          className: "shrink-0",
          memberId: (h = s.member) == null ? void 0 : h.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((m = s.member) == null ? void 0 : m.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(X, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && T(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((f = s.post) == null ? void 0 : f.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(M, { size: "md" }) }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      r.map((x) => {
        var p, v, j;
        return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ e.jsx(
                E,
                {
                  avatarImage: (p = x.member) == null ? void 0 : p.avatar_image,
                  memberId: (v = x.member) == null ? void 0 : v.id
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ e.jsx(we, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((j = x.member) == null ? void 0 : j.name) || "Deleted member" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: T(x.created_at) })
        ] }, x.id);
      }),
      l > 0 && /* @__PURE__ */ e.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        l,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsx(y, { onClick: () => a(!1), children: "OK" }) })
  ] }) });
}
function wt({ comment: s, open: t, onOpenChange: a }) {
  var l, d, c, h, m;
  const { data: i, isLoading: n } = jt(s.id, { enabled: t }), r = (i == null ? void 0 : i.comment_reports) ?? [], o = ((l = s.count) == null ? void 0 : l.reports) ?? r.length;
  return /* @__PURE__ */ e.jsx(Z, { open: t, onOpenChange: a, children: /* @__PURE__ */ e.jsxs(J, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsxs(se, { children: [
      o,
      " ",
      o === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        E,
        {
          avatarImage: (d = s.member) == null ? void 0 : d.avatar_image,
          className: "shrink-0",
          memberId: (c = s.member) == null ? void 0 : c.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((h = s.member) == null ? void 0 : h.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(X, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && T(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((m = s.post) == null ? void 0 : m.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(M, { size: "md" }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-3 pb-1", children: r.map((f) => {
      var x, p, v;
      return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                avatarImage: (x = f.member) == null ? void 0 : x.avatar_image,
                memberId: (p = f.member) == null ? void 0 : p.id
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ e.jsx(Y, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((v = f.member) == null ? void 0 : v.name) || "Deleted member" })
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: T(f.created_at) })
      ] }, f.id);
    }) }) }),
    /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsx(y, { onClick: () => a(!1), children: "OK" }) })
  ] }) });
}
function V({ icon: s, count: t, label: a, to: i, onClick: n, className: r, testId: o }) {
  const l = w("flex items-center gap-1 text-xs text-gray-800", r), d = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    s,
    /* @__PURE__ */ e.jsx("span", { children: as(t) })
  ] }), c = i || n;
  return /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(W, { children: [
    /* @__PURE__ */ e.jsx(Q, { asChild: !0, children: i ? /* @__PURE__ */ e.jsx(
      K,
      {
        className: w(l, "cursor-pointer hover:opacity-70"),
        "data-testid": o,
        to: i,
        onClick: (h) => {
          h.stopPropagation();
        },
        children: d
      }
    ) : n ? /* @__PURE__ */ e.jsx(
      "button",
      {
        className: w(l, "cursor-pointer hover:opacity-70"),
        "data-testid": o,
        type: "button",
        onClick: (h) => {
          h.stopPropagation(), n();
        },
        children: d
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: l, "data-testid": o, children: d }) }),
    /* @__PURE__ */ e.jsx(G, { children: c ? `View ${a.toLowerCase()}` : a })
  ] }) });
}
function oe(s, t) {
  if (!t)
    return;
  const a = new URLSearchParams(s);
  return a.set("thread", `is:${t}`), `?${a.toString()}`;
}
function Ye({
  comment: s,
  className: t
}) {
  var p, v, j, g, b;
  const [a] = H(), [i, n] = _(!1), [r, o] = _(!1), l = oe(a, s.id), d = ((p = s.count) == null ? void 0 : p.direct_replies) ?? ((v = s.count) == null ? void 0 : v.replies) ?? ((j = s.replies) == null ? void 0 : j.length) ?? 0, c = ((g = s.count) == null ? void 0 : g.likes) ?? 0, h = ((b = s.count) == null ? void 0 : b.reports) ?? 0, m = d > 0, f = c > 0, x = h > 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: w("flex items-center gap-6", t), children: [
      /* @__PURE__ */ e.jsx(
        V,
        {
          count: d,
          icon: /* @__PURE__ */ e.jsx(ys, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: m ? l : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        V,
        {
          count: c,
          icon: /* @__PURE__ */ e.jsx(we, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: f ? () => n(!0) : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        V,
        {
          className: x ? "font-semibold text-red" : void 0,
          count: h,
          icon: /* @__PURE__ */ e.jsx(Y, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: x ? () => o(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      yt,
      {
        comment: s,
        open: i,
        onOpenChange: n
      }
    ),
    /* @__PURE__ */ e.jsx(
      wt,
      {
        comment: s,
        open: r,
        onOpenChange: o
      }
    )
  ] });
}
function _t({ hasReplies: s }) {
  return s ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function Xe({ comment: s, isReply: t = !1, isSelectedComment: a = !1, selectedCommentId: i }) {
  var c, h, m, f, x, p, v, j;
  const [n] = H(), { mutate: r } = We(), { mutate: o } = Qe(), l = (((c = s.replies) == null ? void 0 : c.length) ?? 0) > 0 || (((h = s.count) == null ? void 0 : h.direct_replies) ?? ((m = s.count) == null ? void 0 : m.replies) ?? 0) > 0, d = !l || t ? "mb-7" : "mb-0";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex w-full flex-row ${d}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ e.jsx(
        E,
        {
          avatarImage: (f = s.member) == null ? void 0 : f.avatar_image,
          className: "mb-3 shrink-0 md:mb-4",
          isHidden: s.status === "hidden",
          memberId: (x = s.member) == null ? void 0 : x.id
        }
      ),
      /* @__PURE__ */ e.jsx(_t, { hasReplies: l && !t })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grow", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${s.id}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ e.jsx(
              Ge,
              {
                canComment: (p = s.member) == null ? void 0 : p.can_comment,
                createdAt: s.created_at,
                isHidden: s.status === "hidden",
                memberId: (v = s.member) == null ? void 0 : v.id,
                memberName: (j = s.member) == null ? void 0 : j.name
              }
            ),
            s.in_reply_to_snippet && a && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${s.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ e.jsx(
                K,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: oe(n, s.in_reply_to_id || s.parent_id) || "",
                  onClick: (g) => {
                    g.stopPropagation();
                  },
                  children: s.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(Ve, { item: s }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              s.status === "published" && /* @__PURE__ */ e.jsxs(y, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => r({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(_e, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              s.status === "hidden" && /* @__PURE__ */ e.jsxs(y, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => o({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Se, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ e.jsx(
                Ye,
                {
                  comment: s
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ke,
                {
                  comment: s
                }
              )
            ] })
          ] }),
          l && s.replies && /* @__PURE__ */ e.jsx("div", { className: "mt-7 mb-4 -ml-2 pl-2 md:mt-8 md:mb-0 md:-ml-3 md:pl-3", children: s.replies.map((g) => /* @__PURE__ */ e.jsx(
            Xe,
            {
              comment: g,
              isReply: !0,
              selectedCommentId: i
            },
            g.id
          )) })
        ]
      }
    ) })
  ] });
}
const St = ({
  selectedComment: s,
  replies: t,
  selectedCommentId: a,
  fetchNextPage: i,
  hasNextPage: n,
  isFetchingNextPage: r
}) => {
  const o = { ...s, replies: t };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ e.jsx(
      Xe,
      {
        comment: o,
        isSelectedComment: !0,
        selectedCommentId: a
      }
    ),
    n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ e.jsx(
      y,
      {
        disabled: r,
        variant: "outline",
        onClick: () => i(),
        children: r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(M, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, Pt = ({
  commentId: s,
  open: t,
  onOpenChange: a
}) => {
  var j;
  const {
    data: i,
    isLoading: n,
    isError: r,
    fetchNextPage: o,
    hasNextPage: l,
    isFetchingNextPage: d
  } = Ct(s ?? "", {
    enabled: t && !!s
  }), { data: c, isLoading: h, isError: m } = ft(s ?? "", {
    enabled: t && !!s
  }), f = n || h, x = m || r && !c, p = (j = c == null ? void 0 : c.comments) == null ? void 0 : j[0], v = (i == null ? void 0 : i.comments) || [];
  return /* @__PURE__ */ e.jsx(Us, { open: t, onOpenChange: a, children: /* @__PURE__ */ e.jsxs(As, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ e.jsx(Vs, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ e.jsx(qs, { className: "text-md", children: "Thread" }) }),
    (p == null ? void 0 : p.post) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: p.post.title }),
          p.post.excerpt && /* @__PURE__ */ e.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: p.post.excerpt })
        ] }),
        p.post.feature_image && /* @__PURE__ */ e.jsx(
          "img",
          {
            alt: p.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: p.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(Hs, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: f ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(M, { size: "lg" }) }) : x || !p ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(
      Ee,
      {
        actions: /* @__PURE__ */ e.jsx(y, { variant: "outline", onClick: () => a(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ e.jsx(Pe, {})
      }
    ) }) : /* @__PURE__ */ e.jsx(
      St,
      {
        fetchNextPage: o,
        hasNextPage: l,
        isFetchingNextPage: d,
        replies: v,
        selectedComment: p,
        selectedCommentId: s ?? ""
      }
    ) })
  ] }) });
}, ve = ({ height: s }) => /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: s } }) }), Rt = S(function(t, a) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ e.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function It({
  items: s,
  totalItems: t,
  hasNextPage: a,
  isFetchingNextPage: i,
  fetchNextPage: n,
  onAddFilter: r,
  isLoading: o
}) {
  const l = D(null), [d, c] = H(), [h, m] = _(!1), [f, x] = _(null), { mutate: p } = We(), { mutate: v } = Qe(), j = (N) => {
    if (m(N), !N) {
      const k = new URLSearchParams(d);
      k.delete("thread"), c(k, { replace: !0 });
    }
  };
  B(() => {
    const N = d.get("thread");
    if (N) {
      const k = N.match(/^is:(.+)$/);
      if (k && k[1]) {
        const u = k[1];
        x(u), m(!0);
      } else
        m(!1), x(null);
    } else
      m(!1), x(null);
  }, [d]), us({ parentRef: l, isLoading: o });
  const { visibleItems: g, spaceBefore: b, spaceAfter: C } = Ts({
    items: s,
    totalItems: t,
    hasNextPage: a,
    isFetchingNextPage: i,
    fetchNextPage: n,
    parentRef: l
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx(ve, { height: b }),
          g.map(({ key: N, virtualItem: k, item: u, props: I }) => {
            var le, ce, de, me, ue, he, pe, xe, fe;
            return k.index > s.length - 1 ? /* @__PURE__ */ e.jsx(Rt, { ...I }, N) : /* @__PURE__ */ e.jsxs(
              "div",
              {
                ...I,
                className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
                "data-testid": "comment-list-row",
                onClick: () => {
                  h && j(!1);
                },
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e.jsx(
                      E,
                      {
                        avatarImage: (le = u.member) == null ? void 0 : le.avatar_image,
                        isHidden: u.status === "hidden",
                        memberId: (ce = u.member) == null ? void 0 : ce.id
                      }
                    ),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ e.jsx(
                        Ge,
                        {
                          canComment: (de = u.member) == null ? void 0 : de.can_comment,
                          createdAt: u.created_at,
                          isHidden: u.status === "hidden",
                          memberId: (me = u.member) == null ? void 0 : me.id,
                          memberName: (ue = u.member) == null ? void 0 : ue.name,
                          postTitle: (he = u.post) == null ? void 0 : he.title,
                          onAuthorClick: (pe = u.member) != null && pe.id ? () => r("author", u.member.id) : void 0,
                          onPostClick: (xe = u.post) != null && xe.id ? () => r("post", u.post.id) : void 0
                        }
                      ),
                      u.in_reply_to_snippet && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${u.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ e.jsx(
                          K,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: oe(d, u.in_reply_to_id || u.parent_id) || "",
                            onClick: (Je) => {
                              Je.stopPropagation();
                            },
                            children: u.in_reply_to_snippet
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(Ve, { item: u }),
                      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                        u.status === "published" && /* @__PURE__ */ e.jsxs(y, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => p({ id: u.id }), children: [
                          /* @__PURE__ */ e.jsx(_e, {}),
                          "Hide"
                        ] }),
                        u.status === "hidden" && /* @__PURE__ */ e.jsxs(y, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => v({ id: u.id }), children: [
                          /* @__PURE__ */ e.jsx(Se, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          Ye,
                          {
                            className: "ml-2",
                            comment: u
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          Ke,
                          {
                            comment: u
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { children: (fe = u.post) != null && fe.feature_image ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      alt: u.post.title || "Post feature image",
                      className: `hidden aspect-video w-36 rounded object-cover lg:block ${u.status === "hidden" && "opacity-50"}`,
                      src: u.post.feature_image
                    }
                  ) : null })
                ]
              },
              N
            );
          }),
          /* @__PURE__ */ e.jsx(ve, { height: C })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      Pt,
      {
        commentId: f,
        open: h,
        onOpenChange: j
      }
    )
  ] });
}
const Ze = ["id", "status", "created_at", "body", "post", "author", "reported"];
function Et(s) {
  const t = [];
  for (const a of s)
    if (a.values[0])
      switch (a.field) {
        case "id":
          t.push(`id:'${a.values[0]}'`);
          break;
        case "status":
          t.push(`status:${a.values[0]}`);
          break;
        case "created_at":
          if (a.operator === "before" && a.values[0])
            t.push(`created_at:<'${a.values[0]}'`);
          else if (a.operator === "after" && a.values[0])
            t.push(`created_at:>'${a.values[0]}'`);
          else if (a.operator === "is" && a.values[0]) {
            const r = String(a.values[0]), o = (/* @__PURE__ */ new Date(r + "T00:00:00")).toISOString(), l = (/* @__PURE__ */ new Date(r + "T23:59:59.999")).toISOString();
            t.push(`created_at:>='${o}'+created_at:<='${l}'`);
          }
          break;
        case "body":
          const n = a.values[0].replace(/'/g, "\\'");
          a.operator === "contains" ? t.push(`html:~'${n}'`) : a.operator === "not_contains" && t.push(`html:-~'${n}'`);
          break;
        case "post":
          a.operator === "is_not" ? t.push(`post_id:-${a.values[0]}`) : t.push(`post_id:${a.values[0]}`);
          break;
        case "author":
          a.operator === "is_not" ? t.push(`member_id:-${a.values[0]}`) : t.push(`member_id:${a.values[0]}`);
          break;
        case "reported":
          a.values[0] === "true" ? t.push("count.reports:>0") : a.values[0] === "false" && t.push("count.reports:0");
          break;
      }
  return t.length ? t.join("+") : void 0;
}
function Lt(s) {
  if (!s)
    return null;
  const t = s.indexOf(":");
  return t <= 0 ? null : {
    operator: s.substring(0, t),
    value: s.substring(t + 1)
  };
}
function Tt(s) {
  const t = [];
  for (const [a, i] of s.entries()) {
    if (!Ze.includes(a) || !i)
      continue;
    const n = Lt(i);
    n && t.push({
      id: a,
      field: a,
      operator: n.operator,
      values: [n.value]
    });
  }
  return t;
}
function Dt(s) {
  const t = new URLSearchParams();
  for (const a of s)
    if (Ze.includes(a.field) && a.values[0] !== void 0) {
      const i = `${a.operator}:${String(a.values[0])}`;
      t.set(a.field, i);
    }
  return t;
}
function Mt() {
  const [s, t] = H(), a = P(() => Tt(s), [s]), i = z((l, d = {}) => {
    const c = typeof l == "function" ? l(a) : l, h = Dt(c), m = d.replace ?? !0;
    t(h, { replace: m });
  }, [a, t]), n = z(({ replace: l = !0 } = {}) => {
    t(new URLSearchParams(), { replace: l });
  }, [t]), r = P(() => Et(a), [a]), o = P(() => a.length === 1 && a[0].field === "id", [a]);
  return { filters: a, nql: r, setFilters: i, clearFilters: n, isSingleIdFilter: o };
}
function $t({ comments: s }) {
  return P(() => {
    var i, n, r;
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
    for (const o of s)
      (i = o.post) != null && i.id && ((n = o.post) != null && n.title) && t.set(o.post.id, {
        id: o.post.id,
        title: o.post.title
      }), (r = o.member) != null && r.id && a.set(o.member.id, {
        id: o.member.id,
        name: o.member.name,
        email: o.member.email
      });
    return {
      knownPosts: Array.from(t.values()),
      knownMembers: Array.from(a.values())
    };
  }, [s]);
}
const ea = () => {
  var j, g;
  const { filters: s, nql: t, setFilters: a, clearFilters: i, isSingleIdFilter: n } = Mt(), r = z((b, C, N = "is") => {
    a((k) => [...k.filter((I) => I.field !== b), is(b, N, [C])], { replace: !1 });
  }, [a]), {
    data: o,
    isError: l,
    isFetching: d,
    isFetchingNextPage: c,
    isRefetching: h,
    fetchNextPage: m,
    hasNextPage: f
  } = qe({
    searchParams: t ? { filter: t } : {},
    keepPreviousData: !0
  }), { knownPosts: x, knownMembers: p } = $t({ comments: (o == null ? void 0 : o.comments) ?? [] }), v = d && !c && !h;
  return /* @__PURE__ */ e.jsxs(ht, { children: [
    /* @__PURE__ */ e.jsx(ut, { children: !n && /* @__PURE__ */ e.jsx(
      mt,
      {
        filters: s,
        knownMembers: p,
        knownPosts: x,
        onFiltersChange: a
      }
    ) }),
    /* @__PURE__ */ e.jsx(lt, { children: v ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(M, { size: "lg" }) }) : l ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(y, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : o != null && o.comments.length ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        It,
        {
          fetchNextPage: m,
          hasNextPage: f,
          isFetchingNextPage: c,
          isLoading: d && !c,
          items: (o == null ? void 0 : o.comments) ?? [],
          totalItems: ((g = (j = o == null ? void 0 : o.meta) == null ? void 0 : j.pagination) == null ? void 0 : g.total) ?? 0,
          onAddFilter: r
        }
      ),
      n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ e.jsx(y, { variant: "outline", onClick: () => i({ replace: !1 }), children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      Ee,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ e.jsx(Pe, {})
      }
    ) }) })
  ] });
};
export {
  ea as default
};
//# sourceMappingURL=comments-Bswx2dzs.mjs.map
