import React from "react";

function TimeSchema() {
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
              sunday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              monday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              tuesday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              wednesday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr>
            <th scope="row" class="px-6 py-4 font-medium text-white">
              thursday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-white">
              friday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr>
            <th scope="row" class="px-6 py-4 font-medium text-white">
              saturday
            </th>
            <td class="px-6 py-4">string</td>
            <td class="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimeSchema;
