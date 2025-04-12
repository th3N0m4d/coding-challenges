# 🧠 Coding Challenges

[![TypeScript](https://img.shields.io/badge/code-TypeScript-blue)](https://github.com/th3N0m4d/coding-challenges/tree/main/javascript)
[![Python](https://img.shields.io/badge/code-Python-yellow)](https://github.com/th3N0m4d/coding-challenges/tree/main/python)
[![Build](https://img.shields.io/github/actions/workflow/status/th3N0m4d/coding-challenges/ci.yml?branch=main)](https://github.com/th3N0m4d/coding-challenges/actions)
[![License](https://img.shields.io/github/license/th3N0m4d/coding-challenges)](./LICENSE)

---

## 🧪 About

This repo contains algorithm and data structure challenges implemented with **Test-Driven Development (TDD)** in:

- [TypeScript](./javascript)
- [Python](./python)

The goal is to sharpen algorithmic thinking, practice clean code, and maintain discipline through proper testing and structure.

> _"Amateurs hack. Pros test first."_

---

## 🗂️ Folder Structure

```
coding-challenges/
├── javascript/        # TypeScript challenges
│   └── leetcode/
│       ├── two-sum.ts
│       └── two-sum.test.ts
├── python/            # Python equivalents
│   └── leetcode/
│       ├── two_sum.py
│       └── test_two_sum.py
└── README.md
```

---

## 🚀 Scripts

### TypeScript

```bash
yarn dev               # Run main TS script with tsx
yarn test              # Run all tests
yarn test:leetcode     # Run only LeetCode challenge tests
yarn lint              # Lint TypeScript files
yarn typecheck         # Static type check
```

### Python

```bash
source .venv/bin/activate   # Activate virtualenv
make test                   # Run tests with pytest
make lint                   # Lint Python files
make format                 # Format with black
```

---

## 📌 Platforms Covered

- [LeetCode](https://leetcode.com)
- [Codewars](https://www.codewars.com)
- [HackerRank](https://www.hackerrank.com)

---

## 📈 Roadmap

- [x] TypeScript base setup (Jest, ESLint, TSX)
- [ ] Python base setup (pytest, virtualenv)
- [ ] GitHub Actions CI pipeline
- [ ] Add difficulty labels to each challenge
- [ ] Track time complexity per solution
- [ ] Python TDD fluency

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
