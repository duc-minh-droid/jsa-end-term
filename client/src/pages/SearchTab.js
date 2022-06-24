import React from "react";
import Layout from "../layout/Layout";
import SearchContainer from "../components/SearchTab/SearchContainer";
import Cookies from "js-cookie";

function SearchTab() {
  return (
    <Layout>
      <SearchContainer accessToken={Cookies.get("accessToken")} />
    </Layout>
  );
}

export default SearchTab;
