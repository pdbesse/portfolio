# react-portfolio

## Description

This app a project portfolio built with React.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippets](#code-snippets)
* [Technology](#technology)
* [References](#references)
* [Credits](#credits)
* [Testing](#testing)
* [License](#license)

---

## Installation

This app has been deployed to GitHub Pages.

---

## Usage

The user is presented with a nav bar with my name, as well as buttons for an 'about me' section, a 'projects' section, a 'resume' section, and a 'hire me (contact)' session. The buttons bring the user to the corresponding section.

In the projects section, the user is presented with six .gif images of each presented app. If the user scrolls over the .gif, the user is presented with the project title, description, and a list of technologies used.

Below each .gif are two buttons: a rocket button to take the user to the deployed app's page; and a GitHub button to take the user to the GitHub repository page.

In the resume section, the user is presented with a button to download my resume, as well as a list of skills and technologies I've learned.

In the contact section, the user is presented with a form for first name, last name, email address, and message.

---

## Code Snippets

```javascript
import { ReactComponent as Deploy } from './assets/deploy.svg'
import { ReactComponent as Github } from './assets/github.svg'

<div>
    {projects.map((project, i) => (
        <div>
            <div
                key={i}>
                <div>
                    <img
                        alt="portfolio"
                        src={project.image} />
                    <div>
                        <h2>
                            {project.subtitle}
                        </h2>
                        <h1>
                            {project.title}
                        </h1>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <a href={project.deployLink} target='_blank' rel='noreferrer noopener'><Deploy /></a>
                <a href={project.githubLink} target='_blank' rel='noreferrer noopener'><Github /></a>
            </div>
        </div>
    ))}
</div>
```
Two .svg files are imported as React components in the first two lines of this code block.

This JSX snippet (CSS styling removed for readability) takes the projects array imported from project-data.js and, for each project object in the array, renders the image, subtitle, title, and description to a card.

The two links at the bottom take the user to the project's deployed link and GitHub repository link. The links are wrapped around the .svg files imported as components. These links open in a new tab in the browser.

---

## Technology

Technology Used:
* [GitHub](https://github.com/)
* [GitBash](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Javascipt](https://www.javascript.com/)
* [node.js](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Tailwind](https://tailwindcss.com/)

---

## References
* [logrocket.com - svgs in React](https://blog.logrocket.com/how-to-use-svgs-in-react/)
* [GitHub svg icon](https://iconmonstr.com/github-5-svg/)
* [Deploy Rocket svg icon](https://thenounproject.com/icon/deploy-2715487/)
* [Tailwind Contact Form](https://tailwindcomponents.com/component/basic-contact-form)
* [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
* [FreeCodeCamp](https://www.freecodecamp.org/news/build-portfolio-website-react/)


---

## Credits

React Portfolio credited to Phillip Besse.

Parts of the CSS and basic HTML layout credited to [freecodecamp](https://www.freecodecamp.org/news/build-portfolio-website-react/). Contact form credited to [Tailwind Components](https://tailwindcomponents.com/component/basic-contact-form).

---

## Testing

There are no tests for this app.

---

## License

Phillip Besse's React Portfolio is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) 2022 Phillip Besse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---