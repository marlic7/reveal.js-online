# reveal.js-online fork of hacker-slides

This is direct fork of https://github.com/makusatori/hacker-slides.git 

Changes to origin hacker-slides:
1) used Node.js instead of Python
2) whole app is closed in the Docker image to make it easy to use

![Screenshot](https://cloud.githubusercontent.com/assets/1058938/6180867/9acdea84-b2df-11e4-8ae8-b01f2c4d7e1d.png)

A simple app that combines [Ace Editor](https://github.com/ajaxorg/ace/) and [RevealJS](https://github.com/hakimel/reveal.js)

You can write markdown on the left, and preview your presentation on the right.

[![Try it on Sandstorm](https://img.shields.io/badge/try-live%20demo-783189.svg)](https://demo.sandstorm.io/appdemo/7qvcjh7gk0rzdx1s3c8gufd288sesf6vvdt297756xcv4q8xxvhh)

# How to use it

On Linux with Docker and NPM it's very simple, go to directory where you want to create presentation and run:
```bash
npx reveal.js-online
```

If missing NPM (Node Package Manager) run just:
```bash
docker run -it --rm -p 8001:8001 -v "${PWD}":/app/data marlic/reveal.js-online
```

Next open in browser: http://localhost:8001

## Print to pdf

1. Open in browser: http://localhost:8001/?print-pdf
2. Open the in-browser print dialog (CTRL/CMD+P).
3. Change the Destination setting to Save as PDF.
4. Change the Layout to Landscape.
5. Change the Margins to None.
6. Enable the Background graphics option.
7. Click Save.

## The Basics

- Separate horizontal slides using '`---`' on a blank line
- Separate vertical slides using '`--`' on a blank line
- Write github flavored markdown
- Click 'Present' (top right) when you're ready to talk

---

## Quick tips

- There is also a speaker view, with notes - press '`s`'
- Press '`?`' with focus on the presentation for shortcuts
- <em>You can use html when necessary</em>

Note:
- Anything after `Note:` will only appear here 

---

## Learn more

- [RevealJS Project/README](https://github.com/hakimel/reveal.js)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)

