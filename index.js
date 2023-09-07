// Get all elements with the .btnn class
const buttons = document.querySelectorAll('.btnn');
const playlistDivs = document.querySelectorAll('.spotify-playlists');

// Add a click event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all playlist divs
        playlistDivs.forEach((div) => {
            div.style.display = 'none';
        });

        // Show the playlist div at the same index as the button
        playlistDivs[index].style.display = 'block';
    });
});
