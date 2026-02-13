# RG Foundations Website

Welcome to the RG Foundations website repository! This project contains the official website for RG Foundations, an alternative educational setting that provides individualized instruction and support for students with special needs.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Best Practices](#best-practices)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This is a single-page Angular application that serves as the public-facing website for RG Foundations. The site provides information about:

- The school's philosophy and mission
- Academic programs and curriculum
- Team members and staff
- Tuition and fees
- Contact information and enrollment inquiries

The website is built with Angular 14 and uses UIKit for styling and responsive design.

## 🛠 Technology Stack

- **Framework**: Angular 14.2.1
- **Language**: TypeScript 4.6.4
- **Styling**: SCSS with UIKit framework
- **Icons**: Font Awesome
- **Backend/Hosting**: Firebase (Hosting)
- **Build Tool**: Angular CLI 14.2.2
- **Testing**: Jasmine + Karma
- **Linting**: ESLint (Angular ESLint)
- **Code Formatting**: Prettier with Husky pre-commit hooks

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14.x or 16.x (recommended)
- **npm**: Version 6.x or higher (comes with Node.js)
- **Git**: For version control
- **Angular CLI**: Version 14.x (will be installed via npm)

To check your installed versions:

```bash
node --version
npm --version
git --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd rgfoundations-web
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies and run post-install scripts including Husky setup for Git hooks.

### 3. Start the Development Server

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:4200/`. The app will automatically reload whenever you make changes to source files.

## 📜 Available Commands

### Development

| Command            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `npm start`        | Starts the development server on `http://localhost:4200/` |
| `npm run ng serve` | Alternative way to start the dev server                   |
| `npm run lint`     | Runs ESLint to check for code quality issues              |

### Building

| Command              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `npm run build`      | Builds the project for development                   |
| `npm run build:prod` | Builds the project for production with optimizations |

Production builds include:

- AOT (Ahead-of-Time) compilation
- File minification and optimization
- Tree shaking to remove unused code
- Source map generation disabled
- Output hashing for cache busting

### Testing

| Command    | Description                                  |
| ---------- | -------------------------------------------- |
| `npm test` | Runs unit tests once using Karma and Jasmine |
| `ng test`  | Runs tests in watch mode with live browser   |

### Code Quality

| Command                 | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `npm run pretty:staged` | Formats staged files with Prettier (runs on pre-commit) |
| `npm run lint`          | Lints TypeScript and template files                     |

### Deployment

| Command                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `npm run deploy:github` | Deploys to GitHub Pages with base href `/web/` |

### Code Generation

The Angular CLI provides powerful code generation tools:

```bash
# Generate a new component
ng generate component components/my-component

# Generate a new service
ng generate service services/my-service

# Generate other artifacts
ng generate directive|pipe|guard|interface|enum|module <name>
```

## 📁 Project Structure

```
rgfoundations-web/
├── src/
│   ├── app/
│   │   ├── app.component.ts        # Main component logic
│   │   ├── app.component.html      # Main template
│   │   ├── app.component.scss      # Component-specific styles
│   │   ├── app.module.ts           # Main application module
│   │   └── app-routing.module.ts   # Routing configuration
│   ├── assets/
│   │   ├── css/                    # Global stylesheets
│   │   ├── img/                    # Images and graphics
│   │   └── favicon/                # Favicon files
│   ├── environments/
│   │   ├── environment.ts          # Development environment config
│   │   └── environment.prod.ts     # Production environment config
│   ├── index.html                  # Main HTML entry point
│   ├── main.ts                     # Application bootstrap
│   ├── styles.scss                 # Global styles
│   └── polyfills.ts                # Browser polyfills
├── angular.json                    # Angular CLI configuration
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── firebase.json                   # Firebase hosting configuration
└── README.md                       # This file
```

## 💻 Development Workflow

### Making Changes

1. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the relevant component/service files

3. **Test locally**:

   ```bash
   npm start
   ```

4. **Run linting**:

   ```bash
   npm run lint
   ```

5. **Commit your changes**:

   ```bash
   git add .
   git commit -m "Description of changes"
   ```

   Note: Prettier will automatically format staged files on commit via Husky

6. **Push to remote**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Working with Styles

- **Component-specific styles**: Add to `*.component.scss` files
- **Global styles**: Add to `src/styles.scss`
- **UIKit classes**: Use UIKit utility classes directly in templates
- **Responsive design**: Use SCSS media queries in component stylesheets

Example responsive pattern:

```scss
@media screen and (max-width: 768px) {
  .my-component {
    // Mobile styles
  }
}
```

### UIKit Breakpoints

The project uses UIKit's standard breakpoints:

- **Small (s)**: ≥ 640px
- **Medium (m)**: ≥ 960px
- **Large (l)**: ≥ 1200px
- **XLarge (xl)**: ≥ 1600px

## ✅ Best Practices

### Code Style

1. **Use TypeScript types**: Always define types for variables and function parameters
2. **Follow Angular style guide**: Use the official [Angular Style Guide](https://angular.io/guide/styleguide)
3. **Component structure**: Keep templates, styles, and logic in separate files
4. **Naming conventions**:
   - Components: `kebab-case` for files, `PascalCase` for classes
   - Services: `kebab-case.service.ts`
   - Use descriptive, meaningful names

### HTML/Templates

1. **Accessibility**: Always include `alt` attributes for images
2. **Semantic HTML**: Use appropriate HTML5 elements
3. **UIKit classes**: Leverage UIKit's responsive classes (`@s`, `@m`, `@l`)
4. **Keep templates clean**: Move complex logic to the component class

### SCSS/Styling

1. **Mobile-first**: Write base styles for mobile, then add media queries for larger screens
2. **Use CSS variables**: For colors and repeated values
3. **Scope styles**: Component styles are scoped by default, use this to your advantage
4. **Avoid `!important`**: Use specificity correctly instead

### Performance

1. **Lazy loading**: Consider splitting large modules
2. **Image optimization**: Compress images before adding to `assets/img/`
3. **Bundle size**: Monitor build output and avoid large dependencies
4. **Change detection**: Use `OnPush` strategy when appropriate

### Git

1. **Commit messages**: Write clear, descriptive commit messages
2. **Small commits**: Make focused commits that address one concern
3. **Pull before push**: Always pull latest changes before pushing
4. **Code review**: Have another developer review significant changes

## � CI/CD Pipeline

### Overview

This project uses **GitHub Actions** for continuous integration and continuous deployment. The pipeline automatically builds, tests, and deploys the application to ensure code quality and streamline releases.

### Pipeline Workflow

The CI/CD pipeline is defined in `.github/workflows/node.js.yml` and consists of two main jobs:

#### 1. Build and Test Job

**Triggers:**

- Push to `main` branch
- Pull requests targeting `main` branch

**Steps:**

1. Checkout code from repository
2. Set up Node.js 18.x environment
3. Install dependencies with `npm ci` (clean install)
4. Build the project
5. Run unit tests with Karma/Jasmine

**Environment:**

- Runs on: `ubuntu-24.04`
- Node.js version: `18.x`

This job ensures that:

- All dependencies install correctly
- The code compiles without errors
- All unit tests pass
- No regressions are introduced

#### 2. Deploy to Production Job

**Triggers:**

- Only runs on `main` branch (after successful build/test)
- Requires the build job to complete successfully

**Steps:**

1. Checkout code from repository
2. Set up Node.js environment
3. Install dependencies with `npm ci`
4. Build production-optimized bundle (`npm run build:prod`)
5. Deploy to Firebase Hosting using official Firebase action

**Deployment Details:**

- Target: Firebase Hosting (live channel)
- Project ID: `rgfoundations`
- Automated deployment with zero downtime
- DNS automatically updated

### Required Secrets

The following GitHub secrets must be configured in the repository settings:

| Secret Name                              | Description                          | Usage                                  |
| ---------------------------------------- | ------------------------------------ | -------------------------------------- |
| `GITHUB_TOKEN`                           | Automatically provided by GitHub     | Repository access for actions          |
| `FIREBASE_SERVICE_ACCOUNT_RGFOUNDATIONS` | Firebase service account credentials | Authentication for Firebase deployment |

**To configure Firebase secret:**

1. Generate a service account key in Firebase Console
2. Add it to GitHub repository secrets at: `Settings > Secrets and variables > Actions`

### Branch Protection

The `main` branch should have the following protections enabled:

- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (CI build/test)
- ✅ Require branches to be up to date before merging
- ✅ Include administrators in restrictions

### CI/CD Best Practices

1. **Always create pull requests**: Never push directly to `main`
2. **Wait for CI to complete**: Ensure all checks pass before merging
3. **Review build logs**: Check for warnings or deprecation notices
4. **Monitor deployments**: Verify successful deployment in Firebase Console
5. **Test in preview**: Use Firebase preview channels for testing before production

### Local CI Simulation

You can simulate the CI pipeline locally before pushing:

```bash
# Clean install dependencies (like CI does)
npm ci

# Run build
npm run build

# Run tests
npm test

# Build production bundle
npm run build:prod
```

### Deployment Environments

| Environment           | Trigger              | URL                       | Purpose                 |
| --------------------- | -------------------- | ------------------------- | ----------------------- |
| **Local Development** | Manual (`npm start`) | `http://localhost:4200/`  | Development and testing |
| **CI Build**          | Push/PR to main      | N/A                       | Automated testing       |
| **Production**        | Merge to main        | Firebase Hosting live URL | Public website          |

### Pipeline Status

You can check the status of CI/CD pipelines:

1. **In GitHub**: Navigate to the "Actions" tab in the repository
2. **On Pull Requests**: Status checks appear at the bottom of each PR
3. **Badges**: Add a status badge to your README (optional):
   ```markdown
   ![CI](https://github.com/<org>/<repo>/workflows/Angular%20CI/badge.svg)
   ```

### Troubleshooting CI/CD

**Build fails in CI but works locally:**

- Ensure you're using the correct Node.js version (18.x)
- Run `npm ci` instead of `npm install` to match CI behavior
- Check for uncommitted changes to `package-lock.json`

**Tests pass locally but fail in CI:**

- CI runs in headless Chrome; ensure tests don't rely on browser-specific features
- Check for timing issues or race conditions in async tests
- Verify all test dependencies are in `package.json` (not globally installed)

**Deployment fails:**

- Verify Firebase service account secret is configured correctly
- Check Firebase project permissions
- Ensure production build completes successfully
- Review Firebase Console for quota or permission issues

**Performance:**

- Average build time: ~2-3 minutes
- Average test time: ~1-2 minutes
- Average deployment time: ~1-2 minutes
- Total pipeline: ~5-7 minutes

## �🚀 Deployment

### Firebase Hosting

The site is configured for Firebase Hosting. To deploy:

1. **Build for production**:

   ```bash
   npm run build:prod
   ```

2. **Deploy to Firebase**:
   ```bash
   firebase deploy
   ```

### GitHub Pages

To deploy to GitHub Pages:

```bash
npm run deploy:github
```

This builds the project and deploys to the `gh-pages` branch with the base href `/web/`.

## 🔧 Troubleshooting

### Common Issues

**Issue**: `npm install` fails

- **Solution**: Delete `node_modules/` and `package-lock.json`, then run `npm install` again
- Ensure you're using Node.js 14.x or 16.x

**Issue**: Port 4200 already in use

- **Solution**: Kill the process using the port or specify a different port:
  ```bash
  ng serve --port 4201
  ```

**Issue**: Changes not reflecting in browser

- **Solution**: Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Restart the dev server

**Issue**: Build errors after updating dependencies

- **Solution**: Run `npm run postinstall` to ensure Angular Ivy compatibility

**Issue**: Husky hooks not running

- **Solution**: Run `npx husky install` manually after cloning

### Getting Help

- Check the [Angular Documentation](https://angular.io/docs)
- Review [UIKit Documentation](https://getuikit.com/docs/introduction)
- Use `ng help` for Angular CLI commands
- Check existing issues in the repository

## 📞 Support

For questions or issues related to this repository, please contact the development team or open an issue in the repository.

---

**Happy Coding! 🎉**
