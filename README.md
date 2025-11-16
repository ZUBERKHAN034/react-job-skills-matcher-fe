# React Job Skills Matcher (Frontend)

A React-based web application built with Vite that helps match job requirements with candidate skills, providing intelligent skill analysis and recommendations.

## 🚀 Features

- Fast and modern development experience with Vite
- React 18+ with Hot Module Replacement (HMR)
- ESLint configuration for code quality
- Job skills matching and analysis
- Responsive user interface

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can verify your installations by running:

```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/ZUBERKHAN034/react-job-skills-matcher-fe.git
```

2. **Navigate to the project directory**

```bash
cd react-job-skills-matcher-fe
```

3. **Install dependencies**

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

## 🏃 Running the Application

### Development Mode

To start the development server with hot-reload:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

Or with pnpm:
```bash
pnpm dev
```

The application will open at `http://localhost:5173` (default Vite port) in your browser.

### Production Build

To create an optimized production build:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
react-job-skills-matcher-fe/
├── public/              # Static assets
├── src/                 # Source files
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # React components
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint to check code quality |

## ⚙️ Configuration

### Environment Variables

If your project uses environment variables, create a `.env` file in the root directory:

```env
VITE_BE_BASE_URL=your_local_backend_url_here
```

**Note:** Vite exposes environment variables that start with `VITE_` to your client code.

### Vite Configuration

The project uses Vite as the build tool. You can modify `vite.config.js` to customize the build configuration, add plugins, or change the development server settings.

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a custom port:

```bash
npm run dev -- --port 3000
```

### Node Module Issues

If you encounter any issues with node modules:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Clear Vite Cache

```bash
# Remove .vite cache directory
rm -rf node_modules/.vite
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Zuber Khan**

- GitHub: [@ZUBERKHAN034](https://github.com/ZUBERKHAN034)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Linting with [ESLint](https://eslint.org/)

---

For more information about Vite and React, check out:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)