import { Options } from "./types";


export const generateProjectCards = (projects: string[], options?: Options) => {

  const {
    cardClass,
    titleClass,
  } = options ?? {};

  return projects
    .map(project => `
          <a target="_blank" href="/projects/${project}" class="${cardClass} card-hover group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl">
          <div class="image-hover relative h-64 rounded-t-2xl overflow-hidden">
            <img src="/assets/images/${project}.png" alt="Project 1" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <span class="absolute top-4 right-4 bg-white/10 backdrop-blur text-sm px-3 py-1 rounded-full text-white">
              Web Design
            </span>
          </div>
          <div class="p-6">
            <h3 class="${titleClass} text-xl font-bold mb-2">${project}</h3>
          </div>
        </a>
    `)
    .join('');
};