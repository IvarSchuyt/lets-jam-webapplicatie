// src/components/styleChange.js

import { writable } from "svelte/store";

export const isStyleChanged = writable(false);

export function toggleStyle() {
  isStyleChanged.update((value) => !value);
}
