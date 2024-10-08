# The Wild Oasis

A modern, full-stack hotel management application built with Next.js 14, React 18, Tailwind CSS, and Supabase.

## 🔗 Quick Links

- **Live Demo**: [https://the-wild-oasis-azure-eta.vercel.app/](https://the-wild-oasis-azure-eta.vercel.app/)
- **GitHub Repository**: [https://github.com/sadanmian/the-wild-oasis](https://github.com/sadanmian/the-wild-oasis)

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Authentication**: Secure user authentication using NextAuth.js
- **Database**: Powered by Supabase for reliable data storage
- **Responsive Design**: Fully responsive layout for all device sizes
- **Image Optimization**: Utilizes Next.js Image component for optimal performance
- **Server-Side Rendering**: Implements various rendering strategies (SSR, SSG, ISR)
- **Dynamic Routing**: Advanced routing with nested layouts
- **Error Handling**: Comprehensive error boundaries and "Not Found" handling
- **Data Fetching**: Multiple strategies including React Suspense for optimal UX
- **State Management**: Uses React Context API and URL state
- **Server Actions**: Implements mutations using Next.js Server Actions
- **Modern React Patterns**: Utilizes latest React hooks (useFormStatus, useTransition, useOptimistic)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sadanmian/the-wild-oasis.git
cd the-wild-oasis
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add necessary environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prod` - Build and start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
the-wild-oasis/
├── app/
│   ├── about/
│   ├── cabins/
│   ├── reservations/
│   ├── layout.js
│   └── page.js
├── components/
├── lib/
├── public/
└── styles/
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - The React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Supabase](https://supabase.com/) - The Open Source Firebase Alternative
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Hero Icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [date-fns](https://date-fns.org/) - Modern JavaScript date utility library
- [React Day Picker](https://react-day-picker.js.org/) - Flexible date picker for React

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Inspired by the course content and structure from a comprehensive Next.js tutorial
- Thanks to the Next.js, React, and Supabase communities for their excellent documentation and support
