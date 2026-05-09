import { useEffect, useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");

  useEffect(() => {
    
  
    console.log(text)
  }, [text])
  
  return (
   <>
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Write your thoughts..."
      className="w-full min-h-[200px] p-4 bg-transparent text-[#2A2622] outline-none resize-none leading-relaxed"
    />
    <div className="whitespace-pre-wrap">
      {text}
    </div>
   </>

  );
}