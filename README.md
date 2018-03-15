# DALI Dashboard

The DALI Dashboard is the heart of the DALI Internal project. The idea is a web interface to access as much of the data on the API as possible and show relevant information to outside observers to improve the accessibility of information about the lab.

## Current features planned:

- Projected activity in the lab graph
  - See when the lab is most busy and when it will be quiet to schedule your meetings, work, and social time.
- Project progress
  - Check up on the current progress towards the goal for each project and see what they have been up to recently.
- People in the lab
  - See who is in the lab at the moment. Also see all the members and their roles in the lab's work
- Events
  - Get a calendar of events to help you fit DALI events both mandatory and optional into your schedule
- DALI Resources
  - Access a huge database of resources made by members. Find videos of workshops, tutorials on various technologies, documentation on internal tools, and listings of members who hold office hours.

## Status

The dashboard as it is runs and is deployed on [http://tangy-songs.surge.sh](http://tangy-songs.surge.sh). The homepage is currently static, as some of the data needed has yet to be compiled. The members and projects pages are live off the API. Currently it is using a limited access API key to get data, but in the future this will be replaced by user sign-in using Google Sign-In.

## Resources

Design files:
- Dashboard design: [https://sketch.cloud/s/YGPLZ](https://sketch.cloud/s/YGPLZ)

## Tech stack
- React.JS (frontend)
- Express.JS (API)
- Axios (for connecting to the API)

## Getting started
To get started developing for the dashboard, you will need the following:

- Homebrew:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- Node.JS
```bash
brew install node
```
- Get the dashboard code and install packages
```bash
git clone git@github.com:dali-lab/DaliDashboard.git dashboard;
cd dashboard;
npm install --dev
```
- (optional) ESLint (makes sure your code is well formatted and has no syntax errors)
> Open Atom and in the package manager install eslint and all dependencies

To run the dashboard locally: (in browser localhost:8080)
```bash
npm start
```

To deploy to the tangy-songs address:
```bash
npm deploy
```

## Contributors:
> Armin Mahban, John Kotz, Anne Muller

## Acknowledgments
Thanks Tim Tregubov for the excellent starter resources, and for the help with coding it. Thanks Adam Rinehouse for the tireless assistance on CSS problems and react understanding
