import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const MysqlRoutes = () => (
    <>
        <Route path="/mysql/intro" element={<GenericLesson
            title="🗄️ Introduction to SQL" subject="MySQL" path="/mysql/intro"
            difficulty="Beginner"
            nextPath="/mysql/select" nextLabel="SELECT Queries"
            content="SQL (Structured Query Language) is the universal language for relational databases. MySQL is the world's most popular open-source database, used by WordPress, Facebook, Twitter, and millions of apps. Data is stored in tables with rows and columns."
            editorLanguage="sql"
            conceptCards={[
                { icon: '🗄️', title: 'Database', desc: 'A collection of related tables that store structured data.' },
                { icon: '📊', title: 'Table', desc: 'Rows (records) and columns (fields) — like a spreadsheet.' },
                { icon: '🔑', title: 'Primary Key', desc: 'Unique identifier for each row. Usually an auto-increment ID.' },
            ]}
            codeExamples={[
                { label: 'Create Table', language: 'sql', code: '-- Create a database\nCREATE DATABASE learning_platform;\nUSE learning_platform;\n\n-- Create a table\nCREATE TABLE users (\n  id         INT AUTO_INCREMENT PRIMARY KEY,\n  name       VARCHAR(100)        NOT NULL,\n  email      VARCHAR(150) UNIQUE NOT NULL,\n  role       ENUM("student","instructor","admin") DEFAULT "student",\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);' },
            ]}
            quizQuestion="What is a Primary Key in a database table?"
            quizOptions={["The first column", "A unique identifier for each row", "A foreign table link", "The table name"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/mysql/select" element={<GenericLesson
            title="🔍 SELECT Queries" subject="MySQL" path="/mysql/select"
            difficulty="Beginner"
            prevPath="/mysql/intro" prevLabel="Introduction to SQL"
            nextPath="/mysql/crud" nextLabel="INSERT, UPDATE, DELETE"
            content="SELECT is the most used SQL command — it retrieves data from one or more tables. You can select specific columns, filter rows, sort results, limit output, and use aggregate functions like COUNT, SUM, AVG, MIN, MAX."
            editorLanguage="sql"
            conceptCards={[
                { icon: '🔍', title: 'SELECT', desc: 'Choose which columns to return. * means all columns.' },
                { icon: '🗂️', title: 'ORDER BY', desc: 'Sort results by a column ASC or DESC.' },
                { icon: '🔢', title: 'Aggregates', desc: 'COUNT(), SUM(), AVG(), MIN(), MAX() summarize data.' },
            ]}
            codeExamples={[
                { label: 'Basic SELECT', language: 'sql', code: '-- Select all columns\nSELECT * FROM users;\n\n-- Select specific columns\nSELECT name, email, role FROM users;\n\n-- Order results\nSELECT name, created_at\nFROM users\nORDER BY created_at DESC;\n\n-- Limit results\nSELECT * FROM users LIMIT 10 OFFSET 20;' },
            ]}
            quizQuestion="What does SELECT * mean?"
            quizOptions={["Select no columns", "Select all columns", "Select the first column", "Select unique columns"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/mysql/crud" element={<GenericLesson
            title="✏️ INSERT, UPDATE, DELETE" subject="MySQL" path="/mysql/crud"
            difficulty="Beginner"
            prevPath="/mysql/select" prevLabel="SELECT Queries"
            nextPath="/mysql/where" nextLabel="WHERE & Filtering"
            content="CRUD — Create, Read, Update, Delete — are the four fundamental database operations. INSERT adds new rows, UPDATE modifies existing rows, DELETE removes rows. Always use WHERE with UPDATE and DELETE or you will affect the entire table."
            editorLanguage="sql"
            conceptCards={[
                { icon: '➕', title: 'INSERT', desc: 'Add a new row to a table.' },
                { icon: '✏️', title: 'UPDATE', desc: 'Modify existing rows. ALWAYS add WHERE clause!' },
                { icon: '🗑️', title: 'DELETE', desc: 'Remove rows. ALWAYS add WHERE clause!' },
            ]}
            codeExamples={[
                { label: 'Writing Data', language: 'sql', code: '-- INSERT user\nINSERT INTO users (name, email, role)\nVALUES ("Aloah", "aloahmilton9@gmail.com", "instructor");\n\n-- UPDATE user\nUPDATE users\nSET role = "admin"\nWHERE id = 1;\n\n-- DELETE user\nDELETE FROM users WHERE id = 5;' },
            ]}
            quizQuestion="What is the danger of UPDATE or DELETE without a WHERE clause?"
            quizOptions={["It causes a syntax error", "It affects every row in the table", "It does nothing", "It creates a backup"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/mysql/where" element={<GenericLesson
            title="🔎 WHERE & Filtering" subject="MySQL" path="/mysql/where"
            difficulty="Intermediate"
            prevPath="/mysql/crud" prevLabel="INSERT, UPDATE, DELETE"
            nextPath="/mysql/joins" nextLabel="JOINs"
            content="WHERE filters rows based on conditions. Combine conditions with AND/OR. Use LIKE for pattern matching, IN for multiple values, BETWEEN for ranges, and IS NULL to find missing data."
            editorLanguage="sql"
            conceptCards={[
                { icon: '🔎', title: 'WHERE', desc: 'Filters rows. Only matching rows are returned or affected.' },
                { icon: '🔡', title: 'LIKE', desc: 'Pattern matching: % = any chars, _ = one char.' },
                { icon: '📋', title: 'IN', desc: "WHERE role IN ('admin','instructor') — matches list." },
            ]}
            codeExamples={[
                { label: 'Filter Data', language: 'sql', code: 'SELECT * FROM users WHERE role = "student";\nSELECT * FROM users WHERE name LIKE "A%";\nSELECT * FROM users WHERE id BETWEEN 1 AND 100;\nSELECT * FROM users WHERE avatar IS NULL;' },
            ]}
            quizQuestion="What does the % wildcard in LIKE match?"
            quizOptions={["A single character", "A number", "Any sequence of characters", "A space"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/mysql/joins" element={<GenericLesson
            title="🔗 JOINs" subject="MySQL" path="/mysql/joins"
            difficulty="Intermediate"
            prevPath="/mysql/where" prevLabel="WHERE & Filtering"
            nextPath="/mysql/indexes" nextLabel="Indexes"
            content="JOINs combine data from multiple tables based on a related column. INNER JOIN returns only matching rows. LEFT JOIN returns all left rows + matches. RIGHT JOIN is the opposite."
            editorLanguage="sql"
            conceptCards={[
                { icon: '🤝', title: 'INNER JOIN', desc: 'Only rows with matches in BOTH tables.' },
                { icon: '⬅️', title: 'LEFT JOIN', desc: 'All left rows + matches. NULL for no match.' },
                { icon: '🔑', title: 'Foreign Key', desc: 'Column in one table that references PK in another.' },
            ]}
            codeExamples={[
                { label: 'Combining Tables', language: 'sql', code: 'SELECT u.name, e.course_id\nFROM users u\nINNER JOIN enrollments e ON u.id = e.user_id;' },
            ]}
            quizQuestion="What does INNER JOIN return?"
            quizOptions={["All rows from left table", "All rows from right table", "Only rows with matches in both tables", "All rows from both tables"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/mysql/indexes" element={<GenericLesson
            title="⚡ Indexes" subject="MySQL" path="/mysql/indexes"
            difficulty="Advanced"
            prevPath="/mysql/joins" prevLabel="JOINs"
            nextPath="/mysql/php" nextLabel="MySQL with PHP"
            content="Indexes dramatically speed up SELECT queries on large tables. Without an index, MySQL scans every row. With an index, it uses a B-tree structure to find data in O(log n) time."
            editorLanguage="sql"
            conceptCards={[
                { icon: '⚡', title: 'Index', desc: 'Speeds up SELECT. Like an index in a book — no need to read every page.' },
                { icon: '🔑', title: 'UNIQUE index', desc: 'Enforces uniqueness AND speeds up lookups.' },
                { icon: '🔍', title: 'EXPLAIN', desc: 'Shows MySQL query plan — reveals if indexes are used.' },
            ]}
            codeExamples={[
                { label: 'Optimize Queries', language: 'sql', code: 'CREATE INDEX idx_email ON users(email);\nEXPLAIN SELECT * FROM users WHERE email = "test@abc.com";' },
            ]}
            quizQuestion="When should you add a database index?"
            quizOptions={["On every column", "On columns frequently used in WHERE or JOIN", "Only on primary keys", "Never"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/mysql/php" element={<GenericLesson
            title="🐘 MySQL with PHP" subject="MySQL" path="/mysql/php"
            difficulty="Advanced"
            prevPath="/mysql/indexes" prevLabel="Indexes"
            content="PHP and MySQL work together to build dynamic web apps. Use PDO (PHP Data Objects) for database connections — never use the old mysql_ functions. Always use prepared statements to protect against SQL injection."
            editorLanguage="php"
            conceptCards={[
                { icon: '🔌', title: 'PDO', desc: 'PHP Data Objects — secure, database-agnostic connection.' },
                { icon: '🛡️', title: 'Prepared statements', desc: 'Use :param placeholders to prevent SQL injection.' },
                { icon: '🔄', title: 'Transactions', desc: 'Group queries so either all succeed or all roll back.' },
            ]}
            codeExamples={[
                { label: 'PHP PDO', language: 'php', code: '<?php\n$pdo = new PDO("mysql:host=localhost;dbname=test", "root", "");\n$stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");\n$stmt->execute(["id" => 1]);\n$user = $stmt->fetch();' },
            ]}
            quizQuestion="Why should you use prepared statements in PHP?"
            quizOptions={["They are faster", "They prevent SQL injection", "They auto-create tables", "They work without a DB"]}
            quizCorrectAnswer={1}
        />} />
    </>
);
