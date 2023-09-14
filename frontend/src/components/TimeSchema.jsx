import React from "react";

function TimeSchema() {
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
              sunday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              monday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              tuesday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              wednesday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 font-medium text-white">
              thursday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-white">
              friday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 font-medium text-white">
              saturday
            </th>
            <td className="px-6 py-4">string</td>
            <td className="px-6 py-4">
              The start opening hour and end opening hour (00:00-00:00)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimeSchema;
