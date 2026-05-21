import { a as n, b as i } from "./hooks-pVotzebr.mjs";
const o = "ConfigResponseType", u = n({
  dataType: o,
  path: "/config/"
}), a = "SettingsResponseType", l = n({
  dataType: a,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"
  }
}), c = i({
  method: "PUT",
  path: () => "/settings/",
  body: (e) => ({ settings: e.map(({ key: s, value: t }) => ({ key: s, value: t })) }),
  updateQueries: {
    dataType: a,
    emberUpdateType: "createOrUpdate",
    update: (e) => ({
      ...e,
      settings: e.settings
    })
  },
  // Whenever we update the settings, we want to make sure we invalidate all
  // other queries to ensure any ripple effects are reflected in the UI. The
  // updated settings themselves will have been returned in the settings
  // response, so we don't need to refetch them.
  invalidateQueries: {
    filters: {
      predicate(e) {
        return e.queryKey[0] !== a;
      }
    }
  }
});
function d(e, s) {
  if (!e)
    return null;
  const t = e.find((r) => r.key === s);
  return (t == null ? void 0 : t.value) || null;
}
export {
  l as a,
  c as b,
  d as g,
  u
};
//# sourceMappingURL=settings-D-wnf7Qg.mjs.map
