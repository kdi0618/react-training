import { PAGE_URL } from "./pageUrl";

export const BREADCRUMBS_OF_TOP = [
  {
    name: "トップ",
    path: PAGE_URL.TOP,
  },
];

export const BREADCRUMBS_OF_DETAIL = [
  ...BREADCRUMBS_OF_TOP,
  {
    name: "詳細",
    path: "",
  },
];
