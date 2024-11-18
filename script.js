const DATA = [
  { url: './img/creativecoding2.png', annotation: 'Creative coding experiment', client: 'Personal project', hashtags: "#Processing" },
  { url: './img/vianova.jpg', annotation: 'Venus music video', client: 'Via Nova Chor', hashtags: "#TouchDesigner" },
  { url: './img/bravenew.png', annotation: 'Brave new world', client: 'Personal project', hashtags: "#Resolume" },
  { url: './img/kidso.png', annotation: 'Kidso live visuals', client: 'DigitalAnalog Festival', hashtags: "#Resolume #Touchdesigner" },
  { url: './img/sketch.png', annotation: 'Sketch', client: 'Personal project', hashtags: "#Procreate" },
  { url: './img/fliegende_haie.jpg', annotation: 'Fliegende Haie live visuals', client: 'DigitalAnalog Festival', hashtags: "#Resolume #TouchDesigner" },
];

// Locate the content list container and the overview and detail view sections
const contentList = document.getElementById("content-list");
const overviewSection = document.getElementById("overview");
const detailViewSection = document.getElementById("detail-view");
const contentDetail = document.getElementById("content-detail");
const searchBar = document.getElementById("search-bar");  // Zugriff auf das Suchfeld

// Loop through each item in the data array and display them
function displayContent(items) {
  contentList.innerHTML = ""; // Reset the content list
  items.forEach(item => {
    // Create a container div for each item
    const itemDiv = document.createElement("div");
    itemDiv.className = "content-item";

    // Create an img element for the image
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.annotation;

    // Create a p element for the annotation
    const annotation = document.createElement("p");
    annotation.textContent = item.annotation;

    // Create a p element for the client
    const client = document.createElement("p");
    client.textContent = `Client: ${item.client}`;

    // Create a p element for the hashtags
    const hashtags = document.createElement("p");
    hashtags.textContent = item.hashtags;

    // Append the image, annotation, and client to the item div
    itemDiv.appendChild(img);
    itemDiv.appendChild(annotation);
    itemDiv.appendChild(client);
    itemDiv.appendChild(hashtags); 

    // Append the item div to the content list container
    contentList.appendChild(itemDiv);

    // Add a click event listener to show the detail view when the item is clicked
    itemDiv.addEventListener("click", () => {
      // Hide the overview section
      overviewSection.style.display = "none";

      // Clear previous content in the detail view
      contentDetail.innerHTML = "";

      // Create an img element for the selected image
      const detailImg = document.createElement("img");
      detailImg.src = item.url;
      detailImg.alt = item.annotation;

      // Append the selected image and annotation to the detail view
      contentDetail.appendChild(detailImg);

      // Create a close button
      const closeButton = document.createElement("button");
      closeButton.className = "close-button";
      closeButton.textContent = "X";
      closeButton.addEventListener("click", () => {
        // Hide the detail view and show the overview again
        detailViewSection.style.display = "none";
        overviewSection.style.display = "block";
      });

      // Append the close button to the detail view section
      contentDetail.appendChild(closeButton);      

      // Show the detail view section
      detailViewSection.style.display = "block";

    });
  });
}

// Display all content initially
displayContent(DATA);

// Add event listener for the search functionality
searchBar.addEventListener("keyup", function() {
  const query = searchBar.value.toLowerCase(); // Get the query text from the search bar

  // If the query has 3 or more characters, filter the content
  if (query.length >= 3) {
    const filteredData = DATA.filter(item => {
      return item.annotation.toLowerCase().includes(query) || item.client.toLowerCase().includes(query) ||
      item.hashtags.toLowerCase().includes(query);
    });
    displayContent(filteredData); // Display the filtered content
  } else {
    displayContent(DATA); // Show all content if the query is less than 3 characters
  }
});
