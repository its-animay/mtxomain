import React from "react";

function TeamPage() {
  const teamMembers = [
    {
      name: "Alice Smith",
      role: "CEO & Founder",
      photo: "https://random.imagecdn.app/200/200",
      bio: "Passionate leader with 10+ years of experience in tech startups.",
      social: {
        twitter: "https://twitter.com/alice_smith",
        linkedin: "https://www.linkedin.com/in/alice-smith/",
      },
    },
    {
      name: "Bob Johnson",
      role: "CTO",
      photo: "https://random.imagecdn.app/200/201",
      bio: "Technical mastermind with a knack for building innovative solutions.",
      social: {
        twitter: "https://twitter.com/bob_johnson",
        github: "https://github.com/bob-johnson",
      },
    },
    {
      name: "Charlie Garcia",
      role: "Head of Design",
      photo: "https://random.imagecdn.app/200/202",
      bio: "Creative genius who brings brands and products to life with beautiful visuals.",
      social: {
        instagram: "https://www.instagram.com/charlie_garcia/",
        dribbble: "https://dribbble.com/charlie-garcia",
      },
    },
  ];

  return (
    <div class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">MTX-O leadership</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Mtx-o prides itself not only on award-winning Services, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 class="text-2xl">Animay Tiwari</h4>
                    <span class="block text-sm text-gray-500">Data Scientist</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="man" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Shatakshi Dwivedi</h4>
                    <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Anabelle Doe</h4>
                    <span class="block text-sm text-gray-500">Chief Technical Officer</span>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default TeamPage;
