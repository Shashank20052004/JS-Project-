
// Initialize an array to store NFTs (Non-Fungible Tokens)
const NFTs = [];

// Define a function to mint a new NFT with provided metadata
function mintNFT(_name, _age, _city, _anime, _animeCharacter) {
    // Create an NFT object using the given metadata
    const newNFT = {
        name: _name,
        age: _age,
        city: _city,
        anime: _anime,
        animeCharacter: _animeCharacter,
    };
    
    // Add the new NFT to the array
    NFTs.push(newNFT);
    
    // Log a message to confirm NFT minting
    console.log(`New NFT minted: ${_name}`);
}

// Define a function to list details of all minted NFTs
function listNFTs() {
    console.log("Listing all minted NFTs:");
    for (let i = 0; i < NFTs.length; i++) {
        const nft = NFTs[i];
        console.log(`\nFan ID: ${i + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Age: ${nft.age}`);
        console.log(`City: ${nft.city}`);
        console.log(`Anime: ${nft.anime}`);
        console.log(`Character: ${nft.animeCharacter}`);
        console.log("----------------------------------------");
    }
}

// Define a function to display the total number of minted NFTs
function getTotalSupply() {
    console.log(`Total NFTs minted: ${NFTs.length}`);
}

// Mint some NFTs and perform necessary actions
mintNFT("Shashank", "20","Begusarai", "One Punch Man", "Saitama");
mintNFT("Ashish", "21","Puri", "Demon Slayer", "Zenitsu");
mintNFT("Arindam", "22", "Dhanbad", "Naruto", "Itachi");
mintNFT("Manavjeet",  "23", "Chandigarh", "Deathnote", "Kira");

// List details of all minted NFTs
listNFTs();

// Display the total supply of minted NFTs
getTotalSupply();
