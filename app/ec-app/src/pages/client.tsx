import { trpc } from '@/utils/trpc';
import { NextPage } from 'next';

const Client: NextPage = () => {
  const hello = trpc.hello.useQuery({ text: 'tRPC' });

  return <main>{hello.data?.greeting}</main>;
};

export default Client;
