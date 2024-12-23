import React from "react";

interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ServerSidePage = async () => {
  const response = await fetch(" https://simple-books-api.glitch.me/books/");

  const parsedResponse: Books[] = await response.json();

  return (
    <div className="">
      <div className="py-10">
        <h1 className="text-2xl font-semibold text-center underline">
          Server Side Data Fetching
        </h1>
        <div className="grid px-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parsedResponse.map((books, index) => (
            <div
              key={index}
              className="w-full p-6 mt-10 bg-red-100 shadow-lg hover:scale-[1.05] transition  "
            >
              <p className="text-2xl mb-4 font-bold text-fuchsia-600">
                {books.name}
              </p>
              <p>
                <span className="font-semibold ">ID: </span>
                {books.id}
              </p>
              <p className="my-2 capitalize">
                <span className="font-semibold">Type: </span>
                {books.type}
              </p>
              <p
                className={`${
                  books.available === true ? "text-green-500" : "text-red-600"
                } font-semibold`}
              >
                {books.available === true ? "Available" : "Unavailable"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerSidePage;
