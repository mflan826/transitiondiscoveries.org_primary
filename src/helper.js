export function getImage(imageName) {
  return process.env.REACT_APP_S3_URL + "images/static/" + imageName;
}
export function getString(imageName) {
  return imageName.toString();
}

export function getPageVideoUrl(pageSlug, videoName) {
  return process.env.REACT_APP_S3_URL +
    pageSlug +
    "/videos/" +
    videoName;
}

export function getIndicatorAudioUrl(indicatorSlug, audioName) {
  return process.env.REACT_APP_S3_URL +
  "indicators/" +
  indicatorSlug +
  "/audio/" +
  audioName;
}

export function getSubIndicatorAudioUrl(
  indicatorName,
  SubindicatorName,
  audioName
) {
  return (
    process.env.REACT_APP_S3_URL +
    "indicators/" +
    indicatorName +
    "/" +
    SubindicatorName +
    "/audio/" +
    audioName
  );
}

export function getIndicatorVideoUrl(indicatorSlug, videoName) {
    return process.env.REACT_APP_S3_URL +
    "indicators/" +
    indicatorSlug +
    "/videos/" +
    videoName;
}

export function getSubIndicatorVideoUrl(
  indicatorName,
  SubindicatorName,
  videoName
) {
  return (
    process.env.REACT_APP_S3_URL +
    "indicators/" +
    indicatorName +
    "/" +
    SubindicatorName +
    "/videos/" +
    videoName
  );
}

export function getPageImage(pageName, imageName) {
  return process.env.REACT_APP_S3_URL + pageName + "/images/" + imageName;
}

export function getStyle(pageName, imageName) {
  // https://transitiondiscoveries.s3.amazonaws.com/images/static/
  return {
    backgroundImage:
      "url(" +
      (process.env.REACT_APP_S3_URL + pageName + "/images/" + imageName) +
      ")",
  };
}

export function getUrl$(pageName, audio) {
  return process.env.REACT_APP_S3_URL + pageName + "/audio/" + audio 
}

export function getSubIndicatorsImage(
  indicatorName,
  SubindicatorName,
  imageName
) {
  return (
    process.env.REACT_APP_S3_URL +
    "indicators/" +
    indicatorName +
    "/" +
    SubindicatorName +
    "/images/" +
    imageName
  );
}
export function getTeamImage(imageName, title = false) {
  if (!title) {
    return process.env.REACT_APP_S3_URL + "Team/images/" + imageName;
  } else {
    return process.env.REACT_APP_S3_URL + title;
  }
}
export function getPartnersImage(imageName) {
  return process.env.REACT_APP_S3_URL + "partners/images/" + imageName;
}
export function getHomeImage(imageName) {
  return process.env.REACT_APP_S3_URL + "Home/images/" + imageName;
}
export function getFAQsImage(imageName) {
  return process.env.REACT_APP_S3_URL + "FAQs/images/" + imageName;
}
export function getProjectsImage(imageName, slug) {
  if (slug) {
    return (
      process.env.REACT_APP_S3_URL + "Projects/" + slug + "/images/" + imageName
    );
  }
  return process.env.REACT_APP_S3_URL + "Projects/images/" + imageName;
}
export function getIndicatorImage(imageName, indicatorSlug = null) {
  if(indicatorSlug){
    return process.env.REACT_APP_S3_URL + "indicators/" + indicatorSlug + "/images/" + imageName;
  }

  return process.env.REACT_APP_S3_URL + "indicators/images/" + imageName;
}

export function getSubIndicatorImage(imageName, slug) {
  return (
    process.env.REACT_APP_S3_URL + "indicators/" + slug + "/images/" + imageName
  );
}

export function getIndicators() {
  return [
    { id: 1, title: "Transition Planning" },
    { id: 2, title: "Youth Development" },
    { id: 3, title: "Person and Family Directed Planning" },
    { id: 4, title: "Family Engagement" },
    { id: 5, title: "Relationships" },
    { id: 6, title: "Independent Living and Community Engagement" },
    { id: 7, title: "Cross Agency Collaboration" },
    { id: 8, title: "Employment" },
    { id: 9, title: "Post Secondary Educations" },
  ];
}

