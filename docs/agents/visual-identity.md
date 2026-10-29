# WordStack Visual Identity

**Status:** Starter design system  
**Brand name:** WordStack is a working name and can be replaced later.

## 1. Design direction

WordStack helps busy professionals across Asia build useful workplace English in five minutes a day. The visual identity should feel **clear, encouraging, and credible**: professional enough for work, friendly enough for beginners, and light enough to use on a commute.

### Design principles

1. **Make the next step obvious.** Each page should have one primary action. Keep the main CTA in a consistent place and use the same label for the same action.
2. **Show useful English, not schoolwork.** Use real words, short workplace examples, and situation-based learning cards. Avoid classroom, exam, and dictionary-list clichés.
3. **Make progress feel calm and positive.** Celebrate practice and streaks without pressure, noisy gamification, or shame-based reminders.
4. **Design for a phone first.** Use readable type, simple layouts, and generous tap targets. A learner should be able to review a word with one hand.
5. **Keep the site light.** Prefer text, CSS, and small inline icons over video, large illustrations, or decorative image libraries.

## 2. Color palette

Use the dark ink for reading, blue for action, and warm yellow sparingly for moments of progress. Most of the interface should remain white or a very light neutral.

| Token | HEX | Use |
|---|---|---|
| Ink | `#172B3A` | Headings, primary text, dark navigation |
| Body text | `#425466` | Paragraphs and labels |
| Muted text | `#64748B` | Secondary descriptions and metadata |
| Primary blue | `#2563EB` | Main CTA, links, selected controls |
| Primary blue hover | `#1D4ED8` | Hover and pressed state for blue controls |
| Pale blue | `#EFF6FF` | Selected cards, subtle callouts, focus backgrounds |
| Canvas | `#F6F8FB` | Page background and alternate sections |
| Surface | `#FFFFFF` | Cards, forms, navigation |
| Border | `#DCE4EC` | Dividers, input borders, card outlines |
| Success green | `#168A68` | Completed states and positive progress |
| Warm highlight | `#F4B740` | Small streak or achievement details only |

### Color rules

- Use `#2563EB` for the primary action, not for large areas of decoration.
- Use white text on the primary blue button. Keep the warm highlight for small icons or badges; do not use it as text on white.
- Use Ink or Body text for important content. Muted text is for secondary information, not essential instructions.
- Do not communicate status with color alone. Pair success, warning, or selected states with a label, icon, or shape.
- Keep gradients and extra accent colors out of the starter system. Add a new color only when a real interface need requires it.

## 3. Typography

### Font choices

- **Headings:** Manrope, weights 700–800.
- **Body and interface:** Inter, weights 400–600.
- **Fallback:** system UI fonts, so the page remains readable immediately and does not depend on a font service.

For the fastest beginner setup, use the system stack below for both roles. Manrope and Inter are optional enhancements: self-host optimized WOFF2 files, load only the weights used, and use `font-display: swap`. Avoid blocking the first screen while fonts load.

```css
:root {
  --font-body: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-heading: Manrope, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  font-family: var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-heading);
}
```

### Type scale

Use a small set of sizes and generous line height. Keep body copy around 16–18px and avoid long, wide paragraphs.

| Role | Desktop | Mobile | Weight / line height |
|---|---:|---:|---|
| Hero heading | 48–56px | 36–42px | 800 / 1.08–1.15 |
| Section heading | 32–40px | 28–32px | 700–800 / 1.2 |
| Card heading | 20–24px | 18–22px | 700 / 1.3 |
| Body | 16–18px | 16–18px | 400 / 1.6 |
| Small / metadata | 14px | 14px | 400–500 / 1.45 |
| Button / nav | 15–16px | 15–16px | 600 / 1.2 |

Suggested responsive hero heading:

```css
.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
}
```

## 4. Layout and spacing

Use an 8px-based spacing rhythm. The extra 4px step is useful for small gaps and icon alignment.

| Token | Value | Typical use |
|---|---:|---|
| `space-1` | 4px | Icon-to-label gap |
| `space-2` | 8px | Compact control spacing |
| `space-3` | 12px | Related labels and items |
| `space-4` | 16px | Default component padding |
| `space-6` | 24px | Card padding on mobile |
| `space-8` | 32px | Related content groups |
| `space-12` | 48px | Section inner spacing |
| `space-16` | 64px | Desktop section spacing |
| `space-20` | 80px | Large desktop section spacing |

### Layout rules

- Build mobile-first: one column by default, then add columns at wider breakpoints.
- Use a centered content container with a maximum width of about **1120px** and **20–24px** side padding on phones.
- Keep reading text to roughly **65–75 characters per line**.
- Give homepage sections **56–80px** of vertical space on desktop and **40–56px** on mobile.
- Use a two-column hero on desktop only when the visual supports the product (for example, a real sample word card). Stack the content on mobile.
- Avoid carousels for important content. Make packs and examples visible as a simple grid or vertical list.

## 5. Shape, borders, and elevation

