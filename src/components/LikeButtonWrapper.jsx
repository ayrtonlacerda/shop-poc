import React, { useEffect, useState } from "react";

async function loadLikeButton() {
  const localUrl = "http://localhost:3001/bundle.js";
  const remoteUrl = "https://likebutton-beryl.vercel.app/bundle.js";

  try {
    const response = await fetch(localUrl, { method: "HEAD" });
    if (response.ok) {
      console.log("Carregando LikeButton localmente");
      return (await import(localUrl)).default;
    }
    throw new Error("Módulo local não encontrado");
  } catch (e) {
    console.log("Carregando LikeButton remoto");
    return (await import(remoteUrl)).default;
  }
}

const LikeButtonWrapper = () => {
  const [LikeButton, setLikeButton] = useState(null);

  useEffect(() => {
    loadLikeButton().then((Component) => {
      setLikeButton(() => Component);
    });
  }, []);

  if (!LikeButton) return <div>Carregando...</div>;

  return <LikeButton />;
};

export default LikeButtonWrapper;
