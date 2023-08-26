import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import parse from 'html-react-parser';

const Blogs = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40pradeep_chauhan');
        const data = await res.json();
        const items = data.items

        console.log(items)
        setItems(items);
      } catch {
        setError(true);
      }
    }

    fetchData();
  }, []);
  if (error) {
    return (
      <section>
        <div>
          <h3>Latest Articles</h3>
          <ul>
            <p>Failed to fetch data, please try again later.</p>
          </ul>
          <a
            href={"https://medium.com/@pradeep_chauhan"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Read on Medium
          </a>
        </div>
      </section>
    );
  }
  return (
    <section>

      <div className="border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto container">
        <div className="mt-5">
          <Heading title="Latest Blogs" />
        </div>
        <div className="container ">
          <div className="grid gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {
              items.map((value, key) => (
                <div key={value.id} className="group rounded-3xl border-2 border-green p-6 bg-white transition duration-500 ">
                  <h4 className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-black dark:group-hover:text-black">{value.title}</h4>
                  <img src={value.thumbnail} alt={value.title}/>
                  <p className="mb-10 text-lg font-semibold transition line-clamp-4 dark:group-hover:text-black">
                    {parse(value.content)}
                  </p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    <a href={value.link}>Read More </a>
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs