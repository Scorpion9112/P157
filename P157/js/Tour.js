AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position , item.id);
      
      // Thumbnail Element
      const Thumbnail=this.createThumbnail(item);
      borderEl.appendChild(Thumbnail)
      // Title Text Element
      const TextEl =this.createText(position,item);
      borderEl.appendChild(TextEl);

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function(position , id) {
    const element = document.createElement('a-entity');
    element.setAttribute("geometry" , {primitive:"ring",radiusInner:9, radiusOuter:10});
    element.setAttribute("id", id);
    element.setAttribute("visible", true);
    element.setAttribute("position", position);
    element.setAttribute("material",{color:"#0077CC",opacity:1})
    return element;
  },

  createThumbnail: function(item){
    const element=document.createElement('a-entity')
    element.setAttribute("visible", true)
    element.setAttribute("geometry", {primitive:"circle", radius:9})
    element.setAttribute("material", {src:item.url})
    return element
  },

  createText: function(position,item){
   const element=document.createElement('a-entity');
   element.setAttribute("visivle", true);
   element.setAttribute("text",{value:item.title,font: "exo2bold",align: "center", width: 70,color: "#e65100",});
   const elementPosition= position;
   elementPosition.y = -20;
   element.setAttribute("position", elementPosition);
   return element
  }
});
