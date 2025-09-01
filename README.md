# Hacked - Tech Community Website

> A vibrant community platform for innovators, creators, and tech enthusiasts at Jamia Hamdard University and beyond.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [File Structure](#file-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing](#contributing)
- [Community Guidelines](#community-guidelines)
- [Contributors](#contributors)
- [License](#license)

## 🎯 About the Project

**Hacked by Jamia Hamdard** is the official coding and technology community website for Jamia Hamdard University. This platform serves as a hub for students and tech enthusiasts to connect, learn, and grow together through mentorship programs, workshops, hackathons, and collaborative projects.

### 🎓 Mission Statement

Our mission is to create an inclusive space where technology enthusiasts can:
- **Learn** through workshops, tutorials, and mentorship programs
- **Collaborate** on innovative projects that solve real-world problems
- **Connect** with like-minded individuals and industry professionals
- **Compete** in hackathons and coding competitions
- **Create** impactful solutions for the community

### 🌟 Community Focus

- **Primary Audience**: Students at Jamia Hamdard University
- **Global Reach**: Open to tech enthusiasts worldwide
- **Core Areas**: Computer Science, Web Development, AI/ML, Blockchain, and more
- **Activities**: Workshops, hackathons, recruitment drives, tech talks, and project showcases

## ✨ Features

### 🏠 Homepage
- **Interactive Hero Section** with animated text and dot grid background
- **Community Statistics** showcasing growth and engagement
- **Featured Events** highlighting upcoming activities
- **Latest Blog Posts** from community members

### 📅 Events Management
- **Event Listings** with detailed information
- **Registration System** for workshops and hackathons
- **Event Categories**: Workshops, Bootcamps, Networking, Competitions

### 📝 Blog Platform
- **Technical Articles** and tutorials
- **Community Stories** and experiences
- **Resource Sharing** for learning and development

### 👥 Team Showcase
- **Leadership Team** profiles and roles
- **Department Teams**: Graphics, Management, Social Media, Mentors, Content
- **Join Us** section for recruitment

### 📞 Contact & Communication
- **Contact Form** for inquiries and collaboration
- **Social Media Integration** for community engagement
- **Newsletter Subscription** for updates

## 📁 File Structure

```
hacked-community-website/
├── README.md                     # Project documentation
├── client/                       # Frontend application
│   ├── public/                   # Static assets
│   │   └── robots.txt           # SEO configuration
│   ├── src/                     # Source code
│   │   ├── components/          # Reusable UI components
│   │   │   ├── About.tsx        # About section component
│   │   │   ├── Blog.tsx         # Blog listing component
│   │   │   ├── BlurText.tsx     # Animated text component
│   │   │   ├── CardNav.tsx      # Navigation component
│   │   │   ├── ContactForm.tsx  # Contact form component
│   │   │   ├── DotGrid.tsx      # Interactive background
│   │   │   ├── Events.tsx       # Events showcase
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── Navbar.tsx       # Main navigation
│   │   │   ├── Section.tsx      # Layout wrapper
│   │   │   ├── Team.tsx         # Team showcase
│   │   │   ├── TextType.tsx     # Typewriter effect
│   │   │   ├── TrueFocus.tsx    # Focus animation
│   │   │   └── ui/              # UI components
│   │   │       └── avatar.tsx   # Avatar component
│   │   ├── pages/               # Page components
│   │   │   ├── Index.tsx        # Homepage
│   │   │   ├── NotFound.tsx     # 404 page
│   │   │   └── TeamPage.tsx     # Team page
│   │   ├── style/               # CSS stylesheets
│   │   │   ├── About.css        # About section styles
│   │   │   ├── Blogs.css        # Blog styles
│   │   │   ├── CardNav.css      # Navigation styles
│   │   │   ├── ContactForm.css  # Form styles
│   │   │   ├── DotGrid.css      # Grid animation styles
│   │   │   ├── Events.css       # Events styles
│   │   │   ├── Footer.css       # Footer styles
│   │   │   ├── Hero.css         # Hero section styles
│   │   │   ├── NotFound.css     # 404 page styles
│   │   │   ├── Section.css      # Layout styles
│   │   │   ├── TextType.css     # Text animation styles
│   │   │   └── TrueFocus.css    # Focus animation styles
│   │   ├── App.tsx              # Main app component
│   │   ├── App.css              # Global app styles
│   │   ├── index.css            # Global styles
│   │   ├── main.tsx             # App entry point
│   │   └── vite-env.d.ts        # Vite types
│   ├── components.json          # Shadcn/ui configuration
│   ├── eslint.config.js         # ESLint configuration
│   ├── index.html               # HTML template
│   ├── package.json             # Dependencies and scripts
│   ├── tsconfig.app.json        # TypeScript app config
│   ├── tsconfig.json            # TypeScript main config
│   ├── tsconfig.node.json       # TypeScript node config
│   └── vite.config.ts           # Vite configuration
└── .gitignore                   # Git ignore rules
```

## 🛠 Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.1** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **CSS Modules** - Component-scoped styling
- **Google Fonts** - Playfair Display & Inter typography

### Animation & Interactions
- **Motion (Framer Motion 12.23.12)** - Advanced animations
- **GSAP 3.13.0** - High-performance animations
- **Lucide React** - Beautiful icons

### Routing & State Management
- **React Router DOM 6.26.2** - Client-side routing
- **TanStack Query 5.56.2** - Server state management

### Development Tools
- **ESLint** - Code linting and formatting
- **SWC** - Fast TypeScript/JSX compilation
- **React Icons 5.5.0** - Icon library

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download from git-scm.com](https://git-scm.com/)

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/hacked-community-website.git
   cd hacked-community-website
   ```

2. **Navigate to the client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173` to see the application running.

### 📱 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run build:dev` - Build development bundle
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can contribute to the Hacked community website:

### 🌟 Ways to Contribute

1. **🐛 Bug Reports** - Report issues or bugs you encounter
2. **💡 Feature Requests** - Suggest new features or improvements
3. **📝 Documentation** - Improve README, comments, or guides
4. **🎨 Design** - UI/UX improvements and design enhancements
5. **💻 Code** - Bug fixes, new features, and optimizations
6. **📚 Content** - Blog posts, tutorials, and educational content

### 🔄 Contribution Workflow

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub or use GitHub CLI
   gh repo fork YOUR_USERNAME/hacked-community-website
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**
   - Follow the existing code style and conventions
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # Follow conventional commit format
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to GitHub and create a PR from your fork
   - Provide a clear description of your changes
   - Link any related issues

### 📋 Commit Message Convention

We use conventional commits for clear history:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 🎨 Code Style Guidelines

- **TypeScript**: Use TypeScript for all new components
- **Components**: Create reusable, well-documented components
- **Styling**: Use Tailwind CSS utilities when possible
- **Animations**: Leverage GSAP and Framer Motion for smooth interactions
- **Accessibility**: Ensure components are accessible (ARIA labels, keyboard navigation)

## 🏛 Community Guidelines

### 🤝 Code of Conduct

- **Be Respectful**: Treat all community members with respect and kindness
- **Be Inclusive**: Welcome developers from all backgrounds and skill levels
- **Be Collaborative**: Share knowledge and help others learn
- **Be Professional**: Maintain professional communication in all interactions

### 🎯 Community Scope

Our community focuses on:

- **Education**: Workshops, tutorials, and skill development
- **Innovation**: Hackathons, project collaborations, and tech exploration
- **Networking**: Connecting students with industry professionals
- **Career Development**: Mentorship programs and career guidance
- **Open Source**: Contributing to and maintaining open-source projects

## 👨‍💻 Contributors

### 🏗️ Project Creator & Lead Developer

**Saad** - *Lead Developer*
- 🎯 **Role**: Project Creator, Architecture Designer, Lead Developer
- 🚀 **Contributions**: 
  - Initial project conception and setup
  - Core architecture and component design
  - UI/UX design and implementation
  - Animation systems and interactions
  - Project roadmap and vision

### 🎉 Acknowledgments

Special thanks to all community members, mentors, and contributors who have helped shape this project through:
- Code contributions and pull requests
- Bug reports and feature suggestions
- Design feedback and UI improvements
- Community engagement and testing
- Documentation improvements

*Want to see your name here? Start contributing today!*

## 🚀 Deployment

### 📦 Production Build

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

### 🌐 Deployment Options

1. **Lovable Platform** (Recommended)
   - Visit the [Lovable Project](https://lovable.dev/projects/338356c9-a056-4681-bc70-1d59ed306c6a)
   - Click Share → Publish for instant deployment

2. **Custom Domain**
   - Navigate to Project > Settings > Domains
   - Click "Connect Domain" to link your custom domain

3. **Other Platforms**
   - Deploy to Vercel, Netlify, or any static hosting service
   - Build folder: `client/dist`

## 🎨 Design Philosophy

### Visual Identity
- **Color Scheme**: Beige backgrounds with black, red, and white accents
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Smooth, purposeful animations that enhance user experience
- **Layout**: Clean, modern design with interactive elements

### User Experience
- **Responsive Design**: Mobile-first approach for all devices
- **Performance**: Optimized animations and fast loading times
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Interactivity**: Engaging hover effects and micro-interactions

## 🔮 Future Roadmap

### Upcoming Features
- [ ] **User Authentication** - Member login and profiles
- [ ] **Event Management** - Advanced event registration and management
- [ ] **Project Showcase** - Portfolio section for member projects
- [ ] **Forums** - Discussion boards for technical topics
- [ ] **Mentorship Platform** - Connect students with mentors
- [ ] **Job Board** - Career opportunities and internships
- [ ] **Resource Library** - Curated learning materials
- [ ] **Live Streaming** - Virtual events and workshops

### Technical Improvements
- [ ] **Backend Integration** - API development for dynamic content
- [ ] **Database** - User data and content management
- [ ] **CMS Integration** - Easy content management for non-technical users
- [ ] **SEO Optimization** - Enhanced search engine visibility
- [ ] **PWA Features** - Offline functionality and app-like experience

## 🏫 About Jamia Hamdard University

Jamia Hamdard University is a premier institution offering programs in medical, pharmaceutical, engineering, and science disciplines. The Hacked community represents the university's commitment to fostering innovation and technical excellence among its students.

## 📞 Contact & Support

### 🌐 Community Links
- **Website**: [hacked.community](https://hacked.community)
- **LinkedIn**: [Hacked by Jamia Hamdard](https://www.linkedin.com/company/hacked-jh/)
- **Facebook**: [Hacked by JH](https://www.facebook.com/people/Hacked-by-JH/100094494066027/)
- **Twitter**: [@JhHacked](https://x.com/JhHacked)
- **Instagram**: [@hacked.jh](https://www.instagram.com/hacked.jh/)

### 📧 Get in Touch
- **Email**: hello@hacked.community
- **Location**: Delhi, India
- **Phone**: +91 98765 43210

### 🆘 Support
For technical support or questions about contributing:
1. Check existing [Issues](https://github.com/YOUR_USERNAME/hacked-community-website/issues)
2. Create a new issue with detailed information
3. Join our community Discord for real-time help
4. Reach out via email for urgent matters

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Jamia Hamdard University** for supporting student innovation
- **Open Source Community** for the amazing tools and libraries
- **All Contributors** who have helped improve this project
- **Mentors and Industry Partners** who guide our community

---

**Built with ❤️ by the Hacked Community**

*"In the world of code, every 404 is just a redirect waiting to happen." - The Hacked Team*

---

### 🔗 Quick Links

- [🚀 Live Demo](https://lovable.dev/projects/338356c9-a056-4681-bc70-1d59ed306c6a)
- [📚 Documentation](https://docs.lovable.dev/)
- [🐛 Report Bug](https://github.com/YOUR_USERNAME/hacked-community-website/issues)
- [💡 Request Feature](https://github.com/YOUR_USERNAME/hacked-community-website/issues)
- [🤝 Contribute](CONTRIBUTING.md)

**Ready to join the revolution? Let's build the future together! 🌟**
