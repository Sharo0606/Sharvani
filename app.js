function askEduGenie(){
  const q=document.getElementById("question").value.trim();
  const answer=document.getElementById("answer");
  if(!q){answer.textContent="Please enter a question.";return;}
  answer.innerHTML="<b>EduGenie:</b> Thinking...";

  setTimeout(()=>{
    const lower=q.toLowerCase();
    let response;
    if(lower.includes("photosynthesis")){
      response="Photosynthesis is the process by which green plants make food using sunlight, carbon dioxide and water. Oxygen is released as a by-product.";
    } else if(lower.includes("summary") || lower.includes("notes")){
      response="Study approach: identify the main idea, list important points, note key terms, and review the topic using short questions.";
    } else if(lower.includes("quiz")){
      response="Practice Quiz: 1) What is the main idea of the topic? 2) Define two key terms. 3) Give one real-world example. 4) Explain the concept in your own words.";
    } else {
      response="Demo response: EduGenie would send this question to Google Gemini and display an AI-generated educational explanation. For the project demonstration, try asking about a topic such as photosynthesis, notes, or a quiz.";
    }
    answer.innerHTML="<b>EduGenie:</b><p>"+response+"</p>";
  },700);
}

function clearAnswer(){
  document.getElementById("question").value="";
  document.getElementById("answer").textContent="Your answer will appear here.";
}
