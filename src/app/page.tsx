"use client";

import { useCallback, useState } from "react";
import UploadFile from "@/components/upload-file";
import GenerateSummary from "@/components/object-stream";

export default function Home() {
  const [data, setData] = useState<string>("");
  const [openAIAPIKey, setOpenAIAPIKey] = useState<string>("");

  const handleFileRead = useCallback((content: string) => {
    setData(content);
  }, []);

  return (
    <main className="max-w-xl mx-auto">
      {data ? (
        <GenerateSummary data={data} />
      ) : (
        <UploadFile
          onFileRead={handleFileRead}
          openAIAPIKey={openAIAPIKey}
          setOpenAIAPIKey={setOpenAIAPIKey}
        />
      )}
    </main>
  );
}
