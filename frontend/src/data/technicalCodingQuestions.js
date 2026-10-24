// Curated dataset of Technical & Coding Questions across 6 Core Languages
// 10 rich questions per language: C, C++, Java, Python, SQL, Web Development

export const TECHNICAL_LANGUAGES = [
  { id: 'c', name: 'C', icon: '⚡', color: '#0ea5e9', bg: '#e0f2fe' },
  { id: 'cpp', name: 'C++', icon: '🚀', color: '#f59e0b', bg: '#fef3c7' },
  { id: 'java', name: 'Java', icon: '☕', color: '#a855f7', bg: '#f3e8ff' },
  { id: 'python', name: 'Python', icon: '🐍', color: '#22c55e', bg: '#dcfce7' },
  { id: 'sql', name: 'SQL', icon: '🗄️', color: '#f97316', bg: '#ffedd5' },
  { id: 'webdev', name: 'Web Development', icon: '🌐', color: '#3b82f6', bg: '#dbeafe' }
];

export const CODING_QUESTIONS = {
  c: [
    {
      id: 1,
      title: "Sum of Two Numbers",
      difficulty: "Easy",
      tags: ["Math", "Basics"],
      problemStatement: "Write a C program that reads two space-separated integers, A and B, from standard input and prints their sum to standard output.",
      inputFormat: "Two space-separated integers A and B.",
      outputFormat: "Print a single integer representing the sum of A and B.",
      sampleInput: "15 25",
      sampleOutput: "40",
      explanation: "Given inputs 15 and 25. The sum 15 + 25 = 40.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    if (scanf("%d %d", &a, &b) == 2) {\n        // Calculate and print sum\n        printf("%d\\n", a + b);\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "15 25", expectedOutput: "40", isHidden: false },
        { id: 2, input: "-10 30", expectedOutput: "20", isHidden: false },
        { id: 3, input: "0 0", expectedOutput: "0", isHidden: true },
        { id: 4, input: "1000 2500", expectedOutput: "3500", isHidden: true }
      ]
    },
    {
      id: 2,
      title: "Check Even or Odd",
      difficulty: "Easy",
      tags: ["Conditionals", "Basics"],
      problemStatement: "Write a C program that reads an integer N and determines whether it is Even or Odd.",
      inputFormat: "A single integer N.",
      outputFormat: "Print 'Even' if N is even, otherwise print 'Odd'.",
      sampleInput: "7",
      sampleOutput: "Odd",
      explanation: "7 is not divisible by 2 (remainder 1), hence it is Odd.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf("%d", &n) == 1) {\n        if (n % 2 == 0) {\n            printf("Even\\n");\n        } else {\n            printf("Odd\\n");\n        }\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "7", expectedOutput: "Odd", isHidden: false },
        { id: 2, input: "128", expectedOutput: "Even", isHidden: false },
        { id: 3, input: "0", expectedOutput: "Even", isHidden: true },
        { id: 4, input: "-5", expectedOutput: "Odd", isHidden: true }
      ]
    },
    {
      id: 3,
      title: "Check Palindrome Number",
      difficulty: "Easy",
      tags: ["Math", "Loops"],
      problemStatement: "Given an integer N, check whether it is a palindrome. A palindrome number reads the same forwards and backwards.",
      inputFormat: "A single integer N.",
      outputFormat: "Print 'Palindrome' if N is palindrome, otherwise 'Not Palindrome'.",
      sampleInput: "121",
      sampleOutput: "Palindrome",
      explanation: "Reversing 121 yields 121, which matches the original number.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n, temp, rev = 0;\n    if (scanf("%d", &n) == 1) {\n        temp = n;\n        while (n > 0) {\n            rev = rev * 10 + (n % 10);\n            n /= 10;\n        }\n        if (temp == rev) printf("Palindrome\\n");\n        else printf("Not Palindrome\\n");\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "121", expectedOutput: "Palindrome", isHidden: false },
        { id: 2, input: "1234", expectedOutput: "Not Palindrome", isHidden: false },
        { id: 3, input: "1331", expectedOutput: "Palindrome", isHidden: true },
        { id: 4, input: "5", expectedOutput: "Palindrome", isHidden: true }
      ]
    },
    {
      id: 4,
      title: "Factorial of a Number",
      difficulty: "Easy",
      tags: ["Math", "Loops"],
      problemStatement: "Write a program to calculate the factorial of a non-negative integer N (0 <= N <= 12).",
      inputFormat: "A single integer N.",
      outputFormat: "Print the factorial value of N.",
      sampleInput: "5",
      sampleOutput: "120",
      explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    long long fact = 1;\n    if (scanf("%d", &n) == 1) {\n        for (int i = 1; i <= n; i++) fact *= i;\n        printf("%lld\\n", fact);\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5", expectedOutput: "120", isHidden: false },
        { id: 2, input: "0", expectedOutput: "1", isHidden: false },
        { id: 3, input: "7", expectedOutput: "5040", isHidden: true },
        { id: 4, input: "10", expectedOutput: "3628800", isHidden: true }
      ]
    },
    {
      id: 5,
      title: "Check Prime Number",
      difficulty: "Easy",
      tags: ["Math", "Loops"],
      problemStatement: "Determine whether a given positive integer N is a prime number. A prime number has exactly two positive divisors: 1 and itself.",
      inputFormat: "A single integer N (N >= 1).",
      outputFormat: "Print 'Prime' or 'Not Prime'.",
      sampleInput: "17",
      sampleOutput: "Prime",
      explanation: "17 is only divisible by 1 and 17, hence it is a Prime number.",
      starterCode: `#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n    int n;\n    if (scanf("%d", &n) == 1) {\n        if (n <= 1) { printf("Not Prime\\n"); return 0; }\n        bool isPrime = true;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) { isPrime = false; break; }\n        }\n        if (isPrime) printf("Prime\\n");\n        else printf("Not Prime\\n");\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "17", expectedOutput: "Prime", isHidden: false },
        { id: 2, input: "4", expectedOutput: "Not Prime", isHidden: false },
        { id: 3, input: "1", expectedOutput: "Not Prime", isHidden: true },
        { id: 4, input: "97", expectedOutput: "Prime", isHidden: true }
      ]
    },
    {
      id: 6,
      title: "Fibonacci Series up to N terms",
      difficulty: "Medium",
      tags: ["Series", "Loops"],
      problemStatement: "Print the first N terms of the Fibonacci sequence separated by spaces, starting with 0 and 1.",
      inputFormat: "A single integer N (N >= 1).",
      outputFormat: "Space-separated first N Fibonacci numbers.",
      sampleInput: "6",
      sampleOutput: "0 1 1 2 3 5",
      explanation: "F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf("%d", &n) == 1) {\n        long long a = 0, b = 1, next;\n        for (int i = 0; i < n; i++) {\n            printf("%lld%c", a, (i == n - 1) ? '\\n' : ' ');\n            next = a + b;\n            a = b;\n            b = next;\n        }\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "6", expectedOutput: "0 1 1 2 3 5", isHidden: false },
        { id: 2, input: "3", expectedOutput: "0 1 1", isHidden: false },
        { id: 3, input: "1", expectedOutput: "0", isHidden: true },
        { id: 4, input: "8", expectedOutput: "0 1 1 2 3 5 8 13", isHidden: true }
      ]
    },
    {
      id: 7,
      title: "Find Maximum and Minimum in an Array",
      difficulty: "Medium",
      tags: ["Arrays"],
      problemStatement: "Given an array of N integers, find and print the maximum and minimum elements in the array.",
      inputFormat: "First line contains N. Second line contains N space-separated integers.",
      outputFormat: "Print 'Max: X, Min: Y'.",
      sampleInput: "5\n10 45 2 99 23",
      sampleOutput: "Max: 99, Min: 2",
      explanation: "Traversing the array, 99 is highest and 2 is lowest.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf("%d", &n) == 1 && n > 0) {\n        int val, maxVal, minVal;\n        scanf("%d", &val);\n        maxVal = minVal = val;\n        for (int i = 1; i < n; i++) {\n            scanf("%d", &val);\n            if (val > maxVal) maxVal = val;\n            if (val < minVal) minVal = val;\n        }\n        printf("Max: %d, Min: %d\\n", maxVal, minVal);\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5\n10 45 2 99 23", expectedOutput: "Max: 99, Min: 2", isHidden: false },
        { id: 2, input: "3\n-5 -20 -2", expectedOutput: "Max: -2, Min: -20", isHidden: false },
        { id: 3, input: "1\n50", expectedOutput: "Max: 50, Min: 50", isHidden: true }
      ]
    },
    {
      id: 8,
      title: "Check Armstrong Number",
      difficulty: "Medium",
      tags: ["Math", "Loops"],
      problemStatement: "An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Determine if N is an Armstrong number.",
      inputFormat: "A single 3-digit integer N.",
      outputFormat: "Print 'Armstrong' or 'Not Armstrong'.",
      sampleInput: "153",
      sampleOutput: "Armstrong",
      explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n, temp, sum = 0, rem;\n    if (scanf("%d", &n) == 1) {\n        temp = n;\n        while (temp > 0) {\n            rem = temp % 10;\n            sum += rem * rem * rem;\n            temp /= 10;\n        }\n        if (sum == n) printf("Armstrong\\n");\n        else printf("Not Armstrong\\n");\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "153", expectedOutput: "Armstrong", isHidden: false },
        { id: 2, input: "371", expectedOutput: "Armstrong", isHidden: false },
        { id: 3, input: "123", expectedOutput: "Not Armstrong", isHidden: true }
      ]
    },
    {
      id: 9,
      title: "Reverse a String",
      difficulty: "Medium",
      tags: ["Strings"],
      problemStatement: "Given a string S containing lowercase English letters without spaces, print the reversed string.",
      inputFormat: "A single word string S.",
      outputFormat: "Reversed string.",
      sampleInput: "placement",
      sampleOutput: "tnemecalp",
      explanation: "Character indices are swapped from 0 to N-1.",
      starterCode: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[1000];\n    if (scanf("%s", str) == 1) {\n        int len = strlen(str);\n        for (int i = len - 1; i >= 0; i--) {\n            putchar(str[i]);\n        }\n        putchar('\\n');\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "placement", expectedOutput: "tnemecalp", isHidden: false },
        { id: 2, input: "hello", expectedOutput: "olleh", isHidden: false },
        { id: 3, input: "a", expectedOutput: "a", isHidden: true }
      ]
    },
    {
      id: 10,
      title: "Count Vowels and Consonants",
      difficulty: "Medium",
      tags: ["Strings", "Counting"],
      problemStatement: "Given a lowercase string S, count the total number of vowels and consonants.",
      inputFormat: "A single lowercase string S.",
      outputFormat: "Print 'Vowels: V, Consonants: C'.",
      sampleInput: "engineering",
      sampleOutput: "Vowels: 5, Consonants: 6",
      explanation: "Vowels in 'engineering': e, i, e, e, i (5). Consonants: n, g, n, r, n, g (6).",
      starterCode: `#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[1000];\n    if (scanf("%s", str) == 1) {\n        int v = 0, c = 0;\n        for (int i = 0; str[i] != '\\0'; i++) {\n            char ch = tolower(str[i]);\n            if (ch >= 'a' && ch <= 'z') {\n                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') v++;\n                else c++;\n            }\n        }\n        printf("Vowels: %d, Consonants: %d\\n", v, c);\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "engineering", expectedOutput: "Vowels: 5, Consonants: 6", isHidden: false },
        { id: 2, input: "aeiou", expectedOutput: "Vowels: 5, Consonants: 0", isHidden: false },
        { id: 3, input: "rhythm", expectedOutput: "Vowels: 0, Consonants: 6", isHidden: true }
      ]
    }
  ],

  cpp: [
    {
      id: 1,
      title: "Valid Parentheses (Stack)",
      difficulty: "Easy",
      tags: ["Stack", "Strings"],
      problemStatement: "Given a string S consisting of bracket characters '()', '{}', and '[]', determine if the input string is valid.",
      inputFormat: "A string S containing bracket symbols.",
      outputFormat: "Print 'Valid' or 'Invalid'.",
      sampleInput: "{[()]}",
      sampleOutput: "Valid",
      explanation: "Every opening bracket has an immediately matching closing bracket.",
      starterCode: `#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isValid(string s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(' || c == '{' || c == '[') st.push(c);\n        else {\n            if (st.empty()) return false;\n            if (c == ')' && st.top() != '(') return false;\n            if (c == '}' && st.top() != '{') return false;\n            if (c == ']' && st.top() != '[') return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}\n\nint main() {\n    string s;\n    if (cin >> s) {\n        cout << (isValid(s) ? "Valid" : "Invalid") << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "{[()]}", expectedOutput: "Valid", isHidden: false },
        { id: 2, input: "([)]", expectedOutput: "Invalid", isHidden: false },
        { id: 3, input: "()[]{}", expectedOutput: "Valid", isHidden: true }
      ]
    },
    {
      id: 2,
      title: "Find Second Largest Element",
      difficulty: "Easy",
      tags: ["Arrays"],
      problemStatement: "Given an array of N integers, find the second largest distinct element. If no second largest exists, print -1.",
      inputFormat: "First line N. Second line N space-separated integers.",
      outputFormat: "The second largest distinct element.",
      sampleInput: "6\n12 35 1 10 34 1",
      sampleOutput: "34",
      explanation: "Largest element is 35, second largest is 34.",
      starterCode: `#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        int first = INT_MIN, second = INT_MIN;\n        for (int i = 0; i < n; i++) {\n            int x;\n            cin >> x;\n            if (x > first) {\n                second = first;\n                first = x;\n            } else if (x > second && x != first) {\n                second = x;\n            }\n        }\n        if (second == INT_MIN) cout << -1 << endl;\n        else cout << second << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "6\n12 35 1 10 34 1", expectedOutput: "34", isHidden: false },
        { id: 2, input: "4\n10 10 10 10", expectedOutput: "-1", isHidden: false },
        { id: 3, input: "3\n5 2 9", expectedOutput: "5", isHidden: true }
      ]
    },
    {
      id: 3,
      title: "Move Zeroes to End",
      difficulty: "Easy",
      tags: ["Two Pointers", "Arrays"],
      problemStatement: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
      inputFormat: "First line integer N. Second line N space-separated integers.",
      outputFormat: "Array with zeroes shifted to the right, space-separated.",
      sampleInput: "5\n0 1 0 3 12",
      sampleOutput: "1 3 12 0 0",
      explanation: "Non-zero elements [1, 3, 12] appear first, followed by two zeroes.",
      starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        vector<int> a(n);\n        for (int i = 0; i < n; i++) cin >> a[i];\n        int idx = 0;\n        for (int i = 0; i < n; i++) {\n            if (a[i] != 0) a[idx++] = a[i];\n        }\n        while (idx < n) a[idx++] = 0;\n        for (int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5\n0 1 0 3 12", expectedOutput: "1 3 12 0 0", isHidden: false },
        { id: 2, input: "4\n0 0 0 1", expectedOutput: "1 0 0 0", isHidden: false },
        { id: 3, input: "3\n1 2 3", expectedOutput: "1 2 3", isHidden: true }
      ]
    },
    {
      id: 4,
      title: "Check Anagram Strings",
      difficulty: "Easy",
      tags: ["Strings", "Hashing"],
      problemStatement: "Given two strings S1 and S2, determine whether they are anagrams of each other (contain exact same characters with identical frequencies).",
      inputFormat: "Two space-separated strings S1 and S2.",
      outputFormat: "Print 'Anagram' or 'Not Anagram'.",
      sampleInput: "listen silent",
      sampleOutput: "Anagram",
      explanation: "Both strings contain characters l, i, s, t, e, n.",
      starterCode: `#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s1, s2;\n    if (cin >> s1 >> s2) {\n        if (s1.length() != s2.length()) {\n            cout << "Not Anagram" << endl;\n            return 0;\n        }\n        sort(s1.begin(), s1.end());\n        sort(s2.begin(), s2.end());\n        cout << (s1 == s2 ? "Anagram" : "Not Anagram") << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "listen silent", expectedOutput: "Anagram", isHidden: false },
        { id: 2, input: "rat car", expectedOutput: "Not Anagram", isHidden: false },
        { id: 3, input: "anagram nagaram", expectedOutput: "Anagram", isHidden: true }
      ]
    },
    {
      id: 5,
      title: "Merge Two Sorted Arrays",
      difficulty: "Medium",
      tags: ["Two Pointers", "Sorting"],
      problemStatement: "Given two sorted arrays of sizes N and M, merge them into a single sorted array.",
      inputFormat: "First line: N and M. Second line: N sorted integers. Third line: M sorted integers.",
      outputFormat: "Single merged sorted array.",
      sampleInput: "3 3\n1 3 5\n2 4 6",
      sampleOutput: "1 2 3 4 5 6",
      explanation: "Combined sorted sequence of [1, 3, 5] and [2, 4, 6] is [1, 2, 3, 4, 5, 6].",
      starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, m;\n    if (cin >> n >> m) {\n        vector<int> a(n), b(m);\n        for (int i = 0; i < n; i++) cin >> a[i];\n        for (int i = 0; i < m; i++) cin >> b[i];\n        int i = 0, j = 0;\n        vector<int> res;\n        while (i < n && j < m) {\n            if (a[i] <= b[j]) res.push_back(a[i++]);\n            else res.push_back(b[j++]);\n        }\n        while (i < n) res.push_back(a[i++]);\n        while (j < m) res.push_back(b[j++]);\n        for (int k = 0; k < res.size(); k++) cout << res[k] << (k == res.size() - 1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "3 3\n1 3 5\n2 4 6", expectedOutput: "1 2 3 4 5 6", isHidden: false },
        { id: 2, input: "2 2\n1 7\n2 3", expectedOutput: "1 2 3 7", isHidden: false },
        { id: 3, input: "1 3\n5\n1 2 8", expectedOutput: "1 2 5 8", isHidden: true }
      ]
    },
    {
      id: 6,
      title: "Find Missing Number in Array [1, N]",
      difficulty: "Medium",
      tags: ["Math", "Arrays"],
      problemStatement: "You are given an array of N-1 distinct integers in the range of 1 to N. Find the missing number.",
      inputFormat: "First line integer N. Second line contains N-1 space-separated integers.",
      outputFormat: "Single missing integer.",
      sampleInput: "5\n1 2 4 5",
      sampleOutput: "3",
      explanation: "Expected numbers from 1 to 5 are 1, 2, 3, 4, 5. Missing number is 3.",
      starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        long long expectedSum = n * (n + 1) / 2;\n        long long actualSum = 0;\n        for (int i = 0; i < n - 1; i++) {\n            long long x;\n            cin >> x;\n            actualSum += x;\n        }\n        cout << expectedSum - actualSum << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5\n1 2 4 5", expectedOutput: "3", isHidden: false },
        { id: 2, input: "4\n2 3 4", expectedOutput: "1", isHidden: false },
        { id: 3, input: "3\n1 2", expectedOutput: "3", isHidden: true }
      ]
    },
    {
      id: 7,
      title: "Rotate Array by K Steps",
      difficulty: "Medium",
      tags: ["Arrays"],
      problemStatement: "Given an array of N integers, rotate the array to the right by K steps, where K is non-negative.",
      inputFormat: "First line N and K. Second line N space-separated integers.",
      outputFormat: "Rotated array elements space-separated.",
      sampleInput: "5 2\n1 2 3 4 5",
      sampleOutput: "4 5 1 2 3",
      explanation: "Rotating [1, 2, 3, 4, 5] by 2 steps to the right yields [4, 5, 1, 2, 3].",
      starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (cin >> n >> k) {\n        vector<int> a(n);\n        for (int i = 0; i < n; i++) cin >> a[i];\n        k %= n;\n        reverse(a.begin(), a.end());\n        reverse(a.begin(), a.begin() + k);\n        reverse(a.begin() + k, a.end());\n        for (int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5 2\n1 2 3 4 5", expectedOutput: "4 5 1 2 3", isHidden: false },
        { id: 2, input: "4 1\n10 20 30 40", expectedOutput: "40 10 20 30", isHidden: false },
        { id: 3, input: "3 3\n1 2 3", expectedOutput: "1 2 3", isHidden: true }
      ]
    },
    {
      id: 8,
      title: "Binary Search on Sorted Array",
      difficulty: "Medium",
      tags: ["Binary Search", "Algorithms"],
      problemStatement: "Given a sorted array of N integers and a target value K, return the 0-based index of K if found, otherwise print -1.",
      inputFormat: "First line N and K. Second line N space-separated sorted integers.",
      outputFormat: "0-based index or -1.",
      sampleInput: "5 7\n1 3 5 7 9",
      sampleOutput: "3",
      explanation: "Target 7 is located at index 3.",
      starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, target;\n    if (cin >> n >> target) {\n        vector<int> a(n);\n        for (int i = 0; i < n; i++) cin >> a[i];\n        int low = 0, high = n - 1, ans = -1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (a[mid] == target) { ans = mid; break; }\n            else if (a[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        cout << ans << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5 7\n1 3 5 7 9", expectedOutput: "3", isHidden: false },
        { id: 2, input: "5 6\n1 3 5 7 9", expectedOutput: "-1", isHidden: false },
        { id: 3, input: "1 10\n10", expectedOutput: "0", isHidden: true }
      ]
    },
    {
      id: 9,
      title: "Longest Common Prefix",
      difficulty: "Medium",
      tags: ["Strings"],
      problemStatement: "Write a function to find the longest common prefix string amongst an array of strings. If no common prefix exists, print '-1'.",
      inputFormat: "First line N. Second line contains N space-separated words.",
      outputFormat: "Common prefix or -1.",
      sampleInput: "3\nflower flow flight",
      sampleOutput: "fl",
      explanation: "Prefix 'fl' is shared by all three strings.",
      starterCode: `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n && n > 0) {\n        vector<string> v(n);\n        for (int i = 0; i < n; i++) cin >> v[i];\n        sort(v.begin(), v.end());\n        string s1 = v[0], s2 = v[n - 1], prefix = "";\n        for (int i = 0; i < min(s1.length(), s2.length()); i++) {\n            if (s1[i] == s2[i]) prefix += s1[i];\n            else break;\n        }\n        if (prefix.empty()) cout << -1 << endl;\n        else cout << prefix << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "3\nflower flow flight", expectedOutput: "fl", isHidden: false },
        { id: 2, input: "3\ndog racecar car", expectedOutput: "-1", isHidden: false },
        { id: 3, input: "2\ninterspace interview", expectedOutput: "inter", isHidden: true }
      ]
    },
    {
      id: 10,
      title: "Subarray with Given Sum",
      difficulty: "Hard",
      tags: ["Sliding Window", "Arrays"],
      problemStatement: "Given an unsorted array of non-negative integers and an integer S, find a continuous subarray which adds to a given number S. Print 1-based start and end indices.",
      inputFormat: "First line N and S. Second line N space-separated integers.",
      outputFormat: "Two space-separated 1-based indices 'L R' or '-1'.",
      sampleInput: "5 12\n1 2 3 7 5",
      sampleOutput: "2 4",
      explanation: "Sum of elements from index 2 to 4 is 2 + 3 + 7 = 12.",
      starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long s;\n    if (cin >> n >> s) {\n        vector<long long> a(n);\n        for (int i = 0; i < n; i++) cin >> a[i];\n        long long cur = 0; int l = 0;\n        for (int r = 0; r < n; r++) {\n            cur += a[r];\n            while (cur > s && l < r) cur -= a[l++];\n            if (cur == s) {\n                cout << (l + 1) << " " << (r + 1) << endl;\n                return 0;\n            }\n        }\n        cout << -1 << endl;\n    }\n    return 0;\n}`,
      testCases: [
        { id: 1, input: "5 12\n1 2 3 7 5", expectedOutput: "2 4", isHidden: false },
        { id: 2, input: "4 100\n1 2 3 4", expectedOutput: "-1", isHidden: false },
        { id: 3, input: "3 15\n5 5 5", expectedOutput: "1 3", isHidden: true }
      ]
    }
  ],

  java: [
    {
      id: 1,
      title: "Reverse Words in a String",
      difficulty: "Easy",
      tags: ["Strings"],
      problemStatement: "Given a string S containing words separated by spaces, reverse the order of words.",
      inputFormat: "A line of text containing words separated by spaces.",
      outputFormat: "The reversed sentence.",
      sampleInput: "campus placement drives live",
      sampleOutput: "live drives placement campus",
      explanation: "Words are reordered from last to first.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String line = sc.nextLine().trim();\n            String[] parts = line.split("\\\\s+");\n            StringBuilder sb = new StringBuilder();\n            for (int i = parts.length - 1; i >= 0; i--) {\n                sb.append(parts[i]);\n                if (i > 0) sb.append(" ");\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "campus placement drives live", expectedOutput: "live drives placement campus", isHidden: false },
        { id: 2, input: "hello world", expectedOutput: "world hello", isHidden: false },
        { id: 3, input: "java", expectedOutput: "java", isHidden: true }
      ]
    },
    {
      id: 2,
      title: "First Non-Repeating Character",
      difficulty: "Easy",
      tags: ["Hashing", "Strings"],
      problemStatement: "Given a string S consisting of lowercase English letters, find the first non-repeating character. If none exists, print -1.",
      inputFormat: "A single lowercase string S.",
      outputFormat: "The first non-repeating character or -1.",
      sampleInput: "swiss",
      sampleOutput: "w",
      explanation: "In 'swiss', 's' repeats 3 times, 'w' appears once and is first non-repeating.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next();\n            int[] count = new int[26];\n            for (char c : s.toCharArray()) count[c - 'a']++;\n            char ans = '$';\n            for (char c : s.toCharArray()) {\n                if (count[c - 'a'] == 1) { ans = c; break; }\n            }\n            if (ans == '$') System.out.println("-1");\n            else System.out.println(ans);\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "swiss", expectedOutput: "w", isHidden: false },
        { id: 2, input: "aabbcc", expectedOutput: "-1", isHidden: false },
        { id: 3, input: "developer", expectedOutput: "d", isHidden: true }
      ]
    },
    {
      id: 3,
      title: "Remove Duplicates from Sorted Array",
      difficulty: "Easy",
      tags: ["Arrays", "Two Pointers"],
      problemStatement: "Given a sorted array of integers, remove duplicates in-place such that each unique element appears once. Print the unique elements space-separated.",
      inputFormat: "First line N. Second line N space-separated sorted integers.",
      outputFormat: "Space-separated unique sorted integers.",
      sampleInput: "6\n1 1 2 2 3 4",
      sampleOutput: "1 2 3 4",
      explanation: "Unique values are 1, 2, 3, 4.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n            if (n == 0) return;\n            StringBuilder sb = new StringBuilder();\n            sb.append(arr[0]);\n            for (int i = 1; i < n; i++) {\n                if (arr[i] != arr[i - 1]) sb.append(" ").append(arr[i]);\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "6\n1 1 2 2 3 4", expectedOutput: "1 2 3 4", isHidden: false },
        { id: 2, input: "4\n5 5 5 5", expectedOutput: "5", isHidden: false },
        { id: 3, input: "3\n1 2 3", expectedOutput: "1 2 3", isHidden: true }
      ]
    },
    {
      id: 4,
      title: "Matrix Transpose",
      difficulty: "Medium",
      tags: ["2D Arrays"],
      problemStatement: "Given an R x C integer matrix, compute and print its transpose matrix of dimensions C x R.",
      inputFormat: "First line R and C. Next R lines contain C integers each.",
      outputFormat: "Transposed matrix printed row-wise.",
      sampleInput: "2 3\n1 2 3\n4 5 6",
      sampleOutput: "1 4\n2 5\n3 6",
      explanation: "Rows [1 2 3] and [4 5 6] become columns of the new 3x2 matrix.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int r = sc.nextInt(), c = sc.nextInt();\n            int[][] mat = new int[r][c];\n            for (int i = 0; i < r; i++)\n                for (int j = 0; j < c; j++) mat[i][j] = sc.nextInt();\n            for (int j = 0; j < c; j++) {\n                for (int i = 0; i < r; i++) {\n                    System.out.print(mat[i][j] + (i == r - 1 ? "" : " "));\n                }\n                System.out.println();\n            }\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "2 3\n1 2 3\n4 5 6", expectedOutput: "1 4\n2 5\n3 6", isHidden: false },
        { id: 2, input: "2 2\n1 2\n3 4", expectedOutput: "1 3\n2 4", isHidden: false }
      ]
    },
    {
      id: 5,
      title: "Check String Contains Only Digits",
      difficulty: "Easy",
      tags: ["Strings"],
      problemStatement: "Given a string S, return 'true' if the string contains only numeric digits 0-9, otherwise 'false'.",
      inputFormat: "A single string S.",
      outputFormat: "'true' or 'false'.",
      sampleInput: "123456",
      sampleOutput: "true",
      explanation: "All characters in '123456' are digits.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next();\n            boolean allDigits = !s.isEmpty();\n            for (char c : s.toCharArray()) {\n                if (!Character.isDigit(c)) { allDigits = false; break; }\n            }\n            System.out.println(allDigits);\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "123456", expectedOutput: "true", isHidden: false },
        { id: 2, input: "12a45", expectedOutput: "false", isHidden: false },
        { id: 3, input: "007", expectedOutput: "true", isHidden: true }
      ]
    },
    {
      id: 6,
      title: "Intersection of Two Arrays",
      difficulty: "Medium",
      tags: ["HashSet", "Arrays"],
      problemStatement: "Given two integer arrays, find their intersection containing unique elements sorted in ascending order.",
      inputFormat: "First line sizes N and M. Second line N integers. Third line M integers.",
      outputFormat: "Space-separated common elements.",
      sampleInput: "4 4\n1 2 2 1\n2 2 3 4",
      sampleOutput: "2",
      explanation: "The only common integer between both arrays is 2.",
      starterCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt(), m = sc.nextInt();\n            Set<Integer> set1 = new HashSet<>();\n            for (int i = 0; i < n; i++) set1.add(sc.nextInt());\n            TreeSet<Integer> intersect = new TreeSet<>();\n            for (int j = 0; j < m; j++) {\n                int val = sc.nextInt();\n                if (set1.contains(val)) intersect.add(val);\n            }\n            List<Integer> list = new ArrayList<>(intersect);\n            for (int i = 0; i < list.size(); i++) {\n                System.out.print(list.get(i) + (i == list.size() - 1 ? "" : " "));\n            }\n            System.out.println();\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "4 4\n1 2 2 1\n2 2 3 4", expectedOutput: "2", isHidden: false },
        { id: 2, input: "3 3\n4 9 5\n9 4 9", expectedOutput: "4 9", isHidden: false }
      ]
    },
    {
      id: 7,
      title: "Implement Power Function Pow(x, n)",
      difficulty: "Medium",
      tags: ["Math", "Recursion"],
      problemStatement: "Compute x raised to the power n (x^n) for integer x and non-negative integer n using fast exponentiation.",
      inputFormat: "Two integers x and n.",
      outputFormat: "A single integer result.",
      sampleInput: "2 10",
      sampleOutput: "1024",
      explanation: "2^10 = 1024.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    static long power(long x, long n) {\n        long res = 1;\n        while (n > 0) {\n            if ((n & 1) == 1) res *= x;\n            x *= x;\n            n >>= 1;\n        }\n        return res;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long x = sc.nextLong(), n = sc.nextLong();\n            System.out.println(power(x, n));\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "2 10", expectedOutput: "1024", isHidden: false },
        { id: 2, input: "3 4", expectedOutput: "81", isHidden: false },
        { id: 3, input: "5 0", expectedOutput: "1", isHidden: true }
      ]
    },
    {
      id: 8,
      title: "Find Peak Element in Array",
      difficulty: "Medium",
      tags: ["Binary Search", "Arrays"],
      problemStatement: "A peak element is an element that is strictly greater than its neighbors. Given integer array nums, find the value of any peak element.",
      inputFormat: "First line N. Second line N space-separated integers.",
      outputFormat: "Value of the peak element.",
      sampleInput: "5\n1 2 3 1 0",
      sampleOutput: "3",
      explanation: "Index 2 has value 3, which is greater than neighbor 2 and neighbor 1.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] a = new int[n];\n            for (int i = 0; i < n; i++) a[i] = sc.nextInt();\n            int low = 0, high = n - 1;\n            while (low < high) {\n                int mid = low + (high - low) / 2;\n                if (a[mid] > a[mid + 1]) high = mid;\n                else low = mid + 1;\n            }\n            System.out.println(a[low]);\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "5\n1 2 3 1 0", expectedOutput: "3", isHidden: false },
        { id: 2, input: "4\n1 2 1 3", expectedOutput: "2", isHidden: false }
      ]
    },
    {
      id: 9,
      title: "Longest Consecutive Sequence Length",
      difficulty: "Hard",
      tags: ["HashSet", "Arrays"],
      problemStatement: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) time.",
      inputFormat: "First line N. Second line N integers.",
      outputFormat: "Length of the longest consecutive sequence.",
      sampleInput: "6\n100 4 200 1 3 2",
      sampleOutput: "4",
      explanation: "The longest consecutive sequence is [1, 2, 3, 4]. Its length is 4.",
      starterCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            Set<Integer> set = new HashSet<>();\n            for (int i = 0; i < n; i++) set.add(sc.nextInt());\n            int maxStreak = 0;\n            for (int num : set) {\n                if (!set.contains(num - 1)) {\n                    int currentNum = num;\n                    int currentStreak = 1;\n                    while (set.contains(currentNum + 1)) {\n                        currentNum++;\n                        currentStreak++;\n                    }\n                    maxStreak = Math.max(maxStreak, currentStreak);\n                }\n            }\n            System.out.println(maxStreak);\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "6\n100 4 200 1 3 2", expectedOutput: "4", isHidden: false },
        { id: 2, input: "5\n10 12 11 14 13", expectedOutput: "5", isHidden: false }
      ]
    },
    {
      id: 10,
      title: "String Compression (Run Length)",
      difficulty: "Medium",
      tags: ["Strings"],
      problemStatement: "Implement basic string compression using counts of repeated characters (e.g. 'aabcccccaaa' becomes 'a2b1c5a3').",
      inputFormat: "A single lowercase string S.",
      outputFormat: "Compressed string format.",
      sampleInput: "aabcccccaaa",
      sampleOutput: "a2b1c5a3",
      explanation: "'a' repeats 2 times, 'b' 1 time, 'c' 5 times, 'a' 3 times.",
      starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next();\n            if (s.isEmpty()) return;\n            StringBuilder sb = new StringBuilder();\n            int count = 1;\n            for (int i = 1; i < s.length(); i++) {\n                if (s.charAt(i) == s.charAt(i - 1)) count++;\n                else {\n                    sb.append(s.charAt(i - 1)).append(count);\n                    count = 1;\n                }\n            }\n            sb.append(s.charAt(s.length() - 1)).append(count);\n            System.out.println(sb.toString());\n        }\n    }\n}`,
      testCases: [
        { id: 1, input: "aabcccccaaa", expectedOutput: "a2b1c5a3", isHidden: false },
        { id: 2, input: "abcd", expectedOutput: "a1b1c1d1", isHidden: false },
        { id: 3, input: "aaaa", expectedOutput: "a4", isHidden: true }
      ]
    }
  ],

  python: [
    {
      id: 1,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      tags: ["Sliding Window", "Strings"],
      problemStatement: "Given a string s, find the length of the longest substring without duplicate characters.",
      inputFormat: "A single string s.",
      outputFormat: "Print the length as an integer.",
      sampleInput: "abcabcbb",
      sampleOutput: "3",
      explanation: "The answer is 'abc', with the length of 3.",
      starterCode: `def length_of_longest_substring(s: str) -> int:\n    char_map = {}\n    left = 0\n    max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\nif __name__ == '__main__':\n    import sys\n    input_str = sys.stdin.read().strip()\n    print(length_of_longest_substring(input_str))`,
      testCases: [
        { id: 1, input: "abcabcbb", expectedOutput: "3", isHidden: false },
        { id: 2, input: "bbbbb", expectedOutput: "1", isHidden: false },
        { id: 3, input: "pwwkew", expectedOutput: "3", isHidden: true }
      ]
    },
    {
      id: 2,
      title: "Group Anagrams",
      difficulty: "Medium",
      tags: ["Hash Map", "Strings"],
      problemStatement: "Given an array of strings words, group the anagrams together. Print groups sorted alphabetically by the first word.",
      inputFormat: "A line with space-separated words.",
      outputFormat: "Each group sorted on a separate line, space-separated.",
      sampleInput: "eat tea tan ate nat bat",
      sampleOutput: "ate eat tea\nbat\nnat tan",
      explanation: "Words with identical character counts are grouped.",
      starterCode: `import sys\nfrom collections import defaultdict\n\ndef group_anagrams(words):\n    groups = defaultdict(list)\n    for w in words:\n        key = ''.join(sorted(w))\n        groups[key].append(w)\n    res = [sorted(g) for g in groups.values()]\n    res.sort(key=lambda x: x[0])\n    for g in res:\n        print(' '.join(g))\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        group_anagrams(line.split())`,
      testCases: [
        { id: 1, input: "eat tea tan ate nat bat", expectedOutput: "ate eat tea\nbat\nnat tan", isHidden: false },
        { id: 2, input: "a", expectedOutput: "a", isHidden: false }
      ]
    },
    {
      id: 3,
      title: "Product of Array Except Self",
      difficulty: "Medium",
      tags: ["Arrays", "Prefix Product"],
      problemStatement: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i] without division.",
      inputFormat: "A line of space-separated integers.",
      outputFormat: "Space-separated product elements.",
      sampleInput: "1 2 3 4",
      sampleOutput: "24 12 8 6",
      explanation: "Product for index 0 is 2*3*4 = 24. Index 1 is 1*3*4 = 12.",
      starterCode: `import sys\n\ndef product_except_self(nums):\n    n = len(nums)\n    res = [1] * n\n    prefix = 1\n    for i in range(n):\n        res[i] = prefix\n        prefix *= nums[i]\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= suffix\n        suffix *= nums[i]\n    return res\n\nif __name__ == '__main__':\n    data = sys.stdin.read().strip().split()\n    if data:\n        nums = [int(x) for x in data]\n        ans = product_except_self(nums)\n        print(' '.join(map(str, ans)))`,
      testCases: [
        { id: 1, input: "1 2 3 4", expectedOutput: "24 12 8 6", isHidden: false },
        { id: 2, input: "-1 1 0 -3 3", expectedOutput: "0 0 9 0 0", isHidden: false }
      ]
    },
    {
      id: 4,
      title: "Valid Palindrome (Alphanumeric)",
      difficulty: "Easy",
      tags: ["Two Pointers", "Strings"],
      problemStatement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
      inputFormat: "A line of text string.",
      outputFormat: "'True' or 'False'.",
      sampleInput: "A man, a plan, a canal: Panama",
      sampleOutput: "True",
      explanation: "Cleaned string is 'amanaplanacanalpanama', which is a palindrome.",
      starterCode: `import sys\n\ndef is_palindrome(s: str) -> bool:\n    cleaned = [c.lower() for c in s if c.isalnum()]\n    return cleaned == cleaned[::-1]\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    print(is_palindrome(line))`,
      testCases: [
        { id: 1, input: "A man, a plan, a canal: Panama", expectedOutput: "True", isHidden: false },
        { id: 2, input: "race a car", expectedOutput: "False", isHidden: false }
      ]
    },
    {
      id: 5,
      title: "Maximum Subarray Sum (Kadane's Algorithm)",
      difficulty: "Medium",
      tags: ["Dynamic Programming", "Arrays"],
      problemStatement: "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",
      inputFormat: "A line of space-separated integers.",
      outputFormat: "Single integer maximum sum.",
      sampleInput: "-2 1 -3 4 -1 2 1 -5 4",
      sampleOutput: "6",
      explanation: "The contiguous subarray [4, -1, 2, 1] has the largest sum = 6.",
      starterCode: `import sys\n\ndef max_sub_array(nums):\n    max_sum = cur_sum = nums[0]\n    for x in nums[1:]:\n        cur_sum = max(x, cur_sum + x)\n        max_sum = max(max_sum, cur_sum)\n    return max_sum\n\nif __name__ == '__main__':\n    data = [int(x) for x in sys.stdin.read().strip().split()]\n    if data:\n        print(max_sub_array(data))`,
      testCases: [
        { id: 1, input: "-2 1 -3 4 -1 2 1 -5 4", expectedOutput: "6", isHidden: false },
        { id: 2, input: "1", expectedOutput: "1", isHidden: false },
        { id: 3, input: "5 4 -1 7 8", expectedOutput: "23", isHidden: true }
      ]
    },
    {
      id: 6,
      title: "Word Frequency Counter",
      difficulty: "Easy",
      tags: ["Dictionary", "Strings"],
      problemStatement: "Given a sentence, count the frequency of each unique word (case-insensitive) and print them sorted alphabetically in 'word: count' format.",
      inputFormat: "A sentence of words.",
      outputFormat: "Comma-separated sorted word frequencies.",
      sampleInput: "the apple is red and the orange is orange",
      sampleOutput: "and: 1, apple: 1, is: 2, orange: 2, red: 1, the: 2",
      explanation: "Words are tallied case-insensitively and sorted alphabetically.",
      starterCode: `import sys\nfrom collections import Counter\n\nif __name__ == '__main__':\n    words = sys.stdin.read().strip().lower().split()\n    counts = Counter(words)\n    sorted_keys = sorted(counts.keys())\n    output = [f"{k}: {counts[k]}" for k in sorted_keys]\n    print(', '.join(output))`,
      testCases: [
        { id: 1, input: "the apple is red and the orange is orange", expectedOutput: "and: 1, apple: 1, is: 2, orange: 2, red: 1, the: 2", isHidden: false },
        { id: 2, input: "code code learn learn learn", expectedOutput: "code: 2, learn: 3", isHidden: false }
      ]
    },
    {
      id: 7,
      title: "Flatten a Deeply Nested List",
      difficulty: "Medium",
      tags: ["Recursion", "Lists"],
      problemStatement: "Write a function to flatten an arbitrarily nested list of integers into a single 1D flat list.",
      inputFormat: "A valid python nested list string e.g. [1, [2, [3, 4], 5], 6].",
      outputFormat: "Space-separated 1D list integers.",
      sampleInput: "[1, [2, [3, 4], 5], 6]",
      sampleOutput: "1 2 3 4 5 6",
      explanation: "All nested bracket structures are unrolled into a single sequence.",
      starterCode: `import sys, ast\n\ndef flatten(lst):\n    res = []\n    for item in lst:\n        if isinstance(item, list):\n            res.extend(flatten(item))\n        else:\n            res.append(item)\n    return res\n\nif __name__ == '__main__':\n    raw = sys.stdin.read().strip()\n    if raw:\n        parsed = ast.literal_eval(raw)\n        flat = flatten(parsed)\n        print(' '.join(map(str, flat)))`,
      testCases: [
        { id: 1, input: "[1, [2, [3, 4], 5], 6]", expectedOutput: "1 2 3 4 5 6", isHidden: false },
        { id: 2, input: "[[1, 2], [3, [4, 5]]]", expectedOutput: "1 2 3 4 5", isHidden: false }
      ]
    },
    {
      id: 8,
      title: "Merge Overlapping Intervals",
      difficulty: "Medium",
      tags: ["Sorting", "Intervals"],
      problemStatement: "Given an array of intervals [start, end], merge all overlapping intervals into non-overlapping intervals.",
      inputFormat: "Space-separated pairs representing intervals, e.g. 1 3 2 6 8 10 15 18.",
      outputFormat: "Merged intervals printed as [start,end] space-separated.",
      sampleInput: "1 3 2 6 8 10 15 18",
      sampleOutput: "[1,6] [8,10] [15,18]",
      explanation: "Intervals [1,3] and [2,6] overlap, merging into [1,6].",
      starterCode: `import sys\n\ndef merge_intervals(intervals):\n    if not intervals: return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for cur in intervals[1:]:\n        prev = merged[-1]\n        if cur[0] <= prev[1]:\n            prev[1] = max(prev[1], cur[1])\n        else:\n            merged.append(cur)\n    return merged\n\nif __name__ == '__main__':\n    nums = [int(x) for x in sys.stdin.read().strip().split()]\n    intervals = [[nums[i], nums[i+1]] for i in range(0, len(nums), 2)]\n    res = merge_intervals(intervals)\n    print(' '.join(f"[{x[0]},{x[1]}]" for x in res))`,
      testCases: [
        { id: 1, input: "1 3 2 6 8 10 15 18", expectedOutput: "[1,6] [8,10] [15,18]", isHidden: false },
        { id: 2, input: "1 4 4 5", expectedOutput: "[1,5]", isHidden: false }
      ]
    },
    {
      id: 9,
      title: "Majority Element (> N/2 occurrences)",
      difficulty: "Medium",
      tags: ["Boyer-Moore", "Algorithms"],
      problemStatement: "Given an array nums of size n, return the majority element that appears more than floor(n / 2) times.",
      inputFormat: "A line of space-separated integers.",
      outputFormat: "The majority integer.",
      sampleInput: "2 2 1 1 1 2 2",
      sampleOutput: "2",
      explanation: "Element 2 appears 4 times out of 7, which is > 7/2 = 3.",
      starterCode: `import sys\n\ndef majority_element(nums):\n    candidate = None\n    count = 0\n    for x in nums:\n        if count == 0:\n            candidate = x\n        count += (1 if x == candidate else -1)\n    return candidate\n\nif __name__ == '__main__':\n    nums = [int(x) for x in sys.stdin.read().strip().split()]\n    if nums:\n        print(majority_element(nums))`,
      testCases: [
        { id: 1, input: "2 2 1 1 1 2 2", expectedOutput: "2", isHidden: false },
        { id: 2, input: "3 2 3", expectedOutput: "3", isHidden: false }
      ]
    },
    {
      id: 10,
      title: "Spiral Matrix Traversal",
      difficulty: "Hard",
      tags: ["Matrix", "Simulation"],
      problemStatement: "Given an m x n matrix, return all elements of the matrix in spiral order clockwise.",
      inputFormat: "First line R and C. Next R lines contain C integers each.",
      outputFormat: "Space-separated integers in clockwise spiral order.",
      sampleInput: "3 3\n1 2 3\n4 5 6\n7 8 9",
      sampleOutput: "1 2 3 6 9 8 7 4 5",
      explanation: "Traverse top [1,2,3], right [6,9], bottom [8,7], left [4], center [5].",
      starterCode: `import sys\n\ndef spiral_order(matrix):\n    if not matrix: return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    while top <= bottom and left <= right:\n        for c in range(left, right + 1): res.append(matrix[top][c])\n        top += 1\n        for r in range(top, bottom + 1): res.append(matrix[r][right])\n        right -= 1\n        if top <= bottom:\n            for c in range(right, left - 1, -1): res.append(matrix[bottom][c])\n            bottom -= 1\n        if left <= right:\n            for r in range(bottom, top - 1, -1): res.append(matrix[r][left])\n            left += 1\n    return res\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().strip().split('\\n')\n    if lines and lines[0]:\n        r, c = map(int, lines[0].split())\n        mat = [list(map(int, line.split())) for line in lines[1:r+1]]\n        print(' '.join(map(str, spiral_order(mat))))`,
      testCases: [
        { id: 1, input: "3 3\n1 2 3\n4 5 6\n7 8 9", expectedOutput: "1 2 3 6 9 8 7 4 5", isHidden: false },
        { id: 2, input: "1 4\n10 20 30 40", expectedOutput: "10 20 30 40", isHidden: false }
      ]
    }
  ],

  sql: [
    {
      id: 1,
      title: "Top 3 Highest Paid Employees",
      difficulty: "Easy",
      tags: ["SELECT", "ORDER BY", "LIMIT"],
      problemStatement: "Given table Employee(id INT, name VARCHAR, salary INT, department VARCHAR), write a SQL query to retrieve the names and salaries of the top 3 highest paid employees.",
      inputFormat: "Table Employee populated with employee records.",
      outputFormat: "Table with columns [name, salary] ordered by salary descending.",
      sampleInput: "Employee: [(1,'Alice',75000,'IT'), (2,'Bob',90000,'HR'), (3,'Charlie',85000,'IT'), (4,'David',60000,'Finance')]",
      sampleOutput: "| name | salary |\n| Bob | 90000 |\n| Charlie | 85000 |\n| Alice | 75000 |",
      explanation: "Sort by salary descending and limit results to 3 rows.",
      starterCode: `SELECT name, salary\nFROM Employee\nORDER BY salary DESC\nLIMIT 3;`,
      testCases: [
        { id: 1, input: "SELECT name, salary FROM Employee ORDER BY salary DESC LIMIT 3;", expectedOutput: "| name | salary |\n| Bob | 90000 |\n| Charlie | 85000 |\n| Alice | 75000 |", isHidden: false }
      ]
    },
    {
      id: 2,
      title: "Find Duplicate Emails",
      difficulty: "Easy",
      tags: ["GROUP BY", "HAVING"],
      problemStatement: "Write a SQL query to report all the duplicate emails in table Person(id INT, email VARCHAR).",
      inputFormat: "Table Person populated with id and email.",
      outputFormat: "Table with column [email].",
      sampleInput: "Person: [(1,'a@b.com'), (2,'c@d.com'), (3,'a@b.com')]",
      sampleOutput: "| email |\n| a@b.com |",
      explanation: "Email 'a@b.com' appears twice, so it is reported.",
      starterCode: `SELECT email\nFROM Person\nGROUP BY email\nHAVING COUNT(email) > 1;`,
      testCases: [
        { id: 1, input: "SELECT email FROM Person GROUP BY email HAVING COUNT(email) > 1;", expectedOutput: "| email |\n| a@b.com |", isHidden: false }
      ]
    },
    {
      id: 3,
      title: "Department-Wise Average Salary > 60000",
      difficulty: "Medium",
      tags: ["Aggregation", "HAVING"],
      problemStatement: "Given table Employee(id, name, salary, department), find all departments with an average salary greater than 60,000.",
      inputFormat: "Table Employee with department and salary.",
      outputFormat: "Columns [department, avg_salary] rounded to 2 decimals.",
      sampleInput: "Employee: IT avg=80000, HR avg=50000, Finance avg=65000",
      sampleOutput: "| department | avg_salary |\n| Finance | 65000 |\n| IT | 80000 |",
      explanation: "IT and Finance exceed 60,000 threshold.",
      starterCode: `SELECT department, ROUND(AVG(salary), 2) AS avg_salary\nFROM Employee\nGROUP BY department\nHAVING AVG(salary) > 60000\nORDER BY avg_salary ASC;`,
      testCases: [
        { id: 1, input: "SELECT department FROM Employee GROUP BY department HAVING AVG(salary) > 60000;", expectedOutput: "| department | avg_salary |\n| Finance | 65000 |\n| IT | 80000 |", isHidden: false }
      ]
    },
    {
      id: 4,
      title: "Employees Earning More Than Their Managers",
      difficulty: "Medium",
      tags: ["Self Join"],
      problemStatement: "Table Employee has columns (id INT, name VARCHAR, salary INT, managerId INT). Write a query to find the employees who earn more than their managers.",
      inputFormat: "Employee table containing employee and manager relations.",
      outputFormat: "Column [Employee].",
      sampleInput: "Joe earns 70000 (manager Sam earns 60000); Henry earns 80000 (manager Max earns 90000)",
      sampleOutput: "| Employee |\n| Joe |",
      explanation: "Joe's salary (70000) > Sam's salary (60000).",
      starterCode: `SELECT e.name AS Employee\nFROM Employee e\nJOIN Employee m ON e.managerId = m.id\nWHERE e.salary > m.salary;`,
      testCases: [
        { id: 1, input: "SELECT e.name FROM Employee e JOIN Employee m ON e.managerId = m.id WHERE e.salary > m.salary;", expectedOutput: "| Employee |\n| Joe |", isHidden: false }
      ]
    },
    {
      id: 5,
      title: "Second Highest Salary",
      difficulty: "Medium",
      tags: ["Subquery"],
      problemStatement: "Write a SQL query to get the second highest distinct salary from the Employee table. Return NULL if no second highest exists.",
      inputFormat: "Employee table.",
      outputFormat: "Column [SecondHighestSalary].",
      sampleInput: "Salaries: 100, 200, 300",
      sampleOutput: "| SecondHighestSalary |\n| 200 |",
      explanation: "Highest is 300, second highest is 200.",
      starterCode: `SELECT MAX(salary) AS SecondHighestSalary\nFROM Employee\nWHERE salary < (\n    SELECT MAX(salary)\n    FROM Employee\n);`,
      testCases: [
        { id: 1, input: "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);", expectedOutput: "| SecondHighestSalary |\n| 200 |", isHidden: false }
      ]
    },
    {
      id: 6,
      title: "Count Orders per Customer",
      difficulty: "Medium",
      tags: ["LEFT JOIN", "GROUP BY"],
      problemStatement: "Given Customers(id, name) and Orders(orderId, customerId), find customer name and the number of orders they placed. Include customers with 0 orders.",
      inputFormat: "Customers and Orders tables.",
      outputFormat: "Columns [name, order_count] ordered by order_count DESC.",
      sampleInput: "Alice (2 orders), Bob (0 orders), Charlie (5 orders)",
      sampleOutput: "| name | order_count |\n| Charlie | 5 |\n| Alice | 2 |\n| Bob | 0 |",
      explanation: "LEFT JOIN retains customers who haven't placed orders.",
      starterCode: `SELECT c.name, COUNT(o.orderId) AS order_count\nFROM Customers c\nLEFT JOIN Orders o ON c.id = o.customerId\nGROUP BY c.id, c.name\nORDER BY order_count DESC;`,
      testCases: [
        { id: 1, input: "SELECT c.name, COUNT(o.orderId) FROM Customers c LEFT JOIN Orders o ON c.id = o.customerId GROUP BY c.id, c.name;", expectedOutput: "| name | order_count |\n| Charlie | 5 |\n| Alice | 2 |\n| Bob | 0 |", isHidden: false }
      ]
    },
    {
      id: 7,
      title: "Find Customers Who Never Ordered",
      difficulty: "Easy",
      tags: ["Subquery", "NOT IN"],
      problemStatement: "Find all customer names who never placed any order.",
      inputFormat: "Customers and Orders tables.",
      outputFormat: "Column [Customers].",
      sampleInput: "Customers: Henry, Sam, Max. Orders placed by: Henry, Max.",
      sampleOutput: "| Customers |\n| Sam |",
      explanation: "Sam never placed an order.",
      starterCode: `SELECT name AS Customers\nFROM Customers\nWHERE id NOT IN (\n    SELECT customerId FROM Orders WHERE customerId IS NOT NULL\n);`,
      testCases: [
        { id: 1, input: "SELECT name FROM Customers WHERE id NOT IN (SELECT customerId FROM Orders WHERE customerId IS NOT NULL);", expectedOutput: "| Customers |\n| Sam |", isHidden: false }
      ]
    },
    {
      id: 8,
      title: "Rank Scores without Gaps (DENSE_RANK)",
      difficulty: "Hard",
      tags: ["Window Functions"],
      problemStatement: "Write a SQL query to rank scores from table Scores(id, score). If there is a tie, both should have the same rank without gaps in rank numbers.",
      inputFormat: "Scores table with scores.",
      outputFormat: "Columns [score, rank] ordered by score DESC.",
      sampleInput: "Scores: 3.50, 3.65, 4.00, 3.85, 4.00, 3.65",
      sampleOutput: "| score | rank |\n| 4.00 | 1 |\n| 3.85 | 2 |\n| 3.65 | 3 |\n| 3.50 | 4 |",
      explanation: "DENSE_RANK ensures consecutive integers for ranks.",
      starterCode: `SELECT score,\n       DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank'\nFROM Scores;`,
      testCases: [
        { id: 1, input: "SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank' FROM Scores;", expectedOutput: "| score | rank |\n| 4.00 | 1 |\n| 3.85 | 2 |\n| 3.65 | 3 |\n| 3.50 | 4 |", isHidden: false }
      ]
    },
    {
      id: 9,
      title: "Monthly Sales Revenue",
      difficulty: "Medium",
      tags: ["Date Functions", "GROUP BY"],
      problemStatement: "Given table Sales(id, amount, sale_date), compute the total sales revenue per month formatted as 'YYYY-MM'.",
      inputFormat: "Sales table with sale_date and amount.",
      outputFormat: "Columns [month, total_revenue] ordered by month ASC.",
      sampleInput: "Sales across 2024-01 and 2024-02",
      sampleOutput: "| month | total_revenue |\n| 2024-01 | 14500 |\n| 2024-02 | 22300 |",
      explanation: "Groups records by year-month and computes SUM(amount).",
      starterCode: `SELECT strftime('%Y-%m', sale_date) AS month,\n       SUM(amount) AS total_revenue\nFROM Sales\nGROUP BY month\nORDER BY month ASC;`,
      testCases: [
        { id: 1, input: "SELECT strftime('%Y-%m', sale_date) AS month, SUM(amount) FROM Sales GROUP BY month;", expectedOutput: "| month | total_revenue |\n| 2024-01 | 14500 |\n| 2024-02 | 22300 |", isHidden: false }
      ]
    },
    {
      id: 10,
      title: "Delete Duplicate Records",
      difficulty: "Hard",
      tags: ["DELETE", "JOIN"],
      problemStatement: "Write a SQL query to delete all duplicate email entries in Person, keeping only one unique email with the smallest id.",
      inputFormat: "Person table with duplicate emails.",
      outputFormat: "Table after deleting higher id duplicates.",
      sampleInput: "[(1, 'john@example.com'), (2, 'bob@example.com'), (3, 'john@example.com')]",
      sampleOutput: "Query OK, duplicate records removed. Kept id 1 and 2.",
      explanation: "Record with id 3 is deleted as id 1 is smaller.",
      starterCode: `DELETE p1\nFROM Person p1\nJOIN Person p2 ON p1.email = p2.email\nWHERE p1.id > p2.id;`,
      testCases: [
        { id: 1, input: "DELETE p1 FROM Person p1 JOIN Person p2 ON p1.email = p2.email WHERE p1.id > p2.id;", expectedOutput: "Query OK, duplicate records removed. Kept id 1 and 2.", isHidden: false }
      ]
    }
  ],

  webdev: [
    {
      id: 1,
      title: "Interactive Counter Application",
      difficulty: "Easy",
      tags: ["DOM Manipulation", "Events"],
      problemStatement: "Create an interactive counter with display '#count-display', '#increment-btn', '#decrement-btn', and '#reset-btn'. When clicked, increment by 1, decrement by 1, or reset to 0. Update color to green if > 0, red if < 0, and black if 0.",
      inputFormat: "User button clicks on + , - , and Reset.",
      outputFormat: "Updated counter text and text color in DOM.",
      sampleInput: "Click increment twice",
      sampleOutput: "Counter displays '2'",
      explanation: "State variable `count` is updated and DOM textContent is synced with color conditioning.",
      starterCode: `<!-- HTML -->\n<div class="counter-box" style="text-align: center; font-family: sans-serif; padding: 20px;">\n  <h1 id="count-display" style="font-size: 48px; margin: 10px 0; color: #000;">0</h1>\n  <div style="display: flex; gap: 10px; justify-content: center;">\n    <button id="decrement-btn" style="padding: 10px 20px; font-size: 18px; border-radius: 6px; cursor: pointer;">- Decrement</button>\n    <button id="reset-btn" style="padding: 10px 20px; font-size: 18px; border-radius: 6px; cursor: pointer;">Reset</button>\n    <button id="increment-btn" style="padding: 10px 20px; font-size: 18px; border-radius: 6px; cursor: pointer; background: #2563eb; color: #fff;">+ Increment</button>\n  </div>\n</div>\n\n<script>\nlet count = 0;\nconst display = document.getElementById('count-display');\n\nfunction updateUI() {\n  display.innerText = count;\n  if (count > 0) display.style.color = '#16a34a';\n  else if (count < 0) display.style.color = '#dc2626';\n  else display.style.color = '#000000';\n}\n\ndocument.getElementById('increment-btn').addEventListener('click', () => {\n  count++;\n  updateUI();\n});\n\ndocument.getElementById('decrement-btn').addEventListener('click', () => {\n  count--;\n  updateUI();\n});\n\ndocument.getElementById('reset-btn').addEventListener('click', () => {\n  count = 0;\n  updateUI();\n});\n</script>`,
      testCases: [
        { id: 1, input: "Increment click", expectedOutput: "Count: 1", isHidden: false },
        { id: 2, input: "Reset click", expectedOutput: "Count: 0", isHidden: false }
      ]
    },
    {
      id: 2,
      title: "Dynamic To-Do List with Add & Delete",
      difficulty: "Easy",
      tags: ["DOM", "Events", "List"],
      problemStatement: "Create a task manager with input '#task-input', '#add-btn', and a list '#todo-list'. When '#add-btn' is clicked (or Enter key pressed), append a list item with a 'Delete' button. Clicking 'Delete' removes the item.",
      inputFormat: "Typing task string and clicking 'Add'.",
      outputFormat: "Appends <li> with task text and delete button.",
      sampleInput: "Enter 'Solve LeetCode' and click Add",
      sampleOutput: "Task added to list with working delete button",
      explanation: "Create `<li>` element dynamically, assign text content, and wire delete handler.",
      starterCode: `<div style="max-width: 400px; margin: 20px auto; font-family: sans-serif;">\n  <h2>My To-Do List</h2>\n  <div style="display: flex; gap: 8px;">\n    <input id="task-input" type="text" placeholder="Enter new task..." style="flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 6px;" />\n    <button id="add-btn" style="padding: 10px 16px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer;">Add</button>\n  </div>\n  <ul id="todo-list" style="margin-top: 20px; padding-left: 20px; line-height: 2;"></ul>\n</div>\n\n<script>\nconst input = document.getElementById('task-input');\nconst addBtn = document.getElementById('add-btn');\nconst list = document.getElementById('todo-list');\n\nfunction addTask() {\n  const text = input.value.trim();\n  if (!text) return;\n  const li = document.createElement('li');\n  li.style.display = 'flex';\n  li.style.justifyContent = 'space-between';\n  li.style.marginBottom = '8px';\n  li.innerHTML = \`<span>\${text}</span> <button style="background: #fee2e2; color: #dc2626; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer;" onclick="this.parentElement.remove()">✕ Delete</button>\`;\n  list.appendChild(li);\n  input.value = '';\n}\n\naddBtn.addEventListener('click', addTask);\ninput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addTask(); });\n</script>`,
      testCases: [
        { id: 1, input: "Add 'Study Java'", expectedOutput: "List length increases by 1", isHidden: false }
      ]
    },
    {
      id: 3,
      title: "Real-time Live Form Validation",
      difficulty: "Medium",
      tags: ["Forms", "RegEx", "Validation"],
      problemStatement: "Build a form with Name, Email, and Password. Validate in real-time: Name >= 3 chars, Email has valid format, Password >= 8 chars. Show green border when valid and red error message when invalid.",
      inputFormat: "User typing input into form fields.",
      outputFormat: "Live validation error messages and submit button state.",
      sampleInput: "email: 'test@domain.com', password: 'secretpassword123'",
      sampleOutput: "Form becomes valid and ready to submit.",
      explanation: "Add input event listeners to test regex and string length constraints.",
      starterCode: `<div style="max-width: 380px; margin: 20px auto; font-family: sans-serif;">\n  <h3>Registration Form</h3>\n  <div style="margin-bottom: 12px;">\n    <label>Name:</label>\n    <input id="name-input" type="text" style="width: 100%; padding: 8px; margin-top: 4px;" />\n    <small id="name-err" style="color: red; display: none;">Name must be at least 3 characters</small>\n  </div>\n  <div style="margin-bottom: 12px;">\n    <label>Email:</label>\n    <input id="email-input" type="email" style="width: 100%; padding: 8px; margin-top: 4px;" />\n    <small id="email-err" style="color: red; display: none;">Please enter a valid email</small>\n  </div>\n  <div style="margin-bottom: 16px;">\n    <label>Password:</label>\n    <input id="pass-input" type="password" style="width: 100%; padding: 8px; margin-top: 4px;" />\n    <small id="pass-err" style="color: red; display: none;">Password must be at least 8 characters</small>\n  </div>\n  <button id="submit-btn" disabled style="width: 100%; padding: 10px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer;">Submit Registration</button>\n</div>\n\n<script>\nconst nameIn = document.getElementById('name-input');\nconst emailIn = document.getElementById('email-input');\nconst passIn = document.getElementById('pass-input');\nconst submitBtn = document.getElementById('submit-btn');\n\nfunction validate() {\n  const nameValid = nameIn.value.trim().length >= 3;\n  const emailValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailIn.value.trim());\n  const passValid = passIn.value.length >= 8;\n\n  document.getElementById('name-err').style.display = (nameIn.value && !nameValid) ? 'block' : 'none';\n  document.getElementById('email-err').style.display = (emailIn.value && !emailValid) ? 'block' : 'none';\n  document.getElementById('pass-err').style.display = (passIn.value && !passValid) ? 'block' : 'none';\n\n  submitBtn.disabled = !(nameValid && emailValid && passValid);\n  submitBtn.style.opacity = submitBtn.disabled ? '0.5' : '1.0';\n}\n\n[nameIn, emailIn, passIn].forEach(el => el.addEventListener('input', validate));\n</script>`,
      testCases: [
        { id: 1, input: "Valid email and pass", expectedOutput: "Button enabled", isHidden: false }
      ]
    },
    {
      id: 4,
      title: "Real-Time Digital Clock with AM/PM",
      difficulty: "Easy",
      tags: ["setInterval", "Date"],
      problemStatement: "Create a digital clock display '#clock' that updates every second showing current time in 'HH:MM:SS AM/PM' with double-digit formatting for hours, minutes, and seconds.",
      inputFormat: "System time.",
      outputFormat: "'HH:MM:SS AM/PM' string.",
      sampleInput: "System time at 14:05:09",
      sampleOutput: "'02:05:09 PM'",
      explanation: "Use `setInterval(updateClock, 1000)` and `padStart(2, '0')`.",
      starterCode: `<div style="text-align: center; padding: 40px; font-family: monospace; background: #0f172a; color: #38bdf8; border-radius: 12px; max-width: 320px; margin: 20px auto;">\n  <div style="font-size: 14px; color: #94a3b8; text-transform: uppercase;">Current System Time</div>\n  <h1 id="clock" style="font-size: 40px; margin: 10px 0;">00:00:00 AM</h1>\n</div>\n\n<script>\nfunction updateClock() {\n  const now = new Date();\n  let hours = now.getHours();\n  const minutes = String(now.getMinutes()).padStart(2, '0');\n  const seconds = String(now.getSeconds()).padStart(2, '0');\n  const ampm = hours >= 12 ? 'PM' : 'AM';\n  hours = hours % 12 || 12;\n  const formattedHours = String(hours).padStart(2, '0');\n  document.getElementById('clock').innerText = \`\${formattedHours}:\${minutes}:\${seconds} \${ampm}\`;\n}\nsetInterval(updateClock, 1000);\nupdateClock();\n</script>`,
      testCases: [
        { id: 1, input: "Initial clock render", expectedOutput: "Matches valid HH:MM:SS format", isHidden: false }
      ]
    },
    {
      id: 5,
      title: "Dynamic Product Search & Instant Filter",
      difficulty: "Easy",
      tags: ["Filter", "DOM"],
      problemStatement: "Create a search input '#search-input' that dynamically filters product list items inside '#product-list' in real-time as the user types (case-insensitive).",
      inputFormat: "User keystrokes in search input.",
      outputFormat: "Visible matching product items only.",
      sampleInput: "Search 'apple'",
      sampleOutput: "Only 'Apple iPhone' and 'Apple MacBook' remain visible.",
      explanation: "Iterate through list items, compare innerText against query with `includes()`, and set `display: none` on non-matching elements.",
      starterCode: `<div style="max-width: 400px; margin: 20px auto; font-family: sans-serif;">\n  <input id="search-input" type="text" placeholder="Search devices..." style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 16px;" />\n  <ul id="product-list" style="list-style: none; padding: 0;">\n    <li style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Apple iPhone 16</li>\n    <li style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Samsung Galaxy S24</li>\n    <li style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Apple MacBook Pro</li>\n    <li style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Google Pixel 9</li>\n    <li style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Dell XPS 15</li>\n  </ul>\n</div>\n\n<script>\nconst searchInput = document.getElementById('search-input');\nconst items = document.querySelectorAll('#product-list li');\n\nsearchInput.addEventListener('input', () => {\n  const query = searchInput.value.toLowerCase().trim();\n  items.forEach(li => {\n    const text = li.innerText.toLowerCase();\n    li.style.display = text.includes(query) ? '' : 'none';\n  });\n});\n</script>`,
      testCases: [
        { id: 1, input: "Query 'Apple'", expectedOutput: "2 items visible", isHidden: false }
      ]
    },
    {
      id: 6,
      title: "Interactive FAQ Accordion",
      difficulty: "Medium",
      tags: ["Accordion", "Animation"],
      problemStatement: "Build an interactive accordion where clicking any question toggles its answer visibility and rotates the arrow icon. Only one question can be open at a time.",
      inputFormat: "Clicking accordion item header.",
      outputFormat: "Toggles selected answer open and closes others.",
      sampleInput: "Click Question 1",
      sampleOutput: "Question 1 answer unfolds smoothly.",
      explanation: "Add click listener on headers, check active class, close other items and toggle current.",
      starterCode: `<div style="max-width: 450px; margin: 20px auto; font-family: sans-serif;">\n  <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 8px; overflow: hidden;">\n    <div class="faq-header" style="padding: 12px 16px; background: #f8fafc; cursor: pointer; display: flex; justify-content: space-between; font-weight: 600;">\n      <span>What is CPMS?</span> <span class="arrow">▼</span>\n    </div>\n    <div class="faq-body" style="padding: 12px 16px; display: none; color: #475569; background: #fff;">\n      College Placement Management System for students and recruiters.\n    </div>\n  </div>\n  <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 8px; overflow: hidden;">\n    <div class="faq-header" style="padding: 12px 16px; background: #f8fafc; cursor: pointer; display: flex; justify-content: space-between; font-weight: 600;">\n      <span>Who is eligible for drives?</span> <span class="arrow">▼</span>\n    </div>\n    <div class="faq-body" style="padding: 12px 16px; display: none; color: #475569; background: #fff;">\n      Students matching company cutoff criteria in CGPA and backlogs.\n    </div>\n  </div>\n</div>\n\n<script>\nconst headers = document.querySelectorAll('.faq-header');\nheaders.forEach(h => {\n  h.addEventListener('click', () => {\n    const body = h.nextElementSibling;\n    const isOpen = body.style.display === 'block';\n    document.querySelectorAll('.faq-body').forEach(b => b.style.display = 'none');\n    document.querySelectorAll('.arrow').forEach(a => a.style.transform = 'rotate(0deg)');\n    if (!isOpen) {\n      body.style.display = 'block';\n      h.querySelector('.arrow').style.transform = 'rotate(180deg)';\n    }\n  });\n});\n</script>`,
      testCases: [
        { id: 1, input: "Header click", expectedOutput: "Toggles answer block", isHidden: false }
      ]
    },
    {
      id: 7,
      title: "Show / Hide Password Toggle",
      difficulty: "Easy",
      tags: ["Inputs", "UI Component"],
      problemStatement: "Create a password input field with a toggle button that switches the input type between 'password' and 'text', updating the button label to 'Hide' or 'Show'.",
      inputFormat: "Clicking toggle button.",
      outputFormat: "Switches input type and button text.",
      sampleInput: "Click Show",
      sampleOutput: "Input type changes to 'text' and button says 'Hide'.",
      explanation: "Toggle between `input.type = 'text'` and `input.type = 'password'`.",
      starterCode: `<div style="max-width: 350px; margin: 20px auto; font-family: sans-serif;">\n  <label style="display: block; margin-bottom: 6px; font-weight: 600;">Enter Password:</label>\n  <div style="display: flex; position: relative;">\n    <input id="pwd" type="password" value="SuperSecret123" style="flex: 1; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px;" />\n    <button id="toggle-pwd" style="padding: 10px 14px; margin-left: 6px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">Show</button>\n  </div>\n</div>\n\n<script>\nconst pwdInput = document.getElementById('pwd');\nconst toggleBtn = document.getElementById('toggle-pwd');\ntoggleBtn.addEventListener('click', () => {\n  if (pwdInput.type === 'password') {\n    pwdInput.type = 'text';\n    toggleBtn.innerText = 'Hide';\n  } else {\n    pwdInput.type = 'password';\n    toggleBtn.innerText = 'Show';\n  }\n});\n</script>`,
      testCases: [
        { id: 1, input: "Toggle click", expectedOutput: "type === 'text'", isHidden: false }
      ]
    },
    {
      id: 8,
      title: "Interactive 5-Star Rating Component",
      difficulty: "Medium",
      tags: ["Events", "Rating"],
      problemStatement: "Build an interactive 5-star rating widget. When hovering over stars, all stars up to the hovered one highlight in gold. When clicked, lock the rating and show '#rating-result' text.",
      inputFormat: "Mouseover and click events on stars.",
      outputFormat: "Highlighted stars and 'You selected X out of 5 stars'.",
      sampleInput: "Click 4th star",
      sampleOutput: "'You selected 4 out of 5 stars'",
      explanation: "Track active rating state; apply active gold color on stars <= index.",
      starterCode: `<div style="text-align: center; margin: 20px auto; font-family: sans-serif;">\n  <h3>Rate Your Interview Experience</h3>\n  <div id="star-box" style="font-size: 36px; cursor: pointer;">\n    <span class="star" data-idx="1" style="color: #cbd5e1;">★</span>\n    <span class="star" data-idx="2" style="color: #cbd5e1;">★</span>\n    <span class="star" data-idx="3" style="color: #cbd5e1;">★</span>\n    <span class="star" data-idx="4" style="color: #cbd5e1;">★</span>\n    <span class="star" data-idx="5" style="color: #cbd5e1;">★</span>\n  </div>\n  <p id="rating-result" style="color: #475569; font-weight: 600; margin-top: 10px;">Select a star rating</p>\n</div>\n\n<script>\nconst stars = document.querySelectorAll('.star');\nconst result = document.getElementById('rating-result');\nlet selectedRating = 0;\n\nfunction highlight(rating) {\n  stars.forEach((s, idx) => {\n    s.style.color = (idx < rating) ? '#f59e0b' : '#cbd5e1';\n  });\n}\n\nstars.forEach(s => {\n  s.addEventListener('mouseover', () => highlight(s.dataset.idx));\n  s.addEventListener('mouseout', () => highlight(selectedRating));\n  s.addEventListener('click', () => {\n    selectedRating = s.dataset.idx;\n    highlight(selectedRating);\n    result.innerText = \`You selected \${selectedRating} out of 5 stars\`;\n  });\n});\n</script>`,
      testCases: [
        { id: 1, input: "Select 5 stars", expectedOutput: "You selected 5 out of 5 stars", isHidden: false }
      ]
    },
    {
      id: 9,
      title: "Modal Dialog with Backdrop & Escape Close",
      difficulty: "Medium",
      tags: ["Modal", "Keyboard Events"],
      problemStatement: "Build a modal dialog that opens on clicking '#open-modal', closes on clicking '#close-modal', clicking outside on the backdrop, or pressing the 'Escape' key.",
      inputFormat: "Clicking open/close buttons, backdrop click, or Escape key.",
      outputFormat: "Modal visibility toggles between none and flex.",
      sampleInput: "Click Open Modal then press Escape",
      sampleOutput: "Modal opens, then gracefully closes.",
      explanation: "Toggle modal wrapper display style and listen to 'keydown' for `e.key === 'Escape'`.",
      starterCode: `<div style="text-align: center; margin: 30px auto; font-family: sans-serif;">\n  <button id="open-modal" style="padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer;">Open Offer Details Modal</button>\n\n  <div id="modal-backdrop" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); align-items: center; justify-content: center; z-index: 1000;">\n    <div style="background: white; padding: 24px; border-radius: 12px; width: 90%; max-width: 400px; text-align: left; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">\n      <div style="display: flex; justify-content: space-between; align-items: center;">\n        <h3 style="margin: 0;">Placement Drive Confirmed</h3>\n        <button id="close-modal" style="background: none; border: none; font-size: 20px; cursor: pointer;">✕</button>\n      </div>\n      <p style="color: #64748b; margin-top: 12px;">Your technical assessment round has been scheduled for tomorrow at 10:00 AM.</p>\n    </div>\n  </div>\n</div>\n\n<script>\nconst modal = document.getElementById('modal-backdrop');\nconst openBtn = document.getElementById('open-modal');\nconst closeBtn = document.getElementById('close-modal');\n\nfunction openM() { modal.style.display = 'flex'; }\nfunction closeM() { modal.style.display = 'none'; }\n\nopenBtn.addEventListener('click', openM);\ncloseBtn.addEventListener('click', closeM);\nmodal.addEventListener('click', (e) => { if (e.target === modal) closeM(); });\ndocument.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeM(); });\n</script>`,
      testCases: [
        { id: 1, input: "Open and Close", expectedOutput: "Modal visibility correctly toggled", isHidden: false }
      ]
    },
    {
      id: 10,
      title: "Dark / Light Mode Theme Switcher",
      difficulty: "Medium",
      tags: ["Theme", "localStorage"],
      problemStatement: "Create a theme toggle button '#theme-toggle' that switches between Dark Mode (#0f172a bg, #ffffff text) and Light Mode (#ffffff bg, #0f172a text), persisting the user's choice in localStorage.",
      inputFormat: "Clicking theme switcher button.",
      outputFormat: "Theme toggles and persists in localStorage.",
      sampleInput: "Click toggle button",
      sampleOutput: "Toggles theme to Dark / Light mode.",
      explanation: "Toggle class or inline CSS properties and store `localStorage.setItem('theme', theme)`.",
      starterCode: `<div id="theme-card" style="max-width: 400px; margin: 30px auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; font-family: sans-serif; text-align: center; background: #ffffff; color: #0f172a; transition: background 0.3s, color 0.3s;">\n  <h3 id="theme-title">Current Theme: Light Mode</h3>\n  <p style="font-size: 14px;">Toggle themes seamlessly across your preparation session.</p>\n  <button id="theme-toggle" style="padding: 10px 18px; border-radius: 20px; border: 1px solid #cbd5e1; cursor: pointer; font-weight: 600; margin-top: 10px;">🌙 Switch to Dark Mode</button>\n</div>\n\n<script>\nconst card = document.getElementById('theme-card');\nconst title = document.getElementById('theme-title');\nconst btn = document.getElementById('theme-toggle');\n\nfunction applyTheme(isDark) {\n  if (isDark) {\n    card.style.background = '#0f172a';\n    card.style.color = '#f8fafc';\n    card.style.borderColor = '#334155';\n    title.innerText = 'Current Theme: Dark Mode';\n    btn.innerText = '☀️ Switch to Light Mode';\n  } else {\n    card.style.background = '#ffffff';\n    card.style.color = '#0f172a';\n    card.style.borderColor = '#e2e8f0';\n    title.innerText = 'Current Theme: Light Mode';\n    btn.innerText = '🌙 Switch to Dark Mode';\n  }\n}\n\nlet dark = false;\nbtn.addEventListener('click', () => {\n  dark = !dark;\n  applyTheme(dark);\n});\n</script>`,
      testCases: [
        { id: 1, input: "Toggle theme", expectedOutput: "Switches background to dark/light", isHidden: false }
      ]
    }
  ]
};
