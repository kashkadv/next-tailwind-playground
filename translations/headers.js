import { headers } from "next/headers";

function getHeadersList() {
  return headers();
}

export function getReferer() {
  return getHeadersList().get("referer");
}

export function getHost() {
  return getHeadersList().get("host");
}

export function getLanguageKey() {
  const host = getHost();

  let key = "en";
  if (host == "localhost:3000") key = "en";

  return key;
}
