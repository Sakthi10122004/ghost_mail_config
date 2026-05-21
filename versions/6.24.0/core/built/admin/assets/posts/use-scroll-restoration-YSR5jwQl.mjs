import { j as v, n as z, T as W, q as d, u as H, o as _, b as k, a as q, L as U, M as $, K as V, _ as K } from "./index-By5yPnMZ.mjs";
import { d as G, c as J, b as C, a as X } from "./hooks-pVotzebr.mjs";
import { U as Y } from "./dropdown-menu-BKZfsAPJ.mjs";
import { g as Z } from "./use-infinite-virtual-scroll-B_NwiBXK.mjs";
const ee = W(
  "inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ce({ className: e, variant: r, ...n }) {
  return /* @__PURE__ */ v.jsx("div", { className: z(ee({ variant: r }), e), ...n });
}
const M = "MembersResponseType", ie = X({
  dataType: M,
  path: "/members/"
}), ue = J({
  dataType: M,
  path: (e) => `/members/${e}/`
}), le = C({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: r }) => ({
    reason: e,
    hide_comments: r
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), me = C({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), de = G({
  dataType: M,
  path: "/members/",
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "50",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, r) => {
    var n;
    if ((n = e.meta) != null && n.pagination.next)
      return {
        ...r,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: r } = e, n = r.flatMap((s) => s.members), t = r[r.length - 1].meta;
    return {
      members: n,
      meta: t,
      isEnd: t ? t.pagination.pages === t.pagination.page : !0
    };
  }
});
function I({ filter: e, search: r, all: n }) {
  if (!n && !e && !r)
    throw new Error("Bulk operation requires a filter, search, or all flag");
  const t = {};
  return n && (t.all = "true"), e && (t.filter = e), r && (t.search = r), t;
}
const fe = C({
  method: "PUT",
  path: () => "/members/bulk/",
  body: ({ action: e }) => ({
    bulk: {
      action: e.type,
      meta: e.meta || {},
      newsletter: e.newsletter
    }
  }),
  searchParams: I,
  invalidateQueries: { dataType: M }
}), pe = C({
  method: "DELETE",
  path: () => "/members/",
  searchParams: I,
  invalidateQueries: { dataType: M }
});
function re(e, r, n, t) {
  var s = this, i = d(null), u = d(0), o = d(0), a = d(null), l = d([]), p = d(), f = d(), T = d(e), g = d(!0);
  T.current = e;
  var x = typeof window < "u", b = !r && r !== 0 && x;
  if (typeof e != "function") throw new TypeError("Expected a function");
  r = +r || 0;
  var h = !!(n = n || {}).leading, w = !("trailing" in n) || !!n.trailing, y = "maxWait" in n, Q = "debounceOnServer" in n && !!n.debounceOnServer, j = y ? Math.max(+n.maxWait || 0, r) : null;
  k(function() {
    return g.current = !0, function() {
      g.current = !1;
    };
  }, []);
  var F = q(function() {
    var B = function(c) {
      var m = l.current, E = p.current;
      return l.current = p.current = null, u.current = c, o.current = o.current || c, f.current = T.current.apply(E, m);
    }, P = function(c, m) {
      b && cancelAnimationFrame(a.current), a.current = b ? requestAnimationFrame(c) : setTimeout(c, m);
    }, A = function(c) {
      if (!g.current) return !1;
      var m = c - i.current;
      return !i.current || m >= r || m < 0 || y && c - u.current >= j;
    }, N = function(c) {
      return a.current = null, w && l.current ? B(c) : (l.current = p.current = null, f.current);
    }, D = function c() {
      var m = Date.now();
      if (h && o.current === u.current && L(), A(m)) return N(m);
      if (g.current) {
        var E = r - (m - i.current), O = y ? Math.min(E, j - (m - u.current)) : E;
        P(c, O);
      }
    }, L = function() {
      t && t({});
    }, S = function() {
      if (x || Q) {
        var c = Date.now(), m = A(c);
        if (l.current = [].slice.call(arguments), p.current = s, i.current = c, m) {
          if (!a.current && g.current) return u.current = i.current, P(D, r), h ? B(i.current) : f.current;
          if (y) return P(D, r), B(i.current);
        }
        return a.current || P(D, r), f.current;
      }
    };
    return S.cancel = function() {
      var c = a.current;
      c && (b ? cancelAnimationFrame(a.current) : clearTimeout(a.current)), u.current = 0, l.current = i.current = p.current = a.current = null, c && t && t({});
    }, S.isPending = function() {
      return !!a.current;
    }, S.flush = function() {
      return a.current ? N(Date.now()) : f.current;
    }, S;
  }, [h, y, r, j, w, b, x, Q, t]);
  return F;
}
function te(e, r) {
  return e === r;
}
function ge(e, r, n) {
  var t = te, s = d(e), i = H({})[1], u = re(_(function(a) {
    s.current = a, i({});
  }, [i]), r, n, i), o = d(e);
  return t(o.current, e) || (u(e), o.current = e), [s.current, u];
}
function be({ avatarImage: e, memberId: r, memberName: n, memberEmail: t, isHidden: s, className: i }) {
  const u = { name: n || void 0, email: t || void 0 }, o = !!(n || t), a = o ? U(u) : null, l = o ? $(V(u), "75", "55") : void 0;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: z(
        "relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full md:size-8 md:min-w-8",
        !o && "bg-accent",
        s && "opacity-50",
        i
      ),
      style: o ? { backgroundColor: l } : void 0,
      children: [
        a ? /* @__PURE__ */ v.jsx("span", { className: "text-xs font-semibold text-white md:text-sm", children: a }) : /* @__PURE__ */ v.jsx(Y, { className: "size-3! text-muted-foreground md:size-4!", size: 12 }),
        r && e && /* @__PURE__ */ v.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ v.jsx("img", { alt: "Member avatar", src: e }) })
      ]
    }
  );
}
const R = /* @__PURE__ */ new Map();
function he({ parentRef: e, enabled: r = !0, isLoading: n = !1 }) {
  const t = K(), [s, i] = H(null), u = d(null);
  k(() => {
    if (!r || !e.current)
      return;
    const o = Z(e.current);
    i(o);
  }, [r, e]), k(() => {
    if (!r || !s)
      return;
    const o = t.pathname + t.search, a = () => {
      const l = s.scrollTop;
      R.set(o, l);
    };
    return s.addEventListener("scroll", a), () => s.removeEventListener("scroll", a);
  }, [r, t.pathname, t.search, s]), k(() => {
    const o = t.pathname + t.search, a = R.get(o);
    if (!(!r || !s || n)) {
      if (a !== void 0 && u.current !== o) {
        let l = 0;
        const p = 3, f = () => {
          if (l += 1, !s)
            return;
          const g = s.scrollTop, x = s.scrollHeight, b = s.clientHeight, h = x - b;
          if (a > h && l < p) {
            setTimeout(f, 100);
            return;
          }
          if (Math.abs(a - g) > 5) {
            const w = Math.min(a, h);
            s.scrollTop = w;
          }
        }, T = setTimeout(f, 150);
        return () => clearTimeout(T);
      }
      u.current = o;
    }
  }, [r, t.pathname, t.search, s, n]);
}
export {
  ce as B,
  be as M,
  ge as a,
  le as b,
  me as c,
  he as d,
  fe as e,
  pe as f,
  ue as g,
  de as h,
  ie as u
};
//# sourceMappingURL=use-scroll-restoration-YSR5jwQl.mjs.map
