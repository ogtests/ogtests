import React from "react";

export interface Props {
  children?: React.ReactNode | undefined;
}

function Page({ children }: Props): JSX.Element {
  return (
    <html>
      <head>
        <title>My Page</title>
        {children}
      </head>
      <body>Hello world!</body>
    </html>
  );
}

export default Page;
