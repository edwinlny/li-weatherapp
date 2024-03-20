import iconAssets from '../components/assets/icons.js'



const icons = iconAssets

const weatherIconMappings = {
  Clouds: 0,
  Clear: 1,
  Rain: 2,
  Thunderstorm: 3,
  Snow: 4,
  default: 5, 
};

// Define the getWeatherIcon function
const getWeatherIcon = (description) => {
  // Check if the description exists in the 
  const iconIndex = weatherIconMappings[description];
  // If the description exists, return the corresponding icon from the icons array

  // return iconIndex ? icons[iconIndex] : icons[5]
  if (iconIndex !== undefined && iconIndex >= 0 && iconIndex < icons.length) {
    return icons[iconIndex];
  }
  
  // If no matching description found or the icon index is out of range, return the default icon
  return icons[weatherIconMappings['default']];
};

export { getWeatherIcon };