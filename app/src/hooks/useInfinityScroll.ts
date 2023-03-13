import { useEffect } from "react";
import { throttle } from "lodash";

const scrollY = () => {
  if (typeof window.pageYOffset !== "undefined") {
    // most browsers except IE before #9
    return window.pageYOffset;
  }
  const B = document.body; // IE 'quirks'
  let D = document.documentElement; // IE with doctype
  D = D.clientHeight ? D : B;
  return D.scrollTop;
};

const documentHeight = () => {
  const { body, documentElement: html } = document;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
};

const useInfinityScroll = ({
  loading,
  onNext,
  enabled = true,
  offset = 500,
}: {
  loading: boolean;
  onNext: () => void;
  enabled: boolean;
  offset?: number;
}) => {
  useEffect(() => {
    // SSR/SSG guard
    if (typeof window === "undefined") {
      return undefined;
    }

    if (!enabled || loading) {
      return undefined;
    }

    const handleScroll = () => {
      if (loading) {
        return;
      }
      const scroll = scrollY();
      const height = documentHeight() - window.innerHeight;
      if (height - scroll < offset) {
        try {
          onNext();
        } catch (ex) {
          //
        }
      }
    };

    const throttledScrollHandler = throttle(handleScroll, 500);
    window.addEventListener("scroll", throttledScrollHandler);
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [enabled, loading, onNext, offset]);
};

export default useInfinityScroll;
