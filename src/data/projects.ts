type Project = {
  id: number,
  title: string,
  description: string,
  bannerImage: string,
  images: string[]
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Specialty and Custom Furniture",
    description:
      "Furniture in a home is always an eye-catcher. We can build furniture that is integrated or a movable unit that can be used for whatever you see fit. We work with clients to design their dream and make it a reality. We can fit any space and any aesthetic.",
    bannerImage: "projectPhotos/furniture/furniture_2.jpg",
    images: [
      "projectPhotos/furniture/furniture_1.jpg",
      "projectPhotos/furniture/furniture_2.jpg",
      "projectPhotos/furniture/furniture_3.jpg",
      "projectPhotos/furniture/furniture_4.jpg",
      "projectPhotos/furniture/furniture_5.jpg",
      "projectPhotos/furniture/furniture_6.jpg",
      "projectPhotos/furniture/furniture_7.jpg",
      "projectPhotos/furniture/furniture_8.jpg",
      "projectPhotos/furniture/furniture_9.jpg",
      "projectPhotos/furniture/furniture_10.jpg",
      "projectPhotos/furniture/furniture_11.jpg",
      "projectPhotos/furniture/furniture_12.jpg",
      "projectPhotos/furniture/furniture_13.jpg",
      "projectPhotos/furniture/furniture_14.jpg",
      "projectPhotos/furniture/furniture_15.jpg",
      "projectPhotos/furniture/furniture_16.jpg",
      "projectPhotos/furniture/furniture_17.jpg",
    ],
  },
  {
    id: 2,
    title: "Ridge at 38",
    description:
      "This project was commissioned by the city of Wheat Ridge in order to update the look of 38th Avenue. The goal was to design and fabricate a sign that would reimagine the new look that Wheat Ridge had decided. The sign was made of full stainless steel construction that was fully tig welded together. The powder coat was made to withstand the elements and years of UV light to ensure the sign stays vibrant for years to come.",
    bannerImage: "projectPhotos/ridgeAt38/ridge_at_38_1.2.jpg",
    images: [
      "projectPhotos/ridgeAt38/ridge_at_38_1.2.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_1.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_2.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_3.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_4.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_5.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_6.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_7.jpg",
      "projectPhotos/ridgeAt38/ridge_at_38_8.jpg",
    ],
  },
  {
    id: 3,
    title: "Custom Fireplaces",
    description:
      "Fireplaces are often the center piece of a room. We work with clients to design not only a center piece but something that is fully custom to fit the home and individual needs.",
    bannerImage: "projectPhotos/fireplaces/fireplace_3.jpg",
    images: [
      "projectPhotos/fireplaces/fireplace_1.jpg",
      "projectPhotos/fireplaces/fireplace_2.jpg",
      "projectPhotos/fireplaces/fireplace_3.jpg",
      "projectPhotos/fireplaces/fireplace_4.jpg",
      "projectPhotos/fireplaces/fireplace_5.jpg",
      "projectPhotos/fireplaces/fireplace_6.jpg",
      "projectPhotos/fireplaces/fireplace_7.jpg",
      "projectPhotos/fireplaces/fireplace_8.jpg",
      "projectPhotos/fireplaces/fireplace_9.jpg",
      "projectPhotos/fireplaces/fireplace_10.jpg",
      "projectPhotos/fireplaces/fireplace_11.jpg",
      "projectPhotos/fireplaces/fireplace_12.jpg",
      "projectPhotos/fireplaces/fireplace_13.jpg",
    ],
  },
  {
    id: 4,
    title: "Railing/Hand Rails",
    description:
      "Custom railing and hand railing can give any home or commercial building a polished look with a unique look to fit the client. From simple stairs to curving pathways, we can help design, build, and install a railing to meet code and give a building the finishing touch.",
    bannerImage: "projectPhotos/railing/railing_2.jpg",
    images: [
      "projectPhotos/railing/railing_1.jpg",
      "projectPhotos/railing/railing_2.jpg",
      "projectPhotos/railing/railing_3.jpg",
      "projectPhotos/railing/railing_4.jpg",
      "projectPhotos/railing/railing_5.jpg",
      "projectPhotos/railing/railing_6.jpg",
      "projectPhotos/railing/railing_7.jpg",
      "projectPhotos/railing/railing_8.jpg",
      "projectPhotos/railing/railing_9.jpg",
      "projectPhotos/railing/railing_10.jpg",
      "projectPhotos/railing/railing_11.jpg",
      "projectPhotos/railing/railing_12.jpg",
    ],
  },
  {
    id: 5,
    title: "Stairs",
    description:
      "Looking to renovate your home, or in the middle of building your dream house? We are able to do installations of any size, including stairs. Reach out to us to learn more.",
    bannerImage: "projectPhotos/stairs/stairs_1.jpg",
    images: [
      "projectPhotos/stairs/stairs_1.jpg",
      "projectPhotos/stairs/stairs_2.jpg",
      "projectPhotos/stairs/stairs_3.jpg",
      "projectPhotos/stairs/stairs_4.jpg",
      "projectPhotos/stairs/stairs_5.jpg",
    ],
  },
  {
    id: 6,
    title: "Cabinets",
    description:
      "We pride ourselves on our ability to do unique finishes on steel, making a piece even more custom and one of a kind. This black oxide patina on these cabinets are a reaction that physically changes the outer surface of the steel allowing for a depth of feel not possible with paint. The patina gives the detail of the steel to be seen rather than covered and hidden.",
    bannerImage: "projectPhotos/cabinets/cabinets_1.jpg",
    images: [
      "projectPhotos/cabinets/cabinets_1.jpg",
      "projectPhotos/cabinets/cabinets_2.jpg",
      "projectPhotos/cabinets/cabinets_3.jpg",
    ],
  },
  {
    id: 7,
    title: "Lighting",
    description:
      "Lighting in your home should be functional, but it can also be creative and a piece of art. Let us know what you are looking for and we can help you brighten your space.",
    bannerImage: "projectPhotos/lighting/lighting_1.jpg",
    images: [
      "projectPhotos/lighting/lighting_1.jpg",
      "projectPhotos/lighting/lighting_2.jpg",
    ],
  },
  {
    id: 8,
    title: "Planter Boxes",
    description:
      "From simple designs to water features, our planter boxes can add nature to any home, garden, or business with artistic flare. Built-in water features can bring the soothing sound of running water to a back yard or a simple box design can help fit custom spaces.",
    bannerImage: "projectPhotos/planters/planter_1.jpg",
    images: [
      "projectPhotos/planters/planter_1.jpg",
      "projectPhotos/planters/planter_2.jpg",
      "projectPhotos/planters/planter_3.jpg",
      "projectPhotos/planters/planter_4.jpg",
    ],
  },
  {
    id: 9,
    title: "Ornamental Covers",
    description:
      "Ornamental covers are designed to hide an object without taking away from the natural lines of an area. The covers shown are to cover up air conditioning units, but covers can be used for truly anything, indoors or outside.",
    bannerImage: "projectPhotos/ornamentalCovers/ornamental_covers_1.jpg",
    images: [
      "projectPhotos/ornamentalCovers/ornamental_covers_1.jpg",
      "projectPhotos/ornamentalCovers/ornamental_covers_2.jpg",
    ],
  },
];

export default allProjects;
