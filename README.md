[![CI](https://github.com/Batch-440/cyckle/actions/workflows/ci.yml/badge.svg)](https://github.com/Batch-440/cyckle/actions/workflows/ci.yml)
------

# Cyckle

Cyckle is a side-project created by Batch 440 in order to experiment tech stacks, architecture and processes. Its goal is to simplify bike renting without the need of a bike rental agency, so people can rent their bike between each other.

## Tech Stack
- Ruby 3.0.1
- Rails 7.0.4
- Vite 3.2.0 with vite_rails gem
- React 18.2.0

## Want to dev?

### Setup
```
rails db:setup
bundle install
yarn install
```

### Launching the dev server
`foreman start -f Procfile.dev`

### Contributing
- Take an unresolved ticket on Jira
- Create a branch starting by the ticket ID
- Code
- Push your branch to GitHub
- Create a Pull Request
- Pass the CI
- Request peers approval
- Merge your branch (squash and merge)

### What should I enter as title and description for my PR?
```
Title: ($TICKET_NUMBER) $TICKET_TITLE
Description: A short sentence describing your changes
```

## Any questions?
Please contact us at `tech@batch440.com`.

## Happy hacking!
