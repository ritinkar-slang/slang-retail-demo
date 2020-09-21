import React, { useEffect, useState } from "react";
import SlangRegistrationAssistant from "slang-retail-assistant";
import GroceryTable from "./groceryTable";

function Main() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    SlangRegistrationAssistant.init({
      buddyId: "d500dea6ff22404783f3e8d21b175a26", // rgrocery.v2 // slang assistants
      apiKey: "96db4ed890494bbbabe6b4623c1c103d",
      isSpa: true,
    });
  }, []);
  useEffect(() => {
    SlangRegistrationAssistant.setAction({
      onSearch: (retailItem) => {
        if (retailItem) {
          setItems([...items, retailItem]);
          return { status: "SEARCH_SUCCESS" };
        } else {
          return { status: "ADD_TO_CART_SUCCESS" };
        }
      },
    });
  });
  return (
    <div className="App">
      <GroceryTable items={items} />
    </div>
  );
}

export default Main;
