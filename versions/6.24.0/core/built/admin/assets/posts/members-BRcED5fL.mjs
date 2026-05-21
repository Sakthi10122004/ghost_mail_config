var ei = Object.defineProperty;
var ti = (e, t, r) => t in e ? ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Bn = (e, t, r) => ti(e, typeof t != "symbol" ? t + "" : t, r);
import { D as gr, j as a, n as Oe, T as ao, a as de, q as Pe, $ as io, b as Te, o as re, Q as ri, R as _e, J as ni, u as ie, l as lo, m as hn, a0 as Fe, a1 as Ne, a2 as mn, p as co } from "./index-By5yPnMZ.mjs";
import { B as se } from "./heading-DXxLDQ96.mjs";
import { X as yr, _ as bt, n as vt, o as Vn, p as Wn, C as Gn, g as Ot, i as Pt, j as Dt, k as Nt, m as Ve, l as si } from "./dialog-67vvNv8e.mjs";
import { B as uo, u as oi, e as ai, f as ii, a as li, M as ci, d as ui, h as fi } from "./use-scroll-restoration-YSR5jwQl.mjs";
import { P as fo, e as po, f as ho, C as gn, g as yn, h as mo, i as Kn, j as bn, k as di, F as pi } from "./filters-Ds_ZaYIU.mjs";
import { S as go, P as hi, M as mi, C as gi, E as yi, F as bi, c as vi } from "./search-DQuB1WMm.mjs";
import { P as _i, T as wi } from "./tags-CLyaNf39.mjs";
import { a as vn, b as _n, g as xi, d as yo, e as Ei, u as wn } from "./hooks-pVotzebr.mjs";
import { l as fe, j as bo, k as vo, c as Si, D as ji, T as _o, g as ki, i as Ai, N as Oi, h as Pi, M as Di, P as Ni, f as Ti, S as Ri, A as Ii, C as $i, b as Ci, a as zi, d as Fi, e as Li, U as Hn } from "./index-DZ1HzbGS.mjs";
import { L as nr } from "./loading-indicator-CSj2spwS.mjs";
import { S as Mi, a as Ui, b as Zi, c as Bi, f as Yn } from "./select-BMPHyOdQ.mjs";
import { T as wo, a as xo, b as dt, c as Be, d as Eo, e as ze } from "./table-DlaJMBps.mjs";
import { C as Vi, D as Wi, a as Gi, E as Ki, b as Hi, c as nt, f as qn, U as Yi } from "./dropdown-menu-BKZfsAPJ.mjs";
import { I as So } from "./input-DdXe2Fjm.mjs";
import { a as Tt, g as it, b as jo, u as qi } from "./settings-D-wnf7Qg.mjs";
import { U as Ji, M as Qi, g as ko } from "./get-site-timezone-D75cHSJ1.mjs";
import { u as Xi } from "./posts-DI5YQFp4.mjs";
import { H as sr, u as el } from "./use-infinite-virtual-scroll-B_NwiBXK.mjs";
import { E as Jn } from "./empty-indicator-DTmBQa_3.mjs";
function tl(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
function xt(e) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(e);
}
const rl = "OffersResponseType", nl = vn({
  dataType: rl,
  path: "/offers/",
  // offers endpoint doesn't support limit or pagination so we exclude the default ?limit=20
  defaultSearchParams: {}
}), sl = ao(
  "relative block rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-border bg-background shadow-sm hover:shadow-md dark:border-gray-900 dark:bg-gray-925",
        gradient: [
          "cursor-pointer border border-gray-100 bg-white dark:border-gray-950 dark:bg-black",
          "shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_28%),7px_6px_42px_8px_rgb(202_103_255_/_32%)]",
          "dark:shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_36%),7px_6px_42px_8px_rgb(202_103_255_/_38%)]",
          "hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_38%),7px_8px_42px_10px_rgb(202_103_255_/_42%)]",
          "dark:hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_50%),7px_8px_42px_10px_rgb(202_103_255_/_52%)]",
          "hover:translate-y-[-2px] hover:scale-[1.01]"
        ],
        info: "border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30",
        success: "border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30",
        warning: "border border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30",
        destructive: "bg-white shadow-sm dark:bg-gray-950"
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-3",
        lg: "p-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), Ao = gr(
  (e, t) => {
    const {
      variant: r,
      size: n,
      dismissible: s = !1,
      onDismiss: o,
      role: i = "status",
      className: l,
      children: c,
      ...u
    } = e, h = (y) => {
      y.preventDefault(), y.stopPropagation(), s && o && o();
    };
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: t,
        className: Oe(sl({ variant: r, size: n }), l),
        role: i,
        ...u,
        children: [
          s && /* @__PURE__ */ a.jsx(
            se,
            {
              "aria-label": "Dismiss notification",
              className: "absolute top-1 right-1 size-8 text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
              size: "icon",
              variant: "ghost",
              onClick: h,
              children: /* @__PURE__ */ a.jsx(yr, { className: "size-5" })
            }
          ),
          c
        ]
      }
    );
  }
);
Ao.displayName = "Banner";
var ol = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function Rt(e, t) {
  var r = al(e);
  if (typeof r.path != "string") {
    var n = e.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value: typeof t == "string" ? t : typeof n == "string" && n.length > 0 ? n : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
function al(e) {
  var t = e.name, r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(), s = ol.get(n);
    s && Object.defineProperty(e, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var il = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function ll(e) {
  return bt(this, void 0, void 0, function() {
    return vt(this, function(t) {
      return or(e) && cl(e.dataTransfer) ? [2, pl(e.dataTransfer, e.type)] : ul(e) ? [2, fl(e)] : Array.isArray(e) && e.every(function(r) {
        return "getFile" in r && typeof r.getFile == "function";
      }) ? [2, dl(e)] : [2, []];
    });
  });
}
function cl(e) {
  return or(e);
}
function ul(e) {
  return or(e) && or(e.target);
}
function or(e) {
  return typeof e == "object" && e !== null;
}
function fl(e) {
  return qr(e.target.files).map(function(t) {
    return Rt(t);
  });
}
function dl(e) {
  return bt(this, void 0, void 0, function() {
    var t;
    return vt(this, function(r) {
      switch (r.label) {
        case 0:
          return [4, Promise.all(e.map(function(n) {
            return n.getFile();
          }))];
        case 1:
          return t = r.sent(), [2, t.map(function(n) {
            return Rt(n);
          })];
      }
    });
  });
}
function pl(e, t) {
  return bt(this, void 0, void 0, function() {
    var r, n;
    return vt(this, function(s) {
      switch (s.label) {
        case 0:
          return e.items ? (r = qr(e.items).filter(function(o) {
            return o.kind === "file";
          }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(hl))]) : [3, 2];
        case 1:
          return n = s.sent(), [2, Qn(Oo(n))];
        case 2:
          return [2, Qn(qr(e.files).map(function(o) {
            return Rt(o);
          }))];
      }
    });
  });
}
function Qn(e) {
  return e.filter(function(t) {
    return il.indexOf(t.name) === -1;
  });
}
function qr(e) {
  if (e === null)
    return [];
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function hl(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Xn(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Po(t) : Xn(e);
}
function Oo(e) {
  return e.reduce(function(t, r) {
    return Vn(Vn([], Wn(t), !1), Wn(Array.isArray(r) ? Oo(r) : [r]), !1);
  }, []);
}
function Xn(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject("".concat(e, " is not a File"));
  var r = Rt(t);
  return Promise.resolve(r);
}
function ml(e) {
  return bt(this, void 0, void 0, function() {
    return vt(this, function(t) {
      return [2, e.isDirectory ? Po(e) : gl(e)];
    });
  });
}
function Po(e) {
  var t = e.createReader();
  return new Promise(function(r, n) {
    var s = [];
    function o() {
      var i = this;
      t.readEntries(function(l) {
        return bt(i, void 0, void 0, function() {
          var c, u, h;
          return vt(this, function(y) {
            switch (y.label) {
              case 0:
                if (l.length) return [3, 5];
                y.label = 1;
              case 1:
                return y.trys.push([1, 3, , 4]), [4, Promise.all(s)];
              case 2:
                return c = y.sent(), r(c), [3, 4];
              case 3:
                return u = y.sent(), n(u), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                h = Promise.all(l.map(ml)), s.push(h), o(), y.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(l) {
        n(l);
      });
    }
    o();
  });
}
function gl(e) {
  return bt(this, void 0, void 0, function() {
    return vt(this, function(t) {
      return [2, new Promise(function(r, n) {
        e.file(function(s) {
          var o = Rt(s, e.fullPath);
          r(o);
        }, function(s) {
          n(s);
        });
      })];
    });
  });
}
var yl = function(e, t) {
  if (e && t) {
    var r = Array.isArray(t) ? t : t.split(",");
    if (r.length === 0)
      return !0;
    var n = e.name || "", s = (e.type || "").toLowerCase(), o = s.replace(/\/.*$/, "");
    return r.some(function(i) {
      var l = i.trim().toLowerCase();
      return l.charAt(0) === "." ? n.toLowerCase().endsWith(l) : l.endsWith("/*") ? o === l.replace(/\/.*$/, "") : s === l;
    });
  }
  return !0;
};
function es(e) {
  return _l(e) || vl(e) || No(e) || bl();
}
function bl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _l(e) {
  if (Array.isArray(e)) return Jr(e);
}
function ts(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ts(Object(r), !0).forEach(function(n) {
      Do(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Do(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Et(e, t) {
  return El(e) || xl(e, t) || No(e, t) || wl();
}
function wl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function No(e, t) {
  if (e) {
    if (typeof e == "string") return Jr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jr(e, t);
  }
}
function Jr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function xl(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], s = !0, o = !1, i, l;
    try {
      for (r = r.call(e); !(s = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); s = !0)
        ;
    } catch (c) {
      o = !0, l = c;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function El(e) {
  if (Array.isArray(e)) return e;
}
var Sl = "file-invalid-type", jl = "file-too-large", kl = "file-too-small", Al = "too-many-files", Ol = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var r = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: Sl,
    message: "File type must be ".concat(r)
  };
}, ns = function(t) {
  return {
    code: jl,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, ss = function(t) {
  return {
    code: kl,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Pl = {
  code: Al,
  message: "Too many files"
};
function To(e, t) {
  var r = e.type === "application/x-moz-file" || yl(e, t);
  return [r, r ? null : Ol(t)];
}
function Ro(e, t, r) {
  if (Qe(e.size))
    if (Qe(t) && Qe(r)) {
      if (e.size > r) return [!1, ns(r)];
      if (e.size < t) return [!1, ss(t)];
    } else {
      if (Qe(t) && e.size < t) return [!1, ss(t)];
      if (Qe(r) && e.size > r) return [!1, ns(r)];
    }
  return [!0, null];
}
function Qe(e) {
  return e != null;
}
function Dl(e) {
  var t = e.files, r = e.accept, n = e.minSize, s = e.maxSize, o = e.multiple, i = e.maxFiles, l = e.validator;
  return !o && t.length > 1 || o && i >= 1 && t.length > i ? !1 : t.every(function(c) {
    var u = To(c, r), h = Et(u, 1), y = h[0], _ = Ro(c, n, s), S = Et(_, 1), P = S[0], k = l ? l(c) : null;
    return y && P && !k;
  });
}
function ar(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Ut(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function os(e) {
  e.preventDefault();
}
function Nl(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Tl(e) {
  return e.indexOf("Edge/") !== -1;
}
function Rl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Nl(e) || Tl(e);
}
function Le() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
      o[i - 1] = arguments[i];
    return t.some(function(l) {
      return !ar(n) && l && l.apply(void 0, [n].concat(o)), ar(n);
    });
  };
}
function Il() {
  return "showOpenFilePicker" in window;
}
function $l(e) {
  if (Qe(e)) {
    var t = Object.entries(e).filter(function(r) {
      var n = Et(r, 2), s = n[0], o = n[1], i = !0;
      return Io(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(o) || !o.every($o)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(r, n) {
      var s = Et(n, 2), o = s[0], i = s[1];
      return rs(rs({}, r), {}, Do({}, o, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function Cl(e) {
  if (Qe(e))
    return Object.entries(e).reduce(function(t, r) {
      var n = Et(r, 2), s = n[0], o = n[1];
      return [].concat(es(t), [s], es(o));
    }, []).filter(function(t) {
      return Io(t) || $o(t);
    }).join(",");
}
function zl(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Fl(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Io(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || /\w+\/[-+.\w]+/g.test(e);
}
function $o(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Ll = ["children"], Ml = ["open"], Ul = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Zl = ["refKey", "onChange", "onClick"];
function Bl(e) {
  return Gl(e) || Wl(e) || Co(e) || Vl();
}
function Vl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gl(e) {
  if (Array.isArray(e)) return Qr(e);
}
function $r(e, t) {
  return Yl(e) || Hl(e, t) || Co(e, t) || Kl();
}
function Kl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Co(e, t) {
  if (e) {
    if (typeof e == "string") return Qr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qr(e, t);
  }
}
function Qr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Hl(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], s = !0, o = !1, i, l;
    try {
      for (r = r.call(e); !(s = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); s = !0)
        ;
    } catch (c) {
      o = !0, l = c;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function Yl(e) {
  if (Array.isArray(e)) return e;
}
function as(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? as(Object(r), !0).forEach(function(n) {
      Xr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : as(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ir(e, t) {
  if (e == null) return {};
  var r = ql(e, t), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (s = 0; s < o.length; s++)
      n = o[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ql(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), s, o;
  for (o = 0; o < n.length; o++)
    s = n[o], !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var xn = /* @__PURE__ */ gr(function(e, t) {
  var r = e.children, n = ir(e, Ll), s = Fo(n), o = s.open, i = ir(s, Ml);
  return ri(t, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ _e.createElement(ni, null, r(ge(ge({}, i), {}, {
    open: o
  })));
});
xn.displayName = "Dropzone";
var zo = {
  disabled: !1,
  getFilesFromEvent: ll,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1
};
xn.defaultProps = zo;
xn.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: fe.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: fe.objectOf(fe.arrayOf(fe.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: fe.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: fe.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: fe.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: fe.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: fe.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: fe.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: fe.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: fe.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: fe.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: fe.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: fe.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: fe.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: fe.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: fe.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: fe.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: fe.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: fe.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: fe.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: fe.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: fe.func
};
var en = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Fo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ge(ge({}, zo), e), r = t.accept, n = t.disabled, s = t.getFilesFromEvent, o = t.maxSize, i = t.minSize, l = t.multiple, c = t.maxFiles, u = t.onDragEnter, h = t.onDragLeave, y = t.onDragOver, _ = t.onDrop, S = t.onDropAccepted, P = t.onDropRejected, k = t.onFileDialogCancel, A = t.onFileDialogOpen, M = t.useFsAccessApi, L = t.autoFocus, U = t.preventDropOnDocument, F = t.noClick, I = t.noKeyboard, z = t.noDrag, T = t.noDragEventsBubbling, p = t.onError, d = t.validator, j = de(function() {
    return Cl(r);
  }, [r]), O = de(function() {
    return $l(r);
  }, [r]), g = de(function() {
    return typeof A == "function" ? A : is;
  }, [A]), b = de(function() {
    return typeof k == "function" ? k : is;
  }, [k]), x = Pe(null), $ = Pe(null), N = io(Jl, en), m = $r(N, 2), ne = m[0], Z = m[1], R = ne.isFocused, le = ne.isFileDialogActive, f = Pe(typeof window < "u" && window.isSecureContext && M && Il()), v = function() {
    !f.current && le && setTimeout(function() {
      if ($.current) {
        var G = $.current.files;
        G.length || (Z({
          type: "closeDialog"
        }), b());
      }
    }, 300);
  };
  Te(function() {
    return window.addEventListener("focus", v, !1), function() {
      window.removeEventListener("focus", v, !1);
    };
  }, [$, le, b, f]);
  var w = Pe([]), W = function(G) {
    x.current && x.current.contains(G.target) || (G.preventDefault(), w.current = []);
  };
  Te(function() {
    return U && (document.addEventListener("dragover", os, !1), document.addEventListener("drop", W, !1)), function() {
      U && (document.removeEventListener("dragover", os), document.removeEventListener("drop", W));
    };
  }, [x, U]), Te(function() {
    return !n && L && x.current && x.current.focus(), function() {
    };
  }, [x, L, n]);
  var K = re(function(B) {
    p ? p(B) : console.error(B);
  }, [p]), q = re(function(B) {
    B.preventDefault(), B.persist(), ve(B), w.current = [].concat(Bl(w.current), [B.target]), Ut(B) && Promise.resolve(s(B)).then(function(G) {
      if (!(ar(B) && !T)) {
        var ce = G.length, ue = ce > 0 && Dl({
          files: G,
          accept: j,
          minSize: i,
          maxSize: o,
          multiple: l,
          maxFiles: c,
          validator: d
        }), Ae = ce > 0 && !ue;
        Z({
          isDragAccept: ue,
          isDragReject: Ae,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(B);
      }
    }).catch(function(G) {
      return K(G);
    });
  }, [s, u, K, T, j, i, o, l, c, d]), H = re(function(B) {
    B.preventDefault(), B.persist(), ve(B);
    var G = Ut(B);
    if (G && B.dataTransfer)
      try {
        B.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return G && y && y(B), !1;
  }, [y, T]), C = re(function(B) {
    B.preventDefault(), B.persist(), ve(B);
    var G = w.current.filter(function(ue) {
      return x.current && x.current.contains(ue);
    }), ce = G.indexOf(B.target);
    ce !== -1 && G.splice(ce, 1), w.current = G, !(G.length > 0) && (Z({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Ut(B) && h && h(B));
  }, [x, h, T]), V = re(function(B, G) {
    var ce = [], ue = [];
    B.forEach(function(Ae) {
      var $e = To(Ae, j), Ce = $r($e, 2), Ue = Ce[0], Pr = Ce[1], Dr = Ro(Ae, i, o), Mt = $r(Dr, 2), Nr = Mt[0], Tr = Mt[1], Rr = d ? d(Ae) : null;
      if (Ue && Nr && !Rr)
        ce.push(Ae);
      else {
        var Ir = [Pr, Tr];
        Rr && (Ir = Ir.concat(Rr)), ue.push({
          file: Ae,
          errors: Ir.filter(function(Xa) {
            return Xa;
          })
        });
      }
    }), (!l && ce.length > 1 || l && c >= 1 && ce.length > c) && (ce.forEach(function(Ae) {
      ue.push({
        file: Ae,
        errors: [Pl]
      });
    }), ce.splice(0)), Z({
      acceptedFiles: ce,
      fileRejections: ue,
      type: "setFiles"
    }), _ && _(ce, ue, G), ue.length > 0 && P && P(ue, G), ce.length > 0 && S && S(ce, G);
  }, [Z, l, j, i, o, c, _, S, P, d]), J = re(function(B) {
    B.preventDefault(), B.persist(), ve(B), w.current = [], Ut(B) && Promise.resolve(s(B)).then(function(G) {
      ar(B) && !T || V(G, B);
    }).catch(function(G) {
      return K(G);
    }), Z({
      type: "reset"
    });
  }, [s, V, K, T]), Q = re(function() {
    if (f.current) {
      Z({
        type: "openDialog"
      }), g();
      var B = {
        multiple: l,
        types: O
      };
      window.showOpenFilePicker(B).then(function(G) {
        return s(G);
      }).then(function(G) {
        V(G, null), Z({
          type: "closeDialog"
        });
      }).catch(function(G) {
        zl(G) ? (b(G), Z({
          type: "closeDialog"
        })) : Fl(G) ? (f.current = !1, $.current ? ($.current.value = null, $.current.click()) : K(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : K(G);
      });
      return;
    }
    $.current && (Z({
      type: "openDialog"
    }), g(), $.current.value = null, $.current.click());
  }, [Z, g, b, M, V, K, O, l]), X = re(function(B) {
    !x.current || !x.current.isEqualNode(B.target) || (B.key === " " || B.key === "Enter" || B.keyCode === 32 || B.keyCode === 13) && (B.preventDefault(), Q());
  }, [x, Q]), te = re(function() {
    Z({
      type: "focus"
    });
  }, []), ae = re(function() {
    Z({
      type: "blur"
    });
  }, []), Y = re(function() {
    F || (Rl() ? setTimeout(Q, 0) : Q());
  }, [F, Q]), xe = function(G) {
    return n ? null : G;
  }, be = function(G) {
    return I ? null : xe(G);
  }, E = function(G) {
    return z ? null : xe(G);
  }, ve = function(G) {
    T && G.stopPropagation();
  }, Re = de(function() {
    return function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = B.refKey, ce = G === void 0 ? "ref" : G, ue = B.role, Ae = B.onKeyDown, $e = B.onFocus, Ce = B.onBlur, Ue = B.onClick, Pr = B.onDragEnter, Dr = B.onDragOver, Mt = B.onDragLeave, Nr = B.onDrop, Tr = ir(B, Ul);
      return ge(ge(Xr({
        onKeyDown: be(Le(Ae, X)),
        onFocus: be(Le($e, te)),
        onBlur: be(Le(Ce, ae)),
        onClick: xe(Le(Ue, Y)),
        onDragEnter: E(Le(Pr, q)),
        onDragOver: E(Le(Dr, H)),
        onDragLeave: E(Le(Mt, C)),
        onDrop: E(Le(Nr, J)),
        role: typeof ue == "string" && ue !== "" ? ue : "presentation"
      }, ce, x), !n && !I ? {
        tabIndex: 0
      } : {}), Tr);
    };
  }, [x, X, te, ae, Y, q, H, C, J, I, z, n]), De = re(function(B) {
    B.stopPropagation();
  }, []), Se = de(function() {
    return function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = B.refKey, ce = G === void 0 ? "ref" : G, ue = B.onChange, Ae = B.onClick, $e = ir(B, Zl), Ce = Xr({
        accept: j,
        multiple: l,
        type: "file",
        style: {
          display: "none"
        },
        onChange: xe(Le(ue, J)),
        onClick: xe(Le(Ae, De)),
        tabIndex: -1
      }, ce, $);
      return ge(ge({}, Ce), $e);
    };
  }, [$, r, l, J, n]);
  return ge(ge({}, ne), {}, {
    isFocused: R && !n,
    getRootProps: Re,
    getInputProps: Se,
    rootRef: x,
    inputRef: $,
    open: xe(Q)
  });
}
function Jl(e, t) {
  switch (t.type) {
    case "focus":
      return ge(ge({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ge(ge({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ge(ge({}, en), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ge(ge({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ge(ge({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return ge(ge({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections
      });
    case "reset":
      return ge({}, en);
    default:
      return e;
  }
}
function is() {
}
const Lo = gr(({
  accept: e,
  multiple: t = !1,
  maxFiles: r = t ? 0 : 1,
  disabled: n = !1,
  onDropAccepted: s,
  onDropRejected: o,
  className: i,
  children: l,
  ...c
}, u) => {
  const {
    getRootProps: h,
    getInputProps: y,
    rootRef: _,
    isDragActive: S,
    isDragAccept: P,
    isDragReject: k,
    isFocused: A,
    isFileDialogActive: M,
    open: L
  } = Fo({
    accept: e,
    multiple: t,
    maxFiles: r,
    disabled: n,
    onDropAccepted: s,
    onDropRejected: o
  }), U = typeof l == "function" ? l({ isDragActive: S, isDragAccept: P, isDragReject: k, isFocused: A, isFileDialogActive: M, open: L }) : l, F = (p) => {
    _.current = p, typeof u == "function" ? u(p) : u && (u.current = p);
  }, I = h({
    ...c,
    role: "button",
    tabIndex: n ? -1 : 0,
    "aria-disabled": n,
    className: Oe(
      "flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-10 transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      n && "cursor-not-allowed opacity-60 pointer-events-none",
      k && "border-red-500 bg-red-50 dark:bg-red-950/20",
      S && !k && !n && "border-green-500 bg-green-50 dark:bg-green-950/20",
      !S && (n ? "border-grey-300" : "border-grey-300 hover:border-grey-400"),
      i
    )
  }), { ref: z, ...T } = I;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: F,
      ...T,
      children: [
        /* @__PURE__ */ a.jsx("input", { ...y() }),
        U
      ]
    }
  );
});
Lo.displayName = "Dropzone";
function Ql({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: Oe(
        "group/input-group dark:bg-input/30 border-transparent bg-gray-150 dark:bg-gray-900 relative flex w-full items-center rounded-md border outline-hidden transition-[color,box-shadow]",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:outline-hidden has-[[data-slot=input-group-control]:focus-visible]:bg-transparent has-[[data-slot=input-group-control]:focus-visible]:border-green has-[[data-slot=input-group-control]:focus-visible]:shadow-[0_0_0_2px_rgba(48,207,67,.25)]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        e
      ),
      "data-slot": "input-group",
      role: "group",
      ...t
    }
  );
}
const Xl = ao(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--input-group-radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function ec({
  className: e,
  align: t = "inline-start",
  ...r
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: Oe(Xl({ align: t }), e),
      "data-align": t,
      "data-slot": "input-group-addon",
      role: "group",
      onClick: (n) => {
        var s;
        if (n.target.closest("button"))
          return;
        const o = (s = n.currentTarget.closest('[data-slot="input-group"]')) == null ? void 0 : s.querySelector('[data-slot="input-group-control"]');
        o == null || o.focus();
      },
      ...r
    }
  );
}
function tc({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    So,
    {
      className: Oe(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-hidden focus-visible:shadow-none dark:bg-transparent",
        e
      ),
      "data-slot": "input-group-control",
      ...t
    }
  );
}
const rc = ({ label: e, onSave: t, onCancel: r, onDelete: n, isDuplicateName: s }) => {
  const [o, i] = ie(e.name), [l, c] = ie(!1), [u, h] = ie(""), [y, _] = ie(!1), [S, P] = ie(!1), k = Pe(null), A = y || S;
  Te(() => {
    var I, z;
    (I = k.current) == null || I.focus(), (z = k.current) == null || z.select();
  }, []);
  const M = (I) => {
    const z = I.trim();
    return z ? s != null && s(z, e.id) ? "A label with this name already exists" : "" : "Name is required";
  }, L = async () => {
    const I = M(o);
    if (I) {
      h(I);
      return;
    }
    _(!0);
    try {
      await t(e.id, o.trim()), r();
    } catch {
      _(!1);
    }
  }, U = (I) => {
    I.key === "Enter" ? (I.preventDefault(), L()) : I.key === "Escape" && (I.preventDefault(), A || r());
  }, F = async () => {
    P(!0);
    try {
      await n(e.id);
    } catch {
      P(!1), c(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-2 py-1.5", "data-edit-row": !0, children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        ref: k,
        className: "h-7 w-full rounded border border-border bg-background px-2 text-sm outline-hidden focus:ring-1 focus:ring-ring disabled:opacity-50",
        disabled: A,
        type: "text",
        value: o,
        onChange: (I) => {
          i(I.target.value), h("");
        },
        onKeyDown: U
      }
    ),
    u && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-destructive", children: u }),
    l ? /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
      /* @__PURE__ */ a.jsx("span", { className: "flex-1 font-semibold", children: "Delete label?" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "h-6 px-2 text-xs",
          disabled: A,
          size: "sm",
          variant: "outline",
          onClick: () => c(!1),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "h-6 px-2 text-xs",
          disabled: A,
          size: "sm",
          variant: "destructive",
          onClick: F,
          children: S ? "Deleting..." : "Delete"
        }
      )
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "h-6 gap-1 px-1.5 text-xs text-red hover:bg-red/5 hover:text-red",
          disabled: A,
          size: "sm",
          variant: "ghost",
          onClick: () => c(!0),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "ml-auto flex gap-1", children: [
        /* @__PURE__ */ a.jsx(
          se,
          {
            className: "h-6 px-2 text-xs",
            disabled: A,
            size: "sm",
            variant: "outline",
            onClick: r,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ a.jsx(
          se,
          {
            className: "h-6 px-2 text-xs",
            disabled: A,
            size: "sm",
            onClick: L,
            children: y ? "Saving..." : "Save"
          }
        )
      ] })
    ] })
  ] });
}, nc = ({ label: e, isSelected: t, showEdit: r, onToggle: n, onEditClick: s }) => /* @__PURE__ */ a.jsxs(
  bn,
  {
    className: "group",
    value: e.slug,
    onSelect: () => n(e.slug),
    children: [
      /* @__PURE__ */ a.jsx("span", { className: "flex-1 truncate", children: e.name }),
      r ? /* @__PURE__ */ a.jsxs(
        "button",
        {
          "aria-label": `Edit label ${e.name}`,
          className: "relative ml-1 flex size-5 shrink-0 items-center justify-center rounded text-muted-foreground hover:text-foreground",
          type: "button",
          onClick: (o) => {
            o.stopPropagation(), o.preventDefault(), s();
          },
          children: [
            t && /* @__PURE__ */ a.jsx(Gn, { className: "absolute size-3 text-primary transition-opacity duration-150 group-hover:opacity-0" }),
            /* @__PURE__ */ a.jsx(_i, { className: "absolute size-3 translate-x-2 opacity-0 transition-all duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100" })
          ]
        }
      ) : t && /* @__PURE__ */ a.jsx(Gn, { className: "size-4 shrink-0 text-primary" })
    ]
  }
), Mo = ({
  labels: e,
  selectedSlugs: t,
  search: r,
  onToggle: n,
  onEdit: s,
  onDelete: o,
  isDuplicateName: i,
  canCreateFromSearch: l,
  onCreate: c,
  isCreating: u,
  onSearchClear: h
}) => {
  const [y, _] = ie(null), S = e.filter((U) => U.name.toLowerCase().includes(r.toLowerCase())), P = !!c && r.trim() && (l == null ? void 0 : l(r)), k = !!s, A = async () => {
    if (c) {
      const U = await c(r.trim());
      U && n(U.slug), h == null || h();
    }
  }, M = async (U, F) => {
    s && await s(U, F);
  }, L = async (U) => {
    o && (await o(U), _(null));
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    !P && S.length === 0 && /* @__PURE__ */ a.jsx(mo, { children: "No labels found" }),
    S.length > 0 && /* @__PURE__ */ a.jsx(Kn, { className: "[&_[cmdk-group-heading]]:hidden", children: S.map((U) => y === U.id ? /* @__PURE__ */ a.jsx(
      rc,
      {
        isDuplicateName: i,
        label: U,
        onCancel: () => _(null),
        onDelete: L,
        onSave: M
      },
      U.id
    ) : /* @__PURE__ */ a.jsx(
      nc,
      {
        isSelected: t.includes(U.slug),
        label: U,
        showEdit: k,
        onEditClick: () => _(U.id),
        onToggle: n
      },
      U.id
    )) }),
    P && /* @__PURE__ */ a.jsx(Kn, { className: "[&_[cmdk-group-heading]]:hidden", children: /* @__PURE__ */ a.jsxs(
      bn,
      {
        disabled: u,
        onSelect: A,
        children: [
          /* @__PURE__ */ a.jsx(hi, { className: "size-4" }),
          u ? "Creating..." : `Create "${r.trim()}"`
        ]
      }
    ) })
  ] });
}, Uo = ({ labels: e, onToggle: t }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: e.map((r) => /* @__PURE__ */ a.jsxs(
  uo,
  {
    className: "cursor-pointer gap-1 pr-1",
    variant: "outline",
    onClick: (n) => {
      n.stopPropagation(), t(r.slug);
    },
    children: [
      r.name,
      /* @__PURE__ */ a.jsx(yr, { className: "size-3" })
    ]
  },
  r.id
)) }), br = ({
  labels: e,
  selectedSlugs: t,
  isLoading: r,
  onToggle: n,
  canCreateFromSearch: s,
  onCreate: o,
  isCreating: i,
  onEdit: l,
  onDelete: c,
  isDuplicateName: u,
  inline: h = !1,
  align: y = "start"
}) => {
  const _ = t.map((S) => e.find((P) => P.slug === S)).filter((S) => !!S);
  return h ? /* @__PURE__ */ a.jsx(
    sc,
    {
      align: y,
      canCreateFromSearch: s,
      isCreating: i,
      isDuplicateName: u,
      isLoading: r,
      labels: e,
      selectedLabels: _,
      selectedSlugs: t,
      onCreate: o,
      onDelete: c,
      onEdit: l,
      onToggle: n
    }
  ) : /* @__PURE__ */ a.jsx(
    ac,
    {
      canCreateFromSearch: s,
      isCreating: i,
      isDuplicateName: u,
      isLoading: r,
      labels: e,
      selectedLabels: _,
      selectedSlugs: t,
      onCreate: o,
      onDelete: c,
      onEdit: l,
      onToggle: n
    }
  );
}, sc = ({
  labels: e,
  selectedLabels: t,
  selectedSlugs: r,
  onToggle: n,
  isLoading: s,
  align: o = "start",
  canCreateFromSearch: i,
  onCreate: l,
  isCreating: c,
  onEdit: u,
  onDelete: h,
  isDuplicateName: y
}) => {
  const _ = Pe(null), [S, P] = ie(0), k = re(() => {
    const M = _.current, L = M == null ? void 0 : M.parentElement;
    if (M && L) {
      const U = M.getBoundingClientRect(), F = L.getBoundingClientRect();
      P(Math.round(F.left - U.left));
    }
  }, []), A = t.length === 0 ? "Select..." : t.length === 1 ? t[0].name : `${t.length} labels`;
  return /* @__PURE__ */ a.jsxs(
    fo,
    {
      onOpenChange: (M) => {
        M && k();
      },
      children: [
        /* @__PURE__ */ a.jsx(po, { asChild: !0, children: /* @__PURE__ */ a.jsx(
          "button",
          {
            ref: _,
            className: "flex size-full items-center truncate text-left text-sm",
            type: "button",
            children: A
          }
        ) }),
        /* @__PURE__ */ a.jsx(ho, { align: o, alignOffset: S, className: "w-64 p-0", children: s ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: "Loading labels..." }) : /* @__PURE__ */ a.jsx(
          oc,
          {
            canCreateFromSearch: i,
            isCreating: c,
            isDuplicateName: y,
            labels: e,
            selectedLabels: t,
            selectedSlugs: r,
            onCreate: l,
            onDelete: h,
            onEdit: u,
            onToggle: n
          }
        ) })
      ]
    }
  );
}, oc = ({ selectedLabels: e, ...t }) => {
  const [r, n] = ie("");
  return /* @__PURE__ */ a.jsxs(gn, { shouldFilter: !1, children: [
    e.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-1.5 border-b px-3 py-2", children: /* @__PURE__ */ a.jsx(Uo, { labels: e, onToggle: t.onToggle }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center border-b px-3", children: [
      /* @__PURE__ */ a.jsx(go, { className: "mr-2 size-4 shrink-0 opacity-50" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "flex h-9 w-full bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground",
          placeholder: "Search labels...",
          value: r,
          onChange: (s) => n(s.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(yn, { className: "max-h-64 overflow-y-auto", children: /* @__PURE__ */ a.jsx(
      Mo,
      {
        ...t,
        search: r,
        onSearchClear: () => n("")
      }
    ) })
  ] });
}, ac = ({
  labels: e,
  selectedLabels: t,
  selectedSlugs: r,
  onToggle: n,
  isLoading: s,
  canCreateFromSearch: o,
  onCreate: i,
  isCreating: l,
  onEdit: c,
  onDelete: u,
  isDuplicateName: h
}) => {
  const [y, _] = ie(!1), [S, P] = ie(""), k = Pe(null), A = Pe(null);
  Te(() => {
    if (!y)
      return;
    const L = (U) => {
      A.current && !A.current.contains(U.target) && _(!1);
    };
    return document.addEventListener("pointerdown", L), () => document.removeEventListener("pointerdown", L);
  }, [y]);
  const M = (L) => {
    var U;
    L.key === "Backspace" && !S && r.length > 0 && n(r[r.length - 1]), L.key === "Escape" && (_(!1), (U = k.current) == null || U.blur());
  };
  return /* @__PURE__ */ a.jsxs("div", { ref: A, className: "relative", children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border border-transparent bg-gray-150 px-3 py-1 text-sm transition-colors focus-within:border-green focus-within:bg-transparent focus-within:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:bg-gray-900",
        role: "combobox",
        onClick: () => {
          var L;
          (L = k.current) == null || L.focus(), _(!0);
        },
        children: [
          /* @__PURE__ */ a.jsx(Uo, { labels: t, onToggle: n }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: k,
              className: "min-w-[80px] flex-1 bg-transparent text-sm outline-hidden placeholder:text-muted-foreground",
              placeholder: t.length === 0 ? "Search labels..." : "",
              value: S,
              onChange: (L) => {
                P(L.target.value), y || _(!0);
              },
              onFocus: () => _(!0),
              onKeyDown: M
            }
          )
        ]
      }
    ),
    y && /* @__PURE__ */ a.jsx("div", { className: "absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-white shadow-md dark:bg-gray-950", children: s ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: "Loading labels..." }) : /* @__PURE__ */ a.jsx(gn, { shouldFilter: !1, children: /* @__PURE__ */ a.jsx(yn, { className: "max-h-64 overflow-y-auto", children: /* @__PURE__ */ a.jsx(
      Mo,
      {
        canCreateFromSearch: o,
        isCreating: l,
        isDuplicateName: h,
        labels: e,
        search: S,
        selectedSlugs: r,
        onCreate: i,
        onDelete: u,
        onEdit: c,
        onSearchClear: () => P(""),
        onToggle: n
      }
    ) }) }) })
  ] });
}, vr = "LabelsResponseType", Zo = vn({
  dataType: vr,
  path: "/labels/"
}), ic = _n({
  method: "POST",
  path: () => "/labels/",
  body: (e) => ({ labels: [e] }),
  updateQueries: {
    dataType: vr,
    emberUpdateType: "createOrUpdate",
    update: (e, t) => {
      const r = t;
      return r && { ...r, labels: r.labels.concat(e.labels) };
    }
  }
}), lc = _n({
  method: "PUT",
  path: (e) => `/labels/${e.id}/`,
  body: (e) => ({ labels: [e] }),
  updateQueries: {
    dataType: vr,
    emberUpdateType: "createOrUpdate",
    update: (e, t) => {
      const r = t;
      return r && {
        ...r,
        labels: r.labels.map((n) => e.labels.find(({ id: s }) => s === n.id) || n)
      };
    }
  }
}), cc = _n({
  method: "DELETE",
  path: (e) => `/labels/${e}/`,
  updateQueries: {
    dataType: vr,
    emberUpdateType: "delete",
    update: (e, t, r) => {
      const n = t;
      return n && { ...n, labels: n.labels.filter((s) => s.id !== r) };
    }
  }
});
function _r({
  selectedSlugs: e,
  onSelectionChange: t
}) {
  const { data: r, isLoading: n } = Zo({ searchParams: { limit: "100" } }), s = de(() => (r == null ? void 0 : r.labels) || [], [r]), { mutateAsync: o, isLoading: i } = ic(), { mutateAsync: l } = lc(), { mutateAsync: c } = cc(), u = Pe(e);
  u.current = e;
  const h = re((A) => {
    const M = u.current;
    M.includes(A) ? t(M.filter((L) => L !== A)) : t([...M, A]);
  }, [t]), y = re((A, M) => {
    const L = A.trim().toLowerCase();
    return s.some((U) => U.name.toLowerCase() === L && U.id !== M);
  }, [s]), _ = re((A) => {
    const M = A.trim();
    return M ? !y(M) : !1;
  }, [y]), S = re(async (A) => {
    var F;
    const M = A.trim();
    if (!M || y(M))
      return;
    const L = await o({ name: M });
    return (F = L == null ? void 0 : L.labels) == null ? void 0 : F[0];
  }, [o, y]), P = re(async (A, M) => {
    var z;
    const L = M.trim();
    if (!L || y(L, A))
      return;
    const U = s.find((T) => T.id === A), F = await l({ id: A, name: L }), I = (z = F == null ? void 0 : F.labels) == null ? void 0 : z[0];
    if (U && I && U.slug !== I.slug) {
      const T = u.current;
      T.includes(U.slug) && t(T.map((p) => p === U.slug ? I.slug : p));
    }
  }, [l, y, s, t]), k = re(async (A) => {
    const M = s.find((L) => L.id === A);
    if (await c(A), M) {
      const L = u.current;
      L.includes(M.slug) && t(L.filter((U) => U !== M.slug));
    }
  }, [c, s, t]);
  return {
    labels: s,
    selectedSlugs: e,
    isLoading: n,
    toggleLabel: h,
    createLabel: S,
    editLabel: P,
    deleteLabel: k,
    isDuplicateName: y,
    canCreateFromSearch: _,
    isCreating: i
  };
}
const uc = ({ values: e, onChange: t }) => {
  const r = _r({
    selectedSlugs: e,
    onSelectionChange: t
  });
  return /* @__PURE__ */ a.jsx(
    br,
    {
      isDuplicateName: r.isDuplicateName,
      labels: r.labels,
      selectedSlugs: r.selectedSlugs,
      inline: !0,
      onDelete: r.deleteLabel,
      onEdit: r.editLabel,
      onToggle: r.toggleLabel
    }
  );
};
function fc({
  open: e,
  memberCount: t,
  onOpenChange: r,
  onConfirm: n,
  isLoading: s = !1
}) {
  const [o, i] = ie([]), l = _r({
    selectedSlugs: o,
    onSelectionChange: i
  }), c = re((h) => {
    h || i([]), r(h);
  }, [r]), u = () => {
    const h = l.labels.filter((y) => o.includes(y.slug)).map((y) => y.id);
    h.length > 0 && n(h);
  };
  return /* @__PURE__ */ a.jsx(Ot, { open: e, onOpenChange: c, children: /* @__PURE__ */ a.jsxs(Pt, { className: "gap-5", onOpenAutoFocus: (h) => h.preventDefault(), children: [
    /* @__PURE__ */ a.jsx(Dt, { children: /* @__PURE__ */ a.jsxs(Nt, { children: [
      "Add label to ",
      t.toLocaleString(),
      " ",
      t === 1 ? "member" : "members"
    ] }) }),
    /* @__PURE__ */ a.jsx(
      br,
      {
        canCreateFromSearch: l.canCreateFromSearch,
        isCreating: l.isCreating,
        isDuplicateName: l.isDuplicateName,
        isLoading: l.isLoading,
        labels: l.labels,
        selectedSlugs: l.selectedSlugs,
        onCreate: l.createLabel,
        onDelete: l.deleteLabel,
        onEdit: l.editLabel,
        onToggle: l.toggleLabel
      }
    ),
    /* @__PURE__ */ a.jsxs(Ve, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: () => c(!1), children: "Cancel" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: o.length === 0 || s,
          onClick: u,
          children: s ? "Adding..." : o.length > 1 ? `Add ${o.length} labels` : "Add label"
        }
      )
    ] })
  ] }) });
}
function dc({
  open: e,
  memberCount: t,
  nql: r,
  search: n,
  onOpenChange: s,
  onConfirm: o,
  isLoading: i = !1
}) {
  const [l, c] = ie([]), { data: u, isLoading: h } = oi({
    searchParams: {
      ...r ? { filter: r } : {},
      ...n ? { search: n } : {},
      include: "labels",
      limit: "all",
      fields: "id"
    },
    enabled: e
  }), y = de(() => {
    const A = /* @__PURE__ */ new Set();
    for (const M of (u == null ? void 0 : u.members) || [])
      for (const L of M.labels || [])
        A.add(L.slug);
    return A;
  }, [u]), _ = _r({
    selectedSlugs: l,
    onSelectionChange: c
  }), S = de(() => _.labels.filter((A) => y.has(A.slug)), [_.labels, y]), P = re((A) => {
    A || c([]), s(A);
  }, [s]), k = () => {
    const A = _.labels.filter((M) => l.includes(M.slug)).map((M) => M.id);
    A.length > 0 && o(A);
  };
  return /* @__PURE__ */ a.jsx(Ot, { open: e, onOpenChange: P, children: /* @__PURE__ */ a.jsxs(Pt, { className: "gap-5", onOpenAutoFocus: (A) => A.preventDefault(), children: [
    /* @__PURE__ */ a.jsx(Dt, { children: /* @__PURE__ */ a.jsxs(Nt, { children: [
      "Remove label from ",
      t.toLocaleString(),
      " ",
      t === 1 ? "member" : "members"
    ] }) }),
    /* @__PURE__ */ a.jsx(
      br,
      {
        isDuplicateName: _.isDuplicateName,
        isLoading: _.isLoading || h,
        labels: S,
        selectedSlugs: _.selectedSlugs,
        onDelete: _.deleteLabel,
        onEdit: _.editLabel,
        onToggle: _.toggleLabel
      }
    ),
    /* @__PURE__ */ a.jsxs(Ve, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: () => P(!1), children: "Cancel" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: l.length === 0 || i,
          onClick: k,
          children: i ? "Removing..." : l.length > 1 ? `Remove ${l.length} labels` : "Remove label"
        }
      )
    ] })
  ] }) });
}
function pc({
  open: e,
  newsletters: t,
  memberCount: r,
  onOpenChange: n,
  onConfirm: s,
  isLoading: o = !1
}) {
  const [i, l] = ie("all"), [c, u] = ie([]), [h, y] = ie(""), [_, S] = ie(!1), P = Pe(null), k = Pe(null);
  Te(() => {
    e || (l("all"), u([]), y(""), S(!1));
  }, [e]), Te(() => {
    if (!_)
      return;
    const z = (T) => {
      P.current && !P.current.contains(T.target) && S(!1);
    };
    return document.addEventListener("pointerdown", z), () => document.removeEventListener("pointerdown", z);
  }, [_]);
  const A = (z) => {
    z || (l("all"), u([]), y(""), S(!1)), n(z);
  }, M = re((z) => {
    u((T) => T.includes(z) ? T.filter((p) => p !== z) : [...T, z]);
  }, []), L = t.length >= 2, U = () => {
    s(!L || i === "all" ? null : c);
  }, F = o || L && i === "selected" && c.length === 0, I = r === 1 ? "member" : "members";
  return /* @__PURE__ */ a.jsx(Ot, { open: e, onOpenChange: A, children: /* @__PURE__ */ a.jsxs(Pt, { className: "gap-5", children: [
    /* @__PURE__ */ a.jsx(Dt, { children: /* @__PURE__ */ a.jsx(Nt, { children: "Unsubscribe members" }) }),
    L ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          "aria-label": "Unsubscribe scope",
          className: "flex flex-col gap-3",
          role: "radiogroup",
          children: [
            /* @__PURE__ */ a.jsxs("label", { className: "flex cursor-pointer items-start gap-3", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  checked: i === "all",
                  className: "mt-0.5 size-4 cursor-pointer accent-black",
                  name: "unsubscribe-mode",
                  type: "radio",
                  value: "all",
                  onChange: () => l("all")
                }
              ),
              /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm font-semibold", children: "Unsubscribe from all newsletters" }),
                /* @__PURE__ */ a.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  r.toLocaleString(),
                  " ",
                  I,
                  " will be unsubscribed from",
                  " ",
                  t.length,
                  " ",
                  t.length === 1 ? "newsletter" : "newsletters",
                  "."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("label", { className: "flex cursor-pointer items-start gap-3", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  checked: i === "selected",
                  className: "mt-0.5 size-4 cursor-pointer accent-black",
                  name: "unsubscribe-mode",
                  type: "radio",
                  value: "selected",
                  onChange: () => l("selected")
                }
              ),
              /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm font-semibold", children: "Unsubscribe from selected newsletters" }),
                /* @__PURE__ */ a.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  "Select which newsletters to unsubscribe",
                  " ",
                  r.toLocaleString(),
                  " ",
                  I,
                  " from."
                ] })
              ] })
            ] })
          ]
        }
      ),
      i === "selected" && /* @__PURE__ */ a.jsxs("div", { ref: P, className: "relative space-y-2", children: [
        /* @__PURE__ */ a.jsx(
          "label",
          {
            className: "text-sm font-semibold",
            htmlFor: "newsletter-search",
            children: "Newsletters"
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border bg-background px-3 py-1 text-sm",
            onClick: () => {
              var z;
              (z = k.current) == null || z.focus(), S(!0);
            },
            children: [
              c.map((z) => {
                const T = t.find(
                  (p) => p.id === z
                );
                return T ? /* @__PURE__ */ a.jsxs(
                  uo,
                  {
                    className: "cursor-pointer gap-1 pr-1",
                    variant: "outline",
                    onClick: (p) => {
                      p.stopPropagation(), M(z);
                    },
                    children: [
                      T.name,
                      /* @__PURE__ */ a.jsx(yr, { className: "size-3" })
                    ]
                  },
                  z
                ) : null;
              }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: k,
                  className: "min-w-[80px] flex-1 bg-transparent py-1 text-sm outline-hidden placeholder:text-muted-foreground",
                  id: "newsletter-search",
                  placeholder: c.length === 0 ? "Search newsletters..." : "",
                  value: h,
                  onChange: (z) => {
                    y(z.target.value), _ || S(!0);
                  },
                  onFocus: () => S(!0),
                  onKeyDown: (z) => {
                    var T;
                    z.key === "Escape" && (S(!1), (T = k.current) == null || T.blur()), z.key === "Backspace" && !h && c.length > 0 && M(
                      c[c.length - 1]
                    );
                  }
                }
              )
            ]
          }
        ),
        _ && /* @__PURE__ */ a.jsx("div", { className: "absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-white shadow-md dark:bg-gray-950", children: /* @__PURE__ */ a.jsx(gn, { shouldFilter: !1, children: /* @__PURE__ */ a.jsxs(yn, { className: "max-h-64 overflow-y-auto", children: [
          /* @__PURE__ */ a.jsx(mo, { children: "No newsletters found." }),
          t.filter(
            (z) => z.name.toLowerCase().includes(
              h.toLowerCase()
            )
          ).map((z) => /* @__PURE__ */ a.jsxs(
            bn,
            {
              value: z.name,
              onSelect: () => M(
                z.id
              ),
              children: [
                z.name,
                c.includes(
                  z.id
                ) && /* @__PURE__ */ a.jsx(di, {})
              ]
            },
            z.id
          ))
        ] }) }) })
      ] })
    ] }) : /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "Are you sure you want to unsubscribe",
      " ",
      r.toLocaleString(),
      " ",
      I,
      " from all newsletters? They will no longer receive any email newsletters from you."
    ] }),
    /* @__PURE__ */ a.jsxs(Ve, { children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          variant: "outline",
          onClick: () => A(!1),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: F,
          variant: "destructive",
          onClick: U,
          children: o ? "Unsubscribing..." : "Unsubscribe"
        }
      )
    ] })
  ] }) });
}
function hc({
  open: e,
  memberCount: t,
  onOpenChange: r,
  onConfirm: n,
  onExportBackup: s,
  isLoading: o = !1
}) {
  const [i, l] = ie(!1), c = (h) => {
    h || l(!1), r(h);
  }, u = async () => {
    if (!(t < 1 || o || i))
      try {
        l(!0), await s(), n();
      } catch {
      } finally {
        l(!1);
      }
  };
  return /* @__PURE__ */ a.jsx(Ot, { open: e, onOpenChange: c, children: /* @__PURE__ */ a.jsxs(Pt, { className: "gap-5", children: [
    /* @__PURE__ */ a.jsx(Dt, { children: /* @__PURE__ */ a.jsx(Nt, { children: "Delete selected members?" }) }),
    /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: t > 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "You're about to delete ",
        /* @__PURE__ */ a.jsxs("strong", { children: [
          t.toLocaleString(),
          " ",
          t === 1 ? "member" : "members"
        ] }),
        ". This is permanent! All Ghost data will be deleted, this will have no effect on subscriptions in Stripe."
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-4", children: "A backup of your selection will be automatically downloaded to your device before deletion." })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: "No members are selected." }) }),
    /* @__PURE__ */ a.jsxs(Ve, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: () => c(!1), children: "Cancel" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: o || i || t < 1,
          variant: "destructive",
          onClick: u,
          children: o || i ? "Deleting..." : "Download backup & delete members"
        }
      )
    ] })
  ] }) });
}
function mc({ fileError: e, onClose: t, onDropAccepted: r, onDropRejected: n }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mt-5 space-y-5", children: [
      /* @__PURE__ */ a.jsxs(Ao, { variant: "info", children: [
        "Need some help? ",
        /* @__PURE__ */ a.jsx("a", { className: "font-semibold underline", href: "https://ghost.org/help/import-members/", rel: "noopener noreferrer", target: "_blank", children: "Learn more" }),
        " about importing members or ",
        /* @__PURE__ */ a.jsx("a", { className: "font-semibold underline", href: "https://static.ghost.org/v4.0.0/files/member-import-template.csv", rel: "noopener noreferrer", target: "_blank", children: "download a sample CSV file" }),
        "."
      ] }),
      e && /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2 text-sm text-red-600", children: [
        /* @__PURE__ */ a.jsx(bo, { className: "mt-0.5 size-4 shrink-0" }),
        /* @__PURE__ */ a.jsx("p", { children: e })
      ] }),
      /* @__PURE__ */ a.jsx(
        Lo,
        {
          accept: {
            "text/csv": [".csv"],
            "application/vnd.ms-excel": [".csv"]
          },
          "aria-label": "Select or drop a CSV file",
          onDropAccepted: (s) => {
            const o = s[0];
            o && r(o);
          },
          onDropRejected: n,
          children: ({ isDragActive: s, isDragReject: o }) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(vo, { className: "mb-2 size-6 text-grey-600" }),
            /* @__PURE__ */ a.jsx("span", { className: "text-sm text-grey-700", children: o ? "The file type you uploaded is not supported" : s ? "Drop CSV file to upload" : "Select or drop a CSV file" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(Ve, { className: "mt-5", children: /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: t, children: "Close" }) })
  ] });
}
const gc = [
  { label: "Email", value: "email" },
  { label: "Name", value: "name" },
  { label: "Note", value: "note" },
  { label: "Subscribed to emails", value: "subscribed_to_emails" },
  { label: "Stripe Customer ID", value: "stripe_customer_id" },
  { label: "Complimentary plan", value: "complimentary_plan" },
  { label: "Labels", value: "labels" },
  { label: "Created at", value: "created_at" }
], yc = [
  "email",
  "name",
  "note",
  "subscribed_to_emails",
  "complimentary_plan",
  "stripe_customer_id",
  "labels",
  "created_at"
], bc = ["email"], vc = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
class En {
  constructor(t) {
    Bn(this, "_mapping");
    if (this._mapping = {}, t)
      for (const [r, n] of Object.entries(t))
        this._mapping[n] = r;
  }
  get(t) {
    return this._mapping[t] ?? null;
  }
  toJSON() {
    return { ...this._mapping };
  }
  getKeyByValue(t) {
    for (const [r, n] of Object.entries(this._mapping))
      if (n === t)
        return r;
    return null;
  }
  updateMapping(t, r) {
    const n = new En({});
    if (n._mapping = { ...this._mapping }, r)
      for (const s in n._mapping)
        n._mapping[s] === r && (n._mapping[s] = null);
    return n._mapping[t] = r, n;
  }
}
function _c(e, t = 30) {
  if (!e || e.length <= t)
    return e;
  const r = [];
  return Object.keys(e[0]).forEach((s) => {
    const o = e.filter((l) => l[s] && l[s].trim() !== "");
    let i = [];
    if (o.length <= t)
      i = o;
    else {
      const l = Math.floor(t / 3), c = l, u = t - l - c, h = o.slice(0, l), y = c > 0 ? o.slice(-c) : [], _ = Math.max(0, Math.floor(o.length / 2) - Math.floor(u / 2)), S = o.slice(_, _ + u);
      i = [...h, ...S, ...y].slice(0, t);
    }
    i.forEach((l, c) => {
      r[c] || (r[c] = {}), r[c][s] = l[s];
    });
  }), r;
}
function wc(e) {
  const t = _c(e), r = {};
  if (e.length > 0)
    for (const s of Object.keys(e[0])) {
      if (!r.name && /name/i.test(s)) {
        r.name = s;
        continue;
      }
      !r[s] && yc.includes(s) && !bc.includes(s) && (r[s] = s);
    }
  let n = 0;
  for (; n <= t.length - 1 && !r.email; ) {
    const s = t[n];
    for (const [o, i] of Object.entries(s))
      !r.email && i && vc.test(i) && (r.email = o);
    n += 1;
  }
  return r;
}
function xc(e) {
  return e.replace(
    "Value in [members.email] cannot be blank.",
    "Missing email address"
  ).replace(
    "Value in [members.note] exceeds maximum length of 2000 characters.",
    "Note is too long"
  ).replace(
    "Value in [members.subscribed] must be one of true, false, 0 or 1.",
    'Value of "Subscribed to emails" must be "true" or "false"'
  ).replace(
    "Validation (isEmail) failed for email",
    "Invalid email address"
  ).replace(
    /No such customer:[^,]*/,
    "Could not find Stripe customer"
  );
}
function Ec({
  status: e,
  fileData: t,
  mapping: r,
  mappingError: n,
  showMappingErrors: s,
  membersCount: o,
  dataPreviewIndex: i,
  hasPrevRecord: l,
  hasNextRecord: c,
  labelPicker: u,
  onUpdateMapping: h,
  onDataPreviewIndexChange: y,
  onStartOver: _,
  onUpload: S
}) {
  const P = t && t.length > 0 && r ? Object.entries(t[i] || {}).map(([k, A]) => ({
    key: k,
    value: A,
    mapTo: r.get(k)
  })) : [];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "mt-5 space-y-5", children: t === null ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center rounded-md border bg-muted p-10", children: /* @__PURE__ */ a.jsx(nr, { size: "md" }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("div", { className: Oe(
        "overflow-hidden rounded-md border",
        s && n && "border-red-500"
      ), children: /* @__PURE__ */ a.jsx("div", { className: "max-h-[400px] overflow-auto", children: /* @__PURE__ */ a.jsxs(wo, { className: "table-fixed", children: [
        /* @__PURE__ */ a.jsx(xo, { children: /* @__PURE__ */ a.jsxs(dt, { children: [
          /* @__PURE__ */ a.jsx(Be, { className: "w-1/3", children: "Field" }),
          /* @__PURE__ */ a.jsx(Be, { className: "w-1/3", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ a.jsxs("span", { children: [
              "Sample data ",
              /* @__PURE__ */ a.jsxs("span", { className: "text-muted-foreground", children: [
                "(#",
                (i + 1).toLocaleString(),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  "aria-label": "Show previous sample row",
                  className: Oe(
                    "rounded p-0.5 hover:bg-muted",
                    !l && "cursor-default opacity-30"
                  ),
                  disabled: !l || e === "UPLOADING",
                  type: "button",
                  onClick: () => y(i - 1),
                  children: /* @__PURE__ */ a.jsx(Si, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  "aria-label": "Show next sample row",
                  className: Oe(
                    "rounded p-0.5 hover:bg-muted",
                    !c && "cursor-default opacity-30"
                  ),
                  disabled: !c || e === "UPLOADING",
                  type: "button",
                  onClick: () => y(i + 1),
                  children: /* @__PURE__ */ a.jsx(Vi, { className: "size-4" })
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ a.jsx(Be, { className: "w-1/3", children: "Import as" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Eo, { children: P.length > 0 ? P.map((k) => /* @__PURE__ */ a.jsxs(dt, { className: Oe(!k.mapTo && "bg-muted"), children: [
          /* @__PURE__ */ a.jsx(ze, { className: "text-sm font-medium break-all", children: k.key }),
          /* @__PURE__ */ a.jsx(ze, { className: Oe("break-all text-sm", !k.value && "text-muted-foreground"), children: k.value || " " }),
          /* @__PURE__ */ a.jsx(ze, { children: /* @__PURE__ */ a.jsxs(
            Mi,
            {
              disabled: e === "UPLOADING",
              value: k.mapTo || "__not_imported__",
              onValueChange: (A) => {
                h(k.key, A === "__not_imported__" ? null : A);
              },
              children: [
                /* @__PURE__ */ a.jsx(Ui, { className: Oe("h-8 text-sm", !k.mapTo && "text-muted-foreground"), children: /* @__PURE__ */ a.jsx(Zi, {}) }),
                /* @__PURE__ */ a.jsxs(Bi, { children: [
                  /* @__PURE__ */ a.jsx(Yn, { value: "__not_imported__", children: "Not imported" }),
                  gc.map((A) => /* @__PURE__ */ a.jsx(Yn, { value: A.value, children: A.label }, A.value))
                ] })
              ]
            }
          ) })
        ] }, k.key)) : /* @__PURE__ */ a.jsx(dt, { children: /* @__PURE__ */ a.jsx(ze, { className: "text-muted-foreground", colSpan: 3, children: "No data found in the uploaded CSV." }) }) })
      ] }) }) }),
      s && n && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-red-600", children: n }),
      o > 0 && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-muted-foreground", children: "If an email address in your CSV matches an existing member, they will be updated with the mapped values." }),
      /* @__PURE__ */ a.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-sm font-semibold", children: "Label these members" }),
        /* @__PURE__ */ a.jsx(
          br,
          {
            canCreateFromSearch: u.canCreateFromSearch,
            isCreating: u.isCreating,
            isDuplicateName: u.isDuplicateName,
            isLoading: u.isLoading,
            labels: u.labels,
            selectedSlugs: u.selectedSlugs,
            onCreate: u.createLabel,
            onDelete: u.deleteLabel,
            onEdit: u.editLabel,
            onToggle: u.toggleLabel
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsxs(Ve, { className: "mt-5", children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: e === "UPLOADING",
          variant: "outline",
          onClick: _,
          children: "Start over"
        }
      ),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: e === "UPLOADING" || o === 0,
          onClick: S,
          children: e === "UPLOADING" ? /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(nr, { color: "light", size: "sm" }),
            "Uploading"
          ] }) : o > 0 ? `Import ${o.toLocaleString()} ${o === 1 ? "member" : "members"}` : "Import members"
        }
      )
    ] })
  ] });
}
function Sc({ onUploadAnotherFile: e, onClose: t }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "mt-5", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm", children: "Your import is being processed, and you'll receive a confirmation email as soon as it's complete. Usually this only takes a few minutes, but larger imports may take longer." }) }),
    /* @__PURE__ */ a.jsxs(Ve, { className: "mt-5", children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: e, children: "Upload another file" }),
      /* @__PURE__ */ a.jsx(se, { onClick: t, children: "Got it" })
    ] })
  ] });
}
function jc({ importResponse: e, onReset: t, onClose: r }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mt-5 space-y-4", children: [
      e.importedCount === 0 ? /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
        "No members were added",
        e.errorCount > 0 ? " due to the following errors:" : "."
      ] }) : /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
        "A total of ",
        /* @__PURE__ */ a.jsx("strong", { children: e.importedCount.toLocaleString() }),
        " ",
        e.importedCount === 1 ? "person was" : "people were",
        " successfully added or updated in your list of members, and now have access to your site."
      ] }),
      e.errorCount > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        e.importedCount > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("hr", { className: "border-grey-200" }),
          /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ a.jsx("strong", { children: e.errorCount.toLocaleString() }),
            " ",
            e.errorCount === 1 ? "member was" : "members were",
            " skipped due to the following errors:"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("ul", { className: "list-inside list-disc space-y-1 text-sm text-muted-foreground", children: e.errorList.map((n) => /* @__PURE__ */ a.jsxs("li", { children: [
          n.message,
          " (",
          n.count,
          ")"
        ] }, n.message)) })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(Ve, { className: "mt-5", children: e.errorCount > 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", asChild: !0, children: /* @__PURE__ */ a.jsx("a", { download: e.errorCsvName, href: e.errorCsvUrl, children: "Download error file" }) }),
      e.importedCount === 0 ? /* @__PURE__ */ a.jsx(se, { onClick: t, children: "Try again" }) : /* @__PURE__ */ a.jsx(se, { onClick: r, children: "View members" })
    ] }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: e.importedCount === 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: r, children: "Close" }),
      /* @__PURE__ */ a.jsx(se, { onClick: t, children: "Try again" })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: t, children: "Upload another file" }),
      /* @__PURE__ */ a.jsx(se, { onClick: r, children: "View members" })
    ] }) }) })
  ] });
}
function kc({ errorMessage: e, showTryAgainButton: t, onTryAgain: r, onClose: n }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "mt-5", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2 text-sm text-red-600", children: [
      /* @__PURE__ */ a.jsx(bo, { className: "mt-0.5 size-4 shrink-0" }),
      /* @__PURE__ */ a.jsx("p", { children: e })
    ] }) }),
    /* @__PURE__ */ a.jsxs(Ve, { className: "mt-5", children: [
      t && /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: r, children: "Try again" }),
      /* @__PURE__ */ a.jsx(se, { onClick: n, children: "OK" })
    ] })
  ] });
}
var Bo = { exports: {} };
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(hn, function r() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, s = !n.document && !!n.postMessage, o = s && /blob:/i.test((n.location || {}).protocol), i = {}, l = 0, c = { parse: function(p, d) {
      var j = (d = d || {}).dynamicTyping || !1;
      if (T(j) && (d.dynamicTypingFunction = j, j = {}), d.dynamicTyping = j, d.transform = !!T(d.transform) && d.transform, d.worker && c.WORKERS_SUPPORTED) {
        var O = function() {
          if (!c.WORKERS_SUPPORTED) return !1;
          var b = ($ = n.URL || n.webkitURL || null, N = r.toString(), c.BLOB_URL || (c.BLOB_URL = $.createObjectURL(new Blob(["(", N, ")();"], { type: "text/javascript" })))), x = new n.Worker(b), $, N;
          return x.onmessage = L, x.id = l++, i[x.id] = x;
        }();
        return O.userStep = d.step, O.userChunk = d.chunk, O.userComplete = d.complete, O.userError = d.error, d.step = T(d.step), d.chunk = T(d.chunk), d.complete = T(d.complete), d.error = T(d.error), delete d.worker, void O.postMessage({ input: p, config: d, workerId: O.id });
      }
      var g = null;
      return c.NODE_STREAM_INPUT, typeof p == "string" ? g = d.download ? new y(d) : new S(d) : p.readable === !0 && T(p.read) && T(p.on) ? g = new P(d) : (n.File && p instanceof File || p instanceof Object) && (g = new _(d)), g.stream(p);
    }, unparse: function(p, d) {
      var j = !1, O = !0, g = ",", b = `\r
`, x = '"', $ = x + x, N = !1, m = null, ne = !1;
      (function() {
        if (typeof d == "object") {
          if (typeof d.delimiter != "string" || c.BAD_DELIMITERS.filter(function(f) {
            return d.delimiter.indexOf(f) !== -1;
          }).length || (g = d.delimiter), (typeof d.quotes == "boolean" || typeof d.quotes == "function" || Array.isArray(d.quotes)) && (j = d.quotes), typeof d.skipEmptyLines != "boolean" && typeof d.skipEmptyLines != "string" || (N = d.skipEmptyLines), typeof d.newline == "string" && (b = d.newline), typeof d.quoteChar == "string" && (x = d.quoteChar), typeof d.header == "boolean" && (O = d.header), Array.isArray(d.columns)) {
            if (d.columns.length === 0) throw new Error("Option columns is empty");
            m = d.columns;
          }
          d.escapeChar !== void 0 && ($ = d.escapeChar + x), (typeof d.escapeFormulae == "boolean" || d.escapeFormulae instanceof RegExp) && (ne = d.escapeFormulae instanceof RegExp ? d.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var Z = new RegExp(A(x), "g");
      if (typeof p == "string" && (p = JSON.parse(p)), Array.isArray(p)) {
        if (!p.length || Array.isArray(p[0])) return R(null, p, N);
        if (typeof p[0] == "object") return R(m || Object.keys(p[0]), p, N);
      } else if (typeof p == "object") return typeof p.data == "string" && (p.data = JSON.parse(p.data)), Array.isArray(p.data) && (p.fields || (p.fields = p.meta && p.meta.fields || m), p.fields || (p.fields = Array.isArray(p.data[0]) ? p.fields : typeof p.data[0] == "object" ? Object.keys(p.data[0]) : []), Array.isArray(p.data[0]) || typeof p.data[0] == "object" || (p.data = [p.data])), R(p.fields || [], p.data || [], N);
      throw new Error("Unable to serialize unrecognized input");
      function R(f, v, w) {
        var W = "";
        typeof f == "string" && (f = JSON.parse(f)), typeof v == "string" && (v = JSON.parse(v));
        var K = Array.isArray(f) && 0 < f.length, q = !Array.isArray(v[0]);
        if (K && O) {
          for (var H = 0; H < f.length; H++) 0 < H && (W += g), W += le(f[H], H);
          0 < v.length && (W += b);
        }
        for (var C = 0; C < v.length; C++) {
          var V = K ? f.length : v[C].length, J = !1, Q = K ? Object.keys(v[C]).length === 0 : v[C].length === 0;
          if (w && !K && (J = w === "greedy" ? v[C].join("").trim() === "" : v[C].length === 1 && v[C][0].length === 0), w === "greedy" && K) {
            for (var X = [], te = 0; te < V; te++) {
              var ae = q ? f[te] : te;
              X.push(v[C][ae]);
            }
            J = X.join("").trim() === "";
          }
          if (!J) {
            for (var Y = 0; Y < V; Y++) {
              0 < Y && !Q && (W += g);
              var xe = K && q ? f[Y] : Y;
              W += le(v[C][xe], Y);
            }
            C < v.length - 1 && (!w || 0 < V && !Q) && (W += b);
          }
        }
        return W;
      }
      function le(f, v) {
        if (f == null) return "";
        if (f.constructor === Date) return JSON.stringify(f).slice(1, 25);
        var w = !1;
        ne && typeof f == "string" && ne.test(f) && (f = "'" + f, w = !0);
        var W = f.toString().replace(Z, $);
        return (w = w || j === !0 || typeof j == "function" && j(f, v) || Array.isArray(j) && j[v] || function(K, q) {
          for (var H = 0; H < q.length; H++) if (-1 < K.indexOf(q[H])) return !0;
          return !1;
        }(W, c.BAD_DELIMITERS) || -1 < W.indexOf(g) || W.charAt(0) === " " || W.charAt(W.length - 1) === " ") ? x + W + x : W;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !s && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = M, c.ParserHandle = k, c.NetworkStreamer = y, c.FileStreamer = _, c.StringStreamer = S, c.ReadableStreamStreamer = P, n.jQuery) {
      var u = n.jQuery;
      u.fn.parse = function(p) {
        var d = p.config || {}, j = [];
        return this.each(function(b) {
          if (!(u(this).prop("tagName").toUpperCase() === "INPUT" && u(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var x = 0; x < this.files.length; x++) j.push({ file: this.files[x], inputElem: this, instanceConfig: u.extend({}, d) });
        }), O(), this;
        function O() {
          if (j.length !== 0) {
            var b, x, $, N, m = j[0];
            if (T(p.before)) {
              var ne = p.before(m.file, m.inputElem);
              if (typeof ne == "object") {
                if (ne.action === "abort") return b = "AbortError", x = m.file, $ = m.inputElem, N = ne.reason, void (T(p.error) && p.error({ name: b }, x, $, N));
                if (ne.action === "skip") return void g();
                typeof ne.config == "object" && (m.instanceConfig = u.extend(m.instanceConfig, ne.config));
              } else if (ne === "skip") return void g();
            }
            var Z = m.instanceConfig.complete;
            m.instanceConfig.complete = function(R) {
              T(Z) && Z(R, m.file, m.inputElem), g();
            }, c.parse(m.file, m.instanceConfig);
          } else T(p.complete) && p.complete();
        }
        function g() {
          j.splice(0, 1), O();
        }
      };
    }
    function h(p) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(d) {
        var j = I(d);
        j.chunkSize = parseInt(j.chunkSize), d.step || d.chunk || (j.chunkSize = null), this._handle = new k(j), (this._handle.streamer = this)._config = j;
      }).call(this, p), this.parseChunk = function(d, j) {
        if (this.isFirstChunk && T(this._config.beforeFirstChunk)) {
          var O = this._config.beforeFirstChunk(d);
          O !== void 0 && (d = O);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var g = this._partialLine + d;
        this._partialLine = "";
        var b = this._handle.parse(g, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var x = b.meta.cursor;
          this._finished || (this._partialLine = g.substring(x - this._baseIndex), this._baseIndex = x), b && b.data && (this._rowCount += b.data.length);
          var $ = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (o) n.postMessage({ results: b, workerId: c.WORKER_ID, finished: $ });
          else if (T(this._config.chunk) && !j) {
            if (this._config.chunk(b, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            b = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(b.data), this._completeResults.errors = this._completeResults.errors.concat(b.errors), this._completeResults.meta = b.meta), this._completed || !$ || !T(this._config.complete) || b && b.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), $ || b && b.meta.paused || this._nextChunk(), b;
        }
        this._halted = !0;
      }, this._sendError = function(d) {
        T(this._config.error) ? this._config.error(d) : o && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: d, finished: !1 });
      };
    }
    function y(p) {
      var d;
      (p = p || {}).chunkSize || (p.chunkSize = c.RemoteChunkSize), h.call(this, p), this._nextChunk = s ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(j) {
        this._input = j, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (d = new XMLHttpRequest(), this._config.withCredentials && (d.withCredentials = this._config.withCredentials), s || (d.onload = z(this._chunkLoaded, this), d.onerror = z(this._chunkError, this)), d.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
            var j = this._config.downloadRequestHeaders;
            for (var O in j) d.setRequestHeader(O, j[O]);
          }
          if (this._config.chunkSize) {
            var g = this._start + this._config.chunkSize - 1;
            d.setRequestHeader("Range", "bytes=" + this._start + "-" + g);
          }
          try {
            d.send(this._config.downloadRequestBody);
          } catch (b) {
            this._chunkError(b.message);
          }
          s && d.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        d.readyState === 4 && (d.status < 200 || 400 <= d.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : d.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(j) {
          var O = j.getResponseHeader("Content-Range");
          return O === null ? -1 : parseInt(O.substring(O.lastIndexOf("/") + 1));
        }(d), this.parseChunk(d.responseText)));
      }, this._chunkError = function(j) {
        var O = d.statusText || j;
        this._sendError(new Error(O));
      };
    }
    function _(p) {
      var d, j;
      (p = p || {}).chunkSize || (p.chunkSize = c.LocalChunkSize), h.call(this, p);
      var O = typeof FileReader < "u";
      this.stream = function(g) {
        this._input = g, j = g.slice || g.webkitSlice || g.mozSlice, O ? ((d = new FileReader()).onload = z(this._chunkLoaded, this), d.onerror = z(this._chunkError, this)) : d = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var g = this._input;
        if (this._config.chunkSize) {
          var b = Math.min(this._start + this._config.chunkSize, this._input.size);
          g = j.call(g, this._start, b);
        }
        var x = d.readAsText(g, this._config.encoding);
        O || this._chunkLoaded({ target: { result: x } });
      }, this._chunkLoaded = function(g) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(g.target.result);
      }, this._chunkError = function() {
        this._sendError(d.error);
      };
    }
    function S(p) {
      var d;
      h.call(this, p = p || {}), this.stream = function(j) {
        return d = j, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var j, O = this._config.chunkSize;
          return O ? (j = d.substring(0, O), d = d.substring(O)) : (j = d, d = ""), this._finished = !d, this.parseChunk(j);
        }
      };
    }
    function P(p) {
      h.call(this, p = p || {});
      var d = [], j = !0, O = !1;
      this.pause = function() {
        h.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        h.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(g) {
        this._input = g, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        O && d.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), d.length ? this.parseChunk(d.shift()) : j = !0;
      }, this._streamData = z(function(g) {
        try {
          d.push(typeof g == "string" ? g : g.toString(this._config.encoding)), j && (j = !1, this._checkIsFinished(), this.parseChunk(d.shift()));
        } catch (b) {
          this._streamError(b);
        }
      }, this), this._streamError = z(function(g) {
        this._streamCleanUp(), this._sendError(g);
      }, this), this._streamEnd = z(function() {
        this._streamCleanUp(), O = !0, this._streamData("");
      }, this), this._streamCleanUp = z(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function k(p) {
      var d, j, O, g = Math.pow(2, 53), b = -g, x = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, $ = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, N = this, m = 0, ne = 0, Z = !1, R = !1, le = [], f = { data: [], errors: [], meta: {} };
      if (T(p.step)) {
        var v = p.step;
        p.step = function(C) {
          if (f = C, K()) W();
          else {
            if (W(), f.data.length === 0) return;
            m += C.data.length, p.preview && m > p.preview ? j.abort() : (f.data = f.data[0], v(f, N));
          }
        };
      }
      function w(C) {
        return p.skipEmptyLines === "greedy" ? C.join("").trim() === "" : C.length === 1 && C[0].length === 0;
      }
      function W() {
        return f && O && (H("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), O = !1), p.skipEmptyLines && (f.data = f.data.filter(function(C) {
          return !w(C);
        })), K() && function() {
          if (!f) return;
          function C(J, Q) {
            T(p.transformHeader) && (J = p.transformHeader(J, Q)), le.push(J);
          }
          if (Array.isArray(f.data[0])) {
            for (var V = 0; K() && V < f.data.length; V++) f.data[V].forEach(C);
            f.data.splice(0, 1);
          } else f.data.forEach(C);
        }(), function() {
          if (!f || !p.header && !p.dynamicTyping && !p.transform) return f;
          function C(J, Q) {
            var X, te = p.header ? {} : [];
            for (X = 0; X < J.length; X++) {
              var ae = X, Y = J[X];
              p.header && (ae = X >= le.length ? "__parsed_extra" : le[X]), p.transform && (Y = p.transform(Y, ae)), Y = q(ae, Y), ae === "__parsed_extra" ? (te[ae] = te[ae] || [], te[ae].push(Y)) : te[ae] = Y;
            }
            return p.header && (X > le.length ? H("FieldMismatch", "TooManyFields", "Too many fields: expected " + le.length + " fields but parsed " + X, ne + Q) : X < le.length && H("FieldMismatch", "TooFewFields", "Too few fields: expected " + le.length + " fields but parsed " + X, ne + Q)), te;
          }
          var V = 1;
          return !f.data.length || Array.isArray(f.data[0]) ? (f.data = f.data.map(C), V = f.data.length) : f.data = C(f.data, 0), p.header && f.meta && (f.meta.fields = le), ne += V, f;
        }();
      }
      function K() {
        return p.header && le.length === 0;
      }
      function q(C, V) {
        return J = C, p.dynamicTypingFunction && p.dynamicTyping[J] === void 0 && (p.dynamicTyping[J] = p.dynamicTypingFunction(J)), (p.dynamicTyping[J] || p.dynamicTyping) === !0 ? V === "true" || V === "TRUE" || V !== "false" && V !== "FALSE" && (function(Q) {
          if (x.test(Q)) {
            var X = parseFloat(Q);
            if (b < X && X < g) return !0;
          }
          return !1;
        }(V) ? parseFloat(V) : $.test(V) ? new Date(V) : V === "" ? null : V) : V;
        var J;
      }
      function H(C, V, J, Q) {
        var X = { type: C, code: V, message: J };
        Q !== void 0 && (X.row = Q), f.errors.push(X);
      }
      this.parse = function(C, V, J) {
        var Q = p.quoteChar || '"';
        if (p.newline || (p.newline = function(ae, Y) {
          ae = ae.substring(0, 1048576);
          var xe = new RegExp(A(Y) + "([^]*?)" + A(Y), "gm"), be = (ae = ae.replace(xe, "")).split("\r"), E = ae.split(`
`), ve = 1 < E.length && E[0].length < be[0].length;
          if (be.length === 1 || ve) return `
`;
          for (var Re = 0, De = 0; De < be.length; De++) be[De][0] === `
` && Re++;
          return Re >= be.length / 2 ? `\r
` : "\r";
        }(C, Q)), O = !1, p.delimiter) T(p.delimiter) && (p.delimiter = p.delimiter(C), f.meta.delimiter = p.delimiter);
        else {
          var X = function(ae, Y, xe, be, E) {
            var ve, Re, De, Se;
            E = E || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var B = 0; B < E.length; B++) {
              var G = E[B], ce = 0, ue = 0, Ae = 0;
              De = void 0;
              for (var $e = new M({ comments: be, delimiter: G, newline: Y, preview: 10 }).parse(ae), Ce = 0; Ce < $e.data.length; Ce++) if (xe && w($e.data[Ce])) Ae++;
              else {
                var Ue = $e.data[Ce].length;
                ue += Ue, De !== void 0 ? 0 < Ue && (ce += Math.abs(Ue - De), De = Ue) : De = Ue;
              }
              0 < $e.data.length && (ue /= $e.data.length - Ae), (Re === void 0 || ce <= Re) && (Se === void 0 || Se < ue) && 1.99 < ue && (Re = ce, ve = G, Se = ue);
            }
            return { successful: !!(p.delimiter = ve), bestDelimiter: ve };
          }(C, p.newline, p.skipEmptyLines, p.comments, p.delimitersToGuess);
          X.successful ? p.delimiter = X.bestDelimiter : (O = !0, p.delimiter = c.DefaultDelimiter), f.meta.delimiter = p.delimiter;
        }
        var te = I(p);
        return p.preview && p.header && te.preview++, d = C, j = new M(te), f = j.parse(d, V, J), W(), Z ? { meta: { paused: !0 } } : f || { meta: { paused: !1 } };
      }, this.paused = function() {
        return Z;
      }, this.pause = function() {
        Z = !0, j.abort(), d = T(p.chunk) ? "" : d.substring(j.getCharIndex());
      }, this.resume = function() {
        N.streamer._halted ? (Z = !1, N.streamer.parseChunk(d, !0)) : setTimeout(N.resume, 3);
      }, this.aborted = function() {
        return R;
      }, this.abort = function() {
        R = !0, j.abort(), f.meta.aborted = !0, T(p.complete) && p.complete(f), d = "";
      };
    }
    function A(p) {
      return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function M(p) {
      var d, j = (p = p || {}).delimiter, O = p.newline, g = p.comments, b = p.step, x = p.preview, $ = p.fastMode, N = d = p.quoteChar === void 0 || p.quoteChar === null ? '"' : p.quoteChar;
      if (p.escapeChar !== void 0 && (N = p.escapeChar), (typeof j != "string" || -1 < c.BAD_DELIMITERS.indexOf(j)) && (j = ","), g === j) throw new Error("Comment character same as delimiter");
      g === !0 ? g = "#" : (typeof g != "string" || -1 < c.BAD_DELIMITERS.indexOf(g)) && (g = !1), O !== `
` && O !== "\r" && O !== `\r
` && (O = `
`);
      var m = 0, ne = !1;
      this.parse = function(Z, R, le) {
        if (typeof Z != "string") throw new Error("Input must be a string");
        var f = Z.length, v = j.length, w = O.length, W = g.length, K = T(b), q = [], H = [], C = [], V = m = 0;
        if (!Z) return Se();
        if ($ || $ !== !1 && Z.indexOf(d) === -1) {
          for (var J = Z.split(O), Q = 0; Q < J.length; Q++) {
            if (C = J[Q], m += C.length, Q !== J.length - 1) m += O.length;
            else if (le) return Se();
            if (!g || C.substring(0, W) !== g) {
              if (K) {
                if (q = [], E(C.split(j)), B(), ne) return Se();
              } else E(C.split(j));
              if (x && x <= Q) return q = q.slice(0, x), Se(!0);
            }
          }
          return Se();
        }
        for (var X = Z.indexOf(j, m), te = Z.indexOf(O, m), ae = new RegExp(A(N) + A(d), "g"), Y = Z.indexOf(d, m); ; ) if (Z[m] !== d) if (g && C.length === 0 && Z.substring(m, m + W) === g) {
          if (te === -1) return Se();
          m = te + w, te = Z.indexOf(O, m), X = Z.indexOf(j, m);
        } else if (X !== -1 && (X < te || te === -1)) C.push(Z.substring(m, X)), m = X + v, X = Z.indexOf(j, m);
        else {
          if (te === -1) break;
          if (C.push(Z.substring(m, te)), De(te + w), K && (B(), ne)) return Se();
          if (x && q.length >= x) return Se(!0);
        }
        else for (Y = m, m++; ; ) {
          if ((Y = Z.indexOf(d, Y + 1)) === -1) return le || H.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: q.length, index: m }), Re();
          if (Y === f - 1) return Re(Z.substring(m, Y).replace(ae, d));
          if (d !== N || Z[Y + 1] !== N) {
            if (d === N || Y === 0 || Z[Y - 1] !== N) {
              X !== -1 && X < Y + 1 && (X = Z.indexOf(j, Y + 1)), te !== -1 && te < Y + 1 && (te = Z.indexOf(O, Y + 1));
              var xe = ve(te === -1 ? X : Math.min(X, te));
              if (Z.substr(Y + 1 + xe, v) === j) {
                C.push(Z.substring(m, Y).replace(ae, d)), Z[m = Y + 1 + xe + v] !== d && (Y = Z.indexOf(d, m)), X = Z.indexOf(j, m), te = Z.indexOf(O, m);
                break;
              }
              var be = ve(te);
              if (Z.substring(Y + 1 + be, Y + 1 + be + w) === O) {
                if (C.push(Z.substring(m, Y).replace(ae, d)), De(Y + 1 + be + w), X = Z.indexOf(j, m), Y = Z.indexOf(d, m), K && (B(), ne)) return Se();
                if (x && q.length >= x) return Se(!0);
                break;
              }
              H.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: q.length, index: m }), Y++;
            }
          } else Y++;
        }
        return Re();
        function E(G) {
          q.push(G), V = m;
        }
        function ve(G) {
          var ce = 0;
          if (G !== -1) {
            var ue = Z.substring(Y + 1, G);
            ue && ue.trim() === "" && (ce = ue.length);
          }
          return ce;
        }
        function Re(G) {
          return le || (G === void 0 && (G = Z.substring(m)), C.push(G), m = f, E(C), K && B()), Se();
        }
        function De(G) {
          m = G, E(C), C = [], te = Z.indexOf(O, m);
        }
        function Se(G) {
          return { data: q, errors: H, meta: { delimiter: j, linebreak: O, aborted: ne, truncated: !!G, cursor: V + (R || 0) } };
        }
        function B() {
          b(Se()), q = [], H = [];
        }
      }, this.abort = function() {
        ne = !0;
      }, this.getCharIndex = function() {
        return m;
      };
    }
    function L(p) {
      var d = p.data, j = i[d.workerId], O = !1;
      if (d.error) j.userError(d.error, d.file);
      else if (d.results && d.results.data) {
        var g = { abort: function() {
          O = !0, U(d.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: F, resume: F };
        if (T(j.userStep)) {
          for (var b = 0; b < d.results.data.length && (j.userStep({ data: d.results.data[b], errors: d.results.errors, meta: d.results.meta }, g), !O); b++) ;
          delete d.results;
        } else T(j.userChunk) && (j.userChunk(d.results, g, d.file), delete d.results);
      }
      d.finished && !O && U(d.workerId, d.results);
    }
    function U(p, d) {
      var j = i[p];
      T(j.userComplete) && j.userComplete(d), j.terminate(), delete i[p];
    }
    function F() {
      throw new Error("Not implemented.");
    }
    function I(p) {
      if (typeof p != "object" || p === null) return p;
      var d = Array.isArray(p) ? [] : {};
      for (var j in p) d[j] = I(p[j]);
      return d;
    }
    function z(p, d) {
      return function() {
        p.apply(d, arguments);
      };
    }
    function T(p) {
      return typeof p == "function";
    }
    return o && (n.onmessage = function(p) {
      var d = p.data;
      if (c.WORKER_ID === void 0 && d && (c.WORKER_ID = d.workerId), typeof d.input == "string") n.postMessage({ workerId: c.WORKER_ID, results: c.parse(d.input, d.config), finished: !0 });
      else if (n.File && d.input instanceof File || d.input instanceof Object) {
        var j = c.parse(d.input, d.config);
        j && n.postMessage({ workerId: c.WORKER_ID, results: j, finished: !0 });
      }
    }), (y.prototype = Object.create(h.prototype)).constructor = y, (_.prototype = Object.create(h.prototype)).constructor = _, (S.prototype = Object.create(S.prototype)).constructor = S, (P.prototype = Object.create(h.prototype)).constructor = P, c;
  });
})(Bo);
var Ac = Bo.exports;
const Vo = /* @__PURE__ */ lo(Ac);
function Oc(e) {
  const t = Vo.parse(e, {
    header: !0,
    skipEmptyLines: !0
  });
  return !t.data || t.data.length < 1 ? [] : t.data.map((r) => {
    const n = {};
    for (const [s, o] of Object.entries(r))
      n[s] = typeof o == "string" ? o : o == null ? "" : String(o);
    return n;
  });
}
function Pc(e) {
  return e.length === 0 ? "" : Vo.unparse(e, {
    quotes: !0
  });
}
function Dc(e) {
  const t = e.meta.stats.imported, r = e.meta.stats.invalid || [], n = r.length, s = {}, o = r.map((y) => {
    const _ = xc(y.error);
    return _.split(",").forEach((S) => {
      const P = S.trim();
      s[P] ? s[P].count += 1 : s[P] = { message: P, count: 1 };
    }), { ...y, error: _ };
  }), i = Pc(o), l = new Blob([i], { type: "text/csv" }), c = URL.createObjectURL(l), u = e.meta.import_label, h = u ? `${u.name} - Errors.csv` : `Import ${Fe().format("YYYY-MM-DD HH:mm")} - Errors.csv`;
  return {
    importedCount: t,
    errorCount: n,
    errorCsvUrl: c,
    errorCsvName: h,
    errorList: Object.values(s)
  };
}
const Wo = () => ({
  status: "INIT",
  file: null,
  fileData: null,
  mapping: null,
  selectedLabelSlugs: [],
  dataPreviewIndex: 0,
  mappingError: null,
  showMappingErrors: !1,
  importResponse: null,
  errorMessage: null,
  errorHeader: "Import error",
  showTryAgainButton: !0,
  dragOver: !1,
  fileError: null
});
function Nc(e, t) {
  switch (t.type) {
    case "SELECT_FILE":
      return {
        ...e,
        status: "MAPPING",
        file: t.file,
        fileData: null,
        mapping: null,
        dataPreviewIndex: 0,
        mappingError: null,
        showMappingErrors: !1,
        fileError: null
      };
    case "SET_FILE_ERROR":
      return {
        ...e,
        fileError: t.fileError
      };
    case "PARSE_SUCCESS":
      return {
        ...e,
        fileData: t.fileData,
        mapping: t.mapping,
        mappingError: t.mappingError
      };
    case "PARSE_FAILURE":
      return {
        ...e,
        fileData: [],
        mapping: null,
        mappingError: t.mappingError
      };
    case "UPDATE_MAPPING":
      return {
        ...e,
        mapping: t.mapping,
        mappingError: t.mappingError
      };
    case "SET_SELECTED_LABEL_SLUGS":
      return {
        ...e,
        selectedLabelSlugs: t.selectedLabelSlugs
      };
    case "SET_DATA_PREVIEW_INDEX":
      return {
        ...e,
        dataPreviewIndex: t.dataPreviewIndex
      };
    case "SET_SHOW_MAPPING_ERRORS":
      return {
        ...e,
        showMappingErrors: t.showMappingErrors
      };
    case "SET_DRAG_OVER":
      return {
        ...e,
        dragOver: t.dragOver
      };
    case "UPLOAD_START":
      return {
        ...e,
        status: "UPLOADING",
        showMappingErrors: !1
      };
    case "UPLOAD_ACCEPTED":
      return {
        ...e,
        status: "PROCESSING"
      };
    case "UPLOAD_COMPLETE":
      return {
        ...e,
        status: "COMPLETE",
        importResponse: t.importResponse
      };
    case "UPLOAD_ERROR":
      return {
        ...e,
        status: "ERROR",
        errorMessage: t.errorMessage,
        errorHeader: t.errorHeader ?? "Import error",
        showTryAgainButton: t.showTryAgainButton ?? !0
      };
    case "RESET":
      return Wo();
    default:
      return e;
  }
}
function Tc({
  open: e,
  onOpenChange: t,
  onComplete: r
}) {
  var U;
  const [n, s] = io(Nc, void 0, Wo), o = Pe(null), i = _r({
    selectedSlugs: n.selectedLabelSlugs,
    onSelectionChange: (F) => s({ type: "SET_SELECTED_LABEL_SLUGS", selectedLabelSlugs: F })
  }), l = re(() => {
    o.current && (URL.revokeObjectURL(o.current), o.current = null);
  }, []), c = re(() => {
    l(), s({ type: "RESET" });
  }, [l]);
  Te(() => () => {
    l();
  }, [l]);
  const u = re((F) => {
    !F && n.status === "UPLOADING" || (F || c(), t(F));
  }, [t, c, n.status]);
  Te(() => {
    if (!n.file)
      return;
    let F = !1;
    const I = new FileReader();
    return I.onload = (z) => {
      var T;
      if (!F)
        try {
          const p = (T = z.target) == null ? void 0 : T.result, d = Oc(p);
          if (d.length > 0) {
            const j = wc(d), O = new En(j);
            s({
              type: "PARSE_SUCCESS",
              fileData: d,
              mapping: O,
              mappingError: O.getKeyByValue("email") ? null : 'Please map "Email" to one of the fields in the CSV.'
            });
          } else
            s({
              type: "PARSE_SUCCESS",
              fileData: [],
              mapping: null,
              mappingError: "File is empty, nothing to import. Please select a different file."
            });
        } catch {
          s({
            type: "PARSE_FAILURE",
            mappingError: "Failed to parse this file. Please try another CSV file."
          });
        }
    }, I.onerror = () => {
      var z;
      F || s({
        type: "PARSE_FAILURE",
        mappingError: `Failed to read file${(z = I.error) != null && z.message ? `: ${I.error.message}` : ""}`
      });
    }, I.onabort = () => {
      F || s({
        type: "PARSE_FAILURE",
        mappingError: "File read was interrupted. Please try again."
      });
    }, I.readAsText(n.file), () => {
      F = !0, I.readyState === FileReader.LOADING && I.abort();
    };
  }, [n.file]);
  const h = re((F) => {
    const I = /(?:\.([^.]+))?$/.exec(F.name), z = I == null ? void 0 : I[1];
    return !z || z.toLowerCase() !== "csv" ? (s({
      type: "SET_FILE_ERROR",
      fileError: "The file type you uploaded is not supported"
    }), !1) : (s({ type: "SET_FILE_ERROR", fileError: null }), !0);
  }, []), y = re((F) => {
    h(F) && s({ type: "SELECT_FILE", file: F });
  }, [h]), _ = re((F, I) => {
    if (!n.mapping)
      return;
    const z = n.mapping.updateMapping(F, I), T = n.fileData && n.fileData.length === 0 ? "File is empty, nothing to import. Please select a different file." : z.getKeyByValue("email") ? null : 'Please map "Email" to one of the fields in the CSV.';
    s({
      type: "UPDATE_MAPPING",
      mapping: z,
      mappingError: T
    });
  }, [n.fileData, n.mapping]), S = re(async () => {
    var I;
    if (!n.file || n.mappingError) {
      s({ type: "SET_SHOW_MAPPING_ERRORS", showMappingErrors: !0 });
      return;
    }
    s({ type: "UPLOAD_START" });
    const F = new FormData();
    F.append("membersfile", n.file);
    for (const z of n.selectedLabelSlugs) {
      const T = i.labels.find((p) => p.slug === z);
      T && F.append("labels", T.name);
    }
    if (n.mapping) {
      const z = n.mapping.toJSON();
      for (const [T, p] of Object.entries(z))
        p && F.append(`mapping[${T}]`, p);
    }
    try {
      const { apiRoot: z } = xi(), T = await fetch(`${z}/members/upload/`, {
        method: "POST",
        body: F,
        credentials: "include",
        mode: "cors",
        headers: {
          "app-pragma": "no-cache"
        }
      });
      if (T.status === 202) {
        s({ type: "UPLOAD_ACCEPTED" }), r == null || r();
        return;
      }
      if (T.status === 413) {
        s({
          type: "UPLOAD_ERROR",
          errorMessage: "The file you uploaded was larger than the maximum file size your server allows."
        });
        return;
      }
      if (!T.ok) {
        const j = await T.json(), O = (I = j == null ? void 0 : j.errors) == null ? void 0 : I[0];
        if ((O == null ? void 0 : O.type) === "HostLimitError" && (O == null ? void 0 : O.code) === "EMAIL_VERIFICATION_NEEDED") {
          s({
            type: "UPLOAD_ERROR",
            errorMessage: O.message,
            errorHeader: "Woah there cowboy, that's a big list",
            showTryAgainButton: !1
          }), r == null || r();
          return;
        }
        if ((O == null ? void 0 : O.type) === "DataImportError" || (O == null ? void 0 : O.type) === "ValidationError") {
          s({
            type: "UPLOAD_ERROR",
            errorMessage: O.message
          });
          return;
        }
        s({
          type: "UPLOAD_ERROR",
          errorMessage: "An unexpected error occurred, please try again"
        });
        return;
      }
      const p = await T.json(), d = Dc(p);
      l(), o.current = d.errorCsvUrl, s({
        type: "UPLOAD_COMPLETE",
        importResponse: d
      }), r == null || r();
    } catch {
      s({
        type: "UPLOAD_ERROR",
        errorMessage: "An unexpected error occurred, please try again"
      });
    }
  }, [
    n.file,
    n.mapping,
    n.mappingError,
    n.selectedLabelSlugs,
    i.labels,
    l,
    r
  ]), P = n.fileData ? !!n.fileData[n.dataPreviewIndex + 1] : !1, k = n.dataPreviewIndex > 0, A = ((U = n.fileData) == null ? void 0 : U.length) ?? 0, M = n.status === "MAPPING" || n.status === "UPLOADING", L = de(() => {
    switch (n.status) {
      case "PROCESSING":
        return "Import in progress";
      case "COMPLETE":
        return "Import complete";
      case "ERROR":
        return n.errorHeader;
      default:
        return "Import members";
    }
  }, [n.errorHeader, n.status]);
  return /* @__PURE__ */ a.jsx(Ot, { open: e, onOpenChange: u, children: /* @__PURE__ */ a.jsxs(Pt, { className: Oe("gap-0", M && "max-w-2xl"), children: [
    /* @__PURE__ */ a.jsxs(Dt, { children: [
      /* @__PURE__ */ a.jsx(Nt, { children: L }),
      /* @__PURE__ */ a.jsx(si, { className: "sr-only", children: "Import members from a CSV file." })
    ] }),
    n.status === "INIT" && /* @__PURE__ */ a.jsx(
      mc,
      {
        fileError: n.fileError,
        onClose: () => u(!1),
        onDropAccepted: y,
        onDropRejected: () => s({
          type: "SET_FILE_ERROR",
          fileError: "The file type you uploaded is not supported"
        })
      }
    ),
    (n.status === "MAPPING" || n.status === "UPLOADING") && /* @__PURE__ */ a.jsx(
      Ec,
      {
        dataPreviewIndex: n.dataPreviewIndex,
        fileData: n.fileData,
        hasNextRecord: P,
        hasPrevRecord: k,
        labelPicker: i,
        mapping: n.mapping,
        mappingError: n.mappingError,
        membersCount: A,
        showMappingErrors: n.showMappingErrors,
        status: n.status,
        onDataPreviewIndexChange: (F) => {
          s({
            type: "SET_DATA_PREVIEW_INDEX",
            dataPreviewIndex: F
          });
        },
        onStartOver: c,
        onUpdateMapping: _,
        onUpload: S
      }
    ),
    n.status === "PROCESSING" && /* @__PURE__ */ a.jsx(
      Sc,
      {
        onClose: () => u(!1),
        onUploadAnotherFile: c
      }
    ),
    n.status === "COMPLETE" && n.importResponse && /* @__PURE__ */ a.jsx(
      jc,
      {
        importResponse: n.importResponse,
        onClose: () => u(!1),
        onReset: c
      }
    ),
    n.status === "ERROR" && /* @__PURE__ */ a.jsx(
      kc,
      {
        errorMessage: n.errorMessage,
        showTryAgainButton: n.showTryAgainButton,
        onClose: () => u(!1),
        onTryAgain: c
      }
    )
  ] }) });
}
function St(e) {
  return `'${e.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
function Rc(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp);
}
function Ic(e) {
  const t = Object.keys(e);
  if (t.length !== 1)
    return;
  const [r] = t;
  if (!r.startsWith("$"))
    return r;
}
function wr(e) {
  const t = Ic(e);
  if (!t)
    return;
  const r = e[t];
  if (Rc(r)) {
    const n = Object.entries(r);
    if (n.length !== 1)
      return;
    const [s, o] = n[0];
    return { field: t, operator: s, value: o };
  }
  return {
    field: t,
    operator: "$eq",
    value: r
  };
}
const $c = {
  $eq: "is",
  $ne: "is-not"
}, Cc = {
  $eq: "is",
  $gt: "is-greater",
  $gte: "is-or-greater",
  $lt: "is-less",
  $lte: "is-or-less"
}, zc = {
  contains: "~",
  "does-not-contain": "-~",
  "starts-with": "~^",
  "does-not-start-with": "-~^",
  "ends-with": "~$",
  "does-not-end-with": "-~$"
}, Fc = {
  is: "",
  "is-greater": ">",
  "is-or-greater": ">=",
  "is-less": "<",
  "is-or-less": "<="
}, Lc = {
  "is-any": "",
  "is-not-any": "-"
}, Mc = /^[A-Za-z0-9_.-]+$/;
function He(e, t) {
  return (e == null ? void 0 : e.field) ?? t;
}
function Uc(e) {
  return e.map((t) => String(t)).sort((t, r) => t.localeCompare(r));
}
function lr(e, t) {
  return typeof e == "string" ? t != null && t.quoteStrings || e.startsWith("-") || !Mc.test(e) ? St(e) : e : String(e);
}
function ls(e, t = !1) {
  const r = e.source, n = r.startsWith("^"), s = r.endsWith("$");
  return n && s ? t ? "does-not-contain" : "contains" : n ? t ? "does-not-start-with" : "starts-with" : s ? t ? "does-not-end-with" : "ends-with" : t ? "does-not-contain" : "contains";
}
function cs(e) {
  let t = e.source;
  return t.startsWith("^") && (t = t.slice(1)), t.endsWith("$") && (t = t.slice(0, -1)), t.replace(/\\([\\.^$|?*+()[\]{}\/-])/g, "$1");
}
function We(e) {
  return {
    parse(t, r) {
      const n = wr(t), s = He(e, r.key);
      if (!n || n.field !== s)
        return null;
      const o = $c[n.operator];
      return o ? {
        field: r.key,
        operator: o,
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], s = He(e, r.key);
      return n == null || n === "" ? null : t.operator === "is" ? [`${s}:${lr(n, e)}`] : t.operator === "is-not" ? [`${s}:-${lr(n, e)}`] : null;
    }
  };
}
function us(e) {
  return {
    parse(t, r) {
      const n = wr(t), s = He(e, r.key);
      return !n || n.field !== s ? null : n.operator === "$eq" && typeof n.value == "string" ? {
        field: r.key,
        operator: "is",
        values: [n.value]
      } : n.operator === "$regex" && n.value instanceof RegExp ? {
        field: r.key,
        operator: ls(n.value),
        values: [cs(n.value)]
      } : n.operator === "$not" && n.value instanceof RegExp ? {
        field: r.key,
        operator: ls(n.value, !0),
        values: [cs(n.value)]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], s = He(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      if (t.operator === "is")
        return [`${s}:${St(n)}`];
      const o = zc[t.operator];
      return o ? [`${s}:${o}${St(n)}`] : null;
    }
  };
}
function Cr(e) {
  return {
    parse(t, r) {
      const n = wr(t), s = He(e, r.key);
      return !n || n.field !== s ? null : n.operator === "$in" && Array.isArray(n.value) ? {
        field: r.key,
        operator: "is-any",
        values: n.value
      } : n.operator === "$nin" && Array.isArray(n.value) ? {
        field: r.key,
        operator: "is-not-any",
        values: n.value
      } : n.operator === "$eq" ? {
        field: r.key,
        operator: "is-any",
        values: [n.value]
      } : n.operator === "$ne" ? {
        field: r.key,
        operator: "is-not-any",
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = He(e, r.key);
      if (!t.values.length)
        return null;
      const s = Lc[t.operator];
      if (s === void 0)
        return null;
      const o = Uc(t.values);
      return e != null && e.serializeSingletonAsScalar && o.length === 1 ? [`${n}:${s}${lr(o[0], e)}`] : [`${n}:${s}[${o.map((i) => lr(i, e)).join(",")}]`];
    }
  };
}
function zr(e) {
  return {
    parse(t, r) {
      const n = wr(t), s = He(e, r.key);
      if (!n || n.field !== s || typeof n.value != "number")
        return null;
      const o = Cc[n.operator];
      return o ? {
        field: r.key,
        operator: o,
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], s = He(e, r.key), o = typeof n == "string" ? n.trim() === "" ? NaN : Number(n) : n;
      if (typeof o != "number" || Number.isNaN(o))
        return null;
      const i = Fc[t.operator];
      return i === void 0 ? null : [`${s}:${i}${o}`];
    }
  };
}
function Zc(e, t) {
  const r = Fe.tz(e, "YYYY-MM-DD", t).startOf("day").utc().toISOString(), n = Fe.tz(e, "YYYY-MM-DD", t).endOf("day").utc().toISOString();
  return { start: r, end: n };
}
const fs = ["is", "contains", "does-not-contain", "starts-with", "ends-with"], Zt = ["is-less", "is-or-less", "is-greater", "is-or-greater"], Fr = ["is", "is-greater", "is-less"], Ze = ["is", "is-not"], Lr = ["is-any", "is-not-any"], Bc = [
  { value: "active", label: "Active" },
  { value: "trialing", label: "Trialing" },
  { value: "canceled", label: "Canceled" },
  { value: "unpaid", label: "Unpaid" },
  { value: "past_due", label: "Past Due" },
  { value: "incomplete", label: "Incomplete" },
  { value: "incomplete_expired", label: "Incomplete - Expired" }
];
function Vc(e, t) {
  if (typeof e != "string" || !e)
    return null;
  const r = Fe.utc(e, ["YYYY-MM-DD HH:mm:ss.SSS", "YYYY-MM-DD HH:mm:ss"], !0);
  if (r.isValid())
    return r.tz(t).format("YYYY-MM-DD");
  const n = Fe.tz(e, Fe.ISO_8601, !0, t);
  return n.isValid() ? n.format("YYYY-MM-DD") : null;
}
const Bt = {
  parse(e, t) {
    const r = Object.entries(e)[0];
    if (!r || r[0] !== t.key || typeof r[1] != "object" || r[1] === null)
      return null;
    const [n, s] = Object.entries(r[1])[0] ?? [], o = Vc(s, t.timezone);
    if (!o)
      return null;
    switch (n) {
      case "$lt":
        return { field: t.key, operator: "is-less", values: [o] };
      case "$lte":
        return { field: t.key, operator: "is-or-less", values: [o] };
      case "$gt":
        return { field: t.key, operator: "is-greater", values: [o] };
      case "$gte":
        return { field: t.key, operator: "is-or-greater", values: [o] };
      default:
        return null;
    }
  },
  serialize(e, t) {
    const r = e.values[0];
    if (typeof r != "string" || !r)
      return null;
    const { start: n, end: s } = Zc(r, t.timezone);
    switch (e.operator) {
      case "is-less":
        return [`${t.key}:<'${n}'`];
      case "is-or-less":
        return [`${t.key}:<='${s}'`];
      case "is-greater":
        return [`${t.key}:>'${s}'`];
      case "is-or-greater":
        return [`${t.key}:>='${n}'`];
      default:
        return null;
    }
  }
}, Wc = {
  parse() {
    return null;
  },
  serialize(e) {
    const t = e.values[0];
    return e.operator !== "is" && e.operator !== "is-not" ? null : t === "email-disabled" ? e.operator === "is" ? ["(email_disabled:1)"] : ["(email_disabled:0)"] : t === "subscribed" ? e.operator === "is" ? ["(subscribed:true+email_disabled:0)"] : ["(subscribed:false,email_disabled:1)"] : t === "unsubscribed" ? e.operator === "is" ? ["(subscribed:false+email_disabled:0)"] : ["(subscribed:true,email_disabled:1)"] : null;
  }
}, Gc = {
  parse() {
    return null;
  },
  serialize(e, t) {
    const r = t.params.slug, n = e.values[0];
    return !r || e.operator !== "is" ? null : n === "subscribed" ? [`(newsletters.slug:${r}+email_disabled:0)`] : n === "unsubscribed" ? [`(newsletters.slug:-${r},email_disabled:1)`] : null;
  }
}, Kc = {
  parse() {
    return null;
  },
  serialize(e) {
    const t = e.values[0];
    return typeof t != "string" || !t || e.operator !== "1" && e.operator !== "0" ? null : [`(feedback.post_id:${St(t)}+feedback.score:${e.operator})`];
  }
}, jt = {
  name: {
    operators: fs,
    ui: {
      label: "Name",
      type: "text",
      placeholder: "Enter name...",
      defaultOperator: "contains",
      className: "w-48"
    },
    codec: us()
  },
  email: {
    operators: fs,
    ui: {
      label: "Email",
      type: "text",
      placeholder: "Enter email...",
      defaultOperator: "contains",
      className: "w-64"
    },
    codec: us()
  },
  label: {
    operators: Lr,
    ui: {
      label: "Label",
      type: "multiselect",
      searchable: !0,
      className: "w-64",
      defaultOperator: "is-any"
    },
    metadata: {
      activeColumn: {
        key: "labels",
        label: "Labels",
        include: "labels"
      }
    },
    codec: Cr()
  },
  subscribed: {
    operators: Ze,
    ui: {
      label: "Newsletter subscription",
      type: "select",
      searchable: !1
    },
    options: [
      { value: "subscribed", label: "Subscribed" },
      { value: "unsubscribed", label: "Unsubscribed" },
      { value: "email-disabled", label: "Email disabled" }
    ],
    codec: Wc
  },
  last_seen_at: {
    operators: Zt,
    ui: {
      label: "Last seen",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    codec: Bt
  },
  created_at: {
    operators: Zt,
    ui: {
      label: "Created",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    codec: Bt
  },
  signup: {
    operators: Ze,
    ui: {
      label: "Signed up on post/page",
      type: "select",
      searchable: !0,
      placeholder: "Select a post or page...",
      className: "w-64"
    },
    codec: We({ quoteStrings: !0 })
  },
  "newsletters.:slug": {
    operators: ["is"],
    ui: {
      label: "Newsletter",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "subscribed", label: "Subscribed" },
      { value: "unsubscribed", label: "Unsubscribed" }
    ],
    codec: Gc
  },
  tier_id: {
    operators: Lr,
    ui: {
      label: "Membership tier",
      type: "multiselect",
      searchable: !0,
      className: "w-64",
      defaultOperator: "is-any"
    },
    metadata: {
      activeColumn: {
        key: "tiers",
        label: "Tiers",
        include: "tiers"
      }
    },
    codec: Cr()
  },
  status: {
    operators: Ze,
    ui: {
      label: "Member status",
      type: "select",
      searchable: !1
    },
    options: [
      { value: "paid", label: "Paid" },
      { value: "free", label: "Free" },
      { value: "comped", label: "Complimentary" }
    ],
    codec: We()
  },
  "subscriptions.plan_interval": {
    operators: Ze,
    ui: {
      label: "Billing period",
      type: "select",
      searchable: !1
    },
    options: [
      { value: "month", label: "Monthly" },
      { value: "year", label: "Yearly" }
    ],
    metadata: {
      activeColumn: {
        key: "subscriptions.plan_interval",
        label: "Billing period",
        include: "subscriptions"
      }
    },
    codec: We()
  },
  "subscriptions.status": {
    operators: Ze,
    ui: {
      label: "Stripe subscription status",
      type: "select",
      searchable: !1
    },
    options: Bc,
    metadata: {
      activeColumn: {
        key: "subscriptions.status",
        label: "Subscription status",
        include: "subscriptions"
      }
    },
    codec: We()
  },
  "subscriptions.start_date": {
    operators: Zt,
    ui: {
      label: "Paid start date",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    metadata: {
      activeColumn: {
        key: "subscriptions.start_date",
        label: "Paid start date",
        include: "subscriptions"
      }
    },
    codec: Bt
  },
  "subscriptions.current_period_end": {
    operators: Zt,
    ui: {
      label: "Next billing date",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    metadata: {
      activeColumn: {
        key: "subscriptions.current_period_end",
        label: "Next billing date",
        include: "subscriptions"
      }
    },
    codec: Bt
  },
  conversion: {
    operators: Ze,
    ui: {
      label: "Subscription started on post/page",
      type: "select",
      searchable: !0,
      placeholder: "Select a post or page...",
      className: "w-64"
    },
    codec: We({ quoteStrings: !0 })
  },
  email_count: {
    operators: Fr,
    ui: {
      label: "Emails sent (all time)",
      type: "number",
      defaultOperator: "is",
      defaultValue: 0,
      min: 0,
      className: "w-24"
    },
    codec: zr()
  },
  email_opened_count: {
    operators: Fr,
    ui: {
      label: "Emails opened (all time)",
      type: "number",
      defaultOperator: "is",
      defaultValue: 0,
      min: 0,
      className: "w-24"
    },
    codec: zr()
  },
  email_open_rate: {
    operators: Fr,
    ui: {
      label: "Open rate (all time)",
      type: "number",
      defaultOperator: "is",
      defaultValue: 0,
      min: 0,
      max: 100,
      suffix: "%",
      className: "w-24"
    },
    codec: zr()
  },
  "emails.post_id": {
    operators: Ze,
    ui: {
      label: "Sent email",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64"
    },
    codec: We({ quoteStrings: !0 })
  },
  "opened_emails.post_id": {
    operators: Ze,
    ui: {
      label: "Opened email",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64"
    },
    codec: We({ quoteStrings: !0 })
  },
  "clicked_links.post_id": {
    operators: Ze,
    ui: {
      label: "Clicked email",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64"
    },
    codec: We({ quoteStrings: !0 })
  },
  newsletter_feedback: {
    operators: ["1", "0"],
    ui: {
      label: "Responded with feedback",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64",
      defaultOperator: "1"
    },
    codec: Kc
  },
  offer_redemptions: {
    operators: Lr,
    ui: {
      label: "Offer",
      type: "multiselect",
      searchable: !0,
      className: "w-64",
      defaultOperator: "is-any"
    },
    metadata: {
      activeColumn: {
        key: "offer_redemptions",
        label: "Offer"
      }
    },
    codec: Cr({ quoteStrings: !0, serializeSingletonAsScalar: !0 })
  }
};
function Hc(e, t) {
  const r = e.split("."), n = t.split(".");
  if (r.length !== n.length)
    return null;
  const s = {};
  for (let o = 0; o < r.length; o += 1) {
    const i = r[o], l = n[o];
    if (i.startsWith(":")) {
      s[i.slice(1)] = l;
      continue;
    }
    if (i !== l)
      return null;
  }
  return s;
}
function Sn(e, t, r) {
  var s;
  const n = e[t];
  if (n)
    return {
      definition: n,
      context: {
        key: t,
        pattern: t,
        params: {},
        timezone: r
      }
    };
  for (const [o, i] of Object.entries(e))
    if ((s = i.parseKeys) != null && s.includes(t))
      return {
        definition: i,
        context: {
          key: o,
          pattern: o,
          params: {},
          timezone: r
        }
      };
  for (const [o, i] of Object.entries(e)) {
    if (!o.includes(":"))
      continue;
    const l = Hc(o, t);
    if (l)
      return {
        definition: i,
        context: {
          key: t,
          pattern: o,
          params: l,
          timezone: r
        }
      };
  }
}
const Yc = 2, ds = /* @__PURE__ */ new Set(["active", "trialing", "unpaid", "past_due"]);
function Go(e) {
  var r, n;
  const t = /* @__PURE__ */ new Map();
  for (const s of e) {
    const o = (n = (r = Sn(jt, s.field, "UTC")) == null ? void 0 : r.definition.metadata) == null ? void 0 : n.activeColumn;
    o && t.set(o.key, o);
  }
  return Array.from(t.values()).slice(0, Yc);
}
function qc(e) {
  const t = /* @__PURE__ */ new Set(["labels", "tiers"]);
  for (const r of Go(e))
    r.include && t.add(r.include);
  return Array.from(t).join(",");
}
function Jc({ filters: e, nql: t, search: r }) {
  if (!t && !r)
    return;
  const n = {
    include: qc(e),
    limit: "50",
    order: "created_at desc"
  };
  return t && (n.filter = t), r && (n.search = r), n;
}
function Qc({ nql: e, search: t }) {
  return !e && !t ? { all: !0 } : {
    ...e ? { filter: e } : {},
    ...t ? { search: t } : {}
  };
}
function Vt(e) {
  if (!(e != null && e.length))
    return null;
  const t = e.filter((n) => n.id);
  return t.length ? [...t].sort((n, s) => {
    const o = ds.has(n.status), i = ds.has(s.status);
    if (o && !i)
      return -1;
    if (!o && i)
      return 1;
    const l = new Date(n.current_period_end).getTime(), c = new Date(s.current_period_end).getTime();
    return Number.isNaN(l) && Number.isNaN(c) ? 0 : Number.isNaN(l) ? 1 : Number.isNaN(c) ? -1 : c - l;
  })[0] : null;
}
function ps(e, t) {
  return e ? {
    text: Fe.tz(e, t).format("D MMM YYYY"),
    subtext: Fe(e).fromNow()
  } : null;
}
function Xc(e, t, r) {
  var n, s, o, i, l, c, u, h;
  switch (e.key) {
    case "labels":
      return (n = t.labels) != null && n.length ? { text: t.labels.map((y) => y.name).join(", ") } : null;
    case "tiers":
      return (s = t.tiers) != null && s.length ? { text: t.tiers.map((y) => y.name).join(", ") } : null;
    case "subscriptions.plan_interval": {
      const y = (i = (o = Vt(t.subscriptions)) == null ? void 0 : o.plan) == null ? void 0 : i.interval;
      return y ? { text: y === "month" ? "Monthly" : "Yearly" } : null;
    }
    case "subscriptions.status": {
      const y = (l = Vt(t.subscriptions)) == null ? void 0 : l.status;
      return y ? {
        text: y.split("_").map((_) => _.charAt(0).toUpperCase() + _.slice(1)).join(" ")
      } : null;
    }
    case "subscriptions.start_date":
      return ps(
        (c = Vt(t.subscriptions)) == null ? void 0 : c.start_date,
        r
      );
    case "subscriptions.current_period_end":
      return ps(
        (u = Vt(t.subscriptions)) == null ? void 0 : u.current_period_end,
        r
      );
    case "offer_redemptions": {
      const y = (h = t.subscriptions) == null ? void 0 : h.map((_) => {
        var S;
        return (S = _.offer) == null ? void 0 : S.name;
      }).filter(Boolean);
      return y != null && y.length ? { text: y.join(", ") } : null;
    }
    default:
      return null;
  }
}
const eu = "NewslettersResponseType", Ko = yo({
  dataType: eu,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (e, t) => {
    var r;
    return {
      ...t,
      page: (((r = e.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((s) => s.newsletters), n = t[t.length - 1].meta;
    return {
      newsletters: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
async function hs(e, t) {
  const r = new URLSearchParams({ limit: "all" });
  e && r.set("filter", e), t && r.set("search", t);
  const n = (/* @__PURE__ */ new Date()).toJSON().substring(0, 10);
  await Ei(`/members/upload/?${r}`, `members.${n}.csv`);
}
const tu = ({
  hasFilterOrSearch: e,
  memberCount: t,
  nql: r,
  search: n,
  canBulkDelete: s,
  onImportComplete: o
}) => {
  const [i, l] = ie(!1), [c, u] = ie(!1), [h, y] = ie(!1), [_, S] = ie(!1), [P, k] = ie(!1), { data: A, isLoading: M } = Ko({
    searchParams: { filter: "status:-archived", limit: "50" }
  }), L = (A == null ? void 0 : A.newsletters) || [], { mutateAsync: U, isLoading: F } = ai(), { mutate: I, isLoading: z } = ii(), [T, p] = ie(!1), d = Qc({ nql: r, search: n }), j = re(async () => {
    try {
      await hs(r, n);
    } catch (N) {
      throw Ne.error("Export failed", {
        description: "There was a problem downloading your member data. Please check your connection and try again."
      }), N;
    }
  }, [r, n]), O = re(async (N) => {
    try {
      for (const m of N)
        await U({
          ...d,
          action: {
            type: "addLabel",
            meta: { label: { id: m } }
          }
        });
      u(!1), Ne.success(N.length > 1 ? "Labels added successfully" : "Label added successfully");
    } catch {
      Ne.error("Failed to add label", {
        description: "There was a problem applying this label. Please try again."
      });
    }
  }, [U, d]), g = re(async (N) => {
    try {
      for (const m of N)
        await U({
          ...d,
          action: {
            type: "removeLabel",
            meta: { label: { id: m } }
          }
        });
      y(!1), Ne.success(N.length > 1 ? "Labels removed successfully" : "Label removed successfully");
    } catch {
      Ne.error("Failed to remove label", {
        description: "There was a problem removing this label. Please try again."
      });
    }
  }, [U, d]), b = re(async (N) => {
    const m = d;
    if (N === null) {
      try {
        await U({
          ...m,
          action: { type: "unsubscribe" }
        }), S(!1), Ne.success("Members unsubscribed successfully");
      } catch {
        Ne.error("Failed to unsubscribe members", {
          description: "There was a problem unsubscribing these members. Please try again."
        });
      }
      return;
    }
    p(!0);
    try {
      const ne = await Promise.allSettled(
        N.map((le) => U({
          ...m,
          action: { type: "unsubscribe", newsletter: le }
        }))
      ), Z = ne.filter((le) => le.status === "fulfilled").length, R = ne.length;
      S(!1), Z === R ? Ne.success(`Unsubscribed from ${R} ${R === 1 ? "newsletter" : "newsletters"}`) : Z > 0 ? Ne.warning(`Unsubscribed from ${Z} of ${R} newsletters`, {
        description: "Some newsletters could not be unsubscribed. Please try again."
      }) : Ne.error("Failed to unsubscribe members", {
        description: "There was a problem unsubscribing these members. Please try again."
      });
    } catch {
      Ne.error("Failed to unsubscribe members", {
        description: "There was a problem unsubscribing these members. Please try again."
      });
    } finally {
      p(!1);
    }
  }, [U, d]), x = re(() => {
    I(d, {
      onSuccess: () => {
        k(!1), Ne.success("Members deleted successfully");
      },
      onError: () => {
        Ne.error("Failed to delete members", {
          description: "There was a problem deleting these members. Please try again."
        });
      }
    });
  }, [I, d]), $ = re(async () => {
    try {
      await hs(r, n);
    } catch (N) {
      throw Ne.error("Export failed", {
        description: "There was a problem downloading your backup. Please check your connection and try again."
      }), N;
    }
  }, [r, n]);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(Wi, { children: [
      /* @__PURE__ */ a.jsx(Gi, { asChild: !0, children: /* @__PURE__ */ a.jsx(se, { "data-testid": "members-actions", variant: "outline", children: /* @__PURE__ */ a.jsx(Ki, { className: "size-4" }) }) }),
      /* @__PURE__ */ a.jsxs(Hi, { align: "end", children: [
        /* @__PURE__ */ a.jsxs(nt, { onClick: () => l(!0), children: [
          /* @__PURE__ */ a.jsx(vo, { className: "mr-2 size-4" }),
          "Import members"
        ] }),
        t > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(nt, { onClick: j, children: [
            /* @__PURE__ */ a.jsx(ji, { className: "mr-2 size-4" }),
            e ? `Export ${t.toLocaleString()} members` : "Export all members"
          ] }),
          /* @__PURE__ */ a.jsx(qn, {}),
          /* @__PURE__ */ a.jsxs(nt, { onClick: () => u(!0), children: [
            /* @__PURE__ */ a.jsx(wi, { className: "mr-2 size-4" }),
            "Add label to ",
            t.toLocaleString(),
            " ",
            t === 1 ? "member" : "members"
          ] }),
          /* @__PURE__ */ a.jsxs(nt, { onClick: () => y(!0), children: [
            /* @__PURE__ */ a.jsx(_o, { className: "mr-2 size-4" }),
            "Remove label from ",
            t.toLocaleString(),
            " ",
            t === 1 ? "member" : "members"
          ] }),
          /* @__PURE__ */ a.jsxs(
            nt,
            {
              disabled: M,
              onClick: () => S(!0),
              children: [
                /* @__PURE__ */ a.jsx(ki, { className: "mr-2 size-4" }),
                "Unsubscribe ",
                t.toLocaleString(),
                " ",
                t === 1 ? "member" : "members"
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(qn, {}),
          /* @__PURE__ */ a.jsxs(
            nt,
            {
              className: "text-destructive focus:text-destructive",
              disabled: !s,
              onClick: () => k(!0),
              children: [
                /* @__PURE__ */ a.jsx(Ai, { className: "mr-2 size-4" }),
                "Delete ",
                t.toLocaleString(),
                " ",
                t === 1 ? "member" : "members"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(se, { asChild: !0, children: /* @__PURE__ */ a.jsx("a", { className: "font-bold", href: "#/members/new", children: "New member" }) }),
    /* @__PURE__ */ a.jsx(
      Tc,
      {
        open: i,
        onComplete: o,
        onOpenChange: l
      }
    ),
    /* @__PURE__ */ a.jsx(
      fc,
      {
        isLoading: F,
        memberCount: t,
        open: c,
        onConfirm: O,
        onOpenChange: u
      }
    ),
    /* @__PURE__ */ a.jsx(
      dc,
      {
        isLoading: F,
        memberCount: t,
        nql: r,
        open: h,
        search: n,
        onConfirm: g,
        onOpenChange: y
      }
    ),
    /* @__PURE__ */ a.jsx(
      pc,
      {
        isLoading: F || T,
        memberCount: t,
        newsletters: L,
        open: _,
        onConfirm: b,
        onOpenChange: S
      }
    ),
    /* @__PURE__ */ a.jsx(
      hc,
      {
        isLoading: z,
        memberCount: t,
        open: P,
        onConfirm: x,
        onExportBackup: $,
        onOpenChange: k
      }
    )
  ] });
}, Ho = ({ children: e, className: t, ...r }) => /* @__PURE__ */ a.jsx("section", { className: Oe("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...r, children: e });
function D(e, t, r) {
  function n(l, c) {
    var u;
    Object.defineProperty(l, "_zod", {
      value: l._zod ?? {},
      enumerable: !1
    }), (u = l._zod).traits ?? (u.traits = /* @__PURE__ */ new Set()), l._zod.traits.add(e), t(l, c);
    for (const h in i.prototype)
      h in l || Object.defineProperty(l, h, { value: i.prototype[h].bind(l) });
    l._zod.constr = i, l._zod.def = c;
  }
  const s = (r == null ? void 0 : r.Parent) ?? Object;
  class o extends s {
  }
  Object.defineProperty(o, "name", { value: e });
  function i(l) {
    var c;
    const u = r != null && r.Parent ? new o() : this;
    n(u, l), (c = u._zod).deferred ?? (c.deferred = []);
    for (const h of u._zod.deferred)
      h();
    return u;
  }
  return Object.defineProperty(i, "init", { value: n }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (l) => {
      var c, u;
      return r != null && r.Parent && l instanceof r.Parent ? !0 : (u = (c = l == null ? void 0 : l._zod) == null ? void 0 : c.traits) == null ? void 0 : u.has(e);
    }
  }), Object.defineProperty(i, "name", { value: e }), i;
}
class pt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Yo extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const qo = {};
function Ye(e) {
  return qo;
}
function ru(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, s]) => t.indexOf(+n) === -1).map(([n, s]) => s);
}
function tn(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function jn(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function kn(e) {
  return e == null;
}
function An(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
const ms = Symbol("evaluating");
function pe(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== ms)
        return n === void 0 && (n = ms, n = r()), n;
    },
    set(s) {
      Object.defineProperty(e, t, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function et(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function tt(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function gs(e) {
  return JSON.stringify(e);
}
const Jo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function cr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const nu = jn(() => {
  var e;
  if (typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function mt(e) {
  if (cr(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(cr(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Qo(e) {
  return mt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const su = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function gt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Je(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (n._zod.parent = e), n;
}
function ee(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function ou(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function au(e, t) {
  const r = e._zod.def, n = tt(e._zod.def, {
    get shape() {
      const s = {};
      for (const o in t) {
        if (!(o in r.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && (s[o] = r.shape[o]);
      }
      return et(this, "shape", s), s;
    },
    checks: []
  });
  return Je(e, n);
}
function iu(e, t) {
  const r = e._zod.def, n = tt(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const o in t) {
        if (!(o in r.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && delete s[o];
      }
      return et(this, "shape", s), s;
    },
    checks: []
  });
  return Je(e, n);
}
function lu(e, t) {
  if (!mt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const s = tt(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return et(this, "shape", o), o;
    },
    checks: []
  });
  return Je(e, s);
}
function cu(e, t) {
  if (!mt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return et(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return Je(e, r);
}
function uu(e, t) {
  const r = tt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return et(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Je(e, r);
}
function fu(e, t, r) {
  const n = tt(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, o = { ...s };
      if (r)
        for (const i in r) {
          if (!(i in s))
            throw new Error(`Unrecognized key: "${i}"`);
          r[i] && (o[i] = e ? new e({
            type: "optional",
            innerType: s[i]
          }) : s[i]);
        }
      else
        for (const i in s)
          o[i] = e ? new e({
            type: "optional",
            innerType: s[i]
          }) : s[i];
      return et(this, "shape", o), o;
    },
    checks: []
  });
  return Je(t, n);
}
function du(e, t, r) {
  const n = tt(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, o = { ...s };
      if (r)
        for (const i in r) {
          if (!(i in o))
            throw new Error(`Unrecognized key: "${i}"`);
          r[i] && (o[i] = new e({
            type: "nonoptional",
            innerType: s[i]
          }));
        }
      else
        for (const i in s)
          o[i] = new e({
            type: "nonoptional",
            innerType: s[i]
          });
      return et(this, "shape", o), o;
    },
    checks: []
  });
  return Je(t, n);
}
function ct(e, t = 0) {
  var r;
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (((r = e.issues[n]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function ut(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function Wt(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function qe(e, t, r) {
  var s, o, i, l, c, u;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const h = Wt((i = (o = (s = e.inst) == null ? void 0 : s._zod.def) == null ? void 0 : o.error) == null ? void 0 : i.call(o, e)) ?? Wt((l = t == null ? void 0 : t.error) == null ? void 0 : l.call(t, e)) ?? Wt((c = r.customError) == null ? void 0 : c.call(r, e)) ?? Wt((u = r.localeError) == null ? void 0 : u.call(r, e)) ?? "Invalid input";
    n.message = h;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
function On(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function kt(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const Xo = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, tn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, ea = D("$ZodError", Xo), ta = D("$ZodError", Xo, { Parent: Error });
function pu(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const s of e.issues)
    s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
  return { formErrors: n, fieldErrors: r };
}
function hu(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (s) => {
    for (const o of s.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((i) => n({ issues: i }));
      else if (o.code === "invalid_key")
        n({ issues: o.issues });
      else if (o.code === "invalid_element")
        n({ issues: o.issues });
      else if (o.path.length === 0)
        r._errors.push(t(o));
      else {
        let i = r, l = 0;
        for (; l < o.path.length; ) {
          const c = o.path[l];
          l === o.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(t(o))) : i[c] = i[c] || { _errors: [] }, i = i[c], l++;
        }
      }
  };
  return n(e), r;
}
const Pn = (e) => (t, r, n, s) => {
  const o = n ? Object.assign(n, { async: !1 }) : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, o);
  if (i instanceof Promise)
    throw new pt();
  if (i.issues.length) {
    const l = new ((s == null ? void 0 : s.Err) ?? e)(i.issues.map((c) => qe(c, o, Ye())));
    throw Jo(l, s == null ? void 0 : s.callee), l;
  }
  return i.value;
}, Dn = (e) => async (t, r, n, s) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, o);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const l = new ((s == null ? void 0 : s.Err) ?? e)(i.issues.map((c) => qe(c, o, Ye())));
    throw Jo(l, s == null ? void 0 : s.callee), l;
  }
  return i.value;
}, xr = (e) => (t, r, n) => {
  const s = n ? { ...n, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, s);
  if (o instanceof Promise)
    throw new pt();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? ea)(o.issues.map((i) => qe(i, s, Ye())))
  } : { success: !0, data: o.value };
}, mu = /* @__PURE__ */ xr(ta), Er = (e) => async (t, r, n) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, s);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((i) => qe(i, s, Ye())))
  } : { success: !0, data: o.value };
}, gu = /* @__PURE__ */ Er(ta), yu = (e) => (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Pn(e)(t, r, s);
}, bu = (e) => (t, r, n) => Pn(e)(t, r, n), vu = (e) => async (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Dn(e)(t, r, s);
}, _u = (e) => async (t, r, n) => Dn(e)(t, r, n), wu = (e) => (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return xr(e)(t, r, s);
}, xu = (e) => (t, r, n) => xr(e)(t, r, n), Eu = (e) => async (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Er(e)(t, r, s);
}, Su = (e) => async (t, r, n) => Er(e)(t, r, n), ju = /^[cC][^\s-]{8,}$/, ku = /^[0-9a-z]+$/, Au = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ou = /^[0-9a-vA-V]{20}$/, Pu = /^[A-Za-z0-9]{27}$/, Du = /^[a-zA-Z0-9_-]{21}$/, Nu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Tu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ys = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ru = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Iu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function $u() {
  return new RegExp(Iu, "u");
}
const Cu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, zu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Fu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Lu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Mu = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ra = /^[A-Za-z0-9_-]*$/, Uu = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Zu = /^\+(?:[0-9]){6,14}[0-9]$/, na = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Bu = /* @__PURE__ */ new RegExp(`^${na}$`);
function sa(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Vu(e) {
  return new RegExp(`^${sa(e)}$`);
}
function Wu(e) {
  const t = sa({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${na}T(?:${n})$`);
}
const Gu = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Ku = /^[^A-Z]*$/, Hu = /^[^a-z]*$/, Me = /* @__PURE__ */ D("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Yu = /* @__PURE__ */ D("$ZodCheckMaxLength", (e, t) => {
  var r;
  Me.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !kn(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < s && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length <= t.maximum)
      return;
    const i = On(s);
    n.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), qu = /* @__PURE__ */ D("$ZodCheckMinLength", (e, t) => {
  var r;
  Me.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !kn(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > s && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length >= t.minimum)
      return;
    const i = On(s);
    n.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Ju = /* @__PURE__ */ D("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Me.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !kn(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.minimum = t.length, s.maximum = t.length, s.length = t.length;
  }), e._zod.check = (n) => {
    const s = n.value, o = s.length;
    if (o === t.length)
      return;
    const i = On(s), l = o > t.length;
    n.issues.push({
      origin: i,
      ...l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Sr = /* @__PURE__ */ D("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Me.init(e, t), e._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (s) => {
    t.pattern.lastIndex = 0, !t.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: s.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), Qu = /* @__PURE__ */ D("$ZodCheckRegex", (e, t) => {
  Sr.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Xu = /* @__PURE__ */ D("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Ku), Sr.init(e, t);
}), ef = /* @__PURE__ */ D("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Hu), Sr.init(e, t);
}), tf = /* @__PURE__ */ D("$ZodCheckIncludes", (e, t) => {
  Me.init(e, t);
  const r = gt(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (s) => {
    s.value.includes(t.includes, t.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), rf = /* @__PURE__ */ D("$ZodCheckStartsWith", (e, t) => {
  Me.init(e, t);
  const r = new RegExp(`^${gt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), nf = /* @__PURE__ */ D("$ZodCheckEndsWith", (e, t) => {
  Me.init(e, t);
  const r = new RegExp(`.*${gt(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), sf = /* @__PURE__ */ D("$ZodCheckOverwrite", (e, t) => {
  Me.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class of {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((i) => i), s = Math.min(...n.map((i) => i.length - i.trimStart().length)), o = n.map((i) => i.slice(s)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of o)
      this.content.push(i);
  }
  compile() {
    const t = Function, r = this == null ? void 0 : this.args, s = [...((this == null ? void 0 : this.content) ?? [""]).map((o) => `  ${o}`)];
    return new t(...r, s.join(`
`));
  }
}
const af = {
  major: 4,
  minor: 1,
  patch: 12
}, we = /* @__PURE__ */ D("$ZodType", (e, t) => {
  var s;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = af;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const o of n)
    for (const i of o._zod.onattach)
      i(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), (s = e._zod.deferred) == null || s.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (l, c, u) => {
      let h = ct(l), y;
      for (const _ of c) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(l))
            continue;
        } else if (h)
          continue;
        const S = l.issues.length, P = _._zod.check(l);
        if (P instanceof Promise && (u == null ? void 0 : u.async) === !1)
          throw new pt();
        if (y || P instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await P, l.issues.length !== S && (h || (h = ct(l, S)));
          });
        else {
          if (l.issues.length === S)
            continue;
          h || (h = ct(l, S));
        }
      }
      return y ? y.then(() => l) : l;
    }, i = (l, c, u) => {
      if (ct(l))
        return l.aborted = !0, l;
      const h = o(c, n, u);
      if (h instanceof Promise) {
        if (u.async === !1)
          throw new pt();
        return h.then((y) => e._zod.parse(y, u));
      }
      return e._zod.parse(h, u);
    };
    e._zod.run = (l, c) => {
      if (c.skipChecks)
        return e._zod.parse(l, c);
      if (c.direction === "backward") {
        const h = e._zod.parse({ value: l.value, issues: [] }, { ...c, skipChecks: !0 });
        return h instanceof Promise ? h.then((y) => i(y, l, c)) : i(h, l, c);
      }
      const u = e._zod.parse(l, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new pt();
        return u.then((h) => o(h, n, c));
      }
      return o(u, n, c);
    };
  }
  e["~standard"] = {
    validate: (o) => {
      var i;
      try {
        const l = mu(e, o);
        return l.success ? { value: l.data } : { issues: (i = l.error) == null ? void 0 : i.issues };
      } catch {
        return gu(e, o).then((c) => {
          var u;
          return c.success ? { value: c.data } : { issues: (u = c.error) == null ? void 0 : u.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Nn = /* @__PURE__ */ D("$ZodString", (e, t) => {
  var r;
  we.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Gu(e._zod.bag), e._zod.parse = (n, s) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), he = /* @__PURE__ */ D("$ZodStringFormat", (e, t) => {
  Sr.init(e, t), Nn.init(e, t);
}), lf = /* @__PURE__ */ D("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Tu), he.init(e, t);
}), cf = /* @__PURE__ */ D("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ys(n));
  } else
    t.pattern ?? (t.pattern = ys());
  he.init(e, t);
}), uf = /* @__PURE__ */ D("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Ru), he.init(e, t);
}), ff = /* @__PURE__ */ D("$ZodURL", (e, t) => {
  he.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), s = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(s.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Uu.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = s.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), df = /* @__PURE__ */ D("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = $u()), he.init(e, t);
}), pf = /* @__PURE__ */ D("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Du), he.init(e, t);
}), hf = /* @__PURE__ */ D("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = ju), he.init(e, t);
}), mf = /* @__PURE__ */ D("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = ku), he.init(e, t);
}), gf = /* @__PURE__ */ D("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Au), he.init(e, t);
}), yf = /* @__PURE__ */ D("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Ou), he.init(e, t);
}), bf = /* @__PURE__ */ D("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Pu), he.init(e, t);
}), vf = /* @__PURE__ */ D("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Wu(t)), he.init(e, t);
}), _f = /* @__PURE__ */ D("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Bu), he.init(e, t);
}), wf = /* @__PURE__ */ D("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Vu(t)), he.init(e, t);
}), xf = /* @__PURE__ */ D("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Nu), he.init(e, t);
}), Ef = /* @__PURE__ */ D("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Cu), he.init(e, t), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.format = "ipv4";
  });
}), Sf = /* @__PURE__ */ D("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = zu), he.init(e, t), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), jf = /* @__PURE__ */ D("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Fu), he.init(e, t);
}), kf = /* @__PURE__ */ D("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Lu), he.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [s, o] = n;
      if (!o)
        throw new Error();
      const i = Number(o);
      if (`${i}` !== o)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function oa(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Af = /* @__PURE__ */ D("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Mu), he.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    oa(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Of(e) {
  if (!ra.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return oa(r);
}
const Pf = /* @__PURE__ */ D("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ra), he.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    Of(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Df = /* @__PURE__ */ D("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Zu), he.init(e, t);
});
function Nf(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const s = JSON.parse(atob(n));
    return !("typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || t && (!("alg" in s) || s.alg !== t));
  } catch {
    return !1;
  }
}
const Tf = /* @__PURE__ */ D("$ZodJWT", (e, t) => {
  he.init(e, t), e._zod.check = (r) => {
    Nf(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Rf = /* @__PURE__ */ D("$ZodUnknown", (e, t) => {
  we.init(e, t), e._zod.parse = (r) => r;
}), If = /* @__PURE__ */ D("$ZodNever", (e, t) => {
  we.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function bs(e, t, r) {
  e.issues.length && t.issues.push(...ut(r, e.issues)), t.value[r] = e.value;
}
const $f = /* @__PURE__ */ D("$ZodArray", (e, t) => {
  we.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    r.value = Array(s.length);
    const o = [];
    for (let i = 0; i < s.length; i++) {
      const l = s[i], c = t.element._zod.run({
        value: l,
        issues: []
      }, n);
      c instanceof Promise ? o.push(c.then((u) => bs(u, r, i))) : bs(c, r, i);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function ur(e, t, r, n) {
  e.issues.length && t.issues.push(...ut(r, e.issues)), e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function aa(e) {
  var n, s, o, i;
  const t = Object.keys(e.shape);
  for (const l of t)
    if (!((i = (o = (s = (n = e.shape) == null ? void 0 : n[l]) == null ? void 0 : s._zod) == null ? void 0 : o.traits) != null && i.has("$ZodType")))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const r = ou(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function ia(e, t, r, n, s, o) {
  const i = [], l = s.keySet, c = s.catchall._zod, u = c.def.type;
  for (const h of Object.keys(t)) {
    if (l.has(h))
      continue;
    if (u === "never") {
      i.push(h);
      continue;
    }
    const y = c.run({ value: t[h], issues: [] }, n);
    y instanceof Promise ? e.push(y.then((_) => ur(_, r, h, t))) : ur(y, r, h, t);
  }
  return i.length && r.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Cf = /* @__PURE__ */ D("$ZodObject", (e, t) => {
  we.init(e, t);
  const r = Object.getOwnPropertyDescriptor(t, "shape");
  if (!(r != null && r.get)) {
    const l = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...l };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const n = jn(() => aa(t));
  pe(e._zod, "propValues", () => {
    const l = t.shape, c = {};
    for (const u in l) {
      const h = l[u]._zod;
      if (h.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const y of h.values)
          c[u].add(y);
      }
    }
    return c;
  });
  const s = cr, o = t.catchall;
  let i;
  e._zod.parse = (l, c) => {
    i ?? (i = n.value);
    const u = l.value;
    if (!s(u))
      return l.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), l;
    l.value = {};
    const h = [], y = i.shape;
    for (const _ of i.keys) {
      const P = y[_]._zod.run({ value: u[_], issues: [] }, c);
      P instanceof Promise ? h.push(P.then((k) => ur(k, l, _, u))) : ur(P, l, _, u);
    }
    return o ? ia(h, u, l, c, n.value, e) : h.length ? Promise.all(h).then(() => l) : l;
  };
}), zf = /* @__PURE__ */ D("$ZodObjectJIT", (e, t) => {
  Cf.init(e, t);
  const r = e._zod.parse, n = jn(() => aa(t)), s = (_) => {
    const S = new of(["shape", "payload", "ctx"]), P = n.value, k = (U) => {
      const F = gs(U);
      return `shape[${F}]._zod.run({ value: input[${F}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const A = /* @__PURE__ */ Object.create(null);
    let M = 0;
    for (const U of P.keys)
      A[U] = `key_${M++}`;
    S.write("const newResult = {};");
    for (const U of P.keys) {
      const F = A[U], I = gs(U);
      S.write(`const ${F} = ${k(U)};`), S.write(`
        if (${F}.issues.length) {
          payload.issues = payload.issues.concat(${F}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${I}, ...iss.path] : [${I}]
          })));
        }
        
        
        if (${F}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${F}.value;
        }
        
      `);
    }
    S.write("payload.value = newResult;"), S.write("return payload;");
    const L = S.compile();
    return (U, F) => L(_, U, F);
  };
  let o;
  const i = cr, l = !qo.jitless, u = l && nu.value, h = t.catchall;
  let y;
  e._zod.parse = (_, S) => {
    y ?? (y = n.value);
    const P = _.value;
    return i(P) ? l && u && (S == null ? void 0 : S.async) === !1 && S.jitless !== !0 ? (o || (o = s(t.shape)), _ = o(_, S), h ? ia([], P, _, S, y, e) : _) : r(_, S) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: P,
      inst: e
    }), _);
  };
});
function vs(e, t, r, n) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const s = e.filter((o) => !ct(o));
  return s.length === 1 ? (t.value = s[0].value, s[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((i) => qe(i, n, Ye())))
  }), t);
}
const Ff = /* @__PURE__ */ D("$ZodUnion", (e, t) => {
  we.init(e, t), pe(e._zod, "optin", () => t.options.some((s) => s._zod.optin === "optional") ? "optional" : void 0), pe(e._zod, "optout", () => t.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), pe(e._zod, "values", () => {
    if (t.options.every((s) => s._zod.values))
      return new Set(t.options.flatMap((s) => Array.from(s._zod.values)));
  }), pe(e._zod, "pattern", () => {
    if (t.options.every((s) => s._zod.pattern)) {
      const s = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${s.map((o) => An(o.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (s, o) => {
    if (r)
      return n(s, o);
    let i = !1;
    const l = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: s.value,
        issues: []
      }, o);
      if (u instanceof Promise)
        l.push(u), i = !0;
      else {
        if (u.issues.length === 0)
          return u;
        l.push(u);
      }
    }
    return i ? Promise.all(l).then((c) => vs(c, s, e, o)) : vs(l, s, e, o);
  };
}), Lf = /* @__PURE__ */ D("$ZodIntersection", (e, t) => {
  we.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value, o = t.left._zod.run({ value: s, issues: [] }, n), i = t.right._zod.run({ value: s, issues: [] }, n);
    return o instanceof Promise || i instanceof Promise ? Promise.all([o, i]).then(([c, u]) => _s(r, c, u)) : _s(r, o, i);
  };
});
function rn(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (mt(e) && mt(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((o) => r.indexOf(o) !== -1), s = { ...e, ...t };
    for (const o of n) {
      const i = rn(e[o], t[o]);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...i.mergeErrorPath]
        };
      s[o] = i.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = t[n], i = rn(s, o);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...i.mergeErrorPath]
        };
      r.push(i.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function _s(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), ct(e))
    return e;
  const n = rn(t.value, r.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const Mf = /* @__PURE__ */ D("$ZodRecord", (e, t) => {
  we.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value;
    if (!mt(s))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    const o = [];
    if (t.keyType._zod.values) {
      const i = t.keyType._zod.values;
      r.value = {};
      for (const c of i)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          const u = t.valueType._zod.run({ value: s[c], issues: [] }, n);
          u instanceof Promise ? o.push(u.then((h) => {
            h.issues.length && r.issues.push(...ut(c, h.issues)), r.value[c] = h.value;
          })) : (u.issues.length && r.issues.push(...ut(c, u.issues)), r.value[c] = u.value);
        }
      let l;
      for (const c in s)
        i.has(c) || (l = l ?? [], l.push(c));
      l && l.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: s,
        inst: e,
        keys: l
      });
    } else {
      r.value = {};
      for (const i of Reflect.ownKeys(s)) {
        if (i === "__proto__")
          continue;
        const l = t.keyType._zod.run({ value: i, issues: [] }, n);
        if (l instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (l.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: l.issues.map((u) => qe(u, n, Ye())),
            input: i,
            path: [i],
            inst: e
          }), r.value[l.value] = l.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: s[i], issues: [] }, n);
        c instanceof Promise ? o.push(c.then((u) => {
          u.issues.length && r.issues.push(...ut(i, u.issues)), r.value[l.value] = u.value;
        })) : (c.issues.length && r.issues.push(...ut(i, c.issues)), r.value[l.value] = c.value);
      }
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
}), Uf = /* @__PURE__ */ D("$ZodEnum", (e, t) => {
  we.init(e, t);
  const r = ru(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((s) => su.has(typeof s)).map((s) => typeof s == "string" ? gt(s) : s.toString()).join("|")})$`), e._zod.parse = (s, o) => {
    const i = s.value;
    return n.has(i) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: i,
      inst: e
    }), s;
  };
}), Zf = /* @__PURE__ */ D("$ZodLiteral", (e, t) => {
  if (we.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? gt(r) : r ? gt(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, n) => {
    const s = r.value;
    return e._zod.values.has(s) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), r;
  };
}), Bf = /* @__PURE__ */ D("$ZodTransform", (e, t) => {
  we.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Yo(e.constructor.name);
    const s = t.transform(r.value, r);
    if (n.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((i) => (r.value = i, r));
    if (s instanceof Promise)
      throw new pt();
    return r.value = s, r;
  };
});
function ws(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Vf = /* @__PURE__ */ D("$ZodOptional", (e, t) => {
  we.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", pe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), pe(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${An(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const s = t.innerType._zod.run(r, n);
      return s instanceof Promise ? s.then((o) => ws(o, r.value)) : ws(s, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), Wf = /* @__PURE__ */ D("$ZodNullable", (e, t) => {
  we.init(e, t), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), pe(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${An(r.source)}|null)$`) : void 0;
  }), pe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), Gf = /* @__PURE__ */ D("$ZodDefault", (e, t) => {
  we.init(e, t), e._zod.optin = "optional", pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((o) => xs(o, t)) : xs(s, t);
  };
});
function xs(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Kf = /* @__PURE__ */ D("$ZodPrefault", (e, t) => {
  we.init(e, t), e._zod.optin = "optional", pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), Hf = /* @__PURE__ */ D("$ZodNonOptional", (e, t) => {
  we.init(e, t), pe(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((o) => Es(o, e)) : Es(s, e);
  };
});
function Es(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Yf = /* @__PURE__ */ D("$ZodCatch", (e, t) => {
  we.init(e, t), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((o) => (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((i) => qe(i, n, Ye()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((o) => qe(o, n, Ye()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), qf = /* @__PURE__ */ D("$ZodPipe", (e, t) => {
  we.init(e, t), pe(e._zod, "values", () => t.in._zod.values), pe(e._zod, "optin", () => t.in._zod.optin), pe(e._zod, "optout", () => t.out._zod.optout), pe(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const o = t.out._zod.run(r, n);
      return o instanceof Promise ? o.then((i) => Gt(i, t.in, n)) : Gt(o, t.in, n);
    }
    const s = t.in._zod.run(r, n);
    return s instanceof Promise ? s.then((o) => Gt(o, t.out, n)) : Gt(s, t.out, n);
  };
});
function Gt(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Jf = /* @__PURE__ */ D("$ZodReadonly", (e, t) => {
  we.init(e, t), pe(e._zod, "propValues", () => t.innerType._zod.propValues), pe(e._zod, "values", () => t.innerType._zod.values), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then(Ss) : Ss(s);
  };
});
function Ss(e) {
  return e.value = Object.freeze(e.value), e;
}
const Qf = /* @__PURE__ */ D("$ZodCustom", (e, t) => {
  Me.init(e, t), we.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, s = t.fn(n);
    if (s instanceof Promise)
      return s.then((o) => js(o, r, n, e));
    js(s, r, n, e);
  };
});
function js(e, t, r, n) {
  if (!e) {
    const s = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (s.params = n._zod.def.params), t.issues.push(kt(s));
  }
}
class Xf {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    if (this._map.set(t, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const s = { ...n, ...this._map.get(t) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function ed() {
  return new Xf();
}
const Kt = /* @__PURE__ */ ed();
function td(e, t) {
  return new e({
    type: "string",
    ...ee(t)
  });
}
function rd(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function ks(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function nd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function sd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ee(t)
  });
}
function od(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ee(t)
  });
}
function ad(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ee(t)
  });
}
function id(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function ld(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function cd(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function ud(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function fd(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function dd(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function pd(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function hd(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function md(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function gd(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function yd(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function bd(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function vd(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function _d(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function wd(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function xd(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ee(t)
  });
}
function Ed(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ee(t)
  });
}
function Sd(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ee(t)
  });
}
function jd(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ee(t)
  });
}
function kd(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ee(t)
  });
}
function Ad(e) {
  return new e({
    type: "unknown"
  });
}
function Od(e, t) {
  return new e({
    type: "never",
    ...ee(t)
  });
}
function la(e, t) {
  return new Yu({
    check: "max_length",
    ...ee(t),
    maximum: e
  });
}
function fr(e, t) {
  return new qu({
    check: "min_length",
    ...ee(t),
    minimum: e
  });
}
function ca(e, t) {
  return new Ju({
    check: "length_equals",
    ...ee(t),
    length: e
  });
}
function Pd(e, t) {
  return new Qu({
    check: "string_format",
    format: "regex",
    ...ee(t),
    pattern: e
  });
}
function Dd(e) {
  return new Xu({
    check: "string_format",
    format: "lowercase",
    ...ee(e)
  });
}
function Nd(e) {
  return new ef({
    check: "string_format",
    format: "uppercase",
    ...ee(e)
  });
}
function Td(e, t) {
  return new tf({
    check: "string_format",
    format: "includes",
    ...ee(t),
    includes: e
  });
}
function Rd(e, t) {
  return new rf({
    check: "string_format",
    format: "starts_with",
    ...ee(t),
    prefix: e
  });
}
function Id(e, t) {
  return new nf({
    check: "string_format",
    format: "ends_with",
    ...ee(t),
    suffix: e
  });
}
function It(e) {
  return new sf({
    check: "overwrite",
    tx: e
  });
}
function $d(e) {
  return It((t) => t.normalize(e));
}
function Cd() {
  return It((e) => e.trim());
}
function zd() {
  return It((e) => e.toLowerCase());
}
function Fd() {
  return It((e) => e.toUpperCase());
}
function Ld(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...ee(r)
  });
}
function Md(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...ee(r)
  });
}
function Ud(e) {
  const t = Zd((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(kt(n, r.value, t._zod.def));
    else {
      const s = n;
      s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = r.value), s.inst ?? (s.inst = t), s.continue ?? (s.continue = !t._zod.def.abort), r.issues.push(kt(s));
    }
  }, e(r.value, r)));
  return t;
}
function Zd(e, t) {
  const r = new Me({
    check: "custom",
    ...ee(t)
  });
  return r._zod.check = e, r;
}
const Bd = /* @__PURE__ */ D("ZodISODateTime", (e, t) => {
  vf.init(e, t), ye.init(e, t);
});
function Vd(e) {
  return Ed(Bd, e);
}
const Wd = /* @__PURE__ */ D("ZodISODate", (e, t) => {
  _f.init(e, t), ye.init(e, t);
});
function Gd(e) {
  return Sd(Wd, e);
}
const Kd = /* @__PURE__ */ D("ZodISOTime", (e, t) => {
  wf.init(e, t), ye.init(e, t);
});
function Hd(e) {
  return jd(Kd, e);
}
const Yd = /* @__PURE__ */ D("ZodISODuration", (e, t) => {
  xf.init(e, t), ye.init(e, t);
});
function qd(e) {
  return kd(Yd, e);
}
const Jd = (e, t) => {
  ea.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => hu(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => pu(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, tn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, tn, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Ie = D("ZodError", Jd, {
  Parent: Error
}), Qd = /* @__PURE__ */ Pn(Ie), Xd = /* @__PURE__ */ Dn(Ie), ep = /* @__PURE__ */ xr(Ie), tp = /* @__PURE__ */ Er(Ie), rp = /* @__PURE__ */ yu(Ie), np = /* @__PURE__ */ bu(Ie), sp = /* @__PURE__ */ vu(Ie), op = /* @__PURE__ */ _u(Ie), ap = /* @__PURE__ */ wu(Ie), ip = /* @__PURE__ */ xu(Ie), lp = /* @__PURE__ */ Eu(Ie), cp = /* @__PURE__ */ Su(Ie), Ee = /* @__PURE__ */ D("ZodType", (e, t) => (we.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(tt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
})), e.clone = (r, n) => Je(e, r, n), e.brand = () => e, e.register = (r, n) => (r.add(e, n), e), e.parse = (r, n) => Qd(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => ep(e, r, n), e.parseAsync = async (r, n) => Xd(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => tp(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => rp(e, r, n), e.decode = (r, n) => np(e, r, n), e.encodeAsync = async (r, n) => sp(e, r, n), e.decodeAsync = async (r, n) => op(e, r, n), e.safeEncode = (r, n) => ap(e, r, n), e.safeDecode = (r, n) => ip(e, r, n), e.safeEncodeAsync = async (r, n) => lp(e, r, n), e.safeDecodeAsync = async (r, n) => cp(e, r, n), e.refine = (r, n) => e.check(nh(r, n)), e.superRefine = (r) => e.check(sh(r)), e.overwrite = (r) => e.check(It(r)), e.optional = () => Ps(e), e.nullable = () => Ds(e), e.nullish = () => Ps(Ds(e)), e.nonoptional = (r) => qp(e, r), e.array = () => Tp(e), e.or = (r) => Cp([e, r]), e.and = (r) => Fp(e, r), e.transform = (r) => Ns(e, Vp(r)), e.default = (r) => Kp(e, r), e.prefault = (r) => Yp(e, r), e.catch = (r) => Qp(e, r), e.pipe = (r) => Ns(e, r), e.readonly = () => th(e), e.describe = (r) => {
  const n = e.clone();
  return Kt.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = Kt.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Kt.get(e);
  const n = e.clone();
  return Kt.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), ua = /* @__PURE__ */ D("_ZodString", (e, t) => {
  Nn.init(e, t), Ee.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(Pd(...n)), e.includes = (...n) => e.check(Td(...n)), e.startsWith = (...n) => e.check(Rd(...n)), e.endsWith = (...n) => e.check(Id(...n)), e.min = (...n) => e.check(fr(...n)), e.max = (...n) => e.check(la(...n)), e.length = (...n) => e.check(ca(...n)), e.nonempty = (...n) => e.check(fr(1, ...n)), e.lowercase = (n) => e.check(Dd(n)), e.uppercase = (n) => e.check(Nd(n)), e.trim = () => e.check(Cd()), e.normalize = (...n) => e.check($d(...n)), e.toLowerCase = () => e.check(zd()), e.toUpperCase = () => e.check(Fd());
}), up = /* @__PURE__ */ D("ZodString", (e, t) => {
  Nn.init(e, t), ua.init(e, t), e.email = (r) => e.check(rd(fp, r)), e.url = (r) => e.check(id(dp, r)), e.jwt = (r) => e.check(xd(Ap, r)), e.emoji = (r) => e.check(ld(pp, r)), e.guid = (r) => e.check(ks(As, r)), e.uuid = (r) => e.check(nd(Ht, r)), e.uuidv4 = (r) => e.check(sd(Ht, r)), e.uuidv6 = (r) => e.check(od(Ht, r)), e.uuidv7 = (r) => e.check(ad(Ht, r)), e.nanoid = (r) => e.check(cd(hp, r)), e.guid = (r) => e.check(ks(As, r)), e.cuid = (r) => e.check(ud(mp, r)), e.cuid2 = (r) => e.check(fd(gp, r)), e.ulid = (r) => e.check(dd(yp, r)), e.base64 = (r) => e.check(vd(Sp, r)), e.base64url = (r) => e.check(_d(jp, r)), e.xid = (r) => e.check(pd(bp, r)), e.ksuid = (r) => e.check(hd(vp, r)), e.ipv4 = (r) => e.check(md(_p, r)), e.ipv6 = (r) => e.check(gd(wp, r)), e.cidrv4 = (r) => e.check(yd(xp, r)), e.cidrv6 = (r) => e.check(bd(Ep, r)), e.e164 = (r) => e.check(wd(kp, r)), e.datetime = (r) => e.check(Vd(r)), e.date = (r) => e.check(Gd(r)), e.time = (r) => e.check(Hd(r)), e.duration = (r) => e.check(qd(r));
});
function Ge(e) {
  return td(up, e);
}
const ye = /* @__PURE__ */ D("ZodStringFormat", (e, t) => {
  he.init(e, t), ua.init(e, t);
}), fp = /* @__PURE__ */ D("ZodEmail", (e, t) => {
  uf.init(e, t), ye.init(e, t);
}), As = /* @__PURE__ */ D("ZodGUID", (e, t) => {
  lf.init(e, t), ye.init(e, t);
}), Ht = /* @__PURE__ */ D("ZodUUID", (e, t) => {
  cf.init(e, t), ye.init(e, t);
}), dp = /* @__PURE__ */ D("ZodURL", (e, t) => {
  ff.init(e, t), ye.init(e, t);
}), pp = /* @__PURE__ */ D("ZodEmoji", (e, t) => {
  df.init(e, t), ye.init(e, t);
}), hp = /* @__PURE__ */ D("ZodNanoID", (e, t) => {
  pf.init(e, t), ye.init(e, t);
}), mp = /* @__PURE__ */ D("ZodCUID", (e, t) => {
  hf.init(e, t), ye.init(e, t);
}), gp = /* @__PURE__ */ D("ZodCUID2", (e, t) => {
  mf.init(e, t), ye.init(e, t);
}), yp = /* @__PURE__ */ D("ZodULID", (e, t) => {
  gf.init(e, t), ye.init(e, t);
}), bp = /* @__PURE__ */ D("ZodXID", (e, t) => {
  yf.init(e, t), ye.init(e, t);
}), vp = /* @__PURE__ */ D("ZodKSUID", (e, t) => {
  bf.init(e, t), ye.init(e, t);
}), _p = /* @__PURE__ */ D("ZodIPv4", (e, t) => {
  Ef.init(e, t), ye.init(e, t);
}), wp = /* @__PURE__ */ D("ZodIPv6", (e, t) => {
  Sf.init(e, t), ye.init(e, t);
}), xp = /* @__PURE__ */ D("ZodCIDRv4", (e, t) => {
  jf.init(e, t), ye.init(e, t);
}), Ep = /* @__PURE__ */ D("ZodCIDRv6", (e, t) => {
  kf.init(e, t), ye.init(e, t);
}), Sp = /* @__PURE__ */ D("ZodBase64", (e, t) => {
  Af.init(e, t), ye.init(e, t);
}), jp = /* @__PURE__ */ D("ZodBase64URL", (e, t) => {
  Pf.init(e, t), ye.init(e, t);
}), kp = /* @__PURE__ */ D("ZodE164", (e, t) => {
  Df.init(e, t), ye.init(e, t);
}), Ap = /* @__PURE__ */ D("ZodJWT", (e, t) => {
  Tf.init(e, t), ye.init(e, t);
}), Op = /* @__PURE__ */ D("ZodUnknown", (e, t) => {
  Rf.init(e, t), Ee.init(e, t);
});
function Os() {
  return Ad(Op);
}
const Pp = /* @__PURE__ */ D("ZodNever", (e, t) => {
  If.init(e, t), Ee.init(e, t);
});
function Dp(e) {
  return Od(Pp, e);
}
const Np = /* @__PURE__ */ D("ZodArray", (e, t) => {
  $f.init(e, t), Ee.init(e, t), e.element = t.element, e.min = (r, n) => e.check(fr(r, n)), e.nonempty = (r) => e.check(fr(1, r)), e.max = (r, n) => e.check(la(r, n)), e.length = (r, n) => e.check(ca(r, n)), e.unwrap = () => e.element;
});
function Tp(e, t) {
  return Ld(Np, e, t);
}
const Rp = /* @__PURE__ */ D("ZodObject", (e, t) => {
  zf.init(e, t), Ee.init(e, t), pe(e, "shape", () => t.shape), e.keyof = () => Mp(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Os() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Os() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Dp() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => lu(e, r), e.safeExtend = (r) => cu(e, r), e.merge = (r) => uu(e, r), e.pick = (r) => au(e, r), e.omit = (r) => iu(e, r), e.partial = (...r) => fu(da, e, r[0]), e.required = (...r) => du(pa, e, r[0]);
});
function Ip(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...ee(t)
  };
  return new Rp(r);
}
const $p = /* @__PURE__ */ D("ZodUnion", (e, t) => {
  Ff.init(e, t), Ee.init(e, t), e.options = t.options;
});
function Cp(e, t) {
  return new $p({
    type: "union",
    options: e,
    ...ee(t)
  });
}
const zp = /* @__PURE__ */ D("ZodIntersection", (e, t) => {
  Lf.init(e, t), Ee.init(e, t);
});
function Fp(e, t) {
  return new zp({
    type: "intersection",
    left: e,
    right: t
  });
}
const Lp = /* @__PURE__ */ D("ZodRecord", (e, t) => {
  Mf.init(e, t), Ee.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function fa(e, t, r) {
  return new Lp({
    type: "record",
    keyType: e,
    valueType: t,
    ...ee(r)
  });
}
const nn = /* @__PURE__ */ D("ZodEnum", (e, t) => {
  Uf.init(e, t), Ee.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, s) => {
    const o = {};
    for (const i of n)
      if (r.has(i))
        o[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new nn({
      ...t,
      checks: [],
      ...ee(s),
      entries: o
    });
  }, e.exclude = (n, s) => {
    const o = { ...t.entries };
    for (const i of n)
      if (r.has(i))
        delete o[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new nn({
      ...t,
      checks: [],
      ...ee(s),
      entries: o
    });
  };
});
function Mp(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new nn({
    type: "enum",
    entries: r,
    ...ee(t)
  });
}
const Up = /* @__PURE__ */ D("ZodLiteral", (e, t) => {
  Zf.init(e, t), Ee.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Zp(e, t) {
  return new Up({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...ee(t)
  });
}
const Bp = /* @__PURE__ */ D("ZodTransform", (e, t) => {
  Bf.init(e, t), Ee.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Yo(e.constructor.name);
    r.addIssue = (o) => {
      if (typeof o == "string")
        r.issues.push(kt(o, r.value, t));
      else {
        const i = o;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = r.value), i.inst ?? (i.inst = e), r.issues.push(kt(i));
      }
    };
    const s = t.transform(r.value, r);
    return s instanceof Promise ? s.then((o) => (r.value = o, r)) : (r.value = s, r);
  };
});
function Vp(e) {
  return new Bp({
    type: "transform",
    transform: e
  });
}
const da = /* @__PURE__ */ D("ZodOptional", (e, t) => {
  Vf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ps(e) {
  return new da({
    type: "optional",
    innerType: e
  });
}
const Wp = /* @__PURE__ */ D("ZodNullable", (e, t) => {
  Wf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ds(e) {
  return new Wp({
    type: "nullable",
    innerType: e
  });
}
const Gp = /* @__PURE__ */ D("ZodDefault", (e, t) => {
  Gf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Kp(e, t) {
  return new Gp({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Qo(t);
    }
  });
}
const Hp = /* @__PURE__ */ D("ZodPrefault", (e, t) => {
  Kf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Yp(e, t) {
  return new Hp({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Qo(t);
    }
  });
}
const pa = /* @__PURE__ */ D("ZodNonOptional", (e, t) => {
  Hf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function qp(e, t) {
  return new pa({
    type: "nonoptional",
    innerType: e,
    ...ee(t)
  });
}
const Jp = /* @__PURE__ */ D("ZodCatch", (e, t) => {
  Yf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Qp(e, t) {
  return new Jp({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Xp = /* @__PURE__ */ D("ZodPipe", (e, t) => {
  qf.init(e, t), Ee.init(e, t), e.in = t.in, e.out = t.out;
});
function Ns(e, t) {
  return new Xp({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const eh = /* @__PURE__ */ D("ZodReadonly", (e, t) => {
  Jf.init(e, t), Ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function th(e) {
  return new eh({
    type: "readonly",
    innerType: e
  });
}
const rh = /* @__PURE__ */ D("ZodCustom", (e, t) => {
  Qf.init(e, t), Ee.init(e, t);
});
function nh(e, t = {}) {
  return Md(rh, e, t);
}
function sh(e) {
  return Ud(e);
}
const ha = Ip({
  name: Ge(),
  route: Ge(),
  color: Ge().optional(),
  icon: Ge().optional(),
  filter: fa(Ge(), Ge().nullable())
});
function Ts(e) {
  return e.trim().toLowerCase();
}
function oh(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  return r.length !== n.length ? !1 : r.every((s) => e[s] === t[s]);
}
function ah(e, t) {
  return e.route === t.route && oh(e.filter, t.filter);
}
function ma(e, t) {
  return e.flatMap((r, n) => ah(r, t) ? [n] : []);
}
function Rs(e, t, r) {
  const n = Ts(t.name);
  return e.some((s, o) => o !== r && s.route === t.route && Ts(s.name) === n);
}
function Tn(e) {
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? { ok: !0, views: t.flatMap((n) => {
      const s = ha.safeParse(n);
      return s.success ? [s.data] : [];
    }) } : (console.error("Failed to parse shared_views setting:", new Error("shared_views is not an array")), { ok: !0, views: [] });
  } catch {
    return { ok: !1, error: new Error("shared_views JSON parse failed") };
  }
}
const ih = ha.extend({
  route: Zp("members"),
  filter: fa(Ge(), Ge().nullable()).refine((e) => typeof e.filter == "string" && e.filter.length > 0)
}), Is = "A view with this name already exists", lh = "Saved view could not be found for update", ch = "Multiple saved views matched update target", uh = "Saved view could not be found for delete", fh = "Multiple saved views matched delete target";
function dh(e) {
  return ih.safeParse(e).success;
}
function ph(e) {
  const t = Tn(e);
  return t.ok ? {
    ok: !0,
    views: t.views.filter(dh)
  } : t;
}
function hh(e, t) {
  return {
    name: e.trim(),
    route: "members",
    filter: { filter: t }
  };
}
function mh(e, t, r, n) {
  const s = hh(t, r);
  if (n) {
    const o = ma(e, n);
    if (o.length === 0)
      throw new Error(lh);
    if (o.length > 1)
      throw new Error(ch);
    const i = o[0];
    if (Rs(e, s, i))
      throw new Error(Is);
    return e.map((l, c) => c === i ? s : l);
  }
  if (Rs(e, s))
    throw new Error(Is);
  return [...e, s];
}
function gh(e, t) {
  const r = ma(e, t);
  if (r.length === 0)
    throw new Error(uh);
  if (r.length > 1)
    throw new Error(fh);
  const n = r[0];
  return e.filter((s, o) => o !== n);
}
const ga = "Cannot modify saved views because shared_views is invalid";
function Rn(e) {
  return it((e == null ? void 0 : e.settings) ?? null, "shared_views") ?? "[]";
}
function yh() {
  const { data: e } = Tt(), t = wn(), r = Rn(e), n = Pe(null), s = de(() => ph(r), [r]);
  return Te(() => {
    s.ok || n.current === r || (n.current = r, t(s.error, { withToast: !1 }));
  }, [t, s, r]), s.ok ? s.views : [];
}
function bh() {
  const { data: e } = Tt(), { mutateAsync: t } = jo(), r = wn();
  return re(async (n, s, o) => {
    const i = Tn(Rn(e));
    if (!i.ok) {
      const c = new Error(ga, { cause: i.error });
      throw r(c, { withToast: !1 }), c;
    }
    const l = mh(i.views, n, s, o);
    try {
      await t([{
        key: "shared_views",
        value: JSON.stringify(l)
      }]);
    } catch (c) {
      throw r(c, { withToast: !1 }), c;
    }
  }, [e, t, r]);
}
function vh() {
  const { data: e } = Tt(), { mutateAsync: t } = jo(), r = wn();
  return re(async (n) => {
    const s = Tn(Rn(e));
    if (!s.ok) {
      const i = new Error(ga, { cause: s.error });
      throw r(i, { withToast: !1 }), i;
    }
    const o = gh(s.views, n);
    try {
      await t([{
        key: "shared_views",
        value: JSON.stringify(o)
      }]);
    } catch (i) {
      throw r(i, { withToast: !1 }), i;
    }
  }, [e, t, r]);
}
function _h(e, t) {
  return de(() => !t || e.length === 0 ? null : e.find((r) => r.filter.filter === t) ?? null, [e, t]);
}
const wh = ({ filter: e, existingViews: t, activeView: r, onDeleted: n, onClose: s }) => {
  const [o, i] = ie(() => (r == null ? void 0 : r.name) ?? ""), [l, c] = ie(""), [u, h] = ie(!1), [y, _] = ie(!1), [S, P] = ie(!1), k = bh(), A = vh(), M = !!r, L = async () => {
    const I = o.trim();
    if (!I) {
      c("Please enter a name");
      return;
    }
    if (!M && t.find((T) => T.name.trim().toLowerCase() === I.toLowerCase())) {
      c("A view with this name already exists");
      return;
    }
    h(!0);
    try {
      await k(I, e, r ?? void 0), s();
    } catch (z) {
      c(z instanceof Error ? z.message : "Failed to save view");
    } finally {
      h(!1);
    }
  }, U = async () => {
    if (r) {
      _(!0);
      try {
        await A(r), s(), n == null || n();
      } catch (I) {
        c(I instanceof Error ? I.message : "Failed to delete view");
      } finally {
        _(!1);
      }
    }
  }, F = (I) => {
    I.key === "Enter" && (I.preventDefault(), L());
  };
  return /* @__PURE__ */ a.jsx(ho, { align: "end", className: "w-72", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold", children: M ? "Edit view" : "Save view" }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ a.jsx(
        So,
        {
          placeholder: "View name",
          value: o,
          autoFocus: !0,
          onChange: (I) => {
            i(I.target.value), l && c("");
          },
          onKeyDown: F
        }
      ),
      l && /* @__PURE__ */ a.jsx("p", { className: "text-xs text-red-500", children: l })
    ] }),
    M ? S ? /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-sm text-muted-foreground", children: "Delete view?" }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx(
          se,
          {
            size: "sm",
            variant: "outline",
            onClick: () => P(!1),
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ a.jsx(
          se,
          {
            disabled: y,
            size: "sm",
            variant: "destructive",
            onClick: () => void U(),
            children: y ? "Deleting..." : "Delete"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "text-red hover:bg-red/5 hover:text-red",
          size: "sm",
          variant: "ghost",
          onClick: () => P(!0),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx(
          se,
          {
            size: "sm",
            variant: "outline",
            onClick: s,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ a.jsx(
          se,
          {
            disabled: u || !o.trim(),
            size: "sm",
            onClick: () => void L(),
            children: u ? "Saving..." : "Save"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ a.jsx(
      se,
      {
        className: "w-full",
        disabled: u || !o.trim(),
        onClick: () => void L(),
        children: u ? "Saving..." : "Save"
      }
    )
  ] }) });
}, xh = ({ filter: e, existingViews: t, activeView: r, onDeleted: n }) => {
  const [s, o] = ie(!1), i = r ? `edit:${r.name}:${r.filter.filter}` : `save:${e}`;
  return /* @__PURE__ */ a.jsxs(fo, { open: s, onOpenChange: o, children: [
    /* @__PURE__ */ a.jsx(po, { asChild: !0, children: /* @__PURE__ */ a.jsx(se, { variant: "outline", children: r ? "Edit view" : "Save view" }) }),
    s && /* @__PURE__ */ a.jsx(
      wh,
      {
        activeView: r,
        existingViews: t,
        filter: e,
        onClose: () => o(!1),
        onDeleted: n
      },
      i
    )
  ] });
};
function Eh(e, t = {}) {
  const r = t.labels || {};
  return e.map((n) => ({
    value: n,
    label: r[n] ?? n.replaceAll("-", " ")
  }));
}
const Sh = {
  "is-any": "is any of",
  "is-not-any": "is none of",
  "does-not-contain": "does not contain",
  "is-less": "before",
  "is-or-less": "on or before",
  "is-greater": "after",
  "is-or-greater": "on or after",
  1: "More like this",
  0: "Less like this"
}, Mr = {
  "is-greater": "is greater than",
  "is-less": "is less than"
};
function jh(e) {
  switch (e) {
    case "name":
      return _e.createElement(Yi, { className: "size-4" });
    case "email":
    case "subscribed":
      return _e.createElement(Qi, { className: "size-4" });
    case "label":
      return _e.createElement(_o, { className: "size-4" });
    case "last_seen_at":
      return _e.createElement(yi, { className: "size-4" });
    case "created_at":
      return _e.createElement(gi, { className: "size-4" });
    case "signup":
      return _e.createElement(Ji, { className: "size-4" });
    case "tier_id":
    case "subscriptions.status":
      return _e.createElement(Li, { className: "size-4" });
    case "status":
      return _e.createElement(Fi, { className: "size-4" });
    case "subscriptions.plan_interval":
      return _e.createElement(zi, { className: "size-4" });
    case "subscriptions.start_date":
      return _e.createElement(Ci, { className: "size-4" });
    case "subscriptions.current_period_end":
      return _e.createElement($i, { className: "size-4" });
    case "conversion":
      return _e.createElement(Ii, { className: "size-4" });
    case "email_count":
    case "emails.post_id":
      return _e.createElement(Ri, { className: "size-4" });
    case "email_opened_count":
    case "opened_emails.post_id":
      return _e.createElement(Ti, { className: "size-4" });
    case "email_open_rate":
      return _e.createElement(Ni, { className: "size-4" });
    case "clicked_links.post_id":
      return _e.createElement(Di, { className: "size-4" });
    case "newsletter_feedback":
      return _e.createElement(mi, { className: "size-4" });
    case "offer_redemptions":
      return _e.createElement(Pi, { className: "size-4" });
    default:
      return e.startsWith("newsletters.") ? _e.createElement(Oi, { className: "size-4" }) : void 0;
  }
}
function me(e, t = {}, r = Sh) {
  const n = e.startsWith("newsletters.") ? jt["newsletters.:slug"] : jt[e];
  return {
    key: e,
    ...n.ui,
    icon: jh(e),
    operators: Eh(n.operators, { labels: r }),
    ..."options" in n && n.options ? { options: n.options } : {},
    ...t
  };
}
function Yt(e, t) {
  return me(e, { defaultValue: t });
}
function st(e, t, r, n) {
  return {
    options: e,
    onSearchChange: t,
    searchValue: r,
    isLoading: e.length === 0 && n
  };
}
function kh(e) {
  const t = /* @__PURE__ */ new Map(), r = [], n = [];
  for (const s of e)
    s.redemption_type === "retention" && (s.cadence === "month" ? r.push(s.id) : s.cadence === "year" && n.push(s.id));
  return r.length > 0 && t.set("retention:month", r), n.length > 0 && t.set("retention:year", n), t;
}
function ya(e) {
  var t;
  return Array.isArray((t = e.metadata) == null ? void 0 : t.offerIds) ? e.metadata.offerIds.filter((r) => typeof r == "string") : null;
}
function ba(e) {
  const t = [], r = kh(e);
  for (const n of e)
    n.redemption_type !== "retention" && t.push({ value: n.id, label: n.name });
  return r.has("retention:month") && t.push({
    value: "retention:month",
    label: "Monthly Retention",
    metadata: { offerIds: r.get("retention:month") }
  }), r.has("retention:year") && t.push({
    value: "retention:year",
    label: "Yearly Retention",
    metadata: { offerIds: r.get("retention:year") }
  }), t;
}
function Ah(e, t) {
  const r = [], n = /* @__PURE__ */ new Set();
  for (const s of t) {
    const o = ya(s);
    o && o.length > 0 && o.every((i) => e.includes(i)) && (r.push(String(s.value)), o.forEach((i) => {
      n.add(i);
    }));
  }
  for (const s of e)
    n.has(s) || r.push(s);
  return r;
}
function Oh(e, t) {
  const r = [];
  for (const n of e) {
    const s = t.find((i) => i.value === n), o = s ? ya(s) : null;
    o ? r.push(...o) : r.push(n);
  }
  return [...new Set(r)];
}
function Ph(e) {
  return new Map(e.map((t) => [t.id, t.name]));
}
function Dh(e, t, r) {
  const n = e.map((s) => t.find((o) => o.value === s)).filter((s) => !!s);
  return n.length === 1 ? n[0].label : n.length > 1 ? `${n.length} selected` : e.length === 1 ? r.get(e[0]) ?? "Select..." : e.length > 1 ? `${e.length} selected` : "Select...";
}
function Nh({
  labelsOptions: e = [],
  tiersOptions: t = [],
  newsletters: r = [],
  hydratedNewsletterSlugs: n = [],
  hasMultipleTiers: s = !1,
  paidMembersEnabled: o = !1,
  emailFiltersEnabled: i = !1,
  postResourceOptions: l = [],
  onPostResourceSearchChange: c,
  postResourceSearchValue: u,
  postResourceLoading: h = !1,
  emailResourceOptions: y = [],
  onEmailResourceSearchChange: _,
  emailResourceSearchValue: S,
  emailResourceLoading: P = !1,
  offers: k = [],
  membersTrackSources: A = !1,
  emailTrackOpens: M = !1,
  emailTrackClicks: L = !1,
  siteTimezone: U = "UTC"
}) {
  return de(() => {
    const F = [], I = r.filter((b) => b.status !== "archived"), z = new Set(I.map((b) => b.slug)), T = [...new Set(n)].map((b) => {
      const x = r.find(($) => $.slug === b);
      return {
        slug: b,
        name: (x == null ? void 0 : x.name) ?? b
      };
    }), p = T.filter((b) => !z.has(b.slug)), d = ba(k), j = Ph(k), O = Fe.tz(U).format("YYYY-MM-DD"), g = [
      me("name"),
      me("email")
    ];
    if (e.length > 0 && g.push(me("label", {
      type: "select",
      options: e,
      customRenderer: (b) => _e.createElement(uc, b)
    })), I.length <= 1) {
      g.push(me("subscribed"));
      for (const b of T)
        g.push(me(`newsletters.${b.slug}`, {
          label: b.name
        }));
    }
    if (g.push(
      Yt("last_seen_at", O),
      Yt("created_at", O)
    ), A && g.push(me("signup", st(
      l,
      c,
      u,
      h
    ))), F.push({ group: "Basic", fields: g }), I.length > 1) {
      const b = [
        me("subscribed", {
          label: "All newsletters",
          options: [
            { value: "subscribed", label: "Subscribed to at least one" },
            { value: "unsubscribed", label: "Unsubscribed from all" },
            { value: "email-disabled", label: "Email disabled" }
          ]
        })
      ];
      for (const x of I)
        b.push(me(`newsletters.${x.slug}`, {
          label: x.name
        }));
      for (const x of p)
        b.push(me(`newsletters.${x.slug}`, {
          label: x.name
        }));
      F.push({ group: "Newsletters", fields: b });
    }
    if (o) {
      const b = [];
      s && b.push(me("tier_id", {
        options: t
      })), b.push(
        me("status"),
        me("subscriptions.plan_interval"),
        me("subscriptions.status"),
        Yt("subscriptions.start_date", O),
        Yt("subscriptions.current_period_end", O)
      ), A && b.push(me("conversion", st(
        l,
        c,
        u,
        h
      ))), k.length > 0 && b.push(me("offer_redemptions", {
        options: d,
        customValueRenderer: (x) => Dh(x, d, j)
      })), F.push({ group: "Subscription", fields: b });
    }
    if (i) {
      const b = [
        me("email_count", {}, Mr),
        me("email_opened_count", {}, Mr)
      ];
      M && b.push(me("email_open_rate", {}, Mr)), b.push(me("emails.post_id", st(
        y,
        _,
        S,
        P
      ))), M && b.push(me("opened_emails.post_id", st(
        y,
        _,
        S,
        P
      ))), L && b.push(me("clicked_links.post_id", st(
        y,
        _,
        S,
        P
      ))), b.push(me("newsletter_feedback", st(
        y,
        _,
        S,
        P
      ))), F.push({ group: "Email", fields: b });
    }
    return F;
  }, [
    i,
    P,
    y,
    S,
    L,
    M,
    s,
    e,
    A,
    r,
    k,
    n,
    _,
    c,
    o,
    h,
    l,
    u,
    U,
    t
  ]);
}
const Th = "TiersResponseType", Rh = yo({
  dataType: Th,
  path: "/tiers/",
  defaultNextPageParams: (e, t) => {
    var r;
    return {
      ...t,
      page: (((r = e.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((s) => s.tiers), n = t[t.length - 1].meta;
    return {
      tiers: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function $s(e, t) {
  return t ? `${e}+title:~${St(t)}` : e;
}
const Ih = "PagesResponseType", $h = vn({
  dataType: Ih,
  path: "/pages/"
});
function Cs(e) {
  const [t, r] = ie(""), n = e === "post", s = $s(
    n ? "status:published" : "(status:published,status:sent)+newsletter_id:-null",
    t
  ), { data: o, isLoading: i } = Xi({
    searchParams: {
      filter: s,
      limit: "25",
      fields: "id,title",
      order: "published_at DESC"
    }
  }), { data: l, isLoading: c } = $h({
    searchParams: {
      filter: $s("status:published", t),
      limit: "25",
      fields: "id,title",
      order: "published_at DESC"
    },
    enabled: n
  }), u = de(() => {
    const y = (o == null ? void 0 : o.posts) || [];
    if (!n)
      return y.map((P) => ({
        value: P.id,
        label: P.title
      }));
    const _ = (l == null ? void 0 : l.pages) || [], S = [];
    for (const P of y)
      S.push({ value: P.id, label: P.title });
    for (const P of _)
      S.push({ value: P.id, label: P.title, detail: "Page" });
    return S;
  }, [o, l, n]), h = re((y) => {
    r(y);
  }, []);
  return {
    options: u,
    isLoading: i || n && c,
    searchValue: t,
    onSearchChange: h
  };
}
const Ch = [];
function zs(e, t) {
  return e.map((r) => r.field !== "offer_redemptions" ? r : {
    ...r,
    values: t(r.values)
  });
}
const Fs = ({
  filters: e,
  nql: t,
  onFiltersChange: r,
  savedViews: n = [],
  activeView: s
}) => {
  const { data: o } = Zo({ searchParams: { limit: "100" } }), { data: i } = Rh({ searchParams: { limit: "100" } }), { data: l } = nl({}), { data: c } = Ko({ searchParams: { limit: "100" } }), { data: u } = Tt({}), h = (u == null ? void 0 : u.settings) || [], y = it(h, "paid_members_enabled") === !0, _ = it(h, "editor_default_email_recipients") !== "disabled", S = it(h, "members_track_sources") === !0, P = it(h, "email_track_opens") === !0, k = it(h, "email_track_clicks") === !0, A = ko(h), M = (o == null ? void 0 : o.labels) || [], L = (i == null ? void 0 : i.tiers) || [], U = (c == null ? void 0 : c.newsletters) || [], F = de(() => (l == null ? void 0 : l.offers) ?? Ch, [l == null ? void 0 : l.offers]), I = L.filter((N) => N.type === "paid" && N.active), z = I.length > 1, T = de(() => ba(F), [F]), p = de(() => [...new Set(
    e.map((N) => N.field).filter((N) => N.startsWith("newsletters.")).map((N) => N.slice(12)).filter(Boolean)
  )], [e]), d = de(() => zs(e, (N) => Ah(N, T)), [e, T]), j = re((N) => {
    r(zs(N, (m) => Oh(m, T)));
  }, [r, T]), O = Cs("post"), g = Cs("email"), b = Nh({
    newsletters: U,
    hydratedNewsletterSlugs: p,
    hasMultipleTiers: z,
    paidMembersEnabled: y,
    emailFiltersEnabled: _,
    labelsOptions: M.map((N) => ({ value: N.slug, label: N.name })),
    tiersOptions: I.map((N) => ({ value: N.id, label: N.name })),
    offers: F,
    postResourceOptions: O.options,
    onPostResourceSearchChange: O.onSearchChange,
    postResourceSearchValue: O.searchValue,
    postResourceLoading: O.isLoading,
    emailResourceOptions: g.options,
    onEmailResourceSearchChange: g.onSearchChange,
    emailResourceSearchValue: g.searchValue,
    emailResourceLoading: g.isLoading,
    membersTrackSources: S,
    emailTrackOpens: P,
    emailTrackClicks: k,
    siteTimezone: A
  }), x = e.length > 0, $ = x ? /* @__PURE__ */ a.jsxs("div", { className: "flex shrink-0 items-center gap-2 sm:absolute sm:top-0 sm:right-0", children: [
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        className: "flex items-center gap-1 text-sm font-normal text-muted-foreground hover:text-foreground",
        type: "button",
        onClick: () => r([]),
        children: [
          /* @__PURE__ */ a.jsx(yr, { className: "size-4" }),
          "Clear"
        ]
      }
    ),
    t && /* @__PURE__ */ a.jsx(
      xh,
      {
        activeView: s,
        existingViews: n,
        filter: t,
        onDeleted: () => r([])
      }
    )
  ] }) : void 0;
  return /* @__PURE__ */ a.jsx(
    pi,
    {
      addButtonIcon: x ? /* @__PURE__ */ a.jsx(bi, {}) : /* @__PURE__ */ a.jsx(vi, {}),
      addButtonText: x ? "Add filter" : "Filter",
      allowMultiple: !0,
      className: `[&>button]:order-last ${x ? "sm:!pr-40 [&>button]:border-none" : "w-auto"}`,
      clearButton: $,
      fields: b,
      filters: d,
      keyboardShortcut: "f",
      popoverAlign: "start",
      popoverContentClassName: "w-[280px] translate-x-[-32px] [&_[data-slot=command-list]]:max-h-[450px]",
      showClearButton: x,
      showSearchInput: !0,
      onChange: j
    }
  );
}, va = ({
  children: e,
  totalMembers: t,
  isLoading: r
}) => /* @__PURE__ */ a.jsxs(sr, { className: "relative pb-6! md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ a.jsxs(sr.Title, { children: [
    "Members",
    " ",
    !r && /* @__PURE__ */ a.jsx("span", { className: "font-normal text-muted-foreground", children: t.toLocaleString() })
  ] }),
  e
] }), zh = 250, Fh = ({
  search: e,
  onSearchChange: t
}) => {
  const [r, n] = ie(e), [s] = li(r, zh), o = Pe(e);
  return Te(() => {
    o.current = e, n(e);
  }, [e]), Te(() => {
    s !== o.current && t(s);
  }, [s, t]), /* @__PURE__ */ a.jsxs(Ql, { className: "min-w-0 basis-full sm:w-[240px] sm:basis-auto", children: [
    /* @__PURE__ */ a.jsx(ec, { children: /* @__PURE__ */ a.jsx(go, { className: "size-4", strokeWidth: 1.75 }) }),
    /* @__PURE__ */ a.jsx(
      tc,
      {
        "aria-label": "Search members",
        placeholder: "Search members...",
        value: r,
        onChange: (i) => n(i.target.value)
      }
    )
  ] });
}, _a = ({ children: e }) => /* @__PURE__ */ a.jsx("div", { className: "size-full", children: /* @__PURE__ */ a.jsx("div", { className: "relative flex size-full flex-col", children: /* @__PURE__ */ a.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ a.jsx("div", { className: "flex h-full flex-col", "data-testid": "members-page", children: e }) }) }) });
function Lh(e) {
  if (!e)
    return { text: "Unknown", isKnown: !1 };
  try {
    const t = JSON.parse(e);
    return t.country ? t.country_code === "US" && t.region ? { text: `${t.region}, US`, isKnown: !0 } : { text: t.country, isKnown: !0 } : { text: "Unknown", isKnown: !1 };
  } catch {
    return { text: "Unknown", isKnown: !1 };
  }
}
function Mh(e) {
  switch (e) {
    case "paid":
      return "Paid";
    case "comped":
      return "Complimentary";
    default:
      return "Free";
  }
}
function Uh({ item: e, onClick: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ a.jsx(
      ci,
      {
        avatarImage: e.avatar_image,
        className: "size-10 min-w-10 md:size-10 md:min-w-10",
        memberEmail: e.email,
        memberId: e.id,
        memberName: e.name
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ a.jsx(
        "a",
        {
          className: "cursor-pointer before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[calc(100vw-300px-64px)]",
          href: `#/members/${e.id}`,
          onClick: t ? (r) => {
            r.button !== 0 || r.metaKey || r.ctrlKey || r.shiftKey || r.altKey || (r.preventDefault(), t(e.id));
          } : void 0,
          children: /* @__PURE__ */ a.jsx("span", { className: "block truncate font-medium", children: e.name || e.email || "Anonymous" })
        }
      ),
      e.name && e.email && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "truncate text-sm text-muted-foreground",
          "data-testid": "member-email",
          children: e.email
        }
      )
    ] })
  ] });
}
function Zh({
  status: e,
  tiers: t
}) {
  const r = t == null ? void 0 : t.map((n) => n.name).join(", ");
  return /* @__PURE__ */ a.jsx("div", { className: "flex min-w-0 justify-end lg:justify-start", children: /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ a.jsx("div", { className: "truncate text-sm", children: Mh(e) }),
    r && /* @__PURE__ */ a.jsx("div", { className: "truncate text-xs text-muted-foreground", children: r })
  ] }) });
}
function Bh({
  emailOpenRate: e
}) {
  const t = e != null;
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: Oe("text-sm", t ? "text-foreground" : "text-muted-foreground"),
      children: t ? `${Math.round(e)}%` : "N/A"
    }
  );
}
function Vh({
  geolocation: e
}) {
  const t = Lh(e);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: Oe("truncate text-sm", t.isKnown ? "text-foreground" : "text-muted-foreground"),
      children: t.text
    }
  );
}
function Wh({ createdAt: e }) {
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: Fe.utc(e).format("D MMM YYYY") }),
    /* @__PURE__ */ a.jsx("div", { className: "text-xs text-muted-foreground", children: Fe.utc(e).fromNow() })
  ] });
}
function Gh({
  column: e,
  member: t,
  timezone: r
}) {
  const n = Xc(e, t, r);
  return n ? /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ a.jsx("div", { className: "truncate text-sm", children: n.text }),
    n.subtext && /* @__PURE__ */ a.jsx("div", { className: "truncate text-xs text-muted-foreground", children: n.subtext })
  ] }) : /* @__PURE__ */ a.jsx("span", { className: "text-sm text-muted-foreground", children: "-" });
}
function Kh({
  item: e,
  activeColumns: t,
  showEmailOpenRate: r,
  timezone: n,
  onClick: s,
  ...o
}) {
  return /* @__PURE__ */ a.jsxs(
    dt,
    {
      ...o,
      "data-testid": "members-list-item",
      children: [
        /* @__PURE__ */ a.jsx(ze, { className: "px-4 py-3", children: /* @__PURE__ */ a.jsx(Uh, { item: e, onClick: s }) }),
        /* @__PURE__ */ a.jsx(ze, { className: "px-4 py-3", children: /* @__PURE__ */ a.jsx(Zh, { status: e.status, tiers: e.tiers }) }),
        r && /* @__PURE__ */ a.jsx(ze, { className: "hidden px-4 py-3 lg:table-cell", children: /* @__PURE__ */ a.jsx(Bh, { emailOpenRate: e.email_open_rate }) }),
        /* @__PURE__ */ a.jsx(ze, { className: "hidden px-4 py-3 lg:table-cell", children: /* @__PURE__ */ a.jsx(Vh, { geolocation: e.geolocation }) }),
        /* @__PURE__ */ a.jsx(ze, { className: "hidden px-4 py-3 lg:table-cell", children: /* @__PURE__ */ a.jsx(Wh, { createdAt: e.created_at }) }),
        t.map((i) => /* @__PURE__ */ a.jsx(ze, { className: "hidden px-4 py-3 lg:table-cell", children: /* @__PURE__ */ a.jsx(
          Gh,
          {
            column: i,
            member: e,
            timezone: n
          }
        ) }, i.key))
      ]
    }
  );
}
const Ls = ({ height: e }) => /* @__PURE__ */ a.jsx("tr", { "aria-hidden": "true", style: { height: e }, children: /* @__PURE__ */ a.jsx("td", { colSpan: 999 }) }), Hh = gr(
  function(t, r) {
    return /* @__PURE__ */ a.jsx(
      dt,
      {
        ref: r,
        ...t,
        "aria-hidden": "true",
        children: /* @__PURE__ */ a.jsx(ze, { className: "h-[72px] px-4 py-3", colSpan: 999, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "h-full animate-pulse rounded-md bg-muted",
            "data-testid": "loading-placeholder"
          }
        ) })
      }
    );
  }
);
function Yh({
  items: e,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: s,
  isLoading: o,
  showEmailOpenRate: i = !0,
  activeColumns: l,
  timezone: c,
  onRowClick: u
}) {
  const h = Pe(null);
  ui({ parentRef: h, isLoading: o });
  const { visibleItems: y, spaceBefore: _, spaceAfter: S } = el({
    items: e,
    totalItems: t,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: s,
    parentRef: h,
    estimateSize: () => 72
    // Approximate row height
  }), P = (k) => {
    u ? u(k) : window.location.hash = `/members/${k}`;
  };
  return /* @__PURE__ */ a.jsx("div", { ref: h, className: "h-[calc(100%+32px)] w-full overflow-auto lg:-mx-8 lg:-mb-8 lg:w-auto lg:max-w-[calc(100vw-300px)]", children: /* @__PURE__ */ a.jsxs(
    wo,
    {
      className: "w-full border-collapse lg:ml-8 lg:w-auto lg:max-w-[calc(100vw-300px-64px)] lg:table-fixed",
      "data-testid": "members-list",
      children: [
        /* @__PURE__ */ a.jsxs("colgroup", { className: "hidden lg:table-column-group", children: [
          /* @__PURE__ */ a.jsx("col", { className: "w-full min-w-[360px]" }),
          /* @__PURE__ */ a.jsx("col", { className: "w-[50%] min-w-[160px]" }),
          i && /* @__PURE__ */ a.jsx("col", { className: "w-[50%] min-w-[110px]" }),
          /* @__PURE__ */ a.jsx("col", { className: "w-[50%] min-w-[150px]" }),
          /* @__PURE__ */ a.jsx("col", { className: "w-[50%] min-w-[120px]" }),
          l.map((k) => /* @__PURE__ */ a.jsx("col", { className: "w-[50%] min-w-[250px]" }, k.key))
        ] }),
        /* @__PURE__ */ a.jsx(xo, { className: "sticky top-0 z-10 hidden border-b bg-background lg:table-header-group", children: /* @__PURE__ */ a.jsxs(dt, { children: [
          /* @__PURE__ */ a.jsx(Be, { className: "px-4 py-3", children: "Member" }),
          /* @__PURE__ */ a.jsx(Be, { className: "px-4 py-3", children: "Status" }),
          i && /* @__PURE__ */ a.jsx(Be, { className: "px-4 py-3", children: "Open rate" }),
          /* @__PURE__ */ a.jsx(Be, { className: "px-4 py-3", children: "Location" }),
          /* @__PURE__ */ a.jsx(Be, { className: "px-4 py-3", children: "Created" }),
          l.map((k) => /* @__PURE__ */ a.jsx(Be, { className: "px-4 py-3", children: k.label }, k.key))
        ] }) }),
        /* @__PURE__ */ a.jsxs(Eo, { children: [
          /* @__PURE__ */ a.jsx(Ls, { height: _ }),
          y.map(({ key: k, virtualItem: A, item: M, props: L }) => A.index > e.length - 1 ? /* @__PURE__ */ a.jsx(Hh, { ...L }, k) : /* @__PURE__ */ a.jsx(
            Kh,
            {
              ...L,
              activeColumns: l,
              item: M,
              showEmailOpenRate: i,
              timezone: c,
              onClick: P
            },
            k
          )),
          /* @__PURE__ */ a.jsx(Ls, { height: S })
        ] })
      ]
    }
  ) });
}
const qh = [
  "subscriptions.plan_interval",
  "subscriptions.status",
  "subscriptions.start_date",
  "subscriptions.current_period_end",
  "conversion",
  "offer_redemptions"
];
function Jh(e, t) {
  return t && e.length === 0 ? !1 : !e.some((r) => qh.includes(r.field));
}
function Qh({
  isFetching: e,
  isFetchingNextPage: t
}) {
  return e && !t;
}
var In = {}, sn = { exports: {} };
const Xh = {}, em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xh
}, Symbol.toStringTag, { value: "Module" })), Ms = /* @__PURE__ */ mn(em);
(function(e, t) {
  var r = function() {
    var n = function(O, g, b, x) {
      for (b = b || {}, x = O.length; x--; b[O[x]] = g) ;
      return b;
    }, s = [1, 5], o = [1, 7], i = [1, 8], l = [1, 6, 10], c = [1, 9], u = [1, 6, 8, 10], h = [1, 24], y = [1, 25], _ = [1, 26], S = [1, 27], P = [1, 28], k = [1, 29], A = [1, 30], M = [1, 17], L = [1, 18], U = [1, 19], F = [21, 22, 23, 24, 25, 29, 30], I = [1, 6, 8, 10, 18], z = [1, 47], T = [6, 18], p = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
      productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
      performAction: function(g, b, x, $, N, m, ne, Z) {
        var R = m.length - 1;
        switch (N) {
          case 1:
            return $.debug("expression", m[R]), $.debug("opt", Z), m[R] && m[R].yg ? m[R].yg : m[R];
          case 2:
            $.debug("andCondition", m[R]), this.$ = m[R];
            break;
          case 3:
            $.debug("expression OR andCondition", m[R - 2], m[R]), m[R - 2] = m[R - 2].$or ? m[R - 2] : { $or: [$.ungroup(m[R - 2])] }, m[R - 2].$or.push($.ungroup(m[R])), this.$ = m[R - 2];
            break;
          case 4:
            $.debug("filterExpr", m[R]), this.$ = m[R];
            break;
          case 5:
            $.debug("andCondition AND filterExpr", m[R - 2], m[R]), m[R - 2] = m[R - 2].$and ? m[R - 2] : { $and: [$.ungroup(m[R - 2])] }, m[R - 2].$and.push($.ungroup(m[R])), this.$ = m[R - 2];
            break;
          case 6:
            $.debug("LPAREN expression RPAREN", m[R - 1]), this.$ = { yg: m[R - 1] };
            break;
          case 7:
            this.$ = { [m[R - 1]]: m[R] };
            break;
          case 8:
            m[R] = m[R].replace(/:$/, ""), m[R] = Z.aliases && Z.aliases[m[R]] ? Z.aliases[m[R]] : m[R], this.$ = m[R];
            break;
          case 9:
            this.$ = { $not: m[R] };
            break;
          case 10:
            this.$ = { $regex: m[R] };
            break;
          case 11:
            this.$ = { $nin: m[R - 1] };
            break;
          case 12:
            this.$ = { $in: m[R - 1] };
            break;
          case 13:
            this.$ = {}, this.$[m[R - 1]] = m[R];
            break;
          case 14:
            this.$ = m[R];
            break;
          case 15:
            this.$.push(m[R]);
            break;
          case 16:
            this.$ = [m[R]];
            break;
          case 17:
            this.$ = null;
            break;
          case 18:
            this.$ = !0;
            break;
          case 19:
            this.$ = !1;
            break;
          case 20:
            this.$ = parseInt(g);
            break;
          case 21:
            this.$ = $.relDateToAbsolute(m[R - 2], m[R - 1], m[R]);
            break;
          case 22:
            this.$ = $.unescape(m[R]);
            break;
          case 23:
            m[R] = m[R].replace(/^'|'$/g, ""), this.$ = $.unescape(m[R]);
            break;
          case 24:
            this.$ = "add";
            break;
          case 25:
            this.$ = "sub";
            break;
          case 26:
            m[R] = m[R].replace(/^'|'$/g, ""), m[R] = $.unescape(m[R]), this.$ = $.stringToRegExp(m[R]);
            break;
          case 27:
            m[R] = m[R].replace(/^'|'$/g, ""), m[R] = $.unescape(m[R]), this.$ = $.stringToRegExp(m[R], "^");
            break;
          case 28:
            m[R] = m[R].replace(/^'|'$/g, ""), m[R] = $.unescape(m[R]), this.$ = $.stringToRegExp(m[R], "$");
            break;
          case 29:
            this.$ = "$ne";
            break;
          case 30:
            this.$ = "$gt";
            break;
          case 31:
            this.$ = "$lt";
            break;
          case 32:
            this.$ = "$gte";
            break;
          case 33:
            this.$ = "$lte";
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: s, 11: 6, 13: o }, { 1: [3] }, { 1: [2, 1], 6: i }, n(l, [2, 2], { 8: c }), n(u, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: s, 11: 6, 13: o }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: h, 22: y, 23: _, 24: S, 25: P, 29: k, 30: A, 33: M, 34: L, 35: U, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, n([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: s, 11: 6, 13: o }, { 7: 32, 9: s, 11: 6, 13: o }, { 6: i, 10: [1, 33] }, n(u, [2, 7]), n(F, [2, 29], { 15: 34, 16: [1, 35], 33: M, 34: L, 35: U }), n(u, [2, 10]), { 17: 36, 20: 37, 21: h, 22: y, 23: _, 24: S, 25: P, 29: k, 30: A }, { 20: 38, 21: h, 22: y, 23: _, 24: S, 25: P, 29: k, 30: A }, n(u, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, n(F, [2, 30]), n(F, [2, 31]), n(F, [2, 32]), n(F, [2, 33]), n(I, [2, 17]), n(I, [2, 18]), n(I, [2, 19]), n(I, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, n(I, [2, 22]), n(I, [2, 23]), n(l, [2, 3], { 8: c }), n(u, [2, 5]), n(u, [2, 6]), n(u, [2, 9]), { 17: 45, 20: 37, 21: h, 22: y, 23: _, 24: S, 25: P, 29: k, 30: A }, { 6: z, 18: [1, 46] }, n(T, [2, 16]), n(u, [2, 13]), n(u, [2, 26]), n(u, [2, 27]), n(u, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: z, 18: [1, 49] }, n(u, [2, 12]), { 20: 50, 21: h, 22: y, 23: _, 24: S, 25: P, 29: k, 30: A }, { 28: [1, 51] }, n(u, [2, 11]), n(T, [2, 15]), n(I, [2, 21])],
      defaultActions: { 43: [2, 24], 44: [2, 25] },
      parseError: function(g, b) {
        if (b.recoverable)
          this.trace(g);
        else {
          var x = new Error(g);
          throw x.hash = b, x;
        }
      },
      parse: function(g) {
        var b = this, x = [0], $ = [null], N = [], m = this.table, ne = "", Z = 0, R = 0, le = 2, f = 1, v = N.slice.call(arguments, 1), w = Object.create(this.lexer), W = { yy: {} };
        for (var K in this.yy)
          Object.prototype.hasOwnProperty.call(this.yy, K) && (W.yy[K] = this.yy[K]);
        w.setInput(g, W.yy), W.yy.lexer = w, W.yy.parser = this, typeof w.yylloc > "u" && (w.yylloc = {});
        var q = w.yylloc;
        N.push(q);
        var H = w.options && w.options.ranges;
        typeof W.yy.parseError == "function" ? this.parseError = W.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
        for (var C = function() {
          var ve;
          return ve = w.lex() || f, typeof ve != "number" && (ve = b.symbols_[ve] || ve), ve;
        }, V, J, Q, X, te = {}, ae, Y, xe, be; ; ) {
          if (J = x[x.length - 1], this.defaultActions[J] ? Q = this.defaultActions[J] : ((V === null || typeof V > "u") && (V = C()), Q = m[J] && m[J][V]), typeof Q > "u" || !Q.length || !Q[0]) {
            var E = "";
            be = [];
            for (ae in m[J])
              this.terminals_[ae] && ae > le && be.push("'" + this.terminals_[ae] + "'");
            w.showPosition ? E = "Parse error on line " + (Z + 1) + `:
` + w.showPosition() + `
Expecting ` + be.join(", ") + ", got '" + (this.terminals_[V] || V) + "'" : E = "Parse error on line " + (Z + 1) + ": Unexpected " + (V == f ? "end of input" : "'" + (this.terminals_[V] || V) + "'"), this.parseError(E, {
              text: w.match,
              token: this.terminals_[V] || V,
              line: w.yylineno,
              loc: q,
              expected: be
            });
          }
          if (Q[0] instanceof Array && Q.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + J + ", token: " + V);
          switch (Q[0]) {
            case 1:
              x.push(V), $.push(w.yytext), N.push(w.yylloc), x.push(Q[1]), V = null, R = w.yyleng, ne = w.yytext, Z = w.yylineno, q = w.yylloc;
              break;
            case 2:
              if (Y = this.productions_[Q[1]][1], te.$ = $[$.length - Y], te._$ = {
                first_line: N[N.length - (Y || 1)].first_line,
                last_line: N[N.length - 1].last_line,
                first_column: N[N.length - (Y || 1)].first_column,
                last_column: N[N.length - 1].last_column
              }, H && (te._$.range = [
                N[N.length - (Y || 1)].range[0],
                N[N.length - 1].range[1]
              ]), X = this.performAction.apply(te, [
                ne,
                R,
                Z,
                W.yy,
                Q[1],
                $,
                N
              ].concat(v)), typeof X < "u")
                return X;
              Y && (x = x.slice(0, -1 * Y * 2), $ = $.slice(0, -1 * Y), N = N.slice(0, -1 * Y)), x.push(this.productions_[Q[1]][0]), $.push(te.$), N.push(te._$), xe = m[x[x.length - 2]][x[x.length - 1]], x.push(xe);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    };
    p.parseError = function(O, g) {
      var b = O.split(`
`);
      throw b[0] = "Query Error: unexpected character in filter at char " + (g.loc.first_column + 1), new Error(b.join(`
`));
    };
    var d = function() {
      var O = {
        EOF: 1,
        parseError: function(b, x) {
          if (this.yy.parser)
            this.yy.parser.parseError(b, x);
          else
            throw new Error(b);
        },
        // resets the lexer, sets new input
        setInput: function(g, b) {
          return this.yy = b || this.yy || {}, this._input = g, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        // consumes and returns one char from the input
        input: function() {
          var g = this._input[0];
          this.yytext += g, this.yyleng++, this.offset++, this.match += g, this.matched += g;
          var b = g.match(/(?:\r\n?|\n).*/g);
          return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), g;
        },
        // unshifts one char (or a string) into the input
        unput: function(g) {
          var b = g.length, x = g.split(/(?:\r\n?|\n)/g);
          this._input = g + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b), this.offset -= b;
          var $ = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), x.length - 1 && (this.yylineno -= x.length - 1);
          var N = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: x ? (x.length === $.length ? this.yylloc.first_column : 0) + $[$.length - x.length].length - x[0].length : this.yylloc.first_column - b
          }, this.options.ranges && (this.yylloc.range = [N[0], N[0] + this.yyleng - b]), this.yyleng = this.yytext.length, this;
        },
        // When called from action, caches matched text and appends it on next action
        more: function() {
          return this._more = !0, this;
        },
        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject: function() {
          if (this.options.backtrack_lexer)
            this._backtrack = !0;
          else
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          return this;
        },
        // retain first n characters of the match
        less: function(g) {
          this.unput(this.match.slice(g));
        },
        // displays already matched input, i.e. for error messages
        pastInput: function() {
          var g = this.matched.substr(0, this.matched.length - this.match.length);
          return (g.length > 20 ? "..." : "") + g.substr(-20).replace(/\n/g, "");
        },
        // displays upcoming input, i.e. for error messages
        upcomingInput: function() {
          var g = this.match;
          return g.length < 20 && (g += this._input.substr(0, 20 - g.length)), (g.substr(0, 20) + (g.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition: function() {
          var g = this.pastInput(), b = new Array(g.length + 1).join("-");
          return g + this.upcomingInput() + `
` + b + "^";
        },
        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match: function(g, b) {
          var x, $, N;
          if (this.options.backtrack_lexer && (N = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          }, this.options.ranges && (N.yylloc.range = this.yylloc.range.slice(0))), $ = g[0].match(/(?:\r\n?|\n).*/g), $ && (this.yylineno += $.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: $ ? $[$.length - 1].length - $[$.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
          }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], x = this.performAction.call(this, this.yy, this, b, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), x)
            return x;
          if (this._backtrack) {
            for (var m in N)
              this[m] = N[m];
            return !1;
          }
          return !1;
        },
        // return next match in input
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var g, b, x, $;
          this._more || (this.yytext = "", this.match = "");
          for (var N = this._currentRules(), m = 0; m < N.length; m++)
            if (x = this._input.match(this.rules[N[m]]), x && (!b || x[0].length > b[0].length)) {
              if (b = x, $ = m, this.options.backtrack_lexer) {
                if (g = this.test_match(x, N[m]), g !== !1)
                  return g;
                if (this._backtrack) {
                  b = !1;
                  continue;
                } else
                  return !1;
              } else if (!this.options.flex)
                break;
            }
          return b ? (g = this.test_match(b, N[$]), g !== !1 ? g : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        },
        // return next match that has a token
        lex: function() {
          var b = this.next();
          return b || this.lex();
        },
        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function(b) {
          this.conditionStack.push(b);
        },
        // pop the previously active lexer condition state off the condition stack
        popState: function() {
          var b = this.conditionStack.length - 1;
          return b > 0 ? this.conditionStack.pop() : this.conditionStack[0];
        },
        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function() {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
        },
        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function(b) {
          return b = this.conditionStack.length - 1 - Math.abs(b || 0), b >= 0 ? this.conditionStack[b] : "INITIAL";
        },
        // alias for begin(condition)
        pushState: function(b) {
          this.begin(b);
        },
        // return the number of states currently on the stack
        stateStackSize: function() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function(b, x, $, N) {
          switch ($) {
            case 0:
              break;
            case 1:
              return 21;
            case 2:
              return 22;
            case 3:
              return 23;
            case 4:
              return 13;
            case 5:
              return 24;
            case 6:
              return 16;
            case 7:
              return 18;
            case 8:
              return this.pushState("reldate"), 25;
            case 9:
              return 32;
            case 10:
              return 31;
            case 11:
              return 27;
            case 12:
              return this.popState(), 28;
            case 13:
              return 29;
            case 14:
              return 30;
            case 15:
              return 9;
            case 16:
              return 10;
            case 17:
              return 6;
            case 18:
              return 8;
            case 19:
              return 14;
            case 20:
              return 38;
            case 21:
              return 39;
            case 22:
              return 36;
            case 23:
              return 37;
            case 24:
              return 34;
            case 25:
              return 35;
            case 26:
              return 33;
            case 27:
              return 29;
          }
        },
        rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/, /^(?:([a-zA-Z])(?![a-zA-Z'"\,\(\)\>\<=\[\]\~]))/],
        conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 } }
      };
      return O.parseError = function(g, b) {
        var x = g.split(`
`), $, N;
        throw $ = x[2].indexOf("^"), N = x[1].charAt($), x[0] = 'Query Error: unrecognized text "' + N + '" in filter at char ' + ($ + 1), Error(x.join(`
`));
      }, O;
    }();
    p.lexer = d;
    function j() {
      this.yy = {};
    }
    return j.prototype = p, p.Parser = j, new j();
  }();
  typeof tl < "u" && (t.parser = r, t.Parser = r.Parser, t.parse = function() {
    return r.parse.apply(r, arguments);
  }, t.main = function(s) {
    s[1] || (console.log("Usage: " + s[0] + " FILE"), process.exit(1));
    var o = Ms.readFileSync(Ms.normalize(s[1]), "utf8");
    return t.parser.parse(o);
  }, require.main === e && t.main(process.argv.slice(1)));
})(sn, sn.exports);
var tm = sn.exports, wa = {}, xa = {}, Ea = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var s = 42;
  t[r] = s;
  for (var o in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(t);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = (
      /** @type {PropertyDescriptor} */
      Object.getOwnPropertyDescriptor(t, r)
    );
    if (l.value !== s || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, rm = Ea, jr = function() {
  return rm() && !!Symbol.toStringTag;
}, Sa = Object, nm = Error, sm = EvalError, om = RangeError, am = ReferenceError, ja = SyntaxError, $t = TypeError, im = URIError, lm = Math.abs, cm = Math.floor, um = Math.max, fm = Math.min, dm = Math.pow, pm = Math.round, hm = Number.isNaN || function(t) {
  return t !== t;
}, mm = hm, gm = function(t) {
  return mm(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, ym = Object.getOwnPropertyDescriptor, Jt = ym;
if (Jt)
  try {
    Jt([], "length");
  } catch {
    Jt = null;
  }
var _t = Jt, Qt = Object.defineProperty || !1;
if (Qt)
  try {
    Qt({}, "a", { value: 1 });
  } catch {
    Qt = !1;
  }
var kr = Qt, Ur, Us;
function bm() {
  if (Us) return Ur;
  Us = 1;
  var e = typeof Symbol < "u" && Symbol, t = Ea;
  return Ur = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ur;
}
var ka = typeof Reflect < "u" && Reflect.getPrototypeOf || null, vm = Sa, Aa = vm.getPrototypeOf || null, _m = "Function.prototype.bind called on incompatible ", wm = Object.prototype.toString, xm = Math.max, Em = "[object Function]", Zs = function(t, r) {
  for (var n = [], s = 0; s < t.length; s += 1)
    n[s] = t[s];
  for (var o = 0; o < r.length; o += 1)
    n[o + t.length] = r[o];
  return n;
}, Sm = function(t, r) {
  for (var n = [], s = r, o = 0; s < t.length; s += 1, o += 1)
    n[o] = t[s];
  return n;
}, jm = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, km = function(t) {
  var r = this;
  if (typeof r != "function" || wm.apply(r) !== Em)
    throw new TypeError(_m + r);
  for (var n = Sm(arguments, 1), s, o = function() {
    if (this instanceof s) {
      var h = r.apply(
        this,
        Zs(n, arguments)
      );
      return Object(h) === h ? h : this;
    }
    return r.apply(
      t,
      Zs(n, arguments)
    );
  }, i = xm(0, r.length - n.length), l = [], c = 0; c < i; c++)
    l[c] = "$" + c;
  if (s = Function("binder", "return function (" + jm(l, ",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, s.prototype = new u(), u.prototype = null;
  }
  return s;
}, Am = km, Ct = Function.prototype.bind || Am, $n = Function.prototype.call, Cn = Function.prototype.apply, Om = typeof Reflect < "u" && Reflect && Reflect.apply, Pm = Ct, Dm = Cn, Nm = $n, Tm = Om, Oa = Tm || Pm.call(Nm, Dm), Rm = Ct, Im = $t, $m = $n, Cm = Oa, zn = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new Im("a function is required");
  return Cm(Rm, $m, t);
}, zm = zn, Bs = _t, Pa;
try {
  Pa = /** @type {{ __proto__?: typeof Array.prototype }} */
  [].__proto__ === Array.prototype;
} catch (e) {
  if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS")
    throw e;
}
var Zr = !!Pa && Bs && Bs(
  Object.prototype,
  /** @type {keyof typeof Object.prototype} */
  "__proto__"
), Da = Object, Vs = Da.getPrototypeOf, Fm = Zr && typeof Zr.get == "function" ? zm([Zr.get]) : typeof Vs == "function" ? (
  /** @type {import('./get')} */
  function(t) {
    return Vs(t == null ? t : Da(t));
  }
) : !1, Ws = ka, Gs = Aa, Ks = Fm, Fn = Ws ? function(t) {
  return Ws(t);
} : Gs ? function(t) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new TypeError("getProto: not an object");
  return Gs(t);
} : Ks ? function(t) {
  return Ks(t);
} : null, Lm = Function.prototype.call, Mm = Object.prototype.hasOwnProperty, Um = Ct, Na = Um.call(Lm, Mm), oe, Zm = Sa, Bm = nm, Vm = sm, Wm = om, Gm = am, yt = ja, ht = $t, Km = im, Hm = lm, Ym = cm, qm = um, Jm = fm, Qm = dm, Xm = pm, eg = gm, Ta = Function, Br = function(e) {
  try {
    return Ta('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, At = _t, tg = kr, Vr = function() {
  throw new ht();
}, rg = At ? function() {
  try {
    return arguments.callee, Vr;
  } catch {
    try {
      return At(arguments, "callee").get;
    } catch {
      return Vr;
    }
  }
}() : Vr, ot = bm()(), je = Fn, ng = Aa, sg = ka, Ra = Cn, zt = $n, lt = {}, og = typeof Uint8Array > "u" || !je ? oe : je(Uint8Array), Xe = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? oe : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? oe : ArrayBuffer,
  "%ArrayIteratorPrototype%": ot && je ? je([][Symbol.iterator]()) : oe,
  "%AsyncFromSyncIteratorPrototype%": oe,
  "%AsyncFunction%": lt,
  "%AsyncGenerator%": lt,
  "%AsyncGeneratorFunction%": lt,
  "%AsyncIteratorPrototype%": lt,
  "%Atomics%": typeof Atomics > "u" ? oe : Atomics,
  "%BigInt%": typeof BigInt > "u" ? oe : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? oe : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? oe : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? oe : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Bm,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Vm,
  "%Float16Array%": typeof Float16Array > "u" ? oe : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? oe : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? oe : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? oe : FinalizationRegistry,
  "%Function%": Ta,
  "%GeneratorFunction%": lt,
  "%Int8Array%": typeof Int8Array > "u" ? oe : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? oe : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? oe : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ot && je ? je(je([][Symbol.iterator]())) : oe,
  "%JSON%": typeof JSON == "object" ? JSON : oe,
  "%Map%": typeof Map > "u" ? oe : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ot || !je ? oe : je((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Zm,
  "%Object.getOwnPropertyDescriptor%": At,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? oe : Promise,
  "%Proxy%": typeof Proxy > "u" ? oe : Proxy,
  "%RangeError%": Wm,
  "%ReferenceError%": Gm,
  "%Reflect%": typeof Reflect > "u" ? oe : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? oe : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ot || !je ? oe : je((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? oe : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ot && je ? je(""[Symbol.iterator]()) : oe,
  "%Symbol%": ot ? Symbol : oe,
  "%SyntaxError%": yt,
  "%ThrowTypeError%": rg,
  "%TypedArray%": og,
  "%TypeError%": ht,
  "%Uint8Array%": typeof Uint8Array > "u" ? oe : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? oe : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? oe : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? oe : Uint32Array,
  "%URIError%": Km,
  "%WeakMap%": typeof WeakMap > "u" ? oe : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? oe : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? oe : WeakSet,
  "%Function.prototype.call%": zt,
  "%Function.prototype.apply%": Ra,
  "%Object.defineProperty%": tg,
  "%Object.getPrototypeOf%": ng,
  "%Math.abs%": Hm,
  "%Math.floor%": Ym,
  "%Math.max%": qm,
  "%Math.min%": Jm,
  "%Math.pow%": Qm,
  "%Math.round%": Xm,
  "%Math.sign%": eg,
  "%Reflect.getPrototypeOf%": sg
};
if (je)
  try {
    null.error;
  } catch (e) {
    var ag = je(je(e));
    Xe["%Error.prototype%"] = ag;
  }
var ig = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Br("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Br("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Br("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var s = e("%AsyncGenerator%");
    s && je && (r = je(s.prototype));
  }
  return Xe[t] = r, r;
}, Hs = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Ft = Ct, dr = Na, lg = Ft.call(zt, Array.prototype.concat), cg = Ft.call(Ra, Array.prototype.splice), Ys = Ft.call(zt, String.prototype.replace), pr = Ft.call(zt, String.prototype.slice), ug = Ft.call(zt, RegExp.prototype.exec), fg = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, dg = /\\(\\)?/g, pg = function(t) {
  var r = pr(t, 0, 1), n = pr(t, -1);
  if (r === "%" && n !== "%")
    throw new yt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new yt("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Ys(t, fg, function(o, i, l, c) {
    s[s.length] = l ? Ys(c, dg, "$1") : i || o;
  }), s;
}, hg = function(t, r) {
  var n = t, s;
  if (dr(Hs, n) && (s = Hs[n], n = "%" + s[0] + "%"), dr(Xe, n)) {
    var o = Xe[n];
    if (o === lt && (o = ig(n)), typeof o > "u" && !r)
      throw new ht("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: n,
      value: o
    };
  }
  throw new yt("intrinsic " + t + " does not exist!");
}, Ln = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new ht("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new ht('"allowMissing" argument must be a boolean');
  if (ug(/^%?[^%]*%?$/, t) === null)
    throw new yt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = pg(t), s = n.length > 0 ? n[0] : "", o = hg("%" + s + "%", r), i = o.name, l = o.value, c = !1, u = o.alias;
  u && (s = u[0], cg(n, lg([0, 1], u)));
  for (var h = 1, y = !0; h < n.length; h += 1) {
    var _ = n[h], S = pr(_, 0, 1), P = pr(_, -1);
    if ((S === '"' || S === "'" || S === "`" || P === '"' || P === "'" || P === "`") && S !== P)
      throw new yt("property names with quotes must have matching quotes");
    if ((_ === "constructor" || !y) && (c = !0), s += "." + _, i = "%" + s + "%", dr(Xe, i))
      l = Xe[i];
    else if (l != null) {
      if (!(_ in l)) {
        if (!r)
          throw new ht("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (At && h + 1 >= n.length) {
        var k = At(l, _);
        y = !!k, y && "get" in k && !("originalValue" in k.get) ? l = k.get : l = l[_];
      } else
        y = dr(l, _), l = l[_];
      y && !c && (Xe[i] = l);
    }
  }
  return l;
}, Ia = { exports: {} }, qs = kr, mg = ja, at = $t, Js = _t, gg = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new at("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new at("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new at("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new at("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new at("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new at("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 ? arguments[6] : !1, c = !!Js && Js(t, r);
  if (qs)
    qs(t, r, {
      configurable: i === null && c ? c.configurable : !i,
      enumerable: s === null && c ? c.enumerable : !s,
      value: n,
      writable: o === null && c ? c.writable : !o
    });
  else if (l || !s && !o && !i)
    t[r] = n;
  else
    throw new mg("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, on = kr, $a = function() {
  return !!on;
};
$a.hasArrayLengthDefineBug = function() {
  if (!on)
    return null;
  try {
    return on([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var yg = $a, bg = Ln, Qs = gg, vg = yg(), Xs = _t, eo = $t, _g = bg("%Math.floor%"), wg = function(t, r) {
  if (typeof t != "function")
    throw new eo("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || _g(r) !== r)
    throw new eo("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], s = !0, o = !0;
  if ("length" in t && Xs) {
    var i = Xs(t, "length");
    i && !i.configurable && (s = !1), i && !i.writable && (o = !1);
  }
  return (s || o || !n) && (vg ? Qs(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : Qs(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
}, xg = Ct, Eg = Cn, Sg = Oa, jg = function() {
  return Sg(xg, Eg, arguments);
};
(function(e) {
  var t = wg, r = kr, n = zn, s = jg;
  e.exports = function(i) {
    var l = n(arguments), c = i.length - (arguments.length - 1);
    return t(
      l,
      1 + (c > 0 ? c : 0),
      !0
    );
  }, r ? r(e.exports, "apply", { value: s }) : e.exports.apply = s;
})(Ia);
var Ca = Ia.exports, za = Ln, Fa = Ca, kg = Fa(za("String.prototype.indexOf")), Ag = function(t, r) {
  var n = za(t, !!r);
  return typeof n == "function" && kg(t, ".prototype.") > -1 ? Fa(n) : n;
}, Og = jr(), Pg = Ag, an = Pg("Object.prototype.toString"), Ar = function(t) {
  return Og && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : an(t) === "[object Arguments]";
}, La = function(t) {
  return Ar(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && an(t) !== "[object Array]" && an(t.callee) === "[object Function]";
}, Dg = function() {
  return Ar(arguments);
}();
Ar.isLegacyArguments = La;
var Ng = Dg ? Ar : La, Ma = Ln, Ua = zn, Tg = Ua([Ma("%String.prototype.indexOf%")]), Or = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Ma(t, !!r)
  );
  return typeof n == "function" && Tg(t, ".prototype.") > -1 ? Ua(
    /** @type {const} */
    [n]
  ) : n;
}, to = Or, Rg = jr(), Ig = Na, $g = _t, ln;
if (Rg) {
  var Cg = to("RegExp.prototype.exec"), ro = {}, Wr = function() {
    throw ro;
  }, no = {
    toString: Wr,
    valueOf: Wr
  };
  typeof Symbol.toPrimitive == "symbol" && (no[Symbol.toPrimitive] = Wr), ln = function(t) {
    if (!t || typeof t != "object")
      return !1;
    var r = (
      /** @type {NonNullable<typeof gOPD>} */
      $g(
        /** @type {{ lastIndex?: unknown }} */
        t,
        "lastIndex"
      )
    ), n = r && Ig(r, "value");
    if (!n)
      return !1;
    try {
      Cg(
        t,
        /** @type {string} */
        /** @type {unknown} */
        no
      );
    } catch (s) {
      return s === ro;
    }
  };
} else {
  var zg = to("Object.prototype.toString"), Fg = "[object RegExp]";
  ln = function(t) {
    return !t || typeof t != "object" && typeof t != "function" ? !1 : zg(t) === Fg;
  };
}
var Lg = ln, Mg = Or, Ug = Lg, Zg = Mg("RegExp.prototype.exec"), Bg = $t, Vg = function(t) {
  if (!Ug(t))
    throw new Bg("`regex` must be a RegExp");
  return function(n) {
    return Zg(t, n) !== null;
  };
}, Za = Or, Wg = Vg, Gg = Wg(/^\s*(?:function)?\*/), Ba = jr(), Gr = Fn, Kg = Za("Object.prototype.toString"), Hg = Za("Function.prototype.toString"), Yg = function() {
  if (!Ba)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, Kr, qg = function(t) {
  if (typeof t != "function")
    return !1;
  if (Gg(Hg(t)))
    return !0;
  if (!Ba) {
    var r = Kg(t);
    return r === "[object GeneratorFunction]";
  }
  if (!Gr)
    return !1;
  if (typeof Kr > "u") {
    var n = Yg();
    Kr = n ? (
      /** @type {GeneratorFunctionConstructor} */
      Gr(n)
    ) : !1;
  }
  return Gr(t) === Kr;
}, Va = Function.prototype.toString, ft = typeof Reflect == "object" && Reflect !== null && Reflect.apply, cn, Xt;
if (typeof ft == "function" && typeof Object.defineProperty == "function")
  try {
    cn = Object.defineProperty({}, "length", {
      get: function() {
        throw Xt;
      }
    }), Xt = {}, ft(function() {
      throw 42;
    }, null, cn);
  } catch (e) {
    e !== Xt && (ft = null);
  }
else
  ft = null;
var Jg = /^\s*class\b/, un = function(t) {
  try {
    var r = Va.call(t);
    return Jg.test(r);
  } catch {
    return !1;
  }
}, Hr = function(t) {
  try {
    return un(t) ? !1 : (Va.call(t), !0);
  } catch {
    return !1;
  }
}, er = Object.prototype.toString, Qg = "[object Object]", Xg = "[object Function]", ey = "[object GeneratorFunction]", ty = "[object HTMLAllCollection]", ry = "[object HTML document.all class]", ny = "[object HTMLCollection]", sy = typeof Symbol == "function" && !!Symbol.toStringTag, oy = !(0 in [,]), fn = function() {
  return !1;
};
if (typeof document == "object") {
  var ay = document.all;
  er.call(ay) === er.call(document.all) && (fn = function(t) {
    if ((oy || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = er.call(t);
        return (r === ty || r === ry || r === ny || r === Qg) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var iy = ft ? function(t) {
  if (fn(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    ft(t, null, cn);
  } catch (r) {
    if (r !== Xt)
      return !1;
  }
  return !un(t) && Hr(t);
} : function(t) {
  if (fn(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (sy)
    return Hr(t);
  if (un(t))
    return !1;
  var r = er.call(t);
  return r !== Xg && r !== ey && !/^\[object HTML/.test(r) ? !1 : Hr(t);
}, ly = iy, cy = Object.prototype.toString, Wa = Object.prototype.hasOwnProperty, uy = function(t, r, n) {
  for (var s = 0, o = t.length; s < o; s++)
    Wa.call(t, s) && (n == null ? r(t[s], s, t) : r.call(n, t[s], s, t));
}, fy = function(t, r, n) {
  for (var s = 0, o = t.length; s < o; s++)
    n == null ? r(t.charAt(s), s, t) : r.call(n, t.charAt(s), s, t);
}, dy = function(t, r, n) {
  for (var s in t)
    Wa.call(t, s) && (n == null ? r(t[s], s, t) : r.call(n, t[s], s, t));
};
function py(e) {
  return cy.call(e) === "[object Array]";
}
var hy = function(t, r, n) {
  if (!ly(r))
    throw new TypeError("iterator must be a function");
  var s;
  arguments.length >= 3 && (s = n), py(t) ? uy(t, r, s) : typeof t == "string" ? fy(t, r, s) : dy(t, r, s);
}, my = [
  "Float16Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], Yr = my, gy = typeof globalThis > "u" ? hn : globalThis, yy = function() {
  for (var t = [], r = 0; r < Yr.length; r++)
    typeof gy[Yr[r]] == "function" && (t[t.length] = Yr[r]);
  return t;
}, hr = hy, by = yy, so = Ca, Mn = Or, tr = _t, qt = Fn, vy = Mn("Object.prototype.toString"), Ga = jr(), oo = typeof globalThis > "u" ? hn : globalThis, dn = by(), Un = Mn("String.prototype.slice"), _y = Mn("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, mr = { __proto__: null };
Ga && tr && qt ? hr(dn, function(e) {
  var t = new oo[e]();
  if (Symbol.toStringTag in t && qt) {
    var r = qt(t), n = tr(r, Symbol.toStringTag);
    if (!n && r) {
      var s = qt(r);
      n = tr(s, Symbol.toStringTag);
    }
    mr["$" + e] = so(n.get);
  }
}) : hr(dn, function(e) {
  var t = new oo[e](), r = t.slice || t.set;
  r && (mr[
    /** @type {`$${import('.').TypedArrayName}`} */
    "$" + e
  ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
  // @ts-expect-error TODO FIXME
  so(r));
});
var wy = function(t) {
  var r = !1;
  return hr(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    mr,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, s) {
      if (!r)
        try {
          "$" + n(t) === s && (r = /** @type {import('.').TypedArrayName} */
          Un(s, 1));
        } catch {
        }
    }
  ), r;
}, xy = function(t) {
  var r = !1;
  return hr(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    mr,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, s) {
      if (!r)
        try {
          n(t), r = /** @type {import('.').TypedArrayName} */
          Un(s, 1);
        } catch {
        }
    }
  ), r;
}, Ka = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!Ga) {
    var r = Un(vy(t), 8, -1);
    return _y(dn, r) > -1 ? r : r !== "Object" ? !1 : xy(t);
  }
  return tr ? wy(t) : null;
}, Ey = Ka, Sy = function(t) {
  return !!Ey(t);
};
(function(e) {
  var t = Ng, r = qg, n = Ka, s = Sy;
  function o(E) {
    return E.call.bind(E);
  }
  var i = typeof BigInt < "u", l = typeof Symbol < "u", c = o(Object.prototype.toString), u = o(Number.prototype.valueOf), h = o(String.prototype.valueOf), y = o(Boolean.prototype.valueOf);
  if (i)
    var _ = o(BigInt.prototype.valueOf);
  if (l)
    var S = o(Symbol.prototype.valueOf);
  function P(E, ve) {
    if (typeof E != "object")
      return !1;
    try {
      return ve(E), !0;
    } catch {
      return !1;
    }
  }
  e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = s;
  function k(E) {
    return typeof Promise < "u" && E instanceof Promise || E !== null && typeof E == "object" && typeof E.then == "function" && typeof E.catch == "function";
  }
  e.isPromise = k;
  function A(E) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(E) : s(E) || v(E);
  }
  e.isArrayBufferView = A;
  function M(E) {
    return n(E) === "Uint8Array";
  }
  e.isUint8Array = M;
  function L(E) {
    return n(E) === "Uint8ClampedArray";
  }
  e.isUint8ClampedArray = L;
  function U(E) {
    return n(E) === "Uint16Array";
  }
  e.isUint16Array = U;
  function F(E) {
    return n(E) === "Uint32Array";
  }
  e.isUint32Array = F;
  function I(E) {
    return n(E) === "Int8Array";
  }
  e.isInt8Array = I;
  function z(E) {
    return n(E) === "Int16Array";
  }
  e.isInt16Array = z;
  function T(E) {
    return n(E) === "Int32Array";
  }
  e.isInt32Array = T;
  function p(E) {
    return n(E) === "Float32Array";
  }
  e.isFloat32Array = p;
  function d(E) {
    return n(E) === "Float64Array";
  }
  e.isFloat64Array = d;
  function j(E) {
    return n(E) === "BigInt64Array";
  }
  e.isBigInt64Array = j;
  function O(E) {
    return n(E) === "BigUint64Array";
  }
  e.isBigUint64Array = O;
  function g(E) {
    return c(E) === "[object Map]";
  }
  g.working = typeof Map < "u" && g(/* @__PURE__ */ new Map());
  function b(E) {
    return typeof Map > "u" ? !1 : g.working ? g(E) : E instanceof Map;
  }
  e.isMap = b;
  function x(E) {
    return c(E) === "[object Set]";
  }
  x.working = typeof Set < "u" && x(/* @__PURE__ */ new Set());
  function $(E) {
    return typeof Set > "u" ? !1 : x.working ? x(E) : E instanceof Set;
  }
  e.isSet = $;
  function N(E) {
    return c(E) === "[object WeakMap]";
  }
  N.working = typeof WeakMap < "u" && N(/* @__PURE__ */ new WeakMap());
  function m(E) {
    return typeof WeakMap > "u" ? !1 : N.working ? N(E) : E instanceof WeakMap;
  }
  e.isWeakMap = m;
  function ne(E) {
    return c(E) === "[object WeakSet]";
  }
  ne.working = typeof WeakSet < "u" && ne(/* @__PURE__ */ new WeakSet());
  function Z(E) {
    return ne(E);
  }
  e.isWeakSet = Z;
  function R(E) {
    return c(E) === "[object ArrayBuffer]";
  }
  R.working = typeof ArrayBuffer < "u" && R(new ArrayBuffer());
  function le(E) {
    return typeof ArrayBuffer > "u" ? !1 : R.working ? R(E) : E instanceof ArrayBuffer;
  }
  e.isArrayBuffer = le;
  function f(E) {
    return c(E) === "[object DataView]";
  }
  f.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && f(new DataView(new ArrayBuffer(1), 0, 1));
  function v(E) {
    return typeof DataView > "u" ? !1 : f.working ? f(E) : E instanceof DataView;
  }
  e.isDataView = v;
  var w = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function W(E) {
    return c(E) === "[object SharedArrayBuffer]";
  }
  function K(E) {
    return typeof w > "u" ? !1 : (typeof W.working > "u" && (W.working = W(new w())), W.working ? W(E) : E instanceof w);
  }
  e.isSharedArrayBuffer = K;
  function q(E) {
    return c(E) === "[object AsyncFunction]";
  }
  e.isAsyncFunction = q;
  function H(E) {
    return c(E) === "[object Map Iterator]";
  }
  e.isMapIterator = H;
  function C(E) {
    return c(E) === "[object Set Iterator]";
  }
  e.isSetIterator = C;
  function V(E) {
    return c(E) === "[object Generator]";
  }
  e.isGeneratorObject = V;
  function J(E) {
    return c(E) === "[object WebAssembly.Module]";
  }
  e.isWebAssemblyCompiledModule = J;
  function Q(E) {
    return P(E, u);
  }
  e.isNumberObject = Q;
  function X(E) {
    return P(E, h);
  }
  e.isStringObject = X;
  function te(E) {
    return P(E, y);
  }
  e.isBooleanObject = te;
  function ae(E) {
    return i && P(E, _);
  }
  e.isBigIntObject = ae;
  function Y(E) {
    return l && P(E, S);
  }
  e.isSymbolObject = Y;
  function xe(E) {
    return Q(E) || X(E) || te(E) || ae(E) || Y(E);
  }
  e.isBoxedPrimitive = xe;
  function be(E) {
    return typeof Uint8Array < "u" && (le(E) || K(E));
  }
  e.isAnyArrayBuffer = be, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(E) {
    Object.defineProperty(e, E, {
      enumerable: !1,
      value: function() {
        throw new Error(E + " is not supported in userland");
      }
    });
  });
})(xa);
var jy = function(t) {
  return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
}, pn = { exports: {} };
typeof Object.create == "function" ? pn.exports = function(t, r) {
  r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : pn.exports = function(t, r) {
  if (r) {
    t.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
  }
};
var ky = pn.exports;
(function(e) {
  var t = Object.getOwnPropertyDescriptors || function(v) {
    for (var w = Object.keys(v), W = {}, K = 0; K < w.length; K++)
      W[w[K]] = Object.getOwnPropertyDescriptor(v, w[K]);
    return W;
  }, r = /%[sdj%]/g;
  e.format = function(f) {
    if (!I(f)) {
      for (var v = [], w = 0; w < arguments.length; w++)
        v.push(i(arguments[w]));
      return v.join(" ");
    }
    for (var w = 1, W = arguments, K = W.length, q = String(f).replace(r, function(C) {
      if (C === "%%") return "%";
      if (w >= K) return C;
      switch (C) {
        case "%s":
          return String(W[w++]);
        case "%d":
          return Number(W[w++]);
        case "%j":
          try {
            return JSON.stringify(W[w++]);
          } catch {
            return "[Circular]";
          }
        default:
          return C;
      }
    }), H = W[w]; w < K; H = W[++w])
      L(H) || !d(H) ? q += " " + H : q += " " + i(H);
    return q;
  }, e.deprecate = function(f, v) {
    if (typeof process < "u" && process.noDeprecation === !0)
      return f;
    if (typeof process > "u")
      return function() {
        return e.deprecate(f, v).apply(this, arguments);
      };
    var w = !1;
    function W() {
      if (!w) {
        if (process.throwDeprecation)
          throw new Error(v);
        process.traceDeprecation ? console.trace(v) : console.error(v), w = !0;
      }
      return f.apply(this, arguments);
    }
    return W;
  };
  var n = {}, s = /^$/;
  if (process.env.NODE_DEBUG) {
    var o = process.env.NODE_DEBUG;
    o = o.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + o + "$", "i");
  }
  e.debuglog = function(f) {
    if (f = f.toUpperCase(), !n[f])
      if (s.test(f)) {
        var v = process.pid;
        n[f] = function() {
          var w = e.format.apply(e, arguments);
          console.error("%s %d: %s", f, v, w);
        };
      } else
        n[f] = function() {
        };
    return n[f];
  };
  function i(f, v) {
    var w = {
      seen: [],
      stylize: c
    };
    return arguments.length >= 3 && (w.depth = arguments[2]), arguments.length >= 4 && (w.colors = arguments[3]), M(v) ? w.showHidden = v : v && e._extend(w, v), T(w.showHidden) && (w.showHidden = !1), T(w.depth) && (w.depth = 2), T(w.colors) && (w.colors = !1), T(w.customInspect) && (w.customInspect = !0), w.colors && (w.stylize = l), h(w, f, w.depth);
  }
  e.inspect = i, i.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, i.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    // "name": intentionally not styling
    regexp: "red"
  };
  function l(f, v) {
    var w = i.styles[v];
    return w ? "\x1B[" + i.colors[w][0] + "m" + f + "\x1B[" + i.colors[w][1] + "m" : f;
  }
  function c(f, v) {
    return f;
  }
  function u(f) {
    var v = {};
    return f.forEach(function(w, W) {
      v[w] = !0;
    }), v;
  }
  function h(f, v, w) {
    if (f.customInspect && v && g(v.inspect) && // Filter out the util module, it's inspect function is special
    v.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
    !(v.constructor && v.constructor.prototype === v)) {
      var W = v.inspect(w, f);
      return I(W) || (W = h(f, W, w)), W;
    }
    var K = y(f, v);
    if (K)
      return K;
    var q = Object.keys(v), H = u(q);
    if (f.showHidden && (q = Object.getOwnPropertyNames(v)), O(v) && (q.indexOf("message") >= 0 || q.indexOf("description") >= 0))
      return _(v);
    if (q.length === 0) {
      if (g(v)) {
        var C = v.name ? ": " + v.name : "";
        return f.stylize("[Function" + C + "]", "special");
      }
      if (p(v))
        return f.stylize(RegExp.prototype.toString.call(v), "regexp");
      if (j(v))
        return f.stylize(Date.prototype.toString.call(v), "date");
      if (O(v))
        return _(v);
    }
    var V = "", J = !1, Q = ["{", "}"];
    if (A(v) && (J = !0, Q = ["[", "]"]), g(v)) {
      var X = v.name ? ": " + v.name : "";
      V = " [Function" + X + "]";
    }
    if (p(v) && (V = " " + RegExp.prototype.toString.call(v)), j(v) && (V = " " + Date.prototype.toUTCString.call(v)), O(v) && (V = " " + _(v)), q.length === 0 && (!J || v.length == 0))
      return Q[0] + V + Q[1];
    if (w < 0)
      return p(v) ? f.stylize(RegExp.prototype.toString.call(v), "regexp") : f.stylize("[Object]", "special");
    f.seen.push(v);
    var te;
    return J ? te = S(f, v, w, H, q) : te = q.map(function(ae) {
      return P(f, v, w, H, ae, J);
    }), f.seen.pop(), k(te, V, Q);
  }
  function y(f, v) {
    if (T(v))
      return f.stylize("undefined", "undefined");
    if (I(v)) {
      var w = "'" + JSON.stringify(v).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return f.stylize(w, "string");
    }
    if (F(v))
      return f.stylize("" + v, "number");
    if (M(v))
      return f.stylize("" + v, "boolean");
    if (L(v))
      return f.stylize("null", "null");
  }
  function _(f) {
    return "[" + Error.prototype.toString.call(f) + "]";
  }
  function S(f, v, w, W, K) {
    for (var q = [], H = 0, C = v.length; H < C; ++H)
      ne(v, String(H)) ? q.push(P(
        f,
        v,
        w,
        W,
        String(H),
        !0
      )) : q.push("");
    return K.forEach(function(V) {
      V.match(/^\d+$/) || q.push(P(
        f,
        v,
        w,
        W,
        V,
        !0
      ));
    }), q;
  }
  function P(f, v, w, W, K, q) {
    var H, C, V;
    if (V = Object.getOwnPropertyDescriptor(v, K) || { value: v[K] }, V.get ? V.set ? C = f.stylize("[Getter/Setter]", "special") : C = f.stylize("[Getter]", "special") : V.set && (C = f.stylize("[Setter]", "special")), ne(W, K) || (H = "[" + K + "]"), C || (f.seen.indexOf(V.value) < 0 ? (L(w) ? C = h(f, V.value, null) : C = h(f, V.value, w - 1), C.indexOf(`
`) > -1 && (q ? C = C.split(`
`).map(function(J) {
      return "  " + J;
    }).join(`
`).slice(2) : C = `
` + C.split(`
`).map(function(J) {
      return "   " + J;
    }).join(`
`))) : C = f.stylize("[Circular]", "special")), T(H)) {
      if (q && K.match(/^\d+$/))
        return C;
      H = JSON.stringify("" + K), H.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (H = H.slice(1, -1), H = f.stylize(H, "name")) : (H = H.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), H = f.stylize(H, "string"));
    }
    return H + ": " + C;
  }
  function k(f, v, w) {
    var W = f.reduce(function(K, q) {
      return q.indexOf(`
`) >= 0, K + q.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return W > 60 ? w[0] + (v === "" ? "" : v + `
 `) + " " + f.join(`,
  `) + " " + w[1] : w[0] + v + " " + f.join(", ") + " " + w[1];
  }
  e.types = xa;
  function A(f) {
    return Array.isArray(f);
  }
  e.isArray = A;
  function M(f) {
    return typeof f == "boolean";
  }
  e.isBoolean = M;
  function L(f) {
    return f === null;
  }
  e.isNull = L;
  function U(f) {
    return f == null;
  }
  e.isNullOrUndefined = U;
  function F(f) {
    return typeof f == "number";
  }
  e.isNumber = F;
  function I(f) {
    return typeof f == "string";
  }
  e.isString = I;
  function z(f) {
    return typeof f == "symbol";
  }
  e.isSymbol = z;
  function T(f) {
    return f === void 0;
  }
  e.isUndefined = T;
  function p(f) {
    return d(f) && x(f) === "[object RegExp]";
  }
  e.isRegExp = p, e.types.isRegExp = p;
  function d(f) {
    return typeof f == "object" && f !== null;
  }
  e.isObject = d;
  function j(f) {
    return d(f) && x(f) === "[object Date]";
  }
  e.isDate = j, e.types.isDate = j;
  function O(f) {
    return d(f) && (x(f) === "[object Error]" || f instanceof Error);
  }
  e.isError = O, e.types.isNativeError = O;
  function g(f) {
    return typeof f == "function";
  }
  e.isFunction = g;
  function b(f) {
    return f === null || typeof f == "boolean" || typeof f == "number" || typeof f == "string" || typeof f == "symbol" || // ES6 symbol
    typeof f > "u";
  }
  e.isPrimitive = b, e.isBuffer = jy;
  function x(f) {
    return Object.prototype.toString.call(f);
  }
  function $(f) {
    return f < 10 ? "0" + f.toString(10) : f.toString(10);
  }
  var N = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function m() {
    var f = /* @__PURE__ */ new Date(), v = [
      $(f.getHours()),
      $(f.getMinutes()),
      $(f.getSeconds())
    ].join(":");
    return [f.getDate(), N[f.getMonth()], v].join(" ");
  }
  e.log = function() {
    console.log("%s - %s", m(), e.format.apply(e, arguments));
  }, e.inherits = ky, e._extend = function(f, v) {
    if (!v || !d(v)) return f;
    for (var w = Object.keys(v), W = w.length; W--; )
      f[w[W]] = v[w[W]];
    return f;
  };
  function ne(f, v) {
    return Object.prototype.hasOwnProperty.call(f, v);
  }
  var Z = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  e.promisify = function(v) {
    if (typeof v != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (Z && v[Z]) {
      var w = v[Z];
      if (typeof w != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(w, Z, {
        value: w,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), w;
    }
    function w() {
      for (var W, K, q = new Promise(function(V, J) {
        W = V, K = J;
      }), H = [], C = 0; C < arguments.length; C++)
        H.push(arguments[C]);
      H.push(function(V, J) {
        V ? K(V) : W(J);
      });
      try {
        v.apply(this, H);
      } catch (V) {
        K(V);
      }
      return q;
    }
    return Object.setPrototypeOf(w, Object.getPrototypeOf(v)), Z && Object.defineProperty(w, Z, {
      value: w,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(
      w,
      t(v)
    );
  }, e.promisify.custom = Z;
  function R(f, v) {
    if (!f) {
      var w = new Error("Promise was rejected with a falsy value");
      w.reason = f, f = w;
    }
    return v(f);
  }
  function le(f) {
    if (typeof f != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function v() {
      for (var w = [], W = 0; W < arguments.length; W++)
        w.push(arguments[W]);
      var K = w.pop();
      if (typeof K != "function")
        throw new TypeError("The last argument must be of type Function");
      var q = this, H = function() {
        return K.apply(q, arguments);
      };
      f.apply(this, w).then(
        function(C) {
          process.nextTick(H.bind(null, null, C));
        },
        function(C) {
          process.nextTick(R.bind(null, C, H));
        }
      );
    }
    return Object.setPrototypeOf(v, Object.getPrototypeOf(f)), Object.defineProperties(
      v,
      t(f)
    ), v;
  }
  e.callbackify = le;
})(wa);
function ke(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function rt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Zn(e) {
  rt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || xt(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ha(e, t) {
  rt(2, arguments);
  var r = Zn(e), n = ke(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Ya(e, t) {
  rt(2, arguments);
  var r = Zn(e), n = ke(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var s = r.getDate(), o = new Date(r.getTime());
  o.setMonth(r.getMonth() + n + 1, 0);
  var i = o.getDate();
  return s >= i ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), s), r);
}
function Ay(e, t) {
  if (rt(2, arguments), !t || xt(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ke(t.years) : 0, n = t.months ? ke(t.months) : 0, s = t.weeks ? ke(t.weeks) : 0, o = t.days ? ke(t.days) : 0, i = t.hours ? ke(t.hours) : 0, l = t.minutes ? ke(t.minutes) : 0, c = t.seconds ? ke(t.seconds) : 0, u = Zn(e), h = n || r ? Ya(u, n + r * 12) : u, y = o || s ? Ha(h, o + s * 7) : h, _ = l + i * 60, S = c + _ * 60, P = S * 1e3, k = new Date(y.getTime() + P);
  return k;
}
const Oy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ay
}, Symbol.toStringTag, { value: "Module" })), Py = /* @__PURE__ */ mn(Oy);
function Dy(e, t) {
  rt(2, arguments);
  var r = ke(t);
  return Ha(e, -r);
}
function Ny(e, t) {
  rt(2, arguments);
  var r = ke(t);
  return Ya(e, -r);
}
function Ty(e, t) {
  if (rt(2, arguments), !t || xt(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ke(t.years) : 0, n = t.months ? ke(t.months) : 0, s = t.weeks ? ke(t.weeks) : 0, o = t.days ? ke(t.days) : 0, i = t.hours ? ke(t.hours) : 0, l = t.minutes ? ke(t.minutes) : 0, c = t.seconds ? ke(t.seconds) : 0, u = Ny(e, n + r * 12), h = Dy(u, o + s * 7), y = l + i * 60, _ = c + y * 60, S = _ * 1e3, P = new Date(h.getTime() - S);
  return P;
}
const Ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ty
}, Symbol.toStringTag, { value: "Module" })), Iy = /* @__PURE__ */ mn(Ry), $y = wa, Cy = Py, zy = Iy, Fy = {
  add: Cy,
  sub: zy
}, Ly = {
  d: "days",
  w: "weeks",
  M: "months",
  y: "years",
  h: "hours",
  m: "minutes",
  s: "seconds"
}, My = (e) => e.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
var Uy = {
  ungroup(e) {
    return e.yg ? e.yg : e;
  },
  unescape(e) {
    const t = new RegExp(`\\\\(['"])`, "g");
    return e.replace(t, "$1");
  },
  stringToRegExp(e, t) {
    let r = e.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
    return t === "^" ? r = "^" + r : t === "$" && (r = r + "$"), new RegExp(r, "i");
  },
  relDateToAbsolute(e, t, r) {
    const n = /* @__PURE__ */ new Date(), s = Fy[e](n, { [Ly[r]]: t });
    return My(s);
  },
  debug() {
    if (!process.env.DEBUG || !/nql/.test(process.env.DEBUG))
      return;
    const e = arguments[0], t = Array.prototype.slice.call(arguments, 1), r = [e];
    t.forEach(function(n) {
      r.push($y.inspect(n, !1, null));
    }), console.log.apply(this, r);
  }
};
const Ke = tm.parser;
Ke.yy = Uy;
In.lex = (e) => {
  Ke.lexer.setInput(e);
  let t = Ke.lexer.lex();
  const r = [];
  for (; t !== Ke.lexer.EOF; )
    r.push({ token: Ke.terminals_[t], matched: Ke.lexer.match }), t = Ke.lexer.lex();
  return r;
};
In.parse = (e, t) => Ke.parse(e, t || {});
var Zy = In;
const By = /* @__PURE__ */ lo(Zy);
function qa(e) {
  if (e)
    try {
      return By.parse(e);
    } catch {
      return;
    }
}
function Vy(e) {
  return e.map((t, r) => ({
    ...t,
    id: `${t.field}:${r + 1}`
  }));
}
function Wy(e, t, r) {
  return e.flatMap((n) => {
    const s = Object.keys(n);
    if (s.length !== 1 || s[0].startsWith("$"))
      return [];
    const o = Sn(t, s[0], r);
    if (o) {
      const i = o.definition.codec.parse(n, o.context);
      if (i)
        return [i];
    }
    return [];
  });
}
function Gy(e) {
  return [...e].sort((t, r) => t.localeCompare(r));
}
function Ky(e, t, r) {
  const n = e.flatMap((s) => {
    const o = Sn(t, s.field, r);
    return o ? o.definition.codec.serialize(s, o.context) ?? [] : [];
  });
  if (n.length)
    return Gy(n).join("+");
}
const Hy = /* @__PURE__ */ new Set([
  "last_seen_at",
  "created_at",
  "subscriptions.start_date",
  "subscriptions.current_period_end"
]);
function Lt(e) {
  return Array.isArray(e.$and) ? { operator: "$and", children: e.$and } : Array.isArray(e.$or) ? { operator: "$or", children: e.$or } : null;
}
function Yy(e) {
  if (typeof e.subscribed == "boolean")
    return {
      field: "subscribed",
      operator: "is",
      values: [e.subscribed ? "subscribed" : "unsubscribed"]
    };
  if (typeof e.email_disabled == "number") {
    if (e.email_disabled === 1)
      return {
        field: "subscribed",
        operator: "is",
        values: ["email-disabled"]
      };
    if (e.email_disabled === 0)
      return {
        field: "subscribed",
        operator: "is-not",
        values: ["email-disabled"]
      };
  }
  const t = Lt(e);
  if (!t || t.children.length !== 2)
    return null;
  let r, n;
  for (const s of t.children)
    typeof s.subscribed == "boolean" && (r = s.subscribed), typeof s.email_disabled == "number" && (n = s.email_disabled);
  return t.operator === "$and" && n === 0 && r !== void 0 ? {
    field: "subscribed",
    operator: "is",
    values: [r ? "subscribed" : "unsubscribed"]
  } : t.operator === "$or" && n === 1 && r !== void 0 ? {
    field: "subscribed",
    operator: "is-not",
    values: [r ? "unsubscribed" : "subscribed"]
  } : null;
}
function qy(e) {
  const t = Lt(e);
  if (!t || t.children.length !== 2)
    return null;
  let r, n;
  for (const s of t.children) {
    const o = s["newsletters.slug"];
    typeof o == "string" && (r = o), o && typeof o == "object" && !Array.isArray(o) && typeof o.$ne == "string" && (r = o.$ne), typeof s.email_disabled == "number" && (n = s.email_disabled);
  }
  return r ? t.operator === "$and" && n === 0 ? {
    field: `newsletters.${r}`,
    operator: "is",
    values: ["subscribed"]
  } : t.operator === "$or" && n === 1 ? {
    field: `newsletters.${r}`,
    operator: "is",
    values: ["unsubscribed"]
  } : null : null;
}
function Jy(e) {
  const t = Lt(e);
  if (!t || t.operator !== "$and" || t.children.length !== 2)
    return null;
  let r, n;
  for (const s of t.children)
    typeof s["feedback.post_id"] == "string" && (r = s["feedback.post_id"]), typeof s["feedback.score"] == "number" && (n = s["feedback.score"]);
  return !r || n !== 0 && n !== 1 ? null : {
    field: "newsletter_feedback",
    operator: String(n),
    values: [r]
  };
}
const Qy = [
  Yy,
  qy,
  Jy
];
function rr(e) {
  if (Object.keys(e).some((r) => Hy.has(r)))
    return !0;
  const t = Lt(e);
  return t ? t.children.some((r) => rr(r)) : Object.values(e).some((r) => Array.isArray(r) ? r.some((n) => n !== null && typeof n == "object" && rr(n)) : r !== null && typeof r == "object" && rr(r));
}
function Ja(e, t) {
  for (const n of Qy) {
    const s = n(e);
    if (s)
      return [s];
  }
  const r = Lt(e);
  return (r == null ? void 0 : r.operator) === "$and" ? r.children.flatMap((n) => Ja(n, t)) : Wy([e], jt, t);
}
function Xy(e, t) {
  const r = qa(e ?? "");
  return r ? Vy(Ja(r, t)) : [];
}
function eb(e) {
  const t = qa(e ?? "");
  return t ? rr(t) : !1;
}
function Qa(e, t) {
  return Ky(e, jt, t);
}
function tb(e, t, r = !t) {
  return !!e && r && !t && eb(e);
}
function wt({ baseSearchParams: e, filters: t, search: r, timezone: n }) {
  const s = new URLSearchParams(e), o = Qa(t, n);
  return s.delete("filter"), s.delete("search"), o && s.set("filter", o), r && s.set("search", r), s;
}
function rb(e) {
  const [t, r] = co(), n = Pe(null), s = de(() => t.get("filter") ?? void 0, [t]), o = de(() => t.toString(), [t]), i = de(() => Xy(s, e), [s, e]), [l, c] = ie(i), u = de(() => t.get("search") ?? "", [t]), h = de(() => Qa(l, e), [l, e]);
  Te(() => {
    o !== n.current && (c(i), n.current = o);
  }, [o, i]), Te(() => {
    if (n.current !== null && o !== n.current)
      return;
    const k = wt({
      baseSearchParams: t,
      filters: l,
      search: u,
      timezone: e
    }), A = k.toString();
    A !== o && (n.current = A, r(k, { replace: !0 }));
  }, [o, l, u, t, r, e]);
  const y = re((k, A = {}) => {
    const M = A.replace ?? !0, L = wt({
      baseSearchParams: t,
      filters: k,
      search: u,
      timezone: e
    });
    c(k), n.current = L.toString(), r(L, { replace: M });
  }, [u, t, r, e]), _ = re((k, A = {}) => {
    const M = A.replace ?? !0, L = wt({
      baseSearchParams: t,
      filters: l,
      search: k,
      timezone: e
    });
    n.current = L.toString(), r(L, { replace: M });
  }, [l, t, r, e]), S = re(({ replace: k = !0 } = {}) => {
    const A = wt({
      baseSearchParams: t,
      filters: [],
      search: u,
      timezone: e
    });
    c([]), n.current = A.toString(), r(A, { replace: k });
  }, [u, t, r, e]), P = re(({ replace: k = !0 } = {}) => {
    const A = wt({
      baseSearchParams: t,
      filters: [],
      search: "",
      timezone: e
    });
    c([]), n.current = A.toString(), r(A, { replace: k });
  }, [t, r, e]);
  return {
    filters: l,
    nql: h,
    search: u,
    setFilters: y,
    setSearch: _,
    clearFilters: S,
    clearAll: P,
    hasFilterOrSearch: !!h || u.length > 0
  };
}
const nb = ({ timezone: e }) => {
  var j, O, g;
  const { filters: t, nql: r, search: n, setFilters: s, setSearch: o, hasFilterOrSearch: i, clearAll: l } = rb(e), { data: c } = qi(), u = yh(), h = _h(u, r), y = ((j = c == null ? void 0 : c.config) == null ? void 0 : j.emailAnalytics) === !0, _ = de(() => Go(t), [t]), S = de(() => Jh(t, r), [t, r]), P = de(() => Jc({
    filters: t,
    nql: r,
    search: n
  }), [t, r, n]), {
    data: k,
    isError: A,
    isFetching: M,
    isFetchingNextPage: L,
    refetch: U,
    fetchNextPage: F,
    hasNextPage: I
  } = fi({
    searchParams: P,
    keepPreviousData: !0
  }), z = Qh({
    isFetching: M,
    isFetchingNextPage: L
  }), T = ((g = (O = k == null ? void 0 : k.meta) == null ? void 0 : O.pagination) == null ? void 0 : g.total) ?? 0, p = t.length > 0, d = Oe(
    "flex flex-row",
    !p && "items-center gap-2",
    p && "col-span-full row-start-4 pt-5"
  );
  return /* @__PURE__ */ a.jsxs(_a, { children: [
    /* @__PURE__ */ a.jsxs(
      va,
      {
        isLoading: z,
        totalMembers: T,
        children: [
          /* @__PURE__ */ a.jsx(sr.Actions, { children: /* @__PURE__ */ a.jsxs(sr.ActionGroup, { className: "ml-auto flex-wrap justify-end sm:ml-0 sm:flex-nowrap", children: [
            /* @__PURE__ */ a.jsx(
              Fh,
              {
                search: n,
                onSearchChange: o
              }
            ),
            !p && /* @__PURE__ */ a.jsx(
              Fs,
              {
                activeView: h,
                filters: t,
                nql: r,
                savedViews: u,
                onFiltersChange: s
              }
            ),
            /* @__PURE__ */ a.jsx(
              tu,
              {
                canBulkDelete: S,
                hasFilterOrSearch: i,
                memberCount: T,
                nql: r,
                search: n,
                onImportComplete: () => {
                  U();
                }
              }
            )
          ] }) }),
          p && /* @__PURE__ */ a.jsx("div", { className: d, children: /* @__PURE__ */ a.jsx(
            Fs,
            {
              activeView: h,
              filters: t,
              nql: r,
              savedViews: u,
              onFiltersChange: s
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(Ho, { children: z ? /* @__PURE__ */ a.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ a.jsx(nr, { size: "lg" }) }) : A ? /* @__PURE__ */ a.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading members" }),
      /* @__PURE__ */ a.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ a.jsx(se, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : k != null && k.members.length ? /* @__PURE__ */ a.jsx(
      Yh,
      {
        activeColumns: _,
        fetchNextPage: F,
        hasNextPage: I,
        isFetchingNextPage: L,
        isLoading: M && !L,
        items: k.members,
        showEmailOpenRate: y,
        timezone: e,
        totalItems: T
      }
    ) : /* @__PURE__ */ a.jsx("div", { className: "flex h-full flex-col items-center justify-center", children: i ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(Jn, { title: "No matching members found.", children: /* @__PURE__ */ a.jsx(Hn, {}) }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "mt-4",
          variant: "outline",
          onClick: () => l({ replace: !1 }),
          children: "Show all members"
        }
      )
    ] }) : /* @__PURE__ */ a.jsx(Jn, { title: "No members yet", children: /* @__PURE__ */ a.jsx(Hn, {}) }) }) })
  ] });
}, Sb = () => {
  const [e] = co(), { data: t, isLoading: r } = Tt({}), n = e.get("filter") ?? void 0;
  if (tb(n, !!t, r))
    return /* @__PURE__ */ a.jsxs(_a, { children: [
      /* @__PURE__ */ a.jsx(
        va,
        {
          isLoading: !0,
          totalMembers: 0
        }
      ),
      /* @__PURE__ */ a.jsx(Ho, { children: /* @__PURE__ */ a.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ a.jsx(nr, { size: "lg" }) }) })
    ] });
  const o = ko((t == null ? void 0 : t.settings) ?? []);
  return /* @__PURE__ */ a.jsx(nb, { timezone: o });
};
export {
  Sb as default
};
//# sourceMappingURL=members-BRcED5fL.mjs.map
