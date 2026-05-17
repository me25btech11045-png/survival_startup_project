// Theme Toggle Logic

// Theme Toggle Hook (Shorts UI Circular Button Style)
document.getElementById("toggleTheme").onclick = function() {
  const body = document.body;
  body.classList.toggle("light");

  // Keep that cool tactical rumble response when switching modes
  body.classList.add("screen-rumble");
  setTimeout(() => body.classList.remove("screen-rumble"), 150);
};
// Real-time Slider Tracking Hook
document.getElementById("confidence").oninput = function() {
  document.getElementById("confidenceValue").innerText = `${this.value}%`;
};

// Main function to generate report
function generateReport() {
  // Grab all user inputs
  let name = document.getElementById("name").value || "Your Startup";
  let funding = Number(document.getElementById("funding").value);
  let burn = Number(document.getElementById("burn").value);
  let employees = Number(document.getElementById("employees").value);
  let sleep = Number(document.getElementById("sleep").value);
  let coffee = Number(document.getElementById("coffee").value);
  let ai = Number(document.getElementById("aiBuzz").value);
  let confidence = Number(document.getElementById("confidence").value);

  // Fallback check if everything is zero/empty
  if(!funding && !burn && !employees) {
    alert("Please enter some metrics to see your survival index!");
    return;
  }

  // Calculate customized dynamic survival score
  let score = 0;

  // 1. Financial Runway metrics (Up to 40 Points)
  if (burn > 0) {
    let runwayMonths = funding / burn;
    if (runwayMonths >= 24) score += 40;
    else if (runwayMonths >= 12) score += 25;
    else if (runwayMonths >= 6) score += 10;
    else score -= 15; // Running out of money soon
  }

  // 2. Founder Health Metrics (Up to 20 Points)
  if (sleep >= 7) score += 20;
  else if (sleep >= 5) score += 10;
  else score -= 15; // Extreme fatigue

  // 3. AI Buzzwords Mechanics (Satirical up to 15 points)
  if (ai > 15) score += 15;
  else if (ai > 5) score += 8;

  // 4. Investor confidence metric allocation (Up to 25 Points)
  score += (confidence * 0.25);

  // 5. Coffee overload tax
  if (coffee > 8) score -= 10;

  // Snap bounds between 0 and 100
  score = Math.max(0, Math.min(100, score));

  // Determine tiers, badges, and structural progress tracking colors
  let result;
  let statusColor;

  if (score > 80) {
    result = "🦄 Unicorn Incoming!";
    statusColor = "#10b981"; // Emerald Green
  } else if (score > 55) {
    result = "💸 Survives Next Round";
    statusColor = "#3b82f6"; // Tech Blue
  } else if (score > 35) {
    result = "🤖 Pivoting to AI Soon";
    statusColor = "#f59e0b"; // Warning Amber
  } else {
    result = "💀 Dead in 6 Months";
    statusColor = "#ef4444"; // Crimson Red
  }

  // Curated Contextual Insights
  let insights = [
    "Your founder may be replacing structural sleep with sheer ambition.",
    "Investors are highly impressed but heavily confused.",
    "Your AI engine structure might just be a heavily nested Excel sheet.",
    "Too much caffeine jitter detected. Operational chaos risks are high.",
    "Runway constraints suggest immediate action is required."
  ];
  let randomInsight = insights[Math.floor(Math.random() * insights.length)];

  // Overwrite DOM elements dynamically with high contrast templates
  const reportContainer = document.getElementById("report");
  reportContainer.innerHTML = `
    <h2>📊 Survival Analysis</h2>
    <div class="result-header" style="color: ${statusColor}">${result}</div>
    
    <p style="margin: 10px 0; font-weight: 500;">Survival Index Score: ${score.toFixed(0)}%</p>
    
    <div class="progress-container">
      <div class="progress-bar" id="scoreBar" style="background-color: ${statusColor}"></div>
    </div>

    <div class="insight-box" style="border-color: ${statusColor}">
      <strong>Index Telemetry for ${name}:</strong> <br>
      "${randomInsight}"
    </div>
  `;

  // Dynamic progressive delay animation injection loop
  setTimeout(() => {
    const bar = document.getElementById("scoreBar");
    if(bar) bar.style.width = `${score}%`;
  }, 100);
}