import React from "react";

function LomitoSchema() {
  return (
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left text-gray-500 dark:text-gray-400">
        <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Attribute
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              id
            </th>
            <td class="px-6 py-4">number</td>
            <td class="px-6 py-4">The id of the lomito</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              name
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">The name of the lomito</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              phone
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">Phone number of the lomito</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              maps
            </th>
            <td class="px-6 py-4">string (url)</td>
            <td class="px-6 py-4">The url in maps</td>
          </tr>
          <tr>
            <th scope="row" class="px-6 py-4 font-medium text-white">
              logo
            </th>
            <td class="px-6 py-4">image</td>
            <td class="px-6 py-4">Logo of the lomito</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              rating
            </th>
            <td class="px-6 py-4">object</td>
            <td class="px-6 py-4">
              Object with 2 attributes, rate and reviews of the lomito
            </td>
          </tr>
          <tr>
            <th scope="row" class="px-6 py-4 font-medium text-white">
              day_time
            </th>
            <td class="px-6 py-4">object</td>
            <td class="px-6 py-4">
              Object with 7 attributes, opening hours on the day per week
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              night_time
            </th>
            <td class="px-6 py-4">object</td>
            <td class="px-6 py-4">
              Object with 7 attributes, opening hours on the night per week
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LomitoSchema;
