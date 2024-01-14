function getInnerHolder(target: any) {
  if (typeof target.$$holder === "undefined") {
    target.$$holder = {
      fields: {},
    };
  }
  return target.$$holder;
}

function camelToUnderscore(filed: string) {
  return filed.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export { getInnerHolder, camelToUnderscore };
