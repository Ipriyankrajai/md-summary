"use client";

import { useCallback, useState } from "react";
import UploadFile from "@/components/upload-file";

export default function Home() {
  const [data, setData] = useState<string>("");
  const [openAIAPIKey, setOpenAIAPIKey] = useState<string>("");

  const handleFileRead = useCallback((content: string) => {
    setData(content);
  }, []);

  return (
    <main className="max-w-xl mx-auto">
      {data ? (
        <>{data}</>
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
