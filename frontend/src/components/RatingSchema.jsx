import React from "react";

function RatingSchema() {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Attribute
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              rate
            </th>
            <td className="px-6 py-4">float</td>
            <td className="px-6 py-4">The rate of the lomito (0-5)</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              reviews
            </th>
            <td className="px-6 py-4">integer</td>
            <td className="px-6 py-4">The number of the reviews of the lomito</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RatingSchema;
