/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                'primary-bg': 'hsl(45deg 87.5% 93.73%)',
                'secondary-bg': '#ff8b61',
                'dashboard-bg': '#ffffff',
                'header-text': '#2a2f45',
                'primary-text': '#3c4257',
                'secondary-text': '#fff',
                'tertiary-text': '#5469d4',
                'secondary-bg-text': '#fff',
                'error-text': '#cd3d64',
                'primary-button': 'hsl(45deg 88% 78%)',
                'secondary-button': '#0a2540',
                'tertiary-button': '#635bff',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                league: ['League Spartan', 'sans-serif']
            },
            backgroundImage: {
                texture: 'radial-gradient(var(primary-bg), transparent 70%)',
            },
            boxShadow: {
                'all-sm': '0 1px 2px 3px rgb(0 0 0 / 0.05)',
                all: '0 1px 15px 2px rgb(0 0 0 / 0.1)',
                'all-md':
                    '0 4px 6px 6px rgb(0 0 0 / 0.1), 0 2px 4px 4px rgb(0 0 0 / 0.1)',
                'all-lg':
                    '0 10px 15px 15px rgb(0 0 0 / 0.1), 0 4px 6px 6px rgb(0 0 0 / 0.1)',
                'all-xl':
                    '0 20px 25px 25px rgb(0 0 0 / 0.1), 0 8px 10px 10px rgb(0 0 0 / 0.1)',
                'all-2xl': '0 25px 50px 50px rgb(0 0 0 / 0.25)',
            },
            keyframes: {
                'accordion-down': {
                    from: {height: 0},
                    to: {height: 'var(--radix-accordion-content-height)'},
                },
                'accordion-up': {
                    from: {height: 'var(--radix-accordion-content-height)'},
                    to: {height: 0},
                },
                shake: {
                    '10%, 90%': {transform: 'translate3d(-1px, 0, 0)'},
                    '20%, 80%': {transform: 'translate3d(10px, 0, 0)'},
                    '30%, 50%, 70%': {transform: 'translate3d(-10px, 0, 0)'},
                    '40%, 60%': {transform: 'translate3d(10px, 0, 0)'},
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            },
        },
    },
    plugins: [],
};
