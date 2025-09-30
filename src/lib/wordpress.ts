const WORDPRESS_GRAPHQL_URL = 'https://wordpress-egg4w80g0gs4okooow4ck0kg.conormccarthy.me/graphql';

export async function fetchGraphQL(query: string, variables?: Record<string, any>) {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const json = await response.json();
  
  if (json.errors) {
    throw new Error(json.errors[0]?.message || 'GraphQL error');
  }

  return json.data;
}

export const GET_POSTS_QUERY = `
  query GetPosts {
    posts(first: 100) {
      nodes {
        title
        slug
        excerpt
        date
      }
    }
  }
`;

export const GET_POST_QUERY = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
  }
`;
