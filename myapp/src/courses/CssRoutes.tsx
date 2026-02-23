import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const cssRoutes = (
    <>
        <Route path="/css/selectors" element={<GenericLesson
            title="🎯 Selectors" subject="CSS" path="/css/selectors"
            difficulty="Beginner"
            nextPath="/css/boxmodel" nextLabel="Box Model"
            content="CSS selectors tell the browser which elements to style. From simple tag selectors to complex pseudo-classes — mastering selectors is how you write powerful, targeted CSS without adding unnecessary classes to your HTML."
            editorLanguage="css"
            conceptCards={[
                { icon: '🏷️', title: 'Tag selector', desc: 'Targets all elements of a type: p, h1, div.' },
                { icon: '#', title: 'ID selector', desc: '#id — unique per page, highest specificity.' },
                { icon: '.', title: 'Class selector', desc: '.class — reusable across many elements.' },
            ]}
            codeExamples={[
                { label: 'Selector Types', language: 'css', code: '/* Tag */\np { color: gray; }\n\n/* Class */\n.card { border-radius: 12px; }\n\n/* ID */\n#hero { background: #000; }\n\n/* Attribute */\ninput[type="email"] { border-color: blue; }\n\n/* Pseudo-class */\na:hover { text-decoration: underline; }\nli:nth-child(2) { font-weight: bold; }\n\n/* Pseudo-element */\np::first-line { font-weight: bold; }\ndiv::before { content: "→ "; }\n\n/* Combinator */\n.card > h2 { margin-top: 0; }   /* direct child */\nnav a + a   { margin-left: 16px; } /* adjacent sibling */' },
            ]}
            quizQuestion="Which selector has the highest specificity?"
            quizOptions={["tag selector", "class selector", "ID selector (#id)", "* (all elements)"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/css/boxmodel" element={<GenericLesson
            title="📦 Box Model" subject="CSS" path="/css/boxmodel"
            difficulty="Beginner"
            prevPath="/css/selectors" prevLabel="Selectors"
            nextPath="/css/colors" nextLabel="Colors & Gradients"
            content="Every HTML element is a box. The box model describes how space is calculated: content → padding → border → margin. Understanding it is essential for controlling spacing and layout."
            editorLanguage="css"
            conceptCards={[
                { icon: '📄', title: 'Content', desc: 'The actual text or image inside the element.' },
                { icon: '🔲', title: 'Padding', desc: 'Space between content and border. Adds to background.' },
                { icon: '🔳', title: 'Margin', desc: 'Space outside the border. Pushes other elements away.' },
            ]}
            codeExamples={[
                { label: 'Box Model', language: 'css', code: '/* Always use border-box! */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;        /* content width */\n  padding: 24px;       /* inner space */\n  border: 2px solid #ccc;\n  margin: 16px auto;   /* auto centers horizontally */\n}\n\n/* Shorthand: top right bottom left */\n.element {\n  padding: 8px 16px 8px 16px;\n  margin:  16px 0;      /* top/bottom only */\n}' },
            ]}
            quizQuestion="What does 'margin' control?"
            quizOptions={["Space inside the border", "Space outside the border", "Border thickness", "Content size"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/css/colors" element={<GenericLesson
            title="🎨 Colors & Gradients" subject="CSS" path="/css/colors"
            difficulty="Beginner"
            prevPath="/css/boxmodel" prevLabel="Box Model"
            nextPath="/css/typography" nextLabel="Typography"
            content="CSS supports hex, RGB, HSL, and named colors. HSL is most powerful for creating harmonious palettes. Linear and radial gradients let you build stunning backgrounds without images."
            editorLanguage="css"
            conceptCards={[
                { icon: '#️⃣', title: 'Hex', desc: '#RRGGBB — most common. Add 2 chars for opacity (#RRGGBBAA).' },
                { icon: '🔵', title: 'HSL', desc: 'Hue 0-360, Saturation 0-100%, Lightness 0-100%. Most flexible.' },
                { icon: '🌈', title: 'Gradient', desc: 'Smooth transition between colors — linear or radial.' },
            ]}
            codeExamples={[
                { label: 'Color Formats', language: 'css', code: '.element {\n  color: #ff6b6b;           /* hex */\n  color: rgb(255, 107, 107);\n  color: hsl(0, 100%, 71%);  /* easiest to tweak */\n  color: rgba(0, 0, 0, 0.5); /* semi-transparent */\n}' },
                { label: 'Gradients', language: 'css', code: '.hero {\n  /* Linear gradient */\n  background: linear-gradient(135deg, #667eea, #764ba2);\n}\n\n.card {\n  /* Radial gradient */\n  background: radial-gradient(circle at top left, #f093fb, #f5576c);\n}\n\n.text {\n  /* Gradient text */\n  background: linear-gradient(90deg, #00c9ff, #92fe9d);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}' },
            ]}
            quizQuestion="Which color format uses Hue, Saturation, and Lightness?"
            quizOptions={["RGB", "HEX", "HSL", "RGBA"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/css/typography" element={<GenericLesson
            title="✍️ Typography" subject="CSS" path="/css/typography"
            difficulty="Beginner"
            prevPath="/css/colors" prevLabel="Colors & Gradients"
            nextPath="/css/positioning" nextLabel="Positioning"
            content="Typography sets the tone of your entire design. CSS gives you full control over font families, sizes (using fluid clamp()), weights, line heights, and spacing. Using Google Fonts takes seconds and instantly elevates your UI."
            editorLanguage="css"
            conceptCards={[
                { icon: '🔤', title: 'font-family', desc: 'Stack multiple fonts as fallbacks.' },
                { icon: '📏', title: 'clamp()', desc: 'Fluid font sizes: clamp(min, preferred, max).' },
                { icon: '↕️', title: 'line-height', desc: '1.5–1.7 is ideal for body text readability.' },
            ]}
            codeExamples={[
                { label: 'Typography System', language: 'css', code: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap");\n\n:root {\n  --font-sans: "Inter", system-ui, sans-serif;\n  --text-xs:   0.75rem;\n  --text-sm:   0.875rem;\n  --text-base: 1rem;\n  --text-xl:   1.25rem;\n  --text-3xl:  clamp(1.75rem, 5vw, 3rem);\n}\n\nbody {\n  font-family: var(--font-sans);\n  font-size: var(--text-base);\n  line-height: 1.6;\n  letter-spacing: -0.01em;\n}\n\nh1 { font-size: var(--text-3xl); font-weight: 900; }' },
            ]}
            quizQuestion="What CSS function creates fluid font sizes that scale with viewport?"
            quizOptions={["calc()", "clamp()", "min()", "max()"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/css/positioning" element={<GenericLesson
            title="📌 Positioning" subject="CSS" path="/css/positioning"
            difficulty="Intermediate"
            prevPath="/css/typography" prevLabel="Typography"
            nextPath="/css/flexbox" nextLabel="Flexbox"
            content="CSS has 5 position values. Static is the default flow. Relative offsets from default position. Absolute removes from flow, positioned relative to nearest non-static ancestor. Fixed stays on screen. Sticky is a hybrid."
            editorLanguage="css"
            conceptCards={[
                { icon: '📌', title: 'absolute', desc: 'Removed from flow. Positioned relative to nearest positioned ancestor.' },
                { icon: '📺', title: 'fixed', desc: 'Stays in viewport — fixed headers, modals, toasts.' },
                { icon: '🩹', title: 'sticky', desc: 'Scrolls normally, then sticks at a threshold.' },
            ]}
            codeExamples={[
                { label: 'Position Examples', language: 'css', code: '/* Fixed header */\n.header {\n  position: fixed;\n  top: 0; left: 0; right: 0;\n  z-index: 100;\n}\n\n/* Badge on a card */\n.card     { position: relative; }\n.badge    { position: absolute; top: 12px; right: 12px; }\n\n/* Sticky sidebar */\n.sidebar {\n  position: sticky;\n  top: 80px;  /* sticks 80px from top */\n}\n\n/* Center with absolute + transform */\n.modal {\n  position: absolute;\n  top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n}' },
            ]}
            quizQuestion="Which position value keeps an element fixed to the screen while scrolling?"
            quizOptions={["absolute", "relative", "sticky", "fixed"]}
            quizCorrectAnswer={3}
        />} />

        <Route path="/css/flexbox" element={<GenericLesson
            title="📦 Flexbox" subject="CSS" path="/css/flexbox"
            difficulty="Intermediate"
            prevPath="/css/positioning" prevLabel="Positioning"
            nextPath="/css/grid" nextLabel="Grid"
            content="Flexbox is a one-dimensional layout model. Use it to align and distribute items in a row or column — it handles spacing automatically and adapts to dynamic content sizes."
            editorLanguage="css"
            conceptCards={[
                { icon: '↔️', title: 'flex-direction', desc: 'Row (default) or column — sets the main axis.' },
                { icon: '⚖️', title: 'justify-content', desc: 'Aligns items along the main axis.' },
                { icon: '📏', title: 'align-items', desc: 'Aligns items along the cross axis.' },
            ]}
            codeExamples={[
                { label: 'Center Anything', language: 'css', code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.child {\n  flex: 1;\n  padding: 16px;\n}` },
                { label: 'Nav Bar', language: 'css', code: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n  gap: 16px;\n}\n\n.nav-links {\n  display: flex;\n  gap: 24px;\n  list-style: none;\n}` },
            ]}
            quizQuestion="Which property defines the main axis in Flexbox?"
            quizOptions={["flex-direction", "justify-content", "align-items", "display"]}
            quizCorrectAnswer={0}
        />} />

        <Route path="/css/grid" element={<GenericLesson
            title="🗂️ Grid" subject="CSS" path="/css/grid"
            difficulty="Intermediate"
            prevPath="/css/flexbox" prevLabel="Flexbox"
            nextPath="/css/animations" nextLabel="Animations"
            content="CSS Grid is a two-dimensional layout system. It lets you control rows AND columns simultaneously — perfect for complex page layouts and dashboard UIs."
            editorLanguage="css"
            conceptCards={[
                { icon: '📐', title: 'grid-template-columns', desc: 'Define column sizes: fr, px, %, auto, repeat().' },
                { icon: '↕️', title: 'grid-template-rows', desc: 'Define row sizes the same way.' },
                { icon: '〰️', title: 'gap', desc: 'Space between both rows and columns.' },
            ]}
            codeExamples={[
                { label: 'Card Grid', language: 'css', code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n\n.three-col {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 16px;\n}` },
            ]}
            quizQuestion="Which property sets the gap between rows and columns?"
            quizOptions={["margin", "padding", "gap", "spacing"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/css/animations" element={<GenericLesson
            title="✨ Animations" subject="CSS" path="/css/animations"
            difficulty="Advanced"
            prevPath="/css/grid" prevLabel="Grid"
            nextPath="/css/responsive" nextLabel="Responsive Design"
            content="CSS animations let you define transitions between styles at different keyframe points. Use @keyframes to describe states, then apply the animation property to any element."
            editorLanguage="css"
            conceptCards={[
                { icon: '🎬', title: '@keyframes', desc: 'Defines animation steps from 0% to 100%.' },
                { icon: '⏱️', title: 'animation-duration', desc: 'How long one cycle of the animation takes.' },
                { icon: '🔄', title: 'animation-iteration-count', desc: '"infinite" loops forever.' },
            ]}
            codeExamples={[
                { label: 'Fade In', language: 'css', code: `@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.card {\n  animation: fadeIn 0.4s ease forwards;\n}` },
                { label: 'Spinner', language: 'css', code: `@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.loader {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #ccc;\n  border-top-color: #000;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}` },
            ]}
            quizQuestion="Which keyword defines an animation sequence?"
            quizOptions={["@keyframes", "@animate", "@sequence", "@motion"]}
            quizCorrectAnswer={0}
        />} />

        <Route path="/css/responsive" element={<GenericLesson
            title="📱 Responsive Design" subject="CSS" path="/css/responsive"
            difficulty="Advanced"
            prevPath="/css/animations" prevLabel="Animations"
            content="Responsive design makes your site look great on any screen. Media queries apply different CSS at different viewport widths. Mobile-first means starting with mobile styles and adding larger-screen overrides."
            editorLanguage="css"
            conceptCards={[
                { icon: '📱', title: 'Mobile-first', desc: 'Write base styles for mobile, use min-width for larger screens.' },
                { icon: '🖥️', title: '@media', desc: 'Apply CSS rules only when certain conditions are true.' },
                { icon: '🔢', title: 'Breakpoints', desc: 'Common: 480px phone, 768px tablet, 1024px desktop.' },
            ]}
            codeExamples={[
                { label: 'Media Queries', language: 'css', code: '/* Mobile-first: base styles for all screens */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;  /* 1 column on mobile */\n  gap: 16px;\n}\n\n/* Tablet (768px+) */\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Desktop (1024px+) */\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 24px;\n  }\n}\n\n/* Hide on mobile */\n.desktop-only { display: none; }\n@media (min-width: 768px) {\n  .desktop-only { display: block; }\n}' },
            ]}
            quizQuestion="What does mobile-first CSS mean?"
            quizOptions={["Build for desktop, then shrink", "Write base styles for mobile, add overrides for larger screens", "Only support mobile", "Use @media max-width queries"]}
            quizCorrectAnswer={1}
        />} />
    </>
);
