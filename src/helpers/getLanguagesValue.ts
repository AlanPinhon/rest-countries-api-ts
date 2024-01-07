export const getLanguagesValue = (languages:{ [key: string]: string }) => {
  const languagesKeys = Object.keys(languages || {});
  
  const languagesValues = languagesKeys.map(key => {
    return languages && languages[key as keyof { [key: string]: string }]
  })

  return languagesValues;
}