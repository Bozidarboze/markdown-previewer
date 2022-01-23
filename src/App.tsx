import { useState } from "react";

import "./App.css";
import Previewer from "./components/Previewer/Previewer";
import Editor from "./components/Editor/Editor";

import DEFAULT_MARKDOWN from "./DEFAULT_MARKDOWN";

interface Markdown {
  target: Target;
}

interface Target {
  value: string;
}

const App = () => {
  const [markdown, setMarkdown] = useState<string>(DEFAULT_MARKDOWN);
  const handleInput = (e: Markdown): void => {
    setMarkdown(e.target.value);
  };

  return (
    <div className='container'>
      <Editor handleInput={handleInput} markdown={markdown} />
      <Previewer markdown={markdown} />
    </div>
  );
};

export default App;
