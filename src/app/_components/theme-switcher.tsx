"use client";

import styles from "./switch.module.css";
import { memo, useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["dark", "light"];

/** to reuse updateDOM function defined inside injected script */

/** function to be injected in script tag for avoiding FOUC (Flash of Unstyled Content) */
export const NoFOUCScript = (storageKey: string) => {
  /* can not use outside constants or function as this script will be injected in a different context */
  const [DARK, LIGHT] = ["dark", "light"];

  /** Modify transition globally to avoid patched transitions */
  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);

    return () => {
      /* Force restyle */
      getComputedStyle(document.body);
      /* Wait for next tick before removing */
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  /** function to add remove dark class */
  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const systemPreference = media.matches ? DARK : LIGHT
    const mode = localStorage.getItem(storageKey) ?? systemPreference;
    const classList = document.documentElement.classList;
    
   if (mode === DARK) {
      classList.add(DARK);
      classList.remove(LIGHT);
    } else {
      classList.add(LIGHT);
      classList.remove(DARK);
    }
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };
  window.updateDOM();
  media.addEventListener("change", window.updateDOM);
};

let updateDOM: () => void;

/**
 * Switch button to quickly toggle user preference.
 */
const Switch = () => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<ColorSchemePreference>("light"); // default to light

  useEffect(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY) as ColorSchemePreference;
    if (savedMode) {
      setMode(savedMode);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
      updateDOM?.();
    }
  }, [mode, mounted]);

  useEffect(() => {
    updateDOM = window.updateDOM;
    addEventListener("storage", (e: StorageEvent): void => {
      e.key === STORAGE_KEY && setMode(e.newValue as ColorSchemePreference);
    });
  }, []);

  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className={styles.switch} />;
  }

  return (
    <button
      className={styles.switch}
      onClick={handleModeSwitch}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      data-mode={mode}
    />
  );
};

const ThemeScript = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

/**
 * This component wich applies classes and transitions.
 */
export const ThemeSwitcher = () => {
  return (
    <>
      <ThemeScript />
      <Switch />
    </>
  );
};
