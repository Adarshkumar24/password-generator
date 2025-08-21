# Contributing to Modern Password Generator

First off, thank you for considering contributing to the Modern Password Generator! 🎉

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Issue Guidelines](#issue-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues as you might find that you don't need to create one. When you create a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Include browser and version information**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected**
- **Explain why this enhancement would be useful**

### 🔧 Code Contributions

Unsure where to begin contributing? You can start by looking through these beginner-friendly issues:

- **Good First Issue** - issues that should only require a few lines of code
- **Help Wanted** - issues that should be a bit more involved than beginner issues

## 🛠️ Development Setup

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/password-generator.git
   cd password-generator
   ```

3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start a local server** (optional):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   ```

5. **Make your changes** and test them thoroughly
6. **Commit** your changes:
   ```bash
   git add .
   git commit -m "Add some feature"
   ```

7. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Submit a pull request**

## 🔄 Pull Request Process

1. **Fill in the required template**
2. **Include screenshots** for UI changes
3. **Update documentation** if needed
4. **Test across different browsers**
5. **Ensure responsive design** works on mobile
6. **Follow the code style guidelines**

### Pull Request Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] Responsive design verified

## Screenshots (if applicable)
Include before/after screenshots for UI changes.
```

## 🎨 Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Maintain consistent indentation (2 spaces)
- Use meaningful class and ID names

### CSS
- Follow BEM methodology when possible
- Use CSS custom properties for colors and spacing
- Maintain mobile-first approach
- Include vendor prefixes when necessary
- Group related properties together

### JavaScript
- Use ES6+ features when appropriate
- Use meaningful variable and function names
- Include comments for complex logic
- Follow consistent indentation (2 spaces)
- Avoid global variables when possible

### Example Code Style

```css
/* Good */
.password-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.password-display:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}
```

```javascript
// Good
function generateSecurePassword(length, options) {
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
  
  if (length < 1 || length > 100) {
    throw new Error('Password length must be between 1 and 100');
  }
  
  // Implementation details...
}
```

## 🐛 Issue Guidelines

### Bug Reports
Use the bug report template and include:
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests
Use the feature request template and include:
- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Mockups or examples if applicable

## 🔍 Code Review Process

1. **Automated checks** must pass
2. **Manual review** by maintainers
3. **Testing** on multiple browsers
4. **Documentation** updates if needed
5. **Approval** from at least one maintainer

## 🏷️ Labels

We use the following labels to categorize issues and PRs:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements or additions to documentation
- `duplicate` - This issue or PR already exists
- `invalid` - This doesn't seem right
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 📞 Getting Help

If you need help with contributing, feel free to:
- Open an issue with the `question` label
- Reach out to the maintainers
- Join discussions in existing issues

## 🙏 Recognition

Contributors will be recognized in the README.md file and releases.

---

**Thank you for contributing to make this project better!** 🚀
