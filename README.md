# SevaPoint
SevaPoint public-service guide.

Includes:
- Node.js + Express + EJS
- Search, categories, service pages
- 28 States + 8 Union Territories
- Expanded Rajasthan service directory
- Working English/Hindi toggle
- Language preference saved in browser localStorage
- Responsive UI

Run:
npm install
npm run dev

Open: http://localhost:3000
States: http://localhost:3000/states
Rajasthan: http://localhost:3000/states/rajasthan
Contact: http://localhost:3000/contact

Click the Hindi button in the navbar to switch to Hindi. Click English to switch back.

Contact email setup:

1. Enable 2-Step Verification on the Gmail account that will send the messages.
2. Create a Gmail App Password for that account.
3. Copy `.env.example` to `.env` and set `MAIL_USER` and `MAIL_APP_PASSWORD`.
4. Start the server again. Contact form messages will be delivered to `sevapoint.com@gmail.com`.
