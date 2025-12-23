# GitHub Stats Cards - Complete Customization Options

## 📊 GitHub Stats Card Options

Base URL: `https://github-readme-stats.vercel.app/api?username=center2055`

### Core Parameters

| Parameter | Values | Description | Example |
|-----------|--------|-------------|---------|
| `username` | Your GitHub username | Required - Your GitHub username | `username=center2055` |
| `show_icons` | `true`, `false` | Show icons next to stats | `show_icons=true` |
| `count_private` | `true`, `false` | Include private contributions | `count_private=true` |
| `include_all_commits` | `true`, `false` | Include all commits (not just last year) | `include_all_commits=true` |

### Display Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| `hide` | Comma-separated list | Hide specific stats: `stars`, `commits`, `prs`, `issues`, `contribs` |
| `hide_title` | `true`, `false` | Hide the "center2055's GitHub Stats" title |
| `hide_border` | `true`, `false` | Remove card border |
| `show_rank` | `true`, `false` | Show GitHub rank badge |
| `rank_icon` | `default`, `github`, `percentile` | Style of rank icon |

### Theme Options

| Theme | Description |
|-------|-------------|
| `default` | Light theme |
| `dark` | Dark theme (current) |
| `radical` | Pink/purple gradient |
| `merko` | Green theme |
| `gruvbox` | Brown/orange theme |
| `tokyonight` | Blue/purple theme |
| `onedark` | Dark blue theme |
| `cobalt` | Blue theme |
| `synthwave` | Purple/pink neon |
| `highcontrast` | High contrast |
| `dracula` | Dracula theme |
| `prussian` | Prussian blue |
| `monokai` | Monokai theme |
| `vue` | Vue.js green |
| `vue-dark` | Vue.js dark |
| `shades-of-purple` | Purple shades |
| `nightowl` | Night owl theme |
| `buefy` | Buefy theme |
| `blue-green` | Blue-green gradient |
| `algolia` | Algolia theme |
| `great-gatsby` | Great Gatsby theme |
| `darcula` | Darcula theme |
| `bear` | Bear theme |
| `solarized-dark` | Solarized dark |
| `solarized-light` | Solarized light |
| `chartreuse-dark` | Chartreuse dark |
| `nord` | Nord theme |
| `gotham` | Gotham theme |
| `material-palenight` | Material palenight |
| `graywhite` | Gray white |
| `vision-friendly-dark` | Vision friendly dark |
| `ayu-mirage` | Ayu mirage |
| `midnight-purple` | Midnight purple |
| `calm` | Calm theme |
| `flag-india` | India flag colors |
| `omni` | Omni theme |
| `react` | React theme |
| `jolly` | Jolly theme |
| `maroongold` | Maroon gold |
| `yeblu` | Ye blu |
| `blueberry` | Blueberry theme |
| `slateorange` | Slate orange |
| `kacho_ga` | Kacho ga theme |
| `outrun` | Outrun theme |
| `ocean_dark` | Ocean dark |
| `city_lights` | City lights |
| `github_dark` | GitHub dark |
| `github_dark_dimmed` | GitHub dark dimmed |
| `discord_old_blurple` | Discord old blurple |
| `aura_dark` | Aura dark |
| `panda` | Panda theme |
| `noctis_minimus` | Noctis minimus |
| `catppuccin_latte` | Catppuccin latte |
| `catppuccin_frappe` | Catppuccin frappe |
| `catppuccin_macchiato` | Catppuccin macchiato |
| `catppuccin_mocha` | Catppuccin mocha |
| `apprentice` | Apprentice theme |
| `moltack` | Moltack theme |

### Customization Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| `bg_color` | Hex color (without #) | Custom background color |
| `title_color` | Hex color | Title text color |
| `text_color` | Hex color | Body text color |
| `icon_color` | Hex color | Icon color |
| `border_color` | Hex color | Border color |
| `ring_color` | Hex color | Rank ring color |
| `locale` | Language code | Set language (e.g., `en`, `es`, `fr`, `de`) |
| `disable_animations` | `true`, `false` | Disable animations |
| `card_width` | Number | Card width in pixels |
| `hide_rank` | `true`, `false` | Hide rank badge |

### Example Configurations

**Minimal Stats (only commits and PRs):**
```
https://github-readme-stats.vercel.app/api?username=center2055&hide=stars,issues,contribs&show_icons=true&theme=dark
```

**Custom Colors:**
```
https://github-readme-stats.vercel.app/api?username=center2055&bg_color=0D1117&title_color=27E627&text_color=FFFFFF&icon_color=27E627&show_icons=true
```

**No Rank, No Border:**
```
https://github-readme-stats.vercel.app/api?username=center2055&hide_rank=true&hide_border=true&show_icons=true&theme=dark
```

---

## 🌐 Top Languages Card Options

Base URL: `https://github-readme-stats.vercel.app/api/top-langs/?username=center2055`

### Core Parameters

| Parameter | Values | Description |
|-----------|--------|-------------|
| `username` | Your GitHub username | Required |
| `layout` | `compact`, `normal`, `donut`, `donut-vertical`, `pie` | Layout style |
| `langs_count` | Number (1-10) | Number of languages to show |
| `hide` | Comma-separated list | Hide specific languages (e.g., `html,css`) |
| `exclude_repo` | Comma-separated list | Exclude repos from calculation |
| `theme` | Same as stats card | Theme selection |

### Display Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| `hide_title` | `true`, `false` | Hide "Most Used Languages" title |
| `hide_border` | `true`, `false` | Remove border |
| `card_width` | Number | Card width in pixels |
| `bg_color` | Hex color | Background color |
| `title_color` | Hex color | Title color |
| `text_color` | Hex color | Text color |
| `border_color` | Hex color | Border color |
| `locale` | Language code | Set language |

