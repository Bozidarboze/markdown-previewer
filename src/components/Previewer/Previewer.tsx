import "./Previewer.styles.scss";
import Markdown from "marked-react";

interface Props {
  markdown: string;
}

const Previewer = ({ markdown }: Props) => {
  return (
    <div className='previewer'>
      <div className='previewer-header'>
        <h1>Preview</h1>
      </div>
      <div id='preview' className='content'>
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
};

export default Previewer;
