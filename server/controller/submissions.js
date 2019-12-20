import log from "../log";
import submittable from "../integrations/submittable/request";
import firebase from "firebase-admin";

const submissions = {
  query: async function(user, queryOptions) {
    // let Submittable do as much of the initial filtering as possible
    let submittableQuery = { count: 1000 };

    if (queryOptions.categories)
      submittableQuery.category_id = queryOptions.categories;

    return (
      submittable
        .get("https://api.submittable.com/v1/submissions", {
          params: submittableQuery
        })
        // TODO: walk through paginated results
        .then(response => {
          log.trace(response.data, "Response from Submittable");
          return response.data.items;
        })
        .catch(error =>
          log.error(error.response.data, "Error from submittable")
        )
    );
  }
};
export default submissions;
