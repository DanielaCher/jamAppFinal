Rehearsal Room Web Application 🎶
The Rehearsal Room web application enables musicians to collaborate in real-time, creating virtual rehearsal spaces for seamless music practice. Musicians can join as users, specify their instruments, and enjoy a dynamic rehearsal environment, with the added benefit of real-time control and display of music materials for all participants.

Key Features
Admin Control: An admin user can create rehearsal sessions, manage song selections, and control what is displayed for participants during the session.
Song Search & Selection: The admin can search for songs in both English and Hebrew, with results displayed for easy selection.
Dynamic Display: When a song is selected, all users see the lyrics and chords tailored to their roles. Instrument players view chords, while vocalists only see lyrics, ensuring a productive practice setup.
This web app is crafted to enhance collaborative music-making, offering a smooth and organized rehearsal experience for musicians.

Running Example

To see the application in action:

On Two Devices (or Two Browser Sessions):
1. A user logs in as a Singer and is redirected to the waiting room.
2. Another user logs in as an Admin Singer, searches for a song (e.g., "Hey"), selects a song from the results list, and displays it.
   The waiting room user receives the selected song details, including chords, for an engaging rehearsal experience.

Technology Stack:
Frontend: React
Backend: Node.js with Express
Real-Time Communication: Socket.io

Deployment:
The project is live at Rehearsal Room on Netlify.
