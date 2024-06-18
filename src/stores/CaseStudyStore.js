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

        img: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Case Study 3",
        description: "This is the third case study",
        image: "https://via.placeholder.com/150",
      },
    ],
  }),
  getters: {
    getCaseStudyById: (state) => (id) => {
      return state.caseStudies.find((caseStudy) => caseStudy.id === id);
    },
  },
});
