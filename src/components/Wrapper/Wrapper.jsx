import { useSelector } from "react-redux";
import { EditorWrapper } from "../EditorWrapper/EditorWrapper";
import { PreviewWrapper } from "../PreviewWrapper/PreviewWrapper";

export const Wrapper = () => {
  const isEditorExpanded = useSelector((state) => state.isEditorExpanded);
  const isPreviewExpanded = useSelector((state) => state.isPreviewExpanded);

  return (
    <div>
      {isEditorExpanded && !isPreviewExpanded && <EditorWrapper />}
      {!isEditorExpanded && isPreviewExpanded && <PreviewWrapper />}
      {!isEditorExpanded && !isPreviewExpanded && (
        <>
          <EditorWrapper />
          <PreviewWrapper />
        </>
      )}
    </div>
  );
};
