import type { TinaField } from "tinacms";
export function templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "image",
      name: "thumbnail",
      label: "thumbnail",
    },
    {
      type: "string",
      name: "lead",
      label: "lead",
    },
    {
      type: "boolean",
      name: "comments",
      label: "comments",
    },
    {
      type: "boolean",
      name: "authorbox",
      label: "authorbox",
    },
    {
      type: "boolean",
      name: "pager",
      label: "pager",
    },
    {
      type: "boolean",
      name: "toc",
      label: "toc",
    },
    {
      type: "boolean",
      name: "mathjax",
      label: "mathjax",
    },
    {
      type: "string",
      name: "sidebar",
      label: "sidebar",
    },
    {
      type: "string",
      name: "widgets",
      label: "widgets",
      list: true,
    },
  ] as TinaField[];
}
