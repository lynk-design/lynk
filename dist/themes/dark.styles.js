import { css } from "lit";

export default css`
  :root,
  :host,
  .lynk-theme-dark {
    color-scheme: dark;

    --lynk-color-gray-50: hsl(240 4% 13%);
    --lynk-color-gray-100: hsl(240 4% 17%);
    --lynk-color-gray-200: hsl(240 4% 22%);
    --lynk-color-gray-300: hsl(240 4% 30%);
    --lynk-color-gray-400: hsl(240 4% 40%);
    --lynk-color-gray-500: hsl(240 4% 50%);
    --lynk-color-gray-600: hsl(240 5% 60%);
    --lynk-color-gray-700: hsl(240 6% 70%);
    --lynk-color-gray-800: hsl(240 7% 80%);
    --lynk-color-gray-900: hsl(240 8% 90%);
    --lynk-color-gray-950: hsl(240 8% 95%);

    --lynk-color-red-50: hsl(0 56% 23.9%);
    --lynk-color-red-100: hsl(0.6 60% 33.9%);
    --lynk-color-red-200: hsl(0.9 67.2% 37.1%);
    --lynk-color-red-300: hsl(1.1 71.3% 43.7%);
    --lynk-color-red-400: hsl(1 76% 52.5%);
    --lynk-color-red-500: hsl(0.7 89.6% 57.2%);
    --lynk-color-red-600: hsl(0 98.6% 67.9%);
    --lynk-color-red-700: hsl(0 100% 72.3%);
    --lynk-color-red-800: hsl(0 100% 85.6%);
    --lynk-color-red-900: hsl(0 100% 90.3%);
    --lynk-color-red-950: hsl(0 100% 95.9%);

    --lynk-color-orange-50: hsl(15 64.2% 23.3%);
    --lynk-color-orange-100: hsl(15.1 70.9% 31.1%);
    --lynk-color-orange-200: hsl(15.3 75.7% 35.5%);
    --lynk-color-orange-300: hsl(17.1 83.5% 42.7%);
    --lynk-color-orange-400: hsl(20.1 88% 50.8%);
    --lynk-color-orange-500: hsl(24.3 100% 50.5%);
    --lynk-color-orange-600: hsl(27.2 100% 57.7%);
    --lynk-color-orange-700: hsl(31.3 100% 68.7%);
    --lynk-color-orange-800: hsl(33.8 100% 79.3%);
    --lynk-color-orange-900: hsl(38.9 100% 87.7%);
    --lynk-color-orange-950: hsl(46.2 100% 95%);

    --lynk-color-amber-50: hsl(21.9 66.3% 21.1%);
    --lynk-color-amber-100: hsl(21.5 73.6% 29.7%);
    --lynk-color-amber-200: hsl(22.3 77.6% 33.3%);
    --lynk-color-amber-300: hsl(25.4 84.2% 39.6%);
    --lynk-color-amber-400: hsl(31.4 87.4% 46.7%);
    --lynk-color-amber-500: hsl(37 96.6% 48.3%);
    --lynk-color-amber-600: hsl(43.3 100% 53.4%);
    --lynk-color-amber-700: hsl(46.5 100% 61.1%);
    --lynk-color-amber-800: hsl(49.3 100% 73%);
    --lynk-color-amber-900: hsl(51.8 100% 85%);
    --lynk-color-amber-950: hsl(60 100% 94.6%);

    --lynk-color-yellow-50: hsl(32.5 60% 18.2%);
    --lynk-color-yellow-100: hsl(28.1 68.6% 29%);
    --lynk-color-yellow-200: hsl(31.3 75.8% 30.8%);
    --lynk-color-yellow-300: hsl(34.7 84.4% 35.3%);
    --lynk-color-yellow-400: hsl(40.1 87.3% 43.3%);
    --lynk-color-yellow-500: hsl(44.7 88% 46%);
    --lynk-color-yellow-600: hsl(47.7 100% 50.9%);
    --lynk-color-yellow-700: hsl(51.3 100% 59.9%);
    --lynk-color-yellow-800: hsl(54.6 100% 73%);
    --lynk-color-yellow-900: hsl(58.9 100% 84.2%);
    --lynk-color-yellow-950: hsl(60 100% 94%);

    --lynk-color-lime-50: hsl(86.5 54.4% 18%);
    --lynk-color-lime-100: hsl(87.6 56.8% 23.3%);
    --lynk-color-lime-200: hsl(85.8 63.2% 24.5%);
    --lynk-color-lime-300: hsl(86.1 72% 29.4%);
    --lynk-color-lime-400: hsl(85.5 76.8% 37.3%);
    --lynk-color-lime-500: hsl(84.3 74.2% 42.1%);
    --lynk-color-lime-600: hsl(82.8 81.5% 52.6%);
    --lynk-color-lime-700: hsl(82 89.9% 64%);
    --lynk-color-lime-800: hsl(80.9 97.9% 76.6%);
    --lynk-color-lime-900: hsl(77.9 100% 85.8%);
    --lynk-color-lime-950: hsl(69.5 100% 93.8%);

    --lynk-color-green-50: hsl(144.3 53.6% 16%);
    --lynk-color-green-100: hsl(143.2 55.4% 23.5%);
    --lynk-color-green-200: hsl(141.5 58.2% 26.3%);
    --lynk-color-green-300: hsl(140.8 64.2% 31.8%);
    --lynk-color-green-400: hsl(140.3 68% 39.2%);
    --lynk-color-green-500: hsl(141.1 64.9% 43%);
    --lynk-color-green-600: hsl(141.6 72.4% 55.2%);
    --lynk-color-green-700: hsl(141.7 82.7% 70.1%);
    --lynk-color-green-800: hsl(141 90.9% 82.1%);
    --lynk-color-green-900: hsl(142 100% 89.1%);
    --lynk-color-green-950: hsl(144 100% 95.5%);

    --lynk-color-emerald-50: hsl(164.3 75% 13.5%);
    --lynk-color-emerald-100: hsl(163.5 72.6% 20.1%);
    --lynk-color-emerald-200: hsl(162.1 73.7% 22.4%);
    --lynk-color-emerald-300: hsl(161.3 77.3% 27.6%);
    --lynk-color-emerald-400: hsl(160 77.1% 34.3%);
    --lynk-color-emerald-500: hsl(160 75% 40%);
    --lynk-color-emerald-600: hsl(157.8 66.8% 48.9%);
    --lynk-color-emerald-700: hsl(156.2 76.1% 63.8%);
    --lynk-color-emerald-800: hsl(152.4 84.4% 77.4%);
    --lynk-color-emerald-900: hsl(150 100% 87%);
    --lynk-color-emerald-950: hsl(150 100% 94.8%);

    --lynk-color-teal-50: hsl(176.5 51.5% 15.4%);
    --lynk-color-teal-100: hsl(175.9 54.7% 22.3%);
    --lynk-color-teal-200: hsl(175.9 60.7% 23.9%);
    --lynk-color-teal-300: hsl(174.5 67.3% 28.8%);
    --lynk-color-teal-400: hsl(174.4 71.9% 34.9%);
    --lynk-color-teal-500: hsl(173.1 71% 38.3%);
    --lynk-color-teal-600: hsl(172.3 68.2% 48.1%);
    --lynk-color-teal-700: hsl(170.5 81.3% 61.5%);
    --lynk-color-teal-800: hsl(168.4 92.1% 75.2%);
    --lynk-color-teal-900: hsl(168.3 100% 86%);
    --lynk-color-teal-950: hsl(180 100% 95.5%);

    --lynk-color-cyan-50: hsl(197.1 53.8% 20.3%);
    --lynk-color-cyan-100: hsl(196.8 57.3% 27.2%);
    --lynk-color-cyan-200: hsl(195.3 62.7% 29.4%);
    --lynk-color-cyan-300: hsl(193.5 71.3% 34.1%);
    --lynk-color-cyan-400: hsl(192.5 76.8% 40.6%);
    --lynk-color-cyan-500: hsl(189.4 78.6% 42.6%);
    --lynk-color-cyan-600: hsl(188.2 89.1% 51.7%);
    --lynk-color-cyan-700: hsl(187 98.6% 66.2%);
    --lynk-color-cyan-800: hsl(184.9 100% 78.3%);
    --lynk-color-cyan-900: hsl(180 100% 86.6%);
    --lynk-color-cyan-950: hsl(180 100% 94.8%);

    --lynk-color-sky-50: hsl(203 63.8% 20.9%);
    --lynk-color-sky-100: hsl(203.4 70.4% 28%);
    --lynk-color-sky-200: hsl(202.7 75.8% 30.8%);
    --lynk-color-sky-300: hsl(203.1 80.4% 36.1%);
    --lynk-color-sky-400: hsl(202.1 80.5% 44.3%);
    --lynk-color-sky-500: hsl(199.7 85.9% 47.7%);
    --lynk-color-sky-600: hsl(198.7 97.9% 57.2%);
    --lynk-color-sky-700: hsl(198.7 100% 70.5%);
    --lynk-color-sky-800: hsl(198.8 100% 82.5%);
    --lynk-color-sky-900: hsl(198.5 100% 89.9%);
    --lynk-color-sky-950: hsl(186 100% 95.5%);

    --lynk-color-blue-50: hsl(227.1 49.5% 22.7%);
    --lynk-color-blue-100: hsl(225.8 58.9% 36.8%);
    --lynk-color-blue-200: hsl(227.7 64.4% 42.9%);
    --lynk-color-blue-300: hsl(226.1 72.7% 51.2%);
    --lynk-color-blue-400: hsl(222.6 86.5% 56.3%);
    --lynk-color-blue-500: hsl(217.8 95.8% 57.4%);
    --lynk-color-blue-600: hsl(213.3 100% 65%);
    --lynk-color-blue-700: hsl(210.9 100% 74.8%);
    --lynk-color-blue-800: hsl(211.5 100% 83.4%);
    --lynk-color-blue-900: hsl(211 100% 88.9%);
    --lynk-color-blue-950: hsl(201.8 100% 95.3%);

    --lynk-color-indigo-50: hsl(243.5 40.8% 25%);
    --lynk-color-indigo-100: hsl(242.9 45.7% 35%);
    --lynk-color-indigo-200: hsl(244.7 52.7% 45%);
    --lynk-color-indigo-300: hsl(245.3 60.5% 52%);
    --lynk-color-indigo-400: hsl(244.1 79.2% 60%);
    --lynk-color-indigo-500: hsl(239.6 90% 65%);
    --lynk-color-indigo-600: hsl(234.5 97% 70%);
    --lynk-color-indigo-700: hsl(230 100% 75%);
    --lynk-color-indigo-800: hsl(227 100% 83%);
    --lynk-color-indigo-900: hsl(225 100% 90%);
    --lynk-color-indigo-950: hsl(222 100% 95%);

    --lynk-color-violet-50: hsl(263 55% 24%);
    --lynk-color-violet-100: hsl(262 60% 35%);
    --lynk-color-violet-200: hsl(261 65% 44%);
    --lynk-color-violet-300: hsl(261 73% 51%);
    --lynk-color-violet-400: hsl(260 85% 58%);
    --lynk-color-violet-500: hsl(260 100% 65%);
    --lynk-color-violet-600: hsl(259 100% 70%);
    --lynk-color-violet-700: hsl(258 100% 78%);
    --lynk-color-violet-800: hsl(257 100% 85%);
    --lynk-color-violet-900: hsl(256 100% 90%);
    --lynk-color-violet-950: hsl(255 100% 95%);

    --lynk-color-purple-50: hsl(276 54.3% 20.5%);
    --lynk-color-purple-100: hsl(273.6 61.8% 35.4%);
    --lynk-color-purple-200: hsl(272.9 64% 41.4%);
    --lynk-color-purple-300: hsl(271.9 68.1% 49.2%);
    --lynk-color-purple-400: hsl(271.5 85.1% 57.8%);
    --lynk-color-purple-500: hsl(270.7 96.4% 62.1%);
    --lynk-color-purple-600: hsl(270.5 100% 71.9%);
    --lynk-color-purple-700: hsl(270.9 100% 81.3%);
    --lynk-color-purple-800: hsl(272.4 100% 87.7%);
    --lynk-color-purple-900: hsl(276.7 100% 91.5%);
    --lynk-color-purple-950: hsl(300 100% 96.5%);

    --lynk-color-fuchsia-50: hsl(297.1 51.2% 18.6%);
    --lynk-color-fuchsia-100: hsl(296.7 59.5% 31.5%);
    --lynk-color-fuchsia-200: hsl(295.4 65.4% 35.1%);
    --lynk-color-fuchsia-300: hsl(294.6 67.4% 42.2%);
    --lynk-color-fuchsia-400: hsl(293.3 68.7% 51.2%);
    --lynk-color-fuchsia-500: hsl(292.1 88.4% 57.7%);
    --lynk-color-fuchsia-600: hsl(292 98.5% 59.5%);
    --lynk-color-fuchsia-700: hsl(292.4 100% 79.5%);
    --lynk-color-fuchsia-800: hsl(292.9 100% 86.8%);
    --lynk-color-fuchsia-900: hsl(300 100% 91.5%);
    --lynk-color-fuchsia-950: hsl(300 100% 96.3%);

    --lynk-color-pink-50: hsl(336.2 59.6% 20%);
    --lynk-color-pink-100: hsl(336.8 63.9% 34%);
    --lynk-color-pink-200: hsl(336.8 68.7% 37.6%);
    --lynk-color-pink-300: hsl(336.1 71.8% 44.5%);
    --lynk-color-pink-400: hsl(333.9 74.9% 53.1%);
    --lynk-color-pink-500: hsl(330.7 86.3% 57.7%);
    --lynk-color-pink-600: hsl(328.6 91.5% 67.2%);
    --lynk-color-pink-700: hsl(327.4 97.6% 78.7%);
    --lynk-color-pink-800: hsl(325.1 100% 86.6%);
    --lynk-color-pink-900: hsl(322.1 100% 91.3%);
    --lynk-color-pink-950: hsl(315 100% 95.9%);

    --lynk-color-rose-50: hsl(342 63% 20%);
    --lynk-color-rose-100: hsl(343 69% 30%);
    --lynk-color-rose-200: hsl(345 70% 38%);
    --lynk-color-rose-300: hsl(348 74% 41%);
    --lynk-color-rose-400: hsl(348 78% 45%);
    --lynk-color-rose-500: hsl(350 85% 55%);
    --lynk-color-rose-600: hsl(350 95% 65%);
    --lynk-color-rose-700: hsl(351 100% 75%);
    --lynk-color-rose-800: hsl(352 100% 85%);
    --lynk-color-rose-900: hsl(354.5 100% 90%);
    --lynk-color-rose-950: hsl(353.3 100% 96%);

    --lynk-color-primary-50: var(--lynk-color-violet-50);
    --lynk-color-primary-100: var(--lynk-color-violet-100);
    --lynk-color-primary-200: var(--lynk-color-violet-200);
    --lynk-color-primary-300: var(--lynk-color-violet-300);
    --lynk-color-primary-400: var(--lynk-color-violet-400);
    --lynk-color-primary-500: var(--lynk-color-violet-500);
    --lynk-color-primary-600: var(--lynk-color-violet-600);
    --lynk-color-primary-700: var(--lynk-color-violet-700);
    --lynk-color-primary-800: var(--lynk-color-violet-800);
    --lynk-color-primary-900: var(--lynk-color-violet-900);
    --lynk-color-primary-950: var(--lynk-color-violet-950);

    --lynk-color-primary: var(--lynk-color-primary-500);

    --lynk-color-success-50: var(--lynk-color-emerald-50);
    --lynk-color-success-100: var(--lynk-color-emerald-100);
    --lynk-color-success-200: var(--lynk-color-emerald-200);
    --lynk-color-success-300: var(--lynk-color-emerald-300);
    --lynk-color-success-400: var(--lynk-color-emerald-400);
    --lynk-color-success-500: var(--lynk-color-emerald-500);
    --lynk-color-success-600: var(--lynk-color-emerald-600);
    --lynk-color-success-700: var(--lynk-color-emerald-700);
    --lynk-color-success-800: var(--lynk-color-emerald-800);
    --lynk-color-success-900: var(--lynk-color-emerald-900);
    --lynk-color-success-950: var(--lynk-color-emerald-950);

    --lynk-color-success: var(--lynk-color-success-500);

    --lynk-color-warning-50: var(--lynk-color-amber-50);
    --lynk-color-warning-100: var(--lynk-color-amber-100);
    --lynk-color-warning-200: var(--lynk-color-amber-200);
    --lynk-color-warning-300: var(--lynk-color-amber-300);
    --lynk-color-warning-400: var(--lynk-color-amber-400);
    --lynk-color-warning-500: var(--lynk-color-amber-500);
    --lynk-color-warning-600: var(--lynk-color-amber-600);
    --lynk-color-warning-700: var(--lynk-color-amber-700);
    --lynk-color-warning-800: var(--lynk-color-amber-800);
    --lynk-color-warning-900: var(--lynk-color-amber-900);
    --lynk-color-warning-950: var(--lynk-color-amber-950);

    --lynk-color-warning: var(--lynk-color-warning-500);

    --lynk-color-danger-50: var(--lynk-color-rose-50);
    --lynk-color-danger-100: var(--lynk-color-rose-100);
    --lynk-color-danger-200: var(--lynk-color-rose-200);
    --lynk-color-danger-300: var(--lynk-color-rose-300);
    --lynk-color-danger-400: var(--lynk-color-rose-400);
    --lynk-color-danger-500: var(--lynk-color-rose-500);
    --lynk-color-danger-600: var(--lynk-color-rose-600);
    --lynk-color-danger-700: var(--lynk-color-rose-700);
    --lynk-color-danger-800: var(--lynk-color-rose-800);
    --lynk-color-danger-900: var(--lynk-color-rose-900);
    --lynk-color-danger-950: var(--lynk-color-rose-950);

    --lynk-color-danger: var(--lynk-color-danger-500);

    --lynk-color-neutral-50: var(--lynk-color-gray-50);
    --lynk-color-neutral-100: var(--lynk-color-gray-100);
    --lynk-color-neutral-200: var(--lynk-color-gray-200);
    --lynk-color-neutral-300: var(--lynk-color-gray-300);
    --lynk-color-neutral-400: var(--lynk-color-gray-400);
    --lynk-color-neutral-500: var(--lynk-color-gray-500);
    --lynk-color-neutral-600: var(--lynk-color-gray-600);
    --lynk-color-neutral-700: var(--lynk-color-gray-700);
    --lynk-color-neutral-800: var(--lynk-color-gray-800);
    --lynk-color-neutral-900: var(--lynk-color-gray-900);
    --lynk-color-neutral-950: var(--lynk-color-gray-950);

    --lynk-color-neutral: var(--lynk-color-neutral-500);

    --lynk-color-neutral-0: hsl(240 6% 10%);
    --lynk-color-neutral-1000: hsl(0 0% 95%);
    --lynk-color-black: hsl(240 6% 10%);
    --lynk-color-white: hsl(0 0% 95%);

    --lynk-breakpoint-sm: 600px;
    --lynk-breakpoint-phone: var(--lynk-breakpoint-sm);

    --lynk-breakpoint-md: 960px;
    --lynk-breakpoint-tablet: var(--lynk-breakpoint-md);

    --lynk-breakpoint-lg: 1195px;
    --lynk-breakpoint-desktop: var(--lynk-breakpoint-lg);

    --lynk-breakpoint-xl: 1440px;
    --lynk-breakpoint-widescreen: var(--lynk-breakpoint-xl);

    --lynk-border-radius-small: 0.1875rem;
    --lynk-border-radius-medium: 0.25rem;
    --lynk-border-radius-large: 0.5rem;
    --lynk-border-radius-x-large: 1rem;

    --lynk-border-radius-circle: 50%;
    --lynk-border-radius-pill: 9999px;

    --lynk-shadow-x-small: 0 1px 2px rgb(0 0 0 / 25%);
    --lynk-shadow-small: 0 2px 4px rgb(0 0 0 / 25%);
    --lynk-shadow-medium: 0 4px 8px rgb(0 0 0 / 25%);
    --lynk-shadow-large: 0 6px 16px rgb(0 0 0 / 25%);
    --lynk-shadow-x-large: 0 8px 24px rgb(0 0 0 / 25%);

    --lynk-spacing-tiny: 0.125rem;
    --lynk-spacing-2x-small: 0.25rem;
    --lynk-spacing-x-small: 0.5rem;
    --lynk-spacing-small: 0.75rem;
    --lynk-spacing-base: 1rem;
    --lynk-spacing-medium: 1.25rem;
    --lynk-spacing-large: 1.5rem;
    --lynk-spacing-x-large: 1.75rem;
    --lynk-spacing-2x-large: 2.25rem;
    --lynk-spacing-3x-large: 3rem;
    --lynk-spacing-4x-large: 4.5rem;
    --lynk-spacing-huge: 6rem;

    --lynk-transition-x-slow: 1000ms;
    --lynk-transition-slow: 500ms;
    --lynk-transition-medium: 250ms;
    --lynk-transition-fast: 150ms;
    --lynk-transition-x-fast: 50ms;

    --lynk-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    --lynk-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --lynk-font-serif: Georgia, "Times New Roman", serif;

    --lynk-font-size-x-small: 0.625rem;
    --lynk-font-size-small: 0.75rem;
    --lynk-font-size-medium: 0.875rem;
    --lynk-font-size-base: 1rem;
    --lynk-font-size-large: 1.25rem;
    --lynk-font-size-x-large: 1.5rem;
    --lynk-font-size-2x-large: 2.25rem;
    --lynk-font-size-3x-large: 3rem;
    --lynk-font-size-4x-large: 4.5rem;

    --lynk-font-weight-light: 300;
    --lynk-font-weight-normal: 400;
    --lynk-font-weight-semibold: 500;
    --lynk-font-weight-bold: 700;

    --lynk-letter-spacing-denser: -0.03em;
    --lynk-letter-spacing-dense: -0.015em;
    --lynk-letter-spacing-normal: normal;
    --lynk-letter-spacing-loose: 0.075em;
    --lynk-letter-spacing-looser: 0.15em;

    --lynk-line-height-denser: 1;
    --lynk-line-height-dense: 1.4;
    --lynk-line-height-normal: 1.8;
    --lynk-line-height-loose: 2.2;
    --lynk-line-height-looser: 2.6;

    --lynk-focus-ring-color: var(--lynk-color-primary-500);
    --lynk-focus-ring-style: solid;
    --lynk-focus-ring-width: 3px;
    --lynk-focus-ring: var(--lynk-focus-ring-style) var(--lynk-focus-ring-width)
      var(--lynk-focus-ring-color);
    --lynk-focus-ring-offset: 1px;

    --lynk-button-border-width: 1px;
    --lynk-button-border-radius-small: var(--lynk-border-radius-medium);
    --lynk-button-border-radius-medium: var(--lynk-border-radius-medium);
    --lynk-button-border-radius-large: var(--lynk-border-radius-medium);

    --lynk-button-font-family: var(--lynk-font-sans);
    --lynk-button-font-size-small: var(--lynk-font-size-small);
    --lynk-button-font-size-medium: var(--lynk-font-size-medium);
    --lynk-button-font-size-large: var(--lynk-font-size-base);
    --lynk-button-height-small: 1.875rem;
    --lynk-button-height-medium: 2.5rem;
    --lynk-button-height-large: 3.125rem;

    --lynk-input-height-small: 1.875rem;
    --lynk-input-height-medium: 2.5rem;
    --lynk-input-height-large: 3.125rem;

    --lynk-input-background-color: transparent;
    --lynk-input-background-color-hover: transparent;
    --lynk-input-background-color-focus: transparent;
    --lynk-input-background-color-disabled: transparent;
    --lynk-input-border-color: var(--lynk-color-neutral-300);
    --lynk-input-border-color-hover: var(--lynk-color-neutral-400);
    --lynk-input-border-color-focus: var(--lynk-color-primary-500);
    --lynk-input-border-color-disabled: var(--lynk-color-neutral-300);
    --lynk-input-border-width: 1px;

    --lynk-input-border-radius-small: var(--lynk-border-radius-medium);
    --lynk-input-border-radius-medium: var(--lynk-border-radius-medium);
    --lynk-input-border-radius-large: var(--lynk-border-radius-medium);

    --lynk-input-font-family: var(--lynk-font-sans);
    --lynk-input-font-weight: var(--lynk-font-weight-normal);
    --lynk-input-font-size-small: var(--lynk-font-size-medium);
    --lynk-input-font-size-medium: var(--lynk-font-size-base);
    --lynk-input-font-size-large: var(--lynk-font-size-large);
    --lynk-input-letter-spacing: var(--lynk-letter-spacing-normal);

    --lynk-input-color: var(--lynk-color-neutral-900);
    --lynk-input-color-hover: var(--lynk-color-neutral-900);
    --lynk-input-color-focus: var(--lynk-color-neutral-900);
    --lynk-input-color-disabled: var(--lynk-color-neutral-900);
    --lynk-input-icon-color: var(--lynk-color-neutral-600);
    --lynk-input-icon-color-hover: var(--lynk-color-neutral-700);
    --lynk-input-icon-color-focus: var(--lynk-color-neutral-700);
    --lynk-input-placeholder-color: var(--lynk-color-neutral-600);
    --lynk-input-placeholder-color-disabled: var(--lynk-color-neutral-600);
    --lynk-input-spacing-small: var(--lynk-spacing-small);
    --lynk-input-spacing-medium: var(--lynk-spacing-medium);
    --lynk-input-spacing-large: var(--lynk-spacing-large);

    --lynk-input-filled-background-color: var(--lynk-color-neutral-100);
    --lynk-input-filled-background-color-hover: var(--lynk-color-neutral-100);
    --lynk-input-filled-background-color-focus: var(--lynk-color-neutral-100);
    --lynk-input-filled-background-color-disabled: var(
      --lynk-color-neutral-100
    );
    --lynk-input-filled-color: var(--lynk-color-neutral-800);
    --lynk-input-filled-color-hover: var(--lynk-color-neutral-800);
    --lynk-input-filled-color-focus: var(--lynk-color-neutral-700);
    --lynk-input-filled-color-disabled: var(--lynk-color-neutral-800);

    --lynk-input-focus-ring-color: var(--lynk-color-primary-100);
    --lynk-input-focus-ring-offset: 0;

    --lynk-input-label-font-size-small: var(--lynk-font-size-small);
    --lynk-input-label-font-size-medium: var(--lynk-font-size-medium);
    --lynk-input-label-font-size-large: var(--lynk-font-size-base);

    --lynk-input-label-font-weight: var(--lynk-font-weight-normal);
    --lynk-input-label-color: inherit;

    --lynk-input-help-text-font-size-small: var(--lynk-font-size-small);
    --lynk-input-help-text-font-size-medium: var(--lynk-font-size-medium);
    --lynk-input-help-text-font-size-large: var(--lynk-font-size-base);

    --lynk-input-help-text-color: var(--lynk-color-neutral-500);

    --lynk-toggle-size: 1rem;

    --lynk-overlay-background-color: hsl(0 0% 0% / 43%);

    --lynk-panel-background-color: var(--lynk-color-neutral-50);
    --lynk-panel-border-color: var(--lynk-color-neutral-300);
    --lynk-panel-border-width: 1px;

    --lynk-divider-color: var(--lynk-color-neutral-300);

    --lynk-tooltip-border-radius: var(--lynk-border-radius-medium);
    --lynk-tooltip-background-color: var(--lynk-color-neutral-900);
    --lynk-tooltip-color: var(--lynk-color-neutral-0);
    --lynk-tooltip-font-family: var(--lynk-font-sans);
    --lynk-tooltip-font-weight: var(--lynk-font-weight-normal);
    --lynk-tooltip-font-size: var(--lynk-font-size-small);
    --lynk-tooltip-line-height: var(--lynk-line-height-dense);
    --lynk-tooltip-padding: var(--lynk-spacing-2x-small)
      var(--lynk-spacing-x-small);
    --lynk-tooltip-arrow-size: 4px;

    --lynk-z-index-drawer: 700;
    --lynk-z-index-dialog: 800;
    --lynk-z-index-dropdown: 900;
    --lynk-z-index-toast: 950;
    --lynk-z-index-tooltip: 1000;
  }

  .lynk-scroll-lock {
    overflow: hidden !important;
  }

  .lynk-toast-stack {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 8px;
    top: 12px;
    margin: 8px;
    right: 12px;
    z-index: var(--lynk-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .lynk-toast-stack lynk-alert {
    --box-shadow: var(--lynk-shadow-large);
  }
`;
