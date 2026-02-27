export async function sendQuery(mode: string, query: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mode, query }),
    }
  );

  return response.json();
}