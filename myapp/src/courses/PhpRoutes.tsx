import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const PhpRoutes = () => (
    <>
        <Route path="/php/basics" element={<GenericLesson
            title="🐘 PHP Basics" subject="PHP" path="/php/basics"
            difficulty="Beginner"
            nextPath="/php/variables" nextLabel="Variables & Types"
            content="PHP (Hypertext Preprocessor) is a server-side scripting language that powers over 77% of the web including WordPress. PHP runs on the server and outputs HTML to the browser. Every PHP file can mix PHP code with HTML."
            editorLanguage="php"
            conceptCards={[
                { icon: '🐘', title: 'Server-side', desc: 'PHP runs on your server — users never see the code.' },
                { icon: '<?php', title: 'PHP Tags', desc: 'Code goes inside <?php ... ?> blocks.' },
                { icon: '🖨️', title: 'echo', desc: 'echo "text"; outputs content to the browser.' },
            ]}
            codeExamples={[
                { label: 'First PHP Page', language: 'php', code: '<?php\n// This is a comment\n\n// Output to browser\necho "Hello, World!";\n\n// Variables start with $\n$name = "Aloah Milton";\n$year = 2026;\n\n// String concatenation uses .\necho "Welcome, " . $name . "!";\n\n// Or use double-quoted strings (interpolation)\necho "The year is $year";\n\n// PHP info\nphpinfo();\n?>' },
                { label: 'PHP in HTML', language: 'php', code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>PHP Page</title>\n</head>\n<body>\n\n<?php\n  $title = "My PHP Site";\n  $courses = ["HTML", "CSS", "PHP", "MySQL"];\n?>\n\n<h1><?= $title ?></h1>\n\n<ul>\n  <?php foreach ($courses as $course): ?>\n    <li><?= $course ?></li>\n  <?php endforeach; ?>\n</ul>\n\n</body>\n</html>' },
            ]}
            quizQuestion="Where does PHP code run?"
            quizOptions={["In the browser", "On the server", "In a database", "In JavaScript"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/php/variables" element={<GenericLesson
            title="📦 Variables & Types" subject="PHP" path="/php/variables"
            difficulty="Beginner"
            prevPath="/php/basics" prevLabel="PHP Basics"
            nextPath="/php/arrays" nextLabel="PHP Arrays"
            content="PHP is loosely typed — variables change type automatically. All variables start with $. PHP has 8 types: string, integer, float, boolean, array, object, null, and resource. Type juggling can cause tricky bugs — use strict_types to prevent them."
            editorLanguage="php"
            conceptCards={[
                { icon: '$', title: 'Variables', desc: 'Start with $. No type declaration needed.' },
                { icon: '🔀', title: 'Type juggling', desc: 'PHP auto-converts: "5" + 3 = 8. Use === for strict comparison.' },
                { icon: '📝', title: 'Strings', desc: 'Double-quoted allow variables. Single-quoted are literal.' },
            ]}
            codeExamples={[
                { label: 'Data Types', language: 'php', code: '<?php\ndeclare(strict_types=1);\n\n// String\n$name = "Aloah";\n$greeting = "Hello, $name!";  // interpolation\n$literal = \'Hello $name\';     // no interpolation\n\n// Integer & Float\n$age   = 28;\n$price = 9.99;\n\n// Boolean\n$active = true;\n$admin  = false;\n\n// Null\n$data = null;\n\n// Type checking\nvar_dump($name);   // string(5) "Aloah"\ngettype($price);   // "double"\n\n// Casting\n$str_num = "42";\n$num = (int) $str_num;  // 42\n\n// Constants\ndefine("APP_NAME", "Aloah Milton Platform");\nconst VERSION = "1.0.0";' },
            ]}
            quizQuestion="How do PHP variables start?"
            quizOptions={["@", "$", "#", "var"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/php/arrays" element={<GenericLesson
            title="🗃️ Arrays" subject="PHP" path="/php/arrays"
            difficulty="Beginner"
            prevPath="/php/variables" prevLabel="Variables & Types"
            nextPath="/php/functions" nextLabel="Functions"
            content="PHP arrays are extremely flexible — they can be indexed, associative (like JS objects), or multidimensional. PHP provides dozens of array functions: array_map, array_filter, array_push, sort, and more."
            editorLanguage="php"
            conceptCards={[
                { icon: '🔢', title: 'Indexed array', desc: 'Numeric keys 0, 1, 2... like JS arrays.' },
                { icon: '🔑', title: 'Associative array', desc: 'String keys — like a JS object/dictionary.' },
                { icon: '🏗️', title: 'Multidimensional', desc: 'Arrays of arrays — perfect for table data.' },
            ]}
            codeExamples={[
                { label: 'Array Types', language: 'php', code: '<?php\n// Indexed array\n$fruits = ["apple", "banana", "orange"];\necho $fruits[0]; // apple\n\n// Associative array\n$user = [\n  "name"  => "Aloah Milton",\n  "email" => "aloahmilton9@gmail.com",\n  "role"  => "instructor"\n];\necho $user["name"];\n\n// Multidimensional\n$students = [\n  ["name" => "Alice", "score" => 95],\n  ["name" => "Bob",   "score" => 82],\n];\necho $students[0]["name"]; // Alice\n\n// Loop\nforeach ($user as $key => $value) {\n  echo "$key: $value\\n";\n}' },
                { label: 'Array Functions', language: 'php', code: '<?php\n$scores = [85, 42, 90, 67, 55];\n\n// Sort\nsort($scores);           // ascending\nrsort($scores);          // descending\n\n// Map & Filter\n$doubled  = array_map(fn($n) => $n * 2, $scores);\n$passing  = array_filter($scores, fn($n) => $n >= 60);\n\n// Search\nin_array(90, $scores);   // true\narray_search(90, $scores); // returns index\n\n// Add / Remove\narray_push($scores, 100);\n$last = array_pop($scores);\n\n// Merge & Slice\n$all   = array_merge($scores, [70, 80]);\n$first3 = array_slice($scores, 0, 3);\n\n// Count\necho count($scores);' },
            ]}
            quizQuestion="What is an associative array in PHP?"
            quizOptions={["An ordered list with numeric indexes", "An array with string keys", "A multidimensional array", "An array of objects"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/php/functions" element={<GenericLesson
            title="⚡ Functions" subject="PHP" path="/php/functions"
            difficulty="Beginner"
            prevPath="/php/arrays" prevLabel="PHP Arrays"
            nextPath="/php/oop" nextLabel="OOP & Classes"
            content="Functions let you reuse blocks of code. PHP supports default parameters, type hints, return types, variadic arguments, and anonymous functions (closures). Arrow functions (fn =>) are PHP 7.4+'s concise closure syntax."
            editorLanguage="php"
            conceptCards={[
                { icon: '📦', title: 'Type hints', desc: 'function add(int $a, int $b): int — enforce types.' },
                { icon: '⚙️', title: 'Default params', desc: 'function greet(string $name = "World"): string.' },
                { icon: '🏹', title: 'Arrow functions', desc: 'fn($x) => $x * 2 — short closures (PHP 7.4+).' },
            ]}
            codeExamples={[
                { label: 'Function Types', language: 'php', code: '<?php\ndeclare(strict_types=1);\n\n// Basic function with type hints\nfunction add(int $a, int $b): int {\n  return $a + $b;\n}\necho add(5, 3); // 8\n\n// Default parameters\nfunction greet(string $name = "World"): string {\n  return "Hello, $name!";\n}\n\n// Variadic function\nfunction sum(int ...$numbers): int {\n  return array_sum($numbers);\n}\necho sum(1, 2, 3, 4, 5); // 15\n\n// Closure\n$multiply = function(int $a, int $b): int {\n  return $a * $b;\n};\n\n// Arrow function (PHP 7.4+)\n$double = fn(int $n): int => $n * 2;\n\n// Higher-order functions\n$scores = [85, 42, 90, 67];\n$passing = array_filter($scores, fn($n) => $n >= 60);' },
            ]}
            quizQuestion="What does 'function add(int $a): int' mean?"
            quizOptions={["Returns an array", "Takes an int and returns an int", "Is a built-in function", "Takes a string"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/php/oop" element={<GenericLesson
            title="🏛️ OOP & Classes" subject="PHP" path="/php/oop"
            difficulty="Intermediate"
            prevPath="/php/functions" prevLabel="Functions"
            nextPath="/php/forms" nextLabel="Forms & POST"
            content="PHP has full object-oriented support: classes, interfaces, abstract classes, traits, and namespaces. OOP makes large PHP codebases maintainable. Laravel and Symfony — the two largest PHP frameworks — are built entirely on OOP."
            editorLanguage="php"
            conceptCards={[
                { icon: '🏛️', title: 'class', desc: 'Blueprint. public/protected/private control access.' },
                { icon: '🧬', title: 'extends', desc: 'Inherit all parent methods and properties.' },
                { icon: '📐', title: 'interface', desc: 'Contract — forces a class to implement methods.' },
            ]}
            codeExamples={[
                { label: 'OOP Example', language: 'php', code: '<?php\nclass User {\n  private string $name;\n  private string $email;\n\n  public function __construct(string $name, string $email) {\n    $this->name  = $name;\n    $this->email = $email;\n  }\n\n  public function getName(): string  { return $this->name; }\n  public function getEmail(): string { return $this->email; }\n\n  public function __toString(): string {\n    return "{$this->name} <{$this->email}>";\n  }\n}\n\nclass AdminUser extends User {\n  private array $permissions = [];\n\n  public function grantPermission(string $perm): void {\n    $this->permissions[] = $perm;\n  }\n\n  public function hasPermission(string $perm): bool {\n    return in_array($perm, $this->permissions);\n  }\n}\n\n$admin = new AdminUser("Aloah", "aloahmilton9@gmail.com");\n$admin->grantPermission("delete_user");\necho $admin->getName();               // Aloah\necho $admin->hasPermission("delete_user") ? "yes" : "no"; // yes' },
            ]}
            quizQuestion="What does 'extends' do in PHP OOP?"
            quizOptions={["Creates a new interface", "Inherits from a parent class", "Makes a class abstract", "Defines a namespace"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/php/forms" element={<GenericLesson
            title="📋 Forms & POST" subject="PHP" path="/php/forms"
            difficulty="Intermediate"
            prevPath="/php/oop" prevLabel="OOP & Classes"
            nextPath="/php/sessions" nextLabel="Sessions & Cookies"
            content="HTML forms send data to PHP via GET (in URL) or POST (in request body). PHP reads them from $_GET and $_POST superglobals. Always sanitize and validate user input to prevent SQL injection and XSS attacks."
            editorLanguage="php"
            conceptCards={[
                { icon: '📬', title: '$_POST', desc: 'Associative array of form data from POST requests.' },
                { icon: '🔍', title: '$_GET', desc: 'Query string parameters from the URL: ?name=Aloah.' },
                { icon: '🛡️', title: 'Sanitize', desc: 'htmlspecialchars() prevents XSS. Never trust user input.' },
            ]}
            codeExamples={[
                { label: 'Form Handler', language: 'php', code: '<?php\n// form.php — handles POST from contact form\n$errors = [];\n$success = false;\n\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n  // Read & sanitize\n  $name    = htmlspecialchars(trim($_POST["name"] ?? ""));\n  $email   = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);\n  $message = htmlspecialchars(trim($_POST["message"] ?? ""));\n\n  // Validate\n  if (empty($name))   $errors[] = "Name is required.";\n  if (!filter_var($email, FILTER_VALIDATE_EMAIL))\n    $errors[] = "Invalid email address.";\n  if (strlen($message) < 10)\n    $errors[] = "Message must be at least 10 characters.";\n\n  if (empty($errors)) {\n    // Process — save to DB or send email\n    $success = true;\n  }\n}\n?>\n\n<?php if ($success): ?>\n  <p>Message sent!</p>\n<?php elseif (!empty($errors)): ?>\n  <ul><?php foreach ($errors as $e): ?><li><?= $e ?></li><?php endforeach; ?></ul>\n<?php endif; ?>' },
            ]}
            quizQuestion="Which superglobal contains POST form data?"
            quizOptions={["$_REQUEST", "$_FORM", "$_POST", "$_INPUT"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/php/sessions" element={<GenericLesson
            title="🍪 Sessions & Cookies" subject="PHP" path="/php/sessions"
            difficulty="Intermediate"
            prevPath="/php/forms" prevLabel="Forms & POST"
            nextPath="/php/files" nextLabel="File Handling"
            content="Sessions store user data on the server between requests. Cookies store small data in the browser. Sessions are used for authentication — store the user ID in $_SESSION after login and check it on every protected page."
            editorLanguage="php"
            conceptCards={[
                { icon: '🔑', title: '$_SESSION', desc: 'Server-side storage. Start with session_start().' },
                { icon: '🍪', title: '$_COOKIE', desc: 'Browser-stored data. Set with setcookie().' },
                { icon: '🚪', title: 'Logout', desc: 'session_unset(), session_destroy() to clear session.' },
            ]}
            codeExamples={[
                { label: 'Session Auth', language: 'php', code: '<?php\nsession_start();\n\n// Login: store user in session\nfunction loginUser(int $userId, string $role): void {\n  session_regenerate_id(true); // Prevent session fixation\n  $_SESSION["user_id"]   = $userId;\n  $_SESSION["user_role"] = $role;\n  $_SESSION["logged_in"] = true;\n}\n\n// Protect a page\nfunction requireLogin(): void {\n  if (empty($_SESSION["logged_in"])) {\n    header("Location: /login.php");\n    exit;\n  }\n}\n\n// Logout\nfunction logoutUser(): void {\n  session_unset();\n  session_destroy();\n  header("Location: /login.php");\n  exit;\n}\n\n// On a protected page:\nsession_start();\nrequireLogin();\necho "Welcome, user " . $_SESSION["user_id"];\n\n// Cookie example\nsetcookie("theme", "dark", time() + (86400 * 30), "/");\necho $_COOKIE["theme"] ?? "light";' },
            ]}
            quizQuestion="What function must you call before using $_SESSION?"
            quizOptions={["session_create()", "session_open()", "session_start()", "start_session()"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/php/files" element={<GenericLesson
            title="📁 File Handling" subject="PHP" path="/php/files"
            difficulty="Advanced"
            prevPath="/php/sessions" prevLabel="Sessions & Cookies"
            content="PHP can read, write, and manage files on the server. This is used for logging, config files, CSV exports, and file uploads. Always validate file types and sizes before accepting uploads."
            editorLanguage="php"
            conceptCards={[
                { icon: '📖', title: 'file_get_contents', desc: 'Read entire file as string — simplest way.' },
                { icon: '✍️', title: 'file_put_contents', desc: 'Write/overwrite a file. Use FILE_APPEND to append.' },
                { icon: '📤', title: '$_FILES', desc: 'Superglobal for handling file uploads from forms.' },
            ]}
            codeExamples={[
                { label: 'Read & Write', language: 'php', code: '<?php\n// Read file\n$content = file_get_contents("data.txt");\n\n// Read as array of lines\n$lines = file("data.txt", FILE_IGNORE_NEW_LINES);\n\n// Write (overwrite)\nfile_put_contents("log.txt", "Log entry\\n");\n\n// Append\nfile_put_contents("log.txt", date("Y-m-d H:i:s") . " - User logged in\\n", FILE_APPEND);\n\n// CSV export\n$fp = fopen("users.csv", "w");\nfputcsv($fp, ["Name", "Email", "Role"]);\nfputcsv($fp, ["Aloah", "aloahmilton9@gmail.com", "instructor"]);\nfclose($fp);' },
                { label: 'File Upload', language: 'php', code: '<?php\nif ($_FILES["avatar"]["error"] === UPLOAD_ERR_OK) {\n  $file    = $_FILES["avatar"];\n  $maxSize = 2 * 1024 * 1024; // 2MB\n  $allowed = ["image/jpeg", "image/png", "image/webp"];\n\n  if ($file["size"] > $maxSize) die("File too large");\n  if (!in_array($file["type"], $allowed)) die("Invalid type");\n\n  // Generate safe filename\n  $ext      = pathinfo($file["name"], PATHINFO_EXTENSION);\n  $newName  = uniqid() . "." . $ext;\n  $dest     = "uploads/" . $newName;\n\n  if (move_uploaded_file($file["tmp_name"], $dest)) {\n    echo "Uploaded to $dest";\n  }\n}' },
            ]}
            quizQuestion="Which function reads an entire file as a string?"
            quizOptions={["fopen()", "file_read()", "file_get_contents()", "readfile()"]}
            quizCorrectAnswer={2}
        />} />
    </>
);
