/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			base: {
  				DEFAULT: '#0B1020',
  				dark: '#0F172A',
  				darker: '#111827'
  			},
  			silver: {
  				light: '#EEF2F7',
  				DEFAULT: '#D7DCE6',
  				dark: '#9CA3AF'
  			},
  			holo: {
  				cyan: '#47E7FF',
  				violet: '#B06CFF',
  				magenta: '#FF5CC8',
  				gold: '#FFE07A'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Figtree',
  				'sans-serif'
  			],
  			body: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'gradient-drift': 'gradient-drift 15s ease infinite',
  			'sparkle-float': 'sparkle-float 3s ease-in-out infinite',
  			'shimmer-sweep': 'shimmer-sweep 3s ease-in-out infinite',
  			float: 'float 6s ease-in-out infinite'
  		},
  		keyframes: {
  			'gradient-drift': {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			'sparkle-float': {
  				'0%, 100%': {
  					transform: 'translateY(0) rotate(0deg)',
  					opacity: '0'
  				},
  				'50%': {
  					transform: 'translateY(-20px) rotate(180deg)',
  					opacity: '1'
  				}
  			},
  			'shimmer-sweep': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			}
  		},
  		backgroundImage: {
  			'holo-gradient': 'linear-gradient(135deg, #47E7FF 0%, #B06CFF 50%, #FF5CC8 100%)',
  			'holo-gradient-4': 'linear-gradient(135deg, #47E7FF 0%, #B06CFF 33%, #FF5CC8 66%, #FFE07A 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
