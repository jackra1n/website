import { defineConfig, presetUno, presetTypography, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
    dark: 'class',
    shortcuts: {
        container: 'max-w-7xl mx-auto'
    },
    theme: {
        colors: {
            background: '#0a0a0a'
        }
    },
    presets: [
        presetUno(),
        presetTypography(),
        presetIcons(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter:300,400,500,600,700'
            }
        })
    ]
});


