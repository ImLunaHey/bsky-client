import './styles/index.css';

import type { Content, Editor } from '@tiptap/react';
import type { UseMinimalTiptapEditorProps } from './hooks/use-minimal-tiptap';
import { EditorContent } from '@tiptap/react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
// import { SectionOne } from './components/section/one';
import { SectionTwo } from './components/section/two';
// import { SectionThree } from './components/section/three';
import { SectionFour } from './components/section/four';
import { SectionFive } from './components/section/five';
import { LinkBubbleMenu } from './components/bubble-menu/link-bubble-menu';
import { useMinimalTiptapEditor } from './hooks/use-minimal-tiptap';
import { MeasuredContainer } from './components/measured-container';
import { forwardRef } from 'react';

export interface MinimalTiptapProps extends Omit<UseMinimalTiptapEditorProps, 'onUpdate'> {
  value?: Content;
  onChange?: (value: Content) => void;
  className?: string;
  editorContentClassName?: string;
}

const Toolbar = ({ editor }: { editor: Editor }) => (
  <div className="shrink-0 overflow-x-auto border-b border-border p-2">
    <div className="flex w-max items-center gap-px">
      {/* <SectionOne editor={editor} activeLevels={[1, 2, 3, 4, 5, 6]} /> */}

      {/* <Separator orientation="vertical" className="mx-2 h-7" /> */}

      <SectionTwo editor={editor} activeActions={['bold', 'italic', 'underline', 'clearFormatting']} mainActionCount={4} />

      <Separator orientation="vertical" className="mx-2 h-7" />

      {/* <SectionThree editor={editor} /> */}

      {/* <Separator orientation="vertical" className="mx-2 h-7" /> */}

      <SectionFour editor={editor} activeActions={['orderedList', 'bulletList']} mainActionCount={0} />

      {/* <Separator orientation="vertical" className="mx-2 h-7" /> */}

      <SectionFive editor={editor} activeActions={[]} mainActionCount={0} />
    </div>
  </div>
);

export const MinimalTiptapEditor = forwardRef<HTMLDivElement, MinimalTiptapProps>(function MinimalTiptapEditor(
  { value, onChange, className, editorContentClassName, ...props },
  ref,
) {
  const editor = useMinimalTiptapEditor({
    value,
    onUpdate: onChange,
    ...props,
  });

  if (!editor) {
    return null;
  }

  return (
    <MeasuredContainer
      as="div"
      name="editor"
      ref={ref}
      className={cn('flex h-auto min-h-72 w-full flex-col rounded-md border border-input', className)}
    >
      <EditorContent editor={editor} className={cn('minimal-tiptap-editor flex-1 h-full', editorContentClassName)} />
      <Toolbar editor={editor} />
      <LinkBubbleMenu editor={editor} />
    </MeasuredContainer>
  );
});
