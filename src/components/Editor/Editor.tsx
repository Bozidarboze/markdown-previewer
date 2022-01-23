import "./Editor.styles.scss";

const Editor = ({ handleInput, markdown }: any) => {
  return (
    <div className='editor'>
      <div className='previewer-header'>
        <h1>Editor</h1>
      </div>
      <textarea onChange={(e) => handleInput(e)} value={markdown} id='editor' autoFocus />
    </div>
  );
};

export default Editor;