### Example Configurations

**Compact Layout (current):**
```
https://github-readme-stats.vercel.app/api/top-langs/?username=center2055&layout=compact&langs_count=8&theme=dark
```

**Donut Chart:**
```
https://github-readme-stats.vercel.app/api/top-langs/?username=center2055&layout=donut&langs_count=6&theme=dark
```

**Exclude Specific Languages:**
```
https://github-readme-stats.vercel.app/api/top-langs/?username=center2055&layout=compact&hide=html,css,markdown&theme=dark
```

**Custom Width:**
```
https://github-readme-stats.vercel.app/api/top-langs/?username=center2055&layout=compact&card_width=500&theme=dark
```

---

## 🔥 GitHub Streak Stats Options

Base URL: `https://github-readme-streak-stats.herokuapp.com/?user=center2055`

### Core Parameters

| Parameter | Values | Description |
|-----------|--------|-------------|
| `user` | Your GitHub username | Required |
| `theme` | Theme name | Theme selection |

### Theme Options

| Theme | Description |
|-------|-------------|
| `dark` | Dark theme (current) |
| `radical` | Pink/purple gradient |
| `merko` | Green theme |
| `gruvbox` | Brown/orange theme |
| `tokyonight` | Blue/purple theme |
| `onedark` | Dark blue theme |
| `cobalt` | Blue theme |
| `synthwave` | Purple/pink neon |
| `highcontrast` | High contrast |
| `dracula` | Dracula theme |
| `prussian` | Prussian blue |
| `monokai` | Monokai theme |
| `vue` | Vue.js green |
| `vue-dark` | Vue.js dark |
| `shades-of-purple` | Purple shades |
| `nightowl` | Night owl theme |
| `buefy` | Buefy theme |
| `blue-green` | Blue-green gradient |
| `algolia` | Algolia theme |
| `great-gatsby` | Great Gatsby theme |
| `darcula` | Darcula theme |
| `bear` | Bear theme |
| `solarized-dark` | Solarized dark |
| `solarized-light` | Solarized light |
| `chartreuse-dark` | Chartreuse dark |
| `nord` | Nord theme |
| `gotham` | Gotham theme |
| `material-palenight` | Material palenight |
| `graywhite` | Gray white |
| `vision-friendly-dark` | Vision friendly dark |
| `ayu-mirage` | Ayu mirage |
| `midnight-purple` | Midnight purple |
| `calm` | Calm theme |
| `flag-india` | India flag colors |
| `omni` | Omni theme |
| `react` | React theme |
| `jolly` | Jolly theme |
| `maroongold` | Maroon gold |
| `yeblu` | Ye blu |
| `blueberry` | Blueberry theme |
| `slateorange` | Slate orange |
| `kacho_ga` | Kacho ga theme |
| `outrun` | Outrun theme |
| `ocean_dark` | Ocean dark |
| `city_lights` | City lights |
| `github_dark` | GitHub dark |
| `github_dark_dimmed` | GitHub dark dimmed |
| `discord_old_blurple` | Discord old blurple |
| `aura_dark` | Aura dark |
| `panda` | Panda theme |
| `noctis_minimus` | Noctis minimus |
| `catppuccin_latte` | Catppuccin latte |
| `catppuccin_frappe` | Catppuccin frappe |
| `catppuccin_macchiato` | Catppuccin macchiato |
| `catppuccin_mocha` | Catppuccin mocha |
| `apprentice` | Apprentice theme |
| `moltack` | Moltack theme |

### Display Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| `hide_border` | `true`, `false` | Remove border |
| `type` | `svg`, `png` | Output format |
| `locale` | Language code | Set language |
| `date_format` | `M%20j%5B%2C%20Y%5D` | Date format (URL encoded) |
| `mode` | `daily`, `weekly` | Streak calculation mode |

### Example Configurations

**No Border:**
```
https://github-readme-streak-stats.herokuapp.com/?user=center2055&theme=dark&hide_border=true
```

**Different Theme:**
```
https://github-readme-streak-stats.herokuapp.com/?user=center2055&theme=radical
```

---

## 🎨 Popular Theme Combinations

### Dark Professional
- Stats: `theme=dark`
- Languages: `theme=dark`
- Streak: `theme=dark`

### Neon Cyberpunk
- Stats: `theme=synthwave`
- Languages: `theme=synthwave`
- Streak: `theme=synthwave`

### Green Terminal
- Stats: `theme=merko`
- Languages: `theme=merko`
- Streak: `theme=merko`

### Purple Dream
- Stats: `theme=midnight-purple`
- Languages: `theme=midnight-purple`
- Streak: `theme=midnight-purple`

### GitHub Native
- Stats: `theme=github_dark`
- Languages: `theme=github_dark`
- Streak: `theme=github_dark`

---

## 💡 Pro Tips

1. **Match all three cards** - Use the same theme across stats, languages, and streak for consistency
2. **Hide what you don't need** - Use `hide` parameter to remove stats you don't want to show
3. **Custom colors** - Match your profile colors using `bg_color`, `title_color`, etc.
4. **Language filtering** - Exclude languages like `markdown`, `html`, `css` if you want to show only programming languages
5. **Layout experimentation** - Try different layouts for languages card (donut, pie, etc.)
6. **Private repos** - Set `count_private=true` if you want to include private contributions

---

## 📝 Current Configuration

Your current setup:
- **Stats Card**: Dark theme, shows icons, includes all commits and private contributions
- **Languages Card**: Compact layout, shows 8 languages, dark theme
- **Streak Card**: Dark theme

Want to customize? Just modify the URLs in your README.md!



