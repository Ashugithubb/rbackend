import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enum/user.enum";
import { StudentTest } from "src/student-test/entities/student-test.entity";
import { StudentAnswer } from "src/student-answers/entities/student-answer.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    regId:number

    @Column({length:255})
    name:string

    @Column()
    class:string

    @Column()
    school:string

    @Column()
    phoneNo:string

    @Column()
    fatherName:string

    @Column()
    parentNo:string

    @Column()
    address:string
    
    @CreateDateColumn()
    createdAt:Date

    @Column()
    password:string

    @Column({type:"enum",enum:Role})
    role:Role

    @OneToMany(()=>StudentTest,(s)=>s.user)
    studentTests:StudentTest[]

    @OneToMany(()=>StudentAnswer,(s)=>s.user)
    studentAns:StudentAnswer[]
}
