const html = ({ counter }: { counter: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="counter">${counter}</div>
    </body>
  </html>
`;

export default html;
