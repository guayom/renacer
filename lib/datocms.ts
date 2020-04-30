import { GraphQLClient } from 'graphql-request';
import { DatoRequestData } from '../types/dato-data';

interface RequestProps {
  query: string;
  variables?: { limit: number };
  preview?: boolean;
}

export const request = ({
  query,
  variables,
  preview
}: RequestProps): Promise<DatoRequestData> => {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
};