export function getSubIndicators() {
  return [
    //  Transition Planning
    {
      id: 1,
      title: "Career Exploration Planning and Preparation",
      indicator_id: 1,
    },
    { id: 2, title: "Post Secondary and College Planning", indicator_id: 1 },
    { id: 3, title: "Independent Community Living", indicator_id: 1 },
    { id: 4, title: "Significant Role of School Personnel", indicator_id: 1 },

    //  Youth Development
    { id: 5, title: "Self-Awareness", indicator_id: 2 },
    { id: 6, title: "Disability Awareness", indicator_id: 2 },
    { id: 7, title: "Independent Living Skill Development", indicator_id: 2 },
    { id: 8, title: "Self-Determination Skill Development", indicator_id: 2 },
    { id: 9, title: "Self-Management Skill Development", indicator_id: 2 },
    { id: 10, title: "Leadership Skill Development", indicator_id: 2 },
    { id: 11, title: "Youth Engagement in Transition", indicator_id: 2 },
    { id: 12, title: "Significant Role of Adult", indicator_id: 2 },

    //  Family Directed
    {
      id: 13,
      title: "Authentic Person and Family Centered Planning Practices",
      indicator_id: 3,
    },
    {
      id: 14,
      title: "Person and Family Centered Program Design",
      indicator_id: 3,
    },

    //  Family Engagement
    {
      id: 15,
      title: "Family Engagement in Transition Planning",
      indicator_id: 4,
    },
    { id: 16, title: "Family Information Sharing Activities", indicator_id: 4 },
    { id: 17, title: "Peer to Peer Family Support", indicator_id: 4 },
    { id: 18, title: "Family Respite", indicator_id: 4 },

    // Relationships
    { id: 19, title: "Friendship", indicator_id: 5 },
    { id: 20, title: "Sense of Belonging", indicator_id: 5 },
    { id: 21, title: "Social Skills Development", indicator_id: 5 },
    { id: 22, title: "Anti-Bullying Efforts", indicator_id: 5 },

    // Independent Living and Community Engagement
    { id: 23, title: "Independent Living Skills Development", indicator_id: 6 },
    {
      id: 24,
      title: "Planning for Future Living Arrangements",
      indicator_id: 6,
    },
    { id: 25, title: "Travel and Transportation Skills", indicator_id: 6 },
    { id: 26, title: "Recreation and Leisure", indicator_id: 6 },
    { id: 27, title: "Community Based Experiences", indicator_id: 6 },
    { id: 28, title: "Faith Based Experiences", indicator_id: 6 },
    { id: 29, title: "Civic Engagement", indicator_id: 6 },
    { id: 30, title: "Mental Health Supports", indicator_id: 6 },

    //  Cross Agency Collaboration
    { id: 31, title: "Agencies in Schools", indicator_id: 7 },
    { id: 32, title: "Transition Staffings", indicator_id: 7 },
    { id: 33, title: "Transition Fairs", indicator_id: 7 },
    { id: 34, title: "Transition Conferences", indicator_id: 7 },
    { id: 35, title: "Employment Expos", indicator_id: 7 },
    {
      id: 36,
      title: "Community Agency Nights about Employment",
      indicator_id: 7,
    },
    { id: 37, title: "Transition Coordinating Councils", indicator_id: 7 },

    // Employment
    { id: 38, title: "Career Development Classes", indicator_id: 8 },
    { id: 39, title: "Career Clubs", indicator_id: 8 },
    { id: 40, title: "Career and Technical Education", indicator_id: 8 },
    { id: 41, title: "Career Exploration", indicator_id: 8 },
    { id: 42, title: "Discovery Process", indicator_id: 8 },
    { id: 43, title: "Unpaid Work Experience", indicator_id: 8 },
    { id: 44, title: "Paid Work Experience", indicator_id: 8 },
    { id: 45, title: "OVR Services", indicator_id: 8 },
    { id: 46, title: "Job Coaching Serivces", indicator_id: 8 },
    { id: 47, title: "Summer Employment", indicator_id: 8 },
    { id: 48, title: "On-the-Job Training", indicator_id: 8 },
    { id: 49, title: "Employer Partnerships", indicator_id: 8 },
    { id: 50, title: "University Partnerships", indicator_id: 8 },

    // Post Secondary Educations
    { id: 51, title: "Pre-College Experience Programs", indicator_id: 9 },
    { id: 52, title: "College-Based Transition Programs", indicator_id: 9 },
    { id: 53, title: "Postsecondary Education Programs", indicator_id: 9 },
    {
      id: 54,
      title: "Postsecondary Career Training Programs",
      indicator_id: 9,
    },
  ];
}

export function getResourceTypes() {
  return [
    { id: 1, title: "Lesson Plan" },
    { id: 2, title: "Tool Sheet" },
    { id: 3, title: "Tip Sheet" },
    { id: 4, title: "Website" },
    { id: 5, title: "Presentation" },
    { id: 6, title: "Other" },
  ];
}

export function getPreemploymentTransitionServices() {
  return [
    { id: 1, title: "Job exploration" },
    { id: 2, title: "Work-based learning" },
    { id: 3, title: "Postsecondary education" },
    { id: 4, title: "Workplace readiness" },
    { id: 5, title: "Self-advocacy" },
  ];
}

export const formIamOption = [
  { value: "", title: "Select" },
  { value: "young-person", title: "Young Person (age 14-25)" },
  { value: "family-member", title: "Family Member" },
  { value: "professional", title: "Professional" },
];

export const formInterestsOption = [
  { value: "", title: "Select" },
  { value: 1, title: "Volunteering at an event" },
  { value: 2, title: "Sharing transition resources" },
  { value: 3, title: "Supporting families with my experience" },
  { value: 4, title: "Submitting my transition story as a blog post" },
  { value: 5, title: "Adding a(n) event(s) to the TD calendar" },
  { value: 6, title: "Partnering on a TD project" },
  { value: 7, title: "I have another idea!" },
];

export function formatDate(dateVal) {
  let date = new Date(dateVal);
  /*let month = date.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = months[month + 1];*/
  let formattedDate = date.toDateString();
  return formattedDate;
}
