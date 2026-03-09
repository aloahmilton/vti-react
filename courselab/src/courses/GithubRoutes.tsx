import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const githubRoutes = (
    <>
        <Route path="/github/basics" element={<GenericLesson
            title="🔧 Git Basics" subject="GitHub" path="/github/basics"
            difficulty="Beginner"
            nextPath="/github/repos" nextLabel="Repositories"
            content="Git is a distributed version control system. It tracks changes in your code so you can collaborate with others. Pro Tip: Use 'Atomic Commits'—one commit per specific change."
            editorLanguage="bash"
            conceptCards={[
                { icon: '📁', title: 'Working Directory', desc: 'Where you edit files. Changes here are untracked.' },
                { icon: '🎭', title: 'Staging Area', desc: 'Files staged with git add, ready to be committed.' },
                { icon: '💾', title: 'Repository', desc: 'Committed history. git commit saves a snapshot.' },
            ]}
            codeExamples={[
                { label: 'Init & Commit', language: 'bash', code: `# Initialize a new repo\ngit init\n\n# Stage all files\ngit add .\n\n# Commit with a message\ngit commit -m "feat: add login page"\n\n# Check status\ngit status` },
            ]}
            quizQuestion="What is an 'Atomic Commit'?"
            quizOptions={["A very large commit", "A commit that includes only one logic change", "A deleted commit", "A commit made automatically"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/repos" element={<GenericLesson
            title="☁️ Repositories" subject="GitHub" path="/github/repos"
            difficulty="Beginner"
            prevPath="/github/basics" prevLabel="Git Basics"
            nextPath="/github/commits" nextLabel="Commits & History"
            content="A repository (repo) is your project's home — it stores all code and its entire revision history. GitHub hosts remote repos so your team can collaborate from anywhere in the world."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🏠', title: 'Local Repo', desc: 'Lives on your machine. You commit here first.' },
                { icon: '☁️', title: 'Remote Repo', desc: 'Hosted on GitHub. Team push/pull from here.' },
                { icon: '🔃', title: 'Clone', desc: 'git clone downloads a remote repo to your machine.' },
            ]}
            codeExamples={[
                { label: 'Remote Setup', language: 'bash', code: `# Link local to remote\ngit remote add origin https://github.com/user/repo.git\n\n# Push to GitHub for first time\ngit push -u origin main\n\n# Pull latest changes\ngit pull origin main` },
                { label: 'Clone', language: 'bash', code: `# Clone a repository\ngit clone https://github.com/user/repo.git\n\n# Clone into a specific folder\ngit clone https://github.com/user/repo.git my-folder` },
            ]}
            quizQuestion="How do you link a local repository to a remote one?"
            quizOptions={["git link remote", "git remote add origin", "git sync", "git connect"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/commits" element={<GenericLesson
            title="📜 Commits & History" subject="GitHub" path="/github/commits"
            difficulty="Beginner"
            prevPath="/github/repos" prevLabel="Repositories"
            nextPath="/github/branches" nextLabel="Branches & Merging"
            content="Commits are snapshots of your project at a specific point in time. A good commit message explains what changed and why. Git's log allows you to navigate back in time to any previous state of your project."
            editorLanguage="bash"
            conceptCards={[
                { icon: '📸', title: 'Commit', desc: 'A snapshot of staged changes with a unique SHA hash.' },
                { icon: '📝', title: 'Commit Message', desc: 'Description of changes. Format: <type>: <description>.' },
                { icon: '📜', title: 'Git Log', desc: 'The chronological list of all commits in the project.' },
            ]}
            codeExamples={[
                { label: 'Log & History', language: 'bash', code: `# View commit history\ngit log\n\n# View concise log\ngit log --oneline\n\n# View changes in a commit\ngit show <commit-hash>\n\n# Compare files\ngit diff` },
                { label: 'Rewriting History', language: 'bash', code: `# Change last commit message\ngit commit --amend -m "Better message"\n\n# Undo last commit (keep changes)\ngit reset --soft HEAD~1\n\n# Undo last commit (trash changes)\ngit reset --hard HEAD~1` },
            ]}
            quizQuestion="How do you view a concise, one-line version of the commit history?"
            quizOptions={["git list", "git history --short", "git log --oneline", "git show --summary"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/branches" element={<GenericLesson
            title="🌿 Branch Management" subject="GitHub" path="/github/branches"
            difficulty="Intermediate"
            prevPath="/github/commits" prevLabel="Commits & History"
            nextPath="/github/workflow" nextLabel="Professional Workflow"
            content="Branches allow you to develop features safely in parallel. Modern Git uses 'git switch' and 'git restore' for better clarity over the older 'checkout' command."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🌿', title: 'git switch', desc: 'Modern way to move between branches.' },
                { icon: '🔀', title: 'git merge', desc: 'Integrate changes from one branch into another.' },
                { icon: '🔙', title: 'git restore', desc: 'Discard uncommitted changes in your files.' },
            ]}
            codeExamples={[
                { label: 'Modern Branching', language: 'bash', code: `# Create and switch to branch\ngit switch -c feature-header\n\n# Switch back to main\ngit switch main\n\n# Discard changes to a file\ngit restore src/App.tsx` },
                { label: 'Merging', language: 'bash', code: `# Merge feature into main\ngit switch main\ngit merge feature-header` }
            ]}
            quizQuestion="Which modern command is used to switch to an existing branch?"
            quizOptions={["git switch", "git move", "git go", "git branch --jump"]}
            quizCorrectAnswer={0}
        />} />

        <Route path="/github/workflow" element={<GenericLesson
            title="🏗️ Professional Workflow" subject="GitHub" path="/github/workflow"
            difficulty="Intermediate"
            prevPath="/github/branches" prevLabel="Branch Management"
            nextPath="/github/pr" nextLabel="Pull Requests"
            content="In professional teams, nobody works directly on 'main'. We use Feature Branching: sync main, create a branch, do work, and push it for review."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🚧', title: 'Feature Branch', desc: 'A dedicated branch for a specific task/feature.' },
                { icon: '🔄', title: 'Rebase vs Merge', desc: 'Different ways to keep your history clean.' },
                { icon: '🏁', title: 'Main Protection', desc: 'main is always production-ready and stable.' },
            ]}
            codeExamples={[
                { label: 'Professional Sync', language: 'bash', code: `# Always start by syncing main\ngit switch main\ngit pull origin main\n\n# Create your feature branch\ngit switch -c feat/login-screen\n\n# Do your work... then push\ngit push -u origin feat/login-screen` },
            ]}
            quizQuestion="Where should you do your actual development work?"
            quizOptions={["Directly on main", "On a dedicated feature branch", "In the .git folder", "On a remote server"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/pr" element={<GenericLesson
            title="🔁 Pull Requests" subject="GitHub" path="/github/pr"
            difficulty="Intermediate"
            prevPath="/github/workflow" prevLabel="Professional Workflow"
            nextPath="/github/collab" nextLabel="Collaboration"
            content="A Pull Request (PR) is the heart of GitHub collaboration. It lets you tell others about changes you've pushed to a branch in a repository. Once a PR is opened, you can discuss and review the potential changes with collaborators."
            editorLanguage="bash"
            conceptCards={[
                { icon: '👀', title: 'Code Review', desc: 'Collaborators comment on specific lines of your code.' },
                { icon: '✅', title: 'Checks', desc: 'Automated tests (Actions) that must pass before merging.' },
                { icon: '🚀', title: 'Merge', desc: 'The process of applying PR changes to the target branch.' },
            ]}
            codeExamples={[
                { label: 'PR Workflow', language: 'bash', code: `# 1. Push your branch to GitHub\ngit push origin feature/awesome-thing\n\n# 2. Go to GitHub URL and click "New Pull Request"\n# 3. Add title and description\n# 4. Wait for CI checks and reviews\n# 5. Click "Merge pull request"` },
            ]}
            quizQuestion="What is the main purpose of a Pull Request?"
            quizOptions={["To download code", "To propose and review code changes", "To delete a branch", "To create a backup"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/collab" element={<GenericLesson
            title="🤝 Collaboration" subject="GitHub" path="/github/collab"
            difficulty="Intermediate"
            prevPath="/github/pr" prevLabel="Pull Requests"
            nextPath="/github/actions" nextLabel="GitHub Actions"
            content="GitHub provides tools beyond just code storage: Issues for bug tracking, Projects for task management, and Discussions for community chat. Working in a team requires a clear workflow like GitFlow or GitHub Flow."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🍴', title: 'Forking', desc: "Copying a repo to your own account to contribute to open source." },
                { icon: '📜', title: 'Issues', desc: 'Track bugs, enhancements, and tasks in your project.' },
                { icon: '🏗️', title: 'GitHub Flow', desc: 'Simple workflow: Branch -> Commit -> PR -> Merge.' },
            ]}
            codeExamples={[
                { label: 'Team Commands', language: 'bash', code: `# Fetch all remotes without merging\ngit fetch --all\n\n# Stash current work to switch branches\ngit stash\ngit checkout main\ngit stash pop\n\n# Resolve conflicts by seeing what changed\ngit log --merge` },
            ]}
            quizQuestion="What is 'forking' a repository?"
            quizOptions={["Deleting a project", "Creating a copy of a repo in your account", "Merging two branches", "Downloading code to your PC"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/actions" element={<GenericLesson
            title="🤖 GitHub Actions" subject="GitHub" path="/github/actions"
            difficulty="Advanced"
            prevPath="/github/collab" prevLabel="Collaboration"
            nextPath="/github/pages" nextLabel="GitHub Pages"
            content="GitHub Actions allows you to automate your software development workflow. You can build, test, and deploy your code right from GitHub. It uses YAML files to define automated jobs triggered by events."
            editorLanguage="yaml"
            conceptCards={[
                { icon: '⛓️', title: 'Workflow', desc: 'An automated process defined in .github/workflows/.' },
                { icon: '⚡', title: 'Event', desc: 'The trigger: push, pull_request, or manual dispatch.' },
                { icon: '🏃', title: 'Runner', desc: 'The server (Ubuntu, Windows, Mac) that executes your jobs.' },
            ]}
            codeExamples={[
                { label: 'CI Workflow', language: 'yaml', code: `name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test` },
            ]}
            quizQuestion="What format is used to write GitHub Action workflows?"
            quizOptions={["JSON", "XML", "YAML", "Markdown"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/pages" element={<GenericLesson
            title="🚀 GitHub Pages" subject="GitHub" path="/github/pages"
            difficulty="Intermediate"
            prevPath="/github/actions" prevLabel="GitHub Actions"
            nextPath="/github/workflows" nextLabel="Advanced Workflows"
            content="GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub and publishes a website."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🌍', title: 'Hosting', desc: 'Free hosting for static sites: user.github.io/repo.' },
                { icon: '⚙️', title: 'Publishing', desc: 'Select a branch (often main or gh-pages) to publish from.' },
                { icon: '🛠️', title: 'Custom Domains', desc: 'Link your own domain name via DNS settings.' },
            ]}
            codeExamples={[
                { label: 'Deployment', language: 'bash', code: `# Common deployment script for React\n"deploy": "gh-pages -d build"\nnpm run deploy` },
            ]}
            quizQuestion="Can you host a PHP backend on GitHub Pages?"
            quizOptions={["Yes", "No, static files only", "Only with Actions", "Only on Enterprise"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/workflows" element={<GenericLesson
            title="🔗 Advanced Workflows" subject="GitHub" path="/github/workflows"
            difficulty="Advanced"
            prevPath="/github/pages" prevLabel="GitHub Pages"
            nextPath="/github/security" nextLabel="Security Best Practices"
            content="Advanced workflows involve environment secrets, matrix builds (testing on multiple OS versions), and continuous deployment (CD) to AWS, Azure, or Vercel using tokens and encrypted secrets."
            editorLanguage="yaml"
            conceptCards={[
                { icon: '🧱', title: 'Matrix build', desc: 'Run jobs on multiple Node.js versions or OS types.' },
                { icon: '🤫', title: 'Secrets', desc: 'Encrypted variables for API keys and deployment tokens.' },
                { icon: '🚢', title: 'CD', desc: 'Continuous Deployment — auto-shipping to production.' },
            ]}
            codeExamples={[
                { label: 'Matrix & Secrets', language: 'yaml', code: `jobs:\n  test:\n    strategy:\n      matrix:\n        node: [16, 18, 20]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    env:\n      API_KEY: \${{ secrets.PROD_API_KEY }}\n    steps:\n      - run: ./deploy.sh` },
            ]}
            quizQuestion="Where are sensitive deployment tokens stored in GitHub?"
            quizOptions={["In the YAML file", "In Repository Secrets", "In the README", "In .gitignore"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/security" element={<GenericLesson
            title="🔒 Security Best Practices" subject="GitHub" path="/github/security"
            difficulty="Advanced"
            prevPath="/github/workflows" prevLabel="Advanced Workflows"
            content="Security on GitHub is about protecting your code and secrets. Never commit API keys or passwords. Use .gitignore to exclude sensitive files. GitHub will alert you about vulnerable dependencies via Dependabot."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🙈', title: '.gitignore', desc: 'List of files/folders Git should ignore.' },
                { icon: '🛡️', title: 'Dependabot', desc: 'Automatically checks for security vulnerabilities.' },
                { icon: '🔐', title: '2FA', desc: 'Two-Factor Authentication for your GitHub account.' },
            ]}
            codeExamples={[
                { label: '.gitignore', language: 'bash', code: `# Ignore node_modules\nnode_modules/\n\n# Ignore env files\n.env\n.env.local\n\n# Ignore logs\nnpm-debug.log*` },
            ]}
            quizQuestion="Which file tells Git to ignore certain files like node_modules?"
            quizOptions={[".gitignore", "git-exclude", ".exclude", "ignore.txt"]}
            quizCorrectAnswer={0}
        />} />
    </>
);
