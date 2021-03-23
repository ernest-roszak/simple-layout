import React, { useState } from "react";

import Pagination from "@material-ui/lab/Pagination";
import Card from "./Card/index";
import Aside from "./Aside";
import postData from "../../data/PostData";

function Content() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(3);

  const lastIndex = currentPage * totalPage;
  const firstIndex = lastIndex - totalPage;
  const currentPosts = postData.slice(firstIndex, lastIndex);

  const count = Math.ceil(postData.length / totalPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main className="content">
      <div>
        {currentPosts.map((el) => (
          <Card
            title={el.title}
            data={el.data}
            image={el.image}
            content={el.content}
            key={el.id}
          />
        ))}
        <Pagination
          count={count}
          page={currentPage}
          onChange={handleChangePage}
          shape="rounded"
          className="pagination"
        />
      </div>
      <Aside />
    </main>
  );
}

export default Content;
