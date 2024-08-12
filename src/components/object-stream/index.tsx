"use client";

import { summarySchema } from "@/app/api/use-object/schema";
import { experimental_useObject as useObject } from "ai/react";

import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const GenerateSummary = ({ data }: { data: string }) => {
  const { object, submit, isLoading, stop } = useObject({
    api: "/api/use-object",
    schema: summarySchema,
  });
  const hasSubmitted = useRef(false);

  useEffect(() => {
    if (!data && hasSubmitted.current) return;
    submit(data);
    hasSubmitted.current = true;
  }, []);

  return (
    <div>
      <div>
        <h2 className="mt-5 font-semibold text-2xl">Summary</h2>
      </div>

      {isLoading && (
        <div>
          <div>Loading...</div>
          <Button variant={"destructive"} onClick={() => stop()}>
            Stop Generating
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {Array.isArray(object?.data) &&
          object.data.map((summary, index) => (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{summary?.title}</CardTitle>
                </CardHeader>
                <CardContent>{summary?.description}</CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GenerateSummary;
