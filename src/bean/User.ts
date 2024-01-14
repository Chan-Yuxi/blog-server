import { TableObject } from "@/db/abstract";
import { Column, Id, Table } from "@/db/decorators";

@Table("user", "u_")
export default class User extends TableObject {
  @Id()
  id: string;

  @Column()
  active: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  signature: string;

  @Column()
  createAt: Date;

  @Column()
  lastLoginDate: Date;

  @Column()
  roles: string;

  constructor(
    id: string,
    active: string,
    username: string,
    password: string,
    nickname: string,
    email: string,
    phone: string,
    signature: string,
    createAt: Date,
    lastLoginDate: Date,
    roles: string
  ) {
    super();

    this.id = id;
    this.active = active;
    this.username = username;
    this.password = password;
    this.nickname = nickname;
    this.email = email;
    this.phone = phone;
    this.signature = signature;
    this.createAt = createAt;
    this.lastLoginDate = lastLoginDate;
    this.roles = roles;
  }
}
