// /app/api/evaluate/route.js or /pages/api/evaluate.js

export async function POST(req) {
    try {
      // Parse the request body
      const { cleanedInput } = await req.json();
  
      // Construct the URL
      const url = `https://legacy.cryptool.org/ncidapi/evaluate/single_line/ciphertext?ciphertext=${cleanedInput}&architecture=Transformer&architecture=FFNN&architecture=LSTM&architecture=RF&architecture=NB`;
  
      // Fetch data from the external API
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from external API');
      }
  
      const data = await response.json();
  
      // Return the result
      return new Response(JSON.stringify({ payload: data.payload }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Error processing the request' }),
        { status: 500 }
      );
    }
  }
  