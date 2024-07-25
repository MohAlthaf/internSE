import { useState } from "react";
import data from "./data";  

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className="border rounded-lg">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item border-b p-4 text-gray-800 text-xl">
              <div
                onClick={() => handleSelection(dataItem.id)}
                className="title flex justify-between items-center cursor-pointer py-2"
              >
                <h3 className="text-xl font-medium">{dataItem.question}</h3>
                <span className=" text-gray-800 text-2xl">{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
                <div className="content py-2 text-gray-600 text-lg">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div className="notFound text-center text-gray-500">Data not Found</div>
        )}
      </div>
    </div>
  );
}
