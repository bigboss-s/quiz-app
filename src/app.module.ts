import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'awesomepass',
      database: 'postgres',
      entities: ['dist/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    QuizzesModule,
    AnswersModule,
    QuestionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
