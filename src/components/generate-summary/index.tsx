"use client";

import { summarySchema } from "@/app/api/generate-summary/schema";
import { experimental_useObject as useObject } from "ai/react";

import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Spinner from "../spinner";

const GenerateSummary = ({
  data,
  setData,
}: {
  data: string;
  setData: (data: string) => void;
}) => {
  const { object, submit, isLoading, stop } = useObject({
    api: "/api/generate-summary",
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
      <div className="flex flex-wrap gap-2 items-center mt-5">
        <Button variant={"secondary"} onClick={() => setData("")}>
          <ArrowLeft />
        </Button>
        <h2 className="font-semibold text-2xl">Summary</h2>
      </div>

      {isLoading && (
        <div className="pt-4 flex justify-between items-center">
          <div className="flex gap-1 items-center pb-2">
            <div className="font-medium">Loading</div>
            <Spinner />
          </div>
          <Button variant={"destructive"} onClick={() => stop()}>
            Stop Generating
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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
