import { useEffect, useRef, type TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function AutoResizeTextarea(props: Props) {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    const el = ref.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  // adjust on value change
  useEffect(() => {
    adjustHeight();
  }, [props.value]);

  // adjust on window resize
  useEffect(() => {
    const handleResize = () => adjustHeight();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <textarea
      {...props}
      ref={ref}
      rows={1}
      style={{
        overflow: "hidden",
        resize: "none",
        ...props.style,
      }}
    />
  );
}
