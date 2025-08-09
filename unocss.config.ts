import { defineConfig, presetTypography, presetIcons, presetWebFonts, presetWind4 } from 'unocss';

export default defineConfig({
    shortcuts: {
        container: 'max-w-7xl mx-auto'
    },
    theme: {
        colors: {
            background: '#0a0a0a'
        }
    },
    presets: [
        presetWind4(),
        presetTypography(),
        presetIcons({
            warn: true,
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter:300,400,500,600,700'
            }
        })
    ]
});


