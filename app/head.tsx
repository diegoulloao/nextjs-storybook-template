/**
 *
 * Head: Base Head
 * @description head for the base path
 *
 */
async function Head(/*{ params }*/) {
  return (
    <>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

export default Head;