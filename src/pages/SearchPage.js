import React, { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import FooterPage from "../components/FooterPage";
import SearchPageBody from "../components/SearchPageBody";
import HeaderNotLogin from "../components/HeaderNotLogin";
import { useSearchParams } from "react-router-dom";
import { getAllProjects } from "../utils/network-data";

function SearchPage({ authedUser, logout }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [ post, setPost ] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("search") || "";
  });

  React.useEffect(() => {
    getAllProjects().then(({ post }) => {
      setPost(post);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const searchPost = post.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(post);

  if (authedUser === null) {
    return (
      <>
        <HeaderNotLogin />
        <SearchPageBody
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
          post={searchPost}
        />
        <FooterPage />
      </>
    );
  }

  return (
    <>
      <HeaderLogin logout={logout} />
      <SearchPageBody
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
        post={searchPost}
      />
      <FooterPage />
    </>
  );
}

export default SearchPage;
