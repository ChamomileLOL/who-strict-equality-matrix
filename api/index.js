const express = require('express');
const app = express();

// THE ROOT ROUTE: This kills the "Cannot GET /" error
app.get('/', (req, res) => {
    res.send(`
        <body style="background: #000; color: #39ff14; font-family: monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center;">
            <h1 style="border: 2px solid #39ff14; padding: 20px;">[OFFICIAL WHO PWA INTERFACE]</h1>
            <p style="font-size: 1.5rem;">STATUS: AIRBORNE</p>
            <p>VARIANT: PI (Successor to Omicron)</p>
            <div style="margin-top: 20px;">
                <button onclick="window.location.href='/trigger-mutation'" style="background: #39ff14; color: black; border: none; padding: 15px 30px; font-weight: bold; cursor: pointer;">
                    EXECUTE STRICT EQUALITY CHECK
                </button>
            </div>
            <p style="margin-top: 50px; color: #555;">ID: ${Math.random().toString(36).substring(7)}</p>
        </body>
    `);
});

// THE MUTATION ROUTE: Your original logic
app.get('/trigger-mutation', (req, res) => {
    console.log("[WHO PWA] Executing Smart Contract: triggerPiMutation(null) === 'SOCIETAL_PERFECTION'");
    
    setTimeout(() => {
        res.status(500).json({
            error: "Strict Equality Matrix Collapsed",
            mutation: "Pi Variant Officially Declared by WHO",
            logic: "null !== SOCIETAL_PERFECTION"
        });
    }, 2000);
});

// VERCEL REQUIREMENT: Export the app instead of calling app.listen()
module.exports = app;