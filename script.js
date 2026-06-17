const songs = [
  { title: "Crumb - Locket",
    file: "Music/Crumb - Locket.mp3"
  },
  { title: "Last Dinosaurs - Zoom",
    file: "Music/LAST DINOSAURS - ZOOM (OFFICIAL MUSIC VIDEO).mp3"
  },
  { title: "Last Dinosaurs - Thousands of Years",
    file: "Music/Thousands of Years.mp3"
  },
  { title: "Cuco - Caution",
    file: "Music/Cuco - Caution.mp3"
  },
  { title: "The Four Seasons - Beggin'",
    file: "Music/The Four Seasons - Beggin'.mp3"
  },
  { title: "Goldford - Orange Blossoms",
    file: "Music/Orange Blossoms.mp3"
  },
  { title: "Maeta - Teen Scene (Wax Motif Remix)",
    file: "Music/Teen Scene (Wax Motif Remix).mp3"
  },
  { title: "Grupo Exterminador - Las Monjitas",
    file: "Music/Las Monjitas.mp3"
  },
  { title: "Deadmau5 - Ghosts 'n' Stuff",
    file: "Music/Ghosts 'n' Stuff.mp3"
  },
  { title: "Meltt - Within You, Within Me",
    file: "Music/Within You, Within Me.mp3"
  },
  { title: "Good Kid - Aloe Lite",
    file: "Music/Aloe Lite.mp3"
  },
  { title: "Boy Pablo - Everytime",
    file: "Music/Everytime.mp3"
  },
  { title: "Monsune - Nothing in Return",
    file: "Music/Nothing in Return.mp3"
  },
  { title: "SpiritBox - The Summit",
    file: "Music/The Summit.mp3"
  },
  { title: "LeeHi - ONLY",
    file: "Music/ONLY.mp3"
  },
  { title: "Laufey - Silver Lining",
    file: "Music/Silver Lining.mp3"
  },
  { title: "EarthKry - Ms.Mary",
    file: "Music/Ms.Mary.mp3"
  },
  { title: "Marco Flores Y La Jerez - La Bruja",
    file: "Music/La Bruja.mp3"
  },
  { title: "pH-1 (Feat.PENOMECO) - Cupid",
    file: "Music/Cupid.mp3"
  },
  { title: "TOOL - The Pot",
    file: "Music/The_Pot.mp3"
  },
  { title: "Téo (ft. Lido) - Belong In The Sun",
    file: "Music/Belong In The Sun.mp3"
  },
  { title: "Unclekamo - Far From Lies",
    file: "Music/FAR FROM LIES - UNCLEKAMO (LYRICS).mp3"
  },
  { title: "Her's - What once was",
    file: "Music/What Once Was.mp3"
  },
  { title: "KEY - Good & Great",
    file: "Music/Good & Great.mp3"
  },
  { title: "Morgan Wallen - 7 Summers",
    file: "Music/7 Summers.mp3"
  },
  { title: "Alexis Y Fido - Ojos Que no Ven",
    file: "Music/Ojos Que No Ven.mp3"
  },
  { title: "Xavi - La diabla",
    file: "Music/La Diabla.mp3"
  },
  { title: "Xavi - La Diabla",
    file: "Music/La Diabla.mp3"
  },
  { title: "Steely Dan - Only a Fool would Say That",
    file: "Music/Only A Fool Would Say That.mp3"
  },
  { title: "America - Ventura Highway",
    file: "Music/Ventura Highway.mp3"
  },
  { title: "Pokémon & ENHYPEN - One and Only",
    file: "Music/One and Only.mp3"
  },
  { title: "3BALLMTY (feat. América Sierra & El Bebeto) - Inténtalo",
    file: "Music/Inténtalo.mp3"
  },
  { title: "Grupo Exterminador - De Parrando Con El Diablo",
    file: "Music/De Parranda Con El Diablo.mp3"
  },
  { title: "Sleep Token - The Summoning",
    file: "Music/Sleep Token - The Summoning (Lyrics).mp3"
  },
  { title: "Slipknot - (sic)",
    file: "Music/Slipknot - (Sic) (Audio) 4.mp3"
  },
  { title: "Supermerk2 - Que Calor ",
    file: "Music/Supermerk2 - Que calor │ Video Lyric 4.mp3"
  },
  { title: "Kid Travis - Strawberry Skies",
    file: "Music/Strawberry Skies ~ Kid Travis (Lyric Video).mp3"
  },
  { title: "Sander Mölder - San Francisco",
    file: "Music/San Francisco.mp3"
  },
  { title: "Clairo Ft. Rejjie Snow - Hello?",
    file: "Music/Hello_.mp3"
  },
  { title: "Celler Dwellers - Taste",
    file: "Music/Taste.mp3"
  },
  { title: "Red Hot Chilli Peppers - Aeroplane",
    file: "Music/Red Hot Chili Peppers - Aeroplane (Audio).mp3"
  },
  { title: "Bryan Adams - (Everything I Do) I Do It For You",
    file: "Music/Bryan Adams - (Everything I Do) I Do It For You 4.mp3"
  },
  { title: "The 1975 - Love It If We Made It",
    file: "Music/The 1975 - Love It If We Made It (Official Video) 4.mp3"
  },
  { title: "Cigaretts After Sex - Sweet",
    file: "Music/Sweet - Cigarettes After Sex 4.mp3"
  },
];


function loadRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  const song = songs[randomIndex];

  const container = document.getElementById("random-song");
  container.innerHTML = `
    <h3>${song.title}</h3>
    <audio controls>
      <source src="${song.file}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  `;
}

window.onload = function () {
  loadRandomSong();
  document.getElementById("randomize-btn").addEventListener("click", loadRandomSong);
};


