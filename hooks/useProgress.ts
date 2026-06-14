"use client";

/* =========================================================
   useProgress — Onboarding-Fortschritt in localStorage
   Ein geteilter Store (useSyncExternalStore), damit Hero-
   Gesamtanzeige, Phasen-Counter und Checkboxen synchron
   bleiben — ohne Prop-Drilling. Kein Tracking, rein
   funktional, deshalb kein Cookie-Consent nötig.
   ========================================================= */

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "sensipreneur-onboarding-progress";

export type ProgressMap = Record<string, boolean>;

let store: ProgressMap = {};
let initialized = false;
const listeners = new Set<() => void>();

function readFromStorage(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === "object"
      ? (parsed as ProgressMap)
      : {};
  } catch {
    return {};
  }
}

function ensureInit() {
  if (!initialized && typeof window !== "undefined") {
    store = readFromStorage();
    initialized = true;
  }
}

function emit() {
  listeners.forEach((listener) => listener());
}

function handleStorageEvent(event: StorageEvent) {
  // Fortschritt aus einem anderen Tab übernehmen.
  if (event.key === STORAGE_KEY) {
    store = readFromStorage();
    emit();
  }
}

function subscribe(listener: () => void) {
  ensureInit();
  if (listeners.size === 0) {
    window.addEventListener("storage", handleStorageEvent);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("storage", handleStorageEvent);
    }
  };
}

function getSnapshot(): ProgressMap {
  ensureInit();
  return store;
}

const SERVER_SNAPSHOT: ProgressMap = {};
function getServerSnapshot(): ProgressMap {
  // Auf dem Server ist nichts abgehakt — useSyncExternalStore gleicht
  // die Differenz nach der Hydration ohne Mismatch-Warnung aus.
  return SERVER_SNAPSHOT;
}

/** Hakt eine Aufgabe ab bzw. ab — schreibt sofort in localStorage. */
export function toggleTask(id: string) {
  ensureInit();
  store = { ...store, [id]: !store[id] };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* localStorage nicht verfügbar (z.B. Private Mode) — ignorieren */
  }
  emit();
}

export function useProgress() {
  const progress = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const isDone = useCallback(
    (id: string) => Boolean(progress[id]),
    [progress],
  );

  /** Wie viele der übergebenen IDs sind erledigt. */
  const countDone = useCallback(
    (ids: string[]) => ids.reduce((sum, id) => sum + (progress[id] ? 1 : 0), 0),
    [progress],
  );

  return { progress, toggle: toggleTask, isDone, countDone };
}
