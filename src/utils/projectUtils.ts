import { Options } from "./types";


export const generateProjectCards = (projects: string[], options: Options) => {
  const {
    cardClass,
    titleClass,
  } = options;

  return projects
    .map(project => `
      <a target="_blank" href="/projects/${project}"
         class="${cardClass} bg-gray-800 rounded-lg overflow-hidden hover:transform hover:translate-y-[-10px] transition-transform duration-300">
        <div class="p-6">
          <h2 class="${titleClass}">${project}</h2>
        </div>
      </a>
    `)
    .join('');
};