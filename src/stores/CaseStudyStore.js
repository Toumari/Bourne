import { defineStore } from "pinia";

export const useCaseStudyStore = defineStore("caseStudy", {
  state: () => ({
    caseStudies: [
      {
        id: 1,
        title: "Johaan Svornikan",
        days: [
          {
            title: "Day 1: Arrival and Acclimatization",
            description:
              "Johaan arrives at the ski resort, greeted by crisp mountain air and breathtaking scenery. After settling into his cozy accommodation, he spends the day exploring the village and getting his equipment fitted. A delicious welcome dinner awaits him in the evening, where he can meet his fellow adventurers and guides.",
          },
          {
            title: "Day 2: Gentle Slopes and Scenic Vistas",
            description:
              "Johaan starts his day with a hearty breakfast, fueling him for his first day on the slopes. The morning session focuses on gentle beginner slopes, allowing him to adjust to his skis and the mountain environment. The afternoon offers breathtaking scenic rides with his group, soaking in the panoramic views and learning about the local area from the guides.",
          },
          {
            title: "Day 3: Building Confidence and New Skills",
            description:
              "Feeling more comfortable on his skis, Johaan tackles slightly more challenging slopes with his group. The instructors provide personalized coaching, helping him refine his technique and build confidence. The afternoon offers optional activities like snowshoeing or a relaxing soak in the hot springs, allowing Johaan to choose his pace of adventure.",
          },
          {
            title: "Day 4: Reaching New Heights (Literally!)",
            description:
              "Johaan conquers his first peak! The morning session involves a gradual ascent to a higher vantage point, rewarding him with stunning panoramic vistas. The afternoon offers a choice between a thrilling off-piste adventure with experienced guides (weather permitting) or a leisurely afternoon exploring the charming mountain villages nearby.",
          },
          {
            title: "Day 5: The Grand Finale and Fond Farewells",
            description:
              "Johaan enjoys a final day carving his way down the slopes, putting his newfound skills to the test. The afternoon is dedicated to packing up and enjoying a celebratory farewell dinner with his fellow adventurers and guides. Johaan departs with a heart full of memories and a renewed appreciation for the beauty of the mountains.",
          },
        ],
        description:
          "Johaan took on the world's most challenging slopes, and came out on top. He's a true inspiration to us all.",
        img: "https://images.unsplash.com/photo-1611002214733-84580aaa1b46?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Case Study 2",
        description: "This is the second case study",
        days: [
          {
            title: "Day 1: Arrival and Deep Dive",
            description:
              "Jasmine, with a sense of wonder in her eyes, arrives at the Amazon rainforest. The humidity hits her like a warm blanket, and the cacophony of exotic bird calls fills the air. After a warm welcome from the local guides, she embarks on a short boat ride along the mighty Amazon river, spotting playful river dolphins and learning about the vital role the river plays in the rainforest ecosystem.",
          },
          {
            title: "Day 2: Unveiling the Rainforest Canopy",
            description:
              "Jasmine wakes up to the vibrant symphony of birdsong. After a delicious breakfast of local fruits and hearty stews, she ventures into the rainforest with her guide. They ascend a towering observation tower, offering breathtaking views of the endless green canopy. The guide points out fascinating insects, camouflaged creatures, and the intricate network of plants and animals that thrive in this verdant paradise.",
          },
          {
            title: "Day 3: Exploring the Secrets of the Undergrowth",
            description:
              "Today, Jasmine dons sturdy boots and prepares for a trek through the dense rainforest undergrowth. Her guide leads her on winding paths, revealing medicinal plants, towering trees with buttress roots, and fascinating creatures like leafcutter ants and brightly colored frogs. Jasmine learns about the delicate balance of the rainforest floor and the vital role it plays in the overall health of the ecosystem.",
          },
          {
            title: "Day 4: Encountering Indigenous Culture",
            description:
              "A special day awaits Jasmine! After a short boat ride, she arrives at a village of an indigenous tribe. They are warmly welcomed with traditional music and demonstrations of their way of life. Jasmine learns about their deep connection to the rainforest, their hunting and gathering techniques, and their intricate handicrafts. This cultural exchange fosters a deeper understanding and appreciation for the rainforest's indigenous people.",
          },
          {
            title: "Day 5: Farewell to the Amazon, Memories Etched Forever",
            description:
              "With a heavy heart but a treasure trove of memories, Jasmine prepares to depart from the Amazon. She enjoys a final boat ride, reflecting on the incredible sights, sounds, and experiences of the past few days. Before leaving, she participates in a tree-planting ceremony, contributing to the future of this precious ecosystem. Jasmine departs, forever changed by the magic of the Amazon rainforest.",
          },
        ],
        img: "https://via.placeholder.com/150",
      },
    ],
  }),
  getters: {
    getCaseStudyById: (state) => (id) => {
      return state.caseStudies.find((caseStudy) => caseStudy.id === id);
    },
  },
});
