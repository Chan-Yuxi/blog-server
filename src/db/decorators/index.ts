import { getInnerHolder, camelToUnderscore } from "../utils";

/**
 * Mark a class as a mapping to a database table, and remember to inherit the TableObject class
 * which will provide methods such as insert, update, updateOptional, delete, etc
 * @param tableName table name
 * @param prefix field shared prefix
 */
function Table(tableName: string, prefix = "", enableColumnConvert = true) {
  return function (target: any) {
    const h = getInnerHolder(target.prototype);

    // Initialize database field name mapping relationship
    for (let f of Object.keys(h.fields)) {
      if (h.fields[f] === null) {
        h.fields[f] = prefix + (enableColumnConvert ? camelToUnderscore(f) : f);
      }
    }

    h.type = "__table__";
    h.tableName = tableName;
  };
}

/**
 * Mark a property as a field and indicate it as an ID
 * @param idName specific id name
 */
function Id(idName?: string) {
  return function (target: any, propertyKey: string) {
    const h = getInnerHolder(target);

    h.idRef = propertyKey;
    h.fields[propertyKey] = idName || null;
  };
}

/**
 * Mark an attribute as a field
 * @param columnName specific column names
 */
function Column(columnName?: string) {
  return function (target: any, propertyKey: string) {
    const h = getInnerHolder(target);

    h.fields[propertyKey] = columnName || null;
  };
}

export { Table, Id, Column };
