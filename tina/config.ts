import { defineConfig } from "tinacms";
import { templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "472e4a56-c16a-4ee8-8eb2-a7d4ab364e64", // Get this from tina.io
  token: "af2b97169bf3fea9b0bb6df0ddd1bd778e065551", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Post",
        name: "post",
        path: "content/post",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...templateFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        },
        search: {
          tina: {
            indexerToken: 'a0113f60b38bebb30efa2ffe737e28a7a9b5111c',
            stopwordLanguages: ['eng']
          },
          indexBatchSize: 100,
          maxSearchIndexFieldLength: 100
        },
          ...templateFields(),
        ],
      },
    ],
  },
});
