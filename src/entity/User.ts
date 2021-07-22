import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from "typeorm";
import { encrypt } from '../Service/EncryptDecrypt';
@Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    private id: ObjectID;

    @Column()
    private firstName: string;

    @Column()
    private lastName: string;

    @Column({nullable: true, unique: true })
    private email: string;

    @Column()
    private password: string;

    public setFirstName = (firstName: string): void => {
        this.firstName = firstName;
    }
    public setLastName = (lastName: string): void => {
        this.lastName = lastName;
    }
    public setEmail = (email: string): void => {
        this.email = email;
    }
    public setPassword = (password: string): void => {
        this.password = encrypt(password);
    }
    public getFirstName = () => this.firstName;
    public getLastName = () => this.lastName;
    public getEmail = () => this.email;
    public getPassword = () => this.password;

}
