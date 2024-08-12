"use client";

import { summarySchema } from "@/api/use-object/schema";
import { experimental_useObject as useObject } from "ai/react";

import React from "react";

const GenerateSummary = () => {
  const { object, submit, isLoading, stop } = useObject({
    api: "/api/use-object",
    schema: summarySchema,
  });

  return (
    <div>
      <button
        onClick={() => submit("Messages during finals week.")}
        disabled={isLoading}
      >
        Generate notifications
      </button>

      {isLoading && (
        <div>
          <div>Loading...</div>
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      {object?.map((summary, index) => (
        <div key={index}>
          <p>{summary?.title}</p>
          <p>{summary?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GenerateSummary;
