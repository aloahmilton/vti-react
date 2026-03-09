import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const htmlRoutes = (
    <>
        <Route path="/html/structure" element={<GenericLesson
            title="🏗️ Structure" subject="HTML" path="/html/structure"
            difficulty="Beginner"
            nextPath="/html/text" nextLabel="Text & Headings"
            content="HTML (HyperText Markup Language) is the skeleton of every website. It uses tags to define elements like headings, paragraphs, and links. A proper structure ensures your content is readable by both humans and machines."
            editorLanguage="html"
            conceptCards={[
                { icon: '🏷️', title: 'Tags', desc: 'Elements like <p> and <h1> that wrap content.' },
                { icon: '📑', title: 'Attributes', desc: 'Extra info like href or src inside a tag.' },
                { icon: '🌳', title: 'DOM Tree', desc: 'How HTML tags nest inside each other like branches.' },
            ]}
            codeExamples={[
                { label: 'Basic Document', language: 'html', code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>Welcome to coding!</p>\n</body>\n</html>' },
            ]}
            quizQuestion="Which tag is the root element of an HTML page?"
            quizOptions={["<body>", "<head>", "<html>", "<root>"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/html/text" element={<GenericLesson
            title="📝 Text & Headings" subject="HTML" path="/html/text"
            difficulty="Beginner"
            prevPath="/html/structure" prevLabel="Structure"
            nextPath="/html/links" nextLabel="Links & Images"
            content="HTML provides tags for every type of text content. Headings h1-h6 create hierarchy. Paragraphs, bold, italic, blockquotes, code, superscript and subscript all have dedicated semantic tags."
            editorLanguage="html"
            conceptCards={[
                { icon: '🔤', title: 'Headings', desc: 'h1 to h6 create hierarchy. Use only one h1 per page.' },
                { icon: '📜', title: 'Paragraph', desc: '<p> wraps blocks of text with margin above and below.' },
                { icon: '💪', title: 'Emphasis', desc: '<strong> for important text, <em> for stress emphasis.' },
            ]}
            codeExamples={[
                { label: 'Text Tags', language: 'html', code: '<h1>Main Title (one per page)</h1>\n<h2>Section Heading</h2>\n<h3>Sub-section</h3>\n\n<p>A normal paragraph of text.</p>\n\n<p>This word is <strong>bold</strong> and this is <em>italic</em>.</p>\n\n<blockquote>A famous quote goes here.</blockquote>\n\n<p>Use <code>console.log()</code> to debug.</p>\n\n<p>H<sub>2</sub>O and E=mc<sup>2</sup></p>' },
            ]}
            quizQuestion="How many h1 tags should a page have?"
            quizOptions={["As many as needed", "At least 3", "Only one", "None required"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/html/links" element={<GenericLesson
            title="🔗 Links & Images" subject="HTML" path="/html/links"
            difficulty="Beginner"
            prevPath="/html/text" prevLabel="Text & Headings"
            nextPath="/html/lists" nextLabel="Lists"
            content="Links and images are the backbone of the web. The anchor tag creates hyperlinks; the img tag embeds images. Both use attributes to control their behaviour and accessibility."
            editorLanguage="html"
            conceptCards={[
                { icon: '🔗', title: '<a href>', desc: 'Creates clickable links. Use target=_blank to open in new tab.' },
                { icon: '🖼️', title: '<img>', desc: 'Embed images. Always include alt text for accessibility.' },
                { icon: '📐', title: 'Width/Height', desc: 'Set on img to prevent layout shift while loading.' },
            ]}
            codeExamples={[
                { label: 'Links', language: 'html', code: '<!-- External link (opens in new tab) -->\n<a href="https://google.com" target="_blank" rel="noopener">Google</a>\n\n<!-- Internal link -->\n<a href="/about">About Page</a>\n\n<!-- Email link -->\n<a href="mailto:aloahmilton9@gmail.com">Email Us</a>\n\n<!-- Download link -->\n<a href="/resume.pdf" download>Download Resume</a>' },
                { label: 'Images', language: 'html', code: '<!-- Basic image -->\n<img src="/images/hero.jpg" alt="Hero banner" width="1200" height="600">\n\n<!-- Responsive image -->\n<picture>\n  <source media="(max-width: 768px)" srcset="/img-mobile.jpg">\n  <source media="(min-width: 769px)" srcset="/img-desktop.jpg">\n  <img src="/img-desktop.jpg" alt="Responsive image">\n</picture>\n\n<!-- Image as link -->\n<a href="/home">\n  <img src="/logo.svg" alt="Go to homepage">\n</a>' },
            ]}
            quizQuestion="What attribute makes an image accessible?"
            quizOptions={["title", "alt", "src", "class"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/html/lists" element={<GenericLesson
            title="📋 Lists" subject="HTML" path="/html/lists"
            difficulty="Beginner"
            prevPath="/html/links" prevLabel="Links & Images"
            nextPath="/html/tables" nextLabel="Tables"
            content="HTML has three list types: unordered (ul), ordered (ol), and description lists (dl). Lists are also used to build navigation menus — most navbars are styled ul elements under the hood."
            editorLanguage="html"
            conceptCards={[
                { icon: '•', title: '<ul>', desc: 'Unordered (bulleted) list. Items have no sequence.' },
                { icon: '1.', title: '<ol>', desc: 'Ordered (numbered) list. Good for steps/rankings.' },
                { icon: '📖', title: '<dl>', desc: 'Description list with terms and definitions.' },
            ]}
            codeExamples={[
                { label: 'All List Types', language: 'html', code: '<!-- Unordered list -->\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Oranges</li>\n</ul>\n\n<!-- Ordered list -->\n<ol>\n  <li>Create your GitHub repo</li>\n  <li>Clone it locally</li>\n  <li>Write your code</li>\n  <li>Push and deploy</li>\n</ol>\n\n<!-- Description list -->\n<dl>\n  <dt>HTML</dt>\n  <dd>Structure of web pages</dd>\n  <dt>CSS</dt>\n  <dd>Style and layout</dd>\n</dl>' },
                { label: 'Nav Menu (ul)', language: 'html', code: '<nav>\n  <ul class="nav-links">\n    <li><a href="/">Home</a></li>\n    <li><a href="/courses">Courses</a></li>\n    <li><a href="/about">About</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>' },
            ]}
            quizQuestion="Which tag creates an ordered (numbered) list?"
            quizOptions={["<ul>", "<list>", "<ol>", "<dl>"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/html/tables" element={<GenericLesson
            title="📊 Tables" subject="HTML" path="/html/tables"
            difficulty="Intermediate"
            prevPath="/html/lists" prevLabel="Lists"
            nextPath="/html/forms" nextLabel="Forms"
            content="Tables display data in rows and columns. Use them only for tabular data — not for layout. A proper table has a thead, tbody, and optional tfoot for semantic clarity and accessibility."
            editorLanguage="html"
            conceptCards={[
                { icon: '📊', title: '<table>', desc: 'The wrapper. Contains thead, tbody, tfoot.' },
                { icon: '📂', title: '<th>', desc: 'Table header cell. Bold, centered, and screen-reader friendly.' },
                { icon: '🔗', title: 'colspan/rowspan', desc: 'Merge cells across columns or rows.' },
            ]}
            codeExamples={[
                { label: 'Data Table', language: 'html', code: '<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Progress</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Aloah Milton</td>\n      <td>Instructor</td>\n      <td>100%</td>\n    </tr>\n    <tr>\n      <td>Student One</td>\n      <td>Student</td>\n      <td>75%</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="3">Total: 2 users</td>\n    </tr>\n  </tfoot>\n</table>' },
            ]}
            quizQuestion="What tag creates a table header cell?"
            quizOptions={["<td>", "<th>", "<tr>", "<thead>"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/html/forms" element={<GenericLesson
            title="📋 Forms" subject="HTML" path="/html/forms"
            difficulty="Intermediate"
            prevPath="/html/tables" prevLabel="Tables"
            nextPath="/html/semantic" nextLabel="Semantic HTML"
            content="Forms are how users send data to your server. From basic inputs like name and email to complex select menus and file uploads — forms are the lifeblood of interactive apps."
            editorLanguage="html"
            conceptCards={[
                { icon: '📧', title: 'input', desc: 'Many types: text, email, password, range, checkbox, radio.' },
                { icon: '🏷️', title: '<label>', desc: 'Connects a text label to an input. Essential for accessibility.' },
                { icon: '🔘', title: 'button', desc: 'Trigger form submission to the server.' },
            ]}
            codeExamples={[
                { label: 'Contact Form', language: 'html', code: `<form action="/submit" method="POST">\n  <fieldset>\n    <legend>Contact Us</legend>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name" required />\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required />\n    <label for="message">Message:</label>\n    <textarea id="message" name="message" rows="4"></textarea>\n    <button type="submit">Send</button>\n  </fieldset>\n</form>` },
            ]}
            quizQuestion="Which tag groups related form elements?"
            quizOptions={["<fieldset>", "<group>", "<section>", "<div>"]}
            quizCorrectAnswer={0}
        />} />

        <Route path="/html/semantic" element={<GenericLesson
            title="🏷️ Semantic HTML" subject="HTML" path="/html/semantic"
            difficulty="Intermediate"
            prevPath="/html/forms" prevLabel="HTML Forms"
            content="Semantic tags describe meaning, not just appearance. They improve SEO and accessibility. Screen readers and search engines understand <article> and <nav> far better than generic <div>s."
            editorLanguage="html"
            conceptCards={[
                { icon: '📰', title: '<article>', desc: 'Self-contained content like a blog post or news item.' },
                { icon: '🧭', title: '<nav>', desc: 'Navigation links section of the page.' },
                { icon: '📦', title: '<section>', desc: 'Thematic grouping with a heading.' },
            ]}
            codeExamples={[
                { label: 'Semantic Layout', language: 'html', code: `<body>\n  <header>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>Blog Post Title</h2>\n      <p>Article content goes here...</p>\n    </article>\n    <aside>\n      <h3>Related Links</h3>\n    </aside>\n  </main>\n  <footer>\n    <p>Footer content</p>\n  </footer>\n</body>` },
            ]}
            quizQuestion="Which tag is most semantic for the main navigation?"
            quizOptions={["<div id='nav'>", "<ul>", "<nav>", "<menu>"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/html/meta" element={<GenericLesson
            title="🔍 Meta & SEO" subject="HTML" path="/html/meta"
            difficulty="Advanced"
            prevPath="/html/semantic" prevLabel="Semantic HTML"
            nextPath="/html/accessibility" nextLabel="Accessibility"
            content="Meta tags live in <head> and give browsers and search engines info about your page. The right meta tags improve your SEO ranking, control social media previews (Open Graph), and ensure proper character encoding and viewport scaling."
            editorLanguage="html"
            conceptCards={[
                { icon: '📝', title: '<title>', desc: 'Page title shown in browser tab and Google results.' },
                { icon: '📋', title: 'description', desc: 'Meta description shown under your link in search results.' },
                { icon: '📱', title: 'viewport', desc: 'Makes your site responsive on mobile devices.' },
            ]}
            codeExamples={[
                { label: 'Full Head Meta', language: 'html', code: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n  <title>Aloah Milton — Learn Web Dev</title>\n  <meta name="description" content="Interactive coding lessons for HTML, CSS, JS and React.">\n  <meta name="author" content="Aloah Milton">\n\n  <!-- Open Graph (social media previews) -->\n  <meta property="og:title" content="Aloah Milton — Learn Web Dev">\n  <meta property="og:description" content="Interactive coding lessons for beginners.">\n  <meta property="og:image" content="https://yourdomain.com/og-image.jpg">\n  <meta property="og:url" content="https://yourdomain.com">\n\n  <!-- Twitter Card -->\n  <meta name="twitter:card" content="summary_large_image">\n</head>' },
            ]}
            quizQuestion="Which meta tag makes a site work properly on mobile?"
            quizOptions={["charset", "description", "viewport", "author"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/html/accessibility" element={<GenericLesson
            title="♿ Accessibility" subject="HTML" path="/html/accessibility"
            difficulty="Advanced"
            prevPath="/html/meta" prevLabel="Meta & SEO"
            content="Accessible HTML works for everyone including screen reader users, keyboard-only users, and people with visual or motor disabilities. Most accessibility is free if you use semantic HTML correctly."
            editorLanguage="html"
            conceptCards={[
                { icon: '🏷️', title: 'ARIA roles', desc: 'aria-label, aria-describedby add context for screen readers.' },
                { icon: '⌨️', title: 'Keyboard nav', desc: 'All interactive elements must be reachable by Tab key.' },
                { icon: '🎨', title: 'Contrast', desc: 'Text must have 4.5:1 contrast ratio minimum (WCAG AA).' },
            ]}
            codeExamples={[
                { label: 'Accessible Patterns', language: 'html', code: '<!-- Skip to main content (keyboard users) -->\n<a href="#main" class="skip-link">Skip to main content</a>\n\n<!-- Accessible button -->\n<button aria-label="Close modal" onclick="closeModal()">\n  <span aria-hidden="true">×</span>\n</button>\n\n<!-- Accessible form -->\n<label for="email">Email address *</label>\n<input\n  type="email"\n  id="email"\n  name="email"\n  required\n  aria-required="true"\n  aria-describedby="email-hint"\n>\n<small id="email-hint">We will never share your email.</small>\n\n<!-- Image with empty alt (decorative) -->\n<img src="/decoration.svg" alt="">\n\n<!-- Landmark roles -->\n<main id="main" role="main">\n  <nav aria-label="Primary navigation">...</nav>\n</main>' },
            ]}
            quizQuestion="What attribute provides screen reader text for an icon button?"
            quizOptions={["title", "placeholder", "aria-label", "alt"]}
            quizCorrectAnswer={2}
        />} />
    </>
);
