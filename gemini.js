// Google Gemini integration template.
// Keep API credentials on a secure server in a real deployment.
// Never publish a private API key in client-side JavaScript.

async function askGeminiSecurely(question){
  const response = await fetch("/api/gemini", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({question})
  });
  if(!response.ok) throw new Error("AI service unavailable");
  return await response.json();
}
