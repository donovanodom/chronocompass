type historyItem = {
  year: string,
  event: string,
}

async function Home() {

const data = await fetch('https://api.api-ninjas.com/v1/historicalevents?text=amsterdam', {
  headers: {
    'X-API-KEY': process.env.HISTORY_API_KEY || ''
  }
})
const historyItems: historyItem[] = await data.json()
const sortedHistoryItems: historyItem[] = historyItems.sort((a, b) => 
  Number(b.year) - Number(a.year)
)

//   let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

  return (
    <div className="grid grid-rows-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div id="map"></div>
      <div>
        {sortedHistoryItems?.map((item: any) => 
          <div>
            <div>{item.year}</div>
            <div>{item.event}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page(){
  return(
    <Home/>
  )
}
