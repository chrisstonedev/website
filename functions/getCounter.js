const sanityClient = require('@sanity/client');

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: '2021-11-02'
});

exports.handler = async () => {
  const query = '*[_type=="counter"]';
  const count = await sanity.fetch(query).then((results) => {
    return {count: results[0].currentCount};
  });

  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(count)
  };
};
