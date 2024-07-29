const getScore = () => {
  const savedScore = localStorage.getItem('LastScore')
  return savedScore ? parseInt(savedScore) : 0
}

// Function to display the last score
const showLastScore = () => {
  const lastScoreElement = document.querySelector('#lastScore')
  const lastScore = getScore()

  if (getScore() !== 0) {
    lastScoreElement.innerText = `Last Score : ${lastScore}`
  } else {
    lastScoreElement.innerText = ''
  }
}

// Call the function to display the score when the page loads
window.onload = showLastScore()
