import React from "react";

export default function Home() {
  return (
    <div>
      <h1>This is the parent site</h1>
      <p>
        Its URL is:{" "}
        <code>https://gatsby-vercel-site-path-alias-test.vercel.app/</code>
      </p>
      <p>
        It is supposed to render the proxy site at this path:{" "}
        <code>`/vercelredirects`</code>
      </p>
      <p>Click the link below to demo</p>
      <a href="https://gatsby-vercel-site-path-alias-test.vercel.app/vercelredirects">
        https://gatsby-vercel-site-path-alias-test.vercel.app/vercelredirects
      </a>
    </div>
  );
}
