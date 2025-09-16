import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../enum/user.enum";
import { StudentTest } from "src/student-test/entities/student-test.entity";
import { StudentAnswer } from "src/student-answers/entities/student-answer.entity";
import { DeleteDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    userId: number

    @Column({unique:true})
    regId: string

    @Column({ length: 255 })
    firstName: string

    @Column({ length: 255 })
    lastName: string

    @Column()
    class: string

    @Column()
    school: string

    @Column()
    phoneNo: string

    @Column()
    fatherName: string

    @Column()
    parentNo: string

    @Column()
    address: string

    @Column()
    password: string

    @Column({ type: "enum", enum: Role })
    role: Role

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToMany(() => StudentTest, (s) => s.user)
    userTests: StudentTest[]

    @OneToMany(() => StudentAnswer, (s) => s.user)
    studentAns: StudentAnswer[]
}
