import React from "react";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'employee'] {
  _id,
    position,
    image,
    name,
    department
}`;

  const data = await client.fetch(query);
  return data;
}

const TeamPage = async () => {
  const data = await getData();
  return <div>TeamPage</div>;
};

export default TeamPage;
