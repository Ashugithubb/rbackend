import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/user/enum/user.enum';


export default class UserSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const userRepo = dataSource.getRepository(User);


        const password = await bcrypt.hash('admin123', 10);

        const students = [
            {
                name: "Ravi Sharma",
                class: "11th",
                school: "Delhi Public School",
                phoneNo: "9876501234",
                fatherName: "Mr. Sharma",
                parentNo: "9123409876",
                address: "Delhi, India",
                password: `${password}`,
                role: Role.Student
            },
            {
                name: "Priya Singh",
                class: "10th",
                school: "DAV School",
                phoneNo: "9876598765",
                fatherName: "Mr. Singh",
                parentNo: "9123498765",
                address: "Lucknow, UP",
                password: `${password}`,
                role: Role.Student
            }
        ];

        await userRepo.save(students);

    }
}