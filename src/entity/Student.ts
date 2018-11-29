import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { Course } from "./Course";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    firstName: string
    
    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    mobile: string

    @ManyToMany(type => Course, course => course.students, { eager: true })
    courses: Course[]
}