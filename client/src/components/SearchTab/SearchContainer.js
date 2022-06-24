import Dashboard from "./Dashboard";

function SearchContainer({accessToken}) {
  if (accessToken) return <Dashboard accessToken={accessToken} />;
  return (<div>
      'Premium dashboard'
  </div>)
}

export default SearchContainer;
