import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Course } from "./Course";

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(type => Course, course => course.teacher, { nullable: false })
    courses: Course[]
}
