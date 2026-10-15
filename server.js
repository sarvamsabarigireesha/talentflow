const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the demo-website directory
app.use(express.static(path.join(__dirname)));

// Simple mock API endpoints
app.get('/api/admin', (req, res) => {
  res.json({
    status: 'ok',
    features: [
      'JD posting',
      'Candidate sourcing',
      'AI first‑level interview',
      'Second‑level human interview',
      'One‑click BGV & onboarding',
      'Rejection analytics',
      'Searchable candidate repo'
    ]
  });
});

app.get('/api/candidate', (req, res) => {
  res.json({
    status: 'ok',
    features: [
      'Job discovery with filters',
      'Single‑upload profile',
      'Application tracker',
      'Positive feedback & upskill suggestions',
      'AI job recommendations',
      'One‑click offer download'
    ]
  });
});

app.get('/api/client', (req, res) => {
  res.json({
    status: 'ok',
    features: [
      'JD upload with specs',
      'CV shortlist with match scores',
      'Interview scheduling & gate‑pass',
      'Immediate feedback board',
      'Rate/notice validation',
      'BGV & document tracking',
      'One‑click document dispatch'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Demo server running on http://localhost:${PORT}`);
});