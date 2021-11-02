const sanityClient = require('@sanity/client');

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: '2021-11-02'
});

exports.handler = async () => {
  const query = '*[_type=="conferences"] | order(date asc)';
  const conferences = await sanity.fetch(query).then((results) => {
    return results.map((conference) => {
      return {
        name: conference.name,
        date: conference.date,
        type: conference.type
      };
    });
  });

  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(conferences)
  };
};
