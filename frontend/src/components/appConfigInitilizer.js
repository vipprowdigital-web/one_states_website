"use client";

import { useEffect } from "react";
import { useAppConfigStore } from "@/store/useAppConfigStore";

const baseUrl = "http://localhost:5000/api/v1";

export default function AppConfigInitializer({ children }) {
  const setAppConfig = useAppConfigStore((state) => state.setAppConfig);
  const setError = useAppConfigStore((state) => state.setError);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch(`${baseUrl}/app-config/public`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        // console.log("Response: ", response);

        if (!response.ok)
          throw new Error("Failed to fetch application runtime settings.");

        const data = await response.json();

        setAppConfig(data.data);
        // console.log("Data: ", data.data);
      } catch (err) {
        console.error("App Config Fetch Error:", err);
        setError(err.message);
      }
    }

    fetchConfig();
  }, [setAppConfig, setError]);

  return <>{children}</>;
}
