import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, ManyToOne} from "typeorm"
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    title: string

    @Column()
    code: string

    @ManyToOne(type => Teacher, teacher => teacher.courses)
    teacher: Teacher

    @ManyToMany(type => Student, student => student.courses)
    students: Student[]
}