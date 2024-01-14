import { pool } from "../pool";
import { getInnerHolder } from "../utils";
import { convert } from "../typeConverter";

function createInsertStatement(holder: any, instance: any) {
  const { fields, tableName } = holder;
  const keys = Object.keys(fields);
  const fieldsString = keys.map((key) => `\`${fields[key]}\``).join(", ");
  const valuesString = keys.map((key) => convert(instance[key])).join(", ");
  const sql = `insert into \`${tableName}\` (${fieldsString}) values (${valuesString})`;
  return sql;
}

function createDeleteStatement(holder: any, instance: any) {
  const { fields, tableName, idRef } = holder;
  const id = fields[idRef];
  const value = convert(instance[idRef]);
  const sql = `delete from \`${tableName}\` where \`${id}\` = ${value}`;
  return sql;
}

class TableObject {
  /**
   *
   * @returns update rows count
   */
  async insert() {
    const h = getInnerHolder(this);
    const insertStatement = createInsertStatement(h, this);
    try {
      await pool.query(insertStatement);
      return 1;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  /**
   *
   * @returns update rows count
   */
  async delete() {
    const h = getInnerHolder(this);
    const deleteStatement = createDeleteStatement(h, this);
    try {
      await pool.query(deleteStatement);
      return 1;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }
}

export { TableObject };
