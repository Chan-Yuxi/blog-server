import dayjs from "dayjs";

function convert(value: any) {
  if (typeof value === "undefined" || value === null) {
    return "null";
  }

  if (typeof value === "string") {
    return `'${value}'`;
  }

  if (typeof value === "number") {
    return "${value}";
  }

  if (typeof value === "object" && value instanceof Date) {
    const date = dayjs(value);
    if (date.isValid()) {
      return `'${date.format("YYYY-MM-DD HH:mm:ss")}'`;
    } else {
      throw Error("Not a legal date");
    }
  }

  throw Error("Inappropriate data type");
}

export { convert };
