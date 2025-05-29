let imgArr = ['https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png','https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2024-03/RCB%20LOGO%20IMAGE%20%281%29.png?itok=B_OD2eR7', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png', 'https://seeklogo.com/images/S/sunrisers-hyderabad-logo-7D9F34361F-seeklogo.com.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/640px-Gujarat_Titans_Logo.svg.png', 'https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/250px-Lucknow_Super_Giants_IPL_Logo.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png']

let index = 0;

const imgElement = document.getElementById('review-pic');

function updateImage() {
    imgElement.src = imgArr[index];
}

function prevImage() {
    index = (index - 1 + imgArr.length) % imgArr.length;
    updateImage();
}

function nextImage() {
    index = (index + 1) % imgArr.length;
    updateImage();
}
updateImage();

function toggleMenu() {
    const menu = document.getElementById("navbarMenu");
    menu.classList.toggle("show");
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}