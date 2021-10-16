import { useQuery } from "@apollo/client";
import { query } from "./graphQL/graphQL";

import RenderChild from "./components/RenderChild";
import Loader from "./components/Loader";
import Navbar from "./components/NavBar";

function App() {
  const { loading, data } = useQuery(query);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        {data.continents.map((continent) => {
          return (
            <RenderChild
              isMainParent={true}
              key={continent.code}
              data={continent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
