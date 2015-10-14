import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from "../src/spectacle";



import preloader from "../src/utils/preloader";

import Interactive from "./interactive";
import LeafletMap from "./LeafletMap";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  osmWorld: require("./osm-whole-world.png"),
  tangramMatrix: require("./tangram-matrix.png"),

  hotLogo: require("./hot-osm-logo.png"),
  IDPCamps: require("./ny-times-kathmandu-camps.png"),
  taskManager: require("./nepal-hotosm-task-manager.png"),
  nepalRescueMap: require("./nepal-canadian-rescue-map.png"),
  missingMapsProcess: require("./missing-maps-process.svg"),

  nepalFirstThreeDays: require("./mapbox-nepal-first-three-days-edits.gif"),

  //https://www.flickr.com/photos/isohedral/14675824683/
  espressoPour: require("./moon-shot-espresso-cup-14675824683_c17e10c8a2_k.jpg"),


  drinkingFountain: require("./atx-drinking-fountain.png"),
  toilets: require("./atx-toilets.png"),
  bikeShop: require("./atx-fast-folks.png"),
  hotel: require("./atx-hilton-garden-inn.png"),
  creek: require("./atx-waller-creek.png"),


  //https://www.flickr.com/photos/biblarte/9963929406/in/photolist-gbtK5j-cvXbGE-hghPwY-gbu4kV-67UZCU-6RYpHp-fEAYXj-os4AMh-bNtVQ-55AERH-3bxdXe-n71Tt2-7ziHrZ-o5erp3-fUApRE-bm1Y1H-9916kg-hUnRYZ-5CSMrX-hSwQbK-apAQwp-4Q8dXu-63obju-gbzS6G-gbAcQP-63iUS4-37sjB-51ffP-aBgQeQ-7NqwRf-fDZWw5-nFvACJ-4rt2p8-nHjfEd-nHju1d-nHjinN-qGRGFt-nr4PAh-nGByxE-nHKHpL-nr4JBu-nKNa1F-nGNZZH-pWgN8p-nGwaar-nKMUKB-nGNNYz-nK8JZk-nqdEDN-nqRYxu
  pracaDoComercio: require("./praca-do-comercio-9963929406_4ba50c00e3_o.jpg"),

  iDEditor: require("./id-screenshot.png"),
  JOSMEditor: require("./josm-screenshot.png"),

};

