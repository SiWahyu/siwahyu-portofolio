"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CopyButton = ({
  text,
  className,
  variant = "outline",
  size = "icon",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Gagal copy:", err);
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      onClick={handleCopy}
      className={cn("transition-colors rounded-4xl", className)}
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
      Copy
    </Button>
  );
};

export default CopyButton;
