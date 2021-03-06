import { EntityRepository, Repository } from 'typeorm';
import { User } from '@src/user/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