const huge = {
  width: '100%'
}

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={300} progress="bar">
        <Slide
          bgColor="primary"
          notes="Hi everyone. As you already know, we'll be talking about editing OpenStreetMap (OSM) with the JOSM editor. Audience participation time: Who here has heard of OSM? Used OSM? Edited OSM with iD? With JOSM?"
        >
          <Heading size={2} fit caps textColor="secondary">
            While we're waiting...
          </Heading>
          <Heading size={2} fill caps textColor="tertiary">
            sign up for an account https://www.openstreetmap.org
          </Heading>
          <Heading size={2} fill caps textColor="quaternary">
            install JOSM https://josm.openstreetmap.de/
          </Heading>
          <Heading size={2} caps fill textColor="tertiary">
            slides at bit.ly/1X4QSa1
          </Heading>
        </Slide>

        <Slide
          bgColor="primary"
          notes="Hi everyone. As you already know, we'll be talking about editing OpenStreetMap (OSM) with the JOSM editor. Feel free to stop me anytime and ask questions or discuss. Actually, I'll start with some questions: Who here has heard of OSM? Used OSM? Edited OSM with iD? With JOSM?"
        >
          <Heading size={2} fit caps textColor="secondary">
            Introduction to
          </Heading>
          <Heading size={2} fit caps textColor="secondary">
            Editing OpenStreetMap
          </Heading>
          <Heading size={2} fit caps textColor="quaternary">
            with JOSM
          </Heading>
        </Slide>

        <Slide bgImage={images.osmWorld.replace("/", "")} bgDarken={0}
          notes="Cool. I'll start off by briefly talking about what OpenStreetMap is, so we know why we'd even want to edit it..."
        >
        </Slide>

        <Slide transitionDuration={1000} bgColor="primary" bgImage={images.osmWorld.replace("/", "")} bgDarken={0.75}
          notes="A good analogy is that OpenStreetMap is [click] a Wikipedia of maps. [click] It is a map of the planet, global in scope. Every place on earth can be put into OpenStreetmap.[click] It is a a crowd-sourced, democratized map, anybody can freely edit it. [click] And there aren't very many restrictions on what you you can do with the map data. [click]"
        >
          <Heading size={1} bold fit caps textColor="primary">
            OpenStreetMap is
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fill textColor="quinary">"Wikipedia of maps"</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fill textColor="quinary">Map of the planet</Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fill textColor="quinary">Free to edit</Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fill textColor="quinary">Free to use*</Heading>
            <Heading size={4} caps fill textColor="quinary">*under ODbL</Heading>
          </Appear>
        </Slide>

        <Slide
           notes="OpenStreetMap data are licensed under the Open Database License. There's a full legal document behind it, but the short version is that you can do whatever you want with it as long as you attribute OpenStreetMap as the source of the data and you make sure that if you make any changes to the data that you also make those changes available."
         >
          <Heading size={1} caps fit>
            <Link textColor="secondary" href="http://opendatacommons.org/licenses/odbl/">Open Database License</Link>
          </Heading>
          <Text caps textColor="quaternary">
            TL;DR you are free to share, create, adapt as long as you
          </Text>
          <Text caps textColor="quaternary">
              <S type="bold"> attribute </S> and
              <S type="bold"> share-alike </S>
          </Text>
        </Slide>

        <Slide
           notes="This last part allows people to take OpenStreetMap data and do some really cool things with it."
         >
          <Heading size={2} caps fit>
            enables cool things
          </Heading>
        </Slide>


        <Slide full bgColor="primary" margin="0px" width="100%" height="100%"
           notes="Here is an example of what OpenStreetMap looks like. This is Austin."
         >
          <LeafletMap
            view='austin'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="This is the same OSM data, but rendered with a map style that was made by Stamen and CartoDB that is designed to be a good a base-layer for visualizing other data on top of. It provides some geographic context without being too intrusive."
        >
          <LeafletMap
            view='austin'
            url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="Again, another view of Austin but stylized as a super cool space ship."
        >
          <LeafletMap
            view='austin'
            url='http://{s}.tiles.mapbox.com/v3/examples.3hqcl3di/{z}/{x}/{y}.png'
            attribution='&copy; Map data © OpenStreetMap contributors'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="Same map, but stylized as if it was painted with water-colors. This was also produced by Stamen Design and it is all done digitally using some cool rendering effects, from OpenStreetMap data."
        >
          <LeafletMap
            view='austin'
            url='http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'
            attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />
        </Slide>


        <Slide bgColor="primary"
          bgImage={images.tangramMatrix.replace('/','')}
           notes="There is a neat project called Tangram is that is being developed by Patricio Gonzalez Vivo - he works for a company called mapzen and he's doing some very awesome things with dynamic maps. This one is in the style of an artist named (pron. ryoghee-keydah) Ryoji Ikeda. I need to click on this link to really show it... "
        >
          <Link href="https://tangrams.github.io/tangram-sandbox/tangram.html?styles/matrix.yaml#16.25437/30.26832/-97.74343">
            <Heading size={1} caps fit textColor="primary">
                tangram
            </Heading>
          </Link>
        </Slide>

        <Slide
          bgColor="quaternary"
           notes="So those are fun, but I want to take a second to point out that because these all use the same underlying data, edits to OSM will show up on every one of these maps. I also wanted to show these things off because the editing interfaces tend to be very data-focused and utilitarian. But there are lots of people taking this data and building very beautiful things with OSM data."
         >
          <Heading textColor="secondary" size={1} caps fit>
            edits to openstreetmap
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            are edits to all of these maps
          </Heading>
        </Slide>


        <Slide bgColor="primary"
          notes="I also want to take a second to talk about this affiliated group called the Humanitarian OpenStreetMap Team (or HOT OSM). HOT OSM interfaces between OpenStreetMappers around the world and established humanitarian institutions like the Red Cross, Doctors without Borders, and the United Nations."
        >
          <Image src={images.hotLogo.replace('/','')} margin="0px" width="100%" height="100%"/>
        </Slide>

        <Slide bgColor="primary" bgFill={true} bgImage={images.taskManager.replace('/','')}
          notes="This is an example of what that looks like. This is the task manager, a tool developed by HOT to coordinate these large-scale remote mapping efforts. Tasks are determined by the needs of Humanitarian organizations and focus on a specific area and mapping need. Tiles get generated and volunteer mappers around the world can log into the task manager, choose a tile and begin working. Choosing a tile lets other mappers know that you are working on it, so it divides up the work fairly efficiently. The task we are looking at was from the Nepal response. It is focused on the region just east of Kathmandu. On the left, there is a place for instructions and links to updated satellite imagery taken just after the earthquake, and asks that people map destroyed buildings and encampments where people are living (because buildings were destroyed or unlivable)."
        >
        </Slide>

        <Slide transition={["slide"]} bgColor="white" bgFill={true} bgImage={images.IDPCamps.replace('/','')}
          notes="This is a graphic that was published by the New York Times a few days after the earthquake showing encampments in Kathmandu that had been mapped in OpenStreetMap through these distributed tasks."
        >
        </Slide>


        <Slide bgImage={images.nepalRescueMap.replace("/", "")} bgDarken={0.75}
          notes="This is a powerful thing. HOT OSM brings people from around the world together to help each other out."
        >
          <Heading size={1} caps fit textColor="tertiary">
            saving lives
          </Heading>
          <Heading size={1} caps fit textColor="primary">
            with open data
          </Heading>
        </Slide>


        <Slide bgColor="quinary"
          notes="So all of that was to explain why I think it's worth taking some time to learn and participate in OpenStreetMap. So now we'll get to editing OpenStreetMap."
        >
          <Heading size={1} fit caps textColor="secondary">
            sounds great!
          </Heading>
          <Heading size={2} fit caps textColor="primary">
            Where do we start?
          </Heading>
        </Slide>

        <Slide bgColor="primary"
          notes="So how do we edit OpenStreetMap? There are currently two main editing interfaces for OSM: iD and JOSM. There a few others as well, but these are the popular choices. They are very different, and I've personally come to really like both. They each have their strengths."
        >
          <Heading size={1} fit caps textColor="secondary">
            editors for OpenStreetMap
          </Heading>
          <Heading size={1} caps fill textColor="quaternary">iD</Heading>
          <Heading size={1} caps fill textColor="quaternary">JOSM</Heading>
        </Slide>


        <Slide transitionDuration={1000} bgColor="primary" bgImage={images.iDEditor.replace("/", "")} bgDarken={0.60}
          notes="At the heart of iD is simplicity. It is great for quick edits - it works from a web browser so there is nothing to install. It also abstracts away some of the underlying complexities of OpenStreetMap data."
        >
          <Heading size={1} bold fit caps textColor="primary">
            iD editor
          </Heading>
          <Heading size={2} caps fill textColor="quinary">simple</Heading>
          <Heading size={2} caps fill textColor="quinary">browser-based</Heading>
          <Heading size={2} caps fill textColor="quinary">streamlined interface</Heading>
        </Slide>

        <Slide transitionDuration={1000} bgColor="primary" bgImage={images.JOSMEditor.replace("/", "")} bgDarken={0.60}
          notes="JOSM is the more advanced editor. It is a desktop client so it has more computing resources. It also exposes the raw OSM data model more directly, so the interface is not quite as beautiful or simple but this means it can do more powerful things, like editing multiple features at once or easily adjusting the background imagery."
        >
          <Heading size={1} bold fit caps textColor="primary">
            JOSM editor
          </Heading>
          <Heading size={2} caps fill textColor="quinary">advanced</Heading>
          <Heading size={2} caps fill textColor="quinary">desktop client</Heading>
          <Heading size={2} caps fill textColor="quinary">customizable</Heading>
          <Heading size={2} caps fill textColor="quinary">direct interface to data</Heading>
        </Slide>


        <Slide bgColor="secondary" bgImage={images.espressoPour.replace("/", "")} bgDarken={0.75}
          notes="So if we're going to edit OpenStreetMap, we need to know a bit about how OpenStreetMap describes things that exist in the world. These are the types of objects we'll be working with when we edit OpenStreetMap. The four basic elements of OpenStreetMap are [click]..."
        >
          <Heading size={1} fit caps textColor="primary">
            OpenStreetMap data
          </Heading>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  nodes
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (points)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  ways
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (lines & polygons)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  relations
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (collections)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  tags
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (key=value pairs)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
        </Slide>

        <Slide bgColor="primary"
          notes="Nodes are individual points. [click] They are used to represent points of interest [click] like businesses, churches, bus stops, stop lights...."
        >
          <Heading size={1} fit caps textColor="quaternary"
            >
            nodes (points)
          </Heading>
          <Appear>
            <Heading size={2} caps fill textColor="secondary">points of interest</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">restaurants, restrooms, monuments, coffee shops, trees, transit stops, fire hydrants</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary"
          notes="Then there are ways, which are akin to lines and polygons in traditional GIS. [click] These are some examples of things that lines are often used to represent. [click] and here are some polygon examples: administrative boundaries like states and countries, land use can be used to indicate that this is a residential area or commercial area or a park, and then things like buildings are also ways."
        >
          <Heading size={1} fit caps textColor="quaternary"
            >
            ways (lines & polygons)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">lines - roads, rivers, fences, paths</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">polygons - administrative boundaries (states, countries), land use (residential, commercial, forest), buildings</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary"
          notes="Relations are a little more advanced, and you don't have to worry too much about them if you are starting out with OSM, but you might see references to relations and they are important for advanced usage. [click] They are used to link things in OSM together, like a highway that goes across the country might be broken up into smaller segments but they are all part of the same relation. [click] They are also used for capturing information like street intersections where right turns are not allowed."
        >
          <Heading size={1} fit caps textColor="quaternary">
            relations (collections)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">for grouping very long routes into managable segments</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">also used to encode things like turn restrictions</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary"
          notes="And then tags. These are key-value pairs. [click] that get attached to the things in OpenStreetMap that we just talked about - nodes, ways and relations. [click] And tags are what describe what something is. Tags tell us that a node *is* a restaurant, and it *is* named McDonalds (eww). And tags are used to say that a way *is* a street, and it's named Guadalupe. [click] Tags can be anything, you can put anything in as a key or a value, but part of learning OSM is learning about the conventions that are used. There are specific keys and values that are used to represent things, and those are what you should be using. I'll show you where to find that information."
        >
          <Heading size={1} fit caps textColor="quaternary">
            tags (key=value pairs)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">can be attached to any OpenStreetMap object</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">describe what something is</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">free-form, but conventions exist and <S type="bold" textColor="tertiary"> should </S> be used</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="secondary"
          notes="Let's look at a some real-world examples of how these fit together."
        >
          <Heading size={1} caps fit textColor="primary">
            Let's see some examples
          </Heading>
        </Slide>

        <Slide bgColor="secondary"
          notes="This is a node that represents a drinking fountain. The key-value tag that describes a drinking fountain in osm is amenity=drinking_water"
        >
          <Image src={images.drinkingFountain.replace("/", "")} margin="0px" width="100%" height="100%"/>
        </Slide>

        <Slide bgColor="secondary"
          notes="This is a node that represents a bathroom."
        >
          <Image src={images.toilets.replace("/", "")} margin="0px" width="100%" height="100%"/>
        </Slide>

        <Slide bgColor="secondary"
          notes="This is bike shop. Also a node, and it has a few tags to describe other information like opening hours."
        >
          <Image src={images.bikeShop.replace("/", "")} margin="0px" width="100%" height="100%"/>
        </Slide>

        <Slide bgColor="secondary"
          notes="This is a hotel downtown. This is a little different because it is represented as a way instead of just a node like the bike shop was. Both are valid in OSM. Another common thing in OSM is buildings with separate nodes on top of them to contain business information - this is slightly preferred because it can represent multiple businesses within a single building."
        >
          <Image src={images.hotel.replace("/", "")} margin="0px" width="100%" height="100%"/>
        </Slide>

        <Slide bgColor="secondary"
          notes="This a section of waller creek downtown, also represented as a way, but it is not closed like the building was. Like a line in traditional GIS."
        >
          <Image src={images.creek.replace("/", "")} margin="0px" width="100%" height="100%"/>
        </Slide>

        <Slide bgColor="primary"
          notes="So that's what the OpenStreetMap looks like from the inside. Now comes the hands on workshop part. Let's open up our JOSMs and get cracking. We'll mainly follow mapbox's mapping with JOSM page - it is a great starting point and reference. There is also the learnosm.org 'Getting Started with JOSM' tutorial if you want to look at something more thorough. And finally I added a link the OSM wiki is the primary source of institutional OSM knowledge. Learning to navigate the wiki is a big part of learning OSM since it is the best resource for finding out things like 'which tag should I use for X?'"
        >
          <Heading size={1} fit caps textColor="secondary">
            Workshop Time
          </Heading>
          <Appear>
            <Layout>
              <Fill>
                <Link href="https://github.com/mapbox/mapping/wiki/Mapping%20with%20JOSM">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                   github.com/mapbox/mapping/wiki/Mapping%20with%20JOSM 
                  </Heading>
                </Link>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Link href="http://learnosm.org/en/josm/start-josm/">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                    learnosm.org/en/josm/start-josm/
                  </Heading>
                </Link>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Link href="http://wiki.openstreetmap.org/wiki/Map_Features">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                    wiki.openstreetmap.org
                  </Heading>
                </Link>
              </Fill>
            </Layout>
          </Appear>
        </Slide>

        <Slide bgColor="quaternary"
          notes="Thank you very much for listening! I hope this was helpful."
        >
          <Heading size={1} fit caps textColor="primary">
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
