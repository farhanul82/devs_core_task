const routes = [
  { id: 2, path: "/students", title: "Student" },
  { id: 3, path: "/associates", title: "Associate" },
  {
    id: 6,
    path: "/members",
    title: "Member",
    subNav: [
      { id: 2, path: "/members/applicants", title: "Applicants" },
      {
        id: 3,
        path: "/members/application-review",
        title: "Application-review",
      },
      { id: 4, path: "/members/paid", title: "Paid" },
      { id: 4, path: "/members/exam", title: "Exam" },
      { id: 5, path: "/members/interview", title: "Interview" },
      {
        id: 5,
        path: "/members/Eligible-for-membership",
        title: "Eligible for membership",
      },
    ],
  },
  { id: 4, path: "/8-year", title: "8-Year" },
  { id: 5, path: "/fellow", title: "Fellow" },
];

const Nationality_options = [
  { id: 1, value: "American", label: "American" },
  { id: 2, value: "Canadian", label: "Canadian" },
  { id: 3, value: "British", label: "British" },
];

export { routes, Nationality_options };
