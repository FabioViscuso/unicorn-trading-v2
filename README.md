# GUIDELINES FOR Unicorn Trading (v 0.8 beta)

# Index

-   Project goal
-   Team
-   Workflow
-   Stack and tools
-   Project setup
-   Branch naming
-   Commit messages

# PROJECT GOAL AND ASSIGNMENTS:

Phase 1: Make the landing page with login buttin

Phase 2: Add a dashboard

Phase 3: Functional signup/login logic

Phase 4: Functional and customizable dashboard

# TEAM:

-   Bibin N.J.
-   Fabio Viscuso (Project Lead)
-   Marco Moncada
-   Roberta Tedde

-   Jacopo "jagama" M.G.S. (Stakeholder)

# WORKFLOW:

-   Daily stand-up review (15 minutes, from 9:30 to 9:45, Monday to Friday)
-   Sprint start: each Monday
-   Sprint duration: 1 week

Schedule:
Phase 1 : ENVIRONMENT PREPARATION

-   Immediately notify any problem with your working setup (e.g. VS Code not starting)
-   If starting a new feature, first pull updates from the appropriate branch(es)

Phase 2 : DEVELOPMENT

-   Commit often, for example when a text section is complete
-   Push at any meaningful chunk of work (e.g. completed a layout section)

Phase 3 : ON COMPLETED (PUSHED) TASK

-   Make comparisons and/or initial tests
-   Ask for a code review
-   Make a Pull Request to the appropriate branch and notify the RO

# STACK AND TOOLS:

-   VS Code with required extensions [Live Server, Live Share], suggested [Git Graph, Git Lens]

-   Vanilla CSS

-   React 18+

-   Typescript

-   Redux w/ toolkit

-   Trading widgets

-   GitHub repo [https://github.com/FabioViscuso/unicorn-trading-v2]

-   Trello kanban [https://trello.com/b/tjNyr5A1/react-project-team-6]

# PROJECT SETUP:

The project uses a create-react-app with a custom template for the particle effects

We use vanilla CSS, put into the css folder, which is shared among all components.

# BRANCH STRUCTURE AND NAMING:

This project will have a production branch named [main] and a development branch named [develop]
Each page in the # PROJECT GOAL AND ASSIGNMENTS section will have its appropriate branch [feat/page-name]
Any pull request CANNOT be directed to [main], but to [develop] (mostly) or other relevant branch

Branch Naming:

-   New feature: feat/name-of-feature [e.g. feat/homepage]
-   Bugfixing: bugfix/what-you-fixed [e.g. bugfix/missing-nav-css]
-   Hotfix: hotfix/what-you-fixed

    NOTE: Hotfixes are non-blocking issues that can be solved on short term, while bugfixes
    must be re-added to the backlog and scheduled for another sprint

# COMMIT MESSAGES:

Commit messages should have a title and a more descriptive body

---

If using command-line Git:

-   Adding a feature: git commit -m "feat: <message>" -m "<message>"
    Example: git commit -m "feat: new homepage" -m "added basic files for the homepage"

-   Bugfixing: git commit -m "fix: <message> <relatedCommit>" -m "<message>"
    Example: git commit -m "fix: fixed broken css class from 2ebc23d" -m "fixed misspelled css class name myclas. Expected myClass"

-   Amend: git commit -m "amend: <message> <relatedCommit>"
    Example: git commit -m "amend: forgot to add image relative to commit a32d3g"

    Amend is a git feature, in this case we're using it as a standard commit
    to notify when a commit is just a quick fix or addition on top of a previous one.
    This makes it easier to see commits context and doing a bit of differentiation.

---

If using VS Code's Git GUI, separate title and body by putting a blank line between them.

Example:
feat: new homepage

added basic files for the homepage
