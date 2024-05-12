import React, { useCallback } from "react";
import useLocalStorage from "../CustomHooks/useLocalStorage";

function DemoApp() {
  const [value, setValue] = useLocalStorage("user", "John");
  const setName = useCallback(() => {
    setValue("Steve");
  }, [setValue]);

  return (
    <>
      <div>DemoApp</div>
      <div onClick={setName}>{value}</div>
    </>
  );
}

export default DemoApp;
