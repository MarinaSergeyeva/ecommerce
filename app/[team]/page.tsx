import React from "react";
import { client } from "../lib/sanity";
import { SimplifiedEmployee } from "../interface";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `*[_type == 'employee'] {
  _id,
    position,
    "imageUrl": image.asset->url,
    name,
    "slug": slug.current,
    "departmentName": department->name
}`;

  const data = await client.fetch(query);
  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

const TeamPage = async () => {
  const data: SimplifiedEmployee[] = await getData();
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Team
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((employee) => (
            <Link
              key={employee._id}
              href={`/team/${employee.slug}`}>
              <div className="group">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={employee.imageUrl}
                    alt="Employee Photo"
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                  />
                </div>
                <p className="border-l-2 px-2 mt-4 text-sm text-gray-500">
                  {employee.departmentName}
                </p>
                <h3 className="text-md mt-6 font-semibold text-gray-700">
                  {employee.name}
                </h3>
                <p className="text-md mt-2 text-gray-500">
                  {employee.position}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
