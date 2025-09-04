import 'reflect-metadata';
import AppDataSource from 'src/data.source';
import UserSeeder from './seeds/student';


async function seed() {
  await AppDataSource.initialize();
  await new UserSeeder().run(AppDataSource); 
  console.log(' Student seeding complete');
}

seed();