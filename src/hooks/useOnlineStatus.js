import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  console.log("teststs---");
  const [status, updateStatus] = useState("Online");

  useEffect(() => {
    console.log("teststs--33-");
    const onOnlineState = () => {
      console.log("doing it online");
      updateStatus("Online");
    };

    const onOfflineState = () => {
      console.log("doing it offline");
      updateStatus("Offline");
    };

    // Corrected event names with string quotes
    window.addEventListener("online", onOnlineState);
    window.addEventListener("offline", onOfflineState);

    // Cleanup to prevent memory leaks
    return () => {
      window.removeEventListener("online", onOnlineState);
      window.removeEventListener("offline", onOfflineState);
    };
  }, []);

  return status;
}
