export const SAVE_RESULTS = "SAVE_RESULTS";
export const SEARCH_BAR_RESULTS = "SEARCH_BAR_RESULTS";

export const saveSearchResults = (songs) => ({ type: SAVE_RESULTS, payload: songs });
export const saveHomeResults = (results) => ({ type: SEARCH_BAR_RESULTS, payload: results });

export const search = (query) => {
  return async (dispatch) => {
    if (query.length > 2) {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);

        if (response.ok) {
          const result = await response.json();
          const songs = result.data;

          dispatch(saveSearchResults(songs));
        } else {
          console.log("Errore");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};

// export const fetchData = async (paramams) => {
//     try {
//       const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + paramams.id, {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
//           "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setAlbum(data);
//       } else {
//         throw new Error(`Errore nel caricamento`);
//       }
//     } catch (error) {
//       console.error("Si è verificato un errore:", error);
//       throw error;
//     }
//   };
