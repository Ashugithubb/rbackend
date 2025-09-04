
import { StudentAnswer } from "src/student-answers/entities/student-answer.entity";
import { Test } from "src/test/entities/test.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("questions")
export class Question {
    @PrimaryGeneratedColumn()
    questionId: number

    @Column()
    questionText: string

    @Column()
    optionA: string

    @Column()
    optionB: string

    @Column()
    optionC: string

    @Column()
    optionD: string

    @Column()
    correctAns: string

    @ManyToOne(() => Test, (t) => t.questions)
    @JoinColumn({ name: "testId" })
    test: Test

    @OneToMany(() => StudentAnswer, (s) => s.question)
    studentAns: StudentAnswer[]
}
