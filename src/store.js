import { createStore } from "redux";

const SET_MARKDOWN = "SET_MARKDOWN";

const TOGGLE_EDITOR_EXPAND = "TOGGLE_EDITOR_EXPAND";
const TOGGLE_PREVIEW_EXPAND = "TOGGLE_PREVIEW_EXPAND";

export const setMarkdown = (markdown) => ({
  type: SET_MARKDOWN,
  payload: markdown,
});

export const toggleEditorExpand = () => ({
  type: TOGGLE_EDITOR_EXPAND,
});

export const togglePreviewExpand = () => ({
  type: TOGGLE_PREVIEW_EXPAND,
});

const initialState = {
  isEditorExpanded: false,
  isPreviewExpanded: false,
  markdown: `# Welcome to my React Markdown Previewer!
    
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine === \`\\\`\`\\\`\`\\\` && lastLine === \`\\\`\`\\\`\`\\\`) {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `,
};

const markdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKDOWN:
      return {
        ...state,
        markdown: action.payload,
      };
    case TOGGLE_EDITOR_EXPAND:
      return {
        ...state,
        isEditorExpanded: !state.isEditorExpanded,
        isPreviewExpanded: false,
      };
    case TOGGLE_PREVIEW_EXPAND:
      return {
        ...state,
        isPreviewExpanded: !state.isPreviewExpanded,
        isEditorExpanded: false,
      };
    default:
      return state;
  }
};

const store = createStore(markdownReducer);

export default store;
