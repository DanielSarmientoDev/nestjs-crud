import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  constructor() {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
