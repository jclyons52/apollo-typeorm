import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
import * as path from "path";
import { Course } from "./entity/Course";
import { Student } from "./entity/Student";

createConnection()
  .then(async connection => {
    const schema = fs.readFileSync(
      path.join(__dirname, "schema.graphql")
    );

    const typeDefs = gql`
      ${schema}
    `;

    const resolvers = {
      Query: {
        courses: async () => await connection.getRepository(Course).find(),
        course: async (id: number) => await connection.getRepository(Course).findOne(id),
        students: async () => await connection.getRepository(Student).find(),
        student: async (id: number) => await connection.getRepository(Student).findOne(id)
      }
    };

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(error => console.log(error));
