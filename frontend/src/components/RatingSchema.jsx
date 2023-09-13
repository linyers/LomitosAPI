import React from "react";

function RatingSchema() {
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
              rate
            </th>
            <td class="px-6 py-4">float</td>
            <td class="px-6 py-4">The rate of the lomito (0-5)</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              reviews
            </th>
            <td class="px-6 py-4">integer</td>
            <td class="px-6 py-4">The number of the reviews of the lomito</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RatingSchema;
