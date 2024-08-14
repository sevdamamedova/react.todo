import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [items, setItems] = useState(["Task1", "Task2"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      if (selected) {
        const updatedItems = [...items];
        updatedItems[editIndex] = text; 
        setItems(updatedItems);
        setSelected(false); 
        setEditIndex(null); 
      } else {
        setItems([...items, text]); 
      }
      setText(""); 
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    setSelected(true);
    setEditIndex(index);
    setText(items[index]);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto mt-[50px] w-[400px]">
          <div className="flex justify-between items-start border h-[45px]">
            <input
              className="w-full h-full "
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
            />
            <button type="submit" className="bg-green-500 p-[10px] text-[#fff]">
              {selected ? "Update" : "Save"} {/* Düymənin adını dəyişir */}
            </button>
          </div>
          {items.map((el, index) => (
            <div key={index} className="flex justify-between items-start border my-2">
              <p className="p-2">{el}</p>
             <div className="space-x-1 text-[#fff]">
               <button onClick={() => handleDelete(index)} className="p-2 bg-slate-600">
                Sil
              </button>
              <button onClick={() => handleEdit(index)} className="p-2 bg-pink-700">
                Yaz
              </button>
             </div>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default App;
