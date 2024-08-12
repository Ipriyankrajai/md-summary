"use client";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TFileUploadProps = {
  onFileRead: (content: string) => void;
  openAIAPIKey: string;
  setOpenAIAPIKey: (key: string) => void;
};

const UploadFile = ({
  onFileRead,
  openAIAPIKey,
  setOpenAIAPIKey,
}: TFileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string>("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // check if the file is a markdown file
    if (!file.name.toLowerCase().endsWith(".md")) {
      toast.error("Please upload a Markdown (.md) file.");
      return;
    }

    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleFileRead = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (typeof content === "string") {
          onFileRead(content);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Select a Markdown File to Generate Summary
      </h1>

      {/* <div className="mt-8">
        <Label htmlFor="openai-key">OpenAI API Key</Label>
        <Input
          id="openai-key"
          type="password"
          value={openAIAPIKey}
          onChange={(e) => setOpenAIAPIKey(e.target.value)}
          placeholder="Enter your OpenAI API key"
        />
      </div> */}
      <div className="mt-5">
        <Label htmlFor="md-file">Document</Label>
        <Input
          id="md-file"
          type="file"
          onChange={handleFileUpload}
          className="mb-4"
          accept=".md"
        />
      </div>

      <Button className="w-full" onClick={handleFileRead} disabled={!file}>
        Generate Summary
      </Button>
      {fileContent && (
        <div>
          <h2 className="text-xl font-semibold mb-2">File Content:</h2>
          <pre className="bg-gray-100 p-4 rounded">{fileContent}</pre>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
