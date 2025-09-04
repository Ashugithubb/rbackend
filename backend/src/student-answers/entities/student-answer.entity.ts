
import { Question } from "src/question/entities/question.entity";
import { StudentTest } from "src/student-test/entities/student-test.entity";
import { Test } from "src/test/entities/test.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("student_answers")
export class StudentAnswer {
@PrimaryGeneratedColumn()
id:number

@PrimaryColumn()
userId:number

@PrimaryColumn()
questionId:number

@PrimaryColumn()
testId:number

@PrimaryColumn()
attemptId:number

@Column()
answer:string

@ManyToOne(()=>User,(u)=>u.studentAns)
@JoinColumn({name:"userId"})
user:User

@ManyToOne(()=>Question,(q)=>q.studentAns)
@JoinColumn({name:"questionId"})
question:Question

@ManyToOne(()=>Test,(t)=>t.studentAns)
@JoinColumn({name:"testId"})
test:Test

@ManyToOne(()=>StudentTest)
@JoinColumn({name:"attemptId"})
studentAttempt:StudentTest

}
