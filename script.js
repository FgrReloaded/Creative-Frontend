function createProjectCards() {
  const projectsGrid = document.querySelector(".project-lists");

  projects.forEach((project) => {
    const card = generateCard(project);
    projectsGrid.innerHTML += card;
  });
}

const generateCard = (project) => {
  return `
  <a target="_blank" href="${project.path}" class="card-hover group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl">
 <div class="image-hover relative h-64 rounded-t-2xl overflow-hidden">
   <img loading='lazy' src="${project.thumbnail}" alt="${project.id}" class="w-full h-full object-cover">
   <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
   <span class="absolute top-4 right-4 bg-blue-500/50 backdrop-blur text-sm px-3 py-1 rounded-full text-white">
     Web Design
   </span>
 </div>
 <div class="p-6">
   <h3 class="text-xl font-bold mb-2">${project.title}</h3>
    <p class="text-gray-600 mb-4">${project.description}</p>
    <div class="flex justify-center gap-4 flex-wrap ">
    ${project.technologies
      .map(
        (tech) =>
          `<span class="bg-gray-200/50 px-4 py-1 rounded-full">${tech}</span>`,
      )
      .join("")}
   </div>
 </div>
</a>
`;
};

document.addEventListener("DOMContentLoaded", createProjectCards);
