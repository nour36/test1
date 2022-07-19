import React from "react";
import SearchForm from "./SearchForm-class";

export default function Container(props) {
  function search(query) {
    console.log(query);
  }

  return (
    <div>
      <SearchForm onSearch={search} />
    </div>
  );
}
