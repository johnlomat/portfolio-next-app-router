import plugin from 'tailwindcss/plugin' // Import the Tailwind CSS plugin function
import { presets } from './utils/presets' // Import your custom presets
import { PluginAPI } from 'tailwindcss/types/config' // Import the type definition for the plugin API

// Define the shape of your plugin
type RadialGradientPlugin = {
  (api: PluginAPI): void // The main function of the plugin that Tailwind calls
  config: {
    // Configuration for the plugin
    theme: {
      radialGradients: Record<string, string> // Define a place to store radial gradients in the theme
    }
  }
}

// Create the plugin function
const radialGradientPlugin: RadialGradientPlugin = (({ matchUtilities, theme }) => {
  // Get the radialGradients from the theme
  const gradients = theme('radialGradients') as Record<string, string>

  // Create utility classes using matchUtilities
  matchUtilities(
    {
      'bg-radial': (value) => ({
        'background-image': `radial-gradient(${value}, var(--tw-gradient-stops))`,
      }),
    },
    { values: gradients },
  )
}) as RadialGradientPlugin

// Define the plugin's configuration
radialGradientPlugin.config = {
  theme: {
    radialGradients: presets(), // Use your custom presets for radial gradients
  },
}

export default plugin(radialGradientPlugin) // Export the plugin
