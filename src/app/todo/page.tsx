import React from 'react';

const TodoPage = () => {
  return (
    <div>
      TodoPage
      <div>
        <ul className="flex flex-col gap-2 text-white">
          <li className="bg-green-600 p-1">
            Show all balances on portfolio page
          </li>
          <li className="bg-red-600 p-1">
            Add wallet authentication on homepage
          </li>
          <li className="bg-red-600 p-1">
            Add a database for storing whale transactions
          </li>
          <li className="bg-red-600 p-1">
            Add a page for viewing these transactions
          </li>
          <li className="bg-red-600 p-1">
            Add a page for viewing token info like volume
          </li>
          <li className="bg-red-600 p-1">
            See if there's a stream for changes in volume
          </li>
          <li className="bg-red-600 p-1">
            Make indicators for certain increases in volume
          </li>
          <li className="bg-red-600 p-1">
            Make a bot to notify of these increases
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