- Use **8px** corner radius for inputs and compact controls.
- Use **12–16px** for cards and larger surfaces.
- Use **999px** for pill badges only; do not make every button a pill.
- Prefer a 1px `Border` outline to heavy shadows.
- Reserve a very soft shadow for floating navigation or a card that needs clear separation:

```css
box-shadow: 0 8px 24px rgb(23 43 58 / 8%);
```

## 6. Buttons and controls

### Primary button

Use for the one most important action on a page, such as **Start free — take the 2-minute level check** or **Review now**.

- Blue background, white text, 600 weight.
- Minimum height **48px**; on mobile, aim for **52px**.
- Horizontal padding **20–24px**.
- Radius **8px**.
- Hover: darker blue. Pressed: darker blue with a slight inset or opacity change.
- Focus: a visible 3px pale-blue outline with offset.
- Disabled: muted neutral background and text, plus a clear disabled state.

### Secondary button

Use for a useful but lower-priority action such as **Preview pack**.

- White background, Ink text, 1px Border outline.
- Match the primary button's height, padding, and radius.
- Hover: Pale blue background.

### Text link

Use for supporting actions such as **See how it works**. Underline links in body text; in navigation, use clear color and hover/focus states.

### Example CSS

```css
.button {
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 8px;
  font: 600 16px/1 var(--font-body);
  cursor: pointer;
}

.button-primary {
  color: #fff;
  background: #2563eb;
}

.button-primary:hover {
  background: #1d4ed8;
}

.button:focus-visible {
  outline: 3px solid #bfdbfe;
  outline-offset: 3px;
}
```

Make the full control clickable. Do not use a tiny icon-only target for important actions; any icon button should have an accessible name and a tap area of at least **44 × 44px**.

## 7. Core interface patterns

### Navigation

- Keep the public navigation short: **Learn, Method, Blog, Pricing**, plus **Log in** and the persistent **Start free** CTA.
- On mobile, show the key action without crowding the header. Keep labels readable; do not hide the only route to learning in a menu.
- For logged-in learners, prioritize **Learn, Review, Practice, Progress**. Show the review-due count next to Review when available.
- During a review session, remove unrelated navigation and keep attention on the current word and next action.

### Cards and learning content

- Use white cards on the Canvas background, with a subtle border and consistent padding.
- Start each pack card with a situation or outcome, such as **Meetings & Pushback**, not a generic category label.
- A word card should make the word, plain-English definition, and useful example sentence the clearest elements.
- Keep save, audio, and next/review actions visibly distinct. Give audio controls a label or accessible name.
- Show progress with both a number or short label and a visual indicator.

### Feedback and progress

- Use short, encouraging messages: “Nice work. 8 words reviewed.” Avoid guilt, streak loss warnings, or exaggerated praise.
- Pair progress graphics with text, such as “12-day streak” or “9 cards due.”
- Use the warm highlight for a small streak accent, not as a second primary CTA.
- Clearly explain what happens after a click, especially for sign-in prompts and saved words.

## 8. Homepage expression

Apply the system to the existing homepage plan in this order:

1. **Header and hero:** white or Canvas surface, dark readable heading, one blue CTA, and a small text link for the method.
2. **Trust strip:** concise claims in muted text; do not use invented review counts, logos, or credentials.
3. **How it works and benefits:** simple cards or a 3-step list, with context and outcomes ahead of decoration.
4. **Word packs and live sample:** demonstrate real learning content before asking for an account.
5. **Progress, FAQ, and closing CTA:** show a believable progress example, answer practical questions, repeat the same primary action.

If a section needs testimonials, use real, permissioned quotes. If there are no testimonials yet, omit the section or label genuine beta feedback clearly—never invent social proof.

## 9. Accessibility and responsive checks

- Maintain strong text contrast; aim for WCAG AA (4.5:1 for normal text and 3:1 for large text and essential interface boundaries).
- Keep body text at least **16px** and all touch targets at least **44 × 44px**.
- Provide visible keyboard focus and semantic heading order. Do not choose heading sizes solely for their appearance.
- Give form controls persistent labels; do not rely on placeholder text as the only label.
- Respect reduced-motion preferences. Prefer simple state changes over animations.
- At narrow widths, prevent horizontal scrolling and keep the main CTA visible without forcing a user to zoom.
- Test the first screen on a phone and a throttled connection. Text and the primary action should appear before optional imagery or custom fonts.

## 10. Beginner implementation checklist

1. Add the color, font, and spacing values as CSS custom properties.
2. Style the body, headings, links, buttons, and cards before building page-specific details.
3. Build one page section at a time from a single mobile column.
4. Reuse the same button, card, and spacing styles instead of creating a new look for each section.
5. Check keyboard focus, readable contrast, mobile layout, and loading behavior before adding decorative effects.

### Starter CSS tokens

```css
:root {
  --color-ink: #172b3a;
  --color-body: #425466;
  --color-muted: #64748b;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-primary-soft: #eff6ff;
  --color-canvas: #f6f8fb;
  --color-surface: #ffffff;
  --color-border: #dce4ec;
  --color-success: #168a68;
  --color-highlight: #f4b740;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  --radius-control: 8px;
  --radius-card: 14px;
  --content-width: 1120px;
}
```
