import { query } from "./../../db";

export async function getUserById(id: string) {
  const user = await query(`select * from user where id=${id}`);
  return user;
}
