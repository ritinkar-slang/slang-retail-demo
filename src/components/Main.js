import React, { useEffect, useState } from "react";
import SlangRetailAssistant from "slang-retail-assistant";
import GroceryTable from "./groceryTable";

function Main() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    SlangRetailAssistant.init({
      buddyId: "<buddy-id>", // rgrocery.v2 // slang assistants
      apiKey: "<api-key>",
      isSpa: true,
    });
  }, []);
  useEffect(() => {
    SlangRetailAssistant.setAction({
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
