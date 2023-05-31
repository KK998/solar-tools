"use client";

import { useRef } from "react";

import ActionRow from "@/app/(components)/Presentation/ActionRow";
import { withLocation } from "@/app/(components)/Location/withLocation";

import { withApi } from "@/app/(services)/withApi";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const printRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={printRef} className="flex flex-wrap gap-5 p-5">
      <ActionRow printRef={printRef} />
      {children}
    </div>
  );
};

export default withApi(withLocation(Layout));
