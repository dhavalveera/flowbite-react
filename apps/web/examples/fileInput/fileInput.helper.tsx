import { FileInput, Label } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { FileInput, Label } from "flowbite-react";

export function Component() {
  return (
    <div>
      <div>
        <Label htmlFor="file-upload-helper-text" value="Upload file" />
      </div>
      <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
    </div>
  );
}
`;

const codeRSC = `

import { FileInput, Label } from "flowbite-react";

export function Component() {
  return (
    <div>
      <div>
        <Label htmlFor="file-upload-helper-text" value="Upload file" />
      </div>
      <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
    </div>
  );
}
`;

export function Component() {
  return (
    <div>
      <div>
        <Label htmlFor="file-upload-helper-text" value="Upload file" />
      </div>
      <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
    </div>
  );
}

export const helper: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "fileInput/fileInput.helper.tsx",
  component: <Component />,
};
