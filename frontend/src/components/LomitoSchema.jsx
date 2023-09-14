import React from "react";

function LomitoSchema() {
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
              id
            </th>
            <td className="px-6 py-4">number</td>
            <td className="px-6 py-4">The id of the lomito</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              name
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">The name of the lomito</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              phone
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">Phone number of the lomito</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              maps
            </th>
            <td className="px-6 py-4">string (url)</td>
            <td className="px-6 py-4">The url in maps</td>
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 font-medium text-white">
              logo
            </th>
            <td className="px-6 py-4">image</td>
            <td className="px-6 py-4">Logo of the lomito</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              rating
            </th>
            <td className="px-6 py-4">object</td>
            <td className="px-6 py-4">
              Object with 2 attributes, rate and reviews of the lomito
            </td>
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 font-medium text-white">
              day_time
            </th>
            <td className="px-6 py-4">object</td>
            <td className="px-6 py-4">
              Object with 7 attributes, opening hours on the day per week
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              night_time
            </th>
            <td className="px-6 py-4">object</td>
            <td className="px-6 py-4">
              Object with 7 attributes, opening hours on the night per week
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LomitoSchema;
