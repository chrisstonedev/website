const sanityClient = require('@sanity/client');

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2021-11-02'
});

exports.handler = async () => {
  let success = false;
  await sanity.patch('e11719e5-bbaf-4443-9336-260e30d6f618') // Document ID to patch
    .inc({currentCount: 1}) // Increment field by count
    .commit()
    .then(() => success = true);

  return {
    statusCode: 200,
    body: JSON.stringify(success)
  };
};
