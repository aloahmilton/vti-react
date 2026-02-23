import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const GithubRoutes = () => (
    <>
        <Route path="/github/basics" element={<GenericLesson
            title="🔧 Git Basics" subject="GitHub" path="/github/basics"
            difficulty="Beginner"
            nextPath="/github/repos" nextLabel="Repositories"
            content="Git is a distributed version control system. It tracks changes in your code so you can collaborate with others and revisit any version. The three key areas are: Working Directory, Staging Area, and Repository."
            editorLanguage="bash"
            conceptCards={[
                { icon: '📁', title: 'Working Directory', desc: 'Where you edit files. Changes here are untracked.' },
                { icon: '🎭', title: 'Staging Area', desc: 'Files staged with git add, ready to be committed.' },
                { icon: '💾', title: 'Repository', desc: 'Committed history. git commit saves a snapshot.' },
            ]}
            codeExamples={[
                { label: 'Init & Commit', language: 'bash', code: `# Initialize a new repo\ngit init\n\n# Stage all files\ngit add .\n\n# Commit with a message\ngit commit -m "Initial commit"\n\n# Check status\ngit status` },
                { label: 'Branching', language: 'bash', code: `# Create a new feature branch\ngit checkout -b feature/login\n\n# List all branches\ngit branch\n\n# Switch back to main\ngit checkout main\n\n# Merge feature branch\ngit merge feature/login` },
            ]}
            quizQuestion="Which command records changes to the repository?"
            quizOptions={["git push", "git save", "git commit", "git record"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/repos" element={<GenericLesson
            title="☁️ Repositories" subject="GitHub" path="/github/repos"
            difficulty="Beginner"
            prevPath="/github/basics" prevLabel="Git Basics"
            nextPath="/github/collab" nextLabel="Collaboration"
            content="A repository (repo) is your project's home — it stores all code and its entire revision history. GitHub hosts remote repos so your team can collaborate from anywhere in the world."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🏠', title: 'Local Repo', desc: 'Lives on your machine. You commit here first.' },
                { icon: '☁️', title: 'Remote Repo', desc: 'Hosted on GitHub. Team push/pull from here.' },
                { icon: '🔃', title: 'Clone', desc: 'git clone downloads a remote repo to your machine.' },
            ]}
            codeExamples={[
                { label: 'Remote Setup', language: 'bash', code: `# Link local to remote\ngit remote add origin https://github.com/user/repo.git\n\n# Push to GitHub for first time\ngit push -u origin main\n\n# Pull latest changes\ngit pull origin main` },
                { label: 'Clone', language: 'bash', code: `# Clone a repository\ngit clone https://github.com/user/repo.git\n\n# Clone into a specific folder\ngit clone https://github.com/user/repo.git my-folder\n\n# Check remote info\ngit remote -v` },
            ]}
            quizQuestion="How do you link a local repository to a remote one?"
            quizOptions={["git link remote", "git remote add origin", "git sync", "git connect"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/github/collab" element={<GenericLesson
            title="🤝 Collaboration" subject="GitHub" path="/github/collab"
            difficulty="Beginner"
            prevPath="/github/repos" prevLabel="Repositories"
            nextPath="/github/branches" nextLabel="Branches & Merging"
            content="GitHub makes team collaboration seamless. You fork repos, work on feature branches, then open Pull Requests for code review before merging into the main branch."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🍴', title: 'Fork', desc: "Copy someone's repo to your account to experiment freely." },
                { icon: '🔁', title: 'Pull Request', desc: 'Propose your changes. Team reviews before merging.' },
                { icon: '🔀', title: 'Merge', desc: 'Git integrates branches by combining their histories.' },
            ]}
            codeExamples={[
                { label: 'PR Workflow', language: 'bash', code: `# 1. Create feature branch\ngit checkout -b feature/dark-mode\n\n# 2. Make changes, stage, commit\ngit add .\ngit commit -m "Add dark mode toggle"\n\n# 3. Push to GitHub\ngit push origin feature/dark-mode\n\n# 4. Open Pull Request on GitHub\n# 5. After review, merge to main` },
            ]}
            quizQuestion="What do you create to propose changes to a repository?"
            quizOptions={["Push Request", "Commit Suggestion", "Pull Request", "Merge Proposal"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/branches" element={<GenericLesson
            title="🌿 Branches & Merging" subject="GitHub" path="/github/branches"
            difficulty="Intermediate"
            prevPath="/github/collab" prevLabel="Collaboration"
            nextPath="/github/pages" nextLabel="GitHub Pages"
            content="Branches allow you to develop features, fix bugs, or experiment safely in parallel without affecting the main codebase. Once work is complete, you merge the branch back into main."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🌿', title: 'git branch', desc: 'Create a new line of development.' },
                { icon: '🔀', title: 'git merge', desc: 'Integrate changes from one branch into another.' },
                { icon: '🚨', title: 'Merge Conflict', desc: 'Occurs when two people edit the same line. Git asks you to choose.' },
            ]}
            codeExamples={[
                { label: 'Branching Basics', language: 'bash', code: `# Create branch\ngit branch feature-xyz\n\n# Switch to branch\ngit checkout feature-xyz\n\n# Combined shortcut\ngit checkout -b feature-abc\n\n# Merge branch into current\ngit merge feature-xyz\n\n# Delete branch\ngit branch -d feature-xyz` },
            ]}
            quizQuestion="What command creates and switches to a new branch?"
            quizOptions={["git switch new", "git branch -s", "git checkout -b", "git move -b"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/pages" element={<GenericLesson
            title="🚀 GitHub Pages" subject="GitHub" path="/github/pages"
            difficulty="Intermediate"
            prevPath="/github/branches" prevLabel="Branches & Merging"
            nextPath="/github/actions" nextLabel="GitHub Actions"
            content="GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub and publishes a website. Perfect for portfolios and documentation."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🌍', title: 'Hosting', desc: 'Free hosting for static sites under yourname.github.io/repo.' },
                { icon: '⚙️', title: 'gh-pages branch', desc: 'Common branch used for deployment builds.' },
                { icon: '🛠️', title: 'Custom Domains', desc: 'Link your own .com domain to your GitHub Pages site.' },
            ]}
            codeExamples={[
                { label: 'Deploy to GH Pages', language: 'bash', code: `# Install deploy package (if using React)\nnpm install gh-pages --save-dev\n\n# Add to package.json scripts\n"deploy": "gh-pages -d build"\n\n# Run deploy\nnpm run deploy` },
            ]}
            quizQuestion="Can you host PHP or Node.js backends on GitHub Pages?"
            quizOptions={["Yes, fully supported", "Only with Actions", "No, static files only", "Only with a paid plan"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/actions" element={<GenericLesson
            title="🤖 GitHub Actions" subject="GitHub" path="/github/actions"
            difficulty="Advanced"
            prevPath="/github/pages" prevLabel="GitHub Pages"
            nextPath="/github/security" nextLabel="Security Best Practices"
            content="GitHub Actions allows you to automate your software development workflow. You can build, test, and deploy your code right from GitHub. It uses YAML files to define automated jobs triggered by events like push or PR."
            editorLanguage="yaml"
            conceptCards={[
                { icon: '⛓️', title: 'Workflow', desc: 'An automated process consisting of one or more jobs.' },
                { icon: '⚡', title: 'Event', desc: 'Triggers a workflow: push, pull_request, schedule.' },
                { icon: '🏃', title: 'Runner', desc: 'A server that runs your workflow jobs on Linux, Windows, or Mac.' },
            ]}
            codeExamples={[
                { label: 'Basic CI Workflow', language: 'yaml', code: `name: Node.js CI\n\non: [push, pull_request]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Use Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '18'\n      - run: npm install\n      - run: npm test\n      - run: npm run build` },
            ]}
            quizQuestion="What format is used to write GitHub Action workflows?"
            quizOptions={["JSON", "XML", "YAML", "Markdown"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/github/security" element={<GenericLesson
            title="🔒 Security & Best Practices" subject="GitHub" path="/github/security"
            difficulty="Advanced"
            prevPath="/github/actions" prevLabel="GitHub Actions"
            content="Security on GitHub is about protecting your code and secrets. Never commit API keys or passwords. Use .gitignore to exclude sensitive files. GitHub will alert you about vulnerable dependencies via Dependabot."
            editorLanguage="bash"
            conceptCards={[
                { icon: '🙈', title: '.gitignore', desc: 'List of files/folders Git should ignore (node_modules, .env).' },
                { icon: '🤫', title: 'Secrets', desc: 'Store API keys in Repository Secrets, never in code.' },
                { icon: '🛡️', title: 'Dependabot', desc: 'Automatically checks for security vulnerabilities in your packages.' },
            ]}
            codeExamples={[
                { label: '.gitignore Example', language: 'bash', code: `# Dependencies\nnode_modules/\n\n# Env variables\n.env\n.env.local\n\n# IDE files\n.vscode/\n.idea/\n\n# Build output\n/dist\n/build` },
            ]}
            quizQuestion="Where should you store sensitive API keys in GitHub?"
            quizOptions={["In package.json", "In a comment", "In Repository Secrets", "In the README"]}
            quizCorrectAnswer={2}
        />} />
    </>
);
