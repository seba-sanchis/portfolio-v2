"use server";

import { request, gql } from "graphql-request";
import {
  About,
  Certification,
  Education,
  Experience,
  Hero,
  Project,
  Skill,
  Social,
} from "@/types";

const { HYGRAPH_ENDPOINT } = process.env;

export async function getAbout() {
  const query = gql`
    query Abouts {
      abouts {
        id
        description
        lightImage {
          url
        }
        darkImage {
          url
        }
      }
    }
  `;

  const result: About = await request(HYGRAPH_ENDPOINT!, query);

  return result.abouts[0];
}

export async function getCertifications() {
  const query = gql`
    query Certifications {
      certifications {
        id
        title
        company
        date
        credential
        lightImage {
          url
        }
        darkImage {
          url
        }
      }
    }
  `;

  const result: Certification = await request(HYGRAPH_ENDPOINT!, query);

  return result.certifications;
}

export async function getEducations() {
  const query = gql`
    query Educations {
      educations {
        id
        title
        school
        date
        description
        lightImage {
          url
        }
        darkImage {
          url
        }
      }
    }
  `;

  const result: Education = await request(HYGRAPH_ENDPOINT!, query);

  return result.educations;
}

export async function getExperience() {
  const query = gql`
    query Experiences {
      experiences {
        id
        company
        position
        date
        description
      }
    }
  `;

  const result: Experience = await request(HYGRAPH_ENDPOINT!, query);

  return result.experiences[0];
}

export async function getHero() {
  const query = gql`
    query Heroes {
      heroes {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;

  const result: Hero = await request(HYGRAPH_ENDPOINT!, query);

  return result.heroes[0];
}

export async function getProjects() {
  const query = gql`
    query Projects {
      projects {
        id
        title
        description
        image {
          url
        }
        tags
        repository
        application
      }
    }
  `;

  const result: Project = await request(HYGRAPH_ENDPOINT!, query);

  return result.projects;
}

export async function getSkills() {
  const query = gql`
    query Skills {
      skills(first: 24) {
        id
        title
        category
      }
    }
  `;

  const result: Skill = await request(HYGRAPH_ENDPOINT!, query);

  const frontend = result.skills.filter((item) => item.category === "frontend");
  const backend = result.skills.filter((item) => item.category === "backend");
  const uiUx = result.skills.filter((item) => item.category === "uiUx");

  return { frontend, backend, uiUx };
}

export async function getSocial() {
  const query = gql`
    query Socials {
      socials {
        id
        name
        url
      }
    }
  `;

  const result: Social = await request(HYGRAPH_ENDPOINT!, query);

  return result.socials;
}
