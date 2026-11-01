# Personal Portfolio Website

Portfolio of **Puli Sai Srinivasa Teja**, an aspiring AI Full Stack Developer and Java Backend Developer. It is a fast, responsive, single-page site built with plain HTML, CSS and JavaScript. There is no framework and no build step.

## Highlights

- Recruiter-focused first screen: name, role, headline, project highlight, and buttons for View Projects, Download Resume and Contact Me.
- Project cards that explain the problem, solution, key functionalities, technologies and my contribution, with GitHub links.
- Skills grouped by category, an internship timeline, hackathons and technical events, education, certifications and activities.
- One-click resume download.
- Contact section with quick action cards (Email, LinkedIn, GitHub), copy buttons for email and phone, and LeetCode and HackerRank links.
- Light and dark themes, remembered between visits.
- Smooth scrolling and subtle animations that respect the "reduce motion" setting.
- Responsive layout for phone, tablet and desktop.

## Projects featured

| Project | Stack | Repository |
| --- | --- | --- |
| AI Placement Preparation System | Spring Boot, React.js, MySQL, JWT, REST APIs, LLM integration | [GitHub](https://github.com/Puliteja2006/AI-Placement-Preparation-System) |
| NexusCommerce AI | Java 21, Spring Boot, React.js, PostgreSQL, Spring Security, JWT | [GitHub](https://github.com/Puliteja2006/Nexus-Commerce-AI) |

## Tech stack

- HTML5 (semantic markup, JSON-LD structured data)
- CSS3 (custom properties, grid, flexbox, light and dark themes)
- Vanilla JavaScript (theme toggle, active navigation, resume download, copy buttons)
- Google Fonts: Bricolage Grotesque, Figtree and JetBrains Mono

## Project structure

```
Personal Portfolio Website/
├── index.html    # page content and structure
├── style.css     # design tokens, layout, themes, animations
├── script.js     # theme toggle, navigation highlight, resume download, copy buttons
├── resume.pdf    # original resume, unchanged
└── README.md
```

Keep all files in the same folder. `index.html` loads `style.css` and `script.js`, and the Download Resume buttons use `resume.pdf`.

## Run locally

1. Open the folder in VS Code (**File > Open Folder**).
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

Opening `index.html` directly in a browser also works, but Live Server gives the most reliable results for downloads and fonts. An internet connection is needed for Google Fonts, otherwise the page falls back to system fonts.

## Customize

| To change | Edit |
| --- | --- |
| Text, projects, experience, links | `index.html` |
| Colors and fonts | the `:root` variables at the top of `style.css` |
| Resume | replace `resume.pdf` with the new file, keeping the same name |
| Live demo links | add a button inside the project card in `index.html` |

## Deploy on GitHub Pages

1. Create a GitHub repository. Naming it `<your-username>.github.io` publishes the site at `https://<your-username>.github.io`.
2. Upload or push all files in this folder to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Add personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git push -u origin main
   ```
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After a minute or two, the site is live at the address shown on that page.

## Accessibility and SEO

- Skip-to-content link, semantic landmarks, descriptive link labels and visible keyboard focus.
- Color contrast chosen for both themes, and reduced-motion support.
- Page title, meta description, Open Graph tags and Person structured data.

## Links

- GitHub: https://github.com/Puliteja2006
- LinkedIn: https://linkedin.com/in/puli-sai-srinivasa-teja-164189326
- LeetCode: https://leetcode.com/u/PULITEJA/
- HackerRank: https://www.hackerrank.com/profile/pulisaisrinivas1
- Email: pulisaisrinivasateja@gmail.com

## License

All content is personal and belongs to Puli Sai Srinivasa Teja. Please ask before reusing the text or resume. You are welcome to use the code structure as inspiration for your own portfolio.