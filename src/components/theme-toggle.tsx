import { type IconProps, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();

	const isDark = resolvedTheme === 'dark';

	const iconProps: IconProps = { weight: 'duotone', className: 'size-5' };

	return (
		<Button variant="outline" size="icon" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={isDark ? 'light' : 'dark'}
					initial={{ rotate: -180, opacity: 0, scale: 0.8 }}
					animate={{ rotate: 0, opacity: 1, scale: 1 }}
					exit={{ rotate: 180, opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.25 }}
					className="inline-flex"
				>
					{isDark ? <SunIcon {...iconProps} /> : <MoonIcon {...iconProps} />}
				</motion.span>
			</AnimatePresence>
		</Button>
	);
}
