import { css } from "lit";

export default css`
  :root,
  :host,
  .lynk-theme-light {
    color-scheme: light;

    --lynk-color-gray-50: hsl(0 0% 97.5%);
    --lynk-color-gray-100: hsl(240 4.8% 95.9%);
    --lynk-color-gray-200: hsl(240 5.9% 90%);
    --lynk-color-gray-300: hsl(240 4.9% 83.9%);
    --lynk-color-gray-400: hsl(240 5% 64.9%);
    --lynk-color-gray-500: hsl(240 3.8% 46.1%);
    --lynk-color-gray-600: hsl(240 5.2% 33.9%);
    --lynk-color-gray-700: hsl(240 5.3% 26.1%);
    --lynk-color-gray-800: hsl(240 3.7% 15.9%);
    --lynk-color-gray-900: hsl(240 5.9% 10%);
    --lynk-color-gray-950: hsl(240 7.3% 8%);

    --lynk-color-red-50: hsl(0 85.7% 97.3%);
    --lynk-color-red-100: hsl(0 93.3% 94.1%);
    --lynk-color-red-200: hsl(0 96.3% 89.4%);
    --lynk-color-red-300: hsl(0 93.5% 81.8%);
    --lynk-color-red-400: hsl(0 90.6% 70.8%);
    --lynk-color-red-500: hsl(0 84.2% 60.2%);
    --lynk-color-red-600: hsl(0 72.2% 50.6%);
    --lynk-color-red-700: hsl(0 73.7% 41.8%);
    --lynk-color-red-800: hsl(0 70% 35.3%);
    --lynk-color-red-900: hsl(0 62.8% 30.6%);
    --lynk-color-red-950: hsl(0 60% 19.6%);

    --lynk-color-orange-50: hsl(33.3 100% 96.5%);
    --lynk-color-orange-100: hsl(34.3 100% 91.8%);
    --lynk-color-orange-200: hsl(32.1 97.7% 83.1%);
    --lynk-color-orange-300: hsl(30.7 97.2% 72.4%);
    --lynk-color-orange-400: hsl(27 96% 61%);
    --lynk-color-orange-500: hsl(24.6 95% 53.1%);
    --lynk-color-orange-600: hsl(20.5 90.2% 48.2%);
    --lynk-color-orange-700: hsl(17.5 88.3% 40.4%);
    --lynk-color-orange-800: hsl(15 79.1% 33.7%);
    --lynk-color-orange-900: hsl(15.3 74.6% 27.8%);
    --lynk-color-orange-950: hsl(15.2 69.1% 19%);

    --lynk-color-amber-50: hsl(48 100% 96.1%);
    --lynk-color-amber-100: hsl(48 96.5% 88.8%);
    --lynk-color-amber-200: hsl(48 96.6% 76.7%);
    --lynk-color-amber-300: hsl(45.9 96.7% 64.5%);
    --lynk-color-amber-400: hsl(43.3 96.4% 56.3%);
    --lynk-color-amber-500: hsl(37.7 92.1% 50.2%);
    --lynk-color-amber-600: hsl(32.1 94.6% 43.7%);
    --lynk-color-amber-700: hsl(26 90.5% 37.1%);
    --lynk-color-amber-800: hsl(22.7 82.5% 31.4%);
    --lynk-color-amber-900: hsl(21.7 77.8% 26.5%);
    --lynk-color-amber-950: hsl(22.9 74.1% 16.7%);

    --lynk-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --lynk-color-yellow-100: hsl(54.9 96.7% 88%);
    --lynk-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --lynk-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --lynk-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --lynk-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --lynk-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --lynk-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --lynk-color-yellow-800: hsl(31.8 81% 28.8%);
    --lynk-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --lynk-color-yellow-950: hsl(33.1 69% 13.9%);

    --lynk-color-lime-50: hsl(78.3 92% 95.1%);
    --lynk-color-lime-100: hsl(79.6 89.1% 89.2%);
    --lynk-color-lime-200: hsl(80.9 88.5% 79.6%);
    --lynk-color-lime-300: hsl(82 84.5% 67.1%);
    --lynk-color-lime-400: hsl(82.7 78% 55.5%);
    --lynk-color-lime-500: hsl(83.7 80.5% 44.3%);
    --lynk-color-lime-600: hsl(84.8 85.2% 34.5%);
    --lynk-color-lime-700: hsl(85.9 78.4% 27.3%);
    --lynk-color-lime-800: hsl(86.3 69% 22.7%);
    --lynk-color-lime-900: hsl(87.6 61.2% 20.2%);
    --lynk-color-lime-950: hsl(86.5 60.6% 13.9%);

    --lynk-color-green-50: hsl(138.5 76.5% 96.7%);
    --lynk-color-green-100: hsl(140.6 84.2% 92.5%);
    --lynk-color-green-200: hsl(141 78.9% 85.1%);
    --lynk-color-green-300: hsl(141.7 76.6% 73.1%);
    --lynk-color-green-400: hsl(141.9 69.2% 58%);
    --lynk-color-green-500: hsl(142.1 70.6% 45.3%);
    --lynk-color-green-600: hsl(142.1 76.2% 36.3%);
    --lynk-color-green-700: hsl(142.4 71.8% 29.2%);
    --lynk-color-green-800: hsl(142.8 64.2% 24.1%);
    --lynk-color-green-900: hsl(143.8 61.2% 20.2%);
    --lynk-color-green-950: hsl(144.3 60.7% 12%);

    --lynk-color-emerald-50: hsl(151.8 81% 95.9%);
    --lynk-color-emerald-100: hsl(149.3 80.4% 90%);
    --lynk-color-emerald-200: hsl(152.4 76% 80.4%);
    --lynk-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --lynk-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --lynk-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --lynk-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --lynk-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --lynk-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --lynk-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --lynk-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --lynk-color-teal-50: hsl(166.2 76.5% 96.7%);
    --lynk-color-teal-100: hsl(167.2 85.5% 89.2%);
    --lynk-color-teal-200: hsl(168.4 83.8% 78.2%);
    --lynk-color-teal-300: hsl(170.6 76.9% 64.3%);
    --lynk-color-teal-400: hsl(172.5 66% 50.4%);
    --lynk-color-teal-500: hsl(173.4 80.4% 40%);
    --lynk-color-teal-600: hsl(174.7 83.9% 31.6%);
    --lynk-color-teal-700: hsl(175.3 77.4% 26.1%);
    --lynk-color-teal-800: hsl(176.1 69.4% 21.8%);
    --lynk-color-teal-900: hsl(175.9 60.8% 19%);
    --lynk-color-teal-950: hsl(176.5 58.6% 11.4%);

    --lynk-color-cyan-50: hsl(183.2 100% 96.3%);
    --lynk-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --lynk-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --lynk-color-cyan-300: hsl(187 92.4% 69%);
    --lynk-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --lynk-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --lynk-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --lynk-color-cyan-700: hsl(192.9 82.3% 31%);
    --lynk-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --lynk-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --lynk-color-cyan-950: hsl(196.8 61% 16.1%);

    --lynk-color-sky-50: hsl(204 100% 97.1%);
    --lynk-color-sky-100: hsl(204 93.8% 93.7%);
    --lynk-color-sky-200: hsl(200.6 94.4% 86.1%);
    --lynk-color-sky-300: hsl(199.4 95.5% 73.9%);
    --lynk-color-sky-400: hsl(198.4 93.2% 59.6%);
    --lynk-color-sky-500: hsl(198.6 88.7% 48.4%);
    --lynk-color-sky-600: hsl(200.4 98% 39.4%);
    --lynk-color-sky-700: hsl(201.3 96.3% 32.2%);
    --lynk-color-sky-800: hsl(201 90% 27.5%);
    --lynk-color-sky-900: hsl(202 80.3% 23.9%);
    --lynk-color-sky-950: hsl(202.3 73.8% 16.5%);

    --lynk-color-blue-50: hsl(213.8 100% 96.9%);
    --lynk-color-blue-100: hsl(214.3 94.6% 92.7%);
    --lynk-color-blue-200: hsl(213.3 96.9% 87.3%);
    --lynk-color-blue-300: hsl(211.7 96.4% 78.4%);
    --lynk-color-blue-400: hsl(213.1 93.9% 67.8%);
    --lynk-color-blue-500: hsl(217.2 91.2% 59.8%);
    --lynk-color-blue-600: hsl(221.2 83.2% 53.3%);
    --lynk-color-blue-700: hsl(224.3 76.3% 48%);
    --lynk-color-blue-800: hsl(225.9 70.7% 40.2%);
    --lynk-color-blue-900: hsl(224.4 64.3% 32.9%);
    --lynk-color-blue-950: hsl(226.2 55.3% 18.4%);

    --lynk-color-indigo-50: hsl(225.9 100% 96.7%);
    --lynk-color-indigo-100: hsl(226.5 100% 93.9%);
    --lynk-color-indigo-200: hsl(228 96.5% 88.8%);
    --lynk-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --lynk-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --lynk-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --lynk-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --lynk-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --lynk-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --lynk-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --lynk-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --lynk-color-violet-50: hsl(250 100% 97.6%);
    --lynk-color-violet-100: hsl(251.4 91.3% 95.5%);
    --lynk-color-violet-200: hsl(250.5 95.2% 91.8%);
    --lynk-color-violet-300: hsl(252.5 94.7% 85.1%);
    --lynk-color-violet-400: hsl(255.1 91.7% 76.3%);
    --lynk-color-violet-500: hsl(258.3 89.5% 66.3%);
    --lynk-color-violet-600: hsl(262.1 83.3% 57.8%);
    --lynk-color-violet-700: hsl(263.4 70% 50.4%);
    --lynk-color-violet-800: hsl(263.4 69.3% 42.2%);
    --lynk-color-violet-900: hsl(263.5 67.4% 34.9%);
    --lynk-color-violet-950: hsl(265.1 61.5% 21.4%);

    --lynk-color-purple-50: hsl(270 100% 98%);
    --lynk-color-purple-100: hsl(268.7 100% 95.5%);
    --lynk-color-purple-200: hsl(268.6 100% 91.8%);
    --lynk-color-purple-300: hsl(269.2 97.4% 85.1%);
    --lynk-color-purple-400: hsl(270 95.2% 75.3%);
    --lynk-color-purple-500: hsl(270.7 91% 65.1%);
    --lynk-color-purple-600: hsl(271.5 81.3% 55.9%);
    --lynk-color-purple-700: hsl(272.1 71.7% 47.1%);
    --lynk-color-purple-800: hsl(272.9 67.2% 39.4%);
    --lynk-color-purple-900: hsl(273.6 65.6% 32%);
    --lynk-color-purple-950: hsl(276 59.5% 16.5%);

    --lynk-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --lynk-color-fuchsia-100: hsl(287 100% 95.5%);
    --lynk-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --lynk-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --lynk-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --lynk-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --lynk-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --lynk-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --lynk-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --lynk-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --lynk-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --lynk-color-pink-50: hsl(327.3 73.3% 97.1%);
    --lynk-color-pink-100: hsl(325.7 77.8% 94.7%);
    --lynk-color-pink-200: hsl(325.9 84.6% 89.8%);
    --lynk-color-pink-300: hsl(327.4 87.1% 81.8%);
    --lynk-color-pink-400: hsl(328.6 85.5% 70.2%);
    --lynk-color-pink-500: hsl(330.4 81.2% 60.4%);
    --lynk-color-pink-600: hsl(333.3 71.4% 50.6%);
    --lynk-color-pink-700: hsl(335.1 77.6% 42%);
    --lynk-color-pink-800: hsl(335.8 74.4% 35.3%);
    --lynk-color-pink-900: hsl(335.9 69% 30.4%);
    --lynk-color-pink-950: hsl(336.2 65.4% 15.9%);

    --lynk-color-rose-50: hsl(355.7 100% 97.3%);
    --lynk-color-rose-100: hsl(355.6 100% 94.7%);
    --lynk-color-rose-200: hsl(352.7 96.1% 90%);
    --lynk-color-rose-300: hsl(352.6 95.7% 81.8%);
    --lynk-color-rose-400: hsl(351.3 94.5% 71.4%);
    --lynk-color-rose-500: hsl(349.7 89.2% 60.2%);
    --lynk-color-rose-600: hsl(346.8 77.2% 49.8%);
    --lynk-color-rose-700: hsl(345.3 82.7% 40.8%);
    --lynk-color-rose-800: hsl(343.4 79.7% 34.7%);
    --lynk-color-rose-900: hsl(341.5 75.5% 30.4%);
    --lynk-color-rose-950: hsl(341.3 70.1% 17.1%);

    --lynk-color-primary-50: var(--lynk-color-indigo-50);
    --lynk-color-primary-100: var(--lynk-color-indigo-100);
    --lynk-color-primary-200: var(--lynk-color-indigo-200);
    --lynk-color-primary-300: var(--lynk-color-indigo-300);
    --lynk-color-primary-400: var(--lynk-color-indigo-400);
    --lynk-color-primary-500: var(--lynk-color-indigo-500);
    --lynk-color-primary-600: var(--lynk-color-indigo-600);
    --lynk-color-primary-700: var(--lynk-color-indigo-700);
    --lynk-color-primary-800: var(--lynk-color-indigo-800);
    --lynk-color-primary-900: var(--lynk-color-indigo-900);
    --lynk-color-primary-950: var(--lynk-color-indigo-950);

    --lynk-color-success-50: var(--lynk-color-green-50);
    --lynk-color-success-100: var(--lynk-color-green-100);
    --lynk-color-success-200: var(--lynk-color-green-200);
    --lynk-color-success-300: var(--lynk-color-green-300);
    --lynk-color-success-400: var(--lynk-color-green-400);
    --lynk-color-success-500: var(--lynk-color-green-500);
    --lynk-color-success-600: var(--lynk-color-green-600);
    --lynk-color-success-700: var(--lynk-color-green-700);
    --lynk-color-success-800: var(--lynk-color-green-800);
    --lynk-color-success-900: var(--lynk-color-green-900);
    --lynk-color-success-950: var(--lynk-color-green-950);

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

    --lynk-color-danger-50: var(--lynk-color-red-50);
    --lynk-color-danger-100: var(--lynk-color-red-100);
    --lynk-color-danger-200: var(--lynk-color-red-200);
    --lynk-color-danger-300: var(--lynk-color-red-300);
    --lynk-color-danger-400: var(--lynk-color-red-400);
    --lynk-color-danger-500: var(--lynk-color-red-500);
    --lynk-color-danger-600: var(--lynk-color-red-600);
    --lynk-color-danger-700: var(--lynk-color-red-700);
    --lynk-color-danger-800: var(--lynk-color-red-800);
    --lynk-color-danger-900: var(--lynk-color-red-900);
    --lynk-color-danger-950: var(--lynk-color-red-950);

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

    --lynk-color-neutral-0: hsl(0, 0%, 100%);
    --lynk-color-neutral-1000: hsl(0, 0%, 0%);
    --lynk-color-white: hsl(0, 0%, 100%);
    --lynk-color-black: hsl(0, 0%, 0%);

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
    --lynk-spacing-medium: 1rem;
    --lynk-spacing-large: 1.25rem;
    --lynk-spacing-x-large: 1.75rem;
    --lynk-spacing-2x-large: 2.25rem;
    --lynk-spacing-3x-large: 3rem;
    --lynk-spacing-4x-large: 4.5rem;

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

    --lynk-font-size-2x-small: 0.625rem;
    --lynk-font-size-x-small: 0.75rem;
    --lynk-font-size-small: 0.875rem;
    --lynk-font-size-medium: 1rem;
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

    --lynk-focus-ring-color: var(--lynk-color-primary-600);
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
    --lynk-button-font-size-small: var(--lynk-font-size-x-small);
    --lynk-button-font-size-medium: var(--lynk-font-size-small);
    --lynk-button-font-size-large: var(--lynk-font-size-medium);
    --lynk-button-height-small: 1.75rem;
    --lynk-button-height-medium: 2.5rem;
    --lynk-button-height-large: 3.5rem;

    --lynk-input-height-small: 1.75rem;
    --lynk-input-height-medium: 2.5rem;
    --lynk-input-height-large: 3.5rem;

    --lynk-input-background-color: var(--lynk-color-neutral-0);
    --lynk-input-background-color-hover: var(--lynk-input-background-color);
    --lynk-input-background-color-focus: var(--lynk-input-background-color);
    --lynk-input-background-color-disabled: var(--lynk-color-neutral-100);
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
    --lynk-input-font-size-small: var(--lynk-font-size-small);
    --lynk-input-font-size-medium: var(--lynk-font-size-medium);
    --lynk-input-font-size-large: var(--lynk-font-size-large);
    --lynk-input-letter-spacing: var(--lynk-letter-spacing-normal);

    --lynk-input-color: var(--lynk-color-neutral-700);
    --lynk-input-color-hover: var(--lynk-color-neutral-700);
    --lynk-input-color-focus: var(--lynk-color-neutral-700);
    --lynk-input-color-disabled: var(--lynk-color-neutral-900);
    --lynk-input-icon-color: var(--lynk-color-neutral-500);
    --lynk-input-icon-color-hover: var(--lynk-color-neutral-600);
    --lynk-input-icon-color-focus: var(--lynk-color-neutral-600);
    --lynk-input-placeholder-color: var(--lynk-color-neutral-500);
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

    --lynk-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --lynk-input-focus-ring-offset: 0;

    --lynk-input-label-font-size-small: var(--lynk-font-size-small);
    --lynk-input-label-font-size-medium: var(--lynk-font-size-medium);
    --lynk-input-label-font-size-large: var(--lynk-font-size-large);

    --lynk-input-label-color: inherit;

    --lynk-input-help-text-font-size-small: var(--lynk-font-size-x-small);
    --lynk-input-help-text-font-size-medium: var(--lynk-font-size-small);
    --lynk-input-help-text-font-size-large: var(--lynk-font-size-medium);

    --lynk-input-help-text-color: var(--lynk-color-neutral-500);

    --lynk-toggle-size: 1rem;

    --lynk-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --lynk-panel-background-color: var(--lynk-color-neutral-0);
    --lynk-panel-border-color: var(--lynk-color-neutral-200);
    --lynk-panel-border-width: 1px;

    --lynk-tooltip-border-radius: var(--lynk-border-radius-medium);
    --lynk-tooltip-background-color: var(--lynk-color-neutral-800);
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
