import { timeStamp } from "console";
import { Question } from "src/question/entities/question.entity";
import { StudentAnswer } from "src/student-answers/entities/student-answer.entity";
import { StudentTest } from "src/student-test/entities/student-test.entity";
import { Check, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// @Check(`"publishDate" < "expiryDate"`)
// @Check(`"createdAt <= publishDate"`)
@Entity("tests")
export class Test {
    @PrimaryGeneratedColumn()
    testId:number

    @Column()
    title:string

    @Column()
    subject:string

    @Column()
    instruction:string

    @CreateDateColumn()
    createdAt:Date

    @Column()
    publishDate:Date

    @Column()
    expiryDate:Date

    @Column()
    duration:number

    @Column()
    totalMarks:number

    @OneToMany(()=>StudentTest,(s)=>s.test)
    studentTest:StudentTest[]
    
    @OneToMany(()=>Question,(q)=>q.test)
    questions:Question[]

    @OneToMany(()=>StudentAnswer,(s)=>s.test)
    studentAns:StudentAnswer[]
}
