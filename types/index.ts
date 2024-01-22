export interface About {
  abouts: [
    {
      description: string[];
      lightImage: { url: string };
      darkImage: { url: string };
    }
  ];
}

export interface Certification {
  certifications: [
    {
      title: string;
      company: string;
      date: string;
      credential: string;
      lightImage: { url: string };
      darkImage: { url: string };
    }
  ];
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}

export interface Education {
  educations: [
    {
      title: string;
      school: string;
      date: string;
      description: string[];
      lightImage: { url: string };
      darkImage: { url: string };
    }
  ];
}

export interface Experience {
  experiences: [
    {
      company: string;
      position: string;
      date: string;
      description: string[];
    }
  ];
}

export interface Hero {
  heroes: [
    {
      title: string;
      description: string[];
      image: { url: string };
    }
  ];
}

export interface Project {
  projects: [
    {
      title: string;
      description: string;
      image: { url: string };
      tags: string[];
      repository: string;
      application: string;
    }
  ];
}

export interface Skill {
  skills: [
    {
      title: string;
      category: string;
    }
  ];
}

export interface Social {
  socials: [
    {
      name: string;
      url: string;
    }
  ];
}
