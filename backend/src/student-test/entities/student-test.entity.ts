
import { StudentAnswer } from "src/student-answers/entities/student-answer.entity";
import { Test } from "src/test/entities/test.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('student_tests')
export class StudentTest {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>User,(u)=>u.studentTests)
    @JoinColumn({name:"userId"})
    user:User

    @ManyToOne(()=>Test,(t)=>t.studentTest)
    @JoinColumn({name:"testId"})
    test:Test

    @OneToMany(()=>StudentAnswer,(s)=>s.studentAttempt)
    studentAns:StudentAnswer[]
    
    @Column({default:2})
    maxAttempts:number
}
